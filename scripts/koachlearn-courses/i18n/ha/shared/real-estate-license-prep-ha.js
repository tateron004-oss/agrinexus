"use strict";

// Koach Learn course, Hausa (ha) translation of shared/real-estate-license-prep.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const SRC = {
  arello: { name: "ARELLO (Ƙungiyar jami'an dokokin lasisin kadarori): Jerin hukumomin da ke kula da lasisi", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "Ma'aikatar Kadarori ta California (DRE): Sharuɗɗan lasisin salesperson", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Hukumar Kadarori ta Texas (TREC): Yadda ake zama sales agent", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: Bayani game da Fair Housing Act (dokar adalci a harkar gidaje)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: Mene ne Loan Estimate?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: Mene ne Closing Disclosure?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Sayen gida (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-ha",
  lang: "ha",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Shiri don Jarabawar Lasisin Dillancin Gidaje da Filaye",
  skills: "Nemo matakan lasisi na jiharku, Amfani da kalmomin kadara da mallaka, Bin dokokin wakilci da adalci a harkar gidaje, Bin kwangila har zuwa kammala ciniki, Warware lissafin jarabawar kadarori, Yin tsarin karatu da jarabawa mai ranaku",
  outcome: "nemo matakan lasisin dillancin kadarori na jiharku a shafin hukuma, bayyana muhimman abubuwan da jarabawar ke gwadawa (kadara, wakilci, adalci a harkar gidaje, kwangila da kammala ciniki), warware lissafin da aka saba yi a jarabawar, da bin tsarin karatu da jarabawa mai ranaku da kuka yi da kanku.",
  about: [
    "Wannan kwas ɗin na manya ne da ke son zama dillalin gidaje da filaye mai lasisi (ana kiransa salesperson, ko sales agent a wasu jihohi): masu canja sana'a, masu fara ƙaramin kasuwanci, tsoffin sojoji, iyaye da ke komawa aiki, da duk wanda ke son aikin da zai iya girma a ciki. Dillalai da yawa suna aiki a matsayin 'yan kwangila masu zaman kansu a ƙarƙashin broker mai lasisi, don haka ya dace da 'yan kasuwa ma.",
    "A Amurka, kowace jiha ce ke ba dillalan kadarori lasisi. Hukumar jihar ce ke tsara azuzuwan da ake buƙata kafin lasisi, jarabawa, binciken baya (background check) da kuɗaɗe. Wannan kwas yana SHIRYA ku ne; ba ya ba da lasisi, kuma ba ya maye gurbin azuzuwan da jiharku ta amince da su. Kowane darasi yana nuna muku inda za ku duba dokokin jiharku.",
    "Za ku koyi muhimman abubuwan da yawancin jarabawowin jihohi ke gwadawa, ku yi atisayen lissafi da lambobin ƙirƙira, kuma ku gama da tsarin karatu da jarabawa naku mai ranaku. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin \"Gwada yanzu\" a takarda ko a waya. Wannan kwas yana koyar da yadda harkar kadarori take aiki; ba ya ba da shawara kan sayen kadara ko zuba jari."
  ],
  finalTask: "Ku yi Tsarin Karatu da Jarabawar Lasisin Kadarori naku (shafi ɗaya ko biyu): (1) hukumar jiharku, shafin hukuma da kuka yi amfani da shi, da matakan da ya lissafa (shekaru, azuzuwan kafin lasisi, jarabawa, ɗaukar zanen yatsa ko binciken baya, broker mai ɗaukar nauyi), kowanne da ranar da kuke son cimmawa; (2) batutuwan da ke cikin jerin abubuwan jarabawar jiharku, tare da alamar batutuwa uku mafi rauni gare ku da shiri ga kowanne; (3) takardar dokoki shafi ɗaya kan ayyukan wakili, rukunoni bakwai da dokar tarayya ta kare a harkar gidaje, da sassan kwangila mai inganci; (4) tambayoyin lissafi biyar na atisaye (commission, loan-to-value, harajin kadara, proration, faɗin ƙasa) tare da nuna aikinku; (5) jadawalin karatu na kowane mako har zuwa ranar jarabawar da kuke so.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya a Amurka da ke shirin samun lasisin salesperson (sales agent) na jiha: masu canja sana'a, masu ƙananan kasuwanci, 'yan kasuwa, tsoffin sojoji, masu komawa aiki da matasa sama da shekaru 18. Wasu sun gama sakandare ko GED (takardar shaidar daidai da sakandare) kawai; wasu suna magana da Turanci a matsayin harshe na biyu.",
    startingPoint: "Suna iya karanta fom mai sauƙi kuma su yi lissafi na farko da na'urar lissafi. Yawancinsu ba su san wanda ke ba da lasisin dillalai a jiharsu ba, ko jerin matakan lasisi, ko kalmomin shari'a da jarabawar ke amfani da su (fee simple, easement, fiduciary, consideration, proration).",
    gap: "Mutane da yawa suna biyan kuɗin azuzuwa ko jarabawa ba tare da shiri ba, suna tsallake wani mataki (kamar zanen yatsa ko broker mai ɗaukar nauyi), ko suna faɗuwa a jarabawa saboda kalmomi da lissafi. Mai koyo da ya san matakan hukuma, muhimman abubuwa da lissafin jarabawar, kuma yana da tsari mai ranaku, ya fi yiwuwa sosai ya ci jarabawa ya fara aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 7 zuwa 8); ana bayyana kowace kalmar shari'a",
      "Na'urori: waya ko kwamfutar ɗakin karatu don karanta shafin hukuma na jiha; takarda, alƙalami da na'urar lissafi mai sauƙi don kowane aiki",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da lokacin aiki",
      "Dokoki sun bambanta a kowace jiha: ana duba awoyin karatu, tsarin jarabawa, makin cin jarabawa da kuɗaɗe a shafin hukumar jiha, ba a yin tsammani",
      "Wannan kwas yana shiryawa ne; ba ya maye gurbin azuzuwan kafin lasisi da jiha ta amince da su, kuma ba ya ba da lasisi",
      "Babu shawarar zuba jari, shari'a ko haraji; lissafin yana amfani da lambobin ƙirƙira don atisaye kawai"
    ],
    prerequisites: "Babu. Masu koyo da ke son sake tuna kaso (percentages) za su iya fara ɗaukar kwas ɗin \"Everyday Math\" (Lissafin Yau da Kullum)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ta amfani da shafin intanet na hukuma na hukumar kadarori ta jiharku", action: "lissafa matakan samun lasisin salesperson bisa tsarinsu", standard: "ba tare da tsallake wani mataki ba, kuma da sunan shafin hukuma" },
    { id: "O2", condition: "Idan aka ba ku gajeren bayani game da wata kadara ko yanayin mallaka", action: "gane kalmar kadarori da ta dace da shi", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O3", condition: "Idan aka ba ku wani labari game da abokin hulɗa (client) ko mai neman gida", action: "zaɓar matakin da ya bi ayyukan wakili da dokar adalci a harkar gidaje", standard: "kuna samun aƙalla 4 cikin 5 daidai, kuma kuna faɗin dokar" },
    { id: "O4", condition: "Idan aka ba ku samfurin tayin sayen gida", action: "duba cewa yana da sassan kwangila mai inganci, da jera matakan kammala ciniki bisa tsari", standard: "ba tare da wani sashe da ya ɓace ba, kuma lokutan takardun tarayya daidai" },
    { id: "O5", condition: "Idan aka ba ku tambayar lissafi irin ta jarabawa da na'urar lissafi", action: "lissafa commission, loan-to-value, harajin kadara, proration da faɗin ƙasa", standard: "kuna samun aƙalla 4 cikin 5 daidai, tare da nuna aikinku" },
    { id: "O6", condition: "Ta amfani da jerin abubuwan jarabawar jiharku da kalanda", action: "rubuta tsarin karatu da jarabawa mai ranaku", standard: "wanda ya ƙunshi kowane batu a jerin, da batutuwa uku mafi rauni gare ku" }
  ],
  chapters: [
    {
      name: "Babi na 1: Lasisin da muhimman abubuwa",
      lessons: [
        {
          title: "Yadda lasisin dillancin kadarori yake aiki a jiharku",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lissafa matakan jiharku na samun lasisin salesperson daga shafin hukuma.",
          text: [
            "Babu lasisin kadarori na ƙasa baki ɗaya a Amurka. Kowace jiha tana da hukumarta, wadda ake yawan kira real estate commission ko department of real estate. Ita ce ke yanke azuzuwa, jarabawa, binciken baya da kuɗaɗe. ARELLO, ƙungiyar jami'an dokokin lasisi, tana da jerin hukumomi da za ku iya amfani da shi don nemo taku.",
            "Matakan sun yi kama a yawancin jihohi: cika sharaɗin shekaru, gama azuzuwan kafin lasisi da jiha ta amince da su, nema, wuce binciken baya (sau da yawa da zanen yatsa), cin jarabawa, da aiki a ƙarƙashin broker mai lasisi. Jarabawowi da yawa suna da sashen ƙasa baki ɗaya da sashen dokokin jiha.",
            "Bayanan sun bambanta sosai. California tana neman kwasa-kwasai uku na matakin jami'a (Real Estate Principles, Real Estate Practice da ɗaya na zaɓi). Texas tana neman awoyi 180 na aji a kwasa-kwasai shida, zanen yatsa da 'yan sandan jiha, da jarabawowin da kamfanin Pearson ke gudanarwa. Jiharku tana iya bambanta, don haka koyaushe ku karanta shafin jiharku."
          ],
          steps: ["Ku nemo hukumar kadarori ta jiharku (ku yi amfani da jerin ARELLO ko ku nemi sunan jiharku tare da \"real estate commission\" ku nemi .gov).", "Ku buɗe shafin sabon lasisin salesperson ko sales agent.", "Ku rubuta kowane mataki bisa tsari: shekaru, azuzuwa, neman lasisi, binciken baya, jarabawa, broker.", "Ku rubuta adireshin shafin da ranar da kuka duba shi."],
          words: [["Hukumar kadarori (real estate regulator)", "ofishin jiha da ke ba dillalai lasisi kuma yana tabbatar da bin dokoki, kamar real estate commission."], ["Salesperson (sales agent)", "lasisin farko na dillancin kadarori; kuna aiki a ƙarƙashin broker."], ["Broker", "lasisi mafi girma; broker zai iya gudanar da ofishin kadarori kuma ya kula da salespeople."], ["Azuzuwan kafin lasisi (pre-license education)", "azuzuwan da jiha ta amince da su da dole ku gama kafin jarabawa ko lasisi."], ["Broker mai ɗaukar nauyi (sponsoring broker)", "broker da ya yarda zai kula da ku idan kun sami lasisi."]],
          slides: [
            { title: "Kowace jiha ce ke ba da lasisi", bullets: ["Babu lasisin kadarori na ƙasa baki ɗaya", "Hukumar jiharku ce ke tsara azuzuwa, jarabawa da kuɗaɗe", "ARELLO tana da jerin hukumomi"] },
            { title: "Matakai a yawancin jihohi", bullets: ["Sharaɗin shekaru da azuzuwan kafin lasisi", "Neman lasisi da binciken baya", "Jarabawa (sau da yawa sashen ƙasa da na jiha)", "Aiki a ƙarƙashin broker mai lasisi"] },
            { title: "Jihohi sun bambanta: misalai biyu", bullets: ["California: kwasa-kwasai uku na matakin jami'a", "Texas: awoyi 180 a kwasa-kwasai shida, jarabawowin Pearson", "Koyaushe ku karanta shafin jiharku"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Ku nemo hukumar kadarori ta jiharku. A takarda, ku lissafa kowane mataki na samun lasisin salesperson bisa tsari, tare da adireshin shafin da ranar yau. Ku zagaye duk matakin da ba ku sani ba a baya.",
          youCanNow: "nemo hukumar kadarori ta jiharku da lissafa matakan samun lasisin salesperson bisa tsari.",
          quickCheck: [
            { objective: "O1", q: "Wane ne ke yanke azuzuwa da jarabawa don lasisin salesperson na kadarori?", options: ["Wata hukumar kadarori ta ƙasa baki ɗaya", "Kamfanin kadarori da kuka shiga", "Hukumar kadarori ta jiharku", "Bankin da ke ba masu saye bashi"], answer: 2, why: "Kowace jiha ce ke ba da lasisin kadarori, kuma hukumar jihar ce ke tsara sharuɗɗan." },
            { objective: "O1", q: "Wani shafi da kuka samu ya ce azuzuwan suna ɗaukar awoyi 60. Me za ku yi?", options: ["Ku duba awoyin a shafin hukuma na hukumar jiharku", "Ku amince da shi idan yana da kyan gani", "Ku biya kuɗin aji mafi araha yanzu", "Ku tambayi aboki a wata jiha"], answer: 0, why: "Awoyin sun bambanta a kowace jiha kuma suna canjawa, don haka shafin hukuma na jiharku ne kaɗai abin amincewa." }
          ]
        },
        {
          title: "Kalmomin kadara da mallaka da jarabawar ke amfani da su",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gane kalmar da ta dace da wata kadara ko yanayin mallaka.",
          text: [
            "Real property (kadara mara motsi) ita ce ƙasa da duk abin da aka haɗa da ita, kamar gida, shinge ko bishiya, tare da haƙƙoƙin da ke tare da ita. Personal property (kayan mutum) abu ne mai motsi, kamar kujerar zama. Fixture (abin da aka kafa) a da kayan mutum ne amma yanzu an haɗa shi, kamar fanka a rufi ko injin wanke kwanoni da aka gina a ciki, don haka yawanci yana tafiya tare da gidan.",
            "Mallakar kadara mara motsi tana nufin riƙe tarin haƙƙoƙi (bundle of rights): mallaka, amfani, jin daɗi, hana wasu, da sayarwa ko barin ta ga wani. Fee simple ita ce mallaka mafi cika. Idan mutane biyu ko fiye sun mallaka tare, joint tenancy yawanci tana da haƙƙin wanda ya rage (right of survivorship: rabon wanda ya mutu yana komawa ga sauran masu mallaka), amma tenancy in common ba ta da shi.",
            "Deed (takardar canja mallaka) tana canja mallaka; title shi ne haƙƙin mallakar da kansa. Abubuwan da ke iyakance ko ɗora nauyi a kan kadara ana kiransu encumbrances: lien (iƙirarin kuɗi, kamar bashin gida ko harajin da ba a biya ba) da easement (haƙƙin amfani da ƙasar wani, kamar layin wutar lantarki). Ana bayyana ƙasa ta hanyoyi uku: metes and bounds, tsarin rectangular (government) survey, da lot and block daga taswirar da aka yi rajista."
          ],
          words: [["Real property (kadara mara motsi)", "ƙasa, abin da aka haɗa da ita, da haƙƙoƙin mallaka."], ["Fixture (abin da aka kafa)", "abin da aka haɗa da kadarar, don haka ana ɗaukarsa sashe nata."], ["Fee simple", "mallaka mafi cika."], ["Right of survivorship (haƙƙin wanda ya rage)", "idan ɗaya daga cikin masu mallaka tare ya mutu, rabonsa yana komawa ga sauran."], ["Encumbrance", "duk abin da ke iyakance ko ɗora nauyi a kan kadara, kamar lien ko easement."], ["Lien", "iƙirarin kuɗi na shari'a a kan kadara."], ["Easement", "haƙƙin amfani da wani sashe na ƙasar wani don wani takamaiman dalili."]],
          slides: [
            { title: "Kadara mara motsi da kayan mutum", bullets: ["Real property: ƙasa da abin da aka haɗa da ita", "Personal property: abubuwa masu motsi", "Fixture: an haɗa shi, don haka yawanci yana tsayawa"] },
            { title: "Mallaka", bullets: ["Tarin haƙƙoƙi: mallaka, amfani, jin daɗi, hana wasu, sayarwa", "Fee simple: mallaka mafi cika", "Joint tenancy tana da survivorship; tenancy in common ba ta da shi"] },
            { title: "Title da abubuwan da ke iyakance kadara", bullets: ["Deed tana canja mallaka; title shi ne mallakar", "Lien: iƙirarin kuɗi", "Easement: haƙƙin amfani da ƙasar wani"] },
            { title: "Bayyana ƙasa", bullets: ["Metes and bounds", "Rectangular (government) survey", "Lot and block daga taswirar da aka yi rajista"] }
          ],
          tryIt: "Ku yi katunan tunawa 10 a takarda: kalmar a gaba, da ma'anarta da kalmominku tare da misali ɗaya a baya (real property, personal property, fixture, fee simple, joint tenancy, tenancy in common, deed, title, lien, easement). Ku gwada kanku sau biyu.",
          youCanNow: "faɗin kalmar kadarori da ta dace da yanayin kadara da mallaka da aka saba gani.",
          quickCheck: [
            { objective: "O2", q: "Kamfanin wutar lantarki yana da haƙƙin ratsa layi ta bayan wani gida. Wannan shi ne:", options: ["Fixture", "Fee simple", "Personal property", "Easement"], answer: 3, why: "Easement haƙƙi ne na amfani da wani sashe na ƙasar wani don wani takamaiman dalili." },
            { objective: "O2", q: "'Yan'uwa mata biyu sun mallaki gida. Idan ɗaya ta mutu, rabonta yana komawa ga ɗayar kai tsaye. Wataƙila suna riƙe title a matsayin:", options: ["Tenants in common", "Joint tenants", "Masu haya", "Masu lien"], answer: 1, why: "Joint tenancy yawanci tana da haƙƙin wanda ya rage; tenancy in common ba ta da shi." }
          ]
        },
        {
          title: "Ayyukan wakili da adalci a harkar gidaje",
          objectives: ["O3"],
          minutes: 6,
          goal: "Zaɓi matakin da ya bi ayyukan wakili da dokar adalci a harkar gidaje a cikin wani labari.",
          text: [
            "Idan kuna wakiltar abokin hulɗa (client), ku ne wakilinsa (agent) kuma kuna da ayyukan amana (fiduciary duties) a kansa. Littattafai da yawa suna lissafa su da OLDCAR: Obedience (biyayya ga umarni na halal), Loyalty (aminci), Disclosure (bayyana muhimman abubuwa), Confidentiality (rufa asiri), Accounting (lissafin kuɗin da kuke riƙe) da Reasonable care (kulawa mai kyau). Dokar jiharku ce ke tsara ainihin ayyukan da fom ɗin bayyanawa.",
            "Wakiltar mai saye da mai sayarwa a ciniki ɗaya ana kiransa dual agency. Wasu jihohi suna ba da izini ne kawai da yardar ɓangarorin biyu a rubuce, wasu kuma suna iyakancewa ko hana shi. Ku duba dokokin jiharku.",
            "Fair Housing Act ta tarayya ta haramta nuna wariya a harkar gidaje saboda launin fata (race), launi (color), asalin ƙasa, addini, jinsi (sex), yanayin iyali (familial status, kamar samun yara) ko naƙasa. Jihohi da birane za su iya ƙara wasu rukunoni. Ayyukan da aka haramta sun haɗa da steering (karkatar da mutane zuwa ko daga wasu unguwanni saboda rukunin da aka kare), blockbusting (matsa wa masu gida su sayar ta hanyar gargaɗin cewa wani rukuni yana shigowa) da redlining (ƙin ba da bashi ko inshora a wasu unguwanni)."
          ],
          steps: ["Ku tambaya: wane ne abokin hulɗata, kuma me nake bin sa?", "Ku tambaya: shin wannan buƙata tana nuna wa wani bambanci saboda rukunin da aka kare?", "Idan haka ne, kada ku yi; ku bayyana dokar cikin ladabi.", "Ku rubuta abin da ya faru ku faɗa wa broker ɗinku."],
          words: [["Agent (wakili)", "mutumin da aka ba izinin yin aiki a madadin wani (client ko principal)."], ["Fiduciary (mai amana)", "mutumin da ke matsayin amana kuma dole ya fifita bukatun abokin hulɗa."], ["Dual agency", "wakili ɗaya ko ofishi ɗaya da ke wakiltar mai saye da mai sayarwa a ciniki ɗaya."], ["Rukunin da aka kare (protected class)", "rukunin da doka ke kare shi daga wariya, kamar launin fata ko naƙasa."], ["Steering", "karkatar da mutane zuwa ko daga wasu unguwanni saboda rukunin da aka kare; haramun ne."]],
          slides: [
            { title: "Ayyuka ga abokin hulɗarku (OLDCAR)", bullets: ["Obedience, Loyalty, Disclosure", "Confidentiality, Accounting, Reasonable care", "Dokar jiharku ce ke tsara ainihin ayyukan"] },
            { title: "Dual agency", bullets: ["Wakiltar ɓangarorin biyu a ciniki ɗaya", "Dokoki sun bambanta: yarda, iyakoki ko hani", "Ku duba jiharku"] },
            { title: "Fair Housing Act: rukunoni 7", bullets: ["Launin fata, launi, asalin ƙasa, addini", "Jinsi, yanayin iyali, naƙasa", "Jihohi da birane za su iya ƙara wasu"] },
            { title: "Ayyukan da aka haramta", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Ku rubuta gajerun labarai uku inda mai sayarwa ko mai saye ya nemi ku yi wani abu marar adalci (misali, \"Kada ka nuna gidana ga iyalai masu yara\"). Ga kowanne, ku rubuta rukunin da aka kare da abin ya shafa, da jimla ɗaya mai ladabi da za ku faɗa a maimakon haka.",
          youCanNow: "amfani da ayyukan wakili da dokar adalci a harkar gidaje don zaɓar matakin da ya dace da abokan hulɗa.",
          quickCheck: [
            { objective: "O3", q: "Wani mai sayarwa ya ce, \"Ka nuna gidana ga mutanen da ba su da yara kaɗai.\" Me za ku yi?", options: ["Ku bayyana cewa an kare yanayin iyali kuma dole ku nuna shi ga kowa", "Ku yarda, tun da shi ne abokin hulɗarku", "Ku nuna shi a ranakun aiki kaɗai", "Ku tambayi masu saye yara nawa suke da su"], answer: 0, why: "Yanayin iyali rukuni ne da Fair Housing Act ta kare, kuma biyayya ta shafi umarni na halal ne kaɗai." },
            { objective: "O3", q: "Mai sayarwarku ya faɗa muku farashi mafi ƙanƙanta da zai karɓa. Wani mai saye ya tambaye ku shi. Wane aiki ne ya shafi wannan?", options: ["Accounting", "Confidentiality", "Disclosure ga mai saye", "Obedience ga mai saye"], answer: 1, why: "Wakili yana rufa asirin bayanan abokin hulɗarsa, kamar farashinsa mafi ƙanƙanta." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Lasisin da muhimman abubuwa",
        questions: [
          { objective: "O1", q: "Wanne ne yawanci mataki na FARKO zuwa lasisin salesperson?", options: ["Shiga ofishin broker mai ɗaukar nauyi", "Rubuta jarabawar jiha", "Samun abokin hulɗa na farko", "Karanta sharuɗɗan hukumar jiharku"], answer: 3, why: "Kuna buƙatar jerin matakan hukuma kafin ku biya kuɗin azuzuwa ko jarabawa." },
          { objective: "O2", q: "Injin wanke kwanoni da aka gina a cikin kicin wataƙila shi ne:", options: ["Personal property", "Fixture", "Easement", "Lien"], answer: 1, why: "Abin da aka haɗa da kadarar fixture ne kuma yawanci yana tafiya tare da gidan." },
          { objective: "O2", q: "Harajin kadara da ba a biya ba ya ba gundumar (county) iƙirari a kan gidan. Wannan shi ne:", options: ["Lien", "Deed", "Fee simple", "Joint tenancy"], answer: 0, why: "Lien iƙirarin kuɗi ne na shari'a a kan kadara." },
          { objective: "O3", q: "Wani wakili ya ce wa mai saye, \"Za ka fi jin daɗi a unguwar da mutanen addininka suke.\" Wannan shi ne:", options: ["Kyakkyawar hidima ga abokin ciniki", "Blockbusting", "Steering, wanda haramun ne", "Redlining"], answer: 2, why: "Karkatar da mutane zuwa ko daga wasu unguwanni saboda rukunin da aka kare shi ne steering." },
          { objective: "O3", q: "Wanne BA rukunin da Fair Housing Act ta tarayya ta kare ba ne?", options: ["Naƙasa", "Asalin ƙasa", "Yanayin iyali", "Ƙungiyar wasan da kuka fi so"], answer: 3, why: "Rukunoni bakwai na tarayya su ne launin fata, launi, asalin ƙasa, addini, jinsi, yanayin iyali da naƙasa." }
        ]
      }
    },
    {
      name: "Babi na 2: Kwangiloli, lissafi da tsarin jarabawarku",
      lessons: [
        {
          title: "Kwangiloli da hanyar zuwa kammala ciniki",
          objectives: ["O4"],
          minutes: 6,
          goal: "Duba tayin sayen gida don sassan kwangila mai inganci, kuma ku jera matakan kammala ciniki.",
          text: [
            "Kwangila mai inganci tana buƙatar: ɓangarorin da doka ta ba su damar sa hannu (competent), tayi da karɓa (yarjejeniya tsakaninsu), consideration (wani abu mai daraja da kowane ɓangare ke bayarwa), da manufa ta halal. Kwangilar saye ko sayar da kadara gaba ɗaya dole ta kasance a rubuce kafin a tilasta bin ta; ana kiran wannan doka statute of frauds.",
            "Kwangila void ce idan ba ta taɓa inganci ba (misali, manufarta haramun ce). Voidable ce idan ɓangare ɗaya zai iya soke ta, misali idan ƙaramin yaro (minor) ne ya sa hannu. Yawancin tayin saye suna da contingencies (sharuɗɗa), kamar samun bashi ko kyakkyawan sakamakon dubawa, da earnest money, ajiyar kuɗi da ke nuna cewa mai saye da gaske yake.",
            "Hanyar da aka saba ita ce: tayi, karɓa, buɗe escrow ko wakilin kammala ciniki, dubawa (inspection), ƙimanta farashi (appraisal) da amincewa da bashi, dubawa ta ƙarshe (walk-through), sannan kammala ciniki (closing). Dokokin tarayya suna kare mai karɓar bashi: mai ba da bashi yana ba da Loan Estimate cikin kwanakin aiki uku bayan neman bashi, da Closing Disclosure aƙalla kwanakin aiki uku kafin closing, don mai saye ya kwatanta su."
          ],
          steps: ["Ku duba cewa an rubuta sunayen ɓangarorin kuma suna da damar sa hannu.", "Ku duba cewa akwai tayi a sarari da karɓa da aka sa wa hannu.", "Ku duba farashin, earnest money da abin da kowane ɓangare ke bayarwa (consideration).", "Ku duba cewa yana a rubuce kuma don manufa ta halal.", "Ku lissafa contingencies da wa'adinsu.", "Ku jera matakan closing bisa tsari, tare da lokutan Loan Estimate da Closing Disclosure."],
          words: [["Consideration", "wani abu mai daraja da kowane ɓangare ke bayarwa, kamar kuɗi ko alƙawari."], ["Statute of frauds", "dokar da ke cewa kwangilolin kadarori gaba ɗaya dole su kasance a rubuce kafin a tilasta bin su."], ["Void / voidable", "void: ba ta taɓa zama kwangila mai inganci ba; voidable: mai inganci ce, amma ɓangare ɗaya zai iya soke ta."], ["Contingency (sharaɗi)", "abin da dole ya faru kafin cinikin ya ci gaba, kamar amincewa da bashi."], ["Earnest money", "ajiyar kuɗi da mai saye ke bayarwa don nuna cewa da gaske yake."], ["Closing Disclosure", "fom na ƙarshe na mai ba da bashi mai sharuɗɗan bashi da kuɗaɗen kammala ciniki."]],
          slides: [
            { title: "Sassan kwangila mai inganci", bullets: ["Ɓangarori masu damar sa hannu", "Tayi da karɓa", "Consideration da manufa ta halal", "A rubuce, don kadarori"] },
            { title: "Void, voidable, contingency", bullets: ["Void: ba ta taɓa inganci ba", "Voidable: ɓangare ɗaya zai iya soke ta", "Contingency: sharaɗi, kamar amincewa da bashi"] },
            { title: "Hanyar zuwa closing", bullets: ["Tayi, karɓa, escrow", "Dubawa, ƙimanta farashi, amincewa da bashi", "Dubawa ta ƙarshe, sannan closing"] },
            { title: "Fom ɗin bashi na tarayya (CFPB)", bullets: ["Loan Estimate: cikin kwanakin aiki 3 bayan neman bashi", "Closing Disclosure: kwanakin aiki 3 ko fiye kafin closing"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Ku rubuta gajeren tayin saye na ƙirƙira (sunaye, adireshi, farashi, earnest money, contingency ɗaya, sa hannu). Sannan ku duba shi da matakai shida na sama ku lissafa abin da ya ɓace. Ku gama da matakan closing bisa tsari.",
          youCanNow: "duba tayin sayen gida don sassan kwangila mai inganci, da jera matakan zuwa closing bisa tsari.",
          quickCheck: [
            { objective: "O4", q: "Mai saye da mai sayarwa sun yarda kan sayar da gida ta waya kawai. A ƙarƙashin statute of frauds cinikin:", options: ["Ana iya tilasta bin sa gaba ɗaya", "Ana iya tilasta bin sa bayan mako ɗaya", "Gaba ɗaya ba a iya tilasta bin sa sai an rubuta shi", "Haramun ne"], answer: 2, why: "Kwangilolin kadarori gaba ɗaya dole su kasance a rubuce kafin a tilasta bin su." },
            { objective: "O4", q: "Yaushe mai karɓar bashi zai sami Closing Disclosure?", options: ["Aƙalla kwanakin aiki uku kafin closing", "A ranar closing", "Cikin wata ɗaya bayan closing", "Kafin a yi tayi"], answer: 0, why: "CFPB ta ce mai ba da bashi yana ba da Closing Disclosure aƙalla kwanakin aiki uku kafin closing." }
          ]
        },
        {
          title: "Lissafin jarabawar kadarori",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa commission, loan-to-value, harajin kadara, proration da faɗin ƙasa.",
          text: [
            "Don atisaye kawai: duk lambobin nan na ƙirƙira ne. Commission (ladan dillanci): farashin sayarwa sau kaso. Sayarwa ta $300,000 a 6% ta zama $18,000. Idan ofishin da ya saka gidan a kasuwa (listing office) ya sami rabi, wannan $9,000 ne; idan rabon wakilin (split) 60% ne, wakilin yana samun $5,400.",
            "Loan-to-value (LTV) shi ne bashin da aka raba da ƙimar kadarar. Bashin $240,000 a kan gida na $300,000 ya zama 0.80, wato 80%. Harajin kadara shi ne assessed value (ƙimar da gwamnati ta ƙayyade) sau kason haraji: $200,000 sau 1.5% ya zama $3,000 a shekara, wato $250 a wata.",
            "Proration tana raba kuɗi bisa kwanaki. Idan harajin shekara $3,650 ne kuma shekarar tana da kwanaki 365, wannan $10 ne a kowace rana; idan mai sayarwa ya mallaki gidan kwanaki 120 kuma mai saye ne zai biya kuɗin daga baya, mai sayarwa yana bin mai saye $1,200. Faɗin ƙasa: tsawo sau faɗi. Fili mai ƙafa 50 da ƙafa 120 yana da murabba'in ƙafa 6,000. Acre ɗaya murabba'in ƙafa 43,560 ne. Ku duba ko jarabawarku tana amfani da shekara mai kwanaki 360 ko 365."
          ],
          steps: ["Ku karanta tambayar ku ja layi a ƙarƙashin abin da take nema.", "Ku rubuta tsarin lissafi (sashe = duka sau kaso).", "Ku mayar da kaso zuwa decimal (6% = 0.06).", "Ku yi mataki ɗaya bayan ɗaya a takarda.", "Ku tambaya: shin amsar tana da ma'ana?"],
          words: [["Commission (ladan dillanci)", "kuɗin da ake biya don sayarwa, yawanci kaso na farashin sayarwa."], ["Split (raba)", "yadda ake raba commission tsakanin ofisoshi ko tsakanin broker da wakili."], ["Loan-to-value (LTV)", "adadin bashi da aka raba da ƙimar kadara, a matsayin kaso."], ["Assessed value", "ƙimar da ƙaramar hukuma ke amfani da ita don lissafa harajin kadara."], ["Proration", "raba kuɗi tsakanin mai saye da mai sayarwa bisa kwanakin da kowannensu ya mallaki kadarar."]],
          slides: [
            { title: "Commission", bullets: ["Farashin sayarwa x kaso", "$300,000 x 6% = $18,000", "Rabi ga listing office = $9,000; split 60% = $5,400"] },
            { title: "LTV da harajin kadara", bullets: ["LTV = bashi / ƙima: $240,000 / $300,000 = 80%", "Haraji = assessed value x kaso: $200,000 x 1.5% = $3,000"] },
            { title: "Proration da faɗin ƙasa", bullets: ["$3,650 / 365 = $10 a rana; kwanaki 120 = $1,200", "ƙafa 50 x ƙafa 120 = murabba'in ƙafa 6,000", "Acre 1 = murabba'in ƙafa 43,560"] },
            { title: "Hanyar aiki", bullets: ["Ku ja layi a ƙarƙashin tambayar", "Ku rubuta tsarin lissafi, ku yi amfani da decimal", "Ku duba cewa amsar tana da ma'ana"] }
          ],
          tryIt: "Don atisaye kawai. Ku warware a takarda da na'urar lissafi: (1) commission na 5% a kan $250,000; (2) LTV na bashin $180,000 a kan gida na $200,000; (3) harajin shekara a kan assessed value na $150,000 a 2%; (4) rabon mai sayarwa na harajin shekara $1,825 na kwanaki 73 (shekara mai kwanaki 365); (5) murabba'in ƙafa a fili mai ƙafa 80 da ƙafa 100. Amsoshi: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "warware lissafin da aka saba yi a jarabawar kadarori da nuna aikinku.",
          quickCheck: [
            { objective: "O5", q: "Don atisaye kawai: mene ne LTV na bashin $270,000 a kan gida na $300,000?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 da aka raba da $300,000 ya zama 0.90, wato 90%." },
            { objective: "O5", q: "Don atisaye kawai: fili yana da ƙafa 100 da ƙafa 150. Murabba'in ƙafa nawa ne?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "Faɗin ƙasa shi ne tsawo sau faɗi: 100 sau 150 ya zama murabba'in ƙafa 15,000." }
          ]
        },
        {
          title: "Tsarin karatu da jarabawarku",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Rubuta tsarin karatu da jarabawa mai ranaku daga jerin abubuwan jarabawar jiharku.",
          text: [
            "Jiharku ko kamfanin da ke gudanar da jarabawarta yana fitar da candidate handbook (littafin jagora ga masu jarabawa). Yawanci yana da exam content outline (jerin batutuwa da yawan tambayoyi a kowanne), dokokin ranar jarabawa, katin shaidar da dole ku zo da shi, da yadda ake tsara lokacin jarabawa. Ku sauke shi daga shafin hukuma, ba daga kwafin da wani ya saka ba.",
            "Ku mayar da jerin zuwa tsari. Ku lissafa kowane batu, ku ba kanku maki 1 zuwa 3 a kowanne, ku yi alama a kan uku mafi rauni. Ku saka manyan ranaku a kalanda, kuna komawa baya daga ranar jarabawar da kuke so: gama azuzuwa, nema, ɗaukar zanen yatsa, tsara jarabawa. Sannan ku tsara gajerun lokutan karatu kowane mako, tare da tambayoyin atisaye da lissafi kowane mako.",
            "Jarabawowin atisaye sun fi taimakawa idan kuna duba kowace amsar da kuka yi kuskure kuma kuna rubuta dalilin da yasa amsar daidai take daidai. Ku yi hankali da duk shafin da ke alƙawarin \"tabbas za ka ci\" (guaranteed pass) ko ke sayar da ainihin tambayoyin jarabawa; wannan zamba ce ko magudi, kuma jihohi za su iya hana lasisi saboda shi."
          ],
          steps: ["Ku sauke candidate handbook na jiharku daga shafin hukuma.", "Ku kwafi batutuwan exam content outline.", "Ku ba kanku maki 1 zuwa 3 a kowane batu; ku yi alama a kan uku mafi rauni.", "Ku zaɓi ranar jarabawa ku koma baya zuwa kowane mataki.", "Ku tsara lokutan karatu na kowane mako tare da tambayoyin atisaye da lissafi.", "Ku duba kowace amsar da kuka yi kuskure ku rubuta dalilin da yasa amsar daidai take daidai."],
          words: [["Candidate handbook", "jagorar hukuma ta jarabawa: batutuwa, dokoki, katin shaida da tsara lokaci."], ["Exam content outline", "jerin batutuwan da ke cikin jarabawa da nauyin kowanne."], ["Ranar da ake so (target date)", "ranar da kuke son rubuta jarabawa; kuna tsarawa ta komawa baya daga ita."]],
          slides: [
            { title: "Ku fara da littafin jagora na hukuma", bullets: ["Exam content outline", "Dokokin ranar jarabawa da katin shaida", "Yadda ake tsara lokacin jarabawa"] },
            { title: "Ku gina tsarin", bullets: ["Ku ba kowane batu maki 1 zuwa 3", "Ku yi alama a kan uku mafi rauni", "Ku koma baya daga ranar jarabawar da kuke so"] },
            { title: "Ku yi atisaye da hikima", bullets: ["Tambayoyin atisaye da lissafi kowane mako", "Ku duba kowace amsar da kuka yi kuskure", "Babu \"tabbas za ka ci\" ko tambayoyin da aka sato"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Aikin ƙarshe: ku yi Tsarin Karatu da Jarabawar Lasisin Kadarori naku: matakan jiharku da ranaku da shafin hukuma, batutuwan jerin jarabawa tare da alamar uku mafi rauni, takardar dokoki kan wakilci, adalci a harkar gidaje da kwangiloli, tambayoyin lissafi biyar da aka warware, da jadawalin mako-mako har zuwa ranar jarabawarku.",
          youCanNow: "mayar da jerin abubuwan jarabawar jiharku zuwa tsarin karatu da jarabawa mai ranaku da bin sa.",
          quickCheck: [
            { objective: "O6", q: "Daga ina jerin batutuwan tsarin karatunku ya kamata ya fito?", options: ["Wani rubutu a kafofin sada zumunta", "Exam content outline na hukuma na jiharku", "Duk batutuwan da kuka fi so", "Shafin da ke sayar da ainihin tambayoyin jarabawa"], answer: 1, why: "Content outline na hukuma yana nuna abin da jarabawar ke gwadawa da gaske." },
            { objective: "O6", q: "Kuna ci gaba da kuskure a tambayoyin proration a jarabawowin atisaye. Mene ne tsari mafi kyau?", options: ["Ku tsallake proration; tambayoyi kaɗan ne kawai", "Ku rubuta jarabawar da wuri", "Ku yi alama a kansa a matsayin batu mai rauni ku ƙara atisayen lissafi kowane mako", "Ku sayi kunshin \"tabbas za ka ci\""], answer: 2, why: "Yin alama a kan batutuwa masu rauni da atisaye a kansu kowane mako yana cike giɓin kafin ranar jarabawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kwangiloli, lissafi da tsarin jarabawarku",
        questions: [
          { objective: "O4", q: "Wanne BA ɗaya daga cikin sassan kwangila mai inganci ba ne?", options: ["Tayi da karɓa", "Consideration", "Tambarin notary a kowane shafi", "Manufa ta halal"], answer: 2, why: "Kwangila mai inganci tana buƙatar ɓangarori masu damar sa hannu, yarjejeniya, consideration da manufa ta halal; tambari a kowane shafi ba ya cikinsu." },
          { objective: "O4", q: "Wani tayin saye ya ce cinikin zai ci gaba ne kawai idan mai saye ya sami bashi. Wannan shi ne:", options: ["Contingency", "Lien", "Easement", "Commission"], answer: 0, why: "Contingency sharaɗi ne da dole ya faru kafin cinikin ya ci gaba." },
          { objective: "O5", q: "Don atisaye kawai: sayarwa ta $400,000 a commission na 5% ita ce:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 sau 0.05 ya zama $20,000." },
          { objective: "O5", q: "Don atisaye kawai: assessed value na $250,000 a kason haraji na 2% yana ba da harajin shekara na:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 sau 0.02 ya zama $5,000." },
          { objective: "O6", q: "Wace ce hanya mafi kyau ta amfani da jarabawar atisaye?", options: ["Haddace amsoshi kawai", "Duba kowace amsar da kuka yi kuskure ku rubuta dalilin da yasa amsar daidai take daidai", "Rubuta ta sau ɗaya ku daina", "Raba tambayoyin a intanet"], answer: 1, why: "Duba dalilin da yasa kowace amsa take daidai yana gina fahimtar da ainihin jarabawar ke gwadawa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Shiri don Jarabawar Lasisin Dillancin Gidaje da Filaye",
    questions: [
      { objective: "O1", q: "Wane ne ke ba da lasisin salesperson na kadarori a Amurka?", options: ["Gwamnatin tarayya", "Hukumar kadarori ta kowace jiha", "National Association of Realtors (ƙungiyar dillalai ta ƙasa)", "Bankinku na unguwa"], answer: 1, why: "Kowace jiha ce ke ba da lasisi, ta hannun hukumar kadarori ta jihar." },
      { objective: "O1", q: "Wane mataki ne ke zuwa a yawancin jihohi kafin ku iya aiki a matsayin salesperson?", options: ["Mallakar gida", "Sayar da gidaje biyar", "Cin jarabawar jiha da wuce binciken baya", "Zama broker"], answer: 2, why: "Yawancin jihohi suna neman jarabawa da binciken baya, sannan aiki a ƙarƙashin broker." },
      { objective: "O1", q: "Dole salesperson ya yi aiki a ƙarƙashin:", options: ["Broker mai lasisi", "Banki", "Mai duba gida", "Kamfanin title"], answer: 0, why: "Broker mai lasisi ne ke kula da salespeople." },
      { objective: "O2", q: "Wanne ne personal property (kayan mutum)?", options: ["Murhun dumama gida da aka gina a ciki", "Bishiya a farfajiya", "Ƙasar", "Kujerar zama a falo"], answer: 3, why: "Personal property abu ne mai motsi; kujerar zama ba a haɗa ta da gidan ba." },
      { objective: "O2", q: "Mallaka mafi cika ita ce:", options: ["Easement", "Fee simple", "Lien", "Haya (lease)"], answer: 1, why: "Fee simple tana ba mai mallaka cikakken tarin haƙƙoƙi." },
      { objective: "O2", q: "Wace hanyar bayyana ƙasa ce ke amfani da taswirar rukunin filaye (subdivision) da aka yi rajista?", options: ["Metes and bounds", "Fee simple", "Lot and block", "Proration"], answer: 2, why: "Lot and block tana nufin filaye a taswirar subdivision da aka yi rajista." },
      { objective: "O2", q: "Masu mallaka tare waɗanda rabonsu BA ya komawa ga juna kai tsaye idan sun mutu suna riƙe title a matsayin:", options: ["Tenants in common", "Joint tenants", "Brokers", "Masu lien"], answer: 0, why: "Tenancy in common ba ta da haƙƙin wanda ya rage." },
      { objective: "O3", q: "Wanne ne ɗaya daga cikin ayyukan amana (fiduciary) na wakili ga abokin hulɗarsa?", options: ["Faɗa wa ɗayan ɓangaren farashi mafi ƙanƙanta na abokin hulɗa", "Loyalty (aminci)", "Zaɓar mai ba da bashi a madadin abokin hulɗa", "Ƙin bin umarnin halal na abokin hulɗa"], answer: 1, why: "Loyalty babban aikin amana ne (OLDCAR)." },
      { objective: "O3", q: "Faɗa wa masu gida su sayar da sauri saboda wani rukuni yana shigowa ana kiransa:", options: ["Steering", "Redlining", "Dual agency", "Blockbusting"], answer: 3, why: "Blockbusting tana matsa wa masu gida su sayar ta hanyar tayar da tsoro game da wani rukuni da ke shigowa." },
      { objective: "O3", q: "Ƙin ba da bashi a wata unguwa saboda waɗanda ke zaune a ciki ana kiransa:", options: ["Redlining", "Proration", "Steering", "Escrow"], answer: 0, why: "Redlining ita ce ƙin ba da bashi ko inshora a wasu unguwanni; haramun ce." },
      { objective: "O3", q: "Wani mai saye da ke amfani da keken guragu yana son ganin gida. A ƙarƙashin Fair Housing Act ku:", options: ["Nuna gidaje masu hawan gangare (ramp) kaɗai ba tare da tambaya ba", "Ƙi saboda matakalai", "Nuna gidan bisa sharuɗɗa iri ɗaya da na kowa", "Nemi takarda daga likita"], answer: 2, why: "Naƙasa rukuni ne da aka kare, don haka mai saye yana samun daidaito." },
      { objective: "O4", q: "Kwangilar da ƙaramin yaro (minor) ya sa hannu, wadda zai iya soke ta, ita ce:", options: ["Void", "Voidable", "Ana iya tilasta bin ta gaba ɗaya", "Lien"], answer: 1, why: "Voidable tana nufin mai inganci ce, amma ɓangare ɗaya zai iya soke ta." },
      { objective: "O4", q: "Cikin kwanakin aiki nawa bayan neman bashi dole mai ba da bashi ya ba da Loan Estimate?", options: ["Uku", "Goma", "Talatin", "Ɗaya"], answer: 0, why: "CFPB ta ce Loan Estimate tana zuwa cikin kwanakin aiki uku bayan neman bashi." },
      { objective: "O4", q: "Earnest money ita ce:", options: ["Commission na wakili", "Harajin kadara na shekara", "Lien a kan gidan", "Ajiyar kuɗi da ke nuna cewa mai saye da gaske yake"], answer: 3, why: "Earnest money ajiyar kuɗi ce ta niyya mai kyau daga mai saye." },
      { objective: "O5", q: "Don atisaye kawai: wakili yana samun split na 50% na commission ta $9,000. Wakilin yana karɓar:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 sau 0.50 ya zama $4,500." },
      { objective: "O5", q: "Don atisaye kawai: bashin $160,000 a kan gida na $200,000 yana da LTV na:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 da aka raba da $200,000 ya zama 0.80, wato 80%." },
      { objective: "O5", q: "Don atisaye kawai: harajin shekara $3,650 ne (shekara mai kwanaki 365). Mai sayarwa ya mallaki gidan kwanaki 30. Rabon mai sayarwa shi ne:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 da aka raba da 365 ya zama $10 a rana; kwanaki 30 sun zama $300." },
      { objective: "O5", q: "Murabba'in ƙafa nawa ne a acre ɗaya?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "Acre ɗaya murabba'in ƙafa 43,560 ne." },
      { objective: "O6", q: "Candidate handbook na jiharku yawanci yana faɗa muku:", options: ["Ainihin tambayoyin jarabawar", "Gidan da za ku saya", "Exam content outline da dokokin ranar jarabawa", "Albashinku na gaba"], answer: 2, why: "Littafin jagorar yana ba da jerin batutuwa, dokoki, katin shaidar da ake buƙata da tsara lokaci." },
      { objective: "O6", q: "Tsarin karatu mai kyau yana farawa da:", options: ["Zaɓar ranar jarabawa da komawa baya zuwa kowane mataki", "Sayen kwas mafi tsada", "Karatun batutuwan da kuka fi so kaɗai", "Jira har sai kun ji kun shirya"], answer: 0, why: "Tsarawa ta komawa baya daga ranar da ake so yana saka kowane mataki da lokacin karatu a kalanda." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake dubawa.",
    criteria: [
      { name: "Matakan hukuma", objective: "O1", notYet: "Wasu matakai sun ɓace, ba su bi tsari ba, ko an kwafo su daga shafin da ba na hukuma ba.", meets: "An lissafa kowane mataki daga shafin hukumar jiha bisa tsari, tare da adireshin shafin da ranar da aka duba.", exceeds: "Yana kuma rubuta kuɗaɗe da takardun kowane mataki daidai yadda shafin hukuma ya faɗa." },
      { name: "Muhimman kalmomi", objective: "O2", notYet: "Wasu kalmomin kadara ko mallaka ba daidai ba ne ko sun ɓace daga takardar dokoki.", meets: "Takardar dokoki tana bayyana muhimman kalmomin kadara da mallaka daidai da kalmomi masu sauƙi.", exceeds: "Kowace kalma tana da misali na rayuwa da mai koyo ya ƙirƙira." },
      { name: "Wakilci da adalci a harkar gidaje", objective: "O3", notYet: "Ayyukan amana ko rukunoni bakwai da tarayya ta kare sun ɓace ko ba daidai ba ne.", meets: "Ya lissafa ayyukan da dukkan rukunoni bakwai na tarayya, tare da steering, blockbusting da redlining.", exceeds: "Ya ƙara wasu rukunonin da jiha ko birnin mai koyo ya kare, tare da majiyar." },
      { name: "Kwangila da closing", objective: "O4", notYet: "Sassan kwangila ko matakan closing sun ɓace, ko lokutan Loan Estimate da Closing Disclosure ba daidai ba ne.", meets: "Ya lissafa kowane sashe na kwangila mai inganci da matakan closing bisa tsari, tare da lokutan bayyanawa daidai.", exceeds: "Ya ƙara contingencies da wa'adinsu daga samfurin tayi." },
      { name: "Lissafi", objective: "O5", notYet: "Ƙasa da 4 cikin tambayoyi 5 ne daidai, ko ba a nuna aikin ba.", meets: "Aƙalla 4 cikin 5 daidai ne, tare da nuna aikin.", exceeds: "Dukkan 5 daidai, tare da ƙarin tambaya ɗaya da mai koyo ya rubuta ya warware." },
      { name: "Tsari mai ranaku", objective: "O6", notYet: "Babu ranar da ake so, ko batutuwan ba daga content outline na hukuma suke ba.", meets: "Ya ƙunshi kowane batu a jerin, ya yi alama a kan uku mafi rauni, kuma yana da lokutan karatu na mako-mako har zuwa ranar da ake so.", exceeds: "Ya haɗa da ranakun duba jarabawowin atisaye da ranar jarabawa ta madadi." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka gama azuzuwan kafin lasisi da jiha ta amince da su cikin watanni 6 (binciken biyo baya)",
      "Masu koyo da suka ci jarabawar kadarori ta jiha, da a wane ƙoƙari (bisa faɗinsu)",
      "Masu koyo da suka sami lasisi kuma suke aiki a ƙarƙashin broker mai ɗaukar nauyi cikin watanni 12"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta don karanta shafin hukuma na hukumar jiha da candidate handbook",
      "Takarda, alƙalami da na'urar lissafi mai sauƙi",
      "Kalanda (ta takarda ko ta waya) don tsarin karatu da jarabawa",
      "Kusan minti 60 zuwa 75 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Idan ƙungiyar daga jiha ɗaya take, ku buɗe shafin hukumar wannan jihar tare a Darasi na 1, ku yi amfani da candidate handbook ɗinta a Darasi na 6.",
      "Ku bayyana a sarari cewa wannan kwas yana shirya masu koyo ne; ba ya maye gurbin azuzuwan kafin lasisi da jiha ta amince da su, kuma ba ya ba da lasisi.",
      "Ku yi darasin lissafi bibbiyu a allo: ɗaya yana warwarewa, ɗaya yana duba matakan.",
      "Ku yi wasan kwaikwayo don labaran adalci a harkar gidaje; ku tsaya ku faɗi dokar a kowane lokaci.",
      "Kada ku ba da shawara kan sayen kadara, zuba jari, bashi ko haraji; ku nuna wa masu koyo majiyoyin hukuma da ƙwararru masu lasisi.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
