"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-animal-breeding-biosecurity.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const WOAH_ASF = { name: "Hukumar Lafiyar Dabbobi ta Duniya (WOAH): Zazzaɓin Aladu na Afirka (African swine fever)", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (Yuni 2025): ku yi amfani da allurar rigakafin ASF masu inganci kaɗai, waɗanda suka cika sabon ma'auni", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: Zazzaɓin Aladu na Afirka (babu allurar rigakafi ko magani mai aiki; kariya ita ce hanyar shawo kansa)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "Hukumar Lafiyar Dabbobi ta Duniya (WOAH): Murar tsuntsaye (avian influenza)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Murar tsuntsaye (alamominta a tsuntsaye)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Kyawawan hanyoyin kare gona daga cututtuka a kiwon aladu (Animal Production and Health Paper 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Kyawawan hanyoyin kare gona daga cututtuka a ƙananan gonakin kaji da kajin gida a Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "Jami'ar Georgia (University of Georgia Extension): Hanyoyin gane lokacin hawan shanun nono (tsayuwa don a hau, dokar safe-yamma)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Cibiyar Albarkatun Halittar Dabbobi ta Kenya (KAGRC): maniyyi da kayan AI", url: "https://kagrc.go.ke/" };
const KVB = { name: "Hukumar Likitocin Dabbobi ta Kenya (Kenya Veterinary Board): rajistar likitocin dabbobi da mataimakansu", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Majalisar Likitocin Dabbobi ta Najeriya (Veterinary Council of Nigeria): rajistar likitocin dabbobi", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Horar da masu ba da hidimar AI kan barbarar dabbobi ta hanyar allura a cikin al'umma", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Tsarin bayanai kan nau'o'in dabbobin gida (bayanin nau'o'i a kowace ƙasa)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-ha",
  lang: "ha",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Kiwon Dabbobi, Barbara da Kare Gona daga Cututtuka",
  skills: "Zaɓar nau'in dabba da ya dace da yanayinku da kasuwarku, Gane lokacin hawa da ajiye bayanan barbara, Shirya barbara ta allura (AI) da ƙwararren ma'aikaci, Guje wa haɗa dangi, Rubuta tsarin kare gona daga cututtuka, Gane da kai rahoton Zazzaɓin Aladu na Afirka da murar tsuntsaye",
  outcome: "barbarar shanunku, awakinku, aladunku ko kajinku da gangan, da hana cututtuka shiga gona: zaɓar nau'in da ya dace da yanayinku da kasuwarku, gane lokacin hawa da rubuta kowace barbara, amfani da ƙwararren ma'aikacin AI, guje wa haɗa dangi, bin tsarin kare gona a rubuce, da kai rahoton zargin Zazzaɓin Aladu na Afirka ko murar tsuntsaye ga likitan dabbobi nan take.",
  about: [
    "Wannan kwas na ƙananan manoma ne da masu girma a kiwo, ma'aikatan gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma (extension workers) a Kenya, Najeriya, Ghana, Senegal, Kamaru da sauran Afirka, waɗanda ke kiwon shanun nono, awaki, aladu ko kaji, kuma suke son garkensu ya ƙaru ba tare da shigo da cuta ba.",
    "Babi na 1 game da barbara mai kyau ne: zaɓar nau'in da ya dace, gane lokacin hawa da ajiye bayanan barbara, da amfani da barbara ta allura (artificial insemination, AI) ta hannun ƙwararren ma'aikaci, tare da guje wa haɗa dangi. Babi na 2 game da hana cututtuka shiga ne: tsarin kare gona da yankuna, kwanon wanke takalma da dokokin baƙi, ware sababbin dabbobi da zubar da matattun dabbobi lafiya, da cututtuka biyu da kowane mai kiwon aladu da kaji dole ya sani: Zazzaɓin Aladu na Afirka da murar tsuntsaye.",
    "Wannan kwas yana ginawa kan \"Lafiyar Dabbobin Kiwo da Kula da Su\", wanda ke koyar da duba lafiyar dabbobi kullum, rigakafi tare da likitan dabbobi da cutar Newcastle (mutuwar kaji). Ba ya ba da yawan magani, allurar rigakafi ko hormone: koyaushe ku bi likitan dabbobinku da abin da aka rubuta a kan kwalin maganin. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki a gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin kare gona daga cututtuka mai shafi ɗaya don gonarku (ko misali, kamar aladu 20 kusa da Abeokuta, kajin ƙwai 500 kusa da Kumasi, shanun nono 4 a Nyeri ko kajin nama 300 kusa da Thies): zanen da ke nuna yanki mai tsabta, yankin tsakiya da yanki mai ƙazanta, da ƙofa ɗaya tak ta shiga; dokokinku na kwanon wanke takalma da wanke hannu; dokokinku na baƙi da motoci tare da littafin baƙi; yadda za ku ware sababbin dabbobi; yadda za ku zubar da matattun dabbobi; alamun gargaɗin Zazzaɓin Aladu na Afirka ko murar tsuntsaye da abin da za ku yi a sa'a ta farko, tare da suna da lambar wayar likitan dabbobinku ko ofishin likitocin dabbobi.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoman kiwo na kasuwanci masu girma, ma'aikatan gona, matasan 'yan kasuwar noma da jami'an faɗakarwar noma a Gabas, Yamma da Tsakiyar Afirka (har da ƙasashen da ke magana da Faransanci), waɗanda ke kiwon shanun nono, awaki, aladu ko kaji.",
    startingPoint: "Suna iya ciyar da dabbobi da kula da su, kuma suna gane dabbar da ta yi kama da mara lafiya. Da yawa suna barbara da duk wani namiji da ke kusa, ba sa ajiye bayanan barbara a rubuce sosai, kuma suna barin baƙi, 'yan kasuwa da sababbin dabbobi su shiga gona ba tare da wata doka ba.",
    gap: "Manoma da ke son ƙarin nono, nama ko ƙwai sau da yawa suna sayen nau'o'in da ba su dace da yanayinsu ko abincinsu ba, ba sa ganin lokacin hawa, suna ɓata hidimar AI, kuma suna barin haɗa dangi ya shigo a hankali. Baƙo ɗaya, mota ɗaya ko sabon alade ɗaya na iya kawo Zazzaɓin Aladu na Afirka, wanda ba shi da allurar rigakafi ko magani mai aiki, ko murar tsuntsaye, wadda za ta iya kashe yawancin kajin. Tsarin barbara da tsarin kare gona a rubuce suna kare gona da makwabta.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa suna karanta Turanci a matsayin harshe na biyu, kuma kwas ɗin yana nan da Sifaniyanci, Faransanci da Larabci",
      "Na'urori: waya mai sauƙi ko wayar zamani, takarda da alƙalami; ƙarancin amfani da data",
      "Kuɗi: matakai masu arha da farko; lambobi a KES, NGN, GHS da XOF misalai ne kawai",
      "Dokokin lafiyar dabbobi: babu yawan magani, allurar rigakafi ko hormone, kuma babu lokacin jira bayan magani (withdrawal period); ku bi likitan dabbobi da abin da aka rubuta a kan kwalin",
      "Dole a kai rahoton ASF da murar tsuntsaye: ana kai rahoton zargin cuta ga likitan dabbobi ko hukumar likitocin dabbobi nan take, kuma dokokin ƙasa sun bambanta daga ƙasa zuwa ƙasa"
    ],
    prerequisites: "Kula da dabbobi na asali. Ana ba da shawarar a fara ɗaukar \"Lafiyar Dabbobin Kiwo da Kula da Su\" (a cikin Agriculture (Africa))."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku yanayinku, abincin dabbobinku da kasuwarku", action: "zaɓar nau'in dabba ko gami na gonarku da faɗin dalilan zaɓin", standard: "kuna ambaton aƙalla dalilai uku da suka dace da gonarku" },
    { id: "O2", condition: "Ta amfani da littafi ko waya a lokacin dubawa sau biyu a rana", action: "rubuta alamun hawa, barbara da ranar haihuwa da ake tsammani ga kowace mace ta barbara", standard: "ba tare da wata rana da ta ɓace ba ga dabbobin da kuke barbarawa" },
    { id: "O3", condition: "Idan saniya ko akuya ta nuna tana tsayuwa don a hau", action: "shirya barbara ta allura (AI) da ƙwararren ma'aikacin AI mai rajista a lokacin da ya dace", standard: "kuna kiran ma'aikacin a ranar kuma kuna rubuta bayanan maniyyi ko namijin" },
    { id: "O4", condition: "Idan aka ba ku bayanan barbararku", action: "tsara barbara da ke guje wa haɗa dangi na kusa", standard: "babu barbarar uba da 'ya, uwa da ɗa ko ɗan'uwa da 'yar'uwa a tsarin" },
    { id: "O5", condition: "Don gonarku ko sashenku", action: "rubuta tsarin kare gona daga cututtuka mai yankuna, kwanon wanke takalma, dokokin baƙi, ware sababbin dabbobi da zubar da matattun dabbobi", standard: "yana ɗauke da dukkan sassa biyar a shafi ɗaya" },
    { id: "O6", condition: "Idan aladu ko kaji sun nuna alamun gargaɗi ko sun mutu farat ɗaya", action: "gane alamun Zazzaɓin Aladu na Afirka ko murar tsuntsaye da kai rahotonsu ga likitan dabbobi ko hukumar likitocin dabbobi", standard: "nan take, ba tare da motsa dabbobin, sayar da su ko cin su ba" }
  ],
  chapters: [
    {
      name: "Babi na 1: Barbara don garke mafi kyau",
      lessons: [
        {
          title: "Zaɓar nau'in dabba da ya dace da yanayinku da kasuwarku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓar nau'i ko gami da ya dace da yanayinku, abincinku da masu sayenku.",
          text: [
            "Nau'i mafi kyau shi ne wanda ke kawo kuɗi a gonarku, ba wanda ke da manyan lambobi a takardar talla ba. Saniyar nono ta waje mai yawan nono tana buƙatar abinci mai kyau da yawa, ruwa mai tsabta, inuwa da kulawar lafiya ta kusa. A yanki mai zafi da bushewa mai ƙarancin kiwo, za ta iya ba da nono ƙasa da gamin gida mai jure wahala, kuma ta fi yawan rashin lafiya.",
            "Nau'o'in gida, kamar Zebu na Gabashin Afirka, akuyar West African Dwarf (ƙananan awakin Yammacin Afirka) ko shanun N'Dama na Yammacin Afirka, suna jure zafi, kaska da abinci mara kyau, amma ba sa girma da sauri kuma ba sa ba da yawa. Nau'o'in waje, kamar shanun nono na Friesian ko Ayrshire, aladun Large White ko kajin kasuwanci na gami (hybrid), suna ba da yawa idan kuna iya ciyar da su da kare su da kyau. Gami sau da yawa yana tsakaninsu.",
            "Ku fara daga kasuwarku: wa ke saye, me suke biyan kuɗi a kai (nono, nauyin dabba mai rai, nama mara kitse, ƙwai, akuyar biki) kuma yaushe. Sannan ku duba abin da za ku iya samarwa a duk shekara: abinci, ruwa, gida, ma'aikata da likitan dabbobi. Ku tambayi jami'in faɗakarwar noma, ƙungiyar masu kiwon nau'o'i ko cibiyar bincike ta ƙasarku waɗanne nau'o'i ne ke yin kyau a yankinku. Rumbun bayanan DAD-IS na FAO yana jera nau'o'in da ake kiwo a kowace ƙasa."
          ],
          steps: ["Ku rubuta abin da masu sayenku ke so da abin da suke biya a kai.", "Ku rubuta abin da za ku iya samarwa a duk shekara: abinci, ruwa, gida, ma'aikata, likitan dabbobi.", "Ku jera nau'o'i ko gami biyu ko uku da manoma kusa da ku ke kiwo.", "Ku tambayi jami'in faɗakarwar noma ko ƙungiyar masu kiwon nau'o'i game da kowanne.", "Ku zaɓi nau'in da ya dace da jerin biyu, ku rubuta dalilai uku."],
          words: [["Nau'i (breed)", "rukunin dabbobi iri ɗaya masu kama da halaye iri ɗaya, da ake gada daga iyaye zuwa 'ya'ya."], ["Nau'in waje (exotic breed)", "nau'in da aka samar a wani yanki, sau da yawa mai yawan amfani amma bai dace da zafi, cututtuka da abincin gida sosai ba."], ["Gami (cross)", "dabbar da iyayenta suka fito daga nau'o'i biyu daban-daban."]],
          slides: [
            { title: "Nau'in da ya dace yana kawo kuɗi a gonarKU", bullets: ["Manyan lambobin takardar talla suna buƙatar kashe kuɗi mai yawa", "Abinci mara kyau da zafi suna rage amfani da sauri", "Ku zaɓa don gonarku, ba don hoto ba"] },
            { title: "Na gida, na waje ko gami", bullets: ["Na gida: yana jure zafi, kaska da abinci mara kyau", "Na waje: yana ba da yawa, yana buƙatar abinci da kulawa mai kyau", "Gami: sau da yawa yana tsakaninsu"] },
            { title: "Ku fara daga kasuwa", bullets: ["Me masu saye ke biya a kai: nono, nama, ƙwai?", "Yaushe suke saye?", "Me za ku iya samarwa a duk shekara?"] },
            { title: "Ku tambaya kafin ku saya", bullets: ["Jami'in faɗakarwar noma ko ƙungiyar masu kiwon nau'o'i", "Manoma kusa da ku masu wannan nau'in", "FAO DAD-IS yana jera nau'o'i a kowace ƙasa"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Ku rubuta gajerun jeri biyu don gonarku: abin da masu sayenku ke so, da abin da za ku iya samarwa a duk shekara. Ku ambaci nau'o'i ko gami biyu, ku zaɓi ɗaya, tare da dalilai uku.",
          youCanNow: "zaɓar nau'i ko gami da ya dace da yanayinku, abincinku da kasuwarku, da bayyana dalilin.",
          quickCheck: [
            { objective: "O1", q: "Wani manomi a yanki mai zafi da bushewa mai ƙarancin kiwo yana son shanun nono. Wane zaɓi ya fi dacewa?", options: ["Saniyar waje mafi yawan nono da zai iya samu", "Duk saniyar da ta fi arha a kasuwa", "Gamin gida mai jure wahala da ya dace da zafi da abinci", "Nau'in da aka zaɓa daga hoton takardar talla"], answer: 2, why: "Nau'in da ke jure zafi da abincin da yake da shi a zahiri zai fi samarwa a tsawon lokaci fiye da wanda ke buƙatar abin da ba zai iya samarwa ba." },
            { objective: "O1", q: "Me ya kamata ku FARA rubutawa idan kuna zaɓar nau'i?", options: ["Sunan nau'in da makwabcinku ke so", "Abin da masu sayenku ke so da abin da suke biya a kai", "Launin da kuka fi so", "Nau'in da ke da manyan dabbobi"], answer: 1, why: "Kasuwa ce ke nuna abin da ke biya; sannan ku duba abin da gonarku za ta iya samarwa." }
          ]
        },
        {
          title: "Gane lokacin hawa da bayanan barbara",
          objectives: ["O2"],
          minutes: 5,
          goal: "Gane macen da ke cikin hawa, da rubuta hawa, barbara da ranar haihuwa.",
          text: [
            "Saniya, akuya ko alade mace tana iya ɗaukar ciki ne kawai a ɗan gajeren lokaci idan tana \"cikin hawa\" (heat). Idan kun rasa shi, za ku jira kusan makonni uku don na gaba, alhali kuna ciyar da ita. Shanu, awaki da aladu yawanci suna shiga hawa kusan kowace kwana 21, amma wannan yana bambanta, don haka ku lura sosai.",
            "Alama mafi tabbas a saniya ita ce tsayuwa don a hau: tana tsayawa cak idan wata dabba ta hau ta. Sauran alamomin su ne hawan wasu dabbobi, rashin natsuwa, kuka da ƙarfi, ruwa mai haske mai ɗanko daga farjinta, da raguwar nono. Awaki suna kaɗa jela, suna kuka kuma suna neman bunsuru. Alade mace a cikin hawa tana tsayawa cak idan kun danna bayanta. Ku lura aƙalla sau biyu a rana, da sassafe da maraice, na minti 20 zuwa 30, lokacin da dabbobi suke natsuwa.",
            "Bayanai suna mayar da hasashe tsari. Ga kowace mace ku rubuta: lambar shaidarta (ID), rana da lokacin kowane hawa, ranar da aka barbare ta, da wane bijimi, bunsuru ko namijin alade, ko wace sandar maniyyin AI (straw), da ranar haihuwa da ake tsammani. Sannan za ku san lokacin da za ku duba ko ta dawo hawa kusan makonni 3 bayan haka, lokacin da za ku daina tatsar saniya, da waɗanne mata ke ci gaba da kasa ɗaukar ciki. Ciki yana ɗaukar kusan watanni 9 a saniya, kusan watanni 5 a akuya, kuma kusan watanni 3, makonni 3 da kwanaki 3 a alade mace; likitan dabbobinku ko jami'in faɗakarwar noma zai iya ba ku ainihin lambobin nau'inku."
          ],
          steps: ["Ku ba kowace mace ta barbara lambar shaida: alamar kunne, suna ko lamba.", "Ku lura da hawa sau biyu a rana, da safe da maraice.", "Ku rubuta rana, lokaci da alamun da kuka gani.", "Ku rubuta ranar barbara da namiji ko sandar maniyyin AI da aka yi amfani da shi.", "Ku ƙara ranar duba ko ta dawo hawa, kusan makonni 3 bayan haka.", "Ku rubuta ranar haihuwa da ake tsammani, ku tabbatar da ciki tare da likitan dabbobi ko ma'aikacin AI."],
          words: [["Hawa (heat, oestrus)", "ɗan gajeren lokacin da mace za ta karɓi namiji kuma za ta iya ɗaukar ciki."], ["Tsayuwa don a hau (standing heat)", "lokacin da saniya ke tsayawa cak don a hau ta; alama mafi tabbas cewa tana cikin hawa."], ["Barbara (service)", "haɗa mace da namiji, ko ta namiji ko ta allura (AI)."], ["Lokacin ciki (gestation)", "lokaci daga ɗaukar ciki zuwa haihuwa."]],
          slides: [
            { title: "Hawa gajere ne; rasa shi yana jawo makonni 3", bullets: ["Shanu, awaki da aladu: kusan kowace kwana 21", "Rasa hawa = makonni na ciyarwa ba tare da ciki ba"] },
            { title: "Alamun hawa", bullets: ["Saniya: tana tsayawa a hau ta (alama mafi tabbas)", "Tana hawan wasu, rashin natsuwa, ruwa mai haske", "Akuya: kaɗa jela; alade mace: tana tsayawa idan an danna"] },
            { title: "Ku lura sau biyu a rana", bullets: ["Da sassafe da maraice", "Minti 20 zuwa 30, lokacin da dabbobi suke natsuwa"] },
            { title: "Littafin bayanan barbara", bullets: ["ID, rana da lokacin hawa, ranar barbara", "Namiji ko sandar maniyyin AI da aka yi amfani da shi", "Ranar duba dawowar hawa da ranar haihuwa"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Ku yi shafin bayanan barbara a takarda ko a rubutun waya da waɗannan layukan: ID na dabba, rana da lokacin hawa, alamun da aka gani, ranar barbara, namiji ko sandar maniyyin AI, ranar duba dawowar hawa, ranar haihuwa. Ku cike shi don ɗaya daga cikin matanku, ko don saniyar misali.",
          youCanNow: "gane alamun hawa da ajiye bayanan barbara da ke ɗauke da hawa, barbara da ranakun haihuwa.",
          quickCheck: [
            { objective: "O2", q: "Wace ce alama mafi tabbas cewa saniya tana cikin hawa?", options: ["Tana cin abinci fiye da yadda ta saba", "Tana yawan kwanciya", "Tana tsayawa cak idan wata dabba ta hau ta", "Gashinta yana sheƙi"], answer: 2, why: "Tsayuwa don a hau ita ce alama mafi tabbas ta hawa; sauran alamomin suna nuna yiwuwa ne kawai." },
            { objective: "O2", q: "An barbari akuyarku a ranar 1 ga Maris. Yaushe za ku lura ko ta dawo hawa?", options: ["Kusan makonni 3 bayan haka, wajen 22 ga Maris", "Washegari", "Bayan watanni 6", "Ba sai an duba ba; dole ta ɗauki ciki"], answer: 0, why: "Hawa yana zuwa kusan kowace kwana 21, don haka macen da ba ta ɗauki ciki ba tana sake nuna hawa kusan makonni 3 bayan haka." }
          ]
        },
        {
          title: "Barbara ta allura (AI) da guje wa haɗa dangi",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Shirya AI da ƙwararren ma'aikaci a lokacin da ya dace, da tsara barbara da ke guje wa dangi na kusa.",
          text: [
            "Barbara ta allura (artificial insemination, AI) tana saka maniyyin namiji da aka tabbatar da ingancinsa cikin mahaifar mace. Tana ba ƙaramin manomi halittar babban bijimi ko bunsuru ba tare da ya ajiye shi ba, kuma tana rage haɗarin cututtukan da ake yaɗawa ta hanyar barbara. Ƙwararren ma'aikacin AI ko likitan dabbobi ne ke yin AI, ba manomi ba. Hanyar da ba daidai ba za ta iya cutar da dabbar, kuma dole a ajiye maniyyi a daskare cikin ruwan nitrogen (liquid nitrogen) har zuwa lokacin amfani, in ba haka ba zai mutu.",
            "Ku nemi ma'aikaci da aka horar kuma yake da rajista: ku tambayi ofishin kiwon dabbobi na gundumarku ko yankinku, ƙungiyar haɗin gwiwar masu shanun nono ko likitan dabbobi mai rajista. A Kenya, KAGRC na samar da maniyyi ta hannun wakilan da aka naɗa, kuma ya kamata ma'aikatan AI su yi rajista da Kenya Veterinary Board; a Najeriya, ku duba cewa likitan dabbobin yana cikin rajistar Veterinary Council of Nigeria. Doka da aka saba bi a shanu ita ce safe-yamma (AM-PM): saniyar da aka fara gani tana tsayuwa don a hau da safe ana barbare ta a yammacin ranar ko da maraice; wadda aka fara gani da yamma ana barbare ta washegari da safe. Ku kira ma'aikacin da zarar kun ga hawa, ku rubuta sunan bijimin ko lambarsa da ke kan sandar maniyyin.",
            "Haɗa dangi (inbreeding) yana nufin barbara tsakanin dangi na kusa: uba da 'yarsa, uwa da ɗanta, ko ɗan'uwa da 'yar'uwarsa. 'Ya'yan sau da yawa sun fi rauni, suna girma a hankali, suna yawan rashin lafiya kuma za a iya haifar su da nakasa. Yana faruwa a ɓoye idan bijimi, bunsuru, namijin alade ko zakara ɗaya ya daɗe a gona tsawon shekaru. Ku hana shi: ku ajiye bayanan uwa da uban kowace dabba, ku musanya ko ku sayar da namijin barbararku kafin 'ya'yansa mata su kai lokacin barbara, ku aro ko ku musanya maza da manoman da dabbobinsu ba dangin naku ba ne, kuma ku yi amfani da maniyyin AI daga wani bijimi daban duk lokacin da kuka barbari 'ya."
          ],
          steps: ["Kun ga tsayuwa don a hau: ku rubuta lokacin.", "Ku kira ma'aikacin AI ɗinku mai rajista nan take.", "Ku yi amfani da dokar safe-yamma a shanu, ko shawarar ma'aikacin.", "Ku tabbatar sandar maniyyin daga sanannen bijimi take, ku rubuta sunansa ko lambarsa.", "Kafin kowace barbara, ku duba bayanai: shin wannan namijin ubanta ne, ɗanta ne ko ɗan'uwanta?", "Idan haka ne, ku yi amfani da wani namiji ko wani bijimin AI daban."],
          words: [["Barbara ta allura (AI)", "saka maniyyin zaɓaɓɓen namiji cikin mace da hannu, wanda ƙwararren ma'aikaci ke yi."], ["Sandar maniyyi (straw)", "siririn bututu mai ɗauke da maniyyi daskararre na barbara ɗaya, da sunan bijimi ko lambarsa a kai."], ["Ruwan nitrogen (liquid nitrogen)", "ruwa mai tsananin sanyi da ke ajiye maniyyi a daskare har zuwa lokacin amfani."], ["Haɗa dangi (inbreeding)", "barbara tsakanin dangi na kusa, wadda ke kawo 'ya'ya masu rauni da ƙarin nakasa."]],
          slides: [
            { title: "Me yasa AI", bullets: ["Halitta mai inganci ba tare da ajiye bijimi ba", "Rage haɗarin cututtukan da ake yaɗawa ta barbara", "Ƙwararren ma'aikaci ke yi, ba manomi ba"] },
            { title: "Ku nemi ma'aikaci mai rajista", bullets: ["Ofishin kiwon dabbobi, ƙungiyar masu shanun nono ko likitan dabbobi", "Kenya: wakilan KAGRC, Kenya Veterinary Board", "Najeriya: rajistar Veterinary Council of Nigeria"] },
            { title: "Lokaci: dokar safe-yamma a shanu", bullets: ["An ga hawa da safe: a barbare ta da yamma", "An ga hawa da yamma: a barbare ta washegari da safe", "Ku rubuta sunan bijimi ko lambarsa daga sandar maniyyin"] },
            { title: "Ku guje wa haɗa dangi", bullets: ["Babu uba da 'ya, uwa da ɗa, ɗan'uwa da 'yar'uwa", "Ku musanya namijinku kafin 'ya'yansa mata su fara barbara", "Ku yi amfani da bijimin AI daban ga kowace 'ya"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Ku rubuta suna da lambar wayar ƙwararren ma'aikacin AI mai rajista kusa da ku (ku tambayi ofishin kiwon dabbobi ko ƙungiyar haɗin gwiwarku). Sannan ku duba dabbobinku: ku jera duk macen da ke dangin kusa da namijin barbararku na yanzu, ku rubuta yadda za ku barbare ta a maimakon haka.",
          youCanNow: "shirya AI da ƙwararren ma'aikaci a lokacin da ya dace da tsara barbara da ke guje wa dangi na kusa.",
          quickCheck: [
            { objective: "O3", q: "Saniya ta nuna tsayuwa don a hau da ƙarfe 7 na safe. Bisa dokar safe-yamma, yaushe ya kamata a barbare ta?", options: ["Bayan kwana biyu", "A yammacin ranar ko da maraice", "Mako mai zuwa", "Sai ta daina nuna hawa"], answer: 1, why: "Saniyar da aka fara gani a hawa da safe ana barbare ta a yammacin ranar ko da maraice." },
            { objective: "O4", q: "Bijiminku ya yi shekaru huɗu a gona kuma 'ya'yansa mata sun kai lokacin barbara. Me za ku yi?", options: ["Ku ci gaba da amfani da shi ga kowace", "Ku yi amfani da shi ga manyan 'ya'yansa kawai", "Ku daina barbara na shekara ɗaya", "Ku yi amfani da wani bijimi daban ko AI daga bijimin da ba dangi ba ga 'ya'yansa"], answer: 3, why: "Barbarar bijimi da 'ya'yansa haɗa dangi ne; namijin da ba dangi ba ko wani bijimin AI daban yana hana shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Barbara don garke mafi kyau",
        questions: [
          { objective: "O1", q: "Me yasa nau'in waje mai yawan amfani zai iya samun ƙasa da gamin gida a wasu gonaki?", options: ["Nau'o'in waje ba sa taɓa ba da nono mai yawa", "Dabbobin gida koyaushe suna da tsada fiye", "Ba a iya ciyar da nau'o'in waje da ciyawa", "Yana buƙatar abinci, ruwa da kulawa da gonar ba za ta iya samarwa ba, don haka yana ba da ƙasa kuma yana yawan rashin lafiya"], answer: 3, why: "Yawan amfani ya dogara da abinci da kulawa mai kyau; ba tare da su ba, gami mai jure wahala sau da yawa ya fi." },
          { objective: "O2", q: "Sau nawa ya kamata ku lura da alamun hawa?", options: ["Aƙalla sau biyu a rana, da safe da maraice", "Sau ɗaya a mako", "Sai dabbar ta yi rashin lafiya", "Sau ɗaya a wata"], answer: 0, why: "Hawa gajere ne, don haka lura sau biyu a rana lokacin da dabbobi suke natsuwa yana kama yawancin hawa." },
          { objective: "O2", q: "Wanne a cikin waɗannan ya kamata ya kasance a bayanan barbara?", options: ["Yanayin kowace rana", "Ranar barbara da namiji ko sandar maniyyin AI da aka yi amfani da shi", "Launin rumfa", "Farashin mai"], answer: 1, why: "Ranar barbara da namijin suna ba ku damar duba dawowar hawa, hasashen ranar haihuwa da guje wa haɗa dangi." },
          { objective: "O3", q: "Wa ya kamata ya yi barbara ta allura (AI)?", options: ["Duk ma'aikacin gona bayan ya kalli bidiyo", "Wanda ke sayar da saniyar", "Ƙwararren ma'aikacin AI mai rajista ko likitan dabbobi", "Makwabci mai ƙarfin hannu"], answer: 2, why: "AI yana buƙatar horo: hanyar da ba daidai ba za ta iya cutar da dabbar, kuma dole a kula da maniyyi yadda ya kamata." },
          { objective: "O4", q: "Wace barbara ce haɗa dangi?", options: ["Saniya da bijimin AI da ba dangi ba", "Akuya da bunsurun da aka aro daga wani ƙauye", "Ƙaramar alade mace da namijin da aka saya daga gona mai nisa", "Rago da 'yarsa"], answer: 3, why: "Uba da 'yarsa barbara ce tsakanin dangi na kusa, wato haɗa dangi." }
        ]
      }
    },
    {
      name: "Babi na 2: Hana cututtuka shiga gona",
      lessons: [
        {
          title: "Tsarin kare gonarku: yankuna, kwanon wanke takalma da baƙi",
          objectives: ["O5"],
          minutes: 5,
          goal: "Zana yankunan kare gonarku da rubuta dokokin kwanon wanke takalma da baƙi.",
          text: [
            "Kare gona daga cututtuka (biosecurity) yana nufin duk abin da kuke yi don hana ƙwayoyin cuta shiga gonarku, yaɗuwa a cikinta da fita daga cikinta. Yawancin cututtuka suna zuwa ne a jikin dabbobi, mutane, takalma, tufafi, motoci, akwatunan ɗaukar dabbobi, buhunan abinci ko kayan aiki. Da yawa daga cikin matakai mafi kyau ba su da tsada: shinge, ƙofa, kwanon wanke takalma, sabulu da dokar da ake bi kowace rana.",
            "Ku raba gonar zuwa yankuna. Yanki mai tsabta shi ne inda dabbobi ke zama: mutanen da ke kula da su kaɗai ke shiga. Yankin tsakiya yana kewaye da shi: rumbu, wurin canja tufafi, kwanon wanke takalma. Yanki mai ƙazanta yana waje: hanya, wurin ajiye motoci, akwatunan kasuwa. Ku sami ƙofa ƊAYA tak ta shiga wurin dabbobi, mai gate da za ku iya rufewa. Motocin 'yan kasuwa suna tsayawa a wajen shinge; ku yi lodi da sauke kaya a bakin iyaka.",
            "A ƙofar shiga, ku saka kwanon wanke takalma mai maganin kashe ƙwayoyin cuta na gona da aka gauraya kamar yadda aka rubuta a kan kwalin, ku canja shi idan ya yi datti ko bayan ruwan sama; datti yana hana maganin aiki, don haka ku goge laka daga takalma tukuna. Mafi kyau ma, ku ajiye takalma da tufafin gona kaɗai a ƙofar. Ku tanadi sabulu da ruwa don hannu. Ku iyakance baƙi ga waɗanda dole su zo, ku tambaye su inda suka je wurin dabbobi, ku rubuta kowace ziyara a littafin baƙi: rana, suna, waya, dalili da gonar ƙarshe da suka ziyarta."
          ],
          steps: ["Ku zana gonarku: gidaje, turaku, rumbu, ƙofa da hanya.", "Ku yi alamar yanki mai tsabta, yankin tsakiya da yanki mai ƙazanta.", "Ku zaɓi ƙofa ɗaya ta shiga wurin dabbobi, mai gate.", "Ku saka kwanon wanke takalma da wurin wanke hannu a wannan ƙofar.", "Ku ajiye takalma da tufafin gona kaɗai a wurin idan za ku iya.", "Ku fara littafin baƙi, ku bar motocin 'yan kasuwa a wajen shinge."],
          words: [["Kare gona daga cututtuka (biosecurity)", "matakan da ke hana ƙwayoyin cuta shiga gona, yaɗuwa a cikinta da fita daga cikinta."], ["Kwanon wanke takalma (footbath)", "faffaɗan kwano mara zurfi mai maganin kashe ƙwayoyin cuta da mutane ke takawa don tsaftace takalmansu."], ["Maganin kashe ƙwayoyin cuta (disinfectant)", "sinadari mai kashe ƙwayoyin cuta; ku yi amfani da na gona, ku gauraya shi kamar yadda aka rubuta a kan kwalin."], ["Littafin baƙi (visitor log)", "littafin da kuke rubuta sunan kowane baƙo, lambarsa, dalilin zuwansa da gonar ƙarshe da ya ziyarta."]],
          slides: [
            { title: "Ƙwayoyin cuta suna zuwa a jikin...", bullets: ["Sababbin dabbobi, mutane, takalma da tufafi", "Motoci, akwatuna, buhunan abinci da kayan aiki", "Yawancin matakai masu kyau ba su da tsada"] },
            { title: "Yankuna uku", bullets: ["Mai tsabta: inda dabbobi ke zama", "Tsakiya: rumbu, wurin canja tufafi, kwanon wanke takalma", "Mai ƙazanta: hanya, wurin ajiye motoci, akwatunan kasuwa"] },
            { title: "Ƙofa ɗaya, da kwanon wanke takalma", bullets: ["Gate ɗaya ta shiga wurin dabbobi", "Ku goge laka, sannan ku taka cikin kwanon", "Maganin da aka gauraya kamar yadda aka rubuta a kan kwalin"] },
            { title: "Baƙi", bullets: ["Waɗanda dole su zo kaɗai", "Takalman gona da wanke hannu", "Ku rubuta rana, suna, waya, dalili, gonar ƙarshe"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Ku zana gonarku a takarda. Ku yi alamar yanki mai tsabta, yankin tsakiya da yanki mai ƙazanta, ƙofa ɗaya ta shiga, kwanon wanke takalma da inda motoci za su tsaya. Ku rubuta dokokin baƙi uku a ƙarƙashin zanen.",
          youCanNow: "zana yankunan kare gonarku da kafa dokokin kwanon wanke takalma, wanke hannu da baƙi.",
          quickCheck: [
            { objective: "O5", q: "Wani ɗan kasuwar aladu ya zo don sayen ƙananan aladu. A ina ya kamata motarsa ta tsaya?", options: ["A wajen shinge, ana lodi a bakin iyaka", "Kusa da turakun aladu", "A cikin rumbun abinci", "Duk inda ya ga dama"], answer: 0, why: "Motocin da ke ziyartar gonaki da yawa suna ɗauke da ƙwayoyin cuta, don haka suna tsayawa a yanki mai ƙazanta a wajen shinge." },
            { objective: "O5", q: "Kwanon wanke takalmanku ya cika da laka bayan ruwan sama. Me za ku yi?", options: ["Ku bar shi; har yanzu yana aiki", "Ku ƙara ruwa kawai", "Ku zubar da shi, ku wanke shi, ku sake cika shi da maganin da aka gauraya kamar yadda aka rubuta a kan kwalin", "Ku cire shi har lokacin rani"], answer: 2, why: "Datti da tsarma maganin suna hana shi aiki, don haka dole a wanke kwanon da ya yi datti a sake cika shi." }
          ]
        },
        {
          title: "Ware sababbin dabbobi da zubar da matattu lafiya",
          objectives: ["O5"],
          minutes: 5,
          goal: "Shirya wurin ware sababbin dabbobi da hanya mai aminci ta zubar da matattun dabbobi.",
          text: [
            "Sababbin dabbobi su ne hanyar da cututtuka suka fi bi wajen shiga gona. Dabba tana iya yin kama da lafiya amma tana ɗauke da ƙwayoyin cuta ko ƙwari masu cuta (parasites). Ku saya daga sanannun gonaki masu lafiya, ku nemi tarihin rigakafi da maganin dabbar, kuma ku guje wa dabbobi daga kasuwanni ko yankunan da aka ba da rahoton cuta.",
            "Ware dabbobi (quarantine) yana nufin ajiye sababbin dabbobi ko waɗanda suka dawo a wani turaku daban, nesa da garkenku, na tsawon lokacin da likitan dabbobinku ya ba da shawara, sau da yawa makonni kaɗan. Ku kula da su a ƙarshe kowace rana, da takalma da kayan aiki daban, ku lura da su kullum. Ku tambayi likitan dabbobinku ko a yi musu gwaji, magani ko rigakafi kafin su haɗu da sauran. Dabbobin da suka dawo daga kasuwa ba a sayar da su ba, ko daga nunin dabbobi, su ma ana ware su.",
            "Matattun dabbobi suna yaɗa cuta ga dabbobinku, karnuka, namun daji da makwabta. Kada ku taɓa sayarwa, ci ko ba da dabbar da ta mutu da dalilin da ba a sani ba. Ku riƙe gawa da safar hannu, sannan ku zubar da ita kamar yadda likitan dabbobi ko dokokin yankinku suka ce: sau da yawa rami mai zurfi, nesa da ruwa da gidaje, wanda karnuka da namun daji ba za su iya tona ba. Idan dabba ta mutu farat ɗaya, ko da yawa suna rashin lafiya, kada ku buɗe gawar ko ku fitar da ita daga gona: ku fara kiran likitan dabbobi, domin tana iya zama cutar da dole a kai rahotonta ko cutar anthrax (zazzaɓin saifa)."
          ],
          steps: ["Ku saya daga sanannun gonaki masu lafiya kaɗai; ku nemi tarihin lafiyar dabbar.", "Ku shirya turakun ware dabbobi daban, nesa da garke.", "Ku ajiye sababbin dabbobi da waɗanda suka dawo a can na tsawon lokacin da likitan dabbobi ya ba da shawara.", "Ku kula da su a ƙarshe kowace rana, da takalma da kayan aiki daban.", "Ku zaɓi wurin zubar da gawawwaki tare da likitan dabbobi, nesa da ruwa da gidaje.", "Mutuwar farat ɗaya ko mara dalili: kada ku buɗe ko ku motsa gawar; ku kira likitan dabbobi."],
          words: [["Ware dabbobi (quarantine)", "ajiye sababbin dabbobi ko waɗanda suka dawo daban na wani lokaci don ganin ko suna ɗauke da cuta."], ["Gawa (carcass)", "jikin dabbar da ta mutu."], ["Cutar da dole a kai rahotonta (notifiable disease)", "cutar da doka ta ce dole a kai rahotonta ga hukumar likitocin dabbobi."]],
          slides: [
            { title: "Sababbin dabbobi suna kawo cuta", bullets: ["Dabbobin da suka yi kama da lafiya na iya ɗauke da ƙwayoyin cuta", "Ku saya daga sanannun gonaki masu lafiya", "Ku nemi tarihin lafiyar dabbar"] },
            { title: "Ware dabbobi", bullets: ["Turaku daban, nesa da garke", "Na tsawon lokacin da likitan dabbobi ya ba da shawara", "Ku kula da su a ƙarshe, da takalma da kayan aiki daban"] },
            { title: "Matattun dabbobi", bullets: ["Kada ku taɓa sayarwa, ci ko ba da su", "Safar hannu; ku zubar kamar yadda likita ko dokokin yanki suka ce", "Rami mai zurfi, nesa da ruwa; karnuka ba za su iya tona shi ba"] },
            { title: "Mutuwar farat ɗaya", bullets: ["Kada ku buɗe ko ku motsa gawar", "Ku fara kiran likitan dabbobi"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Ku yi alamar turakun ware dabbobi a zanen gonarku, nesa da dabbobinku gwargwadon iko, ku rubuta tsawon lokacin da likitan dabbobinku ya ba da shawarar ajiye sababbin dabbobi a can (ku tambaya idan ba ku sani ba). Sannan ku yi alamar inda da yadda za ku zubar da matattun dabbobi, ku rubuta dokar mutuwar farat ɗaya.",
          youCanNow: "ware sababbin dabbobi da zubar da matattun dabbobi lafiya, da sanin lokacin da za ku kira likitan dabbobi kafin ku taɓa gawa.",
          quickCheck: [
            { objective: "O5", q: "Kun sayi awaki uku a kasuwa. Me za ku yi idan kun isa gida?", options: ["Ku saka su kai tsaye cikin garkenku", "Ku ajiye su a turaku daban na tsawon lokacin da likitan dabbobi ya ba da shawara", "Ku sayar da su nan take", "Ku bar su su yi kiwo tare da awakin makwabci"], answer: 1, why: "Ware dabbobi yana nuna ko sababbin dabbobi suna ɗauke da cuta kafin su iya cutar da garkenku." },
            { objective: "O5", q: "Alade ya mutu farat ɗaya cikin dare. Mene ne mataki na farko da ya dace?", options: ["Ku buɗe shi don ganin abin da ya faru", "Ku sayar da naman da sauri", "Ku bar gawar a inda take, ku hana mutane da dabbobi kusantar ta, ku kira likitan dabbobi", "Ku jefa shi cikin kogi"], answer: 2, why: "Mutuwar farat ɗaya tana iya zama cutar da dole a kai rahotonta; buɗe gawar ko motsa ta na iya yaɗa ta." }
          ]
        },
        {
          title: "Zazzaɓin Aladu na Afirka da murar tsuntsaye: gane, tsayar, kai rahoto",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gane alamun gargaɗin Zazzaɓin Aladu na Afirka da murar tsuntsaye da kai rahotonsu ga likitan dabbobi nan take.",
          text: [
            "Zazzaɓin Aladu na Afirka (African Swine Fever, ASF) cuta ce ta ƙwayar cutar virus a aladu wadda ta jawo babbar asara a ƙasashen Afirka da dama, har da Najeriya. WOAH ta lissafa zazzaɓi mai zafi, rauni, rashin cin abinci, jajayen ko shuɗaɗɗen tabo a fata, amai, gudawa, zubar da ciki a aladu mata da mutuwa, inda har kashi 100 cikin 100 na aladu ke mutuwa a nau'o'inta masu tsanani. Tana yaɗuwa ta hanyar haɗuwa da aladu marasa lafiya, naman alade da ragowar abinci (swill) daga aladu masu cutar, da tufafi, takalma, motoci da kayan aiki masu ƙwayoyin cutar, da kaska masu laushi a inda suke. Ƙwayar cutar tana daɗewa a naman alade da muhalli. Ba ta kama mutane. FAO ta ce babu allurar rigakafi ko magani mai aiki, don haka kariya ita ce hanya ɗaya tak ta shawo kanta; WOAH ta yi gargaɗi kan allurar rigakafi marasa inganci, don haka kada ku taɓa amfani da \"allurar rigakafin ASF\" da hukumar likitocin dabbobi ta ƙasarku ba ta amince da ita ba.",
            "Murar tsuntsaye (avian influenza, bird flu) cuta ce ta ƙwayar cutar virus a tsuntsaye. Nau'o'inta masu tsanani na iya kashe yawancin kajin cikin 'yan kwanaki. Alamomin da USDA APHIS ta lissafa sun haɗa da mutuwar farat ɗaya ba tare da gargaɗi ba, tsuntsayen da suka raunana suka daina cin abinci, raguwar ƙwai ko ƙwai masu laushin ɓawo, kumburin jan kai (comb), haɓa da ƙafafu masu shuɗi, haki, tari da karkacewar wuya. Tana yaɗuwa daga tsuntsayen daji, tsuntsaye marasa lafiya, kasuwannin tsuntsaye masu rai, kashin tsuntsaye, akwatuna, abinci, ruwa da kayan aiki. Mutane ba safai suke kamuwa ba, galibi ta hanyar kusanci da tsuntsaye marasa lafiya, don haka kada ku taɓa riƙe tsuntsaye marasa lafiya ko matattu da hannu babu safa.",
            "Dole a kai rahoton dukkan cututtukan biyu: dole a kai rahoton zargin cutar ga likitan dabbobinku ko hukumar likitocin dabbobi nan take. Gwajin dakin gwaje-gwaje (laboratory) ne kaɗai zai iya tabbatar da su, domin wasu cututtuka suna kama da su. Don hana su: kada ku taɓa ciyar da aladu ragowar abinci da ba a dafa ba, ku saya daga gonaki masu lafiya kaɗai, ku ajiye aladu a turaku da kaji a gida nesa da tsuntsayen daji, kuma ku bi tsarin kare gonarku kowace rana. Idan kuna zargin ɗaya daga cikin cututtukan: ku ajiye dukkan dabbobi a ciki, ku dakatar da duk sayarwa da motsa dabbobi, nama, ƙwai da taki, ku hana baƙi shiga, ku kira likitan dabbobi."
          ],
          steps: ["Ku san alamun ASF (aladu) da murar tsuntsaye (kaji).", "Ku duba dabbobinku kowace rana.", "Kuna zargin cuta: ku ajiye dukkan dabbobi a turakunsu ko gidajensu.", "Ku dakatar da duk sayarwa da motsi: dabbobi, nama, ƙwai, taki, kayan aiki.", "Kada ku buɗe, sayar ko ci dabbobi marasa lafiya ko matattu; kada ku taɓa su da hannu babu safa.", "Ku kira likitan dabbobinku ko ofishin likitocin dabbobi nan take, ku bi umarninsu."],
          words: [["Zazzaɓin Aladu na Afirka (ASF)", "cuta mai kisa ta ƙwayar cutar virus a aladu, wadda ba ta da allurar rigakafi ko magani mai aiki; ba ta kama mutane."], ["Murar tsuntsaye (avian influenza)", "bird flu: cuta ta ƙwayar cutar virus a tsuntsaye; nau'o'inta masu tsanani suna kashe yawancin kaji."], ["Ragowar abinci (swill)", "sharar abinci da ake ciyar da aladu; ragowar abinci da ba a dafa ba mai naman alade na iya yaɗa ASF."], ["Hukumar likitocin dabbobi (veterinary authority)", "ofishin gwamnati mai kula da cututtukan dabbobi, kamar hukumar likitocin dabbobi ta ƙasa ko ta gunduma."]],
          slides: [
            { title: "Zazzaɓin Aladu na Afirka (aladu)", bullets: ["Zazzaɓi mai zafi, rauni, rashin cin abinci, fata ja ko shuɗi", "Amai, gudawa, zubar da ciki, mutuwar farat ɗaya", "Babu allurar rigakafi ko magani mai aiki (FAO)"] },
            { title: "Yadda ASF ke yaɗuwa", bullets: ["Aladu marasa lafiya, naman alade da ragowar abinci da ba a dafa ba", "Takalma, tufafi, motoci da kayan aiki", "Ba ta kama mutane"] },
            { title: "Murar tsuntsaye (kaji)", bullets: ["Mutuwar farat ɗaya; tsuntsaye masu rauni; raguwar ƙwai", "Jan kai da haɓa masu kumburi da shuɗi; haki", "Tana yaɗuwa ta tsuntsayen daji, kasuwanni, akwatuna, kashi"] },
            { title: "Dole a kai rahoto: nan take", bullets: ["Ku ajiye dukkan dabbobi a ciki; ku dakatar da sayarwa da motsi", "Kada ku taɓa da hannu babu safa; kada ku buɗe, sayar ko ci", "Ku kira likitan dabbobi ko ofishin likitocin dabbobi yanzu"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin kare gonarku mai shafi ɗaya. Ku yi amfani da zanen gonarku mai yankuna, kwanon wanke takalma da dokokin baƙi, ware dabbobi da zubar da matattun dabbobi, sannan ku ƙara alamun gargaɗin ASF ko murar tsuntsaye, matakanku na sa'a ta farko, da suna da lambar wayar likitan dabbobinku.",
          youCanNow: "gane alamun gargaɗin Zazzaɓin Aladu na Afirka da murar tsuntsaye, dakatar da duk motsi, da kai rahoton zargin cuta ga likitan dabbobi nan take.",
          quickCheck: [
            { objective: "O6", q: "Da yawa daga cikin aladunku suna da zazzaɓi mai zafi, shuɗaɗɗen tabo a fata, kuma biyu sun mutu cikin dare. Me za ku fara yi?", options: ["Ku sayar da sauran da sauri kafin su mutu", "Ku sayi allurar rigakafin ASF a kasuwa", "Ku yi musu magani da ragowar magani", "Ku ajiye dukkan aladu a ciki, ku dakatar da duk motsi da sayarwa, ku kira likitan dabbobi nan take"], answer: 3, why: "Waɗannan alamun gargaɗin ASF ne, cutar da dole a kai rahotonta: ku dakatar da motsi ku kai rahoto nan take." },
            { objective: "O6", q: "Wace hanya ce ke taimakawa hana Zazzaɓin Aladu na Afirka shiga?", options: ["Kada a taɓa ciyar da aladu ragowar abinci da ba a dafa ba", "Ciyar da aladu sharar abincin otal", "Barin aladu su yi yawo a ƙauye", "Sayen aladu daga kowane ɗan kasuwa mai wucewa"], answer: 0, why: "Ragowar abinci da ba a dafa ba na iya ƙunsar naman alade mai ƙwayar cutar ASF, wadda ke daɗewa a nama." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hana cututtuka shiga gona",
        questions: [
          { objective: "O5", q: "A tsarin kare gona, wane wuri ne yanki mai tsabta?", options: ["Hanyar da ke wajen gona", "Wurin ajiye manyan motoci", "Inda dabbobi ke zama", "Kasuwa"], answer: 2, why: "Yanki mai tsabta shi ne wurin dabbobi, inda mutanen da ke kula da dabbobin kaɗai ke shiga." },
          { objective: "O5", q: "Mene ne babban amfanin littafin baƙi?", options: ["Karɓar kuɗi daga baƙi", "Sanin wa ya zo, yaushe da kuma daga ina idan cuta ta bayyana", "Ƙirga yawan abokanku", "Tallata gona"], answer: 1, why: "Idan cuta ta bayyana, littafin yana taimaka wa likitan dabbobi gano inda ta iya fitowa." },
          { objective: "O5", q: "Yaya ya kamata ku zubar da akuyar da ta mutu da dalilin da ba a sani ba?", options: ["Ku sayar da naman a farashi mai arha", "Ku ba karnuka", "Ku bar ta a daji", "Ku yi amfani da safar hannu ku zubar da ita kamar yadda likita ko dokokin yanki suka ce, nesa da ruwa"], answer: 3, why: "Gawawwaki suna yaɗa cuta; zubar da su lafiya kamar yadda likitan dabbobi ya ba da shawara yana kare dabbobi, mutane da ruwa." },
          { objective: "O6", q: "Shin akwai allurar rigakafi ko magani mai aiki da za ku iya amfani da shi kan Zazzaɓin Aladu na Afirka?", options: ["A'a; FAO ta ce kariya ta hanyar kare gona ita ce hanya ɗaya tak ta shawo kanta", "E, duk wani maganin ƙwayoyin cuta (antibiotic) yana warkar da ita", "E, ana sayar da shi a kowace kasuwa", "E, haɗin magungunan gargajiya yana warkar da ita"], answer: 0, why: "FAO ta ce babu allurar rigakafi ko magani mai aiki don ASF, don haka kariya ce hanyar shawo kanta." },
          { objective: "O6", q: "Kajin ƙwanku sun daina yin ƙwai farat ɗaya, wasu suna da jan kai mai kumburi da shuɗi, kuma da yawa sun mutu a rana ɗaya. Me za ku yi?", options: ["Ku sayar da ƙwai da tsuntsayen a kasuwa yau", "Ku binne matattun tsuntsaye ba tare da kun faɗa wa kowa ba", "Ku ajiye tsuntsayen a ciki, ku dakatar da duk motsi, ku guje wa taɓa su da hannu babu safa, ku kai rahoto ga likitan dabbobi nan take", "Ku saki tsuntsayen waje"], answer: 2, why: "Waɗannan alamun suna nuna murar tsuntsaye, wadda dole a kai rahotonta nan take." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kiwon Dabbobi, Barbara da Kare Gona daga Cututtuka",
    questions: [
      { objective: "O1", q: "Me ya kamata ya fi jagorantar zaɓin nau'in dabbarku?", options: ["Abin da masu sayenku ke so da abin da gonarku za ta iya samarwa a duk shekara", "Nau'in da ke cikin sabon talla", "Nau'in da ke da manyan dabbobi", "Dabbar da ta fi arha a kasuwa"], answer: 0, why: "Nau'i yana biya ne kawai idan ya dace da kasuwa kuma gonarku za ta iya ciyar da shi da kula da shi." },
      { objective: "O1", q: "Wane ƙarfi ne yawancin nau'o'in gida kamar akuyar West African Dwarf ko shanun N'Dama ke da shi?", options: ["Mafi yawan nono a duniya", "Suna jure zafi, kaska da abinci mara kyau", "Ba sa taɓa rashin lafiya", "Ba sa buƙatar ruwa"], answer: 1, why: "Nau'o'in gida suna jure wahala; abin da suke rasawa shi ne ƙarancin girma da amfani." },
      { objective: "O1", q: "A ina za ku iya tambayar waɗanne nau'o'i ne ke yin kyau a yankinku?", options: ["Wani rubutu na kafofin sada zumunta kawai", "Ɗan kasuwa da ke sayar da nau'i ɗaya kaɗai", "Jami'in faɗakarwar noma, ƙungiyar masu kiwon nau'o'i ko cibiyar bincike", "Babu kowa; ku saya kawai ku gani"], answer: 2, why: "Masana da manoman yankinku sun san waɗanne nau'o'i ke yin kyau a yanayinku." },
      { objective: "O2", q: "Kusan sau nawa shanu, awaki da aladu ke shiga hawa idan ba su da ciki?", options: ["Kowace kwana 3", "Kowane wata 6", "Sau ɗaya a shekara", "Kusan kowace kwana 21"], answer: 3, why: "Zagayen da aka saba shi ne kusan kwana 21, ko da yake yana bambanta." },
      { objective: "O2", q: "Yaushe ne lokaci mafi kyau na lura da hawa?", options: ["Tsakar rana kaɗai", "Da sassafe da maraice, lokacin da dabbobi suke natsuwa", "Lokacin ciyarwa a ranakun kasuwa kaɗai", "Sau ɗaya a mako"], answer: 1, why: "Alamun hawa sun fi sauƙin gani lokacin da dabbobi suke natsuwa, aƙalla sau biyu a rana." },
      { objective: "O2", q: "Me yasa za ku rubuta ranar barbara?", options: ["Don duba dawowar hawa da sanin ranar haihuwa", "Domin doka na buƙatar hoto", "Don ƙayyade farashin nono", "Don zaɓar irin abinci"], answer: 0, why: "Ranar barbara tana nuna muku lokacin duba dawowar hawa da lokacin da ake sa ran haihuwa." },
      { objective: "O2", q: "Kusan tsawon wane lokaci ne cikin alade mace?", options: ["Kusan watanni 9", "Kusan makonni 3", "Kusan watanni 3, makonni 3 da kwanaki 3", "Kusan shekara 1"], answer: 2, why: "Cikin alade mace yana ɗaukar kusan watanni 3, makonni 3 da kwanaki 3; ku duba na nau'inku tare da likitan dabbobi." },
      { objective: "O3", q: "Mene ne babban amfani ɗaya na barbara ta allura ga ƙaramin manomi?", options: ["Tana maye gurbin duk ciyarwa", "Tana nufin ba a buƙatar bayanai", "Tana kawar da duk cututtuka", "Samun halitta mai inganci ba tare da ajiye bijimi ba"], answer: 3, why: "AI yana kawo halittar da aka tabbatar da ingancinta ga ƙananan gonaki da ba za su iya ajiye babban namiji ba." },
      { objective: "O3", q: "Saniya ta fara nuna tsayuwa don a hau da yamma. Yaushe ya kamata ma'aikacin ya barbare ta?", options: ["Washegari da safe", "Nan take da dare", "Bayan mako ɗaya", "A hawa na gaba"], answer: 0, why: "Bisa dokar safe-yamma, hawan da aka fara gani da yamma ana barbara washegari da safe." },
      { objective: "O3", q: "Yaya za ku sami ma'aikacin AI amintacce?", options: ["Duk wanda ke da kwalbar maniyyi", "Ƙwararren ma'aikaci mai rajista ta hannun ofishin kiwon dabbobi, ƙungiyar haɗin gwiwa ko likitan dabbobi", "Mafi arha a kasuwa", "Bidiyon koyarwa"], answer: 1, why: "Horo da rajista suna kare dabbobinku da kuɗinku." },
      { objective: "O3", q: "Me yasa dole maniyyi ya kasance cikin ruwan nitrogen har zuwa lokacin amfani?", options: ["Don ya ƙara nauyi", "Don canja launinsa", "Domin yana mutuwa idan ya yi ɗumi", "Don ƙara bitamin"], answer: 2, why: "Maniyyi daskararre yana mutuwa idan ba a ajiye shi cikin tsananin sanyi ba har zuwa lokacin barbara." },
      { objective: "O4", q: "Me ke faruwa ga 'ya'yan iyaye dangi na kusa?", options: ["Koyaushe sun fi ƙarfi", "Suna girma da sauri", "Suna buƙatar ƙarancin abinci", "Sau da yawa sun fi rauni, sun fi rashin lafiya kuma za su iya samun nakasa"], answer: 3, why: "Haɗa dangi yana ƙara 'ya'ya masu rauni, marasa lafiya da masu nakasa." },
      { objective: "O4", q: "Mene ne hanya mai sauƙi ta hana haɗa dangi da namijin barbararku?", options: ["Ku musanya shi ko ku sayar da shi kafin 'ya'yansa mata su kai lokacin barbara", "Ku ajiye shi har abada", "Ku yi amfani da shi a damina kaɗai", "Ku ƙara masa abinci"], answer: 0, why: "Canja namiji kafin 'ya'yansa mata su fara barbara yana hana barbarar uba da 'ya." },
      { objective: "O4", q: "Waɗanne bayanai ne ke taimaka muku guje wa haɗa dangi?", options: ["Farashin abinci", "Yawan ruwan sama", "Uwa da uban kowace dabba", "Sunayen baƙi"], answer: 2, why: "Sanin iyaye yana nuna waɗanne dabbobi ne dangi." },
      { objective: "O5", q: "Ƙofofin shiga nawa ya kamata wurin dabbobi ya kasance da su?", options: ["Gwargwadon yawan da za a iya", "Ɗaya, mai gate, kwanon wanke takalma da wurin wanke hannu", "Babu; dabbobi suna yawo", "Ɗaya ga kowane baƙo"], answer: 1, why: "Ƙofa ɗaya da ake sarrafawa tana sauƙaƙa bin dokokin kare gona." },
      { objective: "O5", q: "Me yasa za ku goge laka daga takalma kafin kwanon wanke takalma?", options: ["Datti yana hana maganin kashe ƙwayoyin cuta aiki", "Don ajiye ruwa", "Laka tana sa takalma su yi nauyi", "Ba komai ba ne"], answer: 0, why: "Maganin kashe ƙwayoyin cuta ba ya aiki sosai a wuri mai datti." },
      { objective: "O5", q: "Aladu sun dawo daga kasuwa ba a sayar da su ba. Me za ku yi?", options: ["Ku mayar da su kai tsaye cikin sauran", "Ku ba da su a ƙofar gida", "Ku sake su a ƙauye", "Ku ware su kamar sababbin dabbobi"], answer: 3, why: "Dabbobin kasuwa na iya ɗauko cuta, don haka ana ware su." },
      { objective: "O6", q: "Wanne a cikin waɗannan ke yaɗa Zazzaɓin Aladu na Afirka?", options: ["Ruwan sama a kan rufin gida", "Ciyar da aladu dusar masara", "Naman alade a ragowar abinci da ba a dafa ba, aladu marasa lafiya, da takalma ko motoci masu datti", "Ruwan sha mai tsabta"], answer: 2, why: "ASF tana yaɗuwa ta aladu masu cuta, kayan naman alade, ragowar abinci da abubuwan da suka gurɓata." },
      { objective: "O6", q: "Shin Zazzaɓin Aladu na Afirka yana kama mutane?", options: ["E, koyaushe", "Yara kaɗai", "Ma'aikatan gona kaɗai", "A'a, ba ya kama mutane"], answer: 3, why: "WOAH ta ce ASF ba ta shafar lafiyar ɗan Adam, amma tana kashe aladu." },
      { objective: "O6", q: "Me yasa dole a kai rahoton zargin murar tsuntsaye nan take?", options: ["Cuta ce da dole a kai rahotonta kuma tana yaɗuwa da sauri tsakanin gonaki", "Don samun allurar rigakafi kyauta kowane lokaci", "Domin tsuntsaye suna daina cin abinci", "Don canja farashin kasuwa"], answer: 0, why: "Dole a kai rahoton cututtukan da doka ta ce a kai rahotonsu don hukumar likitocin dabbobi ta dakatar da yaɗuwarsu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin ku sake duba shi.",
    criteria: [
      { name: "Yankuna da ƙofar shiga", objective: "O5", notYet: "Babu zane, ko dabbobi da motoci suna cuɗanya ba tare da yankunan da aka yi wa alama ba.", meets: "Zanen yana nuna yanki mai tsabta, yankin tsakiya da yanki mai ƙazanta, ƙofa ɗaya ta shiga da inda motoci ke tsayawa.", exceeds: "Yana kuma nuna hanyar abinci, taki da matattun dabbobi don kada su taɓa ratsa yanki mai tsabta." },
      { name: "Kwanon wanke takalma da dokokin baƙi", objective: "O5", notYet: "Babu kwanon wanke takalma ko dokokin baƙi, ko dokokin da babu wanda zai iya bi.", meets: "Kwanon wanke takalma mai maganin da aka gauraya kamar yadda aka rubuta a kan kwalin, wanke hannu, da littafin baƙi mai gonar ƙarshe da aka ziyarta.", exceeds: "Takalma da tufafin gona kaɗai, da wani mutum da aka ambata sunansa da ke duba dokokin kullum." },
      { name: "Ware dabbobi da matattun dabbobi", objective: "O5", notYet: "Sababbin dabbobi suna shiga garke nan take, ko ana sayarwa, ci ko zubar da gawawwaki barkatai.", meets: "Turakun ware dabbobi daban na tsawon lokacin da likitan dabbobi ya ba da shawara, da wurin zubar da gawawwaki lafiya da aka amince da shi tare da likitan dabbobi.", exceeds: "Yana kuma ɗaukar dabbobin da suka dawo daga kasuwa da dokar kada a taɓa buɗe dabbar da ta mutu farat ɗaya." },
      { name: "Martani ga ASF ko murar tsuntsaye", objective: "O6", notYet: "Babu alamun gargaɗi, ko tsarin ya ce a sayar, a yi magani ko a jira.", meets: "Yana jera alamun gargaɗi da matakan sa'a ta farko: ajiye dabbobi a ciki, dakatar da duk motsi, kai rahoto nan take.", exceeds: "Yana ambaton ofishin likitocin dabbobi, lambar waya da mutumin da zai kira, da dokar hana ragowar abinci ko ta tsuntsayen daji." },
      { name: "Barbara da sababbin dabbobi", objective: "O4", notYet: "Ana sayen sababbin dabbobin barbara ba tare da dubawa ba, ko tsarin yana barin barbara tsakanin dangi.", meets: "Sababbin dabbobin barbara suna fitowa daga sanannun gonaki masu lafiya, kuma tsarin yana guje wa barbara tsakanin dangi.", exceeds: "Yana amfani da AI daga bijimai da ba dangi ba ko tsarin musanya maza, tare da bayanan iyaye." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Gonakin da ke amfani da kwanon wanke takalma, ƙofa ɗaya da ake sarrafawa da littafin baƙi kwanaki 30 bayan kwas (binciken biyo baya ko ziyarar jami'in faɗakarwar noma)",
      "Masu koyo da ke ajiye bayanan barbara kuma suka ce sun rage rasa hawa ko maimaita barbara",
      "Zargin ASF ko murar tsuntsaye da masu koyo suka kai rahotonsu ga likitan dabbobi cikin kwana ɗaya",
      "Raguwar mutuwar dabbobi daga cututtuka a garkunan masu koyo a shekara mai zuwa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafi da alƙalami, ko rubutun waya ko spreadsheet, don bayanan barbara da littafin baƙi",
      "Takarda don zanen gona",
      "Suna da lambar wayar likitan dabbobi na yanki, ofishin likitocin dabbobi da ma'aikacin AI mai rajista",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku gudanar da shi tare da ƙungiyar manoma ko ƙungiyar haɗin gwiwa: ku yi gwajin farko tare, sannan babi ɗaya a kowane zama, kuna yin ayyukan \"Gwada yanzu\" a gonaki na gaske idan zai yiwu.",
      "Ku gayyaci likitan dabbobi na yanki ko jami'in lafiyar dabbobi zuwa zaman Babi na 2 don ya bayyana yadda ake kai rahoton ASF da murar tsuntsaye a ƙasarku da dokokin zubar da gawawwaki na yanki.",
      "Kada ku taɓa bayarwa ko tattauna yawan magani, allurar rigakafi ko hormone ko lokacin jira bayan magani; ku tura duk irin wannan tambaya ga likitan dabbobi da abin da aka rubuta a kan kwalin.",
      "Kada ku bar ƙungiyar ta ziyarci gonakin aladu ko kaji da yawa a rana ɗaya; ku aiwatar da kare gona a cikin horon kansa.",
      "Ku ba da maki ga tsarin kare gona na kowane mai koyo da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
