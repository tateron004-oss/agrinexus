"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-mission-planning.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Mifumo ya Ndege Zisizo na Rubani", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Mfumo wa mtandaoni wa KCAA wa droni (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Sehemu ya 21, Mifumo ya Ndege Zinazoendeshwa kwa Mbali", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Idara ya Hali ya Hewa ya Kenya (KMD)", url: "https://meteo.go.ke" };
const NIMET = { name: "Shirika la Hali ya Hewa la Nigeria (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-sw",
  lang: "sw",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Droni za Kilimo: Kupanga Misheni na Kuendesha Safari za Ndege",
  skills: "Kugeuza ombi la mteja kuwa wigo wa misheni, Kukagua eneo na kuthibitisha anga na vibali, Kuandika tathmini ya hatari, Kuandaa mpango wa safari wenye mipango ya dharura, Kuongoza maelekezo ya timu na kuendesha misheni, Kufanya ukaguzi wa baada ya safari na kuripoti matukio",
  outcome: "kupanga na kuendesha misheni ya kitaalamu ya droni ya kilimo kuanzia ombi la mteja hadi data kukabidhiwa, ukiwa na faili kamili la misheni: wigo, ukaguzi wa eneo, ukaguzi wa anga na vibali, tathmini ya hatari, mpango wa safari, maelekezo ya timu, mipango ya dharura na kumbukumbu za baada ya safari.",
  about: [
    "Kozi hii ni kwa marubani wa droni, biashara za huduma za droni, timu za droni za mashamba makubwa na kampuni za kilimo, na programu za ugani nchini Kenya, Nigeria na kote Afrika zinazorusha droni kwa ajili ya wengine. Inadhani tayari unajua misingi ya kurusha droni na kutengeneza ramani, na sheria za droni za nchi yako (angalia mfululizo wa ufuatiliaji na kozi ya sheria).",
    "Sura 1 ni kupanga: kukubaliana na mteja anachohitaji kweli, kukagua eneo, kuthibitisha anga na vibali, kutathmini hatari, na kuandaa mpango wa safari wenye kimo, mwingiliano wa picha, betri na muda vilivyokokotolewa. Sura 2 ni utekelezaji: majukumu ya timu na maelekezo, kurusha na kufuatilia misheni, kushughulikia mambo yanayoharibika, na kufunga kazi kwa ukaguzi wa data, kumbukumbu na ripoti za matukio kama yapo.",
    "Mifano ni aina halisi za kazi: kutengeneza ramani ya hekta 40 za parachichi kwa ajili ya msafirishaji nje huko Murang'a, kuhesabu mimea katika mashamba 25 ya wakulima wa mihogo wa mkataba katika Jimbo la Oyo, na kukagua umwagiliaji kwenye shamba la mboga na maua karibu na Naivasha. Usiendeshe misheni bila usajili, leseni, cheti cha mwendeshaji na idhini zinazotakiwa na nchi yako. Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Andaa faili kamili la misheni kwa kazi moja ya droni ya kilimo (halisi au ya mfano, kama kutengeneza ramani ya hekta 40 za parachichi kwa msafirishaji nje): wigo wa misheni uliokubaliwa na mteja, ukaguzi wa eneo wenye hatari na ramani ya mchoro, ukaguzi wa anga na vibali pamoja na vyanzo, jedwali la tathmini ya hatari, mpango wa safari (eneo, kimo, undani wa picha, mwingiliano, kasi, betri, muda, mipaka ya hali ya hewa), majukumu ya timu na maelezo ya maelekezo, mipango ya dharura, na orodha ya ukaguzi ya baada ya safari na kumbukumbu utakazojaza.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Marubani wa droni, biashara za huduma za droni, timu za droni za mashamba makubwa na kampuni za kilimo, na programu za ugani nchini Kenya, Nigeria na kote Afrika zinazorusha droni za kilimo kwa ajili ya wateja.",
    startingPoint: "Wanafunzi tayari wanaweza kurusha droni, kufanya safari ya kawaida ya kutengeneza ramani na wanajua sheria za droni za nchi yao. Wachache hugeuza ombi la mteja kuwa wigo ulioandikwa, huandika tathmini ya hatari na mipango ya dharura, hutoa maelekezo kwa timu, au hufunga kazi kwa ukaguzi wa data, kumbukumbu na ripoti za matukio.",
    gap: "Misheni zisizo na wigo wazi huleta migogoro, na misheni zisizo na ukaguzi wa eneo, tathmini ya hatari na maelekezo huleta ajali, data inayokataliwa na kupoteza wateja. Faili kamili la misheni linasaidia timu ya droni kumpa mteja anachohitaji kwa usalama, kwa mujibu wa sheria na kwa wakati, na linaonyesha wateja na mamlaka kwamba biashara ni ya kitaalamu.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; maneno ya droni na usalama yanaelezwa",
      "Vifaa: simu au kompyuta mpakato yenye app ya ramani; droni na app ya kupanga vinasaidia lakini havihitajiki",
      "Sheria: kila misheni inahitaji usajili, leseni, cheti cha mwendeshaji na idhini zinazotakiwa na nchi",
      "Hali ya shambani: joto, upepo, mvua, mtandao dhaifu na watazamaji katika mashamba ya Afrika",
      "Muda: masomo mafupi, pamoja na muda wa kuandaa faili la misheni"
    ],
    prerequisites: "\"Droni za Kilimo Afrika: Sheria za Usafiri wa Anga na Leseni\" na mfululizo wa \"Droni kwa Ufuatiliaji wa Kilimo\", au uzoefu sawa wa kurusha droni."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa ombi la mteja la kazi ya droni", action: "kuandika wigo wa misheni wenye uamuzi, eneo, vitakavyokabidhiwa, tarehe, mtu wa mawasiliano, bei na ugawaji wa data", standard: "pamoja na kile ambacho droni haiwezi kufanya" },
    { id: "O2", condition: "Kwa eneo la misheni", action: "kufanya ukaguzi wa mezani na wa ardhini na kuthibitisha mipaka ya anga na kila kibali", standard: "vikiwa vimeandikwa na tarehe na vyanzo kabla ya safari" },
    { id: "O3", condition: "Kwa misheni iliyopangwa", action: "kuandika tathmini ya hatari, mpango wa safari na mipango ya dharura", standard: "kukiwa na hatua ya kudhibiti kila hatari na mipaka ya hali ya hewa imewekwa" },
    { id: "O4", condition: "Kabla ya safari ya kwanza ya misheni", action: "kugawa majukumu ya timu na kuongoza maelekezo", standard: "yanayohusu hatari, mipaka, mipango ya dharura, maneno maalum ya mawasiliano na nani anaweza kusema simama" },
    { id: "O5", condition: "Wakati wa misheni", action: "kufuatilia safari na data ya moja kwa moja (telemetry) na kufanya maamuzi ya kuendelea au kusimama", standard: "ukisitisha au ukitua kila mara mpaka unapopitwa" },
    { id: "O6", condition: "Mwishoni mwa misheni", action: "kukagua data, kujaza kumbukumbu na kuripoti tukio lolote", standard: "kabla ya kuondoka eneo hilo, mapengo yakiwa yamerushwa tena na data ikiwa na nakala ya akiba" }
  ],
  chapters: [
    {
      name: "Sura 1: Kupanga misheni",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutoka ombi la mteja hadi wigo wa misheni",
          minutes: 5,
          goal: "Geuza ombi la mteja kuwa wigo wa misheni ulio wazi na ulioandikwa.",
          text: [
            "Mara nyingi wateja huomba \"safari ya droni\" wakati wanahitaji jibu: Ni vitalu gani vina mimea michache? Maji ya umwagiliaji yanavuja wapi? Tuna miti mingapi? Anza kwa kuuliza wanataka kufanya uamuzi gani na watafanya nini na matokeo.",
            "Kisha kubalianeni wigo kwa maandishi: eneo (pamoja na ramani au faili la mipaka), swali na vitakavyokabidhiwa (kwa mfano orthomosaic, ramani ya NDVI, idadi ya miti, ripoti ya ukurasa mmoja), kiwango cha undani kinachohitajika, kipindi cha tarehe, mpango wa kuingia shambani, nani shambani ni mtu wa mawasiliano, bei na njia ya malipo (kama pesa kwa simu wakati wa kukabidhi), na jinsi data itakavyogawanywa na kuhifadhiwa.",
            "Sema wazi kile ambacho droni haiwezi kufanya. Ramani inaweza kuonyesha miti iliyo na shida iko wapi; peke yake haiwezi kusema ni ugonjwa gani. Wigo ulio wazi unakulinda wewe na mteja dhidi ya kukatishwa tamaa na migogoro."
          ],
          steps: ["Uliza mteja anataka kufanya uamuzi gani.", "Kubalianeni eneo na upate mipaka au mchoro.", "Kubalianeni vitakavyokabidhiwa, undani, tarehe na watu wa mawasiliano.", "Kubalianeni bei, malipo na ugawaji wa data.", "Taja mipaka ya kile droni inachoweza kuonyesha.", "Andika yote na kila mmoja athibitishe."],
          words: [["Wigo wa misheni", "makubaliano yaliyoandikwa ya kile kazi ya droni itakachohusu na kukabidhi."], ["Kitakachokabidhiwa (deliverable)", "bidhaa anayopokea mteja, kama ramani au ripoti."], ["Orthomosaic", "picha moja kubwa ya shamba lote iliyounganishwa kutoka picha nyingi za droni."]],
          slides: [
            { title: "Tafuta swali halisi", bullets: ["Mteja atafanya uamuzi gani?", "Atafanya nini na matokeo?"] },
            { title: "Kubalianeni kwa maandishi", bullets: ["Eneo na mipaka", "Vitakavyokabidhiwa na undani", "Tarehe, kuingia shambani, mtu wa mawasiliano shambani", "Bei, malipo, ugawaji wa data"] },
            { title: "Taja mipaka", bullets: ["Ramani zinaonyesha wapi, si kila mara kwa nini", "Wigo ulio wazi unazuia migogoro"] }
          ],
          tryIt: "Msafirishaji nje wa parachichi anasema: \"Rusha droni juu ya hekta zetu 40 wiki ijayo.\" Andika maswali matano ambayo ungeuliza, kisha andika wigo wa misheni wa aya moja wenye eneo, vitakavyokabidhiwa, tarehe, mtu wa mawasiliano, nafasi ya bei na mipaka.",
          youCanNow: "kugeuza ombi la mteja lisilo wazi kuwa wigo wa misheni ulio wazi na ulioandikwa.",
          quickCheck: [
            { objective: "O1", q: "Katika wigo wa misheni, kitakachokabidhiwa (deliverable) ni nini?", options: ["Betri ya droni", "Namba ya simu ya mteja", "Kimo cha safari", "Kile anachopokea mteja, kama ramani au ripoti"], answer: 3, why: "Vitakavyokabidhiwa ni vile unavyomkabidhi mteja, kama orthomosaic, ramani ya NDVI, idadi ya miti au ripoti." },
            { objective: "O1", q: "Mteja anataka ramani yako ya NDVI itaje ugonjwa ulio kwenye parachichi zake. Unaandika nini kwenye wigo?", options: ["Kwamba ramani itataja kila ugonjwa", "Kwamba ramani inaonyesha miti yenye shida, lakini ugonjwa unahitaji kutambuliwa ardhini", "Hakuna chochote kuhusu hilo", "Kwamba utanyunyizia miti pia"], answer: 1, why: "Ramani inaweza kuonyesha miti yenye shida iko wapi lakini peke yake haiwezi kusema ni ugonjwa gani." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ukaguzi wa eneo, anga na vibali",
          minutes: 6,
          goal: "Kagua eneo na uthibitishe mipaka ya anga na kila kibali kabla ya safari.",
          text: [
            "Anza na ukaguzi wa mezani: angalia eneo kwenye app ya ramani na picha za setilaiti kutafuta viwanja vidogo vya ndege, viwanja vya ndege, barabara, miji, nyaya za umeme, minara, mito, maeneo yaliyohifadhiwa na maeneo ya usalama. Kisha kagua sheria na ramani za mamlaka yako kuhusu maeneo yenye vikwazo na umbali kutoka viwanja vya ndege, na kama kazi inahitaji idhini maalum ya uendeshaji. Acha muda wa kutosha ili idhini yoyote itoke.",
            "Kisha kagua ardhini ukiweza, au muombe mtu wa mawasiliano shambani akutumie picha: sehemu za kupaa na kutua, vizuizi na urefu wake, watu na wanyama, makazi, barabara za kuingia, upatikanaji wa mtandao wa simu, na mahali timu inapoweza kujikinga na jua na mvua.",
            "Thibitisha vibali: mwenye ardhi au meneja kwa maandishi, majirani kama utapita juu ya ardhi yao, viongozi wa jamii pale inapotarajiwa, na mamlaka ya usafiri wa anga kama inavyotakiwa. Andika kila kitu kwenye faili la misheni pamoja na tarehe na vyanzo."
          ],
          steps: ["Ukaguzi wa mezani: ramani na picha za setilaiti za eneo.", "Kagua sheria za usafiri wa anga: maeneo yenye vikwazo, umbali kutoka viwanja vya ndege, idhini.", "Ukaguzi wa ardhini au picha za shamba: sehemu za kupaa, vizuizi, watu, mtandao.", "Pata vibali vya mwenye ardhi na majirani kwa maandishi.", "Andika ukaguzi wote pamoja na tarehe na vyanzo."],
          words: [["Ukaguzi wa mezani", "kukagua eneo kwa kutumia ramani na nyaraka kabla ya kwenda huko."], ["Eneo lenye vikwazo", "anga ambamo kurusha droni kumezuiwa au kunahitaji kibali maalum."], ["Idhini ya uendeshaji", "kibali kutoka mamlaka ya usafiri wa anga kwa aina fulani ya uendeshaji."]],
          slides: [
            { title: "Ukaguzi wa mezani", bullets: ["Ramani na picha za setilaiti", "Viwanja vidogo vya ndege, barabara, miji, nyaya za umeme, minara", "Maeneo yaliyohifadhiwa na ya usalama"] },
            { title: "Anga na idhini", bullets: ["Maeneo yenye vikwazo na umbali kutoka viwanja vya ndege", "Je, idhini maalum ya uendeshaji inahitajika?", "Acha muda wa idhini kutoka"] },
            { title: "Ukaguzi wa ardhini", bullets: ["Sehemu za kupaa, vizuizi, urefu wake", "Watu, wanyama, makazi, mtandao", "Mahali pa timu kujikinga"] },
            { title: "Vibali kwa maandishi", bullets: ["Mwenye ardhi au meneja", "Majirani, viongozi wa jamii", "Mamlaka ya usafiri wa anga kama inavyotakiwa"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Kwa shamba unaloweza kulipata kwenye app ya ramani, fanya ukaguzi wa mezani: orodhesha kila kiwanja kidogo cha ndege, barabara, waya wa umeme, makazi na eneo lililohifadhiwa ndani ya kilomita chache, na uandike ni sheria zipi za usafiri wa anga lazima ukague na vibali gani unahitaji.",
          youCanNow: "kukagua eneo, kuthibitisha mipaka ya anga na kupata kila kibali kabla ya misheni.",
          quickCheck: [
            { objective: "O2", q: "Ukaguzi wa mezani ni nini?", options: ["Mkutano kwenye meza ya mteja", "Kurusha safari ya majaribio", "Kuangalia ramani na picha za setilaiti kutafuta hatari na maeneo yenye vikwazo kabla ya kwenda eneo hilo", "Kuhesabu watu wa timu"], answer: 2, why: "Ukaguzi wa mezani hukagua ramani, picha za setilaiti na sheria za mamlaka kabla ya kutembelea eneo." },
            { objective: "O2", q: "Njia zako za safari zitapita juu ya ardhi ya jirani. Unafanya nini kabla ya safari?", options: ["Pata kibali cha jirani na ukiandike kwenye faili la misheni", "Ruka juu sana ili wasigundue", "Ruka asubuhi na mapema tu", "Mwombe mteja awaambie baadaye"], answer: 0, why: "Vibali vya wenye ardhi na majirani vinathibitishwa na kuandikwa kabla ya safari." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tathmini ya hatari na mpango wa safari",
          minutes: 6,
          goal: "Andika tathmini ya hatari na mpango kamili wa safari wenye mipango ya dharura.",
          text: [
            "Tathmini ya hatari inaorodhesha kinachoweza kuharibika, uwezekano wake na uzito wake, na utakachofanya kuipunguza. Kwa mfano: hatari, waya wa umeme kando ya mpaka wa kaskazini; madhara, kugongana; hatua ya kudhibiti, panga njia mita 30 mbali nao na weka kimo cha kurudi nyumbani (return-to-home) juu yake. Hatari nyingine za kawaida: watu wanaoingia eneo, mifugo, ndege wawindaji, upepo mkali wa mchana, joto, kupoteza mawasiliano nyuma ya milima, na kiwanja kidogo cha ndege kilicho karibu.",
            "Mpango wa safari unaweka: eneo likigawanywa katika safari ambazo kila moja inatosha betri moja; kimo na undani wa picha unaotokana nacho (ndani ya kimo cha juu kinachoruhusiwa kisheria); mwingiliano wa picha; kasi; idadi ya betri, pamoja na za akiba; sehemu za kupaa na kutua; kipindi cha muda (kwa mfano 10:00 hadi 14:00 kwa mwanga ulio sawa); na mipaka ya hali ya hewa (upepo wa juu kabisa, bila mvua, uwezo wa kuona). Kagua utabiri wa idara ya hali ya hewa ya nchi yako siku moja kabla na asubuhi ya siku ya kazi.",
            "Mipango ya dharura inasema utafanya nini mambo yakibadilika: upepo ukizidi mpaka wako, sitisha; mvua, funga vifaa urudi tarehe ya akiba; mtu akiingia eneo, simama angani au tua; ukipoteza mawasiliano, kurudi nyumbani kumewekwa tayari; betri ikiwa na hitilafu, tua kwenye sehemu mbadala ya kutua."
          ],
          steps: ["Orodhesha hatari; pima uwezekano na uzito; andika hatua ya kudhibiti kwa kila moja.", "Gawanya eneo katika safari za betri moja.", "Weka kimo, undani, mwingiliano, kasi na betri pamoja na za akiba.", "Weka kipindi cha muda na mipaka ya hali ya hewa; kagua utabiri.", "Andika mipango ya dharura na sehemu mbadala za kutua."],
          words: [["Tathmini ya hatari", "ukaguzi ulioandikwa wa kinachoweza kuharibika na jinsi utakavyopunguza hatari."], ["Hatua ya kudhibiti", "kitendo kinachopunguza hatari."], ["Mpango wa dharura", "kitendo kilichopangwa mapema kwa ajili ya kitu kikibadilika au kikiharibika."], ["Kurudi nyumbani (RTH)", "return-to-home: droni inarudi yenyewe kwenye sehemu ya kupaa."]],
          slides: [
            { title: "Tathmini ya hatari", bullets: ["Hatari, uwezekano, uzito, hatua ya kudhibiti", "Nyaya za umeme, watu, mifugo, ndege", "Upepo, joto, kupoteza mawasiliano, viwanja vidogo vya ndege"] },
            { title: "Mpango wa safari", bullets: ["Safari za betri moja, betri za akiba", "Kimo, undani, mwingiliano, kasi", "Kupaa, kutua, kipindi cha muda"] },
            { title: "Hali ya hewa", bullets: ["Weka mipaka: upepo, mvua, uwezo wa kuona", "Kagua utabiri wa taifa siku moja kabla na asubuhi ya kazi"] },
            { title: "Mipango ya dharura", bullets: ["Upepo: sitisha. Mvua: tarehe ya akiba", "Mtu akiingia: simama angani au tua", "Kupoteza mawasiliano: RTH imewekwa. Hitilafu: sehemu mbadala ya kutua"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Andika jedwali la tathmini ya hatari lenye angalau hatari sita kwa kazi ya parachichi ya hekta 40, kisha andika mpango wake wa safari na mipango mitano ya dharura.",
          youCanNow: "kuandika tathmini ya hatari na mpango kamili wa safari wenye mipango ya dharura.",
          quickCheck: [
            { objective: "O3", q: "Katika tathmini ya hatari, hatari ni nini?", options: ["Kitu kinachoweza kusababisha madhara, kama waya wa umeme", "Malipo ya mteja", "Kitakachokabidhiwa kutoka safari", "Rangi ya droni"], answer: 0, why: "Hatari ni kinachoweza kuharibika; tathmini ya hatari inaongeza uwezekano, uzito na hatua ya kudhibiti." },
            { objective: "O3", q: "Mpango wako umeweka upepo wa juu kabisa. Utabiri wa asubuhi unaonyesha upepo juu ya mpaka huo siku nzima. Unafanya nini?", options: ["Rusha tu na utumaini", "Ondoa mpaka wa upepo kwenye mpango", "Rusha upande wa mbali wa shamba tu", "Tumia tarehe ya akiba iliyo kwenye mpango wa dharura"], answer: 3, why: "Mipango ya dharura inasema la kufanya hali inapopita mpaka, kama kurudi tarehe ya akiba." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kupanga misheni",
        questions: [
          { objective: "O1", q: "Mteja anaomba \"safari ya droni\". Swali lako la kwanza linapaswa kuwa:", options: ["Unataka droni ya rangi gani?", "Unataka kufanya uamuzi gani kwa matokeo?", "Naweza kurusha leo?", "Una droni?"], answer: 1, why: "Uamuzi unaonyesha data na vitakavyokabidhiwa vinavyohitajika." },
          { objective: "O1", q: "Kipi kinafaa kuwa kwenye wigo wa misheni ulioandikwa?", options: ["Muziki anaoupenda rubani", "Bei tu", "Hakuna; kubalianeni kwa simu", "Eneo, vitakavyokabidhiwa, tarehe, mtu wa mawasiliano, bei na ugawaji wa data"], answer: 3, why: "Wigo ulio wazi na ulioandikwa unazuia migogoro." },
          { objective: "O2", q: "Wakati wa ukaguzi wa mezani unagundua kiwanja kidogo cha ndege kilomita 3 mbali. Unapaswa:", options: ["Kukagua sheria za umbali kutoka viwanja vya ndege na idhini yoyote inayohitajika", "Kukipuuza", "Kurusha asubuhi tu", "Kurusha juu zaidi"], answer: 0, why: "Sheria nyingi zinazuia droni karibu na viwanja vya ndege." },
          { objective: "O3", q: "Katika tathmini ya hatari, hatua ya kudhibiti ni:", options: ["Rimoti ya droni", "Kitendo kinachopunguza hatari", "Malalamiko ya mteja", "Betri"], answer: 1, why: "Hatua za kudhibiti hupunguza uwezekano au uzito." },
          { objective: "O3", q: "Utabiri unaonyesha upepo mkali wa mchana. Mpango wenye busara ni:", options: ["Kurusha mchana hata hivyo", "Kufuta kazi milele", "Kuweka kipindi cha muda katika saa zenye utulivu na kuwa na tarehe ya akiba", "Kuondoa propela"], answer: 2, why: "Panga kulingana na mipaka ya hali ya hewa na uwe na tarehe ya akiba." }
        ]
      }
    },
    {
      name: "Sura 2: Kuendesha misheni",
      lessons: [
        {
          objectives: ["O4"],
          title: "Majukumu ya timu na maelekezo",
          minutes: 5,
          goal: "Gawa majukumu ya timu na uongoze maelekezo wazi kabla ya misheni.",
          text: [
            "Hata misheni ndogo huenda vizuri zaidi majukumu yakiwa wazi. Rubani mkuu (pilot in command) anawajibika kwa usalama wa safari na ana neno la mwisho. Mwangalizi anaiangalia droni na anga na anaonya kuhusu ndege, ndege wa porini, watu na wanyama. Mwendeshaji wa ardhini au wa kamera anaweza kushughulikia betri, kamera, eneo la kutua na mteja.",
            "Kabla ya safari ya kwanza, rubani mkuu anatoa maelekezo kwa kila mtu, pamoja na mtu wa mawasiliano shambani: eneo na njia za safari, kimo, muda wa kila betri, sehemu za kupaa na kutua, hatari na hatua za kudhibiti kutoka tathmini ya hatari, mipaka ya hali ya hewa, mipango ya dharura, maneno mtakayotumia (kwa mfano \"simama\", \"tua sasa\"), na nani anaweza kusema simama. Mtu yeyote anaweza kusema simama kwa ajili ya usalama.",
            "Hakikisha kila mtu wa timu ana maji, kinga dhidi ya jua na vifaa vya usalama kama fulana zinazong'aa, na kwamba eneo la kupaa limewekwa alama na watazamaji wanakaa mbali nalo."
          ],
          steps: ["Gawa rubani mkuu, mwangalizi na mwendeshaji wa ardhini au wa kamera.", "Maelekezo: eneo, kimo, betri, kupaa na kutua, hatari, mipaka ya hali ya hewa.", "Kubalianeni mipango ya dharura na maneno maalum (simama, tua sasa).", "Thibitisha kwamba mtu yeyote anaweza kusema simama.", "Weka alama eneo la kupaa; hakikisha maji, kinga ya jua na fulana."],
          words: [["Rubani mkuu", "rubani anayewajibika kwa usalama wa safari, mwenye neno la mwisho."], ["Maneno maalum ya mawasiliano", "maneno mafupi yaliyokubaliwa ambayo timu inatumia ili kila mtu aelewe mara moja."]],
          slides: [
            { title: "Majukumu ya timu", bullets: ["Rubani mkuu: neno la mwisho kuhusu usalama", "Mwangalizi: droni, anga, watu, wanyama", "Mwendeshaji wa ardhini au wa kamera: betri, kamera, mteja"] },
            { title: "Maelekezo", bullets: ["Eneo, kimo, betri, kupaa, kutua", "Hatari, mipaka ya hali ya hewa, mipango ya dharura", "Maneno maalum: simama, tua sasa"] },
            { title: "Itunze timu", bullets: ["Mtu yeyote anaweza kusema simama", "Maji, kinga ya jua, fulana", "Eneo la kupaa lina alama, watazamaji mbali"] }
          ],
          tryIt: "Andika hati ya maelekezo ya ukurasa mmoja kwa misheni ya parachichi ambayo rubani mkuu anaweza kuisoma kwa sauti kwa dakika tatu, ikihusu kila kipengele cha somo hili.",
          youCanNow: "kugawa majukumu ya timu na kuongoza maelekezo wazi kabla ya misheni.",
          quickCheck: [
            { objective: "O4", q: "Mwangalizi anafanya nini?", options: ["Analipa timu", "Anaiangalia droni, anga na ardhi na anamwonya rubani", "Anaandika ripoti ya mteja", "Anamtoza mteja pesa"], answer: 1, why: "Mwangalizi anaangalia ndege, ndege wa porini, watu na wanyama na anamwonya rubani." },
            { objective: "O4", q: "Mtu wa mawasiliano shambani atasimama karibu na eneo la kupaa. Unafanya nini katika maelekezo?", options: ["Usimhusishe katika maelekezo", "Mwambie akae kimya", "Mhusishe, mweleze hatari na maneno maalum, na mwambie mtu yeyote anaweza kusema simama", "Mwombe arushe droni"], answer: 2, why: "Maelekezo yanamhusisha kila mtu aliye eneo hilo, pamoja na mtu wa mawasiliano shambani, na mtu yeyote anaweza kusema simama kwa usalama." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutekeleza na kufuatilia misheni",
          minutes: 5,
          goal: "Rusha misheni iliyopangwa, ifuatilie na ufanye maamuzi ya kuendelea au kusimama.",
          text: [
            "Kabla ya kila safari, pitia orodha ya ukaguzi kabla ya safari na uthibitishe hali iko ndani ya mipaka. Pakia au kagua njia iliyopangwa, thibitisha sehemu ya nyumbani na kimo cha kurudi nyumbani, na uthibitishe mwangalizi yuko mahali pake.",
            "Wakati wa safari, rubani anaiangalia droni na telemetry (betri, mawimbi, setilaiti, maonyo ya upepo, kimo, maendeleo kwenye njia). Mwangalizi anaangalia anga na ardhi. Kuwa tayari kuchukua udhibiti wa mkono wakati wowote. Badilisha betri kati ya safari kwa kufuata utaratibu wako wa betri, na uweke alama njia zilizokamilika.",
            "Fanya maamuzi ya kuendelea au kusimama siku nzima. Upepo ukipanda juu ya mpaka wako, mtu akiingia eneo, dhoruba ikijikusanya, au onyo likijirudia, sitisha au tua. Kumaliza kesho ni bora kuliko ajali leo. Mjulishe mteja maendeleo na mabadiliko yoyote."
          ],
          steps: ["Orodha ya ukaguzi kabla ya safari; hali iko ndani ya mipaka?", "Kagua njia, sehemu ya nyumbani na kimo cha kurudi nyumbani.", "Rusha; rubani anaangalia droni na telemetry, mwangalizi anaangalia anga na ardhi.", "Badilisha betri kwa usalama; weka alama njia zilizokamilika.", "Sitisha au tua mipaka ikipitwa; mjulishe mteja."],
          words: [["Telemetry", "data ya moja kwa moja ambayo droni inatuma kwa rimoti: betri, kimo, mahali, mawimbi, maonyo."], ["Endelea / simama (go / no-go)", "uamuzi kama ni salama kurusha au kuendelea."]],
          slides: [
            { title: "Kabla ya kila safari", bullets: ["Orodha ya ukaguzi na mipaka", "Njia, sehemu ya nyumbani, kimo cha RTH", "Mwangalizi yuko mahali pake"] },
            { title: "Wakati wa safari", bullets: ["Rubani: droni na telemetry", "Mwangalizi: anga na ardhi", "Tayari kwa udhibiti wa mkono"] },
            { title: "Endelea au simama, siku nzima", bullets: ["Upepo, watu, dhoruba, maonyo yanayojirudia", "Sitisha au tua", "Kesho ni bora kuliko ajali"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Andika kadi ya endelea / simama kwa misheni yako: hali tano zinazomaanisha endelea, na tano zinazomaanisha simama au tua, kwa maneno mafupi ambayo timu inaweza kusoma shambani.",
          youCanNow: "kurusha na kufuatilia misheni iliyopangwa na kufanya maamuzi sahihi ya kuendelea au kusimama.",
          quickCheck: [
            { objective: "O5", q: "Telemetry ni nini?", options: ["Mkataba wa mteja", "Utabiri wa hali ya hewa", "Data ya moja kwa moja ya safari kama betri, kimo, mawimbi na maonyo", "Orodha ya zamu za timu"], answer: 2, why: "Telemetry ni data ya moja kwa moja ambayo rubani anaiangalia wakati wa safari." },
            { objective: "O5", q: "Dhoruba inajikusanya na nusu ya njia zimekamilika. Unafanya nini?", options: ["Tua, na umalize zilizobaki baadaye", "Rusha kwa kasi zaidi ili umalize", "Zima maonyo", "Mwache mwangalizi arushe wakati wewe unafunga vifaa"], answer: 0, why: "Kumaliza kesho ni bora kuliko ajali leo; sitisha au tua hali inapokuwa si salama." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kufunga misheni: ukaguzi wa data, kumbukumbu na matukio",
          minutes: 5,
          goal: "Kagua data, jaza kumbukumbu na ushughulikie ripoti za matukio kabla ya kuondoka eneo hilo.",
          text: [
            "Kabla ya kuondoka eneo hilo, kagua data: hesabu picha za kila safari, angalia sampuli kama zina ukungu au mwanga mbaya, tafuta mapengo katika eneo lililopigwa picha, na ikiwezekana unganisha picha haraka kwa ubora mdogo kwenye kompyuta mpakato. Rusha tena juu ya mapengo wakati timu na hali bado zipo. Weka nakala ya akiba ya data kwenye kifaa cha pili.",
            "Jaza kumbukumbu: kumbukumbu za kila safari (muda, betri, rubani, matatizo), maelezo ya betri na matengenezo, na hali halisi iliyokuwepo kwenye faili la misheni. Mshukuru mtu wa mawasiliano shambani na uthibitishe lini atapokea vitakavyokabidhiwa.",
            "Kama kuna kitu kiliharibika (droni kuanguka, kukaribia kugongana na ndege, kuumia, uharibifu wa mali, droni kupotea angani), kwanza fanya eneo kuwa salama, kisha andika kilichotokea na ukiripoti kwa mamlaka yako ya usafiri wa anga kama sheria zake zinavyotaka, na kwa kampuni yako ya bima. Jadili tukio na timu na uboreshe taratibu zako ili lisitokee tena."
          ],
          steps: ["Hesabu picha, angalia sampuli kama zina ukungu, tafuta mapengo.", "Rusha tena juu ya mapengo; weka nakala ya akiba ya data kwenye kifaa cha pili.", "Jaza kumbukumbu za safari, betri na matengenezo.", "Thibitisha tarehe ya kukabidhi na mteja.", "Kwa tukio lolote: fanya salama, andika, ripoti kama inavyotakiwa, jadili na uboreshe taratibu."],
          words: [["Karibu ajali (near miss)", "tukio ambapo ajali ilikaribia kutokea."], ["Pengo la picha", "sehemu ambayo picha hazipo au ni mbaya."]],
          slides: [
            { title: "Kagua data ukiwa eneo la kazi", bullets: ["Hesabu picha, angalia sampuli kama zina ukungu", "Tafuta mapengo; unganisha picha haraka", "Rusha tena juu ya mapengo, weka nakala kwenye kifaa cha pili"] },
            { title: "Jaza kumbukumbu", bullets: ["Kumbukumbu za safari, betri na matengenezo", "Hali halisi kwenye faili la misheni", "Thibitisha tarehe ya kukabidhi"] },
            { title: "Kama kuna kitu kiliharibika", bullets: ["Fanya eneo kuwa salama", "Andika na uripoti kama inavyotakiwa; ijulishe bima", "Jadili na uboreshe taratibu"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Kazi ya mwisho: kusanya faili lako kamili la misheni: wigo, ukaguzi wa eneo na ramani ya mchoro, ukaguzi wa anga na vibali pamoja na vyanzo, tathmini ya hatari, mpango wa safari, majukumu ya timu na maelekezo, mipango ya dharura, kadi ya endelea / simama, na orodha ya ukaguzi ya baada ya safari na kiolezo cha kumbukumbu.",
          youCanNow: "kufunga misheni kitaalamu kwa ukaguzi wa data, kumbukumbu kamili na kushughulikia matukio ipasavyo.",
          quickCheck: [
            { objective: "O6", q: "Kuunganisha picha haraka kwa ubora mdogo ni kwa ajili ya nini?", options: ["Kutengeneza ripoti ya mwisho", "Kuchaji betri", "Kutuma ankara", "Kutafuta mapengo katika picha kabla ya kuondoka eneo hilo"], answer: 3, why: "Kuunganisha haraka kunaonyesha mapengo wakati timu na hali bado zipo ili kuyarusha tena." },
            { objective: "O6", q: "Droni yako iligonga nguzo ya uzio na kuvunja propela. Unafanya nini kwanza?", options: ["Ripoti mwezi ujao", "Fanya eneo kuwa salama, kisha liandike na uliripoti kama sheria zinavyotaka", "Ficha uharibifu kwa mteja", "Rusha misheni inayofuata na propela ileile"], answer: 1, why: "Kwanza fanya eneo kuwa salama, kisha andika tukio na uliripoti kwa mamlaka na bima kama inavyotakiwa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuendesha misheni",
        questions: [
          { objective: "O4", q: "Nani ana neno la mwisho kuhusu usalama wa safari?", options: ["Mteja", "Mwangalizi", "Rubani mkuu", "Mtengenezaji wa droni"], answer: 2, why: "Rubani mkuu anawajibika kwa usalama wa safari." },
          { objective: "O4", q: "Nani anaweza kusema simama kwa usalama wakati wa misheni?", options: ["Mtu yeyote wa timu", "Mteja tu", "Mwangalizi tu", "Hakuna mtu droni ikishaanza kuruka"], answer: 0, why: "Mtu yeyote anayeona hatari anaweza kusema simama." },
          { objective: "O5", q: "Telemetry inaonyesha upepo sasa uko juu ya mpaka wako. Unapaswa:", options: ["Kurusha kwa kasi zaidi ili umalize", "Kuzima maonyo", "Kupanda juu zaidi", "Kusitisha au kutua"], answer: 3, why: "Kupita mipaka kunamaanisha simama; maliza baadaye." },
          { objective: "O6", q: "Kabla ya kuondoka eneo hilo unapaswa:", options: ["Kufuta picha ili kupata nafasi", "Kukagua picha kama zina ukungu na mapengo, na kurusha tena juu ya mapengo", "Kuondoka bila kumwambia mteja", "Kufuta kadi ya kumbukumbu (format)"], answer: 1, why: "Kurekebisha mapengo ukiwa eneo la kazi kunaokoa safari ya pili." },
          { objective: "O6", q: "Droni yako ilikaribia kugongana na ndege ndogo. Baada ya kufanya mambo kuwa salama unapaswa:", options: ["Kuliandika na kuliripoti kama mamlaka yako inavyotaka", "Kulifanya siri", "Kukimbia haraka", "Kuilaumu ndege"], answer: 0, why: "Kuripoti kunasaidia usalama na mara nyingi kunatakiwa na sheria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni za Kilimo: Kupanga Misheni na Kuendesha Safari za Ndege",
    questions: [
      { objective: "O1", q: "Wigo wa misheni ni:", options: ["Kamera ya droni", "Makubaliano yaliyoandikwa ya kile kazi inachohusu na kukabidhi", "Ripoti ya hali ya hewa", "Kumbukumbu ya safari"], answer: 1, why: "Unaweka eneo, vitakavyokabidhiwa, tarehe, bei na mipaka." },
      { objective: "O1", q: "Kipi ni kitakachokabidhiwa?", options: ["Leseni ya rubani", "Betri", "Ramani ya NDVI na ripoti ya ukurasa mmoja", "Propela"], answer: 2, why: "Vitakavyokabidhiwa ni vile anavyopokea mteja." },
      { objective: "O1", q: "Kwa nini utaje mipaka ya ramani ya droni kwenye wigo?", options: ["Kuepuka kukatishwa tamaa na migogoro", "Kutoza zaidi", "Kumchanganya mteja", "Haihitajiki"], answer: 0, why: "Mipaka iliyo wazi huweka matarajio ya kweli." },
      { objective: "O2", q: "Ukaguzi wa mezani unatumia:", options: ["Jembe tu", "Droni ikiwa angani", "Trekta", "Ramani na picha za setilaiti kabla ya kwenda eneo hilo"], answer: 3, why: "Ukaguzi wa mezani hugundua hatari na masuala ya anga mapema." },
      { objective: "O2", q: "Ni kipi unapaswa kuthibitisha kwa maandishi kabla ya kurusha juu ya shamba la mteja?", options: ["Ukubwa wa kiatu cha rubani", "Kibali cha mwenye ardhi au meneja", "Bei ya mazao", "Hakuna"], answer: 1, why: "Kibali cha maandishi kinamlinda kila mtu." },
      { objective: "O2", q: "Kwa nini ukague mtandao wa simu katika ukaguzi wa ardhini?", options: ["Kwa muziki", "Kwa mitandao ya kijamii", "Apps, ramani na mawasiliano vinaweza kuuhitaji", "Haina faida"], answer: 2, why: "Kukosa mtandao kunaweza kuathiri ramani, uratibu na dharura." },
      { objective: "O3", q: "Tathmini ya hatari inaorodhesha:", options: ["Hatari, uwezekano, uzito na hatua za kudhibiti", "Gharama tu", "Majina ya wateja", "Aina za mazao"], answer: 0, why: "Inaonyesha kinachoweza kuharibika na jinsi ya kupunguza hatari." },
      { objective: "O3", q: "Waya wa umeme unapita kando ya shamba. Hatua nzuri ya kudhibiti ni:", options: ["Rusha karibu zaidi upate picha bora", "Upuuze", "Rusha usiku", "Weka njia za safari mbali nao na weka kimo cha RTH juu yake"], answer: 3, why: "Umbali na kimo salama cha RTH hupunguza hatari ya kugongana." },
      { objective: "O3", q: "Kwa nini ugawanye eneo kubwa katika safari za betri moja?", options: ["Kutumia picha chache", "Ili kila safari imalizike salama kwa betri moja", "Kuichanganya programu", "Kwa sababu mwingiliano unahitaji hivyo"], answer: 1, why: "Kupanga kwa betri kunazuia dharura za betri kuisha." },
      { objective: "O3", q: "Unapaswa kupata utabiri wa hali ya hewa wapi?", options: ["Kwa kubahatisha", "Maoni ya rafiki", "Idara ya hali ya hewa ya taifa, siku moja kabla na asubuhi ya kazi", "Shajara ya mwaka jana"], answer: 2, why: "Utabiri rasmi ndio unaoaminika zaidi." },
      { objective: "O3", q: "Mpango wa dharura ni:", options: ["Kitendo kilichopangwa mapema kwa ajili ya kitu kikibadilika au kikiharibika", "Mpangilio wa kamera", "Malipo", "Sehemu ya droni"], answer: 0, why: "Mipango ya dharura inaisaidia timu kuchukua hatua haraka na kwa usalama." },
      { objective: "O4", q: "Kazi kuu ya mwangalizi ni:", options: ["Kuchakata data", "Kulipa timu", "Kurusha droni", "Kuiangalia droni, anga na ardhi na kumwonya rubani"], answer: 3, why: "Mwangalizi analinda kwa kuangalia hatari." },
      { objective: "O4", q: "Maneno maalum kama \"simama\" na \"tua sasa\" yanasaidia kwa sababu:", options: ["Yanasikika ya kitaalamu", "Kila mtu anayaelewa mara moja", "Droni inayahitaji", "Yanaokoa betri"], answer: 1, why: "Maneno mafupi yaliyokubaliwa hupunguza kuchanganyikiwa wakati wa haraka." },
      { objective: "O5", q: "Telemetry inajumuisha:", options: ["Bei za mazao", "Majina ya wakulima", "Betri, kimo, mahali, mawimbi na maonyo", "Hali ya hewa ya mwezi ujao"], answer: 2, why: "Telemetry ni data ya moja kwa moja ya safari." },
      { objective: "O5", q: "Mtu anaingia eneo la safari. Timu inapaswa:", options: ["Kuisimamisha droni angani au kuitua", "Kurusha chini zaidi juu yao", "Kuendelea kurusha njia", "Kuwaambia wakimbie"], answer: 0, why: "Watu kwenye eneo huongeza hatari; sitisha au tua." },
      { objective: "O5", q: "\"Kumaliza kesho ni bora kuliko ajali leo\" maana yake:", options: ["Kila mara rusha kwa kuchelewa", "Kamwe usimalize kazi", "Toza zaidi kwa kuchelewa", "Simama hali ikiwa si salama, hata kama kazi haijaisha"], answer: 3, why: "Usalama unakuja kabla ya ratiba." },
      { objective: "O6", q: "Kwa nini uweke nakala ya akiba ya data kwenye kifaa cha pili kabla ya kuondoka?", options: ["Kujaza nafasi", "Ili data ibaki kifaa kimoja kikiharibika au kikipotea", "Kwa sababu droni inahitaji hivyo", "Kushiriki na watu usiowajua"], answer: 1, why: "Nakala ya pili inalinda data ya mteja na kazi yako." },
      { objective: "O6", q: "Kumbukumbu za safari baada ya misheni zinaandika:", options: ["Jina la mteja tu", "Bei tu", "Muda, betri, rubani na matatizo ya kila safari", "Hakuna"], answer: 2, why: "Kumbukumbu zinasaidia usalama, matengenezo na kufuata sheria." },
      { objective: "O6", q: "Baada ya tukio, jambo la kwanza ni:", options: ["Kufanya eneo kuwa salama", "Kuweka picha mtandaoni", "Kuondoka haraka", "Kufuta kumbukumbu"], answer: 0, why: "Watu na mali vinakuja kwanza." },
      { objective: "O6", q: "Kwa nini ujadili tukio na timu?", options: ["Kumlaumu mtu", "Kupitisha muda", "Haina faida", "Kuboresha taratibu ili lisitokee tena"], answer: 3, why: "Kujifunza kutokana na matukio huboresha usalama." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 3, 4, 6, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya faili na uikague tena.",
    criteria: [
      { name: "Wigo wa misheni", objective: "O1", notYet: "Uamuzi wa mteja, eneo au vitakavyokabidhiwa havipo.", meets: "Uamuzi, eneo, vitakavyokabidhiwa, undani, tarehe, mtu wa mawasiliano, bei na ugawaji wa data vimeandikwa, pamoja na kile ambacho droni haiwezi kufanya.", exceeds: "Umesainiwa au kuthibitishwa kwa maandishi na mteja." },
      { name: "Ukaguzi wa eneo na vibali", objective: "O2", notYet: "Hakuna ukaguzi, au ukaguzi wa vibali na anga haupo.", meets: "Ukaguzi wa mezani na wa ardhini wenye ramani ya mchoro ya hatari, ukaguzi wa anga pamoja na vyanzo, na vibali vya maandishi.", exceeds: "Unajumuisha mtandao wa simu, mahali pa timu kujikinga na tarehe za kila ukaguzi." },
      { name: "Tathmini ya hatari", objective: "O3", notYet: "Hatari zimeorodheshwa bila hatua za kudhibiti.", meets: "Jedwali lenye hatari, uwezekano, uzito na hatua ya kudhibiti kwa kila hatari kuu.", exceeds: "Linahusu joto, upepo, watazamaji, kupoteza mawasiliano na kiwanja chochote kidogo cha ndege kilicho karibu." },
      { name: "Mpango wa safari na mipango ya dharura", objective: "O3", notYet: "Kimo, mwingiliano, betri au mipaka ya hali ya hewa havipo.", meets: "Eneo limegawanywa katika safari, kimo, undani wa picha, mwingiliano, kasi, betri pamoja na za akiba, muda, mipaka ya hali ya hewa na mipango ya dharura.", exceeds: "Inaonyesha jinsi idadi ya betri ilivyokokotolewa na tarehe ya akiba." },
      { name: "Timu na maelekezo", objective: "O4", notYet: "Hakuna majukumu wala maelezo ya maelekezo.", meets: "Majukumu yenye majina na maelezo ya maelekezo yenye hatari, mipaka, mipango ya dharura na maneno maalum.", exceeds: "Inajumuisha vifaa vya usalama, maji na jinsi watazamaji wanavyowekwa mbali." },
      { name: "Kufunga misheni", objective: "O6", notYet: "Hakuna orodha ya ukaguzi wala kumbukumbu za baada ya safari.", meets: "Orodha ya ukaguzi ya baada ya safari yenye ukaguzi wa data, nakala za akiba, kumbukumbu za safari na hatua za kuripoti matukio.", exceeds: "Inajumuisha jinsi mafunzo kutoka matukio yanavyoboresha taratibu." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki wa faili la misheni",
      "Wanafunzi wanaoripoti kutumia faili la misheni lililoandikwa kwa kazi halisi ya mteja ndani ya siku 60 (utafiti wa ufuatiliaji)",
      "Biashara za droni zinazoripoti kurusha tena, migogoro au matukio machache zaidi baada ya mafunzo",
      "Wanafunzi wanaochukua kozi nyingine ya droni au kupata mteja anayerudi tena"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta mpakato yenye app ya ramani na picha za setilaiti",
      "Violezo au daftari kwa wigo, tathmini ya hatari, mpango wa safari na kumbukumbu",
      "Droni na app yake ya kupanga, kama vinapatikana, kwa misheni ya mazoezi",
      "Jumla ya dakika 60 hivi, katika vipindi vifupi, pamoja na muda wa kuandaa faili la misheni"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha andaeni faili moja la mfano la misheni kama kikundi kabla wanafunzi hawajaandaa yao wenyewe.",
      "Fanyeni igizo la maelekezo lenye rubani, mwangalizi na mtu wa mawasiliano shambani, na mfanye mazoezi ya maneno maalum.",
      "Safari yoyote ya mazoezi lazima ifuate sheria za droni za nchi, ikiwa na marubani wenye leseni na idhini zikiwa tayari.",
      "Tumieni kazi za mfano zilizo kwenye kozi kama wanafunzi bado hawana mteja.",
      "Pimeni faili la misheni kwa rubriki na mtoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
