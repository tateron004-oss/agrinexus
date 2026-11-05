"use strict";

// Koach Learn course, Hausa (ha) translation of shared/welding-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "welding-basics-ha",
  lang: "ha",
  translationOf: "welding-basics",
  category: "Workforce Development",
  name: "Tushen Walda (Welding)",
  skills: "Daidaita ayyuka da hanyoyin walda, Karanta haɗi, matsayi da alamun walda, Gane lahanin walda da aka saba gani, Shirya tsaron walda da kariya daga gobara, Shirya hanyarku zuwa takardar shaidar walda",
  outcome: "daidaita aiki da hanyar walda da ta dace, karanta nau'o'in haɗi, matsayin walda da alamar walda mai sauƙi, gane lahanin walda da aka saba gani, shirya kayan kariya da matakan hana gobara don aikin walda, da bin tsari mai ranaku don samun horo da zama jarabawar takardar shaidar walda.",
  about: [
    "Masu walda suna haɗa ƙarfe don gine-gine, gadoji, jiragen ruwa, bututun mai, manyan motoci, kayan aikin gona da masana'antu. Da yawa suna farawa ta makarantar sana'a, kwalejin al'umma (community college), koyon sana'a a wurin aiki (apprenticeship), aikin soja ko horo a wurin aiki. Wannan kwas ɗin na duk wanda ke duba wannan hanya ne: masu neman aiki, matasa, mutanen da ke dawowa gida daga gidan yari, tsofaffin sojoji, baƙi da manyan da ke komawa karatu.",
    "Za ku koyi manyan hanyoyin walda da yanka ƙarfe, haɗin da matsayin da masu walda ke amfani da su, yadda ake karanta alamar walda mai sauƙi a zane, da yadda ake bambance walda mai kyau da marar kyau. Sannan za ku koyi yadda masu walda ke kare idanunsu, fatarsu, huhunsu da kunnuwansu, yadda suke hana gobara, da yadda takardar shaidar walda take aiki.",
    "Wannan kwas ɗin yana shirya ku ne. Ba ya ba ku takardar shaida ko lasisi. Ba za ku yi walda ko yanka ƙarfe a wannan kwas ba: ana koyon walda ne kawai a wurin aiki (shop) da ake kulawa, da kayan kariya da suka dace. Takardar shaidar walda, kamar AWS Certified Welder ta American Welding Society (ƙungiyar walda ta Amurka), ana samun ta ne ta hanyar cin jarabawar aiki da hannu a wurin jarabawa da aka amince da shi.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da aikin \"Gwada yanzu\" da gajerun tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Abin da za ku gama da shi shi ne tsarinku na fara walda, mai ranaku na gaske."
  ],
  finalTask: "Ku yi tsarinku na fara walda: (1) teburin hanyoyi da ke daidaita hanyoyin walda ko yanka ƙarfe guda huɗu, kowanne da aiki na gaske; (2) takardar karatu da zanen nau'o'in haɗi biyar, jerin matsayi huɗu, da lahanin walda biyar kowanne da dalili ɗaya mai yiwuwa; (3) jerin abubuwan dubawa na tsaro kafin walda don aikin stick ko MIG ɗaya, da ya shafi idanu, fata, huhu, kunnuwa, gobara da shokin wutar lantarki; da (4) tsari mai ranaku da ke ambaton shirye-shiryen horo biyu kusa da ku, hanyar walda da matsayin da kuke son samun shaida a kai, inda za ku iya zama jarabawa (AWS Accredited Test Facility), abin da jiharku ko birninku ke buƙata (daga shafin hukuma), da rana ga kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke neman sana'ar hannu: masu neman aiki, mutanen da ke dawowa gida daga gidan yari, matasa, tsofaffin sojoji, baƙi da manyan da ke komawa karatu. Wasu sun taɓa aikin wurin aiki, gona, gyaran mota ko aikin soja; yawancinsu ba su taɓa walda ba.",
    startingPoint: "Suna iya karanta gajerun umarni da yin lissafin lambobi cikakku. Yawancinsu sun san cewa walda tana amfani da zafi da haske mai ƙarfi don haɗa ƙarfe, amma ba za su iya faɗin sunayen hanyoyin ba, ko karanta alamar walda, ko tantance walda, ko jera matakan tsaro ba.",
    gap: "Makarantun walda, shirye-shiryen koyon sana'a da masu ɗaukar aiki suna son mutanen da suka san kalmomin farko, suke ɗaukar tsaro da muhimmanci, kuma suka san abin da jarabawar shaida ke tambaya. Masu koyo suna buƙatar wannan tushe da tsari mai sarari mai ranaku, don su zaɓi horo mai kyau, su guji ɓata kuɗi, kuma su zo a shirye don koyo a wurin aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8); ana bayanin kowace kalmar sana'a",
      "Babu walda, yanka ƙarfe ko gogewa (grinding) a wannan kwas: aikin hannu yana buƙatar wurin aiki da ake kulawa da kayan kariya da suka dace",
      "Na'urori: waya ko kwamfutar ɗakin karatu don shafukan hukuma da hotunan walda; takarda da alƙalami don zane da tsare-tsare",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aiki da ganawa",
      "Dokoki sun bambanta daga jiha zuwa jiha da birni zuwa birni: masu koyo suna duba lasisi a shafin hukuma na inda suke zaune"
    ],
    prerequisites: "Babu. Kwas ɗin \"Fara Sana'a a Ayyukan Hannu na Ƙwarewa\" yana taimaka wa masu koyo su zaɓi sana'a; wannan kwas ɗin yana zurfafa cikin walda."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku bayanin aikin walda ko yanka ƙarfe", action: "daidaita aikin da hanya da aka saba amfani da ita: stick, MIG, flux-cored, TIG, oxy-fuel ko plasma", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku zane, hoto ko alamar walda", action: "faɗin nau'in haɗi, matsayin walda da manyan sassan alamar walda", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O3", condition: "Idan aka ba ku hotuna ko bayanin waldar da aka gama", action: "gane lahanin walda da aka saba gani da faɗin dalili mai yiwuwa na kowanne", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O4", condition: "Idan aka ba ku aikin walda", action: "jera kayan kariya, hanyar shigar iska da matakan hana gobara da aikin ke buƙata", standard: "da ya shafi idanu, fata, huhu, kunnuwa, shokin wutar lantarki da aƙalla matakai uku na hana gobara" },
    { id: "O5", condition: "Ta amfani da shafukan hukuma na yankinku", action: "rubuta tsari mai ranaku don samun horo da zama jarabawar takardar shaidar walda", standard: "da shirye-shirye biyu na gaske, wurin jarabawa da rana ga kowane mataki" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda walda take aiki",
      lessons: [
        {
          title: "Abin da masu walda ke yi, da manyan hanyoyin walda",
          objectives: ["O1"],
          minutes: 6,
          goal: "Daidaita aikin walda ko yanka ƙarfe da hanyar da ta dace.",
          text: [
            "Walda tana haɗa guntun ƙarfe ta hanyar narkar da su har su gauraye su kuma daskare a matsayin abu ɗaya. Yawancin walda tana amfani da arc, wato tartsatsin wutar lantarki mai zafi sosai tsakanin electrode da ƙarfen. Sau da yawa ana ƙara ƙarfen cikawa (filler), kuma dole wani abu ya kare ƙarfen mai zafi daga iska don waldar ta yi ƙarfi.",
            "Walda ta stick (SMAW) tana amfani da sanda mai shafi. Tana da sauƙi kuma tana aiki a waje da cikin iska, don haka ana yawan amfani da ita a gine-gine, bututun mai da gyare-gyare. Walda ta MIG (GMAW) tana tura waya ta cikin bindiga tare da gas mai kariya; tana da sauri kuma ana yawan amfani da ita a masana'antu da wuraren gyaran mota. Walda ta flux-cored (FCAW) tana tura waya mai flux a cikinta; ana amfani da ita don ƙarfe mai kauri da wasu ayyukan waje. Walda ta TIG (GTAW) tana amfani da electrode na tungsten da sandar cikawa daban; tana da jinkiri amma tana da tsabta da daidaito sosai, ana amfani da ita a ƙarfe mai sirara, bakin ƙarfe (stainless steel) da aluminum.",
            "Masu walda kuma suna yanka ƙarfe. Yanka ta oxy-fuel tana amfani da harshen wuta na gas da oxygen, galibi a kan ƙarfen steel. Yanka ta plasma tana amfani da arc na lantarki da gas mai gudu sosai, kuma tana iya yanka nau'o'in ƙarfe da yawa.",
            "Masu ɗaukar aiki yawanci suna gwada ku a wata hanya da wani matsayi na musamman, don haka sanin waɗannan sunaye yana taimaka muku karanta tallan aiki da zaɓar horo."
          ],
          words: [
            ["Arc", "tartsatsin wutar lantarki mai zafi sosai tsakanin electrode da ƙarfe, da ke narkar da ƙarfen."],
            ["Electrode", "sanda ko wayar da ke ɗaukar wutar lantarki don yin arc; a wasu hanyoyi ita ma tana zama ƙarfen cikawa."],
            ["Ƙarfen cikawa (filler metal)", "ƙarin ƙarfe da ake ƙarawa don cike haɗin."],
            ["Kariya (shielding)", "gas ko flux da ke hana iska taɓa walda mai zafi don ta yi ƙarfi."],
            ["Stick (SMAW)", "shielded metal arc welding: walda da sanda mai shafin flux."],
            ["MIG (GMAW)", "gas metal arc welding: waya da ake turawa ta bindiga tare da gas mai kariya."],
            ["Flux-cored (FCAW)", "flux-cored arc welding: waya da ake turawa mai flux a cikinta."],
            ["TIG (GTAW)", "gas tungsten arc welding: electrode na tungsten da sandar cikawa daban; mai jinkiri da daidaito."]
          ],
          slides: [
            { title: "Mece ce walda", bullets: ["Narkar da ƙarfe don ya haɗu ya zama abu ɗaya", "Yawanci ana amfani da arc na lantarki", "Kariya tana hana iska taɓa waldar"] },
            { title: "Hanyoyi huɗu da aka saba amfani da su", bullets: ["Stick (SMAW): mai sauƙi, tana aiki a waje", "MIG (GMAW): mai sauri, masana'antu da gyaran mota", "Flux-cored (FCAW): ƙarfe mai kauri, wasu ayyukan waje", "TIG (GTAW): mai jinkiri, tsabta, ƙarfe sirara da aluminum"] },
            { title: "Yanka ƙarfe", bullets: ["Oxy-fuel: harshen wuta, galibi steel", "Plasma: arc da gas mai gudu, ƙarfe iri-iri"] },
            { title: "Me yasa sunaye suke da muhimmanci", bullets: ["Tallan aiki yana ambaton hanyar walda", "Jarabawa tana cikin hanya da matsayi"] }
          ],
          tryIt: "Ku nemi \"welder\" a shafin neman aiki kusa da ku, ku karanta tallan aiki uku. Ga kowanne, ku rubuta hanyar da yake nema (stick, MIG, flux-cored ko TIG), abin da ake yi ko ake gyarawa, da kowace takardar shaida da ya ambata. Sannan ku yi ƙaramin tebur: hanyoyi huɗu a gefe, da aiki ɗaya na gaske kusa da kowanne. Ku ajiye shi: shi ne sashe na 1 na aikinku na ƙarshe.",
          youCanNow: "faɗin manyan hanyoyin walda da yanka ƙarfe, da daidaita kowacce da irin aikin da ya dace da ita.",
          quickCheck: [
            { objective: "O1", q: "Ma'aikata dole su gyara shingen ƙarfe a waje a ranar iska, da kayan aiki masu sauƙi. Wace hanya ta fi dacewa?", options: ["TIG", "Stick (SMAW)", "Yanka ta plasma", "MIG da gas mai kariya"], answer: 1, why: "Walda ta stick tana amfani da sanda mai shafi kuma tana aiki a waje da cikin iska, inda iska za ta kwashe gas mai kariya." },
            { objective: "O1", q: "Wani wurin aiki yana buƙatar walda mai tsabta da daidaito sosai a kan aluminum mai sirara. Wace hanya ta fi dacewa?", options: ["Yanka ta oxy-fuel", "Flux-cored", "Stick", "TIG (GTAW)"], answer: 3, why: "TIG tana da jinkiri amma tana da tsabta da daidaito sosai, kuma ana amfani da ita a ƙarfe sirara da aluminum." }
          ]
        },
        {
          title: "Haɗi, matsayin walda da alamun walda",
          objectives: ["O2"],
          minutes: 6,
          goal: "Faɗin nau'in haɗi da matsayin walda a zane, da karanta manyan sassan alamar walda.",
          text: [
            "Akwai manyan nau'o'in haɗi biyar. Butt joint: guda biyu gefe da gefe a layi ɗaya. Tee joint: guda ɗaya a tsaye a kan wani kamar harafin T. Lap joint: guda biyu ɗaya a kan ɗaya. Corner joint: guda biyu suna haɗuwa a kusurwa kamar harafin L. Edge joint: guda biyu kusa da juna, ana walda gefunansu.",
            "Akwai matsayin walda huɗu. Flat (a kwance): kuna walda daga sama, shi ne mafi sauƙi. Horizontal (a gefe): waldar tana gudu a gefe a kan wani abu kamar bango. Vertical (a tsaye): waldar tana hawa ko tana sauka. Overhead (a sama da kai): kuna walda daga ƙasa, shi ne mafi wuya. A jarabawa ana ba su lamba 1 zuwa 4, da G don groove weld da F don fillet weld; misali, 3G groove weld ne a tsaye, 2F kuma fillet weld ne a gefe.",
            "Groove weld tana cike tazara ko ramin da aka shirya, sau da yawa a butt joint. Fillet weld tana cike kusurwar tee, lap ko corner joint, kuma tana kama da triangle (alwatika) idan aka duba daga gefe.",
            "Zane-zane suna amfani da alamun walda. Kibiya tana nuna haɗin. Alamar walda tana zaune a kan layin tunani (reference line) madaidaici. Idan alamar tana ƙasan layin, waldar tana gefen kibiya; idan tana saman layin, tana ɗaya gefen. Ƙaramin triangle yana nufin fillet weld, kuma lambar da ke kusa da shi yawanci girman waldar ce. Wutsiya a ƙarshe tana iya ɗaukar ƙarin bayani, kamar hanyar walda."
          ],
          steps: [
            "Ku nemo kibiyar: tana nuna haɗin.",
            "Ku duba layin tunani: alama a ƙasa = gefen kibiya, a sama = ɗaya gefen.",
            "Ku karanta alamar: triangle yana nufin fillet.",
            "Ku karanta lambar da ke kusa da shi (girma) da duk wani bayani a wutsiya."
          ],
          words: [
            ["Haɗi (joint)", "wurin da guntun ƙarfe biyu suke haɗuwa don a walda su."],
            ["Butt, tee, lap, corner, edge", "manyan nau'o'in haɗi biyar."],
            ["Groove weld", "walda da ke cike tazara ko ramin da aka shirya tsakanin guntaye."],
            ["Fillet weld", "walda a kusurwa, mai siffar triangle idan aka duba daga gefe."],
            ["Matsayi (position)", "hanyar da kuke walda a ciki: flat, horizontal, vertical ko overhead (1 zuwa 4)."],
            ["Alamar walda (weld symbol)", "lambar zane mai kibiya, layin tunani da alamomi da ke faɗa wa mai walda irin waldar da zai yi."],
            ["Layin tunani (reference line)", "layin madaidaici na alamar walda; ƙasansa yana nufin gefen kibiya, samansa yana nufin ɗaya gefen."]
          ],
          slides: [
            { title: "Manyan haɗi biyar", bullets: ["Butt: gefe da gefe", "Tee: kamar T; Lap: ɗaya a kan ɗaya", "Corner: kamar L; Edge: kusa da juna"] },
            { title: "Matsayi huɗu", bullets: ["1 Flat (a kwance), 2 Horizontal (a gefe)", "3 Vertical (a tsaye), 4 Overhead (sama da kai)", "G = groove, F = fillet (3G, 2F)"] },
            { title: "Groove da fillet", bullets: ["Groove: tana cike tazara, sau da yawa butt joint", "Fillet: tana cike kusurwa, siffar triangle"] },
            { title: "Karanta alamar walda", bullets: ["Kibiya tana nuna haɗin", "Ƙasan layi = gefen kibiya; sama = ɗaya gefen", "Triangle = fillet; lamba = girma; wutsiya = bayani"] }
          ],
          tryIt: "Ku yi amfani da yankan takarda ko guntun kwali biyu don yin kowane daga cikin haɗi biyar, ku zana kowanne da sunansa. Kusa da zanen, ku jera matsayi huɗu da lambobinsu. Sannan ku nemi hoton \"fillet weld symbol\" ku rubuta: a wane gefe waldar take, da ma'anar lambar. Ku ajiye zanen: su ne sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "faɗin haɗi biyar da matsayi huɗu, da karanta manyan sassan alamar walda.",
          quickCheck: [
            { objective: "O2", q: "Faranti ɗaya yana tsaye a tsakiyar wani faranti da ke kwance, kamar harafin T. Wane haɗi ne?", options: ["Tee joint", "Butt joint", "Lap joint", "Edge joint"], answer: 0, why: "Tee joint yana da guda ɗaya a tsaye a kan wani kamar T." },
            { objective: "O2", q: "A alamar walda, triangle yana ƙasan layin tunani. A ina waldar take?", options: ["A ɗaya gefen", "A gefe biyu", "A gefen kibiya", "Babu inda; bayani ne kawai"], answer: 2, why: "Alama a ƙasan layin tunani tana nufin waldar tana gefen kibiya." }
          ]
        },
        {
          title: "Bambance walda mai kyau da marar kyau",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gane lahanin walda da aka saba gani a hotuna ko bayani, da faɗin dalili mai yiwuwa na kowanne.",
          text: [
            "Masu walda da masu dubawa (inspectors) suna fara duba walda da ido. Walda mai kyau tana da siffa da faɗi daidai, tana shiga cikin guntaye biyun a hankali, kuma ba ta da ramuka ko tsagewa. Wasu ayyuka kuma suna gwada walda ta hanyar lanƙwasa ta ko da kayan aiki na musamman, kuma ana horar da masu duba walda kuma ana ba su takardar shaida don wannan.",
            "Lahanin da aka saba gani: Porosity ƙananan ramuka ne ko kumfa, sau da yawa daga ƙarfe mai datti ko gas mai kariya marar kyau. Undercut rami ne da aka narkar a cikin ƙarfen a gefen waldar, sau da yawa daga zafi mai yawa ko kusurwa marar daidai. Incomplete fusion yana nufin waldar ba ta narke cikin ƙarfen ba, sau da yawa daga zafi kaɗan ko tafiya da sauri. Cracks layuka ne (tsagewa) a cikin waldar ko kusa da ita; suna da haɗari sosai. Spatter mai yawa (ƙananan ƙwallayen ƙarfe a kewayen waldar) sau da yawa yana zuwa daga saitin na'ura marar daidai. Overlap ƙarfen walda ne da ya naɗe a saman ƙarfe ba tare da ya haɗu da shi ba.",
            "A wurin aiki malaminku zai koya muku yadda ake gyara kowane dalili, kamar tsabtace ƙarfen da farko, canja saiti, kusurwa ko saurin tafiya, ko duba gas. A wannan kwas kuna koyon dubawa da faɗin sunaye ne."
          ],
          steps: [
            "Ku duba siffar: shin faɗinta da tsayinta daidai suke?",
            "Ku duba gefuna: shin tana shiga a hankali, ko akwai rami (undercut) ko naɗewa (overlap)?",
            "Ku duba saman: akwai ramuka (porosity) ko tsagewa?",
            "Ku duba kewayenta: akwai spatter mai yawa?",
            "Ku rubuta lahanin da dalili mai yiwuwa."
          ],
          words: [
            ["Lahani (defect)", "aibi da zai iya rage ƙarfin walda ko ya sa ta fāɗi a binciken dubawa."],
            ["Porosity", "ƙananan ramuka ko kumfa a walda, sau da yawa daga datti ko kariya marar kyau."],
            ["Undercut", "rami da aka narkar a cikin ƙarfen a gefen waldar."],
            ["Incomplete fusion", "waldar ba ta narke cikin ƙarfen asali ba."],
            ["Spatter", "ƙananan ƙwallayen ƙarfe da ke fitowa su watsu a kewayen waldar."],
            ["Duba da ido (visual inspection)", "duba walda da ido a hankali, gwajin farko na kowace walda."]
          ],
          slides: [
            { title: "Walda mai kyau", bullets: ["Siffa da faɗi daidai", "Tana shiga cikin guntaye biyu a hankali", "Babu ramuka, babu tsagewa"] },
            { title: "Lahanin da aka saba gani", bullets: ["Porosity: ramuka ko kumfa", "Undercut: rami a gefe", "Incomplete fusion; cracks; spatter; overlap"] },
            { title: "Dalilai masu yiwuwa", bullets: ["Ƙarfe mai datti ko gas marar kyau: porosity", "Zafi mai yawa ko kusurwa marar daidai: undercut", "Zafi kaɗan ko sauri da yawa: rashin haɗuwa"] },
            { title: "Ku duba kowace walda", bullets: ["Siffa, gefuna, saman, kewaye", "Ku faɗi lahanin da dalili", "Ana koyon gyara a wurin aiki"] }
          ],
          tryIt: "Ku nemi hotunan \"weld porosity\", \"weld undercut\" da \"good MIG weld\" daga makarantar walda ko mai sayar da kayan walda. Ga kowane hoto, ku rubuta abin da kuke gani ku faɗi lahanin (ko ku ce yana da kyau). Sannan ku yi jerin lahani biyar kowanne da dalili ɗaya mai yiwuwa. Ku ajiye jerin: yana shiga sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "gane lahanin walda da aka saba gani da faɗin dalili mai yiwuwa na kowanne.",
          quickCheck: [
            { objective: "O3", q: "Walda tana da ƙananan ramuka da yawa a samanta. Wane lahani ne wannan?", options: ["Undercut", "Overlap", "Porosity", "Spatter"], answer: 2, why: "Ƙananan ramuka ko kumfa a walda su ne porosity." },
            { objective: "O3", q: "Akwai rami da aka narkar a cikin ƙarfen a gefen waldar. Mene ne dalili mai yiwuwa?", options: ["Zafi mai yawa ko kusurwa marar daidai", "Ƙarfen ya yi tsabta da yawa", "Hular kariya ta yi duhu da yawa", "Waldar ta yi sanyi da yawa don a taɓa"], answer: 0, why: "Undercut sau da yawa yana zuwa daga zafi mai yawa ko kusurwa marar kyau." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda walda take aiki",
        questions: [
          { objective: "O1", q: "Wace hanya ce ke tura waya ta cikin bindiga tare da gas mai kariya?", options: ["Stick (SMAW)", "MIG (GMAW)", "Yanka ta oxy-fuel", "TIG (GTAW)"], answer: 1, why: "MIG (gas metal arc welding) tana amfani da waya da ake turawa da gas mai kariya." },
          { objective: "O1", q: "Wace ce hanyar yanka ƙarfe da ke amfani da arc na lantarki da gas mai gudu sosai?", options: ["Yanka ta plasma", "Walda ta stick", "Walda ta TIG", "Brazing"], answer: 0, why: "Yanka ta plasma tana amfani da arc da gas mai gudu don yanka nau'o'in ƙarfe da yawa." },
          { objective: "O2", q: "Faranti biyu suna ɗaya a kan ɗaya kuma an walda su. Wane haɗi ne wannan?", options: ["Butt joint", "Corner joint", "Tee joint", "Lap joint"], answer: 3, why: "Lap joint ana yin sa da guntaye biyu ɗaya a kan ɗaya." },
          { objective: "O2", q: "A jarabawar walda, mene ne ma'anar 3G?", options: ["Fillet weld a kwance (flat)", "Fillet weld sama da kai (overhead)", "Groove weld a tsaye (vertical)", "Groove weld a gefe (horizontal)"], answer: 2, why: "Matsayi na 3 shi ne a tsaye (vertical), G kuma yana nufin groove weld." },
          { objective: "O3", q: "Walda ba ta narke cikin ƙarfen asali ba. Me ake kiran wannan lahani?", options: ["Incomplete fusion", "Porosity", "Spatter", "Undercut"], answer: 0, why: "Incomplete fusion yana nufin waldar ba ta haɗu da ƙarfen asali ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsaro da hanyarku",
      lessons: [
        {
          title: "Kare idanunku, fatarku, huhunku da kunnuwanku",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera kayan kariya da hanyar shigar iska da aikin walda ke buƙata.",
          text: [
            "Haɗarin walda sun haɗa da haske mai ƙarfi sosai, ƙarfe mai zafi sosai da tartsatsi, hayaƙi da gas, ƙara da shokin wutar lantarki. Bureau of Labor Statistics (BLS, ofishin ƙididdigar ma'aikata na Amurka) ya lissafa hular walda (helmet), kayan kare kunne, safar hannu mai jure zafi da tufafin kariya a matsayin kayan da masu walda ke sakawa. Za ku koyi walda ne kawai a wurin aiki da ake kulawa, da waɗannan kayan.",
            "Idanu da fuska: arc yana fitar da haske, har da hasken ultraviolet (UV), da zai iya ƙona idanunku da fatarku, ko da kallo ɗan lokaci kaɗan kuka yi masa. Dokar walda ta OSHA (hukumar tsaron wurin aiki ta Amurka) tana buƙatar hular walda ko garkuwar hannu don walda ta arc, da gilashin tace haske (filter lens) mai duhu da ya isa don hanyar walda; teburinta yana nuna shade bisa hanya da girma (misali, shade 12 don wasu girman sandar stick da aka saba amfani da su). Ku saka gilashin kariya a ƙarƙashin hular, kuma ku kare mutanen da ke kusa da allon kariya (screens).",
            "Fata: ku saka tufafi masu jure wuta da ke rufe hannayenku da ƙafafunku (ba yadin roba (synthetic) da zai iya narkewa ba), safar hannu ta fata ta walda, da takalmin fata. Huhu: hayaƙi da gas na walda suna iya cutar da lafiyarku. Ku ajiye kanku daga cikin gajimaren hayaƙin, ku yi amfani da na'urar shigar iska ko ta fitar da hayaƙi, kuma ku saka abin numfashi (respirator) idan shirin mai ɗaukar ku aiki ya buƙata. Shafi kamar fenti da zinc a kan galvanized steel suna fitar da hayaƙi mai cutarwa sosai. Kunnuwa: gogewa (grinding) da wasu hanyoyin walda suna da ƙara, don haka ku yi amfani da kayan kare kunne.",
            "Dokar walda ta OSHA ta kuma ce kada a taɓa amfani da oxygen don shigar da iska, domin yana sa wuta ta ci da sauri sosai."
          ],
          steps: [
            "Idanu: hular walda mai shade daidai, gilashin kariya a ƙarƙashinta, allon kariya don wasu.",
            "Fata: tufafi masu jure wuta, safar hannu da takalmin fata, babu yadin roba.",
            "Huhu: shigar iska ko fitar da hayaƙi, kai a waje da gajimaren hayaƙi, respirator idan an buƙata.",
            "Kunnuwa: kayan kare kunne don gogewa da aiki mai ƙara."
          ],
          words: [
            ["PPE", "kayan kariya na mutum: hular walda, gilashi, safar hannu, tufafi, takalmi, kayan kare kunne, respirator."],
            ["Filter shade", "yadda gilashin walda ya yi duhu; lamba mafi girma ta fi duhu."],
            ["Hasken ultraviolet (UV)", "hasken da ido ba ya gani daga arc, da ke ƙona idanu da fata."],
            ["Hayaƙin walda (fumes)", "ƙananan ƙwayoyin ƙarfe da gas daga walda da za su iya cutar da huhunku da lafiyarku."],
            ["Gajimaren hayaƙi (fume plume)", "hayaƙin da ke tashi daga waldar."],
            ["Galvanized steel", "ƙarfen steel da aka shafa wa zinc; walda shi yana fitar da hayaƙi mai cutarwa."],
            ["Mai jure wuta (flame-resistant, FR)", "yadin da aka yi don kada ya kama wuta da sauƙi."]
          ],
          slides: [
            { title: "Haɗarin walda", bullets: ["Haske mai ƙarfi da hasken UV", "Ƙarfe mai zafi da tartsatsi", "Hayaƙi da gas; ƙara; shokin lantarki"] },
            { title: "Idanu da fuska", bullets: ["Hular walda mai filter shade daidai (teburin OSHA)", "Gilashin kariya a ƙarƙashin hular", "Allon kariya yana kare mutanen da ke kusa"] },
            { title: "Fata da huhu", bullets: ["Tufafi masu jure wuta, safar hannu ta fata, takalmi", "Kai a waje da hayaƙi; shigar iska a kunne", "Respirator idan an buƙata; ku kula da shafi (fenti, zinc)"] },
            { title: "Kunnuwa da iska", bullets: ["Kayan kare kunne don gogewa", "Kada a taɓa amfani da oxygen don shigar da iska"] }
          ],
          sources: [
            { name: "OSHA: Walda, yanka da brazing, sharuɗɗa na gaba ɗaya, 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "OSHA: Ƙa'idojin walda, yanka da brazing", url: "https://www.osha.gov/welding-cutting-brazing/standards" },
            { name: "US Bureau of Labor Statistics: Masu walda, yanka, soldering da brazing", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" }
          ],
          tryIt: "Ku fara jerin abubuwan dubawa na tsaro kafin walda don wannan aiki: \"Walda ta MIG ta maƙallan steel a wurin aiki.\" Ku rubuta kanun labarai huɗu: Idanu, Fata, Huhu, Kunnuwa. A ƙarƙashin kowanne, ku jera kayan ko matakin daga darasin. Sannan ku ƙara layi ɗaya game da abin da za ku duba idan steel ɗin an shafa masa fenti ko galvanized ne. Ku ajiye shi: zai zama sashe na 3 na aikinku na ƙarshe.",
          youCanNow: "jera kayan kariya da hanyar shigar iska da ke kare idanu, fata, huhu da kunnuwan mai walda.",
          quickCheck: [
            { objective: "O4", q: "Wane tufafi ne zaɓi mai aminci don walda?", options: ["Kayan motsa jiki na polyester", "Gajeren wando da riga mai gajeren hannu", "Jaket na nylon", "Tufafi masu jure wuta da ke rufe hannaye da ƙafafu"], answer: 3, why: "Yadin roba yana iya narkewa ya manne a fata; tufafi masu jure wuta da ke rufe ku suna kare ku daga tartsatsi da hasken UV." },
            { objective: "O4", q: "Kuna ganin hayaƙi yana tashi daga waldar. Me za ku yi da kanku?", options: ["Ku sunkuya kusa don ku ga sosai", "Ku ajiye shi a waje da gajimaren hayaƙi ku yi amfani da shigar iska", "Ku riƙe numfashinku", "Ku cire hular walda"], answer: 1, why: "Nisantar gajimaren hayaƙi da amfani da shigar iska suna rage hayaƙin da kuke shaƙa." }
          ]
        },
        {
          title: "Gobara, shokin lantarki da hot work",
          objectives: ["O4"],
          minutes: 6,
          goal: "Jera matakan hana gobara da shoki da za a ɗauka kafin walda, lokacin walda da bayanta.",
          text: [
            "Tartsatsi da slag mai zafi suna iya tashi nesa su kunna wuta a wuraren da ba ku gani. Dokar walda ta OSHA (29 CFR 1910.252) ta ce, inda zai yiwu, dole a ɗauke abubuwan da za su iya ci da wuta aƙalla ƙafa 35 daga aikin, ko a rufe su ko a kare su idan ba za a iya ɗauke su ba. Ana walda ne kawai a wuraren da suke, ko aka mayar da su, masu aminci daga gobara, bayan wanda ke da alhaki ya duba wurin; ya fi kyau a ba da wannan izinin a rubuce, wanda ake kira hot work permit (izinin aikin zafi).",
            "Idan gobara za ta iya tashi, misali akwai abubuwan da ke ci da wuta cikin ƙafa 35, ana buƙatar fire watch: mutumin da ke kallon gobara tare da na'urar kashe wuta (extinguisher) a shirye. OSHA ta ce fire watch dole ya zauna aƙalla rabin awa bayan an gama walda ko yanka, domin abubuwa suna iya yin hayaƙi a ɓoye su kama wuta daga baya.",
            "Shokin lantarki: arc yana amfani da wutar lantarki. Ku ajiye safar hannu da tufafi a bushe, kada ku tsaya a cikin ruwa ko a ƙasa mai jiƙa, ku duba wayoyin lantarki (cables) don lalacewa kafin amfani, kuma kada ku taɓa electrode da ƙarfen a lokaci ɗaya. Horon tsaron lantarki na OSHA dole ne ga masu walda, a cewar BLS.",
            "Dole a riƙe tukwanen gas (cylinders) na MIG, TIG da yanka kamar yadda horonku ya koyar, a tsaye kuma a ɗaure su don kada su faɗi. Wurare masu kunci (confined spaces), kamar tankuna, suna buƙatar horo na musamman, izini da shigar iska; kada ku taɓa shiga ɗaya ba tare da su ba."
          ],
          steps: [
            "Kafin: ku sami izini, ku ɗauke abubuwan da ke ci da wuta ƙafa 35 ko ku rufe su, ku shirya na'urar kashe wuta.",
            "Ku shirya fire watch idan gobara za ta iya tashi.",
            "Lokacin aiki: ku zauna a bushe, ku duba wayoyin lantarki, ku ajiye wurin a share.",
            "Bayan: fire watch yana zama aƙalla minti 30."
          ],
          words: [
            ["Hot work (aikin zafi)", "walda, yanka, gogewa da sauran ayyukan da ke fitar da tartsatsi ko harshen wuta."],
            ["Hot work permit", "izini a rubuce cewa an duba wurin kuma an mayar da shi mai aminci daga gobara kafin aikin zafi."],
            ["Fire watch", "mutumin da aka horar da ke kallon gobara lokacin aikin zafi da bayansa, tare da na'urar kashe wuta a shirye."],
            ["Slag", "ɓawon da ke saura a kan wasu walda, wanda yake da zafi sosai idan ya fashe ya fāɗo."],
            ["Wuri mai kunci (confined space)", "wuri kamar tanki ko rami da ke da wuyar shiga da fita; yana buƙatar horo na musamman da izini."]
          ],
          slides: [
            { title: "Kafin ku yi walda", bullets: ["Hot work permit: an duba wurin, yana da aminci", "Ku ɗauke abubuwan da ke ci da wuta ƙafa 35, ko ku rufe su", "Na'urar kashe wuta a shirye"] },
            { title: "Fire watch", bullets: ["Ana buƙata idan gobara za ta iya tashi", "Yana zama aƙalla minti 30 bayan aikin"] },
            { title: "Shokin lantarki", bullets: ["Ku ajiye safar hannu da tufafi a bushe", "Kada ku taɓa tsayawa a cikin ruwa", "Ku duba wayoyin lantarki kafin amfani"] },
            { title: "Tukwanen gas da wurare masu kunci", bullets: ["Tukwanen gas a tsaye kuma a ɗaure", "Wurare masu kunci: horo da izini da farko"] }
          ],
          sources: [
            { name: "OSHA: Walda, yanka da brazing, sharuɗɗa na gaba ɗaya (hana gobara), 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "US Bureau of Labor Statistics: Masu walda, yadda ake zama ɗaya", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" }
          ],
          tryIt: "Ku gama jerin abubuwan dubawa na tsaro kafin walda. Ku ƙara sababbin kanun labarai uku a jerin daga Darasi na 4: Gobara kafin, Gobara bayan, da Shoki. A ƙarƙashinsu ku rubuta: izinin, dokar ƙafa 35, na'urar kashe wuta, fire watch da tsawon lokacin da yake zama, da matakan shoki uku. Ku karanta dukan jerin da babbar murya kamar kuna bayani ga sabon mataimaki. Shi ne sashe na 3 na aikinku na ƙarshe.",
          youCanNow: "jera matakan hana gobara da shoki da za a ɗauka kafin walda, lokacin walda da bayanta.",
          quickCheck: [
            { objective: "O4", q: "A cewar OSHA, tsawon wane lokaci ne fire watch dole ya zauna bayan an gama walda?", options: ["Minti 5", "Babu lokaci; yana iya tafiya", "Aƙalla rabin awa", "Har zuwa lokacin cin abincin rana"], answer: 2, why: "OSHA tana buƙatar fire watch aƙalla rabin awa bayan aikin, domin gobara tana iya tashi daga baya." },
            { objective: "O4", q: "Akwai akwatunan kwali ƙafa 15 daga inda za ku yi walda. Me za ku yi?", options: ["Ku ɗauke su aƙalla ƙafa 35, ko ku rufe su ko ku kare su", "Ku yi walda da sauri", "Ku fesa musu oxygen", "Babu komai; ƙafa 15 ya isa"], answer: 0, why: "OSHA ta ce a ɗauke abubuwan da ke ci da wuta aƙalla ƙafa 35 inda zai yiwu, ko a rufe su ko a kare su." }
          ]
        },
        {
          title: "Horo, takardar shaida da tsarinku",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta tsari mai ranaku don samun horo da zama jarabawar takardar shaidar walda.",
          text: [
            "Bureau of Labor Statistics ya ce masu ɗaukar aiki yawanci suna son takardar kammala sakandare (high school diploma) ko makamancinta, tare da horon fasaha da horo a wurin aiki. Ana samun horo daga azuzuwan fasaha na sakandare, makarantun sana'a, kwalejojin al'umma, makarantun walda masu zaman kansu da aikin soja. Wasu masu ɗaukar aiki suna gudanar da koyon sana'a (apprenticeship), kuma har masu walda da aka horar yawanci suna samun watanni da dama na horo a wurin aiki. Karanta zanen gini (blueprint), lissafin wurin aiki da ilimin lantarki na farko suna taimakawa.",
            "Masu ɗaukar aiki da yawa suna son masu walda masu takardar shaida. AWS (American Welding Society) ta bayyana AWS Certified Welder a matsayin hanyar shiga da aka fi amfani da ita. Jarabawa ce ta aiki da hannu: kuna walda a wata hanya, matsayi da nau'in ƙarfe na musamman, sannan a duba waldarku bisa wani ma'auni. Kuna zama ta a AWS Accredited Test Facility (ATF, wurin jarabawa da AWS ta amince da shi), kuma AWS ta ce ba za ku iya samun takardar shaidar walda gaba ɗaya ta intanet ba. Wasu takardun shaida suna buƙatar a riƙe su ko a sake jarabawa, don haka ku duba dokokin naku a shafin AWS. Wasu masu ɗaukar aiki suna biyan kuɗin horo da jarabawa.",
            "Wasu jihohi da birane suna ba masu walda lasisi, kuma dokokin sun bambanta, don haka ku duba shafin hukuma na inda kuke aiki. Kafin ku biya kuɗin makaranta, ku tambaya: Shin tana shirya ku don jarabawar AWS, kuma za ku iya zama jarabawa a can? Nawa daga cikin waɗanda suka kammala ke samun aikin walda? Tsofaffin sojoji suna iya tambayar VA (hukumar tsofaffin sojoji ta Amurka) game da GI Bill. Idan kuna da tarihin laifi, masu ɗaukar aikin walda da yawa suna ɗaukar mutane masu tarihin laifi; ku tambayi shirin game da haɗinsa da wuraren aiki."
          ],
          steps: [
            "Ku rubuta burinku, misali \"aikin walda ta MIG a wurin ƙera ƙarfe kafin bazara\".",
            "Ku zaɓi hanya da matsayin da za ku fara neman shaida a kai, bisa tallan aiki kusa da ku.",
            "Ku nemo shirye-shiryen horo biyu (kwalejin al'umma, makarantar walda ko apprenticeship) da ranakun farawarsu.",
            "Ku nemo AWS Accredited Test Facility kusa da ku a shafin AWS.",
            "Ku duba dokokin jiharku ko birninku, kuma ku ƙara rana ga kowane mataki."
          ],
          words: [
            ["AWS", "American Welding Society (ƙungiyar walda ta Amurka), wadda ke gudanar da shirin Certified Welder da sauran takardun shaidar walda."],
            ["Certified Welder", "takardar shaidar AWS da ake samu ta cin jarabawar walda da hannu a wata hanya, matsayi da nau'in ƙarfe da aka ƙayyade."],
            ["Accredited Test Facility (ATF)", "wurin da AWS ta amince da shi don gudanar da jarabawar takardar shaidar walda."],
            ["Jarabawar aiki (performance test)", "jarabawar da kuke yin ƙwarewar da kanku, a nan walda guntun gwaji da za a duba daga baya."],
            ["Wurin ƙera ƙarfe (fabrication shop)", "wurin aiki da ke yanka, siffanta da walda ƙarfe ya zama sassa da gine-gine."]
          ],
          slides: [
            { title: "Hanyoyin samun horo", bullets: ["Kwalejin al'umma ko makarantar walda", "Azuzuwan fasaha na sakandare; aikin soja", "Apprenticeship da horo a wurin aiki"] },
            { title: "AWS Certified Welder", bullets: ["Jarabawar hannu: hanya, matsayi, nau'in ƙarfe", "A AWS Accredited Test Facility", "Ba za a iya samun ta gaba ɗaya ta intanet ba"] },
            { title: "Kafin ku biya kuɗi", bullets: ["Shin tana shirya ku don jarabawar AWS?", "Nawa daga cikin waɗanda suka kammala ke samun aikin walda?", "Ku duba dokokin jiha ko birni"] },
            { title: "Tsarinku", bullets: ["Buri, hanya da matsayi", "Shirye-shirye biyu da wurin jarabawa", "Rana ga kowane mataki"] }
          ],
          sources: [
            { name: "American Welding Society: Takardar shaida (Certification)", url: "https://www.aws.org/certification/" },
            { name: "US Bureau of Labor Statistics: Masu walda, yadda ake zama ɗaya", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (neman koyon sana'a)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder (neman lasisi)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Aikin ƙarshe: ku yi tsarinku na fara walda. Ku haɗa teburin hanyoyinku (Darasi na 1), takardar karatunku ta haɗi, matsayi da lahani (Darussa na 2 da 3) da jerin abubuwan dubawa na tsaro (Darussa na 4 da 5). Sannan ku rubuta tsarinku mai ranaku: burinku, hanya da matsayin da za ku nemi shaida a kai, shirye-shiryen horo biyu kusa da ku da ranakun farawarsu, AWS Accredited Test Facility ɗaya, abin da jiharku ko birninku ke buƙata (tare da adireshin shafin), da rana ga kowane mataki.",
          youCanNow: "bin tsarinku mai ranaku don samun horo da zama jarabawar takardar shaidar walda.",
          quickCheck: [
            { objective: "O5", q: "A ina ake zama jarabawar AWS Certified Welder?", options: ["Gaba ɗaya ta intanet daga gida", "A kowane shagon kayan gini", "A AWS Accredited Test Facility", "A cikin wannan kwas"], answer: 2, why: "AWS ta ce ana samun takardar shaida ta jarabawa a Accredited Test Facility, ba gaba ɗaya ta intanet ba." },
            { objective: "O5", q: "Wane irin jarabawa ne AWS Certified Welder?", options: ["Jarabawar rubutu a kwamfuta", "Jarabawar hannu inda kuke walda guntun da za a duba", "Rubutun maƙala", "Ganawa (interview) kawai"], answer: 1, why: "Jarabawar aiki ce a wata hanya, matsayi da nau'in ƙarfe na musamman." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsaro da hanyarku",
        questions: [
          { objective: "O4", q: "Me yasa kada ku taɓa kallon arc ko na ɗan lokaci ba tare da kariyar ido ba?", options: ["Rashin ladabi ne", "Haskensa, har da hasken UV, zai iya ƙona idanunku", "Yana rage ƙarfin waldar", "Yana ƙara amfani da gas"], answer: 1, why: "Hasken arc zai iya ƙona idanunku ko da kallo ɗan lokaci kaɗan." },
          { objective: "O4", q: "Steel ɗin da za ku walda galvanized ne (an shafa masa zinc). Me yasa hakan yake da muhimmanci?", options: ["Yana fitar da hayaƙi mai cutarwa sosai, don haka shigar iska da kariya daidai sun fi muhimmanci", "Ba za a iya walda shi kwata-kwata ba", "Yana sa waldar ta fi ƙarfi", "Ba shi da muhimmanci"], answer: 0, why: "Shafi kamar zinc suna fitar da hayaƙi mai cutarwa idan aka zafafa su." },
          { objective: "O4", q: "Wace ce hanya mai aminci don guje wa shokin lantarki lokacin walda?", options: ["Ku yi walda a tsaye cikin kududdufin ruwa", "Ku saka safar hannu mai jiƙa don ku ji sanyi", "Ku yi amfani da waya mai fashewar rufi", "Ku ajiye safar hannu da tufafi a bushe ku duba wayoyin lantarki da farko"], answer: 3, why: "Kayan da ke bushe da wayoyin da ba su lalace ba suna hana wutar lantarki ratsa jikinku." },
          { objective: "O5", q: "Wace tambaya ce ta fi taimaka muku kafin ku biya kuɗin makarantar walda?", options: ["Wane launi ne tambarinta?", "Shin wurin ajiye mota kyauta ne?", "Shin tana shirya ku don jarabawar AWS, kuma nawa daga cikin waɗanda suka kammala ke samun aikin walda?", "Girman ɗakin karɓar baƙi nawa ne?"], answer: 2, why: "Ko shiri yana kaiwa ga takardar shaida da aiki yana nuna muku ko ya cancanci kuɗin." },
          { objective: "O5", q: "Wane matakin tsari ne ya cika?", options: ["\"Koyon walda\"", "\"Samun shaida wata rana\"", "\"Duba makarantu\"", "\"Zama jarabawar AWS Certified Welder ta MIG, matsayin flat, a ATF na kwaleji kafin 20 ga Mayu\""], answer: 3, why: "Yana ambaton jarabawar, hanya da matsayi, wurin da rana." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Walda (Welding)",
    questions: [
      { objective: "O1", q: "Me walda take yi?", options: ["Tana manne ƙarfe da selotep", "Tana narkar da ƙarfe don guntaye su haɗu su zama ɗaya", "Tana fentin ƙarfe", "Tana lanƙwasa ƙarfe ba tare da zafi ba"], answer: 1, why: "Walda tana narkar da ƙarfen don guntayen su gauraye su daskare a matsayin ɗaya." },
      { objective: "O1", q: "Wace hanya ce ke amfani da sanda mai shafin flux kuma tana aiki da kyau a waje?", options: ["Stick (SMAW)", "TIG (GTAW)", "MIG (GMAW)", "Yanka ta plasma"], answer: 0, why: "Walda ta stick tana amfani da sanda mai shafi kuma ba ta buƙatar gas mai kariya da iska za ta iya kwashewa." },
      { objective: "O1", q: "Wace hanya ce ke amfani da electrode na tungsten da sandar cikawa daban?", options: ["Flux-cored", "Stick", "Yanka ta oxy-fuel", "TIG (GTAW)"], answer: 3, why: "TIG tana amfani da electrode na tungsten, kuma mai walda yana ƙara ƙarfen cikawa da hannu." },
      { objective: "O1", q: "Me yasa walda take buƙatar kariya (shielding)?", options: ["Don ta yi ƙyalli", "Don ta yi sanyi da sauri", "Don a hana iska taɓa ta don waldar ta yi ƙarfi", "Don ta ƙara ƙara"], answer: 2, why: "Gas ko flux yana hana iska taɓa ƙarfe mai zafi." },
      { objective: "O2", q: "Guntaye biyu suna kwance gefe da gefe a layi madaidaici. Wane haɗi ne?", options: ["Lap joint", "Butt joint", "Corner joint", "Tee joint"], answer: 1, why: "Butt joint guntaye biyu ne da ke haɗuwa gefe da gefe." },
      { objective: "O2", q: "Wane matsayin walda ne yawanci ya fi wuya?", options: ["Flat (a kwance)", "Horizontal (a gefe)", "Overhead (sama da kai)", "Babu wanda ya fi wuya"], answer: 2, why: "Walda sama da kai tana aiki ne da ja da ƙasa (gravity) daga ƙasa." },
      { objective: "O2", q: "A alamar walda, mene ne ma'anar ƙaramin triangle?", options: ["Fillet weld", "Groove weld", "A tsayar da aiki", "Wutsiya"], answer: 0, why: "Triangle ita ce alamar fillet weld." },
      { objective: "O2", q: "Alamar walda tana saman layin tunani. A ina waldar take?", options: ["A gefen kibiya", "A gefe biyu", "Babu inda", "A ɗaya gefen"], answer: 3, why: "Saman layi yana nufin ɗaya gefen; ƙasa yana nufin gefen kibiya." },
      { objective: "O3", q: "Wanne ne ke bayyana walda mai kyau?", options: ["Ramuka da yawa a saman", "Rami a gefuna", "Faɗi da siffa daidai, tana shiga cikin guntaye biyu", "Spatter mai yawa a kewaye"], answer: 2, why: "Walda mai kyau tana daidai, tana shiga a hankali, kuma ba ta da ramuka ko tsagewa." },
      { objective: "O3", q: "Mene ne dalili mai yiwuwa na porosity?", options: ["Ƙarfe mai datti ko gas mai kariya marar kyau", "Hular walda mai duhu", "Ƙarfe mai tsabta kuma bushe", "Saka safar hannu ta fata"], answer: 0, why: "Datti da kariya marar kyau suna bar gas ya maƙale a matsayin ramuka." },
      { objective: "O3", q: "Wane lahani ne layi ta cikin waldar ko kusa da ita, kuma yana da haɗari sosai?", options: ["Spatter", "Tsagewa (crack)", "Overlap", "Porosity"], answer: 1, why: "Tsagewa tana iya sa walda ta karye kuma lahani ne mai haɗari." },
      { objective: "O3", q: "Walda ba ta narke cikin ƙarfen asali ba. Mene ne dalili mai yiwuwa?", options: ["Zafi mai yawa", "Amfani da hular walda", "Tsabtace ƙarfen", "Zafi kaɗan ko tafiya da sauri"], answer: 3, why: "Incomplete fusion sau da yawa yana zuwa daga zafi kaɗan ko saurin tafiya mai yawa." },
      { objective: "O4", q: "Me OSHA ke buƙata don kariyar ido lokacin walda ta arc?", options: ["Gilashin rana", "Hular walda ko garkuwar hannu mai filter lens daidai", "Babu komai idan aikin gajere ne", "Takunkumin fuska na ƙura"], answer: 1, why: "OSHA tana buƙatar hular walda ko garkuwar hannu mai filter lens don walda ta arc." },
      { objective: "O4", q: "Me ba za a taɓa amfani da shi don shigar da iska a wurin walda ba?", options: ["Fanka", "Na'urar fitar da hayaƙi", "Oxygen", "Buɗaɗɗun ƙofofi"], answer: 2, why: "Oxygen yana sa wuta ta ci da sauri sosai; OSHA ta ce kada a taɓa amfani da shi don shigar da iska." },
      { objective: "O4", q: "Nisan nawa OSHA ta ce a ɗauke abubuwan da ke ci da wuta daga walda, inda zai yiwu?", options: ["Aƙalla ƙafa 35", "Ƙafa 5", "Ƙafa 10", "Ba sai an ɗauke su ba"], answer: 0, why: "Dokar OSHA ta ce aƙalla ƙafa 35, ko a rufe su ko a kare su." },
      { objective: "O4", q: "Mene ne fire watch?", options: ["Agogo a wurin aiki", "Ƙararrawar hayaƙi", "Wani nau'in hular walda", "Mutumin da ke kallon gobara lokacin aikin zafi da bayansa, da na'urar kashe wuta"], answer: 3, why: "Fire watch yana kallon gobara kuma yana zama aƙalla rabin awa bayan aikin." },
      { objective: "O5", q: "Wannan kwas ɗin zai:", options: ["Ba ku takardar shaidar AWS", "Ba ku lasisin walda", "Shirya ku don horo da jarabawa; ba ya ba ku shaida", "Bar ku yi walda a gida"], answer: 2, why: "Ana samun takardar shaida ta jarabawar hannu a Accredited Test Facility." },
      { objective: "O5", q: "Shin za ku iya samun takardar shaidar walda ta AWS gaba ɗaya ta intanet?", options: ["A'a; kuna zama jarabawa da kanku a Accredited Test Facility", "Ee, da bidiyo", "Ee, ta karanta littafi", "Ee, ta yin wannan jarabawar"], answer: 0, why: "AWS ta ce ba za a iya samun takardar shaidar walda gaba ɗaya ta intanet ba." },
      { objective: "O5", q: "Wane ne ke faɗin lasisin da mai walda ke buƙata, idan akwai, a inda kuke aiki?", options: ["Bidiyon walda", "Jiha ko birni, a shafinsu na hukuma", "Tallan aiki", "Abokanku"], answer: 1, why: "Wasu jihohi da birane suna ba masu walda lasisi; shafin hukuma yana da dokokin." },
      { objective: "O5", q: "Me ke taimaka muku zaɓar hanyar da za ku fara neman shaida a kai?", options: ["Launin da kuka fi so", "Hular walda mafi arha", "Hasashe", "Hanyoyin da tallan aiki kusa da ku ke ambata"], answer: 3, why: "Tallan aiki yana nuna hanyoyin da masu ɗaukar aiki na yankinku ke so." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 2, 4, 7, 9, 11, 12, 14, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Teburin hanyoyi", objective: "O1", notYet: "Hanyoyi ƙasa da huɗu, ko ayyukan ba su dace da hanyar ba.", meets: "Hanyoyi huɗu, kowacce da aiki na gaske da ya dace da ita.", exceeds: "Yana kuma faɗin dalilin da yasa kowace hanya ta dace, da kalmomi kamar a waje, ƙarfe sirara ko sauri." },
      { name: "Haɗi, matsayi da alamomi", objective: "O2", notYet: "Wasu haɗi ko matsayi sun ɓace ko an yi musu suna ba daidai ba.", meets: "An zana haɗi biyar duka kuma an faɗi sunayensu, an jera matsayi huɗu da lambobinsu.", exceeds: "Yana kuma karanta alamar walda daidai: gefe, nau'i da girma." },
      { name: "Jerin lahani", objective: "O3", notYet: "Lahani ƙasa da biyar, ko dalilan ba daidai ba ne.", meets: "Lahani biyar, kowanne da dalili mai yiwuwa.", exceeds: "Yana kuma faɗin yadda wurin aiki zai duba kowane lahani." },
      { name: "Jerin abubuwan dubawa na tsaro", objective: "O4", notYet: "Babu idanu, fata, huhu, kunnuwa, gobara ko shoki.", meets: "Ya shafi idanu, fata, huhu, kunnuwa, shoki da aƙalla matakai uku na hana gobara, har da dokar ƙafa 35 da fire watch.", exceeds: "Ya kuma shafi ƙarfe mai shafi, tukwanen gas da hot work permit, kuma yana da sarari har ana iya bayani da shi ga sabon mataimaki." },
      { name: "Tsari mai ranaku daga majiyoyin hukuma", objective: "O5", notYet: "Matakan ba su da ranaku, ko dokokin sun fito daga talla ko rubutun kafofin sada zumunta.", meets: "Shirye-shirye biyu na gaske, AWS Accredited Test Facility ɗaya, dokokin jiha ko birni tare da adireshin shafin hukuma, da rana ga kowane mataki.", exceeds: "Yana kuma ambaton tambayoyin da aka yi wa kowane shiri da madadin hanya, kamar aikin mataimakin walda lokacin horo." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka shiga shirin walda ko apprenticeship cikin kwanaki 90",
      "Masu koyo da suka ci jarabawar takardar shaidar walda cikin watanni 12 (bisa abin da suka faɗa a binciken biyo baya)",
      "Masu koyo da aka ɗauke su aiki a matsayin masu walda ko mataimakan walda cikin watanni 6",
      "Shirye-shiryen abokan aiki sun ce sababbin ɗalibai suna zuwa da sanin kalmomin farko da matakan tsaro"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan AWS, OSHA, BLS da na jiha, da hotunan walda",
      "Takarda, alƙalami, almakashi da yankan takarda ko kwali don samfurin haɗi",
      "Zaɓi: samfurin walda (mai kyau da marar kyau) daga makaranta ko wurin aiki na yankin don a duba, ba don a yi ba",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Babu walda, yanka ƙarfe ko gogewa a wannan kwas. Aikin hannu na wurin aiki ne da ake kulawa, da cikakken PPE.",
      "Idan za ku iya, ku kawo samfurin walda ko hular walda da safar hannu da aka yi amfani da su don masu koyo su duba su riƙe (guntaye masu sanyi da tsabta kawai).",
      "Ku gayyaci malamin walda, AWS Accredited Test Facility ko wurin ƙera ƙarfe na yankin don su yi magana game da abin da suke nema.",
      "Ku taimaki kowane mai koyo ya duba dokokin jiharsa ko birninsa; kada ku ba da amsa ɗaya ga dukan rukunin.",
      "Ga masu koyo masu tarihin laifi ko tsofaffin sojoji, ku haɗa su da hidimomin masu dawowa gida ko na tsofaffin sojoji; kada ku yi alƙawarin wani sakamako.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
