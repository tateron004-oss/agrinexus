"use strict";

// Koach Learn course (Swahili translation of shared/solar-installer-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "solar-installer-basics-sw",
  lang: "sw",
  translationOf: "solar-installer-basics",
  category: "Workforce Development",
  name: "Misingi ya Ufungaji wa Paneli za Jua",
  skills: "Kutaja sehemu za mfumo wa nishati ya jua, Kutambua hatari kwenye eneo la kazi ya sola, Kufanya hesabu za msingi za sola, Kufuata hatua za ufungaji, Kupanga njia ya cheti cha sola",
  outcome: "kueleza jinsi mfumo wa nishati ya jua wa nyumbani unavyofanya kazi, kutambua hatari kuu kwenye kazi ya sola, kufanya hesabu rahisi za mazoezi za sola, kuorodhesha kwa mpangilio hatua za kufunga sola juu ya paa, na kuandika mpango wako wenye tarehe wa kazi ya ngazi ya mwanzo ya sola na cheti cha NABCEP PV Associate.",
  about: [
    "Mafundi wa sola hufunga paneli za jua juu ya paa na ardhini na husaidia kuziunganisha. Watu wengi huanza kama wasaidizi katika kikundi cha ufungaji na hujifunza wakiwa kazini. Kozi hii ni kwa wanaotafuta kazi, maveterani (wanajeshi wa zamani), vijana, watu wanaorudi nyumbani kutoka gerezani na yeyote anayetaka kufanya kazi nje kwa mikono yake.",
    "Utajifunza sehemu za mfumo wa sola, sheria za usalama zinazowaweka mafundi hai, hesabu za msingi ambazo vikundi vya kazi hutumia, hatua za kufunga sola juu ya paa, na vyeti halisi ambavyo waajiri hutafuta, kama NABCEP PV Associate. Kozi hii inakuandaa; haikupi leseni wala cheti. Hivyo vinatoka kwa NABCEP, jimbo lako na programu za mafunzo zilizoidhinishwa.",
    "Kila somo linachukua kama dakika tano. Lisome, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\" kwa karatasi na kalamu au kikokotoo cha bure cha simu. Jaribio fupi linafuata kila somo na kila sura, na mtihani wa maswali 20 unafunga kozi. Somo la mwisho linajenga Mpango wako wa Kuanza Sola."
  ],
  finalTask: "Tengeneza Mpango wako wa Kuanza Sola wa ukurasa mmoja: (1) eleza kwa sentensi 3 hadi 4 jinsi mfumo wa sola wa nyumbani uliounganishwa na gridi unavyofanya kazi, ukitaja sehemu zake kuu; (2) jaza orodha ya kukagua usalama wa eneo la kazi kwa kazi ya mazoezi juu ya paa; (3) tatua matatizo mawili ya mazoezi ya ukubwa wa mfumo na uonyeshe hatua zako; (4) orodhesha kwa mpangilio hatua za kufunga sola juu ya paa; (5) andika njia yako ya cheti yenye tarehe halisi (programu ya mafunzo, lengo la mtihani wa NABCEP PV Associate, masharti yoyote ya jimbo au mwajiri uliyoyakagua kwenye ukurasa rasmi); na (6) andika sehemu ya \"Ujuzi wa sola\" yenye vitone 3 kwa CV (wasifu wa kazi) yako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi ya mikono katika nishati safi: wanaotafuta kazi, maveterani, vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kujifunza. Wengi hawana uzoefu wa sola; baadhi wamefanya kazi za ujenzi, kuezeka paa au usaidizi wa umeme.",
    startingPoint: "Wanaweza kufanya hesabu za msingi kwa kikokotoo na kusoma maelekezo mafupi. Wengi hawajawahi kufika kwenye eneo la kazi ya sola na hawajui sehemu za mfumo wa sola, sheria za usalama wala vyeti ambavyo waajiri huomba.",
    gap: "Vikundi vya sola huajiri wasaidizi wanaojua tayari maneno ya msingi, wanaoheshimu sheria za usalama na wanaoonyesha mpango wa mafunzo. Wanafunzi wanahitaji maarifa ya kutosha kuzungumza kwa kujiamini kwenye usaili, kubaki salama katika wiki za kwanza kikundini, na kuchagua hatua sahihi za mafunzo na cheti bila kupoteza pesa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8)",
      "Hakuna kazi ya mikono juu ya paa wala ya umeme katika kozi hii: ufungaji halisi hujifunzwa katika kikundi chenye msimamizi au katika programu ya mafunzo iliyoidhinishwa",
      "Zana za bure tu: karatasi, kalamu, kikokotoo cha simu na tovuti rasmi",
      "Masharti ya leseni, ada na vyeti hubadilika na hutofautiana kwa kila jimbo: wanafunzi wanakagua kurasa rasmi",
      "Muda: masomo ya dakika 4 hadi 6 yanayoingia kati ya kazi na miadi"
    ],
    prerequisites: "Hakuna. Kozi \"Skilled Trades Careers\" na \"Workplace Safety Basics (OSHA)\" zinasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mchoro au orodha ya sehemu za mfumo wa sola wa nyumbani uliounganishwa na gridi", action: "kutaja kila sehemu kuu na kusema inafanya nini", standard: "ukipata sahihi angalau sehemu 5 kati ya 6" },
    { id: "O2", condition: "Ukipewa hali ya mazoezi ya kazi ya sola", action: "kuorodhesha hatari na hatua ya usalama kwa kila moja", standard: "ukitaja kuanguka, mshtuko wa umeme, joto na kubeba mizigo, pamoja na hatua sahihi ya usalama kwa kila moja" },
    { id: "O3", condition: "Ukipewa namba za mazoezi za paneli, volti na ampea", action: "kukokotoa wati, ukubwa wa mfumo na volteji ya mfululizo (string)", standard: "bila makosa ya hesabu, ukionyesha hatua zako" },
    { id: "O4", condition: "Ukipewa hatua za kufunga sola juu ya paa zikiwa zimechanganywa", action: "kupanga hatua kwa mpangilio sahihi na kusema nani anafanya kila moja", standard: "bila zaidi ya hatua moja kuwa nje ya mahali pake" },
    { id: "O5", condition: "Ukitumia tovuti rasmi za NABCEP na za jimbo", action: "kuorodhesha vyeti na leseni za kazi ya ngazi ya mwanzo ya sola mahali unapoishi", standard: "ukitaja ukurasa wa chanzo kwa kila kimoja" },
    { id: "O6", condition: "Ukitumia maelezo yako kutoka kozi hii", action: "kuandika Mpango wa Kuanza Sola wenye tarehe na sehemu ya ujuzi kwa CV", standard: "ukitimiza kila mstari wa rubriki" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi sola inavyofanya kazi na jinsi ya kubaki salama",
      lessons: [
        {
          title: "Sehemu za mfumo wa sola wa nyumbani",
          objectives: ["O1"],
          minutes: 5,
          goal: "Taja sehemu kuu za mfumo wa sola uliounganishwa na gridi na useme kila moja inafanya nini.",
          text: [
            "Paneli za jua, zinazoitwa pia moduli, hugeuza mwanga wa jua kuwa umeme. Aina ya umeme zinazotengeneza ni mkondo mnyoofu (DC). Nyumba hutumia mkondo geu (AC), kwa hiyo inveta (inverter) hubadilisha DC kuwa AC.",
            "Paneli hukaa juu ya racking, fremu ya chuma iliyofungwa kwa boliti kwenye paa au iliyowekwa ardhini. Nyaya hutoka kwenye paneli hadi kwenye inveta, kisha hadi kwenye ubao mkuu wa umeme wa nyumba. Swichi za kukata (disconnect) huwawezesha wafanyakazi kuzima sehemu za mfumo. Mita huhesabu umeme ambao nyumba inatumia na inaotuma kwenye gridi.",
            "Mifumo mingi ya nyumbani imeunganishwa na gridi: inabaki imeunganishwa na nyaya za kampuni ya umeme, zinazoitwa gridi. Umeme wa ziada unaweza kwenda kwenye gridi, na nyumba hutumia umeme wa gridi usiku. Baadhi ya nyumba huongeza pia betri ya kuhifadhi umeme kwa ajili ya baadaye au wakati umeme unapokatika."
          ],
          words: [["Paneli ya jua (moduli)", "bamba bapa linalogeuza mwanga wa jua kuwa umeme."], ["PV (photovoltaic)", "teknolojia inayotengeneza umeme kutoka kwa mwanga; paneli za jua ni paneli za PV."], ["DC (mkondo mnyoofu)", "umeme unaotiririka upande mmoja, kama kutoka kwa betri au paneli ya jua."], ["AC (mkondo geu)", "umeme unaobadilisha mwelekeo mara nyingi kwa sekunde; nyumba hutumia AC."], ["Inveta (inverter)", "kisanduku kinachobadilisha DC kutoka kwenye paneli kuwa AC kwa ajili ya nyumba."], ["Racking", "fremu ya chuma inayoshikilia paneli."], ["Imeunganishwa na gridi (grid-tied)", "imeunganishwa na nyaya za kampuni ya umeme."], ["Disconnect (swichi ya kukata)", "swichi inayokata umeme kwenye sehemu ya mfumo."]],
          slides: [
            { title: "Paneli hutengeneza umeme wa DC", bullets: ["Paneli za jua (moduli) hugeuza mwanga wa jua kuwa umeme wa DC", "PV maana yake photovoltaic: umeme kutoka kwa mwanga"] },
            { title: "Kutoka paa hadi nyumbani", bullets: ["Racking hushikilia paneli", "Nyaya huenda hadi kwenye inveta", "Inveta hubadilisha DC kuwa AC kwa ajili ya nyumba"] },
            { title: "Swichi za usalama na mita", bullets: ["Disconnect huzima sehemu za mfumo", "Mita huhesabu umeme uliotumika na uliotumwa kwenye gridi"] },
            { title: "Mifumo iliyounganishwa na gridi", bullets: ["Hubaki imeunganishwa na nyaya za kampuni ya umeme", "Umeme wa ziada unaweza kwenda kwenye gridi", "Betri ni hiari, kwa matumizi ya baadaye au umeme ukikatika"] }
          ],
          sources: [{ name: "Idara ya Nishati ya Marekani (DOE): Homeowner's Guide to Going Solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
          tryIt: "Kwenye karatasi, chora nyumba rahisi yenye paneli juu ya paa. Chora na uandike majina ya visanduku sita kwa mpangilio: paneli, racking, inveta, disconnect, ubao mkuu wa umeme, mita. Kando ya kila kimoja, andika mstari mmoja mfupi kuhusu kazi yake. Kisha funika majina yako na utaje kila sehemu kwa sauti.",
          youCanNow: "kutaja sehemu kuu za mfumo wa sola uliounganishwa na gridi na kusema kila moja inafanya nini.",
          quickCheck: [
            { objective: "O1", q: "Ni sehemu gani inayobadilisha DC kutoka kwenye paneli kuwa AC kwa ajili ya nyumba?", options: ["Racking", "Mita", "Inveta", "Disconnect"], answer: 2, why: "Inveta hubadilisha DC ya paneli kuwa AC ambayo nyumba hutumia." },
            { objective: "O1", q: "\"Imeunganishwa na gridi\" (grid-tied) maana yake nini?", options: ["Mfumo umeunganishwa na nyaya za kampuni ya umeme", "Paneli zimefungwa kwa kamba", "Nyumba haina mita", "Mfumo unafanya kazi usiku tu"], answer: 0, why: "Mfumo uliounganishwa na gridi hubaki umeunganishwa na gridi ya kampuni ya umeme, kwa hiyo umeme wa ziada unaweza kutoka na umeme wa gridi unaweza kuingia." }
          ]
        },
        {
          title: "Kubaki salama kwenye eneo la kazi ya sola",
          objectives: ["O2"],
          minutes: 6,
          goal: "Orodhesha hatari kuu kwenye kazi ya sola na hatua ya usalama kwa kila moja.",
          text: [
            "Kuanguka ndiyo hatari kubwa zaidi katika kazi ya sola. Katika ujenzi, OSHA (shirika la usalama kazini la Marekani) inataka kinga dhidi ya kuanguka unapofanya kazi futi 6 au zaidi juu ya sehemu ya chini. Juu ya paa, kwa kawaida hii ni mfumo binafsi wa kuzuia kuanguka: mkanda wa mwili mzima (harness), kamba (lanyard) na nanga ya paa, vilivyowekwa na mtu aliyefunzwa. Kagua harness yako kabla ya kila matumizi.",
            "Mshtuko wa umeme ni hatari kubwa ya pili. Paneli za jua hutengeneza umeme kila mwanga unapozigusa, na huwezi kuzima jua. Nyaya kutoka kwenye paneli zinaweza kuwa na umeme mchana hata swichi ikiwa imezimwa. Kama msaidizi mpya, huunganishi wala hugusi nyaya: wafanyakazi waliofunzwa na wenye sifa tu ndio hufanya kazi ya umeme, wakifuata hatua za lockout na tagout.",
            "Ngazi: ziweke kwenye ardhi imara na sawa, hakikisha reli za pembeni zinazidi ukingo wa paa kwa angalau futi 3, na ushike sehemu tatu kila wakati. Joto: kunywa maji mara kwa mara, pumzika kivulini, na mwambie kiongozi wako ukihisi kizunguzungu au kuugua. Kubeba: paneli ni kubwa na hushika upepo, kwa hiyo zibebe watu wawili na uinue kwa nguvu ya miguu.",
            "Vaa vifaa vyako vya kujikinga (PPE): kofia ngumu, miwani ya usalama, glavu za kazi na buti zinazoshika vizuri. Simamisha kazi na umwambie kiongozi wako kila unapohisi kuna jambo lisilo salama."
          ],
          steps: ["Kabla ya kupanda: kagua ngazi, hali ya hewa na harness yako.", "Juu ya paa: baki umefungwa kwenye nanga kila unapokuwa futi 6 au zaidi juu.", "Chukulia kila paneli na kila waya kuwa na umeme; usiguse viunganishi kama huna sifa.", "Kunywa maji, pumzika kivulini na inua paneli pamoja na mwenzako.", "Simama na umwambie kiongozi wako kuhusu hatari yoyote."],
          words: [["OSHA", "Occupational Safety and Health Administration, shirika la serikali kuu ya Marekani la usalama kazini."], ["Kinga dhidi ya kuanguka", "vifaa na mipangilio inayokuzuia kuanguka au inayosimamisha anguko kwa usalama."], ["Mfumo binafsi wa kuzuia kuanguka", "harness ya mwili mzima, lanyard na nanga vinavyokudaka ukianguka."], ["PPE", "personal protective equipment: vifaa vya usalama unavyovaa, kama kofia ngumu na glavu."], ["Lockout/tagout", "hatua za kuzima na kufunga umeme kwa kufuli ili mtu yeyote asiuwashe tena kazi ikiendelea."], ["Yenye umeme (live)", "inayobeba umeme."]],
          slides: [
            { title: "Kuanguka: hatari kubwa zaidi", bullets: ["OSHA: kinga dhidi ya kuanguka kuanzia futi 6 katika ujenzi", "Harness, lanyard na nanga ya paa", "Kagua harness yako kabla ya kila matumizi"] },
            { title: "Mshtuko wa umeme", bullets: ["Paneli hutengeneza umeme kila mwanga unapozigusa", "Nyaya zinaweza kuwa na umeme hata swichi ikiwa imezimwa", "Wafanyakazi wenye sifa tu hufanya kazi ya umeme"] },
            { title: "Ngazi, joto na kubeba", bullets: ["Reli za ngazi futi 3 juu ya ukingo wa paa; ardhi imara na sawa", "Maji, kivuli na mapumziko", "Beba paneli watu wawili"] },
            { title: "Vaa vifaa na useme", bullets: ["Kofia ngumu, miwani ya usalama, glavu, buti zinazoshika", "Simamisha kazi na umwambie kiongozi kama kuna jambo lisilo salama"] }
          ],
          sources: [
            { name: "OSHA: Fall protection (kinga dhidi ya kuanguka)", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.501, wajibu wa kuwa na kinga dhidi ya kuanguka (ujenzi)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501" },
            { name: "OSHA: 29 CFR 1926.1053, ngazi", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
            { name: "OSHA: Heat (joto)", url: "https://www.osha.gov/heat-exposure" },
            { name: "Ofisi ya Takwimu za Kazi ya Marekani (BLS): Solar photovoltaic installers", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" }
          ],
          tryIt: "Hali ya mazoezi: ni asubuhi yenye joto ya Julai. Kikundi chako kinafunga paneli 18 juu ya paa la nyumba ya ghorofa mbili. Ngazi iko juu ya nyasi laini, mfanyakazi mwenzako mmoja hana harness, na nyaya za paneli moja zinaning'inia ovyo. Kwenye karatasi, tengeneza orodha ya safu mbili: Hatari na Hatua ya usalama. Andika angalau mistari minne (kuanguka, mshtuko, joto, kubeba, na ngazi).",
          youCanNow: "kutambua hatari kuu kwenye kazi ya sola na kutaja hatua ya usalama kwa kila moja.",
          quickCheck: [
            { objective: "O2", q: "Katika ujenzi, OSHA inataka kinga dhidi ya kuanguka kuanzia urefu gani?", options: ["Futi 10", "Futi 20", "Juu kabisa ya paa tu", "Futi 6"], answer: 3, why: "Sheria ya OSHA ya ujenzi inataka kinga dhidi ya kuanguka kuanzia futi 6 au zaidi juu ya sehemu ya chini." },
            { objective: "O2", q: "Kuna jua na swichi ya disconnect imezimwa. Je, ni salama kugusa nyaya za paneli?", options: ["Ndiyo, swichi inafanya kila kitu kiwe salama", "Hapana, paneli hutengeneza umeme kila mwanga unapozigusa, kwa hiyo chukulia nyaya kuwa na umeme", "Ndiyo, ukivaa glavu za kazi", "Tu kama inveta iko kimya"], answer: 1, why: "Paneli huendelea kutengeneza umeme zikiwa kwenye mwanga, kwa hiyo nyaya zake bado zinaweza kuwa na umeme." }
          ]
        },
        {
          title: "Hesabu za msingi za sola (kwa mazoezi tu)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kokotoa wati, ukubwa wa mfumo na volteji ya mfululizo kutoka namba za mazoezi.",
          text: [
            "Vikundi vya kazi hutumia kanuni chache rahisi kila siku. Namba zote katika somo hili ni za kubuni kwa mazoezi tu. Miundo halisi hutumia lebo ya paneli, karatasi ya data ya mtengenezaji na kanuni za umeme, na hukaguliwa na msanifu mwenye sifa.",
            "Nguvu: wati = volti x ampea. Paneli ya mazoezi inayotoa volti 40 kwa ampea 10 inatengeneza 40 x 10 = wati 400. Wati 1,000 ni kilowati 1 (kW).",
            "Ukubwa wa mfumo: idadi ya paneli x wati kwa kila paneli. Paneli 20 za mazoezi za wati 400 kila moja = wati 8,000, yaani 8 kW.",
            "Mfululizo (string): paneli zilizounganishwa kwa mfululizo (series) huunda string. Katika mfululizo, volteji zinajumlishwa na ampea zinabaki zilezile. Paneli tatu za mazoezi za volti 40 kila moja katika mfululizo = volti 120. Katika sambamba (parallel), ampea zinajumlishwa na volteji inabaki ileile."
          ],
          steps: ["Andika kanuni kwanza.", "Weka namba pamoja na vipimo vyake (V, A, W).", "Fanya hesabu kwa kikokotoo.", "Badilisha wati kuwa kilowati kwa kugawanya kwa 1,000.", "Kagua: je, jibu lina maana?"],
          words: [["Volti (V)", "kipimo cha msukumo au shinikizo la umeme."], ["Ampea (A)", "kipimo cha kiasi cha umeme kinachotiririka."], ["Wati (W)", "kipimo cha nguvu: volti mara ampea."], ["Kilowati (kW)", "wati 1,000."], ["Mfululizo (series)", "zimeunganishwa ncha kwa ncha katika mstari mmoja; volteji zinajumlishwa."], ["Sambamba (parallel)", "zimeunganishwa ubavu kwa ubavu; ampea zinajumlishwa."], ["String", "kikundi cha paneli zilizounganishwa kwa mfululizo."]],
          slides: [
            { title: "Kwa mazoezi tu", bullets: ["Namba za kubuni ili kujifunza njia", "Miundo halisi hutumia karatasi ya data, kanuni za umeme na msanifu mwenye sifa"] },
            { title: "Wati = volti x ampea", bullets: ["40 V x 10 A = 400 W", "1,000 W = 1 kW"] },
            { title: "Ukubwa wa mfumo", bullets: ["Paneli x wati kwa kila paneli", "20 x 400 W = 8,000 W = 8 kW"] },
            { title: "Mfululizo na sambamba", bullets: ["Mfululizo: volti zinajumlishwa, ampea zinabaki zilezile", "3 x 40 V kwa mfululizo = 120 V", "Sambamba: ampea zinajumlishwa, volti zinabaki zilezile"] }
          ],
          tryIt: "Kwa mazoezi tu. Tatua kwenye karatasi na uonyeshe hatua zako: (a) Paneli inatoa volti 36 kwa ampea 11. Ni wati ngapi? (b) Nyumba ina paneli 24 za wati 350. Ukubwa wa mfumo ni kW ngapi? (c) Paneli tano za volti 40 kila moja zimeunganishwa kwa mfululizo. Volteji ya string ni ngapi? Majibu ya kujikagua: (a) 396 W, (b) 8,400 W = 8.4 kW, (c) 200 V.",
          youCanNow: "kukokotoa wati, ukubwa wa mfumo na volteji ya string kutoka namba za mazoezi na kuonyesha hatua zako.",
          quickCheck: [
            { objective: "O3", q: "Kwa mazoezi tu: paneli 15 za wati 400 kila moja. Ukubwa wa mfumo ni upi?", options: ["4 kW", "6 kW", "15 kW", "400 kW"], answer: 1, why: "15 x 400 W = 6,000 W, na 6,000 / 1,000 = 6 kW." },
            { objective: "O3", q: "Kwa mazoezi tu: paneli nne za volti 40 kila moja zimeunganishwa kwa mfululizo. Volteji ya string ni ngapi?", options: ["40 V", "80 V", "10 V", "160 V"], answer: 3, why: "Katika mfululizo volteji zinajumlishwa: 4 x 40 V = 160 V." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi sola inavyofanya kazi na jinsi ya kubaki salama",
        questions: [
          { objective: "O1", q: "Paneli za jua hutengeneza umeme wa aina gani?", options: ["AC", "DC", "Nishati ya gesi", "Umeme wa betri tu"], answer: 1, why: "Paneli hutengeneza mkondo mnyoofu (DC); inveta huubadilisha kuwa AC." },
          { objective: "O1", q: "Kazi ya racking ni ipi?", options: ["Inashikilia paneli juu ya paa au ardhini", "Inahesabu umeme uliotumwa kwenye gridi", "Inabadilisha DC kuwa AC", "Inahifadhi umeme usiku"], answer: 0, why: "Racking ni fremu ya chuma inayoshikilia paneli." },
          { objective: "O2", q: "Uko juu ya paa futi 12 juu. Lazima utumie nini?", options: ["Hakuna kitu ukiwa mwangalifu", "Kofia ngumu tu", "Kinga dhidi ya kuanguka, kama harness iliyofungwa kwenye nanga", "Ngazi ndefu zaidi"], answer: 2, why: "Kuanzia futi 6 au zaidi katika ujenzi unahitaji kinga dhidi ya kuanguka." },
          { objective: "O2", q: "Wewe ni msaidizi mpya, na mfanyakazi mwenzako anakuomba uunganishe nyaya mbili za paneli. Unafanya nini?", options: ["Unaziunganisha haraka ukiwa umevaa glavu", "Unasubiri wingu lipite", "Unamwomba mteja akusaidie", "Unakataa na kumwambia kiongozi wako, kwa sababu wafanyakazi wenye sifa tu hufanya kazi ya umeme"], answer: 3, why: "Kuunganisha umeme ni kazi ya wafanyakazi waliofunzwa na wenye sifa; wasaidizi wapya hawagusi nyaya." },
          { objective: "O3", q: "Kwa mazoezi tu: paneli inatoa volti 50 kwa ampea 8. Hiyo ni wati ngapi?", options: ["58 W", "400 W", "42 W", "800 W"], answer: 1, why: "Wati = volti x ampea, kwa hiyo 50 x 8 = 400 W." }
        ]
      }
    },
    {
      name: "Sura 2: Kutoka juu ya paa hadi kazi yako ya kwanza",
      lessons: [
        {
          title: "Hatua za kufunga sola juu ya paa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Panga kwa mpangilio hatua za kufunga sola juu ya paa na useme nani anafanya kila moja.",
          text: [
            "Kila ufungaji hufuata njia moja. Kwanza, tathmini ya eneo: mtu anakagua umri na hali ya paa, upande linaoelekea, kivuli cha miti, na ubao wa umeme wa nyumba. Kisha msanifu anapanga mahali pa paneli na nyaya.",
            "Kinachofuata ni kibali. Idara ya majengo ya jiji au kaunti inakagua mipango kabla kazi haijaanza. Siku ya ufungaji, kikundi kinaweka vifaa vya usalama, kinaweka alama kwenye paa, na kinafunga vishikio vya paa ndani ya mataruma (rafters). Kila kishikio kinawekewa flashing na kuzibwa ili paa lisivuje. Kisha kikundi kinafunga racking kwa boliti na kupachika paneli.",
            "Fundi umeme mwenye sifa au mfanyakazi mwenye leseni hufanya miunganisho ya umeme, akifuata National Electrical Code (NEC, kanuni za umeme za Marekani) na sheria za eneo. Kisha mfumo unakaguliwa na afisa wa majengo wa eneo. Mwishowe, kampuni ya umeme (utility) inaidhinisha mfumo kuunganishwa na gridi, mara nyingi huitwa ruhusa ya kuendesha (permission to operate). Hapo tu ndipo mfumo unawashwa.",
            "Wasaidizi kwa kawaida hubeba na kupanga vifaa, husaidia kuweka racking na paneli, huweka eneo safi, na hufuata maelekezo ya kiongozi."
          ],
          steps: ["Tathmini ya eneo: paa, mwelekeo, kivuli, ubao wa umeme.", "Usanifu: mpangilio wa paneli na mpango wa nyaya.", "Kibali kutoka kwa jiji au kaunti.", "Maandalizi ya usalama, kisha vishikio vya paa, vyenye flashing na vilivyozibwa.", "Racking, kisha paneli kupachikwa.", "Miunganisho ya umeme na wafanyakazi wenye sifa.", "Ukaguzi na afisa wa eneo.", "Idhini ya kampuni ya umeme (ruhusa ya kuendesha), kisha kuwasha."],
          words: [["Tathmini ya eneo", "ziara ya kukagua kama paa au uwanja unafaa kwa sola."], ["Kibali (permit)", "ruhusa rasmi kutoka kwa jiji au kaunti kufanya kazi."], ["Flashing", "chuma au kitu kingine kinachozuia maji pale kitu kinapopenya paa."], ["Taruma (rafter)", "moja ya mihimili ya mbao inayoshikilia paa."], ["NEC", "National Electrical Code (NFPA 70), sheria za kazi salama ya umeme ambazo majimbo na miji hukubali kutumia."], ["Ukaguzi", "ukaguzi wa afisa kuona kama kazi inatimiza kanuni."], ["Ruhusa ya kuendesha (permission to operate)", "idhini ya kampuni ya umeme kuwasha mfumo uliounganishwa na gridi."]],
          slides: [
            { title: "Kabla kikundi hakijafika", bullets: ["Tathmini ya eneo: paa, mwelekeo, kivuli, ubao wa umeme", "Usanifu: mpangilio na nyaya", "Kibali kutoka kwa jiji au kaunti"] },
            { title: "Siku ya ufungaji", bullets: ["Maandalizi ya usalama kwanza", "Vishikio ndani ya mataruma, vyenye flashing na vilivyozibwa", "Racking, kisha paneli"] },
            { title: "Kumalizia", bullets: ["Kazi ya umeme na wafanyakazi wenye sifa, kufuata NEC", "Ukaguzi wa eneo", "Idhini ya kampuni ya umeme, kisha kuwasha"] },
            { title: "Wasaidizi hufanya nini", bullets: ["Kubeba na kupanga vifaa", "Kusaidia kuweka racking na paneli", "Kuweka eneo safi; kumfuata kiongozi"] }
          ],
          sources: [
            { name: "Idara ya Nishati ya Marekani (DOE): Homeowner's Guide to Going Solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
            { name: "NFPA 70: National Electrical Code (kagua ni toleo gani jimbo lako linatumia)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" }
          ],
          tryIt: "Andika kila moja ya hatua 8 za ufungaji kwenye kipande chake kidogo cha karatasi. Zichanganye, kisha zirudishe kwa mpangilio bila kuangalia somo. Kando ya kila moja, andika nani anaifanya: msanifu, jiji au kaunti, kikundi, fundi umeme mwenye sifa, mkaguzi au kampuni ya umeme. Linganisha mpangilio wako na somo.",
          youCanNow: "kuorodhesha kwa mpangilio hatua za kufunga sola juu ya paa na kusema nani anafanya kila moja.",
          quickCheck: [
            { objective: "O4", q: "Ni nini kwa kawaida huja kabla tu ya siku ya ufungaji?", options: ["Kupata kibali", "Ukaguzi wa mwisho", "Ruhusa ya kuendesha kutoka kampuni ya umeme", "Kuwasha mfumo"], answer: 0, why: "Kibali cha jiji au kaunti huja kabla kazi haijaanza juu ya paa." },
            { objective: "O4", q: "Kwa nini vishikio vya paa huwekewa flashing na kuzibwa?", options: ["Ili paneli zing'ae", "Ili paa lisivuje", "Ili kuharakisha ukaguzi", "Ili paneli zitoe umeme zaidi"], answer: 1, why: "Flashing na kuziba huzuia maji pale boliti zinapopenya paa." }
          ]
        },
        {
          title: "Vyeti, leseni na mafunzo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Orodhesha vyeti na leseni za kazi ya ngazi ya mwanzo ya sola mahali unapoishi, pamoja na chanzo rasmi cha kila kimoja.",
          text: [
            "Mafundi wengi huanza kama wasaidizi na hujifunza wakiwa kazini, mara nyingi kwa mwezi mmoja hadi mwaka mmoja. Baadhi huchukua kwanza kozi fupi katika chuo cha jamii (community college), shule ya ufundi au programu ya uanagenzi. Mafundi umeme, waezekaji wa paa na wafanyakazi wa ujenzi mara nyingi wanaweza kuhamia sola haraka zaidi.",
            "NABCEP (North American Board of Certified Energy Practitioners, bodi ya vyeti vya nishati ya Amerika Kaskazini) hutoa vyeti vya sola vinavyojulikana. Cheti cha ngazi ya mwanzo ni NABCEP PV Associate. Unaweza kustahili kwa kumaliza kozi na NABCEP Associate Registered Training Provider (mtoa mafunzo aliyesajiliwa), au kwa kuonyesha angalau miezi sita ya kazi ya sola ya muda wote, kisha kufaulu mtihani. Baadaye, mafundi wenye uzoefu wanaweza kulenga NABCEP Board Certification, kama PV Installation Professional.",
            "Leseni huwekwa na majimbo, na baadhi ya miji. Baadhi ya majimbo yanataka leseni ya sola au ya umeme kwa kazi fulani; mengine hayataki. Ada, sheria za mtihani na masharti hubadilika, kwa hiyo kagua mwenyewe ukurasa rasmi wa NABCEP na bodi ya leseni ya jimbo lako kabla ya kulipia chochote.",
            "Kozi hii inakuandaa kuanza. Haikupi cheti wala leseni."
          ],
          steps: ["Soma ukurasa wa programu ya NABCEP Associate.", "Tafuta mtoa mafunzo aliyesajiliwa au hesabu miezi yako ya kazi ya sola.", "Tafuta bodi ya leseni ya wakandarasi au ya umeme ya jimbo lako kwa sheria za sola.", "Andika kila sharti na ukurasa ulipolipata.", "Waulize waajiri wa sola wa eneo lako wanataka vyeti gani."],
          words: [["NABCEP", "North American Board of Certified Energy Practitioners, inayotoa vyeti vya sola."], ["Cheti (credential)", "uthibitisho kwamba ulifaulu mtihani au ulitimiza kiwango."], ["Leseni", "ruhusa kutoka kwa jimbo au jiji kufanya kazi fulani."], ["Uanagenzi (apprenticeship)", "kazi ya kulipwa yenye mafunzo, ambapo unajifunza kutoka kwa wafanyakazi stadi."], ["Mtoa mafunzo aliyesajiliwa", "shule ambayo NABCEP inaiorodhesha kuwa imeidhinishwa kukuandaa kwa mtihani wake wa associate."]],
          slides: [
            { title: "Njia za kuingia", bullets: ["Anza kama msaidizi na ujifunze ukiwa kazini", "Kozi fupi, vyuo vya jamii, uanagenzi", "Kazi ya umeme, kuezeka paa au ujenzi inasaidia"] },
            { title: "NABCEP PV Associate", bullets: ["Cheti cha sola cha ngazi ya mwanzo", "Unastahili kwa kozi iliyosajiliwa au miezi 6 ya kazi ya sola", "Kisha ufaulu mtihani"] },
            { title: "Leseni ni za eneo", bullets: ["Huwekwa na jimbo lako na wakati mwingine jiji lako", "Baadhi ya majimbo yanataka leseni ya sola au ya umeme"] },
            { title: "Kagua kabla ya kulipa", bullets: ["Ukurasa rasmi wa NABCEP na bodi ya leseni ya jimbo lako", "Andika kila sharti na chanzo chake", "Kozi hii inakuandaa; haikupi leseni"] }
          ],
          sources: [
            { name: "NABCEP: Associate program (PV Associate)", url: "https://www.nabcep.org/certification/associate-program/" },
            { name: "NABCEP: Certifications (vyeti)", url: "https://www.nabcep.org/certifications/" },
            { name: "Ofisi ya Takwimu za Kazi ya Marekani (BLS): How to become a solar photovoltaic installer", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
            { name: "CareerOneStop: License Finder (kitafuta leseni)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Fungua ukurasa wa programu ya NABCEP Associate na uandike njia za kustahili PV Associate. Kisha tafuta jina la jimbo lako pamoja na \"solar contractor license\" na upate ukurasa rasmi wa bodi ya leseni ya jimbo lako (mara nyingi unaishia na .gov). Andika mstari mmoja kuhusu kile unachosema, na anwani ya tovuti.",
          youCanNow: "kutaja cheti cha NABCEP cha ngazi ya mwanzo, kusema jinsi ya kukistahili, na kupata sheria za leseni za jimbo lako kwenye ukurasa rasmi.",
          quickCheck: [
            { objective: "O5", q: "Ni kipi cheti cha NABCEP cha ngazi ya mwanzo cha sola PV?", options: ["EPA Section 608", "CDL Class A", "NABCEP PV Associate", "CompTIA A+"], answer: 2, why: "NABCEP PV Associate ndicho cheti cha ngazi ya mwanzo cha sola PV." },
            { objective: "O5", q: "Unakagua wapi kama jimbo lako linataka leseni kwa kazi ya sola?", options: ["Chapisho la mitandao ya kijamii", "Tangazo la kozi ya haraka mtandaoni", "Rafiki katika jimbo jingine", "Ukurasa rasmi wa bodi ya leseni ya jimbo lako"], answer: 3, why: "Leseni huwekwa na kila jimbo, kwa hiyo ukurasa rasmi wa bodi ya jimbo ndio chanzo cha kuamini." }
          ]
        },
        {
          title: "Mpango wako wa Kuanza Sola",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika Mpango wa Kuanza Sola wenye tarehe na sehemu ya ujuzi kwa CV.",
          text: [
            "Sasa unganisha yote kwenye ukurasa mmoja unaoweza kuupeleka kwenye programu ya mafunzo au usaili. Mpango wenye tarehe halisi unamwonyesha mwajiri kuwa uko makini.",
            "Mpango wako una sehemu sita: jinsi sola inavyofanya kazi kwa maneno yako mwenyewe; orodha ya kukagua usalama; matatizo mawili ya hesabu za mazoezi yenye hatua zako; hatua za ufungaji kwa mpangilio; njia yako ya cheti yenye tarehe na vyanzo; na sehemu ya CV ya \"Ujuzi wa sola\".",
            "Kwa sehemu ya CV, andika mambo ya kweli unayoweza kufanya sasa, kwa vitone vifupi vinavyoanza na neno la kitendo. Kwa mfano: \"Ninajua sehemu za mfumo wa PV uliounganishwa na gridi na jinsi DC inavyogeuka kuwa AC.\" \"Nimefunzwa hatari za eneo la kazi ya sola: kinga dhidi ya kuanguka, mshtuko, joto na kubeba kwa usalama.\" \"Ninaweza kukokotoa ukubwa wa mfumo na volteji ya string.\" Ongeza kazi za zamani zinazosaidia: ujenzi, kuezeka paa, jeshi, ghala au kazi yoyote yenye zana, urefu au kazi ya pamoja.",
            "Maveterani na watu wenye rekodi ya uhalifu: waajiri wengi wa sola huajiri kutoka makundi haya. Kuwa mkweli kwenye maombi, na uliza kituo cha ajira cha eneo lako au programu ya kurudi katika jamii kuhusu msaada wa mafunzo."
          ],
          steps: ["Andika maelezo yako ya sentensi 3 hadi 4 ya mfumo uliounganishwa na gridi.", "Nakili orodha yako ya usalama kutoka Somo la 2 na uimalize.", "Ongeza matatizo mawili ya hesabu za mazoezi yenye hatua zako.", "Orodhesha hatua 8 za ufungaji kwa mpangilio.", "Andika njia yako ya cheti yenye tarehe lengwa na kurasa za vyanzo.", "Andika vitone 3 vya CV vinavyoanza na neno la kitendo."],
          words: [["CV (wasifu wa kazi, résumé)", "hati fupi inayoorodhesha ujuzi, kazi na mafunzo yako kwa waajiri."], ["Tarehe lengwa", "siku unayopanga kumaliza hatua."], ["Kituo cha ajira (workforce center)", "ofisi ya umma ya bure inayowasaidia watu kupata kazi na mafunzo; vingi vinaitwa American Job Centers."]],
          slides: [
            { title: "Ukurasa mmoja, sehemu sita", bullets: ["Jinsi sola inavyofanya kazi; orodha ya usalama", "Hesabu za mazoezi; hatua za ufungaji", "Njia ya cheti yenye tarehe; sehemu ya CV"] },
            { title: "Tarehe halisi", bullets: ["Lini utaanza mafunzo", "Lini unalenga kufanya mtihani wa NABCEP PV Associate", "Lini utaomba kazi za msaidizi"] },
            { title: "CV: Ujuzi wa sola", bullets: ["Vitone vifupi vinavyoanza na neno la kitendo", "Mambo ya kweli tu unayoweza kufanya", "Ongeza kazi za zamani zenye zana, urefu au kazi ya pamoja"] },
            { title: "Pata msaada", bullets: ["American Job Centers na programu za kurudi katika jamii", "Uliza kuhusu msaada wa mafunzo na waajiri wa eneo lako"] }
          ],
          sources: [{ name: "CareerOneStop: Find an American Job Center (tafuta kituo cha ajira)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Kazi ya mwisho: tengeneza Mpango wako wa Kuanza Sola wa ukurasa mmoja wenye sehemu zote sita. Weka tarehe halisi kando ya kila hatua ya cheti na ya kazi, na anwani ya tovuti kwa kila sharti ulilokagua. Soma vitone vya CV yako kwa sauti kana kwamba uko kwenye usaili.",
          youCanNow: "kumwonyesha mwajiri au programu ya mafunzo mpango ulioandikwa wa kuanza kazi ya sola, wenye tarehe, vyanzo na sehemu ya ujuzi kwa CV.",
          quickCheck: [
            { objective: "O6", q: "Ni kitone kipi bora zaidi cha CV kwa kazi ya msaidizi wa sola?", options: ["\"Mchapakazi.\"", "\"Nimefunzwa hatari za eneo la kazi ya sola: kinga dhidi ya kuanguka, mshtuko, joto na kubeba kwa usalama.\"", "\"Fundi umeme wa sola mwenye leseni.\" (wakati huna leseni)", "\"Ninapenda jua.\""], answer: 1, why: "Ni kweli, ni mahususi na kinaanza na neno la kitendo; usidai kamwe leseni usiyokuwa nayo." },
            { objective: "O6", q: "Nini kinafanya Mpango wa Kuanza Sola kuwa imara zaidi?", options: ["Tarehe lengwa halisi na ukurasa wa chanzo kwa kila sharti", "Bila tarehe, ili ubaki huru", "Kunakili mpango wa rafiki", "Kuacha sehemu ya usalama"], answer: 0, why: "Tarehe na vyanzo rasmi hugeuza ndoto kuwa mpango ambao mwajiri anaweza kuuamini." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutoka juu ya paa hadi kazi yako ya kwanza",
        questions: [
          { objective: "O4", q: "Nani hutoa idhini ya mwisho kuunganisha mfumo na gridi?", options: ["Msaidizi", "Mtengenezaji wa paneli", "Jirani wa mteja", "Kampuni ya umeme (utility)"], answer: 3, why: "Kampuni ya umeme hutoa ruhusa ya kuendesha kabla mfumo haujawashwa." },
          { objective: "O4", q: "Ni hatua ipi inakuja kwanza?", options: ["Kupachika paneli", "Ukaguzi", "Tathmini ya eneo", "Kuwasha mfumo"], answer: 2, why: "Tathmini ya eneo hukagua paa, mwelekeo, kivuli na ubao wa umeme kabla ya kitu kingine chochote." },
          { objective: "O5", q: "Ni njia gani moja ya kustahili mtihani wa NABCEP PV Associate?", options: ["Kumaliza kozi na NABCEP Associate Registered Training Provider", "Kununua paneli ya jua", "Kutazama video moja mtandaoni", "Kufanya kazi siku moja juu ya paa"], answer: 0, why: "Njia ya elimu ni kozi na mtoa mafunzo aliyesajiliwa; njia nyingine ni angalau miezi sita ya kazi ya sola." },
          { objective: "O5", q: "Je, kozi hii inakupa leseni ya sola?", options: ["Ndiyo, baada ya mtihani", "Hapana; inakuandaa, na leseni zinatoka kwa jimbo au jiji lako", "Ndiyo, ukimaliza kwa siku moja", "Katika majimbo yenye jua tu"], answer: 1, why: "Kozi inakuandaa; vyeti vinatoka NABCEP na leseni zinatoka kwa jimbo au jiji." },
          { objective: "O6", q: "Mpango wako unasema \"Fanya mtihani wa PV Associate.\" Unapaswa kuongeza nini?", options: ["Hakuna kitu", "Jina la rafiki", "Tarehe lengwa na ukurasa rasmi uliokagua", "Picha ya paneli"], answer: 2, why: "Tarehe na chanzo hufanya hatua iwe halisi na inayoweza kukaguliwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Ufungaji wa Paneli za Jua",
    questions: [
      { objective: "O1", q: "Paneli za jua hugeuza mwanga wa jua kuwa nini?", options: ["Joto tu", "Umeme wa DC", "Gesi asilia", "Umeme wa AC bila inveta"], answer: 1, why: "Paneli za sola PV hutengeneza umeme wa mkondo mnyoofu (DC)." },
      { objective: "O1", q: "Ni sehemu gani huhesabu umeme ambao nyumba inatumia na inaotuma kwenye gridi?", options: ["Mita", "Racking", "Flashing", "Harness"], answer: 0, why: "Mita hupima umeme unaoingia na unaotoka." },
      { objective: "O1", q: "Mfumo wa nyumbani unaobaki umeunganishwa na nyaya za kampuni ya umeme unaitwa:", options: ["Wa nje ya barabara", "Unaosimama peke yake", "Wa betri tu", "Uliounganishwa na gridi (grid-tied)"], answer: 3, why: "Mifumo iliyounganishwa na gridi imeunganishwa na gridi ya kampuni ya umeme." },
      { objective: "O1", q: "Betri hutumika kwa nini katika baadhi ya nyumba zenye sola?", options: ["Kushikilia paneli juu ya paa", "Kubadilisha AC kuwa DC kwa ajili ya mita", "Kuhifadhi umeme kwa ajili ya baadaye au umeme ukikatika", "Kuchukua nafasi ya inveta"], answer: 2, why: "Betri huhifadhi umeme wa kutumia baadaye, kama usiku au umeme ukikatika." },
      { objective: "O2", q: "Ni hatari gani kubwa zaidi katika kazi ya kufunga sola?", options: ["Kukatwa na karatasi", "Kuanguka kutoka kwenye paa na ngazi", "Muziki wa sauti kubwa", "Mvua juu ya gari"], answer: 1, why: "Kuanguka ndiyo hatari kubwa zaidi kwa mafundi wa sola." },
      { objective: "O2", q: "Ni kifaa gani ni sehemu ya mfumo binafsi wa kuzuia kuanguka?", options: ["Miwani ya usalama", "Buti za kazi", "Harness ya mwili mzima, lanyard na nanga", "Mkanda wa zana"], answer: 2, why: "Harness, lanyard na nanga kwa pamoja hudaka anguko." },
      { objective: "O2", q: "Kuna joto kali na mfanyakazi mwenzako anahisi kizunguzungu. Unafanya nini?", options: ["Unamwambia kiongozi, unampeleka kivulini na kumpa maji", "Unamwambia aendelee kufanya kazi", "Unampandisha ngazi", "Unapuuza hadi wakati wa chakula cha mchana"], answer: 0, why: "Kizunguzungu kinaweza kuwa ugonjwa wa joto: kivuli, maji, kupumzika na kumwambia kiongozi huja kwanza." },
      { objective: "O2", q: "Unapaswa kubeba paneli kubwa ya sola vipi?", options: ["Peke yako, juu ya kichwa", "Kwenye ukingo wa paa wenye upepo", "Kwa kushika nyaya", "Pamoja na mwenzako, ukiinua kwa nguvu ya miguu"], answer: 3, why: "Paneli ni kubwa na hushika upepo, kwa hiyo watu wawili huzibeba wakitumia miguu yao." },
      { objective: "O3", q: "Kwa mazoezi tu: volti 30 x ampea 9 = ?", options: ["39 W", "270 W", "21 W", "2,700 W"], answer: 1, why: "Wati = volti x ampea: 30 x 9 = 270 W." },
      { objective: "O3", q: "Kwa mazoezi tu: paneli 25 za wati 400. Ukubwa wa mfumo ni upi?", options: ["10 kW", "4 kW", "25 kW", "1 kW"], answer: 0, why: "25 x 400 W = 10,000 W = 10 kW." },
      { objective: "O3", q: "Katika string ya mfululizo, nini hutokea kwa volteji?", options: ["Inabaki ileile", "Inashuka hadi sifuri", "Volteji zinajumlishwa", "Inagawanywa nusu"], answer: 2, why: "Katika mfululizo, volteji ya kila paneli inaongezwa kwenye volteji ya string." },
      { objective: "O3", q: "Kilowati 1 ina wati ngapi?", options: ["10", "100", "10,000", "1,000"], answer: 3, why: "Kilo maana yake 1,000, kwa hiyo 1 kW = 1,000 W." },
      { objective: "O4", q: "Ni nini hutokea kabla kazi haijaanza juu ya paa?", options: ["Kibali kutoka kwa jiji au kaunti", "Ukaguzi wa mwisho", "Ruhusa ya kuendesha", "Kuwasha mfumo"], answer: 0, why: "Kibali huidhinishwa kabla ufungaji haujaanza." },
      { objective: "O4", q: "Nani hufanya miunganisho ya umeme katika ufungaji wa sola?", options: ["Msaidizi yeyote mpya", "Mteja", "Fundi umeme mwenye sifa au mfanyakazi mwenye leseni", "Msomaji wa mita wa kampuni ya umeme"], answer: 2, why: "Kazi ya umeme hufanywa na wafanyakazi wenye sifa wakifuata NEC na sheria za eneo." },
      { objective: "O4", q: "Ni hatua gani ya mwisho kabla mfumo haujawashwa?", options: ["Tathmini ya eneo", "Usanifu", "Kupachika racking", "Ruhusa ya kuendesha kutoka kampuni ya umeme"], answer: 3, why: "Idhini ya kampuni ya umeme huja baada ya ukaguzi na kabla ya kuwasha." },
      { objective: "O5", q: "NABCEP hutoa nini?", options: ["Leseni za udereva", "Vyeti vya sola kama PV Associate", "Vibali vya ujenzi", "Bili za umeme"], answer: 1, why: "NABCEP hutoa vyeti vya sola na board certifications." },
      { objective: "O5", q: "Nani huweka sheria za leseni kwa kazi ya sola na ya umeme?", options: ["Kila jimbo, na wakati mwingine jiji", "Mtengenezaji wa paneli", "NABCEP kwa kila jimbo", "Mteja"], answer: 0, why: "Leseni huwekwa na majimbo na wakati mwingine serikali za mitaa." },
      { objective: "O5", q: "Tangazo la mtandaoni linasema utakuwa \"fundi wa sola mwenye leseni kwa siku 2\". Unafanya nini?", options: ["Unalipa mara moja", "Unawashirikisha marafiki", "Unawapa namba yako ya Social Security", "Unakagua dai hilo kwenye kurasa za NABCEP na bodi ya leseni ya jimbo lako"], answer: 3, why: "Kurasa rasmi zinakuambia masharti halisi kabla hujalipa." },
      { objective: "O6", q: "Ni kipi kinafaa kuwa katika Mpango wako wa Kuanza Sola?", options: ["Nywila yako ya benki", "Tarehe lengwa za mafunzo na mtihani wa PV Associate", "Orodha ya nyimbo unazozipenda", "Leseni usiyokuwa nayo"], answer: 1, why: "Tarehe kwa kila hatua hufanya mpango uwe halisi." },
      { objective: "O6", q: "Kitone kizuri cha CV kinapaswa kuwa:", options: ["Kirefu na kisicho wazi", "Kimenakiliwa kutoka kwa mgeni", "Cha kweli, mahususi na kinachoanza na neno la kitendo", "Kuhusu ujuzi unaopanga kujifunza siku moja"], answer: 2, why: "Waajiri huamini vitone vifupi, vya kweli na mahususi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari kuhusu sola?", from: [0, 2, 4, 6, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Jinsi sola inavyofanya kazi", objective: "O1", notYet: "Maelezo yanakosa inveta au yanachanganya AC na DC.", meets: "Anataja paneli, racking, inveta, disconnect, mita na gridi, na anasema kila moja inafanya nini.", exceeds: "Pia anaeleza, kwa maneno yake mwenyewe, kwa nini disconnect ni muhimu kwa usalama wakati wa matengenezo na kwa nini paneli zina umeme kila kunapokuwa na mwanga wa mchana." },
      { name: "Orodha ya usalama", objective: "O2", notYet: "Inakosa kuanguka au mshtuko wa umeme, au haitoi hatua ya usalama.", meets: "Inaorodhesha kuanguka, mshtuko, joto na kubeba, kila moja na hatua sahihi ya usalama (pamoja na kinga dhidi ya kuanguka kuanzia futi 6).", exceeds: "Inaongeza jinsi ya kuweka ngazi na sheria ya kusimamisha kazi, na inasema amwambie nani." },
      { name: "Hesabu za mazoezi", objective: "O3", notYet: "Kosa la hesabu, au hatua hazijaonyeshwa.", meets: "Matatizo yote mawili ni sahihi, kanuni na vipimo vimeonyeshwa.", exceeds: "Pia anakagua kwamba kila jibu lina maana na anabadilisha wati kuwa kW kwa usahihi." },
      { name: "Hatua za ufungaji", objective: "O4", notYet: "Hatua mbili au zaidi ziko nje ya mpangilio, au kibali au ukaguzi haupo.", meets: "Hatua zote 8 kwa mpangilio, zisizozidi moja nje ya mahali pake, na nani anafanya kila moja.", exceeds: "Anaeleza kwa nini flashing na idhini ya kampuni ya umeme ni muhimu." },
      { name: "Njia ya cheti", objective: "O5", notYet: "Hakuna tarehe, au masharti hayana chanzo.", meets: "Anataja NABCEP PV Associate na njia ya kukistahili, pamoja na ukaguzi wa leseni ya jimbo, kila kimoja na tarehe lengwa na anwani ya tovuti.", exceeds: "Anataja mtoa mafunzo aliyesajiliwa au mwajiri mahususi wa eneo lake na mpango mbadala." },
      { name: "Sehemu ya CV", objective: "O6", notYet: "Vitone havieleweki au vinadai leseni au cheti ambacho mwanafunzi hana.", meets: "Vitone vitatu vya kweli vinavyoanza na neno la kitendo na vinavyolingana na kazi ya sola.", exceeds: "Anaunganisha kazi za zamani (ujenzi, jeshi, ghala) na kazi za sola." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiunga na programu ya mafunzo ya sola au uanagenzi ndani ya siku 90",
      "Wanafunzi wanaofaulu mtihani wa NABCEP PV Associate ndani ya miezi 12 (wanavyoripoti wenyewe)",
      "Wanafunzi wanaoajiriwa kama wasaidizi au mafundi wa sola ndani ya miezi 6 (utafiti wa kufuatilia au ripoti ya mshirika)"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu, tableti au kompyuta yenye intaneti ya kusoma masomo na kukagua kurasa rasmi",
      "Karatasi, kalamu na kikokotoo (kikokotoo cha simu kinatosha)",
      "Hiari: picha iliyochapishwa ya mfumo wa sola wa nyumbani ya kuandikia majina ya sehemu",
      "Jumla ya dakika 60 hadi 75, kwa vipindi vifupi"
    ],
    facilitatorNotes: [
      "Hakuna anayepanda paa wala kugusa sehemu za umeme katika kozi hii. Ukionyesha vifaa halisi, viwe havijaunganishwa na umeme, haviko kwenye mwanga na viko ardhini.",
      "Fanyeni jaribio la awali pamoja, kisha sura moja kwa kila kipindi, na fanyeni hesabu za mazoezi kwenye ubao mweupe.",
      "Wanafunzi watafute ukurasa wa leseni wa jimbo lao wenyewe papo hapo; masharti hutofautiana kwa kila jimbo.",
      "Mwalike fundi wa sola wa eneo lako, kituo cha mafunzo cha chama cha wafanyakazi au mtoa mafunzo aliyesajiliwa na NABCEP kuzungumza kuhusu ajira.",
      "Toa alama kwa kazi ya mwisho kwa kutumia rubriki na utoe maoni kwa mstari mmoja wa Bado kwa wakati mmoja.",
      "Kwa wanafunzi wenye rekodi au walio chini ya uangalizi: waelekeze kwenye programu za kurudi katika jamii na za ajira, na uwakumbushe kuwa wakweli kwenye maombi."
    ]
  }
};
