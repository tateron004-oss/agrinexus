"use strict";

// Koach Learn course (Swahili translation of shared/capm-project-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "capm-project-management-sw",
  lang: "sw",
  translationOf: "capm-project-management",
  category: "Workforce Development",
  name: "Misingi ya Usimamizi wa Miradi (Maandalizi ya CAPM)",
  skills: "Kueleza mradi na vikwazo vyake, Kuandika hati ya mradi, Kujenga WBS na kupata njia muhimu, Kusimamia hatari na mabadiliko, Kuchagua mbinu ya kutabiri au Agile, Kupanga maandalizi ya mtihani wa CAPM",
  outcome: "kupanga mradi mdogo halisi jinsi mtihani wa CAPM unavyotarajia: kuandika hati ya mradi, kugawa kazi, kupata njia muhimu, kufuatilia hatari na mabadiliko, kuchagua mbinu inayofaa, na kujenga mpango wako wenye tarehe wa kujiandaa kwa CAPM.",
  about: [
    "Kozi hii ni kwa wanaotafuta kazi, wanajeshi wastaafu, vijana, wamiliki wa biashara ndogo na yeyote anayetaka kazi ya mwanzo ya miradi, kama mratibu wa mradi, msaidizi wa mradi au kiongozi wa timu. Pia ni hatua ya kwanza kuelekea Certified Associate in Project Management (CAPM), cheti cha ngazi ya mwanzo kutoka Project Management Institute (PMI).",
    "Utajifunza zana kuu: hati ya mradi, orodha ya wadau, mgawanyo wa kazi (WBS), ratiba yenye njia muhimu, daftari la hatari na kumbukumbu ya mabadiliko. Utafanya mazoezi ya kila moja kwenye karatasi au kwenye spreadsheet ya bure, ukitumia mradi mdogo kutoka maisha yako au kazi yako.",
    "Kozi hii INAKUANDAA. Haikupi CAPM. PMI pekee ndiyo inatoa cheti hicho, na PMI inaweka masharti: nani anaweza kuomba, saa za mafunzo unazohitaji, ada, mtihani na jinsi ya kukihuisha. Mambo haya yanaweza kubadilika, kwa hiyo utayakagua mwenyewe kwenye pmi.org.",
    "Kila somo linachukua kama dakika tano, likifuatiwa na kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la awali mwanzoni, jaribio la maarifa baada ya kila sura na mtihani wa mwisho wa maswali 20."
  ],
  finalTask: "Endesha maandalizi yako ya CAPM kama mradi. Tengeneza hati ya mradi ya ukurasa mmoja (lengo, wigo, mfadhili, kipimo cha mafanikio), mgawanyo wa kazi (WBS) wa masomo yako, ratiba yenye tarehe na hatua muhimu inayoishia kwenye tarehe unayolenga ya mtihani na inayoonyesha njia muhimu, daftari la hatari lenye angalau hatari tatu (kila moja na alama, jibu na mhusika), na orodha ya kurasa rasmi za PMI ulizokagua kuhusu masharti ya sasa, ada na muhtasari wa maudhui ya mtihani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana nchini Marekani na nje yake wanaotaka kazi ya mwanzo ya miradi au CAPM: wanaotafuta kazi, wanajeshi wastaafu wanaohamia kazi za kiraia, watu wanaorudi nyumbani kutoka gerezani, wamiliki wa biashara ndogo, wafanyakazi wa mashirika yasiyo ya faida na wafanyakazi ambao tayari wanaratibu kazi bila cheo hicho.",
    startingPoint: "Wengi wamewahi kupanga kazi bila utaratibu rasmi (sherehe, kuhama, ratiba ya zamu, operesheni ya kijeshi, programu ya kanisa) lakini hawajatumia zana au maneno rasmi ya miradi. Baadhi wanaweza kutumia spreadsheet ya msingi; wachache wameona chati ya Gantt au daftari la hatari.",
    gap: "Waajiri wanaorodhesha uratibu wa miradi na CAPM katika matangazo ya kazi, na mtihani unatumia maneno ya PMI. Wanafunzi wanahitaji kugeuza wanachofanya tayari bila utaratibu rasmi kuwa zana na maneno ya kawaida, na wanahitaji mpango halisi wa kutimiza masharti ya PMI na kufaulu mtihani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la PMI linaelezwa",
      "Vifaa: karatasi na kalamu zinatosha kwa kila kazi; spreadsheet ya bure (Google Sheets au Excel mtandaoni) inasaidia",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na familia",
      "Masharti, ada na muhtasari wa mtihani wa PMI hubadilika: wanafunzi wanayathibitisha kwenye pmi.org, si kutoka kozi hii",
      "Kozi inaandaa; haitoi CAPM na haihesabiwi moja kwa moja katika saa za mafunzo za PMI"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwa spreadsheet wanaweza kuanza na \"Excel na Spreadsheet\"; \"Usimamizi wa Miradi kwa Njia ya Agile\" ni kozi nzuri ya kufuata."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya kazi fulani", action: "kutambua kama ni mradi na kutaja awamu za mzunguko wake na vikwazo vyake vikuu", standard: "kwa usahihi katika angalau mifano 4 kati ya 5" },
    { id: "O2", condition: "Kwa mradi mdogo halisi", action: "kuandika hati ya mradi ya ukurasa mmoja na orodha ya wadau yenye maslahi na ushawishi wa kila mtu", standard: "ikiwa na lengo, wigo ndani na nje, mfadhili, tarehe ya mwisho na kipimo cha mafanikio kinachopimika" },
    { id: "O3", condition: "Ukipewa lengo la mradi na orodha ya kazi zenye muda wake", action: "kujenga mgawanyo wa kazi (WBS) na ratiba inayoonyesha njia muhimu", standard: "kila utegemezi ukionyeshwa na urefu wa njia muhimu ukihesabiwa kwa usahihi" },
    { id: "O4", condition: "Kwa mradi huo huo", action: "kuandika hatari katika daftari la hatari na kushughulikia ombi la mabadiliko kupitia udhibiti wa mabadiliko", standard: "kila hatari ikiwa na alama, jibu na mhusika mmoja, na hakuna badiliko linalofanywa bila idhini" },
    { id: "O5", condition: "Ukipewa hali fupi ya mradi", action: "kuchagua mbinu ya kutabiri, Agile au mseto na kueleza sababu ya chaguo hilo", standard: "ukitoa angalau sababu mbili kutoka kwenye hali hiyo" },
    { id: "O6", condition: "Ukitumia kurasa rasmi za PMI", action: "kujenga mpango wenye tarehe wa kusoma na kufanya mtihani wa CAPM", standard: "masharti yakiwa yamekaguliwa, muhtasari wa maudhui ya mtihani ukiorodheshwa na tarehe ya mtihani ikiwekwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuanza mradi kwa njia sahihi",
      lessons: [
        {
          title: "Kinachofanya kazi iwe mradi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua kama kazi fulani ni mradi na taja awamu na vikwazo vyake.",
          text: [
            "Mradi ni kazi ya muda kuunda kitu kipya: una mwanzo, mwisho na matokeo ya kipekee. Kufungua gari la kuuza chakula, kuhamisha ofisi, kuendesha kampeni ya kuandikisha wapiga kura au kujenga tovuti ni miradi. Kupika menyu ile ile ya chakula cha mchana kila siku, au kujibu simu kila zamu, ni shughuli za kila siku (operesheni), si mradi.",
            "Miradi mingi hupita katika awamu. Njia rahisi ya kuziona: kuanza (kukubaliana kwa nini na nini), kupanga (vipi, lini, nani, kiasi gani), kufanya kazi, kuifuatilia na kuidhibiti, na kufunga (kukabidhi na kuandika mafunzo uliyopata). PMI inaita watu na mbinu zinazoongoza haya \"usimamizi wa miradi\" (project management).",
            "Kila mradi umebanwa na vikwazo. Vitatu vya kawaida ni wigo (utakachotoa), ratiba (muda) na gharama (pesa). Ubora, rasilimali na hatari pia ni muhimu. Kimoja kikibadilika, vingine vinaathirika: ukiongeza wigo na tarehe ya mwisho ikabaki ile ile, unahitaji watu au pesa zaidi, au ubora unashuka."
          ],
          steps: ["Uliza: je, kazi hii ina mwanzo na mwisho wazi?", "Uliza: je, inaunda kitu kipya au tofauti?", "Ukijibu ndiyo kwa yote mawili, ni mradi. Ikijirudia kila siku, ni operesheni.", "Taja awamu iliyopo sasa na kikwazo chake kinachobana zaidi."],
          words: [["Mradi", "kazi ya muda yenye mwanzo, mwisho na matokeo ya kipekee."], ["Operesheni", "kazi inayoendelea na kujirudia ambayo inaiweka biashara hai."], ["Kikwazo", "kikomo kwa mradi, kama muda, pesa au wigo."], ["Wigo (scope)", "kazi yote na matokeo yote ambayo mradi utatoa, na si zaidi."], ["Mzunguko wa maisha (life cycle)", "awamu ambazo mradi hupita kutoka mwanzo hadi kufungwa."]],
          slides: [
            { title: "Mradi au operesheni?", bullets: ["Mradi: wa muda, wenye mwanzo, mwisho na matokeo ya kipekee", "Operesheni: kazi ile ile inayorudiwa kila siku"] },
            { title: "Awamu tano rahisi", bullets: ["Kuanza: kwa nini na nini", "Kupanga: vipi, lini, nani, kiasi gani", "Kufanya, kisha kufuatilia na kudhibiti", "Kufunga: kukabidhi na kuandika mafunzo uliyopata"] },
            { title: "Vikwazo", bullets: ["Wigo, ratiba na gharama", "Pia ubora, rasilimali na hatari", "Ukibadilisha kimoja, vingine vinaathirika"] }
          ],
          sources: [{ name: "Project Management Institute: What is project management?", url: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }],
          tryIt: "Andika kazi tano kutoka maisha yako, kazi yako au huduma yako ya kijeshi. Weka alama P (mradi) au O (operesheni) kwa kila moja. Kwa kila mradi, andika kikwazo chake kinachobana zaidi: wigo, muda au pesa.",
          youCanNow: "kutofautisha mradi na operesheni za kila siku, kutaja awamu zake na kusema kikwazo kipi kinabana zaidi.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni mradi?", options: ["Kujaza rafu kila usiku", "Kujibu simu za wateja kila zamu", "Kufungua duka la pili ifikapo Juni", "Kulipa mishahara kila wiki mbili"], answer: 2, why: "Kufungua sehemu mpya ni kazi ya muda, ina tarehe ya mwisho na inaunda kitu kipya." },
            { objective: "O1", q: "Mfadhili anaongeza vipengele vitatu vipya lakini tarehe ya mwisho na bajeti zinabaki zile zile. Nini kina uwezekano mkubwa wa kuathirika?", options: ["Hakuna; wigo hauathiri vikwazo vingine", "Ubora, isipokuwa muda, watu au pesa zaidi viongezwe", "Jina la mradi tu", "Orodha ya wadau"], answer: 1, why: "Wigo, ratiba na gharama vimeunganishwa; wigo zaidi kwa muda na pesa zile zile unaweka shinikizo kwa ubora." }
          ]
        },
        {
          title: "Hati ya mradi na wadau wako",
          objectives: ["O2"],
          minutes: 6,
          goal: "Andika hati ya mradi ya ukurasa mmoja na orodha ya wadau kwa mradi mdogo.",
          text: [
            "Hati ya mradi (project charter) ni waraka unaoanzisha mradi rasmi. Inamtaja mfadhili (mtu anayeidhinisha na kulipia mradi) na inampa meneja wa mradi mamlaka ya kutumia watu na pesa. Ifikirie kama amri ya operesheni: bila hati, hakuna mradi.",
            "Hati nzuri ya ukurasa mmoja ina: kusudi (kwa nini), lengo lenye kipimo (\"kufungua usajili wa mtandaoni wa benki ya chakula ifikapo 1 Machi, na familia 50 zikijisajili katika mwezi wa kwanza\"), wigo ndani na wigo nje, tarehe ya mwisho na hatua muhimu kuu, bajeti, hatari kuu, na jina la mfadhili.",
            "Wadau ni kila mtu anayeathiri mradi au anayeathiriwa nao: mfadhili, timu, wateja, majirani, wakaguzi, wasambazaji. Waorodheshe, kisha mweke kila mmoja kwenye jedwali rahisi la ushawishi (juu au chini) na maslahi (juu au chini). Ushawishi juu na maslahi juu: wasimamie kwa karibu. Ushawishi juu, maslahi chini: hakikisha wanaridhika. Ushawishi chini, maslahi juu: wajulishe. Chini na chini: wasiliana nao mara kwa mara."
          ],
          steps: ["Andika kusudi kwa sentensi moja.", "Andika lengo lenye namba na tarehe.", "Orodhesha kilicho ndani ya wigo na kilicho nje.", "Ongeza tarehe ya mwisho, hatua muhimu, bajeti na mfadhili.", "Orodhesha wadau na mweke kila mmoja kwenye jedwali la ushawishi na maslahi."],
          words: [["Hati ya mradi (project charter)", "waraka unaoanzisha mradi rasmi na kumpa meneja wa mradi mamlaka."], ["Mfadhili (sponsor)", "mtu au kikundi kinachoidhinisha, kulipia na kuunga mkono mradi."], ["Mdau (stakeholder)", "mtu yeyote anayeathiri mradi au anayeathiriwa nao."], ["Hatua muhimu (milestone)", "kituo muhimu katika ratiba, kisicho na muda wake chenyewe, kama \"kibali kimeidhinishwa\"."]],
          slides: [
            { title: "Hati inaanzisha mradi", bullets: ["Inamtaja mfadhili", "Inampa meneja wa mradi mamlaka", "Bila hati, hakuna mradi"] },
            { title: "Kinachoingia kwenye ukurasa mmoja", bullets: ["Kusudi na lengo linalopimika", "Wigo ndani na wigo nje", "Tarehe ya mwisho, hatua muhimu, bajeti, hatari kuu"] },
            { title: "Jedwali la wadau", bullets: ["Ushawishi juu, maslahi juu: wasimamie kwa karibu", "Ushawishi juu, maslahi chini: hakikisha wanaridhika", "Ushawishi chini, maslahi juu: wajulishe"] }
          ],
          tryIt: "Chagua mradi mdogo halisi, kama mkutano wa familia, harambee ya kanisa, mauzo ya vitu vya nyumbani au kusafisha stoo kazini. Andika hati ya mradi ya ukurasa mmoja yenye kila sehemu iliyotajwa juu, kisha orodhesha angalau wadau watano na mweke kila mmoja kwenye jedwali.",
          youCanNow: "kuandika hati ya mradi ya ukurasa mmoja na kuamua jinsi ya kufanya kazi na kila mdau.",
          quickCheck: [
            { objective: "O2", q: "Lengo lipi ni bora kwa hati ya mradi?", options: ["\"Kufanya tovuti iwe bora\"", "\"Kufanya kazi nzuri kwenye usajili\"", "\"Kujaribu kumaliza mapema\"", "\"Kufungua usajili wa mtandaoni ifikapo 1 Machi na familia 50 zikijisajili katika mwezi wa kwanza\""], answer: 3, why: "Lengo zuri lina namba na tarehe, ili kila mtu ajue kama limefikiwa." },
            { objective: "O2", q: "Mkaguzi wa jiji ana ushawishi mkubwa lakini maslahi kidogo katika mradi wako. Unamshughulikiaje?", options: ["Hakikisha anaridhika: timiza mahitaji yake bila taarifa nyingi", "Mpuuze hadi mwisho", "Mtumie kila taarifa ya kila siku", "Mfanye mfadhili"], answer: 0, why: "Wadau wenye ushawishi mkubwa na maslahi kidogo wanaridhishwa ili wasizuie mradi." }
          ]
        },
        {
          title: "Kugawa kazi na kupata njia muhimu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Jenga mgawanyo wa kazi (WBS) na ratiba, na uonyeshe njia muhimu.",
          text: [
            "Mgawanyo wa kazi (work breakdown structure, WBS) unagawa mradi mzima katika vipande vidogo vya matokeo, ngazi kwa ngazi, hadi kila kipande kiwe kidogo kiasi cha kukadiriwa na kupewa mtu mmoja. Kipande kidogo kabisa ni kifurushi cha kazi (work package). Kama hakimo kwenye WBS, hakimo kwenye mradi.",
            "Kisha, orodhesha kazi, muda wa kila moja (duration) na ipi lazima imalizike kabla nyingine haijaanza (utegemezi). Zichore kama visanduku vyenye mishale, kutoka kushoto kwenda kulia. Mfano: A, pata kibali (siku 2); B, jenga kibanda (siku 3, baada ya A); C, agiza mabango (siku 1, baada ya A); D, weka kibanda kwenye maonyesho (siku 2, baada ya B na C).",
            "Jumlisha kila njia kutoka mwanzo hadi mwisho. A-B-D inachukua 2 + 3 + 2 = siku 7. A-C-D inachukua 2 + 1 + 2 = siku 5. Njia ndefu zaidi ndiyo njia muhimu (critical path): inaweka muda mfupi zaidi wa kumaliza, siku 7. Kuchelewa kwa A, B au D kunachelewesha mradi mzima. C ina nafasi (float au slack) ya 7 - 5 = siku 2: inaweza kuchelewa siku 2 bila kusogeza mwisho."
          ],
          steps: ["Andika matokeo makuu ya mradi kama ngazi ya kwanza ya WBS.", "Gawa kila moja hadi kipande kiwe kidogo kiasi cha mtu mmoja kukikadiria.", "Orodhesha kazi pamoja na muda wake na kile kila moja lazima ikisubiri.", "Chora visanduku na mishale, kisha jumlisha kila njia.", "Njia ndefu zaidi ndiyo njia muhimu; nyingine zina nafasi."],
          words: [["Mgawanyo wa kazi (WBS)", "mti unaogawa matokeo ya mradi katika vipande vidogo."], ["Kifurushi cha kazi (work package)", "kipande kidogo kabisa katika WBS, kidogo kiasi cha kukadiriwa na kugawiwa."], ["Utegemezi (dependency)", "kiungo kinachomaanisha kazi moja lazima imalizike (au ianze) kabla nyingine haijaweza."], ["Njia muhimu (critical path)", "mlolongo mrefu zaidi wa kazi zilizounganishwa; unaweka muda wa mapema zaidi mradi unaweza kumalizika."], ["Nafasi (float au slack)", "muda ambao kazi inaweza kuchelewa bila kuchelewesha mwisho wa mradi."], ["Chati ya Gantt", "chati ya mistari inayoonyesha kila kazi kwenye kalenda."]],
          slides: [
            { title: "Mgawanyo wa kazi (WBS)", bullets: ["Mradi mzima, kisha matokeo, kisha vifurushi vya kazi", "Kila kifurushi cha kazi: mhusika mmoja, rahisi kukadiria", "Kisichokuwa kwenye WBS hakimo kwenye mradi"] },
            { title: "Muda na utegemezi", bullets: ["Kila kazi inachukua muda gani", "Nini lazima kimalizike kabla haijaanza", "Chora visanduku na mishale, kutoka kushoto kwenda kulia"] },
            { title: "Kupata njia muhimu", bullets: ["Jumlisha kila njia kutoka mwanzo hadi mwisho", "Mfano: A-B-D = siku 7, A-C-D = siku 5", "Njia ndefu zaidi = njia muhimu = siku 7"] },
            { title: "Nafasi (float)", bullets: ["Kazi C inaweza kuchelewa siku 2 bila kusogeza mwisho", "Kazi za njia muhimu zina nafasi sifuri", "Fuatilia kazi za njia muhimu kwa karibu zaidi"] }
          ],
          tryIt: "Chukua mradi kutoka kwenye hati yako. Chora WBS yenye angalau ngazi mbili kwenye karatasi. Kisha orodhesha kazi tano hadi nane pamoja na muda na utegemezi wake, zichore kama visanduku na mishale, jumlisha kila njia, na zungushia duara njia muhimu. Andika nafasi ya kazi moja isiyo kwenye njia hiyo.",
          youCanNow: "kugawa mradi kuwa WBS, kujenga ratiba rahisi na kupata njia muhimu na nafasi.",
          quickCheck: [
            { objective: "O3", q: "Njia 1 inachukua siku 9 na Njia 2 inachukua siku 6. Njia muhimu ni ipi, na mradi ni mrefu kiasi gani?", options: ["Njia 2, siku 6", "Njia zote mbili, siku 15", "Njia 1, siku 9", "Njia 1, siku 3"], answer: 2, why: "Njia ndefu zaidi ndiyo njia muhimu, na inaweka muda mfupi zaidi wa kumaliza: siku 9." },
            { objective: "O3", q: "Kazi ina nafasi ya siku 2 na inachelewa siku 1. Nini kinatokea kwa tarehe ya kumaliza?", options: ["Haisogei", "Inasogea siku 1 mbele", "Inasogea siku 2 mbele", "Mradi unafutwa"], answer: 0, why: "Kazi inaweza kuchelewa hadi kiasi cha nafasi yake bila kuchelewesha mwisho." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuanza mradi kwa njia sahihi",
        questions: [
          { objective: "O1", q: "Nini kinatofautisha mradi na operesheni?", options: ["Mradi unagharimu zaidi", "Mradi ni wa muda na unaunda matokeo ya kipekee", "Operesheni hazitumii ratiba kamwe", "Mradi hauna bajeti"], answer: 1, why: "Miradi ina mwanzo, mwisho na matokeo ya kipekee; operesheni hujirudia." },
          { objective: "O2", q: "Waraka upi unaanzisha mradi rasmi na kumpa meneja wa mradi mamlaka?", options: ["Daftari la hatari", "Chati ya Gantt", "Ripoti ya mafunzo uliyopata", "Hati ya mradi"], answer: 3, why: "Hati ya mradi inaidhinisha mradi na kumtaja mfadhili." },
          { objective: "O2", q: "Majirani wanajali sana usafishaji wako wa bustani ya umma lakini hawawezi kuuzuia. Mbinu ipi ni bora?", options: ["Wajulishe", "Wasimamie kwa karibu kama mfadhili", "Waache nje ya orodha", "Waombe waulipie"], answer: 0, why: "Wadau wenye ushawishi mdogo na maslahi makubwa wanajulishwa." },
          { objective: "O3", q: "Kifurushi cha kazi ni nini?", options: ["Sanduku ambalo vifaa vya mradi vinafika ndani yake", "Ripoti ya mwisho", "Kipande kidogo kabisa cha WBS, kidogo kiasi cha kukadiriwa na kugawiwa", "Bajeti ya mfadhili"], answer: 2, why: "Kifurushi cha kazi ni ngazi ya chini kabisa ya mgawanyo wa kazi." },
          { objective: "O3", q: "Kazi: A (siku 3), kisha B (siku 4) na C (siku 2) zote baada ya A, kisha D (siku 1) baada ya B na C. Njia muhimu ni ndefu kiasi gani?", options: ["Siku 6", "Siku 10", "Siku 7", "Siku 8"], answer: 3, why: "A-B-D = 3 + 4 + 1 = siku 8, ndefu kuliko A-C-D = siku 6." }
        ]
      }
    },
    {
      name: "Sura 2: Kuweka mradi kwenye mstari na kujiandaa kwa CAPM",
      lessons: [
        {
          title: "Hatari, matatizo na udhibiti wa mabadiliko",
          objectives: ["O4"],
          minutes: 6,
          goal: "Andika hatari katika daftari la hatari na upitishe ombi la mabadiliko kupitia udhibiti wa mabadiliko.",
          text: [
            "Hatari (risk) ni kitu ambacho KINAWEZA kutokea na kingeathiri mradi. Tatizo (issue) ni shida inayotokea SASA. Andika hatari mapema katika daftari la hatari: hatari yenyewe, uwezekano wake (kiasi gani inaweza kutokea, 1 hadi 5), athari yake (ubaya wake, 1 hadi 5), alama (uwezekano mara athari), jibu na mhusika mmoja.",
            "Kuna majibu manne makuu kwa tishio. Iepuke (badilisha mpango ili isiweze kutokea). Ihamishe (ipeleke kwa mtu mwingine, kwa mfano kwa bima au mkataba). Ipunguze (ifanye isiwezekane sana au isiwe na madhara mengi). Ikubali (usifanye kitu sasa, lakini ifuatilie, na pengine weka akiba ya muda au pesa). Mfano: mvua katika sherehe ya nje, uwezekano 3, athari 4, alama 12; jibu: punguza kwa kukodi hema; mhusika: Maria.",
            "Mabadiliko yatakuja. Kuongezeka kwa wigo bila idhini (scope creep) ni pale kazi inapoongezwa bila idhini. Ili kuzuia hili, tumia udhibiti wa mabadiliko: andika ombi la mabadiliko, kagua athari yake kwa wigo, muda, gharama, ubora na hatari, mtu sahihi (mara nyingi mfadhili au bodi ya mabadiliko) aliidhinishe au alikatae, kisha sasisha mpango na kumbukumbu ya mabadiliko. Bila idhini, hakuna badiliko."
          ],
          steps: ["Orodhesha kinachoweza kwenda vibaya (na kinachoweza kwenda vizuri kuliko ilivyopangwa).", "Pa kila hatari alama: uwezekano x athari.", "Chagua jibu: epuka, hamisha, punguza au kubali.", "Pa kila hatari mhusika mmoja.", "Kwa badiliko lolote: liandike, kagua athari, pata idhini, kisha sasisha mpango."],
          words: [["Hatari (risk)", "kitu kisicho na uhakika ambacho kinaweza kutokea na kingeathiri mradi."], ["Tatizo (issue)", "shida ambayo tayari inatokea."], ["Daftari la hatari (risk register)", "jedwali la hatari lenye alama, majibu na wahusika."], ["Kupunguza (mitigate)", "kufanya hatari isiwezekane sana au isiwe na madhara mengi."], ["Kuongezeka kwa wigo bila idhini (scope creep)", "kazi inayoongezwa kwenye mradi bila idhini."], ["Udhibiti wa mabadiliko (change control)", "utaratibu wa kukagua, kuidhinisha au kukataa mabadiliko kabla hayajafanywa."]],
          slides: [
            { title: "Hatari au tatizo?", bullets: ["Hatari: inaweza kutokea", "Tatizo: linatokea sasa", "Andika hatari mapema"] },
            { title: "Daftari la hatari", bullets: ["Uwezekano x athari = alama", "Jibu moja na mhusika mmoja kwa kila hatari", "Lipitie katika kila mkutano wa timu"] },
            { title: "Majibu manne kwa tishio", bullets: ["Epuka, hamisha, punguza, kubali", "Mfano: hatari ya mvua, alama 12, punguza kwa hema"] },
            { title: "Udhibiti wa mabadiliko", bullets: ["Andika ombi", "Kagua athari kwa wigo, muda, gharama, ubora, hatari", "Idhinisha au kataa, kisha sasisha mpango"] }
          ],
          tryIt: "Tengeneza daftari la hatari la mradi wako katika spreadsheet au kwenye karatasi lenye safu: hatari, uwezekano, athari, alama, jibu, mhusika. Ongeza angalau hatari tatu. Kisha andika ombi moja la mabadiliko ambalo mtu anaweza kuomba, na uandike athari yake kwa muda na gharama na nani lazima aliidhinishe.",
          youCanNow: "kutunza daftari la hatari na kuzuia kuongezeka kwa wigo bila idhini kwa udhibiti wa mabadiliko.",
          quickCheck: [
            { objective: "O4", q: "Hatari ina uwezekano 4 na athari 3. Alama yake ni ngapi?", options: ["7", "12", "1", "43"], answer: 1, why: "Alama = uwezekano x athari = 4 x 3 = 12." },
            { objective: "O4", q: "Mwanatimu anaongeza kipengele kipya kwa sababu mteja aliomba wakiwa njiani kwenye korido. Nini kilienda vibaya?", options: ["Hakuna; wateja ni wa kwanza", "Daftari la hatari lilikuwa refu mno", "Hati ya mradi ilikuwa fupi mno", "Kuongezeka kwa wigo bila idhini: badiliko liliruka udhibiti wa mabadiliko"], answer: 3, why: "Mabadiliko lazima yaandikwe, yakaguliwe athari na yaidhinishwe kabla kazi haijaanza." }
          ]
        },
        {
          title: "Kutabiri, Agile au mseto: kuchagua mbinu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua mbinu ya kutabiri, Agile au mseto kwa mradi na utoe sababu.",
          text: [
            "Mbinu ya kutabiri (predictive; wakati mwingine huitwa waterfall au mbinu ya mpango) inapanga wigo, ratiba na gharama mapema na kufuata mpango, huku mabadiliko yakipitia udhibiti wa mabadiliko. Inafaa kazi ambayo mahitaji yake yako wazi na hayabadiliki na mabadiliko ni ghali, kama kujenga njia ya mteremko, kuhamisha ghala au kazi ya ujenzi yenye vibali.",
            "Mbinu ya Agile inatoa kazi katika mizunguko mifupi (iterations au sprints), inapata maoni kila wakati na kurekebisha mpango. Inafaa kazi ambayo mahitaji hayako wazi au yatabadilika, kama app mpya au huduma mpya ambapo lazima ujifunze wateja wanataka nini. Scrum na Kanban ni mbinu za Agile zinazotumika sana.",
            "Mbinu ya mseto (hybrid) inazichanganya: kwa mfano, mpango wa kutabiri wa kununua vifaa na tarehe ya ufunguzi isiyobadilika, pamoja na sprints za Agile kwa tovuti na matangazo. Mbinu yoyote ile, lazima mtu aelewe mahitaji: kile mteja anachohitaji kwa kweli. Kukusanya, kuandika na kukagua mahitaji kunaitwa uchambuzi wa biashara (business analysis), na ni sehemu ya kile CAPM inachohusu."
          ],
          steps: ["Uliza: je, mahitaji yako wazi na hayabadiliki?", "Uliza: badiliko la kuchelewa katika mradi ni ghali kiasi gani?", "Uliza: je, tunaweza kutoa kazi na kupata maoni kwa vipande vidogo?", "Wazi na ghali kubadilisha: kutabiri. Si wazi na rahisi kutoa kwa vipande: Agile. Mchanganyiko: mseto."],
          words: [["Mbinu ya kutabiri (predictive)", "panga wigo, muda na gharama mapema, kisha fuata mpango; pia huitwa waterfall."], ["Mbinu ya Agile", "toa kazi katika mizunguko mifupi, pata maoni na urekebishe mpango."], ["Mbinu ya mseto (hybrid)", "mchanganyiko wa sehemu za kutabiri na za Agile katika mradi mmoja."], ["Hitaji (requirement)", "jambo ambalo matokeo lazima yatimize, kama \"wateja wanaweza kulipa kwa simu\"."], ["Uchambuzi wa biashara (business analysis)", "kutafuta, kuandika na kukagua kile mteja anachohitaji kwa kweli."]],
          slides: [
            { title: "Kutabiri (kwa mpango)", bullets: ["Panga wigo, ratiba na gharama mapema", "Bora wakati mahitaji yako wazi na hayabadiliki", "Mfano: kujenga njia ya mteremko kwa kiti cha magurudumu"] },
            { title: "Agile", bullets: ["Mizunguko mifupi yenye maoni kila wakati", "Bora wakati mahitaji hayako wazi au yatabadilika", "Mfano: app mpya ya simu kwa wateja"] },
            { title: "Mseto na mahitaji", bullets: ["Changanya zote mbili katika mradi mmoja", "Daima tafuta kile mteja anachohitaji kwa kweli", "Kazi hiyo ni uchambuzi wa biashara"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Soma haya matatu: (1) kuweka lami maegesho ya kanisa kwa kibali na bajeti visivyobadilika; (2) app mpya ya kusafirisha mizigo ambapo wateja wanaendelea kuomba mabadiliko; (3) kufungua mgahawa kwa tarehe isiyobadilika na tovuti mpya ya kuagiza mtandaoni. Andika kutabiri, Agile au mseto kwa kila moja, na sababu mbili. Kisha amua mbinu ipi inafaa mradi wako mwenyewe na kwa nini.",
          youCanNow: "kuchagua mbinu ya kutabiri, Agile au mseto na kueleza kwa nini inafaa.",
          quickCheck: [
            { objective: "O5", q: "Timu inajenga app mpya na bado haijui wateja watatumia vipengele vipi. Mbinu ipi inafaa zaidi?", options: ["Kutabiri, na kila kipengele kikiwekwa sasa", "Hakuna mbinu kabisa", "Agile, kutoa vipande vidogo na kupata maoni", "Kusubiri hadi wateja watume orodha kamili"], answer: 2, why: "Mahitaji yasiyo wazi yanafaa Agile: mizunguko mifupi na maoni yanaonyesha wateja wanataka nini." },
            { objective: "O5", q: "Kuweka lami maegesho kwa kibali kisichobadilika, bajeti isiyobadilika na vipimo vilivyo wazi kunafaa mbinu ipi?", options: ["Kutabiri", "Agile", "Kanban tu", "Hakuna, kwa sababu ni operesheni"], answer: 0, why: "Mahitaji yaliyo wazi na yasiyobadilika na mabadiliko ya kuchelewa yaliyo ghali yanafaa mpango wa kutabiri." }
          ]
        },
        {
          title: "CAPM: kukagua masharti na kupanga mtihani wako",
          objectives: ["O6"],
          minutes: 6,
          goal: "Jenga mpango wenye tarehe wa kusoma na kufanya mtihani wa CAPM kutoka kurasa rasmi za PMI.",
          text: [
            "Certified Associate in Project Management (CAPM) ni cheti cha ngazi ya mwanzo kinachotolewa na Project Management Institute (PMI) pekee. Ni kwa watu wanaoanza, kwa hiyo hakiombi miaka ya uzoefu wa miradi kama Project Management Professional (PMP) ya PMI inavyoomba. PMI inahitaji mafunzo fulani ya usimamizi wa miradi kabla ya kufanya mtihani. Kozi hii inakuandaa; si cheti, na huenda ikahesabiwa au isihesabiwe katika saa za mafunzo za PMI, kwa hiyo kagua pmi.org.",
            "Kabla ya kupanga, soma ukurasa rasmi wa CAPM wa PMI pamoja na kitabu cha mwongozo cha CAPM (handbook) na Exam Content Outline (muhtasari wa maudhui ya mtihani) unaowaunganisha. Andika: nani anastahili, saa ngapi za mafunzo unahitaji na nini kinahesabiwa, ada ya sasa (wanachama wa PMI na wasio wanachama wanaweza kulipa viwango tofauti), jinsi na wapi unaweza kufanya mtihani, na jinsi ya kudumisha cheti (lazima kihuishwe). Muhtasari wa hivi karibuni umehusu misingi ya usimamizi wa miradi, mbinu za kutabiri, mbinu za Agile na uchambuzi wa biashara, lakini tumia muhtasari ambao PMI inaonyesha leo.",
            "Wanajeshi wastaafu wa Marekani: GI Bill inaweza kurudisha ada za mitihani ya leseni na vyeti. Kagua ukurasa wa ada za mitihani wa VA na GI Bill Comparison Tool yake kuona kama mtihani umeidhinishwa. Nje ya Marekani, PMI ina matawi ya ndani (chapters) katika nchi nyingi; tafuta moja kwenye pmi.org kwa vikundi vya kusoma. Jihadhari na yeyote anayeuza \"kufaulu kwa uhakika\" au maswali halisi ya mtihani: hilo linavunja sheria za PMI na linaweza kukugharimu cheti."
          ],
          steps: ["Fungua pmi.org na utafute ukurasa wa CAPM, kitabu cha mwongozo na Exam Content Outline.", "Andika masharti ya kustahili, saa za mafunzo, ada, muundo wa mtihani na sheria za kuhuisha.", "Chagua tarehe ya mtihani unayolenga wiki 8 hadi 12 kutoka sasa (au inayofaa maisha yako).", "Gawa masomo yako kuwa WBS kwa mada za mtihani, na hatua muhimu na mitihani ya mazoezi.", "Ongeza daftari la hatari: saa za kazi, familia, wasiwasi wa mtihani, gharama."],
          words: [["CAPM", "Certified Associate in Project Management, cheti cha ngazi ya mwanzo kutoka PMI."], ["PMI", "Project Management Institute, shirika linalotoa CAPM na PMP."], ["Exam Content Outline", "orodha rasmi ya PMI ya mada ambazo mtihani unahusu."], ["PMP", "Project Management Professional, cheti cha PMI kwa mameneja wa miradi wenye uzoefu."], ["Kustahili (eligibility)", "masharti unayopaswa kutimiza kabla ya kuomba kufanya mtihani."]],
          slides: [
            { title: "CAPM ni nini", bullets: ["Cheti cha ngazi ya mwanzo, kinachotolewa na PMI pekee", "Hakihitaji miaka ya uzoefu wa miradi, tofauti na PMP", "Kozi hii inakuandaa; si cheti"] },
            { title: "Kagua kwenye pmi.org", bullets: ["Kustahili na saa za mafunzo", "Ada ya sasa, kwa mwanachama na asiye mwanachama", "Muundo wa mtihani, Exam Content Outline, kuhuisha"] },
            { title: "Msaada wa gharama", bullets: ["Wanajeshi wastaafu: GI Bill inaweza kurudisha ada za mitihani ya vyeti", "Kagua va.gov na GI Bill Comparison Tool", "Nje ya Marekani: tafuta tawi la PMI la karibu"] },
            { title: "Panga mtihani wako kama mradi", bullets: ["Hati ya mradi: lengo na tarehe ya mtihani unayolenga", "WBS kwa mada za mtihani, na hatua muhimu", "Daftari la hatari; usinunue kamwe \"maswali halisi ya mtihani\""] }
          ],
          sources: [{ name: "PMI: Certified Associate in Project Management (CAPM)", url: "https://www.pmi.org/certifications/certified-associate-capm" }, { name: "PMI: Certifications", url: "https://www.pmi.org/certifications" }, { name: "U.S. Department of Veterans Affairs: Reimbursement for licensing or certification test fees", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" }],
          tryIt: "Kazi ya mwisho: fungua ukurasa wa CAPM wa PMI na uandike masharti ya kustahili, saa za mafunzo, ada na mada za mtihani. Kisha panga maandalizi yako ya CAPM kama mradi: hati ya mradi ya ukurasa mmoja yenye tarehe ya mtihani unayolenga, WBS ya masomo yako kwa mada, ratiba yenye tarehe na hatua muhimu na njia muhimu ikiwa imeonyeshwa, na daftari la hatari lenye angalau hatari tatu. Ongeza orodha ya kurasa za PMI ulizokagua.",
          youCanNow: "kukagua masharti ya sasa ya CAPM ya PMI na kujenga mpango wako mwenyewe wenye tarehe wa kusoma na kufanya mtihani.",
          quickCheck: [
            { objective: "O6", q: "Nani anatoa CAPM?", options: ["Kozi hii", "Bodi ya leseni ya jimbo lako", "Kampuni yoyote ya mafunzo", "Project Management Institute (PMI)"], answer: 3, why: "PMI pekee inatoa CAPM; kozi zinakuandaa tu." },
            { objective: "O6", q: "Unapaswa kukagua wapi ada ya sasa ya CAPM na saa za mafunzo?", options: ["Chapisho la mitandao ya kijamii", "Ukurasa rasmi wa CAPM wa PMI na kitabu cha mwongozo kwenye pmi.org", "Muuzaji wa mitihani ya mazoezi", "Jibu la chatbot ya AI"], answer: 1, why: "Ada na masharti hubadilika; kurasa za PMI zenyewe ndizo chanzo rasmi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuweka mradi kwenye mstari na kujiandaa kwa CAPM",
        questions: [
          { objective: "O4", q: "Msambazaji wako anaweza kuchelewa. Unapanga msambazaji wa pili endapo itatokea. Hili ni jibu gani?", options: ["Kukubali", "Kuepuka", "Kupunguza", "Kupuuza"], answer: 2, why: "Msambazaji wa akiba anafanya tishio lisiwe na madhara mengi, na huko ni kupunguza." },
          { objective: "O4", q: "Mfadhili anaomba jukwaa kubwa zaidi. Nini kifanyike kwanza?", options: ["Lijenge mara moja", "Andika ombi la mabadiliko na ukague athari yake kwa muda na gharama", "Kataa mabadiliko yote", "Ondoa kazi nyingine bila kumwambia mtu"], answer: 1, why: "Udhibiti wa mabadiliko unakagua athari na kupata idhini kabla ya badiliko lolote." },
          { objective: "O5", q: "Hali ipi inafaa mbinu ya mseto?", options: ["Mgahawa mpya wenye tarehe ya ufunguzi isiyobadilika pamoja na tovuti mpya ya kuagiza inayojengwa kwa sprints", "Kuweka lami barabara kwa muundo usiobadilika", "Kujibu simu kila siku", "Kupaka rangi chumba kimoja"], answer: 0, why: "Mseto unachanganya mpango wa kutabiri kwa sehemu zisizobadilika na Agile kwa sehemu zitakazobadilika." },
          { objective: "O6", q: "CAPM inatofautianaje na PMP?", options: ["CAPM inatolewa na jimbo lako", "Hakuna tofauti", "PMP ni kwa wanaoanza", "CAPM ni ya ngazi ya mwanzo na haihitaji miaka ya uzoefu wa miradi"], answer: 3, why: "CAPM ni cheti cha PMI cha ngazi ya mwanzo; PMP ni kwa mameneja wa miradi wenye uzoefu." },
          { objective: "O6", q: "Mtu mtandaoni anauza \"maswali halisi ya mtihani wa CAPM\". Unafanya nini?", options: ["Uyanunue ili ufaulu haraka", "Uyashiriki na kikundi chako cha kusoma", "Ukatae: inavunja sheria za PMI na inaweza kukugharimu cheti", "Uyatumie mara moja tu"], answer: 2, why: "Kutumia maudhui ya mtihani yaliyovuja kunavunja sheria za PMI; soma kutoka kwenye muhtasari na mitihani ya mazoezi ya uaminifu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Usimamizi wa Miradi (Maandalizi ya CAPM)",
    questions: [
      { objective: "O1", q: "Kipi ni operesheni ya kila siku, si mradi?", options: ["Kujenga tovuti mpya", "Kushughulikia oda za wateja kila siku", "Kuhamisha ofisi kwenda mji mpya", "Kuandaa maonyesho ya kazi ya mara moja"], answer: 1, why: "Kushughulikia oda kila siku kunajirudia; vingine ni vya muda na vina matokeo ya kipekee." },
      { objective: "O1", q: "Vikwazo vipi vitatu ndivyo vikwazo vitatu vya kawaida (triple constraint)?", options: ["Karatasi, kalamu na printa", "Mfadhili, timu na mteja", "Hatari, tatizo na badiliko", "Wigo, ratiba na gharama"], answer: 3, why: "Wigo, ratiba na gharama ndivyo vitatu vya kawaida, na vinaathiriana." },
      { objective: "O1", q: "Katika awamu ipi unakabidhi matokeo na kuandika mafunzo uliyopata?", options: ["Kufunga", "Kuanza", "Kupanga", "Kufanya kazi"], answer: 0, why: "Kufunga kunakabidhi matokeo na kuhifadhi mafunzo kwa wakati ujao." },
      { objective: "O2", q: "Nani anaidhinisha na kulipia mradi?", options: ["Mwanatimu mpya zaidi", "Kila mdau kwa usawa", "Mfadhili", "Msambazaji"], answer: 2, why: "Mfadhili anaidhinisha, analipia na kuunga mkono mradi." },
      { objective: "O2", q: "Kipi kinafaa kuwa katika hati ya mradi?", options: ["Lengo lenye kipimo na tarehe, pamoja na wigo ndani na nje", "Oda ya chakula cha mchana ya kila mwanatimu", "Orodha ya kina ya kazi za kila siku", "Ritani ya kodi ya mwaka jana"], answer: 0, why: "Hati inatoa kusudi, lengo linalopimika, wigo, tarehe ya mwisho, bajeti na mfadhili." },
      { objective: "O2", q: "Diwani wa jiji ana ushawishi mkubwa na maslahi makubwa katika bustani yako ya jamii. Unamshughulikiaje?", options: ["Mjulishe kwa barua moja kwa mwaka", "Wasiliana naye mara kwa mara", "Mwache nje ya orodha", "Msimamie kwa karibu"], answer: 3, why: "Wadau wenye ushawishi mkubwa na maslahi makubwa wanasimamiwa kwa karibu." },
      { objective: "O3", q: "Kusudi la mgawanyo wa kazi (WBS) ni nini?", options: ["Kuorodhesha hatari za mradi", "Kugawa matokeo kuwa vipande vidogo unavyoweza kukadiria na kugawa", "Kuidhinisha mabadiliko", "Kulipa timu"], answer: 1, why: "WBS inagawa mradi mzima kuwa vifurushi vya kazi." },
      { objective: "O3", q: "Njia muhimu ni nini?", options: ["Mlolongo mfupi zaidi wa kazi", "Kazi ambazo mfadhili anazipenda zaidi", "Mlolongo mrefu zaidi wa kazi zilizounganishwa, unaoweka muda wa mapema zaidi wa kumaliza", "Orodha ya hatari"], answer: 2, why: "Njia ndefu zaidi inaweka urefu mfupi zaidi unaowezekana wa mradi." },
      { objective: "O3", q: "Njia: A-B-E = siku 10, A-C-E = siku 7, A-D-E = siku 9. Nafasi kwenye njia A-D-E ni ngapi?", options: ["Siku 0", "Siku 3", "Siku 9", "Siku 1"], answer: 3, why: "Njia muhimu ni siku 10, kwa hiyo A-D-E inaweza kuchelewa 10 - 9 = siku 1." },
      { objective: "O3", q: "Kazi iliyo kwenye njia muhimu inachelewa siku 2. Nini kinatokea?", options: ["Mwisho wa mradi unasogea siku 2 mbele isipokuwa urudishe muda", "Hakuna, kwa sababu ina nafasi", "Bajeti tu inabadilika", "Kazi inaondoka kwenye WBS"], answer: 0, why: "Kazi za njia muhimu zina nafasi sifuri, kwa hiyo kuchelewa kwake kunasogeza mwisho." },
      { objective: "O4", q: "Tofauti kati ya hatari na tatizo ni ipi?", options: ["Hakuna tofauti", "Tatizo linaweza kutokea; hatari inatokea sasa", "Hatari inaweza kutokea; tatizo linatokea sasa", "Hatari zinahusu pesa tu"], answer: 2, why: "Hatari haina uhakika na ni ya baadaye; tatizo ni shida ya sasa." },
      { objective: "O4", q: "Unanunua bima ya sherehe endapo ukumbi utaghairi. Hili ni jibu gani?", options: ["Kuepuka", "Kuhamisha", "Kukubali", "Kupunguza"], answer: 1, why: "Bima inahamisha athari ya kifedha kwa mtu mwingine, na huko ni kuhamisha." },
      { objective: "O4", q: "Kuongezeka kwa wigo bila idhini (scope creep) ni nini?", options: ["Zana ya ratiba", "Njia ya kupa hatari alama", "Aina ya mdau", "Kazi inayoongezwa kwenye mradi bila idhini"], answer: 3, why: "Scope creep ni kazi iliyoongezwa bila idhini; udhibiti wa mabadiliko unaizuia." },
      { objective: "O5", q: "Mahitaji yako wazi na hayabadiliki, na mabadiliko ya kuchelewa ni ghali sana. Mbinu ipi inafaa?", options: ["Kutabiri", "Agile", "Bila mpango", "Kubadilisha kila wiki"], answer: 0, why: "Mahitaji yaliyo wazi na yasiyobadilika na mabadiliko ghali yanafaa mbinu ya mpango." },
      { objective: "O5", q: "Uchambuzi wa biashara ni nini?", options: ["Kuhesabu pesa mwishoni", "Kuchagua chakula cha mchana cha timu", "Kutafuta, kuandika na kukagua kile mteja anachohitaji kwa kweli", "Kusaini hati ya mradi"], answer: 2, why: "Uchambuzi wa biashara unatambua mahitaji halisi." },
      { objective: "O5", q: "Shirika lisilo la faida linajenga app mpya ya kujitolea na linatarajia maoni yatabadilisha vipengele. Mbinu ipi inafaa zaidi?", options: ["Kutabiri, na vipengele vyote vikiwekwa sasa", "Agile, kutoa vipande vidogo pamoja na maoni", "Hakuna mbinu", "Kujenga yote na kuionyesha mwishoni tu"], answer: 1, why: "Mahitaji yanayobadilika yanafaa mizunguko mifupi na maoni ya Agile." },
      { objective: "O6", q: "Kozi hii inakupa nini kuelekea CAPM?", options: ["Cheti cha CAPM chenyewe", "Kufaulu kwa uhakika", "Uanachama wa PMI", "Maandalizi katika mawazo ya msingi; PMI pekee inatoa CAPM"], answer: 3, why: "Kozi inakuandaa; PMI pekee inatoa cheti." },
      { objective: "O6", q: "Waraka upi rasmi unaorodhesha mada ambazo mtihani wa CAPM unahusu?", options: ["Exam Content Outline ya PMI", "Chapisho la jukwaa la mtandaoni", "Maelezo ya kazi yako", "Tangazo la mitandao ya kijamii"], answer: 0, why: "PMI inachapisha Exam Content Outline kwa kila mtihani." },
      { objective: "O6", q: "Mwanajeshi mstaafu anataka msaada wa kulipa ada ya mtihani wa CAPM. Akague wapi?", options: ["Muuzaji wa mitihani ya mazoezi", "Benki yake", "Ukurasa wa VA wa ada za mitihani ya leseni na vyeti na GI Bill Comparison Tool", "Jukwaa lolote la mtandaoni"], answer: 2, why: "GI Bill inaweza kurudisha ada za mitihani ya vyeti iliyoidhinishwa; kurasa za VA zinaeleza jinsi." },
      { objective: "O6", q: "Njia bora ya kupanga mtihani wa CAPM ni ipi?", options: ["Kusoma kila unapokumbuka", "Kuuchukulia kama mradi: hati ya mradi, WBS kwa mada, ratiba yenye tarehe na daftari la hatari", "Kununua maswali halisi ya mtihani", "Kufanya mtihani bila kukagua masharti ya kustahili"], answer: 1, why: "Mpango wenye tarehe uliojengwa kutoka muhtasari rasmi wa PMI ndiyo njia ya kuaminika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na uwasilishe tena.",
    criteria: [
      { name: "Hati ya mradi", objective: "O2", notYet: "Lengo halieleweki au halina tarehe, au wigo ndani na nje haupo.", meets: "Ukurasa mmoja wenye kusudi, lengo lenye namba na tarehe, wigo ndani na nje, mfadhili na hatua muhimu.", exceeds: "Pia inaorodhesha wadau pamoja na ushawishi na maslahi yao na jinsi kila mmoja atakavyojulishwa." },
      { name: "WBS na ratiba", objective: "O3", notYet: "Kazi zimeorodheshwa bila mgawanyo, muda au utegemezi.", meets: "WBS yenye angalau ngazi mbili na ratiba yenye tarehe, hatua muhimu, utegemezi na njia muhimu ikiwa imeonyeshwa.", exceeds: "Inaonyesha nafasi ya kazi zisizo kwenye njia muhimu na urefu wa njia muhimu umehesabiwa kwa usahihi." },
      { name: "Daftari la hatari", objective: "O4", notYet: "Hatari chini ya tatu, au hatari zisizo na jibu au mhusika.", meets: "Angalau hatari tatu, kila moja na uwezekano, athari, alama, jibu na mhusika mmoja.", exceeds: "Inatumia zaidi ya aina moja ya jibu na ina maelezo ya udhibiti wa mabadiliko kuhusu jinsi mpango utakavyobadilishwa." },
      { name: "Mbinu", objective: "O5", notYet: "Hakuna mbinu iliyochaguliwa, au hakuna sababu iliyotolewa.", meets: "Inataja kutabiri, Agile au mseto kwa mpango wa kusoma na inatoa sababu mbili.", exceeds: "Inaonyesha jinsi mbinu inavyotumika, kwa mfano mizunguko ya kusoma ya kila wiki yenye mapitio." },
      { name: "Masharti rasmi ya CAPM yamekaguliwa", objective: "O6", notYet: "Ada, saa au mada za mtihani zimenakiliwa kutoka chanzo kisicho rasmi au zimeachwa.", meets: "Inaorodhesha masharti ya kustahili, saa za mafunzo, ada na mada za mtihani kutoka kurasa za PMI, pamoja na majina ya kurasa hizo.", exceeds: "Pia inaorodhesha msaada wa gharama (kwa mfano GI Bill au msaada wa mwajiri) na tawi la PMI la karibu au kikundi cha kusoma." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba CAPM au kumaliza mafunzo yanayohitajika na PMI ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaofaulu CAPM au wanaoajiriwa au kupandishwa cheo kuwa mratibu wa mradi, msaidizi au kiongozi wa timu",
      "Wanafunzi wanaoripoti kutumia hati ya mradi, ratiba au daftari la hatari kazini au katika jamii yao ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi na kalamu, au spreadsheet ya bure (Google Sheets au Excel mtandaoni)",
      "Intaneti ya kusoma ukurasa wa CAPM wa PMI, kitabu cha mwongozo na Exam Content Outline kwenye pmi.org",
      "Mradi mdogo halisi wa kupanga (wa familia, kazi, kanisa, jamii au kikosi cha kijeshi)",
      "Kama dakika 75 hadi 90 kwa jumla, katika vipindi vifupi, pamoja na muda wa kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; fanyeni mfano wa njia muhimu ubaoni kabla wanafunzi hawajafanya wao wenyewe.",
      "Waruhusu wanafunzi kutumia mradi kutoka maisha yao wenyewe; wanajeshi wastaafu wanaweza kuweka mpango wa operesheni kwenye hati ya mradi, WBS na daftari la hatari.",
      "Fungueni pmi.org pamoja katika kipindi cha mwisho ili wanafunzi waone masharti ya sasa, ada na Exam Content Outline; usitaje namba kwa kumbukumbu.",
      "Weka wazi kwamba kozi inawaandaa wanafunzi na haitoi CAPM; waambie wakague na PMI kama inahesabiwa katika saa za mafunzo zinazohitajika.",
      "Onya dhidi ya wauzaji wa maswali halisi ya mtihani au kufaulu kwa uhakika, na pima kazi ya mwisho kwa rubriki."
    ]
  }
};
