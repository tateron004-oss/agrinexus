"use strict";

// Koach Learn course (Swahili translation of agriculture-africa/agri-drones-regulations.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Mamlaka ya Usafiri wa Anga ya Kenya (KCAA): Mifumo ya Ndege Zisizo na Rubani (UAS)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "Mfumo wa mtandaoni wa KCAA wa droni (RPAS)", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021)", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Cheti cha Mwendeshaji wa Droni (Remote Air Operator Certificate, ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: Taasisi za Mafunzo ya Droni (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Kanuni za Usafiri wa Anga za Kenya 2026 (kanuni zilizochapishwa)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA): Nig.CARs 2023 Sehemu ya 21, Droni (RPAS)", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO na WHO: Mwongozo wa kunyunyizia viuatilifu kutoka angani (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Bodi ya Bidhaa za Kudhibiti Wadudu (Pest Control Products Board, Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Shirika la Taifa la Usimamizi na Udhibiti wa Chakula na Dawa (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Ofisi ya Kamishna wa Ulinzi wa Data (ODPC, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-sw",
  lang: "sw",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Droni za Kilimo Afrika: Sheria za Usafiri wa Anga na Leseni",
  skills: "Kutafuta na kusoma kanuni za droni za nchi, Kupanga droni na kazi kwa kiwango cha hatari, Kuorodhesha leseni na vyeti ambavyo kazi inahitaji, Kushughulikia kazi maalum (kunyunyizia, BVLOS, karibu na viwanja vya ndege), Kujenga faili la uzingatiaji wa sheria, Kufuatilia mabadiliko ya sheria",
  outcome: "kusoma kanuni za droni za nchi yako, kujua usajili, leseni, vyeti na vibali ambavyo kazi ya droni ya kilimo inahitaji, na kujenga faili kamili la uzingatiaji wa sheria kwa biashara ya huduma za droni.",
  about: [
    "Kozi hii ni kwa watu wanaopanga kurusha droni kikazi katika kilimo cha Afrika: wajasiriamali wa huduma za droni, mameneja wa biashara za kilimo na mashamba makubwa, viongozi wa vyama vya ushirika na maafisa ugani, na vijana wanaojifunza kuwa marubani wa droni. Inaenda ndani zaidi kuliko muhtasari wa mfululizo wa ufuatiliaji wa mazao.",
    "Sura 1 inaeleza jinsi sheria ya droni inavyojengwa, kisha inapitia sheria za Kenya na Nigeria: Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 zinazosimamiwa na Mamlaka ya Usafiri wa Anga ya Kenya (KCAA), na Sehemu ya 21 ya Kanuni za Usafiri wa Anga za Nigeria 2023 zinazosimamiwa na Mamlaka ya Usafiri wa Anga ya Nigeria (NCAA). Sura 2 inahusu leseni na vyeti vya waendeshaji, kazi maalum kama kunyunyizia na kurusha karibu na viwanja vya ndege, na kujenga na kutunza faili la uzingatiaji wa sheria.",
    "Haya ni mafunzo, si ushauri wa kisheria. Sheria za droni ni sheria halisi, zinabadilika, na nchi nyingine za Afrika zina mamlaka na sheria zao. Kila somo linaonyesha chanzo rasmi; thibitisha kila kitu hapo, au kwa mamlaka au kwa wakili, kabla ya kuchukua hatua. Usirushe droni kamwe bila usajili, leseni na vibali ambavyo nchi yako inataka."
  ],
  finalTask: "Jenga faili la uzingatiaji wa sheria kwa biashara ya huduma za droni katika nchi yako itakayopiga ramani ya mazao kwa wakulima na mashamba makubwa (na, ukipanga hivyo, kunyunyizia): mamlaka na kanuni zinazohusika, pamoja na viungo na tarehe uliyokagua; daraja la droni yako na kundi la hatari la kazi; kila usajili, kibali, leseni, cheti na idhini kinachohitajika, anayekitoa na hali yake; nyaraka zinazohitajika (mwongozo wa uendeshaji, bima, kumbukumbu za matengenezo na za safari); vibali vya ziada kwa kunyunyizia kokote; hatua za ulinzi wa data; na ratiba ya kukagua mabadiliko ya sheria na kufanya upya.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wanaopanga kurusha droni kikazi katika kilimo cha Afrika: wajasiriamali wa huduma za droni, mameneja wa biashara za kilimo na mashamba makubwa, viongozi wa vyama vya ushirika na maafisa ugani, na vijana wanaojifunza kuwa marubani wa droni, hasa Kenya na Nigeria.",
    startingPoint: "Wengi wanajua droni ya kilimo inafanya nini na huenda wamewahi kurusha droni ndogo. Wachache wamesoma kanuni za droni za nchi yao, wanajua leseni na vyeti ambavyo kazi ya kulipwa inahitaji, au wanatunza nyaraka ambazo mkaguzi, mteja au kampuni ya bima angeziomba.",
    gap: "Kurusha droni kwa malipo bila usajili, leseni, cheti cha mwendeshaji au idhini sahihi kunaweza kuleta faini, droni kunyang'anywa na kupoteza wateja, na kunyunyizia bila vibali vya usafiri wa anga na vya viuatilifu kunahatarisha watu na mazao. Kujua jinsi ya kusoma sheria na kujenga faili la uzingatiaji kunaiwezesha biashara ya droni kufanya kazi kihalali, kupata mikataba na kupata bima.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi; kila neno la kisheria na la usafiri wa anga linaelezwa",
      "Vifaa: simu au kompyuta yenye intaneti ya kufungua tovuti ya mamlaka na kupakua sheria",
      "Sheria, ada na fomu hubadilika: wanafunzi wanathibitisha kila kitu kwenye tovuti rasmi, kwa mamlaka au kwa wakili",
      "Haya ni mafunzo, si ushauri wa kisheria; hakuna kurusha droni wala kunyunyizia katika kozi hii",
      "Nchi nyingine za Afrika zina mamlaka na sheria zao, kwa hiyo wanafunzi wanatumia njia hii kwa nchi yao"
    ],
    prerequisites: "Inapendekezwa kwanza kozi \"Droni kwa Ufuatiliaji wa Kilimo 1: Utangulizi, Sheria na Usalama\"."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Kwa nchi yako", action: "kutafuta kanuni, viwango na orodha ya ada za droni za mamlaka ya usafiri wa anga na kutaja kila ngazi ya sheria ya droni", standard: "pamoja na viungo na tarehe uliyokagua" },
    { id: "O2", condition: "Ukipewa kazi ya kibiashara ya droni ya kilimo nchini Kenya", action: "kuorodhesha usajili, leseni, vyeti na idhini za KCAA ambazo huenda kazi hiyo inahitaji", standard: "ukitaja kanuni zinakotoka na kwamba ada za sasa na sheria mpya lazima zikaguliwe" },
    { id: "O3", condition: "Ukipewa uzito wa droni na kazi iliyopangwa nchini Nigeria", action: "kuweka droni katika daraja lake na kazi katika kundi lake la hatari chini ya Sehemu ya 21, na kuorodhesha mipaka ya uendeshaji inayohusika", standard: "kwa daraja sahihi la uzito na kundi sahihi la hatari" },
    { id: "O4", condition: "Kwa biashara ya huduma za droni", action: "kupanga leseni za marubani na cheti cha mwendeshaji ambavyo biashara inahitaji, na nyaraka ambazo cheti cha mwendeshaji kinaziomba", standard: "ukitenganisha vibali vya mtu anayerusha na vibali vya biashara" },
    { id: "O5", condition: "Ukipewa kazi yenye kunyunyizia, BVLOS, kurusha usiku au uwanja wa ndege", action: "kutambua vibali vya ziada vya usafiri wa anga na vya viuatilifu ambavyo kazi inahitaji na anayevitoa", standard: "kabla ya kutoa au kupanga kazi hiyo" },
    { id: "O6", condition: "Kwa biashara yako ya droni", action: "kujenga faili la uzingatiaji wa sheria na ratiba ya kufanya upya na kukagua sheria", standard: "kila nyaraka inayohitajika ikiwa imeorodheshwa pamoja na hali yake" }
  ],
  chapters: [
    {
      name: "Sura 1: Sheria ya droni Afrika",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jinsi sheria ya droni inavyojengwa",
          minutes: 5,
          goal: "Tafuta na utaje ngazi za sheria ya droni zinazohusika katika nchi yako.",
          text: [
            "Nchi hujenga sheria zao za usafiri wa anga juu ya viwango vya kimataifa vya ICAO, Shirika la Kimataifa la Usafiri wa Anga la Umoja wa Mataifa, lakini kila nchi huandika na kusimamia sheria yake ya droni. Kwa kawaida kuna sheria ya usafiri wa anga iliyopitishwa na bunge; kanuni za droni zilizotungwa chini ya sheria hiyo; viwango vya utekelezaji au miongozo yenye maelezo ya kiufundi; orodha ya ada; na matangazo au nyaraka maalum (circulars) kwa hali maalum.",
            "Sheria nyingi za kisasa za droni hupanga kazi kwa kiwango cha hatari. Kurusha kwa hatari ndogo (droni ndogo, inayoonekana kwa macho, chini, mbali na watu na viwanja vya ndege) kuna masharti machache zaidi. Kurusha kwa hatari kubwa (droni nzito, isiyoonekana kwa macho, juu ya watu, karibu na viwanja vya ndege, kunyunyizia au kudondosha vitu) kunahitaji zaidi: idhini, waendeshaji wenye vyeti, marubani wenye leseni, na wakati mwingine ndege yenye cheti.",
            "Ili kupata sheria za nchi yako, nenda kwenye tovuti ya mamlaka ya usafiri wa anga na utafute sehemu inayoitwa drones, UAS, RPAS au unmanned aircraft (ndege zisizo na rubani). Pakua kanuni, viwango na orodha ya ada, na uandike tarehe. Mifano ya mamlaka: KCAA (Kenya), NCAA (Nigeria), na mamlaka za usafiri wa anga za Ghana, Rwanda, Uganda, Tanzania na Afrika Kusini."
          ],
          steps: ["Fungua tovuti ya mamlaka ya usafiri wa anga ya nchi yako.", "Tafuta sehemu ya drones / UAS / RPAS.", "Pakua kanuni, viwango vya utekelezaji na orodha ya ada.", "Andika tarehe na toleo la kila moja.", "Orodhesha jinsi sheria zinavyopanga kazi kwa hatari."],
          words: [["ICAO", "Shirika la Kimataifa la Usafiri wa Anga, wakala wa Umoja wa Mataifa unaoweka viwango vya kimataifa vya usafiri wa anga."], ["Kanuni (regulations)", "sheria zinazolazimisha zilizotungwa chini ya sheria ya bunge."], ["Viwango vya utekelezaji", "sheria za kina za kiufundi zinazoeleza jinsi ya kutimiza kanuni."], ["Kundi la hatari", "kundi la kazi zenye hatari zinazofanana na masharti yanayofanana."]],
          slides: [
            { title: "Ngazi za sheria ya droni", bullets: ["Sheria ya usafiri wa anga", "Kanuni za droni chini ya sheria hiyo", "Viwango vya utekelezaji na orodha ya ada", "Matangazo na nyaraka maalum (circulars)"] },
            { title: "Sheria hufuata hatari", bullets: ["Hatari ndogo: ndogo, inaonekana, chini, mbali na watu", "Hatari kubwa: nzito, haionekani kwa macho, juu ya watu", "Kunyunyizia au kudondosha vitu: vibali zaidi"] },
            { title: "Pata sheria zako", bullets: ["Tovuti ya mamlaka: drones, UAS au RPAS", "Pakua kanuni, viwango, ada", "Andika tarehe na toleo"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Kwa nchi yako, orodhesha mamlaka ya usafiri wa anga, jina na mwaka wa kanuni za droni, kama kuna viwango vya utekelezaji na orodha ya ada, na tarehe uliyokagua. Hifadhi nyaraka hizo katika folda moja.",
          youCanNow: "kutafuta ngazi za sheria ya droni katika nchi yako na kuona jinsi zinavyopanga kazi kwa hatari.",
          quickCheck: [
            { objective: "O1", q: "Orodha ya ada katika sheria ya droni ni nini?", options: ["Mpango wa safari", "Orodha ya marubani", "Orodha ya vibali vilivyopo na gharama ya kila kimoja", "Utabiri wa hali ya hewa"], answer: 2, why: "Orodha ya ada inataja vibali na ada zake, kwa hiyo inaonyesha vibali vilivyopo." },
            { objective: "O1", q: "Unataka sheria za droni za nchi yako. Unaangalia wapi kwanza?", options: ["Tovuti ya mamlaka ya usafiri wa anga, katika sehemu ya drones, UAS au RPAS", "Tangazo la muuzaji wa droni", "Kundi la mitandao ya kijamii", "Video kutoka nchi nyingine"], answer: 0, why: "Mamlaka ya usafiri wa anga ya kila nchi huchapisha kanuni, viwango na ada zake za droni." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kenya: KCAA na Kanuni za UAS 2020",
          minutes: 6,
          goal: "Orodhesha vibali vya Kenya ambavyo mwendeshaji wa kibiashara wa droni za kilimo huenda anahitaji.",
          text: [
            "Nchini Kenya, droni zinaongozwa na Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, zilizotungwa chini ya Civil Aviation Act, 2013 (Sheria ya Usafiri wa Anga), na kusimamiwa na KCAA. Ukurasa wa droni wa KCAA pia unachapisha Mwongozo wa Viwango vya Utekelezaji (Manual of Implementing Standards) na orodha ya ada, yaani Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "Orodha ya ada inaonyesha vibali vikuu vilivyopo: kibali cha kuingiza droni nchini na usajili wa droni; vyeti vya kustahili kuruka (airworthiness); Cheti cha Mwendeshaji wa Droni (ROC) kwa waendeshaji; idhini za uendeshaji kwa Kundi A na kwa Makundi B na C; leseni za watu, ikiwemo leseni ya mwanafunzi rubani wa droni, leseni ya rubani wa droni (RPL), na sifa za ziada (ratings) kama kurusha nje ya uwezo wa kuona kwa macho; na vibali kwa taasisi za mafunzo na kwa wauzaji wa droni. KCAA inaorodhesha kwenye tovuti yake wenye ROC walioidhinishwa na taasisi za mafunzo, na maombi hupitia mfumo wake wa mtandaoni wa droni.",
            "Tovuti ya KCAA pia inaorodhesha Kanuni mpya za Usafiri wa Anga za Kenya zilizochapishwa mwaka 2026. Kagua kama yoyote kati yake inabadilisha sheria za droni kabla ya kutegemea matoleo ya 2020, na kagua ada za sasa siku unayoomba."
          ],
          words: [["KCAA", "Mamlaka ya Usafiri wa Anga ya Kenya, inayosimamia droni nchini Kenya."], ["ROC", "Cheti cha Mwendeshaji wa Droni (Remote Air Operator Certificate): idhini ya KCAA kwa shirika kuendesha kazi za droni."], ["SRPL / RPL", "leseni ya mwanafunzi rubani wa droni / leseni ya rubani wa droni."], ["Cheti cha kustahili kuruka (airworthiness)", "uthibitisho rasmi kwamba ndege iko katika hali nzuri na salama kuruka."]],
          slides: [
            { title: "Sheria ya droni ya Kenya", bullets: ["Civil Aviation (UAS) Regulations, 2020", "Zimetungwa chini ya Civil Aviation Act, 2013", "Zinasimamiwa na KCAA"] },
            { title: "Vibali katika orodha ya ada", bullets: ["Kibali cha kuingiza nchini na usajili", "ROC kwa waendeshaji", "Idhini za uendeshaji: Kundi A; B na C", "SRPL, RPL, BVLOS na sifa nyingine"] },
            { title: "Mahali pa kuomba na kukagua", bullets: ["Mfumo wa mtandaoni wa KCAA wa droni", "Orodha za wenye ROC na taasisi za mafunzo", "Kagua kanuni za 2026 na ada za sasa"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Fungua ukurasa wa droni wa KCAA na orodha ya ada. Tengeneza jedwali la kila kibali ambacho biashara inayopiga ramani ya mashamba ya chai kwa malipo ingehitaji (droni, watu, shirika, kazi), na safu ya mahali pa kuomba. Kwenye ada andika \"kagua siku hiyo\".",
          youCanNow: "kuorodhesha usajili, leseni, vyeti na idhini za Kenya ambazo mwendeshaji wa kibiashara wa droni za kilimo huenda anahitaji, na mahali pa kuomba.",
          quickCheck: [
            { objective: "O2", q: "RPL ni nini nchini Kenya?", options: ["Namba ya usajili wa droni", "Risiti ya ada", "Chuo cha mafunzo", "Leseni ya rubani wa droni kwa mtu anayerusha"], answer: 3, why: "Leseni ya rubani wa droni (RPL) ni leseni ya mtu anayerusha." },
            { objective: "O2", q: "Unapanga kuomba KCAA mwezi ujao ukitumia sheria za 2020. Unakagua nini kwanza?", options: ["Hakuna; sheria za 2020 hazibadiliki kamwe", "Kama kanuni mpya zilizochapishwa na KCAA zinabadilisha sheria za droni, na ada za sasa", "Rangi ya droni tu", "Leseni ya zamani ya jirani"], answer: 1, why: "KCAA inaorodhesha kanuni mpya zilizochapishwa, na ada lazima zikaguliwe siku unayoomba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nigeria: NCAA na Nig.CARs Sehemu ya 21",
          minutes: 6,
          goal: "Weka droni na kazi katika madaraja yake chini ya Sehemu ya 21 ya Nigeria na uorodheshe inachohitaji.",
          text: [
            "Nchini Nigeria, droni ziko chini ya Sehemu ya 21 (Remotely Piloted Aircraft Systems) ya Kanuni za Usafiri wa Anga za Nigeria 2023, hati Nig.CARs/2023/021, iliyoanza kutumika 17 Mei 2023, na kusimamiwa na NCAA. Inahusu utoaji wa vyeti, usajili, uendeshaji na ufuatiliaji wa RPAS (droni).",
            "Sehemu ya 21 inapanga ndege kwa uzito: Nano (chini ya 250 g), Micro (250 g hadi chini ya 2 kg), Small (2 kg hadi chini ya 25 kg), Medium (25 kg hadi 150 kg) na Large (zaidi ya 150 kg), kila moja na masharti yake na idhini ya awali kutoka Mamlaka. Pia inatumia makundi matatu ya hatari ya uendeshaji: Open (hatari ndogo zaidi, lazima isajiliwe), Specific (hatari kubwa zaidi, inahitaji idhini) na Certified (ndege, mwendeshaji na rubani wana vyeti, inashughulikiwa zaidi kama ndege zenye rubani ndani). Inatoa leseni za marubani wa droni na vyeti vya waendeshaji wa RPAS.",
            "Sehemu ya 21 pia inaweka mipaka ya uendeshaji, kwa mfano kurusha kwa urefu wa 120 m (400 ft) au chini juu ya ardhi mara nyingi, kukaa 30 m kwa mlalo mbali na watu wasiohusika na kazi, kutorusha juu ya maeneo yenye watu wengi, na kukaa mbali na viwanja vya ndege (kama ndani ya 4 km kutoka eneo la mwendo la uwanja wa ndege unaodhibitiwa, au 10 km kwa safari binafsi na za burudani) isipokuwa kwa idhini. Soma maandishi kamili kwa masharti yanayohusu kazi yako."
          ],
          words: [["NCAA", "Mamlaka ya Usafiri wa Anga ya Nigeria, inayosimamia droni nchini Nigeria."], ["Nig.CARs", "Kanuni za Usafiri wa Anga za Nigeria."], ["Open / Specific / Certified", "makundi matatu ya hatari ya uendeshaji ya Sehemu ya 21, kutoka hatari ndogo hadi kubwa zaidi."], ["Eneo la mwendo (movement area)", "sehemu ya uwanja wa ndege inayotumiwa na ndege kuruka, kutua na kutembea ardhini."]],
          slides: [
            { title: "Sheria ya droni ya Nigeria", bullets: ["Nig.CARs 2023 Sehemu ya 21: RPAS", "Ilianza kutumika 17 Mei 2023", "Inasimamiwa na NCAA"] },
            { title: "Madaraja kwa uzito", bullets: ["Nano < 250 g; Micro 250 g hadi < 2 kg", "Small 2 hadi < 25 kg; Medium 25-150 kg", "Large > 150 kg"] },
            { title: "Makundi ya hatari", bullets: ["Open: hatari ndogo zaidi, imesajiliwa", "Specific: inahitaji idhini", "Certified: ndege, mwendeshaji, rubani wana vyeti"] },
            { title: "Mifano ya mipaka", bullets: ["120 m (400 ft) juu ya ardhi mara nyingi", "30 m kutoka watu wasiohusika", "Umbali kutoka viwanja vya ndege isipokuwa kwa idhini"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Biashara ya kilimo nchini Nigeria inataka kupiga ramani ya mashamba ya muhogo katika Jimbo la Ogun kwa droni ya rota nyingi ya 1.2 kg na droni ya rota nyingi ya 15 kg kwa kunyunyizia. Ukitumia Sehemu ya 21, andika daraja la uzito la kila droni, kundi la hatari linalowezekana la kila kazi, na maswali matatu ambayo ungeuliza NCAA.",
          youCanNow: "kuweka droni na kazi katika madaraja yake chini ya Sehemu ya 21 ya Nigeria na kuorodhesha inachohitaji.",
          quickCheck: [
            { objective: "O3", q: "Chini ya Sehemu ya 21, kundi gani linahitaji ndege, mwendeshaji na rubani wawe na vyeti?", options: ["Certified", "Open", "Nano", "Micro"], answer: 0, why: "Kundi la Certified linashughulikiwa zaidi kama ndege zenye rubani ndani, kwa ndege, mwendeshaji na rubani wenye vyeti." },
            { objective: "O3", q: "Mkulima nchini Nigeria anakuomba urushe droni 10 m kutoka watu sokoni kijijini ambao hawahusiki na kazi. Unafanya nini?", options: ["Kurusha chini zaidi ili kuwa salama", "Kurusha haraka na kuondoka", "Kukaa angalau 30 m mbali na watu wasiohusika na kuepuka maeneo yenye watu wengi isipokuwa kwa idhini", "Kuwaomba watu waangalie upande mwingine"], answer: 2, why: "Sehemu ya 21 inaweka kazi nyingi 30 m mbali na watu wasiohusika na mbali na maeneo yenye watu wengi." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Sheria ya droni Afrika",
        questions: [
          { objective: "O1", q: "Kanuni za taifa za droni zinapata nguvu ya kisheria kutoka wapi?", options: ["Kutoka mwongozo wa mtengenezaji wa droni", "Kutoka sheria ya bunge, kama sheria ya usafiri wa anga", "Kutoka mitandao ya kijamii", "Kutoka kwa mkulima"], answer: 1, why: "Kanuni hutungwa chini ya sheria iliyopitishwa na bunge." },
          { objective: "O1", q: "Kazi ipi kwa kawaida ina hatari kubwa zaidi?", options: ["Droni ndogo inayoonekana juu ya shamba tupu", "Kuelea angani kwa urefu wa mita 5", "Droni nzito ikinyunyizia nje ya uwezo wa kuona kwa macho", "Kurusha kwenye kifaa cha kuiga (simulator)"], answer: 2, why: "Uzito, BVLOS na kunyunyizia vyote vinaongeza hatari na masharti." },
          { objective: "O2", q: "Nchini Kenya, kampuni inayopiga ramani ya mashamba makubwa kwa malipo inahitaji kibali gani cha mwendeshaji?", options: ["Cheti cha Mwendeshaji wa Droni (ROC) kutoka KCAA", "Kadi ya biashara", "Kibali cha kaunti tu", "Hakuna"], answer: 0, why: "KCAA hutoa ROC kwa waendeshaji wa droni." },
          { objective: "O3", q: "Chini ya Sehemu ya 21 ya Nigeria, droni ya 1.2 kg iko katika daraja gani la uzito?", options: ["Nano", "Small", "Large", "Micro"], answer: 3, why: "Micro ni 250 g hadi chini ya 2 kg." },
          { objective: "O3", q: "Katika Sehemu ya 21, kundi la Specific linamaanisha:", options: ["Hakuna sheria zinazohusika", "Hatari kubwa zaidi; idhini inahitajika ili kuendesha", "Kwa vifaa vya kuchezea tu", "Kwa ndege zenye rubani ndani tu"], answer: 1, why: "Kazi za Specific zina hatari zaidi na zinahitaji idhini." }
        ]
      }
    },
    {
      name: "Sura 2: Leseni, vyeti na uzingatiaji wa sheria",
      lessons: [
        {
          objectives: ["O4"],
          title: "Leseni za marubani na vyeti vya waendeshaji",
          minutes: 5,
          goal: "Panga vibali vya watu na vya shirika kwa biashara ya huduma za droni.",
          text: [
            "Aina mbili za vibali ni muhimu kwa biashara. Mtu anayerusha anahitaji leseni ya rubani na sifa za ziada (ratings) zozote ambazo sheria zinataka; nchini Kenya, leseni ya rubani wa droni (RPL), akifunzwa katika taasisi ya mafunzo iliyoidhinishwa na KCAA; nchini Nigeria, leseni ya rubani wa droni chini ya Sehemu ya 21. Shirika linalouza huduma za droni kwa kawaida linahitaji cheti cha mwendeshaji: Cheti cha Mwendeshaji wa Droni (ROC) cha KCAA au Cheti cha Mwendeshaji wa RPAS cha NCAA.",
            "Kupata cheti cha mwendeshaji kwa kawaida kunahitaji ushahidi kwamba biashara inaweza kufanya kazi kwa usalama: mwongozo wa uendeshaji (jinsi unavyopanga, kurusha, kutunza droni na kutoa ripoti), watu wanaowajibika waliotajwa kwa majina, marubani waliofunzwa na wenye leseni, droni zilizosajiliwa, mfumo wa matengenezo, kumbukumbu, na bima. Sehemu ya 21, kwa mfano, inataja vyeti vya bima ya dhima kwa watu wengine kati ya nyaraka ambazo kazi lazima ibebe.",
            "Panga muda na pesa kwa hili. Iombe mamlaka orodha yake ya sasa ya mahitaji na ada, na uziulize taasisi za mafunzo zilizoidhinishwa kama zinasaidia kuandika miongozo ya uendeshaji."
          ],
          steps: ["Orodhesha kila rubani na leseni na sifa ambazo kila mmoja anahitaji.", "Kagua cheti cha mwendeshaji ambacho biashara yako inahitaji.", "Pata orodha ya sasa ya mahitaji ya maombi kutoka kwa mamlaka.", "Andika rasimu ya mwongozo wa uendeshaji: kupanga, kurusha, matengenezo, dharura, kutoa ripoti.", "Panga bima na mifumo ya kumbukumbu."],
          words: [["Mwongozo wa uendeshaji", "sheria za maandishi za biashara kuhusu jinsi inavyopanga, kurusha, kutunza droni na kushughulikia dharura."], ["Bima ya dhima kwa watu wengine", "bima inayolipa ikiwa kazi yako inawadhuru watu wengine au mali yao."]],
          slides: [
            { title: "Aina mbili za vibali", bullets: ["Mtu: leseni ya rubani wa droni na sifa za ziada", "Biashara: cheti cha mwendeshaji"] },
            { title: "Cheti cha mwendeshaji kinaomba", bullets: ["Mwongozo wa uendeshaji", "Watu wanaowajibika, marubani wenye leseni", "Droni zilizosajiliwa, matengenezo, kumbukumbu", "Bima"] },
            { title: "Panga mapema", bullets: ["Pata orodha ya sasa ya mahitaji na ada", "Uliza vyuo vilivyoidhinishwa kuhusu miongozo", "Toa muda kabla ya kuchukua kazi ya kulipwa"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Andika yaliyomo (table of contents) ya mwongozo wa uendeshaji kwa biashara ndogo ya kupiga ramani ya mazao, yenye angalau sehemu nane (kwa mfano: shirika, majukumu, kupanga safari, ukaguzi kabla ya kurusha, dharura, matengenezo, kumbukumbu, kuripoti matukio).",
          youCanNow: "kupanga leseni za marubani na cheti cha mwendeshaji ambavyo biashara ya huduma za droni inahitaji, na kile ambacho mwongozo wa uendeshaji unahusu.",
          quickCheck: [
            { objective: "O4", q: "Cheti cha mwendeshaji ni nini?", options: ["Leseni ya mtu anayerusha", "Idhini kwa shirika linalouza huduma za droni", "Namba ya utambulisho ya droni", "Mkataba wa mteja"], answer: 1, why: "Cheti cha mwendeshaji, kama ROC ya KCAA au Cheti cha Mwendeshaji wa RPAS cha NCAA, ni kwa biashara." },
            { objective: "O4", q: "Unajiandaa kuomba cheti cha mwendeshaji. Ni nyaraka gani unaandika kwanza?", options: ["Chapisho la mitandao ya kijamii", "Orodha ya bei kwa wateja", "Nembo ya droni", "Mwongozo wa uendeshaji wa kupanga, kurusha, matengenezo na kutoa ripoti"], answer: 3, why: "Kupata cheti cha mwendeshaji kwa kawaida kunahitaji mwongozo wa uendeshaji unaoonyesha jinsi biashara inavyofanya kazi kwa usalama." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kazi maalum: kunyunyizia, BVLOS na viwanja vya ndege",
          minutes: 6,
          goal: "Tambua kazi zinazohitaji vibali vya ziada na anayevitoa.",
          text: [
            "Kunyunyizia viuatilifu au kudondosha chochote kutoka kwenye droni ni kazi maalum. Sehemu ya 21, kwa mfano, inakataza kudondosha au kumwaga vitu kwa njia inayoleta hatari na ina sheria tofauti za bidhaa hatari, na orodha ya ada ya Kenya inataja idhini tofauti kwa makundi ya hatari kubwa zaidi. Viuatilifu vingi vimewekwa katika kundi la bidhaa hatari. Tarajia kuhitaji idhini maalum ya usafiri wa anga, ndege nzito zaidi yenye cheti, na wafanyakazi waliofunzwa.",
            "Kunyunyizia pia kuko chini ya sheria ya viuatilifu. Nchini Kenya, bidhaa za kudhibiti wadudu zinasimamiwa na Bodi ya Bidhaa za Kudhibiti Wadudu (PCPB); nchini Nigeria, kemikali za kilimo zinasimamiwa na NAFDAC. Waulize kama bidhaa hiyo inaruhusiwa kunyunyiziwa kutoka angani na wanyunyiziaji wanahitaji mafunzo na vifaa gani vya kujikinga. FAO na WHO wamechapisha mwongozo wa kunyunyizia viuatilifu kutoka angani. Usinyunyizie kamwe, wala usitoe huduma ya kunyunyizia, bila vibali vyote viwili: vya usafiri wa anga na vya viuatilifu.",
            "Kazi nyingine maalum ni pamoja na kurusha nje ya uwezo wa kuona kwa macho (BVLOS), usiku, karibu na au ndani ya viwanja vya ndege, juu ya watu au barabara, na katika maeneo yaliyozuiliwa au yaliyolindwa kama mbuga za taifa. Kila moja inahitaji idhini maalum. Mashamba makubwa yaliyo karibu na viwanja vidogo vya ndege ni ya kawaida Afrika: kagua umbali na uulize kabla ya kupanga."
          ],
          words: [["Bidhaa hatari", "vitu vinavyoweza kudhuru afya, usalama au mali vinaposafirishwa, kama viuatilifu vingi."], ["Mdhibiti wa viuatilifu", "chombo cha serikali kinachosajili viuatilifu na kudhibiti jinsi vinavyotumiwa."], ["BVLOS", "kurusha nje ya uwezo wa kuona kwa macho (beyond visual line of sight)."]],
          slides: [
            { title: "Kunyunyizia na kudondosha", bullets: ["Kazi maalum zenye hatari kubwa zaidi", "Idhini ya usafiri wa anga, ndege yenye cheti, wafanyakazi waliofunzwa", "Viuatilifu vingi ni bidhaa hatari"] },
            { title: "Pia sheria ya viuatilifu", bullets: ["Kenya: Bodi ya Bidhaa za Kudhibiti Wadudu (PCPB)", "Nigeria: NAFDAC", "Mwongozo wa FAO/WHO wa kunyunyizia kutoka angani"] },
            { title: "Kazi nyingine maalum", bullets: ["Nje ya uwezo wa kuona, usiku", "Karibu na viwanja vya ndege, juu ya watu au barabara", "Mbuga na maeneo yaliyozuiliwa"] },
            { title: "Kanuni kuu", bullets: ["Hakuna kunyunyizia bila kibali cha usafiri wa anga NA cha viuatilifu", "Uliza kabla ya kupanga karibu na viwanja vidogo vya ndege"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Shamba kubwa la miwa lililo 3 km kutoka uwanja mdogo wa ndege linakuomba unyunyizie dawa ya kuua kuvu kwa droni. Orodhesha kila kibali na ukaguzi ambao ungehitaji (usafiri wa anga, viuatilifu, mwenye ardhi, uwanja wa ndege) na ungewasiliana na nani kwa kila kimoja.",
          youCanNow: "kutambua kazi maalum na kuorodhesha vibali vya usafiri wa anga na vya viuatilifu ambavyo zinahitaji.",
          quickCheck: [
            { objective: "O5", q: "Chombo gani kinasimamia kemikali za kilimo nchini Nigeria?", options: ["NCAA", "ODPC", "KCAA", "NAFDAC"], answer: 3, why: "Nchini Nigeria, kemikali za kilimo zinasimamiwa na NAFDAC; vibali vya usafiri wa anga vinatoka NCAA." },
            { objective: "O5", q: "Shamba kubwa linakuomba unyunyizie dawa ya kuua kuvu kwa droni wiki ijayo. Una leseni ya rubani tu. Unafanya nini?", options: ["Usitoe huduma ya kunyunyizia hadi uwe na vibali vya usafiri wa anga na vya viuatilifu", "Kunyunyizia asubuhi na mapema wakati hakuna mtu", "Kunyunyizia nusu ya shamba tu", "Kutumia droni nyepesi na kunyunyizia hata hivyo"], answer: 0, why: "Kunyunyizia kunahitaji idhini maalum ya usafiri wa anga na vibali vya viuatilifu; usinyunyizie kamwe bila vyote viwili." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujenga na kutunza faili la uzingatiaji wa sheria",
          minutes: 5,
          goal: "Jenga faili la uzingatiaji wa sheria na ratiba ya kulisasisha.",
          text: [
            "Faili la uzingatiaji wa sheria linashika kila kitu kinachothibitisha kwamba kazi yako ni halali na salama, mahali pamoja unapoweza kumwonyesha mkaguzi, mteja au kampuni ya bima. Tunza nakala ya karatasi na nakala ya kidijitali yenye hifadhi ya ziada (backup).",
            "Weka ndani: kanuni na viwango unavyofuata (na tarehe ulizokagua); vyeti vya usajili wa kila droni; vibali vya kuingiza nchini; leseni za marubani na sifa za ziada; cheti cha mwendeshaji; idhini za uendeshaji; mwongozo wa uendeshaji; vyeti vya bima; kumbukumbu za matengenezo; daftari za safari; ripoti za matukio; mikataba na wateja na ruhusa za wenye ardhi; na hatua zako za ulinzi wa data (Kenya: ODPC; Nigeria: NDPC) ikiwa unashika taarifa binafsi za wakulima.",
            "Sheria, ada na fomu hubadilika. Tunza kalenda ya kufanya upya kila leseni na cheti, na ukague tovuti ya mamlaka kwa ratiba maalum, kwa mfano kila mwezi, na kabla ya kila aina mpya ya kazi. Andika ulichokagua na lini."
          ],
          steps: ["Tengeneza faili: la karatasi na la kidijitali lenye backup.", "Weka kanuni, vyeti, leseni, idhini, mwongozo, bima.", "Weka kumbukumbu za matengenezo, daftari za safari, ripoti za matukio, mikataba.", "Weka usajili au hatua za ulinzi wa data ikiwa unashika taarifa binafsi.", "Weka kalenda ya kufanya upya na ukaguzi wa sheria kila mwezi."],
          words: [["Uzingatiaji wa sheria (compliance)", "kufuata sheria na kanuni zinazokuhusu."], ["Kufanya upya (renewal)", "kuomba tena kabla leseni au cheti hakijaisha muda wake."]],
          slides: [
            { title: "Mahali pamoja pa ushahidi", bullets: ["Kwa wakaguzi, wateja na kampuni za bima", "Nakala ya karatasi na ya kidijitali yenye backup"] },
            { title: "Kinachowekwa ndani", bullets: ["Kanuni, usajili, vibali", "Leseni, cheti cha mwendeshaji, idhini", "Mwongozo, bima, matengenezo, daftari za safari, matukio"] },
            { title: "Weka pia", bullets: ["Mikataba na wateja na wenye ardhi", "Hatua za ulinzi wa data (ODPC, NDPC)"] },
            { title: "Lisasishe kila wakati", bullets: ["Kalenda ya kufanya upya", "Kagua sheria kila mwezi na kabla ya aina mpya za kazi", "Andika ulichokagua na lini"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Kazi ya mwisho: jenga faili la uzingatiaji wa sheria kwa biashara ya huduma za droni katika nchi yako: mamlaka na kanuni pamoja na tarehe, daraja na kundi la hatari, kila kibali na hali yake, nyaraka zinazohitajika, vibali vya ziada vya kunyunyizia ukipanga, hatua za ulinzi wa data, na kalenda ya kufanya upya na kukagua sheria.",
          youCanNow: "kujenga na kutunza faili la uzingatiaji wa sheria linaloonyesha kwamba kazi yako ya droni ni halali na salama.",
          quickCheck: [
            { objective: "O6", q: "Ni nini kinachowekwa katika faili la uzingatiaji wa sheria?", options: ["Risiti ya droni tu", "Picha za safari zilizopita tu", "Leseni, vyeti, idhini, mwongozo wa uendeshaji, bima na kumbukumbu", "Malipo ya wateja tu"], answer: 2, why: "Faili la uzingatiaji linashika kila kitu kinachothibitisha kwamba kazi yako ni halali na salama." },
            { objective: "O6", q: "Leseni yako ya rubani wa droni inaisha baada ya miezi mitatu. Ni nini kitakusaidia usisahau?", options: ["Kusubiri KCAA ikupigie simu", "Kalenda ya kufanya upya yenye tarehe za kila leseni na cheti", "Kukagua tu mteja anapouliza", "Kuweka leseni ndani ya mfuko wa droni"], answer: 1, why: "Kalenda ya kufanya upya na ukaguzi wa mara kwa mara huweka kila leseni na cheti hai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Leseni, vyeti na uzingatiaji wa sheria",
        questions: [
          { objective: "O4", q: "Kwa kawaida nani anahitaji cheti cha mwendeshaji?", options: ["Shirika linalouza huduma za droni", "Kila mkulima ambaye shamba lake linapigwa ramani", "Duka la droni", "Hakuna mtu"], answer: 0, why: "Vyeti vya waendeshaji vinaidhinisha biashara inayoendesha kazi." },
          { objective: "O4", q: "Mwongozo wa uendeshaji ni nini?", options: ["Mwongozo wa matumizi wa droni", "Sheria za maandishi za biashara kuhusu kupanga, kurusha, matengenezo na dharura", "Kijitabu cha matangazo", "Risiti ya ada"], answer: 1, why: "Mamlaka huwaomba waendeshaji waonyeshe jinsi wanavyofanya kazi kwa usalama." },
          { objective: "O5", q: "Nchini Kenya, chombo gani kinasimamia bidhaa za kudhibiti wadudu?", options: ["KCAA", "ODPC", "Bodi ya Bidhaa za Kudhibiti Wadudu (PCPB)", "NDPC"], answer: 2, why: "PCPB inasimamia bidhaa za kudhibiti wadudu; kunyunyizia pia kunahitaji kibali cha usafiri wa anga." },
          { objective: "O5", q: "Mteja anataka droni inyunyizie karibu na uwanja mdogo wa ndege. Hatua yako ya kwanza ni:", options: ["Kunyunyizia asubuhi na mapema", "Kunyunyizia nusu ya shamba tu", "Kupuuza uwanja wa ndege", "Kukagua vibali vya usafiri wa anga na vya viuatilifu na sheria za umbali kutoka uwanja wa ndege"], answer: 3, why: "Kunyunyizia na kuwa karibu na uwanja wa ndege vyote vinahitaji vibali maalum." },
          { objective: "O6", q: "Unapaswa kukagua mabadiliko ya sheria mara ngapi?", options: ["Kwa ratiba maalum, kama kila mwezi, na kabla ya aina mpya za kazi", "Kamwe", "Ukipigwa faini tu", "Kila miaka kumi"], answer: 0, why: "Sheria na ada hubadilika; ratiba inakuweka katika hali ya sasa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Droni za Kilimo Afrika: Sheria za Usafiri wa Anga na Leseni",
    questions: [
      { objective: "O1", q: "ICAO ni:", options: ["Mdhibiti wa droni wa Kenya", "Shirika la Kimataifa la Usafiri wa Anga la Umoja wa Mataifa", "Chapa ya droni", "Kiuatilifu"], answer: 1, why: "ICAO inaweka viwango vya kimataifa ambavyo nchi hujenga juu yake." },
      { objective: "O1", q: "Nani huandika na kusimamia sheria ya droni katika kila nchi ya Afrika?", options: ["ICAO moja kwa moja", "Watengenezaji wa droni", "Mamlaka ya usafiri wa anga ya kila nchi", "Umoja wa Afrika tu"], answer: 2, why: "Kila nchi inadhibiti anga lake na sheria zake za droni." },
      { objective: "O1", q: "Viwango vya utekelezaji ni:", options: ["Sheria za kina za kiufundi zinazoeleza jinsi ya kutimiza kanuni", "Viwango vya matangazo", "Aina za mbegu za mazao", "Sera za bima"], answer: 0, why: "Vinashika maelezo ya kiufundi yaliyo nyuma ya kanuni." },
      { objective: "O2", q: "Kanuni kuu za droni za Kenya ni:", options: ["Nig.CARs Sehemu ya 21", "Sheria ya Ulinzi wa Data 2019", "Sheria ya Bidhaa za Kudhibiti Wadudu", "Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "KCAA inasimamia Kanuni za UAS, 2020." },
      { objective: "O2", q: "Orodha ya ada ya KCAA inataja idhini za uendeshaji kwa:", options: ["Kundi A, na Makundi B na C", "Vifaa vya kuchezea tu", "Ndege zenye rubani ndani tu", "Kuingiza nchini tu"], answer: 0, why: "Kenya inaidhinisha kazi kwa kundi la hatari." },
      { objective: "O2", q: "Nchini Kenya, maombi ya vibali vya droni hupitia:", options: ["Ofisi ya kaunti", "Mfumo wa mtandaoni wa KCAA wa droni", "Duka la droni", "Mitandao ya kijamii"], answer: 1, why: "KCAA inaendesha mfumo wa mtandaoni wa RPAS." },
      { objective: "O2", q: "Kabla ya kutegemea sheria za droni za Kenya za 2020, unapaswa pia kukagua:", options: ["Makala za zamani za magazeti", "Maoni ya rafiki", "Kanuni mpya zilizochapishwa na KCAA na ada za sasa", "Hakuna"], answer: 2, why: "Sheria na ada zinaweza kubadilika; KCAA inaorodhesha kanuni mpya." },
      { objective: "O3", q: "Sheria za droni za Nigeria ziko katika:", options: ["Kanuni za UAS za Kenya", "Mwongozo wa FAO", "Sheria ya Ulinzi wa Data", "Nig.CARs 2023 Sehemu ya 21"], answer: 3, why: "Sehemu ya 21 inahusu RPAS nchini Nigeria." },
      { objective: "O3", q: "Chini ya Sehemu ya 21, droni ya 15 kg iko katika daraja gani?", options: ["Small", "Nano", "Micro", "Large"], answer: 0, why: "Small ni 2 kg hadi chini ya 25 kg." },
      { objective: "O3", q: "Kundi la Open la Sehemu ya 21:", options: ["Halihitaji usajili", "Lina hatari ndogo zaidi lakini droni lazima isajiliwe", "Ni kwa droni nzito za kunyunyizia", "Linamaanisha kurusha popote"], answer: 1, why: "Kazi za Open zina hatari ndogo lakini bado zinasajiliwa." },
      { objective: "O3", q: "Sehemu ya 21 inaweka kikomo kwa kazi nyingi hadi:", options: ["1,000 m juu ya ardhi", "Hakuna kikomo", "120 m (400 ft) juu ya ardhi", "10 m juu ya ardhi"], answer: 2, why: "120 m (400 ft) juu ya ardhi (AGL) ni kikomo cha kawaida katika Sehemu ya 21." },
      { objective: "O3", q: "Sehemu ya 21 inaweka kazi nyingi za droni angalau umbali gani kwa mlalo kutoka watu wasiohusika?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "Sehemu ya 21 inatumia 30 m kutoka watu wasiohusiana na kazi." },
      { objective: "O4", q: "Leseni ya rubani wa droni ni kwa:", options: ["Mtu anayerusha", "Droni", "Shamba", "Biashara"], answer: 0, why: "Leseni ni kwa watu; vyeti ni kwa mashirika na ndege." },
      { objective: "O4", q: "Bima ya dhima kwa watu wengine hulipa wakati:", options: ["Droni yako inapoibiwa", "Kazi yako inapowadhuru watu wengine au mali yao", "Bei za mazao zinaposhuka", "Unapofaulu mtihani"], answer: 1, why: "Inalipia madhara kwa watu wengine." },
      { objective: "O5", q: "Nchini Nigeria, kemikali za kilimo zinasimamiwa na:", options: ["NCAA", "NDPC", "NAFDAC", "KCAA"], answer: 2, why: "NAFDAC inasimamia kemikali, ikiwemo kemikali za kilimo." },
      { objective: "O5", q: "Viuatilifu vingi vimewekwa katika kundi la:", options: ["Chakula", "Vifaa vya kuchezea", "Vipuri", "Bidhaa hatari"], answer: 3, why: "Sheria za bidhaa hatari zinahusu kuvibeba kwa njia ya anga." },
      { objective: "O5", q: "Ipi ni kazi maalum inayohitaji idhini maalum?", options: ["Kurusha nje ya uwezo wa kuona kwa macho", "Kurusha kwenye kifaa cha kuiga (simulator)", "Kusoma kanuni", "Kuchaji betri"], answer: 0, why: "BVLOS ina hatari kubwa zaidi na inahitaji idhini." },
      { objective: "O6", q: "Faili la uzingatiaji wa sheria ni:", options: ["Orodha ya wateja tu", "Mahali pamoja panaposhika ushahidi wote kwamba kazi yako ni halali na salama", "Kipuri cha droni", "Lebo ya kiuatilifu"], answer: 1, why: "Linashika vyeti, leseni, miongozo, kumbukumbu na zaidi." },
      { objective: "O6", q: "Ikiwa biashara yako inashika namba za simu za wakulima nchini Kenya, sheria gani pia inahusika?", options: ["Hakuna", "Nig.CARs Sehemu ya 21", "Sheria ya Ulinzi wa Data 2019, inayosimamiwa na ODPC", "Mwongozo wa droni tu"], answer: 2, why: "Taarifa binafsi zinalindwa na sheria ya ulinzi wa data ya Kenya." },
      { objective: "O1", q: "Kozi hii ni:", options: ["Ushauri wa kisheria kwa kesi yako", "Leseni ya rubani wa droni", "Ruhusa ya kurusha", "Mafunzo; thibitisha kila kitu na mamlaka rasmi"], answer: 3, why: "Sheria hubadilika; vyanzo rasmi na wataalamu ndio huamua." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      7,
      8,
      12,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo ya faili na uikague tena.",
    criteria: [
      {
        name: "Mamlaka na kanuni",
        objective: "O1",
        notYet: "Mamlaka au kanuni hazipo, au hakuna viungo wala tarehe.",
        meets: "Mamlaka, kanuni, viwango na orodha ya ada zimeorodheshwa pamoja na viungo na tarehe ya kukagua.",
        exceeds: "Pia inataja sheria zozote mpya zilizochapishwa na jinsi zinavyobadilisha kazi."
      },
      {
        name: "Daraja na hatari",
        objective: "O3",
        notYet: "Daraja la droni au kundi la hatari la kazi halipo au si sahihi.",
        meets: "Daraja la droni na kundi la hatari la kazi ni sahihi kwa sheria za nchi.",
        exceeds: "Inaorodhesha mipaka ya uendeshaji inayohusika, kama urefu na umbali kutoka watu."
      },
      {
        name: "Vibali vinavyohitajika",
        objective: "O2",
        notYet: "Vibali havipo, au anayevitoa hajatajwa.",
        meets: "Kila usajili, kibali, leseni, cheti na idhini kimeorodheshwa pamoja na anayekitoa na hali yake.",
        exceeds: "Inajumuisha ada za sasa na muda wa kupata kila kimoja."
      },
      {
        name: "Nyaraka za watu na za biashara",
        objective: "O4",
        notYet: "Mwongozo wa uendeshaji, bima au kumbukumbu havipo.",
        meets: "Leseni za marubani, cheti cha mwendeshaji, mwongozo wa uendeshaji, bima, kumbukumbu za matengenezo na za safari zimeorodheshwa.",
        exceeds: "Inataja watu wanaowajibika na mahali kila nyaraka inapotunzwa."
      },
      {
        name: "Kunyunyizia na kazi maalum",
        objective: "O5",
        notYet: "Kunyunyizia au kazi nyingine maalum zimepangwa bila vibali vya ziada.",
        meets: "Vibali vya ziada vya usafiri wa anga na vya viuatilifu kwa kazi yoyote maalum vimeorodheshwa pamoja na anayevitoa.",
        exceeds: "Inaeleza jinsi umbali kutoka viwanja vya ndege na sheria za bidhaa hatari zinavyoathiri kazi."
      },
      {
        name: "Kulisasisha kila wakati",
        objective: "O6",
        notYet: "Hakuna tarehe za kufanya upya wala ratiba ya kukagua sheria; hakuna hatua za ulinzi wa data.",
        meets: "Kalenda ya kufanya upya, ratiba maalum ya kukagua sheria, na hatua za ulinzi wa data za wakulima.",
        exceeds: "Ina daftari linaloonyesha ukaguzi uliopita na kilichobadilika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kupata Anafikia au Anazidi katika kila mstari wa rubriki ya faili la uzingatiaji wa sheria",
      "Wanafunzi wanaoomba usajili wa droni, leseni ya rubani au cheti cha mwendeshaji ndani ya siku 90 (utafiti wa kufuatilia)",
      "Biashara za droni zinazoendeshwa na wahitimu zenye vibali vya kila aina ya kazi wanayotoa",
      "Wanafunzi wanaochukua kozi inayofuata ya droni au kuanza mafunzo ya rubani wa droni yaliyoidhinishwa"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti ya kufungua tovuti ya mamlaka ya usafiri wa anga",
      "Nakala zilizopakuliwa za kanuni, viwango na orodha ya ada za droni za nchi",
      "Daftari au folda ya faili la uzingatiaji wa sheria, pamoja na nakala ya kidijitali yenye backup",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi, pamoja na muda wa kujenga faili la uzingatiaji wa sheria"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fungueni ukurasa wa droni wa mamlaka moja kwa moja ili wanafunzi waone sheria zinapotunzwa.",
      "Kagua tovuti rasmi kwa mabadiliko ya sheria na ada kabla ya kila mzunguko wa kozi; usifundishe kutoka maelezo ya zamani.",
      "Sema wazi kwamba haya ni mafunzo, si ushauri wa kisheria, na upeleke maswali mahususi kwa mamlaka au kwa wakili.",
      "Usirushe droni wala usinyunyizie kama sehemu ya kozi; usihimize kamwe kunyunyizia bila vibali vyote viwili, vya usafiri wa anga na vya viuatilifu.",
      "Pima faili la uzingatiaji wa sheria kwa rubriki na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
