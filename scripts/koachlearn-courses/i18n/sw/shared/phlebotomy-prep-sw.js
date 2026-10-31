"use strict";

// Koach Learn course (Swahili translation of shared/phlebotomy-prep.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Inafundisha maarifa, hatua na usalama wa kuchukua damu na kuandaa kwa mtihani wa cheti. HAIFUNDISHI mtu kuchukua damu:
// kuchukua damu halisi kunafunzwa tu katika programu ya mafunzo iliyoidhinishwa na yenye usimamizi. Hakuna ushauri wa kitabibu.

module.exports = {
  id: "phlebotomy-prep-sw",
  lang: "sw",
  translationOf: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Maandalizi ya Fundi wa Kuchukua Damu (Phlebotomy)",
  skills: "Kuchagua programu ya mafunzo na cheti, Kumtambua mgonjwa na kukagua agizo, Mpangilio wa kuchukua damu, Hatua za kuchukua damu kwa kawaida, Kuzuia maambukizi na usalama wa vitu vyenye ncha kali, Kuweka lebo na kushughulikia sampuli",
  outcome: "kutengeneza orodha yako ya mfukoni ya hatua za kuchukua damu kwa kawaida, kuanzia kumtambua mgonjwa hadi kuweka lebo kwenye mirija na kusafisha, pamoja na mpangilio wa mirija wa maabara yako na hatua za usalama, na mpango wa programu yako ya mafunzo na mtihani wa cheti.",
  about: [
    "Mafundi wa kuchukua damu (phlebotomy technicians) huchukua sampuli za damu hospitalini, maabara, kliniki, vituo vya kuchangia damu na nyumbani kwa wagonjwa. Ni njia ya haraka ya kuingia katika kazi za afya, na inaweza kukupeleka kwenye kazi nyingine za maabara na za kuhudumia wagonjwa.",
    "Kozi hii inafundisha maarifa ya kazi hii: vyeti na sheria za majimbo, jinsi ya kumtambua mgonjwa na kukagua agizo, mpangilio wa mirija, hatua za kuchukua damu kwa kawaida, kuzuia maambukizi na usalama wa sindano, na jinsi ya kuweka lebo na kushughulikia sampuli ili maabara iweze kuzitumia. Pia inaeleza faragha ya mgonjwa chini ya sheria ya HIPAA.",
    "Muhimu: kozi hii haikufundishi kuchukua damu, na usijaribu kwa mtu yeyote. Kuchukua damu kunafunzwa tu katika programu ya mafunzo iliyoidhinishwa, mwalimu akikutazama, baada ya kufanya mazoezi kwenye mikono ya mazoezi. Mitihani ya cheti pia inaomba ushahidi wa kuchukua damu kwa watu halisi chini ya usimamizi. Kozi hii inakuandaa kwa programu hiyo na mtihani; haikupi cheti wala leseni.",
    "Kila somo linachukua kama dakika tano na linaisha kwa kazi ya \"Jaribu sasa\" kwenye karatasi. Jaribio fupi linafuata kila somo, jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tengeneza orodha yako ya mfukoni ya hatua za kuchukua damu kwa kawaida: mtambue mgonjwa na ukague agizo, jiandae na ujikinge, mpangilio wa mirija yako (kutoka kwenye chati ya programu yako au maabara yako), hatua za kuchukua damu, kuweka lebo mbele ya mgonjwa, kutupa sindano na kusafisha. Ongeza mpango wa ukurasa mmoja: programu ya mafunzo utakayoomba, mtihani wa cheti utakaoulenga, kile jimbo lako linachotaka, na tarehe unazolenga.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta njia ya haraka na ya kudumu ya kuingia katika kazi za afya: watafuta kazi, vijana wazima, wahamiaji, wanajeshi wastaafu (baadhi wana uzoefu wa matibabu wa kijeshi) na watu wazima wanaorudi kusoma.",
    startingPoint: "Wanaweza kusoma Kiingereza cha kila siku na kutumia simu au kompyuta ya maktaba. Wengi hawajawahi kufanya kazi kliniki au maabara, hawajui maneno ya kitabibu, na baadhi wanaogopa sindano au damu.",
    gap: "Programu za kuchukua damu na mitihani ya cheti zinatarajia wanafunzi wajue kumtambua mgonjwa, mpangilio wa mirija, hatua za kuchoma mshipa, kuzuia maambukizi, kushughulikia sampuli na faragha, na wawe wamechukua damu chini ya usimamizi. Wanafunzi wanahitaji maarifa haya, mpango ulio wazi wa mafunzo na mtihani, na picha ya kweli ya kazi hii kabla ya kujiandikisha.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la kitabibu linaelezwa",
      "Usalama: hakuna kuchukua damu wala kufanya mazoezi ya sindano nyumbani; hayo hufanyika tu katika programu yenye usimamizi",
      "Vifaa: simu au kompyuta ya maktaba; karatasi inatosha kwa kila kazi",
      "Sheria za majimbo zinatofautiana (kwa mfano California inatoa vyeti vyake vya kuchukua damu); wanafunzi wanakagua jimbo lao",
      "Rangi za mirija na mpangilio wa kuchukua damu hufuata chati ya kila maabara; wanafunzi wanatumia chati ya programu yao",
      "Faragha: hakuna taarifa halisi za mgonjwa katika kazi yoyote"
    ],
    prerequisites: "Hakuna. Kozi \"Health Literacy\" (Uelewa wa Afya) inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukitumia ukurasa rasmi wa NHA na ukurasa wa idara ya afya ya jimbo lako", action: "kuandika mpango wa programu ya mafunzo ya kuchukua damu, uchukuaji wa damu wenye usimamizi unaohitajika na tarehe ya mtihani wa cheti", standard: "kila sharti likiwa limekaguliwa kwenye ukurasa rasmi" },
    { id: "O2", condition: "Ukipewa mgonjwa wa mazoezi na agizo la maabara", action: "kumthibitisha mgonjwa kwa vitambulisho viwili na kulinganisha agizo kabla ya kuchukua damu", standard: "ukisimama kila mara kitu kisipolingana" },
    { id: "O3", condition: "Ukipewa rangi za mirija na chati ya programu yako", action: "kupanga mirija kwa mpangilio wa kuchukua damu", standard: "bila mrija wowote kuwa nje ya mpangilio" },
    { id: "O4", condition: "Ukipewa hatua za kuchoma mshipa kwa kawaida zikiwa zimechanganywa", action: "kupanga hatua kwa mpangilio na kutaja wakati wa kusimamisha uchukuaji wa damu", standard: "bila hatua yoyote kukosekana" },
    { id: "O5", condition: "Ukipewa hali za mazoezi kuhusu usalama", action: "kuchagua hatua sahihi ya kuzuia maambukizi na usalama wa vitu vyenye ncha kali", standard: "ukipata kila hali sahihi" },
    { id: "O6", condition: "Ukipewa sampuli za mazoezi", action: "kuamua kama kila sampuli imewekwa lebo na kushughulikiwa vizuri kiasi kwamba maabara itaikubali", standard: "ukiona kila sababu ya kukataliwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Kazi, mgonjwa na mirija",
      lessons: [
        {
          title: "Kazi, mafunzo na cheti",
          objectives: ["O1"],
          minutes: 5,
          goal: "Andika mpango wa programu ya mafunzo, uchukuaji wa damu wenye usimamizi na mtihani wa cheti.",
          text: [
            "Fundi wa kuchukua damu huchukua damu kutoka kwa wagonjwa kwa ajili ya vipimo vya maabara na kuchangia damu. Kazi hii inahitaji hatua za uangalifu, utulivu na wagonjwa wenye wasiwasi, na usalama mkali.",
            "Watu wengi wanaanza na programu ya mafunzo ya kuchukua damu katika chuo cha jamii, shule ya watu wazima au chuo cha ufundi. Unajifunza kwanza kwenye mikono ya mazoezi, kisha unachukua damu kwa watu halisi mwalimu akikutazama. Sehemu hii ya vitendo haiwezi kujifunzwa mtandaoni.",
            "Cheti: chaguo moja la kawaida ni Certified Phlebotomy Technician (CPT) cha NHA (National Healthcareer Association). NHA inaomba cheti cha kuhitimu sekondari (high school diploma) au GED (au kinachokaribia kupatikana), programu ya mafunzo au uzoefu wa kazi wenye usimamizi, na ushahidi wa angalau mara 30 za kuchoma mshipa na mara 10 za kuchoma kidole au kisigino kwa watu walio hai. Makundi mengine, kama ASCP, pia hutoa vyeti; kagua kurasa zao rasmi.",
            "Baadhi ya majimbo yana sheria zao. Kwa mfano, California inatoa vyeti vya jimbo vya kuchukua damu kupitia California Department of Public Health (CDPH, Idara ya Afya ya Umma ya California) na pia inataka mtihani wa kitaifa kutoka kundi lililoidhinishwa. Kagua idara ya afya ya jimbo lako kabla ya kuchagua programu. Sheria na ada hubadilika, kwa hiyo soma kurasa rasmi."
          ],
          steps: ["Tafuta programu mbili za mafunzo ya kuchukua damu karibu nawe.", "Uliza kila moja: wanafunzi huchukua damu mara ngapi chini ya usimamizi, na inakuandaa kwa cheti gani?", "Soma ukurasa rasmi wa cheti kujua masharti yake ya sasa.", "Kagua idara ya afya ya jimbo lako kujua sheria za jimbo.", "Andika tarehe unazolenga: kuanza mafunzo, kumaliza mafunzo, mtihani."],
          words: [["Phlebotomy", "kuchukua damu kutoka kwa mtu kwa ajili ya kipimo au kuchangia."], ["Venipuncture (kuchoma mshipa)", "kuingiza sindano kwenye mshipa ili kuchukua damu."], ["Capillary stick (kuchoma kidole)", "tundu dogo kwenye kidole au kisigino ili kuchukua matone machache ya damu."], ["Mkono wa mazoezi", "mfano wa mkono unaotumiwa kujifunza kuchukua damu kwa usalama."]],
          slides: [
            { title: "Kazi yenyewe", bullets: ["Kuchukua damu kwa vipimo na kuchangia", "Hatua za uangalifu, utulivu, usalama mkali"] },
            { title: "Mafunzo kwanza", bullets: ["Programu iliyoidhinishwa: chuo, shule ya watu wazima au ya ufundi", "Mikono ya mazoezi, kisha watu halisi chini ya usimamizi", "Sehemu ya vitendo haiwezi kujifunzwa mtandaoni"] },
            { title: "Cheti", bullets: ["CPT ya NHA: mafunzo au uzoefu wa kazi", "Ushahidi wa kuchoma mshipa mara 30 na kidole mara 10", "Makundi mengine, kama ASCP: kagua kurasa zao"] },
            { title: "Kagua jimbo lako", bullets: ["Baadhi ya majimbo yanatoa vyeti vyao", "California: CDPH pamoja na mtihani wa kitaifa", "Sheria na ada hubadilika: soma kurasa rasmi"] }
          ],
          sources: [
            { name: "NHA: Certified Phlebotomy Technician (CPT)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "California Department of Public Health: Cheti cha kuchukua damu", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Andika mpango wa ukurasa mmoja: programu mbili za mafunzo karibu nawe (jina, muda, idadi ya uchukuaji wa damu wenye usimamizi, cheti zinachokuandaa), cheti utakachokilenga na masharti yake kutoka kwenye ukurasa rasmi, sheria za jimbo lako, na tarehe tatu unazolenga.",
          youCanNow: "kusema fundi wa kuchukua damu anafanya nini, mafunzo yanavyofanyika, CPT ya NHA inaomba nini, na wapi pa kukagua sheria za jimbo lako.",
          quickCheck: [
            { objective: "O1", q: "Unajifunza wapi kuchukua damu kweli?", options: ["Kwenye video ukiwa nyumbani", "Kwa rafiki, kwa uangalifu", "Katika programu ya mafunzo iliyoidhinishwa, mwalimu akikutazama", "Kwako mwenyewe"], answer: 2, why: "Kuchukua damu kunafunzwa tu katika programu yenye usimamizi, kwanza kwenye mikono ya mazoezi." },
            { objective: "O1", q: "CPT ya NHA inaomba nini, zaidi ya mafunzo au uzoefu wa kazi?", options: ["Ushahidi wa kuchoma mshipa na kidole kwa watu walio hai chini ya usimamizi", "Shahada ya uuguzi", "Leseni ya udereva", "Hakuna kingine"], answer: 0, why: "NHA inaomba ushahidi wa angalau mara 30 za kuchoma mshipa na mara 10 za kuchoma kidole." }
          ]
        },
        {
          title: "Mgonjwa sahihi na agizo sahihi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Mthibitishe mgonjwa kwa vitambulisho viwili na ulinganishe agizo la maabara kabla ya kuchukua damu.",
          text: [
            "Hatua muhimu zaidi hufanyika kabla ya sindano: kuhakikisha una mgonjwa sahihi. Sampuli kutoka kwa mtu asiye sahihi inaweza kusababisha matibabu yasiyo sahihi.",
            "Tumia angalau vitambulisho viwili, kwa kawaida jina kamili na tarehe ya kuzaliwa. Mwombe mgonjwa avitaje (\"Tafadhali niambie jina lako kamili na tarehe yako ya kuzaliwa\"), badala ya kuuliza \"Wewe ni John Smith?\", kwa sababu watu wenye wasiwasi au waliochanganyikiwa wanaweza kusema tu ndiyo. Hospitalini, pia linganisha bangili ya kitambulisho na agizo.",
            "Kisha soma agizo la maabara (requisition): vipimo gani, maagizo yoyote maalum kama kufunga kula au saa maalum, na mirija ipi inahitajika. Kama jina, tarehe ya kuzaliwa au kitu kingine chochote hakilingani, simama na umuulize msimamizi wako. Usikisie kamwe.",
            "Faragha (HIPAA): agizo linaonyesha taarifa za afya za siri. Liweke mahali pasipoonekana, ongea kwa sauti ya chini, na zungumza kuhusu vipimo na mgonjwa tu na wafanyakazi wanaohitaji kujua."
          ],
          steps: ["Jitambulishe na ueleze utakachofanya.", "Mwombe mgonjwa ataje jina lake kamili na tarehe yake ya kuzaliwa.", "Vilinganishe na agizo (na bangili ya kitambulisho hospitalini).", "Kagua vipimo, mirija na maagizo yoyote maalum kama kufunga kula.", "Kama kitu chochote hakilingani, simama na umuulize msimamizi wako."],
          words: [["Vitambulisho vya mgonjwa", "taarifa kama jina kamili na tarehe ya kuzaliwa zinazotumiwa kuhakikisha una mtu sahihi."], ["Requisition", "agizo la maabara linaloonyesha mgonjwa na vipimo vya kuchukua."], ["Kufunga kula", "kutokula (na wakati mwingine kutokunywa chochote isipokuwa maji) kwa muda fulani kabla ya kipimo."], ["HIPAA", "sheria ya serikali kuu ya Marekani inayolinda faragha ya taarifa za afya."]],
          slides: [
            { title: "Kabla ya sindano", bullets: ["Mgonjwa sahihi ndilo jambo muhimu zaidi", "Mgonjwa asiye sahihi = matokeo na matibabu yasiyo sahihi"] },
            { title: "Vitambulisho viwili", bullets: ["Jina kamili na tarehe ya kuzaliwa", "Mwombe mgonjwa AVITAJE", "Hospitalini: kagua bangili ya kitambulisho pia"] },
            { title: "Soma agizo", bullets: ["Vipimo na mirija ipi", "Maagizo ya kufunga kula au ya saa maalum", "Kuna kisicholingana? Simama na uulize"] },
            { title: "Faragha", bullets: ["Weka agizo mahali pasipoonekana", "Ongea kwa sauti ya chini", "Shiriki tu na wanaohitaji kujua"] }
          ],
          sources: [
            { name: "HHS: HIPAA kwa wataalamu (Kanuni ya Faragha)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Igizeni na rafiki, bila sindano. Rafiki yako anaigiza mgonjwa mwenye jina na tarehe ya kuzaliwa ya kubuni; wewe unashika agizo la maabara la kubuni lenye taarifa moja tofauti. Jitambulishe, mwombe ataje jina lake na tarehe ya kuzaliwa, linganisha na agizo, na useme kwa sauti utakachofanya kitu kisipolingana.",
          youCanNow: "kumtambua mgonjwa kwa vitambulisho viwili, kukagua agizo la maabara, kusimama kitu kisipolingana, na kuweka taarifa kuwa siri.",
          quickCheck: [
            { objective: "O2", q: "Njia bora ya kuthibitisha mgonjwa ni ipi?", options: ["Kuuliza \"Wewe ni Maria Lopez?\"", "Kuangalia uso wake", "Kumuuliza mtu aliye kwenye chumba cha kusubiri", "Kumwomba ataje jina lake kamili na tarehe ya kuzaliwa"], answer: 3, why: "Mgonjwa akitaja vitambulisho viwili, anaepuka kusema \"ndiyo\" kwa wasiwasi kwa jina lisilo lake." },
            { objective: "O2", q: "Tarehe ya kuzaliwa kwenye agizo hailingani na anayosema mgonjwa. Unafanya nini?", options: ["Chukua damu tu; jina linalingana", "Simama na umuulize msimamizi wako", "Badilisha tarehe kwenye agizo", "Tumia agizo la mgonjwa mwingine"], answer: 1, why: "Kutolingana kokote kunasimamisha uchukuaji wa damu hadi kurekebishwe." }
          ]
        },
        {
          title: "Mirija na mpangilio wa kuchukua damu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Panga mirija kwa mpangilio wa kuchukua damu ukitumia chati ya programu yako.",
          text: [
            "Mirija ina vifuniko vya rangi vinavyokuambia kilichomo ndani. Mingine ina viongezeo vinavyozuia damu kuganda; mingine husaidia damu kuganda. Kiongezeo kutoka mrija mmoja kikiingia kwenye mrija unaofuata, kinaweza kubadilisha matokeo ya kipimo.",
            "Ndiyo sababu maabara hufuata mpangilio wa kuchukua damu, kwa msingi wa kiwango cha maabara cha CLSI. Mpangilio wa kawaida ni: 1) chupa za blood culture (kuotesha vijidudu), 2) bluu hafifu (sodium citrate), 3) nyekundu au dhahabu (mirija ya serum, yenye au bila jeli), 4) kijani (heparin), 5) zambarau (EDTA), 6) kijivu (sodium fluoride na potassium oxalate).",
            "Rangi za vifuniko zinaweza kutofautiana kati ya watengenezaji wa mirija, na maabara zinaweza kuwa na mirija ya ziada, kwa hiyo tumia kila wakati chati ya programu yako au ya maabara yako. Wanafunzi wengi hujifunza sentensi ya kukumbuka mpangilio na kuifanyia mazoezi hadi iwe ya kawaida.",
            "Mirija yenye viongezeo hugeuzwa juu chini na kurudishwa taratibu (kugeuza) mara kadhaa mara tu baada ya kujazwa, kama mtengenezaji anavyosema. Usiitikise kamwe."
          ],
          words: [["Kiongezeo", "kemikali ndani ya mrija inayozuia damu kuganda au kuisaidia kuganda."], ["Mpangilio wa kuchukua damu", "mpangilio maalum wa kujaza mirija ili viongezeo visiingie kwenye mrija unaofuata."], ["Serum", "sehemu ya majimaji ya damu baada ya kuganda."], ["Kugeuza", "kuugeuza mrija taratibu juu chini na kuurudisha."], ["CLSI", "Clinical and Laboratory Standards Institute, kundi linaloandika viwango vya maabara."]],
          slides: [
            { title: "Kwa nini mpangilio ni muhimu", bullets: ["Vifuniko vinaonyesha kilichomo ndani", "Kiongezeo kikiingia mrija unaofuata, matokeo hubadilika"] },
            { title: "Mpangilio wa kawaida", bullets: ["1. Blood culture  2. Bluu hafifu", "3. Nyekundu au dhahabu  4. Kijani", "5. Zambarau  6. Kijivu"] },
            { title: "Tumia chati ya maabara yako", bullets: ["Rangi zinaweza kutofautiana kati ya watengenezaji", "Maabara zinaweza kuongeza mirija", "Jifunze hadi iwe ya kawaida"] },
            { title: "Baada ya kujaza", bullets: ["Geuza taratibu, kama mtengenezaji anavyosema", "Usitikise kamwe"] }
          ],
          tryIt: "Kata vipande sita vya karatasi na uvipake rangi au uviandike: kijivu, nyekundu, blood culture, zambarau, bluu hafifu, kijani. Vichanganye na uvipange kwa mpangilio wa kuchukua damu. Fanya hivyo mara tano, kwa kasi zaidi kila mara. Kagua jibu lako dhidi ya mpangilio katika somo hili, na baadaye dhidi ya chati ya programu yako.",
          youCanNow: "kupanga mirija ya kawaida kwa mpangilio wa kuchukua damu, kusema kwa nini mpangilio ni muhimu, na kugeuza mirija taratibu baada ya kuijaza.",
          quickCheck: [
            { objective: "O3", q: "Katika mpangilio wa kawaida, ipi inakuja kwanza?", options: ["Zambarau", "Kijivu", "Chupa za blood culture", "Kijani"], answer: 2, why: "Blood culture huchukuliwa kwanza ili zibaki bila vijidudu." },
            { objective: "O3", q: "Kwa nini kuna mpangilio wa kuchukua damu?", options: ["Ili viongezeo vya mrija mmoja visiingie kwenye unaofuata", "Ili mgonjwa aone rangi nzuri", "Ili kutumia mirija michache", "Ili kuchukua damu haraka zaidi"], answer: 0, why: "Kiongezeo kikiingia kwenye mrija unaofuata kinaweza kubadilisha matokeo ya kipimo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kazi, mgonjwa na mirija",
        questions: [
          { objective: "O1", q: "Nani anatoa cheti cha Certified Phlebotomy Technician (CPT) kilichoelezwa katika kozi hii?", options: ["Ofisi ya leseni za magari (DMV)", "Hospitali yoyote", "NHA, National Healthcareer Association", "Daktari wa mgonjwa"], answer: 2, why: "NHA ndiyo inayotoa cheti cha CPT." },
          { objective: "O1", q: "Unaishi California. Unapaswa pia kukagua nini?", options: ["Sheria za kuchukua damu za California Department of Public Health", "Hakuna; sheria za kitaifa zinatosha", "Makala ya blogu", "Kampuni yako ya simu"], answer: 0, why: "California inatoa vyeti vyake vya kuchukua damu kupitia CDPH." },
          { objective: "O2", q: "Unapaswa kutumia angalau vitambulisho vingapi vya mgonjwa?", options: ["Hakuna", "Kimoja", "Vitano", "Viwili"], answer: 3, why: "Angalau viwili, kwa kawaida jina kamili na tarehe ya kuzaliwa." },
          { objective: "O2", q: "Agizo linasema kipimo kinahitaji kufunga kula. Unafanya nini?", options: ["Lipuuze", "Kagua kama mgonjwa amefunga na ufuate sheria ya maabara yako", "Mwambie mgonjwa ale kwanza", "Chukua mrija wa ziada"], answer: 1, why: "Maagizo maalum kwenye agizo lazima yakaguliwe kabla ya kuchukua damu." },
          { objective: "O3", q: "Katika mpangilio wa kawaida, mrija upi unakuja kabla ya kijani moja kwa moja?", options: ["Zambarau", "Kijivu", "Nyekundu au dhahabu", "Blood culture"], answer: 2, why: "Mpangilio ni blood culture, bluu hafifu, nyekundu au dhahabu, kijani, zambarau, kijivu." }
        ]
      }
    },
    {
      name: "Sura 2: Kuchukua damu, usalama na sampuli",
      lessons: [
        {
          title: "Hatua za kuchukua damu kwa kawaida",
          objectives: ["O4"],
          minutes: 6,
          goal: "Panga hatua za kuchoma mshipa kwa kawaida kwa mpangilio na utaje wakati wa kusimama.",
          text: [
            "Somo hili linafundisha hatua ili uzijue kabla ya programu yako ya mafunzo. Utazifanya tu mwalimu akikutazama. Usijaribu kamwe kwa mtu nje ya programu yenye usimamizi.",
            "Hatua kuu: mtambue mgonjwa na ukague agizo; nawa mikono na uvae glavu; weka mkono wa mgonjwa vizuri; funga tourniquet (mkanda wa mkono) na uchague mshipa (median cubital vein, mshipa ulio kwenye kunjo la kiwiko, mara nyingi ndio chaguo la kwanza); safisha sehemu hiyo na uiache ikauke kwa hewa; ingiza sindano kwa pembe ndogo; jaza mirija kwa mpangilio wa kuchukua damu; legeza tourniquet; toa sindano na uwashe kifaa cha usalama; bonyeza kwa shashi; weka lebo kwenye mirija mbele ya mgonjwa; safisha na umwangalie mgonjwa.",
            "Programu nyingi hufundisha kutoacha tourniquet kwa zaidi ya takriban dakika moja, kwa sababu inaweza kubadilisha matokeo ya kipimo. Fuata sheria za programu yako.",
            "Jua wakati wa kusimama: mgonjwa anahisi kuzimia au anazimia, uvimbe wa damu (hematoma) unatokea haraka, mgonjwa anahisi maumivu makali, yanayochoma au kama ya umeme, au mgonjwa anakuomba usimame. Ondoa tourniquet na sindano, bonyeza, mweke mgonjwa salama na uite msaada."
          ],
          steps: ["Mtambue mgonjwa na ukague agizo.", "Nawa mikono na uvae glavu.", "Weka mkono vizuri na ufunge tourniquet.", "Chagua mshipa, kisha safisha sehemu hiyo na uiache ikauke.", "Ingiza sindano na ujaze mirija kwa mpangilio wa kuchukua damu.", "Legeza tourniquet, toa sindano na uwashe kifaa cha usalama.", "Bonyeza kwa shashi.", "Weka lebo kwenye mirija mbele ya mgonjwa, safisha na umwangalie mgonjwa."],
          words: [["Tourniquet", "mkanda unaofungwa kuzunguka mkono ili mishipa ionekane kwa urahisi."], ["Median cubital vein", "mshipa ulio kwenye kunjo la kiwiko ambao mara nyingi ndio chaguo la kwanza la kuchukua damu."], ["Hematoma", "uvimbe wa damu chini ya ngozi."], ["Syncope", "kuzimia: kupoteza fahamu kwa muda mfupi."]],
          slides: [
            { title: "Jifunze hatua, fanya mazoezi chini ya usimamizi", bullets: ["Jua hatua kabla ya mafunzo", "Damu halisi tu mwalimu akikutazama"] },
            { title: "Kabla ya sindano", bullets: ["Mtambue mgonjwa, kagua agizo", "Nawa mikono, vaa glavu", "Tourniquet, chagua mshipa, safisha na acha ikauke"] },
            { title: "Kuchukua damu na baadaye", bullets: ["Jaza mirija kwa mpangilio wa kuchukua damu", "Legeza tourniquet, toa sindano, washa kifaa cha usalama", "Bonyeza, weka lebo mbele ya mgonjwa"] },
            { title: "Wakati wa kusimama", bullets: ["Kuzimia au kuhisi kuzimia", "Uvimbe wa haraka (hematoma)", "Maumivu makali, yanayochoma au kama ya umeme", "Mgonjwa anakuomba usimame"] }
          ],
          tryIt: "Bila sindano. Andika hatua nane za kuchukua damu kwa kawaida kwenye kadi nane, zichanganye na uzipange kwa mpangilio. Kisha, nyuma ya kadi ya mwisho, andika dalili nne zinazomaanisha usimamishe uchukuaji wa damu, na unachofanya baadaye.",
          youCanNow: "kuorodhesha hatua za kuchoma mshipa kwa kawaida kwa mpangilio na kusema wakati wa kusimamisha uchukuaji wa damu na la kufanya.",
          quickCheck: [
            { objective: "O4", q: "Hatua ipi inakuja moja kwa moja kabla ya kusafisha sehemu ya kuchoma?", options: ["Kuweka lebo kwenye mirija", "Kutoa sindano", "Kubonyeza", "Kufunga tourniquet na kuchagua mshipa"], answer: 3, why: "Unatafuta mshipa kwanza, kisha unasafisha sehemu hiyo na kuiacha ikauke." },
            { objective: "O4", q: "Wakati wa kuchukua damu mgonjwa anasema anahisi kuzimia. Unafanya nini?", options: ["Maliza haraka", "Simamisha uchukuaji wa damu, mweke salama na uite msaada", "Mwombe asimame", "Puuza"], answer: 1, why: "Kuhisi kuzimia ni dalili ya kusimama: ondoa tourniquet na sindano, bonyeza, mweke mgonjwa salama, ita msaada." }
          ]
        },
        {
          title: "Kuzuia maambukizi na usalama wa vitu vyenye ncha kali",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chagua hatua sahihi ya kuzuia maambukizi na usalama wa vitu vyenye ncha kali katika hali za mazoezi.",
          text: [
            "Damu inaweza kubeba vijidudu kama homa ya ini B (hepatitis B), homa ya ini C na VVU (HIV), vinavyoitwa vimelea vinavyoenezwa kwa damu. Kanuni ya OSHA ya Bloodborne Pathogens inawataka waajiri kuwa na mpango wa kudhibiti kuambukizwa, kutoa chanjo ya homa ya ini B, kuwafundisha wafanyakazi, kutoa vifaa vya kujikinga na kutumia vifaa vya sindano vilivyo salama zaidi.",
            "Tabia zako: safisha mikono kabla na baada ya kila mgonjwa na unapovua glavu; vaa glavu mpya kwa kila mgonjwa; tumia sindano zenye kifaa cha usalama na ukiwashe mara moja; weka sindano zilizotumika moja kwa moja kwenye sanduku la vitu vyenye ncha kali, usizifunike tena kwa mkono kamwe, na usiache sanduku lijae kupita kiasi.",
            "Ukichomwa na sindano au damu ikikugusa ngozini au machoni: osha sehemu hiyo kwa sabuni na maji (suuza macho kwa maji), na umripoti msimamizi wako mara moja ili upimwe. Usisubiri."
          ],
          steps: ["Safisha mikono kabla na baada ya kila mgonjwa.", "Glavu mpya kwa kila mgonjwa.", "Washa kifaa cha usalama mara tu sindano inapotoka.", "Weka sindano moja kwa moja kwenye sanduku la vitu vyenye ncha kali; usiifunike tena kwa mkono kamwe.", "Ukiguswa na damu: osha au suuza, kisha ripoti mara moja."],
          words: [["Vimelea vinavyoenezwa kwa damu", "vijidudu vilivyo kwenye damu vinavyoweza kusababisha ugonjwa, kama homa ya ini B, homa ya ini C na VVU."], ["OSHA", "Occupational Safety and Health Administration, shirika la serikali kuu ya Marekani la usalama kazini."], ["Sanduku la vitu vyenye ncha kali", "sanduku gumu lenye lebo kwa ajili ya sindano zilizotumika na vitu vingine vyenye ncha kali."], ["PPE", "vifaa vya kujikinga binafsi, kama glavu."]],
          slides: [
            { title: "Kwa nini ni muhimu", bullets: ["Damu inaweza kubeba homa ya ini B, homa ya ini C, VVU", "Kanuni ya OSHA ya Bloodborne Pathogens inawalinda wafanyakazi"] },
            { title: "Mwajiri lazima", bullets: ["Awe na mpango wa kudhibiti kuambukizwa na mafunzo", "Atoe chanjo ya homa ya ini B", "Atoe PPE na vifaa vya sindano vilivyo salama zaidi"] },
            { title: "Tabia zako", bullets: ["Safisha mikono; glavu mpya kwa kila mgonjwa", "Washa kifaa cha usalama mara moja", "Moja kwa moja kwenye sanduku; usifunike tena kwa mkono"] },
            { title: "Ukiguswa na damu", bullets: ["Osha kwa sabuni na maji; suuza macho", "Mripoti msimamizi wako mara moja"] }
          ],
          sources: [
            { name: "OSHA: Vimelea vinavyoenezwa kwa damu na kuzuia kuchomwa na sindano", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Mazoezi tu. Kwa kila hali, andika hatua sahihi: (1) unamaliza na mgonjwa mmoja na anayefuata anakaa, (2) sindano imetoka kwenye mshipa, (3) sanduku la vitu vyenye ncha kali limejaa hadi kwenye mstari, (4) unahisi kuchomwa kupitia glavu yako na sindano iliyotumika. Majibu: safisha mikono na vaa glavu mpya; washa kifaa cha usalama na uiweke kwenye sanduku; lifunge na uchukue jipya; osha sehemu hiyo na uripoti mara moja.",
          youCanNow: "kuchagua hatua sahihi ya kuzuia maambukizi na usalama wa vitu vyenye ncha kali na kusema la kufanya baada ya kuguswa na damu.",
          quickCheck: [
            { objective: "O5", q: "Unafanya nini na sindano iliyotumika?", options: ["Washa kifaa cha usalama na uiweke moja kwa moja kwenye sanduku la vitu vyenye ncha kali", "Ifunike tena kwa mkono", "Iweke kwenye takataka za kawaida", "Iache kwenye trei kwa baadaye"], answer: 0, why: "Kuwasha kifaa cha usalama na kuiweka moja kwa moja kwenye sanduku kunazuia kuchomwa na sindano." },
            { objective: "O5", q: "Umechomwa na sindano iliyotumika. Nini kwanza?", options: ["Maliza zamu yako, kisha uamue", "Ficha ili usilaumiwe", "Osha sehemu hiyo kwa sabuni na maji na uripoti mara moja", "Weka plasta na usahau"], answer: 2, why: "Osha, kisha ripoti mara moja ili upimwe haraka." }
          ]
        },
        {
          title: "Kuweka lebo na kushughulikia sampuli, na orodha yako",
          objectives: ["O6"],
          minutes: 5,
          goal: "Amua kama sampuli imewekwa lebo na kushughulikiwa vizuri kiasi kwamba maabara itaikubali.",
          text: [
            "Uchukuaji kamili wa damu unapotea bure kama maabara haiwezi kutumia sampuli. Maabara hukataa sampuli zisizo na lebo au zenye lebo isiyo sahihi, zilizo kwenye mrija usio sahihi, zisizojazwa vya kutosha, zilizoganda wakati hazipaswi, zenye hemolysis (seli nyekundu za damu zimepasuka, mara nyingi kwa kuchukua damu kwa nguvu sana au kutikisa mirija), au zisizotunzwa kwa joto au muda sahihi.",
            "Weka lebo kwenye kila mrija mbele ya mgonjwa, mara tu baada ya kuchukua damu, kamwe si kabla. Fuata sheria za maabara yako kuhusu kinachoandikwa kwenye lebo, kwa kawaida jina kamili la mgonjwa, tarehe ya kuzaliwa au namba ya kitambulisho, tarehe na saa, na herufi za kwanza za jina lako. Kisha linganisha lebo na agizo mara moja zaidi.",
            "Peleka sampuli jinsi maabara yako inavyosema: nyingine huwekwa kwenye barafu, nyingine hukingwa na mwanga, nyingine lazima zifike maabara ndani ya muda fulani. Weka taarifa za mgonjwa kuwa siri njiani.",
            "Sasa tengeneza kazi yako ya mwisho: orodha yako ya mfukoni, pamoja na mpango wako wa mafunzo na mtihani."
          ],
          steps: ["Weka lebo kwenye kila mrija mbele ya mgonjwa, mara tu baada ya kuchukua damu.", "Andika kile maabara yako inachotaka: jina, tarehe ya kuzaliwa au kitambulisho, tarehe, saa, herufi zako za kwanza.", "Linganisha lebo na agizo.", "Shughulikia na upeleke mirija jinsi maabara inavyosema (barafu, mwanga, muda).", "Ripoti tatizo lolote badala ya kupeleka sampuli mbaya."],
          words: [["Sampuli", "kiasi kidogo, kama mrija wa damu, kinachopelekwa maabara."], ["Hemolysis", "seli nyekundu za damu zinapopasuka, jambo linaloweza kuharibu matokeo ya baadhi ya vipimo."], ["Sampuli iliyokataliwa", "sampuli ambayo maabara haitaipima, kwa hiyo mgonjwa lazima achukuliwe damu tena."]],
          slides: [
            { title: "Kwa nini maabara hukataa sampuli", bullets: ["Bila lebo au lebo isiyo sahihi", "Mrija usio sahihi au haujajazwa vya kutosha", "Imeganda, hemolysis, joto lisilo sahihi au imechelewa"] },
            { title: "Weka lebo vizuri", bullets: ["Mbele ya mgonjwa, mara tu baada ya kuchukua damu", "Kile maabara inachotaka: jina, tarehe ya kuzaliwa au ID, tarehe, saa", "Linganisha na agizo"] },
            { title: "Shughulikia vizuri", bullets: ["Sheria za barafu, mwanga au muda", "Weka taarifa kuwa siri", "Ripoti matatizo; usipeleke sampuli mbaya kamwe"] },
            { title: "Kazi ya mwisho", bullets: ["Orodha yako ya mfukoni, mwanzo hadi kusafisha", "Mpangilio wa mirija wa maabara yako", "Mpango wako wa mafunzo na mtihani wenye tarehe"] }
          ],
          tryIt: "Kazi ya mwisho. Tengeneza orodha ya mfukoni ya kuchukua damu kwa kawaida: kumtambua mgonjwa na kukagua agizo, usafi wa mikono na glavu, mpangilio wa mirija, hatua za kuchukua damu, wakati wa kusimama, kutupa sindano, kuweka lebo mbele ya mgonjwa, kushughulikia sampuli na kusafisha. Nyuma, andika mpango wako: programu ya mafunzo, mtihani wa cheti, sheria za jimbo lako na tarehe unazolenga. Usitumie taarifa halisi za mgonjwa.",
          youCanNow: "kuweka lebo na kushughulikia sampuli ili maabara iweze kuzitumia, kuona sababu za kukataliwa, na kutumia orodha na mpango wako mwenyewe.",
          quickCheck: [
            { objective: "O6", q: "Unaweka lebo kwenye mirija lini?", options: ["Kabla ya kukutana na mgonjwa", "Mwishoni mwa zamu yako", "Mbele ya mgonjwa, mara tu baada ya kuchukua damu", "Maabara inapopiga simu"], answer: 2, why: "Kuweka lebo mbele ya mgonjwa mara tu baada ya kuchukua damu kunazuia kuchanganya sampuli." },
            { objective: "O6", q: "Mrija unafika maabara bila lebo. Nini kinatokea?", options: ["Maabara inakisia ni wa nani", "Maabara inaukataa na mgonjwa lazima achukuliwe damu tena", "Maabara inaupima hata hivyo", "Maabara inaweka lebo kwa kukumbuka"], answer: 1, why: "Sampuli zisizo na lebo hukataliwa kwa sababu hakuna anayeweza kuwa na uhakika ni damu ya nani." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuchukua damu, usalama na sampuli",
        questions: [
          { objective: "O4", q: "Mshipa upi mara nyingi ndio chaguo la kwanza la kuchukua damu kwa kawaida?", options: ["Mshipa wa mguuni", "Mshipa wa shingoni", "Mshipa wa nyuma ya kiganja tu", "Median cubital vein kwenye kunjo la kiwiko"], answer: 3, why: "Median cubital vein mara nyingi ndio chaguo la kwanza kwa sababu kwa kawaida ni rahisi kuufikia." },
          { objective: "O4", q: "Ipi ni dalili ya kusimamisha uchukuaji wa damu?", options: ["Mgonjwa anahisi maumivu makali, yanayochoma au kama ya umeme", "Mrija unajaa", "Mgonjwa yuko kimya", "Tourniquet imefungwa"], answer: 0, why: "Maumivu yanayochoma au kama ya umeme yanaweza kumaanisha neva imeguswa; simama mara moja." },
          { objective: "O5", q: "Ipi ni njia salama ya kushughulikia vitu vyenye ncha kali?", options: ["Kufunika sindano tena kwa mkono", "Kujaza sanduku la vitu vyenye ncha kali kupita kiasi", "Kuweka sindano moja kwa moja kwenye sanduku la vitu vyenye ncha kali", "Kuacha sindano kwenye trei"], answer: 2, why: "Sindano huwekwa moja kwa moja kwenye sanduku, kamwe hazifunikwi tena kwa mkono." },
          { objective: "O5", q: "Chini ya Kanuni ya OSHA ya Bloodborne Pathogens, waajiri lazima watoe chanjo gani?", options: ["Mafua", "Homa ya ini B", "Surua", "Pepopunda"], answer: 1, why: "Waajiri lazima watoe chanjo ya homa ya ini B kwa wafanyakazi walio katika hatari." },
          { objective: "O6", q: "Hemolysis ni nini?", options: ["Seli nyekundu za damu kupasuka", "Aina ya mrija", "Kundi la damu", "Uchukuaji safi wa damu"], answer: 0, why: "Hemolysis ni seli nyekundu za damu zilizopasuka, jambo linaloweza kuharibu matokeo ya baadhi ya vipimo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Maandalizi ya Fundi wa Kuchukua Damu (Phlebotomy)",
    questions: [
      { objective: "O1", q: "Phlebotomy ni nini?", options: ["Kupiga picha za X-ray", "Kuchoma sindano za dawa", "Kuchukua damu kwa ajili ya kipimo au kuchangia", "Kutoa dawa kwa maagizo ya daktari"], answer: 2, why: "Phlebotomy maana yake ni kuchukua damu." },
      { objective: "O1", q: "Je, kozi hii ya mtandaoni peke yake inaweza kukufanya ustahili kuchukua damu?", options: ["Ndiyo, baada ya mtihani", "Hapana; unahitaji programu ya mafunzo yenye usimamizi na uchukuaji wa damu wenye usimamizi", "Ndiyo, ukitazama video", "Ndiyo, katika jimbo lolote"], answer: 1, why: "Kuchukua damu halisi kunafunzwa na kuthibitishwa tu katika programu yenye usimamizi." },
      { objective: "O1", q: "Unakagua wapi masharti ya sasa ya cheti?", options: ["Ukurasa rasmi wa kundi linalotoa cheti", "Chapisho la mitandao ya kijamii", "Rafiki", "Kitabu cha zamani"], answer: 0, why: "Masharti na ada hubadilika; ukurasa rasmi ndio wa sasa." },
      { objective: "O2", q: "Vitambulisho vipi viwili ni vya kawaida zaidi?", options: ["Namba ya chumba na rangi ya kitanda", "Urefu na uzito", "Jina la daktari na jina la kipimo", "Jina kamili na tarehe ya kuzaliwa"], answer: 3, why: "Jina kamili na tarehe ya kuzaliwa ndivyo vitambulisho viwili vya kawaida." },
      { objective: "O2", q: "Requisition ni nini?", options: ["Mrija wa damu", "Agizo la maabara linaloonyesha mgonjwa na vipimo", "Bendeji", "Bili"], answer: 1, why: "Requisition ni agizo la maabara." },
      { objective: "O2", q: "Kwa nini umwombe mgonjwa ataje jina lake badala ya kuuliza \"Wewe ni ...?\"", options: ["Ni haraka zaidi", "Ni adabu zaidi", "Mgonjwa mwenye wasiwasi anaweza kusema ndiyo kwa jina lisilo lake", "Sheria inasema hivyo"], answer: 2, why: "Akilitaja mwenyewe, kuchanganya kunagunduliwa." },
      { objective: "O3", q: "Katika mpangilio wa kawaida, mrija upi unakuja mwisho?", options: ["Bluu hafifu", "Nyekundu", "Kijani", "Kijivu"], answer: 3, why: "Kijivu (sodium fluoride na potassium oxalate) huja mwisho katika mpangilio wa kawaida." },
      { objective: "O3", q: "Ipi inakuja moja kwa moja baada ya blood culture?", options: ["Bluu hafifu (sodium citrate)", "Zambarau", "Kijivu", "Kijani"], answer: 0, why: "Bluu hafifu hufuata blood culture katika mpangilio wa kawaida." },
      { objective: "O3", q: "Rangi za vifuniko vya mirija ni tofauti katika maabara yako mpya. Unafuata nini?", options: ["Slaidi ya kozi", "Kumbukumbu yako ya kazi ya zamani", "Chati ya maabara yako yenyewe", "Chochote kilicho haraka zaidi"], answer: 2, why: "Chati ya kila maabara ndiyo sheria, kwa sababu watengenezaji na maabara hutofautiana." },
      { objective: "O3", q: "Unachanganyaje mrija wenye kiongezeo?", options: ["Utikise kwa nguvu", "Ugeuze taratibu, kama mtengenezaji anavyosema", "Uuache tu", "Uupashe joto"], answer: 1, why: "Kugeuza taratibu kunachanganya kiongezeo bila kupasua seli." },
      { objective: "O4", q: "Hatua ipi inakuja kwanza?", options: ["Kumtambua mgonjwa na kukagua agizo", "Kufunga tourniquet", "Kuingiza sindano", "Kuweka lebo kwenye mirija"], answer: 0, why: "Kila uchukuaji wa damu unaanza na mgonjwa sahihi na agizo sahihi." },
      { objective: "O4", q: "Hematoma ni nini?", options: ["Rangi ya mrija", "Aina ya sindano", "Sehemu safi", "Uvimbe wa damu chini ya ngozi"], answer: 3, why: "Hematoma ni damu inayokusanyika chini ya ngozi." },
      { objective: "O4", q: "Unalegeza tourniquet lini?", options: ["Kabla ya kusafisha sehemu ya kuchoma", "Baada ya kuweka lebo", "Kabla ya kutoa sindano", "Kamwe"], answer: 2, why: "Tourniquet huondolewa kabla ya sindano kutoka." },
      { objective: "O5", q: "Vimelea vinavyoenezwa kwa damu ni nini?", options: ["Vijidudu vilivyo kwenye damu vinavyoweza kusababisha ugonjwa", "Mashine za maabara", "Viongezeo vya mirija", "Aina za bendeji"], answer: 0, why: "Homa ya ini B, homa ya ini C na VVU ni mifano." },
      { objective: "O5", q: "Kanuni ya shirika gani la serikali kuu inawalinda wafanyakazi dhidi ya vimelea vinavyoenezwa kwa damu?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "Kanuni ya OSHA ya Bloodborne Pathogens inashughulikia hili." },
      { objective: "O5", q: "Damu inarukia jichoni mwako. Unafanya nini?", options: ["Endelea kufanya kazi", "Lisugue", "Subiri hadi kesho", "Lisuuze kwa maji na uripoti mara moja"], answer: 3, why: "Suuza mara moja na uripoti ili upimwe." },
      { objective: "O5", q: "Unabadilisha glavu lini?", options: ["Mara moja kwa siku", "Kwa kila mgonjwa", "Zikichanika tu", "Kamwe"], answer: 1, why: "Glavu mpya kwa kila mgonjwa zinazuia kueneza vijidudu." },
      { objective: "O6", q: "Ipi ni sababu ya maabara kukataa sampuli?", options: ["Iliwekwa lebo mbele ya mgonjwa", "Ilipelekwa kwa wakati", "Ina hemolysis", "Iko kwenye mrija sahihi"], answer: 2, why: "Hemolysis inaweza kuharibu matokeo, kwa hiyo maabara inaweza kuikataa." },
      { objective: "O6", q: "Nini kinaandikwa kwenye lebo ya mrija?", options: ["Kile maabara yako inachotaka, kwa kawaida jina, tarehe ya kuzaliwa au ID, tarehe, saa na herufi zako za kwanza", "Rangi ya mrija tu", "Namba ya simu ya mgonjwa", "Hakuna kitu"], answer: 0, why: "Maabara huweka sheria za lebo; taarifa hizi ndizo za kawaida." },
      { objective: "O6", q: "Unaona mrija haujajazwa vya kutosha. Unafanya nini?", options: ["Upeleke hata hivyo", "Ongeza maji", "Uchanganye na mrija mwingine", "Ripoti na ufuate sheria ya maabara yako; usipeleke sampuli mbaya kamwe"], answer: 3, why: "Mrija usiojazwa vya kutosha unaweza kutoa matokeo yasiyo sahihi; fuata sheria ya maabara." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mpango wa mafunzo na mtihani", objective: "O1", notYet: "Hakuna programu wala mtihani uliotajwa, au masharti yamekisiwa.", meets: "Anataja programu ya mafunzo, mtihani wa cheti na masharti yake kutoka kwenye ukurasa rasmi, sheria za jimbo na tarehe zinazolengwa.", exceeds: "Analinganisha programu mbili, pamoja na idadi ya uchukuaji wa damu wenye usimamizi ambao kila moja inatoa." },
      { name: "Kitambulisho cha mgonjwa na agizo", objective: "O2", notYet: "Orodha inaruka kumtambua mgonjwa au kukagua agizo.", meets: "Inaanza na vitambulisho viwili vinavyotajwa na mgonjwa na ukaguzi wa agizo, pamoja na \"simama kama hakilingani\".", exceeds: "Pia inataja bangili ya kitambulisho hospitalini na maagizo maalum kama kufunga kula." },
      { name: "Mpangilio wa kuchukua damu", objective: "O3", notYet: "Mirija inakosekana au iko nje ya mpangilio.", meets: "Mirija yote iko katika mpangilio sahihi kutoka kwenye chati ya programu au ya maabara.", exceeds: "Inaongeza sababu ya mpangilio kuwa muhimu na kugeuza mirija taratibu." },
      { name: "Hatua na dalili za kusimama", objective: "O4", notYet: "Hatua zinakosekana au ziko nje ya mpangilio, au hakuna dalili za kusimama.", meets: "Hatua zote kwa mpangilio, pamoja na dalili zinazomaanisha kusimamisha uchukuaji wa damu.", exceeds: "Inaongeza la kufanya kwa mgonjwa anayezimia." },
      { name: "Usalama", objective: "O5", notYet: "Hakuna hatua ya usafi wa mikono, glavu au vitu vyenye ncha kali.", meets: "Usafi wa mikono, glavu mpya, kifaa cha usalama, sanduku la vitu vyenye ncha kali na la kufanya baada ya kuguswa na damu.", exceeds: "Inataja kutofunika sindano tena kwa mkono na kutojaza sanduku kupita kiasi." },
      { name: "Kuweka lebo na kushughulikia", objective: "O6", notYet: "Lebo zinawekwa kabla ya kuchukua damu au mbali na mgonjwa.", meets: "Lebo zinawekwa mbele ya mgonjwa baada ya kuchukua damu, zinalinganishwa na agizo na sheria za kushughulikia zinafuatwa.", exceeds: "Inaorodhesha sababu tatu za maabara kukataa sampuli na jinsi ya kuepuka kila moja." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaojiandikisha katika programu ya mafunzo ya kuchukua damu iliyoidhinishwa ndani ya siku 90",
      "Wanafunzi wanaofaulu mtihani wa cheti cha kuchukua damu kama CPT ya NHA (wanaripoti wenyewe)",
      "Wanafunzi wanaoajiriwa kama mafundi wa kuchukua damu au wasaidizi wa maabara ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kwa kurasa za NHA na idara ya afya ya jimbo",
      "Karatasi, kalamu za rangi au vipande vya karatasi kwa mazoezi ya mpangilio wa mirija, na kadi ndogo kwa orodha",
      "Chati ya mpangilio wa mirija ya programu yako ya mafunzo, kama unayo",
      "Kama dakika 70 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Hakuna sindano, mirija wala damu katika kozi hii; usiwaache wanafunzi wafanye mazoezi ya kuchukua damu wao kwa wao. Mazoezi ya vitendo ni ya programu iliyoidhinishwa yenye usimamizi.",
      "Wanafunzi wanaohisi kuzimia wakiona damu: waache waruke picha na mzungumze kama kazi hii inawafaa.",
      "Leta chati ya mpangilio wa mirija kutoka programu ya mafunzo au maabara ya karibu, kwa sababu rangi zinaweza kutofautiana.",
      "Fanyeni igizo la kumtambua mgonjwa wawili wawili, pamoja na taarifa moja isiyolingana iliyowekwa makusudi.",
      "Wakumbushe wanafunzi kukagua sheria za jimbo lao; baadhi ya majimbo, kama California, yanatoa vyeti vyao.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
