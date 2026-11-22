"use strict";

// Koach Learn course, Hausa (ha) translation of seniors/seniors-ai-memory-support.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Voice commands stay in English inside quotes, because most phone voice assistants do not understand Hausa yet.

module.exports = {
  id: "seniors-ai-memory-support-ha",
  lang: "ha",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "AI don Taimakon Tunawa",
  skills: "Ajiye tunatarwa da bayanai ta murya, Amfani da hotuna don tunawa, Yin jerin abubuwan dubawa da AI, Taƙaita ganawa da kiran waya, Gina tsarin tunawa na yau da kullum",
  outcome: "shirya ƙananan kayan taimakon tunawa a wayarku: tunatarwa ta murya, jerin bayanai, hotunan tunawa da jerin abubuwan dubawa da AI ya yi, da amfani da su a tsarin yau da kullum.",
  about: [
    "Kowa yana mantuwa: inda aka ajiye mota, ko an kashe murhu, abin da likita ya faɗa. Wannan kwas ɗin na tsofaffi ne, da 'yan uwan da ke taimaka musu, waɗanda ke son kayan aiki masu sauƙi don tuna abubuwan yau da kullum cikin sauƙi.",
    "Za ku yi amfani da mataimakin murya na wayarku, bayanai (Notes), kyamara da mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini don ajiye tunatarwa, riƙe jerin abubuwa, yin jerin abubuwan dubawa, da taƙaita abin da aka faɗa a wurin ganawa.",
    "Waɗannan kayan aiki suna taimakon tunawa ne kawai; ba sa gano cuta ko magance komai. Idan ku ko iyalinku kun damu da canje-canje a tunawarku, ku yi magana da likitanku. Kowane darasi yana ɗaukar kusan minti biyar. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku gina kayan taimakon tunawarku: ku saita tunatarwa biyu masu maimaituwa ta murya, ku fara bayani mai suna \"Abubuwan da zan tuna\", ku ɗauki hoton tunawa ɗaya (kamar inda kuka ajiye mota ko wani lakabi da kuke buƙata), ku nemi AI ya yi muku jerin abubuwan dubawa na \"kafin in fita daga gida\", sannan ku yi amfani da su duka har tsawon yini ɗaya cikakke.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsofaffi da ke lura da mantuwar yau da kullum, kamar ranakun ganawa, sunaye, inda suka ajiye mota ko abin da likita ya faɗa, kuma suke son kayan aiki masu sauƙi don tsara rayuwarsu da dogaro da kansu. Wasu 'yan uwa ne ke kula da su.",
    startingPoint: "Suna da wayar zamani (smartphone) kuma suna kira da tura saƙon tes. Da yawa suna dogara ga rubutu a takarda ko tunawa kawai, kuma ba su taɓa amfani da tunatarwa ta murya, bayanan da aka maƙala a sama, kundin hotuna ko jerin abubuwan dubawa na AI ba.",
    gap: "Mantuwar ranakun ganawa, magunguna ko abin da aka faɗa a wurin likita yana kawo damuwa kuma yana iya shafar lafiya da tsaro. Ƙananan kayan aiki a waya da ake amfani da su kowace rana suna taimaka wa tsofaffi su tuna da yawa kuma su dogara da kansu, yayin da lambobin sirri ke fita daga bayanai da hotuna, kuma canje-canjen tunawa masu damuwa suna zuwa wurin likita.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi, gajerun jimloli da manyan matakai masu sauƙi",
      "Na'urori: wayar zamani mai mataimakin murya, Notes ko Google Keep, da kyamara",
      "Lokaci: kusan minti 5 a kowane darasi a hankali, sannan yini ɗaya cikakke na atisaye",
      "Lafiya: kwas ɗin yana taimakon tunawar yau da kullum; canje-canje masu damuwa suna zuwa wurin likita",
      "Sirri: babu kalmomin sirri (password), lambobin banki ko na Social Security a bayanai, hotuna ko prompt na AI"
    ],
    prerequisites: "Babu. Kwas ɗin \"AI don Rayuwar Yau da Kullum\" abokin kwas ne mai amfani."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Da zarar kun tuna wani abu da za ku yi", action: "ajiye tunatarwa ta murya da ke faɗin me da yaushe, ta amfani da \"every\" (kowane) don masu maimaituwa", standard: "kuma ku nuna an gama idan kun kammala" },
    { id: "O2", condition: "Ta amfani da Notes ko Google Keep", action: "riƙe bayani mai suna \"Abubuwan da zan tuna\" da aka maƙala a sama, da ƙara masa abubuwa ta rubutu ko murya", standard: "ba tare da kalmomin sirri ko lambobin sirri a cikinsa ba" },
    { id: "O3", condition: "Idan akwai abin da kuke buƙatar tunawa, kamar inda kuka ajiye mota", action: "ɗaukar hoton tunawa da sake nemo shi a sabbin hotunanku ko a cikin kundi", standard: "ba tare da ɗaukar hoton katunan sirri ko takardu ba" },
    { id: "O4", condition: "Idan akwai aikin da kuke yawan yi", action: "neman AI ya yi gajeren jerin abubuwan dubawa, gyara shi ya dace da rayuwarku da ajiye shi inda za ku gan shi", standard: "da abubuwa masu sauƙi da ba su wuce kusan takwas ba" },
    { id: "O5", condition: "Bayan ganawa ko muhimmin kiran waya", action: "mayar da bayananku zuwa gajeren taƙaitawa da jerin abubuwan yi da taimakon AI", standard: "an cire bayanan sirri, kuma an tabbatar da duk abin da bai fito fili ba da ofishin" },
    { id: "O6", condition: "Kowace rana", action: "bin tsarin tunawa mai sauƙi na dubawa da safe da da yamma", standard: "kuma ku yi magana da likitanku game da canje-canjen tunawa da ke damun ku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Ajiye abin da kuke buƙatar tunawa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Tunatarwa ta murya da zarar kun tuna",
          minutes: 5,
          goal: "Ajiye tunatarwa ta murya kafin ku manta.",
          text: [
            "Lokaci mafi kyau na ajiye tunatarwa shi ne da zarar kun tuna. Mataimakin murya na wayarku (Siri a iPhone, Google Assistant ko Gemini a Android) yana sa wannan ya yi sauri: babu rubutu, babu neman alƙalami.",
            "Ku faɗa (da Turanci, domin yawancin mataimakan murya ba sa jin Hausa tukuna): \"Remind me to call the pharmacy tomorrow at 10 am.\" (Ka tunatar da ni in kira kantin magani gobe ƙarfe 10 na safe.) \"Remind me to water the plants every Monday.\" (Ka tunatar da ni in shayar da shuke-shuke kowace Litinin.) \"Remind me to take my umbrella when I leave home\" (Ka tunatar da ni in ɗauki laima idan na fita daga gida) yana aiki a wasu wayoyi, waɗanda za su iya tunatar da ku bisa wurin da kuke.",
            "Idan tunatarwar ta bayyana, ku yi aikin ko ku taɓa don jinkirta ta (snooze). Ku nuna an gama idan kun kammala, don jerinku ya kasance a tsabtace."
          ],
          steps: ["Ku tashi mataimakin muryarku.", "Ku faɗi \"Remind me to...\" tare da me da yaushe.", "Ku yi amfani da \"every\" (kowane) don tunatarwa masu maimaituwa.", "Idan ta bayyana, ku yi aikin ko ku jinkirta ta.", "Ku nuna an gama."],
          words: [["Snooze (jinkirtawa)", "jinkirta tunatarwa don ta sake dawowa bayan ɗan lokaci."], ["Tunatarwa mai maimaituwa", "tunatarwa da ke dawowa bisa jadawali, kamar kowace Litinin."]],
          slides: [
            { title: "Ku ajiye shi nan take", bullets: ["Da zarar kun tuna", "Babu rubutu, babu alƙalami"] },
            { title: "Ku faɗa", bullets: ["\"Remind me to call the pharmacy at 10 am.\"", "\"Remind me to water plants every Monday.\""] },
            { title: "Idan ta bayyana", bullets: ["Ku yi aikin, ko ku jinkirta ta", "Ku nuna an gama"] }
          ],
          tryIt: "Ku saita tunatarwa biyu ta murya: ɗaya don gobe, ɗaya kuma mai maimaituwa kowane mako.",
          youCanNow: "ajiye tunatarwa ta lokaci ɗaya da masu maimaituwa ta murya.",
          quickCheck: [
            { objective: "O1", q: "Me jinkirta tunatarwa (snooze) yake yi?", options: ["Yana goge ta", "Yana jinkirta ta kaɗan don ta sake dawowa", "Yana nuna an gama ta", "Yana tura ta ga iyali"], answer: 1, why: "Snooze yana jinkirta tunatarwar kaɗan; ku nuna an gama idan kun kammala." },
            { objective: "O1", q: "Kuna girki sai kuka tuna dole ku kira banki gobe. Me za ku yi?", options: ["Ku yi fatan za ku tuna", "Ku rubuta a takardar goge hannu daga baya", "Ku faɗa wa wayarku: \"Remind me to call the bank tomorrow at 10 am.\"", "Ku kira bankin yanzu da dare"], answer: 2, why: "Ku ajiye tunatarwa da zarar kun tuna, ta murya, tare da me da yaushe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Jerin bayanai don abubuwan da za ku tuna",
          minutes: 5,
          goal: "Riƙe bayani mai suna \"Abubuwan da zan tuna\" a wayarku da ƙara masa abubuwa ta murya.",
          text: [
            "Wasu abubuwa ba su da alaƙa da lokaci: sunan sabon maƙwabci, littafin da aboki ya ba da shawara, inda kuka ajiye makullin ajiya. Waɗannan suna shiga cikin bayani (note).",
            "Ku buɗe manhajar Notes (ko Google Keep a yawancin wayoyin Android) ku ƙirƙiri bayani mai suna \"Abubuwan da zan tuna\". Ku maƙala shi a sama (pin) idan manhajarku ta yarda. Kuna iya ƙara masa abubuwa ta rubutu ko ta taɓa makirufo a kan madannin rubutu (keyboard) ku yi magana.",
            "Ku sa bayanin ya zama mai sauƙi: layi ɗaya don kowane abu, sabo a sama. Kada ku taɓa ajiye kalmomin sirri, lambobin banki ko lambobin Social Security (lambar shaidar Amurka) a bayani na yau da kullum."
          ],
          steps: ["Ku buɗe Notes ko Google Keep.", "Ku ƙirƙiri bayani mai suna \"Abubuwan da zan tuna\".", "Ku maƙala shi a sama idan za ku iya.", "Ku ƙara abubuwa ta rubutu ko da makirufon madannin rubutu.", "Ku cire lambobin sirri daga cikinsa."],
          words: [["Manhajar Notes", "manhaja don rubuta da ajiye bayanai a wayarku."], ["Pin (maƙalawa)", "ajiye wani abu a saman jeri don ya zama mai sauƙin samu."]],
          slides: [
            { title: "Ba shi da alaƙa da lokaci?", bullets: ["Sunan maƙwabci", "Littafin da za a karanta", "Inda makullin ajiya yake"] },
            { title: "Ku yi bayaninku", bullets: ["Notes ko Google Keep", "Ku sa masa suna \"Abubuwan da zan tuna\"", "Ku maƙala shi a sama"] },
            { title: "Ku sa shi mai sauƙi da aminci", bullets: ["Layi ɗaya don kowane abu", "Ku yi amfani da makirufon madannin rubutu", "Babu kalmomin sirri ko lambobin banki"] }
          ],
          tryIt: "Ku ƙirƙiri bayani mai suna \"Abubuwan da zan tuna\" ku ƙara abubuwa uku, aƙalla ɗaya ta yin magana da makirufon madannin rubutu.",
          youCanNow: "riƙe jerin bayanai don abubuwan da kuke son tunawa da ƙara masa abubuwa ta murya.",
          quickCheck: [
            { objective: "O2", q: "Me maƙala bayani a sama (pin) yake yi?", options: ["Yana ajiye shi a saman bayananku", "Yana kulle shi da kalmar sirri", "Yana goge shi bayan kwana ɗaya", "Yana raba shi da iyali"], answer: 0, why: "Maƙalawa yana ajiye bayaninku na \"Abubuwan da zan tuna\" a sama inda za ku same shi." },
            { objective: "O2", q: "Aboki ya ba ku shawarar wani littafi lokacin da kuke waje. Ina zai shiga?", options: ["Cikin tunatarwa mai lokaci", "Cikin manhajar bankinku", "Babu inda; za ku tuna", "Cikin bayaninku na \"Abubuwan da zan tuna\""], answer: 3, why: "Abubuwan da ba su da alaƙa da lokaci, kamar sunan littafi, suna shiga cikin bayaninku." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hotuna don taimakon tunawa",
          minutes: 4,
          goal: "Yi amfani da kyamararku don tuna inda abubuwa suke da abin da suke faɗa.",
          text: [
            "Hoto mai sauri zai iya tuna muku abubuwa. Ku ɗauki hoton alamar wurin ajiye mota ko lambar bene, cikin firij kafin ku je sayayya, lakabin kwan fitila da kuke buƙatar canjawa, ko maɓallan murhu a rufe kafin ku fita.",
            "Don nemo su daga baya, ku ƙirƙiri kundi (album) mai suna \"Taimakon tunawa\" a manhajar hotunanku, ko ku duba sabbin hotunanku kawai. Ku goge su idan ba ku buƙatar su kuma.",
            "Kada ku ɗauki hoton takardun sirri kamar katin banki ko katin Social Security ɗinku don wannan dalili; idan wayarku ta ɓace, ana iya amfani da waɗannan hotuna ta hanyar da ba ta dace ba."
          ],
          steps: ["Ku ɗauki hoto mai sauri na abin da za ku tuna.", "Ku duba sabbin hotuna, ko ku riƙe kundin \"Taimakon tunawa\".", "Ku goge hotunan tunawa idan kun gama.", "Kada ku ɗauki hoton katunan sirri ko takardu."],
          words: [["Taimakon tunawa", "duk abin da ke taimaka muku tunawa, kamar bayani, ƙararrawa ko hoto."]],
          slides: [
            { title: "Bari kyamara ta tuna", bullets: ["Wurin ajiye mota", "Cikin firij", "Lakabin da kuke buƙata", "Maɓallan murhu a kashe"] },
            { title: "Ku nemo su daga baya", bullets: ["Ku duba sabbin hotuna", "Ko kundin \"Taimakon tunawa\"", "Ku goge idan kun gama"] },
            { title: "Ku kiyaye aminci", bullets: ["Babu hoton katin banki ko na shaida"] }
          ],
          tryIt: "Ku ɗauki hoton tunawa ɗaya yau, kamar cikin firij ɗinku ko inda kuka ajiye mota. Ku sake nemo shi a hotunanku bayan awa ɗaya.",
          youCanNow: "amfani da hotuna don tuna inda abubuwa suke da abin da suke faɗa.",
          quickCheck: [
            { objective: "O3", q: "Me yasa bai kamata ku ajiye hoton katin bankinku don tunawa ba?", options: ["Hotunan katuna ba sa fitowa sosai", "Idan wayarku ta ɓace, ana iya amfani da hoton ta hanyar da ba ta dace ba", "Yana cinye wuri da yawa", "Banki ba ya yarda da hotuna"], answer: 1, why: "Ana iya amfani da hotunan katunan sirri ta hanyar da ba ta dace ba idan waya ta ɓace." },
            { objective: "O3", q: "Kun ajiye mota a bene na 3 na babban wurin ajiye motoci. Mene ne hanya mai sauri ta tunawa?", options: ["Ku ɗauki hoton alamar benen", "Ku rubuta a tes ga baƙo", "Ku ƙirga motocin", "Ku bar motar a buɗe"], answer: 0, why: "Hoto mai sauri na alamar wurin ajiye mota yana tuna muku shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Ajiye abin da kuke buƙatar tunawa",
        questions: [
          { objective: "O1", q: "Yaushe ne lokaci mafi kyau na ajiye tunatarwa?", options: ["Ranar Lahadi kawai", "Mako mai zuwa", "Da zarar kun tuna", "Ba a taɓa ba"], answer: 2, why: "Ajiyewa nan take yana hana mantuwa." },
          { objective: "O1", q: "Wace buƙatar murya ce ke yin tunatarwa ta kowane mako?", options: ["\"Remind me to water the plants every Monday.\"", "\"Plants.\"", "\"Monday.\"", "\"Water.\""], answer: 0, why: "\"Every\" (kowane) yana sa ta maimaitu." },
          { objective: "O2", q: "Ina sunan sabon maƙwabci ya kamata ya shiga?", options: ["Cikin tes ga baƙi", "Cikin wurin rubuta kalmar sirri", "Babu inda", "Cikin bayaninku na \"Abubuwan da zan tuna\""], answer: 3, why: "Bayanai suna riƙe abubuwan da ba su da alaƙa da lokaci." },
          { objective: "O2", q: "Me bai kamata a TAƁA sa shi a bayani na yau da kullum ba?", options: ["Sunan littafi", "Kalmomin sirri da lambobin banki", "Sunan maƙwabci", "Hanyar dafa abinci"], answer: 1, why: "Bayanai na yau da kullum ba su da aminci ga lambobin sirri." },
          { objective: "O3", q: "Wanne ne hoton tunawa mai kyau?", options: ["Katin bankinku", "Alamar benen wurin ajiye mota", "Katin Social Security ɗinku", "Kalmar sirrinku"], answer: 1, why: "Bai kamata a ɗauki hoton katunan sirri don tunatarwa ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsare-tsare da mataimakan AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Jerin abubuwan dubawa da AI ya yi",
          minutes: 5,
          goal: "Neman AI ya yi gajeren jerin abubuwan dubawa don aikin da kuke yawan yi.",
          text: [
            "Jerin abubuwan dubawa (checklist) yana taimakon kowa, daga matuƙan jirgin sama zuwa likitoci. Mataimakin AI zai iya yin ɗaya don kowane aikin yau da kullum: fita daga gida, shirin tafiya, ko daren kafin ranar ganawa.",
            "Ku tambaya: \"Ka yi mini gajeren jerin abubuwan dubawa na fita daga gida: kada su wuce abubuwa takwas, da kalmomi masu sauƙi.\" Sannan ku gyara shi ya dace da gidanku: \"Ka ƙara: duba ƙofar baya. Ka cire: ciyar da mage.\"",
            "Ku buga shi ku liƙa shi kusa da ƙofa, ko ku ajiye shi a Notes. Jerin abubuwan dubawa yana taimakawa ne kawai idan yana inda za ku gan shi a lokacin da ya dace."
          ],
          steps: ["Ku zaɓi aikin da kuke yawan yi.", "Ku nemi AI ya yi gajeren jerin abubuwan dubawa da kalmomi masu sauƙi.", "Ku ƙara ko ku cire abubuwa don ya dace da rayuwarku.", "Ku ajiye shi inda za ku gan shi a lokacin da ya dace."],
          words: [["Jerin abubuwan dubawa (checklist)", "jerin matakai da kuke yi wa alama ɗaya bayan ɗaya."]],
          slides: [
            { title: "Jerin dubawa yana taimakon kowa", bullets: ["Fita daga gida", "Shirin tafiya", "Daren kafin ranar ganawa"] },
            { title: "Ku tambayi AI", bullets: ["\"Gajeren jerin dubawa, kada ya wuce abubuwa takwas\"", "Sannan ku ƙara ko ku cire abubuwa"] },
            { title: "Ku ajiye shi a wurin da ya dace", bullets: ["Ku liƙa shi kusa da ƙofa", "Ko ku ajiye shi a Notes"] }
          ],
          tryIt: "Ku nemi mataimakin AI ya yi jerin abubuwan dubawa na \"kafin in fita daga gida\" da ba su wuce abubuwa takwas ba. Ku canja shi ya dace da gidanku, ku buga shi ko ku ajiye shi.",
          youCanNow: "yin jerin abubuwan dubawa na kanku da AI da ajiye shi inda yake taimakawa.",
          quickCheck: [
            { objective: "O4", q: "Yaushe jerin abubuwan dubawa ya fi taimakawa?", options: ["Idan an ajiye shi inda ba ku taɓa dubawa", "Idan ya yi tsawo sosai", "Idan yana inda za ku gan shi a lokacin da ya dace", "Idan AI ne kaɗai zai iya karanta shi"], answer: 2, why: "Jerin dubawa yana taimakawa ne kawai idan kun gan shi a lokacin da ya dace, kamar kusa da ƙofa." },
            { objective: "O4", q: "Jerin dubawar AI ya ce \"ciyar da mage\" amma ba ku da mage. Me za ku yi?", options: ["Ku sayi mage", "Ku nemi sabon jeri kowace rana", "Ku yi watsi da jerin gaba ɗaya", "Ku cire wannan abu ku ƙara duk wanda kuke buƙata"], answer: 3, why: "Ku gyara jerin dubawar don ya dace da gidanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tuna abin da aka faɗa a wurin ganawa",
          minutes: 5,
          goal: "Ajiye muhimman abubuwan ganawa ko kiran waya da mayar da su gajeren taƙaitawa mai sarari.",
          text: [
            "Yana da sauƙi a manta abin da likita, lauya ko mai gyara ya faɗa. Ku zo da rubutaccen jerin tambayoyi, ku rubuta amsoshin, ko ku roƙi wani a iyali ya zo tare da ku ya rubuta bayanai.",
            "Bayan haka, ku rubuta bayananku marasa tsari a mataimakin AI, ba tare da sunaye, ranakun haihuwa ko lambobin asusu ba, ku tambaya: \"Ka mayar da waɗannan bayanai gajeren taƙaitawa tare da jerin abubuwan da nake buƙatar yi.\" Ku ajiye taƙaitawar a Notes.",
            "Idan wani abu bai fito fili ba, ku kira ofishin don tabbatarwa. Yawancin ofisoshin likitoci kuma suna saka taƙaitawar ziyara a shafin marasa lafiya (patient portal). Wasu mutane suna tambaya ko za su iya naɗar ziyara a wayarsu; koyaushe ku fara neman izini."
          ],
          steps: ["Ku zo da jerin tambayoyi ku rubuta amsoshi.", "Ku zo da wani a iyali idan za ku iya.", "Ku rubuta bayanai marasa tsari a AI ba tare da bayanan sirri ba.", "Ku nemi taƙaitawa da jerin abubuwan yi.", "Ku tabbatar da duk abin da bai fito fili ba da ofishin."],
          words: [["Taƙaitawa", "gajeren sigar muhimman abubuwa."], ["Shafin marasa lafiya (patient portal)", "shafin intanet ko manhaja inda ofishin likitanku ke raba bayanan ziyara da sakamako."]],
          slides: [
            { title: "Ku ajiye shi a lokacin", bullets: ["Ku zo da tambayoyi, ku rubuta amsoshi", "Ku zo da wani a iyali"] },
            { title: "Bari AI ya tsara shi", bullets: ["Ku rubuta bayanai ba tare da bayanan sirri ba", "Ku nemi taƙaitawa da jerin abubuwan yi", "Ku ajiye shi a Notes"] },
            { title: "Ku tabbatar", bullets: ["Ku kira ofishin idan bai fito fili ba", "Ku duba shafin marasa lafiya", "Ku nemi izini kafin naɗar kowa"] }
          ],
          tryIt: "Ku rubuta bayanai uku marasa tsari daga wani kira ko ganawa na kwanan nan (ku bar sunaye da lambobi). Ku nemi mataimakin AI ya mayar da su gajeren taƙaitawa tare da jerin abubuwan yi, ku ajiye shi.",
          youCanNow: "ajiye da taƙaita abin da aka faɗa a wurin ganawa ko kiran waya.",
          quickCheck: [
            { objective: "O5", q: "Mene ne shafin marasa lafiya (patient portal)?", options: ["Ƙofar asibiti", "Shafin intanet ko manhaja inda ofishin likitanku zai iya raba bayanan ziyara", "Kantin magani", "Mataimakin AI"], answer: 1, why: "Yawancin ofisoshin likitoci suna saka taƙaitawar ziyara a shafin marasa lafiya." },
            { objective: "O5", q: "Kuna son naɗar abin da likita ke faɗa a wayarku. Me za ku fara yi?", options: ["Ku nemi izini", "Ku ɓoye wayar", "Ku naɗa ba tare da faɗin komai ba", "Ku saka naɗin a intanet"], answer: 0, why: "Koyaushe ku nemi izini kafin naɗar ziyara." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tsarin tunawa na yau da kullum",
          minutes: 5,
          goal: "Haɗa kayan taimakon tunawarku cikin tsari mai sauƙi na yau da kullum.",
          text: [
            "Kayan aiki sun fi aiki idan sun zama al'ada. Tsari mai sauƙi na yau da kullum: da safe, ku duba tunatarwa da kalanda na yau. Da rana, ku ajiye tunatarwa da bayanai da zarar kun tuna. Kafin barci, ku duba tunatarwar gobe da bayaninku na \"Abubuwan da zan tuna\".",
            "Ku ajiye abubuwa a wuri ɗaya kowace rana: makullai, tabarau da waya a cikin kwano ɗaya kusa da ƙofa. Alamar bin diddigi (tracking tag) a kan makullanku (kamar Apple AirTag ko Tile) za ta iya taimaka muku nemo su da wayarku.",
            "Ku yi wa kanku sauƙi. Mantuwar wasu abubuwa abu ne na al'ada. Idan ku ko iyalinku kun lura da canje-canjen tunawa da ke damun ku, kamar ɓacewa a wuraren da kuka saba ko wahala da ayyukan yau da kullum, ku yi magana da likitanku. MedlinePlus (medlineplus.gov) yana da bayanai amintattu game da tunawa."
          ],
          steps: ["Safe: ku duba tunatarwa da kalanda.", "Rana: ku ajiye tunatarwa da bayanai nan take.", "Yamma: ku duba gobe da bayaninku.", "Ku ajiye makullai, tabarau da waya a wuri ɗaya.", "Ku yi magana da likitanku game da canje-canje masu damuwa."],
          words: [["Alamar bin diddigi (tracking tag)", "ƙaramar na'ura a kan makullai ko jaka da wayarku za ta iya nemowa."]],
          slides: [
            { title: "Tsari mai sauƙi na yau da kullum", bullets: ["Safe: ku duba tunatarwa da kalanda", "Rana: ku ajiye nan take", "Yamma: ku duba gobe"] },
            { title: "Wuri ɗaya kowace rana", bullets: ["Makullai, tabarau, waya a kwano ɗaya", "Alamar bin diddigi za ta iya taimakawa nemo makullai"] },
            { title: "Ku yi wa kanku sauƙi", bullets: ["Wasu mantuwa abu ne na al'ada", "Kuna damuwa? Ku yi magana da likitanku", "MedlinePlus yana da bayanai amintattu"] }
          ],
          sources: [{ name: "MedlinePlus (Ɗakin Karatu na Magunguna na Ƙasar Amurka)", url: "https://medlineplus.gov/" }],
          tryIt: "Aikin ƙarshe: ku gina kayan taimakon tunawarku (tunatarwa biyu masu maimaituwa ta murya, bayanin \"Abubuwan da zan tuna\", hoton tunawa ɗaya, da jerin dubawa na \"kafin in fita daga gida\" da AI ya yi) ku yi amfani da su duka har yini ɗaya cikakke tare da dubawar safe da ta yamma.",
          youCanNow: "amfani da tunatarwa, bayanai, hotuna, jerin abubuwan dubawa da taƙaitawar AI a tsarin yau da kullum da ke taimakon tunawarku.",
          quickCheck: [
            { objective: "O6", q: "Mece ce al'adar tunawa mai kyau da yamma?", options: ["Goge duk tunatarwa", "Kashe wayarku har mako ɗaya", "Duba tunatarwar gobe da bayaninku na \"Abubuwan da zan tuna\"", "Rubuta sabon jerin dubawa kowane dare"], answer: 2, why: "Kafin barci, ku duba tunatarwar gobe da bayaninku." },
            { objective: "O6", q: "Kullum tabaranku suna ɓacewa a cikin gida. Wace al'ada mai sauƙi ce ke taimakawa?", options: ["Sayen sabbin tabarau kowane mako", "Ajiye makullai, tabarau da waya a kwano ɗaya kusa da ƙofa", "Daina sanya tabarau", "Tambayar AI inda suke"], answer: 1, why: "Ajiye abubuwa a wuri ɗaya kowace rana yana nufin kun san inda suke." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsare-tsare da mataimakan AI",
        questions: [
          { objective: "O4", q: "Ina jerin dubawa na \"fita daga gida\" ya kamata ya kasance?", options: ["Babu inda", "Cikin aljihun tebur", "Cikin bayan mota", "Kusa da ƙofa inda za ku gan shi"], answer: 3, why: "Jerin dubawa yana taimakawa idan an gan shi a lokacin da ya dace." },
          { objective: "O5", q: "Kafin ku rubuta bayanan ganawa a AI, ku cire:", options: ["Sunaye, ranakun haihuwa da lambobin asusu", "Abubuwan da za a yi", "Kalmar \"likita\"", "Babu komai"], answer: 0, why: "Bayanan sirri ba sa shiga AI." },
          { objective: "O5", q: "Kafin ku naɗi wata tattaunawa a wurin ganawa, ya kamata ku:", options: ["Naɗa a ɓoye", "Ɓoye wayar", "Nemi izini", "Saka shi a intanet"], answer: 2, why: "Koyaushe ku tambaya kafin naɗar wani." },
          { objective: "O6", q: "Al'ada mai kyau da yamma ita ce:", options: ["Raba kalmomin sirrinku", "Goge duk tunatarwa", "Kashe waya har mako ɗaya", "Duba tunatarwar gobe da bayaninku"], answer: 3, why: "Yana shirya ku don gobe." },
          { objective: "O6", q: "Kun lura cewa kun ɓace a wurin da kuka saba. Me ya kamata ku yi?", options: ["Ku yi watsi da shi", "Ku nemi AI ya gano cutar", "Ku yi magana da likitanku", "Ku sayi ƙarin magani (supplement) a intanet"], answer: 2, why: "Likita ne ya kamata ya duba canje-canjen tunawa masu damuwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI don Taimakon Tunawa",
    questions: [
      { objective: "O1", q: "Me yasa za a ajiye tunatarwa nan take?", options: ["Yana adana batir", "Don kada ku manta da ita", "Dole ne", "Ya fi arha"], answer: 1, why: "Lokacin yana wucewa da sauri." },
      { objective: "O1", q: "\"Snooze\" yana nufin:", options: ["Jinkirta tunatarwa kaɗan", "Goge ta", "Raba ta", "Buga ta"], answer: 0, why: "Snooze yana dawo da ita daga baya." },
      { objective: "O1", q: "Wace kalma ce ke sa tunatarwa ta maimaitu?", options: ["\"every\" (kowane)", "\"maybe\" (wataƙila)", "\"once\" (sau ɗaya)", "\"never\" (ba a taɓa ba)"], answer: 0, why: "\"Every Monday\" (kowace Litinin) yana maimaituwa kowane mako." },
      { objective: "O1", q: "Idan kun gama aikin tunatarwa, ya kamata ku:", options: ["Bar ta har abada", "Nuna an gama", "Sake saita ta", "Goge manhajar"], answer: 1, why: "Nuna an gama yana sa jerinku ya kasance a tsabtace." },
      { objective: "O2", q: "Jerin bayanai ya fi dacewa da:", options: ["Lambobin banki", "Kalmomin sirri", "Abubuwan da ba su da alaƙa da lokaci", "Lambobin Social Security"], answer: 2, why: "Bayanai suna riƙe sunaye, tunani da wurare." },
      { objective: "O2", q: "Maƙala bayani a sama:", options: ["Yana kulle wayarku", "Yana goge shi", "Yana raba shi ga kowa", "Yana ajiye shi a sama"], answer: 3, why: "Bayanan da aka maƙala suna da sauƙin samu." },
      { objective: "O2", q: "Don ƙara wa bayani abu ba tare da rubutu ba, ku yi amfani da:", options: ["Maɓallin ƙara sauti", "Kyamara", "Makirufon madannin rubutu", "Fitilar waya"], answer: 2, why: "Makirufo yana rubuta abin da kuke faɗa." },
      { objective: "O3", q: "Hoton tunawa mai kyau shi ne:", options: ["Cikin firij ɗinku kafin sayayya", "Katin bankinku", "Shafin fasfo ɗinku", "Lambar PIN ɗinku"], answer: 0, why: "Bai kamata a ɗauki hoton takardun sirri don tunatarwa ba." },
      { objective: "O3", q: "Idan ba a buƙatar hotunan tunawa kuma:", options: ["Ku tura su ga baƙi ta imel", "Ku saka su a intanet", "Ku buga su duka", "Ku goge su"], answer: 3, why: "Gogewa yana sa hotuna su kasance a tsari da sirri." },
      { objective: "O4", q: "Jerin abubuwan dubawa shi ne:", options: ["Bayanin asusun banki", "Jerin matakai da kuke yi wa alama", "Kalmar sirri", "Waya"], answer: 1, why: "Jerin dubawa yana jagorantar ayyukan yau da kullum." },
      { objective: "O4", q: "Buƙatar jerin dubawa mai kyau ga AI ita ce:", options: ["\"jeri\"", "\"Gajeren jerin dubawa na fita daga gida, kada ya wuce abubuwa takwas, da kalmomi masu sauƙi.\"", "\"abubuwa\"", "\"taimako\""], answer: 1, why: "Tana faɗin aikin, tsawonsa da salonsa." },
      { objective: "O4", q: "Bayan AI ya yi jerin dubawa, ya kamata ku:", options: ["Raba kalmar sirrinku", "Yi amfani da shi ba tare da canji ba ko ta yaya", "Goge shi", "Gyara shi ya dace da gidanku"], answer: 3, why: "Gidanku ya bambanta da na kowa." },
      { objective: "O5", q: "A wurin ganawa da likita, wani a iyali zai iya taimakawa ta:", options: ["Rubuta bayanai", "Amsawa a madadinku ba tare da tambaya ba", "Raba kalmomin sirrinku", "Naɗa a ɓoye"], answer: 0, why: "Mai sauraro na biyu yana kama abubuwa da yawa." },
      { objective: "O5", q: "AI zai iya mayar da bayanai marasa tsari zuwa:", options: ["Takardar magani", "Gano cuta", "Gajeren taƙaitawa tare da jerin abubuwan yi", "Hukuncin shari'a"], answer: 2, why: "Taƙaitawa ƙarfinsa ne; gano cuta ba haka ba ne." },
      { objective: "O5", q: "Shafin marasa lafiya (patient portal) shi ne:", options: ["Banki", "Ƙofar asibiti", "Tashar mota", "Shafin intanet ko manhaja inda likitanku ke raba bayanan ziyara"], answer: 3, why: "Shafukan suna raba taƙaitawar ziyara da sakamako." },
      { objective: "O5", q: "Idan taƙaitawa ba ta fito fili ba, ya kamata ku:", options: ["Yi watsi da ita", "Yi hasashe", "Kira ofishin don tabbatarwa", "Tambayi baƙo a intanet"], answer: 2, why: "Ofishin ne majiya amintacciya." },
      { objective: "O6", q: "Dubawar safe ta haɗa da:", options: ["Canja kalmomin sirri", "Tunatarwa da kalanda na yau", "Goge bayanai", "Sayen sabuwar waya"], answer: 1, why: "Tana shirya muku ranarku." },
      { objective: "O6", q: "Ajiye makullai, tabarau da waya a kwano ɗaya yana taimakawa domin:", options: ["Koyaushe kuna san inda suke", "Yana da kyau a gani", "Yana caja su", "Dole ne"], answer: 0, why: "Wuri ɗaya, ƙarancin nema." },
      { objective: "O6", q: "Alamar bin diddigi a kan makullai tana ba ku damar:", options: ["Nemo su da wayarku", "Buɗe kowace ƙofa", "Tayar da mota daga nesa", "Biyan kuɗaɗe"], answer: 0, why: "Wayarku za ta iya gano alamar." },
      { objective: "O6", q: "A ina za ku sami bayanai amintattu game da tunawa?", options: ["Tallar da ke tasowa (pop-up)", "MedlinePlus (medlineplus.gov) da likitanku", "Mai sayar da ƙarin magani", "Jita-jita a kafofin sada zumunta"], answer: 1, why: "MedlinePlus shafin lafiya ne na gwamnati kyauta." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      4,
      7,
      10,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Tunatarwa ta murya",
        objective: "O1",
        notYet: "Tunatarwa ƙasa da biyu, ko ba sa maimaituwa.",
        meets: "Tunatarwa biyu masu maimaituwa da aka saita ta murya, kowacce da me da yaushe.",
        exceeds: "An nuna an gama su ko an jinkirta su yayin da suka bayyana a cikin yini."
      },
      {
        name: "Bayanin abubuwan da zan tuna",
        objective: "O2",
        notYet: "Babu bayani, ko yana da kalmomin sirri ko lambobin sirri.",
        meets: "Bayanin \"Abubuwan da zan tuna\" mai aƙalla abu ɗaya kuma babu lambobin sirri.",
        exceeds: "An maƙala bayanin a sama kuma an ƙara abu ɗaya ta murya."
      },
      {
        name: "Hoton tunawa",
        objective: "O3",
        notYet: "Babu hoto, ko hoton katin sirri ko takarda.",
        meets: "Hoton tunawa ɗaya mai amfani, kamar inda aka ajiye mota ko wani lakabi.",
        exceeds: "An ajiye shi a kundin \"Taimakon tunawa\" kuma an goge shi idan ba a buƙata kuma."
      },
      {
        name: "Jerin dubawa na fita daga gida",
        objective: "O4",
        notYet: "Babu jerin dubawa, ko bai dace da gidanku ba.",
        meets: "Gajeren jerin dubawa na AI da aka gyara ya dace da gidanku kuma aka ajiye inda za ku gan shi.",
        exceeds: "An yi amfani da jerin dubawar duk lokacin da aka fita daga gida a wannan yinin."
      },
      {
        name: "An yi amfani da su har yini ɗaya",
        objective: "O6",
        notYet: "An shirya kayan aikin amma ba a yi amfani da su ba.",
        meets: "An yi amfani da kayan aikin har yini ɗaya cikakke, tare da dubawar safe da ta yamma.",
        exceeds: "Za a iya faɗin wane kayan aiki ne ya fi taimakawa da abin da za a canja."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da har yanzu suke amfani da tsarin tunawarsu da tunatarwa a binciken biyo baya na kwanaki 30",
      "Masu koyo da suka ce sun rage rasa ranakun ganawa ko damuwa game da mantuwa",
      "Masu koyo da suka fara wani kwas na Seniors and Technology (Tsofaffi da Fasaha) cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Wayar zamani mai mataimakin murya, Notes ko Google Keep, da kyamara",
      "Mataimakin AI kyauta (ChatGPT, Microsoft Copilot ko Google Gemini)",
      "Firinta ko takarda da selotep don jerin dubawa (ba dole ba ne)",
      "Kusan minti 60 gaba ɗaya, a gajerun zama cikin natsuwa, da yini ɗaya cikakke na atisaye"
    ],
    facilitatorNotes: [
      "Ku sa salon magana ya zama mai daɗi da amfani; mantuwar wasu abubuwa abu ne na al'ada kuma ba abin kunya ba ne.",
      "Ku taimaki masu koyo su kunna mataimakin muryarsu kuma su nemo makirufon madannin rubutu kafin Darasi na 1.",
      "Ku tunatar da masu koyo kada su taɓa sa kalmomin sirri ko lambobin sirri a bayanai, hotuna ko prompt na AI.",
      "Kada ku auna lafiyar tunawa; ku ƙarfafa masu koyo ko iyalai masu damuwa su yi magana da likita.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
