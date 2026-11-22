"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-data-technology.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const KMD = { name: "Kenya Meteorological Department (hasashen yanayi da rahotannin yanayi na manoma)", url: "https://meteo.go.ke" };
const NIMET = { name: "Hukumar Yanayi ta Najeriya (NiMet)", url: "https://nimet.gov.ng" };
const COPERNICUS = { name: "Copernicus Browser (hotunan tauraron ɗan adam na Sentinel kyauta)", url: "https://browser.dataspace.copernicus.eu/" };
const FAO_EO = { name: "FAO GIEWS Earth Observation (taswirorin ruwan sama, NDVI da matsalar amfanin gona)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO), cibiyar binciken noma da kiwo ta Kenya", url: "https://www.kalro.org" };
const KOBO = { name: "KoboToolbox (fom ɗin tattara bayanai kyauta)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya), ofishin kare bayanai", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Hukumar Kare Bayanai ta Najeriya (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-data-technology-ha",
  lang: "ha",
  translationOf: "agri-data-technology",
  category: "Agriculture (Africa)",
  name: "Bayanan Noma da Fasaha",
  skills: "Nemo da tabbatar da bayanan noma amintattu, Tattara bayanan gona a waya, Amfani da bayanan yanayi da na tauraron ɗan adam kyauta, Nazarin bayanan gona a spreadsheet, Amfani da mataimakan AI cikin hankali don tambayoyin noma, Kare bayanan gonarku",
  outcome: "amfani da wayar zamani mai araha don tattara bayanan gonarku, ƙara bayanan yanayi da na tauraron ɗan adam kyauta, nazarin su a spreadsheet don yanke shawara mafi kyau a gona, tabbatar da shawarar manhajoji da kayan AI da majiyoyi amintattu, da kiyaye bayananku lafiya.",
  about: [
    "Wannan kwas na manoma ne, matasa masu sana'ar noma, shugabannin ƙungiyoyin manoma da na haɗin gwiwa (cooperative), da jami'an faɗakarwa a Kenya, Najeriya da ko'ina a Afirka, waɗanda ke da wayar zamani (ko da mai araha ce) kuma suke son yin amfani da ita don inganta noma. Ba kwa buƙatar kwamfuta, amma tana taimakawa a Babi na 2.",
    "Babi na 1 yana magana kan tattara bayanai: nemo shawarar noma amintacciya da guje wa zamba, rubuta bayanan gonarku a waya, da amfani da hasashen yanayi da taswirorin tauraron ɗan adam kyauta. Babi na 2 yana magana kan amfani da bayanai: nazarin bayananku a spreadsheet kyauta, yi wa mataimakan AI tambayoyin noma masu kyau da tabbatar da amsoshinsu, da kare bayananku.",
    "Ana amfani da kayan aiki kyauta a ko'ina: Google Sheets ko Microsoft Excel na intanet kyauta, kayan fom kyauta, hukumomin yanayi na ƙasa, taswirorin FAO na kallon duniya daga sama, da mataimakan AI kyauta. Kowane darasi yana ƙarewa da aiki. Gwajin ilimi yana rufe kowane babi, kuma jarabawa mai tambayoyi 20 tana rufe kwas ɗin."
  ],
  finalTask: "Ku shirya takardar bayanan gona (spreadsheet) ta kakar noma ɗaya (gonaki, amfanin gona, irin iri, ranakun shuka, kayan noma da kuɗinsu, bayanan ruwan sama ko hasashen yanayi, bayanan dubawa, girbi da sayarwa), ku cika ta da bayanai na gaske ko na misali na aƙalla gonaki uku, ku yi jadawali (chart) ɗaya da ke kwatanta gonakin, ku rubuta shawara ɗaya da za ku yanke a kakar noma mai zuwa saboda shi, sannan ku rubuta majiyoyin da kuka duba da yadda kuke kiyaye bayanan lafiya.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma, matasa masu sana'ar noma, shugabannin ƙungiyoyin manoma da na haɗin gwiwa, da jami'an faɗakarwa a Kenya, Najeriya da ko'ina a Afirka, waɗanda ke da wayar zamani, ko da mai araha ce, kuma suke son yin amfani da ita don inganta noma.",
    startingPoint: "Yawancinsu suna amfani da waya don kira, kuɗin waya (mobile money), WhatsApp da Facebook, kuma suna samun shawarar noma daga makwabta, shagunan kayan noma (agrovet), rediyo da ƙungiyoyin kafofin sada zumunta. Kaɗan ne ke rubuta bayanan gona, ke amfani da spreadsheet, ke karanta hasashen yanayi na hukuma ko taswirorin tauraron ɗan adam, ko ke tabbatar da shawarar AI da ta manhajoji da majiya amintacciya.",
    gap: "Ba tare da bayanansu ba, manoma ba za su iya ganin wace gona, wane iri ko wace hanya ce ke kawo riba da gaske ba, kuma shawara marar gaskiya, kayan noma na bogi da zambar bayanai suna jawo musu asarar kuɗi. Rubutawa, nazari da tabbatar da bayanai a wayar da suka riga suka mallaka yana taimaka musu yanke shawara mafi kyau, nuna tarihin aikinsu ga masu ba da bashi da masu saye, da kiyaye bayanansu lafiya.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayyana kowace kalmar fasaha",
      "Na'urori: wayar zamani mai araha da ƙarancin data; kwamfuta tana taimakawa ne kawai a Babi na 2",
      "Hanyar sadarwa: babu network mai kyau a ƙauyuka, don haka fom ɗin da ke aiki ba tare da intanet ba da takardun da aka ajiye suna da muhimmanci",
      "Lokaci: gajerun darussa da suka dace da aikin gona",
      "Sirri da zamba: kada ku taɓa rubuta lambar PIN, lambar katin shaida ko bayanan banki a manhajoji, spreadsheet ko kayan AI"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da wayar zamani ba ya kamata su fara iya buɗe manhaja da rubuta saƙo."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku wata shawarar noma daga saƙo, manhaja ko makwabci", action: "duba wanda ya faɗe ta, ko ta dace da yankinku da amfanin gonarku, ko sabuwa ce, da ko suna sayar da wani abu", standard: "kafin ku kashe kuɗi, kuma kuna gane duk wata alamar zamba" },
    { id: "O2", condition: "Ta amfani da spreadsheet ko manhajar fom kyauta a wayarku", action: "shirya takardar bayanan gona mai layi ɗaya ga kowane abin da ya faru da suna ɗaya tabbatacce ga kowace gona", standard: "da aƙalla rukunin kwanan wata, gona, aiki, yawa da kuɗi" },
    { id: "O3", condition: "Don yankinku da kakar noma", action: "nemo hasashen yanayi na hukuma da taswirar tauraron ɗan adam ko ta ruwan sama kyauta, sannan ku rubuta abin da suka nuna a takardar gonarku", standard: "tare da majiyar da kwanan wata" },
    { id: "O4", condition: "Idan aka ba ku bayanan aƙalla gonaki uku", action: "lissafa amfanin gona da ribar kowace eka da formula, yin jadawalin sanduna (bar chart) da rubuta shawara ɗaya don kakar noma mai zuwa", standard: "da jimloli daidai, kuma shawarar ta danganci lambobin" },
    { id: "O5", condition: "Ta amfani da mataimakin AI kyauta", action: "rubuta tambayar noma a sarari da tabbatar da amsar da jami'in faɗakarwa, agrovet ko takardar bayanin kaya (label)", standard: "kafin ku yi aiki da ita, ba tare da rubuta bayanan sirri ba" },
    { id: "O6", condition: "Idan manhaja, mai saye ko ƙungiya ta nemi bayanan gona", action: "yanke abin da za ku raba, da wanda za ku raba wa, da dalili, da kare sauran", standard: "bisa haƙƙinku na kare bayanai a ƙasarku, kuma kuna neman izinin wasu" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tattara bayanai masu kyau",
      lessons: [
        {
          objectives: ["O1"],
          title: "Nemo bayanan noma amintattu",
          minutes: 5,
          goal: "Tantance ko wata shawarar noma amintacciya ce kafin ku yi aiki da ita.",
          text: [
            "Manoma suna samun shawara daga wurare da yawa: jami'an faɗakarwa (extension), cibiyoyin bincike kamar KALRO a Kenya, shirye-shiryen bunƙasa noma na jihohin Najeriya, FAO da cibiyoyin CGIAR, shagunan kayan noma (agrovet), shirye-shiryen rediyo da talabijin, hidimomin SMS da manhajoji, ƙungiyoyin WhatsApp da Facebook, da makwabta. Wasu suna da kyau sosai; wasu ba daidai ba ne, sun tsufa, ko suna ƙoƙarin sayar muku da wani abu.",
            "Ku yi tambayoyi huɗu game da kowace shawara: Wane ne ya faɗe ta, kuma yana da ilimi (cibiyar bincike ko jami'i da aka horar, ko asusun da ba a sani ba)? Shin ta dace da yankina da amfanin gonata? Shin sabuwa ce? Shin suna sayar da wani abu? Ku tabbatar da muhimmiyar shawara da majiya amintacciya ta biyu kafin ku kashe kuɗi.",
            "Ku yi hankali da zamba: iri da taki na bogi, kayan \"mu'ujiza\", ayyukan yi ko tallafin bogi da ke neman kuɗi, da saƙonnin da ke yin kamar shirin gwamnati ne suna neman lambar PIN ta kuɗin wayarku. Ku sayi kayan noma daga dillalai masu rajista, kuma ku kai rahoton kayan bogi ga hukumar da ta dace."
          ],
          steps: ["Ku tambaya: wane ne ya faɗe ta, kuma yana da ilimi?", "Ku tambaya: shin ta dace da yankina da amfanin gonata, kuma sabuwa ce?", "Ku tambaya: shin suna sayar da wani abu?", "Ku tabbatar da majiya amintacciya ta biyu kafin ku kashe kuɗi.", "Ku sayi kayan noma daga dillalai masu rajista; kada ku taɓa bayar da PIN ɗinku."],
          words: [["Jami'in faɗakarwa (extension officer)", "mai ba da shawara da aka horar daga gwamnati ko wani shiri, wanda ke taimakon manoma."], ["Cibiyar bincike", "ƙungiyar da ke gwadawa da samar da hanyoyin noma da irin iri, kamar KALRO."], ["Zamba", "dabarar karɓe kuɗinku ko bayananku."]],
          slides: [
            { title: "Majiyoyi da yawa", bullets: ["Jami'an faɗakarwa, cibiyoyin bincike, FAO, CGIAR", "Agrovet, rediyo, SMS da manhajoji", "Ƙungiyoyin kafofin sada zumunta da makwabta"] },
            { title: "Tambayoyi huɗu", bullets: ["Wane ne ya faɗe ta, kuma yana da ilimi?", "Ta dace da yankina da amfanin gonata?", "Sabuwa ce?", "Suna sayar da wani abu?"] },
            { title: "Ku yi hankali da zamba", bullets: ["Iri da taki na bogi, kayan mu'ujiza", "Tallafi ko ayyukan yi da ke neman kuɗi", "Kada ku taɓa bayar da PIN ɗinku"] }
          ],
          sources: [KALRO],
          tryIt: "Ku nemo wata shawarar noma da kuka gani kwanan nan (a rediyo, WhatsApp ko daga mai sayarwa). Ku amsa tambayoyin huɗu game da ita, sannan ku tabbatar da ita da majiya amintacciya ta biyu. Ku rubuta ko za ku yi aiki da ita.",
          youCanNow: "tantance ko shawarar noma amintacciya ce da gane zamba da aka saba gani.",
          quickCheck: [
            { objective: "O1", q: "Wace tambaya ce ke taimaka muku tantance wata shawarar noma?", options: ["Mutane nawa ne suka so rubutun?", "Shin ta dace da yankina da amfanin gonata, kuma sabuwa ce?", "Shin saƙon yana da tsawo?", "Shin yana da hotuna da yawa?"], answer: 1, why: "Duba wanda ya faɗe ta, ko ta dace da yankinku da amfanin gonarku, da ko sabuwa ce yana nuna ko shawarar amintacciya ce." },
            { objective: "O1", q: "Wani saƙo ya ce kun ci tallafin noma, kuma yana neman PIN ɗin kuɗin wayarku. Me za ku yi?", options: ["Ku aika PIN ɗin da sauri", "Ku fara biyan ɗan kuɗi", "Ku ɗauke shi a matsayin zamba, kuma kada ku bayar da PIN ɗin", "Ku tura shi ga ƙungiyarku don su nema"], answer: 2, why: "Shirye-shiryen gaske ba sa taɓa neman PIN ɗinku ko kuɗi kafin su ba da tallafi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rubuta bayanan gonarku a waya",
          minutes: 6,
          goal: "Shirya hanya mai sauƙi a waya don rubuta gonaki, kayan noma, dubawa da girbi.",
          text: [
            "Bayananku na kanku su ne bayanai mafi daraja da kuke da su, domin game da gonarku ne. Manhajar spreadsheet (Google Sheets ko Microsoft Excel, duka kyauta a waya) tana aiki da kyau: layi ɗaya ga kowane abin da ya faru, da rukuni (column) kamar kwanan wata, gona, amfanin gona, aiki, yawa, kuɗi da bayani.",
            "Ku ba kowace gona gajeren suna ko lamba, kuma kada ku canja shi. Ku rubuta wurin GPS ko iyakar gona a kimanin kowace gona (manhajojin taswira da yawa suna barin ku saka alama (pin) ku raba lambobin wurinta). Ku ɗauki hoton matsaloli ku sa musu suna da kwanan wata da gona. Ga ƙungiyoyi da haɗin gwiwa, kayan fom kyauta kamar KoboToolbox suna barin mambobi da yawa su cika fom ɗaya a wayoyinsu, ko ba tare da intanet ba, su aika idan sun sami network.",
            "Ku sa ya zama mai sauƙi har ku iya yin sa kowane lokaci. Rukunai biyar da ake cikawa kowane mako sun fi daraja fiye da rukunai ashirin da aka cika sau ɗaya. Ku ajiye kwafin takardar (yawancin spreadsheet na intanet suna ajiyewa da kansu), kuma kada ku saka lambobin sirri kamar PIN ko lambar katin shaida a ciki."
          ],
          steps: ["Ku buɗe manhajar spreadsheet kyauta ku yi rukunai: kwanan wata, gona, amfanin gona, aiki, yawa, kuɗi, bayani.", "Ku sa wa kowace gona suna, ku saka mata alamar GPS.", "Ku ƙara layi duk lokacin da kuka shuka, kuka saka kayan noma, kuka duba gona, kuka girba ko kuka sayar.", "Ku sa wa hotuna suna da kwanan wata da gona.", "Ga ƙungiyoyi: ku yi tunanin fom ɗin da ake rabawa wanda ke aiki ba tare da intanet ba."],
          words: [["Spreadsheet", "tebur mai layuka da rukunai a waya ko kwamfuta don rubutu da lissafi."], ["Alamar GPS (GPS pin)", "wurin da aka ajiye a taswira tare da lambobin wurinsa."], ["Ba tare da intanet ba (offline)", "aiki ba tare da haɗin intanet ba."]],
          slides: [
            { title: "Bayananku zinare ne", bullets: ["Game da gonarKU ne", "Layi ɗaya ga kowane abin da ya faru"] },
            { title: "Rukunan farawa", bullets: ["Kwanan wata, gona, amfanin gona, aiki", "Yawa, kuɗi, bayani"] },
            { title: "Ɗabi'u masu kyau", bullets: ["Sunayen gonaki iri ɗaya koyaushe", "Alamar GPS ga kowace gona, hotuna da kwanan wata", "Mai sauƙi har ku iya yi kowane mako"] },
            { title: "Ƙungiyoyi da tsaro", bullets: ["Fom ɗin da ake rabawa ba tare da intanet ba, misali KoboToolbox", "Ku ajiye kwafi; babu PIN ko lambar katin shaida"] }
          ],
          sources: [KOBO],
          tryIt: "Ku ƙirƙiri takardar gonarku a waya da rukunai bakwai. Ku ƙara gonakinku da aƙalla layuka biyar na ayyukan gaske na wannan kakar. Ku saka alamar GPS ga gona ɗaya, ku ajiye lambobin wurinta a cikin bayani.",
          youCanNow: "rubuta ayyukan gonarku, kayan noma da girbi a waya ta hanya ɗaya tabbatacciya.",
          quickCheck: [
            { objective: "O2", q: "A takardar bayanan gona, mene ne layi ɗaya?", options: ["Abu ɗaya da ya faru, kamar shuka ko sayarwa", "Kakar noma gaba ɗaya", "Amfanin gona ɗaya na dukan shekaru", "Lambar waya ɗaya"], answer: 0, why: "Layi ɗaya ga kowane abin da ya faru, da kwanan wata, gona, aiki, yawa da kuɗi, yana sa bayanai su zama masu sauƙin haɗawa." },
            { objective: "O2", q: "Ƙungiyar manomanku tana son mambobi su aika rahoton dubawa daga wuraren da network ba shi da kyau. Me za ku iya amfani da shi?", options: ["Dogon kiran waya kowane mako", "Takardun rubutu da ke zama a gida", "Manhaja daban ga kowane mamba", "Kayan fom da ake rabawa kamar KoboToolbox mai aiki ba tare da intanet ba"], answer: 3, why: "Kayan fom kamar KoboToolbox suna barin mambobi da yawa su cika fom ɗaya ba tare da intanet ba, su aika idan sun sami network." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Amfani da bayanan yanayi da na tauraron ɗan adam kyauta",
          minutes: 6,
          goal: "Yi amfani da hasashen yanayi na hukuma da taswirorin tauraron ɗan adam kyauta don yanke shawarar gona.",
          text: [
            "Hukumomin yanayi na ƙasa suna fitar da hasashen yanayi ga manoma: a Kenya, Kenya Meteorological Department (KMD) tana fitar da hasashen yanayi na kaka da rahotannin yanayi na manoma; a Najeriya, NiMet tana fitar da hasashen yanayi na kaka da hasashen yau da kullum. Ku rubuta abin da suka faɗa game da yankinku a takardar gonarku, da kwanan wata, don daga baya ku ga yadda ya yi daidai da kakarku.",
            "Bayanan tauraron ɗan adam kyauta suna taimakawa ma. Shafukan FAO na kallon duniya daga sama suna nuna taswirorin ruwan sama, ciyayi (NDVI) da matsalar amfanin gona na ƙasashe da yankuna, waɗanda ke taimakawa ganin ko fari a gonarku kaɗai ne ko ya yaɗu. Copernicus Browser yana nuna hotunan tauraron ɗan adam na Sentinel-2 kyauta duk bayan 'yan kwanaki, kusan mita 10 a kowane ɗigo (pixel), wanda ya isa a ga siffar gonaki da ko babbar gona ta fi kore ko ta fi ruwan ƙasa fiye da watan da ya gabata.",
            "Idan za ku iya, ku auna ruwan sama da kanku da ma'aunin ruwan sama mai sauƙi, ku rubuta shi kowace rana. Bayanan ruwan samanku, kusa da ranakun shukarku da amfanin gonarku, suna nuna da sauri abin da ke aiki a gonarku."
          ],
          steps: ["Ku nemo hasashen yanayi na hukumar yanayi ta ƙasarku don yankinku.", "Ku rubuta shi a takardar gonarku da kwanan wata.", "Ku duba taswirorin FAO na kallon duniya daga sama don ƙasarku.", "Ku nemo gonarku a Copernicus Browser ku kwatanta ranaku biyu.", "Ku rubuta ruwan sama na kowace rana da ma'auni mai sauƙi idan za ku iya."],
          words: [["Rahoton yanayi na manoma (agrometeorological bulletin)", "rahoton yanayi da aka rubuta don manoma."], ["Hoton tauraron ɗan adam (satellite)", "hoton duniya da aka ɗauka daga sararin samaniya."], ["Ma'aunin ruwan sama (rain gauge)", "kwantena mai sauƙi mai alamomi da ke auna ruwan sama."]],
          slides: [
            { title: "Hasashen yanayi na hukuma", bullets: ["Kenya: hasashen kaka na KMD, rahotannin yanayi na manoma", "Najeriya: NiMet", "Ku rubuta su a takardarku da kwanan wata"] },
            { title: "Bayanan tauraron ɗan adam kyauta", bullets: ["FAO: taswirorin ruwan sama, NDVI, matsala", "Copernicus Browser: Sentinel-2, kusan mita 10", "Fari a gonarku kaɗai ne ko ya yaɗu?"] },
            { title: "Ma'aunin ruwan samanku", bullets: ["Ku rubuta ruwan sama kowace rana", "Ku kwatanta da ranakun shuka da amfanin gona"] }
          ],
          sources: [KMD, NIMET, FAO_EO, COPERNICUS],
          tryIt: "Ku nemo hasashen yanayi na wannan kakar don yankinku, ku rubuta shi a takardar gonarku. Sannan ku nemo yankinku a taswirorin FAO na kallon duniya daga sama ko a Copernicus Browser, ku rubuta abu ɗaya da kuka lura.",
          youCanNow: "amfani da hasashen yanayi na hukuma da taswirorin tauraron ɗan adam kyauta tare da bayanan gonarku.",
          quickCheck: [
            { objective: "O3", q: "Daga ina hasashen yanayi na kaka na hukuma ga manoma a Najeriya yake fitowa?", options: ["Shafin Facebook", "Kamfanin iri", "Makwabci", "NiMet"], answer: 3, why: "NiMet ce ke fitar da hasashen yanayi na kaka da sauran hasashen yanayi na Najeriya." },
            { objective: "O3", q: "Kuna son sanin ko fari a gonarku kaɗai ne ko ya shafi yankin gaba ɗaya. Me za ku duba?", options: ["Matakin batirin wayarku", "Taswirorin FAO na ruwan sama da ciyayi daga sama", "Tallar rediyo", "Kwalin iri na bara"], answer: 1, why: "Taswirorin FAO na kallon duniya daga sama suna nuna ruwan sama, ciyayi da matsalar amfanin gona na ƙasashe da yankuna." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tattara bayanai masu kyau",
        questions: [
          { objective: "O1", q: "Wani saƙon WhatsApp yana tallata \"takin mu'ujiza\" daga mai sayarwa da ba a sani ba. Ya kamata ku:", options: ["Ku saya da sauri kafin ya ƙare", "Ku tabbatar da majiya amintacciya kamar jami'in faɗakarwa kafin ku kashe kuɗi", "Ku tura shi ga kowa", "Ku aika PIN ɗinku don yin oda"], answer: 1, why: "Masu sayarwa da ba a sani ba da iƙirarin mu'ujiza alamun gargaɗi ne." },
          { objective: "O2", q: "Wane rukuni ne yake da amfani a takardar bayanan gona?", options: ["PIN ɗin kuɗin wayarku", "Lambar katin shaidarku", "Kwanan wata, gona da aiki", "Kalmar sirrinku (password)"], answer: 2, why: "Bayanai suna buƙatar abubuwan da suka faru, ba lambobin sirri ba." },
          { objective: "O2", q: "Me yasa za a ba kowace gona suna tabbatacce?", options: ["Don a iya kwatanta bayanai a tsawon lokaci", "Yana da kyan gani", "Wayar tana buƙata", "Ba shi da amfani"], answer: 0, why: "Sunaye iri ɗaya suna barin ku haɗa da kwatanta gonaki." },
          { objective: "O3", q: "Me hotunan Sentinel-2 kyauta a Copernicus Browser ke nunawa?", options: ["Ƙwari ɗaya-ɗaya", "Kuɗin da ke asusun bankinku", "Yanayin shekara mai zuwa", "Gonaki a kusan mita 10 a kowane ɗigo duk bayan 'yan kwanaki"], answer: 3, why: "Kyauta ne, suna zuwa akai-akai, amma ba su da cikakken kusanci sosai." },
          { objective: "O3", q: "Me yasa za ku rubuta hasashen yanayi a takardar gonarku da kwanan wata?", options: ["Don ku kwatanta shi daga baya da abin da ya faru da gaske a gonarku", "Hukumar yanayi tana buƙata", "Don ku raba wa masu saye", "Don cike wuri"], answer: 0, why: "A tsawon kakar noma da yawa, za ku koyi yadda hasashen yanayi ya dace da gonarku." }
        ]
      }
    },
    {
      name: "Babi na 2: Amfani da bayanai don yanke shawara",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nazarin bayananku a spreadsheet",
          minutes: 6,
          goal: "Lissafa amfanin gona da riba na kowace gona, ku yi jadawali don kwatanta su.",
          text: [
            "Bayanai suna zama masu amfani idan kun haɗa su. A spreadsheet ɗinku, ku yi teburin taƙaitawa: layi ɗaya ga kowace gona da girmanta, jimillar kuɗin da aka kashe, girbi, kuɗin shiga, sannan amfanin gona na kowace eka da ribar kowace eka. Spreadsheet yana yin lissafi da formula masu sauƙi, misali =SUM don haɗa kuɗaɗe, da raba lamba don samun amfanin gona na kowace eka.",
            "Sannan ku yi jadawali (chart). Ku zaɓi sunayen gonaki da amfanin gona na kowace eka (ko ribar kowace eka), ku saka jadawalin sanduna (bar chart). Jadawali yana sa bambance-bambance su zama masu sauƙin gani da bayani ga iyali, ƙungiya ko mai ba da bashi.",
            "Ku nemi dalilai: shin gona mafi kyau ta sami taki na dabbobi, ranar shuka da wuri, wani iri daban, ko ƙarin ruwan sama? Shin gona mafi rauni ta sami kwari ko ruwa ya cika ta? Ku rubuta shawara ɗaya don kakar noma mai zuwa, kuma ku ci gaba da rubuta bayanai don ku gwada ta."
          ],
          steps: ["Ku yi teburin taƙaitawa: gona, girma, jimillar kuɗi, girbi, kuɗin shiga.", "Ku yi amfani da =SUM don jimloli, ku raba don samun amfanin gona da riba na kowace eka.", "Ku zaɓi sunayen gonaki da amfanin gona na kowace eka; ku saka jadawalin sanduna.", "Ku nemi dalilai a cikin bayanan da kuka rubuta.", "Ku rubuta shawara ɗaya don kakar noma mai zuwa."],
          words: [["Formula", "umarni a cikin akwatin spreadsheet da ke yin lissafi, kamar =SUM(B2:B10)."], ["Amfanin gona na kowace eka", "abin da gona ta samar an raba shi da girmanta."], ["Jadawalin sanduna (bar chart)", "jadawali mai sanduna da ke kwatanta yawan abubuwa."]],
          slides: [
            { title: "Ku haɗa su", bullets: ["Layi ɗaya ga kowace gona", "Girma, kuɗi, girbi, kuɗin shiga", "Amfanin gona da riba na kowace eka"] },
            { title: "Bari takardar ta yi lissafi", bullets: ["=SUM don jimloli", "Ku raba don lambobin kowace eka"] },
            { title: "Ku yi jadawali", bullets: ["Sunayen gonaki + amfanin gona na kowace eka", "Ku saka jadawalin sanduna", "Mai sauƙin bayani ga wasu"] },
            { title: "Ku nemi dalilai, ku yanke shawara", bullets: ["Taki, lokaci, iri, ruwan sama, kwari?", "Shawara ɗaya don kakar noma mai zuwa"] }
          ],
          tryIt: "Ku yi teburin taƙaitawa na aƙalla gonaki uku (lambobi na gaske ko na misali), ku lissafa amfanin gona da riba na kowace eka da formula, ku saka jadawalin sanduna, sannan ku rubuta shawara ɗaya don kakar noma mai zuwa.",
          youCanNow: "nazarin bayanan gona a spreadsheet da amfani da jadawali don kwatanta gonaki da yanke shawara.",
          quickCheck: [
            { objective: "O4", q: "Mene ne ribar kowace eka?", options: ["Jimillar girbi kawai", "Jimillar kuɗin da aka kashe kawai", "Kuɗin shiga a cire kuɗin da aka kashe, a raba da girman gonar a eka", "Farashin buhu ɗaya"], answer: 2, why: "Ribar kowace eka tana ɗaukar kuɗin shiga a cire kuɗin da aka kashe, sannan a raba da girman gona, don a iya kwatanta gonaki masu girma daban-daban." },
            { objective: "O4", q: "Teburin taƙaitawarku ya nuna gona ɗaya ta ba da masara da yawa fiye da sauran. Me za ku yi a gaba?", options: ["Ku nemi dalilai kamar taki ko ranar shuka, ku rubuta shawara ɗaya", "Ku goge sauran gonakin daga takardar", "Ku daina rubuta bayanai", "Ku shuka wannan gonar kaɗai har abada ba tare da dubawa ba"], answer: 0, why: "Nemo dalilai da rubuta shawara ɗaya da za ku gwada a kakar noma mai zuwa yana mayar da bayanai zuwa noma mafi kyau." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Amfani da mataimakan AI don tambayoyin noma, cikin hankali",
          minutes: 5,
          goal: "Yi wa mataimakin AI tambayar noma a sarari, ku tabbatar da amsar kafin ku yi aiki da ita.",
          text: [
            "Mataimakan AI kyauta kamar ChatGPT, Microsoft Copilot da Google Gemini (shirye-shiryen kwamfuta da kuke hira da su) suna iya bayanin dabarun noma, taimakawa tsara kaka, rubuta daftarin saƙo ga mai saye, fassara, ko taimakawa wajen gina formula ta spreadsheet. Ku tambaya a sarari: ku faɗi amfanin gonarku, yankinku, kakar noma, girman gonarku da abin da kuke so, misali: \"Ina noman masara a eka 2 a Bungoma. Ruwan sama na gajeren lokaci yana farawa a watan Oktoba. Ka yi mini jerin abubuwan yi na kowane mako mai sauƙi tun daga shirin ƙasa har zuwa girbi. Ka yi amfani da gajerun jimloli.\"",
            "AI yana iya yin kuskure, bayanansa su tsufa, ko ya ba da shawara ta wata ƙasa. Yana iya ambaton kayan da ba su da rajista a ƙasarku ko yawan amfani (rate) marar daidai. Kada ku taɓa yin aiki da shawarar AI game da maganin ƙwari, yawan taki, magungunan dabbobi ko kuɗi ba tare da kun tabbatar da jami'in faɗakarwarku, agrovet, takardar bayanin kayan (label) ko wata majiya amintacciya ba.",
            "Kada ku rubuta bayanan sirri a mataimakin AI: lambar katin shaidarku, PIN ɗin kuɗin wayarku, bayanan banki ko bayanan sirri na wasu mutane. Ku yi amfani da AI a matsayin farawa mai taimako, ba kalmar ƙarshe ba."
          ],
          steps: ["Ku faɗi amfanin gonarku, yankinku, kakar noma, girman gona da abin da kuke so.", "Ku nemi gajerun jimloli ko jerin abubuwan yi.", "Ku yi tambayoyin biyo baya don inganta amsar.", "Ku tabbatar da shawarar maganin ƙwari, taki, magani da kuɗi da majiya amintacciya.", "Kada ku taɓa rubuta PIN, lambar katin shaida ko bayanan banki."],
          words: [["Mataimakin AI", "shirin kwamfuta da kuke hira da shi da kalmomin yau da kullum, wanda ke rubuta amsoshi."], ["Prompt (umarni)", "abin da kuke rubutawa ko faɗa wa mataimakin AI."]],
          slides: [
            { title: "Abin da AI zai iya taimakawa da shi", bullets: ["Bayanin dabaru, tsara kaka", "Rubuta daftarin saƙonni, fassara", "Gina formula ta spreadsheet"] },
            { title: "Ku tambaya a sarari", bullets: ["Amfanin gona, yanki, kaka, girman gona", "Abin da kuke so da yadda kuke so", "Gajerun jimloli, jerin abubuwan yi"] },
            { title: "Ku tabbatar kafin aiki", bullets: ["Maganin ƙwari, yawan amfani, magunguna, kuɗi", "Jami'in faɗakarwa, agrovet, label", "AI yana iya kuskure ko ya ba da na wata ƙasa"] },
            { title: "Kada ku saka bayanan sirri", bullets: ["Babu PIN, lambar katin shaida ko ta banki", "Babu bayanan wasu mutane"] }
          ],
          tryIt: "Ku nemi mataimakin AI kyauta ya ba ku jerin abubuwan yi na kowane mako don babban amfanin gonarku a wannan kakar, ta amfani da tsarin prompt na wannan darasi. Ku yi alama a kan kowane abu da ke buƙatar tabbatarwa da majiya amintacciya, sannan ku tabbatar da ɗaya daga cikinsu.",
          youCanNow: "yi wa mataimakin AI tambayar noma a sarari da tabbatar da amsarsa kafin ku yi aiki da ita.",
          quickCheck: [
            { objective: "O5", q: "Wace ce tambayar noma mai sarari ga mataimakin AI?", options: ["\"Ina noman wake a eka 1 a Kakamega. Ruwan sama na dogon lokaci yana farawa a watan Maris. Ka ba ni gajeren jerin abubuwan yi na shuka.\"", "\"noma\"", "\"Faɗa mini komai game da amfanin gona.\"", "\"wake?\""], answer: 0, why: "Tana faɗin amfanin gona, yanki, kakar noma, girman gona da abin da ake so." },
            { objective: "O5", q: "Mataimakin AI ya ba ku yawan taki na amfanin gonarku. Me za ku yi?", options: ["Ku yi amfani da shi yau", "Ku ninka shi don tsaro", "Ku tabbatar da shi da jami'in faɗakarwarku, agrovet ko label", "Ku saka shi a ƙungiyarku a matsayin gaskiya"], answer: 2, why: "AI yana iya ba da yawan amfani marar daidai ko shawara ta wata ƙasa, don haka dole a fara tabbatar da yawan." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kare da raba bayanan gonarku",
          minutes: 5,
          goal: "Yanke wane bayanan gona za ku raba, da wanda za ku raba wa, da kiyaye sauran lafiya.",
          text: [
            "Bayanan gonarku suna da daraja: masu saye, masu ba da bashi, kamfanonin inshora, kamfanonin kayan noma da manhajoji suna iya son su. Raba su yana iya taimaka muku samun bashi, inshora ko kwangila, amma ya kamata ku san abin da kuke rabawa, dalili, da wanda kuke raba wa. Ku karanta abin da manhaja ko shiri ya ce zai yi da bayananku, kuma ku ce a'a idan ba ku ji daɗi ba.",
            "Dokokin kare bayanai suna ba ku haƙƙi kan bayananku na sirri. A Kenya, Data Protection Act 2019 (dokar kare bayanai) tana ƙarƙashin kulawar Office of the Data Protection Commissioner (ODPC); a Najeriya, Nigeria Data Protection Act 2023 tana ƙarƙashin kulawar Hukumar Kare Bayanai ta Najeriya (NDPC). Idan kuna tattara bayanai daga wasu manoma, misali a matsayin shugaban ƙungiya, dole ku ma ku girmama haƙƙinsu: ku nemi izininsu, kuma ku kiyaye bayanan lafiya.",
            "Ku kiyaye wayarku da takardunku lafiya: makullin allo, kalmar sirri mai ƙarfi a asusunku, ajiyar kwafi, da hankali da wayoyin da ake rabawa. Ku raba taƙaitawa (kamar amfanin gona na kowace eka) maimakon komai idan hakan ya isa."
          ],
          steps: ["Kafin ku raba, ku tambaya: me, me yasa, da wa, kuma me zan samu?", "Ku karanta sharuɗɗan bayanai na manhajar ko shirin.", "Ku nemi izinin wasu manoma kafin ku tattara bayanansu.", "Ku kulle wayarku; ku yi amfani da kalmomin sirri masu ƙarfi; ku ajiye kwafi.", "Ku raba taƙaitawa maimakon dukan bayanai idan zai yiwu."],
          words: [["Bayanan sirri (personal data)", "bayanai game da mutumin da za a iya gane shi."], ["Izini (consent)", "amincewa a sarari bayan an fahimci abin da za a yi da bayanan."], ["Dokar kare bayanai", "dokar da ke iko da yadda za a tattara da amfani da bayanan sirri."]],
          slides: [
            { title: "Bayananku suna da daraja", bullets: ["Masu saye, masu ba da bashi, inshora, manhajoji suna son su", "Raba su yana iya taimakawa: bashi, inshora, kwangila", "Ku san me, me yasa, da wa"] },
            { title: "Haƙƙoƙinku", bullets: ["Kenya: Data Protection Act 2019, ODPC", "Najeriya: Data Protection Act 2023, NDPC", "Ku girmama bayanan sauran manoma ma"] },
            { title: "Ku kiyaye su lafiya", bullets: ["Makullin allo, kalmomin sirri masu ƙarfi, ajiyar kwafi", "Hankali da wayoyin da ake rabawa", "Ku raba taƙaitawa idan ya isa"] }
          ],
          sources: [ODPC, NDPC],
          tryIt: "Aikin ƙarshe: ku kammala takardar bayanan gonarku ta kakar noma na aƙalla gonaki uku, ku yi jadawalin kwatanta ɗaya, ku rubuta shawara ɗaya don kakar noma mai zuwa, ku jera majiyoyin da kuka duba, sannan ku rubuta matakai uku da kuke ɗauka don kiyaye bayanan lafiya.",
          youCanNow: "tattarawa, nazari, rabawa da kare bayanan gonarku don yanke shawara mafi kyau.",
          quickCheck: [
            { objective: "O6", q: "Wace hukuma ce ke kula da kare bayanai a Kenya?", options: ["Kenya Meteorological Department", "Office of the Data Protection Commissioner (ODPC)", "KALRO", "Kamfanin layin wayarku"], answer: 1, why: "ODPC ce ke kula da Data Protection Act 2019 ta Kenya." },
            { objective: "O6", q: "Mai ba da bashi yana son ganin yadda gonarku ke aiki. Me za ku raba?", options: ["Kalmar sirrin wayarku", "PIN ɗin kuɗin wayarku", "Dukan bayanan sirri na mambobi", "Taƙaitawa kamar amfanin gona na kowace eka, bayan kun karanta yadda za su yi amfani da shi"], answer: 3, why: "Taƙaitawa sau da yawa ta isa, kuma ya kamata ku san abin da kuke rabawa, dalili da wanda kuke raba wa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Amfani da bayanai don yanke shawara",
        questions: [
          { objective: "O4", q: "Wace formula ta spreadsheet ce ke haɗa rukunin kuɗaɗe?", options: ["=SUM", "=PIN", "=PHOTO", "=RAIN"], answer: 0, why: "=SUM yana haɗa jerin akwatuna." },
          { objective: "O4", q: "Gona A ta ba da kg 900 a rabin eka. Amfanin gonarta na kowace eka shi ne:", options: ["kg 90", "kg 450", "kg 900", "kg 1,800"], answer: 3, why: "900 a raba da eka 0.5 ya ba da kg 1,800 a kowace eka." },
          { objective: "O5", q: "Mataimakin AI ya ba da shawarar maganin ƙwari da yawan amfani. Ya kamata ku:", options: ["Ku fesa nan take", "Ku ninka yawan don tsaro", "Ku ba shi PIN ɗinku", "Ku tabbatar da rajista da yawan amfani da jami'in faɗakarwa, agrovet ko label"], answer: 3, why: "AI yana iya ambaton kayan da ba daidai ba ko marasa rajista, da yawan amfani marar daidai." },
          { objective: "O5", q: "Wanne BA shi da lafiya a rubuta a mataimakin AI?", options: ["Amfanin gonarku da yankinku", "PIN ɗin kuɗin wayarku", "Ranakun kakar nomanku", "Girman gonarku"], answer: 1, why: "Lambobin PIN da na katin shaida dole su kasance a sirri." },
          { objective: "O6", q: "A matsayin shugaban ƙungiya da ke tattara bayanan gona na mambobi, dole ku:", options: ["Nemi izininsu ku kiyaye bayanan lafiya", "Sayar da su ga masu saye", "Saka su a intanet", "Tattara iya yawan da za ku iya"], answer: 0, why: "Dokokin kare bayanai suna kare bayanan sirri na wasu mutane." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Bayanan Noma da Fasaha",
    questions: [
      { objective: "O1", q: "Wace ce yawanci majiyar shawarar noma amintacciya?", options: ["Asusun da ba a sani ba mai sayar da kayan mu'ujiza", "Cibiyar bincike kamar KALRO ko jami'in faɗakarwa da aka horar", "Saƙon da ake ta turawa", "Tallar da ke tasowa (pop-up)"], answer: 1, why: "Majiyoyin da aka horar kuma ke da alhaki sun fi aminci." },
      { objective: "O1", q: "Kafin ku kashe kuɗi kan sabuwar shawara, ya kamata ku:", options: ["Yi aiki da ita nan take", "Tambayi baƙo", "Tabbatar da majiya amintacciya ta biyu", "Yi watsi da duk shawara"], answer: 2, why: "Majiya ta biyu tana kama kurakurai da zamba." },
      { objective: "O1", q: "Wani saƙo ya ce tallafin gwamnati yana buƙatar kuɗi da PIN ɗinku. Wannan:", options: ["Wataƙila zamba ce", "Abu ne na yau da kullum", "Doka ce ta buƙata", "Bashi ne"], answer: 0, why: "Shirye-shiryen gaske ba sa neman PIN ɗinku." },
      { objective: "O2", q: "Bayanan gona mafi daraja a gare ku yawanci su ne:", options: ["Bayanai game da wasu ƙasashe", "Talla", "Labaran shahararrun mutane", "Bayanan gonarku na kanku"], answer: 3, why: "Game da gonakinku, kayan nomanku da sakamakonku ne." },
      { objective: "O2", q: "Takardar gona mai kyau tana da:", options: ["Rukuni ɗaya kawai", "Layi ɗaya ga kowane abin da ya faru da kwanan wata, gona, aiki, yawa, kuɗi, bayani", "Hotuna kawai", "Kalmomin sirri"], answer: 1, why: "Layuka da rukunai iri ɗaya suna ba da damar nazari." },
      { objective: "O2", q: "Alamar GPS tana rubuta:", options: ["Ruwan sama", "Farashin amfanin gona", "Lambobin wurin wani wuri", "pH na ƙasa"], answer: 2, why: "Alamomi suna ajiye wuri a taswira." },
      { objective: "O2", q: "KoboToolbox yana taimaka wa ƙungiyoyi su:", options: ["Cika fom ɗaya a wayoyi, ko ba tare da intanet ba", "Tuƙa jirage marasa matuƙa (drone)", "Biyan bashi", "Shuka iri"], answer: 0, why: "Fom ɗin da ake rabawa ba tare da intanet ba yana sauƙaƙa tattara bayanan ƙungiya." },
      { objective: "O2", q: "Rukunai biyar da ake cikawa kowane mako:", options: ["Sun fi rukunai ashirin da aka cika sau ɗaya muni", "Ba su da amfani", "Sun saɓa wa doka", "Sun fi daraja fiye da rukunai ashirin da aka cika sau ɗaya"], answer: 3, why: "Bayanai masu sauƙi da ake rubutawa akai-akai su ne masu amfani." },
      { objective: "O3", q: "Rahotannin yanayi na manoma na hukuma a Kenya suna fitowa daga:", options: ["KCAA", "Kenya Meteorological Department", "Kamfanin iri", "ODPC"], answer: 1, why: "KMD tana fitar da hasashen yanayi da rahotannin yanayi na manoma." },
      { objective: "O3", q: "Taswirorin FAO na kallon duniya daga sama suna iya nuna:", options: ["Kuɗin da ke asusun bankinku", "Farashin kasuwa kawai", "Ruwan sama, ciyayi da matsalar amfanin gona", "Sunayen ƙwari"], answer: 2, why: "Taswirorin FAO GIEWS suna nuna ruwan sama, NDVI da alamun matsala." },
      { objective: "O3", q: "Ma'aunin ruwan sama mai sauƙi yana barin ku:", options: ["Rubuta ruwan saman ku na kowace rana", "Yin hasashen shekara mai zuwa", "Auna pH na ƙasa", "Ƙidaya shuke-shuke"], answer: 0, why: "Bayanan ruwan samanku suna haɗa yanayi da amfanin gonarku." },
      { objective: "O4", q: "Amfanin gona na kowace eka shi ne:", options: ["Girbi a ninka da farashi", "Kuɗin da aka kashe a raba da kuɗin shiga", "Girman gona a ninka da ruwan sama", "Girbi a raba da girman gona"], answer: 3, why: "Yana sa a iya kwatanta gonaki masu girma daban-daban." },
      { objective: "O4", q: "Jadawalin sanduna yana taimaka muku:", options: ["Ɓoye lambobi", "Gani da bayanin bambance-bambance tsakanin gonaki", "Ajiye hotuna", "Aika kuɗi"], answer: 1, why: "Sanduna suna sa kwatance su zama masu sauƙin gani." },
      { objective: "O4", q: "Bayan kun gano gona mafi kyau, mataki na gaba shi ne:", options: ["Goge bayanan", "Daina rubuta bayanai", "Neman dalilai da rubuta shawara ɗaya don kakar noma mai zuwa", "Sayar da wayar"], answer: 2, why: "Nazari ya kamata ya kai ga shawarar da za ku iya gwadawa." },
      { objective: "O5", q: "Prompt mai sarari na AI don noma yana ɗauke da:", options: ["Amfanin gona, yanki, kaka, girman gona da abin da kuke so", "Lambar katin shaidarku", "Kalma ɗaya kawai", "Bayanan bankinku"], answer: 0, why: "Bayanin halin da ake ciki yana taimaka wa mataimakin ya ba da amsoshi masu amfani." },
      { objective: "O5", q: "Shawarar AI kan magungunan dabbobi ya kamata a:", options: ["Bi ta daidai yadda take", "Yi watsi da ita gaba ɗaya", "Yaɗa ta sosai", "Tabbatar da ita da likitan dabbobi ko majiya amintacciya kafin aiki"], answer: 3, why: "AI yana iya kuskure; magunguna suna buƙatar shawarar ƙwararre." },
      { objective: "O6", q: "A Najeriya, wace hukuma ce ke kula da kare bayanai?", options: ["NCAA", "Hukumar Kare Bayanai ta Najeriya (NDPC)", "NiMet", "NAFDAC"], answer: 1, why: "NDPC ce ke kula da Nigeria Data Protection Act 2023." },
      { objective: "O6", q: "Kafin manhaja ta tattara bayanan gonarku, ya kamata ku:", options: ["Kada ku karanta komai", "Ba da dukan bayanai", "Karanta abin da za ta yi da bayanan, ku yanke shawara", "Ba da PIN ɗinku"], answer: 2, why: "Ku san abin da kuke rabawa, dalili da wanda kuke raba wa." },
      { objective: "O6", q: "Raba taƙaitawa kamar amfanin gona na kowace eka maimakon dukan bayanai:", options: ["Yana iya isa kuma yana kare sirrinku", "Ba a taɓa yarda da shi ba", "Zamba ce", "Ba shi da amfani"], answer: 0, why: "Ku raba abin da ake buƙata kawai." },
      { objective: "O6", q: "Me ke ƙara kiyaye bayanan wayarku?", options: ["Rashin makullin allo", "Raba kalmomin sirri", "Rashin ajiyar kwafi koyaushe", "Makullin allo, kalmomin sirri masu ƙarfi da ajiyar kwafi"], answer: 3, why: "Waɗannan matakai na asali suna kare bayananku." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      8,
      9,
      11,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na takardar ku sake duba shi.",
    criteria: [
      {
        name: "Takardar bayanan gona",
        objective: "O2",
        notYet: "Akwai rukunan da suka ɓace, ko an kira gonaki da sunaye daban-daban a layuka daban-daban.",
        meets: "Layi ɗaya ga kowane abin da ya faru da kwanan wata, gona, aiki, yawa da kuɗi, da sunayen gonaki tabbatattu, na aƙalla gonaki uku.",
        exceeds: "Tana kuma da bayanan dubawa, hotuna ko alamomin GPS da aka haɗa da gonakin."
      },
      {
        name: "Bayanan yanayi da tauraron ɗan adam",
        objective: "O3",
        notYet: "Babu bayanin hasashen yanayi ko ruwan sama.",
        meets: "An rubuta hasashen yanayi na hukuma ko taswirar tauraron ɗan adam ko ta ruwan sama, tare da majiya da kwanan wata.",
        exceeds: "Tana da bayanan ma'aunin ruwan sama na mai koyo kusa da hasashen yanayi."
      },
      {
        name: "Nazari da jadawali",
        objective: "O4",
        notYet: "Babu teburin taƙaitawa, ko lissafin ba daidai ba ne.",
        meets: "Amfanin gona da riba na kowace eka daidai ne ga kowace gona, kuma an nuna su a jadawalin sanduna.",
        exceeds: "An bayyana jadawalin a jimla ɗaya ko biyu ga ƙungiya ko mai ba da bashi."
      },
      {
        name: "Shawara don kakar noma mai zuwa",
        objective: "O4",
        notYet: "Babu shawara, ko ba ta biyo bayan lambobin ba.",
        meets: "Shawara ɗaya a sarari da ta danganci abin da takardar ta nuna.",
        exceeds: "Ta faɗi yadda bayanan kakar noma mai zuwa za su gwada shawarar."
      },
      {
        name: "Majiyoyin da aka duba",
        objective: "O1",
        notYet: "An yi amfani da shawara daga manhajoji, AI ko kafofin sada zumunta ba tare da tabbatarwa ba.",
        meets: "An rubuta majiyoyin amintattu da aka yi amfani da su don tabbatar da shawara, har da duk wata amsar AI.",
        exceeds: "An ambaci majiya ta biyu ga kowace muhimmiyar shawara."
      },
      {
        name: "An kiyaye bayanai lafiya",
        objective: "O6",
        notYet: "Takardar tana da PIN, lambobin katin shaida ko bayanan wasu mutane ba tare da izininsu ba.",
        meets: "Babu lambobin sirri; akwai bayani kan ajiyar kwafi, makullin allo da abin da ake rabawa da wa.",
        exceeds: "Tana nuna gajeriyar taƙaitawa da aka shirya don rabawa maimakon dukan takardar."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka sami \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na takardar bayanan gona",
      "Masu koyo da har yanzu suke rubuta bayanan gona a wayarsu bayan kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka ce sun yanke shawarar gona daga bayanansu, ko sun tabbatar da shawara kafin su sayi kayan noma",
      "Masu koyo da suka ce sun guje wa kayan noma na bogi, tallafin bogi ko zambar PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai intanet, ko da mai araha ce; kwamfuta tana taimakawa a Babi na 2",
      "Kayan aiki kyauta: Google Sheets ko Microsoft Excel na intanet kyauta, manhajar taswira, da mataimakin AI kyauta",
      "Bayanan gona na gaske ko na misali na aƙalla gonaki uku; ma'aunin ruwan sama mai sauƙi idan akwai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, da ƙarin lokaci don cike takardar bayanan gona"
    ],
    facilitatorNotes: [
      "A ƙungiyar manoma ko zaman faɗakarwa: ku yi gwajin farko tare, sannan ku shirya takardar misali ɗaya da ake rabawa a waya don kowa ya ga rukunan.",
      "Ku shirya bayanan misali ga masu koyo da ba su da bayanai tukuna, don kowa ya iya gwada formula da jadawalin.",
      "Kada ku taɓa neman masu koyo su rubuta PIN, lambobin katin shaida ko bayanan banki a takardu, fom ko kayan AI; ku yi amfani da madadi.",
      "Idan ƙungiya tana tattara bayanan mambobi, ku bayyana batun izini kuma ku amince kan wanda zai iya ganin takardar.",
      "Ku ba da maki ga takardar ƙarshe da rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
