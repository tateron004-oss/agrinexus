"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-flight-imaging.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Sehemu ya 21, Mifumo ya Ndege Zinazoendeshwa kwa Mbali", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Mifumo ya Ndege Zisizo na Rubani", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-sw",
  lang: "sw",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Droni kwa Ufuatiliaji wa Kilimo 2: Kurusha Droni, Kupiga Picha na Vihisio",
  skills: "Kufanya ukaguzi kabla ya kurusha, Kurusha droni ukiiona kwa macho, Kupanga safari ya kiotomatiki ya kuchora ramani, Kuchagua urefu na mwingiliano, Kuchagua kihisio sahihi, Kupiga picha zilizo wazi na zenye mwanga sawa",
  outcome: "kupanga na kuandaa safari ya droni ya kuchora ramani ya shamba: kuchagua kihisio, urefu, mwingiliano na wakati wa siku, kufanya ukaguzi kabla ya kurusha, na kupiga seti kamili ya picha zilizo wazi na zenye mwanga sawa zinazoweza kuunganishwa kuwa ramani.",
  about: [
    "Hii ni Kozi ya 2 ya mfululizo wa ufuatiliaji kwa droni, kwa wakulima, maafisa ugani, wafanyakazi wa biashara za kilimo na vijana wanaotoa huduma za droni nchini Kenya, Nigeria na kote Afrika. Soma Kozi ya 1 kwanza, au hakikisha tayari unajua sheria za droni za nchi yako na una usajili, leseni na vibali vinavyohitajika.",
    "Katika Sura ya 1 utajifunza kuandaa droni, kuirusha kwa usalama ukiiona, na kupanga safari ya kiotomatiki ya kuchora ramani kwa urefu na mwingiliano sahihi. Katika Sura ya 2 utajifunza kila kihisio kinaonyesha nini (rangi, multispectral, joto) na jinsi mwanga, upepo na wakati vinavyoleta tofauti kati ya ramani yenye manufaa na isiyo na manufaa.",
    "Mifano inatumia kazi halisi za shamba: shamba la mahindi la hekta 2, kitalu cha chai, shamba la mihogo, kitalu-nyumba (greenhouse) cha mboga na matunda. Kila somo linaishia na kazi fupi ya mazoezi. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango kamili wa safari ya kupiga picha kwa shamba la mahindi la hekta 2 (halisi au la mfano): lengo la safari, kihisio, urefu wa kurusha na undani wa picha unaoonyeshwa na app yako ya kurusha, mwingiliano wa mbele na wa pembeni, kasi ya kurusha, idadi ya betri, wakati wa siku, mipaka ya hali ya hewa, mahali pa kupaa, na orodha ya ukaguzi kabla ya kurusha. Kama una droni na vibali vinavyohitajika, irushe na ukague kila picha kabla ya kuondoka shambani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima, maafisa ugani, wafanyakazi wa biashara za kilimo na vijana wanaotoa huduma za droni nchini Kenya, Nigeria na kote Afrika wanaosoma Kozi ya 2 ya mfululizo wa ufuatiliaji kwa droni.",
    startingPoint: "Wanafunzi wanajua droni inaweza kufanya nini shambani na jinsi ya kupata sheria za droni za nchi yao (Kozi ya 1). Wachache wamewahi kufanya ukaguzi ulioandikwa kabla ya kurusha, kurusha gridi ya ramani iliyopangwa, kuweka urefu na mwingiliano kwa undani wanaohitaji, au kujua kihisio na mwanga gani vinatoa ramani inayofaa.",
    gap: "Safari zisizoandaliwa vizuri husababisha ajali, na safari zilizopangwa vibaya au kwa wakati mbaya hutoa picha zenye ukungu na zisizo sawa ambazo haziwezi kuunganishwa wala kulinganishwa; hii inapoteza betri, muda na pesa za wateja. Kupanga na kuandaa safari ya ramani vizuri hutoa seti kamili ya picha kali mara ya kwanza.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila neno la kurusha na la kupiga picha linaelezwa",
      "Vifaa: simu au tableti yenye app ya ramani inasaidia; droni inahitajika tu kwa safari ya hiari",
      "Sheria: kurusha ni kwa usajili, leseni na vibali ambavyo nchi inahitaji tu",
      "Hali ya shambani: upepo, joto, mawingu yasiyo sawa na kukosa mtandao wa simu katika mashamba mengi",
      "Muda: masomo mafupi, pamoja na muda wa kuandika mpango wa safari"
    ],
    prerequisites: "\"Droni kwa Ufuatiliaji wa Kilimo 1: Utangulizi, Sheria na Usalama\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kabla ya kila safari", action: "kufanya ukaguzi kamili kabla ya kurusha wa droni, betri, kidhibiti, mipangilio na nyaraka", standard: "bila kuruka kipengele chochote cha orodha" },
    { id: "O2", condition: "Katika safari ya mazoezi au iliyoidhinishwa", action: "kupaa, kurusha mzunguko rahisi na kutua huku ukiiona droni", standard: "ndani ya kikomo cha urefu kinachoruhusiwa kisheria na kutua betri ikiwa bado na chaji ya ziada" },
    { id: "O3", condition: "Kwa shamba linalochorwa ramani", action: "kupanga safari ya gridi ya ramani yenye urefu, undani wa picha, mwingiliano, kasi na betri", standard: "kwa mwingiliano wa takriban asilimia 70 hadi 80 mbele na asilimia 60 hadi 70 pembeni" },
    { id: "O4", condition: "Ukipewa picha ya rangi ya droni yenye undani mkubwa", action: "kuonyesha mapengo, magugu, maji, mimea iliyoanguka na uharibifu", standard: "na kuweka alama kila sehemu ya kukagua kwa miguu" },
    { id: "O5", condition: "Ukipewa swali la shamba", action: "kuchagua kati ya kihisio cha RGB, multispectral na cha joto", standard: "kwa sababu inayofaa swali na gharama" },
    { id: "O6", condition: "Siku ya safari ya ramani", action: "kuweka mipaka ya wakati, mwanga na upepo na kukagua kila picha kabla ya kuondoka shambani", standard: "ili picha ziwe kali, zenye mwanga sawa na kamili" }
  ],
  chapters: [
    {
      name: "Sura 1: Kurusha droni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuandaa droni: ukaguzi kabla ya kurusha",
          minutes: 5,
          goal: "Fanya ukaguzi kamili wa droni kabla ya kila safari.",
          text: [
            "Ajali nyingi za droni zinaanzia ardhini: propela iliyopasuka, betri yenye nusu chaji, ramani ya zamani ndani ya app, au dira (compass) ambayo haikurekebishwa. Orodha ya ukaguzi iliyoandikwa, ikitumiwa kila mara, inazuia nyingi kati ya hizo.",
            "Kagua droni (fremu, mikono, propela zimekazwa na hazina uharibifu, kamera safi na imefungwa vizuri), betri (zimejaa chaji, hazijavimba, sehemu za kuunganisha ni safi), kidhibiti na simu au tableti (vina chaji, app imesasishwa kabla hujaondoka nyumbani, ramani za nje ya mtandao zimepakuliwa kama hakuna mtandao shambani), na mipangilio (urefu wa kurudi nyumbani uko juu ya mti au mnara mrefu zaidi, mahali pa nyumbani pamerekodiwa).",
            "Fanya pia ukaguzi wa nyaraka: usajili, leseni ya rubani na kibali chochote cha kurusha ambacho mamlaka yako inahitaji kwa eneo hili, ukiwa navyo mkononi au kwenye simu yako."
          ],
          steps: ["Ukaguzi wa nyaraka: usajili, leseni, vibali vya eneo hili.", "Droni: fremu, mikono, propela, kamera.", "Betri: zina chaji, hazijavimba, sehemu za kuunganisha ni safi.", "Kidhibiti na simu au tableti: vina chaji, app imesasishwa, ramani za nje ya mtandao ziko tayari.", "Mipangilio: urefu wa kurudi nyumbani, mahali pa nyumbani, kurekebisha dira kama app inaomba.", "Angalia pande zote: watu, wanyama, upepo, kisha anza."],
          words: [["Ukaguzi kabla ya kurusha", "orodha ya ukaguzi unaofanywa kabla ya kila safari."], ["Kurudi nyumbani (RTH)", "mpangilio unaoifanya droni irudi yenyewe mahali ilipopaa, kwa mfano betri ikiwa chini au mawasiliano yakikatika."], ["Mahali pa nyumbani", "mahali droni itakaporudi, kwa kawaida pale ilipopaa."]],
          slides: [
            { title: "Ajali zinaanzia ardhini", bullets: ["Propela zilizopasuka, betri dhaifu", "Ramani za zamani kwenye app, dira isiyorekebishwa", "Orodha ya ukaguzi kila mara inazuia nyingi"] },
            { title: "Kagua vifaa", bullets: ["Fremu, mikono, propela, kamera", "Betri zina chaji, hazijavimba", "Kidhibiti, simu, app imesasishwa, ramani za nje ya mtandao"] },
            { title: "Kagua mipangilio", bullets: ["Urefu wa kurudi nyumbani juu ya kizuizi kirefu zaidi", "Mahali pa nyumbani pamerekodiwa", "Dira imerekebishwa kama inaombwa"] },
            { title: "Kagua nyaraka", bullets: ["Usajili na leseni ya rubani", "Vibali vya eneo hili", "Kuwa navyo mkononi"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Andika orodha yako ya ukaguzi kabla ya kurusha yenye angalau vipengele 12 chini ya vichwa vinne: nyaraka, droni, betri na kidhibiti, mipangilio. Iweke kwenye simu yako.",
          youCanNow: "kuandaa droni kwa ukaguzi kamili kabla ya kurusha unaohusu nyaraka, droni, betri, kidhibiti na mipangilio.",
          quickCheck: [
            { objective: "O1", q: "Mahali pa nyumbani ni nini?", options: ["Nyumba ya rubani", "Mahali droni inarudi yenyewe inapotumia kurudi nyumbani", "Sehemu ya juu kabisa ya shamba", "Duka la droni"], answer: 1, why: "Mahali pa nyumbani hurekodiwa kabla ya kupaa ili kurudi nyumbani kuirudishe droni hapo." },
            { objective: "O1", q: "Unaenda shamba lisilo na mtandao wa simu. Unafanya nini kabla ya kuondoka nyumbani?", options: ["Hakuna; app itafanya kazi hata hivyo", "Kupanga kusasisha app ukiwa shambani", "Kuacha betri bila chaji", "Kupakua ramani za nje ya mtandao na kusasisha app"], answer: 3, why: "App zinapaswa kusasishwa na ramani za nje ya mtandao kupakuliwa kabla hujaondoka, kwa sababu huenda hakuna mtandao shambani." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kurusha kwa usalama ukiiona droni",
          minutes: 5,
          goal: "Paa, rusha mzunguko rahisi na utue huku ukiiona droni.",
          text: [
            "Kuona kwa macho (VLOS) maana yake ni kwamba wewe, au mwangalizi wako, mnaweza kuiona droni kwa macho yenu wenyewe, bila darubini, muda wote. Safari nyingi za shambani za wakulima wadogo na marubani wapya ni za VLOS. Kurusha mbali zaidi ya unavyoona kunahitaji kibali maalum. Kwa mfano, Sehemu ya 21 ya Nigeria inahitaji VLOS kwa droni ndogo na inaweka urefu wa juu wa mita 120 (futi 400) juu ya ardhi kwa shughuli nyingi; kagua mipaka ya nchi yako mwenyewe.",
            "Paa kutoka mahali pako palipo wazi, panda hadi urefu salama juu ya miti, na isimamishe hewani kwa sekunde chache kuhakikisha droni imetulia. Rusha polepole. Iweke droni mbele yako, si juu ya kichwa wala nyuma yako, ili usipoteze kujua inaelekea upande gani.",
            "Angalia betri na upepo. Tua ukiwa na betri ya kutosha kutua kwa usalama, kamwe si kwenye asilimia ya mwisho. Droni ikisukumwa sana na upepo, irudishe na uitue."
          ],
          steps: ["Simama mahali pako pa kupaa pamoja na mwangalizi wako.", "Paa na upande juu ya miti; isimamishe hewani na uhakikishe imetulia.", "Rusha polepole kwa umbo la mraba mbele yako, ukiendelea kuiona.", "Angalia betri na upepo kwenye skrini.", "Rudisha, shusha polepole na utue betri ikiwa bado na chaji ya ziada."],
          words: [["VLOS", "kuona kwa macho (visual line of sight): unaiona droni kwa macho yako mwenyewe safari nzima."], ["BVLOS", "mbali zaidi ya kuona kwa macho (beyond visual line of sight): kurusha mbali kuliko unavyoweza kuona; kunahitaji kibali maalum."], ["AGL", "juu ya usawa wa ardhi (above ground level): urefu unaopimwa kutoka ardhi iliyo chini ya droni."]],
          slides: [
            { title: "Kuona kwa macho", bullets: ["Wewe au mwangalizi wako mnaiona droni daima", "Bila darubini", "Mbali zaidi ya kuona kunahitaji kibali maalum"] },
            { title: "Jua kikomo cha urefu", bullets: ["Sehemu ya 21 ya Nigeria: m 120 (futi 400) AGL kwa safari nyingi", "Kagua kikomo cha nchi yako"] },
            { title: "Irushe vizuri", bullets: ["Panda juu ya miti, isimamishe hewani, hakikisha imetulia", "Rusha polepole, iweke mbele yako", "Angalia betri na upepo"] },
            { title: "Tua ukiwa na akiba", bullets: ["Kamwe si kwenye asilimia ya mwisho", "Ikisukumwa sana: irudishe na uitue"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Kama una droni na kibali, rusha mraba polepole mbele yako na utue betri ikiwa bado na chaji ya ziada. Kama huna, tumia app ya bure ya kuiga urushaji wa droni (simulator) au tazama video ya mafunzo na uandike hatua ulizoziona.",
          youCanNow: "kupaa, kurusha mzunguko rahisi ukiiona droni, na kutua kwa usalama betri ikiwa bado na chaji ya ziada.",
          quickCheck: [
            { objective: "O2", q: "Kuiweka droni \"mbele yako\" kunasaidia nini?", options: ["Kuchaji betri", "Kufanya picha ziwe na mwanga zaidi", "Kujua droni inaelekea upande gani", "Kurusha mbali zaidi ya kuona"], answer: 2, why: "Kuiweka droni mbele yako, si juu wala nyuma, kunakusaidia kufuatilia mwelekeo wake." },
            { objective: "O2", q: "Mara baada ya kupaa droni inasukumwa sana na upepo. Unafanya nini?", options: ["Kuirudisha na kuitua", "Kupanda juu zaidi kukwepa upepo", "Kurusha kwa kasi zaidi ili umalize", "Kuangalia pembeni na kuiacha iruke"], answer: 0, why: "Droni ikisukumwa sana na upepo, irudishe na uitue." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kupanga safari ya kiotomatiki ya kuchora ramani",
          minutes: 6,
          goal: "Panga safari ya gridi ya ramani yenye urefu, mwingiliano na kasi sahihi.",
          text: [
            "Ili kuchora ramani ya shamba, droni huruka kwenda na kurudi kwa mistari iliyonyooka (gridi, wakati mwingine huitwa mzunguko wa mashine ya kukata nyasi) na kupiga picha zinazoingiliana. App za ramani zinakuruhusu kuchora mpaka wa shamba, kisha zinakupangia mistari.",
            "Urefu unaamua undani. Unavyorusha juu zaidi, ndivyo kila pikseli inavyofunika ardhi kubwa zaidi na undani unapungua, lakini unamaliza haraka zaidi. App inaonyesha hili kama GSD (ground sampling distance), kwa mfano sm 2 kwa pikseli. Kuhesabu mimea ya mahindi unahitaji undani mkubwa; kuona sehemu zenye maji yaliyotuama, undani mdogo unatosha. Kamwe usipange juu ya kikomo chako cha urefu kisheria.",
            "Mwingiliano ni kiasi ambacho kila picha inashirikiana na inayofuata. Programu inahitaji mwingiliano mkubwa ili kuunganisha picha kuwa ramani moja; miongozo mingi ya ramani inapendekeza takriban asilimia 70 hadi 80 mbele na asilimia 60 hadi 70 pembeni, zaidi juu ya mazao marefu yanayofanana kama mahindi au chai. Rusha polepole kiasi kwamba picha ziwe kali, na panga betri za kutosha kumaliza."
          ],
          steps: ["Chora mpaka wa shamba kwenye app ya ramani.", "Chagua urefu: kagua GSD inayotolewa na ubaki chini ya kikomo chako cha kisheria.", "Weka mwingiliano wa mbele na wa pembeni (kwa mfano asilimia 75 na 65).", "Kagua muda wa safari na idadi ya betri.", "Hifadhi mpango na uukague tena kabla ya kwenda shambani."],
          words: [["Safari ya gridi", "safari ya mistari iliyonyooka ya kwenda na kurudi inayofunika shamba lote."], ["Mwingiliano", "kiasi ambacho kila picha inashirikiana na inayofuata, kwa asilimia."], ["GSD", "ground sampling distance: kiasi cha ardhi ambacho pikseli moja inafunika, kama sm 2."], ["Orthomosaic", "picha moja kubwa, sahihi kama ramani, iliyounganishwa kutoka picha nyingi zinazoingiliana."]],
          slides: [
            { title: "Safari ya kuchora ramani", bullets: ["Mistari iliyonyooka ya kwenda na kurudi", "Picha zinaingiliana", "Programu inaziunganisha kuwa ramani moja"] },
            { title: "Urefu unaamua undani", bullets: ["Juu zaidi = undani mdogo, haraka zaidi", "Chini zaidi = undani mkubwa, betri zaidi", "Baki chini ya kikomo chako cha urefu kisheria"] },
            { title: "Mwingiliano unawezesha kuunganisha", bullets: ["Takriban 70-80% mbele, 60-70% pembeni ni kawaida", "Zaidi juu ya mazao marefu yanayofanana"] },
            { title: "Kabla hujaenda", bullets: ["Kagua GSD, muda wa safari, betri", "Hifadhi mpango na uukague"] }
          ],
          tryIt: "Fungua app ya bure ya ramani au ya kupanga safari (au mpangaji wa safari ndani ya app ya droni yako) na uchore shamba la hekta 2. Jaribu urefu tatu na uandike GSD na muda wa safari kwa kila mmoja.",
          youCanNow: "kupanga safari ya gridi ya ramani na kuchagua urefu, mwingiliano na kasi kwa kazi husika.",
          quickCheck: [
            { objective: "O3", q: "Gridi au mzunguko wa mashine ya kukata nyasi ni nini?", options: ["Mistari iliyonyooka ya kwenda na kurudi juu ya shamba", "Duara kuzunguka mti mmoja", "Picha moja kutoka juu sana", "Safari kufuata barabara"], answer: 0, why: "Safari za ramani huruka mistari iliyonyooka ya kwenda na kurudi ili picha zifunike shamba lote kwa mwingiliano." },
            { objective: "O3", q: "Unataka kuhesabu mimea ya mahindi lakini mpango wako unatoa undani mdogo. Unabadilisha nini?", options: ["Kurusha kwa kasi zaidi", "Kupunguza mwingiliano", "Kurusha chini zaidi kupata GSD ndogo zaidi, ndani ya kikomo cha kisheria", "Kurusha jioni"], answer: 2, why: "Kurusha chini zaidi kunatoa undani mkubwa kwa kila pikseli, lakini kamwe usivuke mipaka yako ya kisheria." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kurusha droni",
        questions: [
          { objective: "O1", q: "Kwa nini utumie orodha ya ukaguzi iliyoandikwa kila mara kabla ya kurusha?", options: ["Inaonekana ya kitaalamu", "Ajali nyingi zinaanza na kitu kilichosahaulika ardhini", "Droni inaihitaji ili kuwaka", "Inachukua nafasi ya leseni"], answer: 1, why: "Orodha ya ukaguzi inagundua propela zilizopasuka, betri dhaifu na mipangilio isiyo sahihi." },
          { objective: "O1", q: "Urefu wa kurudi nyumbani unapaswa kuwekwa wapi?", options: ["Chini kadiri iwezekanavyo", "Chini ya mti mrefu zaidi", "Juu ya mti au mnara mrefu zaidi katika eneo", "Haijalishi"], answer: 2, why: "Droni lazima ipite juu ya kila kizuizi inaporudi nyumbani yenyewe." },
          { objective: "O2", q: "VLOS maana yake ni nini?", options: ["Unaiona droni kwa macho yako mwenyewe safari nzima", "Droni inakuona wewe", "Droni inaruka usiku", "Droni inaruka mbali zaidi ya upeo wa macho"], answer: 0, why: "Kuona kwa macho maana yake ni kuiona droni bila kifaa cha kusaidia muda wote." },
          { objective: "O3", q: "Unarusha juu zaidi katika safari ya ramani. Nini kinatokea?", options: ["Undani zaidi kwa kila pikseli", "Picha zinaacha kuingiliana", "Hakuna kinachobadilika", "Kila pikseli inafunika ardhi zaidi na unamaliza haraka zaidi"], answer: 3, why: "Safari za juu zaidi zinatoa GSD kubwa zaidi (undani mdogo) lakini zinafunika shamba haraka zaidi." },
          { objective: "O3", q: "Kwa nini picha za ramani zinahitaji mwingiliano mkubwa?", options: ["Ili kutumia betri zaidi", "Ili programu iweze kuziunganisha kuwa ramani moja", "Ili picha ziwe na mwanga zaidi", "Kwa sababu sheria inasema asilimia 100"], answer: 1, why: "Programu ya kuunganisha inalinganisha vitu vinavyoonekana katika picha zinazoingiliana." }
        ]
      }
    },
    {
      name: "Sura 2: Picha za angani na vihisio",
      lessons: [
        {
          objectives: ["O4"],
          title: "Picha za rangi (RGB): unachoweza kuona",
          minutes: 5,
          goal: "Soma picha ya rangi ya droni yenye undani mkubwa kutafuta mapengo, magugu, maji na uharibifu.",
          text: [
            "Kamera ya kawaida ya rangi (RGB) ndicho kihisio chenye manufaa zaidi kwa mashamba mengi, na inakuja na karibu kila droni. Kwa sentimita chache kwa pikseli unaweza kuona mmea mmoja mmoja wa mahindi, maharagwe au mhogo.",
            "Katika picha za rangi tafuta: mapengo katika mistari (mbegu hazikuota vizuri au mimea ililiwa na wadudu), sehemu za magugu kati ya mistari, maji yaliyotuama na udongo mtupu, mahindi au mtama ulioanguka, uharibifu wa mvua ya mawe au upepo, ng'ombe au mbuzi mahali pasipofaa, na mitaro iliyoziba au uzio uliovunjika.",
            "Picha za rangi zinaweza pia kudokeza matatizo ya virutubisho au magonjwa (rangi ya njano, kijani kisicho sawa), lakini zinayaonyesha baadaye kuliko jicho la mtu ardhini au kamera ya multispectral. Kila mara weka alama mahali hapo na upakague kwa miguu."
          ],
          steps: ["Fungua picha au ramani na ukuze nje uone shamba lote.", "Tafuta kitu chochote kisicho sawa: mapengo, mabadiliko ya rangi, maji, udongo mtupu.", "Kuza ndani kwa kila kimoja.", "Weka alama kila sehemu kwa namba na maelezo mafupi.", "Tembea hadi sehemu hizo kuzikagua."],
          words: [["Picha yenye undani mkubwa", "picha yenye maelezo madogo madogo, ambapo kila pikseli inafunika kipande kidogo cha ardhi."], ["Kuanguka kwa mimea (lodging)", "mabua ya mahindi, mtama au ngano yanapopinda au kuanguka."]],
          slides: [
            { title: "RGB: kihisio cha kazi za kila siku", bullets: ["Kinakuja na karibu kila droni", "Kinaonyesha mmea mmoja mmoja kwa sm chache kwa pikseli"] },
            { title: "Nini cha kutafuta", bullets: ["Mapengo katika mistari, sehemu za magugu", "Maji yaliyotuama, udongo mtupu", "Mahindi yaliyoanguka, uharibifu wa mvua ya mawe au upepo", "Wanyama, uzio uliovunjika, mitaro iliyoziba"] },
            { title: "Mipaka yake", bullets: ["Kinaonyesha magonjwa na upungufu wa virutubisho kwa kuchelewa", "Kila mara kagua sehemu hizo kwa miguu"] }
          ],
          tryIt: "Tafuta picha ya droni au picha ya setilaiti ya shamba mtandaoni (au tumia yako mwenyewe). Orodhesha vitu vitano unavyoweza kuona, weka alama mahali kila kimoja kilipo, na useme ungekagua nini ardhini.",
          youCanNow: "kusoma picha ya rangi ya droni na kuweka alama mapengo, magugu, maji na uharibifu ili kuvikagua ardhini.",
          quickCheck: [
            { objective: "O4", q: "Katika picha ya rangi, pengo katika mstari linaweza kuonyesha nini?", options: ["Mbolea nyingi mno", "Betri yenye nguvu", "Mavuno mazuri", "Mbegu hazikuota vizuri au mimea ililiwa na wadudu"], answer: 3, why: "Mapengo katika mistari mara nyingi yanamaanisha mbegu hazikuota au mimea ililiwa." },
            { objective: "O4", q: "Picha inaonyesha sehemu isiyo sawa yenye rangi ya njano katika shamba la maharagwe. Unafanya nini?", options: ["Kunyunyizia dawa shamba lote", "Kuweka alama mahali hapo na kupakagua kwa miguu", "Kupuuza", "Kufuta picha"], answer: 1, why: "Picha za rangi zinaweza kudokeza matatizo, lakini mahali hapo lazima pakaguliwe ardhini." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Vihisio vya multispectral na vya joto",
          minutes: 6,
          goal: "Chagua kati ya vihisio vya RGB, multispectral na vya joto kwa swali la shamba.",
          text: [
            "Majani mabichi yenye afya huakisi mwanga mwingi wa near-infrared, ambao jicho haliwezi kuuona. Majani yaliyo na shida au magonjwa huakisi kidogo. Kamera ya multispectral hupima mikanda kadhaa ya mwanga, ikiwemo near-infrared na red edge, ili programu iweze kukokotoa vipimo vya uoto kama NDVI vinavyoonyesha nguvu ya mimea. FAO (Shirika la Chakula na Kilimo la Umoja wa Mataifa) inatumia NDVI kutoka setilaiti kufuatilia afya ya uoto kote Afrika; droni hufanya hivyo hivyo kwa kiwango cha shamba.",
            "Kamera ya joto (thermal) hupima joto la uso. Mimea isiyo na maji ya kutosha hufunga vitundu vyake na kupata joto, kwa hiyo picha za joto zinaweza kuonyesha upungufu wa maji na mabomba ya umwagiliaji yaliyoziba. Kamera ya joto pia ni nzuri kwa kutafuta wanyama usiku au alfajiri.",
            "Vihisio hivi vinagharimu zaidi na vinahitaji matumizi ya uangalifu (kurekebisha, wakati sahihi wa siku). Vichague swali linapovihitaji: shida ya mapema katika shamba kubwa la chai au mboga zinazomwagiliwa, ndiyo; kuhesabu mapengo katika shamba la maharagwe la ekari 1, hapana, rangi inatosha."
          ],
          words: [["Near-infrared (NIR)", "mwanga ulio mbele kidogo ya rangi nyekundu ambao watu hawawezi kuuona; majani yenye afya huuakisi kwa wingi."], ["Kipimo cha uoto", "namba inayokokotolewa kutoka mikanda ya mwanga inayoonyesha jinsi mimea ilivyo ya kijani na yenye nguvu."], ["NDVI", "Normalized Difference Vegetation Index: kipimo cha uoto kinachotumika sana, kutoka mwanga mwekundu na near-infrared, kutoka -1 hadi +1; juu zaidi kwa kawaida maana yake ni mimea ya kijani iliyo minene na yenye afya zaidi."]],
          slides: [
            { title: "Multispectral", bullets: ["Hupima mwanga mwekundu, red edge, near-infrared na zaidi", "Programu hutengeneza ramani za vipimo vya uoto kama NDVI", "Huonyesha shida ya mimea mapema kuliko rangi"] },
            { title: "Joto (thermal)", bullets: ["Hupima joto la uso", "Mimea yenye upungufu wa maji ina joto zaidi", "Hupata mabomba ya umwagiliaji yaliyoziba na wanyama alfajiri"] },
            { title: "Chagua kwa kufuata swali", bullets: ["Mapengo na magugu: RGB", "Shida ya mapema katika mazao ya thamani kubwa: multispectral", "Upungufu wa maji au wanyama: joto"] }
          ],
          sources: [{ name: "FAO GIEWS: Uangalizi wa Dunia kutoka Angani (NDVI na viashiria vya uoto)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Kwa kila swali, chagua RGB, multispectral au joto na uandike kwa nini: (a) Je, bomba langu la umwagiliaji wa matone limeziba? (b) Maharagwe hayakuota wapi? (c) Je, kitalu kimoja cha chai kina shida kabla majani hayajabadilika rangi?",
          youCanNow: "kusema vihisio vya multispectral na vya joto vinaonyesha nini na kuchagua kihisio sahihi kwa swali la shamba.",
          quickCheck: [
            { objective: "O5", q: "Kamera ya joto hupima nini?", options: ["Urefu wa mimea", "Joto la uso", "Virutubisho vya udongo", "Kiasi cha mvua"], answer: 1, why: "Kamera ya joto hupima joto la uso, ambalo linaweza kuonyesha upungufu wa maji." },
            { objective: "O5", q: "Shamba kubwa la chai linataka kugundua shida mapema katika vitalu vyake. Unapendekeza kihisio gani?", options: ["Hakuna", "Kamera ya joto kwa wanyama tu", "Kamera ya simu", "Kamera ya multispectral"], answer: 3, why: "Kamera za multispectral hupima near-infrared na red edge, ambazo zinaonyesha shida ya mimea mapema zaidi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kupiga picha nzuri: mwanga, upepo na wakati",
          minutes: 5,
          goal: "Andaa safari ili kila picha iwe kali, yenye mwanga sawa na inayofaa kutumika.",
          text: [
            "Picha zilizopigwa kwa tofauti ya wiki kadhaa zinaweza kulinganishwa tu kama zimepigwa kwa njia ileile. Rusha karibu na saa sita mchana, vivuli vikiwa vifupi, na katika mwanga usiobadilika: ama jua kamili au mawingu yaliyotanda sawa, si vipande vya mawingu vinavyopita juu ya shamba. Rusha kwa urefu na mipangilio ileile kila mara.",
            "Upepo hutikisa droni na kusogeza majani, jambo linalofanya picha ziwe na ukungu na kuharibu kuunganisha. Rusha polepole zaidi katika upepo mdogo na usirushe kabisa katika upepo mkali. Hakikisha lenzi ni safi na kamera imewekwa kulenga (focus) vizuri; app nyingi za ramani hukuwekea mipangilio ya kamera.",
            "Kwa kamera za multispectral, piga picha ya bamba la kurekebisha (calibration panel, kadi yenye uakisi unaojulikana inayokuja na kihisio) kabla na baada ya safari, ili programu iweze kusahihisha mwanga. Kabla ya kuondoka shambani, pitia picha: kama baadhi zina ukungu, ni nyeusi au hazipo, rusha tena sehemu hiyo ukiwa bado pale."
          ],
          steps: ["Panga kurusha karibu na saa sita mchana katika mwanga usiobadilika.", "Kagua upepo; punguza kasi katika upepo mdogo, ahirisha katika upepo mkali.", "Safisha lenzi; kagua mipangilio ya kamera.", "Multispectral: piga picha ya bamba la kurekebisha kabla na baada.", "Kabla ya kuondoka, kagua picha na urushe tena sehemu yoyote mbaya."],
          words: [["Bamba la kurekebisha", "kadi yenye mng'ao unaojulikana inayopigwa picha kabla na baada ya safari ya multispectral ili kusahihisha mwanga."], ["Ukungu", "picha isipokuwa kali kwa sababu kamera au mimea ilisogea."]],
          slides: [
            { title: "Njia ileile, kila mara", bullets: ["Rusha karibu na saa sita mchana: vivuli vifupi", "Mwanga usiobadilika: jua kamili au mawingu sawa", "Urefu na mipangilio ileile kila safari"] },
            { title: "Shinda ukungu", bullets: ["Punguza kasi katika upepo mdogo", "Ahirisha katika upepo mkali", "Lenzi safi, mipangilio sahihi ya kamera"] },
            { title: "Ziada za multispectral", bullets: ["Piga picha ya bamba la kurekebisha", "Kabla NA baada ya safari"] },
            { title: "Kagua kabla hujaondoka", bullets: ["Pitia picha", "Rusha tena sehemu zenye ukungu, nyeusi au zisizokuwepo"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako kamili wa safari ya kupiga picha kwa shamba la mahindi la hekta 2: lengo, kihisio, urefu na GSD, mwingiliano, kasi, betri, wakati wa siku, mipaka ya hali ya hewa, mahali pa kupaa na orodha ya ukaguzi. Kama una droni na vibali vinavyohitajika, irushe na ukague kila picha kabla hujaondoka.",
          youCanNow: "kupanga na kupiga seti ya picha kali zenye mwanga sawa zinazoweza kuunganishwa kuwa ramani ya shamba na kulinganishwa kwa muda.",
          quickCheck: [
            { objective: "O6", q: "Bamba la kurekebisha ni nini?", options: ["Propela ya akiba", "Mfuko wa betri", "Kadi yenye uakisi unaojulikana inayopigwa picha kabla na baada ya safari ya multispectral", "Skrini ya kidhibiti"], answer: 2, why: "Kupiga picha ya bamba la kurekebisha kunaiwezesha programu kusahihisha mwanga wa siku hiyo." },
            { objective: "O6", q: "Vipande vya mawingu vinapita haraka juu ya shamba saa sita mchana. Unafanya nini?", options: ["Kusubiri jua kamili au mawingu sawa kabla ya kurusha", "Kurusha sasa na kutumaini", "Kurusha jioni badala yake", "Kurusha juu zaidi ili kupita juu ya mawingu"], answer: 0, why: "Mwanga usiobadilika, ama jua kamili au mawingu sawa, hutoa picha zenye mwanga sawa zinazoweza kulinganishwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Picha za angani na vihisio",
        questions: [
          { objective: "O4", q: "Kihisio gani kinatosha kupata mapengo katika shamba la maharagwe la ekari 1?", options: ["Cha joto tu", "Multispectral tu", "Kamera ya kawaida ya rangi (RGB)", "Hakuna kihisio kinachoweza"], answer: 2, why: "Mapengo yanaonekana kwa urahisi katika picha za rangi kwa sentimita chache kwa pikseli." },
          { objective: "O5", q: "Majani mabichi yenye afya huakisi kwa wingi:", options: ["Mwanga wa near-infrared", "Sauti", "Joto tu", "Mawimbi ya redio"], answer: 0, why: "Muundo wa jani lenye afya huakisi kwa nguvu katika near-infrared; vipimo vya uoto vinatumia hili." },
          { objective: "O5", q: "Picha ya joto inaonyesha kitalu kimoja cha nyanya kina joto zaidi kuliko vingine. Sababu inayowezekana ya kukagua ni:", options: ["Rangi ya mbolea nyingi mno", "Droni ilikuwa juu mno", "Kitalu ni cha kijani zaidi", "Upungufu wa maji au bomba la matone lililoziba"], answer: 3, why: "Mimea isiyo na maji ya kutosha hupata joto kwa sababu hufunga vitundu vyake." },
          { objective: "O6", q: "Ni wakati gani bora wa kurusha ili kupata picha zinazolinganishwa?", options: ["Macheo wiki moja na machweo wiki inayofuata", "Karibu na saa sita mchana, katika mwanga usiobadilika, kwa njia ileile kila mara", "Katika vipande vya mawingu vinavyopita", "Usiku"], answer: 1, why: "Vivuli vifupi na mwanga usiobadilika hufanya picha zilinganishwe." },
          { objective: "O6", q: "Baadhi ya picha zina ukungu unapozikagua shambani. Unapaswa:", options: ["Kurusha tena sehemu hiyo kabla hujaondoka", "Kwenda nyumbani na kutumaini kuunganisha kutafanya kazi", "Kufuta seti nzima", "Kurusha kwa kasi zaidi wakati ujao"], answer: 0, why: "Kurekebisha ukiwa pale kunaokoa safari nyingine na kunatoa ramani kamili." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni kwa Ufuatiliaji wa Kilimo 2: Kurusha Droni, Kupiga Picha na Vihisio",
    questions: [
      { objective: "O1", q: "Ajali nyingi za droni zinaanzia wapi?", options: ["Angani tu", "Ardhini, kwa kitu kilichosahaulika wakati wa maandalizi", "Ofisini", "Kwenye programu baada ya kutua"], answer: 1, why: "Propela zilizopasuka, betri dhaifu na mipangilio isiyo sahihi husababisha ajali nyingi." },
      { objective: "O1", q: "Kipi ni sehemu ya ukaguzi wa nyaraka?", options: ["Ukazaji wa propela", "Kusafisha lenzi", "Usajili, leseni na vibali vya eneo", "Kuvimba kwa betri"], answer: 2, why: "Ukaguzi wa nyaraka unathibitisha kwamba unaruhusiwa kurusha hapo." },
      { objective: "O1", q: "Betri inaonekana imevimba. Unapaswa:", options: ["Kutoitumia", "Kuitumia kwa safari fupi", "Kuibana iwe bapa", "Kuichaji zaidi"], answer: 0, why: "Betri iliyovimba inaweza kuharibika au kushika moto; usirushe nayo." },
      { objective: "O1", q: "Kwa nini upakue ramani za nje ya mtandao kabla ya kwenda shamba la kijijini?", options: ["Kuokoa pesa za mafuta", "Kuifanya droni iwe na kasi zaidi", "Kwa sababu sheria inahitaji", "Huenda hakuna mtandao wa simu shambani"], answer: 3, why: "Bila mtandao, app inaweza kushindwa kufungua ramani inazohitaji." },
      { objective: "O1", q: "Kurudi nyumbani ni:", options: ["Mpangilio unaoirudisha droni yenyewe mahali ilipopaa", "Kitufe kinachozima injini", "Hali ya kamera", "Aina ya betri"], answer: 0, why: "RTH huirudisha droni nyumbani betri ikiwa chini au mawasiliano yakikatika." },
      { objective: "O2", q: "Kurusha mbali zaidi ya kuona kwa macho:", options: ["Kunaruhusiwa kila mara", "Kunahitaji kibali maalum", "Kunahitajika kwa kuchora ramani", "Ni salama zaidi"], answer: 1, why: "BVLOS ina hatari kubwa zaidi na inahitaji idhini." },
      { objective: "O2", q: "Sehemu ya 21 ya Nigeria inaweka urefu wa juu wa kawaida wa:", options: ["Mita 10", "Mita 1,000", "Mita 120 (futi 400) juu ya ardhi", "Hakuna kikomo"], answer: 2, why: "Sehemu ya 21 inatumia m 120 (futi 400) AGL kwa shughuli nyingi; kagua kikomo cha nchi yako." },
      { objective: "O2", q: "Wakati wa safari, droni unapaswa kuiweka wapi?", options: ["Nyuma yako", "Moja kwa moja juu ya kichwa", "Mahali usipoiona", "Mbele yako, ukiiona"], answer: 3, why: "Ikiwa mbele na unaiona, unajua inaelekea upande gani." },
      { objective: "O2", q: "Unapaswa kutua lini?", options: ["Betri ikiwa bado na chaji ya ziada", "Kwenye asilimia 0", "Pale tu droni inapojitua yenyewe", "Simu ikijaa"], answer: 0, why: "Acha betri ya kutosha kushuka na kutua kwa usalama." },
      { objective: "O3", q: "Safari ya kuchora ramani huruka:", options: ["Kwa duara", "Kwa mistari iliyonyooka ya kwenda na kurudi", "Ovyo", "Juu na chini moja kwa moja"], answer: 1, why: "Mzunguko wa gridi unafunika shamba lote kwa picha zinazoingiliana." },
      { objective: "O3", q: "GSD maana yake ni:", options: ["Kasi ya droni ardhini", "Umbali wa usalama wa dunia nzima", "Kiasi cha ardhi ambacho pikseli moja inafunika", "Ukubwa wa betri"], answer: 2, why: "Ground sampling distance ni undani wa picha, kama sm 2 kwa pikseli." },
      { objective: "O3", q: "Kuhesabu mmea mmoja mmoja wa mahindi unapaswa:", options: ["Kurusha juu kadiri iwezekanavyo", "Kutumia setilaiti tu", "Kurusha usiku", "Kurusha chini zaidi kupata undani mkubwa, ndani ya kikomo cha kisheria"], answer: 3, why: "GSD ndogo zaidi inaonyesha mmea mmoja mmoja; baki chini ya kikomo cha urefu." },
      { objective: "O3", q: "Mwingiliano wa kawaida wa mbele kwa kuchora ramani ni takriban:", options: ["Asilimia 70 hadi 80", "Asilimia 5", "Asilimia 0", "Asilimia 100 kamili"], answer: 0, why: "Mwingiliano mkubwa unaiwezesha programu kuunganisha picha." },
      { objective: "O4", q: "Kuanguka kwa mimea (lodging) katika picha ya rangi maana yake ni:", options: ["Mimea iliyo ya kijani mno", "Mabua yaliyopinda au kuanguka", "Magugu kati ya mistari", "Maji juu ya udongo"], answer: 1, why: "Mahindi au mtama ulioanguka hulala chini na unaonekana kwa urahisi kutoka juu." },
      { objective: "O4", q: "Picha ya rangi inaonyesha sehemu inayogeuka njano. Hatua bora inayofuata ni:", options: ["Kunyunyizia dawa", "Kupuuza", "Kuweka alama na kukagua kwa miguu", "Kurusha juu zaidi"], answer: 2, why: "Picha zinaonyesha mahali; wewe unathibitisha chanzo ardhini." },
      { objective: "O5", q: "NDVI hukokotolewa kutoka:", options: ["Sauti na joto", "Mwanga wa bluu tu", "Sampuli za udongo", "Mwanga mwekundu na near-infrared"], answer: 3, why: "NDVI inalinganisha uakisi wa mwanga mwekundu na wa near-infrared." },
      { objective: "O5", q: "Thamani kubwa ya NDVI kwa kawaida maana yake ni:", options: ["Uoto wa kijani ulio mnene na wenye afya", "Udongo mtupu", "Maji", "Kamera iliyoharibika"], answer: 0, why: "FAO inaeleza NDVI chanya iliyo juu kuwa uoto mnene wenye afya." },
      { objective: "O5", q: "Kamera ya joto ni chaguo zuri ku:", options: ["Kusoma namba ya gari", "Kupata upungufu wa maji na wanyama alfajiri", "Kuhesabu mbegu ndani ya mfuko", "Kuona rangi zikiwa angavu zaidi"], answer: 1, why: "Kamera ya joto hupima joto, linalohusiana na upungufu wa maji na wanyama wenye miili yenye joto." },
      { objective: "O6", q: "Kwa nini upige picha ya bamba la kurekebisha ukitumia kamera ya multispectral?", options: ["Ni kumbukumbu", "Kujaribu propela", "Ili programu isahihishe mwanga wa siku hiyo", "Kupima upepo"], answer: 2, why: "Uakisi unaojulikana wa bamba unaiwezesha programu kusahihisha vipimo." },
      { objective: "O6", q: "Upepo mkali wenye mawimbi siku ya safari ya ramani maana yake ni:", options: ["Rusha kwa kasi zaidi", "Rusha juu zaidi", "Ondoa propela", "Usirushe; panga siku nyingine"], answer: 3, why: "Upepo mkali unahatarisha udhibiti na unaharibu picha." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      {
        name: "Lengo na kihisio",
        objective: "O5",
        notYet: "Hakuna lengo, au kihisio hakilingani na lengo.",
        meets: "Lengo lililo wazi la safari na kihisio kinacholingana nalo, pamoja na sababu.",
        exceeds: "Anaeleza kwa nini kihisio cha bei nafuu zaidi au ghali zaidi hakikuchaguliwa."
      },
      {
        name: "Urefu, undani na mwingiliano",
        objective: "O3",
        notYet: "Urefu, GSD au mwingiliano haupo, au uko juu ya kikomo cha urefu kisheria.",
        meets: "Urefu na GSD inayoonyeshwa na app, mwingiliano wa mbele na wa pembeni, kasi na idadi ya betri.",
        exceeds: "Anaonyesha jinsi undani unavyolingana na kazi, kama kuhesabu mimea."
      },
      {
        name: "Mwanga, upepo na wakati",
        objective: "O6",
        notYet: "Hakuna wakati wa siku wala mipaka ya hali ya hewa.",
        meets: "Wakati wa siku, mwanga, mipaka ya upepo na mpango wa kukagua kila picha kabla ya kuondoka.",
        exceeds: "Anaongeza hatua za bamba la kurekebisha au tarehe ya akiba."
      },
      {
        name: "Orodha ya ukaguzi kabla ya kurusha",
        objective: "O1",
        notYet: "Orodha inakosa droni, betri, mipangilio au nyaraka.",
        meets: "Inahusu droni, betri, kidhibiti na app, mipangilio ya kurudi nyumbani na nyaraka.",
        exceeds: "Anaongeza mahali pa kupaa na jinsi droni itakavyoendelea kuonekana."
      },
      {
        name: "Kurusha kwa usalama",
        objective: "O2",
        notYet: "Hakuna mahali pa kupaa, au kurusha mbali zaidi ya kuona bila kibali.",
        meets: "Mahali wazi pa kupaa, kurusha ukiiona droni na ndani ya urefu wa kisheria, na kutua betri ikiwa bado na chaji ya ziada.",
        exceeds: "Anamtaja mwangalizi na hatua za kuchukua upepo ukiongezeka."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa mpango wa safari",
      "Wanafunzi wenye vibali wanaoripoti kurusha safari ya ramani iliyopangwa na kupata seti kamili ya picha ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoendelea na Kozi ya 3 ya mfululizo wa droni",
      "Watoa huduma za droni wanaoripoti kurusha upya mara chache au ajali chache baada ya mafunzo"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au tableti yenye app ya ramani ya droni, au picha za skrini za app hiyo",
      "Daftari au orodha ya ukaguzi iliyochapishwa",
      "Droni yenye usajili, leseni na vibali vyake, kwa safari ya mazoezi ya hiari tu",
      "Takriban dakika 60 kwa jumla, kwa vipindi vifupi, pamoja na muda wa kuandika mpango wa safari"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha pangeni safari moja ya mfano ya ramani kwenye skrini ili kila mtu aone urefu, GSD na mwingiliano vikibadilika.",
      "Safari yoyote ya mazoezi lazima ifuate sheria za nchi, ikiwa na rubani mwenye leseni na vibali vikiwa tayari, na watazamaji wakae mbali.",
      "Pitieni orodha ya ukaguzi kabla ya kurusha kwa sauti juu ya droni halisi au ya picha, na msitumie betri zilizovimba.",
      "Tumieni picha za mfano kama hakuna droni, ili wanafunzi wajizoeze kusoma picha za rangi, multispectral na za joto.",
      "Pimeni mpango wa safari kwa rubriki na mtoe maoni juu ya mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
