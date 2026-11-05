"use strict";

// Koach Learn course (Swahili translation of shared/home-health-aide.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "home-health-aide-sw",
  lang: "sw",
  translationOf: "home-health-aide",
  category: "Workforce Development",
  name: "Ujuzi wa Msaidizi wa Afya wa Nyumbani",
  skills: "Kujua kazi ya msaidizi wa afya wa nyumbani na njia ya kuifikia, Kukagua usalama wa nyumba, Kufuata mpango wa huduma kwa heshima, Kuandika maelezo ya ziara na kuripoti mabadiliko, Kulinda faragha na mipaka",
  outcome: "kueleza kazi ya msaidizi wa afya wa nyumbani na jinsi ya kupata mafunzo katika jimbo lako, na kuandaa kifurushi cha mazoezi cha ziara: orodha ya usalama wa nyumba, orodha ya kazi za mpango wa huduma na maelezo ya ziara yenye ukweli.",
  about: [
    "Wasaidizi wa afya wa nyumbani huwasaidia watu kuishi kwa usalama nyumbani: wazee, watu wenye ulemavu na watu wanaopona baada ya kukaa hospitalini. Wanasaidia kuoga, kuvaa, kula na kutembea, na wanaangalia mabadiliko na kumwambia muuguzi.",
    "Kozi hii inakuandaa kwa mafunzo na kwa kazi. Haikupi cheti. Wasaidizi wanaofanya kazi katika mashirika ya afya ya nyumbani au ya hospice yanayolipwa na Medicare (bima ya afya ya serikali ya Marekani) lazima wamalize mafunzo rasmi na kufaulu mtihani, na majimbo mengi yanaongeza sheria zao. Utajifunza mahali pa kukagua sheria za jimbo lako.",
    "Utafanya mazoezi ya fikra ambazo kazi hii inahitaji: kukagua usalama wa nyumba, kufuata mpango wa huduma, kuandika unachokiona, na kulinda taarifa na pesa za mteja. Huduma ya mikono kama kumhamisha mtu (transfer) inafundishwa chini ya usimamizi wa muuguzi, si kwa mtu halisi nyumbani.",
    "Hii ni njia nzuri pia kwa watu wanaorudi nyumbani kutoka gerezani. Sheria za ukaguzi wa historia (background check) zinatofautiana kwa jimbo na kwa shirika, kwa hiyo kozi inakuonyesha jinsi ya kuuliza."
  ],
  finalTask: "Tengeneza kifurushi cha mazoezi cha ziara kwa mteja wa kubuni (mazoezi tu): orodha ya ukurasa mmoja ya usalama wa nyumba, orodha ya kazi za mpango wa huduma utakazofanya katika ziara moja kwa mpangilio, maelezo ya ziara yenye ukweli na badiliko moja ambalo ungeliripoti, na jina la ukurasa rasmi wa jimbo lako kuhusu sheria za msaidizi wa afya wa nyumbani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi ya kudumu ya kuhudumia wengine: wanaotafuta kazi, watu wanaorudi kutoka gerezani, wahamiaji, walezi wa familia wanaotaka kulipwa kwa ujuzi walio nao, na watu wazima wanaorudi kazini.",
    startingPoint: "Wengi wamewahi kumhudumia mwanafamilia. Wachache wanajua tofauti kati ya msaidizi wa afya wa nyumbani na msaidizi wa huduma binafsi, sheria za mafunzo, au jinsi ya kuandika maelezo ya ziara.",
    gap: "Mashirika yanahitaji wasaidizi waliofunzwa, wanaofuata mpango wa huduma, wanaokaa salama katika nyumba ya mteja, wanaoripoti mabadiliko na wanaolinda faragha. Wanafunzi wanahitaji kujua njia ya mafunzo na tabia hizi ili waajiriwe na kuwaweka wateja salama.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 7)",
      "Vifaa: simu au kompyuta ya maktaba; kila kazi inawezekana kwenye karatasi",
      "Sheria za mafunzo na mitihani zinatoka sheria ya serikali kuu, jimbo na shirika; kozi inaelekeza kwenye kurasa rasmi na haitaji saa wala ada",
      "Hakuna ushauri wa dawa wala vipimo vya dawa; hakuna mazoezi ya mikono kwa wateja halisi nyumbani",
      "Baadhi ya wanafunzi wana rekodi za uhalifu; sheria za ukaguzi wa historia zinatofautiana kwa jimbo na shirika"
    ],
    prerequisites: "Hakuna. Kozi \"Kumhudumia Mpendwa Wako: Kuwa Mlezi\" na \"Ujuzi wa Afya\" zinasaidia lakini hazihitajiki."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia ukurasa rasmi wa jimbo lako na tangazo la kazi la shirika", action: "kueleza kazi ya msaidizi wa afya wa nyumbani na hatua za kupata mafunzo katika jimbo lako", standard: "ukitaja mafunzo, mtihani au ukaguzi wa uwezo, na ukurasa uliokagua" },
    { id: "O2", condition: "Ukipewa picha au maelezo ya nyumba ya mteja", action: "kuorodhesha hatari za usalama na utakachofanya kwa kila moja", standard: "ukipata angalau hatari 4, ikiwemo moja ya usalama wako mwenyewe" },
    { id: "O3", condition: "Ukipewa mpango wa huduma wa mteja wa kubuni", action: "kupanga kazi za ziara kwa mpangilio na kufanya kila moja kwa njia inayolinda heshima na uchaguzi wa mteja", standard: "bila kutoka nje ya mpango wa huduma" },
    { id: "O4", condition: "Ukipewa badiliko unaloliona katika ziara", action: "kuandika maelezo ya ziara yenye ukweli na kuchagua kama kumpigia muuguzi au 911", standard: "ukiweka saa, ulichoona au kusikia, na uliyemwambia" },
    { id: "O5", condition: "Ukipewa hali kuhusu faragha, pesa, zawadi au unyanyasaji unaowezekana", action: "kuchagua hatua inayomlinda mteja na kufuata sheria", standard: "ukipata angalau hali 4 kati ya 5 sahihi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi na nyumba",
      lessons: [
        {
          title: "Msaidizi wa afya wa nyumbani anafanya nini na jinsi ya kupata mafunzo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Eleza kazi ya msaidizi wa afya wa nyumbani na orodhesha hatua za kupata mafunzo katika jimbo lako.",
          text: [
            "Wasaidizi wa afya wa nyumbani na wasaidizi wa huduma binafsi wote huwasaidia watu nyumbani kwa kazi za kila siku kama kuoga, kuvaa, kula na kufua nguo. Wasaidizi wa afya wa nyumbani wanaweza pia kufanya kazi za msingi za afya, kama kupima mapigo ya moyo, joto la mwili na kupumua, kutegemea jimbo. Wanasimamiwa na wauguzi au wafanyakazi wengine wa afya.",
            "Wasaidizi wa huduma binafsi kwa kawaida hutoa msaada usio wa kitabibu, kama kumpa mtu ushirika, kusafisha, kupika na kumwendesha garini. Matangazo ya kazi mara nyingi hutumia vyeo vyote viwili, kwa hiyo soma majukumu.",
            "Mashirika ya afya ya nyumbani na ya hospice yanayolipwa na Medicare lazima yafuate sheria za serikali kuu kuhusu wasaidizi wao. Ofisi ya Takwimu za Kazi ya Marekani (US Bureau of Labor Statistics) inasema wasaidizi katika mashirika haya lazima wamalize mafunzo rasmi na kufaulu mtihani sanifu. Baadhi ya majimbo pia yanataka leseni au cheti, ukaguzi wa historia au mtihani wa uwezo.",
            "Kozi hii inakuandaa. Mafunzo na mtihani wako vinatoka kwa shirika au programu iliyoidhinishwa. Ili kukagua sheria za jimbo lako, nenda kwa bodi au idara ya afya ya jimbo lako. Mashirika mengi yanawafundisha wasaidizi wapya, wakati mwingine bure, kwa hiyo uliza."
          ],
          steps: ["Tafuta jina la jimbo lako pamoja na \"home health aide training requirements\" na ufungue ukurasa wa idara ya afya ya jimbo.", "Andika sheria za mafunzo, mtihani na ukaguzi wa historia.", "Angalia matangazo mawili ya kazi kutoka mashirika ya afya ya nyumbani karibu nawe na uorodheshe majukumu na mahitaji.", "Uliza kila shirika kama linawafundisha wasaidizi wapya."],
          words: [["Msaidizi wa afya wa nyumbani (home health aide, HHA)", "msaidizi aliyefunzwa anayetoa huduma binafsi na baadhi ya kazi za msingi za afya katika nyumba ya mteja, akisimamiwa na muuguzi."], ["Msaidizi wa huduma binafsi (personal care aide)", "msaidizi anayetoa msaada usio wa kitabibu nyumbani, kama kusafisha, kupika na kumpa mtu ushirika."], ["Shirika (agency)", "kampuni inayotuma wasaidizi na wauguzi kwenye nyumba za wateja."], ["Mtihani wa uwezo (competency test)", "mtihani unaokagua kama unajua na unaweza kufanya ujuzi wa kazi."]],
          slides: [
            { title: "Aina mbili za wasaidizi", bullets: ["Msaidizi wa afya wa nyumbani: huduma binafsi pamoja na baadhi ya kazi za msingi za afya", "Msaidizi wa huduma binafsi: msaada usio wa kitabibu", "Soma majukumu katika kila tangazo la kazi"] },
            { title: "Nani anasimamia", bullets: ["Wasaidizi wa afya wa nyumbani wanafanya kazi chini ya muuguzi", "Muuguzi anaandika mpango wa huduma", "Wewe unaufuata na kuripoti mabadiliko"] },
            { title: "Sheria za mafunzo", bullets: ["Mashirika yanayolipwa na Medicare: mafunzo rasmi na mtihani", "Majimbo yanaweza kuongeza leseni, mtihani au ukaguzi wa historia", "Kagua ukurasa wa idara ya afya ya jimbo lako"] },
            { title: "Kozi hii inakuandaa", bullets: ["Haikupi cheti", "Mashirika mengi yanawafundisha wasaidizi wapya", "Uliza kabla ya kulipa"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Home Health and Personal Care Aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Tafuta ukurasa rasmi wa jimbo lako kuhusu sheria za msaidizi wa afya wa nyumbani. Kisha tafuta tangazo moja la kazi la shirika la afya ya nyumbani karibu nawe. Kwenye karatasi, andika sheria ya mafunzo kutoka ukurasa wa jimbo, majukumu matatu kutoka tangazo la kazi, na swali moja ambalo ungeliuliza shirika.",
          youCanNow: "kueleza kazi ya msaidizi wa afya wa nyumbani na kupata sheria za mafunzo za jimbo lako kwenye ukurasa rasmi.",
          quickCheck: [
            { objective: "O1", q: "Nani anamsimamia msaidizi wa afya wa nyumbani?", options: ["Jirani wa mteja", "Hakuna mtu", "Muuguzi au mfanyakazi mwingine wa afya", "Marafiki wa msaidizi"], answer: 2, why: "Wasaidizi wa afya wa nyumbani wanasimamiwa na wauguzi au wafanyakazi wengine wa afya." },
            { objective: "O1", q: "Unakagua wapi sheria za mafunzo za wasaidizi wa afya wa nyumbani katika jimbo lako?", options: ["Bodi au idara ya afya ya jimbo lako", "Tangazo la mtandaoni", "Maoni kwenye mitandao ya kijamii", "Ujumbe wa kusambazwa (chain message)"], answer: 0, why: "Ukurasa rasmi wa afya wa jimbo ndio unaoweka na kueleza sheria." }
          ]
        },
        {
          title: "Kukagua usalama wa nyumba ya mteja",
          objectives: ["O2"],
          minutes: 5,
          goal: "Orodhesha hatari za usalama katika nyumba na utakachofanya kwa kila moja.",
          text: [
            "Nyumba si hospitali. Kila nyumba ni tofauti, kwa hiyo angalia kila mahali kila unapofika. Kuanguka ni moja ya hatari kubwa zaidi kwa wazee. MedlinePlus (tovuti ya afya ya serikali ya Marekani) inaorodhesha njia za kupunguza hatari: ondoa vitu vinavyoweza kumkwaza mtu, weka vishikio kwenye ngazi na kwenye bafu au sehemu ya kuoga, na macho yapimwe.",
            "Tafuta zulia lisilokaa imara, nyaya zilizovuka sakafu, vitu vilivyorundikwa kwenye ngazi, mwanga hafifu, sakafu ya bafu iliyolowa, na vitu ambavyo mteja lazima anyooshe mkono juu sana kuvifikia. Mwambie msimamizi wako kuhusu hatari usizoweza kurekebisha, na kamwe usisogeze samani wala kutupa vitu bila kumuuliza mteja.",
            "Vijidudu ni muhimu nyumbani pia. Safisha mikono kabla na baada ya kutoa huduma, vaa glavu unapoweza kugusa majimaji ya mwili, na safisha mikono mara tu baada ya kuvua glavu. Tumia sabuni na maji mikono yako inapoonekana chafu.",
            "Jilinde mwenyewe. Jua anwani na namba ya simu ya shirika lako. Omba wanyama wa nyumbani wafungiwe kama wanakufanya usijisikie vizuri. Ukihisi si salama wakati wowote, ondoka na umpigie msimamizi wako. Hutarajiwi kubaki katika hatari."
          ],
          steps: ["Angalia kila mahali unapofika: sakafu, ngazi, mwanga, bafu.", "Rekebisha hatari ndogo kwa ruhusa ya mteja, kama waya uliovuka njia.", "Andika na uripoti hatari usizoweza kurekebisha.", "Ukihisi si salama, ondoka na umpigie msimamizi wako."],
          words: [["Hatari", "kitu kinachoweza kusababisha jeraha, kama zulia lisilokaa imara."], ["Hatari ya kuanguka", "uwezekano wa mtu kuanguka."], ["Kishikio (grab bar)", "chuma imara kilichofungwa ukutani cha kushika, mara nyingi karibu na choo au bafu."]],
          slides: [
            { title: "Angalia kila mahali kila ziara", bullets: ["Sakafu: mazulia, nyaya, vitu vilivyorundikwa", "Ngazi na mwanga", "Bafu: sakafu iliyolowa, hakuna vishikio"] },
            { title: "Punguza hatari ya kuanguka", bullets: ["Ondoa vitu vinavyokwaza, kwa ruhusa ya mteja", "Vishikio kwenye ngazi na kwenye bafu au sehemu ya kuoga", "Ripoti usichoweza kurekebisha"] },
            { title: "Vijidudu nyumbani", bullets: ["Safisha mikono kabla na baada ya huduma", "Glavu kwa majimaji ya mwili", "Safisha mikono baada ya kuvua glavu"] },
            { title: "Usalama wako mwenyewe", bullets: ["Jua anwani na namba ya shirika", "Omba wanyama wa nyumbani wafungiwe", "Unahisi si salama? Ondoka na umpigie msimamizi wako"] }
          ],
          sources: [
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" },
            { name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }
          ],
          tryIt: "Tembea ndani ya nyumba yako mwenyewe kana kwamba wewe ni msaidizi wa afya wa nyumbani. Orodhesha angalau hatari nne unazozipata (kwa mfano zulia lisilokaa imara au korido yenye giza), utakachofanya kwa kila moja, na jambo moja utakalofanya ili ubaki salama wewe mwenyewe.",
          youCanNow: "kukagua nyumba kutafuta hatari, kuzirekebisha au kuziripoti, na kulinda usalama wako mwenyewe katika ziara.",
          quickCheck: [
            { objective: "O2", q: "Unaona waya wa taa umevuka njia ya kwenda bafuni. Unafanya nini?", options: ["Unaupuuza", "Kwa ruhusa ya mteja, unauondoa njiani", "Unakata waya", "Unatupa taa"], answer: 1, why: "Kuondoa kitu kinachokwaza kwa ruhusa ya mteja kunapunguza hatari ya kuanguka." },
            { objective: "O2", q: "Mgeni katika nyumba ya mteja anatoa vitisho na unahisi si salama. Unafanya nini?", options: ["Unabaki na kumaliza kazi zote kwanza", "Unabishana na mgeni", "Unajificha bafuni", "Unaondoka na kumpigia msimamizi wako"], answer: 3, why: "Usalama wako unakuja kwanza; ondoka na umpigie msimamizi wako." }
          ]
        },
        {
          title: "Kufuata mpango wa huduma kwa heshima",
          objectives: ["O3"],
          minutes: 5,
          goal: "Panga kazi za mpango wa huduma za ziara kwa mpangilio na uzifanye kwa njia inayomheshimu mteja.",
          text: [
            "Muuguzi anaandika mpango wa huduma kwa kila mteja. Unasema utakachofanya katika kila ziara: kwa mfano kusaidia kuoga, kusaidia kuvaa, kupika chakula cha mchana, matembezi mafupi na kufua nguo. Fanya kile mpango unachosema. Mteja akiomba kitu ambacho hakimo kwenye mpango, mpigie msimamizi wako.",
            "Wasaidizi hawabadilishi mpango wa huduma na hawatoi ushauri wa kitabibu. Kutegemea jimbo na mpango, unaweza kumkumbusha mteja kuwa ni wakati wa dawa yake, lakini huamui vipimo vya dawa wala kubadilisha dawa. Maswali kuhusu dawa yanaenda kwa muuguzi.",
            "Heshima inamaanisha kumtendea mteja kama mtu mzima anayeongoza maisha yake mwenyewe. Bisha hodi, msalimie kwa jina analopenda, eleza utakachofanya na uulize kabla ya kuanza. Mpe machaguo, kama shati gani avae. Mwache afanye anachoweza mwenyewe, hata kama inachukua muda zaidi. Mfunike wakati wa kuoga.",
            "Kazi za mikono kama kumhamisha mtu (transfer) na kumwogesha mtu asiyeweza kusimama zinafundishwa na kukaguliwa katika mafunzo yako, chini ya usimamizi wa muuguzi."
          ],
          steps: ["Soma mpango wa huduma kabla ya kuanza.", "Msalimie mteja, eleza mpango wa leo na uulize matakwa yake.", "Fanya kazi kwa mpangilio unaoeleweka, kwa mfano kuoga kabla ya kuvaa, na milo kwa wakati.", "Mwache mteja afanye anachoweza na umpe machaguo.", "Mpigie msimamizi wako kuhusu chochote kisichokuwa kwenye mpango."],
          words: [["Mpango wa huduma (care plan)", "orodha iliyoandikwa na muuguzi ya huduma anayopata mteja na jinsi inavyotolewa."], ["Heshima (dignity)", "kumtendea mtu kwa staha, kama mtu mzima anayefanya maamuzi yake mwenyewe."], ["Mipaka ya kazi (scope)", "kazi ulizofunzwa na unazoruhusiwa kufanya katika kazi yako."]],
          slides: [
            { title: "Mpango wa huduma ndio mwongozo wako", bullets: ["Umeandikwa na muuguzi", "Fanya unachosema", "Hakimo kwenye mpango? Mpigie msimamizi wako"] },
            { title: "Baki ndani ya jukumu lako", bullets: ["Hakuna ushauri wa kitabibu", "Hakuna kubadilisha dawa au vipimo vya dawa", "Maswali ya dawa yanaenda kwa muuguzi"] },
            { title: "Heshima", bullets: ["Bisha hodi, salimia, eleza, uliza", "Toa machaguo", "Mwache afanye anachoweza", "Mfunike"] }
          ],
          tryIt: "Mazoezi tu, mteja wa kubuni: Mpango wa huduma wa Bi. Okafor unasema \"kufua nguo, kusaidia kuoga, kusaidia kuvaa, chakula cha mchana saa 6 mchana (12:00), matembezi ya dakika 10 baada ya chakula cha mchana\". Unafika saa 10:30. Andika kazi kwa mpangilio ambao ungezifanya na njia moja ya kumpa chaguo katika kila moja.",
          youCanNow: "kufuata mpango wa huduma kwa mpangilio unaoeleweka, kubaki ndani ya jukumu lako na kuheshimu utu na uchaguzi wa mteja.",
          quickCheck: [
            { objective: "O3", q: "Mteja anakuomba usafishe mifereji ya paa lake, jambo ambalo halimo kwenye mpango wa huduma. Unafanya nini?", options: ["Unafanya ili uonekane mwema", "Unampigia msimamizi wako kuhusu ombi hilo", "Unakataa kwa ukali", "Unamwomba rafiki afanye kwa malipo"], answer: 1, why: "Kazi zisizokuwa kwenye mpango wa huduma zinapelekwa kwa msimamizi wako." },
            { objective: "O3", q: "Mteja anataka kufunga vifungo vya shati lake mwenyewe lakini anachelewa. Unafanya nini?", options: ["Unamfungia ili kuokoa muda", "Unamwambia aharakishe", "Unamwacha afanye na kusaidia tu akiomba", "Mnaacha shati"], answer: 2, why: "Kuwaacha wateja wafanye wanachoweza kunalinda utu na uhuru wao." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi na nyumba",
        questions: [
          { objective: "O1", q: "Ni tofauti gani kuu kati ya msaidizi wa afya wa nyumbani na msaidizi wa huduma binafsi?", options: ["Wasaidizi wa afya wa nyumbani wanaweza kufanya baadhi ya kazi za msingi za afya chini ya muuguzi", "Wasaidizi wa huduma binafsi wanafanya upasuaji", "Hakuna tofauti yoyote", "Wasaidizi wa afya wa nyumbani hawasaidii kamwe kuoga"], answer: 0, why: "Wasaidizi wa afya wa nyumbani wanaweza kupima dalili muhimu za mwili na kazi kama hizo, kutegemea jimbo; wasaidizi wa huduma binafsi kwa kawaida hutoa msaada usio wa kitabibu." },
          { objective: "O2", q: "Ipi ni hatari ya kuanguka?", options: ["Taa ndogo ya usiku kwenye korido", "Kishikio kwenye ngazi", "Kishikio karibu na bafu", "Zulia lisilokaa imara juu ya ngazi"], answer: 3, why: "Mazulia yasiyokaa imara yanaweza kumkwaza mtu; mengine yanapunguza hatari." },
          { objective: "O2", q: "Unapata hatari usiyoweza kurekebisha, kama kishikio cha ngazi kilichovunjika. Unafanya nini?", options: ["Unakirekebisha kwa tepu", "Unaiandika na kuiripoti kwa msimamizi wako", "Hausemi chochote", "Unamwambia mteja aache kutumia ngazi milele"], answer: 1, why: "Hatari usizoweza kurekebisha zinaripotiwa ili shirika lichukue hatua." },
          { objective: "O3", q: "Mteja anauliza anywe kiasi gani cha dawa. Unasema nini?", options: ["Unakisia kadiri unavyoweza", "Unamwambia aongeze mara mbili", "Unasema utamuuliza muuguzi", "Unatafuta mtandaoni na kumwamulia"], answer: 2, why: "Wasaidizi hawatoi ushauri wa dawa wala vipimo vya dawa; muuguzi ndiye anayejibu maswali ya dawa." },
          { objective: "O3", q: "Nani anaandika mpango wa huduma wa mteja?", options: ["Muuguzi", "Msaidizi", "Jirani wa mteja", "Hakuna mtu"], answer: 0, why: "Muuguzi anaandika mpango wa huduma; msaidizi anaufuata." }
        ]
      }
    },
    {
      name: "Sura 2: Kuripoti, faragha na kifurushi chako cha ziara",
      lessons: [
        {
          title: "Kuangalia mabadiliko na kuandika maelezo ya ziara",
          objectives: ["O4"],
          minutes: 5,
          goal: "Andika maelezo ya ziara yenye ukweli na uchague kama kumpigia muuguzi au 911.",
          text: [
            "Huenda wewe ndiye mtu pekee anayemwona mteja leo. Angalia mabadiliko: kula au kunywa kidogo, maumivu mapya, kidonda kipya au mchubuko, kuchanganyikiwa zaidi, shida ya kupumua, kuanguka, au badiliko la hisia.",
            "Andika maelezo yako ya ziara kwa ukweli: ulichofanya, ulichoona na kusikia, na saa. Tumia maneno ya mteja mwenyewe ndani ya alama za kunukuu. \"11:00. Nimesaidia kuoga. Sehemu nyekundu kwenye kisigino cha kulia, ukubwa wa sarafu. Mteja alisema, 'Kisigino changu kinauma.'\" ni maelezo mazuri. \"Alionekana si sawa\" si maelezo mazuri.",
            "Mpigie msimamizi wako au muuguzi kuhusu badiliko lolote. Piga 911 kwanza kwa dharura: shida ya kupumua, maumivu ya kifua, mtu asiyeamka, kutokwa damu nyingi, au dalili za kiharusi. Kisha mpigie shirika lako.",
            "Shirika lako litakuambia jinsi linavyotaka maelezo yaandikwe, kwenye karatasi au kwenye app. Kamwe usiandike taarifa za faragha mahali pengine popote, kama kwenye maelezo ya simu yako mwenyewe."
          ],
          steps: ["Tambua badiliko.", "Ni dharura? Piga 911 kwanza, kisha shirika lako.", "Si dharura? Mpigie muuguzi au msimamizi wako.", "Andika ukweli, saa, maneno ya mteja na uliyemwambia."],
          words: [["Maelezo ya ziara (visit note)", "kumbukumbu anayoandika msaidizi kuhusu kila ziara."], ["Dharura", "hatari ya ghafla na kubwa kwa maisha au afya inayohitaji 911."], ["Kidonda cha kulala (pressure sore)", "ngozi iliyoharibika kwa kukaa katika mkao mmoja muda mrefu sana; mara nyingi huanza kama sehemu nyekundu juu ya mfupa."]],
          slides: [
            { title: "Angalia mabadiliko", bullets: ["Kula au kunywa kidogo", "Maumivu mapya, kidonda au mchubuko", "Kuchanganyikiwa zaidi, kuanguka, au shida ya kupumua"] },
            { title: "Andika ukweli", bullets: ["Ulichofanya, ulichoona na kusikia", "Saa na maneno ya mteja mwenyewe", "Si: \"Alionekana si sawa\""] },
            { title: "Umpigie nani", bullets: ["Dharura: 911 kwanza, kisha shirika lako", "Badiliko lingine lolote: muuguzi au msimamizi wako", "Andika uliyemwambia"] }
          ],
          sources: [{ name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" }],
          tryIt: "Mazoezi tu, mteja wa kubuni: \"Bw. Diaz kwa kawaida humaliza chakula chake chote cha mchana. Leo alikula vijiko viwili, akasema 'Sijisikii kula,' na kifundo cha mguu wake wa kushoto kinaonekana kimevimba zaidi kuliko wiki iliyopita.\" Andika maelezo ya ziara ya mistari mitatu na uamue: kumpigia muuguzi, au kupiga 911? Andika kwa nini.",
          youCanNow: "kuandika maelezo ya ziara yenye ukweli na kuchagua kama badiliko linahitaji muuguzi au 911.",
          quickCheck: [
            { objective: "O4", q: "Mteja wako ghafla anapata shida ya kupumua. Unafanya nini kwanza?", options: ["Unaandika maelezo", "Unapiga 911", "Unasubiri kuona kama itapita", "Unamtumia rafiki ujumbe"], answer: 1, why: "Shida ya kupumua ni dharura; piga 911 kwanza, kisha shirika." },
            { objective: "O4", q: "Maelezo gani ya ziara ni bora zaidi?", options: ["\"Mteja alikuwa wa ajabu leo.\"", "\"Kila kitu kiko sawa nadhani.\"", "\"Labda ni siku mbaya tu.\"", "\"1:15. Alikula vijiko 2 vya chakula cha mchana. Alisema, 'Sina njaa.'\""], answer: 3, why: "Yanatoa saa, kilichopimwa na maneno ya mteja." }
          ]
        },
        {
          title: "Faragha, pesa na mipaka",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua hatua inayolinda faragha, pesa na usalama wa mteja.",
          text: [
            "Taarifa za afya za mteja ni za faragha. HIPAA, sheria ya serikali kuu ya Marekani, inazilinda. Zishiriki tu na timu yako ya huduma. Usiwazungumzie wateja na marafiki, usiweke habari zao mtandaoni wala usipige picha nyumbani kwao.",
            "Weka mipaka iliyo wazi kuhusu pesa na zawadi. Kamwe usikope pesa, usikopeshe pesa, usipokee zawadi za thamani wala usitumie kadi ya mteja isipokuwa sheria za shirika lako na mpango wa huduma zinaruhusu kazi kama kununua vitu kwa risiti. Fuata sheria za shirika lako kikamilifu, na uweke risiti.",
            "Wazee na watu wazima wenye ulemavu wanaweza kufanyiwa unyanyasaji, kutelekezwa na kuibiwa pesa, wakati mwingine na watu wa karibu nao. Dalili za hatari ni pamoja na michubuko ambayo hakuna anayeweza kueleza, usafi duni, vidonda vya kulala, hofu au kujitenga, na mabadiliko ya ghafla kuhusu pesa.",
            "Ukishuku unyanyasaji, mwambie msimamizi wako mara moja. Unaweza pia kuwasiliana na Adult Protective Services (huduma za ulinzi wa watu wazima) katika jimbo lako. Kama mteja yuko hatarini sasa hivi, piga 911. Baadhi ya majimbo yanawataka wasaidizi kuripoti; shirika lako litakuambia jinsi ya kufanya."
          ],
          steps: ["Shiriki taarifa za mteja na timu ya huduma tu.", "Fuata sheria za shirika kuhusu pesa, weka risiti, na ukatae zawadi za thamani.", "Angalia dalili za unyanyasaji, kutelekezwa au wizi wa pesa.", "Ripoti wasiwasi kwa msimamizi wako, au kwa Adult Protective Services; piga 911 kwa hatari."],
          words: [["HIPAA", "sheria ya serikali kuu ya Marekani inayolinda faragha ya taarifa za afya."], ["Mpaka", "kikomo kilicho wazi cha unachofanya katika uhusiano wa kazi."], ["Unyonyaji wa kifedha (financial exploitation)", "kuchukua au kutumia vibaya pesa au mali za mtu."], ["Adult Protective Services (APS)", "ofisi ya jimbo au kaunti inayochunguza unyanyasaji na kutelekezwa kwa wazee au watu wazima wenye ulemavu."]],
          slides: [
            { title: "Faragha", bullets: ["Shiriki na timu ya huduma tu", "Hakuna mazungumzo, machapisho wala picha", "HIPAA inalinda taarifa za afya"] },
            { title: "Pesa na zawadi", bullets: ["Hakuna kukopa, kukopesha wala zawadi za thamani", "Kununua vitu tu kama mpango unaruhusu, kwa risiti", "Fuata sheria za shirika kikamilifu"] },
            { title: "Dalili za unyanyasaji", bullets: ["Michubuko ambayo hakuna anayeweza kueleza", "Usafi duni au vidonda vya kulala", "Hofu, kujitenga au mabadiliko ya ghafla ya pesa"] },
            { title: "Iripoti", bullets: ["Mwambie msimamizi wako mara moja", "Adult Protective Services", "Hatari sasa hivi: 911"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Soma hali hizi tatu za kubuni na uandike ungefanya nini: 1) Mteja anakupa $200 \"kwa sababu wewe ni mwema sana.\" 2) Mpwa wa mteja anaomba PIN ya kadi ya benki ya mteja. 3) Rafiki yako anauliza ni mtu gani maarufu unayemhudumia. Kisha andika sentensi moja ya mpaka ambayo ungeweza kusema kwa upole.",
          youCanNow: "kulinda faragha, pesa na usalama wa mteja na kuripoti wasiwasi kwa mtu sahihi.",
          quickCheck: [
            { objective: "O5", q: "Mteja anakupa saa ya bei ghali kama shukrani. Unafanya nini?", options: ["Unakataa kwa upole na kumwambia msimamizi wako", "Unaichukua kimya kimya", "Unaiuza na kugawana pesa", "Unaomba pesa taslimu badala yake"], answer: 0, why: "Zawadi za thamani zinavuka mpaka; kataa kwa upole na ufuate sheria za shirika." },
            { objective: "O5", q: "Unaona pesa za mteja zinapotea kila baada ya ndugu fulani kumtembelea. Unafanya nini?", options: ["Unamkabili ndugu huyo", "Unapuuza, ni mambo ya familia", "Unaripoti kwa msimamizi wako", "Unaficha pochi ya mteja kwenye mkoba wako"], answer: 2, why: "Unyonyaji wa kifedha unaowezekana unaripotiwa kwa msimamizi wako au kwa Adult Protective Services." }
          ]
        },
        {
          title: "Kifurushi chako cha mazoezi cha ziara na hatua zinazofuata",
          objectives: ["O2", "O3", "O4", "O1"],
          minutes: 6,
          goal: "Tengeneza kifurushi cha mazoezi cha ziara kwa mteja wa kubuni na upange hatua yako inayofuata kuelekea mafunzo.",
          text: [
            "Sasa utaunganisha kozi nzima. Kifurushi cha ziara ni kile msaidizi aliyejiandaa anachobeba kichwani na kwenye karatasi: ukaguzi wa haraka wa usalama wa nyumba, kazi za mpango wa huduma kwa mpangilio, na maelezo ya ziara yaliyo wazi.",
            "Tumia mteja wa kubuni, kwa mfano \"Bw. Johnson, miaka 78, anaishi peke yake, anatumia kitembezi (walker), mpango wa huduma: kusaidia kuoga, kuvaa, kupika kifungua kinywa, matembezi mafupi, kufua nguo.\" Kamwe usitumie jina au taarifa za mtu halisi kwa mazoezi.",
            "Kisha chukua hatua moja halisi kuelekea kazi. Tafuta shirika la afya ya nyumbani au programu iliyoidhinishwa karibu nawe inayofundisha wasaidizi wapya. Uliza kuhusu mafunzo, mtihani, ukaguzi wa historia, malipo wakati wa mafunzo na ratiba. American Job Center (kituo cha ajira cha serikali ya Marekani) kinaweza kukusaidia kupata mafunzo na kuyalipia.",
            "Kwenye wasifu wako wa kazi (résumé), orodhesha huduma uliyowahi kutoa, kama kumhudumia mwanafamilia, kwa maneno rahisi: \"Nilimsaidia mwanafamilia kwa milo, kuoga na miadi kwa miaka 2.\""
          ],
          steps: ["Andika orodha ya usalama wa nyumba yenye angalau vitu 6.", "Orodhesha kazi za mpango wa huduma wa mteja wa kubuni kwa mpangilio ambao ungezifanya.", "Andika maelezo ya ziara yenye ukweli na badiliko moja ambalo ungeliripoti, na ungemwambia nani.", "Andika ukurasa rasmi wa jimbo lako na shirika au programu moja utakayowasiliana nayo wiki hii."],
          words: [["Kifurushi cha ziara (visit kit)", "orodha yako ya ukaguzi, orodha ya kazi na mtindo wa maelezo kwa kila ziara."], ["Programu iliyoidhinishwa", "programu ya mafunzo ambayo jimbo lako au shirika lenye cheti linaikubali."]],
          slides: [
            { title: "Kifurushi chako cha ziara", bullets: ["Orodha ya usalama wa nyumba", "Kazi za mpango wa huduma kwa mpangilio", "Maelezo ya ziara yenye ukweli"] },
            { title: "Mazoezi tu", bullets: ["Tumia mteja wa kubuni", "Kamwe usitumie majina au taarifa halisi"] },
            { title: "Hatua yako halisi inayofuata", bullets: ["Tafuta shirika au programu inayofundisha wasaidizi", "Uliza kuhusu mafunzo, mtihani, ukaguzi wa historia na malipo", "American Job Center kinaweza kusaidia"] },
            { title: "Mstari wa wasifu wa kazi", bullets: ["Orodhesha huduma kwa familia kwa maneno rahisi", "Sema ulichofanya na kwa muda gani"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Home Health and Personal Care Aides (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" }],
          tryIt: "Kazi ya mwisho: tengeneza kifurushi chako cha mazoezi cha ziara kwa mteja wa kubuni: orodha ya usalama wa nyumba, kazi za mpango wa huduma kwa mpangilio, maelezo ya ziara yenye ukweli na badiliko moja ambalo ungeliripoti na kwa nani, na ukurasa rasmi wa jimbo lako pamoja na shirika au programu moja utakayowasiliana nayo.",
          youCanNow: "kuandaa kifurushi cha mazoezi cha ziara na kuchukua hatua halisi inayofuata kuelekea mafunzo ya msaidizi wa afya wa nyumbani.",
          quickCheck: [
            { objective: "O1", q: "Ni swali gani zuri la kuuliza shirika la afya ya nyumbani?", options: ["\"Naweza kuruka mafunzo?\"", "\"Mnawafundisha wasaidizi wapya, na kuna mtihani?\"", "\"Naweza kutoa dawa kwa njia yangu mwenyewe?\"", "\"Naweza kuwaleta marafiki zangu kwenye nyumba za wateja?\""], answer: 1, why: "Kuuliza kuhusu mafunzo na mitihani kunakuonyesha njia halisi katika shirika hilo." },
            { objective: "O3", q: "Mpango wako wa huduma wa kubuni unasema kuoga, kuvaa na kifungua kinywa. Mpangilio upi unaeleweka?", options: ["Kuoga, kuvaa, kisha kifungua kinywa", "Kifungua kinywa wakati wa kuoga", "Kuvaa, kuoga, kisha kuvaa tena", "Kuacha kuoga"], answer: 0, why: "Kuoga kabla ya kuvaa, kisha mlo, ni mpangilio unaoeleweka kwa kazi hizi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuripoti, faragha na kifurushi chako cha ziara",
        questions: [
          { objective: "O4", q: "Badiliko gani unapaswa kuliripoti kwa muuguzi?", options: ["Mteja alitazama TV", "Mteja alivaa shati la bluu", "Sehemu nyekundu mpya kwenye kisigino cha mteja", "Mteja alipata mgeni"], answer: 2, why: "Sehemu nyekundu mpya inaweza kuwa mwanzo wa kidonda cha kulala na lazima iripotiwe." },
          { objective: "O4", q: "Mteja wako haamki. Unafanya nini kwanza?", options: ["Unapiga 911", "Unamwacha alale", "Unaandika maelezo na kuondoka", "Unampigia rafiki yake"], answer: 0, why: "Mtu asiyeamka ni dharura; piga 911 kwanza." },
          { objective: "O5", q: "Jirani anauliza mteja wako ana shida gani. Unasema nini?", options: ["Unamwambia ugonjwa wake", "Unamwonyesha maelezo ya ziara", "Unasema huwezi kushiriki taarifa kuhusu wateja", "Unaweka habari mtandaoni"], answer: 2, why: "Taarifa za afya za mteja ni za faragha na zinaenda kwa timu ya huduma tu." },
          { objective: "O5", q: "Nani anachunguza unyanyasaji au kutelekezwa kwa wazee au watu wazima wenye ulemavu?", options: ["Ofisi ya posta", "Adult Protective Services", "Mhudumu wa benki", "Gym ya mteja"], answer: 1, why: "Adult Protective Services inachunguza unyanyasaji na kutelekezwa; piga 911 kwa hatari ya papo hapo." },
          { objective: "O5", q: "Mteja anaomba akope $50 kutoka kwako. Unafanya nini?", options: ["Unamkopesha kimya kimya", "Unamkopesha na kumtoza riba", "Unampa kadi yako", "Unakataa kwa upole na kumwambia msimamizi wako"], answer: 3, why: "Kukopesha pesa kunavuka mpaka wa kazi; fuata sheria za shirika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Ujuzi wa Msaidizi wa Afya wa Nyumbani",
    questions: [
      { objective: "O1", q: "Msaidizi wa afya wa nyumbani kwa kawaida anafanya kazi wapi?", options: ["Katika nyumba za wateja", "Katika vyumba vya upasuaji tu", "Katika benki", "Katika maabara ya famasia"], answer: 0, why: "Wasaidizi wa afya wa nyumbani huwasaidia watu katika nyumba zao wenyewe." },
      { objective: "O1", q: "Kozi hii inafanya nini?", options: ["Inakupa cheti cha msaidizi", "Inachukua nafasi ya mafunzo ya shirika lako", "Inakuandaa kwa mafunzo na kwa kazi", "Inakupa leseni ya jimbo"], answer: 2, why: "Kozi inakuandaa; mafunzo na mtihani vinatoka kwa shirika au programu iliyoidhinishwa." },
      { objective: "O1", q: "Wasaidizi katika mashirika yanayolipwa na Medicare lazima:", options: ["Wawe na shahada ya uuguzi", "Wamalize mafunzo rasmi na kufaulu mtihani", "Wafanye kazi bila mafunzo yoyote", "Wafanye kazi usiku tu"], answer: 1, why: "BLS inasema wasaidizi katika mashirika yenye cheti lazima wamalize mafunzo rasmi na kufaulu mtihani sanifu." },
      { objective: "O1", q: "Ili kujua sheria za jimbo lako kwa wasaidizi wa afya wa nyumbani, kagua:", options: ["Maoni kwenye video", "Ujumbe wa kusambazwa", "Ushauri wa mtu usiyemjua", "Bodi au idara ya afya ya jimbo lako"], answer: 3, why: "Ukurasa rasmi wa afya wa jimbo unaeleza sheria zake." },
      { objective: "O2", q: "Njia ipi ni bora zaidi ya kupunguza hatari ya kuanguka nyumbani?", options: ["Kuondoa vitu vinavyokwaza kwa ruhusa ya mteja", "Kuongeza mazulia zaidi", "Kuzima taa za korido", "Kuweka vitu kwenye rafu za juu"], answer: 0, why: "Kuondoa vitu vinavyokwaza ni moja ya njia kuu za kuzuia kuanguka." },
      { objective: "O2", q: "Unapaswa kusafisha mikono lini katika ziara?", options: ["Unapoondoka tu", "Kabla na baada ya huduma, na baada ya kuvua glavu", "Mteja akiomba tu", "Kamwe, glavu zinatosha"], answer: 1, why: "Safisha mikono kabla na baada ya huduma na mara tu baada ya kuvua glavu." },
      { objective: "O2", q: "Unahisi si salama katika nyumba ya mteja. Unafanya nini?", options: ["Unabaki hadi ziara iishe", "Unajifungia chumbani", "Unaondoka na kumpigia msimamizi wako", "Unaandika habari hiyo mtandaoni"], answer: 2, why: "Usalama wako unakuja kwanza; ondoka na umpigie msimamizi wako." },
      { objective: "O2", q: "Kipi kinasaidia kuzuia kuanguka bafuni?", options: ["Sakafu iliyolowa", "Mkeka wa bafu usiokaa imara", "Mwanga hafifu", "Vishikio kwenye bafu au sehemu ya kuoga"], answer: 3, why: "Vishikio kwenye bafu au sehemu ya kuoga vinasaidia kuzuia kuanguka." },
      { objective: "O3", q: "Mteja anaomba kazi ambayo haimo kwenye mpango wa huduma. Wewe:", options: ["Unampigia msimamizi wako", "Unaifanya hata hivyo", "Unakataa na kuondoka", "Unamuuliza mteja mwingine"], answer: 0, why: "Mabadiliko ya mpango yanapitia kwa msimamizi wako." },
      { objective: "O3", q: "Kipi kinaonyesha heshima kwa utu wa mteja?", options: ["Kumwamulia kila kitu", "Kumpa machaguo, kama shati gani avae", "Kumzungumzia kana kwamba hayupo", "Kumwacha bila kumfunika wakati wa kuoga"], answer: 1, why: "Kutoa machaguo kunamtendea mteja kama mtu mzima anayeongoza maisha yake." },
      { objective: "O3", q: "Nani anajibu maswali kuhusu dawa za mteja?", options: ["Msaidizi", "Jirani wa mteja", "Muuguzi", "Jukwaa la tovuti"], answer: 2, why: "Wasaidizi hawatoi ushauri wa dawa; muuguzi anajibu maswali ya dawa." },
      { objective: "O3", q: "Kabla ya kuanza huduma, unafanya nini?", options: ["Unaanza bila kuongea", "Unasoma mpango wa huduma, unamsalimia mteja na kueleza", "Unapanga upya samani", "Unabadilisha mpango wa huduma"], answer: 1, why: "Kusoma mpango, kusalimia na kueleza kunakuja kwanza." },
      { objective: "O4", q: "Ipi ni dharura inayohitaji 911 kwanza?", options: ["Mteja anataka kitafunio", "Mteja amechoshwa", "Kufua nguo kumechelewa", "Maumivu ya kifua au shida ya kupumua"], answer: 3, why: "Maumivu ya kifua na shida ya kupumua yanahitaji 911 kwanza, kisha shirika." },
      { objective: "O4", q: "Maelezo mazuri ya ziara yanajumuisha:", options: ["Saa, ulichoona na maneno ya mteja", "Maoni yako kuhusu familia ya mteja", "Makisio kuhusu tatizo lililopo", "Taarifa za faragha kwenye simu yako mwenyewe"], answer: 0, why: "Maelezo ni ukweli pamoja na saa na maneno ya mteja mwenyewe." },
      { objective: "O4", q: "Mteja anakula kidogo sana kuliko kawaida wiki hii. Wewe:", options: ["Hausemi chochote", "Unaripoti kwa muuguzi na kuliandika katika maelezo yako", "Unamlazimisha ale kila kitu", "Unatupa chakula chake"], answer: 1, why: "Badiliko katika ulaji linaripotiwa na kuandikwa." },
      { objective: "O4", q: "Baada ya kupiga 911 kwa dharura, pia:", options: ["Unaenda nyumbani", "Unafuta maelezo yako", "Unapigia shirika lako", "Unasubiri siku moja kabla ya kumwambia mtu"], answer: 2, why: "Baada ya 911, pigia shirika lako ili muuguzi na msimamizi wajue." },
      { objective: "O5", q: "Sheria gani inalinda taarifa za afya za wateja?", options: ["HIPAA", "Kikomo cha mwendo kasi", "Sheria ya kima cha chini cha mshahara", "Sheria ya hakimiliki"], answer: 0, why: "HIPAA inalinda faragha ya taarifa za afya." },
      { objective: "O5", q: "Ipi ni dalili ya hatari ya unyonyaji wa kifedha?", options: ["Mteja analipa bili kwa wakati", "Mteja ananunua vyakula", "Mteja ana kadi ya maktaba", "Mabadiliko ya ghafla yasiyoelezeka kuhusu pesa za mteja"], answer: 3, why: "Mabadiliko ya ghafla ya pesa yanaweza kumaanisha mtu anachukua pesa za mteja." },
      { objective: "O5", q: "Kupiga picha za mteja nyumbani kwake ili kuwaonyesha marafiki ni:", options: ["Sawa kama anaonekana mwenye furaha", "Tatizo la faragha; usifanye hivyo", "Kunatakiwa na shirika", "Sawa ukififisha nyumba"], answer: 1, why: "Picha na machapisho kuhusu wateja yanavunja faragha yao." },
      { objective: "O5", q: "Unashuku mteja anatelekezwa na mwanafamilia. Wewe:", options: ["Unawaambia majirani wa mteja", "Unasubiri hadi hali iwe mbaya zaidi", "Unaripoti kwa msimamizi wako au Adult Protective Services", "Hufanyi chochote kwa sababu ni familia"], answer: 2, why: "Kutelekezwa kunakoshukiwa kunaripotiwa; piga 911 kama kuna hatari sasa hivi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 2, 4, 6, 9, 10, 13, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Orodha ya usalama wa nyumba", objective: "O2", notYet: "Vitu chini ya 4, au hakuna kitu cha usalama wa msaidizi mwenyewe.", meets: "Angalau vitu 6 vinavyohusu sakafu, ngazi, mwanga, bafu, vijidudu na usalama wa msaidizi.", exceeds: "Anasema cha kufanya kwa kila kitu: kurekebisha kwa ruhusa ya mteja, au kuripoti." },
      { name: "Kazi za mpango wa huduma", objective: "O3", notYet: "Kazi zinakosekana, hazina mpangilio unaoeleweka, au ziko nje ya mpango.", meets: "Kazi zote za mpango kwa mpangilio unaoeleweka, na njia moja ya kutoa chaguo.", exceeds: "Anaonyesha kazi ambazo mteja anaweza kufanya sehemu yake mwenyewe." },
      { name: "Maelezo ya ziara", objective: "O4", notYet: "Maelezo yana makisio au maoni, au hayana saa.", meets: "Ukweli, saa, maneno ya mteja mwenyewe na aliyeambiwa.", exceeds: "Anasema kwa usahihi kama badiliko linahitaji muuguzi au 911, na kwa nini." },
      { name: "Faragha imelindwa", objective: "O5", notYet: "Kifurushi kinatumia jina la mtu halisi au taarifa za faragha.", meets: "Anatumia mteja wa kubuni na hakuna taarifa za faragha.", exceeds: "Anaongeza sentensi moja ya mpaka kuhusu pesa au zawadi." },
      { name: "Hatua inayofuata", objective: "O1", notYet: "Hakuna ukurasa rasmi wala shirika lililoorodheshwa.", meets: "Anaorodhesha ukurasa rasmi wa jimbo na shirika au programu moja ya kuwasiliana nayo.", exceeds: "Anaorodhesha maswali ya kuuliza kuhusu mafunzo, mtihani, ukaguzi wa historia na malipo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaowasiliana na shirika la afya ya nyumbani au programu ya mafunzo iliyoidhinishwa ndani ya siku 30",
      "Wanafunzi wanaomaliza mafunzo ya msaidizi wa afya wa nyumbani na kufaulu mtihani wa uwezo",
      "Wanafunzi wanaoajiriwa kama wasaidizi wa afya wa nyumbani au wa huduma binafsi ndani ya miezi 6 (utafiti wa kufuatilia)",
      "Mashirika washirika yanaripoti wasaidizi wapya wanaoripoti mabadiliko na kufuata mipango ya huduma tangu wiki zao za kwanza"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ili kupata ukurasa wa idara ya afya ya jimbo na mashirika ya karibu",
      "Karatasi na kalamu kwa orodha ya ukaguzi, orodha ya kazi na maelezo ya ziara",
      "Nyumba yako mwenyewe kwa zoezi la kutembea na kukagua usalama",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Kabla ya kozi, tafuta sheria za jimbo lako kwa wasaidizi wa afya wa nyumbani na mashirika mawili ya karibu yanayofundisha wasaidizi wapya, kisha uwashirikishe wanafunzi.",
      "Tumia wateja wa kubuni tu; wakumbushe wanafunzi wasitumie kamwe jina au taarifa za mtu halisi katika mazoezi.",
      "Usiwaruhusu wanafunzi kufanya mazoezi ya kuhamishana (transfer) au kuogeshana bila mkufunzi aliyefunzwa.",
      "Sema wazi kwamba kozi inawaandaa wanafunzi na haiwapi cheti; sheria zinatoka sheria ya serikali kuu, jimbo na shirika.",
      "Kwa wanafunzi wenye rekodi ya uhalifu, waelekeze kwenye sheria za jimbo na kwa mshauri wa kurudi katika jamii au wa msaada wa kisheria kabla ya kuomba kazi."
    ]
  }
};
