"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-post-harvest.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FAO_LOSS = { name: "FAO (Hukumar Abinci da Noma ta Majalisar Ɗinkin Duniya): Rage asara da ɓarnar abinci (kusan kashi 14 cikin 100 na abinci yana ɓacewa tsakanin girbi da kasuwa, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Hana da kula da gubar fumfuna a hatsi: kula da aflatoxin a masara", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "FAO TECA/STI: Masarar da ta bushe sosai tana amfanar kowa: na'urar busar da masara da hasken rana", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Kayayyakin Aflasafe na yaƙi da aflatoxin ta hanyar halitta ga manoman Afirka", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Jami'ar Purdue: Buhunan PICS masu hana iska shiga (Purdue Improved Crop Storage)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "FAO TECA/STI: Ɗakin sanyaya kayan lambu ba tare da wutar lantarki ba (Zero Energy Cooling Chamber)", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-ha",
  lang: "ha",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Kula da Amfanin Gona Bayan Girbi da Ajiya",
  skills: "Gano inda girbinku ke ɓacewa, Girbi a lokacin da ya dace, Busar da hatsi zuwa danshi mai aminci, Hana aflatoxin, Ajiye hatsi a buhunan da ba sa barin iska shiga, Sanyaya, rarrabawa da ɗaukar kayan lambu",
  outcome: "gudanar da shirin bayan girbi don amfanin gona ɗaya: girbe shi a lokacin da ya dace, busar da hatsi zuwa danshi mai aminci, hana aflatoxin, ajiye shi a buhunan da ba sa barin iska shiga, da kiyaye kayan lambu a sanyi, a rarrabe kuma a cikin kwalaye masu kyau don mai saye.",
  about: [
    "Wannan kwas ɗin na ƙananan manoma ne da manoma masu girma, ma'aikatan gona, 'yan kasuwa da matasa masu aiki a harkar noma a Kenya, Najeriya, Ghana da sauran Afirka. Girbi mai kyau yana iya rasa yawancin darajarsa bayan ya bar gona: hatsi yana yin fumfuna ko kwari (gara da makamantansu) su cinye shi, tumatir ya dagargaje, kuma masu saye su biya ƙasa ko su ƙi karɓa.",
    "Babi na 1 yana magana kan shigo da girbi da kyau: inda asara take faruwa da dalilinta, girbi a lokacin da ya dace, da busar da hatsi zuwa danshi mai aminci. Babi na 2 yana magana kan kiyaye shi: hana aflatoxin, ajiye hatsi a buhunan da ba sa barin iska shiga, da kiyaye kayan lambu a sanyi, a rarrabe kuma a cikin kwalaye masu kyau.",
    "Masu saye da ƙa'idojin ƙasa suna da nasu dokokin inganci, don haka koyaushe ku tambayi mai sayenku, ƙungiyar haɗin gwiwarku (cooperative) ko jami'in faɗakar da manoma (extension) abin da suke buƙata. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki a gonarku ko rumbunku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku rubuta shirin bayan girbi mai shafi ɗaya don amfanin gona ɗaya (naku, ko misali kamar masara eka 2 a Trans Nzoia, tumatir eka 1 a Kaduna, ko wake a Tamale): yaushe da yaya za ku girbe, yadda za ku busar da shi ku duba danshinsa (don hatsi), yadda za ku hana aflatoxin, yadda da inda za ku ajiye shi, da yadda za ku sanyaya, ku rarraba, ku saka shi a kwalaye don mai sayenku, tare da dokokin inganci na mai saye a rubuce a sama.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoma masu girma, ma'aikatan gona, 'yan kasuwa da matasa masu aiki a harkar noma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke kula da hatsi, kayan wake da kayan lambu bayan girbi.",
    startingPoint: "Yawancinsu suna girbi idan amfanin gona ya yi kama da ya nuna, suna busar da hatsi a rana a kan kowane wuri da ke kusa, suna ajiye shi a buhu, kuma suna ɗaukar kayan lambu a buhu ko a tari. Kaɗan ne ke duba danshin hatsi, suka san yadda aflatoxin ke samuwa, suke amfani da buhunan da ba sa barin iska shiga, ko suke rarrabawa da saka kayan lambu a kwalaye bisa dokokin mai saye.",
    gap: "Girbi mai kyau yana rasa yawa ko daraja sosai bayan ya bar gona: gara, fumfuna da beraye a rumbu, kayan lambu da suka dagargaje, da hatsin da aka ƙi saboda aflatoxin, wanda kuma yake cutar da iyalan da suka ci shi. Shirin bayan girbi yana kiyaye mafi yawan girbi, yana sa abinci ya zama lafiyayye, kuma yana kawo farashi mafi kyau.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalma ta musamman",
      "Na'urori: waya mai sauƙi; tamfol (tarpaulin), buhuna da kwalaye da mai koyo yake da su ko zai iya aro",
      "Masu saye da ƙa'idojin ƙasa suna da nasu dokokin inganci: masu koyo su tambayi mai saye, ƙungiyar haɗin gwiwa ko jami'in extension",
      "Lafiyar abinci: kada a taɓa ci, sayarwa ko ba dabbobi hatsi mai fumfuna; kayan yaƙi ta hanyar halitta sai yadda aka amince kuma aka rubuta a takardar bayaninsu",
      "Lokaci: darussa na kusan minti 5 da suka dace da aikin girbi"
    ],
    prerequisites: "Babu."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don amfanin gona ɗaya", action: "zana hanyarsa daga gona zuwa mai saye da yi wa wuraren da yake rasa yawa ko daraja alama", standard: "kuna ambaton aƙalla wurare uku na asara da abin da zai gyara su" },
    { id: "O2", condition: "Don kowane amfanin gonarku", action: "gane alamun da ke nuna ya nuna da tsara ranakun girbi tare da hasashen yanayi", standard: "tare da kayan aiki, buhuna ko kwalaye da ma'aikata a shirye kafin girbi" },
    { id: "O3", condition: "Don sabon hatsin da aka girbe", action: "busar da shi da sauri ba a kan ƙasa ba, da duba cewa ya kai danshi mai aminci", standard: "kusan kashi 13 zuwa 14 cikin 100 ko iyakar mai saye, an duba da na'urar auna danshi ko gwajin gishiri" },
    { id: "O4", condition: "Don masara, gyaɗa ko sauran amfanin gona masu haɗari", action: "lissafa da amfani da manyan matakan da ke hana aflatoxin", standard: "an cire hatsi mai fumfuna da wanda ya lalace, kuma ba a taɓa ci, sayarwa ko ba dabbobi ba" },
    { id: "O5", condition: "Da hatsi busasshe, mai tsabta kuma rarrabe", action: "cika, rufe da ajiye buhun da ba ya barin iska shiga", standard: "an ɗaure kowace leda ta ciki sosai babu iska, kuma buhun yana sama da ƙasa, nesa da bango, kuma beraye ba za su iya kai masa ba" },
    { id: "O6", condition: "Don kayan lambu", action: "kiyaye su a sanyi, rarraba su bisa ma'aunin mai saye da saka su a kwalaye don su isa ba tare da raunuka ba", standard: "a cikin kwalaye masu tsabta, masu ramukan iska, kuma masu alama" }
  ],
  chapters: [
    {
      name: "Babi na 1: Shigo da girbi da kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Inda girbi ke ɓacewa, da dalili",
          minutes: 4,
          goal: "Ku bi amfanin gonarku daga gona zuwa mai saye ku yi wa wuraren da yake rasa yawa ko daraja alama.",
          text: [
            "FAO ta ƙiyasta a shekarar 2019 cewa kusan kashi 14 cikin 100 na abincin duniya yana ɓacewa tsakanin girbi da shago, kafin ma ya kai rumfar kasuwa. A gonaki da yawa a Afirka, asarar wasu amfanin gona ta fi haka. Kowane buhun da ya ɓace iri ne, taki da aiki da aka zubar.",
            "Asara tana faruwa a kowane mataki: girbi da wuri ko a makare, barin amfanin gona a ruwan sama, ɗauka da ƙarfi har ya ji rauni, zafi, busarwa a hankali, kwari kamar gara da babban ƙwaron hatsi (larger grain borer), beraye, fumfuna, da saka kaya mara kyau a kan hanyoyi masu rami. Wasu asarar kuna iya ganin ta (buhuna sun ragu); wasu kuma ba za ku iya gani ba (ƙananan aji, ƙaramin farashi, ko hatsin da ba shi da lafiyar ci).",
            "Mataki na farko shi ne gano manyan asararku. Ku bi amfanin gonarku daga gona zuwa mai saye, kuma a kowane mataki ku tambayi: me ke lalacewa a nan, nawa ne ke ɓacewa, kuma nawa ne gyaran zai ci?"
          ],
          steps: ["Ku lissafa kowane mataki da amfanin gonarku ke bi: girbi, ɗauka, busarwa, sussuka ko ɓalla, ajiya, sakawa a kwalaye, jigila, sayarwa.", "A kowane mataki, ku rubuta abin da ke lalacewa (ruwan sama, raunuka, kwari, beraye, fumfuna).", "Ku ƙiyasta nawa ne ke ɓacewa ko nawa farashin ke raguwa.", "Ku zagaya manyan asara biyu; daga nan za ku fara."],
          words: [["Asarar bayan girbi", "abinci ko darajar da ke ɓacewa tsakanin girbi da sayarwa."], ["Babban ƙwaron hatsi (larger grain borer)", "ƙwaro da ke huda masarar da aka ajiye da rogo, ya mayar da su gari."], ["Aji (grade)", "rukunin inganci, kamar aji na farko ko na biyu, da ke ƙayyade farashi."]],
          slides: [
            { title: "Girman asarar (FAO)", bullets: ["Kusan kashi 14 cikin 100 na abinci yana ɓacewa tsakanin girbi da shago", "Sau da yawa ya fi haka ga wasu amfanin gona a gonakin Afirka", "Kowane buhun da ya ɓace yana zubar da iri, taki da aiki"] },
            { title: "Dalilin da yasa yake faruwa", bullets: ["Lokacin girbi mara dacewa, ruwan sama, busarwa a hankali", "Raunuka, zafi, jigila mai girgiza", "Gara, ƙwaron hatsi, beraye, fumfuna"] },
            { title: "Gano manyan asararku", bullets: ["Ku bi amfanin gona daga gona zuwa mai saye", "Ku tambayi me ke lalacewa a kowane mataki", "Ku fara da manyan biyu"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Ku zana hanyar amfanin gonarku daga gona zuwa mai saye a matsayin layin akwatuna. A ƙarƙashin kowane akwati, ku rubuta abin da ke lalacewa a wurin da kusan nawa ne ke ɓacewa. Ku zagaya manyan asara biyu.",
          youCanNow: "zana inda girbinku ke rasa yawa ko daraja da zaɓar asarar da za ku fara gyarawa.",
          quickCheck: [
            { objective: "O1", q: "Wane ƙwaro ne aka ambata a matsayin kwaron rumbu da ke cin hatsi?", options: ["Ƙudan zuma", "Ƙwaro mai ɗigo-ɗigo (ladybird)", "Babban ƙwaron hatsi (larger grain borer)", "Malam buɗe mana littafi"], answer: 2, why: "Gara da babban ƙwaron hatsi kwari ne na rumbu da ke jawo asarar hatsi." },
            { objective: "O1", q: "A kasuwa, an ƙi tumatirinku da yawa saboda sun dagargaje. Me za ku yi?", options: ["Ku bi amfanin gonar baya, ku gano matakin da dagargajewar ke faruwa da nawa gyaransa zai ci", "Ku sayar wa wani mai saye a gaba ba tare da canja komai ba", "Ku shuka wani amfanin gona daban", "Ku ɗora laifi a kan mai saye"], answer: 0, why: "Bin amfanin gona mataki-mataki yana nuna inda asara take faruwa da abin da za a gyara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Girbi a lokacin da ya dace",
          minutes: 5,
          goal: "Ku gane alamun da ke nuna kowane amfanin gonarku ya nuna, ku tsara ranakun girbi.",
          text: [
            "Girbi da wuri yana ba da ƙananan hatsi marasa nauyi ko kayan lambu da ba za su nuna da kyau ba; girbi a makare yana kawo lalacewar ruwan sama, kwari, tsuntsaye, sata da ruɓewa. Ku koyi alamun kowane amfanin gona.",
            "Masara ta nuna idan ɓawonta ya bushe kuma ƙwayar ta yi tauri, da baƙin layi (black layer) a gindinta; daga nan za ta iya ƙara bushewa a kan karan na ɗan lokaci idan yanayi ya bushe, amma kada ku bar ta a waje lokacin ruwan sama. Wake da wake-wake (cowpea) sun nuna idan yawancin kwasfa sun bushe kuma suna kaɗawa. Dawa ta nuna idan ƙwayar ta yi tauri kuma ƙusa ba zai iya lanƙwasa ta ba. Ana tsinkar tumatir a matakin launin da mai saye yake so (sau da yawa idan ya fara canja launi, don kasuwanni masu nisa). Kofi: ku tsinki 'ya'yan ja da suka nuna kawai. Shayi: ku tsinki sabon tohon, yawanci ganye biyu da toho ɗaya. Saiwar rogo tana ruɓewa cikin 'yan kwanaki bayan girbi, don haka ku tona abin da za ku iya sayarwa ko sarrafawa da sauri kawai.",
            "Ku tsara ranakun girbi tare da hasashen yanayi. Ku girbe kayan lambu da sanyin safiya, ku ajiye su a inuwa, kuma ku shirya buhuna, kwalaye, tamfol da ma'aikata kafin ku fara."
          ],
          steps: ["Ku rubuta alamun nuna na kowane amfanin gona da kuke nomawa.", "Ku zagaya gonar ku duba alamun kowane mako yayin da girbi ke kusa.", "Ku duba hasashen yanayi ku zaɓi ranakun da babu ruwa don hatsi.", "Ku shirya tamfol, buhuna ko kwalaye da ma'aikata.", "Ku girbe kayan lambu da sanyin safiya ku ajiye su a inuwa."],
          words: [["Nuna (maturity)", "matakin da amfanin gona ya gama girma kuma ya shirya don girbi."], ["Baƙin layi (black layer)", "baƙin tabo a gindin ƙwayar masara da ke nuna ta nuna."], ["Ganye biyu da toho ɗaya", "sabon tohon shayi da masu tsinka ke ɗauka don shayi mai inganci."]],
          slides: [
            { title: "Da wuri ko a makare, duka suna jawo asara", bullets: ["Da wuri: ƙanana, marasa nauyi, ba sa nuna da kyau", "A makare: ruwan sama, kwari, tsuntsaye, sata, ruɓewa"] },
            { title: "Alamun nuna", bullets: ["Masara: ɓawo ya bushe, ƙwaya ta yi tauri, baƙin layi", "Wake: yawancin kwasfa sun bushe kuma suna kaɗawa", "Kofi: 'ya'yan ja da suka nuna kawai; shayi: ganye biyu da toho ɗaya"] },
            { title: "Kayan lambu da sauransu", bullets: ["Tumatir: matakin launin da mai saye yake so", "Rogo: ku tona abin da za ku sayar ba da daɗewa ba kawai", "Ku girbe da sanyin safiya; ku ajiye a inuwa"] },
            { title: "Ku shirya", bullets: ["Ku duba hasashen yanayi; ku zaɓi ranakun da babu ruwa", "Tamfol, buhuna, kwalaye da ma'aikata tukuna"] }
          ],
          tryIt: "Don amfanin gona biyu da kuke nomawa, ku rubuta alamun nunansu da ranar da kuke tsammanin girbi. Ku tambayi mai sayenku matakin nuna ko ingancin da yake so ku rubuta. Ku saka tunatarwa a waya don duba hasashen yanayi mako ɗaya kafin.",
          youCanNow: "gane lokacin da amfanin gonarku ya nuna da tsara ranakun girbi da ke kiyaye inganci.",
          quickCheck: [
            { objective: "O2", q: "Ta yaya za ku san dawa ta shirya don girbi?", options: ["Ganyayenta har yanzu kore ne", "Kawunanta ƙanana ne", "Ƙwayar tana da laushi kamar madara", "Ƙwayar ta yi tauri kuma ƙusa ba zai iya lanƙwasa ta ba"], answer: 3, why: "Dawa ta shirya idan ƙwayar ta yi tauri kuma ƙusa ba zai iya lanƙwasa ta ba." },
            { objective: "O2", q: "Masararku ta nuna kuma ana hasashen ruwan sama mai ƙarfi mako mai zuwa. Me za ku yi?", options: ["Ku bar ta a kan karan har lokacin ruwan", "Ku girbe kafin ruwan, tare da tamfol da buhuna a shirye", "Ku girbe bayan ruwan ya ƙare kawai", "Ku yanke ta ku bar ta a ƙasa"], answer: 1, why: "Ku tsara girbi tare da hasashen yanayi, kuma kada ku bar masarar da ta nuna a waje lokacin ruwan sama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Busar da hatsi zuwa danshi mai aminci",
          minutes: 6,
          goal: "Ku busar da hatsi da sauri ku duba cewa ya kai danshi mai aminci don ajiya.",
          text: [
            "Sabon hatsin da aka girbe yana da ruwa da yawa. Hatsi mai danshi yana yin zafi, yana yin fumfuna kuma yana jawo kwari. Jagorar FAO kan masara ta ce busar da ita zuwa danshi mai aminci na kusan kashi 13 zuwa 14 cikin 100 kafin fumfuna ya fito ita ce hanya mafi tabbas ta hana aflatoxin, kuma busarwar ta zama da sauri: hatsin da ya kasance da danshi fiye da kusan kwana biyu yana cikin haɗari mafi girma. Mai sayenku, ƙungiyar haɗin gwiwarku ko ƙa'idar ƙasa na iya samun nasu iyakar, don haka ku tambaya.",
            "Ku busar a kan tamfol mai tsabta, dandamali da aka ɗaga, tabarma ko shimfidar siminti, kada ku taɓa busarwa a kan ƙasa kai tsaye. Ku baza hatsin siriri, ku juya shi sau da yawa a rana, kuma ku rufe shi ko ku shigo da shi kafin ruwan sama da da dare. Hatsin da aka ɓalla yana bushewa da sauri fiye da wanda ke har yanzu a kan kan masara (cob). Na'urorin busarwa da hasken rana (solar dryer), firam masu sauƙi masu murfin leda mai haske, suna busarwa da sauri kuma suna hana ruwan sama, ƙura da dabbobi.",
            "Ku duba danshi kafin ajiya. Kayan aiki mafi kyau shi ne na'urar auna danshi (moisture meter); ƙungiyoyin haɗin gwiwa, masu saye, ofisoshin extension da rumbunan ajiya sau da yawa suna da ita. Gwaji mai sauƙi a gida shi ne gwajin gishiri: ku saka cikin hannu na busasshen gishiri da ɗan hatsi a cikin kwalbar gilashi mai tsabta kuma busasshiya, ku girgiza na minti biyu zuwa uku, idan gishiri ya manne a gilashin hatsin har yanzu yana da danshi sosai. Hatsin da ya wuce gwajin na iya kasancewa da ɗan danshi kaɗan, don haka ku tabbatar da na'urar auna danshi idan kun samu dama."
          ],
          steps: ["Ku girbe a lokacin da babu ruwa.", "Ku baza hatsi siriri a kan tamfol, tabarma, dandamali ko siminti, kada a kan ƙasa kai tsaye.", "Ku juya shi sau da yawa a rana; ku rufe shi daga ruwan sama da da dare.", "Ku busar da sauri: ku yi ƙoƙari ku kai danshi mai aminci cikin kusan kwana biyu bayan ɓallewa.", "Ku yi gwajin gishiri; ku tabbatar da na'urar auna danshi a ƙungiyar haɗin gwiwarku ko wurin mai saye.", "Ku ajiye shi idan ya bushe kawai."],
          words: [["Danshi (moisture content)", "yawan ruwan da ke cikin hatsi, a matsayin kaso na nauyinsa."], ["Na'urar auna danshi (moisture meter)", "kayan aiki da ke auna danshin hatsi."], ["Gwajin gishiri", "gwaji mai sauƙi a gida: busasshen gishiri yana manne wa kwalba idan hatsi yana da danshi sosai."], ["Na'urar busarwa da hasken rana (solar dryer)", "firam mai murfi mai haske da ke amfani da rana don busar da amfanin gona da sauri kuma da tsabta."]],
          slides: [
            { title: "Dalilin busarwa", bullets: ["Hatsi mai danshi yana yin zafi, fumfuna kuma yana jawo kwari", "FAO: ku busar da masara zuwa kusan kashi 13 zuwa 14 cikin 100", "Da sauri: cikin kusan kwana biyu"] },
            { title: "Yadda ake busarwa", bullets: ["Tamfol, tabarma, dandamali ko siminti, kada a kan ƙasa", "Ku baza siriri, ku juya sau da yawa", "Ku rufe kafin ruwan sama da da dare"] },
            { title: "Ku duba kafin ajiya", bullets: ["Mafi kyau: na'urar auna danshi (cooperative, mai saye, extension)", "Gwaji mai sauƙi: gwajin gishiri a busasshiyar kwalba", "Gishiri ya manne = danshi ya yi yawa; ku ci gaba da busarwa"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Ku yi gwajin gishiri a kan cikin hannu na hatsinku (ko na maƙwabci): busasshiyar kwalba, busasshen gishiri, ku girgiza na minti biyu zuwa uku, ku kalli gilashin. Sannan ku gano wanda ke da na'urar auna danshi a kusa da ku da iyakar danshin da mai saye yake so.",
          youCanNow: "busar da hatsi da sauri a kan wuri mai tsabta da duba cewa ya kai danshi mai aminci kafin ajiya.",
          quickCheck: [
            { objective: "O3", q: "Mene ne na'urar busarwa da hasken rana (solar dryer)?", options: ["Tanderun lantarki", "Firam mai murfin leda mai haske da ke busar da hatsi da sauri kuma yana hana ruwan sama da ƙura", "Rumbun ƙarfe na ajiya", "Na'urar auna danshi"], answer: 1, why: "Na'urorin busarwa da hasken rana firam ne masu sauƙi masu murfi mai haske da ke busar da hatsi da sauri kuma suna kare shi." },
            { objective: "O3", q: "Gajimaren ruwan sama na taruwa da rana yayin da masararku da aka ɓalla ke bushewa a waje. Me za ku yi?", options: ["Ku bar ta; za ta bushe daga baya", "Ku ƙara baza ta siriri", "Ku zubar da ruwa daga kanta bayan ruwan", "Ku rufe ta ko ku shigo da ita kafin ruwan"], answer: 3, why: "Ku rufe hatsi ko ku shigo da shi kafin ruwan sama da da dare, don kada ya sake samun danshi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Shigo da girbi da kyau",
        questions: [
          { objective: "O1", q: "Kusan wane kaso na abinci ne FAO ta ƙiyasta yana ɓacewa tsakanin girbi da shago (2019)?", options: ["Kashi 1 cikin 100", "Kashi 50 cikin 100", "Kusan kashi 14 cikin 100", "Babu"], answer: 2, why: "Ƙiyasin FAO na 2019 shi ne kusan kashi 14 cikin 100 na ɓacewa tsakanin girbi da kasuwa." },
          { objective: "O2", q: "Wace ce alamar cewa ƙwayar masara ta nuna?", options: ["Ɓawo kore mai danshi", "Ƙwaya mai laushi kamar madara", "Gashin masara yana fara fitowa", "Baƙin layi a gindin ƙwayar"], answer: 3, why: "Baƙin layi yana nuna ƙwayar ta kai matakin nuna." },
          { objective: "O2", q: "Kuna da rogo eka 2 kuma za ku iya sayar da kashi ɗaya cikin huɗu kawai a wannan makon. Me za ku yi?", options: ["Ku tona abin da za ku iya sayarwa ko sarrafawa ba da daɗewa ba kawai", "Ku tona duka lokaci ɗaya", "Ku tona duka ku bar shi a rana", "Kada ku taɓa girbe rogo"], answer: 0, why: "Saiwar rogo tana ruɓewa cikin 'yan kwanaki bayan girbi." },
          { objective: "O3", q: "A ina ya kamata ku busar da masara?", options: ["A kan ƙasa kai tsaye", "A kan tamfol mai tsabta, tabarma, dandamali ko shimfidar siminti", "A cikin rufaffen buhu a ruwan sama", "A tari a cikin gona"], answer: 1, why: "Wuri mai tsabta, da aka ɗaga ko aka shimfiɗa yana sa hatsi ya kasance da tsabta kuma ya bushe da sauri." },
          { objective: "O3", q: "A gwajin gishiri, gishiri ya manne a gilashin. Mene ne ma'anarsa?", options: ["Hatsin ya bushe isasshe don ajiya", "Hatsin yana da aflatoxin", "Hatsin har yanzu yana da danshi sosai; ku ci gaba da busarwa", "Gishirin ba shi da kyau"], answer: 2, why: "Gishirin da ya manne a gilashi yana nuna hatsin har yanzu yana riƙe da danshi da yawa." }
        ]
      }
    },
    {
      name: "Babi na 2: Kiyaye girbi lafiya kuma mai sayuwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aflatoxin: mene ne shi da yadda ake hana shi",
          minutes: 6,
          goal: "Ku yi amfani da manyan matakan da ke hana aflatoxin shiga masararku da gyaɗarku.",
          text: [
            "Aflatoxin guba ce da wasu fumfuna (Aspergillus) ke yi, waɗanda ke tsiro a kan masara, gyaɗa, dawa da sauran amfanin gona, a gona da a rumbu. Sau da yawa ba za ku iya gani, ji ƙamshi ko ɗanɗanon ta ba. Cin ta a tsawon lokaci yana cutar da hanta, kuma ana danganta ta da ciwon dajin hanta da tsumburewar girman yara; da yawa tana iya kisa. Haka kuma tana wucewa daga abincin dabbobi zuwa madara da ƙwai. Masu saye da hukumomin ƙa'idojin abinci na ƙasa suna gwada ta kuma suna ƙin hatsin da ya wuce iyakar doka.",
            "Hanawa tana farawa a gona: amfanin gona mai lafiya, shuka a kan lokaci, da yaƙi da kwarin da ke lalata kan masara da kwasfa. Ku girbe a kan lokaci, kada ku bar amfanin gona kwance a ƙasa, kuma ku busar da shi da sauri zuwa danshi mai aminci. FAO ta lura cewa yawan aflatoxin a masarar da aka ajiye yana ƙaruwa tare da lalacewar gara, don haka ku tsaftace rumbu ku hana kwari shiga.",
            "Ku rarraba kafin ajiya: ku cire ƙwayoyi da kawunan masara (cob) masu fumfuna, karyayyu, masu canjin launi, waɗanda kwari suka lalata, da waɗanda suka yamutse. Kada ku taɓa ci, sayarwa ko ba dabbobi hatsi mai fumfuna. Kayayyakin yaƙi ta hanyar halitta (biocontrol) kamar Aflasafe, wanda IITA ta ƙirƙira kuma aka yi masa rajista a ƙasashe ciki har da Kenya, Najeriya da Ghana, ana baza su a gona kafin fure don su kori fumfuna masu guba; ku tambayi jami'in extension ko mai sayar da kayan noma ko an amince da ɗaya don amfanin gonarku da yankinku, kuma ku bi takardar bayaninsa."
          ],
          steps: ["Ku yaƙi kwarin da ke lalata kan masara da kwasfa a gona.", "Ku girbe a kan lokaci; kada ku bar amfanin gona a ƙasa.", "Ku busar da sauri zuwa danshi mai aminci.", "Ku cire hatsi mai fumfuna, karyayye, mai canjin launi da wanda kwari suka lalata.", "Ku ajiye a rumbu mai tsabta, busasshe, wanda kwari ba sa shiga.", "Ku tambayi extension game da kayan yaƙi ta hanyar halitta da aka amince da shi a yankinku."],
          words: [["Aflatoxin", "guba da wasu fumfuna ke yi a kan amfanin gona kamar masara da gyaɗa."], ["Aspergillus", "rukunin fumfuna da ke iya yin aflatoxin."], ["Yaƙi ta hanyar halitta (biocontrol)", "amfani da wani abu mai rai marar cutarwa don korar mai cutarwa."], ["Rarrabawa", "cire ƙwayoyi ko kayan lambu marasa kyau da hannu ko da na'ura."]],
          slides: [
            { title: "Mene ne aflatoxin", bullets: ["Guba da wasu fumfuna ke yi", "Sau da yawa ba a ganinta: babu ƙamshi, babu ɗanɗano", "Tana cutar da hanta; ana danganta ta da ciwon daji da tsumburewa"] },
            { title: "Ku hana ta a kowane mataki", bullets: ["Amfanin gona mai lafiya; ku yaƙi kwarin kan masara da kwasfa", "Ku girbe a kan lokaci; ku busar da sauri zuwa danshi mai aminci", "Rumbu mai tsabta, busasshe, wanda kwari ba sa shiga"] },
            { title: "Ku rarraba, kada ku yi amfani da hatsi mai fumfuna", bullets: ["Ku cire ƙwayoyi masu fumfuna, karyayyu, masu canjin launi", "Kada ku taɓa ci, sayarwa ko ba dabbobi hatsi mai fumfuna", "Tana wucewa zuwa madara da ƙwai"] },
            { title: "Yaƙi ta hanyar halitta", bullets: ["Aflasafe (IITA): an yi masa rajista a Kenya, Najeriya, Ghana", "Ana baza shi a gona kafin fure", "Ku tambayi extension; ku bi takardar bayaninsa"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Ku ɗauki samfurin hatsi ko gyaɗa da aka ajiye ku rarraba shi a kan faranti: ku ware ƙwayoyi masu fumfuna, karyayyu, masu canjin launi da waɗanda kwari suka lalata. Ku auna ko ku ƙirga su ku rubuta kason da kuka cire. Ku rubuta matakai biyu da za ku canja a damina mai zuwa don rage shi.",
          youCanNow: "bayyana dalilin da yasa aflatoxin ke da haɗari da amfani da matakan gona, busarwa, rarrabawa da ajiya don hana ta.",
          quickCheck: [
            { objective: "O4", q: "A kan waɗanne amfanin gona ne fumfunan aflatoxin ke tsiro?", options: ["Masara, gyaɗa da dawa", "Tumatir kawai", "Shayi kawai", "Ganyen rogo kawai"], answer: 0, why: "Fumfunan Aspergillus suna tsiro a kan masara, gyaɗa, dawa da sauran amfanin gona." },
            { objective: "O4", q: "Kun ga gara a masararku da aka ajiye. Me za ku yi?", options: ["Ku ƙyale su; ba su da wani muhimmanci", "Ku ba kaji hatsin da ya lalace", "Ku cire hatsin da ya lalace ku tsaftace rumbu don hana kwari, domin lalacewar gara tana ƙara aflatoxin", "Ku haɗa hatsin da ya lalace da mai kyau"], answer: 2, why: "Yawan aflatoxin yana ƙaruwa tare da lalacewar gara; ana cire hatsin da ya lalace, kuma ba a taɓa ba dabbobi ko sayar da shi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ajiye hatsi a buhunan da ba sa barin iska shiga",
          minutes: 5,
          goal: "Ku cika, ku rufe kuma ku ajiye buhun da ba ya barin iska shiga don kwari su mutu ba tare da magani ba.",
          text: [
            "Hermetic yana nufin rufaffe ta yadda iska ba za ta shiga ba. Buhun hermetic, kamar buhun PICS da aka ƙirƙira a Jami'ar Purdue, yana da ledoji biyu na ciki a cikin buhun saƙa na waje. Idan aka rufe shi, kwari da hatsi suna cinye iskar oxygen da ke ciki, kuma kwarin suna mutuwa ko su daina hayayyafa, ba tare da maganin kwari ba. Purdue ta lissafa masara, dawa, wake, wake-wake (cowpea), gyaɗa, shinkafa da sauran amfanin gona a matsayin waɗanda suka dace da buhunan.",
            "Buhun yana aiki ne kawai idan hatsin ya bushe kuma buhun ba ya barin iska shiga. Ku ajiye hatsi busasshe, mai tsabta, kuma rarrabe kawai. Ku cika ledar ciki, ku fitar da iska gwargwadon iko, ku murɗe wuyanta ku ɗaure sosai; sannan ku yi haka da leda ta biyu, a ƙarshe kuma da buhun waje. Ku duba ramuka kafin amfani; ƙaramin rami yana barin iska ta shiga, kuma buhun ya daina aiki.",
            "Ku ajiye buhuna sama da ƙasa a kan katakai (pallet) ko alluna, nesa da bango, a rumbu mai tsabta, busasshe, mai inuwa, kuma ku kare su daga beraye, waɗanda ke cizon ramuka. Kada ku buɗe su akai-akai: kowane buɗewa yana shigo da sabuwar iska. Buhunan da ba su lalace ba za a iya sake amfani da su a damina mai zuwa. Sauran zaɓuɓɓuka masu kyau su ne rumbunan ƙarfe (metal silo) da rumbuna masu tsabta, da aka ɗaga, masu iska don kawunan masara."
          ],
          steps: ["Ku duba cewa hatsin ya bushe, yana da tsabta kuma an rarraba shi.", "Ku duba ledojin buhun don ramuka.", "Ku cika ledar ciki, ku fitar da iska, ku murɗe ku ɗaure sosai.", "Ku ɗaure leda ta biyu, sannan buhun waje, haka nan.", "Ku ajiye a kan katakai, nesa da bango, a rumbu busasshe, mai inuwa, wanda beraye ba sa shiga.", "Ku buɗe idan ya zama dole kawai; ku sake amfani da buhunan da ba su lalace ba."],
          words: [["Hermetic", "rufaffe ta yadda iska ba za ta shiga ko ta fita ba."], ["Leda ta ciki (liner)", "jakar leda da ke cikin buhun waje."], ["Katako (pallet)", "dandamalin katako da ke ɗaga buhuna sama da ƙasa."], ["Rumbun ƙarfe (metal silo)", "rufaffen kwandon ƙarfe don ajiyar hatsi."]],
          slides: [
            { title: "Yadda buhunan hermetic ke aiki", bullets: ["Ledoji biyu a cikin buhun saƙa (PICS)", "An rufe: oxygen ya ƙare, kwari sun mutu", "Ba a buƙatar maganin kwari"] },
            { title: "Ku rufe shi daidai", bullets: ["Hatsi busasshe, mai tsabta, rarrabe kawai", "Ku fitar da iska; ku murɗe ku ɗaure kowane layi", "Ku fara duba ledojin don ramuka"] },
            { title: "Ku ajiye shi daidai", bullets: ["A kan katakai, nesa da bango", "Rumbu busasshe, mai inuwa, wanda beraye ba sa shiga", "Ku buɗe da wuya; ku sake amfani da buhunan da ba su lalace ba"] }
          ],
          sources: [PICS],
          tryIt: "Ku kalli rumbunku. Ku rubuta canje-canje uku da za su kare buhuna (katakai, tazara daga bango, hana beraye, inuwa). Idan kun samu dama, ku sayi buhun hermetic ɗaya daga mai sayar da kayan noma ku gwada ɗaure kowane layi da busasshen hatsi.",
          youCanNow: "rufe da ajiye hatsi a buhunan hermetic don ya daɗe ba tare da magunguna ba.",
          quickCheck: [
            { objective: "O5", q: "Me ke cikin buhun saƙa na waje na buhun PICS?", options: ["Rufin ƙarfe", "Garin maganin kwari", "Ledoji biyu na ciki", "Babu komai"], answer: 2, why: "Buhun PICS yana da ledoji biyu na ciki a cikin buhun saƙa na waje." },
            { objective: "O5", q: "Kun cika kuma kun ɗaure leda ta farko. Me za ku yi a gaba?", options: ["Ku fitar da iska, ku murɗe ku ɗaure leda ta biyu, sannan ku ɗaure buhun waje", "Ku bar leda ta biyu a buɗe don iska", "Ku huda rami don duba hatsin", "Ku ajiye shi a rana"], answer: 0, why: "Ana ɗaure kowace leda da buhun waje sosai don buhun ya ci gaba da hana iska shiga." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sanyaya kayan lambu, rarrabawa da sakawa a kwalaye",
          minutes: 5,
          goal: "Ku kiyaye kayan lambu a sanyi, ku rarraba su bisa ma'aunin mai saye, ku saka su a kwalaye don su isa ba tare da raunuka ba.",
          text: [
            "Kayan lambu da 'ya'yan itace kamar tumatir, sukuma (kale), mangoro da avocado suna ci gaba da rayuwa da numfashi bayan girbi. Zafi yana hanzarta wannan, don haka suna nuna, su yanƙwane kuma su ruɓe da sauri. Ku girbe da sanyin safiya, ku ajiye kaya a inuwa koyaushe, kuma ku kai su ga mai saye da sauri.",
            "Idan babu wutar lantarki, mai sanyaya ta hanyar ƙafewar ruwa (evaporative cooler) yana taimakawa. Zero Energy Cooling Chamber da FAO ta lissafa bango biyu ne na bulo da yashi mai jiƙa a tsakaninsu da murfi mai jiƙa a sama; yayin da ruwa ke ƙafewa yana sanyaya ciki kuma yana sa iska ta kasance da danshi don kada kaya su yanƙwane. Yana aiki mafi kyau a wurare masu bushewa da zafi. Masu sanyaya na tukunyar yumɓu suna aiki haka nan a ƙaramin mataki.",
            "Rarrabawa (grading) yana nufin raba kaya zuwa aji bisa girma, nuna da inganci, da cire waɗanda suka lalace don kada su ɓata sauran. Masu saye suna biyan ƙari don kaya masu daidaito, masu tsabta kuma rarrabe. Ku saka a kwalaye masu tsabta, masu ƙarfi, masu ramukan iska maimakon buhu don kaya masu laushi, kada ku cika su fiye da kima, kuma ku yi wa kowane kwali alama da aji, kwanan wata da sunanku. Hoton waya na kowane rukunin da aka rarraba yana taimakawa wajen sasanta rikici da masu saye."
          ],
          steps: ["Ku tambayi mai saye ajinsa: girma, nuna, inganci.", "Ku girbe da sanyin safiya ku ajiye kaya a inuwa.", "Ku rarraba zuwa aji; ku cire waɗanda suka lalace.", "Ku yi amfani da mai sanyaya ta hanyar ƙafewar ruwa idan dole ku riƙe kaya.", "Ku saka a kwalaye masu tsabta, masu ramukan iska; kada ku cika su fiye da kima.", "Ku yi wa kwalaye alama da aji, kwanan wata da suna; ku ɗauki hoto."],
          words: [["Mai sanyaya ta hanyar ƙafewar ruwa (evaporative cooler)", "ma'ajiyar da ruwa mai ƙafewa daga bango, yashi ko zane mai jiƙa ke sanyayawa."], ["Rarrabawa (grading)", "raba kayan lambu zuwa ajin inganci."], ["Kwali mai ramukan iska", "akwati mai ramuka da ke barin iska ta zagaya kayan."]],
          slides: [
            { title: "Zafi shi ne maƙiyi", bullets: ["Kaya suna ci gaba da numfashi bayan girbi", "Ku girbe da sanyin safiya", "Inuwa koyaushe; ku sayar da sauri"] },
            { title: "Sanyaya ba tare da wutar lantarki ba (FAO)", bullets: ["Zero Energy Cooling Chamber: yashi mai jiƙa tsakanin bangon bulo", "Ciki yana da sanyi da danshi", "Mafi kyau a wurare masu bushewa da zafi"] },
            { title: "Rarrabawa da sakawa a kwalaye", bullets: ["Ku rarraba bisa girma, nuna da inganci", "Kwalaye masu tsabta, masu ramukan iska, ba buhu ba", "Alamar aji, kwanan wata, suna; ku ɗauki hoto"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Aikin ƙarshe: ku rubuta shirinku na bayan girbi mai shafi ɗaya don amfanin gona ɗaya. Ku saka dokokin inganci na mai saye a sama, sannan lokacin girbinku, busarwa da duba danshi (don hatsi), matakan hana aflatoxin, ajiya, da yadda za ku sanyaya, ku rarraba, ku saka a kwalaye.",
          youCanNow: "kiyaye kayan lambu a sanyi, rarrabawa da saka su a kwalaye bisa ma'aunin mai saye, da gudanar da cikakken shirin bayan girbi don amfanin gona ɗaya.",
          quickCheck: [
            { objective: "O6", q: "A ina ne Zero Energy Cooling Chamber ke aiki mafi kyau?", options: ["A wurare masu sanyi da damshi", "A wurare masu bushewa da zafi", "A cikin firji kawai", "Da dare kawai"], answer: 1, why: "Masu sanyaya ta hanyar ƙafewar ruwa suna aiki mafi kyau a wurare masu bushewa da zafi, inda ruwa ke ƙafewa da sauri." },
            { objective: "O6", q: "Wani mai saye ya ce kwalayenku ba ajin da ya dace ba ne. Me zai taimaka wajen sasanta rikicin?", options: ["Yin ihu", "Rage farashinku nan take", "Mayar da kwalayen gida", "Alamomi masu aji da kwanan wata, da hoton waya na kowane rukunin da aka rarraba"], answer: 3, why: "Kwalaye masu alama da hoton kowane rukunin da aka rarraba suna taimakawa wajen sasanta rikici da masu saye." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kiyaye girbi lafiya kuma mai sayuwa",
        questions: [
          { objective: "O4", q: "Mene ne aflatoxin?", options: ["Taki", "Guba da wasu fumfuna ke yi a kan amfanin gona", "Wani nau'in gara", "Buhun ajiya"], answer: 1, why: "Aflatoxin guba ce da wasu fumfunan Aspergillus ke yi." },
          { objective: "O4", q: "Masararku tana da wasu kawuna (cob) masu fumfuna. Me ya kamata ku yi da su?", options: ["Ku ba kaji", "Ku haɗa su da hatsi mai kyau", "Ku sayar da su da arha", "Ku cire su; kada ku ci, ku sayar ko ku ba dabbobi"], answer: 3, why: "Aflatoxin tana cutar da mutane kuma tana wucewa daga abincin dabbobi zuwa madara da ƙwai." },
          { objective: "O5", q: "Ta yaya buhun hermetic ke kashe kwarin rumbu?", options: ["Oxygen da ke ciki yana ƙarewa idan aka rufe shi", "Yana da guba a ciki", "Ana dumama shi", "Yana barin sabuwar iska ta shiga"], answer: 0, why: "Idan aka rufe shi sosai, oxygen yana ƙarewa kuma kwari suna mutuwa ba tare da magunguna ba." },
          { objective: "O5", q: "Me yasa ake ajiye buhunan hatsi a kan katakai da nesa da bango?", options: ["Don su yi kyan gani kawai", "Don su ƙara nauyi", "Don hana danshi da sauƙaƙa ganin beraye da kwari", "Don buhunan su sami rana"], answer: 2, why: "Katakai da tazara daga bango suna sa buhuna su kasance busassu kuma su fi sauƙin dubawa." },
          { objective: "O6", q: "Mene ne hanya mafi kyau ta saka tumatir da ya nuna don kasuwa?", options: ["A matse a buhu", "A zuba a ƙasan babbar mota", "A rufaffiyar jakar leda a rana", "A kwalaye masu tsabta, masu ramukan iska, ba a cika su fiye da kima ba"], answer: 3, why: "Kwalaye suna kare kaya masu laushi daga dagargajewa kuma suna barin iska ta zagaya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kula da Amfanin Gona Bayan Girbi da Ajiya",
    questions: [
      { objective: "O1", q: "Wanne ne dalilin asarar bayan girbi da aka saba gani?", options: ["Busarwa da sauri", "Gara, beraye da fumfuna a rumbu", "Kwalaye masu tsabta", "Rarrabawa"], answer: 1, why: "Kwari da fumfuna a rumbu manyan dalilan asara ne." },
      { objective: "O1", q: "Me yasa za ku zana hanyar amfanin gonarku daga gona zuwa mai saye?", options: ["Don gano inda manyan asara ke faruwa", "Don tsawaita hanyar", "Don guje wa mai saye", "Ba shi da amfani"], answer: 0, why: "Sanin inda asara take faruwa yana nuna muku inda za ku fara ɗaukar mataki." },
      { objective: "O1", q: "Ƙaramin farashi saboda rashin inganci shi ne:", options: ["Ba asara ba ne", "Riba ce", "Asarar bayan girbi da ba a gani", "Haraji ne"], answer: 2, why: "Rasa aji ko farashi asarar daraja ce ko da babu buhun da ya ɓace." },
      { objective: "O2", q: "Wake ya shirya don girbi idan:", options: ["Furanni sun buɗe", "Ganyaye sun yi kore sosai", "Kwasfa har yanzu suna da laushi", "Yawancin kwasfa sun bushe kuma suna kaɗawa"], answer: 3, why: "Kwasfa busassu masu kaɗawa suna nuna wake ya nuna." },
      { objective: "O2", q: "Lokacin tsinkar kofi, ya kamata ku tsinki:", options: ["'Ya'yan ja da suka nuna kawai", "'Ya'ya kore", "Ganye da 'ya'ya tare", "'Ya'yan da suka faɗi ƙasa"], answer: 0, why: "'Ya'yan ja da suka nuna suna ba da kofi mafi inganci." },
      { objective: "O2", q: "Ma'aunin tsinkar shayi da aka saba shi ne:", options: ["Tsofaffin ganye masu tauri", "Ganye biyu da toho ɗaya", "Rassa gaba ɗaya", "Saiwoyi"], answer: 1, why: "Sababbin tohon ganye biyu da toho ɗaya suna ba da shayi mai kyau." },
      { objective: "O2", q: "Me yasa ake girbe kayan lambu da sanyin safiya?", options: ["Masu saye suna makarar tashi", "Ya fi arha", "Zafi yana hanzarta nuna, yanƙwanewa da ruɓewa", "Raɓar safiya tana ƙara nauyi"], answer: 2, why: "Kayan da ke da sanyi suna daɗewa." },
      { objective: "O3", q: "Jagorar FAO ta ba da danshi mai aminci don ajiyar masara na kusan:", options: ["Kashi 13 zuwa 14 cikin 100", "Kashi 25 cikin 100", "Kashi 40 cikin 100", "Kashi 2 cikin 100"], answer: 0, why: "FAO ta ce busarwa zuwa kusan kashi 13 zuwa 14 cikin 100 kafin fumfuna ya fito ita ce hanya mafi aminci ta hana aflatoxin." },
      { objective: "O3", q: "Da wane sauri ya kamata a busar da sabuwar masarar da aka ɓalla?", options: ["Cikin kusan makonni biyu", "Babu gaggawa", "Bayan damina mai zuwa", "Cikin kusan kwana biyu"], answer: 3, why: "FAO ta lura cewa aflatoxin yana ƙaruwa da sauri idan masara ta kasance da danshi fiye da kusan kwana biyu." },
      { objective: "O3", q: "Hanya mafi daidaito ta duba danshin hatsi ita ce:", options: ["Cizon ƙwaya", "Na'urar auna danshi", "Kallon launi", "Auna nauyin buhu"], answer: 1, why: "Na'urar auna danshi tana auna shi; gwajin gishiri gwaji ne mai sauƙi kawai." },
      { objective: "O3", q: "Me yasa ba a busar da hatsi a kan ƙasa kai tsaye?", options: ["Yana bushewa da sauri sosai", "Ya saɓa wa dukkan dokoki", "Ƙasa, danshi da ƙwayoyin fumfuna suna shiga hatsin", "Ƙasa tana sa hatsi ya yi nauyi kuma ya fi daraja"], answer: 2, why: "Ƙasa kai tsaye tana ƙazantar da hatsi kuma tana sa shi ya kasance da danshi." },
      { objective: "O4", q: "Aflatoxin tana da haɗari wani ɓangare saboda:", options: ["Tana da ƙamshi mai ƙarfi don haka mutane suna guje mata", "Sau da yawa ba za ku iya gani, ji ƙamshi ko ɗanɗanon ta ba", "Tana shafar tsirrai kawai", "Tana ɓacewa idan aka dafa hatsi"], answer: 1, why: "Yawanci ba a ganinta, don haka hanawa da gwaji suna da muhimmanci." },
      { objective: "O4", q: "Aflatoxin a abincin dabbobi tana iya:", options: ["Wucewa zuwa madara da ƙwai", "Sa dabbobi su yi girma da sauri", "Ba ta yin komai ga dabbobi", "Ta zama taki"], answer: 0, why: "Aflatoxin daga abincin dabbobi tana iya bayyana a madara da ƙwai." },
      { objective: "O4", q: "Aflasafe shi ne:", options: ["Buhun ajiya", "Na'urar auna danshi", "Nau'in irin masara", "Kayan yaƙi ta hanyar halitta da ke korar fumfuna masu guba"], answer: 3, why: "Aflasafe, daga IITA, yana amfani da fumfuna marasa cutarwa don korar masu guba." },
      { objective: "O4", q: "Kafin amfani da kayan yaƙi ta hanyar halitta, ya kamata ku:", options: ["Haɗa shi cikin hatsin da aka ajiye", "Tabbatar da extension cewa an amince da shi don amfanin gonarku da yankinku, kuma ku bi takardar bayaninsa", "Ninka yawansa", "Yi amfani da shi bayan girbi kawai"], answer: 1, why: "Ku yi amfani da kayayyakin da aka amince da su kawai, yadda takardar bayani ta ce." },
      { objective: "O5", q: "Me dole ya kasance gaskiya kafin hatsi ya shiga buhun hermetic?", options: ["Ya bushe, yana da tsabta kuma an rarraba shi", "Har yanzu yana da danshi", "An haɗa shi da maganin kwari", "Yana da ɗumi daga rana"], answer: 0, why: "Buhunan hermetic ba sa busar da hatsi; hatsi mai danshi zai yi fumfuna duk da haka." },
      { objective: "O5", q: "Ledar buhun hermetic tana da ƙaramin rami. Me zai faru?", options: ["Babu komai", "Zai fi aiki", "Iska za ta shiga kuma buhun zai daina aiki", "Hatsin zai bushe da sauri"], answer: 2, why: "Dole buhun ya hana iska shiga don ya hana kwari oxygen." },
      { objective: "O5", q: "Me yasa bai kamata ku riƙa buɗe buhunan hermetic akai-akai ba?", options: ["Suna ƙara nauyi", "Kowane buɗewa yana shigo da sabuwar iska", "Buɗe su ya saɓa wa doka", "Kwari suna son haske"], answer: 1, why: "Sabuwar iska tana dawo da oxygen ga kwari." },
      { objective: "O6", q: "Zero Energy Cooling Chamber yana sanyaya kaya ta hanyar:", options: ["Wutar lantarki", "Ƙanƙara daga shago", "Gas", "Ruwa mai ƙafewa daga yashi mai jiƙa tsakanin bangon bulo"], answer: 3, why: "Ƙafewar ruwa tana sanyaya ɗakin kuma tana sa iska ta kasance da danshi." },
      { objective: "O6", q: "Me yasa ake rarraba kayan lambu kafin sayarwa?", options: ["Masu saye suna biyan ƙari don kaya masu daidaito, masu tsabta kuma rarrabe", "Yana sa kaya su ruɓe da sauri", "Yana ɓoye waɗanda suka lalace", "Na fitarwa zuwa ƙasashen waje ne kawai"], answer: 0, why: "Rarrabawa yana cika ma'aunin masu saye kuma yana cire waɗanda suka lalace." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      7,
      9,
      11,
      14,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na shirin ku sake dubawa.",
    criteria: [
      {
        name: "Dokokin mai saye da lokacin girbi",
        objective: "O2",
        notYet: "Babu dokokin mai saye, ko babu alamun nuna.",
        meets: "Dokokin inganci na mai saye suna sama, tare da alamun nuna da yadda za a tsara ranakun girbi.",
        exceeds: "Yana nuna kayan aiki, buhuna ko kwalaye da ma'aikata da aka shirya kafin girbi."
      },
      {
        name: "Busarwa da danshi",
        objective: "O3",
        notYet: "Babu wurin busarwa ko duba danshi (don hatsi).",
        meets: "Busarwa ba a kan ƙasa ba, juyawa da rufewa, da duba danshi da na'urar auna danshi ko gwajin gishiri.",
        exceeds: "Ya ambaci inda za a iya amfani da na'urar auna danshi, kamar ƙungiyar haɗin gwiwa ko mai saye."
      },
      {
        name: "Hana aflatoxin",
        objective: "O4",
        notYet: "Babu matakan hana aflatoxin, ko an ajiye hatsi mai fumfuna.",
        meets: "Matakan gona, busarwa, rarrabawa da rumbu, an cire hatsi mai fumfuna kuma ba a taɓa ci, sayarwa ko ba dabbobi ba.",
        exceeds: "Ya tambayi extension ko akwai kayan yaƙi ta hanyar halitta da aka amince da shi da ya dace da amfanin gonar da yankin."
      },
      {
        name: "Ajiya",
        objective: "O5",
        notYet: "Babu hanyar ajiya, ko an ajiye hatsi da danshi.",
        meets: "Hatsi busasshe, mai tsabta, rarrabe a buhunan hermetic ko wani rumbu mai kyau, sama da ƙasa kuma beraye ba sa kai masa.",
        exceeds: "Ya rubuta sau nawa za a duba buhunan ba tare da buɗe su ba."
      },
      {
        name: "Sanyaya, rarrabawa da sakawa a kwalaye",
        objective: "O6",
        notYet: "Kayan lambu a buhu ko a rana, ko babu rarrabawa.",
        meets: "Lokutan girbi masu sanyi, inuwa, rarrabawa bisa ma'aunin mai saye, da kwalaye masu tsabta, masu ramukan iska, kuma masu alama.",
        exceeds: "Yana amfani da mai sanyaya ta hanyar ƙafewar ruwa ko hotunan kowane rukunin da aka rarraba."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na shirin bayan girbi",
      "Masu koyo da suka ce sun yi amfani da buhunan hermetic, duba danshi ko kwalaye cikin damina ɗaya (binciken biyo baya)",
      "Canjin asarar ajiya, kayan da aka ƙi ko farashin kowane buhu da masu koyo ko ƙungiyarsu suka faɗa bayan damina ɗaya",
      "Masu koyo da suka fara wani kwas na noma na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu, alƙalami da waya mai sauƙi",
      "Kwalbar gilashi mai tsabta da busasshen gishiri don gwajin gishiri; na'urar auna danshi idan za a iya aro",
      "Buhun hermetic da kwali don nuna yadda ake yi, idan akwai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, tare da lokacin rubuta shirin bayan girbi"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko rumbu: ku yi gwajin farko tare, sannan ku bi hanyar amfanin gona ɗaya daga gona zuwa mai saye.",
      "Ku nuna yadda ake gwajin gishiri kuma, idan zai yiwu, na'urar auna danshi daga ƙungiyar haɗin gwiwa ko mai saye.",
      "Ku gwada cika da ɗaure buhun hermetic a matsayin ƙungiya.",
      "Kada ku taɓa ɗanɗana ko ba dabbobi hatsi mai fumfuna a lokacin nunawa; ku nuna yadda ake rarrabawa da cire shi lafiya.",
      "Ku ba da maki ga shirin bayan girbi da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
