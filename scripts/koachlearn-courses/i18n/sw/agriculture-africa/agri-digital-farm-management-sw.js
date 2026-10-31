"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-digital-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KOBO = { name: "KoboToolbox (fomu za bure za kukusanya data zinazofanya kazi bila mtandao)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data (ODPC), Kenya", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (NDPC)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Tume ya Ulinzi wa Data, Ghana (Sheria ya Ulinzi wa Data, 2012, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: Ajira ya watoto katika kilimo", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-sw",
  lang: "sw",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Kusimamia Shamba kwa Data na Apps za Simu",
  skills: "Kuchagua app ya shamba au spreadsheet ya pamoja, Kuandaa rejista ya shamba na stoo ya pembejeo, Kuwalipa wafanyakazi kwa pesa za simu pamoja na kumbukumbu, Kulinda data ya shamba na ya wafanyakazi, Kumsimamia meneja wa shamba ukiwa mbali, Kutumia dashibodi ya kila wiki ya namba tano",
  outcome: "kuendesha shamba lako kwa simu yako: kuweka rejista moja ya mashamba, mifugo, kazi, wafanyakazi na stoo ya pembejeo, kuwalipa wafanyakazi kwa pesa za simu na kumbukumbu ya kila malipo, kupata ripoti ya kila siku kutoka kwa meneja wako unayoweza kuikagua, na kuangalia namba tano kila wiki ili kuamua hatua inayofuata.",
  about: [
    "Kozi hii ni ya wakulima wanaokua: una wafanyakazi, mashamba kadhaa au kundi la mifugo au kuku, na huenda unaishi mjini huku meneja akiendesha shamba. Inawafaa wakulima wadogo wa kibiashara, vijana wajasiriamali wa kilimo, wamiliki wa mashamba wanaoishi mbali kama Nairobi, Lagos, Accra au Dakar, na mameneja wa mashamba wanaowaripotia.",
    "Inaenda mbali zaidi ya kuweka kumbukumbu za msingi. Utachagua app ya kusimamia shamba au spreadsheet ya pamoja, utaandaa rejista ya mashamba, mifugo, shughuli na stoo ya pembejeo, utawalipa wafanyakazi kwa pesa za simu na kuweka kumbukumbu, utalinda data ya shamba na ya wafanyakazi, utaweka utaratibu wa ripoti za kila siku na meneja ambao unaweza kuukagua, na utatengeneza dashibodi ya kila wiki ya namba tano.",
    "Kozi hii haipendekezi app yoyote. Inakuonyesha sifa za kuangalia, ili uweze kupima app yoyote, au kujenga mfumo huo huo kwenye spreadsheet ya bure. Kiasi cha pesa ni mifano tu. Kila somo linaishia na kazi kwenye shamba lako mwenyewe; jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Kama hujawahi kuweka kumbukumbu za shamba, anza na kozi \"Data na Teknolojia katika Kilimo\"."
  ],
  finalTask: "Tengeneza dashibodi ya kila wiki kwa shamba lako mwenyewe (namba halisi au za mfano): namba tano, kila moja na chanzo chake kwenye rejista yako, lengo au kiwango cha kawaida, na hatua utakayochukua ikiwa iko nje ya kiwango. Kisha andika utaratibu wa ripoti wa ukurasa mmoja kwa yule anayeendesha shamba kila siku: ripoti ya kila siku ya WhatsApp ina nini (picha, namba, matatizo), inatakiwa saa ngapi, mkutano mfupi wa kila wiki, jinsi utakavyoikagua (ukaguzi wa ghafla, kuhesabu stoo, taarifa za pesa za simu), na nani anaweza kuona data ipi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima wadogo na wakulima wa kibiashara wanaokua, vijana wajasiriamali wa kilimo, wamiliki wa mashamba wanaoishi mbali na mameneja wa mashamba nchini Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire na kote Afrika. Wengi wanalima mazao na kufuga wanyama pamoja (mahindi, nyanya, kuku, mbuzi, nguruwe, samaki aina ya tilapia) na wanaajiri vibarua au wafanyakazi wa kudumu.",
    startingPoint: "Wanatumia simu janja kila siku kwa simu, WhatsApp na pesa za simu. Baadhi wanaandika maelezo kwenye daftari au spreadsheet rahisi. Wachache wana mfumo mmoja unaounganisha mashamba, mifugo, wafanyakazi, pesa na stoo, na wamiliki wengi wanategemea kupiga simu ili kujua kinachoendelea shambani.",
    gap: "Shamba linapokua, pesa zinapotea kupitia siku za kazi zisizoandikwa, pembejeo zinazokosekana, mifugo waliokufa wanaogunduliwa kwa kuchelewa na maamuzi yanayofanywa kwa kubahatisha. Wanafunzi wanahitaji mfumo rahisi unaounganisha kumbukumbu, malipo na ripoti, na tabia ya kukagua namba chache kila wiki, ili waweze kusimamia wakiwa mbali na kuona matatizo mapema.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kozi inapatikana pia kwa Kihispania, Kifaransa na Kiarabu",
      "Vifaa: simu ya Android ya bei nafuu; kompyuta inasaidia lakini haihitajiki",
      "Mtandao: mtandao hafifu kwenye mashamba mengi, kwa hiyo zana lazima zifanye kazi bila mtandao au kupitia WhatsApp",
      "Pesa: zana za bure kwanza; hakuna app inayopendekezwa; kiasi chote cha pesa ni mifano",
      "Sheria za faragha zinahusu data ya wafanyakazi (Kenya, Nigeria, Ghana na nyingine zina sheria za ulinzi wa data)",
      "Hakuna PIN, nywila wala namba za vitambulisho katika zoezi lolote"
    ],
    prerequisites: "Kuweza kutumia simu janja, WhatsApp na pesa za simu bila shida. Inashauriwa kwanza kusoma kozi \"Data na Teknolojia katika Kilimo\" (kumbukumbu za msingi na spreadsheet)."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya vitu ambavyo shamba lako linahitaji kufuatilia", action: "kulinganisha apps za kusimamia shamba au spreadsheet ya pamoja kwa orodha ya sifa na kuchagua moja", standard: "ukipima angalau chaguo mbili na kuandika sababu ya chaguo lako" },
    { id: "O2", condition: "Ukitumia zana uliyochagua", action: "kuandaa rejista ya shamba ya mashamba, mifugo, shughuli na stoo ya pembejeo yenye majina na vipimo visivyobadilika", standard: "ili kila kumbukumbu iweze kujumlishwa kwa shamba, kundi la mifugo au pembejeo" },
    { id: "O3", condition: "Ukipewa wiki ya kazi ya vibarua na wafanyakazi wa kudumu", action: "kuandika siku na kazi za kila mfanyakazi na kumlipa kwa pesa za simu na kumbukumbu inayolingana", standard: "ili kila malipo yawe na tarehe, mfanyakazi, kazi, kiasi na namba ya muamala" },
    { id: "O4", condition: "Meneja au mwanafamilia anapoendesha shamba ukiwa haupo", action: "kuandika utaratibu wa ripoti za kila siku wenye picha na ripoti za WhatsApp, mkutano wa kila wiki na ukaguzi wa ghafla", standard: "ukisema nini kiripotiwe, kufikia saa ngapi, na jinsi utakavyokikagua" },
    { id: "O5", condition: "Ukitumia rejista ya shamba lako", action: "kutengeneza dashibodi ya kila wiki ya namba tano na hatua ambayo kila namba inaanzisha", standard: "ikisasishwa kila wiki kutoka kwenye kumbukumbu, si kwa kukumbuka" },
    { id: "O6", condition: "Unapokusanya data kuhusu shamba lako na wafanyakazi wako", action: "kuamua data ipi ya kukusanya, nani anaweza kuiona na jinsi ya kuilinda", standard: "ukikusanya unachohitaji tu na bila kushiriki PIN, nywila wala namba za vitambulisho" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuandaa mfumo wa shamba lako",
      lessons: [
        {
          title: "Kuchagua app ya shamba au spreadsheet ya pamoja",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua app ya kusimamia shamba au spreadsheet ya pamoja kwa kuipima kwa orodha ya sifa.",
          text: [
            "App ya kusimamia shamba inaweka mashamba yako, mifugo, kazi, stoo na pesa mahali pamoja kwenye simu yako. Zipo nyingi, na zinabadilika mara kwa mara, kwa hiyo kozi hii haipendekezi yoyote. Spreadsheet ya bure ya pamoja (Google Sheets au Microsoft Excel) inaweza kufanya kazi hiyo hiyo ikiwa umeiandaa vizuri. Kilicho muhimu ni kwamba wewe na wafanyakazi wako mnaitumia kweli kila siku.",
            "Anza na unachohitaji kufuatilia, kisha pima kila chaguo. Sifa za kuangalia: inafanya kazi bila mtandao na kusawazisha baadaye (mashamba mengi yana mtandao hafifu); mashamba na makundi ya mifugo kama kumbukumbu tofauti; njia rahisi ya kuandika shughuli na pembejeo; kiasi cha stoo kinachopungua pembejeo zinapotumika; kumbukumbu za wafanyakazi na malipo; picha; watumiaji kadhaa wenye ruhusa tofauti (mfanyakazi anaweza kuingiza data lakini asione mishahara); kuhamisha data kwenda spreadsheet ili data yako isifungiwe kamwe; lugha yako; na bei na sera ya faragha zilizo wazi.",
            "Kuwa mwangalifu na apps zilizo bure kwa sababu zinauza data yako, zinazohitaji mtandao wa kasi, au ambazo huwezi kuziacha pamoja na data yako. Waulize wakulima wengine katika eneo lako wanatumia nini, jaribu app yoyote kwa wiki mbili kwa kumbukumbu halisi, na angalia bei baada ya kipindi cha majaribio ya bure kabla ya kuweka kumbukumbu zako zote ndani yake."
          ],
          steps: ["Orodhesha unachopaswa kufuatilia: mashamba, mifugo, kazi, wafanyakazi, stoo, mauzo.", "Chagua chaguo mbili au tatu, pamoja na spreadsheet ya bure ya pamoja.", "Pima kila moja kwa orodha: bila mtandao, watumiaji na ruhusa, stoo, wafanyakazi, picha, kuhamisha data, lugha, bei, faragha.", "Jaribu iliyo bora kwa wiki mbili kwa kumbukumbu halisi.", "Andika chaguo lako na sababu yake."],
          words: [["App ya kusimamia shamba", "programu ya simu au ya wavuti ya kuandika na kupanga mashamba, mifugo, kazi, stoo na pesa za shamba."], ["Kusawazisha (sync)", "app inapotuma data iliyohifadhiwa kwenye simu kwenda intaneti mara mtandao unapopatikana."], ["Kuhamisha data (export)", "kutoa data yako nje ya app, kwa mfano kama faili ya spreadsheet."]],
          slides: [
            { title: "App au spreadsheet ya pamoja?", bullets: ["Zote mbili zinaweza kufaa", "Kilicho muhimu: wewe na wafanyakazi wako mnaitumia kila siku", "Hakuna app inayopendekezwa hapa: pima kwa sifa"] },
            { title: "Sifa za kuangalia", bullets: ["Inafanya kazi bila mtandao, inasawazisha baadaye", "Mashamba, mifugo, shughuli, stoo, wafanyakazi", "Watumiaji kadhaa wenye ruhusa tofauti", "Kuhamisha data kwenda spreadsheet"] },
            { title: "Dalili za hatari", bullets: ["Ni bure kwa sababu inauza data yako", "Inahitaji mtandao wa kasi", "Huwezi kutoa data yako nje", "Bei haiko wazi baada ya majaribio"] },
            { title: "Amua", bullets: ["Pima chaguo mbili au tatu", "Jaribu moja kwa wiki mbili", "Andika chaguo lako na sababu"] }
          ],
          tryIt: "Andika orodha ya vitu ambavyo shamba lako lazima lifuatilie. Tengeneza jedwali la alama lenye sifa za orodha upande wa kushoto na chaguo mbili au tatu juu (moja inaweza kuwa spreadsheet ya bure ya pamoja). Pima kila moja na uandike chaguo lako na sababu yako.",
          youCanNow: "kupima app yoyote ya shamba au spreadsheet kwa sifa zake na kuchagua moja kwa sababu iliyo wazi.",
          quickCheck: [
            { objective: "O1", q: "Shamba lako huko Kakamega mara nyingi halina mtandao. Sifa ipi ni muhimu zaidi?", options: ["Rangi zinazong'aa", "Inafanya kazi bila mtandao na kusawazisha baadaye", "Idadi kubwa ya watu walioipakua", "Simu za video"], answer: 1, why: "Kama app haiwezi kuhifadhi kumbukumbu bila mtandao, wafanyakazi wataacha kuitumia." },
            { objective: "O1", q: "Kwa nini uhakikishe app inaweza kuhamisha data yako?", options: ["Ili kumbukumbu zako zisifungiwe kamwe ndani ya app moja", "Ili simu iende kwa kasi zaidi", "Kwa sababu sheria inamtaka kila mkulima ahamishe data", "Ili upate punguzo la bei"], answer: 0, why: "Kuhamisha data kunakuwezesha kupeleka kumbukumbu zako kwenye spreadsheet au app nyingine wakati wowote." }
          ]
        },
        {
          title: "Kuandaa mashamba, mifugo, shughuli na stoo ya pembejeo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Andaa rejista ya shamba yenye majina na vipimo visivyobadilika na orodha ya stoo ya pembejeo.",
          text: [
            "Rejista ndiyo uti wa mgongo wa mfumo. Lipe kila shamba jina fupi lisilobadilika na ukubwa wake (kwa mfano \"F1 Nyanya ekari 0.5\"), na kila kundi la mifugo au bwawa jina na idadi (\"Kuku wa mayai Banda A, ndege 500\", \"Mbuzi 24\", \"Bwawa 2 tilapia\"). Tumia majina hayo hayo katika kila kumbukumbu ili uweze kujumlisha gharama na mazao kwa shamba au kundi.",
            "Kisha tengeneza daftari la shughuli: tarehe, shamba au kundi, shughuli (kupanda, kupalilia, kunyunyizia dawa, kulisha, chanjo inayotolewa na daktari wa mifugo, kuvuna, kuuza), kiasi, kipimo, gharama, nani aliifanya na picha ikiwa inasaidia. Weka vipimo visivyobadilika: kilo, lita, mifuko ya kilo 50, kreti, trei za mayai 30. Vipimo vilivyochanganyika vinafanya jumla kuwa si sahihi.",
            "Ongeza orodha ya stoo ya pembejeo: kila pembejeo na kipimo chake, kilichoingia, kilichotumika na kilichobaki. Mfanyakazi anapoandika \"mifuko 2 ya NPK imetumika F1\", kilichobaki kinapaswa kupungua kwa mbili. Hesabu stoo na uilinganishe na orodha kila wiki. Kama hesabu na kumbukumbu hazilingani, umegundua upotevu, kosa la kuandika au wizi, na unaweza kuuliza kwa nini katika wiki hiyo hiyo."
          ],
          steps: ["Lipe kila shamba jina na ukubwa, na kila kundi la mifugo, bwawa au banda jina na idadi.", "Weka kipimo kisichobadilika kwa kila kitu: kilo, lita, mifuko ya kilo 50, kreti, trei.", "Tengeneza daftari la shughuli: tarehe, shamba au kundi, shughuli, kiasi, kipimo, gharama, nani, picha.", "Tengeneza orodha ya stoo: pembejeo, kipimo, kilichoingia, kilichotumika, kilichobaki.", "Hesabu stoo kila wiki na uilinganishe na orodha."],
          words: [["Rejista", "orodha kuu ya mashamba yako, makundi ya mifugo na pembejeo ambayo kila kumbukumbu inaitaja."], ["Kipimo", "unachopimia, kama kilo, lita au mifuko ya kilo 50."], ["Kuhesabu stoo", "kuhesabu kwa mkono kilichopo stoo na kukilinganisha na kumbukumbu."]],
          slides: [
            { title: "Majina yasiyobadilika", bullets: ["Mashamba na ukubwa: F1 Nyanya ekari 0.5", "Makundi ya mifugo na idadi: Kuku wa mayai Banda A, 500", "Majina hayo hayo katika kila kumbukumbu"] },
            { title: "Daftari la shughuli", bullets: ["Tarehe, shamba au kundi, shughuli", "Kiasi, kipimo, gharama", "Nani aliifanya, picha"] },
            { title: "Stoo ya pembejeo", bullets: ["Kilichoingia, kilichotumika, kilichobaki kwa kila pembejeo", "Vipimo visivyobadilika: kilo, lita, mifuko ya kilo 50"] },
            { title: "Kuhesabu kila wiki", bullets: ["Hesabu stoo", "Linganisha na orodha", "Hazilingani? Uliza kwa nini wiki hii"] }
          ],
          tryIt: "Katika zana uliyochagua, tengeneza rejista ya shamba lako: kila shamba au kundi la mifugo na ukubwa au idadi yake, daftari la shughuli lenye angalau kumbukumbu tano halisi za wiki hii, na orodha ya stoo ya angalau pembejeo nne. Kisha hesabu pembejeo moja katika stoo yako na uilinganishe na orodha.",
          youCanNow: "kuandaa rejista ya shamba inayojumlisha kwa shamba, kundi la mifugo na pembejeo, na kukagua stoo yako kwa kuitumia.",
          quickCheck: [
            { objective: "O2", q: "Mfanyakazi mmoja anaandika \"mifuko 2\" na mwingine \"kilo 100\" kwa mbolea ile ile. Suluhisho ni nini?", options: ["Puuza; jumla itakaribiana tu", "Futa kumbukumbu zote mbili", "Weka kipimo kimoja kwa pembejeo hiyo na ukitumie kila wakati", "Acha kuandika mbolea"], answer: 2, why: "Vipimo visivyobadilika vinakuwezesha kujumlisha kumbukumbu kwa usahihi." },
            { objective: "O2", q: "Orodha ya stoo inasema mifuko 6 ya chakula cha kuku wa mayai, lakini stoo ina 4. Unafanya nini?", options: ["Badilisha orodha iwe 6 tena", "Subiri hadi mwisho wa msimu", "Nunua mifuko 2 zaidi na usiseme kitu", "Uliza wiki hii kwa nini zinatofautiana: kosa la kuandika, upotevu au wizi"], answer: 3, why: "Kuhesabu kila wiki kunagundua mapengo yakiwa bado madogo na rahisi kuelezwa." }
          ]
        },
        {
          title: "Kufuatilia kazi na kuwalipa wafanyakazi kwa pesa za simu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Andika siku na kazi za kila mfanyakazi na umlipe kwa pesa za simu na kumbukumbu inayolingana.",
          text: [
            "Gharama ya wafanyakazi mara nyingi ndiyo kubwa zaidi kwenye shamba linalokua na ndiyo isiyoandikwa sana. Weka orodha ya wafanyakazi (jina, namba ya simu ya pesa za simu, malipo ya siku au ya mwezi, tarehe ya kuanza) na daftari la kila siku la mahudhurio na kazi: tarehe, mfanyakazi, shamba au kundi, kazi, siku au saa. Msimamizi anaweza kulituma kama picha ya WhatsApp ya karatasi ya mahudhurio au kujaza fomu ya pamoja kila jioni.",
            "Lipa kwa pesa za simu pale unapoweza: M-Pesa nchini Kenya, MTN MoMo nchini Ghana, Orange Money au Wave nchini Senegal na Côte d'Ivoire, au uhamisho wa benki au pesa za simu nchini Nigeria. Hivyo kila malipo yanakuwa na namba ya muamala. Nakili tarehe, mfanyakazi, kiasi na namba ya muamala kwenye kumbukumbu ya malipo, karibu na siku alizofanya kazi. Mwisho wa wiki, siku mara malipo ya siku zinapaswa kulingana na ulicholipa. Mfano tu: siku 6 x KES 500 = KES 3,000, au siku 5 x NGN 4,000 = NGN 20,000.",
            "Lipa kwa haki na kwa wakati, na hakikisha kima cha chini cha mshahara na sheria za kazi kwenye wizara ya kazi ya nchi yako. Usiwaruhusu watoto kufanya kazi za hatari shambani kama kunyunyizia dawa, kushika kemikali au kutumia mashine. Waambie wafanyakazi unachoandika na kwa nini, na thibitisha kila malipo nao, ili kumbukumbu ilinde pande zote mbili."
          ],
          steps: ["Weka orodha ya wafanyakazi: jina, namba ya pesa za simu, malipo, tarehe ya kuanza.", "Andika mahudhurio na kazi kila siku.", "Lipa kwa pesa za simu na unakili namba ya muamala kwenye kumbukumbu ya malipo.", "Kila wiki kagua: siku x malipo ya siku = kiasi kilicholipwa.", "Thibitisha kila malipo na mfanyakazi."],
          words: [["Kibarua", "mfanyakazi anayelipwa kwa siku au kwa kazi, si kwa mkataba wa mwezi."], ["Namba ya muamala", "namba ya pekee katika ujumbe wa pesa za simu inayothibitisha kwamba malipo yalifanyika."], ["Orodha ya mishahara (payroll)", "kumbukumbu ya nani analipwa kiasi gani na lini."]],
          slides: [
            { title: "Wafanyakazi: gharama kubwa, kumbukumbu chache", bullets: ["Orodha ya wafanyakazi: jina, namba, malipo", "Daftari la kila siku: tarehe, mfanyakazi, shamba, kazi, siku"] },
            { title: "Lipa kwa njia inayoacha alama", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Nakili namba ya muamala kwenye kumbukumbu", "Mfano tu: siku 6 x KES 500 = KES 3,000"] },
            { title: "Ukaguzi wa kila wiki", bullets: ["Siku x malipo ya siku = kiasi kilicholipwa", "Thibitisha na kila mfanyakazi"] },
            { title: "Lipa kwa haki na kisheria", bullets: ["Hakikisha kima cha chini cha mshahara kwenye wizara ya kazi", "Hakuna kazi za hatari kwa watoto", "Waambie wafanyakazi unachoandika"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Tengeneza orodha ya wafanyakazi na daftari la wiki moja la mahudhurio na kazi kwa shamba lako (halisi au la mfano). Jaza kumbukumbu ya malipo yenye tarehe, mfanyakazi, siku, malipo ya siku, kiasi na safu ya namba ya muamala, na hakikisha kwamba siku mara malipo ya siku zinalingana na kiasi kwa kila mfanyakazi.",
          youCanNow: "kufuatilia nani alifanya kazi, kazi gani na kwa muda gani, na kuwalipa wafanyakazi kwa pesa za simu na kumbukumbu inayolingana.",
          quickCheck: [
            { objective: "O3", q: "Kumbukumbu ipi ya malipo imekamilika?", options: ["\"Nimemlipa Juma\"", "\"12 Mei, Juma, siku 6 kupalilia F2, KES 3,000 (mfano), namba QX7...\"", "\"Wafanyakazi wamelipwa wiki hii\"", "\"KES 3,000\""], answer: 1, why: "Ina tarehe, mfanyakazi, kazi, siku, kiasi na namba ya muamala." },
            { objective: "O3", q: "Mfanyakazi anasema alifanya kazi siku 6; daftari linaonyesha 5. Nini kinasaidia zaidi?", options: ["Daftari la kila siku la mahudhurio na mazungumzo naye na msimamizi", "Kutomlipa kitu hadi mwezi ujao", "Kuchukua namba kubwa bila kuuliza", "Kufuta daftari"], answer: 0, why: "Daftari la kila siku linazipa pande zote mbili kumbukumbu ya kukagua pamoja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuandaa mfumo wa shamba lako",
        questions: [
          { objective: "O1", q: "Ipi ni dalili ya hatari unapochagua app ya shamba?", options: ["Inafanya kazi bila mtandao", "Unaweza kuhamisha data yako", "Ni bure kwa sababu inauza data yako", "Wafanyakazi wanaweza kuingiza data bila kuona mishahara"], answer: 2, why: "Unapoteza udhibiti wa data ya shamba lako na ya wafanyakazi." },
          { objective: "O1", q: "Kabla ya kuweka kumbukumbu zako zote kwenye app, unapaswa:", options: ["Kuijaribu kwa wiki mbili kwa kumbukumbu halisi na kuangalia bei baada ya majaribio", "Kulipia mwaka mzima mara moja", "Kuchagua ile yenye matangazo mengi zaidi", "Kuiomba app ikuchagulie"], answer: 0, why: "Majaribio halisi yanaonyesha kama wewe na wafanyakazi wako mtaitumia, na itagharimu kiasi gani." },
          { objective: "O2", q: "Kwa nini ulipe kila shamba jina lisilobadilika kama \"F1 Nyanya ekari 0.5\"?", options: ["App haitafunguka vinginevyo", "Ili gharama na mazao yajumlishwe kwa shamba", "Wanunuzi wanaliomba", "Ni sheria"], answer: 1, why: "Jina lile lile katika kila kumbukumbu linakuwezesha kupata jumla ya kila shamba." },
          { objective: "O2", q: "Orodha yako ya stoo inasema mifuko 10 ya NPK imebaki. Hesabu ya stoo ni 7. Hii inaonyesha:", options: ["Orodha ya stoo iko sahihi kila wakati", "Hakuna jambo muhimu", "Unahitaji app mpya", "Kosa, upotevu au wizi wa kuchunguza wiki hii"], answer: 3, why: "Kutolingana ni ishara ya kuuliza kwa nini pengo likiwa bado dogo." },
          { objective: "O3", q: "Kwa nini uwalipe wafanyakazi kwa pesa za simu pale unapoweza?", options: ["Ni bure kila wakati", "Wafanyakazi wanapendelea pesa taslimu", "Kila malipo yana namba ya muamala unayoweza kuiandika", "Inakwepa kulipa kima cha chini cha mshahara"], answer: 2, why: "Namba ya muamala ni uthibitisho wa malipo kwako na kwa mfanyakazi." }
        ]
      }
    },
    {
      name: "Sura 2: Kusimamia kwa data, karibu au mbali",
      lessons: [
        {
          title: "Kulinda data ya shamba na ya wafanyakazi",
          objectives: ["O6"],
          minutes: 5,
          goal: "Amua data ipi ya kukusanya, nani anaweza kuiona na jinsi ya kuilinda.",
          text: [
            "Mfumo wako sasa una taarifa za thamani na za faragha: majina na namba za simu za wafanyakazi, malipo, mauzo yako na stoo yako. Kenya (Ofisi ya Kamishna wa Ulinzi wa Data), Nigeria (Tume ya Ulinzi wa Data ya Nigeria) na Ghana (Tume ya Ulinzi wa Data) zina sheria za ulinzi wa data na vyombo vya kusimamia, na vivyo hivyo nchi nyingine nyingi za Afrika. Mashamba na biashara kubwa zaidi huenda zikalazimika kujisajili; angalia tovuti ya chombo cha kusimamia cha nchi yako.",
            "Kusanya unachohitaji tu. Unahitaji jina la mfanyakazi, namba ya pesa za simu, siku na malipo. Huhitaji namba ya kitambulisho chake kwenye spreadsheet ya pamoja wala picha ya kitambulisho chake kwenye kikundi cha WhatsApp. Waambie wafanyakazi unachohifadhi na kwa nini. Usiweke kamwe PIN za pesa za simu, nywila au namba za vitambulisho kwenye spreadsheet, kwenye app au kwenye zana ya AI.",
            "Weka ruhusa kwa kazi ya kila mtu: wafanyakazi wanaingiza shughuli; meneja anaona stoo na mahudhurio; wewe tu (na mhasibu wako) mnaona malipo na mauzo. Tumia kufuli ya simu na kuingia kwa hatua mbili, ondoa watu wanaoacha shamba siku hiyo hiyo, na weka nakala ya akiba. Ukishiriki data na mnunuzi, mkopeshaji au mradi, shiriki wanachohitaji tu na uliza jinsi watakavyoitumia."
          ],
          steps: ["Orodhesha data uliyonayo na ufute usiyohitaji.", "Waambie wafanyakazi unachoandika na kwa nini.", "Weka ruhusa kwa kazi: mfanyakazi, meneja, mmiliki.", "Funga simu, washa kuingia kwa hatua mbili, weka nakala ya akiba.", "Ondoa ruhusa ya yeyote anayeondoka, siku hiyo hiyo."],
          words: [["Data binafsi", "taarifa kuhusu mtu, kama jina, namba ya simu au malipo."], ["Ruhusa (access)", "nani anaweza kuona au kubadilisha data ipi."], ["Kuingia kwa hatua mbili", "ukaguzi wa pili, kama namba inayotumwa kwenye simu yako, unapoingia."]],
          slides: [
            { title: "Sasa una data ya faragha", bullets: ["Majina, namba na malipo ya wafanyakazi", "Mauzo yako na stoo yako", "Sheria za ulinzi wa data zinahusika"] },
            { title: "Kusanya unachohitaji tu", bullets: ["Jina, namba ya pesa za simu, siku, malipo", "Hakuna picha za vitambulisho kwenye vikundi vya WhatsApp", "Kamwe PIN wala nywila"] },
            { title: "Ruhusa kwa kazi", bullets: ["Wafanyakazi: kuingiza shughuli", "Meneja: stoo na mahudhurio", "Mmiliki: malipo na mauzo"] },
            { title: "Iweke salama", bullets: ["Kufuli ya simu, kuingia kwa hatua mbili, nakala ya akiba", "Ondoa wanaoondoka siku hiyo hiyo", "Shiriki tu kile wengine wanachohitaji"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Orodhesha kila aina ya data katika mfumo wa shamba lako. Futa usiyohitaji. Andika jedwali la ruhusa: kwa kila kazi (mfanyakazi, meneja, mmiliki, mhasibu), wanachoweza kuona na wanachoweza kuingiza.",
          youCanNow: "kukusanya data ambayo shamba lako linahitaji tu na kudhibiti nani anaweza kuiona.",
          quickCheck: [
            { objective: "O6", q: "Ipi HAIPASWI kuwekwa kwenye spreadsheet ya pamoja ya shamba?", options: ["Majina ya wafanyakazi", "Siku walizofanya kazi", "Majina ya mashamba", "PIN za pesa za simu za wafanyakazi"], answer: 3, why: "PIN ni siri; hakuna mtu mwingine anayepaswa kuwa nazo kamwe." },
            { objective: "O6", q: "Meneja wako anaacha shamba. Utaondoa lini ruhusa yake kwenye spreadsheet na app ya shamba?", options: ["Mwisho wa msimu", "Siku hiyo hiyo", "Ikiwa tu ataomba", "Kamwe; huenda akarudi"], answer: 1, why: "Kuondoa ruhusa siku hiyo hiyo kunalinda data yako na data ya wafanyakazi wako." }
          ]
        },
        {
          title: "Kusimamia shamba ukiwa mbali",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika utaratibu wa ripoti za kila siku ambao unaweza kuukagua.",
          text: [
            "Wamiliki wengi wanaendesha mashamba wakiwa mjini kupitia meneja au ndugu. Inafanikiwa pale ripoti zinapokuwa utaratibu, si unapopiga simu ovyo na kuuliza \"Kila kitu kiko sawa?\". Kubalianeni ripoti ya kila siku ya WhatsApp kufikia saa maalum, kwa mfano saa 12 jioni (6 pm): kilichofanyika katika kila shamba au banda, namba (mayai yaliyokusanywa, kuku waliokufa, chakula kilichotumika, lita za maziwa, kreti zilizouzwa, wafanyakazi waliokuwepo), matatizo, na picha tatu za sehemu zile zile kila siku (mazao, mifugo, stoo).",
            "Fanyeni mkutano mfupi wa kila wiki kwa simu au video kwa wakati maalum: pitieni namba za wiki, hesabu ya stoo na mpango wa wiki ijayo. Amueni pamoja na mwandike maamuzi kwenye kikundi. Meneja mzuri anapaswa pia kulipwa na kuaminiwa kufanya maamuzi madogo bila wewe.",
            "Amini, lakini kagua. Linganisha ripoti na vitu ambavyo ni vigumu kughushi: taarifa za pesa za simu, risiti za wanunuzi, hesabu ya stoo ya kila wiki na picha zenye tarehe na mahali. Tembelea shamba mara kwa mara bila kutoa taarifa mapema sana, na wakati mwingine muombe jirani unayemwamini, daktari wa mifugo au afisa ugani akupe maoni ya pili. Namba inapoonekana si sahihi, uliza kwa utulivu na mapema. Mapengo mengi ni makosa, na kukagua mara kwa mara kunawasaidia watu waaminifu kubaki waaminifu."
          ],
          steps: ["Kubalianeni ripoti ya kila siku: saa, namba, matatizo, picha tatu za sehemu zile zile.", "Wekeni mkutano wa kila wiki kwa wakati maalum.", "Andikeni maamuzi kwenye kikundi.", "Kagua kwa taarifa za malipo, risiti, hesabu ya stoo na picha zenye tarehe.", "Tembelea wakati mwingine bila taarifa ya mapema sana; uliza mapema na kwa utulivu kuhusu namba za ajabu."],
          words: [["Mmiliki anayeishi mbali", "mmiliki wa shamba anayeishi mbali na kuendesha shamba kupitia mtu mwingine."], ["Kukagua (verify)", "kuhakikisha kwamba ripoti ni ya kweli kwa kutumia chanzo cha pili."], ["Mkutano mfupi wa kila wiki (check-in)", "mkutano mfupi wa mara kwa mara wa kupitia namba na mipango."]],
          slides: [
            { title: "Utaratibu ni bora kuliko simu za ovyo", bullets: ["Ripoti ya kila siku ya WhatsApp kufikia saa maalum", "Namba, matatizo, picha tatu za sehemu zile zile"] },
            { title: "Mkutano wa kila wiki", bullets: ["Wakati ule ule kila wiki", "Namba, hesabu ya stoo, mpango wa wiki ijayo", "Andikeni maamuzi kwenye kikundi"] },
            { title: "Amini, lakini kagua", bullets: ["Taarifa za pesa za simu na risiti", "Hesabu ya stoo ya kila wiki, picha zenye tarehe", "Kutembelea na maoni ya pili ya mtu unayemwamini"] },
            { title: "Namba inapoonekana si sahihi", bullets: ["Uliza mapema na kwa utulivu", "Mapengo mengi ni makosa", "Kukagua mara kwa mara kunawaweka wote waaminifu"] }
          ],
          tryIt: "Andika kiolezo cha ripoti ya kila siku ambayo meneja wako atatuma (namba, mstari wa matatizo na sehemu tatu za picha). Kisha orodhesha njia tatu utakazotumia kukagua ripoti, na siku na saa ya mkutano wako wa kila wiki.",
          youCanNow: "kuweka ripoti ya kila siku na mkutano wa kila wiki na meneja na kukagua anachokuambia.",
          quickCheck: [
            { objective: "O4", q: "Ripoti ipi ya kila siku kutoka kwa meneja wa kuku ina manufaa zaidi?", options: ["\"Kila kitu kiko sawa.\"", "Ujumbe wa sauti wakati wowote wa siku", "\"Saa 12 jioni: mayai 412, kuku 2 wamekufa, mifuko 3 ya chakula imetumika, wafanyakazi 4, picha za Banda A, kuku na stoo\"", "Simu ya kila wiki tu"], answer: 2, why: "Namba na picha zile zile kwa saa maalum zinaweza kulinganishwa siku kwa siku." },
            { objective: "O4", q: "Njia ipi bora ya kukagua mauzo ya mayai yaliyoripotiwa?", options: ["Kuyalinganisha na taarifa za pesa za simu na risiti za wanunuzi", "Kumuuliza meneja kama ana uhakika", "Kuhesabu mayai kwenye picha ya WhatsApp", "Kuyaamini kwa sababu ni ndugu"], answer: 0, why: "Malipo na risiti ni chanzo cha pili ambacho ni vigumu kughushi." }
          ]
        },
        {
          title: "Dashibodi yako ya kila wiki: namba tano za kuangalia",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Tengeneza dashibodi ya kila wiki ya namba tano, kila moja na kiwango cha kawaida na hatua.",
          text: [
            "Dashibodi ni ukurasa mfupi wa namba chache zinazokuambia kama shamba liko kwenye njia sahihi. Namba tano zinatosha kusomwa kwa dakika mbili kila wiki. Chagua namba zinazotoka moja kwa moja kwenye rejista yako, ili hakuna mtu anayelazimika kuzikumbuka.",
            "Chaguo nzuri kwa mashamba mengi: (1) pesa zilizoingia na zilizotoka wiki hii; (2) mazao, kama kilo zilizovunwa, mayai kwa siku, lita za maziwa au ukuaji wa samaki; (3) hasara, kama kuku waliokufa, mifugo wagonjwa au kreti zilizokataliwa; (4) stoo ya pembejeo iliyobaki ukilinganisha na mahitaji ya wiki mbili zijazo; (5) siku za kazi au gharama ya wafanyakazi kwa shamba au kundi. Shamba la kuku wa mayai nchini Ghana linaweza kuangalia mayai kwa siku, kuku waliokufa, chakula kilichotumika, pesa za mauzo ya mayai na stoo ya chakula. Mkulima wa nyanya nchini Senegal anaweza kuangalia kreti zilizovunwa, kreti zilizokataliwa, siku za kazi, pesa za mauzo kwa XOF na stoo ya dawa za wadudu na mbolea.",
            "Kwa kila namba andika kiwango cha kawaida na hatua. Mfano: \"Kuku waliokufa zaidi ya 3 kwa siku: mpigie daktari wa mifugo siku hiyo hiyo.\" \"Stoo ya chakula chini ya siku 10: agiza chakula.\" Weka namba tano kwenye jedwali dogo lenye safu moja kwa kila wiki, ili uone mwelekeo. Ipitie katika mkutano wa kila wiki, na badilisha namba ikiwa haileti uamuzi wowote."
          ],
          steps: ["Chagua namba tano zinazotoka kwenye rejista yako.", "Andika kiwango cha kawaida au lengo kwa kila moja.", "Andika hatua ikiwa namba iko nje ya kiwango.", "Tengeneza jedwali lenye safu moja kwa kila wiki.", "Ipitie katika mkutano wa kila wiki na uchukue hatua."],
          words: [["Dashibodi", "muhtasari mfupi wa namba muhimu zinazoonyesha hali ya shamba."], ["Mwelekeo", "upande ambao namba inaelekea kwa wiki kadhaa."], ["Kiwango cha kawaida", "thamani unazotarajia mambo yanapokwenda vizuri."]],
          slides: [
            { title: "Namba tano, dakika mbili", bullets: ["Moja kwa moja kutoka kwenye rejista yako", "Zisome kila wiki"] },
            { title: "Chaguo nzuri", bullets: ["Pesa zilizoingia na zilizotoka", "Mazao: kilo, mayai, lita", "Hasara, stoo iliyobaki, gharama ya wafanyakazi"] },
            { title: "Kiwango na hatua", bullets: ["Kuku waliokufa zaidi ya kawaida: mpigie daktari wa mifugo", "Chakula chini ya siku 10: agiza chakula"] },
            { title: "Angalia mwelekeo", bullets: ["Safu moja kwa kila wiki", "Pitia katika mkutano wa kila wiki", "Ondoa namba ambazo haziongozi kamwe kwenye hatua"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza dashibodi ya kila wiki ya shamba lako yenye namba tano, kila moja na chanzo chake kwenye rejista yako, kiwango cha kawaida na hatua utakayochukua ikiwa iko nje ya kiwango, na ujaze angalau wiki mbili. Kisha andika utaratibu wako wa ripoti wa ukurasa mmoja: ripoti ya kila siku, mkutano wa kila wiki, jinsi unavyokagua, na nani anaona data ipi.",
          youCanNow: "kuendesha shamba lako kwa dashibodi ya kila wiki ya namba tano na utaratibu wa ripoti unaoweza kuukagua.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini namba za dashibodi zinapaswa kutoka moja kwa moja kwenye rejista?", options: ["Ili zionekane za kitaalamu zaidi", "Ili hakuna mtu anayelazimika kuzikumbuka au kuzikisia", "Kwa sababu apps zinataka hivyo", "Ili wafanyakazi wasizione"], answer: 1, why: "Namba kutoka kwenye kumbukumbu zinaaminika; namba za kukumbuka haziaminiki." },
            { objective: "O5", q: "Dashibodi yako inasema \"stoo ya chakula chini ya siku 10: agiza chakula\". Stoo ni siku 6. Sasa nini?", options: ["Subiri mapitio ya mwezi", "Ondoa namba hiyo kwenye dashibodi", "Waambie wafanyakazi walishe kidogo", "Agiza chakula wiki hii"], answer: 3, why: "Kila namba ina hatua; ikiwa nje ya kiwango, unachukua hatua." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kusimamia kwa data, karibu au mbali",
        questions: [
          { objective: "O6", q: "Nani anapaswa kuona malipo ya wafanyakazi katika mfumo wa shamba?", options: ["Kila mfanyakazi", "Yeyote katika kikundi cha WhatsApp cha shamba", "Mmiliki na, ikihitajika, mhasibu", "Wanunuzi"], answer: 2, why: "Malipo ni ya faragha; ruhusa kwa kazi inayalinda." },
          { objective: "O4", q: "Nini kinafanya ripoti ya kila siku ya shamba iwe rahisi kukagua?", options: ["Namba zile zile na sehemu zile zile za picha kwa saa maalum", "Ujumbe mrefu wa sauti", "Kupiga simu kila unapokumbuka", "Kuripoti matatizo tu"], answer: 0, why: "Maudhui yale yale kila siku yanakuwezesha kulinganisha na kuona mabadiliko." },
          { objective: "O4", q: "Mauzo yaliyoripotiwa na meneja ni kidogo kuliko risiti za mnunuzi. Unafanya nini kwanza?", options: ["Kumfukuza kazi mara moja", "Kupuuza", "Kuliweka kwenye kikundi cha wafanyakazi", "Kuuliza kwa utulivu na mapema, na kulinganisha kumbukumbu pamoja"], answer: 3, why: "Mapengo mengi ni makosa; kuuliza mapema ukiwa na kumbukumbu kunagundua ni lipi." },
          { objective: "O5", q: "Ipi ni namba nzuri ya dashibodi kwa shamba la ng'ombe wa maziwa?", options: ["Rangi ya zizi", "Lita za maziwa kwa siku", "Idadi ya jumbe za WhatsApp", "Ng'ombe anayependwa zaidi na meneja"], answer: 1, why: "Namba za mazao kama lita kwa siku zinaonyesha kama shamba liko kwenye njia sahihi." },
          { objective: "O5", q: "Namba ya dashibodi haileti kamwe uamuzi wowote. Unapaswa:", options: ["Kuibadilisha na namba inayoleta uamuzi", "Kuiweka milele", "Kuongeza nyingine tano kama hiyo", "Kuficha dashibodi"], answer: 0, why: "Dashibodi ni kwa ajili ya maamuzi; ondoa namba zisizosaidia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kusimamia Shamba kwa Data na Apps za Simu",
    questions: [
      { objective: "O1", q: "Kipimo kipi muhimu zaidi cha app ya shamba?", options: ["Ina sifa nyingi zaidi", "Ni ya bei ghali zaidi", "Ilitangazwa redioni", "Wewe na wafanyakazi wako mnaitumia kila siku"], answer: 3, why: "Zana ambayo hakuna anayeitumia haikupi data yoyote." },
      { objective: "O1", q: "Sifa ipi inamruhusu mfanyakazi kuandika kazi bila kuona mishahara?", options: ["Watumiaji kadhaa wenye ruhusa tofauti", "Hali ya giza (dark mode)", "Simu za video", "Picha bila kikomo"], answer: 0, why: "Ruhusa kwa kazi inaweka data ya faragha kuwa ya faragha." },
      { objective: "O1", q: "Je, spreadsheet ya bure ya pamoja inaweza kuchukua nafasi ya app ya shamba?", options: ["Hapana, kamwe", "Ndiyo, ikiandaliwa vizuri na kutumiwa kila siku", "Kwa mashamba makubwa sana tu", "Ikichapishwa tu"], answer: 1, why: "Spreadsheet ya pamoja iliyoandaliwa vizuri inaweza kufuatilia mashamba, kazi, stoo na malipo." },
      { objective: "O2", q: "Lipi ni jina zuri la shamba kwenye rejista?", options: ["\"Lile karibu na barabara\"", "\"Nyanya\"", "\"F1 Nyanya ekari 0.5\"", "Jina tofauti kila wiki"], answer: 2, why: "Jina fupi lisilobadilika lenye ukubwa linawezesha kumbukumbu kujumlishwa." },
      { objective: "O2", q: "Kwa nini uweke vipimo visivyobadilika kama \"mifuko ya kilo 50\" kwa kila pembejeo?", options: ["Ili jumla na stoo iliyobaki viwe sahihi", "Kwa sababu wauzaji wanataka hivyo", "Ili wafanyakazi waandike kidogo", "Haijalishi"], answer: 0, why: "Vipimo vilivyochanganyika vinafanya jumla kuwa si sahihi." },
      { objective: "O2", q: "Mfanyakazi anapoandika \"mifuko 2 ya NPK imetumika F1\", orodha ya stoo inapaswa:", options: ["Kubaki ile ile", "Kuongezeka kwa mbili", "Kufutwa", "Kupungua kwa mbili"], answer: 3, why: "Stoo iliyobaki = stoo iliyoingia toa stoo iliyotumika." },
      { objective: "O2", q: "Ni mara ngapi unapaswa kuhesabu stoo ya pembejeo na kuilinganisha na orodha?", options: ["Mara moja kwa mwaka", "Baada ya wizi tu", "Kila wiki", "Kamwe"], answer: 2, why: "Kuhesabu kila wiki kunagundua mapengo mapema." },
      { objective: "O3", q: "Nini kinaunganisha malipo ya pesa za simu na kumbukumbu ya mfanyakazi?", options: ["Namba ya muamala", "Rangi ya simu", "Picha ya kitambulisho cha mfanyakazi kwenye WhatsApp", "Hali ya hewa"], answer: 0, why: "Namba inathibitisha malipo na kuyaunganisha na kumbukumbu." },
      { objective: "O3", q: "Mfanyakazi alifanya kazi siku 5 kwa malipo ya mfano ya NGN 4,000 kwa siku. Kumbukumbu inapaswa kuonyesha:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; siku mara malipo ya siku lazima zilingane na kiasi kilicholipwa." },
      { objective: "O3", q: "Unakagua wapi kima cha chini cha mshahara kinachotakiwa kisheria?", options: ["Kikundi cha WhatsApp", "Muuzaji wa pembejeo", "Msaidizi wa AI peke yake", "Wizara ya kazi ya nchi yako"], answer: 3, why: "Sheria za mishahara zinatoka kwa mamlaka rasmi ya kazi na zinabadilika kwa muda." },
      { objective: "O6", q: "Shamba linahitaji data ipi kuhusu kibarua?", options: ["Jina, namba ya pesa za simu, siku na malipo", "PIN yake", "Picha ya kitambulisho chake kwenye kikundi cha WhatsApp", "Nywila yake ya benki"], answer: 0, why: "Kusanya unachohitaji tu." },
      { objective: "O6", q: "Ofisi ipi inasimamia data binafsi nchini Kenya?", options: ["Idara ya Hali ya Hewa ya Kenya", "Bodi ya Bidhaa za Kudhibiti Wadudu (Pest Control Products Board)", "Ofisi ya Kamishna wa Ulinzi wa Data", "KALRO"], answer: 2, why: "ODPC ndiyo chombo cha kusimamia ulinzi wa data nchini Kenya." },
      { objective: "O6", q: "Mnunuzi anaomba kumbukumbu za shamba lako. Unapaswa:", options: ["Kutuma kila kitu, pamoja na malipo", "Kushiriki tu anachohitaji na kuuliza jinsi atakavyozitumia", "Kukataa kumuuzia", "Kutuma nywila ya simu yako"], answer: 1, why: "Shiriki kidogo kinachohitajika na ujue kitatumiwa vipi." },
      { objective: "O4", q: "Ripoti ya kila siku kutoka shambani inapaswa kuwa na nini?", options: ["Habari njema tu", "Hadithi ndefu", "Hakuna; ripoti hazihitajiki", "Namba, matatizo na picha za sehemu zile zile"], answer: 3, why: "Maudhui yasiyobadilika yanakuwezesha kulinganisha siku kwa siku." },
      { objective: "O4", q: "Kipi ni vigumu zaidi kughushi unapokagua ripoti?", options: ["Taarifa ya pesa za simu", "Ujumbe wa sauti", "Ahadi", "Ujumbe unaosema \"kila kitu sawa\""], answer: 0, why: "Taarifa za malipo na risiti ni kumbukumbu huru." },
      { objective: "O4", q: "Lengo la mkutano wa kila wiki ni nini?", options: ["Kumfokea meneja", "Kupitia namba, stoo na mpango wa wiki ijayo pamoja", "Kuchukua nafasi ya kumbukumbu zote", "Kuwalipa wauzaji"], answer: 1, why: "Unageuza namba kuwa maamuzi." },
      { objective: "O5", q: "Kozi hii inapendekeza namba ngapi kwa dashibodi ya kila wiki?", options: ["Moja", "Ishirini", "Tano", "Hamsini"], answer: 2, why: "Namba tano zinaweza kusomwa na kufanyiwa kazi kwa dakika mbili." },
      { objective: "O5", q: "Ipi ni namba ya hasara kwa shamba la kuku wa mayai?", options: ["Mayai yaliyouzwa", "Chakula kilicholetwa", "Wafanyakazi waliokuwepo", "Kuku waliokufa wiki hii"], answer: 3, why: "Hasara kama kuku waliokufa zinakuonya mapema." },
      { objective: "O5", q: "\"Kuku waliokufa zaidi ya 3 kwa siku: mpigie daktari wa mifugo siku hiyo hiyo\" ni mfano wa:", options: ["Kiwango cha kawaida pamoja na hatua", "Kanuni ya ulinzi wa data", "Namba ya muamala wa pesa za simu", "Hesabu ya stoo"], answer: 0, why: "Kila namba ya dashibodi ina kiwango na hatua unayochukua." },
      { objective: "O5", q: "Kwa nini uweke safu moja kwa kila wiki kwenye dashibodi?", options: ["Kujaza ukurasa", "Kuona mwelekeo kwa muda", "Kwa sababu apps zinataka hivyo", "Kuficha wiki mbaya"], answer: 1, why: "Mwelekeo unaonyesha matatizo kabla hayajawa makubwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Namba tano zenye manufaa", objective: "O5", notYet: "Chini ya namba tano, au namba zisizoleta uamuzi wowote.", meets: "Namba tano zinazohusu pesa, mazao, hasara, stoo na wafanyakazi, kila moja na kiwango cha kawaida na hatua.", exceeds: "Angalau wiki mbili zimejazwa, na uamuzi mmoja tayari umechukuliwa kwa sababu ya namba." },
      { name: "Namba zinatoka kwenye kumbukumbu", objective: "O2", notYet: "Namba zimekisiwa au zimekumbukwa.", meets: "Kila namba inataja chanzo chake kwenye rejista (daftari la shughuli, orodha ya stoo, kumbukumbu ya malipo).", exceeds: "Rejista inatumia majina na vipimo visivyobadilika, na hesabu ya stoo inalingana na orodha." },
      { name: "Kazi na malipo yameandikwa", objective: "O3", notYet: "Kazi haijaandikwa au imelipwa bila kumbukumbu.", meets: "Siku za kazi zinatoka kwenye daftari la mahudhurio na malipo yana namba za muamala.", exceeds: "Siku x malipo ya siku zinakaguliwa dhidi ya malipo kila wiki." },
      { name: "Utaratibu wa ripoti", objective: "O4", notYet: "Hakuna ripoti maalum, au \"piga simu inapohitajika\" tu.", meets: "Maudhui na saa ya ripoti ya kila siku, mkutano wa kila wiki, na angalau njia mbili za kukagua zimeandikwa.", exceeds: "Inajumuisha kutembelea bila taarifa au maoni ya pili ya mtu unayemwamini, na jinsi namba za ajabu zinavyoulizwa." },
      { name: "Data imelindwa", objective: "O6", notYet: "PIN, namba za vitambulisho au malipo vinaonekana kwa kila mtu.", meets: "Data inayohitajika tu ndiyo inakusanywa, na ruhusa imewekwa kwa kazi.", exceeds: "Inajumuisha nakala ya akiba, kuingia kwa hatua mbili na kuondoa wanaoondoka siku hiyo hiyo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi bado wanaopitia dashibodi yao ya kila wiki siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi waliogundua na kurekebisha pengo la stoo, wafanyakazi au mauzo ndani ya siku 60",
      "Sehemu ya malipo ya wafanyakazi yaliyofanywa na namba ya muamala iliyoandikwa",
      "Vikundi vya wakulima au programu zinazoripoti hasara chache au migogoro michache kuhusu malipo baada ya kozi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye WhatsApp na pesa za simu",
      "App ya bure ya spreadsheet (Google Sheets au Microsoft Excel) au app ya shamba ambayo mwanafunzi anaijaribu",
      "Taarifa za shamba la mwanafunzi mwenyewe, au namba za mfano katika masomo",
      "Karatasi na kalamu kwa jedwali la alama na jedwali la ruhusa",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Inafaa vizuri kwa vikundi vya wakulima, programu za vijana wajasiriamali wa kilimo na vyama vya wamiliki wanaoishi mbali; sura moja kwa kila kipindi.",
      "Usipendekeze wala kuuza app yoyote katika kipindi; waache wanafunzi wapime chaguo kwa orodha ya sifa.",
      "Usiwaombe kamwe wanafunzi waonyeshe PIN halisi, nywila, namba za vitambulisho au malipo ya watu wengine mbele ya kikundi.",
      "Inapowezekana, waunganishe wamiliki na mameneja wao kwa kazi ya Somo la 5, ili utaratibu ukubaliwe na wote wawili.",
      "Wakumbushe wanafunzi kwamba sheria za mishahara, kazi na ulinzi wa data zinatofautiana kwa nchi na zinabadilika; angalia vyanzo rasmi.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
