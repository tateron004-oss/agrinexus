"use strict";

// Koach Learn course, Hausa (ha) translation of shared/cnc-machining-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// The course PREPARES learners and asks for no machine work; OSHA rule numbers, NIMS and apprenticeship.gov are as in the English.

module.exports = {
  id: "cnc-machining-basics-ha",
  lang: "ha",
  translationOf: "cnc-machining-basics",
  category: "Workforce Development",
  name: "Tushen Aikin Injin CNC (CNC Machining)",
  skills: "Faɗin sunayen injinan CNC da axis ɗinsu, Karanta girma da tolerance a zanen sashe, Karanta G-code da M-code masu sauƙi, Jera matakan setup mai lafiya da sashe na farko, Gane haɗurran shago da hanyoyin kariya, Shirya hanyarku zuwa horo da takardar shaidar machining",
  outcome: "faɗin sunayen manyan injinan CNC da axis ɗinsu, karanta girma da tolerance a zanen sashe mai sauƙi, karanta gajeren shirin G-code da zana hanyar tool ɗinsa a takardar graph, jera matakan setup mai lafiya da sashe na farko, faɗin hanyoyin kariya daga haɗurran shago da aka saba gani, da bin tsari mai ranaku don samun horo da takardar shaidar machining.",
  about: [
    "Masu aikin injin CNC (machinists da operators) suna yin sassan ƙarfe da roba da ke cikin motoci, jiragen sama, kayan noma, kayan asibiti da injinan kowace masana'anta. Da yawa suna farawa a matsayin masu sarrafa inji (operators), sannan su haura zuwa setup, rubuta shirye-shirye da dubawa. Wannan kwas ɗin na duk wanda ke duba wannan hanya ne: masu neman aiki, matasa, tsofaffin sojoji, mutanen da ke dawowa gida daga kurkuku, baƙi da manya da ke komawa karatu.",
    "Za ku koyi abin da injinan CNC ke yi da yadda axis ɗinsu ke motsi, yadda ake karanta girma da tolerance a zanen sashe, yadda ake karanta gajeren shirin CNC layi bayan layi, da tsarin setup mai lafiya da sashe na farko. Sannan za ku koyi haɗurran shago da yadda masu aikin inji ke kare kansu daga su, da yadda horo da takardun shaida ke aiki.",
    "Wannan kwas ɗin yana shirya ku. Ba ya ba da takardar shaida ko lasisi, kuma ba za ku sarrafa inji a cikinsa ba. Ana koyon sarrafa injin mill ko lathe ne kawai a shago mai kulawa tare da ƙwararren malami. Takardun shaidar machining, kamar na National Institute for Metalworking Skills (NIMS, hukumar ƙa'idojin aikin ƙarfe a Amurka), yawanci suna buƙatar jarabawar rubutu da gwajin aiki da hannu.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\" a takarda ko kwamfuta da tambayoyi biyu masu sauri. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Abin da za ku gama da shi shi ne tsarin farawa na CNC naku mai ranaku na gaske."
  ],
  finalTask: "Ku yi tsarin farawa na CNC naku: (1) zanen injin mill da lathe a shafi ɗaya tare da alamar axis X, Y da Z; (2) takardar karanta zane don sashen atisaye, tare da lissafin iyakokin girma na girma uku masu tolerance; (3) gajeren shirin atisaye (layi 8 zuwa 12) da ke yanka murabba'i ko rami mai tsawo (slot) mai sauƙi, tare da bayanin kowane layi da kalmominku da zanen hanyar tool a takardar graph; (4) jerin binciken setup da kariya don sashe na farko wanda ya ƙunshi guards, kariyar ido, tufafi, chips, coolant, riƙe sashe (workholding), offsets, dry run da first-article inspection; da (5) tsari mai ranaku da ke ambaton shirye-shiryen horo ko apprenticeship guda biyu kusa da ku, takardar shaidar NIMS da za ku nema (daga shafin hukuma), da rana ga kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke neman aikin masana'anta na hannu: masu neman aiki, ɗaliban sakandare da waɗanda suka gama, tsofaffin sojoji, mutanen da ke dawowa gida daga kurkuku, baƙi da manya da ke komawa karatu. Wasu sun yi darasin shago (shop class), gyaran mota, aikin gona ko gyaran kayan soja; yawancinsu ba su taɓa sarrafa injin CNC ba.",
    startingPoint: "Suna iya karanta gajerun umarni, karanta tef ɗin awo, da lissafin lambobi cikakku da masu digo (decimal). Yawancinsu sun san masana'antu suna amfani da injinan da kwamfuta ke sarrafawa, amma ba za su iya faɗin sunayen injinan ko axis ɗinsu ba, ko karanta tolerance, ko karanta layin G-code, ko jera matakan setup mai lafiya ba.",
    gap: "Masu ɗaukar aiki, masu ɗaukar nauyin apprenticeship da shirye-shiryen machining suna son mutanen da suka san kalmomin farko, suke iya karanta zanen sashe da shiri mai sauƙi, kuma suke ɗaukar kariya da muhimmanci. Masu koyo suna buƙatar wannan tushe da tsari mai ranaku, don su zaɓi horo mai kyau, su guji ɓata kuɗi, kuma su iso a shirye don koyo a kan inji.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8); ana bayyana kowace kalmar shago",
      "Babu aikin inji a wannan kwas ɗin: sarrafa mill ko lathe yana buƙatar shago mai kulawa da ƙwararren malami",
      "Na'urori: waya ko kwamfutar ɗakin karatu don shafukan hukuma; takardar graph, fensir da rula don zane-zane da hanyoyin tool",
      "Lissafi: lambobi masu digo har wurare uku (dubu ɗaya na inci) da millimita masu sauƙi; ana ba da misalai da aka warware",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da makaranta, aiki da alƙawura",
      "G-code ya bambanta tsakanin na'urorin sarrafa inji (controls): masu koyo suna bin littafin jagora (manual) na injin da suke koyo a kai"
    ],
    prerequisites: "Babu. \"Everyday Math\" (Lissafin Yau da Kullum) yana taimakawa da lambobi masu digo; \"Fara Sana'a a Ayyukan Hannu na Ƙwarewa\" yana taimaka wa masu koyo su zaɓi sana'a, kuma wannan kwas ɗin yana zurfafa cikin machining."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku hotuna ko bayanin injinan shago da sassa", action: "faɗin injin CNC da ke yin kowane sashe da nuna axis X, Y da Z ɗinsa", standard: "aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku zanen sashe mai sauƙi mai girma masu tolerance", action: "rubuta mafi ƙanƙanta da mafi girman girma da aka yarda da shi ga kowane girma da yanke shawara ko sashen da aka auna ya ci", standard: "ba tare da kuskuren lissafi ba a girma 3" },
    { id: "O3", condition: "Idan aka ba ku gajeren shirin CNC mai layi 8 zuwa 12", action: "bayyana abin da kowane layin G-code da M-code ke yi da zana hanyar tool a takardar graph", standard: "motsin, wurin farawa da wurin ƙarewa duk daidai" },
    { id: "O4", condition: "Idan aka ba ku matakan setup da sashe na farko a cakuɗe", action: "jera matakan setup mai lafiya da sashe na farko a tsarin da ya dace", standard: "dry run da first-article inspection suna gaban fara aiki mai yawa (production)" },
    { id: "O5", condition: "Idan aka ba ku haɗurra biyar da aka saba gani a shagon inji", action: "faɗin hanyar kariya ɗaya ga kowane haɗari: guard, kayan kariya, ɗabi'a mai lafiya ko lockout", standard: "hanyar kariya daidai ga dukkan biyar" },
    { id: "O6", condition: "Ta amfani da shafukan hukuma na horo, apprenticeship da NIMS", action: "rubuta tsari mai ranaku don samun horo da takardar shaidar machining", standard: "da shirye-shirye biyu, takardar shaida ɗaya da rana ga kowane mataki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Injina, zane-zane da shirye-shirye",
      lessons: [
        {
          title: "Abin da injinan CNC ke yi da yadda suke motsi",
          objectives: ["O1"],
          minutes: 5,
          goal: "Faɗin sunayen manyan injinan CNC da nuna axis X, Y da Z ɗinsu.",
          text: [
            "CNC yana nufin computer numerical control, wato sarrafa inji da kwamfuta ta lambobi. Injin CNC yana bin shiri (program) don motsa tool mai yanka ko sashe a kan hanyoyi daidai. Machining yana nufin yanke kayan a ɗan-ɗan (chips) har sai sashen ya sami siffa da girman da ya dace.",
            "Injin mill na CNC (ko machining center) yana riƙe sashe a tsaye a kan tebur yayin da tool mai juyawa ke yanka shi. Yana yin fuskoki masu lebur, ramuka marasa huji (pockets), ramuka masu tsawo (slots) da huji, kamar bracket ko farantin injin mota. Injin lathe na CNC (ko turning center) yana juya sashen yayin da tool a tsaye ke yanka shi. Yana yin sassa masu zagaye, kamar sanduna (shafts), turaku (pins) da bushings. Shaguna kuma suna amfani da CNC router don itace da roba, da CNC plasma da laser don yanke zanen ƙarfe.",
            "Kowace hanya da inji zai iya motsawa ana kiranta axis. A injin mill na tsaye (vertical mill) da aka saba gani, X yana motsi hagu da dama, Y yana zuwa wajenku da nesa da ku, Z kuma yana hawa da sauka tare da spindle. A lathe, Z yana bin tsawon sashen da ke juyawa, X kuma yana ratsa shi, wanda ke saita faɗin zagayensa (diameter). Manyan injina suna ƙara axis masu juyawa, don haka injin \"5-axis\" zai iya karkatar da sashe ya kuma juya shi."
          ],
          words: [["CNC", "computer numerical control: injin da ke bin shiri na lambobi da lambobin umarni (codes)."], ["Mill", "injin da tool mai juyawa ke yanka sashen da aka riƙe a kan tebur."], ["Lathe", "injin da sashe ke juyawa, tool a tsaye kuma yana yanka shi; yana yin sassa masu zagaye."], ["Spindle", "ɓangaren injin da ke juya tool (a mill) ko sashe (a lathe)."], ["Axis", "hanya ɗaya da inji zai iya motsawa, kamar X, Y ko Z."]],
          slides: [
            { title: "CNC = sarrafa inji da kwamfuta ta lambobi", bullets: ["Shiri yana motsa tool ko sashe a kan hanyoyi daidai", "Machining yana yanke kayan a ɗan-ɗan (chips)"] },
            { title: "Mill da lathe", bullets: ["Mill: sashe a tsaye, tool mai juyawa yana yanka: fuskoki, pockets, slots, huji", "Lathe: sashe yana juyawa, tool a tsaye yana yanka: shafts, pins, bushings"] },
            { title: "Axis a injin mill na tsaye", bullets: ["X: hagu da dama", "Y: zuwa wajenku da nesa da ku", "Z: hawa da sauka tare da spindle"] },
            { title: "Axis a lathe", bullets: ["Z: bisa tsawon sashe", "X: ya ratsa sashe; yana saita diameter", "Injinan 5-axis suna ƙara karkata da juyawa"] }
          ],
          tryIt: "Ku nemo sassan ƙarfe ko roba uku a gida (ƙusa mai kai (bolt), maɗaurin ƙofa (hinge), murfin alƙalami, sashen keke). Ga kowanne, ku rubuta \"mill\" ko \"lathe\" da dalili. Sannan ku zana injin mill na tsaye a matsayin akwati mai spindle a sama, ku nuna X, Y da Z da kibiyoyi.",
          youCanNow: "faɗin abin da injin mill na CNC da injin lathe na CNC ke yi, da nuna axis X, Y da Z a kowanne.",
          quickCheck: [
            { objective: "O1", q: "Wani shago yana buƙatar turakun ƙarfe masu zagaye 500. Wane inji ne ya fi dacewa?", options: ["CNC plasma cutter", "CNC lathe", "CNC router na itace", "Injin lanƙwasa zanen ƙarfe (brake)"], answer: 1, why: "Lathe yana juya sashe, don haka yana yin sassa masu zagaye kamar pins da shafts." },
            { objective: "O1", q: "A injin mill na tsaye da aka saba gani, wane axis ne ke hawa da sauka da spindle?", options: ["X", "Y", "A", "Z"], answer: 3, why: "A injin mill na tsaye, Z shi ne axis na hawa da saukar spindle." }
          ]
        },
        {
          title: "Karanta zanen sashe: girma da tolerance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rubuta mafi ƙanƙanta da mafi girman girma da aka yarda da shi ga girma mai tolerance da yanke shawara ko sashe ya ci.",
          text: [
            "Zanen sashe (print, ko blueprint ko drawing) yana nuna sashen daga gefe daban-daban kuma yana ba da kowane girma da kuke buƙata. Kowane girma ana kiransa dimension. Shagunan Amurka sukan yi amfani da inci da aka rubuta da wurare uku ko huɗu bayan digo; shaguna da yawa suna amfani da millimita. Title block, a kusurwar zanen, yana nuna sunan sashe, kayan da aka yi shi da shi, ma'aunin da ake amfani da shi (units) da tolerance na gaba ɗaya.",
            "Babu sashen da za a iya yi daidai ɗari bisa ɗari, don haka zanen yana faɗin nisan da girma zai iya karkata. Wannan izinin shi ne tolerance. \"1.000 ±0.005\" yana nufin girman zai iya kasancewa daga 0.995 zuwa 1.005 na inci. Waɗannan lambobi biyu su ne iyakoki (limits). Idan girma ba shi da tolerance a rubuce kusa da shi, tolerance na gaba ɗaya a title block ne ke aiki.",
            "Masu aikin inji suna duba girma da kayan awo. Calipers suna auna girman waje, ciki da zurfi da sauri. Micrometer yana auna da ƙarin daidaito a ƙaramin zango. Ana tsaftace kayan awo kuma ana duba su da wani ma'auni da aka sani, saboda kayan awo mai datti ko wanda ya faɗi zai iya ba da karatu mara daidai."
          ],
          steps: ["Ku nemo girman da ma'aunin sa (inci ko mm) a zanen.", "Ku nemo tolerance ɗinsa kusa da shi, ko tolerance na gaba ɗaya a title block.", "Ku cire tolerance don mafi ƙanƙantar girma; ku ƙara shi don mafi girma.", "Ku kwatanta girman da aka auna: idan yana tsakanin iyakokin, girman ya ci."],
          words: [["Zanen sashe (print)", "zanen sashe da duk girmansa; ana kuma kiransa blueprint."], ["Dimension (girma)", "girman da aka nuna a zane, kamar tsawo, faɗi ko diameter na huji."], ["Tolerance", "nisan da girma zai iya karkata kuma ya kasance mai kyau, kamar ±0.005."], ["Iyakoki (limits)", "mafi ƙanƙanta da mafi girman girma da aka yarda da shi."], ["Title block", "akwatin da ke kan zane mai sunan sashe, kayan, ma'auni da tolerance na gaba ɗaya."], ["Caliper / micrometer", "kayan awo; micrometer ya fi daidaito a ƙaramin zango."]],
          slides: [
            { title: "Zane yana ba da kowane girma", bullets: ["Kowane girma dimension ne", "Inci (sau da yawa wurare 3 ko 4 bayan digo) ko millimita", "Title block: sashe, kaya, ma'auni, tolerance na gaba ɗaya"] },
            { title: "Tolerance = kuskuren da aka yarda da shi", bullets: ["1.000 ±0.005 yana nufin 0.995 zuwa 1.005", "Babu tolerance a rubuce? Ku yi amfani da na title block"] },
            { title: "Ku lissafa iyakokin", bullets: ["Mafi ƙanƙanta = girma a cire tolerance", "Mafi girma = girma a ƙara tolerance", "Tsakanin iyakokin = ya ci"] },
            { title: "Kayan awo", bullets: ["Calipers: girman waje, ciki da zurfi da sauri", "Micrometer: ya fi daidaito a ƙaramin zango", "Ku kiyaye kayan awo da tsabta kuma a duba su"] }
          ],
          tryIt: "Atisaye kawai. Ku lissafa iyakokin: (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Sannan ku yanke shawara: sashen da aka auna 0.753 don (b), ya ci? (Amsoshi: a 2.490 zuwa 2.510; b 0.748 zuwa 0.752; c 24.9 zuwa 25.1 mm; 0.753 ya yi girma da yawa, don haka bai ci ba.)",
          youCanNow: "nemo girma da tolerance ɗinsa a zane, lissafa iyakokinsa, da yanke shawara ko sashen da aka auna ya ci.",
          quickCheck: [
            { objective: "O2", q: "Zane ya ce 1.250 ±0.003. Mene ne iyakokin?", options: ["1.247 zuwa 1.253", "1.250 zuwa 1.253", "1.220 zuwa 1.280", "1.247 zuwa 1.250"], answer: 0, why: "Ku cire 0.003 don mafi ƙanƙantar girma kuma ku ƙara 0.003 don mafi girma." },
            { objective: "O2", q: "Wani girma ba shi da tolerance a rubuce kusa da shi. Ina za ku duba?", options: ["Ku tambayi injin", "Ku yi zaton ±0.1", "Tolerance na gaba ɗaya a title block", "Kowane tolerance ya isa"], answer: 2, why: "Title block yana ba da tolerance na gaba ɗaya don girman da ba su da nasu." }
          ]
        },
        {
          title: "Karanta gajeren shirin CNC",
          objectives: ["O3"],
          minutes: 6,
          goal: "Bayyana abin da kowane layin gajeren shirin G-code ke yi da zana hanyar tool ɗinsa.",
          text: [
            "Yawancin injinan CNC suna karanta shirin da aka rubuta da G-code. Kowane layi, wanda ake kira block, yana ba da umarni ɗaya ko kaɗan. G-codes galibi suna gaya wa injin yadda zai motsa. M-codes suna kunnawa da kashe ayyukan inji. Haruffa masu lambobi suna ba da cikakken bayani: X, Y da Z wurare ne, F shi ne feed rate (saurin motsin tool yayin yanka), S shi ne saurin spindle, T kuma yana zaɓar tool.",
            "Lambobin da aka saba gani a injina da yawa: G00 motsi ne mai sauri (rapid), ba yanka ba. G01 motsin yanka ne a miƙe a feed rate. G02 da G03 suna yanka lanƙwasa (arcs), bisa hanyar agogo da kishiyar hanyar agogo. G20 yana saita inci, G21 kuma yana saita millimita. G90 yana nufin ana auna wurare daga wurin sifili (zero point) na sashe (absolute). M03 yana kunna spindle bisa hanyar agogo, M05 yana tsayar da shi, M08 yana kunna coolant, M09 yana kashe shi, M30 kuma yana ƙare shirin.",
            "Lambobin za su iya bambanta daga wani control na inji zuwa wani, don haka mai aikin inji yana duba littafin jagora (manual) na injin da ke gabansa koyaushe. Shaguna da yawa suna rubuta shirye-shirye da manhajar CAM, amma masu aikin inji har yanzu suna karanta lambobin don kama kurakurai kafin tool ya motsa. Mai duba G-code kyauta a browser zai iya zana hanyar shiri, amma takardar graph ma tana aiki sosai don atisaye."
          ],
          steps: ["Ku karanta layukan farko: ma'auni (G20 ko G21) da yanayin absolute (G90).", "Ku nemo tool (T), saurin spindle (S) da kunna spindle (M03).", "Ga kowane motsi, ku rubuta lambar (G00 ko G01) da wurin X, Y da Z.", "Ku sa kowane wurin X da Y a takardar graph ku haɗa su bisa tsari: layin ɗigo don rapid, cikakken layi don yanka.", "Ku nemo ƙarshe: tsayar da spindle (M05), kashe coolant (M09) da ƙarshen shiri (M30)."],
          words: [["G-code", "lambobin umarni, galibi na motsi, da injin CNC ke karantawa."], ["M-code", "lambobin da ke kunnawa ko kashe ayyukan inji, kamar spindle ko coolant."], ["Block", "layi ɗaya na shirin CNC."], ["Feed rate (F)", "saurin motsin tool yayin da yake yanka."], ["Saurin spindle (S)", "saurin juyawar spindle, a juyi a minti ɗaya (RPM)."], ["Toolpath (hanyar tool)", "hanyar da tool ke bi."], ["CAM", "manhajar da ke mayar da zanen 3D zuwa shirin CNC."]],
          slides: [
            { title: "Shiri jerin blocks ne", bullets: ["G-codes: galibi motsi", "M-codes: kunnawa da kashe ayyukan inji", "X, Y, Z wurare; F feed; S sauri; T tool"] },
            { title: "G-codes da aka saba gani", bullets: ["G00 motsi mai sauri, ba yanka ba", "G01 motsin yanka a miƙe", "G02 / G03 lanƙwasa, bisa hanyar agogo / kishiyar hanyar agogo", "G20 inci, G21 mm, G90 absolute"] },
            { title: "M-codes da aka saba gani", bullets: ["M03 kunna spindle bisa hanyar agogo, M05 tsayar da spindle", "M08 kunna coolant, M09 kashe coolant", "M30 ƙarshen shiri"] },
            { title: "Ku karanta, sannan ku zana", bullets: ["Ku sa kowane wurin X da Y a takardar graph", "Layin ɗigo = rapid, cikakken layi = yanka", "Lambobi sun bambanta tsakanin controls: ku duba manual na injin"] }
          ],
          tryIt: "Atisaye kawai, a takardar graph (murabba'i 1 = inci 0.1). Ku bayyana kowane layi, sannan ku zana shi: G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. Ya kamata ku sami murabba'i mai inci 1 da aka yanka zurfin inci 0.05.",
          youCanNow: "karanta gajeren shirin CNC layi bayan layi da zana hanyar da tool zai bi.",
          quickCheck: [
            { objective: "O3", q: "Me G01 X2.0 F10.0 ke gaya wa injin ya yi?", options: ["Motsi mai sauri zuwa X2.0 ba tare da yanka ba", "Tsayar da spindle", "Kunna coolant", "Yanka a miƙe zuwa X2.0 a feed rate 10"], answer: 3, why: "G01 motsin yanka ne a miƙe, F kuma yana saita feed rate." },
            { objective: "O3", q: "Wace lamba ce yawanci ke fara juya spindle bisa hanyar agogo?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 shi ne kunna spindle bisa hanyar agogo a yawancin controls; M30 yana ƙare shiri, M09 kuma yana kashe coolant." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Injina, zane-zane da shirye-shirye",
        questions: [
          { objective: "O1", q: "Sashe farantin aluminum ne mai lebur da pocket da huji huɗu. Wane inji ne ya fi dacewa?", options: ["CNC lathe", "CNC mill", "Tef ɗin awo", "Injin huda (drill press) kawai"], answer: 1, why: "Mill yana yin fuskoki masu lebur, pockets da huji a sashen da aka riƙe a tsaye a kan tebur." },
          { objective: "O1", q: "A lathe, wane axis ne ke bin tsawon sashen da ke juyawa?", options: ["Z", "X", "Y", "B"], answer: 0, why: "A lathe, Z yana bin tsawon sashe, X kuma yana ratsa shi, yana saita diameter." },
          { objective: "O2", q: "Dole shaft ya zama 0.500 ±0.001. An auna shi 0.4995. Ya ci?", options: ["A'a, ya yi ƙanƙanta", "A'a, duk girman da ke ƙasa da 0.500 bai ci ba", "E, yana tsakanin 0.499 da 0.501", "Ba za a iya sani ba"], answer: 2, why: "Iyakokin su ne 0.499 zuwa 0.501, kuma 0.4995 yana tsakaninsu." },
          { objective: "O3", q: "Layin shiri ya ce G00 Z1.0. Me zai faru?", options: ["Tool zai yanka ƙasa inci 1", "Coolant zai kunna", "Shirin zai ƙare", "Tool zai motsa da sauri, ba yanka ba, zuwa Z1.0"], answer: 3, why: "G00 motsi ne mai sauri; a nan yana ɗaga tool sama zuwa Z1.0." },
          { objective: "O3", q: "Injin horonku yana amfani da lambar da ba ku taɓa gani ba. Me za ku yi?", options: ["Ku yi zato daga wani inji", "Ku duba manual na control ɗin wannan injin", "Ku goge layin", "Ku kunna ku kalla"], answer: 1, why: "Lambobi sun bambanta tsakanin controls, don haka manual na injin kansa ne tushen bayani." }
        ]
      }
    },
    {
      name: "Babi na 2: Setup, kariya da hanyarku",
      lessons: [
        {
          title: "Yin setup da sashe na farko",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera matakan setup mai lafiya da sashe na farko a tsarin da ya dace.",
          text: [
            "Kafin shago ya yi sassa da yawa, wani yana yin setup na injin kuma yana tabbatar da shirin. Sababbin masu sarrafa inji sukan fara da saka sassa da duba girma, sannan su koyi setup a ƙarƙashin babban mai aikin inji.",
            "Setup yana nufin: karanta zane da setup sheet, tsaftace tebur ko chuck, riƙe sashe da ƙarfi (workholding, kamar vise ko chuck), saka tools da suka dace, da saita offsets. Work offset yana gaya wa injin inda wurin sifili na sashe yake. Tool offset yana gaya masa tsawon kowane tool, don bakinsa ya sauka a wurin da ya dace.",
            "Sannan ana tabbatar da shirin a hankali. Dry run yana motsa injin yayin da tool ke sama da sashe lafiya. Single block yana gudanar da layi ɗaya a lokaci ɗaya. Maɓallin feed override yana rage saurin motsi, mai sarrafa inji kuma yana ajiye hannu kusa da feed hold ko maɓallin tsayawar gaggawa (emergency stop). Bayan an yanka sashe na farko, ana auna shi da kowane girma a zanen. Wannan shi ne first-article inspection. Sai idan ya ci ne ake fara yin sassa da yawa (production)."
          ],
          steps: ["Ku karanta zane, setup sheet da shiri.", "Ku tsaftace tebur, vise ko chuck ku riƙe sashe da ƙarfi.", "Ku saka tools da aka lissafa a setup sheet.", "Ku saita work offset da tool offsets.", "Ku yi dry run sama da sashe, sannan ku yi single block tare da rage feed override.", "Ku auna sashe na farko da kowane girma (first-article inspection).", "Ku fara production ne kawai bayan sashe na farko ya ci; ku ci gaba da duba sassa yayin aiki."],
          words: [["Setup sheet", "takardar da ke lissafa tools, workholding da offsets na wani aiki."], ["Workholding", "abin da ke riƙe sashe a tsaye, kamar vise, clamps ko chuck."], ["Work offset", "saitin da ke gaya wa injin inda wurin sifili na sashe yake."], ["Tool offset", "saitin tsawon (da girman) kowane tool, don bakinsa ya sauka a wurin da ya dace."], ["Dry run", "gudanar da shiri yayin da tool ke nesa da sashe lafiya."], ["First-article inspection", "auna sashe na farko da dukkan zanen kafin a yi wasu."]],
          slides: [
            { title: "Ku shirya", bullets: ["Ku karanta zane, setup sheet da shiri", "Ku tsaftace ku riƙe sashe da ƙarfi", "Ku saka tools da suka dace"] },
            { title: "Ku saita offsets", bullets: ["Work offset: inda sifili na sashe yake", "Tool offsets: tsawon kowane tool"] },
            { title: "Ku tabbatar a hankali", bullets: ["Dry run tare da tool nesa da sashe", "Single block, an rage feed override", "Hannu kusa da feed hold ko emergency stop"] },
            { title: "Sashe na farko da farko", bullets: ["Ku auna kowane girma a zanen", "Production yana farawa ne kawai idan ya ci", "Ku ci gaba da duba sassa yayin aiki"] }
          ],
          tryIt: "Ku rubuta kowanne daga cikin waɗannan a ƙaramar takarda, ku cakuɗa su, sannan ku jera su: saita tool offsets; first-article inspection; tsaftace da riƙe sashe; dry run; karanta zane da setup sheet; gudanar da single block; saita work offset; saka tools; fara production. Ku kwatanta tsarinku da matakan wannan darasi.",
          youCanNow: "jera matakan setup da sashe na farko, da faɗin dalilin da yasa dry run da first-article inspection ke zuwa kafin production.",
          quickCheck: [
            { objective: "O4", q: "Wane saiti ne ke gaya wa injin inda wurin sifili na sashe yake?", options: ["Feed rate", "Tool offset", "Work offset", "Saurin spindle"], answer: 2, why: "Work offset yana nuna sifili na sashe; tool offsets suna saita tsawon kowane tool." },
            { objective: "O4", q: "An yanka sashe na farko. Me ke zuwa kafin a yi sauran aikin?", options: ["Ku auna shi da kowane girma a zanen", "Ku kai feed override zuwa mafi girma", "Ku cire guards don ku ga sosai", "Ku goge shirin"], answer: 0, why: "First-article inspection yana tabbatar da setup da shiri kafin production." }
          ]
        },
        {
          title: "Zama lafiya a shagon inji",
          objectives: ["O5"],
          minutes: 5,
          goal: "Faɗin hanyar kariya ga kowane haɗari da aka saba gani a shagon inji.",
          text: [
            "Injina za su iya murƙushe yatsu ko hannaye, su yanke sassan jiki, su ƙone, su kuma makantar da mutum. Manyan haɗurra su ne spindle, chuck da tool masu juyawa, chips masu tashi, chips da gefuna masu kaifi da zafi, coolant a fata, sassa masu nauyi da hayaniya. Ƙa'idojin kare inji (machine guarding) na OSHA (hukumar kiyaye lafiya a wurin aiki ta Amurka; 29 CFR 1910.212) suna buƙatar guards da ke kare ma'aikata daga waɗannan haɗurra.",
            "Ɗabi'un shago: ku sa gilashin kariya mai kariyar gefe (side shields) koyaushe, da kariyar kunne inda ake hayaniya. Ku ajiye ƙofofin inji da guards a rufe yayin da yake aiki, kuma kada ku saka hannu ciki sai spindle ya tsaya gaba ɗaya. Yawancin shaguna ba sa yarda da safar hannu (gloves), hannayen riga masu sako-sako, kayan ado ko dogon gashi a sake kusa da spindle mai juyawa, saboda za su iya kamuwa su ja ku ciki. Ku cire chips da ƙugiyar chips (chip hook) ko burushi, ba da hannunku ba, kuma kada ku hura chips zuwa kanku ko wasu. Ku wanke coolant daga fatarku kuma ku karanta takardar bayanan kariya (SDS).",
            "Idan ana tsaftace inji, ana gyara shi ko ana yi masa hidima, ana kashe wutarsa kuma a kulle ta don kada wani ya kunna shi. Wannan shi ne lockout/tagout, wanda ƙa'idar OSHA kan makamashi mai haɗari (29 CFR 1910.147) ta ƙunsa, kuma ma'aikata da aka horar kuma aka ba izini ne kaɗai ke yi. Ƙwararren malami ne ke koyar da kariya ta hannu a shago; ku bi ƙa'idojin shagonku kowane lokaci."
          ],
          steps: ["Ku sa gilashin kariya mai side shields, da kariyar kunne inda ake buƙata.", "Ku cire gloves, kayan ado da hannayen riga masu sako-sako; ku ɗaure dogon gashi.", "Ku duba cewa guards da ƙofofi suna wurinsu kuma a rufe.", "Ku jira spindle ya tsaya gaba ɗaya kafin ku buɗe ƙofa ko ku saka hannu ciki.", "Ku cire chips da chip hook ko burushi, ba da hannunku ba.", "Don tsaftacewa ko gyara, ku bi matakan lockout/tagout na shagon."],
          words: [["Guard", "murfi ko ƙofa da ke nisantar da hannaye da chips daga sassan da ke motsi."], ["Chips", "ƙananan guntaye masu lanƙwasa na ƙarfe ko roba da tool ke yankewa; sau da yawa masu kaifi da zafi."], ["Coolant", "ruwan da ke sanyaya tool da sashe kuma yana wanke chips."], ["SDS", "safety data sheet: takardar da ke lissafa haɗurran wani kaya da yadda ake kariya."], ["Lockout/tagout", "kashe wutar inji da kulle ta don kada wani ya kunna shi yayin gyara."]],
          slides: [
            { title: "Haɗurran inji", bullets: ["Spindle, chuck da tool masu juyawa", "Chips masu tashi, kaifi da zafi", "Coolant a fata, sassa masu nauyi, hayaniya"] },
            { title: "Ku kare kanku", bullets: ["Gilashin kariya mai side shields, koyaushe", "Kariyar kunne inda ake hayaniya", "Babu gloves, kayan ado ko hannayen riga masu sako kusa da spindle; ku ɗaure gashi"] },
            { title: "Ɗabi'u masu lafiya", bullets: ["Guards da ƙofofi a rufe yayin aiki", "Ku jira cikakkiyar tsayawa kafin saka hannu", "Chip hook ko burushi, ba hannunku ba"] },
            { title: "Gyara = lockout/tagout", bullets: ["An kashe wuta an kulle kafin tsaftacewa ko gyara", "OSHA 29 CFR 1910.147; ma'aikata da aka horar kawai", "Ku bi ƙa'idojin shagonku kowane lokaci"] }
          ],
          sources: [
            { name: "OSHA: Ƙa'idojin kare inji (Machine Guarding)", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA: Sarrafa makamashi mai haɗari (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Ku yi tebur mai ginshiƙi biyu a takarda: Haɗari da Kariya. Ku cika layuka biyar: spindle mai juyawa, chips masu tashi, chips masu kaifi da zafi, coolant a fata, injin da ake gyarawa. Ku rubuta hanyar kariya ɗaya ga kowanne, sannan ku kwatanta su da wannan darasi.",
          youCanNow: "faɗin manyan haɗurran shagon inji da hanyar kariya ga kowanne.",
          quickCheck: [
            { objective: "O5", q: "Tarin chips masu zafi yana taruwa kusa da vise. Ta yaya za ku cire shi?", options: ["Ku share su da hannunku", "Ku hura su da iska zuwa wajen abokin aiki", "Ku saka hannu ciki yayin da spindle ke juyawa", "Ku jira cikakkiyar tsayawa, sannan ku yi amfani da chip hook ko burushi"], answer: 3, why: "Chips suna da kaifi da zafi; chip hook ko burushi yana kiyaye hannayenku." },
            { objective: "O5", q: "Inji yana buƙatar gyara a ciki. Me dole ya fara faruwa?", options: ["Ku rage feed override", "Ma'aikaci mai izini ya kashe wutarsa ya kulle ta (lockout)", "Ku buɗe ƙofa yayin da yake aiki", "Ku sa gloves"], answer: 1, why: "Lockout/tagout yana hana kowa kunna injin yayin gyara." }
          ]
        },
        {
          title: "Horo, takardun shaida da tsarin CNC naku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta tsari mai ranaku don samun horo da takardar shaidar machining.",
          text: [
            "Yawancin masu aikin inji suna koyo a wurin aiki, sau da yawa suna farawa a matsayin masu sarrafa inji. Kwalejojin al'umma (community colleges) da makarantun fasaha suna ba da takardun shaida da digiri na shekara biyu da suka ƙunshi karanta zane (blueprint reading) da rubuta shirin CNC da sarrafa shi. Registered apprenticeship (koyon sana'a mai rajista) yana haɗa aiki mai albashi da azuzuwa, kuma yawanci yana ɗaukar shekaru da yawa. Ku nemi ɗaya da Apprenticeship Job Finder a apprenticeship.gov. Tsofaffin sojoji za su iya tambaya game da amfani da tallafin karatunsu, matasa kuma za su iya tambaya game da shirye-shirye a makarantarsu ko cibiyar aiki.",
            "Takardun shaida suna nuna wa mai ɗaukar aiki abin da za ku iya yi. National Institute for Metalworking Skills (NIMS) tana kafa ƙa'idoji da takardun shaida don ayyukan machining. Yawancin takardun shaidar NIMS suna da sassa biyu: jarabawa kan ilimin aikin, da gwajin aiki da hannu (performance check), kamar yin sashe bisa zane. Ku duba sunayen takardun shaida da sharuɗɗansu na yanzu a nims-skills.org. Wasu masu ɗaukar aiki kuma suna daraja takardun shaidar CNC ko CAD/CAM daga makaranta ko kamfanin da ke yin injina.",
            "Wannan kwas ɗin yana shirya ku; ba ya ba ku takardar shaida. Ku yi hankali da duk shirin da ya yi alƙawarin aiki ko takardar shaida cikin sauri don kuɗi mai yawa. Ku tambayi makarantar game da lokacin aiki a kan injina na gaske, takardun shaidar da take shirya ku don su, da yawan waɗanda suka gama da ke samun aiki."
          ],
          steps: ["Ku zaɓi manufa ta farko: aikin operator, shirin makaranta ko apprenticeship.", "Ku nemo shirye-shirye biyu kusa da ku: kwalejin al'umma ko makarantar fasaha, da apprenticeship a apprenticeship.gov.", "Ku duba takardar shaidar NIMS ta aikin da kuke so a nims-skills.org.", "Ku tambayi kowane shiri game da lokacin aiki a inji, takardun shaida, kuɗi da samar da aiki.", "Ku rubuta rana ga kowane mataki: neman shiga, farawa, atisaye, jarabawa."],
          words: [["Apprenticeship", "aiki mai albashi tare da horo a wurin aiki da azuzuwa, sau da yawa na shekaru da yawa."], ["Takardar shaida (credential)", "shaida, kamar satifiket, cewa kun ci gwajin ƙwarewarku."], ["NIMS", "National Institute for Metalworking Skills, wadda ke kafa ƙa'idoji da takardun shaidar machining."], ["Performance check", "gwaji na hannu inda kuke yin aikin, kamar yin sashe bisa zane."]],
          slides: [
            { title: "Hanyoyin shiga", bullets: ["Ku fara a matsayin operator ku koyi a wurin aiki", "Satifiket na kwalejin al'umma ko makarantar fasaha", "Registered apprenticeship: aiki mai albashi da azuzuwa"] },
            { title: "Takardun shaida", bullets: ["NIMS: ƙa'idoji da takardun shaidar machining", "Yawanci jarabawa da gwajin aiki da hannu", "Ku duba sunaye da matakai na yanzu a nims-skills.org"] },
            { title: "Ku zaɓi shiri da hikima", bullets: ["Ku tambayi game da lokaci a kan injina na gaske", "Ku tambayi takardun shaidar da yake shirya ku don su", "Ku yi hankali da alƙawura masu sauri da tsada"] },
            { title: "Tsarinku mai ranaku", bullets: ["Shirye-shirye biyu, takardar shaida ɗaya", "Rana don neman shiga, farawa, atisaye da jarabawa"] }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarin farawa na CNC naku. Ku zana mill da lathe tare da axis ɗinsu, ku lissafa iyakokin girma uku masu tolerance, ku rubuta ku bayyana gajeren shiri don murabba'i ko slot ku zana shi, ku rubuta jerin binciken setup da kariya, ku kuma rubuta tsari mai ranaku mai shirye-shirye biyu kusa da ku da takardar shaidar NIMS ɗaya daga shafin hukuma.",
          youCanNow: "nemo horon machining kusa da ku, faɗin takardar shaidar da za ku nema, da bin tsari mai ranaku don isa can.",
          quickCheck: [
            { objective: "O6", q: "Ina za ku iya neman registered apprenticeships a Amurka?", options: ["Tallan aiki da ke neman kuɗi don neman shiga", "Rubutu a kafofin sada zumunta", "Apprenticeship Job Finder a apprenticeship.gov", "Saƙon tes daga baƙo"], answer: 2, why: "Apprenticeship.gov shafin hukuma ne na Ma'aikatar Ƙwadago ta Amurka mai Job Finder." },
            { objective: "O6", q: "Me yawancin takardun shaidar NIMS suka ƙunsa?", options: ["Jarabawa da gwajin aiki da hannu", "Bidiyon intanet kawai", "Kuɗi kawai", "Wasiƙa daga aboki"], answer: 0, why: "NIMS tana bayyana jarabawa kan ilimin aikin tare da gwajin aiki (performance evaluation)." }
          ],
          sources: [
            { name: "NIMS: Ba da takardun shaida (Credentialing)", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (Ma'aikatar Ƙwadago ta Amurka)", url: "https://www.apprenticeship.gov/" },
            { name: "BLS Occupational Outlook Handbook: Machinists da Tool and Die Makers", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Setup, kariya da hanyarku",
        questions: [
          { objective: "O4", q: "Me yasa ake yin dry run kafin yanka sashe na farko?", options: ["Don nemo kurakuran shiri yayin da tool ke nesa da sashe lafiya", "Don sa injin ya yi sauri", "Don tsallake first-article inspection", "Don dumama coolant"], answer: 0, why: "Dry run yana nuna motsin ba tare da yanka ba, don haka ana kama kurakurai lafiya." },
          { objective: "O4", q: "Wane mataki ne ke zuwa nan da nan bayan riƙe sashe da saka tools?", options: ["Fara production", "First-article inspection", "Saita work offset da tool offsets", "Aika sassan"], answer: 2, why: "Dole a saita offsets kafin a iya tabbatar da shiri da yanka sashe na farko." },
          { objective: "O5", q: "Me yasa yawancin shaguna ke hana gloves kusa da spindle mai juyawa?", options: ["Suna sa hannayenku su yi sanyi", "Za su iya kamuwa su ja hannunku ciki", "Suna da tsada sosai", "Suna ɓoye zane-zanen jikinku"], answer: 1, why: "Spindle ko tool mai juyawa zai iya kama glove ya ja hannu ciki." },
          { objective: "O5", q: "Wace kariya kuke sa wa koyaushe a shagon inji?", options: ["Hular kariya (hard hat) kawai", "Gloves", "Takalmi silifas", "Gilashin kariya mai side shields"], answer: 3, why: "Chips masu tashi za su iya makantar da ku, don haka ana sa kariyar ido koyaushe." },
          { objective: "O6", q: "Wata makaranta ta yi alƙawarin aikin CNC cikin mako ɗaya don kuɗi mai yawa. Me za ku yi?", options: ["Ku tambayi game da lokacin inji, takardun shaida da ɗaukar aiki, ku kwatanta da wasu shirye-shirye", "Ku biya nan take", "Ku ba su bayanan shiga bankinku", "Ku sa hannu ba tare da karantawa ba"], answer: 0, why: "Duba abin da shiri ke bayarwa da gaske yana kare lokacinku da kuɗinku." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Injin CNC (CNC Machining)",
    questions: [
      { objective: "O1", q: "Me CNC ke nufi?", options: ["Central number cutting", "Computer numerical control", "Cut now carefully", "Cold nickel coating"], answer: 1, why: "CNC yana nufin computer numerical control (sarrafa inji da kwamfuta ta lambobi)." },
      { objective: "O1", q: "Wane sashe ne aka fi yiwuwa a yi shi a CNC lathe?", options: ["Bracket mai lebur da slots", "Akwatin zanen ƙarfe", "Shaft mai zagaye", "Allon suna na itace"], answer: 2, why: "Lathe yana juya sashe, don haka yana yin sassa masu zagaye kamar shafts." },
      { objective: "O1", q: "A injin mill na tsaye, wane axis ne ke zuwa wajenku da nesa da ku?", options: ["Y", "Z", "X", "C"], answer: 0, why: "A injin mill na tsaye, Y yana motsi zuwa wajen mai sarrafawa da nesa da shi." },
      { objective: "O2", q: "Mene ne tolerance?", options: ["Kayan da aka yi sashe da shi", "Saurin injin", "Nisan da girma zai iya karkata kuma ya kasance mai kyau", "Sunan sashe"], answer: 2, why: "Tolerance shi ne kuskuren da aka yarda da shi a girma." },
      { objective: "O2", q: "Zane ya ce 3.000 ±0.005. Wane girman da aka auna bai ci ba?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "Iyakokin su ne 2.995 zuwa 3.005, don haka 3.006 ya yi girma da yawa." },
      { objective: "O2", q: "Ina za ku sami ma'auni da tolerance na gaba ɗaya a zane?", options: ["A cikin shiri", "A title block", "A ƙofar inji", "A setup sheet kawai"], answer: 1, why: "Title block yana lissafa sashe, kaya, ma'auni da tolerance na gaba ɗaya." },
      { objective: "O2", q: "Wane kayan awo ne ke auna da ƙarin daidaito a ƙaramin zango?", options: ["Micrometer", "Tef ɗin awo", "Rula", "Chip hook"], answer: 0, why: "Micrometer ya fi calipers ko rula daidaito a ƙaramin zangonsa." },
      { objective: "O3", q: "Wace lamba ce yawanci motsi mai sauri, ba yanka ba?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 motsin sauri ne na kai tool wuri (rapid)." },
      { objective: "O3", q: "A shirin CNC, me harafin F ke saitawa?", options: ["Lambar tool", "Feed rate yayin yanka", "Saurin spindle", "Sunan fayil"], answer: 1, why: "F shi ne feed rate; S saurin spindle ne, T kuma tool ne." },
      { objective: "O3", q: "Shiri ya fara da G21. Me yake saitawa?", options: ["Inci", "Kunna coolant", "Millimita", "Ƙarshen shiri"], answer: 2, why: "G21 yana saita millimita; G20 yana saita inci." },
      { objective: "O3", q: "Wace lamba ce yawanci ke ƙare shiri?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 yana ƙare shiri a yawancin controls." },
      { objective: "O4", q: "Me tool offset ke gaya wa injin?", options: ["Inda wurin sifili na sashe yake", "Saurin yanka", "Wane coolant za a yi amfani da shi", "Tsawon kowane tool, don bakinsa ya sauka daidai"], answer: 3, why: "Tool offsets suna saita tsawon kowane tool; work offset yana saita sifili na sashe." },
      { objective: "O4", q: "Lokacin tabbatar da sabon shiri, wace hanya ce mai lafiya ta gudanar da shi?", options: ["Cikakken sauri da ƙofa a buɗe", "Single block tare da rage feed override", "Tsallake dry run", "Barin injin yayin da yake aiki"], answer: 1, why: "Single block da ƙaramin feed override suna ba ku damar tsayawa kafin kuskure ya faru." },
      { objective: "O4", q: "Mene ne first-article inspection?", options: ["Karanta shafin farko na manual", "Tsaftace chip na farko", "Auna sashe na farko da kowane girma a zanen", "Saka tool na farko"], answer: 2, why: "Ana auna sashe na farko gaba ɗaya kafin production ya fara." },
      { objective: "O5", q: "Spindle yana rage gudu amma bai tsaya ba. Me za ku yi?", options: ["Ku jira har ya tsaya gaba ɗaya kafin ku buɗe ƙofa", "Ku saka hannu ku ɗauki sashe", "Ku tsayar da shi da hannunku", "Ku buɗe ƙofa ku duba sosai"], answer: 0, why: "Kada ku saka hannu ciki sai spindle ya tsaya gaba ɗaya." },
      { objective: "O5", q: "Wace ƙa'idar OSHA ce ta ƙunshi lockout/tagout na makamashi mai haɗari?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 ita ce ƙa'idar OSHA ta sarrafa makamashi mai haɗari (lockout/tagout)." },
      { objective: "O5", q: "Coolant ya shafi hannayenku. Me za ku yi?", options: ["Ku ƙyale shi", "Ku wanke shi ku duba SDS don kariya", "Ku goge shi a rigarku", "Ku ƙara coolant"], answer: 1, why: "Coolant zai iya ɓata fata; ku wanke shi ku bi SDS." },
      { objective: "O6", q: "Me wannan kwas ɗin ke ba ku?", options: ["Takardar shaidar NIMS", "Lasisin jiha", "Shiri don horo da jarabawar takardar shaida", "Tabbataccen aiki"], answer: 2, why: "Kwas ɗin yana shirya ku; takardun shaida suna zuwa ne daga cin gwaje-gwaje kamar jarabawar NIMS da gwajin aiki." },
      { objective: "O6", q: "Ina za ku duba sunaye da sharuɗɗan takardun shaidar NIMS na yanzu?", options: ["Rubutu a kafofin sada zumunta", "nims-skills.org", "Sharhi a ƙarƙashin bidiyo", "Kowane tallan aiki"], answer: 1, why: "Shafin hukuma na NIMS yana da takardun shaida da sharuɗɗa na yanzu." },
      { objective: "O6", q: "Me ya dace a cikin tsarin farawa na CNC mai kyau?", options: ["Shirye-shirye biyu, takardar shaida ɗaya da rana ga kowane mataki", "Burin aiki a masana'anta kawai", "Kuɗin da aka biya baƙo", "Babu ranaku, don ya kasance mai sassauci"], answer: 0, why: "Tsari mai sunayen shirye-shirye, takardar shaida da ranaku yana mayar da buri zuwa matakai." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Injina da axis", objective: "O1", notYet: "Zanen ya cakuɗa mill da lathe, ko axis sun ɓace ko ba daidai ba ne.", meets: "An zana mill da lathe tare da alamar X, Y da Z daidai.", exceeds: "Yana kuma faɗin sashe da kowane inji ke yi da inda injin 5-axis ke ƙara motsi." },
      { name: "Karanta zane", objective: "O2", notYet: "Iyaka ɗaya ko fiye ba daidai ba ne, ko hukuncin ya ci/bai ci ba daidai ba ne.", meets: "Duk girma uku suna da iyakoki daidai da hukuncin ya ci/bai ci ba daidai.", exceeds: "Yana kuma nuna misalin millimita kuma yana faɗin kayan awon da zai auna kowane girma da shi." },
      { name: "Shiri da hanyar tool", objective: "O3", notYet: "Ba a bayyana layuka ba, ko hanyar da aka zana ba ta dace da lambobin ba.", meets: "An bayyana kowane layi kuma hanyar da aka zana ta dace da lambobin, an nuna rapids da yanka.", exceeds: "Yana kuma ganowa da gyara kuskure ɗaya da abokin aiki ko malami ya saka a shirin." },
      { name: "Jerin binciken setup da kariya", objective: "O5", notYet: "Jerin ya bar guards, kariyar ido, tufafi ko chips.", meets: "Ya ƙunshi guards, kariyar ido da kunne, tufafi, chips, coolant da lockout don gyara.", exceeds: "Yana kuma bayyana dalilin muhimmancin kowane abu a gajeren layi ɗaya." },
      { name: "Tsarin setup", objective: "O4", notYet: "Production yana farawa kafin dry run ko first-article inspection.", meets: "Matakai suna bisa tsari, da offsets, dry run da first-article inspection kafin production.", exceeds: "Yana kuma ƙara bincike yayin aiki (in-process checks)." },
      { name: "Tsari mai ranaku", objective: "O6", notYet: "Babu shirye-shirye na gaske, babu takardar shaida, ko babu ranaku.", meets: "Shirye-shirye biyu na gaske kusa da mai koyo, takardar shaidar NIMS ɗaya daga shafin hukuma da rana ga kowane mataki.", exceeds: "Yana kuma lissafa tambayoyin da aka yi wa kowane shiri da amsoshin." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi shiga shirin machining, apprenticeship ko aikin operator cikin kwanaki 90",
      "Masu koyo da suka sami takardar shaidar NIMS ko wata takardar shaidar machining cikin shekara ɗaya",
      "Masu koyo da aka ɗauka aiki a matsayin machine operator, CNC operator ko apprentice, da rahoton masu ɗaukar aiki abokan hulɗa kan shirin sababbin ma'aikata"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfutar ɗakin karatu don shafukan hukuma (nims-skills.org, apprenticeship.gov)",
      "Takardar graph, fensir, rula da na'urar lissafi (calculator)",
      "Zaɓi: mai duba G-code kyauta a browser don duba hanyoyin tool da aka zana",
      "Zaɓi, tare da malami: calipers da micrometer don atisayen karatu a kan sassan misali",
      "Kusan minti 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare, sannan ku yi babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" kai tsaye.",
      "Babu aikin inji a wannan kwas ɗin. Idan kun gudanar da shi a shago, masu koyo suna kallo ne kawai kuma ba sa taɓa injina sai ƙwararren malami yana kulawa tare da duk guards da kayan kariya a wurinsu.",
      "Ku tunatar da masu koyo cewa G-code ya bambanta tsakanin controls; idan shirinku yana amfani da wani inji na musamman, ku raba jerin lambobinsa.",
      "Don aikin hanyar tool, ku saka kuskure ɗaya a gajeren shiri (M05 da ya ɓace ko ƙimar X mara daidai) ku sa abokan aiki su nemo shi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku gayyaci mai aikin inji na yankinku, mai ɗaukar nauyin apprenticeship ko malamin kwalejin al'umma don ya yi magana game da ayyuka na gaske da horo a yankinku."
    ]
  }
};
