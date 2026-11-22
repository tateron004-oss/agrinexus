"use strict";

// Koach Learn course (Swahili translation of seniors/seniors-caregiving.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-caregiving-sw",
  lang: "sw",
  translationOf: "seniors-caregiving",
  category: "Seniors and Technology",
  name: "Kumhudumia Mpendwa Wako: Kuwa Mlezi",
  skills: "Kuelewa mahitaji ya mpendwa wako, Kutengeneza daftari la huduma, Kusimamia dawa na miadi, Kupata msaada wa walezi karibu nawe, Kugawana kazi na familia, Kujitunza wewe mwenyewe kama mlezi",
  outcome: "kupanga huduma kwa mpendwa wako kwa daftari la huduma na orodha ya dawa, kushughulikia miadi na dawa kwa usalama pamoja na daktari na mfamasia wake, kupata msaada karibu nawe kupitia Eldercare Locator, kugawana kazi na familia, na kulinda afya yako mwenyewe kwa mpango wa kujitunza.",
  about: [
    "Watu wengi huwa walezi bila kupanga: mke anayemsaidia mumewe baada ya kiharusi, mwanamume anayempeleka mama yake kwenye miadi, bibi anayelea wajukuu huku akimhudumia dada yake, jirani anayepita kumjulia hali mtu kila siku. Kumhudumia mtu kunaweza kuwa na maana kubwa, lakini pia kunaweza kuchosha na kuleta upweke.",
    "Kozi hii ni kwa wazee wanaomhudumia mume, mke, mwenzi, rafiki au ndugu, na kwa watoto na wajukuu wazima wanaomhudumia mzee wa familia. Utajipanga, utashughulikia dawa na miadi kwa usalama, utapata msaada katika jamii yako, utagawana kazi na kujitunza wewe mwenyewe.",
    "Kozi hii inafundisha ujuzi, si ushauri wa kitabibu au wa kisheria. Uliza maswali ya afya kwa daktari, muuguzi au mfamasia wa mpendwa wako, na maswali ya sheria au pesa kwa mtaalamu aliyehitimu. Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio fupi la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza daftari la kwanza la huduma kwa mpendwa wako (halisi au la mazoezi): watu muhimu wa kuwasiliana nao, orodha ya dawa, miadi inayokuja na maswali ya miadi ijayo. Kisha ongeza mpango wa msaada wa ukurasa mmoja: huduma moja ya karibu uliyowasiliana nayo au utakayowasiliana nayo (kama Eldercare Locator), kazi mbili maalum utakazoomba familia au marafiki wazichukue, na mpango wako wa kujitunza wenye mapumziko moja kila wiki.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima nchini Marekani wanaomhudumia mzazi, mume, mke au ndugu anayezeeka. Mara nyingi wao wenyewe ni wazee, na baadhi ni mabibi, mababu au wanafamilia wanaoshiriki huduma. Wengi pia wanafanya kazi au wana mahitaji yao ya afya.",
    startingPoint: "Tayari wanasaidia kwa usafiri, chakula au dawa, mara nyingi bila mpango. Wengi huweka taarifa kichwani au kwenye vipande vya karatasi, hawajui huduma za walezi zilizo karibu nao, na hufanya kazi nyingi peke yao.",
    gap: "Walezi wasio na mpangilio au walio peke yao wako hatarini kuchanganya dawa, kukosa miadi na kuchoka kupita kiasi. Daftari la huduma, mazoea salama ya dawa na miadi, huduma za karibu, kazi zinazogawanywa na mpango wa kujitunza vinafanya huduma iwe salama kwa mpendwa na iweze kudumu kwa mlezi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi, sentensi fupi na hatua kubwa, rahisi",
      "Vifaa: karatasi na faili (binder) vinatosha; simu au kompyuta inasaidia kwa kalenda ya pamoja na kutafuta huduma",
      "Muda: walezi wana shughuli nyingi; kama dakika 5 kwa kila somo, kati ya kazi za huduma",
      "Afya: dawa zinabadilishwa tu kupitia daktari au mfamasia; ruhusa ya mpendwa inahitajika ili kushiriki taarifa zake za afya",
      "Faragha na ustawi: hakuna namba kamili za Medicare, Social Security au benki katika AI au barua pepe; msaada wa dharura kupitia 988"
    ],
    prerequisites: "Hakuna. Kozi \"Medicare Basics\" (Misingi ya Medicare) ni kozi msaidizi yenye manufaa."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa siku ya kawaida na mpendwa wako", action: "kuorodhesha anachoweza kufanya mwenyewe na anapohitaji msaada, katika makundi matatu: huduma ya kila siku, huduma ya afya, na pesa na makaratasi", standard: "baada ya kumuuliza kinachomjali zaidi" },
    { id: "O2", condition: "Ukitumia faili (binder) au faili la siri kwenye simu au kompyuta yako", action: "kuanzisha daftari la huduma lenye watu wa kuwasiliana nao, magonjwa, mzio, bima na mahali nyaraka za kisheria zinapohifadhiwa", standard: "bila namba kamili za siri kuandikwa katika zana za AI au barua pepe" },
    { id: "O3", condition: "Ukipewa dawa za mpendwa wako na miadi yake ijayo", action: "kuweka orodha kamili ya dawa na kuandika maswali kwa daktari au mfamasia", standard: "bila kamwe kusimamisha, kuanza au kubadilisha dawa bila kuwauliza" },
    { id: "O4", condition: "Unapohitaji msaada karibu nawe", action: "kuwasiliana na Eldercare Locator au huduma nyingine ili kupata msaada wa walezi karibu nawe", standard: "ukiandika unachojifunza katika daftari la huduma" },
    { id: "O5", condition: "Ukipewa orodha yako ya mahitaji", action: "kuomba familia na marafiki kazi maalum zenye muda na kuziweka kwenye kalenda ya pamoja", standard: "angalau kazi mbili zikichukuliwa na watu wengine" },
    { id: "O6", condition: "Kama mlezi", action: "kujikagua kuona dalili za msongo wa mlezi na kupanga mapumziko ya mara kwa mara", standard: "ukiwa na mapumziko moja kila wiki na mtu wa kukushikia nafasi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujipanga",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuelewa mahitaji ya mpendwa wako",
          minutes: 5,
          goal: "Orodhesha anachoweza kufanya mpendwa wako mwenyewe na anapohitaji msaada.",
          text: [
            "Walezi husaidia katika mambo mengi. MedlinePlus inataja kuoga, chakula na dawa; kazi za nyumbani, kupika na kutuma mahitaji; usafiri kwenda kwenye miadi; kumpa mtu ushirika na faraja; kuratibu huduma za matibabu; na kusaidia katika maamuzi ya afya na pesa.",
            "Anza kwa kuangalia siku ya kawaida. Mpendwa wako anaweza kufanya nini mwenyewe? Ni nini kinachomwia vigumu: kuoga, kuvaa, kupika, kukumbuka dawa, kulipa bili, kufika kwa daktari? Muulize, na usikilize. Watu wanataka kubaki huru na kuwa na sauti juu ya maisha yao kadiri wanavyoweza.",
            "Andika mahitaji katika makundi matatu: huduma ya kila siku, huduma ya afya, na pesa na makaratasi. Orodha hii inakuonyesha msaada unahitajika zaidi wapi na nini cha kuwaomba wengine wafanye. Mahitaji hubadilika baada ya muda, kwa hiyo iangalie tena kila baada ya miezi michache au baada ya kulazwa hospitalini."
          ],
          steps: ["Pitia siku ya kawaida pamoja na mpendwa wako.", "Orodhesha anachoweza kufanya mwenyewe.", "Orodhesha anapohitaji msaada: huduma ya kila siku, huduma ya afya, pesa na makaratasi.", "Muulize kinachomjali zaidi.", "Pitia orodha tena kila baada ya miezi michache au baada ya kulazwa hospitalini."],
          words: [["Mlezi", "mtu anayemsaidia mtu mwingine anayehitaji msaada kwa sababu ya umri, ugonjwa au ulemavu; mara nyingi ni ndugu au rafiki."], ["Kujitegemea", "kuweza kufanya mambo na kufanya maamuzi wewe mwenyewe."]],
          slides: [
            { title: "Walezi husaidia nini", bullets: ["Kuoga, chakula na dawa", "Kazi za nyumbani, kutuma mahitaji na usafiri", "Ushirika, kuratibu huduma na maamuzi"] },
            { title: "Angalia siku ya kawaida", bullets: ["Anaweza kufanya nini mwenyewe?", "Nini ni kigumu kwake?", "Muulize na usikilize"] },
            { title: "Makundi matatu ya mahitaji", bullets: ["Huduma ya kila siku", "Huduma ya afya", "Pesa na makaratasi"] }
          ],
          sources: [{ name: "MedlinePlus: Caregivers", url: "https://medlineplus.gov/caregivers.html" }],
          tryIt: "Andika orodha ya mahitaji ya mpendwa wako (au ya mtu unayeweza kumhudumia siku moja) katika safu tatu: huduma ya kila siku, huduma ya afya, pesa na makaratasi. Zungushia mahitaji mawili makubwa zaidi.",
          youCanNow: "kuorodhesha mahitaji ya mpendwa wako katika huduma ya kila siku, huduma ya afya na makaratasi huku ukiheshimu uhuru wake wa kujitegemea.",
          quickCheck: [
            { objective: "O1", q: "Kozi hii inatumia makundi gani matatu kupanga mahitaji ya mpendwa?", options: ["Asubuhi, mchana na usiku", "Huduma ya kila siku, huduma ya afya, na pesa na makaratasi", "Familia, marafiki na majirani", "Chakula, mavazi na makazi"], answer: 1, why: "Kupanga mahitaji katika huduma ya kila siku, huduma ya afya, na pesa na makaratasi kunaonyesha msaada unahitajika zaidi wapi." },
            { objective: "O1", q: "Baba yako bado anaweza kupika chakula rahisi lakini anasahau vidonge vyake. Unapangaje msaada?", options: ["Uchukue pia kazi yake yote ya kupika", "Usifanye chochote hadi tatizo litokee", "Msaidie na dawa na umwache aendelee kupika, kama anavyotaka", "Mhamishe mara moja"], answer: 2, why: "Watu wanataka kujitegemea kadiri wanavyoweza, kwa hiyo weka msaada pale unapohitajika." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kutengeneza daftari la huduma",
          minutes: 5,
          goal: "Anzisha daftari la huduma linaloweka taarifa muhimu mahali pamoja.",
          text: [
            "CDC (kituo cha serikali ya Marekani cha kudhibiti magonjwa) inaeleza kwamba mpango wa huduma unaweza kuwasaidia walezi kuweka taarifa muhimu mahali pamoja. Liite daftari la huduma: faili (binder), bahasha ya karatasi au hati kwenye simu au kompyuta yako ambayo wewe, wanafamilia wanaosaidia na mlezi wa akiba mnaweza kutumia.",
            "Kinachoingia ndani: watu wa kuwasiliana nao (madaktari, duka la dawa, familia, majirani, watu wa dharura); orodha ya dawa; magonjwa na mzio; taarifa za bima (Medicare, Medicaid, VA au bima binafsi); kalenda ya miadi; na maelezo ya kila ziara. Ongeza nakala ya nyaraka zozote za kisheria alizo nazo, kama hati ya uwakilishi (power of attorney) au maagizo ya mapema (advance directive), na mahali nakala halisi zinapohifadhiwa.",
            "Liweke salama na kwa siri. Ukiliweka kwenye kompyuta au simu, tumia nywila. Usiandike namba kamili za Medicare, Social Security au benki katika zana za AI au barua pepe. Mjukuu anayejua teknolojia anaweza kusaidia kuweka kalenda ya pamoja au hati rahisi, kwa ruhusa ya mpendwa wako."
          ],
          steps: ["Chagua karatasi (faili) au kidijitali (hati kwenye simu au kompyuta).", "Ongeza watu wa kuwasiliana nao, magonjwa, mzio na bima.", "Ongeza orodha ya dawa na kalenda ya miadi.", "Andika mahali nyaraka za kisheria zinapohifadhiwa.", "Mwonyeshe mtu mmoja wa akiba mahali lilipo."],
          words: [["Mpango wa huduma", "maandishi yanayoeleza mahitaji ya mtu, huduma anayopata na taarifa muhimu."], ["Hati ya uwakilishi (power of attorney)", "hati ya kisheria inayomruhusu mtu kumtendea mtu mwingine, kwa mfano katika maamuzi ya pesa au afya."], ["Maagizo ya mapema (advance directive)", "hati ya kisheria inayoeleza huduma ya matibabu anayotaka mtu ikiwa hawezi kujisemea mwenyewe."]],
          slides: [
            { title: "Mahali pamoja kwa kila kitu", bullets: ["Faili, bahasha au hati kwenye simu", "Rahisi kwa wasaidizi na walezi wa akiba"] },
            { title: "Kinachoingia ndani", bullets: ["Watu wa kuwasiliana nao na namba za dharura", "Magonjwa, mzio, bima", "Orodha ya dawa na miadi", "Mahali nyaraka za kisheria zilipo"] },
            { title: "Liweke salama", bullets: ["Nywila kwenye nakala za kidijitali", "Hakuna namba kamili za kitambulisho au benki katika AI au barua pepe", "Mwonyeshe mtu mmoja wa akiba mahali lilipo"] }
          ],
          sources: [{ name: "CDC: Caregiving", url: "https://www.cdc.gov/caregiving/index.html" }],
          tryIt: "Anzisha daftari lako la huduma leo: kwenye karatasi au simu yako, andika ukurasa wa watu wa kuwasiliana nao (daktari, duka la dawa, wanafamilia wawili, mtu wa dharura) na ukurasa wa mzio na magonjwa.",
          youCanNow: "kuandaa daftari la huduma linaloweka watu wa kuwasiliana nao, taarifa za afya na miadi mahali pamoja.",
          quickCheck: [
            { objective: "O2", q: "Daftari la huduma ni nini?", options: ["Shajara ya hisia zako", "Kitabu cha kufundishia udaktari", "Bili kutoka kwa daktari", "Mahali pamoja pa taarifa muhimu za huduma ambapo wewe na wasaidizi mnaweza kutumia"], answer: 3, why: "Daftari la huduma linaweka watu wa kuwasiliana nao, dawa, bima na miadi mahali pamoja." },
            { objective: "O2", q: "Unaweka daftari la huduma kwenye simu yako. Unafanya nini ili libaki la siri?", options: ["Tumia nywila na usiweke namba kamili za Medicare na benki katika zana za AI na barua pepe", "Liweke kwenye mitandao ya kijamii kwa ajili ya familia", "Litume kwa barua pepe kwa kila mtu unayemjua", "Libandike lote kwa msaidizi wa AI"], answer: 0, why: "Liweke salama kwa nywila na usiandike namba kamili za siri katika zana za AI au barua pepe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kusimamia dawa na miadi",
          minutes: 6,
          goal: "Weka orodha ya dawa na andaa maswali kwa miadi ijayo ya mpendwa wako.",
          text: [
            "Kuchanganya dawa ni jambo la kawaida mtu anapotumia dawa kadhaa. MedlinePlus inashauri kuweka orodha ya kila dawa pamoja na kipimo chake na wakati inapotumiwa, ikiwemo dawa za dukani bila agizo la daktari, vitamini, virutubisho na mitishamba, pamoja na mzio, na kuileta katika kila ziara. Soma lebo kabla ya kila kipimo. Kisanduku cha vidonge cha wiki kinaweza kusaidia. Usisimamishe, usianze wala usibadilishe dawa kamwe bila kumuuliza daktari au mfamasia.",
            "Mfamasia ni mtaalamu wa bure. Uliza: Kwa nini dawa hii inahitajika? Madhara gani niyaangalie? Je, ni salama pamoja na dawa nyingine? Kuna vyakula au pombe za kuepuka? Kutumia duka moja la dawa kwa kila kitu kunawasaidia kugundua matatizo.",
            "Kwa miadi, leta daftari la huduma, andika maswali mapema, andika maelezo, na rudia mpango kwa maneno yako ili kuhakikisha umeelewa. Ofisi za madaktari kwa kawaida zinahitaji ruhusa ya mpendwa wako kabla ya kukupa taarifa zake za afya; uliza ofisi wanatumia fomu gani. Kwa maswali ya Medicare, piga 1-800-MEDICARE (1-800-633-4227) na uliza jinsi mpendwa wako anavyoweza kukuruhusu umsemee, au pata msaada wa bure wa mtu kwa mtu kutoka SHIP ya jimbo lako (shiphelp.org)."
          ],
          steps: ["Sasisha orodha ya dawa: jina, kipimo, wakati, inatibu nini.", "Tumia duka moja la dawa na muulize mfamasia maswali yako.", "Tumia kisanduku cha vidonge kama kinasaidia; soma lebo kila wakati.", "Kabla ya ziara, andika maswali; wakati wa ziara, andika maelezo na rudia mpango.", "Uliza ofisi ni fomu gani ya ruhusa itakuwezesha kupata taarifa."],
          words: [["Kisanduku cha vidonge", "kisanduku chenye nafasi kwa kila siku (na wakati) ili kupanga vidonge mapema."], ["SHIP", "State Health Insurance Assistance Program: msaada wa bure, wa karibu nawe, kwa maswali ya Medicare."]],
          slides: [
            { title: "Orodha ya dawa", bullets: ["Kila dawa, vitamini, kirutubisho, mtishamba", "Kipimo, wakati na inatibu nini", "Mzio; ilete katika kila ziara"] },
            { title: "Mazoea salama", bullets: ["Soma lebo kila wakati", "Kisanduku cha vidonge kama kinasaidia", "Usibadilishe dawa kamwe bila kuuliza"] },
            { title: "Muulize mfamasia", bullets: ["Kwa nini inahitajika? Madhara?", "Ni salama pamoja na dawa nyingine?", "Tumia duka moja la dawa kwa kila kitu"] },
            { title: "Miadi", bullets: ["Leta daftari na maswali", "Andika maelezo, rudia mpango", "Uliza ofisi inatumia fomu gani ya ruhusa"] }
          ],
          sources: [
            { name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" }
          ],
          tryIt: "Ongeza orodha ya dawa katika daftari lako la huduma: jina, kipimo, wakati, inatibu nini. Kisha andika maswali matatu kwa miadi ijayo ya mpendwa wako au kwa mfamasia.",
          youCanNow: "kuweka orodha sahihi ya dawa, kushirikiana na mfamasia na kujiandaa kwa miadi kama mlezi.",
          quickCheck: [
            { objective: "O3", q: "Nini kinapaswa kuwa kwenye orodha ya dawa?", options: ["Vidonge vya agizo la daktari tu", "Dawa zinazotumiwa asubuhi tu", "Kila dawa, vitamini, kirutubisho na mtishamba, pamoja na kipimo na wakati, na mzio", "Zile za bei ghali zaidi tu"], answer: 2, why: "Orodha kamili inamsaidia daktari na mfamasia kugundua matatizo." },
            { objective: "O3", q: "Daktari anaeleza mpango mpya haraka. Unahakikishaje umeelewa?", options: ["Tikisa kichwa na uondoke", "Rudia mpango kwa maneno yako mwenyewe na uandike maelezo", "Uliza AI baadaye badala yake", "Kisia ukiwa nyumbani"], answer: 1, why: "Kurudia mpango kunathibitisha kwamba umeuelewa sawasawa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujipanga",
        questions: [
          { objective: "O1", q: "Hatua nzuri ya kwanza ya kuelewa mahitaji ya mpendwa wako ni ipi?", options: ["Uchukue kila kitu mara moja", "Uamue bila kumuuliza", "Pitia siku ya kawaida na umuulize nini ni kigumu", "Subiri dharura itokee"], answer: 2, why: "Kuangalia siku ya kawaida na kusikiliza kunaonyesha msaada unahitajika kweli wapi." },
          { objective: "O2", q: "Daftari la huduma ni la nini?", options: ["Kuweka taarifa muhimu mahali pamoja", "Kuandika shajara unayoisoma wewe tu", "Kuhifadhi nywila za kila akaunti", "Kuweka kwenye mitandao ya kijamii"], answer: 0, why: "Mpango au daftari la huduma linaweka watu wa kuwasiliana nao, dawa na miadi pamoja." },
          { objective: "O2", q: "Kipi kinapaswa kuwa katika daftari la huduma?", options: ["Namba za siri (PIN) za benki", "Orodha ya dawa na namba za madaktari", "Kila risiti iliyowahi kupatikana", "Hakuna kitu, cha kidijitali wala cha karatasi"], answer: 1, why: "Watu wa kuwasiliana nao, dawa, magonjwa, bima na miadi vinapaswa kuwa humo." },
          { objective: "O3", q: "Mpendwa wako anataka kuacha dawa kwa sababu inamsumbua tumbo. Unafanya nini?", options: ["Iache mara moja", "Ongeza mara mbili kipimo kijacho", "Mpe mtu mwingine nusu", "Muulize daktari au mfamasia kwanza"], answer: 3, why: "Usisimamishe wala usibadilishe dawa kamwe bila kuuliza kwanza." },
          { objective: "O3", q: "Ofisi ya daktari haitaki kukupa taarifa. Unapaswa kuuliza nini?", options: ["Fomu gani ya ruhusa mpendwa wako anaweza kusaini", "Anwani ya nyumbani ya daktari", "Kuona mafaili ya wagonjwa wengine", "Hakuna kitu; kata tamaa"], answer: 0, why: "Ofisi kwa kawaida zinahitaji ruhusa ya mgonjwa; uliza wanatumia fomu gani." }
        ]
      }
    },
    {
      name: "Sura 2: Kupata msaada na kujitunza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kupata msaada katika jamii yako",
          minutes: 5,
          goal: "Pata huduma za walezi karibu nawe kwa kutumia Eldercare Locator.",
          text: [
            "Huhitaji kutafuta kila kitu peke yako. Eldercare Locator, huduma ya umma ya Administration for Community Living (ACL), inawaunganisha wazee na walezi na huduma za karibu nao. Piga simu au tuma ujumbe mfupi kwa 1-800-677-1116, ongea nao mtandaoni, au tafuta kwa mahali ulipo kwenye eldercare.acl.gov. Inaweza kukuunganisha na Area Agency on Aging (ofisi ya wazee) ya eneo lako.",
            "Kupitia National Family Caregiver Support Program (mpango wa kitaifa wa kusaidia walezi wa familia), majimbo na ofisi za maeneo hutoa: taarifa kuhusu huduma, msaada wa kupata huduma hizo, ushauri nasaha, vikundi vya msaada na mafunzo kwa walezi, huduma ya mapumziko (respite care, mapumziko kwa ajili yako), na huduma nyingine za ziada. Inawahusu walezi wazima wa familia wa watu wenye umri wa miaka 60 na zaidi, wa watu wa umri wowote wenye ugonjwa wa Alzheimer au hali zinazohusiana nao, na baadhi ya ndugu wazee wanaolea watoto au kuwahudumia watu wazima wenye ulemavu. Uliza kinachopatikana karibu nawe.",
            "Unamhudumia mwanajeshi mstaafu (veteran)? VA Caregiver Support Program inawasaidia walezi wa wanajeshi wastaafu waliosajiliwa katika huduma ya afya ya VA. Piga Caregiver Support Line kwa 1-855-260-3274, Jumatatu hadi Ijumaa, saa 8 am hadi 8 pm kwa saa za Eastern. Kwa maswali ya Medicare, SHIP ya jimbo lako inatoa msaada wa bure wa karibu."
          ],
          steps: ["Piga simu au tuma ujumbe mfupi kwa Eldercare Locator: 1-800-677-1116, au tafuta eldercare.acl.gov.", "Omba Area Agency on Aging ya eneo lako.", "Uliza kuhusu mafunzo ya walezi, vikundi vya msaada, huduma ya mapumziko na chakula.", "Unamhudumia mwanajeshi mstaafu: piga 1-855-260-3274.", "Andika unachojifunza katika daftari lako la huduma."],
          words: [["Area Agency on Aging", "ofisi ya eneo inayowasaidia wazee na walezi kupata huduma."], ["Huduma ya mapumziko (respite care)", "huduma ya muda mfupi kwa mpendwa wako ili wewe upate mapumziko."], ["ACL", "Administration for Community Living, sehemu ya Wizara ya Afya na Huduma za Kibinadamu ya Marekani."]],
          slides: [
            { title: "Eldercare Locator", bullets: ["Piga simu au tuma ujumbe kwa 1-800-677-1116", "Au tafuta eldercare.acl.gov", "Inakuunganisha na Area Agency on Aging yako"] },
            { title: "Msaada kwa walezi wa familia", bullets: ["Taarifa na msaada wa kupata huduma", "Ushauri nasaha, vikundi vya msaada, mafunzo", "Huduma ya mapumziko: mapumziko kwa ajili yako"] },
            { title: "Kumhudumia mwanajeshi mstaafu", bullets: ["VA Caregiver Support Line: 1-855-260-3274", "Jumatatu hadi Ijumaa, 8 am hadi 8 pm saa za Eastern"] }
          ],
          sources: [
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" },
            { name: "ACL: National Family Caregiver Support Program", url: "https://www.acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
            { name: "VA Caregiver Support Program", url: "https://www.caregiver.va.gov/" }
          ],
          tryIt: "Nenda eldercare.acl.gov (au piga simu au tuma ujumbe kwa 1-800-677-1116) na utafute Area Agency on Aging ya eneo lako. Andika jina lake, namba ya simu na huduma moja unayotaka kuuliza kuihusu katika daftari lako la huduma.",
          youCanNow: "kupata msaada wa walezi karibu nawe kupitia Eldercare Locator na Area Agency on Aging yako, na kujua walezi wa wanajeshi wastaafu wanaweza kupiga simu wapi.",
          quickCheck: [
            { objective: "O4", q: "Huduma ya mapumziko (respite care) ni nini?", options: ["Huduma ya muda mfupi ili mlezi apate mapumziko", "Aina ya dawa", "Kulazwa hospitalini", "Fomu ya kisheria"], answer: 0, why: "Huduma ya mapumziko inampa mlezi nafasi ya kupumzika, na ofisi za maeneo zinaweza kuitoa." },
            { objective: "O4", q: "Unahitaji chakula na kikundi cha msaada karibu nawe lakini hujui uanzie wapi. Unafanya nini?", options: ["Tafuta kwenye mitandao ya kijamii", "Subiri hadi dharura itokee", "Mwombe daktari akutafutie kila kitu", "Piga simu au tuma ujumbe kwa Eldercare Locator kwa 1-800-677-1116"], answer: 3, why: "Eldercare Locator inakuunganisha na huduma za karibu, ikiwemo Area Agency on Aging yako." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kugawana kazi na familia na marafiki",
          minutes: 5,
          goal: "Omba familia na marafiki msaada maalum na andaa ratiba ya pamoja.",
          text: [
            "Walezi wengi hufanya kila kitu peke yao kwa sababu hawataki kumsumbua mtu. Mara nyingi watu wanataka kusaidia lakini hawajui jinsi. \"Niambie ukihitaji chochote\" mara chache huleta msaada; ombi maalum huleta.",
            "CDC inashauri kutaja kazi maalum au muda maalum unaotaka usaidiwe, na kutumia kalenda ya pamoja ya mtandaoni kwa msaada wa kawaida. MedlinePlus inashauri kuwaacha wasaidizi wachague kazi wanazozimudu. Mifano: \"Unaweza kumpeleka Mama kwenye miadi yake ya Alhamisi?\" \"Unaweza kumpigia Baba simu kila Jumapili jioni?\" \"Unaweza kununua mahitaji ya chakula kila Jumamosi?\" Wanafamilia wanaoishi mbali wanaweza kushughulikia bili, simu kwa kampuni ya bima, kutafuta taarifa au simu za video.",
            "Kikao kifupi cha familia, ana kwa ana au kwa video, kinamsaidia kila mtu kuona orodha ya mahitaji na kuchagua kazi. Mshirikishe mpendwa wako ikiwa anaweza. Ukiwa unafanya kazi, uliza ofisi ya rasilimali watu (HR) ya mwajiri wako kuhusu likizo: chini ya sheria ya shirikisho ya Family and Medical Leave Act, wafanyakazi wanaostahili wanaweza kuchukua hadi wiki 12 za likizo bila malipo kwa mwaka ili kuwahudumia wanafamilia fulani."
          ],
          steps: ["Chukua orodha yako ya mahitaji kutoka Somo la 1.", "Badilisha mahitaji kuwa kazi maalum zenye muda.", "Fanya kikao kifupi cha familia (ana kwa ana au kwa video).", "Mwache kila msaidizi achague kazi; ziweke kwenye kalenda ya pamoja.", "Unafanya kazi? Uliza HR kuhusu likizo ya familia."],
          words: [["Kalenda ya pamoja", "kalenda ya mtandaoni ambayo watu kadhaa wanaweza kuiona na kuongeza vitu."], ["FMLA", "Family and Medical Leave Act, sheria ya shirikisho ya Marekani inayowaruhusu wafanyakazi wanaostahili kuchukua likizo bila malipo ili kuhudumia familia."]],
          slides: [
            { title: "Omba kitu maalum", bullets: ["Si \"niambie ukihitaji chochote\"", "\"Unaweza kumpeleka Mama Alhamisi?\""] },
            { title: "Njia ambazo watu wanaweza kusaidia", bullets: ["Usafiri, chakula, mahitaji ya nyumbani, kutembelea", "Walio mbali: bili, simu, kutafuta taarifa, simu za video"] },
            { title: "Wakusanye wote", bullets: ["Kikao kifupi cha familia, ana kwa ana au kwa video", "Wasaidizi wanachagua kazi", "Iweke kwenye kalenda ya pamoja"] },
            { title: "Ukiwa unafanya kazi", bullets: ["Uliza HR kuhusu likizo ya familia (FMLA)", "Hadi wiki 12 bila malipo kwa wafanyakazi wanaostahili"] }
          ],
          sources: [
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" }
          ],
          tryIt: "Andika maombi mawili maalum (kazi, siku na saa) na uwatumie watu wawili, au andika ungemwomba nani. Mfano: \"Ungeweza kumpeleka Baba kwenye miadi yake ya macho tarehe 14 saa 10 am?\"",
          youCanNow: "kubadilisha mahitaji kuwa maombi maalum na kugawana kazi za kuhudumia na familia na marafiki.",
          quickCheck: [
            { objective: "O5", q: "Kwa nini utumie kalenda ya pamoja kwa msaada wa familia?", options: ["Kila mtu anaweza kuona na kujiandikisha kwa kazi", "Inachukua nafasi ya daftari la huduma", "Inawalipa wasaidizi", "Inatuma dawa"], answer: 0, why: "Kalenda ya pamoja inawawezesha wasaidizi kuona mahitaji na kuchagua kazi." },
            { objective: "O5", q: "Kaka yako anasema, \"Niambie ukihitaji chochote.\" Jibu bora ni lipi?", options: ["\"Niko sawa.\"", "\"Kila kitu.\"", "\"Ungeweza kumpeleka Mama kununua mahitaji kila Jumamosi asubuhi?\"", "Usiseme chochote"], answer: 2, why: "Kazi maalum yenye muda ina uwezekano mkubwa zaidi wa kuleta msaada wa kweli." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujitunza wewe mwenyewe kama mlezi",
          minutes: 5,
          goal: "Tambua dalili za msongo wa mlezi na panga mapumziko ya mara kwa mara.",
          text: [
            "CDC inasema kwa urahisi: ili kuwa mlezi bora, lazima ujitunze wewe mwenyewe. MedlinePlus inataja dalili za msongo wa mlezi: kuhisi kulemewa au kuwa peke yako, kulala kupita kiasi au kidogo mno, mabadiliko makubwa ya uzito, uchovu usioisha, kupoteza hamu ya mambo uliyokuwa ukiyafurahia, hasira au kukasirika haraka, wasiwasi au huzuni ya mara kwa mara, maumivu ya kichwa au mwili ya mara kwa mara, na kuvuta sigara au kunywa pombe zaidi.",
            "Kinachosaidia: mapumziko ya mara kwa mara (hata saa chache za mapumziko kwa wiki zinaweza kusaidia), kuwaomba wengine msaada, kikundi cha msaada kwa walezi (ana kwa ana au mtandaoni), kuendelea kuwasiliana na marafiki, na kutunza afya yako mwenyewe kwa mazoezi, chakula bora, usingizi na uchunguzi wako wa afya. Mwambie daktari wako kwamba wewe ni mlezi; huenda anajua vikundi vya msaada.",
            "Ukihisi huna tumaini au umelemewa na hali haiboreshi, ongea na daktari wako au mshauri nasaha. Katika dharura nchini Marekani, piga simu au tuma ujumbe kwa 988; wanajeshi wastaafu na familia zao wanaweza kubonyeza 1. Sasa uko tayari kumaliza daftari lako la huduma na mpango wa msaada."
          ],
          steps: ["Jikague ukilinganisha na dalili za msongo wa mlezi.", "Panga mapumziko moja ya kawaida kila wiki, na nani atakushikia nafasi.", "Tafuta kikundi cha msaada kwa walezi (uliza Area Agency on Aging yako).", "Endelea kwenda kwa daktari wako na mwambie kwamba wewe ni mlezi.", "Dharura: piga simu au tuma ujumbe kwa 988."],
          words: [["Msongo wa mlezi", "uchovu wa mwili na wa hisia unaotokana na kumhudumia mtu."], ["Kikundi cha msaada", "kundi la watu walio katika hali kama yako wanaokutana kushirikishana uzoefu na vidokezo."]],
          slides: [
            { title: "Dalili za msongo wa mlezi", bullets: ["Kulemewa, upweke, uchovu kila wakati", "Mabadiliko ya usingizi au uzito", "Hasira, huzuni, wasiwasi, maumivu", "Kupoteza hamu; kuvuta sigara au kunywa zaidi"] },
            { title: "Kinachosaidia", bullets: ["Mapumziko ya kawaida; hata saa chache kwa wiki", "Omba msaada; jiunge na kikundi cha msaada", "Usingizi, chakula, mazoezi na uchunguzi wako wa afya"] },
            { title: "Pata msaada", bullets: ["Mwambie daktari wako kwamba wewe ni mlezi", "Dharura: piga au tuma ujumbe kwa 988; wanajeshi wastaafu bonyeza 1"] }
          ],
          sources: [
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" },
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Kazi ya mwisho: maliza daftari lako la kwanza la huduma (watu wa kuwasiliana nao, orodha ya dawa, miadi na maswali) na ongeza mpango wa msaada wa ukurasa mmoja: huduma moja ya karibu uliyowasiliana nayo au utakayowasiliana nayo, kazi mbili maalum kwa familia au marafiki, na mpango wako wa kujitunza wenye mapumziko moja kila wiki.",
          youCanNow: "kutambua msongo wa mlezi, kupanga mapumziko ya mara kwa mara na kuendelea kumhudumia mpendwa wako bila kupoteza afya yako mwenyewe.",
          quickCheck: [
            { objective: "O6", q: "Kipi ni dalili ya msongo wa mlezi?", options: ["Kulala vizuri na kujisikia umepumzika", "Kuhisi kulemewa, upweke au uchovu kila wakati", "Kufurahia mambo unayopenda kufanya", "Kuonana na marafiki mara nyingi"], answer: 1, why: "Kuhisi kulemewa au upweke na uchovu usioisha ni dalili za msongo wa mlezi." },
            { objective: "O6", q: "Hujapata mapumziko kwa miezi kadhaa. Hatua nzuri ya kwanza ni ipi?", options: ["Endelea hadi uugue", "Acha kumhudumia mpendwa wako", "Ficha jinsi unavyojisikia", "Panga mapumziko moja ya kawaida kila wiki na umwombe mtu akushikie nafasi"], answer: 3, why: "Hata saa chache za mapumziko kwa wiki zinaweza kusaidia, mtu mwingine akikushikia nafasi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupata msaada na kujitunza",
        questions: [
          { objective: "O4", q: "Namba ya simu ya Eldercare Locator (kupiga au kutuma ujumbe) ni ipi?", options: ["911", "1-800-677-1116", "411", "988"], answer: 1, why: "Eldercare Locator inakuunganisha na huduma za karibu kupitia 1-800-677-1116." },
          { objective: "O4", q: "Huduma ya mapumziko (respite care) ni nini?", options: ["Aina ya dawa", "Bili ya hospitali", "Huduma ya muda mfupi ili mlezi apate mapumziko", "Hati ya kisheria"], answer: 2, why: "Huduma ya mapumziko inampa mlezi muda wa kupumzika." },
          { objective: "O5", q: "Ombi lipi lina uwezekano mkubwa zaidi wa kuleta msaada wa kweli?", options: ["\"Niambie ukihitaji chochote.\"", "\"Saidia wakati fulani.\"", "Kutosema chochote", "\"Unaweza kumpeleka Mama kwenye miadi yake ya Alhamisi saa 2 pm?\""], answer: 3, why: "Kazi maalum zenye muda ni rahisi kukubali." },
          { objective: "O6", q: "Kipi ni dalili ya msongo wa mlezi?", options: ["Uchovu usioisha na kupoteza hamu ya mambo uliyokuwa ukiyafurahia", "Kulala vizuri", "Kucheka na marafiki", "Kuendelea na uchunguzi wako wa afya"], answer: 0, why: "MedlinePlus inataja uchovu na kupoteza hamu kama dalili." },
          { objective: "O4", q: "Mlezi wa mwanajeshi mstaafu anaweza kumpigia nani simu kupata msaada?", options: ["VA Caregiver Support Line kwa 1-855-260-3274", "Tangazo lolote la mtandaoni", "Ofisi ya bili ya hospitali tu", "Hakuna mtu"], answer: 0, why: "VA Caregiver Support Line inawasaidia walezi wa wanajeshi wastaafu waliosajiliwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kumhudumia Mpendwa Wako: Kuwa Mlezi",
    questions: [
      { objective: "O1", q: "Kipi ni kazi ya kawaida ya mlezi?", options: ["Kuandika maagizo ya dawa ya daktari", "Kubadilisha sheria", "Usafiri kwenda kwenye miadi na msaada wa chakula", "Kuendesha hospitali"], answer: 2, why: "Usafiri, chakula, dawa na ushirika ni kazi za kawaida." },
      { objective: "O1", q: "Kwa nini umuulize mpendwa wako ni nini kinachomwia vigumu?", options: ["Kuheshimu uhuru wake wa kujitegemea na kuweka msaada pale unapohitajika", "Kumwaibisha", "Kwa sababu sheria inataka hivyo", "Haijalishi"], answer: 0, why: "Kusikiliza kunamwacha aongoze maisha yake na kunaonyesha mahitaji halisi." },
      { objective: "O1", q: "Makundi matatu ya mahitaji katika kozi hii ni:", options: ["Chakula, TV na simu", "Huduma ya kila siku, huduma ya afya, na pesa na makaratasi", "Asubuhi, mchana na usiku", "Familia, marafiki na majirani"], answer: 1, why: "Kupanga mahitaji hivi kunaonyesha msaada unahitajika zaidi wapi." },
      { objective: "O1", q: "Unapaswa kupitia orodha ya mahitaji lini?", options: ["Kamwe", "Mara moja tu", "Akiomba tu", "Kila baada ya miezi michache au baada ya kulazwa hospitalini"], answer: 3, why: "Mahitaji hubadilika baada ya muda." },
      { objective: "O2", q: "Daftari la huduma linaweza kuwa:", options: ["Faili la karatasi tu", "Faili, bahasha au hati kwenye simu au kompyuta", "Chapisho la mitandao ya kijamii tu", "Kumbukumbu kichwani mwako tu"], answer: 1, why: "Muundo wowote unafaa ukiweka taarifa mahali pamoja." },
      { objective: "O2", q: "Maagizo ya mapema (advance directive) ni nini?", options: ["Ratiba ya basi", "Risiti ya duka la dawa", "Hati ya kisheria inayoeleza huduma ya matibabu anayotaka mtu ikiwa hawezi kusema", "Lebo ya dawa"], answer: 2, why: "Inaandika matakwa ya mtu kuhusu huduma ya matibabu." },
      { objective: "O2", q: "Kipi HUPASWI kuandika katika zana ya AI au barua pepe?", options: ["Namba kamili za Medicare, Social Security au benki", "Orodha ya mahitaji ya chakula", "Swali kuhusu kisanduku cha vidonge", "Saa ya miadi"], answer: 0, why: "Namba za siri hazipaswi kuwekwa katika zana za AI na barua pepe." },
      { objective: "O3", q: "Nini kinapaswa kuwa kwenye orodha ya dawa?", options: ["Agizo jipya zaidi la daktari tu", "Vidonge vinavyotumiwa asubuhi tu", "Dawa za bei ghali tu", "Kila dawa, vitamini, kirutubisho na mtishamba, pamoja na kipimo na wakati"], answer: 3, why: "Kila kinachotumiwa kinaweza kuingiliana na kingine, kwa hiyo orodhesha vyote." },
      { objective: "O3", q: "Kwa nini utumie duka moja la dawa kwa dawa zote?", options: ["Daima ni nafuu zaidi", "Sheria inataka hivyo", "Mfamasia anaweza kugundua matatizo kati ya dawa", "Lina maegesho bora"], answer: 2, why: "Duka moja la dawa linaona orodha kamili na linaweza kugundua matatizo." },
      { objective: "O3", q: "Katika miadi, njia nzuri ya kuhakikisha umeelewa ni:", options: ["Kutikisa kichwa na kuondoka", "Kurudia mpango kwa maneno yako mwenyewe", "Kuuliza kuhusu hali ya hewa", "Kutoandika maelezo"], answer: 1, why: "Kurudia mpango kunagundua makosa mapema." },
      { objective: "O3", q: "Kwa msaada wa bure, wa karibu, wa mtu kwa mtu kuhusu maswali ya Medicare, unaweza kuwasiliana na:", options: ["SHIP ya jimbo lako (shiphelp.org)", "Tangazo linalojitokeza ghafla (pop-up)", "Mtu usiyemjua mtandaoni", "Benki"], answer: 0, why: "SHIP zinatoa ushauri wa bure wa Medicare karibu nawe." },
      { objective: "O4", q: "Ni shirika gani linaloendesha Eldercare Locator?", options: ["IRS (mamlaka ya kodi)", "Kampuni binafsi ya bima", "Ofisi ya posta", "Administration for Community Living (ACL)"], answer: 3, why: "Eldercare Locator ni huduma ya umma ya ACL." },
      { objective: "O4", q: "Area Agency on Aging ya eneo lako inaweza kukusaidia:", options: ["Kupata huduma za walezi kama mafunzo, vikundi vya msaada na mapumziko", "Kununua hisa", "Kutengeneza gari lako", "Kupata pasipoti"], answer: 0, why: "Area Agencies on Aging zinawaunganisha wazee na walezi na huduma." },
      { objective: "O4", q: "VA Caregiver Support Line iko wazi:", options: ["Wikendi tu", "Jumatatu hadi Ijumaa, 8 am hadi 8 pm saa za Eastern", "Usiku wa manane tu", "Siku moja kwa mwaka"], answer: 1, why: "VA inataja Jumatatu hadi Ijumaa, 8 am hadi 8 pm ET." },
      { objective: "O5", q: "Njia ipi nzuri kwa familia iliyo mbali kusaidia?", options: ["Kutofanya chochote kwa sababu wako mbali", "Kutuma ushauri tu", "Kushughulikia bili, simu kwa bima au simu za video za mara kwa mara", "Kutembelea mara moja kila miaka kumi"], answer: 2, why: "Wasaidizi walio mbali wanaweza kuchukua simu, bili na kujulia hali." },
      { objective: "O5", q: "Kalenda ya pamoja inasaidia kwa sababu:", options: ["Inachukua nafasi ya daktari", "Medicare inaitaka", "Inaficha kazi kwa familia", "Kila mtu anaweza kuona na kujiandikisha kwa kazi"], answer: 3, why: "Wasaidizi wanaweza kuona kinachohitajika na lini." },
      { objective: "O5", q: "Chini ya sheria ya shirikisho ya FMLA, wafanyakazi wanaostahili wanaweza kuchukua hadi:", options: ["Siku 1 ya likizo yenye malipo", "Wiki 12 za likizo bila malipo kwa mwaka ili kuhudumia wanafamilia fulani", "Mwaka 1 wa likizo yenye malipo", "Hakuna likizo kabisa"], answer: 1, why: "MedlinePlus inataja hadi wiki 12 za likizo bila malipo kwa wafanyakazi wanaostahili; uliza HR." },
      { objective: "O6", q: "Kulingana na CDC, kwa nini walezi wanapaswa kujitunza?", options: ["Ili kuwa mlezi bora", "Kwa sababu ni ubinafsi kutofanya hivyo", "Ili kuepuka familia yote", "Haijalishi"], answer: 0, why: "CDC inasema lazima ujitunze ili kuwa mlezi bora." },
      { objective: "O6", q: "Ni hatua ipi inayosaidia kwa msongo wa mlezi?", options: ["Kutopumzika kamwe", "Kuacha kwenda kwa daktari wako", "Kuficha jinsi unavyojisikia kwa kila mtu", "Kujiunga na kikundi cha msaada kwa walezi"], answer: 3, why: "Vikundi vya msaada vinashirikishana uzoefu na vidokezo." },
      { objective: "O6", q: "Mlezi anajisikia hana tumaini na amelemewa. Nchini Marekani, katika dharura anaweza:", options: ["Kusubiri peke yake ipite", "Kuandika mtandaoni kisha kuondoka", "Kupiga simu au kutuma ujumbe kwa 988", "Kupiga 411"], answer: 2, why: "988 ni bure na iko wazi saa 24 kila siku; wanajeshi wastaafu na familia zao wanaweza kubonyeza 1." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 4, 7, 9, 12, 14, 17, 19] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Daftari la huduma", objective: "O2", notYet: "Watu muhimu wa kuwasiliana nao hawapo, au namba kamili za siri zimeandikwa mahali ambapo wengine wanaweza kuziona.", meets: "Watu muhimu wa kuwasiliana nao, miadi inayokuja na mahali nyaraka za kisheria zinapohifadhiwa, vyote mahali pamoja.", exceeds: "Mtu wa akiba anajua daftari liko wapi na jinsi ya kulitumia." },
      { name: "Dawa na ziara ijayo", objective: "O3", notYet: "Orodha ya dawa haijakamilika, au hakuna maswali kwa ziara ijayo.", meets: "Orodha kamili ya dawa yenye kipimo na wakati, na maswali yaliyoandikwa kwa miadi ijayo.", exceeds: "Inajumuisha vitamini, virutubisho na mzio, na maswali kwa mfamasia." },
      { name: "Msaada wa karibu", objective: "O4", notYet: "Hakuna huduma ya karibu iliyotajwa.", meets: "Huduma moja ya karibu iliyowasiliana nayo au iliyopangwa, kama Eldercare Locator.", exceeds: "Aliandika katika daftari huduma zinazopatikana na hatua zinazofuata." },
      { name: "Kazi zinazogawanywa", objective: "O5", notYet: "Kazi si wazi, kama \"saidia kidogo\", au ni chini ya mbili.", meets: "Kazi mbili maalum zenye muda, za kuomba familia au marafiki wazichukue.", exceeds: "Wasaidizi wamekubali na kazi ziko kwenye kalenda ya pamoja." },
      { name: "Mpango wa kujitunza", objective: "O6", notYet: "Hakuna mapumziko yaliyopangwa.", meets: "Mpango wa kujitunza wenye mapumziko moja kila wiki na mtu wa kushika nafasi.", exceeds: "Pia anataja kikundi cha msaada au anamwambia daktari wake kwamba yeye ni mlezi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaowasiliana na Eldercare Locator, Area Agency on Aging au VA Caregiver Support Program ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti familia au marafiki kuchukua kazi za kawaida za huduma",
      "Wanafunzi wanaoripoti kuchukua mapumziko ya kawaida au kujiunga na kikundi cha msaada kwa walezi"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Faili (binder) au bahasha, au hati ya siri kwenye simu au kompyuta, kwa daftari la huduma",
      "Chupa za dawa za mpendwa au orodha yake ya sasa, na barua za miadi (zihifadhiwe kwa siri)",
      "Simu ya kupiga au kutuma ujumbe kwa Eldercare Locator",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi vinavyoingia kati ya kazi za huduma, pamoja na muda wa kujaza daftari"
    ],
    facilitatorNotes: [
      "Mara nyingi walezi wamechoka sana; toa vipindi vifupi na waache wafanye kazi za mazoezi nyumbani.",
      "Usitoe ushauri wa kitabibu; peleka maswali ya dawa kwa daktari au mfamasia wa mpendwa.",
      "Andaa mapema namba za Area Agency on Aging ya eneo na za vikundi vya msaada ili kuwapa wanafunzi.",
      "Angalia dalili za msongo wa mlezi katika kikundi, na mpe 988 mtu yeyote aliye katika dharura.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
