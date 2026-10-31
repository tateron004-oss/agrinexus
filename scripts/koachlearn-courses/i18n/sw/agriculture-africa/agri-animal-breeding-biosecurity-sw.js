"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-animal-breeding-biosecurity.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WOAH_ASF = { name: "Shirika la Dunia la Afya ya Wanyama (WOAH): Homa ya Nguruwe ya Afrika (African swine fever)", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (Juni 2025): tumia chanjo za ASF zenye ubora wa juu tu, zinazofikia kiwango kipya", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: Homa ya Nguruwe ya Afrika (hakuna chanjo wala tiba inayofaa; kinga ndiyo njia ya kudhibiti)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "Shirika la Dunia la Afya ya Wanyama (WOAH): Mafua ya ndege (avian influenza)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Mafua ya ndege (dalili kwa ndege)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Mbinu bora za usalama wa kibiolojia katika ufugaji wa nguruwe (Animal Production and Health Paper 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Mbinu bora za usalama wa kibiolojia katika ufugaji mdogo wa kuku wa kibiashara na wa kienyeji nchini Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "University of Georgia Extension: Mbinu za kugundua joto kwa ng'ombe wa maziwa (joto la kusimama, kanuni ya AM-PM)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Kenya Animal Genetic Resources Centre (KAGRC): mbegu za uhimilishaji na vifaa vya AI", url: "https://kagrc.go.ke/" };
const KVB = { name: "Kenya Veterinary Board (orodha ya madaktari wa mifugo na wataalamu wasaidizi wa mifugo waliosajiliwa)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (orodha ya madaktari wa mifugo waliosajiliwa)", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Mafunzo kwa watoa huduma za uhimilishaji bandia katika jamii", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Mfumo wa Taarifa za Aina za Wanyama wa Kufugwa (taarifa za aina kwa kila nchi)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-sw",
  lang: "sw",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Ufugaji, Uzalishaji wa Mifugo na Usalama wa Kibiolojia Shambani",
  skills: "Kuchagua aina ya mifugo inayofaa hali ya hewa na soko lako, Kugundua joto na kuweka kumbukumbu za uzalishaji, Kupanga uhimilishaji bandia na fundi aliyefunzwa, Kuepuka kuzaliana kwa ndugu, Kuandika mpango wa usalama wa kibiolojia wa shamba, Kutambua na kuripoti Homa ya Nguruwe ya Afrika na mafua ya ndege",
  outcome: "kuzalisha ng'ombe, mbuzi, nguruwe au kuku wako kwa mpango na kuzuia magonjwa: kuchagua aina inayofaa hali ya hewa na soko lako, kugundua joto na kuandika kila upandishaji, kutumia fundi wa AI aliyefunzwa, kuepuka kuzaliana kwa ndugu, kufuata mpango ulioandikwa wa usalama wa kibiolojia, na kuripoti mara moja kwa daktari wa mifugo unaposhuku Homa ya Nguruwe ya Afrika au mafua ya ndege.",
  about: [
    "Kozi hii ni kwa wafugaji wadogo na wanaokua, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo na maafisa ugani nchini Kenya, Nigeria, Ghana, Senegal, Cameroon na kote Afrika wanaofuga ng'ombe wa maziwa, mbuzi, nguruwe au kuku na wanataka kuongeza mifugo bila kuleta magonjwa.",
    "Sura ya 1 inahusu kuzalisha vizuri: kuchagua aina sahihi, kugundua joto na kuweka kumbukumbu za uzalishaji, na kutumia uhimilishaji bandia (AI) kupitia fundi aliyefunzwa huku ukiepuka kuzaliana kwa ndugu. Sura ya 2 inahusu kuzuia magonjwa: mpango wa usalama wa kibiolojia wenye maeneo, dimbwi la kuosha buti na kanuni za wageni, karantini kwa wanyama wapya na kutupa mizoga kwa usalama, na magonjwa mawili ambayo kila mfugaji wa nguruwe na kuku lazima ayajue: Homa ya Nguruwe ya Afrika na mafua ya ndege.",
    "Kozi hii inajengwa juu ya kozi \"Afya na Usimamizi wa Mifugo\", inayohusu ukaguzi wa afya wa kila siku, chanjo pamoja na daktari wa mifugo na ugonjwa wa Newcastle (kideri). Haitoi vipimo vya dawa, chanjo wala homoni: fuata daktari wako wa mifugo na maelekezo ya kifurushi kila wakati. Kila somo linachukua kama dakika tano na linaishia na kazi kwenye shamba lako. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa usalama wa kibiolojia wa ukurasa mmoja kwa kitengo chako (shamba lako, au mfano kama nguruwe 20 karibu na Abeokuta, kuku 500 wa mayai karibu na Kumasi, ng'ombe 4 wa maziwa Nyeri au kuku 300 wa nyama karibu na Thies): mchoro wenye eneo safi, eneo la kati na eneo chafu pamoja na mlango mmoja wa kuingia; kanuni zako za dimbwi la kuosha buti na kunawa mikono; kanuni zako za wageni na magari pamoja na daftari la wageni; jinsi utakavyowaweka karantini wanyama wapya; jinsi utakavyotupa wanyama waliokufa; dalili za hatari za Homa ya Nguruwe ya Afrika au mafua ya ndege na utakachofanya katika saa ya kwanza, pamoja na jina na namba ya simu ya daktari wako wa mifugo au ofisi ya mifugo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wafugaji wadogo na wafugaji wa kibiashara wanaokua, wafanyakazi wa shamba, vijana wajasiriamali wa kilimo na maafisa ugani katika Afrika Mashariki, Magharibi na Kati (pamoja na nchi zinazozungumza Kifaransa) wanaofuga ng'ombe wa maziwa, mbuzi, nguruwe au kuku.",
    startingPoint: "Wanaweza kulisha na kutunza wanyama na kumtambua mnyama anayeonekana mgonjwa. Wengi huzalisha kwa dume lolote lililo karibu, huweka kumbukumbu chache zilizoandikwa za uzalishaji, na huwaruhusu wageni, wafanyabiashara na wanyama wapya kuingia shambani bila kanuni zozote.",
    gap: "Wakulima wanaotaka maziwa, nyama au mayai zaidi mara nyingi hununua aina zisizofaa hali ya hewa au chakula chao, hukosa joto, hupoteza huduma za AI na huruhusu kuzaliana kwa ndugu bila kujua. Mgeni mmoja, lori moja au nguruwe mmoja mpya anaweza kuleta Homa ya Nguruwe ya Afrika, isiyo na chanjo wala tiba inayofaa, au mafua ya ndege, yanayoweza kuua kuku wengi wa kundi. Utaratibu ulioandikwa wa uzalishaji na mpango wa usalama wa kibiolojia unalinda shamba na majirani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; wanafunzi wengi wanasoma Kiswahili au Kiingereza kama lugha ya pili, na kozi inapatikana pia kwa lugha nyingine",
      "Vifaa: simu ya kawaida au simu janja, karatasi na kalamu; data kidogo",
      "Pesa: hatua za gharama ndogo kwanza; takwimu kwa KES, NGN, GHS na XOF ni mifano tu",
      "Kanuni za afya ya wanyama: hakuna vipimo vya dawa, chanjo wala homoni, na hakuna vipindi vya kusubiri baada ya dawa; fuata daktari wa mifugo na maelekezo ya kifurushi",
      "ASF na mafua ya ndege ni magonjwa yanayopaswa kuripotiwa kisheria: tukio linaloshukiwa linaripotiwa mara moja kwa daktari wa mifugo au mamlaka ya mifugo, na kanuni za kitaifa zinatofautiana kwa nchi"
    ],
    prerequisites: "Utunzaji wa msingi wa wanyama. Inashauriwa kuanza na kozi \"Afya na Usimamizi wa Mifugo\" (Agriculture (Africa))."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukizingatia hali ya hewa, chakula unachoweza kupata na soko lako", action: "kuchagua aina au chotara inayofaa shamba lako na kutoa sababu za uchaguzi huo", standard: "ukitaja angalau sababu tatu zinazofaa shamba lako" },
    { id: "O2", condition: "Ukitumia daftari au simu wakati wa ukaguzi wa mara mbili kwa siku", action: "kuandika dalili za joto, upandishaji na tarehe za kuzaa zinazotarajiwa kwa kila jike la kuzalisha", standard: "bila tarehe yoyote kukosekana kwa wanyama unaowazalisha" },
    { id: "O3", condition: "Ng'ombe au mbuzi anapoonyesha joto la kusimama", action: "kupanga uhimilishaji bandia na fundi wa AI aliyefunzwa na kusajiliwa kwa wakati sahihi", standard: "ukimpigia fundi siku hiyo hiyo na kuandika taarifa za mbegu au dume" },
    { id: "O4", condition: "Ukitumia kumbukumbu zako za uzalishaji", action: "kupanga upandishaji unaoepuka kuzalisha ndugu wa karibu", standard: "bila upandishaji wa mzazi na mtoto wala wa kaka na dada katika mpango" },
    { id: "O5", condition: "Kwa shamba au kitengo chako mwenyewe", action: "kuandika mpango wa usalama wa kibiolojia wenye maeneo, dimbwi la kuosha buti, kanuni za wageni, karantini na utupaji wa wanyama waliokufa", standard: "ukishughulikia sehemu zote tano kwenye ukurasa mmoja" },
    { id: "O6", condition: "Nguruwe au kuku wanapoonyesha dalili za hatari au kufa ghafla", action: "kutambua dalili za Homa ya Nguruwe ya Afrika au mafua ya ndege na kuziripoti kwa daktari wa mifugo au mamlaka ya mifugo", standard: "mara moja, bila kuwahamisha, kuwauza wala kuwala wanyama hao" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuzalisha kwa mifugo bora",
      lessons: [
        {
          title: "Kuchagua aina kwa hali ya hewa na soko lako",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chagua aina au chotara inayofaa hali ya hewa yako, chakula chako na wanunuzi wako.",
          text: [
            "Aina bora ni ile inayoleta pesa kwenye shamba lako, si ile yenye namba kubwa kabisa kwenye kijitabu cha matangazo. Ng'ombe wa maziwa wa kigeni mwenye mazao mengi anahitaji chakula kingi kizuri, maji safi, kivuli na huduma ya karibu ya afya. Katika eneo lenye joto kali na ukame na malisho duni, anaweza kutoa maziwa kidogo kuliko chotara wa kienyeji mstahimilivu na kuugua mara nyingi zaidi.",
            "Aina za kienyeji, kama Zebu wa Afrika Mashariki, mbuzi mdogo wa Afrika Magharibi (West African Dwarf) au ng'ombe wa N'Dama wa Afrika Magharibi, wanastahimili joto, kupe na chakula duni lakini wanakua na kuzalisha kidogo. Aina za kigeni, kama ng'ombe wa maziwa wa Friesian au Ayrshire, nguruwe wa Large White au kuku chotara wa kibiashara, wanazalisha zaidi unapoweza kuwalisha na kuwalinda vizuri. Chotara mara nyingi wako katikati.",
            "Anza na soko lako: nani ananunua, analipia nini (maziwa, uzito wa mnyama hai, nyama isiyo na mafuta mengi, mayai, mbuzi wa sikukuu) na lini. Kisha angalia unachoweza kutoa mwaka mzima: chakula, maji, banda, nguvu kazi na daktari wa mifugo. Muulize afisa ugani wako, chama cha wafugaji au taasisi ya utafiti ya nchi yako ni aina zipi zinafanya vizuri katika eneo lako. Hifadhidata ya FAO ya DAD-IS inaorodhesha aina zinazofugwa katika kila nchi."
          ],
          steps: ["Andika wanunuzi wako wanataka nini na wanalipia nini.", "Andika unachoweza kutoa mwaka mzima: chakula, maji, banda, nguvu kazi, daktari wa mifugo.", "Orodhesha aina au chotara mbili au tatu wanazofuga wakulima walio karibu nawe.", "Muulize afisa ugani wako au chama cha wafugaji kuhusu kila moja.", "Chagua aina inayolingana na orodha zote mbili, na uandike sababu tatu."],
          words: [["Aina (breed)", "kundi la wanyama wa jamii moja wenye sura na tabia zinazofanana, zinazorithiwa kutoka kwa wazazi kwenda kwa watoto."], ["Aina ya kigeni", "aina iliyozalishwa katika eneo jingine, mara nyingi yenye mazao mengi lakini isiyostahimili vizuri joto, magonjwa na chakula cha hapa."], ["Chotara", "mnyama ambaye wazazi wake ni wa aina mbili tofauti."]],
          slides: [
            { title: "Aina sahihi inaleta pesa kwenye shamba LAKO", bullets: ["Namba kubwa za matangazo zinahitaji pembejeo kubwa", "Chakula duni na joto vinapunguza mazao haraka", "Chagua kwa ajili ya shamba lako, si kwa picha"] },
            { title: "Kienyeji, kigeni au chotara", bullets: ["Kienyeji: mstahimilivu, anavumilia joto, kupe na chakula duni", "Kigeni: mazao mengi, anahitaji chakula kizuri na utunzaji", "Chotara: mara nyingi katikati"] },
            { title: "Anza na soko", bullets: ["Wanunuzi wanalipia nini: maziwa, nyama, mayai?", "Wananunua lini?", "Unaweza kutoa nini mwaka mzima?"] },
            { title: "Uliza kabla ya kununua", bullets: ["Afisa ugani au chama cha wafugaji", "Wakulima walio karibu nawe wenye aina hiyo", "FAO DAD-IS inaorodhesha aina kwa kila nchi"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Andika orodha mbili fupi za shamba lako: wanunuzi wako wanataka nini, na unachoweza kutoa mwaka mzima. Taja aina au chotara mbili na uchague moja, pamoja na sababu tatu.",
          youCanNow: "kuchagua aina au chotara inayofaa hali ya hewa yako, chakula chako na soko lako, na kueleza kwa nini.",
          quickCheck: [
            { objective: "O1", q: "Mkulima katika eneo lenye joto kali, ukame na malisho duni anataka ng'ombe wa maziwa. Chaguo lipi linafaa zaidi?", options: ["Ng'ombe wa kigeni mwenye mazao mengi kabisa anayeweza kupata", "Ng'ombe yeyote aliye bei rahisi zaidi sokoni", "Chotara wa kienyeji mstahimilivu anayefaa joto na chakula", "Aina iliyochaguliwa kutoka picha ya kijitabu cha matangazo"], answer: 2, why: "Aina inayostahimili joto na chakula alicho nacho kweli itazalisha zaidi kwa muda kuliko ile inayohitaji pembejeo asizoweza kutoa." },
            { objective: "O1", q: "Unapaswa kuandika nini KWANZA unapochagua aina?", options: ["Jina la aina anayoipenda jirani yako", "Wanunuzi wako wanataka nini na wanalipia nini", "Rangi unayoipenda", "Aina yenye wanyama wakubwa zaidi"], answer: 1, why: "Soko linaamua kinacholipa; kisha unaangalia shamba lako linaweza kutoa nini." }
          ]
        },
        {
          title: "Kugundua joto na kumbukumbu za uzalishaji",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mtambue jike aliye kwenye joto na uandike joto, upandishaji na tarehe za kuzaa.",
          text: [
            "Ng'ombe, mbuzi au nguruwe jike anaweza kushika mimba kwa muda mfupi tu anapokuwa \"kwenye joto\". Ukilikosa, unasubiri kama wiki tatu hadi joto linalofuata, huku bado unamlisha. Ng'ombe, mbuzi na nguruwe kwa kawaida huingia kwenye joto kila baada ya siku 21 hivi, lakini hii inatofautiana, kwa hiyo angalia kwa makini.",
            "Dalili ya uhakika zaidi kwa ng'ombe ni joto la kusimama: anasimama tuli mnyama mwingine anapompanda. Dalili nyingine ni kuwapanda wanyama wengine, kutotulia, kulia kwa sauti, ute safi unaonata kutoka sehemu ya siri na maziwa kupungua. Mbuzi hutikisa mkia, hulia na humtafuta beberu. Nguruwe jike aliye kwenye joto husimama tuli unapobonyeza mgongo wake. Angalia angalau mara mbili kwa siku, asubuhi na mapema na jioni, kwa dakika 20 hadi 30, wanyama wakiwa wametulia.",
            "Kumbukumbu zinageuza makisio kuwa mpango. Kwa kila jike andika: kitambulisho chake, tarehe na saa ya kila joto, tarehe alipopandishwa, kwa fahali, beberu au nguruwe dume yupi au kwa mrija upi wa AI, na tarehe ya kuzaa inayotarajiwa. Hapo utajua lini kuangalia kama amerudi kwenye joto, kama wiki 3 baadaye, lini kumkausha ng'ombe, na ni majike yapi yanaendelea kushindwa kushika mimba. Mimba ni kama miezi 9 kwa ng'ombe, kama miezi 5 kwa mbuzi, na kama miezi 3, wiki 3 na siku 3 kwa nguruwe jike; daktari wako wa mifugo au afisa ugani anaweza kukupa takwimu kamili za aina yako."
          ],
          steps: ["Mpe kila jike la kuzalisha kitambulisho: hereni ya sikio, jina au namba.", "Angalia dalili za joto mara mbili kwa siku, asubuhi na jioni.", "Andika tarehe, saa na dalili ulizoona.", "Andika tarehe ya upandishaji na dume au mrija wa AI uliotumika.", "Ongeza tarehe ya kuangalia kama amerudi kwenye joto, kama wiki 3 baadaye.", "Andika tarehe ya kuzaa inayotarajiwa, na hakikisha mimba na daktari wa mifugo au fundi wako."],
          words: [["Joto (oestrus)", "muda mfupi ambapo jike anamkubali dume na anaweza kushika mimba."], ["Joto la kusimama", "ng'ombe anaposimama tuli ili apandwe; dalili ya uhakika zaidi kwamba yuko kwenye joto."], ["Upandishaji", "kupandisha jike, kwa dume au kwa uhimilishaji bandia."], ["Kipindi cha mimba", "muda kutoka kushika mimba hadi kuzaa."]],
          slides: [
            { title: "Joto ni fupi; kulikosa kunagharimu wiki 3", bullets: ["Ng'ombe, mbuzi na nguruwe: kila baada ya siku 21 hivi", "Joto lililokosekana = wiki za chakula bila mimba"] },
            { title: "Dalili za joto", bullets: ["Ng'ombe: anasimama ili apandwe (dalili ya uhakika zaidi)", "Kuwapanda wengine, kutotulia, ute safi", "Mbuzi: kutikisa mkia; nguruwe jike: anasimama akibonyezwa"] },
            { title: "Angalia mara mbili kwa siku", bullets: ["Asubuhi na mapema na jioni", "Dakika 20 hadi 30, wanyama wakiwa wametulia"] },
            { title: "Kumbukumbu ya uzalishaji", bullets: ["Kitambulisho, tarehe na saa ya joto, tarehe ya upandishaji", "Dume au mrija wa AI uliotumika", "Tarehe ya kuangalia kurudi kwa joto na tarehe ya kuzaa"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Tengeneza ukurasa wa kumbukumbu za uzalishaji kwenye karatasi au kwenye simu wenye safu hizi: kitambulisho cha mnyama, tarehe na saa ya joto, dalili ulizoona, tarehe ya upandishaji, dume au mrija wa AI, kuangalia kurudi kwa joto, tarehe ya kuzaa. Ujaze kwa jike mmoja wako, au kwa ng'ombe wa mfano.",
          youCanNow: "kutambua dalili za joto na kuweka kumbukumbu ya uzalishaji yenye joto, upandishaji na tarehe za kuzaa.",
          quickCheck: [
            { objective: "O2", q: "Dalili ipi ni ya uhakika zaidi kwamba ng'ombe yuko kwenye joto?", options: ["Anakula zaidi ya kawaida", "Analala chini sana", "Anasimama tuli mnyama mwingine anapompanda", "Manyoya yake yanang'aa"], answer: 2, why: "Kusimama ili apandwe ndiyo dalili ya uhakika zaidi ya joto; dalili nyingine zinaashiria tu." },
            { objective: "O2", q: "Mbuzi wako alipandishwa tarehe 1 Machi. Utaangalia lini kama amerudi kwenye joto?", options: ["Kama wiki 3 baadaye, karibu tarehe 22 Machi", "Siku inayofuata", "Baada ya miezi 6", "Kamwe; lazima ana mimba"], answer: 0, why: "Joto huja kila baada ya siku 21 hivi, kwa hiyo jike ambaye hakushika mimba huonyesha joto tena kama wiki 3 baadaye." }
          ]
        },
        {
          title: "Uhimilishaji bandia na kuepuka kuzaliana kwa ndugu",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Panga AI na fundi aliyefunzwa kwa wakati sahihi, na upange upandishaji unaoepuka ndugu wa karibu.",
          text: [
            "Uhimilishaji bandia (AI) ni kuweka mbegu za dume aliyethibitishwa ndani ya njia ya uzazi ya jike. Unampa mkulima mdogo urithi wa fahali au beberu bora bila kumfuga, na unapunguza hatari ya magonjwa yanayoenezwa kwa kupandana. AI hufanywa na fundi wa AI aliyefunzwa au daktari wa mifugo, si na mkulima. Mbinu isiyo sahihi inaweza kumuumiza mnyama, na mbegu lazima zihifadhiwe zikiwa zimeganda ndani ya naitrojeni ya maji hadi wakati wa kutumia, la sivyo zinakufa.",
            "Tafuta fundi aliyefunzwa na kusajiliwa: uliza ofisi ya mifugo ya kaunti au wilaya yako, chama chako cha ushirika cha maziwa au daktari wa mifugo aliyesajiliwa. Nchini Kenya, KAGRC husambaza mbegu kupitia mawakala walioteuliwa, na mafundi wa AI wanapaswa kusajiliwa na Kenya Veterinary Board; nchini Nigeria, hakikisha daktari wa mifugo yuko kwenye orodha ya Veterinary Council of Nigeria. Kanuni ya kawaida kwa ng'ombe ni AM-PM: ng'ombe anayeonekana kwanza kwenye joto la kusimama asubuhi anapandishwa mchana au jioni ya siku hiyo; anayeonekana kwanza mchana anapandishwa asubuhi inayofuata. Mpigie fundi simu mara tu unapoona joto, na uandike jina au namba ya fahali iliyo kwenye mrija.",
            "Kuzaliana kwa ndugu (inbreeding) ni kupandisha ndugu wa karibu: baba na binti yake, mama na mwanawe wa kiume, au kaka na dada yake. Watoto mara nyingi ni dhaifu zaidi, hukua polepole, huugua zaidi na wanaweza kuzaliwa na kasoro. Hutokea kimya kimya fahali, beberu, nguruwe dume au jogoo yule yule anapokaa shambani kwa miaka. Kuzuia: weka kumbukumbu za mama na baba wa kila mnyama, badilisha au uza dume lako kabla binti zake hawajafikia umri wa kuzalishwa, azima au badilishana madume na wakulima ambao wanyama wao si ndugu na wako, na tumia mirija ya AI ya fahali tofauti kila unapomzalisha binti."
          ],
          steps: ["Ukiona joto la kusimama: andika saa.", "Mpigie fundi wako wa AI aliyesajiliwa mara moja.", "Tumia kanuni ya AM-PM kwa ng'ombe, au ushauri wa fundi.", "Hakikisha mrija unatoka kwa fahali anayejulikana na uandike jina au namba yake.", "Kabla ya kila upandishaji, angalia kumbukumbu: je, dume huyu ni baba, mwana au kaka yake?", "Kama ndiyo, tumia dume jingine au fahali tofauti wa AI."],
          words: [["Uhimilishaji bandia (AI)", "kuweka kwa mkono mbegu za dume aliyechaguliwa ndani ya jike, kunakofanywa na fundi aliyefunzwa."], ["Mrija (straw)", "kijiti chembamba chenye kipimo kimoja cha mbegu zilizoganda, chenye jina au namba ya fahali."], ["Naitrojeni ya maji", "kimiminika baridi sana kinachohifadhi mbegu zikiwa zimeganda hadi zitumike."], ["Kuzaliana kwa ndugu", "kupandisha ndugu wa karibu, jambo linaloleta watoto dhaifu wenye kasoro zaidi."]],
          slides: [
            { title: "Kwa nini AI", bullets: ["Urithi bora bila kufuga fahali", "Hatari ndogo ya magonjwa yanayoenezwa kwa kupandana", "Hufanywa na fundi aliyefunzwa, si na mkulima"] },
            { title: "Tafuta fundi aliyesajiliwa", bullets: ["Ofisi ya mifugo, chama cha ushirika cha maziwa au daktari wa mifugo", "Kenya: mawakala wa KAGRC, Kenya Veterinary Board", "Nigeria: orodha ya Veterinary Council of Nigeria"] },
            { title: "Wakati: kanuni ya AM-PM kwa ng'ombe", bullets: ["Joto limeonekana asubuhi: pandisha mchana huo", "Joto limeonekana mchana: pandisha asubuhi inayofuata", "Andika jina au namba ya fahali iliyo kwenye mrija"] },
            { title: "Epuka kuzaliana kwa ndugu", bullets: ["Hakuna baba na binti, mama na mwana, kaka na dada", "Badilisha dume lako kabla binti zake hawajazalishwa", "Tumia fahali tofauti wa AI kwa kila binti"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Andika jina na namba ya simu ya fundi wa AI aliyefunzwa na kusajiliwa aliye karibu nawe (uliza ofisi yako ya mifugo au chama cha ushirika). Kisha waangalie wanyama wako: orodhesha jike yeyote aliye ndugu wa karibu wa dume lako la sasa, na uandike jinsi utakavyomzalisha badala yake.",
          youCanNow: "kupanga AI na fundi aliyefunzwa kwa wakati sahihi na kupanga upandishaji unaoepuka ndugu wa karibu.",
          quickCheck: [
            { objective: "O3", q: "Ng'ombe anaonyesha joto la kusimama saa 1 asubuhi (7 am). Kwa kanuni ya AM-PM, apandishwe lini?", options: ["Baada ya siku mbili", "Mchana au jioni ya siku hiyo", "Wiki ijayo", "Pale tu atakapoacha kuonyesha joto"], answer: 1, why: "Ng'ombe anayeonekana kwanza kwenye joto asubuhi anapandishwa mchana au jioni ya siku hiyo." },
            { objective: "O4", q: "Fahali wako amekuwa shambani kwa miaka minne na binti zake sasa wako tayari kuzalishwa. Unafanya nini?", options: ["Kuendelea kumtumia kwa wote", "Kumtumia kwa binti wakubwa zaidi tu", "Kuacha kuzalisha kwa mwaka mmoja", "Kutumia fahali tofauti au AI ya fahali asiye ndugu kwa binti zake"], answer: 3, why: "Kumpandisha fahali na binti zake ni kuzaliana kwa ndugu; dume asiye ndugu au fahali tofauti wa AI anaepuka hilo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuzalisha kwa mifugo bora",
        questions: [
          { objective: "O1", q: "Kwa nini aina ya kigeni yenye mazao mengi inaweza kuleta pesa kidogo kuliko chotara wa kienyeji kwenye mashamba mengine?", options: ["Aina za kigeni hazitoi maziwa mengi kamwe", "Wanyama wa kienyeji huuzwa kwa bei kubwa kila wakati", "Aina za kigeni haziwezi kulishwa nyasi", "Inahitaji chakula, maji na utunzaji ambao shamba haliwezi kutoa, kwa hiyo inazalisha kidogo na inaugua zaidi"], answer: 3, why: "Mazao mengi yanategemea chakula kizuri na utunzaji; bila hivyo, chotara mstahimilivu mara nyingi hufanya vizuri zaidi." },
          { objective: "O2", q: "Unapaswa kuangalia dalili za joto mara ngapi?", options: ["Angalau mara mbili kwa siku, asubuhi na jioni", "Mara moja kwa wiki", "Pale tu mnyama anapougua", "Mara moja kwa mwezi"], answer: 0, why: "Joto ni fupi, kwa hiyo kuangalia mara mbili kwa siku wanyama wakiwa wametulia kunagundua joto nyingi." },
          { objective: "O2", q: "Kipi kati ya hivi kinapaswa kuwa kwenye kumbukumbu ya uzalishaji?", options: ["Hali ya hewa ya kila siku", "Tarehe ya upandishaji na dume au mrija wa AI uliotumika", "Rangi ya banda", "Bei ya mafuta"], answer: 1, why: "Tarehe ya upandishaji na dume vinakuwezesha kuangalia kurudi kwa joto, kujua tarehe ya kuzaa na kuepuka kuzaliana kwa ndugu." },
          { objective: "O3", q: "Nani anapaswa kufanya uhimilishaji bandia?", options: ["Mfanyakazi yeyote wa shamba baada ya kutazama video", "Mtu anayemuuza ng'ombe", "Fundi wa AI aliyefunzwa na kusajiliwa au daktari wa mifugo", "Jirani mwenye mkono wenye nguvu"], answer: 2, why: "AI inahitaji mafunzo: mbinu isiyo sahihi inaweza kumuumiza mnyama na mbegu lazima zishughulikiwe ipasavyo." },
          { objective: "O4", q: "Upandishaji upi ni kuzaliana kwa ndugu?", options: ["Ng'ombe na fahali wa AI asiye ndugu", "Mbuzi jike na beberu aliyeazimwa kutoka kijiji kingine", "Nguruwe jike mchanga na nguruwe dume aliyenunuliwa shamba la mbali", "Kondoo dume na binti yake mwenyewe"], answer: 3, why: "Baba na binti yake ni upandishaji wa ndugu wa karibu, yaani kuzaliana kwa ndugu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuzuia magonjwa yasiingie",
      lessons: [
        {
          title: "Mpango wako wa usalama wa kibiolojia: maeneo, dimbwi la buti na wageni",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chora maeneo ya usalama wa kibiolojia ya shamba lako na uandike kanuni za dimbwi la kuosha buti na za wageni.",
          text: [
            "Usalama wa kibiolojia (biosecurity) ni kila kitu unachofanya kuzuia vijidudu visiingie shambani kwako, visienee ndani yake na visitoke nje. Magonjwa mengi huja kupitia wanyama, watu, viatu, nguo, magari, makreti, magunia ya chakula au vifaa. Hatua nyingi bora zaidi zinagharimu kidogo: uzio, lango, dimbwi la kuosha buti, sabuni na kanuni inayofuatwa kila siku.",
            "Gawa shamba katika maeneo. Eneo safi ni pale wanyama wanapoishi: ni watu wanaowatunza tu wanaoingia. Eneo la kati liko kulizunguka: stoo, mahali pa kubadilisha nguo, dimbwi la kuosha buti. Eneo chafu liko nje: barabara, mahali pa kuegesha magari, makreti ya soko. Kuwe na mlango MMOJA tu wa kuingia eneo la wanyama, wenye lango unaloweza kufunga. Malori ya wafanyabiashara yanabaki nje ya uzio; pakia na kupakua mpakani.",
            "Mlangoni, weka dimbwi la kuosha buti lenye dawa ya kuua vijidudu ya shamba iliyochanganywa kama maelekezo ya kifurushi yanavyosema, na uibadilishe ikichafuka au baada ya mvua; uchafu unazuia dawa kufanya kazi, kwa hiyo ondoa matope kwenye buti kwa brashi kwanza. Bora zaidi, weka buti na nguo za shamba tu mlangoni. Kuwe na sabuni na maji ya kunawa mikono. Waruhusu wageni wanaolazimika kuja tu, waulize wamekuwa wapi na wanyama, na uandike kila ziara kwenye daftari la wageni: tarehe, jina, simu, sababu na shamba la mwisho walilotembelea."
          ],
          steps: ["Chora shamba lako: nyumba, mabanda, stoo, lango na barabara.", "Weka alama eneo safi, eneo la kati na eneo chafu.", "Chagua mlango mmoja wa kuingia eneo la wanyama, wenye lango.", "Weka dimbwi la kuosha buti na mahali pa kunawa mikono kwenye mlango huo.", "Weka buti na nguo za shamba tu hapo ukiweza.", "Anza daftari la wageni na uyaweke magari ya wafanyabiashara nje ya uzio."],
          words: [["Usalama wa kibiolojia", "hatua zinazozuia vijidudu visiingie shambani, visienee ndani yake na visitoke nje."], ["Dimbwi la kuosha buti (footbath)", "chombo kifupi chenye dawa ya kuua vijidudu ambacho watu hukanyaga ili kusafisha buti zao."], ["Dawa ya kuua vijidudu", "kemikali inayoua vijidudu; tumia bidhaa ya shamba iliyochanganywa kama maelekezo ya kifurushi yanavyosema."], ["Daftari la wageni", "kitabu unachoandika jina la kila mgeni, mawasiliano yake, sababu ya kuja na shamba la mwisho alilotembelea."]],
          slides: [
            { title: "Vijidudu vinakuja kupitia...", bullets: ["Wanyama wapya, watu, viatu na nguo", "Magari, makreti, magunia ya chakula na vifaa", "Hatua nyingi nzuri zinagharimu kidogo"] },
            { title: "Maeneo matatu", bullets: ["Safi: pale wanyama wanapoishi", "Kati: stoo, mahali pa kubadilisha nguo, dimbwi la buti", "Chafu: barabara, maegesho, makreti ya soko"] },
            { title: "Mlango mmoja, wenye dimbwi la buti", bullets: ["Lango moja la kuingia eneo la wanyama", "Ondoa matope kwa brashi, kisha kanyaga dimbwi la buti", "Dawa iliyochanganywa kama kifurushi kinavyosema"] },
            { title: "Wageni", bullets: ["Wale tu wanaolazimika kuja", "Buti za shamba na kunawa mikono", "Andika tarehe, jina, simu, sababu, shamba la mwisho"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Chora shamba lako kwenye karatasi. Weka alama eneo safi, eneo la kati na eneo chafu, mlango mmoja wa kuingia, dimbwi la kuosha buti na mahali malori yatakaposimama. Andika kanuni tatu za wageni chini ya mchoro.",
          youCanNow: "kuchora maeneo ya usalama wa kibiolojia ya shamba lako na kuweka kanuni za dimbwi la kuosha buti, kunawa mikono na wageni.",
          quickCheck: [
            { objective: "O5", q: "Mfanyabiashara wa nguruwe anafika kununua nguruwe walioachishwa kunyonya. Lori lake lisimame wapi?", options: ["Nje ya uzio, akipakia mpakani", "Karibu na mabanda ya nguruwe", "Ndani ya stoo ya chakula", "Popote anapotaka"], answer: 0, why: "Magari yanayotembelea mashamba mengi hubeba vijidudu, kwa hiyo yanabaki katika eneo chafu nje ya uzio." },
            { objective: "O5", q: "Dimbwi lako la kuosha buti limejaa matope baada ya mvua. Unafanya nini?", options: ["Kuliacha; bado linafanya kazi", "Kuongeza maji tu", "Kulimwaga, kulisafisha na kulijaza tena dawa iliyochanganywa kama kifurushi kinavyosema", "Kuliondoa hadi msimu wa kiangazi"], answer: 2, why: "Uchafu na kuongezwa maji vinazuia dawa ya kuua vijidudu kufanya kazi, kwa hiyo dimbwi chafu lazima lisafishwe na kujazwa upya." }
          ]
        },
        {
          title: "Karantini kwa wanyama wapya na kutupa mizoga kwa usalama",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andaa karantini kwa wanyama wapya na njia salama ya kutupa wanyama waliokufa.",
          text: [
            "Wanyama wapya ndiyo njia ya kawaida zaidi magonjwa yanavyoingia shambani. Mnyama anaweza kuonekana mzima na bado akabeba vijidudu au vimelea. Nunua kutoka mashamba yanayojulikana yenye wanyama wazima, uliza historia ya chanjo na matibabu ya mnyama, na epuka wanyama kutoka masoko au maeneo yenye taarifa za magonjwa.",
            "Karantini ni kuwaweka wanyama wapya au wanaorudi katika banda tofauti, mbali na mifugo yako, kwa muda anaoshauri daktari wako wa mifugo, mara nyingi wiki chache. Wahudumie mwisho kila siku, kwa buti na vifaa tofauti, na uwaangalie kila siku. Muulize daktari wako wa mifugo kama upime, utibu au uchanje kabla hawajajiunga na wengine. Wanyama wanaorudi bila kuuzwa kutoka soko au maonyesho pia wanawekwa karantini.",
            "Wanyama waliokufa hueneza magonjwa kwa wanyama wako, mbwa, wanyama pori na majirani. Usiuze, usile wala usimpe mtu mnyama aliyekufa kwa sababu isiyojulikana. Shika mizoga kwa glavu, kisha itupe kama daktari wako wa mifugo au kanuni za eneo zinavyosema: mara nyingi shimo refu, mbali na maji na nyumba, ambalo mbwa na wanyama pori hawawezi kulichimbua. Mnyama akifa ghafla, au wengi wakiwa wagonjwa, usiufungue mzoga wala usiuhamishe nje ya shamba: mpigie daktari wa mifugo kwanza, kwa sababu unaweza kuwa ugonjwa unaopaswa kuripotiwa kisheria au kimeta (anthrax)."
          ],
          steps: ["Nunua kutoka mashamba yanayojulikana yenye wanyama wazima tu; uliza historia ya afya.", "Andaa banda tofauti la karantini, mbali na mifugo.", "Waweke wanyama wapya na wanaorudi humo kwa muda anaoshauri daktari wako wa mifugo.", "Wahudumie mwisho kila siku, kwa buti na vifaa tofauti.", "Chagua pamoja na daktari wako wa mifugo mahali pa kutupa mizoga, mbali na maji na nyumba.", "Vifo vya ghafla au visivyoelezeka: usifungue wala usiuhamishe mzoga; mpigie daktari wa mifugo."],
          words: [["Karantini", "kuwatenga wanyama wapya au wanaorudi kwa muda ili kuona kama wanabeba ugonjwa."], ["Mzoga", "mwili wa mnyama aliyekufa."], ["Ugonjwa unaopaswa kuripotiwa", "ugonjwa ambao sheria inasema lazima uripotiwe kwa mamlaka ya mifugo."]],
          slides: [
            { title: "Wanyama wapya huleta magonjwa", bullets: ["Wanyama wanaoonekana wazima wanaweza kubeba vijidudu", "Nunua kutoka mashamba yanayojulikana yenye wanyama wazima", "Uliza historia ya afya"] },
            { title: "Karantini", bullets: ["Banda tofauti, mbali na mifugo", "Kwa muda anaoshauri daktari wako wa mifugo", "Wahudumie mwisho, kwa buti na vifaa tofauti"] },
            { title: "Wanyama waliokufa", bullets: ["Usiuze, usile wala usimpe mtu kamwe", "Glavu; tupa kama daktari au kanuni za eneo zinavyosema", "Shimo refu, mbali na maji; mbwa hawawezi kulichimbua"] },
            { title: "Vifo vya ghafla", bullets: ["Usiufungue wala usiuhamishe mzoga", "Mpigie daktari wa mifugo kwanza"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Weka alama ya banda la karantini kwenye mchoro wa shamba lako, mbali na wanyama wako kadiri uwezavyo, na uandike muda anaoshauri daktari wako wa mifugo kuwaweka wanyama wapya humo (uliza kama hujui). Kisha weka alama mahali na jinsi utakavyotupa wanyama waliokufa, na uandike kanuni ya vifo vya ghafla.",
          youCanNow: "kuwaweka wanyama wapya karantini na kutupa wanyama waliokufa kwa usalama, na kujua lini kumpigia daktari wa mifugo kabla ya kugusa mzoga.",
          quickCheck: [
            { objective: "O5", q: "Unanunua mbuzi watatu sokoni. Unafanya nini ukifika nyumbani?", options: ["Kuwaweka moja kwa moja pamoja na mifugo yako", "Kuwaweka katika banda tofauti kwa muda anaoshauri daktari wako wa mifugo", "Kuwauza mara moja", "Kuwaacha walishe pamoja na mbuzi wa jirani"], answer: 1, why: "Karantini inaonyesha kama wanyama wapya wanabeba ugonjwa kabla hawajaweza kuambukiza mifugo yako." },
            { objective: "O5", q: "Nguruwe anakufa ghafla usiku. Hatua sahihi ya kwanza ni ipi?", options: ["Kumfungua uone kilichotokea", "Kuuza nyama haraka", "Kuuacha mzoga ulipo, kuwaweka watu na wanyama mbali, na kumpigia daktari wa mifugo", "Kumtupa mtoni"], answer: 2, why: "Kifo cha ghafla kinaweza kuwa ugonjwa unaopaswa kuripotiwa; kufungua au kuhamisha mzoga kunaweza kuueneza." }
          ]
        },
        {
          title: "Homa ya Nguruwe ya Afrika na mafua ya ndege: tambua, zuia, ripoti",
          objectives: ["O6"],
          minutes: 6,
          goal: "Tambua dalili za hatari za Homa ya Nguruwe ya Afrika na mafua ya ndege na uziripoti kwa daktari wa mifugo mara moja.",
          text: [
            "Homa ya Nguruwe ya Afrika (African Swine Fever, ASF) ni ugonjwa wa virusi wa nguruwe ambao umesababisha hasara kubwa katika nchi kadhaa za Afrika, ikiwemo Nigeria. WOAH inataja homa kali, udhaifu, kukosa hamu ya kula, madoa mekundu au ya zambarau kwenye ngozi, kutapika, kuhara, kutupa mimba kwa nguruwe jike na kifo, na hadi asilimia 100 ya nguruwe kufa katika aina kali. Huenea kwa kugusana na nguruwe wagonjwa, nyama ya nguruwe na mabaki ya chakula (swill) kutoka nguruwe walioambukizwa, na nguo, buti, magari na vifaa vilivyochafuliwa, na kupe laini mahali wanapoishi. Virusi huishi muda mrefu ndani ya nyama ya nguruwe na mazingira. Haviambukizi watu. FAO inasema hakuna chanjo wala tiba inayofaa, kwa hiyo kinga ndiyo njia pekee ya kudhibiti; WOAH inaonya dhidi ya chanjo zisizo na ubora, kwa hiyo usitumie kamwe \"chanjo ya ASF\" ambayo mamlaka ya mifugo ya nchi yako haijaidhinisha.",
            "Mafua ya ndege (avian influenza, bird flu) ni ugonjwa wa virusi wa ndege. Aina kali zinaweza kuua kuku wengi wa kundi ndani ya siku chache. Dalili zinazotajwa na USDA APHIS ni pamoja na vifo vya ghafla bila onyo, ndege dhaifu wanaoacha kula, mayai kupungua au mayai yenye ganda laini, kilemba, ndevu na miguu kuvimba na kuwa vya zambarau, kuhema kwa shida, kukohoa na shingo kupinda. Huenea kutoka ndege pori, ndege wagonjwa, masoko ya ndege hai, kinyesi, makreti, chakula, maji na vifaa. Watu huambukizwa mara chache, hasa kwa kugusana kwa karibu na ndege wagonjwa, kwa hiyo usishike kamwe ndege wagonjwa au waliokufa kwa mikono mitupu.",
            "Magonjwa yote mawili yanapaswa kuripotiwa kisheria: tukio linaloshukiwa lazima liripotiwe kwa daktari wako wa mifugo au mamlaka ya mifugo mara moja. Kipimo cha maabara tu ndicho kinachoweza kuyathibitisha, kwa sababu magonjwa mengine yanafanana nayo. Kuyazuia: usiwalishe nguruwe kamwe mabaki ya chakula ambayo hayajapikwa, nunua kutoka mashamba yenye wanyama wazima tu, waweke nguruwe bandani na kuku ndani ya nyumba yao mbali na ndege pori, na tumia mpango wako wa usalama wa kibiolojia kila siku. Ukishuku ugonjwa wowote kati ya hayo: waweke wanyama wote ndani, simamisha mauzo yote na uhamishaji wa wanyama, nyama, mayai na samadi, wazuie wageni, na mpigie daktari wa mifugo."
          ],
          steps: ["Jua dalili za ASF (nguruwe) na mafua ya ndege (kuku).", "Kagua wanyama wako kila siku.", "Ukishuku ugonjwa: waweke wanyama wote ndani ya mabanda au nyumba zao.", "Simamisha mauzo na uhamishaji wote: wanyama, nyama, mayai, samadi, vifaa.", "Usifungue, usiuze wala usile wanyama wagonjwa au waliokufa; usiwashike kwa mikono mitupu.", "Mpigie daktari wako wa mifugo au ofisi ya mifugo mara moja na ufuate maelekezo yao."],
          words: [["Homa ya Nguruwe ya Afrika (ASF)", "ugonjwa hatari wa virusi wa nguruwe usio na chanjo wala tiba inayofaa; hauambukizi watu."], ["Mafua ya ndege", "bird flu: ugonjwa wa virusi wa ndege; aina kali huua kuku wengi wa kundi."], ["Mabaki ya chakula (swill)", "mabaki ya chakula yanayolishwa nguruwe; mabaki ambayo hayajapikwa yenye nyama ya nguruwe yanaweza kueneza ASF."], ["Mamlaka ya mifugo", "ofisi ya serikali inayoshughulikia magonjwa ya wanyama, kama huduma za mifugo za kitaifa au za kaunti."]],
          slides: [
            { title: "Homa ya Nguruwe ya Afrika (nguruwe)", bullets: ["Homa kali, udhaifu, kutokula, ngozi nyekundu au ya zambarau", "Kutapika, kuhara, kutupa mimba, vifo vya ghafla", "Hakuna chanjo wala tiba inayofaa (FAO)"] },
            { title: "Jinsi ASF inavyoenea", bullets: ["Nguruwe wagonjwa, nyama ya nguruwe na mabaki ya chakula yasiyopikwa", "Buti, nguo, magari na vifaa", "Haiambukizi watu"] },
            { title: "Mafua ya ndege (kuku)", bullets: ["Vifo vya ghafla; ndege dhaifu; mayai kupungua", "Kilemba na ndevu kuvimba na kuwa vya zambarau; kuhema kwa shida", "Huenezwa na ndege pori, masoko, makreti, kinyesi"] },
            { title: "Yanapaswa kuripotiwa: ripoti mara moja", bullets: ["Waweke wanyama wote ndani; simamisha mauzo na uhamishaji wote", "Usishike kwa mikono mitupu; usifungue, usiuze wala usile", "Mpigie daktari wa mifugo au ofisi ya mifugo sasa"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Kazi ya mwisho: andika mpango wako wa usalama wa kibiolojia wa ukurasa mmoja. Tumia mchoro wa shamba lako wenye maeneo, kanuni za dimbwi la buti na za wageni, karantini na utupaji wa wanyama waliokufa, kisha ongeza dalili za hatari za ASF au mafua ya ndege, hatua zako za saa ya kwanza, na jina na namba ya simu ya daktari wako wa mifugo.",
          youCanNow: "kutambua dalili za hatari za Homa ya Nguruwe ya Afrika na mafua ya ndege, kusimamisha uhamishaji wote, na kuripoti matukio yanayoshukiwa kwa daktari wa mifugo mara moja.",
          quickCheck: [
            { objective: "O6", q: "Nguruwe wako kadhaa wana homa kali, madoa ya zambarau kwenye ngozi na wawili wamekufa usiku. Unafanya nini kwanza?", options: ["Kuwauza waliobaki haraka kabla hawajafa", "Kununua chanjo ya ASF sokoni", "Kuwatibu kwa dawa zilizobaki", "Kuwaweka nguruwe wote ndani, kusimamisha uhamishaji na mauzo yote, na kumpigia daktari wa mifugo mara moja"], answer: 3, why: "Hizi ni dalili za hatari za ASF, ugonjwa unaopaswa kuripotiwa: simamisha uhamishaji na uripoti mara moja." },
            { objective: "O6", q: "Tabia ipi inasaidia kuzuia Homa ya Nguruwe ya Afrika?", options: ["Kutowalisha nguruwe kamwe mabaki ya chakula ambayo hayajapikwa", "Kuwalisha nguruwe mabaki ya chakula ya hoteli", "Kuwaacha nguruwe wazurure kijijini", "Kununua nguruwe kutoka kwa mfanyabiashara yeyote anayepita"], answer: 0, why: "Mabaki ya chakula yasiyopikwa yanaweza kuwa na nyama ya nguruwe yenye virusi vya ASF, vinavyoishi muda mrefu ndani ya nyama." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuzuia magonjwa yasiingie",
        questions: [
          { objective: "O5", q: "Katika mpango wa usalama wa kibiolojia, eneo safi ni lipi?", options: ["Barabara nje ya shamba", "Mahali pa kuegesha malori", "Pale wanyama wanapoishi", "Soko"], answer: 2, why: "Eneo safi ni eneo la wanyama, ambapo ni watu wanaowatunza wanyama tu wanaoingia." },
          { objective: "O5", q: "Kusudi kuu la daftari la wageni ni lipi?", options: ["Kuwatoza wageni ada", "Kujua nani alikuja, lini na kutoka wapi ugonjwa ukitokea", "Kuhesabu una marafiki wangapi", "Kutangaza shamba"], answer: 1, why: "Ugonjwa ukitokea, daftari linamsaidia daktari wa mifugo kufuatilia ulikotoka." },
          { objective: "O5", q: "Unapaswa kumtupaje mbuzi aliyekufa kwa sababu isiyojulikana?", options: ["Kuuza nyama kwa bei rahisi", "Kuwapa mbwa", "Kumwacha porini", "Kutumia glavu na kumtupa kama daktari wa mifugo au kanuni za eneo zinavyosema, mbali na maji"], answer: 3, why: "Mizoga hueneza magonjwa; kuitupa kwa usalama kama daktari wa mifugo anavyoshauri kunalinda wanyama, watu na maji." },
          { objective: "O6", q: "Je, kuna chanjo au tiba inayofaa unayoweza kutumia dhidi ya Homa ya Nguruwe ya Afrika?", options: ["Hapana; FAO inasema kinga kupitia usalama wa kibiolojia ndiyo njia pekee ya kudhibiti", "Ndiyo, antibiotiki yoyote huiponya", "Ndiyo, inauzwa kila soko", "Ndiyo, mchanganyiko wa mitishamba huiponya"], answer: 0, why: "FAO inasema hakuna chanjo wala tiba inayofaa kwa ASF, kwa hiyo kinga ndiyo njia ya kudhibiti." },
          { objective: "O6", q: "Kuku wako wa mayai wanaacha kutaga ghafla, baadhi wana vilemba vilivyovimba vya zambarau na wengi wanakufa ndani ya siku moja. Unafanya nini?", options: ["Kuuza mayai na kuku sokoni leo", "Kuzika kuku waliokufa na kunyamaza", "Kuwaweka kuku ndani, kusimamisha uhamishaji wote, kuepuka kuwashika kwa mikono mitupu na kuripoti kwa daktari wa mifugo mara moja", "Kuwafungulia kuku nje"], answer: 2, why: "Dalili hizi zinaashiria mafua ya ndege, ugonjwa unaopaswa kuripotiwa kisheria na lazima uripotiwe mara moja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ufugaji, Uzalishaji wa Mifugo na Usalama wa Kibiolojia Shambani",
    questions: [
      { objective: "O1", q: "Nini kinapaswa kuongoza zaidi uchaguzi wako wa aina?", options: ["Wanunuzi wako wanataka nini na shamba lako linaweza kutoa nini mwaka mzima", "Aina iliyo kwenye tangazo la karibuni", "Aina yenye wanyama wakubwa zaidi", "Mnyama aliye bei rahisi zaidi sokoni"], answer: 0, why: "Aina inalipa tu inapokidhi soko na shamba lako linaweza kuilisha na kuitunza." },
      { objective: "O1", q: "Ni ipi nguvu ya aina nyingi za kienyeji kama mbuzi mdogo wa Afrika Magharibi au ng'ombe wa N'Dama?", options: ["Maziwa mengi kuliko yote duniani", "Wanastahimili joto, kupe na chakula duni", "Hawaugui kamwe", "Hawahitaji maji"], answer: 1, why: "Aina za kienyeji ni stahimilivu; upande wa pili ni kwamba wanakua na kuzalisha kidogo." },
      { objective: "O1", q: "Unaweza kuuliza wapi ni aina zipi zinafanya vizuri katika eneo lako?", options: ["Ujumbe wowote kwenye mitandao ya kijamii", "Mfanyabiashara anayeuza aina moja tu", "Afisa ugani wako, chama cha wafugaji au taasisi ya utafiti", "Hakuna mtu; nunua tu uone"], answer: 2, why: "Wataalamu na wakulima wa eneo lako wanajua aina zipi zinafanya vizuri katika hali yako." },
      { objective: "O2", q: "Ng'ombe, mbuzi na nguruwe huingia kwenye joto mara ngapi hivi kama hawana mimba?", options: ["Kila baada ya siku 3", "Kila baada ya miezi 6", "Mara moja kwa mwaka", "Kila baada ya siku 21 hivi"], answer: 3, why: "Mzunguko wa kawaida ni kama siku 21, ingawa unatofautiana." },
      { objective: "O2", q: "Wakati gani ni bora kuangalia joto?", options: ["Saa sita mchana tu", "Asubuhi na mapema na jioni, wanyama wakiwa wametulia", "Wakati wa kulisha siku za soko tu", "Mara moja kwa wiki"], answer: 1, why: "Dalili za joto zinaonekana kwa urahisi zaidi wanyama wakiwa wametulia, angalau mara mbili kwa siku." },
      { objective: "O2", q: "Kwa nini uandike tarehe ya upandishaji?", options: ["Ili kuangalia kurudi kwa joto na kujua tarehe ya kuzaa", "Kwa sababu sheria inataka picha", "Ili kupanga bei ya maziwa", "Ili kuchagua chapa ya chakula"], answer: 0, why: "Tarehe ya upandishaji inakuambia lini kuangalia kurudi kwa joto na lini mnyama atazaa." },
      { objective: "O2", q: "Mimba ya nguruwe jike ni ya muda gani hivi?", options: ["Kama miezi 9", "Kama wiki 3", "Kama miezi 3, wiki 3 na siku 3", "Kama mwaka 1"], answer: 2, why: "Mimba ya nguruwe jike ni kama miezi 3, wiki 3 na siku 3; hakikisha kwa aina yako na daktari wako wa mifugo." },
      { objective: "O3", q: "Ni faida gani kubwa ya uhimilishaji bandia kwa mkulima mdogo?", options: ["Inachukua nafasi ya ulishaji wote", "Inamaanisha hakuna kumbukumbu zinazohitajika", "Inaondoa magonjwa yote", "Kupata urithi bora bila kufuga fahali"], answer: 3, why: "AI inaleta urithi uliothibitishwa kwenye mashamba madogo yasiyoweza kufuga dume bora." },
      { objective: "O3", q: "Ng'ombe anaonyesha joto la kusimama kwa mara ya kwanza mchana. Fundi ampandishe lini?", options: ["Asubuhi inayofuata", "Mara moja usiku", "Baada ya wiki moja", "Katika joto linalofuata"], answer: 0, why: "Kwa kanuni ya AM-PM, joto linaloonekana kwanza mchana hupandishwa asubuhi inayofuata." },
      { objective: "O3", q: "Unampataje fundi wa AI anayeaminika?", options: ["Mtu yeyote mwenye chupa ya mbegu", "Fundi aliyefunzwa na kusajiliwa kupitia ofisi ya mifugo, chama cha ushirika au daktari wa mifugo", "Mtu aliye bei rahisi zaidi sokoni", "Video ya mafunzo"], answer: 1, why: "Mafunzo na usajili vinalinda wanyama wako na pesa zako." },
      { objective: "O3", q: "Kwa nini mbegu lazima zibaki ndani ya naitrojeni ya maji hadi zitumike?", options: ["Ili ziwe nzito zaidi", "Ili kubadilisha rangi yake", "Kwa sababu zinakufa zikipata joto", "Ili kuongeza vitamini"], answer: 2, why: "Mbegu zilizoganda hufa zisipohifadhiwa katika baridi kali hadi wakati wa uhimilishaji." },
      { objective: "O4", q: "Nini huwapata watoto wa wazazi walio ndugu wa karibu?", options: ["Huwa na nguvu zaidi kila wakati", "Hukua haraka zaidi", "Huhitaji chakula kidogo", "Mara nyingi huwa dhaifu zaidi, huugua zaidi na wanaweza kuwa na kasoro"], answer: 3, why: "Kuzaliana kwa ndugu huongeza watoto dhaifu, wagonjwa na wenye kasoro." },
      { objective: "O4", q: "Ni njia gani rahisi ya kuzuia kuzaliana kwa ndugu kwa dume lako la kuzalisha?", options: ["Kumbadilisha au kumuuza kabla binti zake hawajafikia umri wa kuzalishwa", "Kumfuga maisha yake yote", "Kumtumia msimu wa mvua tu", "Kumlisha zaidi"], answer: 0, why: "Kubadilisha dume kabla binti zake hawajazalishwa kunazuia upandishaji wa baba na binti." },
      { objective: "O4", q: "Kumbukumbu zipi zinakusaidia kuepuka kuzaliana kwa ndugu?", options: ["Bei za chakula", "Mvua", "Mama na baba wa kila mnyama", "Majina ya wageni"], answer: 2, why: "Kujua wazazi kunaonyesha wanyama wapi ni ndugu." },
      { objective: "O5", q: "Eneo la wanyama linapaswa kuwa na milango mingapi ya kuingia?", options: ["Mingi kadiri iwezekanavyo", "Mmoja, wenye lango, dimbwi la kuosha buti na mahali pa kunawa mikono", "Hakuna; wanyama wanazurura", "Mmoja kwa kila mgeni"], answer: 1, why: "Mlango mmoja unaodhibitiwa unafanya kanuni za usalama wa kibiolojia ziwe rahisi kufuata." },
      { objective: "O5", q: "Kwa nini uondoe matope kwenye buti kabla ya dimbwi la kuosha buti?", options: ["Uchafu unazuia dawa ya kuua vijidudu kufanya kazi", "Ili kuokoa maji", "Matope yanafanya buti kuwa nzito", "Haijalishi"], answer: 0, why: "Dawa za kuua vijidudu hufanya kazi vibaya kwenye sehemu chafu." },
      { objective: "O5", q: "Nguruwe wanarudi kutoka sokoni bila kuuzwa. Unafanya nini?", options: ["Kuwarudisha moja kwa moja pamoja na wengine", "Kuwagawa langoni", "Kuwaachia kijijini", "Kuwaweka karantini kana kwamba ni wanyama wapya"], answer: 3, why: "Wanyama wa sokoni wanaweza kuwa wamepata ugonjwa, kwa hiyo wanawekwa karantini." },
      { objective: "O6", q: "Kipi kati ya hivi hueneza Homa ya Nguruwe ya Afrika?", options: ["Mvua juu ya paa", "Kuwalisha nguruwe pumba za mahindi", "Nyama ya nguruwe ndani ya mabaki ya chakula yasiyopikwa, nguruwe wagonjwa na buti au magari machafu", "Maji safi ya kunywa"], answer: 2, why: "ASF huenea kupitia nguruwe walioambukizwa, bidhaa za nyama ya nguruwe, mabaki ya chakula na vitu vilivyochafuliwa." },
      { objective: "O6", q: "Je, Homa ya Nguruwe ya Afrika huambukiza watu?", options: ["Ndiyo, kila wakati", "Watoto tu", "Wafanyakazi wa shamba tu", "Hapana, haiambukizi watu"], answer: 3, why: "WOAH inasema ASF haiathiri afya ya binadamu, lakini ni hatari sana kwa nguruwe." },
      { objective: "O6", q: "Kwa nini mafua ya ndege yanayoshukiwa lazima yaripotiwe mara moja?", options: ["Yanapaswa kuripotiwa kisheria na huenea haraka kati ya mashamba", "Ili kupata chanjo ya bure kila mara", "Kwa sababu ndege huacha kula", "Ili kubadilisha bei ya soko"], answer: 0, why: "Magonjwa yanayopaswa kuripotiwa lazima yaripotiwe ili mamlaka ya mifugo iweze kuzuia kuenea kwake." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      { name: "Maeneo na mlango", objective: "O5", notYet: "Hakuna mchoro, au wanyama na magari yanachanganyika bila maeneo yaliyowekwa alama.", meets: "Mchoro unaonyesha eneo safi, eneo la kati na eneo chafu, mlango mmoja wa kuingia na mahali malori yanaposimama.", exceeds: "Pia unaonyesha njia ya chakula, samadi na wanyama waliokufa ili visipite kamwe eneo safi." },
      { name: "Dimbwi la buti na kanuni za wageni", objective: "O5", notYet: "Hakuna dimbwi la kuosha buti wala kanuni za wageni, au kanuni ambazo hakuna anayeweza kuzifuata.", meets: "Dimbwi la kuosha buti lenye dawa iliyochanganywa kama kifurushi kinavyosema, kunawa mikono, na daftari la wageni lenye shamba la mwisho walilotembelea.", exceeds: "Buti na nguo za shamba tu, na mtu aliyetajwa anayekagua kanuni kila siku." },
      { name: "Karantini na wanyama waliokufa", objective: "O5", notYet: "Wanyama wapya wanajiunga na mifugo mara moja, au mizoga inauzwa, inaliwa au inatupwa ovyo.", meets: "Banda tofauti la karantini kwa muda anaoshauri daktari wa mifugo, na mahali salama pa kutupa mizoga palipokubaliwa na daktari wa mifugo.", exceeds: "Pia linashughulikia wanyama wanaorudi kutoka sokoni na kanuni ya kutofungua kamwe mnyama aliyekufa ghafla." },
      { name: "Hatua dhidi ya ASF au mafua ya ndege", objective: "O6", notYet: "Dalili za hatari hazipo, au mpango unasema kuuza, kutibu au kusubiri.", meets: "Unaorodhesha dalili za hatari na hatua za saa ya kwanza: kuwaweka wanyama ndani, kusimamisha uhamishaji wote, kuripoti mara moja.", exceeds: "Unataja ofisi ya mifugo, namba ya simu na mtu atakayepiga simu, pamoja na kanuni ya kutolisha mabaki ya chakula au ya ndege pori." },
      { name: "Uzalishaji na mifugo mipya", objective: "O4", notYet: "Wanyama wapya wa kuzalisha wananunuliwa bila ukaguzi, au mpango unaruhusu upandishaji wa ndugu.", meets: "Mifugo mipya ya kuzalisha inatoka mashamba yanayojulikana yenye wanyama wazima na mpango unaepuka upandishaji wa ndugu.", exceeds: "Unatumia AI ya fahali wasio ndugu au mpango wa kubadilishana madume, pamoja na kumbukumbu za wazazi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Mashamba yenye dimbwi la kuosha buti, mlango mmoja unaodhibitiwa na daftari la wageni linalotumika siku 30 baada ya kozi (utafiti wa kufuatilia au ziara ya afisa ugani)",
      "Wanafunzi wanaoweka kumbukumbu za uzalishaji na kuripoti joto chache zilizokosekana au upandishaji wa kurudia",
      "Matukio yanayoshukiwa ya ASF au mafua ya ndege yaliyoripotiwa na wanafunzi kwa daktari wa mifugo ndani ya siku moja",
      "Vifo vichache vya magonjwa katika mifugo ya wanafunzi katika mwaka unaofuata"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Daftari na kalamu, au maelezo kwenye simu au jedwali la hesabu (spreadsheet), kwa kumbukumbu za uzalishaji na daftari la wageni",
      "Karatasi ya kuchora shamba",
      "Jina na namba ya simu ya daktari wa mifugo wa eneo lako, ofisi ya mifugo na fundi wa AI aliyesajiliwa",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Iendeshe na kikundi cha wakulima au chama cha ushirika: fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi, mkifanya kazi za \"Jaribu sasa\" kwenye mashamba halisi inapowezekana.",
      "Mwalike daktari wa mifugo wa eneo au afisa wa afya ya wanyama kwenye kipindi cha Sura ya 2 aeleze jinsi ya kuripoti ASF na mafua ya ndege katika nchi yenu na kanuni za eneo za kutupa mizoga.",
      "Usitoe wala usijadili kamwe vipimo vya dawa, chanjo au homoni wala vipindi vya kusubiri baada ya dawa; peleka kila swali la aina hiyo kwa daktari wa mifugo na maelekezo ya kifurushi.",
      "Usiruhusu kikundi kutembelea mashamba kadhaa ya nguruwe au kuku siku moja; fuateni usalama wa kibiolojia katika mafunzo yenyewe.",
      "Pima mpango wa usalama wa kibiolojia wa kila mwanafunzi kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
