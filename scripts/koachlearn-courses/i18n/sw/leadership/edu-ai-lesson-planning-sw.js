"use strict";

// Koach Learn course (Swahili translation of leadership/edu-ai-lesson-planning.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-lesson-planning-sw",
  lang: "sw",
  translationOf: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "AI kwa Viongozi wa Shule na Elimu 3: AI katika Kupanga Masomo",
  skills: "Kupanga kuanzia lengo kurudi nyuma, Kuandika prompt ya mpango kamili wa somo, Kukagua mipango ya AI kwa usahihi na uwiano, Kuweka utofautishaji, Kuandaa muhtasari wa kitengo, Kuzifundisha timu kupanga kwa AI",
  outcome: "kupanga somo kamili kwa msaidizi wa AI, kuanzia lengo na vigezo vya mafanikio hadi shughuli, utofautishaji na tiketi ya kutoka, kulikagua kwa usahihi, uwiano na upendeleo, na kugeuza utaratibu wako kuwa kiolezo ambacho timu yako inaweza kutumia tena.",
  about: [
    "Kozi hii ni kwa walimu, wakufunzi wa ufundishaji (instructional coaches), wakuu wa idara na wakuu wa shule wanaosaidia upangaji. AI inaweza kupunguza muda wa kupanga, lakini mpango wa haraka unafaa tu ukiwa sahihi, ukiendana na kile wanafunzi lazima wajifunze, na ukiwafaa wanafunzi wako.",
    "Sura ya 1 inafundisha utaratibu wa kupanga kurudi nyuma (backward design) kwa AI: anza na lengo, amua ushahidi wa kujifunza, kisha jenga shughuli, na ukague kila kitu. Sura ya 2 inaongeza utofautishaji, upangaji wa kitengo, na jinsi viongozi wanavyozifundisha timu kupanga vizuri kwa AI.",
    "Tumia maelezo ya darasa ya kubuni. Usiweke kamwe majina ya wanafunzi, maelezo ya IEP au 504, alama au taarifa nyingine zinazomtambulisha mwanafunzi katika zana ambayo wilaya yako haijaidhinisha. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi. Hii ni kozi ya 3 kati ya 8 katika AI kwa Viongozi wa Shule na Elimu."
  ],
  finalTask: "Tumia msaidizi wa AI kupanga somo moja kamili ambalo wewe (au mwalimu unayemfundisha) utalifundisha: lengo na vigezo vya mafanikio kutoka kiwango (standard) unachochagua, kianzio cha kuvutia (hook), mazoezi ya kuongozwa na ya kujitegemea, msaada kwa makundi matatu (wanaohitaji msaada zaidi, walio kwenye kiwango, walio tayari kwa zaidi), na tiketi ya kutoka yenye maswali matatu pamoja na majibu. Likague kwa orodha ya ubora, andika ulichobadilisha na kwa nini, na uhifadhi prompt zako kama kiolezo cha timu yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Walimu, wakufunzi wa ufundishaji, wakuu wa idara na wakuu wa shule katika shule za Marekani wanaopanga masomo au wanaowasaidia walimu wanaopanga.",
    startingPoint: "Wanaweza kutumia mtindo wa prompt wa mwalimu na wanajua sheria za faragha ya wanafunzi kutoka kozi ya 1 na ya 2. Wanapanga masomo kwa mkono, na huenda wametumia AI kupata mawazo lakini si kwa somo kamili lililokaguliwa.",
    gap: "AI inaweza kupunguza muda wa kupanga, lakini mipango ya haraka mara nyingi ni mirefu mno, haiendani na lengo au si sahihi. Walimu na viongozi wanahitaji utaratibu wa kupanga kurudi nyuma kwa AI, ukaguzi wa ubora wa usahihi, uwiano na upendeleo, na kiolezo ambacho timu inaweza kutumia tena.",
    constraints: [
      "Tumia maelezo ya darasa ya kubuni; usiweke kamwe majina ya wanafunzi, maelezo ya IEP au 504, alama au taarifa nyingine zinazomtambulisha mwanafunzi katika zana ambayo wilaya haijaidhinisha",
      "Viwango (standards) vinatoka kwenye chanzo rasmi cha jimbo au wilaya, si kutoka kwa AI",
      "Marekebisho ya IEP na 504 yanapangwa pamoja na wenzako wa elimu maalum na lazima bado yatolewe",
      "Vifaa: kompyuta yenye intaneti na msaidizi wa AI",
      "Muda: masomo mafupi yanayoingia katika siku ya kufundisha"
    ],
    prerequisites: "\"AI kwa Viongozi wa Shule na Elimu 2: Zana za AI kwa Walimu\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa kiwango (standard) kilichonakiliwa kutoka chanzo rasmi", action: "kuandika lengo la \"Ninaweza\" na vigezo vitatu vya mafanikio kwa msaada wa AI", standard: "ukivihariri hadi viwe tayari kwa ubao, kabla ya kuomba shughuli" },
    { id: "O2", condition: "Ukipewa lengo lako", action: "kuandika prompt ya kutumia tena inayoleta rasimu kamili ya somo kutoka kwa AI", standard: "ikiwa na urefu wa kipindi, maarifa ya awali, vifaa na sehemu, na angalau maswali mawili ya kufuatilia" },
    { id: "O3", condition: "Ukipewa rasimu ya somo ya AI", action: "kuikagua kwa orodha ya ubora ya vipengele vitano na kuandika mabadiliko yako", standard: "ukirekebisha kila tatizo lililopatikana" },
    { id: "O4", condition: "Ukipewa somo na darasa lililoelezwa kwa mahitaji", action: "kupanga msaada kwa makundi matatu: wanaohitaji msaada zaidi, walio kwenye kiwango na walio tayari kwa zaidi", standard: "huku marekebisho ya IEP na 504 yakithibitishwa na mwenzako wa elimu maalum" },
    { id: "O5", condition: "Ukipewa kitengo ambacho somo lako ni sehemu yake", action: "kuandaa muhtasari wa kitengo kwa AI na kurekebisha mwendo wake", standard: "ukiongeza siku ya marudio na dhana potofu tatu za kupangia" },
    { id: "O6", condition: "Kwa timu yako au PLC", action: "kugeuza prompt zako za kupanga na orodha ya ukaguzi kuwa kiolezo cha timu na kuwafundisha wengine kukitumia", standard: "ukifuatilia muda uliookolewa na matatizo ya ubora" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga somo kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Anza na lengo, si na shughuli",
          minutes: 5,
          goal: "Andika lengo lililo wazi na vigezo vya mafanikio kabla ya kuiomba AI shughuli.",
          text: [
            "AI itafurahi kukuletea shughuli ya kufurahisha isiyofundisha kitu chochote hasa. Kupanga kurudi nyuma (backward design) kunazuia hilo: kwanza amua wanafunzi wanapaswa kujua nini au kuweza kufanya nini, kisha utakavyoliona hilo, kisha shughuli.",
            "Wewe ndiye unayechagua kiwango (standard). Nakili maneno yake halisi kutoka tovuti rasmi ya viwango ya jimbo lako au mtaala wa wilaya yako, si kutoka kwa AI, kwa sababu AI inaweza kunukuu vibaya au kubuni namba za viwango. Kisha iombe AI ikusaidie kukigeuza kuwa lengo kwa maneno ya wanafunzi (\"Ninaweza...\") na vigezo viwili au vitatu vya mafanikio.",
            "Mfano wa prompt: \"Hiki ni kiwango: [kibandike]. Andika lengo la somo moja kwa wanafunzi wa darasa la 6 kwa maneno wanayoyaelewa, na vigezo vitatu vya mafanikio vinavyoonyesha lengo limefikiwa.\" Hariri hadi uweze kuliandika ubaoni."
          ],
          steps: ["Chagua kiwango kutoka chanzo cha jimbo au wilaya yako.", "Bandika maneno yake halisi katika prompt.", "Omba lengo la \"Ninaweza\" na vigezo vya mafanikio.", "Hariri hadi liwe wazi kwa wanafunzi.", "Hapo tu ndipo upange shughuli."],
          words: [["Kupanga kurudi nyuma (backward design)", "kupanga kuanzia lengo la kujifunza, kwenda kwenye ushahidi, kisha kwenye shughuli."], ["Vigezo vya mafanikio", "kile wanafunzi wataweza kuonyesha watakapofikia lengo."], ["Kiwango (standard)", "maelezo rasmi ya kile wanafunzi wanapaswa kujifunza, yaliyowekwa na jimbo au wilaya yako."]],
          slides: [
            { title: "Kupanga kurudi nyuma", bullets: ["1. Wanafunzi wajifunze nini?", "2. Tutaliona vipi?", "3. Kisha shughuli"] },
            { title: "Wewe unachagua kiwango", bullets: ["Kinakili kutoka chanzo rasmi cha jimbo au wilaya", "AI inaweza kunukuu vibaya au kubuni namba za viwango"] },
            { title: "Lengo na vigezo vya mafanikio", bullets: ["\"Ninaweza...\" kwa maneno ya wanafunzi", "Mambo mawili au matatu wanafunzi watakayoonyesha"] }
          ],
          tryIt: "Chagua kiwango cha somo linalokuja. Kinakili kutoka chanzo rasmi, kisha tumia AI kuandika lengo la \"Ninaweza\" na vigezo vitatu vya mafanikio. Vihariri hadi viwe tayari kwa ubao.",
          youCanNow: "kuanza mpango wa somo unaosaidiwa na AI kutoka kiwango halisi, lengo na vigezo vya mafanikio.",
          quickCheck: [
            { objective: "O1", q: "Vigezo vya mafanikio ni nini?", options: ["Alama walizopata wanafunzi mwaka jana", "Kile wanafunzi wataonyesha watakapofikia lengo", "Orodha ya vifaa", "Malengo ya mwalimu kwa mwaka"], answer: 1, why: "Vigezo vya mafanikio vinaeleza ushahidi wa kujifunza kwa lengo hilo." },
            { objective: "O1", q: "AI inakupa namba ya kiwango kwa lengo lako. Ungefanya nini?", options: ["Kuitumia, kwa sababu AI inajua viwango", "Kuiomba AI iikague tena", "Kunakili kiwango kutoka chanzo rasmi cha jimbo au wilaya yako badala yake", "Kuacha kiwango nje"], answer: 2, why: "AI inaweza kunukuu vibaya au kubuni viwango, kwa hiyo vinatoka chanzo rasmi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuandika prompt ya somo zima",
          minutes: 6,
          goal: "Pata rasimu ya mpango wa somo yenye mpangilio kutoka kwa AI kwa prompt unayoweza kutumia tena.",
          text: [
            "Lengo likishawekwa, omba somo zima katika muundo wa shule yako. Prompt nzuri inatoa: darasa na somo, urefu wa kipindi, lengo na vigezo vya mafanikio, kile wanafunzi wanachojua tayari, vifaa ulivyo navyo, na sehemu unazotaka.",
            "Mfano: \"Panga somo la dakika 50 kwa darasa la 6. Lengo: [bandika]. Vigezo vya mafanikio: [bandika]. Wanafunzi wanajua tayari [x]. Vifaa: ubao mdogo wa kila mwanafunzi, projekta, hakuna vifaa vya kidijitali vya wanafunzi. Sehemu: kianzio (dakika 5), somo fupi (10), mazoezi ya kuongozwa (15), mazoezi ya kujitegemea (15), tiketi ya kutoka (5). Tumia jedwali lenye muda, vitendo vya mwalimu, vitendo vya wanafunzi.\"",
            "Ichukulie matokeo kama rasimu kutoka kwa mwenzako mwepesi lakini mgeni kazini. Uliza maswali ya kufuatilia: \"fanya kianzio kiunganike na maisha ya wanafunzi\", \"ongeza ukaguzi wa uelewa mara mbili wakati wa somo fupi\", \"fupisha mazoezi ya kuongozwa yawe dakika 10\"."
          ],
          steps: ["Taja darasa, somo na urefu wa kipindi.", "Bandika lengo na vigezo vya mafanikio.", "Sema wanafunzi wanajua nini na una vifaa gani.", "Orodhesha sehemu na muda unaotaka.", "Omba jedwali, kisha liboreshe kwa maswali ya kufuatilia."],
          words: [["Somo fupi (mini-lesson)", "sehemu fupi ya kufundisha inayolenga jambo moja."], ["Ukaguzi wa uelewa", "njia ya haraka ya kuona kama wanafunzi wanafuatilia, kama kuinua kidole gumba au jibu kwenye ubao mdogo."]],
          slides: [
            { title: "Ipe AI mazingira", bullets: ["Darasa, somo, urefu wa kipindi", "Lengo na vigezo vya mafanikio", "Maarifa ya awali na vifaa"] },
            { title: "Omba muundo wako", bullets: ["Sehemu pamoja na muda", "Jedwali: muda, mwalimu, wanafunzi"] },
            { title: "Liboreshe", bullets: ["\"Unganisha kianzio na maisha ya wanafunzi\"", "\"Ongeza ukaguzi wa uelewa mara mbili\""] }
          ],
          tryIt: "Tumia mtindo huu wa prompt kupata rasimu kamili ya somo kwa lengo lako kutoka Somo la 1. Uliza angalau maswali mawili ya kufuatilia ili kuiboresha.",
          youCanNow: "kupata kutoka kwa AI rasimu ya somo yenye mpangilio inayofaa kutumika, na kuiboresha kwa maswali ya kufuatilia.",
          quickCheck: [
            { objective: "O2", q: "Unapaswa kuichukuliaje rasimu ya somo ya AI?", options: ["Kama rasimu kutoka kwa mwenzako mwepesi lakini mgeni kazini", "Kama mpango uliokamilika tayari kufundishwa", "Kama mpango ulioidhinishwa na wilaya yako", "Kama kitu cha kuwaficha wenzako"], answer: 0, why: "Rasimu za AI ni za haraka lakini zinahitaji busara yako kabla ya kutumika." },
            { objective: "O2", q: "Somo la AI halina ukaguzi wa uelewa. Ungefanya nini?", options: ["Kulifundisha kama lilivyo", "Kuanza mazungumzo mapya kwa zana nyingine", "Kuondoa shughuli za mazoezi", "Kuuliza swali la kufuatilia: \"Ongeza ukaguzi wa haraka wa uelewa baada ya mazoezi ya kuongozwa\""], answer: 3, why: "Maswali ya kufuatilia yanajaza mapengo katika rasimu bila kuanza upya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kukagua mpango: usahihi, uwiano na upendeleo",
          minutes: 5,
          goal: "Kagua mpango wa somo wa AI kwa orodha ya ubora ya vipengele vitano.",
          text: [
            "Kila mpango wa AI unahitaji ukaguzi wa mwalimu kabla haujawafikia wanafunzi. Tumia maswali matano. Sahihi: je, ukweli wote, mifano, tarehe na majibu ni sahihi? Unaendana: je, kila shughuli inawasogeza wanafunzi kuelekea lengo, na tiketi ya kutoka inalipima?",
            "Kiwango sahihi: je, ugumu na urefu vinawafaa wanafunzi hawa na muda huu? Haki na jumuishi: je, mifano, majina na mazingira ni ya heshima na ya aina mbalimbali, bila dhana potofu kuhusu makundi ya watu, na yanafikika kwa wanafunzi wenye ulemavu na wanaojifunza Kiingereza? Linawezekana: je, una vifaa na muda?",
            "Weka alama ya ulichobadilisha. Baada ya muda hii inaonyesha timu yako mahali mipango ya AI hukosea mara nyingi (mara nyingi: maudhui mengi mno kwa muda uliopo, na shughuli zinazoonekana za kazi nyingi lakini hazifanyii mazoezi lengo)."
          ],
          steps: ["Sahihi: kagua ukweli, mifano na majibu.", "Unaendana: kila shughuli inatumikia lengo; tiketi ya kutoka inalipima.", "Kiwango sahihi kwa wanafunzi hawa na muda huu.", "Haki na jumuishi: bila dhana potofu; linafikika kwa wote.", "Linawezekana kwa vifaa vyako; andika ulichobadilisha."],
          words: [["Uwiano (alignment)", "malengo, shughuli na upimaji vyote vinapolingana."], ["Dhana potofu (stereotype)", "wazo lisilo la haki na lisilobadilika kuhusu kundi la watu."], ["Linafikika (accessible)", "linaloweza kutumiwa na kila mwanafunzi, wakiwemo wenye ulemavu."]],
          slides: [
            { title: "Ukaguzi wa vipengele vitano", bullets: ["Sahihi", "Unaendana", "Kiwango sahihi", "Haki na jumuishi; linawezekana"] },
            { title: "Matatizo ya kawaida ya mipango ya AI", bullets: ["Maudhui mengi mno kwa muda uliopo", "Shughuli za kazi nyingi zinazokosa lengo", "Majibu yasiyo sahihi au ukweli uliobuniwa"] },
            { title: "Andika mabadiliko yako", bullets: ["Yanaonyesha mipango ya AI hukosea wapi", "Yanajenga busara ya timu yako"] }
          ],
          tryIt: "Pitisha rasimu ya somo lako katika ukaguzi wa vipengele vitano. Rekebisha kila tatizo na uorodheshe mabadiliko uliyofanya.",
          youCanNow: "kukagua mpango wa somo wa AI kwa usahihi, uwiano, kiwango, haki na uwezekano wa kutekelezwa.",
          quickCheck: [
            { objective: "O3", q: "Uwiano unamaanisha nini katika mpango wa somo?", options: ["Somo limechapishwa vizuri", "Somo linafuata mpangilio wa kitabu cha kiada", "Malengo, shughuli na upimaji vyote vinalingana", "Somo linatumia zana mpya zaidi"], answer: 2, why: "Masomo yenye uwiano yanafanyia mazoezi na kupima kitu kile kile ambacho lengo linataja." },
            { objective: "O3", q: "Mpango wa AI unabana shughuli tano katika kipindi cha dakika 45. Ungebadilisha nini?", options: ["Kuupunguza uingie katika muda, ukibaki na shughuli zinazofanyia mazoezi lengo", "Kubaki na zote tano na kuharakisha", "Kuongeza shughuli moja zaidi", "Kuwaambia wanafunzi wamalizie nyumbani"], answer: 0, why: "Maudhui mengi mno kwa muda uliopo ndilo tatizo la kawaida zaidi katika mipango ya AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga somo kwa AI",
        questions: [
          { objective: "O1", q: "Katika kupanga kurudi nyuma, nini kinakuja kwanza?", options: ["Shughuli ya kufurahisha", "Karatasi ya mazoezi", "Kile wanafunzi wanapaswa kujifunza", "Mpangilio wa viti"], answer: 2, why: "Panga kuanzia lengo la kujifunza." },
          { objective: "O1", q: "Maneno ya kiwango yanapaswa kutoka wapi?", options: ["Chanzo rasmi cha jimbo au wilaya yako", "Chochote AI inachosema", "Tovuti yoyote tu", "Kumbukumbu"], answer: 0, why: "AI inaweza kunukuu vibaya au kubuni viwango." },
          { objective: "O2", q: "Maelezo yapi yanasaidia zaidi katika prompt ya kupanga somo?", options: ["Majina ya wanafunzi wanaotatizika", "Namba ya simu ya mkuu wa shule", "Alama za mitihani za wanafunzi kwa majina", "Urefu wa kipindi, lengo, maarifa ya awali na vifaa"], answer: 3, why: "Mazingira yanaboresha mpango bila taarifa binafsi." },
          { objective: "O3", q: "Shughuli ya AI inafurahisha lakini haifanyii mazoezi lengo. Ukaguzi upi unashindwa?", options: ["Sahihi", "Unaendana", "Linawezekana", "Haki"], answer: 1, why: "Uwiano unamaanisha shughuli zinatumikia lengo." },
          { objective: "O3", q: "Tatizo lipi ni la kawaida zaidi katika mipango ya somo ya AI?", options: ["Maudhui kidogo mno", "Muda kamili kabisa", "Hakuna maandishi kabisa", "Maudhui mengi mno kwa muda uliopo"], answer: 3, why: "AI mara nyingi hujaza muda kupita kiasi." }
        ]
      }
    },
    {
      name: "Sura 2: Utofautishaji, vitengo na upangaji wa timu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kuweka utofautishaji",
          minutes: 6,
          goal: "Tumia AI kupanga msaada kwa wanafunzi wanaohitaji msaada zaidi na changamoto kwa walio tayari kwa zaidi.",
          text: [
            "Eleza makundi kwa mahitaji, kamwe si kwa majina: \"wanafunzi wanaohitaji msaada zaidi katika mahesabu yenye hatua nyingi\", \"wanafunzi walio kwenye kiwango\", \"wanafunzi walio tayari kwa changamoto zaidi\". Iombe AI lengo lile lile lifikiwe kwa njia tatu: msaada zaidi (mifano iliyotatuliwa, vianzio vya sentensi, picha), mazoezi ya kiwango, na upanuzi (swali gumu zaidi au kazi ya kuhamisha ujuzi).",
            "Omba msaada unaomsaidia kila mtu: picha zilizo wazi, msamiati pamoja na picha, na uchaguzi katika jinsi wanafunzi wanavyoonyesha walichojifunza. Njia hii, ya kupanga kwa ajili ya tofauti tangu mwanzo, mara nyingi inaitwa Universal Design for Learning (UDL); angalia UDL Guidelines za CAST kwa maelezo zaidi.",
            "Wanafunzi wenye IEP au mipango ya 504 lazima wapate marekebisho yaliyo katika mipango yao; msaada unaotengenezwa na AI hauyachukui nafasi kamwe. Wasiliana na mwalimu wa elimu maalum, na usiweke maelezo ya mipango hiyo katika zana zisizoidhinishwa."
          ],
          steps: ["Eleza makundi kwa mahitaji, si kwa majina.", "Omba njia tatu za kufikia lengo lile lile.", "Omba msaada unaomsaidia kila mtu: picha, msamiati, uchaguzi.", "Thibitisha marekebisho ya IEP na 504 na mwalimu wa elimu maalum.", "Usiweke maelezo ya mipango katika zana zisizoidhinishwa."],
          words: [["Utofautishaji", "kurekebisha ufundishaji ili wanafunzi wenye mahitaji tofauti wafikie lengo lile lile."], ["Msaada wa muda (scaffolding)", "msaada wa muda mfupi, kama mifano iliyotatuliwa au vianzio vya sentensi."], ["Universal Design for Learning (UDL)", "kupanga masomo kwa ajili ya wanafunzi wa aina nyingi tangu mwanzo."]],
          slides: [
            { title: "Makundi kwa mahitaji, si kwa majina", bullets: ["Wanahitaji msaada zaidi", "Wako kwenye kiwango", "Wako tayari kwa zaidi"] },
            { title: "Njia tatu, lengo moja", bullets: ["Msaada: mifano, vianzio vya sentensi, picha", "Mazoezi ya kiwango", "Upanuzi au kazi ya kuhamisha ujuzi"] },
            { title: "Msaada kwa kila mtu", bullets: ["Picha, msamiati, uchaguzi", "UDL: angalia UDL Guidelines za CAST"] },
            { title: "IEP na mipango ya 504", bullets: ["Marekebisho yanayotakiwa bado yanatumika", "Msaada wa AI hauyachukui nafasi kamwe"] }
          ],
          tryIt: "Ongeza utofautishaji katika somo lako: iombe AI njia tatu za kufikia lengo, zikague, na uthibitishe ni marekebisho gani ya IEP au 504 bado yanahitaji kupangwa na mwenzako wa elimu maalum.",
          youCanNow: "kupanga msaada na changamoto kwa wanafunzi tofauti kwa AI huku ukiheshimu marekebisho yanayotakiwa.",
          quickCheck: [
            { objective: "O4", q: "Msaada wa muda (scaffolding) ni nini?", options: ["Kuwapa wanafunzi wa juu kazi ya ziada", "Msaada kama mifano iliyotatuliwa na vianzio vya sentensi", "Kuwapima wanafunzi kabla ya somo", "Kuwaketisha wanafunzi kwa makundi"], answer: 1, why: "Msaada wa muda unawasaidia wanafunzi kufikia lengo lile lile." },
            { objective: "O4", q: "AI inapendekeza msaada tofauti na marekebisho yaliyo katika IEP ya mwanafunzi. Unafanya nini?", options: ["Kutumia msaada wa AI badala yake", "Kuiomba AI iamue", "Kuacha vyote viwili na kufundisha kama kawaida", "Kutoa marekebisho ya IEP na kupanga na mwenzako wa elimu maalum"], answer: 3, why: "Marekebisho ya IEP na 504 lazima bado yatolewe, chochote AI inachopendekeza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutoka somo hadi kitengo",
          minutes: 5,
          goal: "Andaa muhtasari wa kitengo kwa AI na ukague mwendo wake.",
          text: [
            "Kitengo ni mfuatano wa masomo unaoelekea malengo makubwa zaidi. Ipe AI viwango vya kitengo (kutoka chanzo chako rasmi), idadi ya siku za masomo, sikukuu au siku za mitihani, na mahali wanafunzi wanapoanzia. Omba muhtasari wa siku kwa siku wenye malengo, shughuli kuu na vituo vya ukaguzi.",
            "Kagua mwendo kwanza: AI mara nyingi hujaza mambo mengi mno. Hakikisha kila somo linajenga juu ya lililotangulia, kwamba kuna siku za marudio na mpango wa kufundisha upya, na kwamba upimaji wa mwisho wa kitengo unalingana na malengo.",
            "Tumia AI kwa kile inachofanya vizuri: kubuni mradi halisi wa maisha unaoshikilia kitengo, dhana potofu za kawaida za kupangia, na maswali yanayowafanya wanafunzi wafikiri. Wewe unaamua kinachofaa."
          ],
          steps: ["Toa viwango vya kitengo, idadi ya siku na mapengo ya kalenda.", "Omba muhtasari wa siku kwa siku wenye malengo na vituo vya ukaguzi.", "Kagua mwendo: punguza, ongeza siku za marudio na za kufundisha upya.", "Kagua kwamba upimaji wa mwisho unalingana na malengo.", "Tumia AI kubuni dhana potofu na miradi ya kushikilia kitengo."],
          words: [["Kitengo", "seti ya masomo yanayoelekea malengo makubwa zaidi ya kujifunza."], ["Mwendo (pacing)", "kiasi kinachofundishwa kila siku na kasi ambayo darasa linasonga."], ["Dhana potofu", "wazo lisilo sahihi ambalo wanafunzi wengi huwa nalo kuhusu mada."]],
          slides: [
            { title: "Toa mazingira ya kitengo", bullets: ["Viwango kutoka chanzo rasmi", "Idadi ya siku na mapengo ya kalenda", "Mahali wanafunzi wanapoanzia"] },
            { title: "Kagua mwendo", bullets: ["AI mara nyingi hujaza mambo mengi mno", "Ongeza siku za marudio na za kufundisha upya", "Upimaji unalingana na malengo"] },
            { title: "Buni mawazo kwa AI", bullets: ["Dhana potofu za kawaida", "Miradi ya kushikilia kitengo", "Maswali yanayowafanya wanafunzi wafikiri"] }
          ],
          tryIt: "Iombe AI muhtasari wa siku kumi wa kitengo ambacho somo lako ni sehemu yake. Rekebisha mwendo, ongeza siku moja ya marudio, na uorodheshe dhana potofu tatu za kupangia.",
          youCanNow: "kuandaa muhtasari wa kitengo kwa AI na kupanga mwendo wake.",
          quickCheck: [
            { objective: "O5", q: "Prompt ya muhtasari wa kitengo inapaswa kuwa na nini?", options: ["Viwango, idadi ya siku na mapengo ya kalenda", "Majina na alama za wanafunzi", "Jina la kitengo tu", "Mshahara wa mwalimu"], answer: 0, why: "Siku na mapengo ya kalenda vinaiwezesha AI kupendekeza mwendo unaowezekana." },
            { objective: "O5", q: "Muhtasari wa AI unamaliza kitengo kwa siku kumi bila marudio. Ungefanya nini?", options: ["Kuukubali kama ulivyoandikwa", "Kuongeza vitengo vitatu zaidi", "Kurekebisha mwendo na kuongeza siku ya marudio", "Kuondoa upimaji"], answer: 2, why: "Mwendo ndio kitu cha kwanza kukagua, na muda wa marudio mara nyingi unakosekana." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kuzifundisha timu kupanga kwa AI",
          minutes: 6,
          goal: "Geuza utaratibu wako wa kupanga kuwa kiolezo na uifundishe timu kukitumia.",
          text: [
            "Viongozi wanazidisha mazoea mazuri kwa kuyafanya yarudiwe kwa urahisi. Geuza ulichojifunza kuwa kiolezo cha kupanga: prompt za lengo, somo zima, utofautishaji na kitengo, pamoja na orodha ya ubora ya vipengele vitano.",
            "Kitumie katika mkutano wa timu au wa jumuiya ya kujifunza ya kitaaluma (PLC): kila mwalimu anapanga somo moja kwa kiolezo, kisha wenzi wanabadilishana mipango na kila mmoja anakagua ubora wa mpango wa mwenzake. Jadilini AI ilikosea nini; hilo linajenga busara ya pamoja haraka kuliko slaidi yoyote ya mafunzo.",
            "Weka matarajio: mipango inayosaidiwa na AI inakaribishwa, na walimu wanabaki kuwajibika kwa kile wanachofundisha. Hakikisha zana zilizoidhinishwa tu ndizo zinatumika na hakuna taarifa za wanafunzi zinazowekwa. Waombe walimu waandike muda uliookolewa na matatizo ya ubora, ili ujue kama mazoea haya yanafanya kazi."
          ],
          steps: ["Andika kiolezo cha kupanga: prompt nne na orodha ya ukaguzi.", "Katika mkutano wa timu, kila mwalimu anapanga somo moja kwa kiolezo.", "Wenzi wanabadilishana na kufanya ukaguzi wa ubora.", "Jadilini AI ilikosea nini.", "Weka matarajio na fuatilia muda uliookolewa na matatizo ya ubora."],
          words: [["PLC", "professional learning community (jumuiya ya kujifunza ya kitaaluma): timu ya walimu wanaokutana kuboresha ufundishaji pamoja."], ["Kiolezo", "muundo wa kuanzia unaoweza kutumiwa tena."]],
          slides: [
            { title: "Ifanye irudiwe kwa urahisi", bullets: ["Prompt nne: lengo, somo, utofautishaji, kitengo", "Pamoja na orodha ya ukaguzi ya vipengele vitano"] },
            { title: "Mazoezi ya timu", bullets: ["Kila mwalimu anapanga somo moja", "Wenzi wanabadilishana na kukagua", "Jadilini AI ilikosea nini"] },
            { title: "Matarajio yaliyo wazi", bullets: ["Walimu wanawajibika kwa wanachofundisha", "Zana zilizoidhinishwa, bila taarifa za wanafunzi", "Fuatilia muda uliookolewa na ubora"] }
          ],
          tryIt: "Kazi ya mwisho: maliza mpango wako kamili wa somo (lengo, vigezo vya mafanikio, kianzio, mazoezi ya kuongozwa na ya kujitegemea, makundi matatu, tiketi ya kutoka yenye majibu), ukague kwa orodha ya vipengele vitano, andika mabadiliko yako, na uhifadhi prompt zako nne na orodha ya ukaguzi kama kiolezo cha timu.",
          youCanNow: "kupanga masomo kwa AI kwa kiwango cha juu na kuisaidia timu kufanya vivyo hivyo.",
          quickCheck: [
            { objective: "O6", q: "Kiolezo cha kupanga cha timu kinapaswa kuwa na nini?", options: ["Somo la mwisho tu", "Prompt na orodha ya ukaguzi wa ubora", "Orodha ya zana zilizopigwa marufuku", "Nywila ya zana ya AI"], answer: 1, why: "Prompt pamoja na orodha ya ukaguzi zinawawezesha wengine kurudia utaratibu na ukaguzi." },
            { objective: "O6", q: "Unataka kujua kama upangaji kwa AI unaisaidia timu yako. Unafuatilia nini?", options: ["Idadi ya prompt kila mwalimu anazoandika", "Zana ipi ya AI ni mpya zaidi", "Hakuna; uliza mara moja kwa mwaka", "Muda uliookolewa na matatizo ya ubora yaliyopatikana"], answer: 3, why: "Muda uliookolewa na matatizo ya ubora vinaonyesha kama utaratibu unafanya kazi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Utofautishaji, vitengo na upangaji wa timu",
        questions: [
          { objective: "O4", q: "Unapaswa kuelezaje makundi ya wanafunzi katika prompt?", options: ["Kwa majina", "Kwa alama za mitihani na majina", "Kwa mahitaji, kama \"wanahitaji msaada zaidi katika mahesabu yenye hatua nyingi\"", "Kwa kipato cha familia"], answer: 2, why: "Eleza mahitaji bila kuwatambulisha wanafunzi." },
          { objective: "O4", q: "IEP ya mwanafunzi inaorodhesha marekebisho. AI ilipendekeza msaada tofauti. Kipi kinatumika?", options: ["Marekebisho ya IEP lazima bado yatolewe", "Msaada wa AI unachukua nafasi ya IEP", "Hakuna kati ya hivyo", "Kuiomba AI iamue"], answer: 0, why: "Marekebisho yanayotakiwa hayachukuliwi nafasi na mapendekezo ya AI." },
          { objective: "O5", q: "Kitu cha kwanza kukagua katika muhtasari wa kitengo wa AI ni kipi?", options: ["Aina ya herufi", "Mwendo", "Jina", "Rangi"], answer: 1, why: "AI mara nyingi hujaza mambo mengi mno." },
          { objective: "O6", q: "Katika PLC, kwa nini wenzi wakague mipango ya AI ya kila mmoja?", options: ["Ili kujenga busara ya pamoja kuhusu mahali AI inapokosea", "Ili kuwapa walimu alama", "Ili kuruka upangaji", "Ili kutumia AI zaidi"], answer: 0, why: "Kujadili makosa kunajenga busara ya timu." },
          { objective: "O6", q: "Nani anawajibika kwa somo linalosaidiwa na AI linalofundishwa darasani?", options: ["Kampuni ya AI", "Hakuna mtu", "Wanafunzi", "Mwalimu"], answer: 3, why: "Walimu wanabaki kuwajibika kwa wanachofundisha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Viongozi wa Shule na Elimu 3: AI katika Kupanga Masomo",
    questions: [
      { objective: "O1", q: "Kupanga kurudi nyuma kunapanga kwa mpangilio upi?", options: ["Shughuli, lengo, ushahidi", "Lengo, ushahidi, shughuli", "Karatasi ya mazoezi, mtihani, lengo", "Ushahidi, shughuli, lengo"], answer: 1, why: "Anza na lengo." },
      { objective: "O1", q: "Vigezo vya mafanikio vinaeleza:", options: ["Mpangilio wa chumba", "Mshahara wa mwalimu", "Kile wanafunzi wataonyesha watakapofikia lengo", "Ratiba ya kengele"], answer: 2, why: "Vinafanya lengo lionekane." },
      { objective: "O1", q: "Lengo la \"Ninaweza\" ni:", options: ["Alama ya mtihani", "Kauli mbiu", "Lengo kwa maneno ambayo wanafunzi wanaelewa", "Kanuni"], answer: 2, why: "Wanafunzi wanapaswa kuelewa lengo." },
      { objective: "O1", q: "Kwa nini usichukue namba za viwango kutoka kwa AI?", options: ["AI inaweza kuzinukuu vibaya au kuzibuni", "Ni za siri", "AI haijui viwango kamwe", "Ni ndefu mno"], answer: 0, why: "Tumia chanzo rasmi." },
      { objective: "O2", q: "Prompt ya somo zima inapaswa kuwa na:", options: ["Alama kwa majina", "Majina ya wanafunzi", "Barua pepe za wazazi", "Urefu wa kipindi, lengo, maarifa ya awali, vifaa, sehemu"], answer: 3, why: "Mazingira, si taarifa binafsi." },
      { objective: "O2", q: "Rasimu ya somo ya AI inapaswa kuchukuliwa kama:", options: ["Mpango wa mwisho", "Rasimu kutoka kwa mwenzako mwepesi lakini mgeni kazini", "Hati ya kisheria", "Kazi ya mwanafunzi"], answer: 1, why: "Walimu wanapitia na kuhariri." },
      { objective: "O2", q: "Ukaguzi wa uelewa ni:", options: ["Mkutano wa wazazi", "Hundi ya benki", "Ripoti ya maendeleo", "Njia ya haraka ya kuona kama wanafunzi wanafuatilia"], answer: 3, why: "Unagundua mkanganyiko mapema." },
      { objective: "O3", q: "Kipi ni sehemu ya ukaguzi wa vipengele vitano?", options: ["Refu zaidi", "Lenye rangi nyingi zaidi", "Haki na jumuishi", "Linalopendwa zaidi"], answer: 2, why: "Haki na ufikiaji ni sehemu ya ubora." },
      { objective: "O3", q: "Uwiano unamaanisha:", options: ["Malengo, shughuli na upimaji vinalingana", "Madawati kwa mistari", "Mpango ni mrefu", "AI ilikubali"], answer: 0, why: "Kila kitu kinatumikia lengo." },
      { objective: "O3", q: "Kwa nini uandike ulichobadilisha katika mpango wa AI?", options: ["Kunatakiwa na sheria", "Kunaonyesha mipango ya AI hukosea wapi", "Kunafanya mpango uwe mrefu zaidi", "Ili kuilaumu AI"], answer: 1, why: "Kunajenga busara baada ya muda." },
      { objective: "O4", q: "Utofautishaji unamaanisha:", options: ["Kurekebisha ufundishaji ili wanafunzi tofauti wafikie lengo lile lile", "Kutoa alama tofauti", "Kutenganisha madarasa kwa kudumu", "Kutumia zana tofauti za AI"], answer: 0, why: "Lengo moja, njia tofauti." },
      { objective: "O4", q: "Msaada wa muda (scaffolding) unajumuisha:", options: ["Adhabu ya kubaki shuleni", "Kuondoa msaada wote", "Mtihani mgumu zaidi", "Mifano iliyotatuliwa na vianzio vya sentensi"], answer: 3, why: "Msaada wa muda mfupi unawasaidia wanafunzi kufikia lengo." },
      { objective: "O4", q: "UDL inasimama kwa:", options: ["Unit Daily Lesson", "Universal Design for Learning", "Upper Division Level", "Unified District Login"], answer: 1, why: "Kupanga kwa ajili ya wanafunzi wa aina nyingi tangu mwanzo." },
      { objective: "O4", q: "Kazi ya upanuzi ni kwa wanafunzi ambao:", options: ["Wanahitaji msaada zaidi", "Hawapo darasani", "Wako tayari kwa changamoto zaidi", "Wamemaliza mwaka"], answer: 2, why: "Inaimarisha kujifunza kwa wanafunzi walio tayari." },
      { objective: "O4", q: "Marekebisho ya IEP na 504:", options: ["Yanawekwa katika zana yoyote ya AI", "Yanaweza kuchukuliwa nafasi na msaada wa AI", "Lazima bado yatolewe, chochote AI inachopendekeza", "Ni ya hiari"], answer: 2, why: "Yanatakiwa." },
      { objective: "O5", q: "Prompt ya muhtasari wa kitengo inapaswa kuwa na:", options: ["Viwango, idadi ya siku na mapengo ya kalenda", "Majina ya wanafunzi", "Mishahara ya wafanyakazi", "Hakuna kitu"], answer: 0, why: "Mwendo unategemea muda halisi uliopo." },
      { objective: "O5", q: "AI inafaa hasa katika kupanga kitengo kwa:", options: ["Kuidhinisha zana", "Kuamua alama", "Kuandika IEP", "Kubuni dhana potofu na miradi ya kushikilia kitengo"], answer: 3, why: "Kubuni mawazo ni uwezo wake; wewe unaamua kinachofaa." },
      { objective: "O6", q: "Kiolezo cha kupanga kinapaswa kuwa na:", options: ["Taarifa za wanafunzi", "Prompt na orodha ya ukaguzi wa ubora", "Nywila", "Hakuna kitu"], answer: 1, why: "Kinafanya mazoea mazuri yarudiwe kwa urahisi." },
      { objective: "O6", q: "PLC inasimama kwa:", options: ["Principal leadership council", "Public library card", "Planning lesson calendar", "Professional learning community"], answer: 3, why: "Walimu wanaoboresha ufundishaji pamoja." },
      { objective: "O6", q: "Ili kujua kama upangaji kwa AI unafanya kazi, viongozi wanapaswa kufuatilia:", options: ["Hakuna kitu", "Muda uliookolewa tu", "Muda uliookolewa na matatizo ya ubora", "Idadi ya prompt zilizoandikwa"], answer: 2, why: "Kasi bila ubora si mafanikio." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 3, 4, 7, 8, 10, 14, 15, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lengo na vigezo vya mafanikio", objective: "O1", notYet: "Hakuna lengo, au kiwango hakikutoka kwenye chanzo rasmi.", meets: "Lengo na vigezo vya mafanikio kutoka kiwango kilichonakiliwa kutoka chanzo rasmi.", exceeds: "Lengo limeandikwa kama kauli ya \"Ninaweza\" iliyo wazi ambayo wanafunzi wanaielewa." },
      { name: "Somo kamili", objective: "O2", notYet: "Linakosa kianzio, mazoezi ya kuongozwa au ya kujitegemea, au tiketi ya kutoka.", meets: "Lina kianzio, mazoezi ya kuongozwa na ya kujitegemea, na tiketi ya kutoka yenye maswali matatu pamoja na majibu.", exceeds: "Lina ukaguzi wa uelewa na linaingia katika urefu wa kipindi." },
      { name: "Makundi matatu", objective: "O4", notYet: "Msaada kwa kundi moja au zaidi unakosekana.", meets: "Msaada kwa wanaohitaji msaada zaidi, walio kwenye kiwango na walio tayari kwa zaidi.", exceeds: "Linataja marekebisho ya IEP au 504 ambayo bado yanahitaji kupangwa na mwenzako wa elimu maalum." },
      { name: "Ubora umekaguliwa", objective: "O3", notYet: "Halikukaguliwa, au mabadiliko hayakuandikwa.", meets: "Limekaguliwa kwa orodha ya vipengele vitano, na kila badiliko pamoja na sababu yake vimeandikwa.", exceeds: "Kumbukumbu inaonyesha mifumo ya mahali mpango wa AI ulipokosea." },
      { name: "Kiolezo cha timu", objective: "O6", notYet: "Prompt hazikuhifadhiwa, au hakuna orodha ya ukaguzi.", meets: "Prompt na orodha ya ukaguzi zimehifadhiwa kama kiolezo cha timu.", exceeds: "Mwenzako ametumia kiolezo hicho kwenye somo lake mwenyewe." }
    ]
  },
  evaluation: {
    results: [
      "Waelimishaji wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Timu zinazotumia kiolezo cha pamoja cha kupanga ndani ya siku 30 (utafiti wa kufuatilia)",
      "Walimu wanaoripoti muda wa kupanga uliookolewa bila kushuka kwa ubora wa masomo (utafiti wa kufuatilia)",
      "Viongozi wanaoendelea na kozi ya 4 ya AI kwa Viongozi wa Shule na Elimu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta yenye intaneti na msaidizi wa AI, ikiwezekana ule ambao wilaya imeidhinisha",
      "Kiwango cha somo linalokuja kilichonakiliwa kutoka chanzo rasmi cha jimbo au wilaya",
      "Maelezo ya darasa ya kubuni",
      "Orodha ya ubora ya vipengele vitano",
      "Kama dakika 60 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha pangeni somo moja kama kikundi kabla walimu hawajapanga masomo yao wenyewe.",
      "Tumia maelezo ya darasa ya kubuni tu; kamwe si majina halisi ya wanafunzi, maelezo ya IEP au 504 au alama.",
      "Katika PLC, wenzi wakague mipango ya AI ya kila mmoja kwa orodha ya vipengele vitano.",
      "Mwalike mwenzako wa elimu maalum kwenye kipindi cha utofautishaji.",
      "Pima kazi ya mwisho kwa rubriki, na omba kumbukumbu ya mabadiliko kama ushahidi."
    ]
  }
};
