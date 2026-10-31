"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-piloting.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Stick terms keep the English names (throttle, yaw, pitch, roll) in brackets, since drone apps often show them in English.

const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Mifumo ya Ndege Zisizo na Rubani", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_UTO = { name: "KCAA: Taasisi za Mafunzo ya Mifumo ya Ndege Zisizo na Rubani (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_PORTAL = { name: "Mfumo wa mtandaoni wa KCAA wa droni (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Sehemu ya 21, Mifumo ya Ndege Zinazoongozwa kwa Mbali", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-piloting-sw",
  lang: "sw",
  translationOf: "agri-drones-piloting",
  category: "Agriculture (Africa)",
  name: "Droni kwa Ufuatiliaji wa Kilimo 6: Kozi ya Mtandaoni ya Kurusha Droni",
  skills: "Kutumia vijiti vya kuongozea, Kufanya mazoezi ya urukaji kwenye simulator, Kuchagua na kubadilisha hali za urukaji, Kushughulikia dharura (mawasiliano kukatika, betri kuisha, GPS kupotea), Kuweka kitabu cha kumbukumbu za urukaji, Kupanga njia yako hadi leseni ya rubani wa droni",
  outcome: "kurusha kwa ulaini mfululizo wa mazoezi ya kawaida kwenye simulator ya droni, kushughulikia dharura kuu kwa utulivu, kuweka kitabu sahihi cha kumbukumbu za urukaji, na kufuata mpango wako binafsi ulio wazi wa kupata leseni ya rubani wa droni kutoka mamlaka ya usafiri wa anga ya nchi yako.",
  about: [
    "Hii ni kozi ya mwisho ya mfululizo wa ufuatiliaji kwa droni, kwa yeyote aliye Kenya, Nigeria au mahali pengine Afrika anayetaka kuwa rubani hodari wa droni za kilimo mwenye leseni. Imeundwa ifanywe mtandaoni: mazoezi mengi yanafanyika kwenye simulator ya droni (programu inayoiga urukaji) ya bure au ya bei nafuu kwenye kompyuta au simu, ili ukosee bila kuangusha droni halisi wala kuvunja sheria yoyote.",
    "Sura ya 1 inafundisha vidhibiti, mazoezi ya urukaji, na hali za urukaji ambazo droni yako inaweza kuwa nazo. Sura ya 2 inafundisha hatua za dharura, jinsi ya kuweka kitabu cha kumbukumbu, na hatua za kupata leseni ya rubani wa droni.",
    "Muhimu: kozi hii haikupi leseni na haikuruhusu kurusha droni. Nchini Kenya na Nigeria, kama katika nchi nyingi, leseni ya rubani wa droni inatolewa na mamlaka ya usafiri wa anga baada ya mafunzo katika taasisi iliyoidhinishwa na kufaulu majaribio yake. Usirushe kamwe droni halisi bila usajili, leseni na vibali ambavyo nchi yako inataka."
  ],
  finalTask: "Kwenye simulator ya droni, maliza mazoezi matano ya kozi hii (kuelea, boksi, namba nane, kuzunguka, na mistari ya mashine ya kukata nyasi) hadi uweze kurusha kila moja kwa ulaini mara tatu mfululizo, fanya mazoezi matatu ya dharura, andika kila kipindi katika kitabu cha kumbukumbu, na andika mpango wako binafsi wa leseni wa ukurasa mmoja: mamlaka ya nchi yako, taasisi za mafunzo zilizoidhinishwa ulizopata, leseni unayohitaji, hatua, nyaraka, gharama inayokadiriwa kutoka vyanzo rasmi, na tarehe unazolenga.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Yeyote aliye Kenya, Nigeria au mahali pengine Afrika anayetaka kuwa rubani hodari wa droni za kilimo mwenye leseni, akisoma mtandaoni kozi ya mwisho ya mfululizo wa ufuatiliaji kwa droni.",
    startingPoint: "Wanafunzi wanajua droni zinafanya nini mashambani, sheria za msingi na jinsi upigaji ramani unavyofanya kazi (Kozi 1 hadi 5). Wengi hawajashika vijiti vya kuongozea au wameshika kidogo tu, hawajawahi kufanya mazoezi ya dharura, hawana kitabu cha kumbukumbu za urukaji, na hawajui hatua, nyaraka na shule zilizoidhinishwa za leseni ya rubani wa droni.",
    gap: "Marubani wapya huangusha droni wanapotaharuki wakati wa dharura, GPS ikipotea au wakirusha droni ikiwaelekea (nose-in), na wengine hulipa shule zisizoidhinishwa au kurusha bila leseni. Kufanya mazoezi ya urukaji na ya dharura kwenye simulator, kuweka kitabu cha kumbukumbu na kufuata mpango ulio wazi wa leseni kunawasaidia wanafunzi kufika kwenye mafunzo yaliyoidhinishwa wakiwa tayari kujifunza haraka na kurusha kwa mujibu wa sheria.",
    constraints: [
      "Vifaa: kompyuta au simu inayoweza kuendesha simulator ya droni ya bure au ya bei nafuu; kidhibiti (controller) kinasaidia",
      "Kozi hii haitoi leseni wala ruhusa ya kurusha; leseni zinatoka mamlaka ya usafiri wa anga baada ya mafunzo yaliyoidhinishwa na majaribio",
      "Usirushe kamwe droni halisi bila usajili, leseni na vibali ambavyo nchi inataka",
      "Muda: vipindi vifupi vya mazoezi kila siku vya dakika 15 hadi 20",
      "Ada na hatua hubadilika: wanafunzi wanakagua kurasa rasmi za mamlaka"
    ],
    prerequisites: "\"Droni kwa Ufuatiliaji wa Kilimo 1: Utangulizi, Sheria na Usalama\"; Kozi 2 hadi 5 zinasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia kidhibiti cha droni au simulator", action: "kutaja kazi ya kila mwendo wa kijiti na kusoma vitu vikuu kwenye skrini ya urukaji", standard: "na kupata vitufe vya kurudi nyumbani na vya kusimamisha bila kuangalia" },
    { id: "O2", condition: "Kwenye simulator ya droni", action: "kurusha mazoezi ya kuelea, boksi, namba nane, kuzunguka na mashine ya kukata nyasi, na kuandika kila kipindi katika kitabu cha kumbukumbu", standard: "ukirusha kila zoezi kwa ulaini mara tatu mfululizo" },
    { id: "O3", condition: "GPS ikiwa na nguvu au dhaifu", action: "kueleza hali kuu za urukaji na kurusha kwa utulivu droni inapoingia hali ya attitude", standard: "ukiiona droni muda wote na kuitua salama" },
    { id: "O4", condition: "Katika mazoezi ya mawasiliano kukatika, betri kuisha au GPS kupotea", action: "kufuata hatua sahihi za dharura", standard: "kwa utulivu na kwa mpangilio sahihi, kisha kuandika tukio hilo" },
    { id: "O5", condition: "Kwa nchi yako", action: "kuandika mpango binafsi wa kupata leseni ya rubani wa droni", standard: "wenye mamlaka, shule zilizoidhinishwa, hatua, nyaraka, gharama kutoka vyanzo rasmi na tarehe unazolenga" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujifunza kurusha",
      lessons: [
        {
          objectives: ["O1"],
          title: "Vidhibiti: vijiti, vitufe na skrini",
          minutes: 5,
          goal: "Taja kazi ya kila mwendo wa kijiti na soma vitu vikuu kwenye skrini ya urukaji.",
          text: [
            "Vidhibiti vingi vya droni vina vijiti viwili. Katika Mode 2, mpangilio unaotumika zaidi, kijiti cha kushoto kinaongoza kimo (throttle: juu kupanda, chini kushuka) na kugeuka papo hapo (yaw: kushoto na kulia). Kijiti cha kulia kinasogeza droni mbele na nyuma (pitch) na kando (roll). Baadhi ya marubani hutumia mipangilio mingine; angalia yako katika mipangilio ya app.",
            "Mwendo mdogo na laini wa vijiti unaleta urukaji laini. Wanaoanza husukuma mbali sana na kwa haraka sana. Jizoeze kusogeza vijiti taratibu, kisha uviachie virudi katikati, ambapo droni nyingi hubaki mahali pake.",
            "Skrini ya urukaji inaonyesha kiwango cha betri, nguvu ya mawasiliano, satelaiti za GPS, kimo, umbali kutoka nyumbani (mahali ilipopaa) na picha ya kamera. Jifunze kuitazama kwa haraka, kisha urudishe macho kwenye droni. Jua vilipo vitufe vya kurudi nyumbani na vya kusimamisha (pause au brake) bila kuangalia."
          ],
          words: [["Throttle", "mwendo wa juu na chini (kupanda au kushuka)."], ["Yaw", "kugeuza droni kushoto au kulia papo hapo."], ["Pitch", "kusogea mbele au nyuma."], ["Roll", "kusogea kando, kushoto au kulia."], ["Mode 2", "mpangilio wa vijiti unaotumika zaidi: kijiti cha kushoto ni throttle na yaw, cha kulia ni pitch na roll."]],
          slides: [
            { title: "Vijiti vya Mode 2", bullets: ["Kijiti cha kushoto: juu/chini (throttle), kugeuka (yaw)", "Kijiti cha kulia: mbele/nyuma (pitch), kando (roll)", "Angalia mpangilio wako katika app"] },
            { title: "Mikono laini", bullets: ["Mwendo mdogo na laini", "Acha vijiti virudi katikati", "Droni nyingi kisha hubaki mahali pake"] },
            { title: "Skrini ya urukaji", bullets: ["Betri, mawasiliano, satelaiti za GPS", "Kimo, umbali kutoka nyumbani, picha ya kamera", "Tazama haraka, kisha rudisha macho kwenye droni"] },
            { title: "Jua vitufe vyako", bullets: ["Kurudi nyumbani (return-to-home)", "Kusimamisha (pause au brake)", "Vipate bila kuangalia"] }
          ],
          tryIt: "Sakinisha simulator ya droni kwenye kompyuta au simu (tafuta \"drone flight simulator\" katika duka la apps au kwenye kompyuta; baadhi ya watengenezaji wa droni wanatoa simulator ndani ya app yao). Tafuta mpangilio wa vijiti, chagua Mode 2, na usogeze kila kijiti taratibu kuona kinachofanya.",
          youCanNow: "kusema kazi ya kila kijiti katika Mode 2, kusoma skrini ya urukaji, na kupata vitufe vya dharura.",
          quickCheck: [
            { objective: "O1", q: "Pitch ni nini?", options: ["Kugeuka papo hapo", "Kusogeza droni mbele na nyuma", "Kupanda", "Kurudi nyumbani"], answer: 1, why: "Pitch inasogeza droni mbele na nyuma; katika Mode 2 iko kwenye kijiti cha kulia." },
            { objective: "O1", q: "Droni yako inaelea kuelekea mti na lazima uisimamishe haraka. Unapaswa kuwa unajua nini tayari?", options: ["Bei ya droni", "Namba ya simu ya mkulima", "Jinsi ya kubadilisha rangi ya kamera", "Kilipo kitufe cha kusimamisha (pause au brake), bila kuangalia"], answer: 3, why: "Marubani hujifunza vilipo vitufe vya kusimamisha na vya kurudi nyumbani ili waweze kutenda bila kuangalia." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mazoezi ya urukaji kwenye simulator",
          minutes: 6,
          goal: "Rusha mazoezi matano ya kawaida kwa ulaini kwenye simulator.",
          text: [
            "Marubani wazuri hujenga ujuzi kwa kurudia mazoezi yale yale mara nyingi. Fanya kila zoezi hadi uweze kulirusha kwa ulaini mara tatu mfululizo, kisha uendelee. Vipindi vifupi vya kila siku vya dakika 15 hadi 20 ni bora kuliko kipindi kimoja kirefu kwa wiki.",
            "Zoezi 1, kuelea: paa hadi kimo cha macho na uishikilie droni bila kusogea kwa dakika moja. Zoezi 2, boksi: rusha mraba huku pua ya droni ikitazama mbele muda wote, kisha tena huku pua ikigeuka kila kona. Zoezi 3, namba nane: rusha namba nane laini. Zoezi 4, kuzunguka (orbit): zunguka kitu (kama mti) huku kamera ikikitazama. Zoezi 5, mashine ya kukata nyasi: rusha mistari iliyonyooka inayolingana kuvuka shamba, kama safari ya kupiga ramani, kwa mkono.",
            "Pia jizoeze droni ikikutazama (nose-in), ambapo kushoto na kulia vinahisi kama vimegeuzwa. Hapa ndipo wanaoanza wengi huangusha droni. Baada ya kila kipindi, andika kilichoenda vizuri na cha kuboresha."
          ],
          steps: ["Elea kwenye kimo cha macho kwa dakika moja.", "Boksi: pua mbele, kisha pua ikigeuka kila kona.", "Namba nane, laini na kwa kimo kimoja.", "Zunguka mti huku kamera ikiutazama.", "Mistari ya mashine ya kukata nyasi kuvuka shamba.", "Rudia kila zoezi droni ikikutazama (nose-in)."],
          words: [["Zoezi", "kazi fupi inayorudiwa ili kujenga ujuzi."], ["Nose-in", "kurusha droni huku mbele yake ikikutazama, kwa hiyo vidhibiti vinahisi kama vimegeuzwa."], ["Kuzunguka (orbit)", "kurusha kwa duara kuzunguka kitu kimoja."]],
          slides: [
            { title: "Jinsi ya kufanya mazoezi", bullets: ["Mazoezi yale yale, mara nyingi", "Mara tatu laini mfululizo, kisha endelea", "Dakika 15-20 kila siku ni bora kuliko kipindi kimoja kirefu"] },
            { title: "Mazoezi matano", bullets: ["1 Kuelea  2 Boksi  3 Namba nane", "4 Kuzunguka mti  5 Mistari ya mashine ya kukata nyasi"] },
            { title: "Gumu zaidi: droni ikikutazama (nose-in)", bullets: ["Kushoto na kulia vinahisi kama vimegeuzwa", "Hapa ndipo wanaoanza wengi huangusha droni", "Fanya kila zoezi pia droni ikikutazama"] }
          ],
          tryIt: "Kwenye simulator yako, rusha zoezi 1 na 2 leo. Andika katika daftari: tarehe, dakika, mazoezi gani, mara ngapi laini, jambo moja la kuboresha.",
          youCanNow: "kufanya mazoezi matano ya kawaida kwenye simulator na kufuatilia maendeleo yako.",
          quickCheck: [
            { objective: "O2", q: "Zoezi la boksi ni lipi?", options: ["Kurusha mraba, kwanza pua ikitazama mbele, kisha ikigeuka kila kona", "Kuelea mahali pamoja", "Kuzunguka mti", "Kurusha kwa umbo la namba nane"], answer: 0, why: "Zoezi la boksi ni kurusha mraba pua ikitazama mbele, kisha pua ikigeuka kila kona." },
            { objective: "O2", q: "Umerusha zoezi la kuelea kwa ulaini mara moja. Unafanya nini baadaye?", options: ["Kwenda moja kwa moja kurusha droni halisi", "Kuacha kufanya zoezi la kuelea milele", "Kuendelea kulifanya hadi liwe laini mara tatu mfululizo, kisha kuendelea", "Kuruka hadi zoezi gumu zaidi"], answer: 2, why: "Fanya kila zoezi hadi uweze kulirusha kwa ulaini mara tatu mfululizo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hali za urukaji na wakati wa kuzitumia",
          minutes: 5,
          goal: "Eleza hali kuu za urukaji na ubadilishe kwa usalama GPS ikiwa dhaifu.",
          text: [
            "Droni nyingi zenye kamera huruka katika hali ya positioning au GPS. Droni inatumia satelaiti na vihisi kubaki mahali pake unapoachia vijiti, jambo linalofanya urukaji uwe rahisi na kuwezesha kurudi nyumbani na kupiga ramani kiotomatiki.",
            "Baadhi ya droni pia zina hali ya attitude (baadhi ya chapa huiita ATTI). Droni inabaki kwenye kimo chake lakini haibaki mahali pake, kwa hiyo inasukumwa na upepo kama mashua mtoni. Droni inaweza kuingia hali hii yenyewe GPS ikiwa dhaifu, kwa mfano karibu na majengo marefu ya chuma, chini ya miti minene, au katika bonde lenye kina. Marubani walioifanyia mazoezi hubaki watulivu; ambao hawajaifanyia mara nyingi huangusha droni.",
            "Hali nyingine ni pamoja na sport (kasi zaidi, ulinzi mdogo), tripod au cine (polepole na laini kwa kurekodi video), na safari za kiotomatiki. Simulator nyingi zinakuruhusu kurusha bila msaada wa GPS. Ifanyie mazoezi ili kusukumwa na upepo kusikushtue."
          ],
          words: [["Hali ya GPS", "hali ya urukaji ambapo droni inatumia satelaiti kubaki mahali pake."], ["Hali ya attitude (ATTI)", "hali ambapo droni inabaki kwenye kimo lakini inasukumwa na upepo."], ["Kusukumwa (drift)", "droni kuondoka mahali pake yenyewe, kwa kawaida ikisukumwa na upepo."]],
          slides: [
            { title: "Hali ya GPS / positioning", bullets: ["Inabaki mahali pake unapoachia vijiti", "Inawezesha kurudi nyumbani na kupiga ramani", "Hali ya kawaida kwa kazi za shambani"] },
            { title: "Hali ya attitude (ATTI)", bullets: ["Inabaki kwenye kimo, si mahali pake", "Inasukumwa na upepo", "Inaweza kuwaka yenyewe GPS ikiwa dhaifu"] },
            { title: "Hali nyingine", bullets: ["Sport: kasi, ulinzi mdogo", "Tripod / cine: polepole na laini", "Jizoeze kurusha bila msaada wa GPS"] }
          ],
          tryIt: "Kwenye simulator yako, zima msaada wa GPS au chagua hali ya attitude, ongeza upepo kidogo, na ushikilie droni ikielea kwa sekunde 30 ukirekebisha inaposukumwa. Kisha rusha zoezi la boksi katika hali hii.",
          youCanNow: "kueleza hali kuu za urukaji na kuendelea kuiongoza droni inaposukumwa bila GPS.",
          quickCheck: [
            { objective: "O3", q: "Hali ya tripod au cine inafanya nini?", options: ["Inaruka kwa kasi kubwa iwezekanavyo", "Inazima mota", "Inapiga ramani kiotomatiki", "Inaruka polepole na kwa ulaini kwa kurekodi video"], answer: 3, why: "Hali ya tripod au cine ni ya polepole na laini, kwa kurekodi video." },
            { objective: "O3", q: "Utapiga ramani ya shamba lililo karibu na ghala refu la chuma la nafaka. Unajiandaa kwa nini?", options: ["Hakuna; GPS inafanya kazi kila wakati", "Droni kuingia hali ya attitude na kusukumwa, kwa hiyo unajizoeza kurusha bila msaada wa GPS", "Kurusha katika hali ya sport", "Kurusha droni ikikutazama tu"], answer: 1, why: "Karibu na majengo marefu ya chuma GPS inaweza kuwa dhaifu, na droni inaweza kusukumwa ikiwa katika hali ya attitude." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujifunza kurusha",
        questions: [
          { objective: "O1", q: "Katika Mode 2, kusukuma kijiti cha kushoto juu kunafanya nini?", options: ["Kusogea mbele", "Kugeuka kulia", "Kupanda", "Kusogea kando"], answer: 2, why: "Kijiti cha kushoto kinaongoza throttle (kimo) na yaw katika Mode 2." },
          { objective: "O1", q: "Yaw ni nini?", options: ["Kugeuza droni kushoto au kulia papo hapo", "Kupanda", "Kutua", "Kupiga picha"], answer: 0, why: "Yaw inazungusha droni kuzunguka katikati yake." },
          { objective: "O2", q: "Mpango upi wa mazoezi unajenga ujuzi vizuri zaidi?", options: ["Kipindi kimoja cha saa tatu kwa mwezi", "Vipindi vifupi kila siku vya mazoezi yale yale", "Kutazama video tu", "Kurusha droni halisi bila mafunzo"], answer: 1, why: "Kurudia kwa muda mfupi na mara kwa mara kunajenga uongozaji laini." },
          { objective: "O2", q: "Kwa nini ujizoeze kurusha droni ikikutazama (nose-in)?", options: ["Ni kasi zaidi", "Inaokoa betri", "Simulator zinadai hivyo", "Vidhibiti vinahisi kama vimegeuzwa, na wanaoanza wengi huangusha droni hapo"], answer: 3, why: "Kulifanyia mazoezi kunakuzoesha hisia hiyo ya kugeuzwa." },
          { objective: "O3", q: "Katika hali ya attitude (ATTI) droni:", options: ["Inabaki kwenye kimo lakini inasukumwa na upepo", "Inatua yenyewe", "Inabaki mahali pake kikamilifu", "Haiwezi kusogea"], answer: 0, why: "Bila GPS kuiweka mahali pake, inabaki kwenye kimo lakini si mahali pake." }
        ]
      }
    },
    {
      name: "Sura 2: Kuwa rubani mwenye leseni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Mazoezi ya dharura: mawasiliano kukatika, betri kuisha, GPS kupotea",
          minutes: 6,
          goal: "Fuata hatua sahihi katika dharura tatu za kawaida.",
          text: [
            "Dharura hutokea mara chache lakini kwa haraka. Marubani huzishughulikia vizuri kwa sababu wamefanya mazoezi ya hatua hadi zikawa za kawaida kabisa. Kabla ya kila safari halisi, hakikisha kimo cha kurudi nyumbani na kitendo cha droni mawasiliano yakikatika vimewekwa sawa.",
            "Mawasiliano kukatika (kidhibiti kinapoteza mawasiliano): tulia, elekeza antena za kidhibiti kwenye droni, hamia mahali pa juu kama ni salama. Droni nyingi huanza kurudi nyumbani baada ya sekunde chache; tazama angani na uwe tayari kuiongoza mawasiliano yakirudi. Betri kuisha: acha kazi na urushe droni moja kwa moja nyumbani, au itue mahali salama palipo karibu; usijaribu kamwe kumaliza mstari mmoja zaidi.",
            "GPS kupotea au droni kusukumwa ghafla: badili akili yako kwenye urukaji wa attitude, endelea kuiona droni, irudishe kwako taratibu ukipambana na upepo, na uitue mara tu inapokuwa salama. Baada ya dharura yoyote au ajali, fanya eneo liwe salama, kagua uharibifu, liandike katika kitabu cha kumbukumbu, na uripoti kwa mamlaka kama sheria zako zinataka."
          ],
          steps: ["Mawasiliano kukatika: tulia, elekeza antena, hamia juu kama ni salama, tazama kurudi nyumbani.", "Betri kuisha: acha kazi, rusha nyumbani au tua mahali salama palipo karibu.", "GPS kupotea: rusha taratibu kwa mkono, dhidi ya upepo, tua mapema.", "Baada ya tukio lolote: fanya pawe salama, kagua uharibifu, liandike, ripoti kama inatakiwa."],
          words: [["Mawasiliano kukatika (lost link)", "droni na kidhibiti kupoteza muunganisho wao wa redio."], ["Fly-away", "droni inaporuka mbali nje ya uongozi wa rubani."], ["Tukio", "jambo lisilopangwa lililosababisha, au lingeweza kusababisha, madhara au uharibifu."]],
          slides: [
            { title: "Jizoeze hadi iwe kawaida", bullets: ["Dharura ni nadra lakini za haraka", "Kwanza kagua kimo cha RTH na kitendo mawasiliano yakikatika"] },
            { title: "Mawasiliano kukatika", bullets: ["Tulia, elekeza antena", "Hamia juu kama ni salama", "Tazama kurudi nyumbani (RTH)"] },
            { title: "Betri kuisha na GPS kupotea", bullets: ["Betri kuisha: acha, rudi nyumbani au tua sasa", "GPS kupotea: rusha kwa mkono, dhidi ya upepo, tua mapema"] },
            { title: "Baada ya tukio lolote", bullets: ["Fanya eneo liwe salama", "Kagua uharibifu, liandike", "Ripoti kama sheria zako zinataka"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Kwenye simulator yako, fanya mazoezi ya kila dharura: weka onyo la betri kuisha na urushe nyumbani, zima GPS katikati ya safari na utue kwa mkono, na (kama simulator inaruhusu) sababisha mawasiliano kukatika na utazame droni ikirudi nyumbani. Baadaye andika hatua kutoka kichwani.",
          youCanNow: "kufuata hatua sahihi mawasiliano yakikatika, betri ikiisha na GPS ikipotea.",
          quickCheck: [
            { objective: "O4", q: "Kabla ya kila safari halisi, unakagua nini ili kujiandaa mawasiliano yakikatika?", options: ["Mpangilio wa rangi wa kamera", "Anwani ya mkulima", "Kwamba kimo cha kurudi nyumbani na kitendo mawasiliano yakikatika vimewekwa sawa", "Ukurasa wa mwisho wa kitabu cha kumbukumbu"], answer: 2, why: "Kimo sahihi cha kurudi nyumbani na kitendo sahihi mawasiliano yakikatika huiwezesha droni kurudi salama." },
            { objective: "O4", q: "Baada ya kutua kwa nguvu na droni halisi, inaonekana iko sawa. Unafanya nini?", options: ["Kuikagua kama ina uharibifu na kuandika katika kitabu cha kumbukumbu", "Kuirusha tena mara moja bila kukagua", "Kusahau jambo hilo", "Kumficha mwalimu wako"], answer: 0, why: "Baada ya dharura yoyote au ajali, kagua uharibifu na uandike; ripoti kama sheria zinataka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuweka kitabu cha kumbukumbu za urukaji",
          minutes: 4,
          goal: "Andika kila safari ya simulator na ya droni halisi katika kitabu cha kumbukumbu.",
          text: [
            "Kitabu cha kumbukumbu (log book) ni rekodi yako ya urukaji. Taasisi za mafunzo na mamlaka za usafiri wa anga hutumia kumbukumbu za urukaji kukagua uzoefu, na waajiri na wateja huwaamini marubani wanaoziweka. Weka muda wa simulator na muda wa urukaji halisi katika safu tofauti.",
            "Kwa kila kipindi andika: tarehe, mahali (au simulator), jina la droni au simulator, jumla ya dakika, aina ya urukaji (mazoezi, kupiga ramani, ukaguzi), hali ya hewa (upepo, mwanga), matatizo au matukio yoyote, na ulichojifunza. Kwa safari halisi pia andika namba ya usajili wa droni na kibali chochote ulichotumia.",
            "Tumia daftari, spreadsheet (jedwali la kompyuta) au app ya kumbukumbu, lakini iandike kila mara na uweke nakala ya akiba. Uliza taasisi yako ya mafunzo inakubali muundo gani kwa maombi ya leseni."
          ],
          steps: ["Chagua daftari, spreadsheet au app, na uweke nakala ya akiba.", "Safu tofauti kwa simulator na kwa safari halisi.", "Andika tarehe, mahali, droni, dakika, aina, hali ya hewa, matatizo, mafunzo.", "Kwa safari halisi, ongeza usajili na kibali ulichotumia.", "Uliza taasisi yako ya mafunzo inakubali muundo gani."],
          words: [["Kitabu cha kumbukumbu (log book)", "rekodi ya kila safari ambayo rubani anarusha."], ["Muda wa urukaji", "dakika au saa ambazo rubani ametumia kurusha."]],
          slides: [
            { title: "Kwa nini kuweka kumbukumbu", bullets: ["Inathibitisha uzoefu wako", "Inatumiwa na taasisi za mafunzo na mamlaka", "Inajenga imani kwa wateja"] },
            { title: "Cha kuandika", bullets: ["Tarehe, mahali, droni au simulator", "Dakika, aina ya urukaji, hali ya hewa", "Matatizo, matukio, mafunzo"] },
            { title: "Kiweke vizuri", bullets: ["Kila kipindi, na nakala ya akiba", "Muda wa simulator na wa safari halisi tofauti", "Tumia muundo ambao mkufunzi wako anakubali"] }
          ],
          tryIt: "Anza kitabu chako cha kumbukumbu sasa kama spreadsheet yenye safu za somo hili, na uingize kila kipindi cha simulator ulichofanya katika kozi hii hadi sasa.",
          youCanNow: "kuweka kitabu kamili cha kumbukumbu za urukaji kwa simulator na kwa safari halisi.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini taasisi za mafunzo na mamlaka hutazama kumbukumbu za urukaji?", options: ["Kuweka bei ya droni", "Kukagua uzoefu wa rubani", "Kuchagua hali ya hewa", "Kubadilisha mpangilio wa vijiti"], answer: 1, why: "Kumbukumbu za urukaji zinaonyesha uzoefu wa rubani kwa shule, mamlaka, waajiri na wateja." },
            { objective: "O2", q: "Leo umerusha droni halisi chini ya kibali. Unaongeza nini katika kumbukumbu?", options: ["Hakuna zaidi ya tarehe", "Hali ya hewa ya wiki ijayo", "Taarifa zako za benki", "Namba ya usajili wa droni na kibali ulichotumia"], answer: 3, why: "Kwa safari halisi, pia andika usajili wa droni na kibali chochote ulichotumia." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Njia yako hadi leseni ya rubani wa droni",
          minutes: 6,
          goal: "Andika mpango binafsi wa kupata leseni ya rubani wa droni katika nchi yako.",
          text: [
            "Kila nchi inaamua jinsi marubani wa droni wanavyopewa leseni. Nchini Kenya, KCAA inaidhinisha Taasisi za Mafunzo ya Mifumo ya Ndege Zisizo na Rubani (UTO) na kuziorodhesha kwenye tovuti yake; orodha yake ya ada inajumuisha leseni ya mwanafunzi rubani wa droni, leseni ya rubani wa droni (RPL) na vibali vya ziada (ratings) kama kurusha nje ya upeo wa macho. Maombi yanapitia mfumo wa mtandaoni wa KCAA wa droni. Nchini Nigeria, Sehemu ya 21 ya NCAA inaeleza utoaji wa leseni za marubani wa droni na masharti mengine ya RPAS. Nchi nyingine zina sheria zao.",
            "Njia ya kawaida: chagua taasisi ya mafunzo iliyoidhinishwa; soma nadharia (sheria za anga, anga na ramani, hali ya hewa, droni yenyewe, mambo ya kibinadamu, hatua za dharura); chukua masomo ya urukaji na jaribio la vitendo; timiza masharti ya mamlaka; omba leseni; na uifanye iendelee kuwa halali kwa kuihuisha inavyotakiwa.",
            "Kagua kila hatua, nyaraka na ada kwenye kurasa rasmi za mamlaka au kwa kuipigia simu, na uhakikishe shule iko kwenye orodha ya mamlaka ya walioidhinishwa kabla hujalipa. Kumbukumbu zako za simulator zinaonyesha uko tayari kujifunza haraka, lakini hazichukui nafasi ya mafunzo yaliyoidhinishwa."
          ],
          steps: ["Tafuta kurasa za droni za mamlaka yako ya usafiri wa anga.", "Tafuta orodha yake ya taasisi za mafunzo zilizoidhinishwa; chagua mbili za kuwasiliana nazo.", "Uliza kila moja: urefu wa kozi, maudhui ya nadharia na vitendo, gharama, jaribio, nyaraka zinazohitajika.", "Kagua ada ya leseni kwenye orodha rasmi ya ada.", "Andika tarehe unazolenga za mafunzo, jaribio na maombi."],
          words: [["Taasisi ya mafunzo iliyoidhinishwa", "shule ya droni iliyoidhinishwa na mamlaka ya usafiri wa anga kufundisha marubani kwa ajili ya leseni (KCAA inaziita UTO)."], ["Kibali cha ziada (rating)", "ruhusa ya ziada kwenye leseni kwa aina fulani ya urukaji, kama kurusha nje ya upeo wa macho."], ["Sheria za anga", "sheria kuhusu urukaji na anga."]],
          slides: [
            { title: "Kila nchi inatoa leseni kwa marubani wake", bullets: ["Kenya: KCAA inaidhinisha UTO; RPL kupitia mfumo wa mtandaoni", "Nigeria: Sehemu ya 21 ya NCAA inahusu leseni za marubani wa droni", "Nchi nyingine: mamlaka yao wenyewe"] },
            { title: "Njia ya kawaida", bullets: ["Shule iliyoidhinishwa", "Nadharia: sheria za anga, anga, hali ya hewa, droni", "Mafunzo ya vitendo na jaribio", "Omba, kisha huisha"] },
            { title: "Kagua kabla hujalipa", bullets: ["Shule iko kwenye orodha ya mamlaka ya walioidhinishwa?", "Ada kutoka orodha rasmi ya ada", "Muda wa simulator unasaidia, lakini si leseni"] }
          ],
          sources: [KCAA_UTO, KCAA_PORTAL, KCAA_UAS, NCAA_P21],
          tryIt: "Kazi ya mwisho: maliza mazoezi matano na mazoezi matatu ya dharura kwenye simulator yako, andika kila kipindi katika kitabu chako cha kumbukumbu, na uandike mpango wako wa leseni wa ukurasa mmoja: mamlaka, shule zilizoidhinishwa ulizopata, leseni unayohitaji, hatua, nyaraka, gharama kutoka vyanzo rasmi, na tarehe unazolenga.",
          youCanNow: "kurusha mazoezi ya kawaida na hatua za dharura kwenye simulator, kuweka kitabu cha kumbukumbu, na kufuata mpango ulio wazi hadi leseni rasmi ya rubani wa droni.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni hatua ya kawaida kwenye njia ya kupata leseni ya rubani wa droni?", options: ["Mafunzo katika taasisi iliyoidhinishwa, kisha jaribio la vitendo", "Kununua droni kubwa zaidi", "Kumaliza kozi ya mtandaoni tu", "Kumrushia mteja droni kwanza"], answer: 0, why: "Njia ya kawaida ni mafunzo yaliyoidhinishwa, nadharia, masomo ya urukaji na jaribio, kisha maombi ya leseni." },
            { objective: "O5", q: "Tovuti inatoa leseni ya rubani wa droni mtandaoni kwa siku moja bila jaribio, kwa malipo. Unafanya nini?", options: ["Kulipa haraka kabla ofa haijaisha", "Kulipa nusu sasa", "Kukagua kurasa rasmi za mamlaka na orodha ya walioidhinishwa kabla ya kulipa chochote", "Kuwashirikisha marafiki"], answer: 2, why: "Leseni zinatoka mamlaka ya usafiri wa anga; hakikisha shule iko kwenye orodha yake ya walioidhinishwa kabla hujalipa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuwa rubani mwenye leseni",
        questions: [
          { objective: "O4", q: "Kidhibiti kinapoteza mawasiliano na droni. Hatua nzuri ya kwanza ni:", options: ["Kuzima kidhibiti", "Kuikimbiza droni", "Kutulia, kuelekeza antena kwenye droni na kutazama kama inarudi nyumbani", "Kuzima mota za droni"], answer: 2, why: "Droni nyingi hurudi nyumbani mawasiliano yakikatika; kuelekeza antena vizuri kunaweza kuyarudisha." },
          { objective: "O4", q: "Onyo la betri kuisha linalia ukiwa umebakiza mstari mmoja wa kupiga ramani. Unapaswa:", options: ["Kurusha mstari wa mwisho haraka", "Kuacha kazi na kurudi nyumbani au kutua salama", "Kupanda juu zaidi", "Kulipuuza"], answer: 1, why: "Usiilazimishe kamwe betri iliyoisha; tua salama na umalize baadaye." },
          { objective: "O2", q: "Kitabu cha kumbukumbu za urukaji kinapaswa kuandika nini?", options: ["Tarehe, mahali, droni, dakika, aina, hali ya hewa, matatizo, mafunzo", "Ajali tu", "Bei ya droni tu", "Hakuna; si lazima"], answer: 0, why: "Kumbukumbu kamili zinathibitisha uzoefu na kuonyesha mwenendo." },
          { objective: "O5", q: "Je, kumaliza kozi hii ya mtandaoni kunakupa leseni?", options: ["Ndiyo, mara moja", "Ndiyo, baada ya mtihani", "Nchini Nigeria tu", "Hapana; leseni zinatoka mamlaka ya usafiri wa anga baada ya mafunzo yaliyoidhinishwa na majaribio"], answer: 3, why: "Ni mamlaka ya kitaifa pekee inayotoa leseni za marubani wa droni." },
          { objective: "O5", q: "Kabla ya kulipa shule ya droni, unapaswa:", options: ["Kuhakikisha iko kwenye orodha ya mamlaka ya usafiri wa anga ya walioidhinishwa", "Kuamini tangazo lake", "Kumuuliza rafiki tu", "Kulipa pesa taslimu ili kuokoa muda"], answer: 0, why: "Ni mafunzo yaliyoidhinishwa pekee yanayohesabiwa kwa leseni." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni kwa Ufuatiliaji wa Kilimo 6: Kozi ya Mtandaoni ya Kurusha Droni",
    questions: [
      { objective: "O1", q: "Katika Mode 2, kijiti cha kulia kinaongoza:", options: ["Kimo na kugeuka", "Mbele/nyuma na kando", "Kukuza picha ya kamera", "Kurudi nyumbani"], answer: 1, why: "Kijiti cha kulia kinaongoza pitch na roll katika Mode 2." },
      { objective: "O1", q: "Throttle inaongoza:", options: ["Kugeuka", "Mwendo wa kando", "Kupanda na kushuka", "Kamera"], answer: 2, why: "Throttle inasogeza droni juu na chini." },
      { objective: "O1", q: "Urukaji laini unatokana na:", options: ["Mwendo mdogo na taratibu wa vijiti", "Kusukuma vijiti hadi mwisho kila mara", "Kurusha kwa kasi", "Kurusha usiku"], answer: 0, why: "Mwendo taratibu unaleta urukaji laini unaoongozwa vizuri." },
      { objective: "O1", q: "Kipi kwa kawaida HAKIMO kwenye skrini ya urukaji?", options: ["Kiwango cha betri", "Satelaiti za GPS", "Kimo", "Salio la benki la mkulima"], answer: 3, why: "Skrini inaonyesha taarifa za urukaji, si fedha za mtu binafsi." },
      { objective: "O2", q: "Kwa nini ufanye mazoezi kwenye simulator kwanza?", options: ["Ni sheria kila mahali", "Makosa hayagharimu kitu na hayavunji sheria", "Inakupa leseni", "Droni halisi haziwezi kuelea"], answer: 1, why: "Simulator zinakuwezesha kujifunza kwa usalama kabla ya safari halisi." },
      { objective: "O2", q: "Kipindi kizuri cha mazoezi ya kila siku kinapaswa kuwa cha muda gani?", options: ["Kama dakika 15 hadi 20", "Saa tano", "Dakika moja", "Mara moja tu kwa mwaka"], answer: 0, why: "Vipindi vifupi vya mara kwa mara vinajenga ujuzi vizuri zaidi." },
      { objective: "O2", q: "Zoezi la mashine ya kukata nyasi linafundisha:", options: ["Kukata nyasi", "Kutua", "Mistari iliyonyooka inayolingana kama safari ya kupiga ramani", "Kujipiga picha"], answer: 2, why: "Linajenga uongozaji unaotumika katika mipangilio ya kupiga ramani." },
      { objective: "O2", q: "Zoezi la kuzunguka (orbit) linamaanisha:", options: ["Kupaa moja kwa moja juu", "Kuelea", "Kutua juu ya mti", "Kuzunguka kitu huku kamera ikikitazama"], answer: 3, why: "Kuzunguka kunaweka kamera kwenye kitu huku droni ikizunguka." },
      { objective: "O2", q: "Ukirusha droni ikikutazama (nose-in), vidhibiti vinahisi:", options: ["Kushoto na kulia vimegeuzwa", "Sawa kabisa", "Polepole zaidi", "Vimefungwa"], answer: 0, why: "Droni inakutazama, kwa hiyo kushoto na kulia vimebadilishana ukiangalia kutoka kwako." },
      { objective: "O3", q: "Katika hali ya GPS, ukiachia vijiti droni:", options: ["Inaanguka", "Inabaki mahali pake", "Inarudi nyumbani", "Inajizungusha"], answer: 1, why: "Kuwekwa mahali kwa satelaiti kunaishikilia droni mahali pake." },
      { objective: "O3", q: "Droni inaweza kuingia hali ya attitude wakati:", options: ["Betri imejaa", "Anga ni safi", "GPS ni dhaifu, kwa mfano chini ya miti minene au karibu na majengo ya chuma", "Unapiga picha"], answer: 2, why: "Mawasiliano dhaifu ya satelaiti yanaondoa uwezo wa kubaki mahali pamoja." },
      { objective: "O3", q: "Katika hali ya attitude kwenye upepo, droni:", options: ["Itabaki tuli kabisa", "Itatua yenyewe", "Itapanda bila kikomo", "Itasukumwa na upepo"], answer: 3, why: "Inabaki kwenye kimo lakini si mahali pake." },
      { objective: "O3", q: "Hali ya sport kwa kawaida inamaanisha:", options: ["Urukaji wa kasi zaidi wenye ulinzi mdogo", "Kurekodi video polepole na kwa ulaini", "Kutua kiotomatiki", "Hakuna kamera"], answer: 0, why: "Hali ya sport inaacha baadhi ya kinga za usalama ili kupata kasi." },
      { objective: "O4", q: "Baada ya ajali yoyote au tukio kubwa, unapaswa:", options: ["Kulificha", "Kufanya eneo liwe salama, kukagua uharibifu, kuliandika, na kuripoti kama inatakiwa", "Kurusha tena mara moja bila ukaguzi", "Kufuta kumbukumbu"], answer: 1, why: "Usalama kwanza, kisha rekodi na ripoti yoyote inayotakiwa." },
      { objective: "O4", q: "GPS ikipotea, mpango salama zaidi ni:", options: ["Kurusha mbali zaidi", "Kupanda juu kadiri iwezekanavyo", "Kuirudisha taratibu kwa mkono dhidi ya upepo na kutua mapema", "Kuachia vijiti na kusubiri"], answer: 2, why: "Kuiongoza kwa mkono na kutua mapema kunazuia fly-away." },
      { objective: "O4", q: "Fly-away ni:", options: ["Safari ya kawaida ya kupiga ramani", "Aina ya panga boi (propeller)", "Mahali pa kutua", "Droni kuruka mbali nje ya uongozi wa rubani"], answer: 3, why: "Ni kupoteza uongozi, mara nyingi baada ya matatizo ya GPS au mawasiliano." },
      { objective: "O2", q: "Katika kitabu cha kumbukumbu, muda wa simulator na muda wa urukaji halisi vinapaswa:", options: ["Kuwekwa katika safu tofauti", "Kujumlishwa pamoja bila maelezo", "Kutoandikwa", "Kuandikwa tu kama vinazidi saa moja"], answer: 0, why: "Mamlaka na wakufunzi wanahitaji kuona kila aina peke yake." },
      { objective: "O5", q: "Nchini Kenya, shule za droni zilizoidhinishwa zinaitwa:", options: ["Vilabu vya droni", "Taasisi za Mafunzo ya Mifumo ya Ndege Zisizo na Rubani (UTO)", "Maduka ya pembejeo za kilimo (agrovet)", "Kliniki za mimea"], answer: 1, why: "KCAA inaidhinisha na kuorodhesha UTO." },
      { objective: "O5", q: "Mada ipi ni sehemu ya mafunzo ya nadharia ya rubani wa droni?", options: ["Kupika", "Sheria za mpira wa miguu", "Sheria za anga, anga na hali ya hewa", "Muziki"], answer: 2, why: "Marubani lazima wajue sheria za anga, anga, hali ya hewa na droni yao." },
      { objective: "O5", q: "Unapaswa kukagua ada ya leseni wapi?", options: ["Ujumbe kwenye mitandao ya kijamii", "Tangazo la muuzaji", "Kumbukumbu ya rafiki wa zamani", "Orodha rasmi ya ada ya mamlaka ya usafiri wa anga"], answer: 3, why: "Ada hubadilika; ni orodha rasmi tu inayoaminika." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 1, 4, 8, 9, 11, 13, 14, 16, 17]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, fanya mazoezi au rekebisha sehemu hiyo na ukague tena.",
    criteria: [
      { name: "Mazoezi matano", objective: "O2", notYet: "Zoezi moja au zaidi bado si laini mara tatu mfululizo.", meets: "Kuelea, boksi, namba nane, kuzunguka na mashine ya kukata nyasi, kila moja limerushwa kwa ulaini mara tatu mfululizo.", exceeds: "Pia anarusha boksi na namba nane kwa ulaini droni ikimtazama (nose-in)." },
      { name: "Mazoezi ya dharura", objective: "O4", notYet: "Anataharuki au anaruka hatua katika zoezi la dharura.", meets: "Anafuata hatua sahihi mawasiliano yakikatika, betri ikiisha na GPS ikipotea.", exceeds: "Anatua salama kutoka hali ya attitude dhidi ya upepo bila msaada." },
      { name: "Kitabu cha kumbukumbu", objective: "O2", notYet: "Vipindi vinakosekana au maingizo hayana taarifa muhimu.", meets: "Kila kipindi kimeandikwa na tarehe, simulator, dakika, aina, hali ya hewa, matatizo na mafunzo.", exceeds: "Muda wa simulator na wa safari halisi uko katika safu tofauti na kumbukumbu zina nakala ya akiba." },
      { name: "Mpango wa leseni", objective: "O5", notYet: "Mamlaka, leseni au hatua zinakosekana, au gharama zimekisiwa.", meets: "Mamlaka, shule zilizoidhinishwa alizopata, leseni inayohitajika, hatua, nyaraka, gharama kutoka vyanzo rasmi na tarehe anazolenga.", exceeds: "Amewasiliana na shule iliyo kwenye orodha ya walioidhinishwa na ameandika tarehe aliyokagua." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaojiandikisha na taasisi ya mafunzo iliyoidhinishwa ndani ya siku 90 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata leseni ya rubani wa droni ndani ya mwaka mmoja",
      "Wanafunzi wanaoripoti kurusha tu wakiwa na usajili, leseni na vibali ambavyo nchi yao inataka"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Kompyuta au simu yenye simulator ya droni ya bure au ya bei nafuu; kidhibiti kama kinapatikana",
      "Kitabu cha kumbukumbu cha karatasi, spreadsheet au app ya kumbukumbu",
      "Intaneti ya kufikia kurasa za mamlaka ya usafiri wa anga na orodha ya shule zilizoidhinishwa",
      "Kama dakika 60 za masomo, pamoja na vipindi vifupi vya simulator kila siku vya dakika 15 hadi 20 kwa wiki kadhaa"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni mazoezi ya kwanza kwenye skrini ya pamoja ili wanafunzi waone mwendo wa vijiti.",
      "Eleza wazi kwamba kozi haitoi leseni wala ruhusa ya kurusha droni halisi.",
      "Fanyeni vikao vifupi vya kukagua mazoezi ambapo wanafunzi wanaonyesha kila zoezi mara tatu mfululizo.",
      "Kagueni orodha za taasisi za mafunzo zilizoidhinishwa pamoja na wanafunzi na uwaonye wasilipe shule zisizo kwenye orodha.",
      "Pima mazoezi, kitabu cha kumbukumbu na mpango wa leseni kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
