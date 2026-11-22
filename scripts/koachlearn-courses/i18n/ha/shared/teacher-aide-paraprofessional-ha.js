"use strict";

// Koach Learn course, Hausa (ha) translation of shared/teacher-aide-paraprofessional.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// The ParaPro is an English-language test, so the English sentences being practiced stay in English inside quotes.

module.exports = {
  id: "teacher-aide-paraprofessional-ha",
  lang: "ha",
  translationOf: "teacher-aide-paraprofessional",
  category: "Workforce Development",
  name: "Shirin Zama Mataimakin Malami (Paraprofessional)",
  skills: "Duba bukatun jiharku ga mataimakin malami, Shirin jarabawar ParaPro, Jagorantar ƙaramin rukuni, Tallafa wa ɗabi'ar ɗalibai da sirrinsu, Kare yara da kai rahoton damuwa",
  outcome: "gano daidai abin da jiharku da gundumar makarantarku (school district) ke buƙata daga mataimakin malami, shirya jarabawar karatu, rubutu da lissafi da makarantu da yawa ke amfani da ita, jagorantar ƙaramin rukuni bisa shirin malami, da kare ɗalibai da sirrin bayanansu.",
  about: [
    "Mataimakan malami, wanda ake kira paraprofessional ko paraeducator a Turanci, suna aiki tare da malamai don taimaka wa ɗalibai su koya. Makarantu suna ɗaukar su don azuzuwa na kowa, ilimi na musamman (special education), ƙananan azuzuwa, da ɗaliban da ke koyon Turanci. Aiki ne mai kyau na farko a fannin ilimi, kuma mataimaka da yawa daga baya suna zama malamai.",
    "Wannan kwas yana shirya ku don aikin da kuma matakan ɗaukar aiki. Za ku duba dokokin jiharku, ku yi atisayen irin tambayoyin karatu, rubutu da lissafi da ke cikin jarabawar ParaPro ta ETS (kamfanin da ke shirya jarabawa a Amurka), ku kuma koyi aikin yau da kullum: jagorantar ƙananan rukunoni, tallafa wa ɗabi'a, ɓoye bayanan ɗalibai, da kai rahoto idan wani yaro yana cikin haɗari.",
    "Wannan kwas yana shirya ku ne; ba ya ba ku takardar shaida ko lasisi. Jiharku da gundumar makarantarku ne ke yanke shawarar wanda za a ɗauka aiki, kuma su ne ke zaɓar jarabawa da makin cin ta. Kowane darasi yana nuna muku inda za ku duba.",
    "Kowane darasi yana ɗaukar kusan minti biyar. Ku karanta shi, ku duba hotunan bayani (slides), ku yi aikin \"Gwada yanzu\", ku kuma amsa tambayoyi biyu masu sauri. Akwai gwajin ilimi bayan kowane babi, da jarabawar ƙarshe mai tambayoyi 20."
  ],
  finalTask: "Ku yi Shirin Shirye-shiryenku na Zama Mataimakin Malami a shafi ɗaya ko biyu: (1) bukatun jiharku da na gunduma ɗaya, tare da shafukan hukuma da kuka duba; (2) hanyar da za ku bi (darussan kwaleji, digiri, ko jarabawa kamar ParaPro) da shirin karatu mai kwanan wata; (3) aikin ƙaramin rukuni na minti 10 da kuka rubuta daga samfurin shirin malami, tare da alamun taimako (hints) da za ku bayar da rubutaccen saƙo zuwa ga malamin; (4) matakan da za ku ɗauka da wanda za ku kira idan kuna tsammanin ana cutar da wani yaro.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke son aiki a makarantu: iyaye, masu aikin sa-kai a makaranta, direbobin bas da ma'aikatan wurin cin abinci da ke son aiki a aji, mutanen da ke canza sana'a, mutanen da ke dawowa gida daga kurkuku (inda dokokin jiha suka yarda), da mutane daga al'ummomin da ba a kula da su sosai ba da ke son yi wa makarantun unguwarsu hidima.",
    startingPoint: "Yawancinsu suna da takardar kammala sakandare (high school diploma) ko GED (jarabawar da ke daidai da sakandare a Amurka) kuma suna son aiki da yara. Da yawa ba su yi karatun lissafi ko nahawu ba tsawon shekaru, ba su san dokokin ɗaukar aiki ba, kuma ba su taɓa ganin yadda ake gudanar da aji daga gefen manya ba.",
    gap: "Makarantu suna buƙatar mataimakan da suka cika dokokin jiha, za su iya cin jarabawar da ake buƙata, su bi shirin malami, su kula da ɗabi'a cikin natsuwa, kuma su kare yara. Masu koyo suna buƙatar sanin dokokin jiharsu, su sabunta karatunsu, rubutunsu da lissafinsu, su kuma koyi ayyukan yau da kullum, don su nemi aiki da ƙarfin gwiwa kuma su riƙe shi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli, kuma an bayyana kowace kalmar makaranta",
      "Dokoki sun bambanta daga jiha zuwa jiha da gunduma zuwa gunduma; kwas yana koyar da yadda ake dubawa, ba doka ɗaya ta ƙasa ba",
      "Na'urori: waya ko kwamfutar ɗakin karatu; atisaye yana yiwuwa a takarda",
      "Kare yara da sirrin ɗalibai: babu sunaye ko bayanan ɗalibai na gaske a kowane atisaye",
      "Binciken tarihi (background check): yawancin makarantu suna buƙata; kwas yana faɗin haka kuma ba ya yi wa kowa alkawarin aiki"
    ],
    prerequisites: "Ana tsammanin takardar kammala sakandare ko abin da ya yi daidai da ita don wannan aiki. Masu koyo da ke buƙatarta za su iya fara ɗaukar kwas-kwas na GED. Kwas ɗin \"Everyday Math\" (Lissafin Yau da Kullum) yana taimaka wa duk wanda ke son ƙarin atisayen lissafi."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Idan kuna da jiharku da gundumar makarantar da kuke son yin aiki a ciki", action: "lissafa cancantar da suke buƙata daga mataimakin malami da shafukan hukuma da suka faɗi haka", standard: "kuna ambaton hanyar ilimi, duk wata jarabawa da makin cin ta, da binciken tarihi" },
    { id: "O2", condition: "Idan aka ba ku tambayoyin atisayen karatu, rubutu da lissafi irin na jarabawar ParaPro", action: "amsa tambayoyin da bayyana kowane kuskure", standard: "kuna samun aƙalla 8 cikin 10 daidai" },
    { id: "O3", condition: "Idan aka ba ku shirin darasin malami don ƙaramin rukuni", action: "jagorantar gajeren aikin atisaye da ke bin shirin kuma ke ba da alamun taimako kafin amsa", standard: "kuna tsayawa kan manufar malamin kuma kuna rubuta saƙo mai layi biyu zuwa ga malamin" },
    { id: "O4", condition: "Idan aka ba ku wani yanayi na ɗabi'a ko na sirri a aji", action: "zaɓar matakai masu natsuwa da kyautatawa, da raba bayanan ɗalibi da ma'aikatan da ke buƙatarsu kawai", standard: "kuna bin shirin malamin da na ɗalibin" },
    { id: "O5", condition: "Idan aka ba ku wani yanayi inda za a iya cutar da yaro ko yana cikin haɗari", action: "bayyana matakan da za ku ɗauka, wanda za ku gaya wa da lokacin da za ku gaya masa", standard: "kuna kai rahoto a ranar kanta yadda jiharku da makarantarku suka buƙata, ba tare da yin bincike da kanku ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Samun cancanta",
      lessons: [
        {
          title: "Aikin, da dokokin jiharku",
          objectives: ["O1"],
          minutes: 6,
          goal: "Ku lissafa cancantar da jiharku da gundumar makaranta ɗaya ke buƙata daga mataimakin malami.",
          text: [
            "Mataimakin malami (paraprofessional) yana aiki ƙarƙashin malami. Kuna iya taimaka wa ƙaramin rukuni su karanta, ku taimaka wa ɗalibi mai nakasa ya bi darasin, ku lura da ɗakin cin abinci ko filin wasa, ko ku shirya kayan aiki. Malami ne ke tsara darasi da ba da maki; ku kuna taimakawa. Sunayen aikin sun haɗa da teacher's aide, instructional assistant, paraeducator da special education aide.",
            "Dokokin tarayya sun shafi mataimakan da ke taimakawa wajen koyarwa a makarantun da Title I ke biya, wato shirin tarayya na makarantun da ke da iyalai masu ƙaramin kuɗi da yawa. Waɗannan mataimakan suna buƙatar takardar kammala sakandare ko abin da ya yi daidai da ita, da ɗaya daga cikin waɗannan: shekara biyu na karatun kwaleji, digirin associate ko sama da shi, ko cin jarabawar karatu, rubutu da lissafi ta jiha ko ta yanki. Makarantu da yawa suna amfani da jarabawar ParaPro ta ETS a matsayin wannan jarabawa.",
            "Kowace jiha, wani lokaci kuma kowace gunduma, tana ƙara nata dokokin a kai. ETS tana lissafa makin cin ParaPro ga kowace jihar da ke amfani da ita; a wasu jihohi kowace gunduma ce ke saita nata maki, wasu jihohi kuma suna amfani da wasu jarabawoyi (Rhode Island yanzu tana karɓar ParaPathways kawai). Kusan kowace makaranta kuma tana buƙatar binciken tarihi da ɗaukar zanen yatsu. Don haka koyaushe ku duba jiharku da gundumarku kafin ku biya kuɗin jarabawa.",
            "Inda za ku duba: shafin intanet na ma'aikatar ilimi ta jiharku, tallan aikin a shafin intanet na gundumar, da shafin bukatun jihohi a parapro.ets.org."
          ],
          steps: ["Ku nemi \"paraprofessional\" ko \"paraeducator\" a shafin ma'aikatar ilimi ta jiharku.", "Ku buɗe tallan aiki na gaske daga gundumar da ke kusa da ku ku karanta bukatunsa.", "Ku duba parapro.ets.org don jarabawar jiharku da makin cin ta.", "Ku rubuta hanyar da kuka riga kuka cika ko za ku bi: darussan kwaleji, digiri, ko jarabawa.", "Ku lura da binciken tarihi da sauran matakai (gwajin lafiya, horo)."],
          words: [["Paraprofessional", "ma'aikacin makaranta da ke taimaka wa ɗalibai su koya ƙarƙashin umarnin malami; ana kuma kiransa teacher's aide ko paraeducator."], ["Title I", "shirin tarayya da ke ba da ƙarin kuɗi ga makarantun da ke da ɗalibai da yawa daga iyalai masu ƙaramin kuɗi."], ["ParaPro Assessment", "jarabawar ETS ta ƙwarewar karatu, rubutu da lissafi, da amfani da su don taimakawa a aji."], ["Makin cin jarabawa", "mafi ƙarancin makin da jiharku ko gundumarku ke karɓa (qualifying score)."], ["Binciken tarihi", "duba tarihin laifuka da wasu bayanai da makarantu ke yi kafin su ɗauki mutum aiki (background check)."]],
          slides: [
            { title: "Abin da mataimakin malami ke yi", bullets: ["Yana aiki ƙarƙashin umarnin malami", "Yana taimaka wa ƙananan rukunoni da ɗalibi ɗaya-ɗaya", "Yana tallafa wa ɗalibai masu nakasa da masu koyon Turanci", "Yana shirya kayan aiki kuma yana taimakawa wajen lura"] },
            { title: "Dokar tarayya ga mataimakan koyarwa na Title I", bullets: ["Takardar kammala sakandare ko abin da ya yi daidai da ita", "TARE DA shekara biyu na kwaleji, digirin associate, ko cin jarabawar jiha ko ta yanki"] },
            { title: "Jiharku da gundumarku suna ƙara nasu dokoki", bullets: ["Wasu suna amfani da ParaPro; wasu suna amfani da wasu jarabawoyi", "Makin cin jarabawa ya bambanta daga jiha zuwa jiha, wani lokaci daga gunduma", "Binciken tarihi da zanen yatsu sun zama ruwan dare"] },
            { title: "Inda za ku duba", bullets: ["Ma'aikatar ilimi ta jiharku", "Tallan aikin gundumar", "parapro.ets.org: shafin bukatun jihohi"] }
          ],
          sources: [
            { name: "34 CFR 200.58: cancantar mataimakan malami na Title I (Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/34/200.58" },
            { name: "ETS ParaPro: bukatun jihohi da makin cin jarabawa", url: "https://parapro.ets.org/state-requirements.html" },
            { name: "ETS ParaPro: game da jarabawar", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Ku nemo tallan aikin mataimakin malami guda ɗaya na gaske daga gundumar makaranta da ke kusa da ku. Ku rubuta: sunan aikin, ilimi ko jarabawar da yake buƙata, binciken tarihi, da albashi idan an rubuta shi. Sannan ku nemo jiharku a shafin bukatun jihohi na ETS ku rubuta ko tana amfani da ParaPro.",
          youCanNow: "lissafa abin da jiharku da gundumar da ke kusa ke buƙata daga mataimakin malami, ku kuma nuna inda kuka duba.",
          quickCheck: [
            { objective: "O1", q: "Wace hanya ce ke cika dokar tarayya ga mataimakin koyarwa na Title I, tare da takardar kammala sakandare?", options: ["Shekara biyar na renon yara", "Lasisin tuƙi", "Digirin associate", "Wasiƙa daga mahaifi"], answer: 2, why: "Dokar tana lissafa shekara biyu na kwaleji, digirin associate ko sama da shi, ko jarabawar jiha ko ta yanki." },
            { objective: "O1", q: "Wani aboki ya ce makin cin ParaPro ɗaya ne a ko'ina. Me za ku yi?", options: ["Ku duba jiharku, da gundumarku, a shafukan hukuma", "Ku yarda ku yi rajistar jarabawa", "Ku tsallake jarabawar ku nemi aiki kawai", "Ku roƙi abokin ya yi muku jarabawar"], answer: 0, why: "Kowace jiha ce ke saita makin cin jarabawa, a wasu jihohi kuma kowace gunduma." }
          ]
        },
        {
          title: "Atisayen ParaPro: karatu da rubutu",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ku amsa tambayoyin atisayen karatu da rubutu ku kuma bayyana kowane kuskure.",
          text: [
            "ETS ta ce ParaPro tana auna ƙwarewa da ilimin karatu, rubutu da lissafi, da ikon ku na amfani da su wajen taimakawa a aji. Don haka wasu tambayoyi suna buƙatar ku karanta ko ku rubuta da kyau, wasu kuma suna tambayar yadda za ku taimaka wa ɗalibi a karatu ko rubutu.",
            "Tambayoyin karatu na iya tambayar babban ra'ayin wani sashe, wani ƙaramin bayani, ma'anar wata kalma daga kalmomin da ke kewaye da ita, ko abin da marubuci ke nufi ba tare da faɗa kai tsaye ba. Ku fara karanta tambayar, sannan sashen, sannan ku koma ku nemo hujja.",
            "Tambayoyin rubutu na iya buƙatar ku nemo kuskure a nahawu, haruffan kalma ko alamomin rubutu, ko ku zaɓi hanya mafi kyau ta gyara jimla. Tambayoyin aji na iya tambayar yadda za a taimaka wa ɗalibi ya furta kalma bisa sautukanta ko ya gyara jimlar da ta haɗe ba daidai ba (run-on).",
            "ETS tana bayar da Study Companion da Study Guide kyauta tare da samfurin tambayoyi a shafinta na shirin jarabawa. Ku yi amfani da su; suna nuna ainihin irin tambayoyin fiye da kowace hanya."
          ],
          steps: ["Ku karanta tambayar kafin sashen.", "Ku nemo layin a cikin sashen da ke tabbatar da amsarku.", "A tambayoyin rubutu, ku karanta jimlar da babbar murya a zuciyarku ku saurari abin da bai yi daidai ba.", "Ku goge amsoshin da kuka san ba daidai ba ne, sannan ku zaɓa.", "Ga kowane kuskure, ku rubuta layi ɗaya: dalilin da ya sa amsar daidai take daidai."],
          words: [["Babban ra'ayi", "abin da sashe ya fi magana a kai (main idea)."], ["Alamomin mahallin", "kalmomin da ke kewaye da sabuwar kalma da ke taimaka muku ku gane ma'anarta (context clues)."], ["Run-on sentence", "jimloli biyu da aka haɗa ba tare da alamar rubutu ko kalmar haɗawa da ta dace ba."], ["Phonics", "haɗa haruffa da sautukansu don karanta kalmomi."]],
          slides: [
            { title: "Abin da ParaPro ke auna", bullets: ["Karatu, rubutu da lissafi", "Amfani da waɗannan ƙwarewa don taimaka wa ɗalibai a aji"] },
            { title: "Tambayoyin karatu", bullets: ["Babban ra'ayi da ƙananan bayanai", "Ma'anar kalma daga alamomin mahallin", "Abin da marubuci ke nufi", "Ku nemo hujja a cikin sashen"] },
            { title: "Tambayoyin rubutu", bullets: ["Ku nemo kuskuren nahawu, haruffa ko alamar rubutu", "Ku zaɓi gyara mafi kyau ga jimla", "Yadda za a taimaka wa ɗalibi ya gyara rubutunsa"] },
            { title: "Ku yi karatu da hikima", bullets: ["Ku yi amfani da Study Companion da Study Guide na ETS kyauta", "Ku rubuta dalili ga kowane kuskure"] }
          ],
          sources: [
            { name: "ETS ParaPro: shirin jarabawa (Study Companion da Study Guide)", url: "https://parapro.ets.org/parapro-test-prep.html" },
            { name: "ETS ParaPro: game da jarabawar", url: "https://parapro.ets.org/test-takers/about-the-test.html" }
          ],
          tryIt: "Ku yi atisaye yanzu (jarabawar da Turanci ce). 1) Ku gyara wannan jimla: \"The students was excited, they ran to the window.\" 2) A cikin \"The path was so narrow that two people could not walk side by side,\" me narrow ke nufi? 3) Ku rubuta jimla ɗaya kan yadda za ku taimaka wa yaron da ke karanta \"ship\" a matsayin \"sip\". Amsoshi: \"The students were excited, so they ran to the window\" (ko ku yi amfani da aya); narrow yana nufin ba mai faɗi ba (kunkuntacce); ku nuna \"sh\" ku yi atisayen sautinsa tare.",
          youCanNow: "amsa tambayoyin atisayen karatu da rubutu, nemo hujja, da bayyana kurakuranku.",
          quickCheck: [
            { objective: "O2", q: "Wace jimla ce aka rubuta daidai?", options: ["\"Her and me helped the class.\"", "\"The children was ready.\"", "\"Each of the boys have a book.\"", "\"The teacher and I set up the tables.\""], answer: 3, why: "\"The teacher and I\" shi ne mai aikatawa (subject), kuma \"set up\" ya dace da shi; sauran suna da kuskure a mai aikatawa ko a aikatau (verb)." },
            { objective: "O2", q: "Wani sashe ya ce, \"The garden was barren; nothing grew there.\" Me barren ke nufi?", options: ["Cike da furanni", "Ba ya fitar da komai", "Jiƙe sosai", "Sabon shuka"], answer: 1, why: "Alamar \"nothing grew there\" (babu abin da ya fito a wurin) tana nuna barren yana nufin ba ya fitar da komai." }
          ]
        },
        {
          title: "Atisayen ParaPro: lissafi, da shirin karatunku",
          objectives: ["O2", "O1"],
          minutes: 6,
          goal: "Ku amsa tambayoyin atisayen lissafi ku kuma rubuta shirin karatu mai ranar jarabawa.",
          text: [
            "Lissafi a ParaPro ya ƙunshi abubuwan farko da za ku taimaka wa ɗalibai a kai: fahimtar lambobi, tarawa, ɗebewa, sau da raba, ɓangarori (fractions), adadin goma (decimals) da kashi cikin ɗari, auna abubuwa masu sauƙi, karanta jadawalai da zane-zane, da daidaito masu sauƙi (equations). Wasu tambayoyi suna tambayar yadda za ku bayyana wani ra'ayin lissafi ga yaro.",
            "Ku yi aiki a hankali ku nuna matakanku a takarda. Ga tambayoyin labari (word problems): ku nemo tambayar, ku fitar da lambobin, ku zaɓi aikin lissafin, ku warware, sannan ku tambayi \"Shin wannan amsa tana da ma'ana?\"",
            "Shirin karatu yana mayar da \"wata rana\" zuwa kwanan wata. Ku gano yadda ake rajista (a cibiyar jarabawa ko a gida, inda ake bayarwa), ku duba kuɗin jarabawa da dokokin katin shaida a shafin hukuma, ku zaɓi ranar jarabawa makonni uku zuwa shida daga yanzu, ku kuma ba kowane mako abu ɗaya da za a mai da hankali a kai: karatu, rubutu, lissafi, sannan cikakken saitin atisaye."
          ],
          steps: ["Ku karanta tambayar labarin sau biyu ku zagaye tambayar.", "Ku rubuta lambobin da kuke buƙata.", "Ku zaɓi aikin lissafin ku warware a takarda.", "Ku duba cewa amsar tana da ma'ana.", "Ku sa ranar jarabawa da abin da za a karanta kowane mako a kalanda."],
          words: [["Ɓangare (fraction)", "wani ɓangare na abu cikakke, kamar 3/4."], ["Kashi cikin ɗari (percent)", "lamba daga cikin 100; 25% yana nufin 25 cikin 100."], ["Daidaito (equation)", "jimlar lissafi mai alamar daidai, kamar 3 + x = 10."]],
          slides: [
            { title: "Lissafi a ParaPro", bullets: ["Fahimtar lambobi da ayyukan lissafi huɗu", "Ɓangarori, adadin goma da kashi cikin ɗari", "Aunawa, jadawalai da daidaito masu sauƙi", "Yadda ake bayyana lissafi ga yaro"] },
            { title: "Warware tambayoyin labari", bullets: ["Ku zagaye tambayar", "Ku fitar da lambobin", "Ku zaɓi aikin lissafin ku warware", "Shin amsar tana da ma'ana?"] },
            { title: "Shirin karatunku", bullets: ["Ku duba rajista, kuɗi da dokokin katin shaida a shafin hukuma", "Ku zaɓi rana makonni 3 zuwa 6 daga yanzu", "Abu ɗaya a kowane mako, sannan cikakken saitin atisaye"] }
          ],
          sources: [
            { name: "ETS ParaPro: yadda ake rajista", url: "https://parapro.ets.org/how-to-register.html" },
            { name: "ETS ParaPro: dokokin katin shaida", url: "https://parapro.ets.org/test-takers/register-requirements.html" }
          ],
          tryIt: "Ku yi atisaye yanzu. 1) Ɗalibai 24 sun raba teburi 6 daidai. Nawa ne a kowane tebur? 2) Menene 3/4 a matsayin kashi cikin ɗari? 3) 3 + x = 10; menene x? 4) Wani aji ya karanta shafuka 12 ranar Litinin da 15 ranar Talata. Shafuka nawa ne gaba ɗaya? Amsoshi: 4, 75%, 7, 27. Sannan ku rubuta shirin karatunku: ranar jarabawa, da abu ɗaya da za a mai da hankali a kai kowane mako.",
          youCanNow: "warware tambayoyin labari masu sauƙi mataki-mataki, ku kuma tsara shirin karatu mai ranar jarabawa ta gaske.",
          quickCheck: [
            { objective: "O2", q: "Riga ɗaya $8 ce. Wani malami ya sayi 5. Nawa ne gaba ɗaya?", options: ["$13", "$35", "$40", "$45"], answer: 2, why: "5 x $8 = $40." },
            { objective: "O1", q: "Me ya kamata ku yi KAFIN ku biya kuɗin ParaPro?", options: ["Ku duba cewa jiharku ko gundumarku tana karɓarta da makin da take buƙata", "Ku sayi sabuwar na'urar lissafi", "Ku bar aikinku na yanzu", "Ku roƙi ɗalibi ya yi muku tambayoyi"], answer: 0, why: "ETS ta ba da shawarar ku tabbatar cewa hukumar jiharku ko ta yankinku tana karɓar jarabawar kafin ku tsara ranarta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Samun cancanta",
        questions: [
          { objective: "O1", q: "Wa ke yanke makin cin ParaPro da kuke buƙata?", options: ["Jiharku, a wasu jihohi kuma gundumarku", "Malamin da kuke aiki tare da shi", "Iyayen kowane ɗalibi", "Duk wani shafin intanet da ke sayar da kayan shirin jarabawa"], answer: 0, why: "ETS tana lissafa makin cin jarabawa bisa jiha; a wasu jihohi, gundumomi ne ke saita nasu." },
          { objective: "O1", q: "Ina ne wuri mafi kyau don duba bukatun gunduma?", options: ["Wani rubutu a kafar sada zumunta", "Tallan aikin gundumar ko shafin intanet ɗinta", "Abokin da ya yi aiki a can shekaru da suka wuce", "Tallan kayan shirin jarabawa"], answer: 1, why: "Tallan gundumar da kanta shi ne hanyar hukuma kuma ta yanzu." },
          { objective: "O2", q: "Wace jimla ce ke gyara run-on ɗin nan \"I finished my work I went to recess\"?", options: ["\"I finished my work I, went to recess.\"", "\"I finished, my work I went to recess.\"", "\"I finished my work, then I went to recess.\"", "\"I finished my work, so I went to recess.\""], answer: 3, why: "Waƙafi tare da kalmar haɗawa \"so\" yana haɗa cikakkun jimloli biyu daidai." },
          { objective: "O2", q: "Menene 20% na 50?", options: ["5", "25", "10", "70"], answer: 2, why: "20% shi ne 0.2, kuma 0.2 x 50 = 10." },
          { objective: "O2", q: "A tambayar karatu, ina ya kamata ku nemi hujjar amsarku?", options: ["A cikin sashen kansa", "A ra'ayinku", "A cikin amsa mafi tsawo", "A cikin sunan jarabawar"], answer: 0, why: "Amsar daidai tana da goyon bayan kalmomin da ke cikin sashen." }
        ]
      }
    },
    {
      name: "Babi na 2: Aiki a cikin aji",
      lessons: [
        {
          title: "Jagorantar ƙaramin rukuni bisa shirin malami",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ku jagoranci gajeren aikin atisayen ƙaramin rukuni da ke bin shirin malami.",
          text: [
            "Malami ne ke yanke abin da ɗalibai za su koya; ku kuna taimaka musu su yi atisayensa. Kafin rukunin ya fara, ku tambayi malamin: Menene manufar? Me ya kamata ɗalibai su iya yi a ƙarshe? Wane irin taimako ne aka yarda a bayar?",
            "Ku ba da alamun taimako kafin amsa. Tsari mai kyau shi ne: ku jira 'yan daƙiƙoƙi, ku yi tambayar da ke nuna hanya (\"Da wane sauti wannan ke farawa?\"), ku nuna misali makamancinsa, sannan kawai ku nuna amsar. Ana kiran wannan scaffolding: kuna ba da tallafi, sannan ku cire shi kaɗan-kaɗan.",
            "Ku yaba wa ƙoƙari da kalmomi daidai (\"Kun duba aikinku, haka kuka gano kuskuren\"). Ku riƙe rukunin kan aiki da gajerun umarni bayyanannu. A ƙarshe, ku rubuta gajeren saƙo ga malamin: wanda ya gane, wanda ya sha wahala da kuma a kan me."
          ],
          steps: ["Ku tambayi malamin manufar da irin taimakon da aka yarda.", "Ku shirya kayan aiki kafin ɗalibai su zo.", "Ku bayyana aikin a gajerun jimloli ɗaya ko biyu.", "Ku ba da alamun taimako kafin amsa: ku jira, ku tambaya, ku nuna misali, sannan ku nuna.", "Ku rubuta saƙo mai layi biyu ga malamin a ƙarshe."],
          words: [["Shirin darasi", "rubutaccen shirin malami na abin da ɗalibai za su koya da yadda za su koya (lesson plan)."], ["Scaffolding", "taimakon da ke bar ɗalibi ya yi aiki, sannan a cire shi mataki-mataki."], ["Lokacin jira", "'yan daƙiƙoƙi na shiru bayan tambaya don ɗalibai su yi tunani (wait time)."]],
          slides: [
            { title: "Malami ke jagoranci; ku kuna taimakawa", bullets: ["Ku tambaya: menene manufar?", "Ku tambaya: wane taimako aka yarda a bayar?"] },
            { title: "Alamun taimako kafin amsa", bullets: ["Ku jira 'yan daƙiƙoƙi", "Ku yi tambayar da ke nuna hanya", "Ku nuna misali makamancinsa", "Sannan kawai ku nuna amsar"] },
            { title: "Ku riƙe rukunin yana tafiya", bullets: ["Gajerun umarni bayyanannu", "Ku yaba wa ƙoƙari da kalmomi daidai", "Saƙo mai layi biyu ga malami a ƙarshe"] }
          ],
          tryIt: "Ga samfurin shirin malami: \"Manufa: ɗalibai su tara lambobi masu lambobi biyu tare da ɗaukar goma (regrouping). Rukuni: ɗalibai 4, minti 10.\" Ku rubuta aikinku: yadda za ku bayyana shi a jimloli biyu, tambayoyin atisaye uku, alamun taimako biyu da za ku bayar kafin ku nuna amsa, da saƙo mai layi biyu ga malamin. Ku yi amfani da baƙaƙen farko na ƙirƙira, kada ku taɓa amfani da sunayen ɗalibai na gaske.",
          youCanNow: "mayar da shirin malami zuwa gajeren aikin ƙaramin rukuni mai alamun taimako da saƙo zuwa ga malamin.",
          quickCheck: [
            { objective: "O3", q: "Wani ɗalibi ya makale a kan wata kalma. Menene matakinku na FARKO?", options: ["Ku faɗa masa kalmar nan da nan", "Ku jira, sannan ku tambaye shi da wane sauti take farawa", "Ku koma ga ɗalibi na gaba", "Ku ce masa ya yi zato"], answer: 1, why: "Lokacin jira da tambayar da ke nuna hanya suna bar ɗalibin ya fara yin tunanin da kansa." },
            { objective: "O3", q: "Wa ke yanke abin da ƙaramin rukunin ya kamata ya koya?", options: ["Mataimakin malami", "Ɗaliban", "Malamin", "Iyayen"], answer: 2, why: "Malami ne ke tsara darasi; mataimaki yana taimaka wa ɗalibai su yi atisayensa." }
          ]
        },
        {
          title: "Tallafin ɗabi'a, ilimi na musamman da sirri",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ku zaɓi matakai masu natsuwa da kyautatawa game da ɗabi'a, ku kuma raba bayanan ɗalibi da ma'aikatan da ke buƙatarsu kawai.",
          text: [
            "Ɗabi'a hanya ce da ɗalibai ke bayyana abin da ke damunsu. Ku natsu ku yi magana da murya ƙasa-ƙasa mai tsayayye. Ku tunatar da ɗalibai doka ta hanyar faɗin abin da za su yi (\"Ƙafafun tafiya\" maimakon \"Kada ku gudu\"). Ku lura ku yaba wa ɗaliban da ke yin abin da ya dace. Ku ba da zaɓi idan za ku iya (\"Kuna son farawa da shafin ja ko shuɗi?\"). Ku bi shirin ajin malamin, ku kuma kira malamin ko ma'aikatan makaranta nan da nan idan wani zai iya ji rauni.",
            "Mataimaka da yawa suna aiki da ɗaliban da ke da IEP, wato Individualized Education Program (shirin ilimi na musamman ga ɗalibi ɗaya) ƙarƙashin dokar tarayya ta ilimi na musamman (IDEA). IEP ko shirin ɗabi'a na iya faɗin daidai irin tallafin da ɗalibi ke samu, kamar ƙarin lokaci, hutu a wuri mai shiru ko jadawalin hotuna. Ku tambayi malamin waɗanne sassa na shirin ku ne za ku aiwatar, ku kuma bi su kowane lokaci.",
            "Bayanan ɗalibi sirri ne. FERPA dokar tarayya ce da ke ba iyaye haƙƙin ganin takardun karatun ɗansu da wani iko kan wanda kuma zai gan su. A matsayinku na mataimaki, kuna raba maki, ɗabi'a, lafiya ko bayanan IEP da ma'aikatan makarantar da ke buƙatarsu don aikinsu kawai. Kada ku taɓa magana game da ɗalibai a cikin al'umma, ku rubuta game da su a intanet, ko ku ɗauki hotunansu da wayarku."
          ],
          steps: ["Ku natsu ku yi amfani da murya ƙasa-ƙasa.", "Ku faɗi doka a matsayin abin da za a yi, ba abin da ba za a yi ba.", "Ku yaba wa ɗaliban da ke bin ta.", "Ku bi shirin malamin da IEP ko shirin ɗabi'ar ɗalibin.", "Ku nemi taimako nan da nan idan wani zai iya ji rauni.", "Ku raba bayanan ɗalibi da ma'aikatan da ke buƙatarsu kawai."],
          words: [["IEP", "Individualized Education Program: rubutaccen shiri ga ɗalibi mai nakasa, ƙarƙashin dokar tarayya IDEA."], ["IDEA", "Individuals with Disabilities Education Act, dokar tarayya ta ilimi na musamman."], ["FERPA", "dokar tarayya da ke kare sirrin takardun karatun ɗalibai."], ["Tallafin ɗabi'a mai kyautatawa", "koyarwa da yabon ɗabi'ar da kuke so, ba wai mayar da martani ga matsaloli kawai ba (positive behavior support)."]],
          slides: [
            { title: "Tallafin ɗabi'a mai natsuwa da kyautatawa", bullets: ["Murya ƙasa-ƙasa mai tsayayye", "Ku faɗi abin da ZA a yi: \"Ƙafafun tafiya\"", "Ku yaba wa ɗaliban da ke yin daidai", "Ku ba da zaɓi idan za ku iya"] },
            { title: "Ɗaliban da ke da IEP", bullets: ["IEP: rubutaccen shiri ƙarƙashin IDEA", "Ku tambayi waɗanne sassa ku za ku aiwatar", "Ku bi shi kowane lokaci"] },
            { title: "Ku ɓoye bayanan ɗalibi", bullets: ["FERPA tana kare takardun karatu", "Ku raba da ma'aikatan da ke buƙata kawai", "Babu magana a cikin al'umma, babu rubutu a intanet, babu hotuna"] }
          ],
          sources: [
            { name: "Ma'aikatar Ilimi ta Amurka: Menene FERPA?", url: "https://studentprivacy.ed.gov/faq/what-ferpa" },
            { name: "Ma'aikatar Ilimi ta Amurka: IDEA", url: "https://sites.ed.gov/idea/" }
          ],
          tryIt: "Yanayi: a lokacin karatu, wani ɗalibi (ku kira shi J.) ya jefar da littafinsa ya ce \"Wannan wauta ce.\" Shirin ɗabi'arsa ya ce zai iya ɗaukar hutun minti biyu a kusurwar natsuwa. Ku rubuta abin da za ku faɗa da abin da za ku yi, bi da bi. Sannan ku rubuta wanda za ku gaya wa game da hakan daga baya, da wanda BA za ku gaya wa ba.",
          youCanNow: "mayar da martani ga ɗabi'a cikin natsuwa da kyautatawa, bin shirin ɗalibi, da ɓoye bayanan ɗalibai.",
          quickCheck: [
            { objective: "O4", q: "Wane umarni ne aka faɗa ta hanyar kyautatawa?", options: ["\"Daina ihu!\"", "\"Kada ka taɓa wannan.\"", "\"Bar gudu.\"", "\"Don Allah ka yi magana a hankali.\""], answer: 3, why: "Yana gaya wa ɗalibin abin da zai yi maimakon abin da ba zai yi ba kawai." },
            { objective: "O4", q: "Wani maƙwabci a shago ya tambaye ku yaya wani ɗalibi a ajinku yake. Ku:", options: ["Ku faɗi wasu bayanai tun da maƙwabci ne", "Ku ce cikin ladabi ba za ku iya magana game da ɗalibai ba", "Ku nuna masa aikin ɗalibin a wayarku", "Ku bayyana IEP na ɗalibin"], answer: 1, why: "Bayanan ɗalibi sirri ne kuma ana raba su da ma'aikatan makarantar da ke buƙatarsu kawai." }
          ]
        },
        {
          title: "Kare yara da kai rahoton damuwa",
          objectives: ["O5", "O1"],
          minutes: 6,
          goal: "Ku bayyana matakan da za ku ɗauka idan kuna tsammanin ana iya cutar da yaro, da wanda za ku gaya wa.",
          text: [
            "Kowane babba a makaranta yana taimakawa wajen kare yara. Idan yaro yana cikin haɗari a yanzu, ku kira 911 (ko lambar gaggawa ta yankinku) ku nemi taimako nan take.",
            "Dokokin jiha suna ambaton mutanen da dole su kai rahoton zargin cin zarafin yara ko sakaci da su, ana kiransu mandated reporters (masu wajabcin kai rahoto). A jihohi da yawa ma'aikatan makaranta, har da mataimaka, suna cikin wannan jerin. Aikinku shi ne ku kai rahoton abin da kuka gani ko kuka ji, ba ku tabbatar da shi ba. Ku koyi dokar jiharku da manufar makarantarku a lokacin horonku: wa za ku kai wa rahoto (sau da yawa layin kai rahoton cin zarafin yara na jiha ko hukumar kare yara, CPS) da kuma cikin sauri nawa. A wasu jihohi, gaya wa malami ko shugaban makaranta ba ya maye gurbin rahotonku na kanku.",
            "Idan yaro ya gaya muku wani abu: ku natsu, ku saurara, ku kuma gode masa da ya gaya muku. Kada ku yi tambayoyi masu jagorantar amsa ko ku yi bincike. Kada ku yi alkawarin ɓoye shi; ku ce za ku nemi taimako daga mutanen da aikinsu shi ne kare yara. Ku rubuta ainihin kalmomin yaron, kwanan wata da lokaci, ku kuma kai rahoto a ranar kanta. Ku ɓoye shi daga duk wanda ba ya buƙatar sani.",
            "Layin Childhelp na Ƙasa na Cin Zarafin Yara, 1-800-422-4453, yana ba da shawarwari da taimako a kowane lokaci; shi kansa ba layin kai rahoto ba ne, amma zai iya taimaka muku ku gano inda za ku kai rahoto a jiharku."
          ],
          steps: ["Idan yaron yana cikin haɗari yanzu, ku kira 911.", "Ku saurara cikin natsuwa; kada ku yi bincike ko tambayoyi masu jagorantar amsa.", "Kada ku yi alkawarin ɓoye shi.", "Ku rubuta ainihin kalmomin yaron, kwanan wata da lokaci.", "Ku kai rahoto a ranar kanta yadda dokar jiharku da manufar makarantarku suka ce.", "Ku ɓoye shi daga duk wanda ba ya buƙatar sani."],
          words: [["Mandated reporter", "mutumin da doka ta wajabta masa kai rahoton zargin cin zarafin yara ko sakaci da su."], ["Sakaci (neglect)", "lokacin da ba a biya bukatun yaro na asali ba, kamar abinci, matsuguni, kulawa ko lura."], ["Child protective services (CPS)", "hukumar jiha ko ta ƙaramar hukuma da ke binciken rahotannin cin zarafin yara da sakaci da su."], ["Tambaya mai jagorantar amsa", "tambayar da ke nuna amsar, kamar \"Babanka ne ya buge ka?\" (leading question)."]],
          slides: [
            { title: "Akwai haɗari a yanzu?", bullets: ["Ku kira 911 ko lambar gaggawa ta yankinku", "Ku nemi taimako nan take"] },
            { title: "Masu wajabcin kai rahoto (mandated reporters)", bullets: ["Dokokin jiha suna ambaton wanda dole ya kai rahoto", "A jihohi da yawa wannan ya haɗa da ma'aikatan makaranta", "Ku kai rahoton abin da kuka gani ko kuka ji; ba ku ne za ku tabbatar ba"] },
            { title: "Idan yaro ya gaya muku", bullets: ["Ku natsu, ku saurara, ku gode masa", "Babu tambayoyi masu jagorantar amsa, babu bincike", "Kada ku yi alkawarin ɓoyewa", "Ku rubuta ainihin kalmominsa, kwanan wata da lokaci"] },
            { title: "Ku kai rahoto a ranar kanta", bullets: ["Ku bi dokar jiharku da manufar makarantarku", "Sau da yawa layin kai rahoto na jiha ko CPS", "Ku ɓoye shi"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: wajabcin kai rahoton cin zarafin yara da sakaci da su", url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: yadda ake kai rahoton cin zarafin yara da sakaci da su", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Child Welfare Information Gateway: binciken dokokin jihohi", url: "https://www.childwelfare.gov/resources/states-territories-tribes/state-statutes/" },
            { name: "Layin Childhelp na Ƙasa na Cin Zarafin Yara", url: "https://www.childhelphotline.org/" }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta Shirin Shirye-shiryenku na Zama Mataimakin Malami. Ku sa bukatun jiharku da na gundumarku tare da hanyoyin haɗi (links), hanyarku da kwanakin karatunku, aikin ƙaramin rukuninku daga Darasi na 4, da matakan tsaro daga wannan darasi tare da lambar kai rahoton cin zarafin yara ta jiharku (ku nemo ta a shafin \"how to report\" na Child Welfare Information Gateway).",
          youCanNow: "faɗin abin da za a yi idan ana iya cutar da yaro, wanda za ku kai wa rahoto da lokacin, ku kuma rubuta dukkan hanyarku zuwa aikin mataimakin malami a takarda.",
          quickCheck: [
            { objective: "O5", q: "Wani yaro ya gaya muku wani babba a gida yana cutar da shi kuma ya roƙe ku kada ku faɗa. Me za ku ce?", options: ["\"Na yi alkawari ba zan gaya wa kowa ba.\"", "\"Ka tabbata? Wannan bai yi kama da gaskiya ba.\"", "\"Na gode da ka gaya mini. Dole in gaya wa mutanen da aikinsu shi ne kare ka.\"", "\"Ka gaya mini kowane bayani don in yanke shawara.\""], answer: 2, why: "Ba za ku taɓa yin alkawarin ɓoyewa ba, kuma ba za ku tuhumi ko ku yanke hukunci ba; kuna neman taimako daga mutanen da suka dace." },
            { objective: "O5", q: "Yaushe ya kamata mai wajabcin kai rahoto ya kai rahoton damuwa?", options: ["Sai bayan ya sami hujja", "Bayan ya fara magana da iyalin", "A ƙarshen shekarar makaranta", "A ranar kanta, yadda dokar jiha da manufar makaranta suka ce"], answer: 3, why: "Kuna kai rahoton abin da kuka gani ko kuka ji, da sauri; tabbatarwa aikin CPS ne ko na 'yan sanda." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Aiki a cikin aji",
        questions: [
          { objective: "O3", q: "Menene scaffolding?", options: ["Taimakon da ke bar ɗalibi ya yi aiki, sannan a cire shi kaɗan-kaɗan", "Yi wa ɗalibi aikinsa", "Hukunci saboda amsoshin da ba daidai ba", "Kayan gini na aji"], answer: 0, why: "Scaffolding yana ba da tallafi sannan a hankali ya cire shi yayin da ɗalibi ke koyo." },
          { objective: "O3", q: "Rukuninku ya gama. Me za ku ba malamin?", options: ["Babu komai; malamin zai yi zato", "Gajeren saƙo: wanda ya gane da wanda ya sha wahala da kuma a kan me", "Lambar wayar gidan kowane ɗalibi", "Sabon shirin darasi da kuka rubuta"], answer: 1, why: "Gajeren saƙo yana taimaka wa malamin ya tsara abin da zai biyo baya." },
          { objective: "O4", q: "IEP na wata ɗaliba ya ce tana samun ƙarin lokaci a jarabawa. Malamin ya ce ku gudanar da jarabawar. Ku:", options: ["Ku ba ta lokaci ɗaya da kowa don adalci", "Ku tambaye ta ko tana son ƙarin lokaci yau", "Ku ba ta ƙarin lokacin, yadda IEP ya ce", "Ku bar ta ta tsallake jarabawar"], answer: 2, why: "Tallafin da ke cikin IEP wajibi ne kuma dole a bi su kowane lokaci." },
          { objective: "O4", q: "Wane zaɓi ne ya dace da FERPA?", options: ["Sanya hoton aji mai ban dariya a kafar sada zumuntarku", "Magana game da makin ɗalibi a wurin cin abincin iyali", "Aika rahoton ɗabi'ar ɗalibi ga abokinku ta saƙon waya", "Tattauna ci gaban ɗalibi da malamin kawai"], answer: 3, why: "Ana raba takardu da bayanan ɗalibi da ma'aikatan makarantar da ke buƙatarsu kawai." },
          { objective: "O5", q: "Kun ga wani yaro da mummunan rauni wanda ya ce yana tsoron komawa gida yau. Me ke zuwa farko?", options: ["Ku nemi taimako nan da nan, ku kira 911 idan yaron yana cikin haɗari yanzu, ku kuma kai rahoto a ranar kanta", "Ku kira iyayen ku tambayi abin da ya faru", "Ku jira mako ɗaya ku ga ko zai sake faruwa", "Ku tambayi abokan ajin yaron abin da suka sani"], answer: 0, why: "Haɗari a yanzu yana nufin taimakon gaggawa; sannan ku kai rahoto yadda jiharku da makarantarku suka buƙata, ba tare da yin bincike da kanku ba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shirin Zama Mataimakin Malami (Paraprofessional)",
    questions: [
      { objective: "O1", q: "Wanne ne ya fi bayyana mataimakin malami (paraprofessional)?", options: ["Ma'aikacin makaranta da ke taimaka wa ɗalibai su koya ƙarƙashin umarnin malami", "Mutumin da ke tsara duk darussa da ba da maki", "Mataimakin shugaban makaranta kawai", "Malamin wucin gadi mai cikakken lasisi"], answer: 0, why: "Mataimaka suna tallafa wa koyo; malami ne ke tsara darasi da ba da maki." },
      { objective: "O1", q: "Bisa dokar tarayya, mataimakin koyarwa na Title I mai takardar sakandare yana kuma buƙatar ɗaya daga cikin waɗannan. Wanne BA ya cikin zaɓuɓɓukan?", options: ["Shekara biyu na karatun kwaleji", "Digirin associate ko sama da shi", "Cin jarabawar jiha ko ta yanki", "Shekara ɗaya na aikin sa-kai a makarantar"], answer: 3, why: "Zaɓuɓɓuka uku su ne shekara biyu na kwaleji, digiri, ko jarabawar ilimi ta hukuma." },
      { objective: "O1", q: "Me kusan dukkan makarantu ke buƙata kafin su ɗauki mataimaki aiki?", options: ["Lasisin koyarwa", "Binciken tarihi", "Digiri na biyu (master's)", "Mota"], answer: 1, why: "Makarantu suna duba tarihin mutum don kare yara." },
      { objective: "O1", q: "Wace hanya ce ke gaya muku makin cin ParaPro na jiharku?", options: ["Tallan kayan shirin jarabawa", "Abokin aji", "Shafin bukatun jihohi a parapro.ets.org da jiharku ko gundumarku", "Duk wani dandalin tattaunawa a intanet"], answer: 2, why: "ETS tana lissafa makin cin jarabawa bisa jiha; jiharku ko gundumarku ce ke tabbatar da su." },
      { objective: "O2", q: "ParaPro tana auna:", options: ["Ilimin kimiyya da tarihi", "Saurin bugun rubutu", "Dokokin aji kawai", "Karatu, rubutu da lissafi, da amfani da su don taimakawa a aji"], answer: 3, why: "ETS ta ce tana auna karatu, rubutu da lissafi da amfani da su wajen koyarwa a aji." },
      { objective: "O2", q: "Wace kalma ce ta dace? \"Neither the teacher nor the students ___ ready.\"", options: ["were", "was", "is", "be"], answer: 0, why: "Da \"neither...nor\", aikatau (verb) yana bin mai aikatawa mafi kusa, \"students\", don haka \"were\"." },
      { objective: "O2", q: "Menene 1/2 + 1/4?", options: ["2/6", "3/4", "1/8", "2/4"], answer: 1, why: "1/2 daidai yake da 2/4, kuma 2/4 + 1/4 = 3/4." },
      { objective: "O2", q: "Aji mai ɗalibai 28 zai yi tafiya. Kowace mota (van) tana ɗaukar 8. Motoci nawa ake buƙata?", options: ["3", "3.5", "4", "5"], answer: 2, why: "28 / 8 = 3.5, kuma ba za a iya ɗaukar rabin mota ba, don haka kuna buƙatar 4." },
      { objective: "O2", q: "Wace hanya ce mafi kyau ta amfani da Study Companion na ETS na kyauta?", options: ["Ku karanta amsoshin kawai", "Ku tsallake tambayoyin da kuka yi kuskure", "Ku yi amfani da shi a daren da ke gaban jarabawa kawai", "Ku yi samfurin tambayoyin ku rubuta dalili ga kowane kuskure"], answer: 3, why: "Bayyana kowane kuskure yana nuna muku abin da za ku karanta na gaba." },
      { objective: "O3", q: "Kafin ku jagoranci ƙaramin rukuni, me ya kamata ku tambayi malamin?", options: ["Manufar da irin taimakon da aka yarda a bayar", "Ko za ku iya tafiya da wuri", "Waɗanne ɗalibai ne suka fi wayo", "Ko za ku iya canza darasin"], answer: 0, why: "Sanin manufar da taimakon da aka yarda yana riƙe ku kan shirin malamin." },
      { objective: "O3", q: "Wani ɗalibi ya ba da amsar da ba daidai ba. Menene mataki mafi kyau na gaba?", options: ["Ku ce \"Ba daidai ba\" ku wuce", "Ku yi tambayar da ke nuna kuskuren", "Ku ba da amsar nan da nan", "Ku bar wani ɗalibi ya yi dariya"], answer: 1, why: "Tambayar da ke nuna hanya tana bar ɗalibin ya gano kuskuren ya gyara shi." },
      { objective: "O3", q: "Wane yabo ne ya fi taimakawa?", options: ["\"Da kyau.\"", "\"Kai mai wayo ne sosai.\"", "\"Ka duba aikinka, kuma haka ka gano kuskuren.\"", "\"Da ƙyar dai.\""], answer: 2, why: "Yabon ƙoƙari daidai yana gaya wa ɗalibi abin da zai ci gaba da yi." },
      { objective: "O4", q: "Wani ɗalibi yana fusata. Wane mataki ne mai natsuwa da kyautatawa?", options: ["Ku ɗaga muryarku don ya saurara", "Ku yi magana da murya ƙasa-ƙasa ku ba shi zaɓi", "Ku ƙyale shi gaba ɗaya", "Ku yi masa barazanar kiran iyayensa"], answer: 1, why: "Murya mai natsuwa da zaɓi suna taimaka wa ɗalibi ya natsu." },
      { objective: "O4", q: "Menene IEP?", options: ["Rubutaccen shiri ga ɗalibi mai nakasa, ƙarƙashin IDEA", "Shirin abincin rana na makaranta", "Shirin albashin malami", "Jarabawa ga mataimaka"], answer: 0, why: "IEP yana nufin Individualized Education Program, shiri ƙarƙashin dokar tarayya IDEA." },
      { objective: "O4", q: "Mahaifin wani ɗalibi ya tambaye ku game da ɗabi'ar wani abokin ajinsa. Ku:", options: ["Ku bayyana abin da ya faru", "Ku raba shirin ɗabi'ar abokin ajin", "Ku nuna masa rubutun abin da ya faru", "Ku ce ba za ku iya raba bayanan wasu ɗalibai ba ku tura shi ga malamin"], answer: 3, why: "Bayanan ɗalibi sirri ne; ku raba su da ma'aikatan da ke buƙatarsu kawai." },
      { objective: "O4", q: "Ya dace ku ɗauki hotunan ɗalibai da wayarku?", options: ["E, idan suna da kyau", "E, idan ba za ku sanya su a intanet ba", "A'a; ku bi manufar makaranta ku ɓoye hotunan ɗalibai", "A lokacin tafiye-tafiyen makaranta kawai"], answer: 2, why: "Hotuna bayanan ɗalibi ne; ku bi manufar makaranta." },
      { objective: "O5", q: "Menene mandated reporter (mai wajabcin kai rahoto)?", options: ["Mutumin da doka ta wajabta masa kai rahoton zargin cin zarafin yara ko sakaci da su", "Ɗan jarida a taron makaranta", "Ɗalibin da ke kai rahoton cin zali", "Mahaifi mai aikin sa-kai"], answer: 0, why: "Dokokin jiha suna ambaton ƙwararrun da dole su kai rahoton zargin cin zarafi ko sakaci." },
      { objective: "O5", q: "A matsayinku na mai wajabcin kai rahoto, menene aikinku?", options: ["Tabbatar da cewa cin zarafin ya faru", "Yi wa iyalin tambayoyi", "Kai rahoton abin da kuka gani ko kuka ji, yadda jiharku da makarantarku suka buƙata", "Jira har sai kun tabbata"], answer: 2, why: "Ku kuna kai rahoto; CPS ko 'yan sanda ne ke bincike." },
      { objective: "O5", q: "Wani yaro a gabanku yana cikin haɗari a yanzu. Ku:", options: ["Ku aika imel ga shugaban makaranta", "Ku kira 911 ko lambar gaggawa ta yankinku", "Ku rubuta saƙo don gobe", "Ku ce wa yaron ya jira"], answer: 1, why: "Haɗari na nan take yana nufin taimakon gaggawa da farko." },
      { objective: "O5", q: "Me ya kamata ku rubuta bayan yaro ya gaya muku game da cutarwa?", options: ["Zatonku game da wanda ya aikata", "Tambayoyin da za ku yi wa iyalin", "Babu komai; ku tuna kawai", "Ainihin kalmomin yaron, kwanan wata da lokaci"], answer: 3, why: "Ainihin kalmomi, kwanan wata da lokaci suna sa rahoto ya zama bayyananne kuma mai adalci." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 5, 7, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "An duba bukatun", objective: "O1", notYet: "An yi zato game da bukatun ko sun fito daga hanyar da ba ta hukuma ba.", meets: "Ya lissafa hanyar ilimi, jarabawa da maki (idan akwai) da binciken tarihi na jiha da gunduma ɗaya, tare da hanyoyin haɗi na hukuma.", exceeds: "Ya kuma kwatanta gundumomi biyu ya lura da albashi ko wasu matakai kamar horo." },
      { name: "Shirin karatu", objective: "O2", notYet: "Babu ranar jarabawa, ko babu shirin abin da za a karanta.", meets: "Ranar jarabawa ta gaske (ko hanyar da babu jarabawa) da abu ɗaya da za a karanta kowane mako.", exceeds: "Ya haɗa da makin saitin atisaye da wuraren raunin da suka nuna." },
      { name: "Aikin ƙaramin rukuni", objective: "O3", notYet: "Aikin bai dace da manufar malamin ba, ko yana ba da amsoshi da farko.", meets: "Yana bin manufar, yana da tambayoyin atisaye, alamun taimako biyu kafin amsa, da saƙo ga malamin.", exceeds: "Ya kuma tsara hanya mai sauri ta ganin waɗanne ɗalibai ke buƙatar ƙarin taimako." },
      { name: "Ɗabi'a da sirri", objective: "O4", notYet: "Yana amfani da sunaye ko bayanan ɗalibai na gaske, ko yana shirin raba su a waje da ma'aikatan makaranta.", meets: "Yana amfani da baƙaƙen farko na ƙirƙira kuma ya faɗi wanda zai iya da wanda ba zai iya ganin bayanan ɗalibi ba.", exceeds: "Ya ƙara martani mai natsuwa da kyautatawa ga ɗabi'a ɗaya da ke bin shirin ɗalibi." },
      { name: "Matakan tsaro", objective: "O5", notYet: "Babu matakin gaggawa, ya yi alkawarin ɓoyewa, ko yana shirin yin bincike.", meets: "Ya lissafa matakan bi da bi tare da lambar kai rahoto ta jiha da lokacin ranar kanta.", exceeds: "Ya lura da abin da manufar makarantar kanta ke ƙarawa, bayan ya tambayi makarantar ko ya karanta ta." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka gama kwas ɗin kuma suka ci aikin ƙarshe (rubric)",
      "Masu koyo da suka zauna suka ci ParaPro ko jarabawar da jiharsu ke buƙata, ko suka cika bukatar ta wata hanya, cikin kwanaki 90",
      "Masu koyo da suka nemi aiki kuma aka ɗauke su a matsayin mataimakan malami, malaman wucin gadi ko ma'aikatan tallafi na makaranta (binciken bibiya)",
      "Makarantun haɗin gwiwa suna ba da rahoton sababbin mataimakan da ke bin shirin darasi, ke kula da ɗabi'a cikin natsuwa kuma ke kare sirrin ɗalibai"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don shafukan hukuma; takarda, fensir da takardar aiki don atisaye",
      "Study Companion da Study Guide na ParaPro na ETS kyauta (daga parapro.ets.org)",
      "Tallan aiki na gaske daga gundumar makaranta da ke kusa",
      "Kusan minti 75 gaba ɗaya, a gajerun zama, tare da ƙarin lokacin karatu kafin jarabawa"
    ],
    facilitatorNotes: [
      "Kafin kwas ɗin, ku duba dokokin mataimakin malami na jiharku da tallan aiki na gunduma ta yankinku don ku iya amsa tambayoyi game da su.",
      "Kada ku taɓa amfani da sunaye ko bayanan ɗalibai na gaske a atisaye; ku yi amfani da baƙaƙen farko na ƙirƙira.",
      "Ku gudanar da Darasi na 4 a matsayin wasan kwaikwayo: mai koyo ɗaya yana jagoranci, sauran suna zama ɗalibai, kuma rukunin yana ba da ra'ayi ta amfani da rubric.",
      "Darasi na 6 zai iya yi wa mutanen da aka cutar da su a lokacin yarinta wuya. Ku faɗi haka kafin ya fara, ku bar masu koyo su fita idan suna so, ku kuma shirya bayanan tallafi na yankin.",
      "Ku gaya wa masu koyo da ke da tsofaffin hukuncin laifi su duba dokokin binciken tarihi na jiha da na gunduma kai tsaye; kada ku yi zato ko sun cancanta.",
      "Ku gayyaci mataimakin malami da ke aiki ko ma'aikacin ɗaukar aiki na gunduma don ya amsa tambayoyi."
    ]
  }
};
