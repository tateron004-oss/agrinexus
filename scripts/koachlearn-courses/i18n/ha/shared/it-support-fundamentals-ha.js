"use strict";

// Koach Learn course, Hausa (ha) translation of shared/it-support-fundamentals.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Commands (ipconfig, ping, cmd), keyboard keys, menu names and exam codes stay as written.

const A_PLUS = { name: "Takardar shaidar CompTIA A+ (shafin hukuma)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "Bayanan jarabawar CompTIA A+ Core 1 (220-1201)", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "Bayanan jarabawar CompTIA A+ Core 2 (220-1202)", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "Ofishin Ƙididdigar Ma'aikata na Amurka (BLS): Ƙwararrun Masu Taimakon Kwamfuta", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals-ha",
  lang: "ha",
  translationOf: "it-support-fundamentals",
  category: "Workforce Development",
  name: "Tushen Taimakon IT (Shirin Jarabawar CompTIA A+)",
  skills: "Sanin sassan kwamfuta, Duba haɗin network, Amfani da kayan aikin tsarin aiki, Gyara matsala mataki-mataki, Rubuta tikitin help desk, Shirya jarabawar A+",
  outcome: "yin aiki kamar ma'aikacin help desk na matakin farko: faɗin sassan kwamfuta, duba haɗin network da ipconfig da ping, amfani da kayan aikin da ke cikin tsarin, gyara matsala da hanyar matakai shida, rubuta tikiti mai sarari, da bin shirin karatunku mai ranaku don jarabawar CompTIA A+ guda biyu.",
  about: [
    "Taimakon IT (ana kuma kiransa help desk ko desktop support) aiki ne na farko da aka saba samu a fasaha. Ma'aikatan taimako suna taimaka wa mutane idan kwamfuta, firinta, waya ko network ya daina aiki. Takardar shaidar farko mafi sananne don wannan aiki ita ce CompTIA A+.",
    "Wannan kwas ɗin yana shirya ku don A+. Ba ya ba ku takardar shaidar. Don samun A+ dole ku ci jarabawa biyu, Core 1 da Core 2, a cibiyar jarabawa ko ta intanet. Ku duba shafin hukuma na CompTIA don jarabawar yanzu, farashi da hanyoyin zana jarabawa kafin ku yi rajista.",
    "Za ku yi atisaye a kwamfutarku da kayan aiki kyauta da ke cikinta. Ba sai kun buɗe kwamfuta ko kun sayi wani abu ba. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\" da tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe.",
    "Wannan kwas ɗin na duk mai farawa ne: masu neman aiki, tsoffin sojoji, matasa, masu dawowa gida daga gidan yari, baƙi masu hijira da manya da ke canja sana'a."
  ],
  finalTask: "Ku haɗa kayan farawa na taimakon IT: (1) tikitin help desk na atisaye kan matsala ta gaske ko ta ƙage, da dukkan matakai shida na gyara matsala da filayen tikiti daga Darasi na 6; (2) takarda shafi ɗaya game da kwamfutarku: tsarin aikinta da sigarsa, wurin ajiya da ya rage, adireshin IP, default gateway da ko ping ya yi aiki; da (3) shirin karatu da jarabawarku na A+ da ranar da kuke nufi don Core 1 da Core 2, sassan (domains) kowace jarabawa da nauyinsu, da awannin da za ku yi karatu kowane mako.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da matasa da ke neman aikin farko a fasaha: masu neman aiki, tsoffin sojoji, masu dawowa gida daga gidan yari, baƙi masu hijira da masu canja sana'a. Yawancinsu suna amfani da waya da kwamfuta kowace rana amma ba su taɓa gyara ɗaya ba ko yin aikin IT ba.",
    startingPoint: "Suna iya amfani da burauzar intanet, imel da manhajoji na yau da kullum. Yawancinsu ba su taɓa amfani da command prompt ba, ko duba cikin saitunan tsarin, ko rubuta tikitin taimako ba. Kaɗan ne suka san abin da jarabawar A+ ke ƙunshe da shi.",
    gap: "Ayyukan help desk suna neman ƙwarewar asali a hardware, network, tsarin aiki da gyara matsala, kuma sau da yawa CompTIA A+. Masu koyo suna buƙatar hoto mai sarari na aikin, atisaye da kayan aiki na gaske, da shiri mai ranaku don su zana jarabawar biyu a zahiri.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar fasaha",
      "Na'urori: kwamfutar Windows ko Mac ɗaya (kwamfutar ɗakin karatu tana aiki don yawancin ayyuka, amma ana iya hana wasu umarni a can)",
      "Ba a buɗe kwamfuta ko na'urar wuta (power supply); ana koyon hardware daga hotuna ko tsohuwar na'ura da aka kashe aka cire daga wuta kawai",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da aiki da ganawa",
      "Dokokin jarabawa, farashi da sigogi suna canjawa: masu koyo suna duba comptia.org kafin su yi rajista"
    ],
    prerequisites: "Sanin amfani da kwamfuta, linzamin kwamfuta (mouse) da madannai (keyboard). Idan wannan sabo ne, ku fara ɗaukar \"Ƙwarewar Kwamfuta ta Farko\". \"Introduction to Cybersecurity\" (Gabatarwa ga Tsaron Intanet) kwas ne mai taimakawa tare da wannan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku hotuna ko jerin sassan kwamfuta", action: "gane kowane babban sashen hardware da faɗin aikinsa", standard: "kuna samun aƙalla 8 cikin 10 daidai" },
    { id: "O2", condition: "Ta amfani da kwamfutarku ta Windows ko Mac", action: "gudanar da ipconfig (ko duba saitunan network) da ping don rubuta adireshin IP da default gateway da gwada haɗin", standard: "ba tare da taimako ba, kuma kuna faɗin ma'anar adireshin 169.254" },
    { id: "O3", condition: "Ta amfani da kwamfutarku", action: "nemo sigar tsarin aiki, wurin ajiya da ya rage, shirye-shiryen da ke aiki da yanayin sabuntawa (updates) da kayan aikin da ke cikin kwamfutar", standard: "cikin ƙasa da minti 10" },
    { id: "O4", condition: "Idan aka ba ku matsalar kwamfuta daga mai amfani", action: "bin hanyar gyara matsala ta CompTIA mai matakai shida da rubuta kowane mataki", standard: "da dukkan matakai shida a jerin da ya dace" },
    { id: "O5", condition: "Idan aka ba ku kira ko saƙo daga mai amfani da ke da matsala", action: "rubuta tikitin help desk da gajeriyar amsa mai ladabi ga mai amfanin", standard: "da kowane filin tikiti a cike, babu ɗora laifi ko kalmomin fasaha masu wuya a cikin amsar" },
    { id: "O6", condition: "Ta amfani da shafukan hukuma na jarabawar CompTIA A+", action: "rubuta shirin karatu da jarabawa da ranakun da kuke nufi don Core 1 da Core 2", standard: "da kowane sashe (domain) na jarabawa da nauyinsa da lokacin karatu na mako-mako" }
  ],
  chapters: [
    {
      name: "Babi na 1: Aikin, hardware da network",
      lessons: [
        {
          title: "Aikin help desk da jarabawar A+ guda biyu",
          objectives: ["O6"],
          minutes: 5,
          goal: "Jera jarabawar A+ guda biyu, lambobinsu da manyan batutuwan da kowace take ƙunshe da su.",
          text: [
            "Ma'aikacin taimako yana amsa kira, hira da tikiti, yana shirya kwamfutoci da asusu, yana gyara matsalolin da aka saba gani, kuma ya san lokacin da zai miƙa matsala mai wuya ga babban ma'aikaci. Sunayen aikin sun haɗa da help desk technician, IT support specialist, desktop support da field technician.",
            "CompTIA A+ sananniyar takardar shaida ce ta farko don wannan aiki. CompTIA ce ke bayar da ita, ba wannan kwas ba. Dole ku ci jarabawa biyu. Core 1 (220-1201) tana ƙunshe da na'urorin hannu, network, hardware, virtualization da cloud, da gyara matsalolin hardware da network. Core 2 (220-1202) tana ƙunshe da tsarin aiki, tsaro, gyara matsalolin software da hanyoyin aiki. Kuna iya zana su a kowane jeri.",
            "Lokacin da muka duba a Oktoba 2026, kowace jarabawa tana da tambayoyi har 90 cikin minti 90, da tambayoyin zaɓi (multiple-choice), ja-da-ajiye (drag-and-drop) da tambayoyin aiki (performance-based, ƙananan ayyuka na hannu). CompTIA tana ba da shawarar kusan watanni 12 na ƙwarewar aiki da hannu, amma shawara ce kawai. Jarabawa, farashi da sigogi suna canjawa, don haka koyaushe ku duba shafukan hukuma kafin ku yi rajista.",
            "Kowace jarabawa tana jera sassa (domains) da nauyinsu, wato kason jarabawar da wannan batu yake ɗauka. Lokacin karatunku ya bi waɗannan nauyin."
          ],
          steps: ["Ku buɗe shafin hukuma na CompTIA A+.", "Ku buɗe shafukan jarabawar Core 1 da Core 2.", "Ku rubuta lambar kowace jarabawa da sassanta da nauyinsu.", "Ku nemo farashin yanzu da hanyoyin zana jarabawa (cibiyar jarabawa ko ta intanet) a shafin hukuma."],
          words: [["Help desk", "ƙungiyar da mutane ke tuntuɓa idan fasaharsu ba ta aiki."], ["Takardar shaida (certification)", "shaidar da kuke samu ta hanyar cin jarabawa, da ke nuna kuna da wasu ƙwarewa."], ["Sashe (domain)", "fannin batu a jarabawa. Nauyinsa shi ne kason tambayoyin da ke kansa."], ["Tambayar aiki (performance-based question)", "aikin jarabawa inda kuke yin wani abu, kamar haɗa saituna ko gyara tsari, maimakon zaɓar amsa ɗaya."]],
          slides: [
            { title: "Abin da ma'aikacin taimako ke yi", bullets: ["Yana amsa kira, hira da tikiti", "Yana shirya kwamfutoci, firintoci da asusu", "Yana gyara matsalolin da aka saba; yana miƙa masu wuya"] },
            { title: "CompTIA A+ = jarabawa biyu", bullets: ["Core 1 (220-1201): hardware, network, na'urorin hannu, cloud, gyara matsala", "Core 2 (220-1202): tsarin aiki, tsaro, software, hanyoyin aiki", "Ku ci duka biyun, a kowane jeri"] },
            { title: "Tsarin jarabawa (an duba Oktoba 2026)", bullets: ["Tambayoyi har 90, minti 90 kowace", "Zaɓi, ja-da-ajiye, tambayoyin aiki", "Ku duba comptia.org don bayanai da farashin yanzu"] },
            { title: "Wannan kwas yana shirya ku", bullets: ["Ba ya bayar da A+", "CompTIA ce ke bayar da ita idan kun ci jarabawar biyu"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Ku buɗe shafukan hukuma na Core 1 da Core 2. A takarda, ku yi rukuni biyu, ɗaya don kowace jarabawa. Ku rubuta lambar jarabawar, sannan kowane sashe da nauyinsa. Ku zagaye sashe mafi girma a kowace jarabawa: a nan za ku fi ɓata lokacin karatu.",
          youCanNow: "faɗin jarabawar A+ guda biyu, lambobinsu da manyan sassansu, da nemo bayanan yanzu a shafin hukuma.",
          quickCheck: [
            { objective: "O6", q: "Jarabawa nawa dole ku ci don samun CompTIA A+?", options: ["Ɗaya", "Biyu: Core 1 da Core 2", "Uku", "Babu; wannan kwas yana bayar da ita"], answer: 1, why: "A+ tana buƙatar Core 1 da Core 2 duka; kwas ɗin yana shirya ku ne kawai." },
            { objective: "O6", q: "A ina ya kamata ku duba farashin A+ na yanzu da sigar jarabawa?", options: ["Rubutu a dandalin intanet na bara", "Aboki da ya ci a 2019", "Shafin intanet na hukuma na CompTIA", "Kowane bidiyo game da A+"], answer: 2, why: "Farashi da sigogin jarabawa suna canjawa; shafin hukuma ne kaɗai majiya amintacciya." }
          ]
        },
        {
          title: "Cikin kwamfuta: manyan sassan hardware",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gane manyan sassan hardware na kwamfuta da faɗin aikin kowanne.",
          text: [
            "Hardware su ne sassan da za ku iya taɓawa. Motherboard ita ce babban allo da komai ke haɗuwa da shi. CPU (processor) yana yin tunani. RAM (memory) yana riƙe abin da kuke aiki a kai yanzu, kuma yana gogewa idan wuta ta ɗauke. Wurin ajiya (storage) yana riƙe fayilolinku ko da wuta ba ta nan: SSD (solid-state drive, mai sauri, babu sassa masu motsi) ko HDD (hard disk drive, mafi jinkiri, faifai masu juyawa).",
            "Na'urar wuta (PSU) tana mayar da wutar bango zuwa wutar da sassan ke amfani da ita. Katin hoto (GPU) yana zana hoton da ke kan allo; kwamfutoci da yawa suna da hoton a cikin CPU. Kofofin haɗi (ports) a waje sun haɗa da USB (USB-A da ƙaramin USB-C da ake iya juyawa), HDMI da DisplayPort don allo, da Ethernet don network ta waya.",
            "Alamar da aka saba gani a help desk: kwamfuta mai jinkiri da ke da shirye-shirye da yawa a buɗe tana iya buƙatar ƙarin RAM; kwamfutar da ke daɗewa kafin ta tashi tana iya samun drive da ya kusa cika ko tsoho.",
            "Tsaro da farko: ba sai kun buɗe kwamfuta a wannan kwas ba. Ma'aikaci koyaushe yana kashe kwamfuta ya cire ta daga wuta kafin ya buɗe ta, yana sa igiyar hannu mai hana static (anti-static wrist strap), kuma ba ya taɓa buɗe na'urar wuta ko batir da ya kumbura."
          ],
          words: [["Hardware", "sassan kwamfuta na zahiri."], ["CPU", "processor; sashen da ke gudanar da shirye-shirye da yin lissafi."], ["RAM", "memory na ɗan lokaci da ke riƙe shirye-shirye da fayilolin da ke buɗe; yana gogewa idan wuta ta ɗauke."], ["SSD / HDD", "drive na ajiya da ke riƙe fayiloli ko da wuta ba ta nan. SSD ya fi sauri kuma ba shi da sassa masu motsi."], ["Motherboard", "babban allon lantarki da ke haɗa dukkan sassan."], ["ESD", "electrostatic discharge: ɗan ƙaramin shokin static da zai iya lalata sassan kwamfuta."]],
          slides: [
            { title: "Manyan sassa", bullets: ["Motherboard: tana haɗa komai", "CPU: yana yin tunani", "RAM: memory na ɗan lokaci, yana gogewa idan an kashe", "SSD ko HDD: yana riƙe fayilolinku"] },
            { title: "Ƙarin sassa da kofofin haɗi", bullets: ["Na'urar wuta (PSU) da katin hoto (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Alamomi a wurin aiki", bullets: ["Jinkiri da shirye-shirye da yawa a buɗe: wataƙila RAM ya yi kaɗan", "Jinkirin tashi: drive ya cika ko ya tsufa"] },
            { title: "Tsaro", bullets: ["Ku kashe ku cire daga wuta kafin ku buɗe", "Igiyar hannu mai hana static", "Kada ku taɓa buɗe na'urar wuta ko batir da ya kumbura"] }
          ],
          tryIt: "Ku duba kwamfutarku daga waje kawai. Ku jera kowace kofar haɗi da kuke gani ku faɗi sunanta (USB-A, USB-C, HDMI, Ethernet, ta belun kunne). Sannan, a Windows ku buɗe Settings > System > About, ko a Mac ku buɗe Apple menu > About This Mac, ku rubuta processor ɗinku da yawan RAM (memory) da kwamfutar take da shi.",
          youCanNow: "faɗin manyan sassan kwamfuta, faɗin aikin kowanne, da nemo processor da memory na kwamfutarku.",
          quickCheck: [
            { objective: "O1", q: "Wane sashe ne yake riƙe fayilolinku idan an kashe kwamfuta?", options: ["RAM", "CPU", "Na'urar wuta", "SSD ko hard drive"], answer: 3, why: "Wurin ajiya (SSD ko HDD) yana riƙe fayiloli; RAM yana gogewa idan wuta ta ɗauke." },
            { objective: "O1", q: "Kafin buɗe kwamfutar tebur, me ma'aikaci zai fara yi?", options: ["Ya kashe ta ya cire ta daga wuta", "Ya buɗe na'urar wuta", "Ya cire batir yayin da take aiki", "Ya fesa ruwa don sanyaya ta"], answer: 0, why: "Ku kashe ku cire daga wuta da farko; wannan yana kare ku da sassan." }
          ]
        },
        {
          title: "Tushen network: adireshin IP, ipconfig da ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Duba haɗin network na kwamfuta da ipconfig da ping, ku rubuta sakamakon.",
          text: [
            "Kowace na'ura a network tana samun adireshin IP, kamar adireshin titi don bayanai. A gida yawanci yana kama da 192.168.x.x ko 10.x.x.x. Router ɗinku yana raba waɗannan adireshi da kansa ta hanyar wani sabis da ake kira DHCP. Default gateway shi ne adireshin router: ƙofar fita daga network ɗin gidanku zuwa intanet.",
            "Idan kwamfutar Windows ta nuna adireshi da ke farawa da 169.254, ba ta samu adireshi daga DHCP ba. Wannan babbar alama ce: ku duba waya ko Wi-Fi, sannan router.",
            "Kayan aiki biyu da kowane ma'aikaci ke amfani da su: ipconfig yana nuna adireshin IP ɗinku da default gateway (a Windows, ku buɗe Command Prompt ku rubuta ipconfig). ping yana aika ɗan saƙon gwaji zuwa wata na'ura kuma yana nuna ko ta amsa. Ku fara ping na default gateway; idan ya yi aiki, ku yi ping na shafin intanet kamar comptia.org.",
            "Ku yi atisayen waɗannan a kwamfutarku da network ɗinku kaɗai. Wasu kwamfutocin ɗakin karatu ko na wurin aiki suna hana command prompt; idan haka ne, ku yi amfani da saitunan network don nemo adireshin IP ɗinku."
          ],
          steps: ["Windows: ku danna maɓallin Windows, ku rubuta cmd ku buɗe Command Prompt. Mac: ku buɗe Terminal.", "Windows: ku rubuta ipconfig ku danna Enter. Ku rubuta IPv4 address da default gateway. Mac: ku nemo adireshin IP da router a System Settings > Network.", "Ku rubuta ping sannan adireshin gateway ɗinku, misali ping 192.168.1.1, ku danna Enter.", "A Mac, ku danna Control da C don dakatar da ping.", "Ku karanta sakamakon: amsoshi (replies) suna nufin haɗin yana aiki; \"timed out\" ko \"unreachable\" suna nufin ba ya aiki."],
          words: [["Adireshin IP (IP address)", "lamba da ke gane na'ura a network."], ["DHCP", "sabis, yawanci a cikin router, da ke ba na'urori adireshin IP da kansa."], ["Default gateway", "adireshin router; hanyar fita daga network ɗinku zuwa intanet."], ["ipconfig", "umarnin Windows da ke nuna saitunan network ɗinku."], ["ping", "umarni da ke gwada ko wata na'ura tana amsawa ta network."], ["Router", "akwatin da ke haɗa network ɗin gidanku da intanet."]],
          slides: [
            { title: "Adireshi a network", bullets: ["Kowace na'ura tana samun adireshin IP", "Adireshin gida: sau da yawa 192.168.x.x ko 10.x.x.x", "DHCP ne ke raba su; router shi ne gateway"] },
            { title: "Alamar 169.254", bullets: ["Windows ta nuna 169.254.x.x", "Ba ta samu adireshi daga DHCP ba", "Ku duba waya ko Wi-Fi, sannan router"] },
            { title: "Kayan aiki biyu", bullets: ["ipconfig: yana nuna adireshinku da gateway", "ping: yana gwada ko wata na'ura tana amsawa", "Ku fara ping na gateway, sannan shafin intanet"] },
            { title: "Ku yi atisaye lafiya", bullets: ["A kwamfutarku da network ɗinku kaɗai", "An hana umarnin? Ku yi amfani da saitunan network"] }
          ],
          sources: [CORE1],
          tryIt: "A kwamfutarku, ku bi matakan. Ku rubuta adireshin IP ɗinku da default gateway, sannan ku yi ping na gateway da ping na comptia.org. Ku rubuta \"yana aiki\" ko \"ba ya aiki\" ga kowanne. Ku ajiye wannan takardar don aikinku na ƙarshe.",
          youCanNow: "nemo adireshin IP ɗinku da default gateway, gwada haɗi da ping, da faɗin ma'anar adireshin 169.254.",
          quickCheck: [
            { objective: "O2", q: "Kwamfutar tafi-da-gidanka ta Windows ta nuna adireshin IP 169.254.20.5. Me wannan yake faɗa muku?", options: ["Intanet yana da sauri sosai", "Ba ta samu adireshi daga DHCP ba", "Kwamfutar tana da ƙwayar cuta (virus)", "Allon yana buƙatar canji"], answer: 1, why: "Adireshin 169.254 yana nufin na'urar ba ta kai ga DHCP ba, don haka ku duba haɗin da router." },
            { objective: "O2", q: "Wane umarni ne ke nuna adireshin IP da default gateway na kwamfutar Windows?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "ipconfig yana nuna saitunan network ɗinku; ping yana gwada haɗi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Aikin, hardware da network",
        questions: [
          { objective: "O6", q: "Wace jarabawa ce take ƙunshe da tsarin aiki da tsaro?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Duka biyun suna ƙunshe da hardware kawai", "Babu ɗaya"], answer: 1, why: "Core 2 tana ƙunshe da tsarin aiki, tsaro, gyara matsalolin software da hanyoyin aiki." },
          { objective: "O1", q: "Mai amfani ya ce kwamfutar tana yin jinkiri idan shirye-shirye da yawa suna buɗe. Wane sashe ne mai yiwuwa sanadi?", options: ["RAM bai isa ba", "Kofar HDMI", "Madannai (keyboard)", "Wayar allo"], answer: 0, why: "RAM yana riƙe shirye-shiryen da ke buɗe; idan ya yi kaɗan kwamfutar tana jinkiri idan da yawa suna buɗe." },
          { objective: "O1", q: "Wane sashe ne yake yin babban tunani da gudanar da shirye-shirye?", options: ["Na'urar wuta", "Kofar Ethernet", "Hard drive", "CPU"], answer: 3, why: "CPU (processor) yana gudanar da shirye-shirye da yin lissafi." },
          { objective: "O2", q: "Mene ne default gateway?", options: ["Shafin intanet mafi sauri", "Wani nau'in waya", "Adireshin router, hanyar fita zuwa intanet", "Kalmar sirrin kwamfutar"], answer: 2, why: "Default gateway shi ne router da ke haɗa network ɗinku da intanet." },
          { objective: "O2", q: "Kun yi ping na gateway ɗinku kuma kun sami amsoshi, amma ping na shafin intanet bai yi aiki ba. A ina matsalar ta fi yiwuwa?", options: ["Tsakanin router da intanet", "A cikin RAM na kwamfutar", "A madannai", "A allo"], answer: 0, why: "Kwamfutar tana kai wa router, don haka matsalar tana bayan router: haɗin intanet." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsarin aiki, gyara matsala da shirinku",
      lessons: [
        {
          title: "Kayan aikin tsarin aiki da kuke amfani da su kullum",
          objectives: ["O3"],
          minutes: 5,
          goal: "Nemo sigar tsarin, wurin ajiya da ya rage, shirye-shiryen da ke aiki da yanayin sabuntawa a kwamfutarku.",
          text: [
            "Tsarin aiki (operating system, OS) shi ne babban shirin da ke gudanar da kwamfuta: Windows, macOS, Linux, ko a waya Android da iOS. A+ Core 2 tana sa ran ku iya kewaya cikin waɗannan.",
            "A Windows: Settings > System > About yana nuna sigar. Settings > System > Storage yana nuna wurin da ya rage. Task Manager (ku danna Ctrl + Shift + Esc) yana nuna shirye-shiryen da ke aiki da yadda CPU da memory ke aiki tuƙuru; kuna iya rufe shirin da ya daskare a can. Settings > Windows Update yana nuna ko akwai sabuntawa da ke jira.",
            "A Mac: Apple menu > About This Mac yana nuna sigar. Activity Monitor (ku nemo shi da Spotlight) yana nuna shirye-shiryen da ke aiki. System Settings > General > Software Update yana nuna sabuntawa. Wurin ajiya yana ƙarƙashin System Settings > General > Storage.",
            "Kyawawan halaye na tsaro suna cikin aikin: ku saka sabuntawa, ku bar antivirus da ke cikin kwamfutar a kunne (Microsoft Defender a Windows), ku yi amfani da asusu na yau da kullum (ba na admin ba) don aikin kullum, kuma ku kulle allo idan za ku tashi (maɓallin Windows + L a Windows)."
          ],
          steps: ["Ku nemo sunan OS da sigarsa.", "Ku nemo yawan wurin ajiya da ya rage.", "Ku buɗe Task Manager ko Activity Monitor ku nemo shirin da ya fi amfani da memory.", "Ku duba sabuntawa.", "Ku kulle allonku, sannan ku buɗe shi."],
          words: [["Tsarin aiki (OS)", "babban software da ke gudanar da kwamfuta ko waya, kamar Windows ko macOS."], ["Task Manager", "kayan aikin Windows da ke nuna shirye-shiryen da ke aiki kuma yana bar ku rufe wanda ya daskare."], ["Activity Monitor", "kayan aikin Mac da ke nuna shirye-shiryen da ke aiki."], ["Asusun admin", "asusu da zai iya saka software da canja saituna. Aikin kullum ya kamata ya yi amfani da asusu na yau da kullum (standard)."]],
          slides: [
            { title: "Ku san tsarin aiki", bullets: ["Windows, macOS, Linux; Android da iOS a waya", "Core 2 tana gwada dukkansu"] },
            { title: "Kayan aikin Windows", bullets: ["Settings > System > About: siga", "Settings > System > Storage: wurin da ya rage", "Ctrl + Shift + Esc: Task Manager", "Settings > Windows Update"] },
            { title: "Kayan aikin Mac", bullets: ["Apple menu > About This Mac", "Activity Monitor", "System Settings > General > Software Update"] },
            { title: "Halayen tsaro", bullets: ["Ku saka sabuntawa; ku bar antivirus a kunne", "Aikin kullum a asusu na yau da kullum (standard)", "Ku kulle allo idan za ku tashi"] }
          ],
          sources: [CORE2],
          tryIt: "A kwamfutarku, ku rubuta: sunan OS da sigarsa, wurin ajiya da ya rage, shirin da ya fi amfani da memory yanzu, da ko akwai sabuntawa da ke jira. Ku ƙara wannan a takardar network ɗinku daga Darasi na 3. Yanzu kuna da yawancin sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "amfani da kayan aikin da ke cikin kwamfuta don duba sigarta, wurin ajiya, shirye-shiryen da ke aiki da sabuntawa.",
          quickCheck: [
            { objective: "O3", q: "Wani shiri ya daskare a Windows. Wane kayan aiki ne zai bar ku rufe shi?", options: ["Task Manager", "Paint", "Recycle Bin", "Na'urar lissafi (calculator)"], answer: 0, why: "Task Manager yana nuna shirye-shiryen da ke aiki kuma yana iya rufe wanda ya daskare." },
            { objective: "O3", q: "Wace al'ada ce ta fi aminci don aikin kullum?", options: ["Amfani da asusun admin koyaushe", "Kashe sabuntawa", "Amfani da asusu na yau da kullum da barin sabuntawa a kunne", "Kashe antivirus don ƙara sauri"], answer: 2, why: "Asusu na yau da kullum da sabuntawa na yanzu suna rage ɓarna idan wani abu ya lalace." }
          ]
        },
        {
          title: "Hanyar gyara matsala mai matakai shida",
          objectives: ["O4"],
          minutes: 6,
          goal: "Bin matakai shida na gyara matsala na CompTIA kan wata matsala, a jere.",
          text: [
            "Ƙwararrun ma'aikata ba sa yin hasashe kawai. Suna bin hanya. Manufofin A+ suna amfani da matakai shida: 1. Gane matsalar. 2. Kafa ra'ayin sanadin da ya fi yiwuwa (ku tambayi abubuwa masu sauƙi da farko). 3. Gwada ra'ayin don nemo sanadin. 4. Yi shirin aiki ku aiwatar da gyaran. 5. Tabbatar cewa dukan tsarin yana aiki kuma, idan zai taimaka, ku ɗauki matakai don hana ta sake faruwa. 6. Rubuta abin da kuka gano, abin da kuka yi da sakamakon.",
            "Mataki na 1 yana nufin yi wa mai amfani tambayoyi: Me ya faru? Yaushe ya fara? Shin wani abu ya canja? Akwai saƙon kuskure (error)? Ku yi ajiyar bayanai masu muhimmanci (backup) kafin ku canja komai.",
            "Mataki na 2 yana nufin fara da sanadai masu sauƙi: Shin an saka shi a wuta? Wi-Fi yana kunne? An sake kunna shi? Idan ra'ayinku na farko bai yi daidai ba, ku yi sabo ku sake gwadawa, ko ku miƙa (escalate) ga babban ma'aikaci.",
            "Misali: firinta ba ya bugawa. Ra'ayi: ba ya kan layi (offline). Gwaji: allon firintan yana nuna takarda ta maƙale. Gyara: a cire takardar da aka maƙale lafiya. Tabbatarwa: a buga shafin gwaji. Rubutawa: \"Takarda ta maƙale a tray 2, an cire, an buga shafin gwaji.\""
          ],
          steps: ["Gane matsalar: ku yi tambayoyi, ku yi backup na bayanai.", "Kafa ra'ayin sanadin da ya fi yiwuwa: ku fara da abubuwa masu sauƙi.", "Gwada ra'ayin. Bai yi daidai ba? Ku yi sabon ra'ayi ko ku miƙa.", "Ku yi shiri ku aiwatar da gyaran.", "Ku tabbatar yana aiki kuma ku hana sake faruwa idan kuna iya.", "Ku rubuta abin da kuka gano, ayyuka da sakamako."],
          words: [["Gyara matsala (troubleshooting)", "nemo da gyara sanadin matsala mataki-mataki."], ["Ra'ayin sanadin da ya fi yiwuwa", "mafi kyawun tsammaninku game da abin da ke jawo matsalar."], ["Miƙawa (escalate)", "ba da matsala ga wanda ke da ƙarin ƙwarewa ko iko."], ["Rubutawa (document)", "rubuta abin da kuka gano da abin da kuka yi, yawanci a cikin tikiti."]],
          slides: [
            { title: "Matakai shida", bullets: ["1 Gane  2 Ra'ayi  3 Gwaji", "4 Shiri da gyara  5 Tabbatarwa  6 Rubutawa"] },
            { title: "Mataki na 1: gane", bullets: ["Me ya faru? Yaushe? Me ya canja?", "Akwai saƙon kuskure?", "Ku yi backup kafin canje-canje"] },
            { title: "Matakai na 2 da na 3", bullets: ["Ku tambayi abubuwa masu sauƙi: wuta, waya, sake kunnawa", "Ra'ayi bai yi daidai ba? Ku gwada sabo ko ku miƙa"] },
            { title: "Matakai na 4 zuwa 6", bullets: ["Ku gyara, sannan ku duba dukan tsarin", "Ku hana sake faruwa idan kuna iya", "Ku rubuta komai"] }
          ],
          sources: [CORE1],
          tryIt: "Ku zaɓi matsala ta gaske da kuka taɓa samu (kwamfuta mai jinkiri, babu Wi-Fi, wayar da ba ta caji) ko ku yi amfani da: \"Mai amfani ba zai iya haɗuwa da Wi-Fi ba bayan ya koma wani tebur.\" Ku rubuta dukkan matakai shida a takarda, da abin da za ku tambaya, ku duba, ku rubuta a kowane mataki.",
          youCanNow: "bin matakai shida na gyara matsala kan wata matsala da rubuta kowanne.",
          quickCheck: [
            { objective: "O4", q: "Mene ne mataki na FARKO na gyara matsala?", options: ["Canja hard drive", "Rubuta gyaran", "Gane matsalar", "Tabbatar cewa dukan tsarin yana aiki"], answer: 2, why: "Dole ku fahimci matsalar kafin ku yi tsammanin sanadi." },
            { objective: "O4", q: "Kun gyara matsalar. Me yake zuwa kafin ku rubuta ta?", options: ["Tabbatar cewa dukan tsarin yana aiki", "Rufe tikitin ba tare da faɗa wa mai amfani ba", "Yin sabon ra'ayi", "Yin backup na bayanai a karon farko"], answer: 0, why: "Mataki na 5 shi ne tabbatar cewa komai yana aiki; mataki na 6 shi ne rubutawa." }
          ]
        },
        {
          title: "Tikiti, magana da masu amfani, da shirin karatunku na A+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Rubuta cikakken tikitin help desk da shirin karatu da jarabawa na A+ mai ranaku.",
          text: [
            "Tikiti shi ne bayanin rubuce na matsala ɗaya. Tikiti mai kyau yana da: sunan mai amfani da yadda za a same shi (a aiki na gaske, daga tsarin kamfanin), na'urar, gajeren taƙaitaccen bayani, cikakkun bayanai da duk wani saƙon kuskure, fifiko (priority, yadda yake da gaggawa), matakan da aka ɗauka, da sakamakon. Ku rubuta shi ta yadda wani ma'aikaci zai iya ɗaukarsa ya fahimta.",
            "Yadda kuke magana yana da muhimmanci kamar gyaran. Ku saurara ba tare da katse magana ba, ku maimaita matsalar ga mai amfanin, ku yi amfani da kalmomi masu sauƙi, kada ku taɓa ɗora wa mai amfani laifi, ku faɗi lokacin da za ku ba shi labari, kuma ku tabbatar da shi cewa an gyara kafin ku rufe tikitin. Ku kiyaye bayanansa a sirri.",
            "Yanzu ku shirya jarabawarku. Ku yi amfani da nauyin sassan da kuka rubuta a Darasi na 1. Ku zaɓi ranar da kuke nufi don kowace jarabawa. Ku ba manyan sassa ƙarin makonni. Ku yi amfani da atisaye kyauta: takardar manufofin jarabawa (exam objectives) ta CompTIA kyauta, kwamfutarku, da gwaje-gwajen ilimi da ke nan. Mutane da yawa suna karatu awa 5 zuwa 10 a mako; ku zaɓi abin da ya dace da rayuwarku ku rubuta shi.",
            "Kafin ku yi rajista, ku duba shafin hukuma don farashin yanzu, duk wani shirin rangwame da hanyoyin zana jarabawa. Cibiyoyin aiki (workforce centers), shirye-shiryen tsoffin sojoji da shirye-shiryen masu dawowa gida wani lokaci suna taimakawa da kuɗin jarabawa, don haka ku tambayi naku."
          ],
          steps: ["Tikiti: ku cike mai amfani, na'ura, taƙaitaccen bayani, cikakkun bayanai, fifiko, matakan da aka ɗauka da sakamako.", "Amsa: ku gode masa, ku faɗi abin da kuka gano da kalmomi masu sauƙi, ku faɗi abin da zai biyo baya da lokacinsa.", "Shiri: ku rubuta ranar da kuke nufi don Core 1 da Core 2.", "Ku jera kowane sashe da nauyinsa da makonnin da kuka ba shi.", "Ku rubuta awannin karatunku na mako-mako da inda za ku yi karatu.", "Ku duba shafin hukuma don farashi da hanyoyin zana jarabawa; ku tambayi shirin yankinku game da taimakon kuɗi."],
          words: [["Tikiti (ticket)", "bayanin rubuce na buƙatar taimako ɗaya, daga farko har ƙarshe."], ["Fifiko (priority)", "yadda tikiti yake da gaggawa, sau da yawa low, medium, high ko critical."], ["Shirin karatu", "jadawali na rubuce na abin da za ku karanta, yaushe, da ranar jarabawarku."]],
          slides: [
            { title: "Cikakken tikiti", bullets: ["Mai amfani, na'ura, taƙaitaccen bayani, cikakkun bayanai, saƙon kuskure", "Fifiko, matakan da aka ɗauka, sakamako", "Wani ma'aikaci zai iya ɗaukarsa"] },
            { title: "Magana da masu amfani", bullets: ["Ku saurara ku maimaita matsalar", "Kalmomi masu sauƙi, babu ɗora laifi", "Ku faɗi lokacin da za ku ba da labari; ku tabbatar da gyaran"] },
            { title: "Shirinku na A+", bullets: ["Ranar da kuke nufi don Core 1 da Core 2", "Ƙarin makonni ga manyan sassa", "Awannin mako-mako a rubuce"] },
            { title: "Kafin ku yi rajista", bullets: ["Ku duba comptia.org don farashi da hanyoyin zana jarabawa", "Ku tambayi shirye-shiryen aiki, tsoffin sojoji ko masu dawowa gida"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Aikin ƙarshe: ku rubuta tikitin matsalarku ta Darasi na 5 da kowane fili da matakai shida, tare da amsa mai jimloli biyu ga mai amfanin. Ku sa takardar kwamfutarku daga Darasi na 3 da na 4 a shafi ɗaya. Sannan ku rubuta shirin karatu da jarabawarku na A+: ranakun da kuke nufi don Core 1 da Core 2, kowane sashe da nauyinsa, da awannin ku na mako-mako.",
          youCanNow: "rubuta tikitin taimako mai sarari, amsa wa mai amfani cikin ladabi, da bin shirinku mai ranaku zuwa jarabawar A+ guda biyu.",
          quickCheck: [
            { objective: "O5", q: "Wane taƙaitaccen bayanin tikiti ne ya fi amfani?", options: ["\"Ya lalace.\"", "\"Mai amfani bai iya kwamfuta ba.\"", "\"A taimaka!!\"", "\"Kwamfutar tafi-da-gidanka ba ta haɗuwa da Wi-Fi na ofis tun da aka koma tebur 14; kuskure: babu intanet.\""], answer: 3, why: "Yana faɗin na'urar, matsalar, lokacin da ta fara da kuskuren, ba tare da ɗora laifi ba." },
            { objective: "O6", q: "Core 1 tana da sashe mai nauyin 28% da wani mai 11%. Yaya ya kamata ku shirya?", options: ["Ku ba su lokaci daidai", "Ku ba sashen 28% ƙarin lokacin karatu", "Ku tsallake sashen 28%", "Ku karanta sashen 11% kawai"], answer: 1, why: "Nauyi mafi girma yana nufin ƙarin tambayoyi, don haka ya cancanci ƙarin lokacin karatu." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsarin aiki, gyara matsala da shirinku",
        questions: [
          { objective: "O3", q: "A ina za ku nemo sigar Windows?", options: ["Task Manager > Startup", "Recycle Bin", "Settings > System > About", "Menu na firinta"], answer: 2, why: "Settings > System > About yana nuna nau'in Windows da sigarta." },
          { objective: "O4", q: "Allon kwamfuta (monitor) baƙi ne. Wane ra'ayi ya kamata ku fara gwadawa?", options: ["Motherboard ta lalace", "Wayar wuta ko ta hoto ta saku", "Ana buƙatar sake saka tsarin aiki", "CPU yana da jinkiri sosai"], answer: 1, why: "Ku tambayi abubuwa masu sauƙi: waya da wuta su ne aka fi samu kuma mafi sauƙin dubawa." },
          { objective: "O4", q: "Ra'ayinku na farko ya zama ba daidai ba. Me za ku yi?", options: ["Ku yi sabon ra'ayi ku gwada shi, ko ku miƙa", "Ku rufe tikitin", "Ku faɗa wa mai amfani ba za a iya gyarawa ba", "Ku canja kwamfutar"], answer: 0, why: "Hanyar tana komawa baya: sabon ra'ayi, ko miƙawa idan kun makale." },
          { objective: "O5", q: "Mai amfani ya damu cewa kwamfutarsa ta lalace kafin wa'adin aiki. Mene ne amsa ta farko mafi kyau?", options: ["\"Lallai kai ne ka lalata ta.\"", "\"Wannan ba matsalata ba ce.\"", "Ku yi amfani da kalmomin fasaha don ya amince da ku", "Ku saurara, ku maimaita matsalar, ku faɗi abin da za ku yi a gaba"], answer: 3, why: "Sauraro, tabbatarwa da faɗin mataki na gaba mai sarari suna kwantar da hankalin mai amfani kuma suna ba ku bayanan gaskiya." },
          { objective: "O6", q: "Wanne ne sashe na cikakken shirin karatun A+?", options: ["Ranakun da ake nufi don jarabawar biyu da awannin karatu na mako-mako", "Sunan takardar shaidar kawai", "Jerin kwamfutocin da kuke so", "Lambar Social Security ɗinku"], answer: 0, why: "Ranaku, sassa da awannin mako-mako suna mayar da buri zuwa shirin da za ku iya bi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Taimakon IT (Shirin Jarabawar CompTIA A+)",
    questions: [
      { objective: "O6", q: "Wane ne yake bayar da takardar shaidar A+?", options: ["Wannan kwas", "CompTIA, idan kun ci jarabawar biyu", "Kamfanin intanet ɗinku", "Kowane mai ɗaukar aiki"], answer: 1, why: "CompTIA ce ke bayar da A+; kwas ɗin yana shirya ku." },
      { objective: "O6", q: "Lambar jarabawa 220-1201 ta:", options: ["Security+ ce", "A+ Core 2 ce", "A+ Core 1 ce", "Network+ ce"], answer: 2, why: "220-1201 ita ce Core 1; 220-1202 ita ce Core 2." },
      { objective: "O6", q: "Tambayar aiki (performance-based) tana neman ku:", options: ["Yi ɗan ƙaramin aiki da hannu", "Rubuta maƙala", "Yi magana da mutum", "Kawo kwamfutarku"], answer: 0, why: "Tambayoyin aiki suna sa ku yi wani abu, kamar shirya ko gyara saiti." },
      { objective: "O1", q: "Wane sashe ne memory na ɗan lokaci da ke gogewa idan wuta ta ɗauke?", options: ["SSD", "HDD", "Na'urar wuta", "RAM"], answer: 3, why: "RAM yana riƙe aikin da ke buɗe ne kawai yayin da kwamfutar take a kunne." },
      { objective: "O1", q: "Mene ne gaskiya game da SSD idan aka kwatanta da HDD?", options: ["Yana da faifai masu juyawa", "Yawanci ya fi sauri kuma ba shi da sassa masu motsi", "Yana ajiye waƙoƙi ne kawai", "Wani nau'in allo ne"], answer: 1, why: "SSD yana amfani da ƙananan chip marasa sassa masu motsi, don haka ya fi sauri." },
      { objective: "O1", q: "Wace kofar haɗi ce ke haɗa kwamfuta da network ta waya?", options: ["Ethernet", "HDMI", "Kofar belun kunne", "USB-C don caji kawai"], answer: 0, why: "Ethernet ita ce kofar network ta waya; HDMI don allo ce." },
      { objective: "O1", q: "Wanne ne ma'aikaci kada ya TAƁA buɗewa?", options: ["Akwatin kwamfutar tebur, bayan cire ta daga wuta", "Menu na saitunan kwamfutar tafi-da-gidanka", "Na'urar wuta (power supply)", "Tikiti"], answer: 2, why: "Na'urorin wuta suna riƙe wutar da aka ajiye mai haɗari; ana canja su, ba a buɗe su." },
      { objective: "O2", q: "Me DHCP yake yi?", options: ["Yana buga takardu", "Yana raba adireshin IP da kansa", "Yana hana ƙwayoyin cuta (virus)", "Yana cajin batir"], answer: 1, why: "DHCP, yawanci a cikin router, yana ba na'urori adireshin IP." },
      { objective: "O2", q: "Wane umarni ne ke gwada ko wata na'ura tana amsawa ta network?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "ping yana aika saƙon gwaji kuma yana nuna ko amsoshi sun dawo." },
      { objective: "O2", q: "Wane adireshi ne ya fi yiwuwa ya zama adireshin network na gida na yau da kullum?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x jeri ne da aka saba a gida; 169.254 yana nufin DHCP bai yi aiki ba, kuma 999 ba daidai ba ne." },
      { objective: "O3", q: "Waɗanne maɓallai ne ke buɗe Task Manager a Windows?", options: ["Ctrl + P", "Ctrl + Shift + Esc", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Shift + Esc yana buɗe Task Manager; Windows + L yana kulle allo." },
      { objective: "O3", q: "A Mac, wane kayan aiki ne ke nuna shirye-shiryen da ke aiki?", options: ["Activity Monitor", "Notes", "Photos", "Calendar"], answer: 0, why: "Activity Monitor shi ne Task Manager na Mac." },
      { objective: "O3", q: "Za ku tashi daga teburinku a wurin aiki. Me za ku yi?", options: ["Ku bar allo a buɗe", "Ku kashe antivirus", "Ku kulle allo", "Ku shiga a matsayin admin"], answer: 2, why: "Kulle allo yana hana wasu amfani da asusunku." },
      { objective: "O4", q: "Ku jera waɗannan: Gwada ra'ayin, Gane matsalar, Kafa ra'ayi.", options: ["Ra'ayi, Gane, Gwaji", "Gwaji, Ra'ayi, Gane", "Gane, Gwaji, Ra'ayi", "Gane, Ra'ayi, Gwaji"], answer: 3, why: "Ku gane matsalar, ku kafa ra'ayi, sannan ku gwada shi." },
      { objective: "O4", q: "Me ya kamata ku yi kafin ku canja wani abu a kwamfutar mai amfani?", options: ["Ku yi backup na bayanai masu muhimmanci", "Ku goge tsofaffin fayiloli", "Ku canja kalmar sirrinsa", "Ku sake saka tsarin"], answer: 0, why: "Yin backup da farko yana kare bayanan mai amfani idan gyara bai yi daidai ba." },
      { objective: "O4", q: "Mene ne mataki na ƘARSHE na hanyar gyara matsala?", options: ["Gwada ra'ayin", "Rubuta abin da aka gano, ayyuka da sakamako", "Gane matsalar", "Sake kunna kwamfutar"], answer: 1, why: "Mataki na 6 shi ne rubutawa, don wasu su koya daga ciki kuma bayanin ya cika." },
      { objective: "O5", q: "Wanne ne ya kamata ya kasance a cikin tikitin help desk?", options: ["Ra'ayinku game da mai amfanin", "Barkwanci game da matsalar", "Matakan da aka ɗauka da sakamakon", "Bayanan bankin mai amfanin"], answer: 2, why: "Matakai da sakamako suna bar kowane ma'aikaci ya bi abin da ya faru." },
      { objective: "O5", q: "Yaushe ya kamata ku rufe tikiti?", options: ["Da zarar kun fara aiki", "Bayan mai amfani ya tabbatar an gyara", "Idan mai amfani bai amsa ba har awa ɗaya", "Kafin ku gwada gyaran"], answer: 1, why: "Tabbatarwa da mai amfani yana tabbatar cewa an magance matsalar da gaske." },
      { objective: "O5", q: "Wace amsa ce ta fi kyau ga mai amfani?", options: ["\"DHCP lease ɗinka ya kasa, a fili yake.\"", "\"Ka sake yin kuskure.\"", "\"Ka tambayi wani.\"", "\"Kwamfutarka ba ta samu adireshin network ba. Na sake saita ta kuma yanzu tana aiki. Don Allah ka kira idan ya sake faruwa.\""], answer: 3, why: "Tana amfani da kalmomi masu sauƙi, babu ɗora laifi, kuma tana faɗa wa mai amfani abin da zai yi a gaba." },
      { objective: "O6", q: "A ina ya kamata ku duba farashin A+ na yanzu da hanyoyin zana jarabawa kafin rajista?", options: ["Shafin intanet na hukuma na CompTIA", "Sharhi a kafofin sada zumunta", "Tsohon littafi", "Tallar da ke tasowa (pop-up)"], answer: 0, why: "Shafin hukuma ne kaɗai yake da farashi, sigogi da hanyoyi na yanzu." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Takardar kwamfuta", objective: "O3", notYet: "Babu sigar OS, wurin ajiya da ya rage ko sabuntawa.", meets: "Ta jera OS da sigarsa, wurin ajiya da ya rage, shirin da ya fi amfani da memory da yanayin sabuntawa.", exceeds: "Ta kuma jera processor da RAM kuma ta faɗi abin da suke nufi ga sauri." },
      { name: "Duba network", objective: "O2", notYet: "Babu adireshin IP ko gateway, ko ba a gwada ping ba.", meets: "Ta rubuta adireshin IP da gateway da sakamakon ping na gateway da na shafin intanet.", exceeds: "Ta bayyana abin da sakamakon zai nufa idan ping ɗaya bai yi aiki ba, har da adireshin 169.254." },
      { name: "Matakan gyara matsala", objective: "O4", notYet: "Wasu matakai sun ɓace ko ba a jere suke ba, ko gyaran hasashe ne kawai.", meets: "Dukkan matakai shida a jere, da abin da aka tambaya, aka gwada da aka yi.", exceeds: "Ya haɗa da ra'ayi na biyu ko wurin miƙawa da hanyar hana sake faruwa." },
      { name: "Tikiti da amsa", objective: "O5", notYet: "Tikitin bai da sarari ko amsar tana ɗora wa mai amfani laifi ko tana amfani da kalmomin fasaha masu wuya.", meets: "Kowane filin tikiti a cike yake; amsar tana da ladabi, a sarari kuma tana faɗin abin da zai biyo baya.", exceeds: "Wani mutum zai iya bin tikitin ba tare da yin wata tambaya ba." },
      { name: "Shirin karatu da jarabawa", objective: "O6", notYet: "Babu ranaku, ko wasu sassa sun ɓace.", meets: "Ranakun da ake nufi don Core 1 da Core 2, kowane sashe da nauyinsa, awannin mako-mako.", exceeds: "Shirin yana ba sassa masu nauyi ƙarin makonni kuma yana faɗin inda za a duba farashi da samun taimakon kuɗi." },
      { name: "Kalmomin hardware", objective: "O1", notYet: "An faɗi sunayen sassan hardware ba daidai ba a takarda ko tikiti.", meets: "An faɗi sunayen sassa da kofofin haɗi daidai.", exceeds: "Ya haɗa alama da sashen da ya fi yiwuwa, misali jinkiri da shirye-shirye da yawa a buɗe da RAM kaɗan." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi rajista ko suka ci A+ Core 1 ko Core 2 cikin watanni 6 (binciken biyo baya)",
      "Masu koyo da suka nemi ko suka fara aikin taimakon IT, help desk ko ma'aikacin fasaha cikin watanni 6",
      "Shirye-shiryen abokan aiki (cibiyoyin aiki, hidimomin tsoffin sojoji da na masu dawowa gida) sun ce masu koyo sun shiga horon IT ko ayyuka"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfutar Windows ko Mac ɗaya mai intanet (ta kanku ko ta ɗakin karatu; ana iya hana command prompt a wasu kwamfutocin da ake rabawa)",
      "Takarda da alƙalami, ko takardar kwamfuta, don rubuce-rubuce, tikiti da shiri",
      "Shafukan hukuma na CompTIA A+ Core 1 da Core 2",
      "Kusan minti 90 gaba ɗaya, a gajerun zama, tare da ci gaba da lokacin karatu don jarabawar"
    ],
    facilitatorNotes: [
      "Ku yi gwajin farko tare; ku yi amfani da sakamakon don yanke waɗanne darussa ke buƙatar ƙarin lokaci.",
      "Idan kuna da tsohuwar kwamfuta da aka cire daga wuta, ku nuna sassan da akwatin a buɗe; masu koyo ba sa buɗe na'urori da kansu sai dai idan an horar da su kuma ana kula da su.",
      "A ɗakin kwamfuta, ku duba cewa command prompt yana aiki kafin Darasi na 3, ko ku nuna shafin saitunan network a maimakon haka.",
      "Ku haɗa masu koyo bibbiyu don su yi wasan kwaikwayon mai amfani da ma'aikaci a Darasi na 6, sannan su musanya.",
      "Ku tunatar da masu koyo cewa wannan kwas yana shirya su ne kuma ba ya bayar da A+; ku taimaka musu su nemo shirye-shiryen yankinsu da ke taimakawa da kuɗin jarabawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
