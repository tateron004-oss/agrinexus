"use strict";

// Koach Learn course (Swahili translation of shared/hospitality-front-desk.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "hospitality-front-desk-sw",
  lang: "sw",
  translationOf: "hospitality-front-desk",
  category: "Workforce Development",
  name: "Kazi za Hoteli na Ukarimu: Mapokezi na Huduma kwa Wageni",
  skills: "Kuwapokea na kuwaondoa wageni, Kusoma bili ya mgeni (folio), Kutatua matatizo ya wageni, Kulinda faragha na usalama wa wageni, Kuendesha zamu ya mapokezi, Kupanga kupata cheti cha CFDR",
  outcome: "kufanya zamu ya mapokezi ya hoteli kwa njia sahihi: kumpokea mgeni na kumwondoa, kueleza bili, kutatua tatizo kwa utulivu, kulinda faragha na usalama wa wageni, na kufuata mpango ulioandikwa kuelekea kazi ya mapokezi na cheti.",
  about: [
    "Hoteli huajiri wahudumu wa mapokezi katika kila jiji na miji midogo mingi, na nyingi huajiri watu wasio na uzoefu wa hoteli ikiwa ni wakarimu, wanaotegemewa na waangalifu. Kozi hii ni kwa wanaotafuta kazi, vijana, watu wanaorudi nyumbani kutoka gerezani na yeyote anayetaka hatua ya kwanza katika ukarimu.",
    "Utafanya mazoezi ya kazi halisi ya mapokezi: kumpokea mgeni (check-in), kusoma bili ya mgeni (folio), kumwondoa mgeni (check-out), kushughulikia hoteli iliyojaa au mgeni aliyekasirika, na kufuata sheria zinazowaweka wageni salama, kama kutotaja namba ya chumba kwa sauti kamwe.",
    "Kozi hii inakuandaa kwa kazi na kwa cheti cha mapokezi kama START Certified Front Desk Representative (CFDR) kutoka American Hotel & Lodging Educational Institute (AHLEI). Haikupi cheti hicho; unakipata kwa kufanya kozi na mtihani wa AHLEI wenyewe.",
    "Kila somo linachukua kama dakika tano, likiwa na kazi ya \"Jaribu sasa\" na maswali mawili mafupi. Kuna jaribio la maarifa baada ya kila sura, mtihani wa maswali 20 mwishoni, na kazi ya mwisho unayoweza kuonyesha kwenye usaili."
  ],
  finalTask: "Tengeneza kifurushi chako cha kazi ya mapokezi: (1) orodha ya ukurasa mmoja ya kazi za mwanzo, katikati na mwisho wa zamu ya mapokezi; (2) maneno ya kumpokea mgeni unayoweza kuyasema kwa sauti, pamoja na sheria ya faragha ndani yake; (3) mpango wa siku 30 wenye tarehe: hoteli tatu utakazoomba kazi, lini utafanya mazoezi ya maneno hayo na mtu, na lini utaangalia ukurasa wa AHLEI CFDR au kumuuliza mwajiri kuhusu mafunzo ya mapokezi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima na vijana wanaotafuta kazi ya kwanza au kazi bora zaidi: wanaotafuta kazi, watu wanaorudi nyumbani kutoka gerezani, wahamiaji, wanaobadilisha kazi na vijana katika programu za ajira. Wengi wametumia simu na kuongea na wateja lakini hawajawahi kufanya kazi hotelini.",
    startingPoint: "Wanaweza kuwasalimu watu na kutumia simu janja. Wengi hawajatumia programu za hoteli, kusoma bili ya mgeni, wala kushughulikia malipo, funguo na sheria za faragha za wageni.",
    gap: "Hoteli huajiri watu wa mapokezi mwaka mzima na mara nyingi hufundisha kazini, lakini zinataka watu wanaojua tayari hatua za msingi za kumpokea na kumwondoa mgeni, wanaoweza kutulia mbele ya wageni waliokasirika, na watakaolinda faragha na usalama wa wageni. Kujua hatua hizo, na kuwa na mpango kuelekea cheti, kunamfanya mwanafunzi aajiriwe kwa urahisi na kumsaidia kudumu kazini.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 7)",
      "Vifaa: simu au kompyuta ya maktaba; mazoezi yote yanaweza kufanywa kwenye karatasi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na miadi",
      "Hakuna haja ya programu halisi ya hoteli; mifumo ya hoteli inatofautiana, kwa hiyo kozi inafundisha hatua, si majina ya menyu",
      "Faragha: mazoezi yanatumia wageni, namba za kadi na namba za vyumba za kubuni tu",
      "Sheria za ajira zinatofautiana: mipaka ya umri kwa vijana na ukaguzi wa historia hutofautiana kwa jimbo na kwa mwajiri"
    ],
    prerequisites: "Hakuna. Kozi \"Ubora katika Huduma kwa Wateja\" ni kozi nzuri ya kuambatana nayo kwa ujuzi wa jumla wa huduma."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa tangazo la kazi ya mapokezi", action: "kuorodhesha kazi kuu za mapokezi, ujuzi ambao hoteli zinautaka na cheti kinacholingana na kazi hiyo", standard: "ukitaja angalau kazi nne na mahali pa kukagua cheti" },
    { id: "O2", condition: "Ukipewa mgeni wa mazoezi mwenye booking", action: "kumpokea mgeni hatua kwa hatua, kuanzia salamu hadi kumkabidhi ufunguo", standard: "bila kuruka hatua na bila kutaja namba ya chumba kwa sauti" },
    { id: "O3", condition: "Ukipewa folio ya mazoezi wakati mgeni anaondoka", action: "kueleza kila malipo kwenye folio na kumwondoa mgeni", standard: "kila malipo yakiwa yameelezwa na malipo yoyote yasiyo sahihi yakipelekwa kwa meneja au kurekebishwa kwa mujibu wa sheria" },
    { id: "O4", condition: "Ukipewa mgeni aliyekasirika au hoteli iliyojaa", action: "kutatua tatizo la mgeni kwa kuomba radhi, kutoa machaguo na kuandika ujumbe wa kufuatilia", standard: "ukibaki mtulivu na kumpa mgeni angalau machaguo mawili" },
    { id: "O5", condition: "Ukipewa hali ya faragha, usalama au dharura kwenye mapokezi", action: "kujibu kwa mujibu wa sheria za usalama na faragha za hoteli", standard: "bila kutoa kamwe namba ya chumba au ufunguo wa mgeni, na ukipiga 911 au kumwita meneja inapohitajika" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufanya kazi mapokezi",
      lessons: [
        {
          title: "Kazi ya mapokezi na njia ya kuifikia",
          objectives: ["O1"],
          minutes: 5,
          goal: "Orodhesha kazi kuu za mapokezi na cheti kinachoweza kukusaidia kuajiriwa.",
          text: [
            "Mapokezi ni kitovu cha hoteli. Wahudumu wa mapokezi (pia huitwa wahudumu wa wageni) huwakaribisha wageni, huwapokea na kuwaondoa, hupokea booking, hujibu simu, hushughulikia malipo na funguo, hutatua matatizo na hupeleka ujumbe kwa wasafishaji na mafundi. Mkaguzi wa usiku (night auditor) hufanya kazi usiku kucha, hukagua hesabu za siku na hufunga siku ya biashara.",
            "Hoteli huajiri kwanza kwa tabia na uaminifu. Matangazo mara nyingi yanaomba ukarimu, kuongea kwa uwazi, ujuzi wa msingi wa kompyuta, uangalifu katika kushika pesa taslimu na kadi, na uwezo wa kufanya kazi usiku, wikendi na sikukuu. Lugha ya pili ni faida katika miji mingi.",
            "Cheti kinaweza kukusaidia kujitokeza. American Hotel & Lodging Educational Institute (AHLEI) inatoa kozi na mtihani wa mtandaoni wa START Certified Front Desk Representative (CFDR). Kozi hii inakuandaa kwa kazi na kwa mtihani wa aina hiyo; haikupi cheti. Angalia ukurasa wa AHLEI kwa maelezo ya sasa, au uliza hoteli kama inalipia mafunzo. Baadhi ya waajiri pia hutoa uanagenzi (apprenticeship), unaoorodheshwa kwenye apprenticeship.gov.",
            "Vijana: kazi na saa unazoweza kufanya zinategemea umri wako na jimbo lako. Angalia dol.gov/youthrules na ofisi ya kazi ya jimbo lako. Ikiwa una rekodi ya uhalifu, hoteli nyingi huajiri kwa haki: kuwa mkweli kwenye fomu ya maombi na uwe tayari kueleza ulichofanya tangu wakati huo."
          ],
          words: [["Mhudumu wa mapokezi", "mfanyakazi wa hoteli anayewapokea na kuwaondoa wageni na kuwasaidia wakati wa kukaa kwao; pia huitwa mhudumu wa wageni (guest service agent)."], ["Mkaguzi wa usiku (night auditor)", "mfanyakazi wa mapokezi wa usiku anayekagua malipo na pesa zilizolipwa za siku na kufunga siku ya biashara."], ["Cheti", "karatasi rasmi inayoonyesha kuwa ulifaulu kozi au mtihani."], ["AHLEI", "American Hotel & Lodging Educational Institute, taasisi ya Marekani inayotoa mafunzo ya hoteli na mitihani ya vyeti."]],
          slides: [
            { title: "Mapokezi hufanya nini", bullets: ["Kuwakaribisha, kuwapokea na kuwaondoa wageni", "Kupokea booking na kujibu simu", "Kushughulikia malipo na funguo za vyumba", "Kutatua matatizo na kupeleka ujumbe kwa timu nyingine"] },
            { title: "Hoteli huajiri kwa nini", bullets: ["Mkarimu, anayeeleweka na anayetegemewa", "Mwangalifu na pesa, kadi na funguo", "Ujuzi wa msingi wa kompyuta", "Usiku, wikendi na sikukuu"] },
            { title: "Cheti kinachoweza kusaidia", bullets: ["AHLEI START Certified Front Desk Representative (CFDR)", "Kozi hii inakuandaa; mtihani wa AHLEI ndio unaotoa cheti", "Angalia ukurasa wa AHLEI kwa maelezo ya sasa"] },
            { title: "Angalia sheria zako", bullets: ["Vijana: dol.gov/youthrules na ofisi ya kazi ya jimbo lako", "Uanagenzi: apprenticeship.gov", "Rekodi ya uhalifu: kuwa mkweli na onyesha ulichofanya tangu hapo"] }
          ],
          sources: [
            { name: "AHLEI: START Certified Front Desk Representative (CFDR) Online Course and Exam (kozi na mtihani wa mtandaoni)", url: "https://shopahlei.servsafebrands.com/start-cfdr-online-course-and-exam" },
            { name: "AHLEI: mitihani ya vyeti", url: "https://shopahlei.servsafebrands.com/training-and-certification/resourcetype/certification-exam" },
            { name: "Apprenticeship.gov (Wizara ya Kazi ya Marekani)", url: "https://www.apprenticeship.gov/" },
            { name: "YouthRules! (Wizara ya Kazi ya Marekani)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Tafuta tangazo moja halisi la kazi ya mapokezi au mhudumu wa wageni karibu nawe (tovuti ya kazi au ukurasa wa ajira wa hoteli). Kwenye karatasi, orodhesha kazi nne linazotaja, ujuzi mitatu linaouomba, na saa za zamu. Zungushia duara ujuzi mmoja ulio nao tayari na mmoja unaohitaji kuujenga.",
          youCanNow: "kusema mhudumu wa mapokezi anafanya nini, kutaja ujuzi ambao hoteli zinautaka, na kutaja cheti kinachoweza kusaidia na mahali pa kukikagua.",
          quickCheck: [
            { objective: "O1", q: "Ipi ni kazi ya kawaida ya mapokezi?", options: ["Kurekebisha kiyoyozi chumbani", "Kupika kifungua kinywa cha wageni", "Kuwapokea na kuwaondoa wageni", "Kusafisha bwawa la kuogelea"], answer: 2, why: "Kuwapokea na kuwaondoa wageni ni kazi kuu ya mapokezi; matengenezo, kupika na kusafisha ni kazi za timu nyingine." },
            { objective: "O1", q: "Kozi hii inafanya nini kuhusu cheti cha CFDR?", options: ["Inatoa cheti cha CFDR", "Inakuandaa; unapata cheti kupitia kozi na mtihani wa AHLEI", "Inaondoa haja ya mafunzo yoyote", "Ni sawa na leseni ya jimbo"], answer: 1, why: "AHLEI ndiyo inayotoa CFDR baada ya kozi na mtihani wake; kozi hii inakuandaa tu." }
          ]
        },
        {
          title: "Kumpokea mgeni (check-in)",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mpokee mgeni wa mazoezi kwa hatua saba, kuanzia salamu hadi ufunguo.",
          text: [
            "Kumpokea mgeni ni wakati wake wa kwanza halisi na hoteli. Fanya kwa mpangilio uleule kila mara ili usisahau kitu, hata kukiwa na foleni.",
            "Msalimu mgeni, tafuta booking yake na hakikisha kitambulisho chenye picha kinalingana na jina. Thibitisha tarehe, aina ya chumba na bei. Chukua kadi ya malipo, au amana kwa mujibu wa sheria za hoteli; hoteli nyingi huzuia kiasi fulani kwenye kadi (hold) kwa ajili ya kukaa na malipo ya ziada, na wewe unaeleza hilo kwa maneno rahisi.",
            "Mpe kadi ya ufunguo na uonyeshe namba ya chumba kwenye bahasha ya ufunguo au kikaratasi, lakini usitaje namba ya chumba kwa sauti: watu wengine ukumbini wanaweza kusikia. Eleza mambo ya msingi (Wi-Fi, kifungua kinywa, saa ya kuondoka) na uulize kama wanahitaji kitu kingine.",
            "Kila hoteli inatumia mfumo wa kompyuta, unaoitwa property management system (PMS), kurekodi yote haya. Mifumo inatofautiana, na hoteli itakufundisha mfumo wake; hatua zinabaki zilezile."
          ],
          steps: ["Msalimu mgeni kwa tabasamu na umwambie jina lako.", "Tafuta booking na hakikisha kitambulisho chenye picha kinalingana nayo.", "Thibitisha tarehe, aina ya chumba na bei.", "Chukua kadi ya malipo au amana na ueleze kiasi chochote kinachozuiwa (hold).", "Tengeneza kadi ya ufunguo na uandike namba ya chumba kwenye bahasha ya ufunguo; usiitaje kwa sauti.", "Eleza Wi-Fi, kifungua kinywa na saa ya kuondoka.", "Uliza \"Kuna kitu kingine naweza kukusaidia?\" na umtakie kukaa vizuri."],
          words: [["Booking (uhifadhi)", "makubaliano yanayomwekea mgeni chumba kwa tarehe fulani."], ["Bei (rate)", "bei ya chumba kwa usiku mmoja."], ["Kiasi kinachozuiwa (hold)", "kiasi ambacho hoteli inazuia kwenye kadi ya mgeni ili kulipia kukaa na malipo ya ziada; si malipo ya mwisho."], ["Property management system (PMS)", "mfumo wa kompyuta wa hoteli wa booking, vyumba, kupokea wageni, bili na kuondoka."]],
          slides: [
            { title: "Kumpokea mgeni, kwa njia ileile kila mara", bullets: ["Salimu kwa tabasamu na jina lako", "Tafuta booking na kagua kitambulisho chenye picha", "Thibitisha tarehe, aina ya chumba na bei"] },
            { title: "Malipo na funguo", bullets: ["Chukua kadi au amana kwa sheria za hoteli", "Eleza kiasi kinachozuiwa (hold) kwa maneno rahisi", "Tengeneza kadi ya ufunguo"] },
            { title: "Sheria ya faragha", bullets: ["Andika namba ya chumba kwenye bahasha ya ufunguo", "Ionyeshe kwa kidole; usiitaje kwa sauti kamwe", "Watu wengine ukumbini wanaweza kusikia"] },
            { title: "Maliza vizuri", bullets: ["Wi-Fi, kifungua kinywa na saa ya kuondoka", "\"Kuna kitu kingine naweza kukusaidia?\"", "Mtakie kukaa vizuri"] }
          ],
          tryIt: "Pamoja na rafiki au mbele ya kioo, mpokee mgeni wa kubuni: \"Bi. Rivera, usiku mbili, chumba kimoja chenye kitanda kikubwa (king).\" Sema hatua zote saba kwa sauti. Andika chumba 214 kwenye bahasha ya ufunguo ya karatasi na uionyeshe badala ya kuitaja. Fanya mara mbili, mara ya pili kwa chini ya dakika tatu.",
          youCanNow: "kumpokea mgeni kwa hatua saba na kumkabidhi ufunguo bila kutaja namba ya chumba kwa sauti.",
          quickCheck: [
            { objective: "O2", q: "Unampa mgeni ufunguo. Unafanya nini na namba ya chumba?", options: ["Unaitaja kwa sauti kubwa ili aikumbuke", "Unaiambia foleni nzima ili wajue", "Unamtumia rafiki wa mgeni kwa ujumbe", "Unaiandika kwenye bahasha ya ufunguo na kuionyesha"], answer: 3, why: "Kutaja namba ya chumba kwa sauti kunawajulisha wageni wasiojulikana ukumbini mahali mgeni anapolala." },
            { objective: "O2", q: "Unakagua nini mara tu baada ya kupata booking?", options: ["Kuwa kitambulisho chenye picha kinalingana na jina kwenye booking", "Kazi ya mgeni", "Jinsi mgeni alivyofika hotelini", "Anwani ya nyumbani ya mgeni kwenye mitandao ya kijamii"], answer: 0, why: "Kulinganisha kitambulisho na booking kunahakikisha chumba kinampata mtu sahihi." }
          ]
        },
        {
          title: "Kusoma folio na kumwondoa mgeni (check-out)",
          objectives: ["O3"],
          minutes: 5,
          goal: "Eleza kila malipo kwenye folio ya mgeni na umwondoe mgeni.",
          text: [
            "Folio ni bili ya mgeni. Inaorodhesha bei ya chumba ya kila usiku, kodi na malipo yoyote ya ziada, kama maegesho, chakula kinacholetwa chumbani (room service), mini-bar au ada ya kuondoka kwa kuchelewa, pamoja na kila malipo aliyolipa.",
            "Wakati wa kuondoka, msalimu mgeni, muulize kukaa kwake kulikuwaje, na uchapishe au umtumie folio kwa barua pepe. Ipitieni mstari kwa mstari kama mgeni anataka, na usikilize chochote kilichoenda vibaya wakati wa kukaa kwake.",
            "Mgeni akiuliza kuhusu malipo fulani, tulia na mkaangalie pamoja. Kama ni kosa la wazi ambalo hoteli inakuruhusu kulirekebisha, lirekebishe na umwambie. Kama huruhusiwi kuliondoa, sema \"Niruhusu nimwite meneja wangu ili tulimalize hili,\" na usibishane. Hoteli nyingi pia hutoa kuondoka kwa haraka (express check-out) kwa simu, TV au app.",
            "Linda taarifa za kadi: usiandike wala kusoma kwa sauti namba kamili ya kadi kamwe. Folio zinaonyesha tarakimu chache za mwisho tu."
          ],
          steps: ["Msalimu mgeni na umuulize kukaa kwake kulikuwaje.", "Chapisha folio au uitume kwa barua pepe.", "Pitia kila malipo kama mgeni anaomba.", "Rekebisha kosa la wazi kama hoteli yako inaruhusu; vinginevyo mwite meneja.", "Pokea malipo ya mwisho, mshukuru mgeni na umkaribishe tena."],
          words: [["Folio", "bili ya mgeni, inayoorodhesha malipo ya chumba, kodi, vitu vya ziada na malipo aliyolipa."], ["Malipo ya ziada (incidentals)", "malipo ya ziada wakati wa kukaa, kama maegesho, chakula au simu."], ["Kuondoka kwa kuchelewa (late check-out)", "kuondoka baada ya saa ya kawaida ya kuondoka, wakati mwingine kwa ada."], ["Kuondoka kwa haraka (express check-out)", "kuondoka bila kusimama mapokezi, kwa simu, TV au app."]],
          slides: [
            { title: "Folio ni bili ya mgeni", bullets: ["Bei ya chumba kwa kila usiku, pamoja na kodi", "Vya ziada: maegesho, chakula, kuondoka kwa kuchelewa", "Kila malipo yaliyofanywa"] },
            { title: "Kumwondoa mgeni", bullets: ["Uliza kukaa kwake kulikuwaje", "Chapisha folio au uitume kwa barua pepe", "Pitia malipo kama mgeni anaomba"] },
            { title: "Mgeni anahoji malipo", bullets: ["Tulia na mkaangalie pamoja", "Rekebisha kosa la wazi kama unaruhusiwa", "Kama huruhusiwi: \"Niruhusu nimwite meneja wangu.\""] },
            { title: "Linda taarifa za kadi", bullets: ["Usiandike kamwe namba kamili ya kadi", "Usiisome kwa sauti kamwe", "Folio zinaonyesha tarakimu chache za mwisho tu"] }
          ],
          tryIt: "Tengeneza folio ya mazoezi kwenye karatasi kwa mgeni wa kubuni: usiku mbili kwa $129, kodi ikionyeshwa kwenye mstari wake (tumia kiasi chochote cha kubuni), maegesho $15 kila usiku, na malipo moja ya room service ya $12 ambayo mgeni anasema hakuagiza. Jumlisha, kisha andika ungesema nini kuhusu kila mstari na jinsi ungeshughulikia malipo ya room service.",
          youCanNow: "kusoma folio mstari kwa mstari, kueleza kila malipo, na kushughulikia malipo yanayohojiwa kwa utulivu kwa mujibu wa sheria za hoteli.",
          quickCheck: [
            { objective: "O3", q: "Folio ni nini?", options: ["Ufunguo wa chumba cha mgeni", "Bili ya mgeni yenye malipo yanayodaiwa na yaliyolipwa", "Orodha ya sheria za hoteli", "Ratiba ya usafi"], answer: 1, why: "Folio inaorodhesha kila malipo ya chumba, kodi, vitu vya ziada na malipo yaliyolipwa wakati wa kukaa." },
            { objective: "O3", q: "Mgeni anahoji malipo ambayo huruhusiwi kuyaondoa. Unasema nini?", options: ["\"Pole, lazima ulipe.\"", "\"Nitayafuta tu.\"", "\"Niruhusu nimwite meneja wangu ili tulimalize hili.\"", "\"Piga simu benki yako.\""], answer: 2, why: "Kumwita meneja kunakuweka mtulivu na ndani ya sheria, na mgeni anapata jibu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufanya kazi mapokezi",
        questions: [
          { objective: "O1", q: "Ni mfanyakazi gani anayekagua malipo ya siku usiku na kufunga siku ya biashara?", options: ["Mkaguzi wa usiku (night auditor)", "Msafishaji", "Mpishi", "Mhudumu wa maegesho (valet)"], answer: 0, why: "Mkaguzi wa usiku analinganisha malipo yanayodaiwa na yaliyolipwa ya siku na kufunga siku." },
          { objective: "O1", q: "Unakagua wapi maelezo ya sasa ya cheti cha START CFDR?", options: ["Chapisho la mitandao ya kijamii", "Rafiki aliyesikia habari zake", "Tovuti yoyote inayouza cheti", "Ukurasa rasmi wa AHLEI"], answer: 3, why: "AHLEI ndiyo inayotoa CFDR, kwa hiyo ukurasa wake rasmi una maelezo ya sasa." },
          { objective: "O2", q: "Mgeni anayepokelewa anauliza, \"Niko chumba gani?\" ukumbini kukiwa na watu wengi. Unafanya nini?", options: ["Kutaja namba kwa sauti kubwa", "Kuonyesha namba iliyoandikwa kwenye bahasha ya ufunguo", "Kukataa kumwambia", "Kuiandika kwenye ubao wa ukumbini"], answer: 1, why: "Kuonyesha namba iliyoandikwa kunamwambia mgeni bila kuwaambia wengine wote." },
          { objective: "O2", q: "Kwa nini unaeleza kiasi kinachozuiwa kwenye kadi (hold) wakati wa kumpokea mgeni?", options: ["Ili mgeni ajue kiasi kimezuiwa kwa ajili ya kukaa na vya ziada, si malipo ya mwisho", "Ili mgeni alipe mara mbili", "Kwa sababu ndiyo bili ya mwisho", "Hold ni siri na haipaswi kuelezwa"], answer: 0, why: "Maelezo yaliyo wazi yanazuia mshangao na malalamiko wageni wanapoona hold kwenye kadi zao." },
          { objective: "O3", q: "Folio inaonyesha maegesho ya usiku tatu, lakini mgeni alikaa usiku mbili. Hatua ya kwanza bora ni ipi?", options: ["Kupuuza", "Kumwambia mgeni amekosea", "Kuangalia pamoja na kurekebisha au kumwita meneja kwa mujibu wa sheria", "Kuongeza usiku mwingine ili ilingane"], answer: 2, why: "Kukagua pamoja na kufuata sheria za kurekebisha kunamtendea mgeni haki." }
        ]
      }
    },
    {
      name: "Sura 2: Matatizo, faragha na zamu yako",
      lessons: [
        {
          title: "Kutatua matatizo ya wageni, hata hoteli ikiwa imejaa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Tatua tatizo la mgeni kwa kuomba radhi, machaguo mawili na ujumbe wa kufuatilia.",
          text: [
            "Mambo huenda vibaya hotelini: chumba hakiko tayari, kiyoyozi kina kelele, booking haipatikani. Mgeni amechoka na anataka suluhisho. Kazi yako ni kutulia, kulibeba tatizo kama lako na kutoa machaguo.",
            "Tumia hatua nne: sikiliza bila kukatiza, omba radhi (\"Samahani, hivyo sivyo tunavyotaka ukae\"), toa angalau machaguo mawili (chumba kingine, kurekebisha kufikia saa fulani, ofa ya meneja), kisha fuatilia na uandike kwenye daftari la zamu (shift log) ili zamu inayofuata ijue.",
            "Wakati mwingine hoteli imepokea booking nyingi kuliko vyumba (overbooked) na mgeni mwenye booking anakosa chumba. Hoteli zinaweza \"kumhamisha\" mgeni (walk): kumwekea chumba katika hoteli iliyo karibu. Fuata sera ya hoteli yako ya kuhamisha wageni na umwite meneja. Usiahidi kamwe pesa au usiku wa bure ambao huruhusiwi kutoa.",
            "Mgeni akipiga kelele, akitishia au akiwa hatari, si lazima ulishughulikie peke yako. Rudi nyuma na umwite meneja wako au walinzi."
          ],
          steps: ["Sikiliza tatizo lote bila kukatiza.", "Omba radhi na umshukuru mgeni kwa kukuambia.", "Toa angalau machaguo mawili unayoruhusiwa kutoa.", "Fanya ulichoahidi, au mwite meneja.", "Mfuatilie mgeni na uandike kwenye daftari la zamu."],
          words: [["Overbooked", "hoteli inapokuwa na booking nyingi kuliko vyumba."], ["Kumhamisha mgeni (walking a guest)", "kumwekea mgeni asiyeweza kupata chumba nafasi katika hoteli nyingine iliyo karibu, kwa mujibu wa sera ya hoteli."], ["Daftari la zamu (shift log)", "kumbukumbu ya maandishi au ya kompyuta ambapo mapokezi huandika matatizo na ujumbe kwa zamu inayofuata."]],
          slides: [
            { title: "Hatua nne kwa tatizo lolote", bullets: ["Sikiliza bila kukatiza", "Omba radhi na umshukuru", "Toa angalau machaguo mawili", "Fuatilia na uandike kwenye daftari"] },
            { title: "Hoteli ikiwa imejaa", bullets: ["Hoteli zinaweza \"kumhamisha\" mgeni kwenda hoteli iliyo karibu", "Fuata sera ya kuhamisha na mwite meneja", "Usiahidi kamwe usichoweza kutoa"] },
            { title: "Mgeni akiwa hatari", bullets: ["Rudi nyuma kutoka kwenye meza ya mapokezi", "Mwite meneja wako au walinzi", "Hushughulikii vitisho peke yako"] }
          ],
          tryIt: "Andika ungemwambia nini mgeni huyu: \"Nilihifadhi chumba chenye vitanda viwili na umenipa chenye kitanda kimoja kikubwa. Niko na watoto wangu.\" Andika ombi lako la radhi, machaguo mawili ambayo ungeweza kutoa, na ujumbe wa mstari mmoja ambao ungeandika kwenye daftari la zamu. Kisha sema kwa sauti.",
          youCanNow: "kumtuliza mgeni aliyekasirika, kutoa machaguo mawili, kufuatilia na kuandika tatizo kwenye daftari, na kujua lini kumwita meneja.",
          quickCheck: [
            { objective: "O4", q: "Chumba cha mgeni hakiko tayari. Jibu lipi linafuata hatua nne?", options: ["\"Si kosa langu, rudi baadaye.\"", "\"Vyumba havijawahi kuwa tayari kwa wakati.\"", "\"Chukua wiki moja bure.\"", "\"Samahani. Naweza kuhifadhi mizigo yako na kukupigia simu kufikia saa 9 alasiri (3 pm), au kutafuta chumba kingine sasa.\""], answer: 3, why: "Linaomba radhi na kutoa machaguo mawili ambayo mhudumu anaweza kutoa." },
            { objective: "O4", q: "Hoteli imejaa kupita kiasi (overbooked) na mgeni hana chumba. Unafanya nini?", options: ["Kufuata sera ya kuhamisha wageni na kumwita meneja", "Kumwambia mgeni alale ukumbini", "Kuahidi kurudisha pesa za mwezi mzima", "Kufuta chumba cha mgeni mwingine bila kuuliza"], answer: 0, why: "Kumhamisha mgeni kwa mujibu wa sera, pamoja na meneja, ndivyo hoteli zinavyoshughulikia overbooking kwa haki." }
          ]
        },
        {
          title: "Faragha ya wageni, funguo na usalama",
          objectives: ["O5"],
          minutes: 6,
          goal: "Jibu hali za faragha, funguo na usalama kwa mujibu wa sheria za hoteli.",
          text: [
            "Faragha ya wageni inawaweka watu salama. Usimwambie kamwe mpigaji simu au mgeni wa nje kama mtu fulani anakaa hotelini au yuko chumba gani. Sema \"Siwezi kutoa taarifa za wageni, lakini naweza kukuunganisha na chumba ikiwa mgeni anakaa hapa\" au chukua ujumbe. Usimpe kamwe ufunguo mtu ambaye jina lake haliko kwenye chumba bila utaratibu wa hoteli wa kukagua kitambulisho.",
            "Kadi za funguo: kagua kitambulisho kabla ya kutengeneza ufunguo mpya, usiache kamwe kadi za funguo au mashine ya funguo mahali wageni wanaweza kuzifikia, na ripoti mara moja funguo kuu (master keys) zilizopotea.",
            "Wanyama wa huduma: chini ya ADA, isipokuwa ni wazi, wafanyakazi wanaweza kuuliza maswali mawili tu: je, mbwa anahitajika kwa sababu ya ulemavu, na amefundishwa kufanya kazi gani. Huwezi kuomba karatasi wala kutoza ada ya mnyama kipenzi kwa mnyama wa huduma.",
            "Angalia dalili za usafirishaji haramu wa binadamu, kama mtu anayeonekana kudhibitiwa na mwingine, kufundishwa cha kusema au kuogopa. Usimkabili mtu yeyote. Mwambie meneja wako na ufuate sera ya hoteli; unaweza kuripoti kwa National Human Trafficking Hotline kwa 1-888-373-7888. Katika dharura yoyote (moto, ugonjwa, vurugu), piga 911 (au namba ya dharura ya eneo lako) kwanza, kisha meneja wako."
          ],
          steps: ["Usithibitishe kamwe kuwa mgeni anakaa hapa wala kutoa namba ya chumba.", "Jitolee kuunganisha simu na chumba au kuchukua ujumbe.", "Kagua kitambulisho kabla ya kutengeneza ufunguo wowote mpya.", "Kwa mnyama wa huduma, uliza maswali mawili yanayoruhusiwa tu inapohitajika.", "Ripoti dalili za usafirishaji haramu wa binadamu kwa meneja wako; usimkabili mtu yeyote.", "Katika dharura, piga 911 kwanza, kisha meneja wako."],
          words: [["Udhibiti wa funguo", "sheria za kutengeneza, kuhifadhi na kufuatilia funguo za vyumba ili watu sahihi tu waingie."], ["ADA", "Americans with Disabilities Act, sheria ya Marekani inayolinda watu wenye ulemavu, pamoja na matumizi yao ya wanyama wa huduma."], ["Mnyama wa huduma (service animal)", "chini ya ADA, mbwa aliyefundishwa kufanya kazi au majukumu kwa mtu mwenye ulemavu."], ["Usafirishaji haramu wa binadamu (human trafficking)", "kutumia nguvu, udanganyifu au vitisho kumlazimisha mtu kufanya kazi au vitendo vya ngono."]],
          slides: [
            { title: "Linda faragha ya wageni", bullets: ["Usithibitishe kamwe nani anakaa hapa", "Usitoe kamwe namba ya chumba", "\"Naweza kukuunganisha na chumba au kuchukua ujumbe.\""] },
            { title: "Udhibiti wa funguo", bullets: ["Kagua kitambulisho kabla ya ufunguo wowote mpya", "Weka funguo na mashine ya funguo mbali na wageni", "Ripoti mara moja ufunguo mkuu uliopotea"] },
            { title: "Wanyama wa huduma (ADA)", bullets: ["Uliza tu: anahitajika kwa sababu ya ulemavu?", "Na: amefundishwa kufanya kazi gani?", "Hakuna karatasi, hakuna ada ya mnyama kwa mnyama wa huduma"] },
            { title: "Dalili za usafirishaji haramu na dharura", bullets: ["Angalia mtu anayedhibitiwa, anayefundishwa cha kusema au anayeogopa", "Usimkabili; mwambie meneja wako", "Namba ya msaada: 1-888-373-7888", "Dharura: piga 911 kwanza, kisha meneja wako"] }
          ],
          sources: [
            { name: "ADA.gov: ADA Requirements: Service Animals (masharti ya wanyama wa huduma)", url: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
            { name: "DHS Blue Campaign: Indicators of Human Trafficking (dalili za usafirishaji haramu wa binadamu)", url: "https://www.dhs.gov/blue-campaign/indicators-human-trafficking" },
            { name: "AHLA Foundation: No Room For Trafficking (mafunzo ya bure kwa wafanyakazi wa hoteli)", url: "https://www.ahlafoundation.org/nrft/" }
          ],
          tryIt: "Andika jibu lako kwa kila moja: (1) Mpigaji simu anasema \"Niunganishe na mke wangu, Jane Lee. Yuko chumba gani?\" (2) Mwanamume asiye na kitambulisho anasema amepoteza ufunguo wa chumba 305. (3) Mgeni ana mbwa; huna uhakika kama ni mnyama wa huduma. Kisha, ukiweza, fanya mafunzo ya bure ya dakika 30 \"Your Role in Preventing Human Trafficking\" (Jukumu lako katika kuzuia usafirishaji haramu wa binadamu) yanayopatikana kwenye ukurasa wa No Room For Trafficking wa AHLA Foundation.",
          youCanNow: "kulinda faragha ya wageni kwenye simu na mapokezi, kudhibiti funguo, kushughulikia mnyama wa huduma kwa mujibu wa ADA, na kuripoti dalili za usafirishaji haramu wa binadamu na dharura kwa njia sahihi.",
          quickCheck: [
            { objective: "O5", q: "Mpigaji simu anauliza mgeni yuko chumba gani. Unasema nini?", options: ["Kutoa namba ya chumba", "\"Siwezi kutoa taarifa za wageni, lakini naweza kukuunganisha au kuchukua ujumbe.\"", "\"Ameondoka saa moja iliyopita.\"", "\"Piga tena nikiwa nimetoka zamu.\""], answer: 1, why: "Usithibitishe kamwe kuwa mgeni anakaa hapa wala kutoa namba ya chumba; kuunganisha au kuchukua ujumbe kunamlinda mgeni." },
            { objective: "O5", q: "Mgeni ana mbwa na si wazi kama ni mnyama wa huduma. Unaruhusiwa kuuliza nini?", options: ["Karatasi za cheti cha mbwa", "Mgeni ana ulemavu gani", "Alipe kwanza ada ya mnyama kipenzi", "Kama mbwa anahitajika kwa sababu ya ulemavu na amefundishwa kufanya kazi gani"], answer: 3, why: "ADA inaruhusu maswali hayo mawili tu; hakuna karatasi na hakuna ada ya mnyama kwa mnyama wa huduma." }
          ]
        },
        {
          title: "Orodha yako ya zamu na mpango wako wa kazi",
          objectives: ["O1", "O2"],
          minutes: 5,
          goal: "Andika orodha ya kazi za zamu ya mapokezi na mpango wa siku 30 kuelekea kazi ya mapokezi.",
          text: [
            "Wahudumu wazuri wa mapokezi hufanya kazi kwa kufuata orodha. Mwanzo wa zamu: fika mapema, soma daftari la zamu, hesabu droo yako ya pesa pamoja na meneja au kwa utaratibu wa hoteli, na angalia wageni wanaofika leo, wanaoondoka leo na vyumba vilivyo tayari.",
            "Wakati wa zamu: msalimu kila mgeni, pokea na ondoa wageni kwa hatua zilezile, jibu simu kabla ya mlio wa tatu ukiweza, weka meza ya mapokezi nadhifu na funguo salama. Mwisho: maliza kazi zilizobaki, hesabu droo yako tena, na uandike kwenye daftari chochote ambacho zamu inayofuata lazima ijue.",
            "Sasa panga njia yako. Chagua hoteli tatu karibu nawe, fanya mazoezi ya maneno yako ya kumpokea mgeni na mtu halisi, na uamue lini utaangalia ukurasa wa AHLEI CFDR au kumuuliza mwajiri kama analipia mafunzo. Weka tarehe halisi kwa kila hatua. Nenda na orodha yako na maneno yako kwenye usaili: inaonyesha kuwa tayari unaijua kazi."
          ],
          steps: ["Andika kazi za mwanzo wa zamu.", "Andika kazi za wakati wa zamu.", "Andika kazi za mwisho wa zamu.", "Andika maneno yako ya kumpokea mgeni yakiwa na sheria ya faragha ndani yake.", "Andika mpango wa siku 30 wenye tarehe: hoteli tatu, mazoezi, na kukagua cheti."],
          words: [["Droo ya pesa (bank)", "pesa taslimu ambazo mhudumu wa mapokezi anawajibika nazo wakati wa zamu; huhesabiwa mwanzoni na mwishoni."], ["Wanaofika na wanaoondoka (arrivals and departures)", "orodha za wageni wanaopokelewa na wanaoondoka leo."], ["Kukabidhi zamu (shift handoff)", "kupitisha kazi zilizobaki na maelezo kwa zamu inayofuata."]],
          slides: [
            { title: "Mwanzo wa zamu", bullets: ["Fika mapema na usome daftari la zamu", "Hesabu droo ya pesa kwa utaratibu wa hoteli", "Angalia wanaofika, wanaoondoka na vyumba vilivyo tayari"] },
            { title: "Wakati wa zamu", bullets: ["Hatua zilezile za kupokea na kuondoa wageni kila mara", "Jibu simu haraka na kwa adabu", "Weka meza nadhifu na funguo salama"] },
            { title: "Mwisho wa zamu", bullets: ["Maliza kazi zilizobaki", "Hesabu droo tena", "Andika kile zamu inayofuata lazima ijue"] },
            { title: "Mpango wako wa siku 30", bullets: ["Hoteli tatu za kuomba kazi, pamoja na tarehe", "Fanya mazoezi ya maneno yako na mtu halisi", "Angalia ukurasa wa AHLEI CFDR au uliza kuhusu mafunzo"] }
          ],
          tryIt: "Tengeneza kifurushi chako cha kazi kwenye karatasi au katika hati ya bure: orodha yako ya zamu (mwanzo, wakati, mwisho), maneno yako ya kumpokea mgeni kwa hatua saba, na mpango wa siku 30 wenye tarehe halisi. Mwombe mtu aigize kama mgeni wakati wewe unasoma maneno yako.",
          youCanNow: "kumwonyesha meneja wa ajira orodha ya zamu ya mapokezi, maneno ya kumpokea mgeni na mpango wenye tarehe kuelekea kazi na cheti.",
          quickCheck: [
            { objective: "O1", q: "Kipi kinafaa katika mpango wa siku 30 wa kazi ya mapokezi?", options: ["\"Siku moja nitatafuta kazi\"", "\"Kuomba kazi katika hoteli tatu zilizotajwa kufikia tarehe 15 na kufanya mazoezi ya maneno yangu tarehe 10\"", "\"Kumlipa mtu ili anihakikishie kazi\"", "\"Kusubiri hoteli inipigie simu\""], answer: 1, why: "Mpango halisi unataja hatua mahususi pamoja na tarehe." },
            { objective: "O2", q: "Kazi nzuri ya mwanzo wa zamu ni ipi?", options: ["Kusoma daftari la zamu na kuangalia wanaofika leo", "Kuacha droo bila kuihesabu", "Kuzima simu", "Kugawa funguo za ziada ili kuokoa muda"], answer: 0, why: "Kusoma daftari na orodha ya wanaofika kunakuambia zamu inahitaji nini kabla wageni hawajafika." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Matatizo, faragha na zamu yako",
        questions: [
          { objective: "O4", q: "Unapaswa kufanya nini kila mara baada ya kutatua tatizo la mgeni?", options: ["Kulisahau", "Kuliandika mtandaoni", "Kufuatilia na kuliandika kwenye daftari la zamu", "Kumtoza mgeni zaidi"], answer: 2, why: "Kufuatilia na kuliandika kunaijulisha zamu inayofuata na kumwonyesha mgeni kuwa unajali." },
          { objective: "O4", q: "Mgeni anaanza kupiga kelele za vitisho mapokezi. Unafanya nini?", options: ["Kupiga kelele naye", "Kurudi nyuma na kumwita meneja wako au walinzi", "Kuruka juu ya meza", "Kupuuza na kuendelea kuandika"], answer: 1, why: "Hushughulikii vitisho peke yako; kurudi nyuma na kuomba msaada kunawaweka wote salama." },
          { objective: "O5", q: "Mtu asiye na kitambulisho anasema amepoteza ufunguo wa chumba 305. Unafanya nini?", options: ["Kutengeneza ufunguo haraka", "Kumpa ufunguo mkuu", "Kumwambia nani yuko chumba 305", "Kufuata utaratibu wa kitambulisho; hakuna ufunguo bila hicho"], answer: 3, why: "Udhibiti wa funguo unamaanisha kukagua kitambulisho kabla ya ufunguo wowote mpya, ili watu wasiojulikana wasiingie vyumbani." },
          { objective: "O5", q: "Mgeni anaanguka na kuzimia ukumbini. Hatua yako ya kwanza ni ipi?", options: ["Kupiga 911 (au namba ya dharura ya eneo lako), kisha meneja wako", "Kumaliza kumpokea mgeni anayefuata", "Kuandika habari zake mtandaoni", "Kusubiri kuona kama atainuka"], answer: 0, why: "Katika dharura yoyote ya kiafya, piga 911 kwanza; kisha mwambie meneja wako." },
          { objective: "O5", q: "Unaona kijana anayeonekana kudhibitiwa na kufundishwa cha kusema na mtu mzima. Unafanya nini?", options: ["Kumkabili mtu mzima", "Kumuuliza kijana kwa sauti kubwa kama anasafirishwa kiharamu", "Usimkabili mtu; mwambie meneja wako na ufuate sera ya hoteli", "Kupuuza"], answer: 2, why: "Kumkabili mtu kunaweza kuwaweka watu hatarini; ripoti kwa meneja wako na kwa namba ya msaada inayohusika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kazi za Hoteli na Ukarimu: Mapokezi na Huduma kwa Wageni",
    questions: [
      { objective: "O1", q: "Ipi ni kazi kuu ya mhudumu wa mapokezi?", options: ["Kurekebisha mabomba ya vyumba", "Kupokea booking na kujibu simu", "Kufua nguo za hoteli", "Kupika chakula cha room service"], answer: 1, why: "Booking na simu ni kazi ya mapokezi; nyingine ni za timu nyingine." },
      { objective: "O1", q: "Nani anatoa cheti cha START Certified Front Desk Representative (CFDR)?", options: ["American Hotel & Lodging Educational Institute (AHLEI)", "IRS (mamlaka ya kodi ya Marekani)", "DMV ya jimbo lako (ofisi ya leseni za magari)", "Mgeni yeyote wa hoteli"], answer: 0, why: "AHLEI inatoa kozi na mtihani wa CFDR." },
      { objective: "O1", q: "Kijana anataka kazi ya mapokezi. Aangalie wapi kazi na saa zipi zinaruhusiwa?", options: ["Makisio ya rafiki", "Tangazo lolote la kazi", "dol.gov/youthrules na ofisi ya kazi ya jimbo lake", "Popote; sheria za vijana ni sawa kila mahali"], answer: 2, why: "Sheria za kazi za vijana zinategemea umri na jimbo, kwa hiyo angalia kurasa rasmi." },
      { objective: "O1", q: "Hoteli huangalia nini kwanza kwa mhudumu mpya wa mapokezi?", options: ["Miaka ya uzoefu wa hoteli tu", "Shahada ya chuo tu", "Kumiliki gari tu", "Mtu mkarimu, anayetegemewa na mwangalifu na pesa na funguo"], answer: 3, why: "Hoteli mara nyingi hufundisha kazini na huajiri kwa tabia na uaminifu." },
      { objective: "O2", q: "Mpangilio sahihi wa kuanza kumpokea mgeni ni upi?", options: ["Kutengeneza ufunguo, kisha kumsalimu mgeni", "Kusalimu, kutafuta booking, kukagua kitambulisho", "Kuchukua malipo, kisha kujua yeye ni nani", "Kutaja namba ya chumba, kisha kusalimu"], answer: 1, why: "Salimu kwanza, kisha tafuta booking na ulinganishe kitambulisho." },
      { objective: "O2", q: "Property management system (PMS) ni nini?", options: ["Mfumo wa kompyuta wa hoteli wa booking, vyumba na bili", "Ratiba ya usafi", "App ya maegesho", "Aina ya kadi ya ufunguo"], answer: 0, why: "PMS inarekodi booking, kupokea wageni, bili na kuondoka." },
      { objective: "O2", q: "Unamwambiaje mgeni namba ya chumba chake wakati wa kumpokea?", options: ["Kuitangaza kwa ukumbi mzima", "Kuipigia kelele anapoondoka", "Kuiandika kwenye bahasha ya ufunguo na kuionyesha", "Kuiweka kwenye ubao"], answer: 2, why: "Kuandika na kuonyesha kunaweka namba ya chumba kuwa siri." },
      { objective: "O2", q: "Ni kipi unapaswa kueleza kabla mgeni hajaondoka mapokezi?", options: ["Anwani ya nyumbani ya meneja", "Namba za vyumba vya wageni wengine", "Namba za siri za kengele za hoteli", "Wi-Fi, kifungua kinywa na saa ya kuondoka"], answer: 3, why: "Mambo haya ya msingi yanamsaidia mgeni na kupunguza simu kwa mapokezi." },
      { objective: "O3", q: "Ipi ni malipo ya ziada (incidental)?", options: ["Maegesho au room service", "Kodi ya nyumba ya mgeni", "Bili ya umeme ya hoteli", "Mshahara wako"], answer: 0, why: "Malipo ya ziada ni vitu vya ziada wakati wa kukaa, kama maegesho na chakula." },
      { objective: "O3", q: "Namba kamili ya kadi inapaswa kuonekanaje unapoongea na mgeni kuhusu bili?", options: ["Kusomwa kwa sauti yote", "Kuandikwa kwenye kikaratasi cha kubandika", "Isisomwe wala kuandikwa kamwe; tarakimu chache za mwisho tu", "Kutumwa kwa mgeni kwa ujumbe"], answer: 2, why: "Kulinda namba za kadi kunazuia udanganyifu; folio zinaonyesha tarakimu chache za mwisho tu." },
      { objective: "O3", q: "Mgeni anasema malipo ya room service si yake. Huruhusiwi kuondoa malipo. Unafanya nini?", options: ["Kubishana mpaka alipe", "Kuyafuta hata hivyo", "Kumwambia ayapinge kupitia benki yake", "Kuyaangalia pamoja naye na kumwita meneja wako"], answer: 3, why: "Kutulia na kumleta meneja kunafuata sheria na mgeni anapata jibu." },
      { objective: "O3", q: "Express check-out (kuondoka kwa haraka) ni nini?", options: ["Kuondoka bila kusimama mapokezi, kwa simu, TV au app", "Kuondoka bila kulipa", "Lifti ya haraka zaidi", "Kuondoka saa sita usiku tu"], answer: 0, why: "Kuondoka kwa haraka kunawaruhusu wageni kuondoka bila kusubiri foleni." },
      { objective: "O4", q: "Hatua nne za tatizo la mgeni ni zipi?", options: ["Kupuuza, kusubiri, kulaumu, kuondoka", "Kusikiliza, kuomba radhi, kutoa machaguo, kufuatilia na kuandika", "Kubishana, kurudisha pesa, kuomba radhi, kusahau", "Kuhamisha simu, kukata simu, kuandika, kurudia"], answer: 1, why: "Kusikiliza, kuomba radhi, kutoa machaguo na kufuatilia kunatatua matatizo mengi." },
      { objective: "O4", q: "\"Kumhamisha mgeni\" (walking a guest) kunamaanisha nini?", options: ["Kumwonyesha mgeni njia ya lifti", "Kumtembeza mbwa wa mgeni", "Kumwekea mgeni chumba katika hoteli iliyo karibu hoteli yako ikiwa imejaa kupita kiasi", "Kumwomba mgeni aondoke"], answer: 2, why: "Hoteli huwahamisha wageni kwenda hoteli nyingine kwa mujibu wa sera zinapokuwa overbooked." },
      { objective: "O4", q: "Mgeni anataka wiki moja bure kwa sababu TV haikufanya kazi. Huruhusiwi kutoa hilo. Unafanya nini?", options: ["Kuahidi hata hivyo", "Kumwambia anadanganya", "Kumkatia simu", "Kuomba radhi, kutoa machaguo unayoruhusiwa kutoa, na kumwita meneja kwa chochote zaidi"], answer: 3, why: "Usiahidi kamwe usichoweza kutoa; toa unachoweza na umlete meneja." },
      { objective: "O4", q: "Kwa nini uandike matatizo ya wageni kwenye daftari la zamu?", options: ["Ili zamu inayofuata ijue na iweze kufuatilia", "Kumlaumu mgeni", "Kwa sababu wageni hulisoma", "Haihitajiki"], answer: 0, why: "Daftari linapitisha taarifa muhimu kwa zamu inayofuata." },
      { objective: "O5", q: "Mtu mapokezi anauliza, \"Je, bosi wangu, Bw. Diaz, anakaa hapa?\" Unasema nini?", options: ["\"Ndiyo, chumba 410.\"", "\"Siwezi kutoa taarifa za wageni, lakini naweza kuchukua ujumbe.\"", "\"Alifika jana.\"", "\"Ngoja nitafute anwani ya nyumbani kwake.\""], answer: 1, why: "Huthibitishi kamwe kuwa mgeni anakaa hapa; kuchukua ujumbe kunamlinda." },
      { objective: "O5", q: "Chini ya ADA, ni kipi HUWEZI kufanya kuhusu mnyama wa huduma?", options: ["Kuuliza kama mbwa anahitajika kwa sababu ya ulemavu", "Kuuliza amefundishwa kufanya kazi gani", "Kutoza ada ya mnyama kipenzi au kuomba karatasi", "Kumkaribisha mgeni"], answer: 2, why: "ADA inakataza ada za wanyama vipenzi na kudai karatasi kwa wanyama wa huduma." },
      { objective: "O5", q: "Namba ya National Human Trafficking Hotline ni ipi?", options: ["411", "1-800-555-0000", "Namba ya ndani ya simu ya mapokezi ya hoteli", "1-888-373-7888"], answer: 3, why: "1-888-373-7888 ni National Human Trafficking Hotline iliyoorodheshwa na DHS." },
      { objective: "O5", q: "Kengele ya moto inalia na unanusa moshi. Kipi kinakuja kwanza?", options: ["Kupiga 911 (au namba ya dharura ya eneo lako) na kufuata mpango wa dharura wa hoteli", "Kumaliza kumpokea mgeni unayemhudumia", "Kuweka video mtandaoni", "Kusubiri mgeni alalamike"], answer: 0, why: "Katika dharura, piga 911 kwanza na ufuate mpango wa dharura wa hoteli." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 4, 6, 8, 10, 12, 13, 16, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya zamu", objective: "O1", notYet: "Orodha haina mwanzo, katikati au mwisho wa zamu.", meets: "Ina kazi za mwanzo, wakati na mwisho, pamoja na daftari la zamu na kuhesabu droo.", exceeds: "Pia inaongeza udhibiti wa funguo na kazi za simu na inatosha katika ukurasa mmoja ulio wazi." },
      { name: "Maneno ya kumpokea mgeni", objective: "O2", notYet: "Hatua zinakosekana au maneno yanataja namba ya chumba kwa sauti.", meets: "Hatua zote saba kwa mpangilio, namba ya chumba ikiandikwa na kuonyeshwa, si kutajwa.", exceeds: "Aliyasoma kwa sauti kwa mwenzake kwa chini ya dakika tatu, kwa salamu na kuaga kwa ukarimu." },
      { name: "Folio na kuondoka", objective: "O3", notYet: "Hawezi kueleza malipo, au angebishana kuhusu malipo yanayohojiwa.", meets: "Anaeleza kila malipo kwenye folio ya mazoezi na anasema kurekebisha kosa la wazi au kumwita meneja.", exceeds: "Pia anaeleza hold ya kadi kwa maneno rahisi na haonyeshi kamwe namba kamili ya kadi." },
      { name: "Kutatua matatizo", objective: "O4", notYet: "Jibu linabishana, linalaumu au linaahidi kitu ambacho mhudumu hawezi kutoa.", meets: "Anaomba radhi, anatoa angalau machaguo mawili yanayoruhusiwa na anaandika ujumbe kwenye daftari la zamu.", exceeds: "Pia anasema lini kumwita meneja na jinsi atakavyomfuatilia mgeni." },
      { name: "Faragha na usalama", objective: "O5", notYet: "Anatoa namba ya chumba, anatoa ufunguo bila kitambulisho, au angemkabili mtu anayeshukiwa kusafirisha binadamu kiharamu.", meets: "Analinda taarifa za wageni, anakagua kitambulisho kwa funguo, na anaripoti dharura na dalili za usafirishaji haramu kwa usahihi.", exceeds: "Pia anashughulikia mnyama wa huduma kwa maswali mawili ya ADA tu na amefanya mafunzo ya bure kuhusu usafirishaji haramu wa binadamu." },
      { name: "Mpango wa siku 30", objective: "O1", notYet: "Hakuna tarehe, au hakuna hoteli zilizotajwa.", meets: "Hoteli tatu zilizotajwa, tarehe ya mazoezi na tarehe ya kuangalia ukurasa wa CFDR au kuuliza kuhusu mafunzo.", exceeds: "Pia inaorodhesha nani atakuwa mdhamini (reference) na jinsi atakavyofika kwenye kila zamu." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoomba angalau kazi tatu za hoteli au ukarimu ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoajiriwa mapokezi, huduma kwa wageni au kazi nyingine ya hoteli ndani ya siku 90",
      "Wanafunzi wanaoanza cheti cha mapokezi kama AHLEI CFDR ndani ya siku 90",
      "Hoteli washirika zinaripoti kuwa waajiriwa wapya wanahitaji mafunzo machache ya msingi ya mapokezi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti, au masomo kwenye karatasi",
      "Karatasi na kalamu kwa folio za mazoezi, bahasha za funguo na orodha ya zamu",
      "Mwenzako wa kuigiza kama mgeni (rafiki, mwanafamilia au mwanafunzi mwenzako)",
      "Kama dakika 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Andaa meza ya mapokezi ya mazoezi yenye meza, bahasha ya ufunguo ya karatasi na folio ya mazoezi; wanafunzi wapokezane kuwa mhudumu na mgeni.",
      "Tumia tu majina ya wageni, namba za kadi na namba za vyumba za kubuni katika mazoezi yote.",
      "Mwalike meneja wa hoteli ya karibu kutazama maigizo ya kumpokea mgeni na kueleza jinsi wanavyoajiri.",
      "Programu za vijana: kagua sheria za jimbo kuhusu saa za kazi za vijana kabla ya kumpeleka mtu yeyote kazini; programu za kurudi katika jamii: waelekeze wanafunzi kwa waajiri wanaojulikana kwa kuajiri kwa haki (fair-chance hiring).",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
