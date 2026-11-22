"use strict";

// Koach Learn course (Swahili translation of shared/hvac-basics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "hvac-basics-sw",
  lang: "sw",
  translationOf: "hvac-basics",
  category: "Workforce Development",
  name: "Misingi ya Ufundi wa HVAC",
  skills: "Kutaja sehemu za mfumo wa kupasha joto na kupoza, Kufuatilia mzunguko wa kupoza, Kusoma vibao vya taarifa na kufanya hesabu za HVAC, Kutambua hatari za kazi ya HVAC, Kuchagua cheti sahihi cha EPA Section 608, Kupanga njia yako ya kuingia katika HVAC",
  outcome: "kueleza jinsi mfumo wa kupasha joto na kupoza nyumba unavyofanya kazi, kusoma namba zake, kutaja hatari za kazi hii na jinsi ya kubaki salama, kuchagua cheti cha EPA Section 608 unachohitaji, na kufuata mpango wenye tarehe wa kupata mafunzo, cheti na kazi kama msaidizi au mwanafunzi-kazi (apprentice) wa HVAC.",
  about: [
    "Mafundi wa HVAC wanaweka nyumba, shule, maduka na hospitali kuwa na joto wakati wa baridi na ubaridi wakati wa joto. Ni kazi ya mikono, inahitajika katika kila mji, na watu wengi wanaanza kama msaidizi au mwanafunzi-kazi na kujifunza kazini. Kozi hii ni ya yeyote anayefikiria njia hii: wanaotafuta kazi, wanajeshi wastaafu, vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kusoma.",
    "Utajifunza sehemu kuu za mfumo na jinsi kiyoyozi kinavyohamisha joto, kusoma namba kwenye vichujio na lebo za vifaa, na kufanya hesabu rahisi ambazo mafundi wanatumia kila siku. Kisha utajifunza hatari za kazi hii, cheti cha serikali kuu ya Marekani EPA Section 608 ambacho mafundi wanaoshughulikia refrigerant (kipozaji) lazima wawe nacho, na njia za kuingia katika kazi hii.",
    "Kozi hii inakuandaa. Haikupi leseni wala cheti. Cheti cha EPA Section 608 kinatoka tu kwa kufaulu mtihani wa shirika la kutoa vyeti lililoidhinishwa na EPA, na baadhi ya majimbo na miji pia inatoa leseni za kazi ya HVAC. Kazi ya mikono na refrigerant na umeme inajifunzwa tu katika programu ya mafunzo yenye usimamizi, ukiwa na vifaa sahihi vya kujikinga.",
    "Kila somo linachukua kama dakika tano, likiwa na kazi fupi ya \"Jaribu sasa\" na maswali mawili ya haraka. Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni. Kazi yako ya mwisho ni mpango wako mwenyewe wa kuanza HVAC wenye tarehe halisi."
  ],
  finalTask: "Tengeneza mpango wako wa kuanza HVAC: (1) mchoro wa mkono wa mzunguko wa kupoza wenye sehemu nne kuu zilizoandikwa kwa mpangilio sahihi na sentensi moja kuhusu kazi ya kila moja; (2) orodha ya hatari za kazi moja ya HVAC pamoja na kinga ya kila hatari; na (3) mpango wenye tarehe unaotaja aina ya cheti cha EPA Section 608 utakayofanya, shirika moja la kutoa vyeti lililoidhinishwa na EPA, programu mbili za mafunzo au uanagenzi (apprenticeship) karibu nawe, kile jimbo au mji wako unachotaka kwa leseni ya HVAC (kutoka ukurasa rasmi), na tarehe ya kila hatua.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaotafuta kazi ya ufundi isiyohitaji shahada ya miaka minne: wanaotafuta kazi, wanajeshi wastaafu, vijana, watu wanaorudi nyumbani kutoka gerezani, wahamiaji na watu wazima wanaorudi kusoma. Baadhi wamewahi kufanya kazi ya mikono (matengenezo, jeshi, ujenzi, ufundi wa magari); wengi hawajawahi kufanya kazi kwenye vifaa vya kupasha joto au kupoza.",
    startingPoint: "Wanaweza kusoma maelekezo mafupi na kufanya hesabu za namba kamili. Wengi wanajua kwamba thermostat inadhibiti joto na kiyoyozi, lakini hawawezi kutaja sehemu za mfumo, kueleza jinsi kupoza kunavyofanya kazi, wala kusema kazi ya HVAC inahitaji cheti gani.",
    gap: "Waajiri wanaoajiri wasaidizi na wanafunzi-kazi wa HVAC wanataka watu wanaojua sehemu na maneno ya msingi, wanaochukulia usalama kwa uzito na walio njiani kupata cheti cha EPA Section 608. Wanafunzi wanahitaji msingi huo, pamoja na mpango wazi na wa kweli wenye tarehe, ili waombe kazi kwa kujiamini na waepuke kulipia mafunzo yasiyoleta kazi.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 6 hadi 8); kila neno la ufundi linaelezwa",
      "Hakuna kazi ya mikono na refrigerant, umeme wala brazing katika kozi hii: hiyo inahitaji mafunzo yenye usimamizi na vifaa sahihi vya kujikinga",
      "Vifaa: simu au kompyuta ya maktaba kusoma kurasa rasmi; karatasi na kalamu kwa michoro na mipango",
      "Muda: masomo ya dakika 5 hadi 6 yanayoingia kati ya kazi na miadi",
      "Sheria zinatofautiana kwa jimbo na mji: wanafunzi wanakagua leseni kwenye ukurasa rasmi wa mahali wanapoishi"
    ],
    prerequisites: "Hakuna. Kozi \"Kuanza Kazi katika Ufundi Stadi\" ni hatua nzuri ya kwanza ya kuchagua ufundi; kozi hii inaingia ndani zaidi katika HVAC."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mchoro au picha ya mfumo wa nyumbani wa aina ya split", action: "kutaja sehemu kuu za mfumo wa kupasha joto na kupoza na kufuatilia mzunguko wa kupoza kwa mpangilio", standard: "ukiwa na sehemu nne kuu za mzunguko kwa mpangilio sahihi na kazi ya kila moja" },
    { id: "O2", condition: "Ukipewa maelezo ya kazi ya HVAC", action: "kuorodhesha hatari za kazi hiyo na kinga ya kila moja", standard: "ukitaja angalau hatari tano, kila moja ikilinganishwa na hatua salama au kifaa cha kujikinga" },
    { id: "O3", condition: "Ukipewa kichujio, kibao cha taarifa cha kifaa au vipimo viwili vya joto", action: "kusoma ukubwa na viwango na kufanya hesabu rahisi za HVAC", standard: "ukipata angalau 4 kati ya 5 sahihi katika mazoezi" },
    { id: "O4", condition: "Ukipewa orodha ya vifaa na hali za refrigerant", action: "kulinganisha kila kimoja na aina sahihi ya cheti cha EPA Section 608 na sheria ya refrigerant inayohusika", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O5", condition: "Ukitumia tovuti rasmi za jimbo lako", action: "kuandika mpango wenye tarehe wa kupata mafunzo, kufanya mtihani wa EPA Section 608 na kuomba kazi ya msaidizi au mwanafunzi-kazi wa HVAC", standard: "ukiwa na angalau hatua tano zenye tarehe na chanzo rasmi kwa kila sharti" }
  ],
  chapters: [
    {
      name: "Sura 1: Jinsi mifumo ya kupasha joto na kupoza inavyofanya kazi",
      lessons: [
        {
          title: "Fundi wa HVAC anafanya nini, na sehemu kuu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Taja sehemu kuu za mfumo wa kupasha joto na kupoza nyumba na useme kazi ya kila moja.",
          text: [
            "HVAC ni kifupi cha heating, ventilation and air conditioning: kupasha joto, kuingiza hewa na kupoza hewa (kiyoyozi). Utaona pia HVACR, inayoongeza refrigeration, yaani ubaridishaji (vyumba baridi, mashine za barafu). Mafundi wa HVAC wanafunga mifumo mipya, wanafanya matengenezo ya kawaida, wanatafuta kwa nini mfumo umeacha kufanya kazi, na wanautengeneza.",
            "Nyumba nyingi zina mfumo wa split: sehemu moja iko nje na sehemu moja iko ndani. Kifaa cha nje kina compressor na koili ya nje (condenser). Sehemu ya ndani ni furnace (jiko la kupasha joto) au air handler (kisukuma hewa) chenye feni ya blower na koili ya ndani (evaporator). Mabomba yanayoitwa line set yanabeba refrigerant kati yake.",
            "Thermostat iliyo ukutani ndiyo kidhibiti: inauambia mfumo lini upashe joto au upoze. Blower inasukuma hewa kupitia mifereji ya hewa (ducts). Matundu ya kutoa hewa (supply vents) yanapeleka hewa vyumbani, na matundu ya kurudisha hewa (return vents) yanavuta hewa ya chumba kurudi. Kichujio cha hewa kinasafisha hewa hiyo kabla haijafika kwenye vifaa.",
            "Heat pump inaonekana kama kiyoyozi lakini inaweza pia kufanya kazi kinyume ili kupasha nyumba joto. Furnace inatengeneza joto kwa kuchoma gesi au mafuta, au kwa sehemu za kupasha joto za umeme."
          ],
          words: [
            ["HVAC", "kupasha joto, kuingiza hewa na kupoza hewa. HVACR inaongeza ubaridishaji (refrigeration)."],
            ["Mfumo wa split", "mfumo wenye kifaa kimoja nje na kimoja ndani, vimeunganishwa na mabomba ya refrigerant."],
            ["Thermostat", "kidhibiti kilicho ukutani kinachouambia mfumo lini upashe joto au upoze."],
            ["Ducts (mifereji ya hewa)", "mirija ya chuma au inayopinda inayobeba hewa kwenda na kutoka vyumbani."],
            ["Heat pump", "mfumo unaopoza wakati wa joto na unaweza kufanya kazi kinyume kupasha joto wakati wa baridi."],
            ["Line set", "jozi ya mabomba ya shaba yanayobeba refrigerant kati ya kifaa cha nje na cha ndani."]
          ],
          slides: [
            { title: "Mafundi wa HVAC wanafanya nini", bullets: ["Wanafunga mifumo mipya", "Wanafanya matengenezo ya kawaida", "Wanatafuta tatizo na kulitengeneza"] },
            { title: "Nje: kifaa cha nje", bullets: ["Compressor", "Koili ya nje (condenser) na feni"] },
            { title: "Ndani: furnace au air handler", bullets: ["Feni ya blower inasogeza hewa", "Koili ya ndani (evaporator)", "Kichujio cha hewa kinasafisha hewa kwanza"] },
            { title: "Kidhibiti na njia za hewa", bullets: ["Thermostat: inauambia lini ufanye kazi", "Supply vents zinaingiza hewa; return vents zinairudisha", "Ducts zinabeba hewa"] }
          ],
          tryIt: "Angalia mfumo wa kupasha joto na kupoza nyumbani kwako, shuleni au dukani (kwa nje tu, usifungue paneli kamwe). Au tafuta picha ya \"split system air conditioner\". Kwenye karatasi, orodhesha kila sehemu unayoona: thermostat, matundu ya hewa, kichujio, kifaa cha nje, mabomba. Karibu na kila moja, andika mstari mmoja kuhusu kazi yake.",
          youCanNow: "kutaja sehemu kuu za mfumo wa kupasha joto na kupoza nyumba na kusema kazi ya kila sehemu.",
          quickCheck: [
            { objective: "O1", q: "Sehemu ipi inauambia mfumo lini upashe joto au upoze?", options: ["Ducts", "Kichujio cha hewa", "Thermostat", "Koili ya nje"], answer: 2, why: "Thermostat ndiyo kidhibiti; inautuma mfumo kuanza na kusimama." },
            { objective: "O1", q: "Katika mfumo wa split wa nyumbani, compressor kwa kawaida iko wapi?", options: ["Ndani ya kifaa cha nje", "Ndani ya thermostat", "Nyuma ya kichujio cha hewa", "Ndani ya return vent"], answer: 0, why: "Katika mfumo wa split, compressor iko ndani ya kifaa cha nje pamoja na koili ya nje." }
          ]
        },
        {
          title: "Jinsi kiyoyozi kinavyohamisha joto",
          objectives: ["O1"],
          minutes: 6,
          goal: "Fuatilia mzunguko wa kupoza kupitia sehemu zake nne kuu, kwa mpangilio.",
          text: [
            "Kiyoyozi hakitengenezi baridi. Kinahamisha joto kutoka ndani ya nyumba kwenda nje. Kimiminika maalum kinachoitwa refrigerant (kipozaji) kinabeba joto hilo katika mzunguko uliofungwa wa mabomba. Mzunguko huu unaitwa mzunguko wa kupoza (refrigeration cycle).",
            "1. Compressor inakandamiza mvuke wa refrigerant, kwa hiyo unakuwa wa moto na wenye shinikizo kubwa. 2. Ndani ya condenser (koili ya nje) feni inapuliza hewa ya nje juu ya koili ya moto; refrigerant inatoa joto lake na kugeuka kuwa kimiminika. 3. Metering device (mara nyingi expansion valve) inaacha kimiminika kipite kwenye tundu dogo, kwa hiyo shinikizo lake linashuka na kinakuwa baridi sana. 4. Ndani ya evaporator (koili ya ndani) hewa ya joto ya chumba inapulizwa juu ya koili baridi; refrigerant inanyonya joto na kuchemka kurudi kuwa mvuke. Kisha inarudi kwenye compressor na mzunguko unaanza tena.",
            "Heat pump inatumia sehemu hizo hizo nne. Wakati wa baridi, reversing valve inapeleka refrigerant upande mwingine, kwa hiyo joto linachukuliwa nje na kutolewa ndani.",
            "Kujua mzunguko ndiyo njia mafundi wanavyopata matatizo. Kwa mfano, koili ya nje ikiziba kwa uchafu, joto haliwezi kutoka na mfumo unapoza vibaya."
          ],
          steps: [
            "Compressor: inakandamiza mvuke ili uwe wa moto na wenye shinikizo kubwa.",
            "Condenser (koili ya nje): inatoa joto nje; refrigerant inakuwa kimiminika.",
            "Metering device: inashusha shinikizo, kwa hiyo kimiminika kinakuwa baridi sana.",
            "Evaporator (koili ya ndani): inanyonya joto la hewa ya chumba; refrigerant inakuwa mvuke na kurudi kwenye compressor."
          ],
          words: [
            ["Refrigerant (kipozaji)", "kimiminika ndani ya mfumo kinachobeba joto kutoka sehemu moja kwenda nyingine."],
            ["Mzunguko wa kupoza", "njia ambayo refrigerant inapita: compressor, condenser, metering device, evaporator."],
            ["Compressor", "pampu inayokandamiza mvuke wa refrigerant ili uwe wa moto na wenye shinikizo kubwa."],
            ["Condenser", "koili ambapo refrigerant inatoa joto na kugeuka kimiminika; iko nje katika kiyoyozi cha nyumbani."],
            ["Metering device", "sehemu (mara nyingi expansion valve) inayoshusha shinikizo la refrigerant ili iwe baridi."],
            ["Evaporator", "koili ambapo refrigerant inanyonya joto na kugeuka mvuke; iko ndani katika kiyoyozi cha nyumbani."],
            ["Reversing valve", "sehemu ndani ya heat pump inayobadilisha mwelekeo wa refrigerant kwa ajili ya kupasha joto."]
          ],
          slides: [
            { title: "Kiyoyozi kinahamisha joto; hakitengenezi baridi", bullets: ["Refrigerant inabeba joto katika mzunguko uliofungwa", "Joto linatoka ndani kwenda nje"] },
            { title: "Mzunguko, kwa mpangilio", bullets: ["1. Compressor: mvuke wa moto, shinikizo kubwa", "2. Condenser: inatoa joto, inakuwa kimiminika", "3. Metering device: shinikizo linashuka, inakuwa baridi", "4. Evaporator: inanyonya joto la chumba, inakuwa mvuke"] },
            { title: "Heat pumps", bullets: ["Sehemu nne zile zile", "Reversing valve inaiendesha kinyume kupasha joto"] },
            { title: "Kwa nini mafundi wanajifunza hili", bullets: ["Mzunguko unaeleza matatizo mengi", "Mfano: koili ya nje chafu = joto haliwezi kutoka"] }
          ],
          tryIt: "Bila kuangalia, chora duara kwenye karatasi na uandike sehemu nne za mzunguko kuuzunguka kwa mpangilio: compressor, condenser, metering device, evaporator. Chora mishale. Weka alama sehemu zipi ziko nje na zipi ziko ndani, na uandike \"moto\" au \"baridi\" karibu na kila moja. Kisha linganisha mchoro wako na somo. Uutunze: ni sehemu ya 1 ya kazi yako ya mwisho.",
          youCanNow: "kufuatilia mzunguko wa kupoza kwa mpangilio na kusema kazi ya kila moja ya sehemu nne kuu.",
          quickCheck: [
            { objective: "O1", q: "Sehemu ipi inatoa joto nje ya nyumba?", options: ["Evaporator", "Thermostat", "Kichujio cha hewa", "Condenser"], answer: 3, why: "Condenser ni koili ya nje, ambapo refrigerant inatoa joto lake na kugeuka kimiminika." },
            { objective: "O1", q: "Katika mzunguko, nini kinafuata mara baada ya metering device?", options: ["Compressor", "Evaporator", "Condenser", "Thermostat"], answer: 1, why: "Kimiminika baridi kutoka metering device kinaingia kwenye evaporator kunyonya joto la hewa ya chumba." }
          ]
        },
        {
          title: "Kusoma namba: vichujio, vibao vya taarifa na joto",
          objectives: ["O3"],
          minutes: 6,
          goal: "Soma ukubwa wa kichujio na kibao cha taarifa cha kifaa, na ufanye hesabu rahisi za HVAC.",
          text: [
            "Vichujio vina ukubwa wao umeandikwa pembeni, kama 16 x 25 x 1. Maana yake ni inchi 16 kwa inchi 25, na unene wa inchi 1. Mshale unaonyesha njia ambayo hewa inapita: unaelekea kwenye blower, mbali na return vent. Kichujio kilichowekwa kinyume au cha ukubwa usio sahihi kinaacha uchafu uingie kwenye vifaa.",
            "Kila kifaa kina kibao cha taarifa (nameplate: lebo ya chuma au stika) chenye namba ya modeli na namba ya serial, volti kinazotumia, viwango vya umeme kwa amps, na aina na kiasi cha refrigerant. Mafundi wanasoma nameplate kabla ya kuagiza vipuri au kukagua umeme unaoingia. Ukubwa wa kupoza mara nyingi unatolewa kwa BTU kwa saa au kwa tani. Tani moja ya kupoza ni BTU 12,000 kwa saa, kwa hiyo kifaa cha BTU 36,000 ni kifaa cha tani 3.",
            "Tofauti ya joto (temperature split) ni ukaguzi rahisi: pima hewa inayoingia kwenye return na hewa inayotoka kwenye supply vent, kisha toa. Hewa ya return ikiwa 75°F na hewa ya supply ikiwa 57°F, tofauti ni 18°F. Kiwango cha kawaida kinategemea mfumo na hali; mwalimu wako na karatasi za mtengenezaji zinakuambia nini cha kutarajia. Kwa sasa unafanya mazoezi ya kusoma na hesabu tu.",
            "Mazoezi tu: namba zote katika somo hili zimebuniwa kwa ajili ya kujifunza. Usifungue paneli ya kifaa chochote kutafuta nameplate; soma ile unayoweza kuona kwa nje, au angalia picha."
          ],
          steps: [
            "Kichujio: soma namba tatu (upana x urefu x unene) na utafute mshale wa mwelekeo wa hewa.",
            "Nameplate: tafuta namba ya modeli na ya serial, volti, amps na aina ya refrigerant.",
            "Ukubwa: gawanya BTU kwa saa kwa 12,000 kupata tani.",
            "Tofauti ya joto: joto la hewa ya return toa joto la hewa ya supply."
          ],
          words: [
            ["Nameplate (kibao cha taarifa)", "lebo kwenye kifaa yenye modeli, namba ya serial, viwango vya umeme na aina ya refrigerant."],
            ["BTU", "British thermal unit: kipimo cha joto. Ukubwa wa kupoza na kupasha joto unatolewa kwa BTU kwa saa."],
            ["Tani (ya kupoza)", "BTU 12,000 kwa saa za kupoza. Kifaa cha tani 2 ni BTU 24,000 kwa saa."],
            ["Volti na amps", "volti ni nguvu ya kusukuma umeme; amps ni kiasi cha mkondo wa umeme unaopita."],
            ["Hewa ya return na hewa ya supply", "hewa ya return inavutwa kurudi kutoka vyumbani; hewa ya supply inapelekwa vyumbani."],
            ["Tofauti ya joto", "tofauti kati ya joto la hewa ya return na la hewa ya supply."]
          ],
          slides: [
            { title: "Ukubwa wa vichujio", bullets: ["16 x 25 x 1 = inchi 16 kwa 25, unene inchi 1", "Mshale unaelekea kwenye blower", "Ukubwa usio sahihi au kuwekwa kinyume kunaingiza uchafu"] },
            { title: "Nameplate", bullets: ["Namba ya modeli na ya serial", "Volti na amps", "Aina na kiasi cha refrigerant"] },
            { title: "Tani na BTU", bullets: ["Tani 1 = BTU 12,000 kwa saa", "BTU 36,000 = tani 3", "Gawanya BTU kwa 12,000"] },
            { title: "Tofauti ya joto", bullets: ["Hewa ya return toa hewa ya supply", "75°F - 57°F = 18°F", "Kiwango cha kawaida: kutoka kwa mwalimu wako na mtengenezaji"] }
          ],
          tryIt: "Mazoezi tu. Tatua na uandike hesabu zako: (1) Kichujio kinasema 20 x 20 x 1. Unene wake ni kiasi gani? (2) Kifaa ni BTU 24,000 kwa saa. Ni tani ngapi? (3) Kifaa ni BTU 60,000 kwa saa. Ni tani ngapi? (4) Hewa ya return 78°F, hewa ya supply 60°F. Tofauti ni ngapi? (5) Tafuta kichujio nyumbani kwako au picha mtandaoni na uandike ukubwa wake na mshale unaelekea upande gani. Majibu: inchi 1; tani 2; tani 5; 18°F.",
          youCanNow: "kusoma ukubwa wa kichujio na nameplate, kubadilisha BTU kuwa tani, na kupata tofauti ya joto.",
          quickCheck: [
            { objective: "O3", q: "Kifaa kina kiwango cha BTU 48,000 kwa saa. Ni tani ngapi?", options: ["Tani 3", "Tani 6", "Tani 5", "Tani 4"], answer: 3, why: "48,000 ukigawanya kwa 12,000 ni 4, kwa hiyo ni kifaa cha tani 4." },
            { objective: "O3", q: "Hewa ya return ni 76°F na hewa ya supply ni 58°F. Tofauti ya joto ni ngapi?", options: ["16°F", "18°F", "134°F", "20°F"], answer: 1, why: "Toa: 76 toa 58 ni 18°F." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Jinsi mifumo ya kupasha joto na kupoza inavyofanya kazi",
        questions: [
          { objective: "O1", q: "HVAC ni kifupi cha nini?", options: ["Joto, matundu ya hewa na koili", "Udhibiti wa hewa kwa volti kubwa", "Kupasha joto, kuingiza hewa na kupoza hewa", "Kuingiza hewa na kupoza nyumbani"], answer: 2, why: "HVAC ni kupasha joto, kuingiza hewa na kupoza hewa; HVACR inaongeza ubaridishaji." },
          { objective: "O1", q: "Kiyoyozi kinapozaje nyumba?", options: ["Kinahamisha joto kutoka ndani kwenda nje", "Kinatengeneza hewa baridi kutoka bure", "Kinaongeza refrigerant mpya kila siku", "Kinavuta hewa baridi ya nje"], answer: 0, why: "Refrigerant inachukua joto ndani na kulitoa nje." },
          { objective: "O1", q: "Sehemu ipi inakandamiza mvuke wa refrigerant ili uwe wa moto na wenye shinikizo kubwa?", options: ["Evaporator", "Kichujio cha hewa", "Metering device", "Compressor"], answer: 3, why: "Compressor ni pampu inayokandamiza mvuke mwanzoni mwa mzunguko." },
          { objective: "O3", q: "Kichujio kimeandikwa 20 x 25 x 4. Namba 4 inakuambia nini?", options: ["Kinadumu miezi 4", "Unene wake ni inchi 4", "Kuna vichujio 4 kwenye boksi", "Ni daraja la 4"], answer: 1, why: "Namba ya tatu ni unene kwa inchi." },
          { objective: "O3", q: "Unapata wapi aina ya refrigerant na viwango vya umeme vya kifaa?", options: ["Kwenye skrini ya thermostat", "Kwenye kichujio cha hewa", "Kwenye supply vent", "Kwenye nameplate ya kifaa"], answer: 3, why: "Nameplate inaorodhesha modeli, namba ya serial, volti, amps na refrigerant." }
        ]
      }
    },
    {
      name: "Sura 2: Usalama, cheti na njia yako",
      lessons: [
        {
          title: "Kubaki salama katika kazi ya HVAC",
          objectives: ["O2"],
          minutes: 6,
          goal: "Orodhesha hatari kuu za kazi ya HVAC na kinga ya kila moja.",
          text: [
            "Mafundi wa HVAC wana moja ya viwango vya juu zaidi vya majeraha kati ya kazi zote, kwa mujibu wa US Bureau of Labor Statistics (ofisi ya takwimu za kazi ya Marekani). Usalama unakuja kwanza katika kila kazi. Kazi ya mikono katika ufundi huu inajifunzwa tu katika mafunzo yenye usimamizi, ukiwa na vifaa sahihi vya kujikinga.",
            "Umeme: vifaa vinatumia volti za nyumbani au zaidi, na baadhi ya sehemu (kama capacitor) zinaweza kubaki na chaji baada ya umeme kuzimwa. Kazini, mafundi waliofunzwa wanazima umeme, wanaufunga kwa kufuli na kuweka kibandiko (lockout/tagout) ili mtu yeyote asiweze kuuwasha tena, na wanapima kuhakikisha umezimwa kweli kabla ya kugusa chochote. Sheria ya OSHA ya lockout/tagout (29 CFR 1910.147) inaeleza hatua hizi.",
            "Refrigerant: iko chini ya shinikizo na inaweza kusababisha kuganda kwa ngozi (frostbite) na majeraha ya macho; katika chumba kidogo kilichofungwa inaweza kusukuma nje oksijeni unayohitaji kupumua. Mafundi wanavaa miwani ya usalama au goggles na glavu, na ni watu waliothibitishwa na waliofunzwa tu wanaoishughulikia.",
            "Hatari nyingine: darini zenye joto kali na nafasi finyu chini ya nyumba (magonjwa ya joto), ngazi na mapaa (kuanguka), vifaa vizito (kuumia mgongo), kingo kali za mabati (kukatwa) na kazi ya tochi inayoitwa brazing (kuungua na moto). Kinga: maji na mapumziko, kutumia ngazi kwa usalama, kunyanyua kwa nguvu ya miguu au kwa msaada, glavu zisizokatika kirahisi, na kizima moto karibu."
          ],
          steps: [
            "Soma agizo la kazi na uulize kazi ni nini.",
            "Tafuta hatari: umeme, refrigerant, joto, urefu, kingo kali, moto.",
            "Vaa kinga ambayo kazi inahitaji: miwani ya usalama, glavu, buti.",
            "Mafundi waliofunzwa tu: zima umeme, fanya lockout na tagout, kisha pima kabla ya kugusa.",
            "Kama kuna jambo lisilo wazi, simama na umuulize fundi kiongozi wako."
          ],
          words: [
            ["Hatari", "chochote kinachoweza kukuumiza wewe au mtu mwingine."],
            ["PPE", "vifaa vya kujikinga binafsi: miwani ya usalama, glavu, buti, kinga ya masikio na vifaa kama hivyo."],
            ["Lockout/tagout", "kuzima umeme na kuweka kufuli na kibandiko kwenye swichi ili mtu asiuwashe wakati wa kazi."],
            ["Capacitor", "sehemu ya umeme inayohifadhi chaji na inaweza kukushtua hata baada ya umeme kuzimwa."],
            ["Brazing", "kuunganisha mabomba ya shaba kwa tochi na chuma cha kujaza; inahusisha joto kali na hatari ya moto."],
            ["Magonjwa ya joto", "kuugua kutokana na kufanya kazi katika joto kali, kama uchovu wa joto (heat exhaustion) au kiharusi cha joto (heat stroke)."]
          ],
          slides: [
            { title: "Usalama kwanza, kila kazi", bullets: ["Moja ya viwango vya juu zaidi vya majeraha kati ya kazi zote (BLS)", "Kazi ya mikono: katika mafunzo yenye usimamizi tu"] },
            { title: "Umeme", bullets: ["Zima umeme, lockout, tagout", "Pima kabla ya kugusa", "Capacitor zinaweza kubaki na chaji"] },
            { title: "Refrigerant", bullets: ["Iko chini ya shinikizo: frostbite na majeraha ya macho", "Inaweza kusukuma nje oksijeni katika nafasi zilizofungwa", "Goggles, glavu, mafundi waliothibitishwa tu"] },
            { title: "Joto, urefu, mabati, moto", bullets: ["Darini zenye joto: maji na mapumziko", "Ngazi na mapaa: kupanda kwa usalama", "Mabati: glavu zisizokatika kirahisi", "Brazing: kizima moto karibu"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Mafundi na wafungaji wa mifumo ya kupasha joto, viyoyozi na ubaridishaji", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
            { name: "OSHA: Kudhibiti nishati hatari (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Soma kazi hii: \"Kiyoyozi cha mteja kimesimama siku yenye joto la 95°F. Kifaa cha nje kiko uwanjani pembeni mwa nyumba. Air handler iko katika dari yenye joto unayofikia kwa ngazi ya kuvuta.\" Kwenye karatasi, tengeneza safu mbili: Hatari na Kinga. Orodhesha angalau hatari tano na hatua salama au kifaa kwa kila moja. Uitunze: ni sehemu ya 2 ya kazi yako ya mwisho.",
          youCanNow: "kuorodhesha hatari kuu za kazi ya HVAC na kulinganisha kila moja na kinga sahihi.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini mafundi waliofunzwa wanafanya lockout na tagout ya umeme kabla ya kufanya kazi ndani ya kifaa?", options: ["Ili mtu yeyote asiweze kuwasha umeme tena wakati wa kazi", "Kumwokolea mteja pesa", "Ili kifaa kipoze haraka baadaye", "Kwa sababu thermostat inahitaji kuwashwa upya"], answer: 0, why: "Lockout/tagout inaweka umeme ukiwa umezimwa hadi mtu aliyefunga kufuli aiondoe." },
            { objective: "O2", q: "Refrigerant inamrukia mfanyakazi mkononi. Inaweza kusababisha jeraha gani?", options: ["Kuungua na jua", "Kibanzi", "Frostbite (kuganda kwa ngozi)", "Hakuna; haina madhara"], answer: 2, why: "Refrigerant inayotoka kwenye shinikizo inakuwa baridi sana na inaweza kugandisha ngozi." }
          ]
        },
        {
          title: "Cheti cha EPA Section 608 na sheria za refrigerant",
          objectives: ["O4"],
          minutes: 6,
          goal: "Linganisha vifaa na aina sahihi ya cheti cha EPA Section 608 na useme sheria kuu za refrigerant.",
          text: [
            "Chini ya Section 608 ya sheria ya serikali kuu ya Marekani, Clean Air Act (sheria ya hewa safi), mafundi wanaotunza, kuhudumia, kutengeneza au kutupa vifaa vinavyoweza kutoa refrigerant hewani lazima wathibitishwe kupitia programu ya US Environmental Protection Agency (EPA, shirika la Marekani la kulinda mazingira). Kuna aina nne. Type I: vifaa vidogo (kama kiyoyozi cha dirishani au friji ya nyumbani). Type II: vifaa vya shinikizo kubwa na shinikizo kubwa sana (kama viyoyozi vingi vya kati vya nyumbani na heat pumps). Type III: vifaa vya shinikizo dogo (kama baadhi ya chillers kubwa katika majengo makubwa). Universal: zote hizi.",
            "Kila mtihani una sehemu ya Core kuhusu sheria na usalama pamoja na sehemu ya aina husika. Mitihani inatolewa na mashirika ya kutoa vyeti yaliyoidhinishwa na EPA; EPA yenyewe haitoi mtihani wala kadi. Kwa mujibu wa EPA, cheti cha Section 608 hakiishi muda wake. Ili kupata cheti cha Universal, Core lazima ifanywe kama mtihani wenye msimamizi (proctored).",
            "Sheria mbili za kujua sasa: ni kinyume cha sheria kuachilia (vent) refrigerant hewani kwa makusudi wakati wa kuhudumia au kutupa vifaa, na refrigerant ya vifaa hivi kwa ujumla inaweza kuuzwa tu kwa mafundi waliothibitishwa na waajiri wao. Viyoyozi vya magari vinahusu cheti tofauti, Section 609.",
            "Kozi hii inakuandaa kwa mawazo yaliyo kwenye mtihani. Haikupi cheti. Kagua kurasa za EPA za Section 608 kwa sheria za sasa na orodha ya mashirika ya kutoa vyeti yaliyoidhinishwa, na uiulize programu yako ya mafunzo inatoa mtihani gani."
          ],
          words: [
            ["EPA", "US Environmental Protection Agency, shirika la serikali kuu ya Marekani linalotunga sheria za refrigerant."],
            ["Section 608", "sehemu ya Clean Air Act inayohusu refrigerant katika vifaa visivyohamishika kama mifumo ya nyumba na majengo."],
            ["Shirika la kutoa vyeti", "kikundi kilichoidhinishwa na EPA kutoa mtihani wa Section 608 na kutoa kadi."],
            ["Core", "sehemu ya kila mtihani wa Section 608 inayohusu sheria, usalama na maarifa ya msingi ya refrigerant."],
            ["Venting", "kuacha refrigerant itoke hewani. Kufanya hivyo kwa makusudi wakati wa kuhudumia ni kinyume cha sheria."],
            ["Proctored", "unaofanywa huku msimamizi wa mtihani akiangalia, ana kwa ana au mtandaoni."],
            ["Section 609", "cheti tofauti cha kufanya kazi kwenye viyoyozi vya magari na malori."]
          ],
          slides: [
            { title: "Nani anakihitaji", bullets: ["Mafundi wanaohudumia au kutupa vifaa vyenye refrigerant", "Sheria ya serikali kuu: Clean Air Act Section 608"] },
            { title: "Aina nne", bullets: ["Type I: vifaa vidogo", "Type II: shinikizo kubwa (viyoyozi vingi vya kati vya nyumbani)", "Type III: shinikizo dogo (baadhi ya chillers kubwa)", "Universal: aina zote"] },
            { title: "Jinsi unavyokipata", bullets: ["Faulu mtihani wa shirika lililoidhinishwa na EPA", "Sehemu ya Core pamoja na aina yako", "EPA inasema hakiishi muda wake"] },
            { title: "Sheria za kujua sasa", bullets: ["Usiachilie refrigerant hewani kwa makusudi kamwe", "Mauzo ni kwa mafundi waliothibitishwa na waajiri tu", "Viyoyozi vya magari ni Section 609, mtihani tofauti"] }
          ],
          sources: [
            { name: "EPA: Cheti cha mafundi cha Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "EPA: Masharti ya cheti cha mafundi cha Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-requirements" },
            { name: "EPA: Marufuku ya kuachilia refrigerant hewani", url: "https://www.epa.gov/section608/stationary-refrigeration-prohibition-venting-refrigerants" },
            { name: "EPA: Kizuizi cha mauzo ya refrigerant", url: "https://www.epa.gov/section608/refrigerant-sales-restriction" }
          ],
          tryIt: "Linganisha kila kazi na aina ya cheti na uiandike: (1) kutengeneza kiyoyozi cha dirishani; (2) kuhudumia kiyoyozi cha kati cha nyumbani; (3) kuhudumia chiller kubwa ya shinikizo dogo hospitalini; (4) kukusanya refrigerant kutoka friji ya zamani ya nyumbani; (5) fundi anayetaka kufanya kazi kwenye vyote hivi. Majibu: Type I, Type II, Type III, Type I, Universal. Kisha fungua kurasa za EPA za Section 608 na uandike jina la shirika moja la kutoa vyeti lililoidhinishwa.",
          youCanNow: "kulinganisha vifaa na aina sahihi ya Section 608 na kusema sheria za venting na za mauzo.",
          quickCheck: [
            { objective: "O4", q: "Fundi atahudumia viyoyozi vya kati vya nyumbani vinavyotumia refrigerant ya shinikizo kubwa. Aina ipi ya cheti inafaa?", options: ["Type I", "Type III", "Type II", "Section 609"], answer: 2, why: "Type II inahusu vifaa vya shinikizo kubwa na shinikizo kubwa sana, vikiwemo viyoyozi vingi vya kati vya nyumbani." },
            { objective: "O4", q: "Nani anakupa cheti cha EPA Section 608?", options: ["Kozi hii, ukimaliza", "Mwenye nyumba unayemfanyia kazi", "Duka lolote la vifaa", "Shirika la kutoa vyeti lililoidhinishwa na EPA, baada ya kufaulu mtihani wake"], answer: 3, why: "Ni shirika la kutoa vyeti lililoidhinishwa na EPA tu linalotoa mtihani na cheti." }
          ]
        },
        {
          title: "Njia yako ya kuingia katika HVAC, yenye tarehe",
          objectives: ["O5"],
          minutes: 6,
          goal: "Andika mpango wenye tarehe wa kupata mafunzo, cheti na kuajiriwa kama msaidizi au mwanafunzi-kazi wa HVAC.",
          text: [
            "Kuna njia tatu za kawaida za kuingia. Mafundi wengi wanamaliza programu katika chuo cha ufundi au community college (chuo cha jamii), ambayo Bureau of Labor Statistics inasema kwa kawaida inachukua miezi 6 hadi miaka 2 na mara nyingi inajumuisha mtihani wa EPA. Wengine wanajiunga na uanagenzi (apprenticeship): kazi yenye mshahara pamoja na mshauri na masomo darasani, ambayo kwa kawaida inachukua miaka kadhaa. Baadhi ya waajiri wanaajiri wasaidizi wenye diploma ya sekondari (high school) au GED na kuwafundisha kazini.",
            "Baadhi ya majimbo na miji yanataka leseni ya HVAC, na sheria zinatofautiana. Tafuta bodi ya leseni ya jimbo au mji wako, au tumia kitafuta leseni cha CareerOneStop, na uandike hasa inachotaka. Waajiri wengi pia wanataka leseni ya udereva, na baadhi wanapendelea vyeti vya hiari vya sekta au vya watengenezaji baadaye.",
            "Kabla ya kulipia programu yoyote, uliza: Inajumuisha mtihani wa EPA Section 608? Wahitimu wangapi wanapata kazi za HVAC? Inasaidia kutafuta kazi? Wanajeshi wastaafu wanaweza kuiuliza VA (idara ya wanajeshi wastaafu) kuhusu kutumia faida za GI Bill kwa mafunzo au uanagenzi. Kama una rekodi ya uhalifu, iulize bodi ya leseni jinsi inavyokagua rekodi na utafute waajiri wanaotoa nafasi ya pili.",
            "Mpango wenye tarehe unageuza lengo kuwa hatua. Andika kila hatua, mahali ulipoikagua, na tarehe utakayoifanya."
          ],
          steps: [
            "Andika lengo lako, kwa mfano \"kazi ya msaidizi wa HVAC kufikia Juni\".",
            "Chagua aina yako ya EPA Section 608 (wanaoanza wengi wanalenga Type II au Universal) na shirika la kutoa vyeti lililoidhinishwa.",
            "Tafuta programu mbili za mafunzo au uanagenzi karibu nawe kwenye apprenticeship.gov au tovuti ya community college; andika tarehe za maombi.",
            "Kagua sheria za leseni za jimbo au mji wako kwenye ukurasa rasmi na uandike zinachotaka.",
            "Ongeza tarehe za kusoma, mtihani, maombi na kusasisha CV (résumé) yako."
          ],
          words: [
            ["Uanagenzi (apprenticeship)", "kazi yenye mshahara ambapo unajifunza ufundi kutoka kwa wafanyakazi wenye uzoefu, pamoja na masomo darasani."],
            ["Msaidizi au mwanafunzi wa kazi", "mfanyakazi wa HVAC wa ngazi ya kuanzia anayemsaidia fundi huku akijifunza."],
            ["Bodi ya leseni", "ofisi ya jimbo au mji inayoamua nani anaweza kufanya kazi fulani za ufundi na inayotoa leseni."],
            ["CareerOneStop", "tovuti ya bure ya Idara ya Kazi ya Marekani yenye taarifa za kazi, mafunzo na leseni."]
          ],
          slides: [
            { title: "Njia tatu za kuingia", bullets: ["Chuo cha ufundi au community college", "Uanagenzi: kazi yenye mshahara pamoja na masomo", "Kazi ya msaidizi yenye mafunzo kazini"] },
            { title: "Leseni zinatofautiana kwa mahali", bullets: ["Baadhi ya majimbo na miji yanataka leseni", "Kagua bodi rasmi ya leseni", "Andika hasa inachotaka"] },
            { title: "Kabla ya kulipa", bullets: ["Mtihani wa EPA umejumuishwa?", "Wahitimu wangapi wanapata kazi za HVAC?", "Wanajeshi wastaafu: iulize VA kuhusu GI Bill"] },
            { title: "Mpango wako", bullets: ["Lengo, aina ya EPA, shirika la kutoa vyeti", "Programu mbili zenye tarehe za maombi", "Sheria za leseni kutoka ukurasa rasmi", "Tarehe kwa kila hatua"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Mafundi na wafungaji wa HVAC, Jinsi ya kuwa mmoja", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm#tab-4" },
            { name: "Apprenticeship.gov: Kitafuta kazi za uanagenzi", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Kitafuta leseni", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" },
            { name: "EPA: Cheti cha mafundi cha Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" }
          ],
          tryIt: "Kazi ya mwisho: tengeneza mpango wako wa kuanza HVAC. Weka pamoja mchoro wako wa mzunguko wa kupoza (Somo 2) na orodha yako ya hatari (Somo 4). Kisha andika mpango wako wenye tarehe: lengo lako, aina ya Section 608 utakayofanya na shirika moja la kutoa vyeti lililoidhinishwa, programu mbili za mafunzo au uanagenzi karibu nawe zenye tarehe za maombi, kile jimbo au mji wako unachotaka kwa leseni ya HVAC (pamoja na anwani ya tovuti uliyokagua), na tarehe kwa kila hatua.",
          youCanNow: "kufuata mpango wako mwenyewe wenye tarehe wa kupata mafunzo, kufanya mtihani wa EPA Section 608 na kuomba kazi ya HVAC.",
          quickCheck: [
            { objective: "O5", q: "Unapaswa kukagua wapi kama jimbo lako linataka leseni ya HVAC?", options: ["Chapisho la mitandao ya kijamii", "Ukurasa rasmi wa bodi ya leseni ya jimbo au mji wako", "Tangazo la chuo cha mafunzo", "Rafiki aliyewahi kufanya kazi ya HVAC"], answer: 1, why: "Sheria za leseni zinatofautiana kwa mahali na zinabadilika, kwa hiyo bodi rasmi ndiyo mahali pa kukagua." },
            { objective: "O5", q: "Hatua ipi ya mpango imeandikwa kwa manufaa zaidi?", options: ["\"Kupata cheti siku moja\"", "\"Kuangalia mambo ya HVAC\"", "\"Kusoma sana\"", "\"Kufanya mtihani wa EPA Type II na shirika lililoidhinishwa kufikia Machi 15\""], answer: 3, why: "Hatua yenye manufaa inataja kitendo hasa, kinafanywa na nani na tarehe." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Usalama, cheti na njia yako",
        questions: [
          { objective: "O2", q: "Kabla fundi aliyefunzwa hajagusa nyaya ndani ya kifaa, ukaguzi wa mwisho ni upi?", options: ["Kumuuliza mteja kama umezimwa", "Kupima kuhakikisha umeme umezimwa kweli", "Kushusha thermostat", "Kusubiri sekunde tano"], answer: 1, why: "Baada ya lockout na tagout, mafundi wanapima kabla ya kugusa, kwa sababu swichi isiyo sahihi au chaji iliyohifadhiwa bado inaweza kushtua." },
          { objective: "O2", q: "Umetumwa kwenye dari yenye joto wakati wa kiangazi. Kinga ipi ni muhimu zaidi kwa joto?", options: ["Maji na mapumziko ya mara kwa mara", "Kinga ya masikio", "Kofia ya kuchomelea", "Buti za chuma mbele tu"], answer: 0, why: "Maji, mapumziko na kuangalia dalili za magonjwa ya joto vinakulinda katika nafasi zenye joto." },
          { objective: "O4", q: "Friji ya nyumbani ni kifaa kidogo. Aina ipi ya Section 608 inaihusu?", options: ["Type II", "Type III", "Type I", "Section 609"], answer: 2, why: "Type I inahusu vifaa vidogo kama friji za nyumbani na viyoyozi vya dirishani." },
          { objective: "O4", q: "EPA inasema nini kuhusu kuachilia refrigerant hewani kwa makusudi wakati wa kuhudumia?", options: ["Ni sawa ukiwa nje", "Ni sawa kwa kiasi kidogo", "Ni sawa kwa ruhusa ya mwenye kifaa", "Ni kinyume cha sheria"], answer: 3, why: "Sheria za EPA zinakataza kuachilia refrigerant kwa makusudi wakati wa kuhudumia, kutengeneza au kutupa." },
          { objective: "O5", q: "Chuo kinatoa kozi ya haraka ya HVAC. Swali lipi linakusaidia zaidi kabla ya kulipa?", options: ["Inajumuisha mtihani wa EPA Section 608, na wahitimu wangapi wanapata kazi za HVAC?", "Sare zina rangi gani?", "Jengo ni jipya?", "Naweza kuanza Jumatatu?"], answer: 0, why: "Kama programu inaleta cheti na kazi inakuambia kama inastahili pesa zako." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Ufundi wa HVAC",
    questions: [
      { objective: "O1", q: "Katika HVAC, herufi \"V\" inasimama kwa nini?", options: ["Voltage (volti)", "Ventilation (kuingiza hewa)", "Valve (vali)", "Vapor (mvuke)"], answer: 1, why: "HVAC ni heating, ventilation and air conditioning: kupasha joto, kuingiza hewa na kupoza hewa." },
      { objective: "O1", q: "Feni ya blower inafanya nini?", options: ["Inasogeza hewa kupitia ducts", "Inakandamiza refrigerant", "Inadhibiti mpangilio wa joto", "Inasafisha koili ya nje"], answer: 0, why: "Blower inasukuma hewa juu ya koili na kupitia ducts kwenda vyumbani." },
      { objective: "O1", q: "Sehemu ipi inatoa joto nje?", options: ["Evaporator", "Return vent", "Condenser", "Thermostat"], answer: 2, why: "Condenser ni koili ya nje ambapo joto linaondoka kwenye refrigerant." },
      { objective: "O1", q: "Mpangilio sahihi wa mzunguko wa kupoza ni upi?", options: ["Evaporator, compressor, metering device, condenser", "Compressor, metering device, condenser, evaporator", "Condenser, compressor, evaporator, metering device", "Compressor, condenser, metering device, evaporator"], answer: 3, why: "Refrigerant inatoka compressor kwenda condenser, inapita metering device, inaingia evaporator na kurudi." },
      { objective: "O1", q: "Nini kinaiwezesha heat pump kupasha nyumba joto wakati wa baridi?", options: ["Kichujio kikubwa zaidi", "Reversing valve inayoendesha mzunguko kinyume", "Thermostat ya pili", "Kuongeza maji kwenye refrigerant"], answer: 1, why: "Reversing valve inapeleka refrigerant upande mwingine, kwa hiyo joto linachukuliwa nje na kutolewa ndani." },
      { objective: "O3", q: "Kifaa kina kiwango cha BTU 36,000 kwa saa. Hiyo ni tani ngapi?", options: ["Tani 2", "Tani 4", "Tani 3", "Tani 36"], answer: 2, why: "36,000 ukigawanya kwa 12,000 ni 3." },
      { objective: "O3", q: "Hewa ya return ni 80°F na hewa ya supply ni 62°F. Tofauti ya joto ni ngapi?", options: ["22°F", "142°F", "16°F", "18°F"], answer: 3, why: "80 toa 62 ni 18°F." },
      { objective: "O3", q: "Mshale kwenye kichujio cha hewa unaelekea upande gani?", options: ["Kuelekea blower, upande ambao hewa inapita", "Kuelekea kifuniko cha return vent", "Juu, kila wakati", "Haijalishi"], answer: 0, why: "Mshale unaonyesha mwelekeo wa hewa, kuelekea blower na vifaa." },
      { objective: "O2", q: "Hatari ipi inaweza kumshtua mfanyakazi hata baada ya umeme kuzimwa?", options: ["Kichujio safi cha hewa", "Capacitor yenye chaji", "Kifuniko cha plastiki cha tundu la hewa", "Betri ya thermostat"], answer: 1, why: "Capacitor zinahifadhi chaji, ndiyo sababu mafundi waliofunzwa wanapima kabla ya kugusa." },
      { objective: "O2", q: "Lengo la lockout/tagout ni nini?", options: ["Kufunga mlango wa mteja", "Kuonyesha kichujio gani cha kununua", "Kuweka umeme ukiwa umezimwa ili mtu asiuwashe wakati wa kazi", "Kuharakisha matengenezo"], answer: 2, why: "Kufuli na kibandiko kwenye swichi vinaweka kifaa kikiwa kimezimwa hadi mfanyakazi aliyeviweka aviondoe." },
      { objective: "O2", q: "Kwa nini refrigerant ni hatari katika nafasi ndogo iliyofungwa?", options: ["Inanuka vibaya", "Inafanya chumba kiwe na mwanga mwingi", "Inanata", "Inaweza kusukuma nje oksijeni unayohitaji kupumua"], answer: 3, why: "Uvujaji mkubwa katika nafasi iliyofungwa unaweza kuondoa oksijeni." },
      { objective: "O2", q: "Lazima ukate na kuweka duct ya mabati. Kinga ipi inafaa hatari hii?", options: ["Glavu zisizokatika kirahisi na miwani ya usalama", "Miwani ya jua tu", "Hakuna kifaa; ni kazi ya haraka", "Vizibo vya masikio tu"], answer: 0, why: "Kingo za mabati ni kali, na vipande vinaweza kuruka, kwa hiyo glavu na kinga ya macho vinahitajika." },
      { objective: "O4", q: "Sheria ipi inataka mafundi wanaoshughulikia refrigerant katika mifumo ya nyumba na majengo wathibitishwe?", options: ["Fair Labor Standards Act", "Section 608 ya Clean Air Act", "Highway Safety Act", "Clean Water Act"], answer: 1, why: "Programu ya EPA ya Section 608 inatoka kwenye Clean Air Act." },
      { objective: "O4", q: "Aina ipi ya Section 608 inakuruhusu kufanya kazi kwenye aina zote za vifaa visivyohamishika?", options: ["Type I", "Type II", "Type III", "Universal"], answer: 3, why: "Universal inahusu Type I, II na III." },
      { objective: "O4", q: "Chiller kubwa ya shinikizo dogo hospitalini inahitaji huduma. Aina ipi inaihusu?", options: ["Type III", "Type I", "Type II", "Section 609"], answer: 0, why: "Type III inahusu vifaa vya shinikizo dogo kama baadhi ya chillers kubwa." },
      { objective: "O4", q: "EPA inasema nini kuhusu muda wa cheti cha Section 608?", options: ["Mwaka mmoja", "Miaka mitano", "Hakiishi muda wake", "Hadi ubadilishe kazi"], answer: 2, why: "EPA inasema cheti cha mafundi cha Section 608 hakiishi muda wake." },
      { objective: "O5", q: "Kozi hii itafanya nini?", options: ["Itakupa leseni ya HVAC", "Itakuandaa kwa mafunzo na mtihani; haikupi cheti wala leseni", "Itahesabiwa kama mtihani wako wa EPA", "Itachukua nafasi ya uanagenzi"], answer: 1, why: "Cheti kinatoka kwenye mtihani wa shirika lililoidhinishwa na EPA, na leseni zinatoka kwa jimbo au mji wako." },
      { objective: "O5", q: "Ipi ni njia yenye mshahara ya kujifunza HVAC ukiwa na mshauri pamoja na masomo darasani?", options: ["Video ya bure mtandaoni", "Dhamana ya bidhaa", "Ukaguzi wa nyumba", "Uanagenzi uliosajiliwa (registered apprenticeship)"], answer: 3, why: "Uanagenzi unaunganisha mafunzo kazini yenye mshahara na masomo darasani." },
      { objective: "O5", q: "Tovuti ipi ya bure inaweza kukusaidia kupata uanagenzi karibu nawe?", options: ["apprenticeship.gov", "Jukwaa lolote la kazi mtandaoni", "Tangazo linalojitokeza ghafla (pop-up)", "Sehemu ya maoni ya video"], answer: 0, why: "Apprenticeship.gov ni tovuti ya Idara ya Kazi ya Marekani yenye kitafuta kazi za uanagenzi." },
      { objective: "O5", q: "Hatua ipi ya mpango imekamilika?", options: ["\"Kujifunza HVAC\"", "\"Kuomba mahali fulani hivi karibuni\"", "\"Kuomba programu ya HVAC ya community college kufikia Aprili 1, baada ya kukagua mtihani wake wa EPA na msaada wa kupata kazi\"", "\"Kufikiria kuhusu leseni\""], answer: 2, why: "Inataja kitendo, mahali, kilichokaguliwa na tarehe." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanafanywa kabla ya Somo 1, ili mtihani uonyeshe kila mwanafunzi alipata kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 3, 5, 6, 9, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Mchoro wa mzunguko wa kupoza", objective: "O1", notYet: "Sehemu zinakosekana au ziko kwa mpangilio usio sahihi.", meets: "Sehemu zote nne ziko kwa mpangilio sahihi, na sentensi moja sahihi kuhusu kazi ya kila moja.", exceeds: "Pia inaonyesha ndani na nje, moto na baridi, na inaeleza jinsi heat pump inavyogeuza mwelekeo." },
      { name: "Orodha ya hatari", objective: "O2", notYet: "Hatari chini ya tano, au kinga hailingani na hatari.", meets: "Angalau hatari tano, kila moja ikilinganishwa na hatua salama au kifaa sahihi.", exceeds: "Pia inaweka hatua kwa mpangilio ambao timu ingezifanya, ikiwemo lockout/tagout na kupima kabla ya kugusa." },
      { name: "Namba za HVAC", objective: "O3", notYet: "Majibu ya mazoezi yana makosa katika tani au tofauti ya joto.", meets: "Angalau 4 kati ya 5 sahihi katika mazoezi, hesabu zikionyeshwa.", exceeds: "Yote sahihi, na mwanafunzi anaweza kueleza mshale wa kichujio na kusoma picha ya nameplate halisi." },
      { name: "Cheti sahihi", objective: "O4", notYet: "Mpango unataja aina isiyo sahihi ya Section 608 kwa kazi hiyo, au hakuna shirika la kutoa vyeti.", meets: "Unataja aina sahihi kwa kazi wanazotaka na shirika moja la kutoa vyeti lililoidhinishwa na EPA.", exceeds: "Pia unaeleza sheria ya venting na kizuizi cha mauzo kwa maneno yao wenyewe." },
      { name: "Mpango wenye tarehe kutoka vyanzo rasmi", objective: "O5", notYet: "Hatua hazina tarehe, au sheria za leseni zinatoka kwenye matangazo au machapisho.", meets: "Angalau hatua tano zenye tarehe, programu mbili halisi, na sheria za leseni kutoka ukurasa rasmi pamoja na anwani yake ya tovuti.", exceeds: "Pia unajumuisha maswali yaliyoulizwa kwa kila programu na mpango wa akiba, kama kazi ya msaidizi wakati wa mafunzo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubric)",
      "Wanafunzi wanaofaulu mtihani wa EPA Section 608 ndani ya miezi 6 (wanavyoripoti wenyewe katika ufuatiliaji)",
      "Wanafunzi wanaojiunga na programu ya mafunzo ya HVAC au uanagenzi ndani ya siku 90",
      "Wanafunzi wanaoajiriwa kama wasaidizi, wanafunzi wa kazi au wanafunzi-kazi (apprentices) wa HVAC ndani ya miezi 6",
      "Programu washirika zinaripoti kwamba waombaji wanafika wakijua sehemu za msingi, maneno na hatua za usalama"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti kusoma kurasa za EPA, BLS, apprenticeship.gov na za leseni za jimbo",
      "Karatasi, kalamu na kikokotoo (kikokotoo cha simu kinafaa)",
      "Hiari: kichujio cha hewa kilichotumika au picha za kichujio na nameplate ya kifaa",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Mazoezi yote yawe bila kugusa vifaa: hakuna kufungua paneli za vifaa, hakuna refrigerant, hakuna kazi ya umeme wala brazing. Ujuzi huo ni wa programu ya mafunzo yenye usimamizi na PPE.",
      "Ukiweza, leta kifaa kilichokatwa kuonyesha ndani yake au picha, na uwaombe wanafunzi waonyeshe kila sehemu ya mzunguko.",
      "Mwalike mkandarasi wa HVAC wa eneo lako, chama cha wafanyakazi au mwalimu wa community college kuzungumza kuhusu kazi za msaidizi na wanachotafuta.",
      "Msaidie kila mwanafunzi kupata ukurasa wa leseni wa jimbo au mji wake; sheria zinatofautiana, kwa hiyo usitoe jibu moja kwa kundi zima.",
      "Kwa wanafunzi wenye rekodi au wanajeshi wastaafu, waunganishe na huduma za kurudi katika jamii au za wanajeshi wastaafu; usiahidi matokeo yoyote kutoka bodi ya leseni.",
      "Pima kazi ya mwisho kwa rubric na utoe maoni kuhusu mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
