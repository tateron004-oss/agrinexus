"use strict";

// Koach Learn course, Hausa (ha) translation of shared/hvac-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "hvac-basics-ha",
  lang: "ha",
  translationOf: "hvac-basics",
  category: "Workforce Development",
  name: "Tushen Aikin Ƙwararren HVAC (Dumama da Sanyaya Iska)",
  skills: "Faɗin sassan tsarin dumama da sanyaya iska, Bin zagayen sanyaya (refrigeration cycle), Karanta alamar bayani (nameplate) da lissafin HVAC, Gane haɗarin aikin HVAC, Zaɓar takardar shaidar EPA Section 608 da ta dace, Tsara hanyarku zuwa aikin HVAC",
  outcome: "bayyana yadda tsarin dumama da sanyaya iska na gida yake aiki, karanta lambobinsa, faɗin haɗarin aikin da yadda ake kiyaye kai, zaɓar takardar shaidar EPA Section 608 da kuke buƙata, da bin tsari mai ranaku don samun horo, takardar shaida da aiki a matsayin mataimakin HVAC ko ɗan koyon sana'a (apprentice).",
  about: [
    "Ƙwararrun HVAC suna sa gidaje, makarantu, shaguna da asibitoci su yi ɗumi a lokacin sanyi, su yi sanyi a lokacin zafi. Aikin hannu ne, ana buƙatarsa a kowane gari, kuma mutane da yawa suna farawa a matsayin mataimaki ko ɗan koyon sana'a suna koyo a wurin aiki. Wannan kwas ɗin na duk wanda ke tunanin wannan hanya ne: masu neman aiki, tsofaffin sojoji, matasa, masu dawowa gida daga gidan yari, baƙi 'yan ci-rani da manya da ke komawa karatu.",
    "Za ku koyi manyan sassan tsarin da yadda na'urar sanyaya iska (AC) take motsa zafi, ku karanta lambobin da ke kan matatar iska (filter) da alamun bayanin na'ura, ku kuma yi lissafi mai sauƙi da ƙwararru ke yi kowace rana. Sannan za ku koyi haɗarin aikin, takardar shaidar gwamnatin tarayya ta EPA Section 608 da dole ƙwararrun da ke taɓa refrigerant (ruwan sanyaya) su samu, da hanyoyin shiga sana'ar.",
    "Wannan kwas ɗin yana shirya ku ne. Ba ya ba ku lasisi ko takardar shaida. Takardar shaidar EPA Section 608 tana zuwa ne kawai idan kun ci jarabawa a wata ƙungiyar ba da shaida da EPA ta amince da ita, kuma wasu jihohi da birane ma suna ba da lasisin aikin HVAC. Aikin hannu da refrigerant da wutar lantarki ana koyon sa ne kawai a shirin horo da ke ƙarƙashin kulawa, da kayan kariya da suka dace.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da ɗan aikin \"Gwada yanzu\" da tambayoyi biyu masu sauri. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Abin da za ku gama da shi shi ne tsarinku na farawa a HVAC da ranaku na gaske."
  ],
  finalTask: "Ku yi tsarinku na farawa a HVAC: (1) zanen hannu na zagayen sanyaya da manyan sassa huɗu da aka rubuta sunayensu bisa jeri, da jimla ɗaya kan aikin kowanne; (2) jerin haɗarin wani aikin HVAC ɗaya da kariyar kowane haɗari; da (3) tsari mai ranaku da ke faɗin irin takardar shaidar EPA Section 608 da za ku ɗauka, ƙungiyar ba da shaida ɗaya da EPA ta amince da ita, shirye-shiryen horo biyu ko na koyon sana'a kusa da ku, abin da jiharku ko birninku ke buƙata don lasisin HVAC (daga shafin hukuma), da rana ga kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke neman aikin ƙwarewa da baya buƙatar digiri na shekara huɗu: masu neman aiki, tsofaffin sojoji, matasa, masu dawowa gida daga gidan yari, baƙi 'yan ci-rani da manya da ke komawa karatu. Wasu sun yi aikin hannu (gyare-gyare, aikin soja, gine-gine, gyaran mota); da yawa ba su taɓa aiki kan na'urorin dumama ko sanyaya ba.",
    startingPoint: "Suna iya karanta gajerun umarni da yin lissafin cikakkun lambobi. Yawancinsu sun san cewa thermostat yana sarrafa dumama da sanyaya iska, amma ba za su iya faɗin sassan tsarin, bayanin yadda sanyaya ke aiki, ko faɗin takardar shaidar da aikin HVAC ke buƙata ba.",
    gap: "Masu ɗaukar mataimakan HVAC da 'yan koyon sana'a suna son mutanen da suka san sassa da kalmomi na asali, suke ɗaukar tsaro da muhimmanci, kuma suna kan hanyar samun takardar shaidar EPA Section 608. Masu koyo suna buƙatar wannan tushe, tare da tsari mai sarari da gaskiya mai ranaku, don su nemi aiki da ƙarfin gwiwa, kuma su guji biyan kuɗin horon da ba ya kai ga aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8); ana bayyana kowace kalmar sana'a",
      "Babu aikin hannu da refrigerant, wutar lantarki ko walda (brazing) a wannan kwas: wannan yana buƙatar horo a ƙarƙashin kulawa da kayan kariya da suka dace",
      "Na'urori: waya ko kwamfutar ɗakin karatu don karanta shafukan hukuma; takarda da alƙalami don zane da tsare-tsare",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aiki da ganawa",
      "Dokoki sun bambanta a kowace jiha da birni: masu koyo suna duba lasisi a shafin hukuma na inda suke zaune"
    ],
    prerequisites: "Babu. Kwas ɗin \"Fara Sana'a a Ayyukan Hannu na Ƙwarewa\" mataki ne mai kyau na farko don zaɓar sana'a; wannan kwas ɗin yana zurfafa cikin HVAC."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku zane ko hoton tsarin gida mai sassa biyu (split system)", action: "faɗin manyan sassan tsarin dumama da sanyaya iska da bin zagayen sanyaya bisa jeri", standard: "da manyan sassa huɗu na zagayen a jerin da ya dace, da aikin kowanne" },
    { id: "O2", condition: "Idan aka ba ku bayanin wani aikin HVAC", action: "jera haɗarin aikin da kariyar kowanne", standard: "kuna faɗin aƙalla haɗari biyar, kowanne da mataki na tsaro ko kayan kariya da ya dace da shi" },
    { id: "O3", condition: "Idan aka ba ku matatar iska, alamar bayanin na'ura ko karatun zafin iska biyu", action: "karanta girma da ƙimomi da yin lissafin HVAC mai sauƙi", standard: "kuna samun aƙalla 4 cikin 5 na atisaye daidai" },
    { id: "O4", condition: "Idan aka ba ku jerin na'urori da yanayin refrigerant", action: "haɗa kowanne da irin takardar shaidar EPA Section 608 da ta dace da dokar refrigerant da ta shafe shi", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O5", condition: "Ta amfani da shafukan hukuma na jiharku", action: "rubuta tsari mai ranaku don samun horo, ɗaukar jarabawar EPA Section 608 da neman aikin mataimakin HVAC ko na koyon sana'a", standard: "da aƙalla matakai biyar masu ranaku da majiyar hukuma ga kowace buƙata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda tsarin dumama da sanyaya iska yake aiki",
      lessons: [
        {
          title: "Aikin ƙwararren HVAC, da manyan sassa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Faɗin manyan sassan tsarin dumama da sanyaya iska na gida da aikin kowanne.",
          text: [
            "HVAC gajartawa ce ta heating, ventilation and air conditioning (dumama, shigar da iska, da sanyaya iska). Za ku kuma ga HVACR, wanda ya ƙara refrigeration (sanyaya kamar ɗakunan sanyi na shaguna da injinan ƙanƙara). Ƙwararrun HVAC suna saka sababbin tsare-tsare, suna yin gyaran kulawa na yau da kullum, suna gano dalilin da yasa tsari ya daina aiki, kuma suna gyara shi.",
            "Gidaje da yawa suna da split system (tsari mai sassa biyu): sashe ɗaya a waje, ɗaya a ciki. Na'urar waje tana ɗauke da compressor (injin matsewa) da coil na waje (condenser). Sashen ciki furnace ne (murhun dumama) ko air handler (mai tura iska) da fanka mai hura iska (blower) da coil na ciki (evaporator). Bututun da ake kira line set suna ɗaukar refrigerant tsakaninsu.",
            "Thermostat da ke bango shi ne mai sarrafawa: yana gaya wa tsarin lokacin dumama ko sanyaya. Blower yana tura iska ta cikin ducts (bututun iska). Kofofin supply suna tura iska cikin ɗakuna, kofofin return kuma suna jawo iskar ɗaki ta dawo. Matatar iska (filter) tana tsabtace wannan iska kafin ta kai ga na'urar.",
            "Heat pump (famfon zafi) yana kama da na'urar sanyaya iska, amma yana iya juyawa ya yi aiki a baya don ya dumama gida. Furnace yana yin zafi ta hanyar ƙona gas ko mai, ko da sassan dumama na lantarki."
          ],
          words: [
            ["HVAC", "dumama, shigar da iska da sanyaya iska (heating, ventilation and air conditioning). HVACR ya ƙara refrigeration (sanyaya kaya)."],
            ["Split system", "tsari mai na'ura ɗaya a waje da ɗaya a ciki, da bututun refrigerant da ke haɗa su."],
            ["Thermostat", "mai sarrafawa a bango da ke gaya wa tsarin lokacin dumama ko sanyaya."],
            ["Ducts", "bututun ƙarfe ko masu lanƙwasa da ke ɗaukar iska zuwa ɗakuna da daga ɗakuna."],
            ["Heat pump", "tsarin da ke sanyaya a lokacin zafi kuma zai iya juyawa ya dumama a lokacin sanyi."],
            ["Line set", "bututun tagulla guda biyu da ke ɗaukar refrigerant tsakanin na'urar waje da ta ciki."]
          ],
          slides: [
            { title: "Abin da ƙwararrun HVAC ke yi", bullets: ["Saka sababbin tsare-tsare", "Yin gyaran kulawa na yau da kullum", "Gano matsalar da gyara ta"] },
            { title: "A waje: na'urar waje", bullets: ["Compressor", "Coil na waje (condenser) da fanka"] },
            { title: "A ciki: furnace ko air handler", bullets: ["Fanka mai hura iska (blower) yana motsa iska", "Coil na ciki (evaporator)", "Matatar iska tana fara tsabtace iska"] },
            { title: "Mai sarrafawa da hanyoyin iska", bullets: ["Thermostat: yana gaya masa lokacin aiki", "Kofofin supply suna tura iska; kofofin return suna jawo ta", "Ducts suna ɗaukar iskar"] }
          ],
          tryIt: "Ku duba dumama da sanyaya iska a gidanku, makaranta ko wani shago (daga waje kawai, kada ku taɓa buɗe murfi). Ko ku nemi hoton \"split system air conditioner\". A takarda, ku jera kowane sashe da kuke gani: thermostat, kofofin iska, matatar iska, na'urar waje, bututu. Kusa da kowanne, ku rubuta layi ɗaya kan aikinsa.",
          youCanNow: "faɗin manyan sassan tsarin dumama da sanyaya iska na gida da aikin kowane sashe.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne ke gaya wa tsarin lokacin dumama ko sanyaya?", options: ["Ducts", "Matatar iska", "Thermostat", "Coil na waje"], answer: 2, why: "Thermostat shi ne mai sarrafawa; yana ba tsarin alamar farawa da tsayawa." },
            { objective: "O1", q: "A tsarin gida mai sassa biyu, a ina ake yawan samun compressor?", options: ["A na'urar waje", "A cikin thermostat", "Bayan matatar iska", "A kofar return"], answer: 0, why: "A split system, compressor yana cikin na'urar waje tare da coil na waje." }
          ]
        },
        {
          title: "Yadda na'urar sanyaya iska take motsa zafi",
          objectives: ["O1"],
          minutes: 6,
          goal: "Bin zagayen sanyaya ta manyan sassansa huɗu, bisa jeri.",
          text: [
            "Na'urar sanyaya iska ba ta yin sanyi. Tana motsa zafi daga cikin gida zuwa waje. Wani ruwa na musamman da ake kira refrigerant yana ɗaukar wannan zafi yana zagayawa a cikin bututu a rufe. Wannan zagaye ana kiransa refrigeration cycle (zagayen sanyaya).",
            "1. Compressor yana matse tururin refrigerant, don haka ya yi zafi kuma matsinsa ya yi yawa. 2. A condenser (coil na waje) fanka yana hura iskar waje kan coil mai zafi; refrigerant yana fitar da zafinsa ya koma ruwa. 3. Metering device (sau da yawa expansion valve) yana bar ruwan ya wuce ta ƙaramar kofa, don haka matsinsa ya ragu kuma ya yi sanyi ƙwarai. 4. A evaporator (coil na ciki) iskar ɗaki mai ɗumi tana hurawa kan coil mai sanyi; refrigerant yana shanye zafin ya tafasa ya koma tururi. Sannan ya koma compressor, zagayen ya sake farawa.",
            "Heat pump yana amfani da waɗannan sassa huɗu iri ɗaya. A lokacin sanyi reversing valve (bawul mai juyawa) yana tura refrigerant ta ɗaya hanyar, don haka ana ɗaukar zafi a waje a fitar da shi a ciki.",
            "Sanin zagayen shi ne yadda ƙwararru ke gano matsaloli. Misali, idan coil na waje ya toshe da datti, zafin ba zai iya fita ba, kuma tsarin ba zai sanyaya da kyau ba."
          ],
          steps: [
            "Compressor: yana matse tururi don ya yi zafi kuma matsinsa ya yi yawa.",
            "Condenser (coil na waje): yana fitar da zafi a waje; refrigerant ya koma ruwa.",
            "Metering device: yana rage matsi, don haka ruwan ya yi sanyi ƙwarai.",
            "Evaporator (coil na ciki): yana shanye zafi daga iskar ɗaki; refrigerant ya koma tururi ya koma compressor."
          ],
          words: [
            ["Refrigerant", "ruwan da ke cikin tsarin wanda ke ɗaukar zafi daga wuri ɗaya zuwa wani."],
            ["Refrigeration cycle (zagayen sanyaya)", "zagayen da refrigerant ke bi: compressor, condenser, metering device, evaporator."],
            ["Compressor", "famfon da ke matse tururin refrigerant don ya yi zafi kuma matsinsa ya yi yawa."],
            ["Condenser", "coil inda refrigerant ke fitar da zafi ya koma ruwa; a waje yake a AC na gida."],
            ["Metering device", "sashen (sau da yawa expansion valve) da ke rage matsin refrigerant don ya yi sanyi."],
            ["Evaporator", "coil inda refrigerant ke shanye zafi ya koma tururi; a ciki yake a AC na gida."],
            ["Reversing valve", "sashen heat pump da ke canja hanyar refrigerant don dumama."]
          ],
          slides: [
            { title: "AC yana motsa zafi; ba ya yin sanyi", bullets: ["Refrigerant yana ɗaukar zafi a zagaye a rufe", "Zafi yana tafiya daga ciki zuwa waje"] },
            { title: "Zagayen, bisa jeri", bullets: ["1. Compressor: tururi mai zafi, matsi mai yawa", "2. Condenser: yana fitar da zafi, ya koma ruwa", "3. Metering device: matsi ya ragu, ya yi sanyi", "4. Evaporator: yana shanye zafin ɗaki, ya koma tururi"] },
            { title: "Heat pumps", bullets: ["Sassa huɗu iri ɗaya", "Reversing valve yana juya shi don dumama"] },
            { title: "Dalilin da yasa ƙwararru ke koyon wannan", bullets: ["Zagayen yana bayyana yawancin matsaloli", "Misali: coil na waje mai datti = zafi ba zai iya fita ba"] }
          ],
          tryIt: "Ba tare da dubawa ba, ku zana da'ira a takarda ku rubuta sassa huɗu na zagayen a kewaye da ita bisa jeri: compressor, condenser, metering device, evaporator. Ku zana kibiyoyi. Ku nuna waɗanne sassa ne a waje da waɗanne a ciki, ku rubuta \"zafi\" ko \"sanyi\" kusa da kowanne. Sannan ku kwatanta zanenku da darasin. Ku ajiye shi: shi ne sashe na 1 na aikinku na ƙarshe.",
          youCanNow: "bin zagayen sanyaya bisa jeri da faɗin aikin kowane ɗaya daga cikin manyan sassa huɗu.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne ke fitar da zafi a wajen gida?", options: ["Evaporator", "Thermostat", "Matatar iska", "Condenser"], answer: 3, why: "Condenser shi ne coil na waje, inda refrigerant ke fitar da zafinsa ya koma ruwa." },
            { objective: "O1", q: "A zagayen, me ke zuwa nan take bayan metering device?", options: ["Compressor", "Evaporator", "Condenser", "Thermostat"], answer: 1, why: "Ruwa mai sanyi daga metering device yana shiga evaporator don shanye zafi daga iskar ɗaki." }
          ]
        },
        {
          title: "Karanta lambobi: matatar iska, nameplate da zafin iska",
          objectives: ["O3"],
          minutes: 6,
          goal: "Karanta girman matatar iska da alamar bayanin na'ura (nameplate), da yin lissafin HVAC mai sauƙi.",
          text: [
            "Ana buga girman matatar iska a gefenta, kamar 16 x 25 x 1. Ma'anarsa inci 16 da inci 25, kuma kaurinta inci 1. Kibiya tana nuna hanyar da iska ke bi: tana nuna wajen blower, nesa da kofar return. Matatar da aka saka a juye ko marar girman da ya dace tana bar datti ya shiga na'urar.",
            "Kowace na'ura tana da nameplate (alamar ƙarfe ko sitika) mai lambar model da lambar serial, volts da take aiki da su, ƙimomin lantarki a amps, da irin refrigerant da yawansa. Ƙwararru suna karanta nameplate kafin su yi odar kayan gyara ko su duba wutar lantarki. Ana yawan faɗin girman sanyaya a BTU a kowace awa ko a tons. Ton ɗaya na sanyaya shi ne BTU 12,000 a kowace awa, don haka na'urar BTU 36,000 na'ura ce ta ton 3.",
            "Bambancin zafi (temperature split) gwaji ne mai sauƙi: ku auna iskar da ke shiga return da iskar da ke fitowa daga kofar supply, sannan ku cire ɗaya daga ɗaya. Idan iskar return 75°F ce, iskar supply kuma 57°F, bambancin shi ne 18°F. Matakin da ya dace ya dogara da tsarin da yanayi; malaminku da takardun mai ƙera na'urar za su faɗa muku abin da za ku yi tsammani. A yanzu kuna atisayen karatu da lissafi ne kawai.",
            "Atisaye kawai: duk lambobin wannan darasi an ƙirƙira su ne don koyo. Kada ku buɗe murfin kowace na'ura don neman nameplate; ku karanta wanda kuke iya gani daga waje, ko ku duba hoto."
          ],
          steps: [
            "Matatar iska: ku karanta lambobi uku (faɗi x tsawo x kauri) ku nemo kibiyar hanyar iska.",
            "Nameplate: ku nemo lambar model da ta serial, volts, amps da irin refrigerant.",
            "Girma: ku raba BTU a kowace awa da 12,000 don samun tons.",
            "Bambancin zafi: zafin iskar return ku cire zafin iskar supply."
          ],
          words: [
            ["Nameplate", "alamar da ke kan na'ura mai model, lambar serial, ƙimomin lantarki da irin refrigerant."],
            ["BTU", "British thermal unit: ma'aunin zafi. Ana faɗin girman sanyaya da dumama a BTU a kowace awa."],
            ["Ton (na sanyaya)", "BTU 12,000 a kowace awa na sanyaya. Na'urar ton 2 ita ce BTU 24,000 a kowace awa."],
            ["Volts da amps", "volts su ne turawar lantarki; amps su ne yawan wutar lantarki da ke gudana."],
            ["Iskar return da iskar supply", "iskar return ita ce wadda ake jawowa daga ɗakuna; iskar supply ita ce wadda ake turawa zuwa ɗakuna."],
            ["Temperature split (bambancin zafi)", "bambanci tsakanin zafin iskar return da na iskar supply."]
          ],
          slides: [
            { title: "Girman matatar iska", bullets: ["16 x 25 x 1 = inci 16 da inci 25, kauri inci 1", "Kibiya tana nuna wajen blower", "Marar girman da ya dace ko a juye tana bar datti ya shiga"] },
            { title: "Nameplate", bullets: ["Lambar model da ta serial", "Volts da amps", "Irin refrigerant da yawansa"] },
            { title: "Tons da BTU", bullets: ["Ton 1 = BTU 12,000 a kowace awa", "BTU 36,000 = tons 3", "Ku raba BTU da 12,000"] },
            { title: "Bambancin zafi", bullets: ["Iskar return a cire iskar supply", "75°F - 57°F = 18°F", "Matakin da ya dace: daga malaminku da mai ƙera na'urar"] }
          ],
          tryIt: "Atisaye kawai. Ku warware ku rubuta aikinku: (1) Wata matatar iska tana cewa 20 x 20 x 1. Kaurinta nawa ne? (2) Wata na'ura BTU 24,000 ce a kowace awa. Tons nawa ce? (3) Wata na'ura BTU 60,000 ce a kowace awa. Tons nawa ce? (4) Iskar return 78°F, iskar supply 60°F. Bambancin nawa ne? (5) Ku nemo matatar iska a gidanku ko a hoto a intanet ku rubuta girmanta da inda kibiyar ke nunawa. Amsoshi: inci 1; tons 2; tons 5; 18°F.",
          youCanNow: "karanta girman matatar iska da nameplate, mayar da BTU zuwa tons, da lissafa bambancin zafi.",
          quickCheck: [
            { objective: "O3", q: "Wata na'ura tana da ƙimar BTU 48,000 a kowace awa. Tons nawa ce?", options: ["Tons 3", "Tons 6", "Tons 5", "Tons 4"], answer: 3, why: "48,000 a raba da 12,000 shi ne 4, don haka na'ura ce ta ton 4." },
            { objective: "O3", q: "Iskar return 76°F ce, iskar supply kuma 58°F. Bambancin zafi nawa ne?", options: ["16°F", "18°F", "134°F", "20°F"], answer: 1, why: "Ku cire: 76 a cire 58 shi ne 18°F." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda tsarin dumama da sanyaya iska yake aiki",
        questions: [
          { objective: "O1", q: "Mene ne ma'anar HVAC?", options: ["Zafi, kofofin iska da coils", "Sarrafa iska mai babban volts", "Dumama, shigar da iska da sanyaya iska (heating, ventilation and air conditioning)", "Shigar da iska da sanyaya gida"], answer: 2, why: "HVAC shi ne heating, ventilation and air conditioning; HVACR ya ƙara refrigeration." },
          { objective: "O1", q: "Ta yaya na'urar sanyaya iska ke sanyaya gida?", options: ["Tana motsa zafi daga ciki zuwa waje", "Tana yin iska mai sanyi daga babu komai", "Tana ƙara sabon refrigerant kowace rana", "Tana jawo iskar waje mai sanyi"], answer: 0, why: "Refrigerant yana ɗaukar zafi a ciki ya fitar da shi a waje." },
          { objective: "O1", q: "Wane sashe ne ke matse tururin refrigerant don ya yi zafi kuma matsinsa ya yi yawa?", options: ["Evaporator", "Matatar iska", "Metering device", "Compressor"], answer: 3, why: "Compressor shi ne famfon da ke matse tururin a farkon zagayen." },
          { objective: "O3", q: "An rubuta 20 x 25 x 4 a kan matatar iska. Me lamba 4 ke gaya muku?", options: ["Tana ɗaukar watanni 4", "Kaurinta inci 4 ne", "Akwai guda 4 a cikin kwali", "Matakinta na 4 ne"], answer: 1, why: "Lamba ta uku ita ce kauri a inci." },
          { objective: "O3", q: "A ina za ku sami irin refrigerant da ƙimomin lantarki na na'ura?", options: ["A allon thermostat", "A kan matatar iska", "A kan kofar supply", "A kan nameplate na na'urar"], answer: 3, why: "Nameplate yana jera model, lambar serial, volts, amps da refrigerant." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsaro, takardar shaida da hanyarku",
      lessons: [
        {
          title: "Kiyaye kai a aikin HVAC",
          objectives: ["O2"],
          minutes: 6,
          goal: "Jera manyan haɗarin aikin HVAC da kariyar kowanne.",
          text: [
            "Ƙwararrun HVAC suna cikin ayyukan da suka fi yawan raunuka, a cewar Hukumar Ƙididdigar Ma'aikata ta Amurka (US Bureau of Labor Statistics, BLS). Tsaro ne farko a kowane aiki. Aikin hannu a wannan sana'a ana koyon sa ne kawai a horo a ƙarƙashin kulawa, da kayan kariya da suka dace.",
            "Wutar lantarki: na'urori suna aiki da wutar gida ko wadda ta fi ta ƙarfi, kuma wasu sassa (kamar capacitors) suna iya riƙe wuta bayan an kashe wutar. A wurin aiki, ƙwararrun da aka horar suna kashe wutar, su kulle ta su ɗaura mata alama (tag) don kada kowa ya kunna ta, kuma su gwada cewa ta mutu da gaske kafin su taɓa komai. Dokar lockout/tagout ta OSHA (29 CFR 1910.147) ta bayyana waɗannan matakai.",
            "Refrigerant: yana ƙarƙashin matsi kuma yana iya jawo ƙonewar sanyi (frostbite) da raunin ido; a ƙaramin wuri a rufe yana iya korar iskar oxygen da kuke buƙata don numfashi. Ƙwararru suna saka gilashin kariya ko goggles da safar hannu, kuma mutanen da aka horar masu takardar shaida ne kawai ke taɓa shi.",
            "Sauran haɗari: rufin gida (attic) mai zafi da ƙananan wuraren ƙarƙashin gida (cutar zafi), tsani da rufi (faɗuwa), manyan na'urori (ciwon baya), gefen ƙarfen faranti mai kaifi (yankewa) da aikin wuta da ake kira brazing (ƙonewa da gobara). Kariyar: ruwa da hutu, amfani da tsani lafiya, ɗaukar kaya da ƙafafu ko da taimako, safar hannu mai hana yankewa, da na'urar kashe gobara a kusa."
          ],
          steps: [
            "Ku karanta takardar aiki (work order) ku tambayi menene aikin.",
            "Ku nemi haɗari: wuta, refrigerant, zafi, tsawo, gefe mai kaifi, gobara.",
            "Ku saka kariyar da aikin ke buƙata: gilashin kariya, safar hannu, takalman kariya.",
            "Ƙwararrun da aka horar kaɗai: a kashe wuta, a kulle, a ɗaura alama, sannan a gwada kafin a taɓa.",
            "Idan wani abu bai bayyana ba, ku tsaya ku tambayi babban ƙwararrenku."
          ],
          words: [
            ["Haɗari", "duk abin da zai iya cutar da ku ko wani."],
            ["PPE", "kayan kariya na kai (personal protective equipment): gilashin kariya, safar hannu, takalma, kariyar kunne da makamantansu."],
            ["Lockout/tagout", "kashe wuta da saka makulli da alama a maɓallin don kada kowa ya kunna shi lokacin aikin."],
            ["Capacitor", "sashen lantarki da ke ajiye wuta kuma zai iya jan ku ko da bayan an kashe wutar."],
            ["Brazing", "haɗa bututun tagulla da wuta da ƙarfen cikawa; yana da zafi sosai da haɗarin gobara."],
            ["Cutar zafi", "rashin lafiya daga aiki a zafi mai tsanani, kamar gajiyar zafi (heat exhaustion) ko bugun zafi (heat stroke)."]
          ],
          slides: [
            { title: "Tsaro farko, a kowane aiki", bullets: ["Ɗaya daga cikin ayyukan da suka fi yawan raunuka (BLS)", "Aikin hannu: a horo a ƙarƙashin kulawa kawai"] },
            { title: "Wutar lantarki", bullets: ["Kashe wuta, kulle, ɗaura alama", "Ku gwada kafin ku taɓa", "Capacitors suna iya riƙe wuta"] },
            { title: "Refrigerant", bullets: ["Yana ƙarƙashin matsi: ƙonewar sanyi da raunin ido", "Yana iya korar oxygen a wuri a rufe", "Goggles, safar hannu, ƙwararru masu takardar shaida kaɗai"] },
            { title: "Zafi, tsawo, ƙarfe, gobara", bullets: ["Attic mai zafi: ruwa da hutu", "Tsani da rufi: hawa lafiya", "Ƙarfen faranti: safar hannu mai hana yankewa", "Brazing: na'urar kashe gobara a kusa"] }
          ],
          sources: [
            { name: "Hukumar Ƙididdigar Ma'aikata ta Amurka (BLS): Heating, air conditioning and refrigeration mechanics and installers", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
            { name: "OSHA: Sarrafa makamashi mai haɗari (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Ku karanta wannan aiki: \"Na'urar sanyaya iskar wani abokin ciniki ta tsaya a ranar da zafi ya kai 95°F. Na'urar waje tana gefen gida. Air handler yana cikin attic mai zafi da ake hawa ta tsanin da ake jawowa ƙasa.\" A takarda, ku yi rukuni biyu: Haɗari da Kariya. Ku jera aƙalla haɗari biyar da mataki na tsaro ko kayan kariyar kowanne. Ku ajiye shi: shi ne sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "jera manyan haɗarin aikin HVAC da haɗa kowanne da kariyar da ta dace.",
          quickCheck: [
            { objective: "O2", q: "Me yasa ƙwararrun da aka horar ke kulle wuta su ɗaura mata alama kafin su yi aiki a cikin na'ura?", options: ["Don kada kowa ya sake kunna wutar lokacin aikin", "Don rage wa abokin ciniki kuɗi", "Don na'urar ta fi sanyaya da sauri daga baya", "Domin thermostat yana buƙatar sake saitawa"], answer: 0, why: "Lockout/tagout yana sa wutar ta kasance a kashe har sai wanda ya kulle ta ya cire makullin." },
            { objective: "O2", q: "Refrigerant ya fesa kan hannun wani ma'aikaci. Wane rauni zai iya jawowa?", options: ["Ƙonewar rana", "Tsinke", "Ƙonewar sanyi (frostbite)", "Babu komai; ba ya cutarwa"], answer: 2, why: "Refrigerant da ya fito daga matsi yana yin sanyi ƙwarai kuma zai iya daskarar da fata." }
          ]
        },
        {
          title: "Takardar shaidar EPA Section 608 da dokokin refrigerant",
          objectives: ["O4"],
          minutes: 6,
          goal: "Haɗa na'urori da irin takardar shaidar EPA Section 608 da ta dace, da faɗin manyan dokokin refrigerant.",
          text: [
            "A ƙarƙashin Section 608 na dokar tarayya ta Clean Air Act (Dokar Tsabtar Iska), ƙwararrun da ke kula, yin hidima, gyara ko zubar da na'urorin da za su iya sakin refrigerant cikin iska dole ne su sami takardar shaida daga shirin Hukumar Kare Muhalli ta Amurka (US Environmental Protection Agency, EPA). Akwai iri huɗu. Type I: ƙananan na'urori (kamar AC na taga ko firjin gida). Type II: na'urori masu matsi mai yawa da mai yawa ƙwarai (kamar yawancin AC na tsakiya na gida da heat pumps). Type III: na'urori masu ƙaramin matsi (kamar wasu manyan chillers a manyan gine-gine). Universal: dukansu.",
            "Kowace jarabawa tana da sashen Core kan dokoki da tsaro, da sashen irin takardar. Ƙungiyoyin ba da shaida da EPA ta amince da su ne ke ba da jarabawar; EPA da kanta ba ta ba da jarabawar ko katin. A cewar EPA, takardar shaidar Section 608 ba ta ƙarewa. Don samun Universal, dole a ɗauki Core a matsayin jarabawa mai sa ido (proctored).",
            "Dokoki biyu da za ku sani yanzu: haramun ne bisa doka a saki (vent) refrigerant cikin iska da gangan lokacin hidima ko zubar da na'ura, kuma gaba ɗaya ana iya sayar da refrigerant na waɗannan na'urori ga ƙwararru masu takardar shaida da masu ɗaukar su aiki kaɗai. AC na mota yana ƙarƙashin wata takardar shaida daban, Section 609.",
            "Wannan kwas ɗin yana shirya ku don ra'ayoyin jarabawar. Ba ya ba ku takardar shaida. Ku duba shafukan Section 608 na EPA don dokokin yanzu da jerin ƙungiyoyin ba da shaida da aka amince da su, kuma ku tambayi shirin horonku wace jarabawa yake bayarwa."
          ],
          words: [
            ["EPA", "Hukumar Kare Muhalli ta Amurka (US Environmental Protection Agency), hukumar tarayya da ke yin dokokin refrigerant."],
            ["Section 608", "sashen Clean Air Act da ya shafi refrigerant a na'urori da ba sa motsi, kamar tsarin gidaje da gine-gine."],
            ["Ƙungiyar ba da shaida (certifying organization)", "ƙungiyar da EPA ta amince ta ba da jarabawar Section 608 da katin."],
            ["Core", "sashen kowace jarabawar Section 608 da ya shafi dokoki, tsaro da ilimin refrigerant na asali."],
            ["Venting", "barin refrigerant ya fita cikin iska. Yin haka da gangan lokacin hidima haramun ne bisa doka."],
            ["Proctored", "ana ɗaukar ta yayin da mai sa ido ke kallo, a gaban ido ko ta intanet."],
            ["Section 609", "wata takardar shaida daban don aiki kan AC na mota da babbar mota."]
          ],
          slides: [
            { title: "Wane ne ke buƙatar ta", bullets: ["Ƙwararrun da ke hidima ko zubar da na'urori masu refrigerant", "Dokar tarayya: Clean Air Act Section 608"] },
            { title: "Iri huɗu", bullets: ["Type I: ƙananan na'urori", "Type II: matsi mai yawa (yawancin AC na tsakiya na gida)", "Type III: ƙaramin matsi (wasu manyan chillers)", "Universal: dukan iri"] },
            { title: "Yadda ake samun ta", bullets: ["Ku ci jarabawa daga ƙungiyar da EPA ta amince da ita", "Sashen Core da sashen irin ku", "EPA ta ce ba ta ƙarewa"] },
            { title: "Dokokin da za ku sani yanzu", bullets: ["Kada ku taɓa sakin refrigerant da gangan", "Ana sayarwa ga ƙwararru masu shaida da masu ɗaukar su aiki kaɗai", "AC na mota Section 609 ne, wata jarabawa daban"] }
          ],
          sources: [
            { name: "EPA: Takardar shaidar ƙwararru ta Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "EPA: Buƙatun takardar shaidar ƙwararru ta Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-requirements" },
            { name: "EPA: Haramcin sakin refrigerant (venting)", url: "https://www.epa.gov/section608/stationary-refrigeration-prohibition-venting-refrigerants" },
            { name: "EPA: Iyakance sayar da refrigerant", url: "https://www.epa.gov/section608/refrigerant-sales-restriction" }
          ],
          tryIt: "Ku haɗa kowane aiki da irin takardar shaida ku rubuta: (1) gyaran AC na taga; (2) hidimar AC na tsakiya na gida; (3) hidimar babban chiller mai ƙaramin matsi a asibiti; (4) fitar da refrigerant daga tsohon firjin gida; (5) ƙwararren da ke son yin aiki kan dukansu. Amsoshi: Type I, Type II, Type III, Type I, Universal. Sannan ku buɗe shafukan Section 608 na EPA ku rubuta sunan ƙungiyar ba da shaida ɗaya da aka amince da ita.",
          youCanNow: "haɗa na'urori da irin Section 608 da ya dace, da faɗin dokokin sakin refrigerant da na sayarwa.",
          quickCheck: [
            { objective: "O4", q: "Wani ƙwararre zai yi hidimar AC na tsakiya na gidaje masu amfani da refrigerant mai matsi mai yawa. Wane iri ne ya dace?", options: ["Type I", "Type III", "Type II", "Section 609"], answer: 2, why: "Type II ya shafi na'urori masu matsi mai yawa da mai yawa ƙwarai, har da yawancin AC na tsakiya na gida." },
            { objective: "O4", q: "Wane ne ke ba ku takardar shaidar EPA Section 608?", options: ["Wannan kwas ɗin, idan kun gama shi", "Mai gidan da kuke yi wa aiki", "Kowane shagon kayan aiki", "Ƙungiyar ba da shaida da EPA ta amince da ita, bayan kun ci jarabawarta"], answer: 3, why: "Ƙungiyar ba da shaida da EPA ta amince da ita ce kaɗai ke ba da jarabawar da takardar shaidar." }
          ]
        },
        {
          title: "Hanyarku zuwa HVAC, da ranaku",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta tsari mai ranaku don samun horo, takardar shaida da aiki a matsayin mataimakin HVAC ko ɗan koyon sana'a.",
          text: [
            "Akwai hanyoyi uku da aka saba bi. Ƙwararru da yawa suna kammala shiri a makarantar sana'a ko kwalejin al'umma (community college), wanda BLS ta ce yawanci yana ɗaukar watanni 6 zuwa shekaru 2 kuma sau da yawa yana haɗa da jarabawar EPA. Wasu suna shiga apprenticeship (koyon sana'a): aiki mai albashi tare da malami mai jagoranci da azuzuwa, wanda yawanci yana ɗaukar shekaru da yawa. Wasu masu ɗaukar aiki suna ɗaukar mataimaka masu takardar sakandare ko GED (takardar daidai da sakandare) su horar da su a wurin aiki.",
            "Wasu jihohi da birane suna buƙatar lasisin HVAC, kuma dokokin sun bambanta. Ku nemo hukumar ba da lasisi ta jiharku ko birninku, ko ku yi amfani da mai neman lasisi na CareerOneStop, ku rubuta ainihin abin da yake buƙata. Masu ɗaukar aiki da yawa suna kuma son lasisin tuƙi, wasu kuma sun fi son takardun shaida na masana'antu ko na masu ƙera na'urori daga baya, waɗanda ba dole ba ne.",
            "Kafin ku biya kowane shiri, ku tambaya: Yana haɗa da jarabawar EPA Section 608? Nawa ne daga cikin waɗanda suka kammala ke samun aikin HVAC? Yana taimakawa wajen samun aiki? Tsofaffin sojoji za su iya tambayar VA (hukumar tsofaffin sojoji) game da amfani da tallafin GI Bill don horo ko koyon sana'a. Idan kuna da tarihin laifi, ku tambayi hukumar ba da lasisi yadda take duba tarihi, ku kuma nemi masu ɗaukar aiki da ke ba da dama ta biyu.",
            "Tsari mai ranaku yana mayar da buri zuwa matakai. Ku rubuta kowane mataki, inda kuka tabbatar da shi, da ranar da za ku yi shi."
          ],
          steps: [
            "Ku rubuta burinku, misali \"aikin mataimakin HVAC kafin watan Yuni\".",
            "Ku zaɓi irin EPA Section 608 (masu farawa da yawa suna nufin Type II ko Universal) da ƙungiyar ba da shaida da aka amince da ita.",
            "Ku nemo shirye-shiryen horo biyu ko na koyon sana'a kusa da ku a apprenticeship.gov ko shafin kwalejin al'umma; ku rubuta ranakun neman shiga.",
            "Ku duba dokokin lasisi na jiharku ko birninku a shafin hukuma ku rubuta abin da suke buƙata.",
            "Ku ƙara ranaku don karatu, jarabawa, neman aiki da sabunta takardar bayanin aikinku (résumé)."
          ],
          words: [
            ["Apprenticeship (koyon sana'a)", "aiki mai albashi inda kuke koyon sana'a daga ƙwararrun ma'aikata, tare da azuzuwa."],
            ["Mataimaki ko mai koyo (helper ko trainee)", "ma'aikacin HVAC na matakin farko da ke taimakon ƙwararre yayin da yake koyo."],
            ["Hukumar ba da lasisi (licensing board)", "ofishin jiha ko birni da ke yanke wanda zai iya yin wasu ayyukan sana'a kuma yake ba da lasisi."],
            ["CareerOneStop", "shafin intanet kyauta na Ma'aikatar Ƙwadago ta Amurka mai bayanai kan aiki, horo da lasisi."]
          ],
          slides: [
            { title: "Hanyoyi uku na shiga", bullets: ["Makarantar sana'a ko kwalejin al'umma", "Koyon sana'a: aiki mai albashi da azuzuwa", "Aikin mataimaki da horo a wurin aiki"] },
            { title: "Lasisi ya bambanta da wuri", bullets: ["Wasu jihohi da birane suna buƙatar lasisi", "Ku duba hukumar ba da lasisi ta hukuma", "Ku rubuta ainihin abin da take buƙata"] },
            { title: "Kafin ku biya", bullets: ["Jarabawar EPA tana ciki?", "Nawa daga cikin waɗanda suka kammala ke samun aikin HVAC?", "Tsofaffin sojoji: ku tambayi VA game da GI Bill"] },
            { title: "Tsarinku", bullets: ["Buri, irin EPA, ƙungiyar ba da shaida", "Shirye-shirye biyu da ranakun neman shiga", "Dokokin lasisi daga shafin hukuma", "Rana ga kowane mataki"] }
          ],
          sources: [
            { name: "Hukumar Ƙididdigar Ma'aikata ta Amurka (BLS): HVAC mechanics and installers, How to Become One", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm#tab-4" },
            { name: "Apprenticeship.gov: Mai neman aikin koyon sana'a (Apprenticeship Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Mai neman lasisi (License finder)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" },
            { name: "EPA: Takardar shaidar ƙwararru ta Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarinku na farawa a HVAC. Ku haɗa zanenku na zagayen sanyaya (Darasi na 2) da jerin haɗarinku (Darasi na 4). Sannan ku rubuta tsarinku mai ranaku: burinku, irin Section 608 da za ku ɗauka da ƙungiyar ba da shaida ɗaya da aka amince da ita, shirye-shiryen horo biyu ko na koyon sana'a kusa da ku da ranakun neman shiga, abin da jiharku ko birninku ke buƙata don lasisin HVAC (da adireshin shafin da kuka duba), da rana ga kowane mataki.",
          youCanNow: "bin tsarinku mai ranaku don samun horo, ɗaukar jarabawar EPA Section 608 da neman aikin HVAC.",
          quickCheck: [
            { objective: "O5", q: "A ina ya kamata ku duba ko jiharku tana buƙatar lasisin HVAC?", options: ["Wani rubutu a kafofin sada zumunta", "Shafin hukuma na hukumar ba da lasisi ta jiharku ko birninku", "Tallar wata makarantar horo", "Wani aboki da ya taɓa aikin HVAC"], answer: 1, why: "Dokokin lasisi sun bambanta da wuri kuma suna canjawa, don haka hukumar hukuma ce wurin dubawa." },
            { objective: "O5", q: "Wane mataki na tsari aka rubuta mafi amfani?", options: ["\"Samun takardar shaida wata rana\"", "\"Duba batun HVAC\"", "\"Yin karatu sosai\"", "\"Ɗaukar jarabawar EPA Type II a ƙungiyar da aka amince da ita kafin 15 ga Maris\""], answer: 3, why: "Mataki mai amfani yana faɗin ainihin abin da za a yi, da wa za a yi, da rana." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsaro, takardar shaida da hanyarku",
        questions: [
          { objective: "O2", q: "Kafin ƙwararren da aka horar ya taɓa wayoyin wuta a cikin na'ura, mene ne gwaji na ƙarshe?", options: ["Tambayar abokin ciniki ko an kashe", "Gwada cewa wutar ta mutu da gaske", "Rage thermostat", "Jira daƙiƙa biyar"], answer: 1, why: "Bayan kulle wuta da ɗaura alama, ƙwararru suna gwadawa kafin su taɓa, domin maɓallin da ba daidai ba ko wutar da aka ajiye na iya jan su." },
          { objective: "O2", q: "An tura ku cikin attic mai zafi a lokacin zafi. Wace kariya ce ta fi muhimmanci don zafi?", options: ["Ruwa da hutu akai-akai", "Kariyar kunne", "Hular walda", "Takalman ƙarfe kawai"], answer: 0, why: "Ruwa, hutu da lura da alamun cutar zafi suna kare ku a wurare masu zafi." },
          { objective: "O4", q: "Firjin gida ƙaramar na'ura ce. Wane irin Section 608 ne ya shafe shi?", options: ["Type II", "Type III", "Type I", "Section 609"], answer: 2, why: "Type I ya shafi ƙananan na'urori kamar firjin gida da AC na taga." },
          { objective: "O4", q: "Me EPA ta ce game da sakin refrigerant cikin iska da gangan lokacin hidima?", options: ["Ba laifi a waje", "Ba laifi idan kaɗan ne", "Ba laifi idan mai na'urar ya yarda", "Haramun ne bisa doka"], answer: 3, why: "Dokokin EPA sun haramta sakin refrigerant da gangan lokacin hidima, gyara ko zubarwa." },
          { objective: "O5", q: "Wata makaranta tana ba da kwas ɗin HVAC mai sauri. Wace tambaya ce ta fi taimaka muku kafin ku biya?", options: ["Yana haɗa da jarabawar EPA Section 608, kuma nawa daga cikin waɗanda suka kammala ke samun aikin HVAC?", "Wane launi ne kayan aikinsu?", "Ginin sabo ne?", "Zan iya farawa ranar Litinin?"], answer: 0, why: "Ko shirin yana kai ga takardar shaida da aiki yana gaya muku ko ya cancanci kuɗin." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Ƙwararren HVAC",
    questions: [
      { objective: "O1", q: "A HVAC, mene ne \"V\" ke nufi?", options: ["Voltage (ƙarfin lantarki)", "Ventilation (shigar da iska)", "Valve (bawul)", "Vapor (tururi)"], answer: 1, why: "HVAC shi ne heating, ventilation and air conditioning." },
      { objective: "O1", q: "Me fanka mai hura iska (blower) ke yi?", options: ["Yana motsa iska ta cikin ducts", "Yana matse refrigerant", "Yana sarrafa saitin zafi", "Yana tsabtace coil na waje"], answer: 0, why: "Blower yana tura iska kan coil da ta cikin ducts zuwa ɗakuna." },
      { objective: "O1", q: "Wane sashe ne ke fitar da zafi a waje?", options: ["Evaporator", "Kofar return", "Condenser", "Thermostat"], answer: 2, why: "Condenser shi ne coil na waje inda zafi ke barin refrigerant." },
      { objective: "O1", q: "Wane ne jerin zagayen sanyaya da ya dace?", options: ["Evaporator, compressor, metering device, condenser", "Compressor, metering device, condenser, evaporator", "Condenser, compressor, evaporator, metering device", "Compressor, condenser, metering device, evaporator"], answer: 3, why: "Refrigerant yana tafiya daga compressor zuwa condenser, ta metering device, cikin evaporator, sannan ya dawo." },
      { objective: "O1", q: "Me ke bar heat pump ya dumama gida a lokacin sanyi?", options: ["Matatar iska mafi girma", "Reversing valve da ke juya zagayen", "Thermostat na biyu", "Ƙara ruwa a cikin refrigerant"], answer: 1, why: "Reversing valve yana tura refrigerant ta ɗaya hanyar, don haka ana ɗaukar zafi a waje a fitar da shi a ciki." },
      { objective: "O3", q: "Wata na'ura tana da ƙimar BTU 36,000 a kowace awa. Tons nawa ke nan?", options: ["Tons 2", "Tons 4", "Tons 3", "Tons 36"], answer: 2, why: "36,000 a raba da 12,000 shi ne 3." },
      { objective: "O3", q: "Iskar return 80°F ce, iskar supply kuma 62°F. Bambancin zafi nawa ne?", options: ["22°F", "142°F", "16°F", "18°F"], answer: 3, why: "80 a cire 62 shi ne 18°F." },
      { objective: "O3", q: "Wajen ina kibiyar da ke kan matatar iska ke nunawa?", options: ["Wajen blower, a hanyar da iska ke bi", "Wajen ragar kofar return", "Sama, koyaushe", "Ba shi da muhimmanci"], answer: 0, why: "Kibiyar tana nuna hanyar iska, wajen blower da na'ura." },
      { objective: "O2", q: "Wane haɗari ne zai iya jan ma'aikaci ko da bayan an kashe wuta?", options: ["Matatar iska mai tsabta", "Capacitor mai ɗauke da wuta", "Murfin kofar iska na roba", "Batirin thermostat"], answer: 1, why: "Capacitors suna ajiye wuta, shi yasa ƙwararrun da aka horar ke gwadawa kafin su taɓa." },
      { objective: "O2", q: "Mene ne amfanin lockout/tagout?", options: ["Kulle ƙofar abokin ciniki", "Nuna wace matatar iska za a saya", "Sa wuta ta kasance a kashe don kada kowa ya kunna ta lokacin aikin", "Hanzarta gyaran"], answer: 2, why: "Makulli da alama a maɓallin suna sa na'urar ta kasance a kashe har sai ma'aikacin da ya saka su ya cire su." },
      { objective: "O2", q: "Me yasa refrigerant yake da haɗari a ƙaramin wuri a rufe?", options: ["Yana da wari mara daɗi", "Yana sa ɗakin ya yi haske sosai", "Yana da ɗanko", "Yana iya korar oxygen da kuke buƙata don numfashi"], answer: 3, why: "Babban ɗigo a wuri a rufe zai iya maye gurbin oxygen." },
      { objective: "O2", q: "Dole ne ku yanka ku daidaita duct na ƙarfen faranti. Wace kariya ce ta dace da wannan haɗari?", options: ["Safar hannu mai hana yankewa da gilashin kariya", "Tabarau na rana kawai", "Babu kayan kariya; aiki ne mai sauri", "Toshewar kunne kawai"], answer: 0, why: "Gefen ƙarfen faranti yana da kaifi, kuma ɓuraɓuran ƙarfe na iya tashi, don haka ana buƙatar safar hannu da kariyar ido." },
      { objective: "O4", q: "Wace doka ce ke buƙatar ƙwararrun da ke taɓa refrigerant a tsarin gidaje da gine-gine su sami takardar shaida?", options: ["Fair Labor Standards Act (dokar ma'aunin aiki)", "Section 608 na Clean Air Act", "Highway Safety Act (dokar tsaron hanya)", "Clean Water Act (dokar tsabtar ruwa)"], answer: 1, why: "Shirin Section 608 na EPA ya fito ne daga Clean Air Act." },
      { objective: "O4", q: "Wane irin Section 608 ne ke bar ku yin aiki kan dukan nau'o'in na'urorin da ba sa motsi?", options: ["Type I", "Type II", "Type III", "Universal"], answer: 3, why: "Universal ya shafi Type I, II da III." },
      { objective: "O4", q: "Babban chiller mai ƙaramin matsi a asibiti yana buƙatar hidima. Wane iri ne ya shafe shi?", options: ["Type III", "Type I", "Type II", "Section 609"], answer: 0, why: "Type III ya shafi na'urori masu ƙaramin matsi kamar wasu manyan chillers." },
      { objective: "O4", q: "Me EPA ta ce game da tsawon lokacin da takardar shaidar Section 608 ke ɗauka?", options: ["Shekara ɗaya", "Shekaru biyar", "Ba ta ƙarewa", "Har sai kun canja aiki"], answer: 2, why: "EPA ta faɗi cewa takardar shaidar ƙwararru ta Section 608 ba ta ƙarewa." },
      { objective: "O5", q: "Wannan kwas ɗin zai:", options: ["Ba ku lasisin HVAC", "Shirya ku don horo da jarabawa; ba ya ba ku takardar shaida ko lasisi", "Zama jarabawarku ta EPA", "Maye gurbin koyon sana'a"], answer: 1, why: "Takardar shaida tana zuwa daga jarabawar ƙungiyar da EPA ta amince da ita, lasisi kuma daga jiharku ko birninku." },
      { objective: "O5", q: "Wace hanya ce mai albashi ta koyon HVAC da malami mai jagoranci tare da azuzuwa?", options: ["Bidiyo kyauta a intanet", "Garantin kaya", "Duba gida", "Koyon sana'a mai rajista (registered apprenticeship)"], answer: 3, why: "Koyon sana'a yana haɗa horo mai albashi a wurin aiki da karatu a aji." },
      { objective: "O5", q: "Wane shafi kyauta ne zai iya taimaka muku nemo koyon sana'a kusa da ku?", options: ["apprenticeship.gov", "Wani dandalin aiki da ba a sani ba", "Tallar da ke tasowa (pop-up)", "Wurin sharhin bidiyo"], answer: 0, why: "Apprenticeship.gov shafin Ma'aikatar Ƙwadago ta Amurka ne mai Apprenticeship Job Finder." },
      { objective: "O5", q: "Wane mataki na tsari ne ya cika?", options: ["\"Koyon HVAC\"", "\"Neman shiga wani wuri nan ba da jimawa ba\"", "\"Neman shiga shirin HVAC na kwalejin al'umma kafin 1 ga Afrilu, bayan duba jarabawar EPA da taimakon samun aiki\"", "\"Tunani game da lasisi\""], answer: 2, why: "Yana faɗin abin da za a yi, wurin, abin da aka duba da rana." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 6, 9, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Zanen zagayen sanyaya", objective: "O1", notYet: "Wasu sassa sun ɓace ko ba su cikin jerin da ya dace.", meets: "Duk sassa huɗu suna cikin jerin da ya dace da jimla ɗaya daidai kan aikin kowanne.", exceeds: "Yana kuma nuna ciki da waje, zafi da sanyi, kuma yana bayyana yadda heat pump ke juyawa." },
      { name: "Jerin haɗari", objective: "O2", notYet: "Haɗari ƙasa da biyar, ko kariyar ba ta dace da haɗarin ba.", meets: "Aƙalla haɗari biyar, kowanne da mataki na tsaro ko kayan kariya da suka dace.", exceeds: "Yana kuma jera matakan a jerin da ma'aikata za su bi, har da lockout/tagout da gwadawa kafin taɓawa." },
      { name: "Lambobin HVAC", objective: "O3", notYet: "Amsoshin atisaye suna da kurakurai a tons ko bambancin zafi.", meets: "Aƙalla 4 cikin 5 na atisaye daidai, da aikin da aka nuna.", exceeds: "Duk daidai, kuma mai koyo zai iya bayyana kibiyar matatar iska da karanta hoton nameplate na gaske." },
      { name: "Takardar shaida da ta dace", objective: "O4", notYet: "Tsarin yana faɗin irin Section 608 da bai dace da aikin ba, ko babu ƙungiyar ba da shaida.", meets: "Yana faɗin irin da ya dace da ayyukan da yake so da ƙungiyar ba da shaida ɗaya da EPA ta amince da ita.", exceeds: "Yana kuma faɗin dokar sakin refrigerant da iyakancewar sayarwa da kalmominsa." },
      { name: "Tsari mai ranaku daga majiyoyin hukuma", objective: "O5", notYet: "Matakai ba su da ranaku, ko dokokin lasisi sun fito ne daga talla ko rubutu a intanet.", meets: "Aƙalla matakai biyar masu ranaku, shirye-shirye biyu na gaske, da dokokin lasisi daga shafin hukuma tare da adireshinsa.", exceeds: "Yana kuma haɗa tambayoyin da aka yi wa kowane shiri da tsarin madadi, kamar aikin mataimaki yayin horo." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka ci jarabawar EPA Section 608 cikin watanni 6 (bisa faɗinsu a binciken biyo baya)",
      "Masu koyo da suka shiga shirin horon HVAC ko koyon sana'a cikin kwanaki 90",
      "Masu koyo da aka ɗauka aiki a matsayin mataimakan HVAC, masu koyo ko 'yan koyon sana'a cikin watanni 6",
      "Shirye-shiryen abokan aiki sun ce masu neman shiga suna zuwa da sanin sassa, kalmomi da matakan tsaro na asali"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don karanta shafukan EPA, BLS, apprenticeship.gov da na hukumar lasisi ta jiha",
      "Takarda, alƙalami da na'urar lissafi (na'urar lissafin waya ma ta isa)",
      "Ba dole ba: matatar iska da aka yi amfani da ita, ko hotunan matatar iska da nameplate na na'ura",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku sa duk atisaye ya kasance ba tare da taɓa na'ura ba: ba buɗe murfin na'ura, ba refrigerant, ba aikin wutar lantarki, ba brazing. Waɗannan ƙwarewa na shirin horo ne a ƙarƙashin kulawa da PPE.",
      "Idan za ku iya, ku kawo na'urar da aka yanke don a ga ciki, ko hotuna, ku sa masu koyo su nuna kowane sashe na zagayen.",
      "Ku gayyaci ɗan kwangilar HVAC na yankin, ƙungiyar ma'aikata (union) ko malamin kwalejin al'umma don yin magana game da aikin mataimaki da abin da suke nema.",
      "Ku taimaki kowane mai koyo ya nemo shafin lasisi na jiharsa ko birninsa; dokoki sun bambanta, don haka kada ku ba da amsa ɗaya ga dukan rukunin.",
      "Ga masu koyo masu tarihin laifi ko tsofaffin sojoji, ku haɗa su da hidimomin masu dawowa gida ko na tsofaffin sojoji; kada ku yi alƙawarin kowane sakamako daga hukumar ba da lasisi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
