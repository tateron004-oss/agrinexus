"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-intro.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Mifumo ya Ndege Zisizo na Rubani (UAS)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Mfumo wa mtandaoni wa KCAA wa droni (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Sehemu ya 21, Mifumo ya Ndege Zinazoendeshwa kwa Mbali (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Drones for Agriculture (Droni kwa Kilimo, 2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO na WHO: Mwongozo wa kunyunyizia viuatilifu kutoka angani (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-sw",
  lang: "sw",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Droni kwa Ufuatiliaji wa Kilimo 1: Utangulizi, Sheria na Usalama",
  skills: "Kueleza kazi za droni shambani, Kuchagua aina ya droni kwa kazi fulani, Kupata sheria za mamlaka ya usafiri wa anga, Kukagua hatari za eneo la kurusha droni, Kuendesha maelekezo salama kabla ya kurusha",
  outcome: "kuamua kama droni ndiyo zana sahihi kwa tatizo la shamba, kutaja mamlaka ya usafiri wa anga na vibali unavyohitaji kabla ya kurusha, na kuandika mpango rahisi wa kutumia droni pamoja na orodha ya usalama kwa shamba moja.",
  about: [
    "Kozi hii ni kwa wakulima, maafisa ugani, wamiliki wa biashara za kilimo na vijana nchini Kenya, Nigeria na kote Afrika wanaotaka kuanza kutumia droni kufuatilia mazao, mifugo na ardhi. Huhitaji kuwa na droni bado.",
    "Katika Sura 1 utajifunza droni inaweza kufanya nini na haiwezi kufanya nini shambani, aina kuu za droni, na jinsi ya kupima kama droni inastahili gharama ukilinganisha na kutembea shambani au kutumia picha za satelaiti za bure. Katika Sura 2 utajifunza nani anatunga sheria za droni katika nchi yako, vibali gani kwa kawaida vinahitajika, na jinsi ya kukagua eneo la kurusha na kuwapa timu yako maelekezo ili mtu yeyote asiumie.",
    "Sheria za droni ni sheria za nchi, na hubadilika. Kozi hii haikwambii kamwe kwamba unaruhusiwa kurusha droni: inakuonyesha jinsi ya kupata sheria rasmi za nchi yako na kuzifuata. Hii ni Kozi 1 kati ya kozi sita; kozi zinazofuata zinafundisha kurusha droni, kupiga picha, afya ya mazao, kilimo cha usahihi na kuendesha programu za droni.",
    "Kila somo linachukua kama dakika tano: soma, tazama slaidi, kisha fanya kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andika mpango wa ukurasa mmoja wa kutumia droni kwa shamba moja halisi au la mfano (kwa mfano ekari 3 za mahindi na maharagwe huko Nakuru, au hekta 5 za mihogo katika Jimbo la Oyo): tatizo ambalo droni itasaidia, aina ya droni na sababu, mamlaka ya usafiri wa anga na vibali unavyopaswa kukagua au kupata, hatari ulizopata katika eneo, na orodha ya usalama kabla ya kurusha yenye angalau vipengele vinane.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wakulima, maafisa ugani, wamiliki wa biashara za kilimo na vijana nchini Kenya, Nigeria na kote Afrika wanaotaka kuanza kutumia droni kufuatilia mazao, mifugo na ardhi. Wengi bado hawana droni.",
    startingPoint: "Wengi wameona droni kwenye video au maonyesho, na hutembea mashambani mwao kukagua mazao. Wachache wanajua droni na kamera ipi inafaa kazi ipi ya shamba, lini droni inastahili gharama, nani anatunga sheria za droni katika nchi yao, au jinsi ya kukagua eneo na kuipa timu maelekezo kabla ya kurusha.",
    gap: "Watu hununua droni zisizofaa kazi, hurusha bila usajili na leseni zinazotakiwa na sheria, au huweka watu na ndege hatarini. Kujua droni inaweza na haiwezi kufanya nini, sheria, na usalama wa msingi wa eneo kunawasaidia wanafunzi kuamua kwa busara na kuanza mfululizo wa kozi za droni kwa njia salama na halali.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; kila neno la droni linaelezwa",
      "Vifaa: simu yenye intaneti ili kupata ukurasa wa droni wa mamlaka ya usafiri wa anga; droni haihitajiki",
      "Sheria ni sheria za nchi na hubadilika: kozi haisemi kamwe kwamba mwanafunzi anaruhusiwa kurusha; wanafunzi wanakagua sheria rasmi za nchi yao",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi za shamba",
      "Usalama na faragha: hakuna kurusha droni katika kozi; usipige picha za watu wala nyumba"
    ],
    prerequisites: "Hakuna. Hii ni Kozi 1 kati ya kozi sita za droni."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya matatizo ya shamba", action: "kutambua yapi droni inaweza kusaidia na yapi haiwezi", standard: "ukitaja angalau kazi nne inazoweza kusaidia na mbili isizoweza kufanya" },
    { id: "O2", condition: "Ukipewa kazi ya shamba na ukubwa wa shamba", action: "kuchagua aina ya droni na kamera zinazofaa kazi hiyo", standard: "ukitoa sababu kwa kila chaguo" },
    { id: "O3", condition: "Kwa tatizo la shamba", action: "kulinganisha droni, picha za satelaiti za bure na kutembea shambani, na kuchagua zana bora", standard: "ukihesabu gharama zote na uamuzi ambao picha zitabadilisha" },
    { id: "O4", condition: "Kwa nchi yako", action: "kupata mamlaka ya usafiri wa anga na kuorodhesha vibali vya droni inavyoweza kuhitaji", standard: "ukitumia tovuti au ofisi ya mamlaka hiyo tu" },
    { id: "O5", condition: "Kabla ya kurusha droni yoyote shambani", action: "kutembea katika eneo na kuweka alama kwenye hatari na maeneo yasiyoruhusiwa kurusha", standard: "na kumwambia mkulima na majirani lini utarusha" },
    { id: "O6", condition: "Kabla na wakati wa kurusha", action: "kuendesha maelekezo kabla ya kurusha na orodha ya usalama, na kutaja hatua za kwanza wakati wa dharura", standard: "ukiwa na angalau vipengele vinane kwenye orodha" }
  ],
  chapters: [
    {
      name: "Sura 1: Droni shambani",
      lessons: [
        {
          objectives: ["O1"],
          title: "Droni inaweza kufanya nini kwa shamba",
          minutes: 5,
          goal: "Taja kazi nne za shamba ambazo droni inaweza kusaidia, na mbili isizoweza kufanya.",
          text: [
            "Droni ni ndege ndogo isiyo na rubani ndani yake. Mtu anaiendesha kutoka ardhini kwa rimoti au simu, au anaiweka iruke yenyewe kwenye njia iliyopangwa. Mamlaka za usafiri wa anga zinaiita UAS (mfumo wa ndege isiyo na rubani) au RPAS (mfumo wa ndege inayoendeshwa kwa mbali).",
            "Shambani, droni nyingi hubeba kamera. Ukiwa juu, unaona shamba zima kwa mara moja: mahali mbegu hazikuota, sehemu zenye rangi ya njano au zinazonyauka, pembe zenye maji yaliyotuama, mmomonyoko wa udongo, uzio uliovunjika, na mifugo iliyo mahali isipopaswa. FAO na ITU zinataja kufuatilia mazao, tahadhari ya mapema, kufuatilia wadudu, kufuatilia mifugo na kufuatilia misitu kuwa kati ya matumizi makuu shambani.",
            "Baadhi ya droni kubwa hunyunyizia dawa au kusambaza mbegu na mbolea. Kunyunyizia viuatilifu kwa droni ni kazi maalum yenye hatari kubwa zaidi, inayohitaji vibali vyake kutoka kwa mamlaka ya usafiri wa anga na pia kwa mdhibiti wa viuatilifu, kwa hiyo kozi hii inahusu ufuatiliaji tu.",
            "Droni haiwezi kukwambia KWA NINI sehemu ina rangi ya njano. Inakuonyesha WAPI pa kuangalia. Bado unatembea hadi mahali hapo, unaangalia majani, udongo na wadudu, na unaamua la kufanya. Pia haiwezi kuruka kwenye mvua kubwa au upepo mkali, na betri yake kwa kawaida hudumu chini ya saa moja."
          ],
          words: [["Droni", "ndege ndogo inayoendeshwa bila rubani ndani yake."], ["UAS / RPAS", "majina rasmi: mfumo wa ndege isiyo na rubani, mfumo wa ndege inayoendeshwa kwa mbali. Ndege pamoja na rimoti yake na mawasiliano yake."], ["Kukagua shamba (scouting)", "kutembea shambani kutafuta matatizo kama wadudu, magonjwa au magugu."]],
          slides: [
            { title: "Droni ni", bullets: ["Ndege ndogo isiyo na rubani ndani yake", "Inaendeshwa kutoka ardhini, au kwenye njia iliyopangwa", "Kwa jina rasmi huitwa UAS au RPAS"] },
            { title: "Inachosaidia", bullets: ["Kuona shamba zima kwa mara moja", "Kupata mahali mbegu hazikuota, sehemu za njano au zinazonyauka", "Kuona maji yaliyotuama, mmomonyoko, uzio uliovunjika", "Kuhesabu na kutafuta mifugo"] },
            { title: "Isichoweza kufanya", bullets: ["Kukwambia KWA NINI sehemu ni mgonjwa: bado unatembea hadi pale", "Kuruka kwenye mvua kubwa au upepo mkali", "Kukaa angani kwa saa nyingi kwa betri moja"] },
            { title: "Kunyunyizia ni tofauti", bullets: ["Droni za kunyunyizia zinahitaji vibali zaidi", "Mamlaka ya usafiri wa anga NA mdhibiti wa viuatilifu", "Kozi hii inahusu ufuatiliaji tu"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Fikiria shamba moja unalolijua. Andika matatizo matatu ya shamba hilo ambayo ungeweza KUYAONA ukiwa angani, na tatizo moja ambalo droni haiwezi kusaidia (kwa mfano, bei ndogo sokoni).",
          youCanNow: "kueleza droni ya shamba inafanya nini, kutaja kazi inazosaidia, na kusema kwa nini bado unatembea shambani.",
          quickCheck: [
            { objective: "O1", q: "Droni yenye kamera inaweza kumwonyesha mkulima nini?", options: ["Kwa nini mmea ni mgonjwa", "Jina kamili la ugonjwa", "Mahali mbegu hazikuota, sehemu za njano au pembe zenye maji yaliyotuama", "Mavuno yatauzwa kwa bei gani"], answer: 2, why: "Droni inaonyesha wapi pa kuangalia; bado unatembea hadi mahali hapo kujua kwa nini." },
            { objective: "O1", q: "Mkulima anataka kurusha droni yenye kamera wakati wa mvua kubwa ili kukagua mafuriko. Unamwambia nini?", options: ["Rusha juu zaidi kwenye mvua", "Subiri; droni haziwezi kuruka kwenye mvua kubwa, kwa hiyo kagua mvua ikiisha", "Rusha hadi betri iishe", "Nyunyizia shamba wakati huo huo"], answer: 1, why: "Droni haiwezi kuruka kwenye mvua kubwa au upepo mkali." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kuchagua aina sahihi ya droni",
          minutes: 5,
          goal: "Linganisha aina ya droni na kamera na kazi ya shamba.",
          text: [
            "Kuna aina tatu kuu za droni za shamba. Droni ya rota nyingi (multirotor) ina panga boi nne au zaidi, kama helikopta ndogo. Inapaa kutoka mahali padogo, inaweza kusimama angani, na ni rahisi kujifunza, lakini inafunika eneo dogo zaidi kwa kila betri. Inafaa mashamba madogo, nyumba za kijani (greenhouse) na ukaguzi wa sehemu fulani.",
            "Droni ya mabawa yasiyobadilika (fixed-wing) inafanana na ndege ndogo. Inateleza angani, kwa hiyo inafunika maeneo makubwa kama shamba la chai la hekta 200 au ranchi, lakini inahitaji nafasi ya kupaa na kutua na ni ngumu zaidi kuendesha. Droni mseto (VTOL) inapaa moja kwa moja juu kama multirotor kisha inaruka kama ndege.",
            "Kamera ni muhimu kama droni yenyewe. Kamera ya kawaida ya rangi (RGB) inatosha kuona mahali mbegu hazikuota, magugu, maji yaliyotuama na mifugo. Kamera ya multispectral hupima mwanga ambao jicho haliwezi kuona na husaidia kuonyesha mimea iliyo na shida mapema zaidi. Kamera ya joto (thermal) huonyesha joto: inafaa kwa uhaba wa maji kwenye mimea, mabomba ya umwagiliaji yanayovuja na kutafuta mifugo.",
            "Anza kidogo. Maafisa ugani wengi na vijana wanaotoa huduma huanza na multirotor ndogo yenye kamera ya RGB, hujifunza vizuri, kisha huongeza kamera nyingine baadaye."
          ],
          steps: ["Andika kazi: unahitaji kuona nini, na eneo ni kubwa kiasi gani?", "Eneo dogo au unahitaji kusimama angani: multirotor. Eneo kubwa: fixed-wing au mseto.", "Chagua kamera: RGB kwa kazi nyingi, multispectral kwa shida za mimea mapema, thermal kwa joto na maji.", "Hakikisha droni inaruhusiwa na inaweza kusajiliwa katika nchi yako kabla ya kuinunua."],
          words: [["Multirotor", "droni yenye panga boi nne au zaidi inayoweza kusimama angani."], ["Fixed-wing", "droni yenye umbo la ndege ndogo inayoteleza angani na kufunika maeneo makubwa."], ["Kamera ya RGB", "kamera ya kawaida ya rangi (nyekundu, kijani, buluu)."], ["Kamera ya multispectral", "kamera inayopima pia mwanga ambao jicho haliwezi kuona, kama near-infrared (mwanga ulio karibu na infraredi)."]],
          slides: [
            { title: "Aina tatu za droni za shamba", bullets: ["Multirotor: husimama angani, nafasi ndogo, maeneo madogo", "Fixed-wing: huteleza, maeneo makubwa, inahitaji nafasi ya kupaa", "Mseto (VTOL): hupaa moja kwa moja juu, huruka kama ndege"] },
            { title: "Aina tatu za kamera", bullets: ["RGB: rangi za kawaida, inatosha kwa kazi nyingi", "Multispectral: huonyesha shida za mimea mapema", "Thermal: huonyesha joto, uhaba wa maji, mifugo"] },
            { title: "Linganisha droni na kazi", bullets: ["Shamba la mahindi la ekari 2: multirotor ndogo, RGB", "Shamba la chai la hekta 200: fixed-wing au mseto", "Ranchi alfajiri: kamera ya thermal kutafuta ng'ombe"] },
            { title: "Anza kidogo", bullets: ["Jifunze kwa multirotor ndogo yenye RGB", "Ongeza kamera nyingine unapozihitaji", "Kagua sheria za usajili kabla ya kununua"] }
          ],
          tryIt: "Kwa kila kazi hizi, chagua aina ya droni na kamera na uandike sababu moja: (a) kukagua uotaji kwenye ekari 2 za maharagwe, (b) kuchora ramani ya hekta 150 za miwa, (c) kumtafuta ng'ombe aliyepotea porini alfajiri.",
          youCanNow: "kuchagua aina ya droni na kamera zinazofaa kazi ya shamba na ukubwa wa eneo.",
          quickCheck: [
            { objective: "O2", q: "Droni ya multirotor ni nini?", options: ["Droni yenye panga boi nne au zaidi inayoweza kusimama angani", "Droni yenye umbo la ndege", "Satelaiti", "Droni inayonyunyizia tu"], answer: 0, why: "Multirotor ina panga boi nne au zaidi, inapaa kutoka mahali padogo na inaweza kusimama angani." },
            { objective: "O2", q: "Unataka kupata mabomba ya umwagiliaji yanayovuja kwenye shamba la mboga na matunda. Unachagua kamera gani?", options: ["Kamera ya kawaida ya simu juu ya fimbo", "Hakuna kamera", "Kamera ya RGB tu usiku", "Kamera ya thermal"], answer: 3, why: "Kamera ya thermal huonyesha joto, jambo linalosaidia kuona uhaba wa maji na mabomba yanayovuja." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Je, droni inastahili? Droni, satelaiti au kutembea",
          minutes: 5,
          goal: "Amua kama droni, picha za satelaiti za bure au kutembea shambani ndiyo zana bora kwa tatizo la shamba.",
          text: [
            "Droni si zana bora kila wakati. Kwa bustani ya nyumbani ya robo ekari, kutembea kati ya mistari ni haraka zaidi na ni bure. Kwa kaunti nzima, picha za satelaiti za bure (kwa mfano kutoka satelaiti za Ulaya za Sentinel-2, zinazoweza kutazamwa kwenye zana za bure za mtandaoni) zinaonyesha mwelekeo mpana kila baada ya siku chache, lakini kila pikseli ni kama mita 10, kubwa mno kuona mmea mmoja mmoja.",
            "Droni ziko katikati. Zinaona hadi sentimita chache, siku unayoichagua, hata chini ya mawingu membamba. Hilo linazifanya zifae mashamba ya kati na makubwa, vyama vya ushirika vinavyotumia droni moja kwa mashamba ya wanachama wengi, na mazao ya thamani kubwa kama chai, kahawa, parachichi na mboga na matunda.",
            "Hesabu gharama zote, si bei ya droni tu: ada za usajili na leseni, mafunzo, betri na panga boi za akiba, simu au tableti, bando la intaneti, usafiri na muda wako. Kisha uliza: picha zitabadilisha uamuzi gani, na je, uamuzi huo una thamani kubwa kuliko gharama?"
          ],
          steps: ["Andika uamuzi unaotaka kufanya (kwa mfano: wapi pa kupanda upya, au kitalu kipi cha kutibu).", "Uliza eneo ni kubwa kiasi gani na kitu unachohitaji kuona ni kidogo kiasi gani.", "Linganisha kutembea, satelaiti na droni kwa ukubwa huo na undani huo.", "Orodhesha kila gharama ya kutumia droni na uilinganishe na thamani ya uamuzi bora."],
          words: [["Picha ya satelaiti", "picha ya dunia iliyopigwa kutoka angani za mbali; za bure huonyesha maeneo makubwa lakini kwa undani mdogo."], ["Ubora wa picha (resolution)", "kitu kidogo kiasi gani picha inaweza kuonyesha; picha za droni zinaweza kuonyesha sentimita chache, picha za satelaiti za bure kama mita 10."]],
          slides: [
            { title: "Njia tatu za kufuatilia shamba", bullets: ["Kutembea: bure, bora kwa mashamba madogo, polepole kwa makubwa", "Satelaiti: bure, maeneo makubwa, undani wa kama mita 10", "Droni: undani wa sentimita, siku unayoichagua"] },
            { title: "Droni zinapolipa", bullets: ["Mashamba ya kati na makubwa", "Vyama vya ushirika vinavyotumia droni moja", "Mazao ya thamani kubwa: chai, kahawa, parachichi, mboga"] },
            { title: "Hesabu kila gharama", bullets: ["Usajili, leseni na mafunzo", "Betri, panga boi, simu au tableti, bando la intaneti", "Usafiri na muda wako"] },
            { title: "Swali muhimu", bullets: ["Picha zitabadilisha uamuzi gani?", "Je, uamuzi huo una thamani kubwa kuliko gharama?"] }
          ],
          tryIt: "Chagua tatizo moja la shamba kutoka Somo 1. Andika zana ambayo ungetumia (kutembea, satelaiti au droni), kwa nini, na uorodheshe angalau gharama tano kama ungechagua droni.",
          youCanNow: "kuamua kama droni inastahili kwa tatizo la shamba kwa kuilinganisha na kutembea na picha za satelaiti.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini picha za satelaiti za bure hazina undani wa kutosha kuona mmea mmoja mmoja?", options: ["Ziko kwa rangi nyeusi na nyeupe tu", "Hupigwa mara moja kwa mwaka", "Ni ghali mno", "Kila pikseli ni kama mita 10"], answer: 3, why: "Pikseli za Sentinel-2 ni kama mita 10, kwa hiyo zinaonyesha mwelekeo mpana, si mmea mmoja mmoja." },
            { objective: "O3", q: "Mkulima mwenye bustani ya mboga ya robo ekari anauliza kama anunue droni. Unapendekeza nini?", options: ["Tembea kati ya mistari; ni haraka zaidi na ni bure kwa shamba dogo hivyo", "Nunua droni kubwa zaidi ya fixed-wing", "Tumia kamera ya thermal kila siku", "Kodisha droni ya kunyunyizia"], answer: 0, why: "Kwa shamba dogo sana, kutembea kati ya mistari ni haraka zaidi na hakugharimu chochote." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Droni shambani",
        questions: [
          { objective: "O1", q: "Ramani ya droni inaonyesha sehemu ya njano kwenye shamba la mahindi. Unapaswa kufanya nini baadaye?", options: ["Nyunyizia shamba zima mara moja", "Tembea hadi sehemu hiyo na uangalie mimea, udongo na wadudu", "Ipuuze; ramani za droni hukosea kila wakati", "Rusha tena hadi sehemu hiyo itoweke"], answer: 1, why: "Droni inaonyesha WAPI pa kuangalia; unajua KWA NINI ukiwa ardhini." },
          { objective: "O2", q: "Droni ipi ni bora kwa kuchora ramani ya shamba la chai la hekta 200?", options: ["Droni ya kuchezea", "Droni ndogo ya ndani ya nyumba", "Droni ya fixed-wing au mseto", "Hakuna droni inayoweza kufanya hivi"], answer: 2, why: "Droni za fixed-wing na mseto huteleza angani na kufunika maeneo makubwa kwa kila betri." },
          { objective: "O2", q: "Kamera ipi inasaidia zaidi kutafuta ng'ombe porini alfajiri?", options: ["Kamera ya thermal", "Kamera ya kawaida ya simu tu", "Kamera isiyo na lenzi", "Bomba la kunyunyizia"], answer: 0, why: "Kamera ya thermal huonyesha joto la wanyama mwanga ukiwa mdogo." },
          { objective: "O4", q: "Kunyunyizia viuatilifu kwa droni:", options: ["Hakuhitaji karatasi zozote za ziada", "Ni sawa na kupiga picha", "Kunahitaji vibali vyake kutoka kwa mamlaka ya usafiri wa anga na mdhibiti wa viuatilifu", "Kunaruhusiwa popote kama shamba ni lako"], answer: 2, why: "Kunyunyizia ni kazi maalum yenye hatari kubwa zaidi na vibali vya ziada." },
          { objective: "O3", q: "Kwa bustani ya nyumbani ya robo ekari, zana bora kwa kawaida ni:", options: ["Droni ya fixed-wing", "Droni ya multispectral", "Picha za satelaiti", "Kutembea kati ya mistari"], answer: 3, why: "Kwenye shamba dogo sana, kutembea ni haraka zaidi, ni rahisi kwa gharama na kunaonyesha zaidi." }
        ]
      }
    },
    {
      name: "Sura 2: Sheria na usalama",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nani anatunga sheria za droni katika nchi yako",
          minutes: 6,
          goal: "Pata mamlaka ya usafiri wa anga ya nchi yako na uorodheshe vibali vya droni inavyoweza kuhitaji.",
          text: [
            "Kila nchi inadhibiti anga lake lenyewe. Katika kila nchi, mamlaka ya usafiri wa anga hutunga na kusimamia sheria za droni. Nchini Kenya ni Mamlaka ya Usafiri wa Anga ya Kenya (KCAA), chini ya Kanuni za Usafiri wa Anga (Mifumo ya Ndege Zisizo na Rubani) za 2020. Nchini Nigeria ni Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA), chini ya Sehemu ya 21 ya Kanuni za Usafiri wa Anga za Nigeria za 2023. Nchi nyingine, kama Ghana, Rwanda, Uganda, Tanzania na Afrika Kusini, zina mamlaka zao na sheria zao.",
            "Vibali kwa kawaida ni pamoja na: kusajili droni; kibali cha kuiingiza nchini; leseni ya rubani wa mbali kwa mtu anayeirusha (hasa kwa kazi ya kibiashara au yenye hatari kubwa zaidi); cheti cha mwendeshaji kwa biashara inayorusha droni kwa malipo (KCAA inakiita Remote Air Operator Certificate, NCAA inakiita RPAS Operator Certificate); na idhini kwa aina fulani za safari. KCAA na NCAA zote zina mifumo ya droni ya mtandaoni.",
            "Usitegemee rafiki, muuzaji au mitandao ya kijamii kupata sheria. Soma ukurasa wa droni wa mamlaka yenyewe, au piga simu au tuma barua pepe kwa mamlaka. Ada na hatua hubadilika, kwa hiyo zikague siku ile unapoomba.",
            "Usirushe kamwe droni kabla ya kuwa na usajili, leseni na vibali ambavyo nchi yako inavihitaji kwa safari hiyo. Kurusha bila hivyo kunaweza kuleta faini, droni kunyang'anywa au zaidi, na kunaweka watu na ndege hatarini."
          ],
          steps: ["Tafuta mamlaka ya usafiri wa anga ya nchi yako na ufungue tovuti yake rasmi.", "Tafuta ukurasa wa droni, UAS au RPAS.", "Andika: usajili, kibali cha kuingiza, leseni ya rubani, cheti cha mwendeshaji, na idhini ya safari: vipi vinakuhusu?", "Andika ada na mfumo wa mtandaoni, na tarehe uliyokagua.", "Kama kuna jambo lisilo wazi, wasiliana na mamlaka moja kwa moja."],
          words: [["Mamlaka ya usafiri wa anga", "chombo cha serikali kinachotunga na kusimamia sheria za kila kitu kinachoruka angani katika nchi."], ["Usajili", "kuandikisha droni yako kwa mamlaka ili iwe na namba rasmi."], ["Leseni ya rubani wa mbali (RPL)", "leseni rasmi ya mtu anayerusha droni."], ["Cheti cha mwendeshaji", "kibali ambacho biashara inahitaji ili kurusha droni kwa malipo."]],
          slides: [
            { title: "Kila nchi ina mamlaka yake", bullets: ["Kenya: KCAA, Kanuni za UAS 2020", "Nigeria: NCAA, Nig.CARs 2023 Sehemu ya 21", "Nchi nyingine: mamlaka yao na sheria zao"] },
            { title: "Vibali unavyoweza kuhitaji", bullets: ["Usajili wa droni na kibali cha kuiingiza nchini", "Leseni ya rubani wa mbali kwa mtu anayeirusha", "Cheti cha mwendeshaji ili kurusha kwa malipo", "Idhini kwa baadhi ya safari"] },
            { title: "Pata sheria kutoka chanzo chenyewe", bullets: ["Soma ukurasa wa droni wa mamlaka yenyewe", "Piga simu au tuma barua pepe kwa mamlaka", "Kagua ada na hatua siku ile unapoomba"] },
            { title: "Kanuni ya dhahabu", bullets: ["Hakuna usajili, leseni au kibali: hakuna kurusha", "Faini, droni kunyang'anywa, hatari kwa watu na ndege"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Fungua tovuti ya mamlaka ya usafiri wa anga ya nchi yako (KCAA, NCAA au ya nchi yako). Tafuta ukurasa wa droni na uandike orodha ya vibali vinavyohitajika, anwani ya mfumo wa mtandaoni, na tarehe ya leo.",
          youCanNow: "kutaja mamlaka yako ya usafiri wa anga, kupata sheria zake za droni, na kuorodhesha vibali unavyopaswa kuwa navyo kabla ya kurusha.",
          quickCheck: [
            { objective: "O4", q: "Leseni ya rubani wa mbali ni ya nini?", options: ["Droni yenyewe", "Mtu anayerusha droni", "Mmiliki wa shamba", "Duka la droni"], answer: 1, why: "Leseni ya rubani wa mbali ni ya mtu anayerusha, hasa kwa kazi ya kibiashara au yenye hatari kubwa zaidi." },
            { objective: "O4", q: "Muuzaji wa droni anasema huhitaji karatasi zozote kurusha kwa wakulima wanaokulipa. Unafanya nini?", options: ["Mwamini muuzaji", "Uliza kwenye mitandao ya kijamii", "Kagua ukurasa wa droni wa mamlaka ya usafiri wa anga yenyewe au wasiliana na mamlaka", "Rusha kisha uombe baadaye"], answer: 2, why: "Ni ukurasa au ofisi ya mamlaka yenyewe tu inayotoa sheria na vibali vya sasa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kukagua hatari katika eneo la kurusha",
          minutes: 5,
          goal: "Tembea shambani na uweke alama kwenye hatari na maeneo yasiyoruhusiwa kurusha kabla ya safari yoyote.",
          text: [
            "Kabla ya kurusha droni yoyote, angalia eneo ukiwa ardhini na kwenye ramani. Sheria nyingi huzuia droni karibu na viwanja vya ndege na vya ndege ndogo, maeneo ya kijeshi, magereza, mikusanyiko ya watu na maeneo ya serikali. Kwa mfano, Sehemu ya 21 ya Nigeria ina sheria za umbali karibu na viwanja vya ndege na mipaka ya kurusha juu ya maeneo yenye watu wengi na karibu na watu wasiohusika na kazi hiyo. Sheria za nchi yako zinatoa umbali kamili; zikague.",
            "Shambani lenyewe, angalia nyaya za umeme, miti mirefu, minara ya simu, majengo, barabara, makazi, shule, masoko na mifugo inayochunga. Tafuta mahali safi na tambarare pa kupaa na kutua, mbali na watu na vumbi.",
            "Ongea na watu: mkulima, majirani na yeyote anayefanya kazi karibu. Waambie lini utarusha. Uliza kabla ya kurusha juu ya ardhi au makazi ya jirani. Heshimu faragha: usipige picha za watu wala nyumba."
          ],
          steps: ["Fungua app ya ramani na uangalie eneo linalozunguka shamba: viwanja vya ndege ndogo, barabara, miji, maeneo nyeti.", "Kagua sheria za mamlaka yako kuhusu umbali kutoka viwanja vya ndege na watu.", "Tembea shambani na uweke alama kwenye nyaya za umeme, miti, minara, majengo na mifugo.", "Chagua mahali safi pa kupaa na kutua.", "Mwambie mkulima na majirani lini utarusha, na uliza kabla ya kupita juu ya ardhi yao."],
          words: [["Eneo lisiloruhusiwa kurusha (no-fly zone)", "eneo ambalo droni haziruhusiwi bila kibali maalum, kama karibu na viwanja vya ndege."], ["Hatari", "kitu chochote kinachoweza kusababisha madhara: nyaya za umeme, miti, watu, wanyama."], ["Kiwanja cha ndege (aerodrome)", "uwanja wowote wa ndege, uwanja wa ndege ndogo au mahali pa kutua helikopta."]],
          slides: [
            { title: "Angalia nje ya shamba", bullets: ["Viwanja vya ndege, vya ndege ndogo na vya helikopta", "Maeneo ya kijeshi, magereza, mikusanyiko ya watu", "Kagua umbali kamili wa nchi yako"] },
            { title: "Angalia shambani", bullets: ["Nyaya za umeme, miti mirefu, minara", "Makazi, barabara, shule, masoko", "Mifugo inayochunga"] },
            { title: "Chagua mahali salama", bullets: ["Eneo safi na tambarare pa kupaa na kutua", "Mbali na watu na vumbi"] },
            { title: "Ongea na watu", bullets: ["Mwambie mkulima na majirani lini utarusha", "Uliza kabla ya kupita juu ya ardhi yao", "Usipige picha za watu wala nyumba"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Chora ramani rahisi ya shamba moja. Weka alama mahali pa kupaa, kila hatari unayoweza kupata, nyumba zilizo karibu, barabara na uwanja wowote wa ndege ndogo ulio ndani ya kilomita chache unaoweza kuuona kwenye app ya ramani.",
          youCanNow: "kukagua eneo kwa hatari na maeneo yasiyoruhusiwa kurusha, na kuchagua mahali salama pa kupaa.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni hatari ya kuangalia shambani kabla ya kurusha?", options: ["Shamba safi na tambarare", "Mahindi yenye afya", "Mnara wa simu au miti mirefu", "Asubuhi kavu yenye jua"], answer: 2, why: "Minara, miti, nyaya za umeme na majengo ni hatari za kuwekea alama kabla ya kurusha." },
            { objective: "O5", q: "Safari uliyopanga inapita juu ya makazi ya jirani. Unafanya nini?", options: ["Muulize jirani kwanza, na usipige picha za watu wala nyumba", "Rusha haraka ili wasigundue", "Piga picha za makazi kwa ajili ya ripoti", "Rusha usiku"], answer: 0, why: "Uliza kabla ya kurusha juu ya ardhi au makazi ya jirani, na heshimu faragha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Maelekezo kabla ya kurusha na la kufanya mambo yakiharibika",
          minutes: 5,
          goal: "Endesha maelekezo ya usalama kabla ya kurusha na ujue hatua za kwanza wakati wa dharura.",
          text: [
            "Timu za kitaalamu za droni huanza kila safari kwa maelekezo mafupi. Kila mtu anasikia mpango: droni itaruka wapi, juu kiasi gani, kwa muda gani, nani ni rubani, nani ni mtazamaji anayeangalia anga na droni, na mahali pa kutua ni wapi.",
            "Kagua hali ya hewa: hakuna kurusha kwenye mvua, radi, upepo mkali au wa ghafla, dhoruba za vumbi au mwanga hafifu, isipokuwa droni yako na vibali vyako vinaruhusu. Kagua droni: betri imejaa chaji, panga boi hazijaharibika, kamera ni safi, rimoti imeunganishwa.",
            "Kubalianeni la kufanya jambo likiharibika: betri ikiwa chini, tua; mtu au mnyama akipita chini ya droni, sogea mbali au tua; ndege yenye rubani au helikopta ikitokea, shuka na utue mara moja. Droni ikipotea au ikianguka, fanya eneo liwe salama, na uripoti matukio makubwa kwa mamlaka yako kama sheria zake zinavyotaka."
          ],
          steps: ["Ipe timu maelekezo: eneo, urefu, muda, rubani, mtazamaji, mahali pa kutua.", "Kagua hali ya hewa: mvua, upepo, vumbi, mwanga.", "Kagua droni: betri, panga boi, kamera, muunganiko wa rimoti.", "Kubalianeni mpango wa dharura: betri ikiwa chini, watu chini, ndege karibu, droni kupotea.", "Baada ya safari, andika kilichotokea kwenye daftari la kumbukumbu."],
          words: [["Mtazamaji", "mwanatimu anayeangalia droni na anga na kumwonya rubani."], ["Maelekezo (briefing)", "mazungumzo mafupi kabla ya safari ili kila mtu ajue mpango."], ["Daftari la kumbukumbu (log book)", "kumbukumbu ya kila safari: tarehe, mahali, muda, rubani, matatizo."]],
          slides: [
            { title: "Ipe timu maelekezo", bullets: ["Wapi, juu kiasi gani, kwa muda gani", "Nani ni rubani, nani ni mtazamaji", "Mtatua wapi"] },
            { title: "Kagua hali ya hewa na droni", bullets: ["Hakuna mvua, dhoruba, upepo mkali au vumbi", "Betri, panga boi, kamera, rimoti"] },
            { title: "Mambo yakiharibika", bullets: ["Betri chini: tua", "Watu au wanyama chini: sogea mbali au tua", "Ndege karibu: shuka na utue mara moja"] },
            { title: "Baada ya safari", bullets: ["Iandike kwenye daftari la kumbukumbu", "Ripoti matukio makubwa kama sheria zako zinavyotaka"] }
          ],
          tryIt: "Kazi ya mwisho: andika mpango wako wa ukurasa mmoja wa kutumia droni kwa shamba moja: tatizo, aina ya droni na kamera, mamlaka na vibali, hatari kutoka kwenye ramani yako, na orodha ya kukagua kabla ya kurusha yenye angalau vipengele vinane pamoja na mpango wa dharura.",
          youCanNow: "kuipa timu maelekezo kabla ya kurusha, kukagua hali ya hewa na droni, na kufuata mpango rahisi wa dharura.",
          quickCheck: [
            { objective: "O6", q: "Nini hufanyika katika maelekezo kabla ya kurusha?", options: ["Rubani anamtoza mteja pesa", "Timu inaandika ripoti ya mwisho", "Droni inauzwa", "Kila mtu anasikia droni itaruka wapi, juu kiasi gani na kwa muda gani, na nani anafanya nini"], answer: 3, why: "Maelekezo yanashirikisha kila mtu mpango, kazi za kila mmoja na mahali pa kutua." },
            { objective: "O6", q: "Helikopta inatokea wakati droni yako inaruka. Unafanya nini?", options: ["Panda juu zaidi ili uione", "Shuka na utue mara moja", "Endelea kupiga picha", "Ruka kuielekea"], answer: 1, why: "Ndege yenye rubani au helikopta ikitokea, droni inashuka na kutua mara moja." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Sheria na usalama",
        questions: [
          { objective: "O4", q: "Nani anatunga na kusimamia sheria za droni nchini Kenya?", options: ["Mamlaka ya Usafiri wa Anga ya Kenya (KCAA)", "Ofisi ya kilimo ya kaunti", "Muuzaji wa droni", "Chifu wa eneo"], answer: 0, why: "KCAA ni mamlaka ya usafiri wa anga ya Kenya na inadhibiti droni." },
          { objective: "O4", q: "Rafiki anasema unaweza kurusha droni mpya kwenye shamba la mteja bila karatasi zozote. Unafanya nini?", options: ["Rusha; rafiki yako amewahi kufanya hivyo", "Kagua sheria rasmi za mamlaka ya usafiri wa anga na upate vinavyohitajika kabla ya kurusha", "Rusha mapema sana ili mtu asikuone", "Rusha juu ya ardhi ya mteja tu"], answer: 1, why: "Sheria za mamlaka rasmi tu ndizo zinazohesabika; bila vibali, hakuna kurusha." },
          { objective: "O5", q: "Ipi ni hatari ya kuwekea alama kabla ya kurusha?", options: ["Anga safi", "Mahali pakavu na tambarare pa kupaa", "Nyaya za umeme zinazopita shambani", "Betri iliyojaa chaji"], answer: 2, why: "Nyaya za umeme zinaweza kunasa au kuharibu droni na ni hatari halisi." },
          { objective: "O6", q: "Wakati wa safari ndege ndogo inatokea karibu. Rubani afanye nini?", options: ["Apande juu zaidi ili aone vizuri", "Aendelee kupiga picha", "Aruke kuielekea", "Ashuke na atue mara moja"], answer: 3, why: "Ndege zenye rubani hutangulia kila wakati; shusha droni na uiondoe njiani." },
          { objective: "O6", q: "Kazi ya mtazamaji ni ipi?", options: ["Kuangalia droni na anga na kumwonya rubani", "Kurusha droni", "Kuchaji betri tu", "Kupiga picha za majirani"], answer: 0, why: "Mtazamaji analinda ili rubani aweze kuzingatia kurusha kwa usalama." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni kwa Ufuatiliaji wa Kilimo 1: Utangulizi, Sheria na Usalama",
    questions: [
      { objective: "O1", q: "Droni ni nini?", options: ["Ndege ndogo isiyo na rubani ndani yake", "Trekta", "Satelaiti ya hali ya hewa", "App ya simu"], answer: 0, why: "Droni inaendeshwa kutoka ardhini au kwenye njia iliyopangwa, bila mtu ndani yake." },
      { objective: "O1", q: "Droni yenye kamera inaweza kusaidia kazi ipi ya shamba?", options: ["Kupandisha bei za soko", "Kupata mahali mbegu hazikuota", "Kurekebisha pampu iliyoharibika", "Kusaini mkataba"], answer: 1, why: "Ukiwa juu unaweza kuona haraka mahali zao halikuota." },
      { objective: "O1", q: "Droni inaonyesha sehemu ya mihogo inayonyauka. Droni inakwambia:", options: ["Ni ugonjwa gani hasa", "Ununue kiuatilifu kipi", "Wapi pa kwenda kuangalia", "Hakuna kitu cha maana"], answer: 2, why: "Inaonyesha wapi; unajua kwa nini ukiwa ardhini." },
      { objective: "O2", q: "Droni ipi inaweza kusimama angani na kupaa kutoka mahali padogo?", options: ["Fixed-wing", "Kielelezo cha karatasi kinachoteleza", "Satelaiti", "Multirotor"], answer: 3, why: "Multirotor zina panga boi kadhaa na zinaweza kusimama angani." },
      { objective: "O2", q: "Kamera ya multispectral inafaa kwa sababu:", options: ["Inapima mwanga ambao jicho haliwezi kuona na kuonyesha shida za mimea mapema", "Inapiga picha za rangi nyeusi na nyeupe tu", "Inafanya droni iruke haraka zaidi", "Inanyunyizia mbolea"], answer: 0, why: "Inapima near-infrared na mwanga mwingine unaohusiana na afya ya mimea." },
      { objective: "O2", q: "Kamera ya thermal inaonyesha:", options: ["Rangi tu", "Joto", "Virutubisho vya udongo moja kwa moja", "Bei"], answer: 1, why: "Kamera za thermal hupima joto, jambo linalosaidia kuona uhaba wa maji na wanyama." },
      { objective: "O3", q: "Chama cha ushirika cha mashamba madogo 300 kinataka kufuatilia mahindi ya wanachama. Chaguo zuri ni:", options: ["Kila mkulima anunue droni ya fixed-wing", "Kutotumia droni kamwe", "Huduma moja ya droni inayotumiwa na wanachama wote", "Simu za kupiga tu"], answer: 2, why: "Kutumia droni moja kwa mashamba mengi kunagawa gharama." },
      { objective: "O3", q: "Picha za satelaiti za bure hazifai sana kwa mmea mmoja mmoja kwa sababu:", options: ["Daima kuna mawingu", "Ziko kwa rangi nyeusi na nyeupe", "Zinagharimu sana", "Kila pikseli ni kama mita 10"], answer: 3, why: "Pikseli kubwa huonyesha mwelekeo katika maeneo makubwa, si mmea mmoja mmoja." },
      { objective: "O3", q: "Ipi ni gharama ya kutumia droni zaidi ya kuinunua?", options: ["Betri na panga boi za akiba", "Mvua ya bure", "Mwanga wa jua", "Hakuna kingine"], answer: 0, why: "Betri, panga boi, ada, mafunzo, bando la intaneti na usafiri vyote vinagharimu pesa." },
      { objective: "O3", q: "Kabla ya kununua droni, swali muhimu ni:", options: ["Ina rangi gani?", "Picha zitabadilisha uamuzi gani, na je, unastahili gharama?", "Je, ni toleo jipya zaidi?", "Je, marafiki zangu wana moja?"], answer: 1, why: "Droni inalipa tu kama inaboresha uamuzi kwa thamani kubwa kuliko gharama yake." },
      { objective: "O4", q: "Sheria za droni za Nigeria zinapatikana katika:", options: ["Kipeperushi cha muuzaji", "Kundi la mitandao ya kijamii", "Nig.CARs 2023 Sehemu ya 21 kutoka NCAA", "Kitabu cha risiti cha shamba"], answer: 2, why: "Sehemu ya 21 ya NCAA inahusu usajili, vyeti na uendeshaji wa RPAS." },
      { objective: "O4", q: "Sheria za droni za Ghana, Rwanda na Uganda:", options: ["Ni sawa kabisa na za Kenya", "Hazihitajiki", "Zinawekwa na Umoja wa Mataifa tu", "Zinawekwa na mamlaka ya usafiri wa anga ya kila nchi"], answer: 3, why: "Kila nchi inadhibiti anga lake na ina sheria zake." },
      { objective: "O4", q: "Biashara inayorusha droni kwa wakulima wanaolipa kwa kawaida inahitaji:", options: ["Cheti cha mwendeshaji kutoka kwa mamlaka ya usafiri wa anga", "Hakuna cha ziada", "Simu tu", "Kadi ya biashara tu"], answer: 0, why: "KCAA na NCAA zote zina vyeti vya mwendeshaji kwa kazi ya kibiashara ya droni." },
      { objective: "O4", q: "Unapaswa kukagua wapi ada za sasa za droni?", options: ["Gazeti la zamani", "Ukurasa rasmi wa mamlaka ya usafiri wa anga siku ile unapoomba", "Uvumi", "Boksi la droni"], answer: 1, why: "Ada hubadilika; ukurasa rasmi ndio chanzo cha kuaminika." },
      { objective: "O4", q: "Kunyunyizia viuatilifu kwa droni kunahitaji kibali kutoka kwa:", options: ["Mkulima tu", "Muuzaji tu", "Mamlaka ya usafiri wa anga na mdhibiti wa viuatilifu", "Hakuna mtu"], answer: 2, why: "Kunyunyizia ni kazi maalum inayoongozwa na sheria za usafiri wa anga na za viuatilifu." },
      { objective: "O5", q: "Mahali gani kwa kawaida pana vizuizi vya droni karibu yake?", options: ["Shamba la mahindi mbali na miji", "Ukingo wa mto", "Shamba la maharagwe", "Uwanja wa ndege ndogo"], answer: 3, why: "Sheria huzuia droni karibu na viwanja vya ndege na vya ndege ndogo." },
      { objective: "O5", q: "Kabla ya kurusha juu ya makazi ya jirani unapaswa:", options: ["Kumuuliza kwanza", "Kurusha chini ili kumshtua", "Kumpiga picha", "Kurusha usiku"], answer: 0, why: "Heshimu ardhi na faragha ya watu; uliza kwanza." },
      { objective: "O6", q: "Hali gani ya hewa inamaanisha usirushe droni ndogo?", options: ["Shwari na anga safi", "Upepo mkali wa ghafla au radi", "Mawingu machache bila upepo", "Jua la asubuhi"], answer: 1, why: "Upepo, dhoruba na mvua vinaweza kukufanya ushindwe kuidhibiti droni." },
      { objective: "O6", q: "Onyo la betri linasema iko chini wakati wa safari. Unapaswa:", options: ["Kuruka mstari mmoja zaidi", "Kupanda juu zaidi", "Kutua", "Kuzima rimoti"], answer: 2, why: "Betri ikiwa chini, shusha droni salama sasa hivi." },
      { objective: "O6", q: "Baada ya kila safari unapaswa:", options: ["Kufuta picha zote", "Kuuza droni", "Kusahau habari yake", "Kuandika safari kwenye daftari la kumbukumbu"], answer: 3, why: "Daftari la kumbukumbu linaandika kila safari na matatizo yoyote." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya mpango na uikague tena.",
    criteria: [
      {
        name: "Tatizo la shamba",
        objective: "O1",
        notYet: "Tatizo halijaelezwa wazi, au ni jambo ambalo droni haiwezi kufanya.",
        meets: "Linataja tatizo la shamba lililo wazi ambalo droni inaweza kusaidia, na kile kitakachokaguliwa bado kwa miguu.",
        exceeds: "Linasema picha zitabadilisha uamuzi gani."
      },
      {
        name: "Droni na kamera",
        objective: "O2",
        notYet: "Hakuna aina ya droni wala kamera, au hakuna sababu.",
        meets: "Aina ya droni na kamera zinazofaa kazi na ukubwa wa shamba, pamoja na sababu.",
        exceeds: "Inalinganisha na droni, picha za satelaiti au kutembea na kueleza gharama."
      },
      {
        name: "Mamlaka na vibali",
        objective: "O4",
        notYet: "Mamlaka au vibali havipo.",
        meets: "Inataja mamlaka ya usafiri wa anga ya nchi na vibali vya kukagua au kupata, kutoka tovuti yake yenyewe.",
        exceeds: "Ina kiungo (link) na tarehe sheria zilipokaguliwa."
      },
      {
        name: "Hatari za eneo",
        objective: "O5",
        notYet: "Hakuna hatari zilizoorodheshwa.",
        meets: "Inaorodhesha hatari na maeneo yasiyoruhusiwa kurusha yaliyopatikana, na nani ataambiwa kuhusu safari.",
        exceeds: "Ina ramani rahisi iliyochorwa yenye mahali pa kupaa."
      },
      {
        name: "Orodha ya usalama",
        objective: "O6",
        notYet: "Vipengele chini ya vinane, au hakuna hatua za dharura.",
        meets: "Angalau vipengele vinane vya kabla ya kurusha vinavyohusu hali ya hewa, droni, timu na eneo, pamoja na hatua za dharura.",
        exceeds: "Inataja kazi za rubani na mtazamaji na jinsi matukio yanavyoripotiwa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa mpango wa kutumia droni",
      "Wanafunzi wanaotafuta sheria za droni za mamlaka yao ya usafiri wa anga ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoendelea na Kozi 2 ya mfululizo wa droni",
      "Programu washirika zinazoripoti watumiaji wa droni wakijisajili na kupata leseni kabla ya kurusha"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye intaneti ili kufungua ukurasa wa droni wa mamlaka ya usafiri wa anga",
      "Daftari na kalamu kwa mpango wa kutumia droni na orodha ya kukagua",
      "Shamba halisi au la mfano la kutembea kwa ukaguzi wa eneo",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kuandika mpango"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fungueni ukurasa wa droni wa mamlaka moja kwa moja pamoja na kikundi.",
      "Usirushe droni kama sehemu ya kozi hii isipokuwa rubani, droni na safari vina kila kibali ambacho nchi inahitaji.",
      "Tembeeni pamoja kwenye shamba halisi ili kufanya mazoezi ya kutambua hatari, na wakumbushe wanafunzi wasipige picha za watu wala nyumba.",
      "Kagua tovuti ya mamlaka kuona mabadiliko ya sheria kabla ya kila mara kozi inapofanyika.",
      "Pima mpango wa kutumia droni kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
