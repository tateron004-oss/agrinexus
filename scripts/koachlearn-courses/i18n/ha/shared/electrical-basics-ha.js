"use strict";

// Koach Learn course, Hausa (ha) translation of shared/electrical-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "electrical-basics-ha",
  lang: "ha",
  translationOf: "electrical-basics",
  category: "Workforce Development",
  name: "Tushen Sana'ar Wutar Lantarki",
  skills: "Amfani da dokar Ohm da lissafin ƙarfin wuta, Karanta zanen da'irar wuta mai sauƙi, Bin lockout/tagout da gwadawa kafin taɓawa, Karanta tef ɗin awo da multimeter, Shirya hanyarku zuwa koyon sana'ar wutar lantarki",
  outcome: "yin lissafin wutar lantarki na farko, karanta da'irar wuta mai sauƙi, bayyana matakan tsaro da ke kare rayukan masu aikin wuta, ɗaukar awo daidai, da bin tsari mai ranaku don neman koyon sana'ar wutar lantarki (apprenticeship) da yin aiki don samun lasisi.",
  about: [
    "Masu aikin wutar lantarki (electricians) suna jan wuta a gidaje, ofisoshi, masana'antu, tsarin wutar rana (solar) da wuraren cajin mota. Yawancinsu suna koyon sana'ar ne a koyon aiki da ake biya (apprenticeship), kuma yawancin jihohi suna ba masu aikin wuta lasisi. Wannan kwas shi ne mataki na farko: na masu neman aiki ne, tsofaffin sojoji, matasa, masu dawowa gida daga gidan yari, baƙi da manyan da ke komawa karatu, waɗanda ke son shiga apprenticeship a shirye.",
    "Za ku koyi mene ne volts, amps, ohms da watts, kuma ku yi lissafi da dokar Ohm. Za ku karanta zanen da'irar wuta mai sauƙi, ku koyi dalilin da yasa ake jan wuta a gidaje yadda ake yi. Sannan za ku koyi matakan tsaro da kowane mai aikin wuta ke bi, kayan aiki da dabarun awo da masu koyo ke amfani da su tun rana ta farko, da yadda ake neman apprenticeship.",
    "Wannan kwas yana shirya ku ne. Ba ya ba ku lasisi ko takardar shaida, kuma ba zai taɓa neman ku yi aiki a kan wutar da ke kunne ba. Aikin wutar lantarki yana da haɗari kuma yana iya kashe mutum. Ana koyon jan wuta na gaske ne kawai a shirin da ake da mai kulawa, da kayan kariya da suka dace. Lasisi yana fitowa daga jiharku ko birninku.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\" da tambayoyi biyu masu sauri. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Aikinku na ƙarshe shi ne kundin farawarku na wutar lantarki tare da tsari mai ranaku."
  ],
  finalTask: "Ku yi kundin farawarku na wutar lantarki: (1) matsaloli biyar na dokar Ohm ko na ƙarfin wuta da kuka rubuta da kanku, an warware su kuma an nuna aikin; (2) zanen da'irar wuta mai sauƙi a jere ɗaya-ɗaya (parallel), mai alamar tushen wuta, breaker, makunni (switch), kayan amfani biyu, hot, neutral da ground; (3) matakai shida na lockout/tagout a rubuce bisa tsari a kan kati; (4) awo biyar na abubuwa a gida da tef, zuwa 1/16 inch mafi kusa; da (5) tsari mai ranaku don neman shirye-shiryen apprenticeship na wutar lantarki guda biyu, tare da dokokin lasisi na jiharku daga shafin hukuma.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke son sana'ar hannu ba tare da digiri na shekara huɗu ba: masu neman aiki, tsofaffin sojoji, matasa, masu dawowa gida daga gidan yari, baƙi da manyan da ke komawa karatu. Wasu sun taɓa yin aikin hannu ko na soja; yawancinsu ba su da horon wutar lantarki na hukuma.",
    startingPoint: "Suna iya lissafin lambobi cikakku da wasu ɓangarori (fractions), kuma sun san cewa wutar lantarki tana da haɗari. Yawancinsu ba su iya bayyana volts, amps ko ohms ba tukuna, ko amfani da dokar Ohm, karanta zanen da'ira ko bayyana lockout/tagout.",
    gap: "Shirye-shiryen apprenticeship sau da yawa suna gwada lissafi da karatu, kuma suna neman masu nema da suka san kalmomin farko kuma suke ɗaukar tsaro da muhimmanci. Masu koyo suna buƙatar tushen lissafi, kalmomin sana'a, halayen tsaro da tsari a sarari na nema, don su shiga kuma su zauna lafiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8); ana bayyana kowace kalmar sana'a",
      "Babu aiki a kan wutar da ke kunne: atisayen mita kaɗai da hannu shi ne a kan batir na gida na yau da kullum",
      "Na'urori: waya ko kwamfutar ɗakin karatu don shafukan hukuma; takarda, alƙalami, na'urar lissafi (calculator) da tef ɗin awo",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aiki da ganawa",
      "Lasisi ya bambanta bisa jiha da birni: masu koyo suna duba shafin hukuma na inda suke zaune"
    ],
    prerequisites: "Lissafin lambobi cikakku da ɓangarori masu sauƙi. Kwas ɗin \"Fara Sana'a a Ayyukan Hannu na Ƙwarewa\" yana taimaka wa masu koyo zaɓar sana'a; wannan kwas yana zurfafa cikin sana'ar wutar lantarki."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku ƙididdigar ƙirƙira ta wata da'ira", action: "lissafa volts, amps, ohms ko watts ta amfani da dokar Ohm da lissafin ƙarfin wuta", standard: "kuna samun aƙalla matsaloli 4 cikin 5 daidai, tare da nuna aikin" },
    { id: "O2", condition: "Idan aka ba ku zanen da'ira mai sauƙi", action: "faɗin sunan kowane sashe na da'irar da faɗin ko kayan amfanin suna a jere guda (series) ne ko a jere ɗaya-ɗaya (parallel)", standard: "tare da sunan kowane sashe daidai" },
    { id: "O3", condition: "Idan aka ba ku aikin da dole a gyara wata na'ura", action: "jera matakan lockout/tagout bisa tsari da faɗin manyan haɗurran wutar lantarki da kariyarsu", standard: "tare da dukkan matakai shida a tsarin da ya dace, da aƙalla haɗurra uku da aka haɗa su da kariyarsu" },
    { id: "O4", condition: "Ta amfani da tef ɗin awo kuma, idan kuna da shi, multimeter a kan batir na gida", action: "karanta awo zuwa 1/16 inch mafi kusa da karanta ƙarfin volts na batir", standard: "kuna samun aƙalla karatu 4 cikin 5 daidai" },
    { id: "O5", condition: "Ta amfani da shafukan intanet na hukuma na jiharku", action: "rubuta tsari mai ranaku don neman apprenticeship na wutar lantarki da yin aiki don samun lasisi", standard: "tare da shirye-shirye biyu na gaske, sharuɗɗansu da rana ga kowane mataki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda wutar lantarki ke aiki",
      lessons: [
        {
          title: "Volts, amps, ohms da watts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bayyana volts, amps, ohms da watts da kalmominku, da misali na kowanne.",
          text: [
            "Wutar lantarki ita ce gudun ƙananan ƙwayoyi masu caji (electrons) ta cikin waya. Kalmomi huɗu ne ke bayyana ta, kuma za ku yi amfani da su kowace rana a sana'ar.",
            "Voltage (volts, V) shi ne turawa. Current (amps, A) shi ne yawan wutar da ke gudu. Resistance (ohms, Ω) shi ne yadda abu ke hana wutar gudu. Power (watts, W) shi ne yawan aikin da wutar ke yi, kamar ɗumama abu, ba da haske ko juya injin (motor).",
            "Bututun ruwa na lambu yana taimakawa: ƙarfin matsin ruwan kamar volts ne, yawan ruwan da ke gudu kamar amps ne, kuma lanƙwasa a bututun ko ƙaramin baki kamar resistance ne. Ƙarin turawa ko ƙarancin resistance yana nufin ƙarin gudu.",
            "A gidajen Amurka, yawancin soket (outlets) suna aiki da kusan volts 120, kuma manyan na'urori kamar na'urar busar da kaya (dryer) da murhun girki (range) suna amfani da kusan volts 240. Batir yana ba da ƙaramar wuta mai tsayayye da ke gudu ta hanya ɗaya (DC); gidaje suna amfani da wutar da ke canja hanya (AC), wadda ke canja hanya sau da yawa a cikin daƙiƙa ɗaya."
          ],
          words: [
            ["Volts (V)", "turawar wutar lantarki, ana kuma kiran ta voltage."],
            ["Amps (A)", "yawan wutar lantarki da ke gudu, ana kuma kiran sa current."],
            ["Ohms (Ω)", "resistance: yadda abu ke hana wutar gudu."],
            ["Watts (W)", "power (ƙarfin wuta): yawan aikin da wutar ke yi."],
            ["AC da DC", "alternating current (gidaje da gine-gine) tana canja hanya; direct current (batir) tana gudu ta hanya ɗaya."],
            ["Conductor (mai ɗaukar wuta)", "abin da ke bar wutar lantarki ta gudu cikin sauƙi, kamar wayar copper (jan ƙarfe)."]
          ],
          slides: [
            { title: "Kalmomi huɗu da kuke amfani da su kowace rana", bullets: ["Volts: turawa", "Amps: gudu", "Ohms: hanawa (resistance)", "Watts: aikin da aka yi"] },
            { title: "Misalin bututun ruwa", bullets: ["Matsin ruwa = volts", "Ruwan da ke gudu = amps", "Lanƙwasa ko ƙaramin baki = resistance"] },
            { title: "A gine-ginen Amurka", bullets: ["Yawancin soket: kusan volts 120", "Dryer da murhun girki: kusan volts 240", "Gidaje suna amfani da AC; batir yana ba da DC"] }
          ],
          tryIt: "A takarda, ku rubuta kalmomi huɗun (volts, amps, ohms, watts). Kusa da kowacce, ku rubuta ma'anarta da kalmominku da misali ɗaya daga gida. Misali: watts, \"microwave ɗina ya rubuta watts 1,000 a lakabinsa\". Ku duba lakabi a fitila, cajar waya ko wata na'ura (an cire ta daga soket, kuma lakabin kawai) ku kwafe volts, amps ko watts da ya rubuta.",
          youCanNow: "bayyana volts, amps, ohms da watts da nemo su a lakabin wata na'ura.",
          quickCheck: [
            { objective: "O1", q: "Wace kalma ce ke nufin yawan wutar lantarki da ke gudu?", options: ["Volts", "Ohms", "Amps", "Watts"], answer: 2, why: "Amps (current) suna auna yawan wutar da ke gudu." },
            { objective: "O1", q: "A misalin bututun ruwa, me ke kama da resistance?", options: ["Lanƙwasa ko ƙaramin baki", "Matsin ruwan", "Yawan ruwan", "Launin bututun"], answer: 0, why: "Lanƙwasa yana hana gudun ruwa, kamar yadda resistance ke hana gudun wuta." }
          ]
        },
        {
          title: "Dokar Ohm da lissafin ƙarfin wuta",
          objectives: ["O1"],
          minutes: 6,
          goal: "Lissafa volts, amps, ohms ko watts ta amfani da dokar Ohm da lissafin ƙarfin wuta.",
          text: [
            "Dokar Ohm tana haɗa turawa, gudu da hanawa: volts = amps × ohms, ana rubuta ta V = I × R (I yana nufin current). Idan kun san biyu daga cikinsu, za ku iya samun na uku: I = V ÷ R da R = V ÷ I.",
            "Lissafin ƙarfin wuta (power): watts = volts × amps, ana rubuta shi P = V × I. Kuna kuma iya samun amps daga watts: I = P ÷ V.",
            "Misalai da aka warware (don atisaye kawai, lambobin ƙirƙira): An haɗa batir na volts 12 da kayan amfani mai ohms 4. Amps = 12 ÷ 4 = amps 3. Da'ira ta volts 120 tana ɗaukar amps 15. Watts = 120 × 15 = watts 1,800. Hita (space heater) ta watts 1,500 a kan volts 120 tana jan 1,500 ÷ 120 = amps 12.5.",
            "Dalilin da yasa yake da muhimmanci: kowace da'ira tana da breaker da aka auna don wani adadin amps. Idan abubuwa da yawa suna aiki a lokaci ɗaya kuma suna jan amps fiye da yadda da'irar take iya ɗauka, an cika mata nauyi (overload) kuma breaker zai tsinke. Masu aikin wuta suna yin wannan lissafi don zaɓar girman waya da breaker lafiya, bisa dokar wutar lantarki (electrical code)."
          ],
          steps: [
            "Ku rubuta abin da kuka sani da abin da kuke son samu.",
            "Ku zaɓi dabarar lissafi: V = I × R, I = V ÷ R, R = V ÷ I, ko P = V × I.",
            "Ku saka lambobin ku yi lissafin.",
            "Ku rubuta ma'aunin (V, A, Ω ko W) ku tambayi kanku: shin amsar tana da ma'ana?"
          ],
          words: [
            ["Dokar Ohm (Ohm's law)", "dokar da ke cewa volts = amps × ohms (V = I × R)."],
            ["Lissafin ƙarfin wuta (power formula)", "watts = volts × amps (P = V × I)."],
            ["Kayan amfani (load)", "duk abin da ke amfani da wutar lantarki, kamar fitila, hita ko inji."],
            ["Breaker", "makunnin tsaro a cikin akwatin wuta (panel) da ke kashe da'ira idan wuta mai yawa ta gudu."],
            ["Overload (cika nauyi)", "lokacin da da'ira ke ɗaukar wuta fiye da yadda aka tsara ta."]
          ],
          slides: [
            { title: "Dokar Ohm", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "Ƙarfin wuta (power)", bullets: ["P = V × I (watts = volts × amps)", "I = P ÷ V"] },
            { title: "Misalai da aka warware (atisaye kawai)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1,800 W", "1,500 W ÷ 120 V = 12.5 A"] },
            { title: "Dalilin da yasa masu aikin wuta ke yin lissafin", bullets: ["Ana auna breaker da amps", "Amps masu yawa = overload, breaker ya tsinke", "Lissafi yana taimaka wa zaɓar girman waya da breaker bisa code"] }
          ],
          tryIt: "Atisaye kawai. Ku warware ku nuna aikinku: (1) volts 9 da ohms 3: amps nawa? (2) amps 2 da ohms 6: volts nawa? (3) volts 120 da amps 10: watts nawa? (4) Microwave na watts 600 a kan volts 120: amps nawa? (5) volts 24 da amps 4: ohms nawa? Amsoshi: 3 A; 12 V; 1,200 W; 5 A; 6 Ω. Sannan ku rubuta matsala ɗaya ta kanku ku warware ta: ita ce farkon sashe na 1 na aikinku na ƙarshe.",
          youCanNow: "amfani da dokar Ohm da lissafin ƙarfin wuta don samun volts, amps, ohms ko watts.",
          quickCheck: [
            { objective: "O1", q: "Atisaye kawai: volts 12 a kan kayan amfani mai ohms 3. Amps nawa ke gudu?", options: ["amps 36", "amps 9", "amps 15", "amps 4"], answer: 3, why: "I = V ÷ R, don haka 12 ÷ 3 = amps 4." },
            { objective: "O1", q: "Atisaye kawai: da'ira ta volts 120 tana ɗaukar amps 5. Watts nawa ne wannan?", options: ["watts 24", "watts 600", "watts 125", "watts 115"], answer: 1, why: "P = V × I, don haka 120 × 5 = watts 600." }
          ]
        },
        {
          title: "Da'irori da yadda ake karanta zane mai sauƙi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Faɗin sassan da'ira mai sauƙi da bambanta series da parallel a zane.",
          text: [
            "Da'ira (circuit) zagaye ne cikakke. Tana da tushen wuta, wayoyin da ke ɗaukar wuta (conductors), kayan amfani (load), hanyar sarrafa ta (makunni, switch) da kariya (breaker ko fuse). Idan zagayen ya karye, babu abin da zai gudu.",
            "A da'ira ta series, kayan amfanin suna a layi guda, don haka wutar tana wucewa ta kowanne bi da bi; idan ɗaya ya mutu, dukkansu za su mutu. A da'ira ta parallel, kowane kayan amfani yana da hanyarsa, don haka kowanne yana samun cikakken voltage, kuma ɗaya na iya mutuwa yayin da sauran ke kunne. Ana jan soket da fitilu a gida a parallel.",
            "Yawancin wayoyin gine-ginen Amurka suna da nau'in waya uku. Wayar hot tana kai wuta zuwa kayan amfani (sau da yawa baƙa ko ja). Neutral tana dawo da ita (yawanci fara). Ground (copper marar rufi ko kore) tana ba da hanya mai aminci idan wani abu ya lalace. Masu aikin wuta har yanzu suna gwada kowace waya, domin launuka na iya zama ba daidai ba a tsohon aiki ko marar kyau.",
            "Nau'ikan kariya na musamman guda biyu: GFCI (ground-fault circuit interrupter) tana yanke wuta da sauri idan wuta ta zube, misali ta jikin mutum, kuma ana amfani da ita kusa da ruwa kamar kicin, banɗaki da waje. AFCI (arc-fault circuit interrupter) tana yanke wuta idan ta ji tartsatsin wuta (arcing) da zai iya tayar da gobara. Short circuit yana faruwa idan wuta ta bi hanya mai sauƙi da ba a tsara ba; yana iya jawo tartsatsi da gobara, kuma breaker ya kamata ya tsinke."
          ],
          steps: [
            "Ku nemo tushen wuta (batir ko akwatin wuta).",
            "Ku bi wayar daga tushen ta cikin breaker ko fuse da makunni.",
            "Ku nemo kowane kayan amfani ku ga ko yana a layi guda (series) ko a reshensa (parallel).",
            "Ku bi hanyar har zuwa tushen."
          ],
          words: [
            ["Da'ira (circuit)", "zagaye cikakke da wutar lantarki ke gudu a cikinsa."],
            ["Da'ira ta series", "kayan amfani a layi guda; wuta tana wucewa ta kowanne bi da bi."],
            ["Da'ira ta parallel", "kowane kayan amfani a reshensa; kowanne yana samun cikakken voltage."],
            ["Hot, neutral da ground", "hot tana kai wuta zuwa kayan amfani, neutral tana dawo da ita, ground hanya ce ta tsaro."],
            ["GFCI", "ground-fault circuit interrupter: tana yanke wuta da sauri idan wuta ta zube, don kare mutane daga girgizar wuta."],
            ["AFCI", "arc-fault circuit interrupter: tana yanke wuta idan ta ji tartsatsin wuta da zai iya jawo gobara."],
            ["Short circuit", "wuta ta bi hanya mai sauƙi da ba a tsara ba; tana iya jawo tartsatsi da gobara."]
          ],
          slides: [
            { title: "Sassan kowace da'ira", bullets: ["Tushe, wayoyi, kayan amfani", "Sarrafawa: makunni (switch)", "Kariya: breaker ko fuse"] },
            { title: "Series da parallel", bullets: ["Series: layi guda, ɗaya ya mutu = duka sun mutu", "Parallel: kowanne a reshensa, cikakken voltage", "Gidaje: parallel"] },
            { title: "Hot, neutral, ground", bullets: ["Hot: sau da yawa baƙa ko ja", "Neutral: yawanci fara", "Ground: marar rufi ko kore", "Ku gwada koyaushe; launuka na iya kuskure"] },
            { title: "Ƙarin kariya", bullets: ["GFCI: tana kare mutane kusa da ruwa", "AFCI: tana taimakawa hana gobarar tartsatsi", "Short circuit: breaker ya kamata ya tsinke"] }
          ],
          tryIt: "A takarda, ku zana batir, makunni da kwan fitila biyu a series. Sannan ku zana sassan iri ɗaya a parallel. Ku sa alamar tushe, makunni da kayan amfani a zanen biyu, ku rubuta abin da zai faru a kowane zane idan kwan fitila ɗaya ya ƙone. Na gaba, ku zana da'irar gida: akwatin wuta, breaker, makunni da fitilu biyu a parallel, tare da alamar hot, neutral da ground. Ku ajiye shi: shi ne sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "faɗin sassan da'ira mai sauƙi da bambanta series da parallel a zane.",
          quickCheck: [
            { objective: "O2", q: "An jan kwan fitila biyu ta yadda idan ɗaya ya ƙone, ɗayan yana kunne. Yaya aka jan su?", options: ["A series", "A parallel", "Ba tare da makunni ba", "A baya-baya"], answer: 1, why: "A parallel kowane kwan fitila yana da hanyarsa, don haka ɗaya na iya mutuwa yayin da ɗayan ke kunne." },
            { objective: "O2", q: "Wace na'ura ce ke kare mutane daga girgizar wuta kusa da wurin wankin kicin?", options: ["AFCI", "Makunnin fitila", "Dimmer (mai rage haske)", "GFCI"], answer: 3, why: "GFCI tana yanke wuta da sauri idan wuta ta zube, kamar ta jikin mutum kusa da ruwa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda wutar lantarki ke aiki",
        questions: [
          { objective: "O1", q: "Wace kalma ce ke nufin turawar wutar lantarki?", options: ["Volts", "Amps", "Ohms", "Watts"], answer: 0, why: "Voltage shi ne turawar da ke motsa wuta ta cikin da'ira." },
          { objective: "O1", q: "Atisaye kawai: amps 2 suna gudu ta kayan amfani mai ohms 10. Nawa ne voltage?", options: ["volts 5", "volts 12", "volts 20", "volts 8"], answer: 2, why: "V = I × R, don haka 2 × 10 = volts 20." },
          { objective: "O1", q: "Atisaye kawai: na'urar busar da gashi ta watts 1,200 tana aiki a kan volts 120. Amps nawa take ja?", options: ["amps 10", "amps 100", "amps 1,320", "amps 12"], answer: 0, why: "I = P ÷ V, don haka 1,200 ÷ 120 = amps 10." },
          { objective: "O2", q: "Wane sashe na da'ira ne ke kashe ta idan wuta mai yawa ta gudu?", options: ["Kayan amfani", "Wayar neutral", "Murfin makunni", "Breaker ko fuse"], answer: 3, why: "Breaker da fuse suna kare da'ira ta hanyar dakatar da wuta idan ta yi yawa." },
          { objective: "O2", q: "A yawancin wayoyin gine-ginen Amurka, wace waya ce yawanci fara?", options: ["Wayar hot", "Wayar neutral", "Wayar ground", "Babu; ba a taɓa amfani da launuka ba"], answer: 1, why: "Neutral yawanci fara ce, amma masu aikin wuta har yanzu suna gwadawa, domin launuka na iya zama ba daidai ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsaro, kayan aiki da hanyarku",
      lessons: [
        {
          title: "Tsaron wutar lantarki: lockout/tagout da gwadawa kafin taɓawa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Jera matakai shida na lockout/tagout bisa tsari da faɗin manyan haɗurran wutar lantarki.",
          text: [
            "Wutar lantarki tana iya kashe mutum. Haɗurran wutar lantarki sun haɗa da girgizar wuta (shock), mutuwa ta wuta (electrocution), ƙuna, arc flash (fashewar zafi da haske ba zato daga lalacewar wuta), gobara da faɗuwa bayan girgizar wuta. OSHA ta lissafa abubuwan da suka saba jawo raunukan wuta, ciki har da taɓa wayoyin wuta na sama (power lines), rashin kariyar ground-fault, karyewar hanyar ground, amfani da na'ura ta hanyar da ba daidai ba, da amfani da igiyar ƙarin wuta (extension cord) ba daidai ba.",
            "Hanya mafi aminci ta aiki ita ce da wutar a kashe kuma a kulle. Dokar lockout/tagout ta OSHA (29 CFR 1910.147) ta tsara jerin matakai ga ma'aikatan da aka ba izini kuma aka horar: 1. Shiri: ku san wane irin ƙarfi (energy) ne a wurin da yadda ake sarrafa shi. 2. Ku kashe na'urar. 3. Ku ware ta: ku buɗe disconnect ko breaker. 4. Ku saka makullinku da lakabinku (tag). 5. Ku saki ko ku toshe ƙarfin da aka ajiye (kamar capacitors masu caji ko springs). 6. Tabbatarwa: ku gwada cewa a kashe take da gaske kafin ku fara.",
            "Gwadawa kafin taɓawa: ku yi amfani da na'urar gwaji (tester) ko mita da kuka fara gwadawa a kan tushen wuta da kuka san yana kunne, sannan ku gwada da'irar, sannan ku sake gwada tester ɗin. Ma'aikata da aka horar kuma suka cancanta ne kaɗai ke yin wannan, a cikin shirin mai ɗaukar aiki.",
            "Wasu halaye: ku yi amfani da tsani marar ɗaukar wuta (fiberglass) kusa da wuta, ku nisanci wayoyin wuta na sama sosai, ku yi amfani da kariyar GFCI don kayan aikin wuta, kada ku taɓa yin aiki a wuri mai ruwa a kan na'urorin wuta, kuma ku sa tabarau na tsaro, safar hannu da sauran kayan kariya (PPE) da mai ɗaukar aikinku ya buƙata."
          ],
          steps: [
            "Shiri: ku san ƙarfin da yadda ake sarrafa shi.",
            "Ku kashe na'urar.",
            "Ku ware ta daga tushen wuta.",
            "Ku saka makullinku da lakabinku.",
            "Ku saki ko ku toshe ƙarfin da aka ajiye.",
            "Ku tabbatar a kashe take: ku gwada kafin ku taɓa."
          ],
          words: [
            ["Electrocution", "mutuwa da girgizar wuta ta jawo."],
            ["Arc flash", "fashewar zafi, haske da matsi ba zato daga lalacewar wuta."],
            ["Lockout/tagout", "kashe tushen ƙarfi da kulle shi, tare da lakabi, don kada kowa ya kunna shi yayin aikin."],
            ["Ƙarfin da aka ajiye (stored energy)", "ƙarfin da ke zama bayan an kashe wuta, kamar a cikin capacitor ko spring."],
            ["Ma'aikaci da ya cancanta (qualified worker)", "wanda aka horar ya san haɗurran kuma ya yi takamaiman aikin wuta lafiya."],
            ["OSHA", "Hukumar Tsaro da Lafiya a Wurin Aiki ta Amurka (Occupational Safety and Health Administration), mai kafa dokokin tsaron wurin aiki."]
          ],
          slides: [
            { title: "Wutar lantarki tana iya kashe mutum", bullets: ["Girgizar wuta, electrocution, ƙuna", "Arc flash da gobara", "Faɗuwa bayan girgizar wuta"] },
            { title: "Lockout/tagout: matakai shida", bullets: ["1. Shiri  2. Kashewa  3. Warewa", "4. Makulli da lakabi  5. Sakin ƙarfin da aka ajiye", "6. Tabbatarwa: gwada kafin taɓawa"] },
            { title: "Gwadawa kafin taɓawa", bullets: ["Ku gwada tester a kan tushen da kuka san yana kunne", "Ku gwada da'irar", "Ku sake gwada tester ɗin"] },
            { title: "Halayen yau da kullum", bullets: ["Tsanin fiberglass kusa da wuta", "Ku nisanci wayoyin wuta na sama", "GFCI don kayan aikin wuta; kada ku yi aiki a wuri mai ruwa"] }
          ],
          sources: [
            { name: "OSHA: Tsaron wutar lantarki (Electrical safety)", url: "https://www.osha.gov/electrical" },
            { name: "OSHA: Sarrafa ƙarfi mai haɗari (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "A kan katin rubutu (index card), ku rubuta matakai shida na lockout/tagout bisa tsari daga ƙwaƙwalwarku. Ku duba su da darasin ku gyara kurakurai. A bayan katin, ku rubuta haɗurran wuta uku da kariyar kowanne (misali: wayar wuta ta sama, ku yi nisa sosai ku kira kamfanin wuta). Ku ajiye katin: shi ne sashe na 3 na aikinku na ƙarshe.",
          youCanNow: "jera matakai shida na lockout/tagout bisa tsari da haɗa haɗurran wuta da kariyar da ta dace.",
          quickCheck: [
            { objective: "O3", q: "Mene ne mataki na ƙarshe na lockout/tagout kafin a fara aiki?", options: ["Tabbatar cewa na'urar a kashe take ta hanyar gwadawa", "Saka makullinku", "Faɗa wa abokin ciniki", "Kashe na'urar"], answer: 0, why: "Bayan kullewa da sakin ƙarfin da aka ajiye, kuna tabbatar cewa a kashe take da gaske kafin ku taɓa komai." },
            { objective: "O3", q: "Wane tsani ne ya dace kusa da na'urorin wuta?", options: ["Na aluminum", "Kowane tsani", "Na fiberglass", "Tsanin itace mai ruwa"], answer: 2, why: "Fiberglass ba ya ɗaukar wuta kamar yadda ƙarfe ke yi." }
          ]
        },
        {
          title: "Kayan aiki, awo da dokar wutar lantarki",
          objectives: ["O4"],
          minutes: 6,
          goal: "Karanta tef ɗin awo zuwa 1/16 inch mafi kusa da karanta volts na batir a multimeter.",
          text: [
            "Masu koyo suna amfani da kayan hannu kamar lineman's pliers (filaya), wire strippers (mai feɗe waya), screwdriver mai rufi, level (ma'aunin daidaito) da tef ɗin awo, da kayan gwaji kamar voltage tester da multimeter. Mai ɗaukar aikinku ko shirinku zai koya muku waɗanne kayan za ku saya da yadda ake amfani da kowanne lafiya.",
            "Karanta tef ɗin awo: kowane inch an raba shi zuwa ƙananan alamomi 16. Alamomi mafi tsawo su ne rabin inch, sannan kwata, sannan kashi takwas, sannan kashi goma sha shida. Ku ƙirga ƙananan alamomin da suka wuce inch cikakke na ƙarshe ku rage ɓangaren (fraction): inch 5 da alamomi 6 shi ne 5 6/16, wanda yake inch 5 3/8. Ku auna sau biyu, ku yanke sau ɗaya.",
            "Multimeter yana auna volts, amps da ohms. Ku yi atisaye ne kawai a kan batir AA na yau da kullum: ku juya maɓallin zuwa DC volts, ku taɓa jan lead a ƙarshen + da baƙin lead a ƙarshen -, sannan ku karanta allon. Sabon batir AA yana nuna kusan volts 1.5. Kada ku taɓa yin atisaye a kan soket ko kowace wayar gida.",
            "Masu aikin wuta suna bin National Electrical Code (NEC), wanda ake kira NFPA 70, wanda ke kafa ma'aunin aminci na jan wuta da na'urori. Jihohi da birane suna ɗaukar code ɗin, wani lokaci da nasu canje-canje, kuma gwaje-gwajen lasisi suna ƙunshe da code ɗin da dokokin gida. Za ku koyi amfani da littafin code a cikin apprenticeship ɗinku."
          ],
          steps: [
            "Tef: ku nemo inch cikakke na ƙarshe.",
            "Ku ƙirga alamomin 1/16 da suka wuce shi.",
            "Ku rage ɓangaren: 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Mita (batir kawai): ku saita zuwa DC volts, ja zuwa +, baƙi zuwa -, ku karanta allon."
          ],
          words: [
            ["Multimeter", "mita da ke auna volts, amps da ohms."],
            ["Voltage tester", "kayan aiki da ke nuna ko akwai voltage."],
            ["Leads", "jan waya da baƙar waya masu kan gwaji da ke haɗa mita da abin da kuke gwadawa."],
            ["NEC (NFPA 70)", "National Electrical Code: ma'aunin aminci na jan wuta, da jihohi da birane ke ɗauka."],
            ["Rage ɓangare (reduce a fraction)", "rubuta shi da ƙananan lambobi, kamar 6/16 = 3/8."]
          ],
          slides: [
            { title: "Kayan aikin farko", bullets: ["Lineman's pliers, wire strippers", "Screwdriver mai rufi, level, tef", "Voltage tester da multimeter"] },
            { title: "Karanta tef ɗin awo", bullets: ["Alamomi 16 a kowane inch", "Ku ƙirga alamomin da suka wuce inch cikakke", "5 6/16 = inch 5 3/8"] },
            { title: "Atisayen multimeter: batir kawai", bullets: ["Maɓalli zuwa DC volts", "Ja zuwa +, baƙi zuwa -", "Sabon AA yana nuna kusan volts 1.5", "Kada ku taɓa atisaye a soket ko wayoyin gida"] },
            { title: "Dokar wutar lantarki (code)", bullets: ["NEC, ana kuma kiran sa NFPA 70", "Jihohi da birane suna ɗaukar shi", "Gwaje-gwajen lasisi suna ƙunshe da code ɗin"] }
          ],
          sources: [
            { name: "NFPA: NFPA 70, National Electrical Code", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "Hukumar Ƙididdigar Ƙwadago ta Amurka (BLS): Electricians", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Ku auna abubuwa biyar a gida da tef ɗin awo (ƙofa, littafi, tebur, taga, akwati) zuwa 1/16 inch mafi kusa, ku rubuta kowane karatu a rage. Sannan ku yi atisaye: 3 da 12/16 = ? 7 da 2/16 = ? 10 da 8/16 = ? (Amsoshi: 3 3/4, 7 1/8, 10 1/2.) Idan kuna da multimeter, ku karanta volts na batir AA ku rubuta. Ku ajiye karatunku: su ne sashe na 4 na aikinku na ƙarshe.",
          youCanNow: "karanta tef ɗin awo zuwa 1/16 inch mafi kusa da karanta volts na batir da multimeter.",
          quickCheck: [
            { objective: "O4", q: "Wani katako ya kai inch 4 da alamomi 12 na kashi goma sha shida. Mene ne wannan a rage?", options: ["inch 4 1/2", "inch 4 3/4", "inch 4 12", "inch 4 1/4"], answer: 1, why: "12/16 yana raguwa zuwa 3/4, don haka inch 4 3/4 ne." },
            { objective: "O4", q: "A ina ne yake da aminci a yi atisaye da multimeter a wannan kwas?", options: ["A kan soket na bango", "A kan akwatin breaker", "A kan makunnin fitila", "A kan batir AA"], answer: 3, why: "Batir na gida ƙaramin voltage ne kuma mai aminci; soket da wayoyi na aikin da aka horar ne kuma ake da mai kulawa." }
          ]
        },
        {
          title: "Apprenticeship, lasisi da tsarinku",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta tsari mai ranaku don neman apprenticeship na wutar lantarki da yin aiki don samun lasisi.",
          text: [
            "Hukumar Ƙididdigar Ƙwadago ta Amurka (Bureau of Labor Statistics, BLS) ta ce yawancin masu aikin wuta suna koyo ta apprenticeship na shekara 4 ko 5. Kowace shekara yawanci tana da kusan awa 2,000 na horo a wurin aiki da ake biya, tare da azuzuwa kan ilimin wutar lantarki, karanta zanen gini (blueprint) da tsaro. Ana buƙatar takardar kammala sakandare ko makamancinta (kamar GED), kuma wasu mutane suna fara zuwa makarantar fasaha.",
            "Yawancin jihohi suna buƙatar masu aikin wuta su ci gwaji kuma su riƙe lasisi. Gwajin yana ƙunshe da National Electrical Code da dokokin jiha da na gida. Wasu wurare kuma suna buƙatar ci gaba da karatu (continuing education) don riƙe lasisin. Sunayen matsayi kamar apprentice, journeyman da master sun bambanta bisa jiha, don haka ku duba hukumar lasisin wutar lantarki ta jiharku ko ta gida.",
            "Ƙungiyoyin ma'aikata (unions), ƙungiyoyin 'yan kwangila da masu ɗaukar aiki ne ke gudanar da shirye-shiryen apprenticeship. Da yawa suna neman takardar sakandare ko GED, katin shaida, wani lokaci lasisin tuƙi, gwajin lissafi da karatu da hira, kuma wasu suna karɓar takardun nema ne kawai a wasu lokuta. Ku nemo shirye-shirye a apprenticeship.gov da a American Job Centers da kwalejojin al'umma (community colleges). Tsofaffin sojoji za su iya tambayar VA game da GI Bill; idan kuna da tarihin laifi, ku tambayi shirin da hukumar lasisi yadda suke duba shi.",
            "Tsarinku yana mayar da wannan zuwa matakai masu ranaku: abin da za ku karanta, waɗanne shirye-shirye za ku nema, yaushe suke buɗewa, da abin da hukumar lasisi ke buƙata."
          ],
          steps: [
            "Ku rubuta burinku, misali \"in fara apprenticeship na wutar lantarki kafin kaka mai zuwa\".",
            "Ku nemo shirye-shirye biyu kusa da ku; ku rubuta abin da kowanne ke nema da lokacin da ake buɗe karɓar takardun nema.",
            "Ku nemo hukumar lasisi ta jiharku ko birninku ku rubuta abin da take buƙata (tare da adireshin shafin intanet).",
            "Ku tara takardu: takardar sakandare ko GED, katin shaida, lasisin tuƙi idan ana buƙata.",
            "Ku ƙara ranakun karatun lissafi da karatu, da rana ga kowace takardar nema."
          ],
          words: [
            ["Apprenticeship", "aiki da ake biya inda kuke koyo daga ƙwararrun masu aikin wuta, tare da azuzuwa."],
            ["Journeyman", "a jihohi da yawa, mai aikin wuta da ya kammala apprenticeship kuma ya ci gwajin lasisi; sunayen sun bambanta."],
            ["Hukumar lasisi (licensing board)", "ofishin jiha ko birni da ke ba da lasisin wutar lantarki."],
            ["Ci gaba da karatu (continuing education)", "gajerun kwasa-kwasai da wasu lasisi ke buƙata don a ci gaba da sanin code da tsaro."],
            ["American Job Center", "cibiyar gida kyauta ta taimakon neman aiki da horo, da Ma'aikatar Ƙwadago ta Amurka ke ba da kuɗinta."]
          ],
          slides: [
            { title: "Yadda yawancin masu aikin wuta ke koyo", bullets: ["Apprenticeship na shekara 4 ko 5 (BLS)", "Kusan awa 2,000 da ake biya a shekara, da azuzuwa", "Ana buƙatar takardar sakandare ko GED"] },
            { title: "Lasisi", bullets: ["Yawancin jihohi suna buƙatar gwaji da lasisi", "Gwajin yana ƙunshe da NEC da dokokin gida", "Ku duba hukumar jiharku ko birninku"] },
            { title: "Yadda ake shiga", bullets: ["Shirye-shiryen unions, 'yan kwangila da masu ɗaukar aiki", "Sau da yawa: gwajin lissafi da karatu, hira", "Wasu suna karɓar nema ne kawai a wasu lokuta"] },
            { title: "Tsarinku", bullets: ["Shirye-shirye biyu da sharuɗɗansu", "Dokokin lasisi daga hukumar hukuma", "Rana ga kowane mataki"] }
          ],
          sources: [
            { name: "Hukumar Ƙididdigar Ƙwadago ta Amurka (BLS): Electricians, How to Become One", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (mai neman shirye-shirye)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder (mai neman lasisi)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Aikin ƙarshe: ku yi kundin farawarku na wutar lantarki. Ku haɗa matsalolinku biyar na dokar Ohm (Darasi na 2), zanen da'irarku mai alamomi (Darasi na 3), katin lockout/tagout ɗinku (Darasi na 4) da karatun tef ɗinku biyar (Darasi na 5). Sannan ku rubuta tsarinku mai ranaku: burinku, shirye-shiryen apprenticeship biyu kusa da ku tare da abin da kowanne ke nema da lokacin da yake karɓar takardun nema, abin da jiharku ko birninku ke buƙata don lasisi (tare da adireshin shafin intanet), da rana ga kowane mataki.",
          youCanNow: "bin tsarinku mai ranaku don neman apprenticeship na wutar lantarki da yin aiki don samun lasisi.",
          quickCheck: [
            { objective: "O5", q: "Bisa ga BLS, ta yaya yawancin masu aikin wuta ke koyon sana'ar?", options: ["Kwas na intanet na mako ɗaya", "Kallon bidiyo a gida", "Apprenticeship na shekara 4 ko 5 da ake biya", "Digirin jami'a na shekara huɗu kawai"], answer: 2, why: "Yawancin masu aikin wuta suna koyo a apprenticeship na shekara 4 ko 5 da ke haɗa aiki da ake biya da azuzuwa." },
            { objective: "O5", q: "A ina za ku san abin da jiharku ke buƙata don lasisin wutar lantarki?", options: ["Hukumar lasisin wutar lantarki ta jiharku ko ta gida", "Ƙungiyar kafofin sada zumunta", "Shagon sayar da kayan aiki", "Wannan kwas"], answer: 0, why: "Dokokin lasisi sun bambanta bisa jiha da birni, don haka hukumar hukuma ita ce majiya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsaro, kayan aiki da hanyarku",
        questions: [
          { objective: "O3", q: "Wane mataki na lockout/tagout ne ke zuwa nan take bayan an ware na'urar?", options: ["Tabbatarwa ta gwadawa", "Saka makullinku da lakabinku", "Sakin ƙarfin da aka ajiye", "Shiri"], answer: 1, why: "Tsarin shi ne shiri, kashewa, warewa, makulli da lakabi, sakin ƙarfin da aka ajiye, tabbatarwa." },
          { objective: "O3", q: "Me yasa ma'aikata ke saki ko toshe ƙarfin da aka ajiye bayan kullewa?", options: ["Don adana wuta", "Don makullin ya shiga", "Don su gama da sauri", "Domin sassa kamar capacitors na iya ba da girgizar wuta bayan an kashe wuta"], answer: 3, why: "Ƙarfin da aka ajiye na iya cutar da ku bayan an kashe wuta." },
          { objective: "O3", q: "OSHA ta lissafa wani abu da ya saba jawo raunukan wuta. Wanne ne?", options: ["Taɓa wayoyin wuta na sama", "Sa tabarau na tsaro", "Amfani da tsanin fiberglass", "Karanta littafin code"], answer: 0, why: "Taɓa wayoyin wuta na sama yana ɗaya daga cikin abubuwan da OSHA ta lissafa." },
          { objective: "O4", q: "Nawa ne inch 9/16 da inch 7/16?", options: ["inch 1/2", "inch 16", "inch 1", "inch 2"], answer: 2, why: "9/16 + 7/16 = 16/16, wanda yake inch 1." },
          { objective: "O5", q: "Wane mataki na tsari ne ya cika?", options: ["\"In zama mai aikin wuta\"", "\"In nema wata rana\"", "\"In duba shirye-shirye\"", "\"In nemi shirin apprenticeship na ƙaramar hukuma kafin wa'adinsa na 1 ga Maris, da GED ɗina da katin shaida\""], answer: 3, why: "Yana faɗin sunan shirin, wa'adin da abin da za a kawo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Sana'ar Wutar Lantarki",
    questions: [
      { objective: "O1", q: "Wace kalma ce ke nufin yawan aikin da wutar ke yi?", options: ["Watts", "Ohms", "Amps", "Volts"], answer: 0, why: "Watts suna auna ƙarfin wuta (power): aikin da aka yi, kamar zafi ko haske." },
      { objective: "O1", q: "Dokar Ohm ta ce:", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Volts daidai suke da amps sau ohms." },
      { objective: "O1", q: "Atisaye kawai: volts 120 da amps 20. Watts nawa?", options: ["watts 140", "watts 6", "watts 2,400", "watts 100"], answer: 2, why: "P = V × I, don haka 120 × 20 = watts 2,400." },
      { objective: "O1", q: "Atisaye kawai: volts 24 a kan kayan amfani mai ohms 6. Amps nawa?", options: ["amps 144", "amps 18", "amps 30", "amps 4"], answer: 3, why: "I = V ÷ R, don haka 24 ÷ 6 = amps 4." },
      { objective: "O1", q: "Me ke faruwa idan da'ira ta ja amps fiye da yadda aka tsara ta?", options: ["Voltage ya ninka biyu", "An cika mata nauyi (overload) kuma breaker ya kamata ya tsinke", "Wayoyin sun yi sanyi", "Babu komai"], answer: 1, why: "Wuta mai yawa overload ce; breaker yana tsinkewa don kare wayoyi." },
      { objective: "O2", q: "A da'ira ta series mai kwan fitila uku, ɗaya ya ƙone. Me zai faru?", options: ["Dukkansu za su mutu", "Wannan ɗaya kawai zai mutu", "Sauran za su ƙara haske", "Breaker zai ƙara girma"], answer: 0, why: "A series akwai hanya ɗaya kawai, don haka karyewa yana dakatar da wuta ga dukkansu." },
      { objective: "O2", q: "Yaya ake yawan jan soket a gida?", options: ["A series", "Ba tare da breaker ba", "A parallel", "Ba tare da neutral ba"], answer: 2, why: "Jan wuta a parallel yana ba kowane soket cikakken voltage da hanyarsa." },
      { objective: "O2", q: "Wace waya ce ke ba da hanya mai aminci idan wani abu ya lalace?", options: ["Wayar hot", "Wayar neutral", "Wayar makunni (switch leg)", "Wayar ground"], answer: 3, why: "Ground (marar rufi ko kore) ita ce hanyar tsaro." },
      { objective: "O2", q: "Wace na'ura ce ke yanke wuta idan ta ji tartsatsin wuta da zai iya tayar da gobara?", options: ["GFCI", "AFCI", "Dimmer", "Filogi (plug)"], answer: 1, why: "Arc-fault circuit interrupter (AFCI) tana taimakawa hana gobarar tartsatsi." },
      { objective: "O3", q: "Mene ne mataki na farko na lockout/tagout?", options: ["Shiri: ku san ƙarfin da yadda ake sarrafa shi", "Saka makullinku", "Tabbatarwa ta gwadawa", "Kashewa"], answer: 0, why: "Kuna farawa ne da sanin wane irin ƙarfi ne a wurin da yadda ake sarrafa shi." },
      { objective: "O3", q: "Idan kuna gwadawa kafin taɓawa, me yasa kuke fara gwada tester a kan tushen da kuka san yana kunne?", options: ["Don ya ɗumama", "Don cajin batirinsa", "Don tabbatar tester ɗin yana aiki, don a amince da karatun \"babu voltage\"", "Ba a buƙata"], answer: 2, why: "Tester da ya lalace zai iya nuna babu voltage alhali akwai." },
      { objective: "O3", q: "Wanne ne fashewar zafi da haske ba zato daga lalacewar wuta?", options: ["Ground", "Kayan amfani (load)", "Breaker", "Arc flash"], answer: 3, why: "Arc flash fashewa ce mai haɗari da lalacewar wuta ke jawowa." },
      { objective: "O3", q: "A wannan kwas, yaushe za ku iya aiki a kan wayoyin da ke kunne?", options: ["Ba a taɓa ba; ana koyon jan wuta na gaske a horo mai mai kulawa", "Bayan Darasi na 2", "Idan breaker yana kunne", "A ƙarshen mako"], answer: 0, why: "Wannan kwas ba ya yin aiki a kan wutar da ke kunne; wannan na shirin da ake da mai kulawa ne, da PPE." },
      { objective: "O4", q: "Tef ɗin awo ya nuna inch 6 da alamomi 4 na kashi goma sha shida. Mene ne wannan a rage?", options: ["inch 6 1/2", "inch 6 1/4", "inch 6 4", "inch 6 1/8"], answer: 1, why: "4/16 yana raguwa zuwa 1/4." },
      { objective: "O4", q: "Me sabon batir AA yakan nuna a multimeter da aka saita zuwa DC volts?", options: ["Kusan volts 120", "Kusan volts 12", "Kusan volts 1.5", "Kusan volts 240"], answer: 2, why: "Sabon batir AA kusan volts 1.5 ne." },
      { objective: "O4", q: "Da wane suna kuma ake kiran National Electrical Code?", options: ["OSHA 10", "EPA 608", "NFPA 70", "GFCI"], answer: 2, why: "Ana buga NEC a matsayin NFPA 70." },
      { objective: "O5", q: "Wannan kwas zai:", options: ["Ba ku lasisin wutar lantarki", "Shirya ku don nema; ba ya ba da lasisi ko takardar shaida", "Ƙidaya a matsayin awowin apprenticeship ɗinku", "Bar ku jan wuta a gidaje"], answer: 1, why: "Lasisi yana fitowa daga jiharku ko birninku, kuma horo na gaske yana fitowa daga apprenticeship." },
      { objective: "O5", q: "Wane shafi ne kyauta da ke taimaka muku nemo shirye-shiryen apprenticeship kusa da ku?", options: ["Tallar da ke tasowa (pop-up)", "Wurin sharhi (comments)", "Takardar tallar shagon kayan aiki", "apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov yana da Apprenticeship Job Finder na Ma'aikatar Ƙwadago ta Amurka." },
      { objective: "O5", q: "Me gwaje-gwajen lasisin masu aikin wuta ke yawan ƙunshe?", options: ["National Electrical Code da dokokin jiha da na gida", "Gyaran mota", "Aikin famfo kawai", "Saurin rubutu a kwamfuta"], answer: 0, why: "BLS ta ce gwaje-gwajen lasisi suna ƙunshe da NEC da dokokin jiha da na gida." },
      { objective: "O5", q: "Wasu shirye-shirye suna karɓar takardun nema ne kawai a wasu lokuta. Me ya kamata tsarinku ya ƙunsa?", options: ["Babu komai; ku je kawai", "Hasashe", "Tambarin shirin kawai", "Ranakun da ake buɗewa da rufe karɓar takardun nema"], answer: 3, why: "Rubuta ranakun nema yana hana ku rasa damar." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Matsalolin dokar Ohm da ƙarfin wuta", objective: "O1", notYet: "Matsaloli ƙasa da 4 cikin 5 daidai, ko ba a nuna aiki ba.", meets: "Aƙalla 4 cikin 5 daidai, kowanne da dabarar lissafi, aikin da ma'aunin.", exceeds: "Dukkan 5 daidai, ta amfani da dukkan dabarun lissafi huɗu, tare da duba cewa kowace amsa tana da ma'ana." },
      { name: "Zanen da'ira", objective: "O2", notYet: "Wasu sassa sun ɓace ko kayan amfanin ba a parallel suke ba.", meets: "Tushe, breaker, makunni, kayan amfani biyu a parallel, hot, neutral da ground duk suna da alama.", exceeds: "Yana kuma nuna inda GFCI zai kasance kuma ya bayyana dalili." },
      { name: "Katin lockout/tagout", objective: "O3", notYet: "Wasu matakai sun ɓace ko ba su cikin tsari.", meets: "Dukkan matakai shida bisa tsari, tare da haɗurra uku da aka haɗa da kariyarsu.", exceeds: "Yana kuma bayyana gwadawa kafin taɓawa da binciken kunne-kashe-kunne (live-dead-live)." },
      { name: "Awo", objective: "O4", notYet: "Karatun ba daidai ba ne ko ba a rage ɓangarori ba.", meets: "Aƙalla karatu 4 cikin 5 daidai zuwa 1/16 inch mafi kusa, a rage.", exceeds: "Dukkan biyar daidai, tare da karatun batir da aka saita mita daidai." },
      { name: "Tsari mai ranaku daga majiyoyin hukuma", objective: "O5", notYet: "Matakai ba su da ranaku, ko dokoki sun fito daga talla ko rubuce-rubucen kafofin sada zumunta.", meets: "Shirye-shirye biyu na gaske tare da sharuɗɗa da ranakun nema, dokokin lasisi tare da adireshin shafin hukuma, da rana ga kowane mataki.", exceeds: "Yana kuma da jadawalin karatu don gwajin shiga da tsarin madadi, kamar aikin mataimakin mai aikin wuta (helper)." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi apprenticeship ko pre-apprenticeship na wutar lantarki cikin kwanaki 90",
      "Masu koyo da aka karɓe su a apprenticeship ko aka ɗauke su aiki a matsayin mataimakin mai aikin wuta cikin watanni 6",
      "Shirye-shiryen abokan aiki sun ce masu nema suna cin gwajin lissafi na shiga kuma suna zuwa da sanin matakan tsaro na farko"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan BLS, OSHA, apprenticeship.gov da na lasisin jiha",
      "Takarda, alƙalami, katunan rubutu, na'urar lissafi da tef ɗin awo",
      "Zaɓi: multimeter mai sauƙi da batir AA (atisayen batir kawai)",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Babu kowane irin aiki a kan wutar da ke kunne. Atisayen mita kaɗai shi ne a kan batir na gida; kada ku taɓa barin masu koyo su gwada soket ko akwatin wuta.",
      "Ku fara yin lissafin tare a allo, sannan ku sa masu koyo su rubuta matsalolin atisaye nasu su musanya.",
      "Ku gayyaci mai kula da shirin apprenticeship ko mai aikin wuta mai lasisi don ya bayyana yadda ake nema da gwajin shiga.",
      "Ku taimaka wa kowane mai koyo ya nemo shafin lasisi na jiharsa ko birninsa; dokoki sun bambanta, don haka kada ku ba da amsa ɗaya ga dukan rukunin.",
      "Ga masu koyo da ke da tarihin laifi ko tsofaffin sojoji, ku haɗa su da hidimomin masu dawowa gida ko na tsofaffin sojoji; kada ku yi alƙawarin kowane sakamako daga shiri ko hukumar lasisi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
