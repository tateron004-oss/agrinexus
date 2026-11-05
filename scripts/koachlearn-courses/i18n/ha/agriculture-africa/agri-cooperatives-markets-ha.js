"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-cooperatives-markets.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const ICA = { name: "International Cooperative Alliance (Ƙungiyar Haɗin Gwiwa ta Duniya): asali, ɗabi'u da ƙa'idodin ƙungiyar haɗin gwiwa", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Dokar Ƙungiyoyin Haɗin Gwiwa (Co-operative Societies Act), rajista ta hannun Commissioner for Co-operative Development", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Dokar Ƙungiyoyin Haɗin Gwiwa ta Najeriya (Co-operative Societies Act): Daraktocin Haɗin Gwiwa na Tarayya da na Jiha; dokokin ƙungiya; binciken kuɗi na shekara", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Ma'aikatar Yaɗa Labarai ta Ghana (ISD): Gwamnati ta fara gyaran ɓangaren ƙungiyoyin haɗin gwiwa (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Tsarin Bayanan Kasuwar Noma na Kenya (KAMIS), Ma'aikatar Noma", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-ha",
  lang: "ha",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa",
  skills: "Bayyana dalilin da yasa manoma ke haɗa kai, Rubuta dokokin ƙungiya da yin rajista, Gudanar da taruka da ajiye bayanan ƙungiya, Tara amfanin gona da sayarwa tare, Duba farashin kasuwa ta waya, Karanta kwangilar mai saye",
  outcome: "taimakawa wajen kafa ko ƙarfafa ƙungiyar manoma: amincewa da dokokinta, sanin inda za a yi mata rajista, gudanar da taruka da ajiye bayanai a sarari, tara amfanin gonar mambobi a sayar tare a farashin da aka duba, da karanta kwangilar mai saye kafin kowa ya sa hannu.",
  about: [
    "Wannan kwas na manoma ƙanana da masu girma ne, shugabannin ƙungiyoyin manoma da ƙungiyoyin haɗin gwiwa (cooperative), da matasan ma'aikatan kasuwancin noma a Kenya, Najeriya, Ghana da sauran Afirka. Manomi shi kaɗai mai buhunan masara biyar ko 'yan kwalayen tumatir yana karɓar duk farashin da ɗan kasuwa ya faɗa. Idan suka haɗa kai, ƙungiya za ta iya sayen kayan noma da rahusa, ta cika odar babban mai saye, kuma ta yi ciniki don samun farashi mafi kyau.",
    "Babi na 1 game da gina ƙungiya ne: dalilin da yasa manoma ke haɗa kai, kafa ƙungiyar manoma ko ƙungiyar haɗin gwiwa (dokoki da rajista), da gudanar da ita da kyau ta taruka da bayanai. Babi na 2 game da kai amfanin gona kasuwa ne: tarawa da sayarwa tare, duba farashi ta waya, da kwangiloli da masu saye.",
    "Dokokin ƙungiyoyin haɗin gwiwa, ofisoshin rajista da kuɗaɗen rajista sun bambanta daga ƙasa zuwa ƙasa, kuma suna canjawa. Wannan kwas yana ambaton ofisoshin da za ku tuntuɓa; koyaushe ku tabbatar da sabbin dokoki tare da su kafin ku yi rajista. Kowane darasi yana ɗaukar kusan minti biyar, kuma yana ƙarewa da aikin da za ku iya yi tare da ƙungiyarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku rubuta tsarin sayarwa na ƙungiya mai shafi ɗaya don amfanin gona ɗaya (na ƙungiyarku, ko misali kamar manoman masara 25 a Bungoma, ƙungiyar mata masu tumatir a Kaduna, ko ƙungiyar koko ko wake kusa da Tamale): sunan ƙungiyar da manufarta, manyan dokoki biyar, inda za ku yi rajista da abin da dole ku tabbatar, bayanan da za ku ajiye, yadda mambobi za su kawo amfanin gona, a rarraba shi bisa inganci, kuma a biya su, farashin da kuka samu daga aƙalla wurare uku, da sharuɗɗan kwangila shida da za ku duba kafin ku sa hannu da mai saye.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma ƙanana da masu girma, shugabannin ƙungiyoyin manoma da ƙungiyoyin haɗin gwiwa, da matasan ma'aikatan kasuwancin noma a Kenya, Najeriya, Ghana da sauran Afirka, waɗanda ke son su saya kuma su sayar tare.",
    startingPoint: "Yawancinsu suna sayar da ɗan kaɗan su kaɗai a bakin gona, kuma suna karɓar farashin ɗan kasuwa. Wasu suna cikin ƙungiya marar rajista ko ƙungiyar adashe (chama). Kaɗan ne ke da dokokin ƙungiya a rubuce, suka ajiye bayanan ƙungiya, suka gudanar da ranar tara amfanin gona, suka duba farashi daga wurare da yawa, ko suka karanta kwangilar mai saye kafin su sa hannu.",
    gap: "Manomi shi kaɗai ba shi da ƙarfin ciniki sosai, kuma ƙungiyoyi da yawa suna rushewa saboda rashin amana, rashin bayanai, sayarwa a gefe da jinkirin biya. Ƙungiyar da ake gudanarwa da kyau, mai dokoki a sarari, bayanai, farashin da aka duba da kwangiloli a rubuce, za ta iya cika odar manyan masu saye, ta sayi kayan noma da rahusa, kuma mambobi su ƙara samun kuɗi.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana bayanin kowace kalmar ƙungiya da ta kasuwa",
      "Na'urori: waya mai sauƙi don SMS, WhatsApp, duba farashi da na'urar lissafi; littattafan bayanai na takarda",
      "Dokokin ƙungiyoyin haɗin gwiwa, ofisoshi da kuɗaɗe sun bambanta daga ƙasa zuwa ƙasa kuma suna canjawa: masu koyo suna tabbatarwa a ofishin ƙungiyoyin haɗin gwiwa",
      "Kuɗi da sirri: mutum biyu ne ke amincewa da kowane biya; kada a taɓa ba da lambar PIN ko bayanan banki ga kayan AI ko masu kira",
      "Ba shawarar shari'a ba ce: ofishin ƙungiyoyin haɗin gwiwa, jami'in faɗakarwar noma ko lauya ne ke duba manyan kwangiloli"
    ],
    prerequisites: "Babu. Kwas ɗin \"Kula da Amfanin Gona Bayan Girbi da Ajiya\" yana taimakawa wajen rarrabawa bisa inganci."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Don gonarku da maƙwabtanku", action: "jera abin da ƙungiya za ta iya yi wanda manomi ɗaya ba zai iya ba, da haɗarin da za a sarrafa", standard: "kuna ambaton aƙalla amfani uku da dalilai uku da aka saba da su na rushewar ƙungiyoyi" },
    { id: "O2", condition: "Don sabuwar ƙungiyar manoma ko wadda ke akwai", action: "rubuta daftarin manyan dokokin ƙungiya da ambaton ofishin da ƙungiyar za ta yi rajista", standard: "da aƙalla manyan dokoki biyar, kuma an tabbatar da matakan yanzu a ofishin" },
    { id: "O3", condition: "Don taron ƙungiya da kuɗinta", action: "gudanar da taro mai ajanda da rubutaccen bayanin taro (minutes), da kafa manyan bayanan ƙungiya", standard: "da rajistar mambobi, littafin kuɗi, littafin kawo amfanin gona da bayanan biya, kuma mutum biyu ne ke amincewa da biya" },
    { id: "O4", condition: "A ranar tara amfanin gona", action: "dubawa, rarrabawa bisa inganci, aunawa, rubutawa da biyan kuɗin amfanin gonar kowane mamba", standard: "ana aunawa a gaban mamban, ana ba da rasit, ana kuma biya bisa bayanan" },
    { id: "O5", condition: "Kafin sayarwa", action: "kwatanta farashi daga aƙalla wurare uku da lissafin farashin tayi a bakin gonarku", standard: "ana cire kuɗin sufuri, kuɗaɗen kasuwa da asara, ana kuma gane tayin zamba" },
    { id: "O6", condition: "Idan aka ba ku kwangilar mai saye", action: "duba manyan sharuɗɗa kafin ƙungiyar ta sa hannu", standard: "har da kaya, inganci, yawa, farashi, kai kaya, duba inganci, biya, gazawa da rigima" }
  ],
  chapters: [
    {
      name: "Babi na 1: Gina ƙungiyar manoma mai ƙarfi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dalilin da yasa manoma ke haɗa kai",
          minutes: 4,
          goal: "Jera abin da ƙungiya za ta iya yi wa gonarku wanda ba za ku iya yi ku kaɗai ba, da haɗarin da za a sarrafa.",
          text: [
            "International Cooperative Alliance (Ƙungiyar Haɗin Gwiwa ta Duniya) ta bayyana ƙungiyar haɗin gwiwa a matsayin taron mutane da suka shiga da son ransu don biyan buƙatunsu na tattalin arziki, na zamantakewa da na al'ada ta hanyar kasuwancin da suka mallaka tare kuma suke sarrafawa ta hanyar dimokuraɗiyya. Mambobi su ne masu ita, kuma su ne masu amfani da ita.",
            "Ƙungiyoyi suna taimaka wa manoma: su sayi iri, taki da abincin dabbobi da yawa a farashi mai rahusa; su tara amfanin gona har ya cika manyan motoci (lorry) da manyan masu saye ke so; su yi ciniki don farashi mafi kyau; su raba rumbuna, na'urorin busarwa, sufuri da kayan aiki; su samu horo, takardar shaida (certification) da bashin da masu ba da bashi ke bayarwa cikin sauƙi ga ƙungiya mai bayanai; kuma su yi magana da murya ɗaya ga gwamnati da masu saye.",
            "Ƙungiyoyi ma suna rushewa. Dalilai da aka saba gani su ne rashin amana, shugabannin da ke kama iko, rashin bayanai, mambobin da ke sayarwa ga wasu masu saye a gefe bayan ƙungiyar ta amince da wata yarjejeniya, da jinkirin biya. Sauran wannan kwas game da guje wa waɗannan ne. Ƙungiyoyi suna farawa daga ƙungiyoyin taimakon kai ko ƙungiyoyin manoma marasa rajista har zuwa ƙungiyoyin haɗin gwiwa masu rajista; ƙungiya za ta iya farawa ba tare da rajista ba, ta yi rajista daga baya."
          ],
          words: [["Ƙungiyar haɗin gwiwa (cooperative)", "kasuwancin da mambobinsa ne ke mallaka da sarrafa shi, kuma su ne ke amfani da hidimominsa."], ["Ƙungiyar manoma (producer group)", "manoma masu shuka amfanin gona iri ɗaya da ke aiki tare, mai rajista ko marar rajista."], ["Saye da yawa (bulk buying)", "sayen kaya masu yawa tare don samun farashi mai rahusa."], ["Sayarwa a gefe (side-selling)", "mamba ya sayar wa wani mai saye bayan ƙungiyar ta amince ta sayar tare."]],
          slides: [
            { title: "Mece ce ƙungiyar haɗin gwiwa (ICA)", bullets: ["Mutanen da suka shiga da son ransu", "Kasuwancin da suka mallaka tare", "Ana sarrafa ta ta dimokuraɗiyya: mambobi ne masu ita kuma masu amfani da ita"] },
            { title: "Abin da ƙungiyoyi za su iya yi", bullets: ["Sayen kayan noma da yawa, da rahusa", "Cika manyan motoci don manyan masu saye; yin ciniki", "Raba rumbuna da sufuri; samun horo da bashi"] },
            { title: "Dalilin da yasa ƙungiyoyi ke rushewa", bullets: ["Rashin amana; shugabanni na kama iko", "Rashin bayanai; jinkirin biya", "Sayarwa a gefe bayan yarjejeniyar ƙungiya"] }
          ],
          sources: [ICA],
          tryIt: "Ku rubuta abubuwa uku da ƙungiya za ta iya yi wa gonarku wanda ba za ku iya yi ku kaɗai ba, da haɗari ɗaya da ya fi damunku. Ku tambayi maƙwabta biyu abin da za su so daga ƙungiya, ku rubuta amsoshinsu.",
          youCanNow: "bayyana mece ce ƙungiyar haɗin gwiwa, abin da ƙungiya za ta iya yi wa manoma, da manyan dalilan da ke sa ƙungiyoyi su rushe.",
          quickCheck: [
            { objective: "O1", q: "Waɗanne irin ƙungiyoyin manoma ne ke akwai?", options: ["Daga ƙungiyoyin taimakon kai ko na manoma marasa rajista har zuwa ƙungiyoyin haɗin gwiwa masu rajista", "Kamfanoni masu rajista kaɗai", "Ofisoshin gwamnati kaɗai", "Ƙungiyoyin da ke da manoma fiye da 1,000 kaɗai"], answer: 0, why: "Ƙungiyoyi suna farawa daga ƙungiyoyin taimakon kai ko na manoma marasa rajista har zuwa ƙungiyoyin haɗin gwiwa masu rajista." },
            { objective: "O1", q: "Maƙwabtanku suna son su sayar da masara tare, amma ba su shirya yin rajista ba. Me za su iya yi?", options: ["Su jira har sai sun iya rajista kafin su yi komai", "Kowa ya ci gaba da sayarwa shi kaɗai har abada", "Su roƙi ɗan kasuwa ya zama shugabansu", "Su fara a matsayin ƙungiya marar rajista, su yi rajista daga baya"], answer: 3, why: "Ƙungiya za ta iya farawa ba tare da rajista ba, ta yi rajista daga baya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kafa ƙungiya: dokoki da rajista",
          minutes: 6,
          goal: "Rubuta daftarin manyan dokokin ƙungiya, ku kuma gano inda za a yi mata rajista.",
          text: [
            "Ku fara da mutanen da ke shuka amfanin gona iri ɗaya ko ke buƙatar hidima iri ɗaya, waɗanda ke zaune kusa don su iya haɗuwa, kuma suke amincewa da juna. Ku amince da manufa a sarari, kamar \"mu sayar da masararmu tare kuma mu sayi kayan noma da yawa\". Ku yi taron farko, ku rubuta bayanin taron (minutes), ku kuma zaɓi kwamitin wucin gadi.",
            "Dokokin ƙungiya (by-laws) su ne rubutattun ƙa'idodin ƙungiyar. Yawanci sun haɗa da: suna, adireshi da manufa; wa zai iya shiga da yadda; kuɗin shiga da hannun jari (shares); taruka, ƙididdigar mambobi da ake buƙata (quorum) da zaɓe (ƙungiyoyin haɗin gwiwa suna amfani da mamba ɗaya, ƙuri'a ɗaya); kwamiti, ikonsa da wa'adinsa; yadda ake ajiye kuɗi da duba shi; yadda ake raba ribar da ta rage; da yadda ake hukunta mambobin da suka karya doka. Ofishin ƙungiyoyin haɗin gwiwa sau da yawa yana da samfurin dokoki da za ku iya gyarawa.",
            "Rajista tana ba ƙungiya matsayin doka don mallakar kadara, buɗe asusun banki da sunanta, sa hannu a kwangiloli da karɓar bashi. Dokoki sun bambanta daga ƙasa zuwa ƙasa. A Kenya, ƙungiyoyi suna rajista ƙarƙashin Dokar Ƙungiyoyin Haɗin Gwiwa (Co-operative Societies Act) ta hannun Commissioner for Co-operative Development, ana farawa a ofishin ƙungiyoyin haɗin gwiwa na gundumar (county). A Najeriya, Dokar Ƙungiyoyin Haɗin Gwiwa ta ce ƙungiyar farko tana buƙatar aƙalla mambobi goma da suka cancanta, kuma tana nema, tare da dokokinta, ga Daraktan Ƙungiyoyin Haɗin Gwiwa na Jiha. A Ghana, ƙungiyoyi suna rajista a Department of Co-operatives ta ofishinta na gunduma (district). Kuɗaɗe, fom da matakai suna canjawa, don haka ku ziyarci ko ku kira ofishin kafin ku nema."
          ],
          steps: ["Ku amince da manufar ƙungiyar a jimla ɗaya.", "Ku yi taron farko; ku rubuta bayanin taro da sunayen mambobi.", "Ku zaɓi kwamitin wucin gadi: shugaba, sakatare, ma'aji.", "Ku samo samfurin dokoki daga ofishin ƙungiyoyin haɗin gwiwa ku gyara su.", "Ku amince da manyan dokoki a taron mambobi, ku rubuta zaɓen.", "Ku ziyarci ofishin ƙungiyoyin haɗin gwiwa: ku nemi sabbin fom, kuɗaɗe da matakai."],
          words: [["Dokokin ƙungiya (by-laws)", "rubutattun ƙa'idodin da ƙungiya ta amince za ta bi."], ["Quorum (ƙididdigar da ake buƙata)", "mafi ƙarancin yawan mambobin da dole su halarta kafin shawarar taro ta yi aiki."], ["Mamba ɗaya, ƙuri'a ɗaya", "kowane mamba yana da ƙuri'a ɗaya, ko hannun jari nawa yake da shi."], ["Rajista", "amincewar hukuma da ke ba ƙungiya matsayin doka."]],
          slides: [
            { title: "Ku fara daidai", bullets: ["Amfanin gona ko buƙata iri ɗaya; zama kusa; amana", "Manufa a jimla ɗaya", "Taron farko, bayanin taro, kwamitin wucin gadi"] },
            { title: "Dokokin ƙungiya sun haɗa da", bullets: ["Manufa, shiga ƙungiya, kuɗin shiga da hannun jari", "Taruka, quorum, mamba ɗaya ƙuri'a ɗaya", "Kwamiti, kuɗi, rabon riba, hukunci"] },
            { title: "Inda za a yi rajista", bullets: ["Kenya: ofishin haɗin gwiwa na county / Commissioner for Co-operative Development", "Najeriya: Daraktan Ƙungiyoyin Haɗin Gwiwa na Jiha", "Ghana: ofishin Department of Co-operatives na gunduma"] },
            { title: "Kafin ku nema", bullets: ["Dokoki, fom da kuɗaɗe suna canjawa", "Ku ziyarci ko ku kira ofishin tukuna", "Ku nemi samfurin dokoki"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Ku rubuta dokoki biyar don ƙungiyarku: wa zai iya shiga, kuɗin shiga ko hannun jari, sau nawa za ku yi taro da quorum, yadda zaɓe ke aiki, da abin da zai faru idan mamba ya sayar a gefe. Sannan ku nemo adireshi ko lambar wayar ofishin ƙungiyoyin haɗin gwiwa mafi kusa da ku.",
          youCanNow: "rubuta daftarin manyan dokokin ƙungiyar manoma da sanin inda za a yi mata rajista a ƙasarku.",
          quickCheck: [
            { objective: "O2", q: "Me rajista ke ba ƙungiyar manoma?", options: ["Tabbataccen farashi", "Kayan noma kyauta", "Matsayin doka don mallakar kadara, buɗe asusun banki, sa hannu a kwangiloli da karɓar bashi", "Albashi daga gwamnati"], answer: 2, why: "Rajista tana ba ƙungiya matsayin doka don mallakar kadara, amfani da banki, sa hannu a kwangiloli da karɓar bashi." },
            { objective: "O2", q: "Ƙungiyarku tana rubuta dokoki kuma ba ta san inda za ta fara ba. Me za ku yi?", options: ["Ku kwafi dokokin wani kamfani daga intanet", "Ku nemi samfurin dokoki daga ofishin ƙungiyoyin haɗin gwiwa don ku gyara", "Ku bar shugaba ya rubuta su shi kaɗai", "Ku tsallake dokokin"], answer: 1, why: "Ofisoshin ƙungiyoyin haɗin gwiwa sau da yawa suna da samfurin dokokin da ƙungiyoyi za su iya gyarawa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gudanar da ƙungiya: taruka da bayanai",
          minutes: 5,
          goal: "Gudanar da gajeren taro mai ajanda da bayanin taro, ku kuma kafa manyan bayanan ƙungiya.",
          text: [
            "Taruka masu kyau suna gina amana. Ku aika da rana da ajanda tun da wuri (saƙon SMS ko WhatsApp yana aiki), ku fara a kan lokaci, ku duba quorum, ku bi ajanda, ku bar kowane mamba ya yi magana, ku jefa ƙuri'a kan shawarwari, ku kuma rubuta bayanin taro (minutes): wa ya zo, me aka yanke, da wa zai yi me kafin yaushe. Ku karanta bayanin taron da ya gabata a farkon kowane taro. Ku yi babban taron shekara (AGM) inda mambobi ke jin bayanan kuɗi kuma suke zaɓen kwamiti.",
            "Bayanai su ne ƙwaƙwalwar ƙungiya, kuma shaidarta ce ga masu saye, bankuna da ofishin ƙungiyoyin haɗin gwiwa. Ku ajiye aƙalla: rajistar mambobi (sunaye, lambobin waya, hannun jarin da aka biya), littafin kuɗi na duk kuɗin da ya shigo da wanda ya fita tare da rasit, littafin kawo amfanin gona da ke nuna abin da kowane mamba ya kawo, ingancinsa da nauyinsa, da bayanan biya da ke nuna abin da aka biya kowane mamba. Dokar Ƙungiyoyin Haɗin Gwiwa ta Najeriya, alal misali, ta ce dole a binciki bayanan kuɗin ƙungiya mai rajista (audit) kowace shekara.",
            "Ku kare kuɗin: ku yi amfani da asusun banki ko na kuɗin waya (mobile money) na ƙungiya, mutum biyu su sa hannu ko su amince da kowane biya, ku ba da rasit na kowane shilling, naira ko cedi, ku kuma karanta bayanan kuɗi da babbar murya a taruka. Takardar lissafi (spreadsheet) a waya ko manhaja kyauta za ta iya ajiye bayanai, amma ku ajiye kwafi a takarda ma, kuma kada ku taɓa raba lambar PIN ko kalmar sirri (password)."
          ],
          steps: ["Ku aika da rana da ajanda tun da wuri.", "Ku duba quorum; ku bi ajanda; ku jefa ƙuri'a kan shawarwari.", "Ku rubuta bayanin taro: wa ya zo, me aka yanke, wa zai yi me kafin yaushe.", "Ku kafa bayanai huɗu: mambobi, littafin kuɗi, kawo amfanin gona, biya.", "Ku yi amfani da asusun ƙungiya mai masu sa hannu biyu; ku ba da rasit.", "Ku karanta bayanan kuɗi da babbar murya a kowane taro; a binciki kuɗi sau ɗaya a shekara."],
          words: [["Ajanda", "jerin abubuwan da za a tattauna a taro."], ["Bayanin taro (minutes)", "rubutaccen bayanin abin da taro ya yanke."], ["Babban taron shekara (AGM)", "taron shekara-shekara na dukkan mambobi don jin bayanan kuɗi da zaɓen shugabanni."], ["Binciken kuɗi (audit)", "duba bayanan kuɗin ƙungiya da wani mai zaman kansa ke yi."], ["Mai sa hannu (signatory)", "mutumin da aka ba izinin amincewa da biya daga asusu."]],
          slides: [
            { title: "Taruka masu kyau", bullets: ["An aika ajanda tun da wuri; a fara a kan lokaci", "A duba quorum; kowa ya yi magana; a jefa ƙuri'a", "Bayanin taro: shawarwari, wa zai yi me kafin yaushe"] },
            { title: "Manyan bayanai huɗu", bullets: ["Rajistar mambobi", "Littafin kuɗi tare da rasit", "Littafin kawo amfanin gona da bayanan biya"] },
            { title: "Ku kare kuɗin", bullets: ["Asusun ƙungiya; masu sa hannu biyu", "Rasit na kowane biya", "A karanta bayanan kuɗi da babbar murya; a bincika kowace shekara"] }
          ],
          sources: [NG_ACT],
          tryIt: "Ku rubuta ajanda mai abubuwa huɗu don taron ƙungiyarku na gaba. Sannan ku zana layukan littafin kawo amfanin gona: rana, sunan mamba, amfanin gona, inganci, nauyi, wanda ya karɓa.",
          youCanNow: "gudanar da taron ƙungiya mai ajanda da bayanin taro, da ajiye bayanan da ke gina amana.",
          quickCheck: [
            { objective: "O3", q: "Me ke faruwa a babban taron shekara (AGM)?", options: ["Mai saye ne ke faɗin farashi", "Mambobi suna jin bayanan kuɗi kuma suna zaɓen kwamiti", "Ƙungiya tana sayar da rumbunta", "Shugaba ne kaɗai ke magana"], answer: 1, why: "A AGM, mambobi suna jin bayanan kuɗi kuma suna zaɓen kwamiti." },
            { objective: "O3", q: "Ku ne kuke jagorantar taron yau, kuma quorum ya cika. Me za ku fara yi?", options: ["Ku karanta bayanin taron da ya gabata", "Ku nemi kuɗi", "Ku tsallake ajanda", "Ku ƙare taron da wuri"], answer: 0, why: "Karanta bayanin taron da ya gabata a farko yana sa kowa ya bi hanya ɗaya kuma yana gina amana." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Gina ƙungiyar manoma mai ƙarfi",
        questions: [
          { objective: "O1", q: "A ƙungiyar haɗin gwiwa, wa ke mallaka da sarrafa kasuwancin?", options: ["Mai saye", "Gwamnati", "Mambobi", "Shugaba shi kaɗai"], answer: 2, why: "Mambobi ne ke mallaka, sarrafawa da amfani da ƙungiyar haɗin gwiwa." },
          { objective: "O1", q: "Wani mamba ya sayar wa wani ɗan kasuwa bayan ƙungiyar ta amince da yarjejeniya. Ana kiran wannan:", options: ["Saye da yawa", "Sayarwa a gefe", "Tara amfanin gona", "Binciken kuɗi"], answer: 1, why: "Sayarwa a gefe tana karya yarjejeniyar ƙungiya, kuma tana daga cikin dalilan da aka saba gani na rushewar ƙungiyoyi." },
          { objective: "O2", q: "A Najeriya, ina ƙungiyar haɗin gwiwa ta farko ke neman rajista?", options: ["Daraktan Ƙungiyoyin Haɗin Gwiwa na Jiha", "'Yan sanda", "Hukumar ƙwallon ƙafa", "Kowane banki"], answer: 0, why: "Dokar Ƙungiyoyin Haɗin Gwiwa tana tura buƙatun rajista, tare da dokokin ƙungiya, ga Daraktan Ƙungiyoyin Haɗin Gwiwa." },
          { objective: "O3", q: "Mene ne quorum?", options: ["Asusun banki na ƙungiya", "Wani irin amfanin gona", "Lokacin shan shayi a taro", "Mafi ƙarancin yawan mambobin da ake buƙata kafin shawarwari su yi aiki"], answer: 3, why: "Ba tare da quorum ba, shawarwarin taro ba su da inganci." },
          { objective: "O3", q: "Wace al'ada ce ta fi kare kuɗin ƙungiya?", options: ["Mutum ɗaya ya ajiye dukkan kuɗi a gidansa", "Ba rasit, don a rage takarda", "Masu sa hannu biyu, rasit da karanta bayanan kuɗi da babbar murya", "Raba lambar PIN da dukkan mambobi"], answer: 2, why: "Masu amincewa biyu, rasit da bayyana bayanan kuɗi suna sa sata da kuskure su yi wuya." }
        ]
      }
    },
    {
      name: "Babi na 2: Kai amfanin gona kasuwa tare",
      lessons: [
        {
          objectives: ["O4"],
          title: "Tara amfanin gona da sayarwa tare",
          minutes: 5,
          goal: "Kafa ranar tara amfanin gona inda ake duba, aunawa, rubutawa da biyan kuɗin amfanin gonar mambobi cikin adalci.",
          text: [
            "Tara amfanin gona (aggregation) yana nufin haɗa ɗan kaɗan na mambobi da yawa ya zama kaya ɗaya babba mai inganci iri ɗaya. Manyan masu saye kamar masana'antun sarrafa abinci, injinan niƙa, makarantu, manyan shaguna (supermarkets) da masu fitar da kaya waje suna son yawan kaya akai-akai mai inganci iri ɗaya, a kawo shi a kan lokaci. Ƙungiyar da za ta iya cika babbar mota da amfanin gona mai tsabta, busasshe kuma rarrabe bisa inganci, za ta iya sayar musu, ta samu fiye da abin da ake samu a bakin gona.",
            "Ku gudanar da wurin tarawa ko ranar tarawa da dokoki a sarari: ingancin da mai saye ke so (misali masara busasshiya, mai tsabta, wadda aka tace, ba ta wuce danshin da mai saye ya yarda ba), ma'auni (sikeli) da aka amince da shi, da bayani na kowane kawowa. Ku duba ku rarraba amfanin gonar kowane mamba bisa inganci, ku auna shi a gabansa, ku rubuta shi a littafin kawo amfanin gona, ku ba shi rasit. Ku ajiye kayan lafiya har mai saye ya zo ya ɗauka.",
            "Ku biya mambobi bisa bayanan: nauyi sau farashin da aka amince da shi na ingancinsu, a cire duk kuɗin ƙungiya da aka amince da shi na sufuri, adana ko buhuna, wanda aka yanke tun da wuri kuma aka rubuta a dokokin ƙungiya ko bayanin taro. Ku biya a kan lokaci, ta kuɗin waya (mobile money) ko banki idan zai yiwu. Biya mai sauri, adalci kuma a fili shi ne mafi kyawun kariya daga sayarwa a gefe."
          ],
          steps: ["Ku amince da dokokin inganci na mai saye, ku sanar da dukkan mambobi tun da wuri.", "Ku tsayar da ranar tarawa, wuri da ma'aunin da aka amince da shi.", "Ku duba, ku rarraba, ku auna kowane kawowa a gaban mamban.", "Ku rubuta shi a littafin kawo amfanin gona; ku ba da rasit.", "Ku ajiye kayan lafiya; ku kai wa mai saye tare.", "Ku biya kowane mamba bisa bayanan, a cire kuɗaɗen da aka amince, a kan lokaci."],
          words: [["Tara amfanin gona (aggregation)", "haɗa ɗan kaɗan da yawa ya zama kaya ɗaya babba."], ["Wurin tarawa (collection point)", "wurin da mambobi ke kawo amfanin gona don a duba kuma a rubuta."], ["Kaya ɗaya (lot)", "tarin amfanin gona iri ɗaya mai inganci iri ɗaya."]],
          slides: [
            { title: "Me yasa za a tara", bullets: ["Manyan masu saye suna son yawa, inganci, kan lokaci", "Cika babbar mota da inganci iri ɗaya", "Farashi mafi kyau fiye da na bakin gona"] },
            { title: "Ranar tarawa", bullets: ["An san dokokin inganci na mai saye tun da wuri", "A rarraba kuma a auna a gaban mamban", "A rubuta kuma a ba da rasit"] },
            { title: "Ku biya cikin adalci da sauri", bullets: ["Nauyi x farashin ingancin", "A cire kuɗaɗen da aka amince tun da wuri", "A kan lokaci, ta kuɗin waya ko banki"] }
          ],
          tryIt: "Ku tsara ranar tarawa ɗaya don ƙungiyarku: rana, wuri, ma'auni, dokokin inganci na mai saye, wa zai rubuta, da kuɗin ƙungiya a kowane buhu ko kilo da aka amince tun da wuri. Ku rubuta yadda da yaushe za a biya mambobi.",
          youCanNow: "gudanar da ranar tarawa cikin adalci da biyan mambobi bisa bayanai a sarari.",
          quickCheck: [
            { objective: "O4", q: "Mene ne wurin tarawa ko ranar tarawa?", options: ["Bikin mambobi", "Reshen banki", "Ofishin mai saye", "Wuri da ranar da mambobi ke kawo amfanin gona don a duba, a auna kuma a rubuta"], answer: 3, why: "A wurin tarawa, ana duba amfanin gona, a rarraba bisa inganci, a auna, a rubuta kuma a ajiye har mai saye ya ɗauka." },
            { objective: "O4", q: "Masarar wani mamba tana da danshi fiye da yadda mai saye ya yarda. Me za ku yi a wurin tarawa?", options: ["Ku gauraya ta da busasshiyar masara don kada kowa ya gane", "Ku biya mamban ninki biyu", "Kada ku saka ta cikin kayan har sai an busar da ita zuwa matakin mai saye", "Ku ɓoye ta a ƙasan motar"], answer: 2, why: "Dole kayan su kai ingancin da mai saye ke so, don haka ana duba amfanin gona a rarraba shi kafin a karɓa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Duba farashin kasuwa ta waya",
          minutes: 5,
          goal: "Samun farashi daga aƙalla wurare uku, ku kuma lissafa ainihin darajar tayi a bakin gonarku.",
          text: [
            "Kada ku taɓa sayarwa ba tare da sanin farashi ba. Ku tambayi aƙalla masu saye uku, ku saurari rahoton kasuwa a rediyo, ku kuma duba hidimomin bayanan kasuwa na hukuma. A Kenya, tsarin KAMIS na Ma'aikatar Noma yana wallafa farashin sari (wholesale), na ƙiri (retail) da na bakin gona na amfanin gona da dabbobi da yawa daga kasuwanni a gundumomi (counties). A Najeriya da Ghana, ku tambayi ofishin faɗakarwar noma (extension), ƙungiyar masu kayan amfanin gona ko ƙungiyar haɗakar ƙungiyoyin haɗin gwiwa wace hidimar farashi ce ke rufe amfanin gonarku.",
            "Ku kwatanta abu da irinsa: farashi a kowane kilo ko buhu na inganci iri ɗaya, a wuri ɗaya. Farashi mafi tsada a kasuwa mai nisa zai iya zama ƙasa da haka bayan kuɗin sufuri, lodi, kuɗaɗen kasuwa da asara. Ku lissafa farashi a bakin gonarku: farashin kasuwa a cire dukkan kuɗin kai shi can.",
            "Waya tana taimakawa. Ku ajiye ɗan littafin farashi mai sauƙi kowane mako, ku raba shi a WhatsApp na ƙungiya, ku kuma yi amfani da na'urar lissafi ko mataimakin AI don kwatanta tayi. Ku yi hankali da zamba: duk wanda ya ce ku biya kuɗi don samun farashi mai tsada \"tabbatacce\", ko ya nemi lambar PIN ta kuɗin wayarku, ba ainihin mai saye ba ne."
          ],
          steps: ["Ku samo farashi daga aƙalla wurare uku: masu saye, rediyo, hidimar hukuma.", "Ku tabbatar kowanne na amfanin gona, inganci da ma'auni iri ɗaya ne.", "Ku cire sufuri, lodi, kuɗaɗe da asara don samun farashin bakin gona.", "Ku rubuta farashi kowane mako ku raba wa ƙungiya.", "Ku yi watsi da duk wanda ya nemi kuɗi ko PIN don ya samo muku farashi."],
          words: [["Farashin bakin gona (farm-gate price)", "farashin da mai saye ke biyan ku a gonarku."], ["Farashin sari (wholesale price)", "farashin kaya masu yawa da ake sayarwa ga 'yan kasuwa ko shaguna."], ["Hidimar bayanan kasuwa", "hidimar da ke wallafa farashin kasuwa na yanzu."]],
          slides: [
            { title: "Aƙalla wurare uku", bullets: ["Masu saye da yawa", "Rahoton kasuwa a rediyo", "Hidimomin hukuma (Kenya: KAMIS)"] },
            { title: "Ku kwatanta abu da irinsa", bullets: ["Amfanin gona, inganci da ma'auni iri ɗaya", "Farashin kasuwa a cire sufuri da kuɗaɗe", "= darajarsa a bakin gonarku"] },
            { title: "Ku yi amfani da waya da hikima", bullets: ["Littafin farashi na kowane mako; ku raba wa ƙungiya", "Na'urar lissafi ko AI don kwatanta tayi", "Ainihin masu saye ba sa neman kuɗi ko PIN"] }
          ],
          sources: [KAMIS],
          tryIt: "A wannan makon, ku samo farashin amfanin gona ɗaya daga wurare uku, ku rubuta su a tebur: wuri, farashi, inganci, ma'auni, gari. Ku lissafa farashi a bakin gonarku na mafi kyau biyu bayan kuɗin sufuri. Wane tayi ne ainihin ya fi biya?",
          youCanNow: "duba farashi daga wurare da yawa da lissafa wane tayi ne ainihin ya fi biya.",
          quickCheck: [
            { objective: "O5", q: "Me \"kwatanta abu da irinsa\" ke nufi game da farashi?", options: ["Kwatanta farashi a kowane kilo ko buhu na inganci iri ɗaya a wuri ɗaya", "Kwatanta farashi mafi tsada kaɗai", "Kwatanta bana da shekaru goma da suka wuce", "Kwatanta masara da tumatir"], answer: 0, why: "Farashi yana kwatantuwa cikin adalci ne kawai idan inganci, ma'auni da wuri iri ɗaya ne." },
            { objective: "O5", q: "Ƙungiyarku tana son bin farashi kowane mako. Me za ku yi?", options: ["Ku tambayi ɗan kasuwa ɗaya sau ɗaya a damina", "Ku ajiye littafin farashi mai sauƙi kowane mako ku raba shi a WhatsApp na ƙungiya", "Ku yi hasashe daga bara", "Ku jira mai saye ya gaya muku"], answer: 1, why: "Littafin farashi na kowane mako da aka raba a ƙungiya yana taimaka wa mambobi su san farashi kafin su sayar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kwangiloli da masu saye",
          minutes: 6,
          goal: "Karanta kwangilar mai saye, ku kuma duba manyan sharuɗɗa kafin ƙungiya ta sa hannu.",
          text: [
            "Kwangila rubutacciyar yarjejeniya ce tsakanin ƙungiya da mai saye. Kwangila mai kyau tana ba da tabbatacciyar kasuwa da sanannen farashi; mummuna kuma za ta iya bar ƙungiya da amfanin gonar da babu wanda ya zo ya ɗauka, ko kuɗin da ba za su taɓa zuwa ba. Ku sa kowace yarjejeniya a rubuce, ko da da mai sayen da kuka sani ne.",
            "Ku duba waɗannan sharuɗɗa: wane kaya ne da wane inganci; nawa ne da yaushe; farashi, ko yadda za a tsayar da shi daidai (misali farashin kasuwa a ranar kai kaya ƙari ko ragi wani adadi); a ina za a kai kaya da wa zai biya sufuri; yadda za a duba inganci da abin da zai faru da kayan da aka ƙi; yaushe da yadda za a biya; abin da zai faru idan girbi ya gaza ko mai saye bai zo ɗauka ba; da yadda za a warware rigima.",
            "Idan wani sashe bai fito fili ba, ku nemi mai saye ya bayyana shi a rubuce. Ku karanta shi da babbar murya a taron mambobi don kowa ya fahimci aikinsa, har da hana sayarwa a gefe. Ku nemi ofishin ƙungiyoyin haɗin gwiwa, jami'in faɗakarwar noma ko lauya ya duba manyan kwangiloli. Mataimakin AI zai iya bayanin kalmomi masu wuya da harshe mai sauƙi, amma kada ku taɓa rubuta bayanan bankin ƙungiya ko lambobin PIN a ciki, kuma ba ya maye gurbin shawarar lauya."
          ],
          steps: ["Ku samo tayin a rubuce.", "Ku duba kaya, inganci, yawa da ranaku.", "Ku duba farashi ko yadda ake tsayar da shi, wurin kai kaya da wa zai biya sufuri.", "Ku duba duba inganci, dokokin ƙin kaya, ranar biya da hanyar biya.", "Ku duba abin da zai faru idan girbi ya gaza ko mai saye bai zo ɗauka ba, da yadda ake warware rigima.", "Ku karanta wa mambobi; a duba manyan kwangiloli kafin a sa hannu."],
          words: [["Kwangila", "rubutacciyar yarjejeniya da dole ɓangarorin biyu su cika."], ["Ƙin kaya (rejection)", "lokacin da mai saye ya ƙi kayan da ba su kai ingancin da aka amince ba."], ["Rigima (dispute)", "saɓani tsakanin ƙungiya da mai saye."]],
          slides: [
            { title: "Koyaushe a rubuce", bullets: ["Ko da da mai sayen da kuka sani ne", "Tabbatacciyar kasuwa da sanannen farashi", "Mummunan sharuɗɗa za su iya cutar da dukkan ƙungiya"] },
            { title: "Ku duba sharuɗɗan", bullets: ["Kaya, inganci, yawa, ranaku", "Farashi ko yadda ake tsayar da shi; kai kaya da sufuri", "Duba inganci, ƙin kaya, ranar biya da hanyar biya"] },
            { title: "Idan abubuwa suka lalace", bullets: ["Girbi ya gaza ko mai saye bai zo ɗauka ba", "Yadda ake warware rigima", "Ku nemi mai saye ya bayyana a rubuce"] },
            { title: "Kafin a sa hannu", bullets: ["Ku karanta wa mambobi da babbar murya", "Manyan kwangiloli: ofishin haɗin gwiwa, faɗakarwar noma ko lauya", "AI zai iya bayanin kalmomi; ba bayanan banki ko PIN"] }
          ],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin sayarwa na ƙungiyarku mai shafi ɗaya don amfanin gona ɗaya. Ku saka manufar ƙungiya, dokoki biyar, inda za ku yi rajista, bayananku, yadda mambobi ke kawo amfanin gona da yadda ake biyansu, farashi daga wurare uku, da sharuɗɗan kwangilar da za ku duba kafin ku sa hannu.",
          youCanNow: "karanta kwangilar mai saye, duba manyan sharuɗɗanta, da tsara yadda ƙungiyarku za ta sayar tare.",
          quickCheck: [
            { objective: "O6", q: "Mece ce kwangilar mai saye?", options: ["Rasit na buhu ɗaya", "Saƙon WhatsApp na gaisuwa", "Rubutacciyar yarjejeniya tsakanin ƙungiya da mai saye", "Bashi daga banki"], answer: 2, why: "Kwangila rubutacciyar yarjejeniya ce da ke bayyana abin da kowane ɓangare zai yi." },
            { objective: "O6", q: "Mambobi ba su fahimci sharuɗɗan inganci na kwangilar ba. Me za ku yi kafin a sa hannu?", options: ["Ku sa hannu da sauri kafin mai saye ya tafi", "Ku bar shugaba ya sa hannu shi kaɗai", "Ku yi watsi da sharuɗɗan inganci", "Ku nemi mai saye ya bayyana a rubuce, ku karanta shi da babbar murya a taron mambobi"], answer: 3, why: "Ana bayyana sassan da ba su fito fili ba a rubuce, a karanta su da babbar murya don kowane mamba ya fahimci aikinsa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Kai amfanin gona kasuwa tare",
        questions: [
          { objective: "O4", q: "Me yasa manyan masu saye suka fi son saye daga ƙungiyoyi?", options: ["Ƙungiyoyi koyaushe suna sayarwa mafi rahusa", "Ƙungiyoyi za su iya kawo kaya masu yawa, masu inganci iri ɗaya, a kan lokaci", "Ƙungiyoyi ba sa buƙatar inganci", "Doka ta tilasta wa masu saye"], answer: 1, why: "Tara amfanin gona yana ba da yawa da ingancin da manyan masu saye ke buƙata." },
          { objective: "O4", q: "A wurin tarawa, yaushe ya kamata a auna amfanin gonar mamba?", options: ["A gaban mamban, sannan a rubuta a ba da rasit", "A ɓoye da dare", "Sai bayan mai saye ya biya", "Ba za a auna ba; a yi kiyasi"], answer: 0, why: "Aunawa a fili da rasit suna gina amana kuma suna tabbatar da kason kowane mamba." },
          { objective: "O5", q: "Kasuwa mai nisa tana biyan kashi 10 cikin 100 fiye, amma sufuri da kuɗaɗe sun kai kashi 15 cikin 100. Mene ne gaskiya?", options: ["Kasuwa mai nisa ta fi biya", "Dukansu suna biyan iri ɗaya", "Kuɗin sufuri ba su da muhimmanci", "Kasuwa mai nisa ta fi ƙarancin biya a bakin gonarku"], answer: 3, why: "Bayan cire kuɗaɗe, farashin bakin gona daga kasuwa mai nisa ya fi ƙasa." },
          { objective: "O5", q: "A Kenya, wace hidimar hukuma ce ke wallafa farashin kasuwar amfanin gona da dabbobi?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, wanda Ma'aikatar Noma ke gudanarwa, yana wallafa farashin kasuwa." },
          { objective: "O6", q: "Wane sharaɗin kwangila ne ke faɗin abin da zai faru idan mai saye bai zo ɗauka ba?", options: ["Sunan ƙungiya", "Ranar taro", "Sharuɗɗan gazawar ɗauka ko kai kaya", "Launin buhuna"], answer: 2, why: "Ya kamata kwangiloli su faɗi abin da zai faru idan wani ɓangare ya kasa cika yarjejeniyar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa",
    questions: [
      { objective: "O1", q: "Wanne ne amfanin ƙungiyar manoma?", options: ["Biyan kuɗi fiye da kima kan kayan noma", "Sayen kayan noma da yawa a farashi mai rahusa", "Sayarwa shi kaɗai a bakin gona", "Rashin ajiye bayanai"], answer: 1, why: "Saye da yawa yana rage kuɗin kayan noma." },
      { objective: "O1", q: "Bisa ga International Cooperative Alliance, mambobin ƙungiyar haɗin gwiwa:", options: ["Su ne masu ita kuma suna sarrafa ta ta dimokuraɗiyya", "Suna aiki wa wani mai shi na kansa", "Ba su da ƙuri'a", "Dole dukkansu ma'aikatan gwamnati ne"], answer: 0, why: "Ƙungiyar haɗin gwiwa mallakar mambobi ce tare, kuma ana sarrafa ta ta dimokuraɗiyya." },
      { objective: "O1", q: "Wanne ne dalili da aka saba gani na rushewar ƙungiyoyin manoma?", options: ["Bayanai a sarari", "Biya a kan lokaci", "Rashin amana da rashin bayanai", "Taruka a fili"], answer: 2, why: "Rashin amana da rashin bayanai suna wargaza ƙungiyoyi." },
      { objective: "O2", q: "Mene ne dokokin ƙungiya (by-laws)?", options: ["Bashin banki", "Farashin kasuwa", "Kwangilolin masu saye", "Rubutattun ƙa'idodin ƙungiya"], answer: 3, why: "Dokokin ƙungiya suna bayyana yadda ƙungiya ke aiki." },
      { objective: "O2", q: "\"Mamba ɗaya, ƙuri'a ɗaya\" yana nufin:", options: ["Mambobin da ke da hannun jari mai yawa suna samun ƙuri'u da yawa", "Shugabanni ne kaɗai ke zaɓe", "Kowane mamba yana da ƙuri'a ɗaya", "Ana sayen ƙuri'u"], answer: 2, why: "Ƙungiyoyin haɗin gwiwa suna ba kowane mamba ƙuri'a ɗaya." },
      { objective: "O2", q: "A Kenya, ana yi wa ƙungiyoyin haɗin gwiwa rajista ƙarƙashin Co-operative Societies Act ta hannun:", options: ["Commissioner for Co-operative Development", "Hukumar Kula da Namun Daji ta Kenya", "Wani mai saye na kansa", "Sashen yanayi"], answer: 0, why: "Commissioner ne ke yi wa ƙungiyoyi rajista, ana farawa a ofishin ƙungiyoyin haɗin gwiwa na county." },
      { objective: "O2", q: "A Ghana, ina ƙungiyoyin haɗin gwiwa ke yin rajista?", options: ["Hukumar hasashen yanayi", "Gidan rediyo", "Kowane shago", "Department of Co-operatives (ofishin gunduma)"], answer: 3, why: "Department of Co-operatives ta Ghana ce ke yi wa ƙungiyoyi rajista kuma take sa ido a kansu." },
      { objective: "O2", q: "Kafin ku nemi rajista, ya kamata ku:", options: ["Yi hasashen kuɗin", "Tabbatar da sabbin fom, kuɗaɗe da matakai a ofishin ƙungiyoyin haɗin gwiwa", "Kwafi dokokin wata ƙasa", "Tsallake dokokin ƙungiya"], answer: 1, why: "Dokoki da kuɗaɗe suna canjawa, don haka ku tabbatar a ofishin." },
      { objective: "O3", q: "Bayanin taro (minutes) yana rubuta:", options: ["Lokacin da kowane mutum ya iso kaɗai", "Farashin kasuwa", "Lambobin PIN na mambobi", "Wa ya zo, me aka yanke da wa zai yi me kafin yaushe"], answer: 3, why: "Bayanin taro shi ne rubutaccen bayanin shawarwari da ayyuka." },
      { objective: "O3", q: "Wanne ne ɗaya daga cikin manyan bayanan ƙungiya huɗu?", options: ["Littafin kawo amfanin gona", "Littafin tarihin yanayi", "Jerin lambobin PIN na wayoyin masu saye", "Kundin hotuna"], answer: 0, why: "Littafin kawo amfanin gona yana nuna abin da kowane mamba ya kawo." },
      { objective: "O3", q: "Me yasa asusun ƙungiya ke da masu sa hannu biyu?", options: ["Don a rage saurin dukkan biya", "Don kada mutum ɗaya ya iya motsa kuɗi shi kaɗai", "Domin bankuna suna karɓar ƙasa", "Don kada mambobi su taɓa ganin bayanan kuɗi"], answer: 1, why: "Masu amincewa biyu suna kare kuɗin ƙungiya." },
      { objective: "O3", q: "Dokar Ƙungiyoyin Haɗin Gwiwa ta Najeriya ta ce bayanan kuɗin ƙungiya mai rajista dole su kasance:", options: ["A ɓoye", "Ana ƙone su kowace shekara", "Ana bincikar su (audit) kowace shekara", "A ƙwaƙwalwa kaɗai"], answer: 2, why: "Dokar ta ce dole a yi binciken kuɗi a ƙarshen kowace shekarar kuɗi." },
      { objective: "O4", q: "Tara amfanin gona (aggregation) yana nufin:", options: ["Sayar da buhu ɗaya a lokaci ɗaya", "Raba ƙungiya", "Ƙara farashi shi kaɗai", "Haɗa amfanin gonar mambobi da yawa ya zama kaya ɗaya babba"], answer: 3, why: "Tara amfanin gona yana haɗa ɗan kaɗan don manyan masu saye." },
      { objective: "O4", q: "Yaya ya kamata a biya mambobi bayan ƙungiya ta sayar?", options: ["Bisa bayanan: nauyi x farashin ingancin, a cire kuɗaɗen da aka amince", "Daidai wa daida, ko me suka kawo", "Shugabanni ne kaɗai ake biya", "Duk lokacin da ma'aji ya ga dama"], answer: 0, why: "Biya mai adalci da aka rubuta yana kiyaye amana kuma yana rage sayarwa a gefe." },
      { objective: "O4", q: "Mafi kyawun kariya daga sayarwa a gefe ita ce:", options: ["Ɓoye farashi", "Jinkirin biya", "Biya mai sauri, adalci kuma a fili", "Rashin kwangila"], answer: 2, why: "Mambobi suna zama masu biyayya idan ƙungiya ta biya da kyau kuma a kan lokaci." },
      { objective: "O5", q: "Wurare nawa ya kamata ku duba farashi kafin ku sayar?", options: ["Babu", "Mai saye ɗaya kaɗai", "Rediyo kawai", "Aƙalla uku"], answer: 3, why: "Wurare da yawa suna nuna ainihin farashin kasuwa." },
      { objective: "O5", q: "Wani ya yi alƙawarin farashi mai tsada tabbatacce idan kun fara biyan kuɗi kuma kun ba shi lambar PIN ta kuɗin wayarku. Wannan:", options: ["Mai saye ne na yau da kullum", "Mai yiwuwa zamba ce", "Dokar ƙungiyar haɗin gwiwa ce", "Hidimar gwamnati ce"], answer: 1, why: "Ainihin masu saye ba sa neman kuɗi ko PIN." },
      { objective: "O5", q: "Farashin tayi a bakin gona shi ne:", options: ["Farashin kasuwa a cire sufuri, kuɗaɗe da asara", "Farashi mafi tsada da kuka ji", "Farashi a babban birni", "Farashin ƙiri"], answer: 0, why: "Abin da kuke karɓa a zahiri a bakin gona shi ne mai muhimmanci." },
      { objective: "O6", q: "Me ya kamata a rubuta a kwangilar mai saye?", options: ["Sunan mai saye kaɗai", "Farashi ko yadda ake tsayar da shi, yawa, inganci, kai kaya da sharuɗɗan biya", "Lambobin PIN na bankin mambobi", "Babu komai; musabaha ta isa"], answer: 1, why: "Waɗannan sharuɗɗa suna kare ƙungiya idan wani abu ya lalace." },
      { objective: "O6", q: "Kuna amfani da mataimakin AI don fahimtar kwangila. Me ne ke lafiya?", options: ["Rubuta bayanan bankin ƙungiya da lambobin PIN", "Sa hannu a duk abin da ya ce yana da kyau", "Neman ya bayyana kalmomi masu wuya, sannan mai ba da shawara ya duba manyan kwangiloli", "Barin shi ya sa hannu a madadinku"], answer: 2, why: "AI zai iya bayanin kalmomi amma ba ya maye gurbin shawarar lauya, kuma bayanan sirri suna zama a sirri." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      2,
      3,
      7,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na tsarin, ku sake dubawa.",
    criteria: [
      {
        name: "Manufa da dokokin ƙungiya",
        objective: "O2",
        notYet: "Babu manufa a sarari, ko dokoki ƙasa da biyar.",
        meets: "Sunan ƙungiya, manufarta da manyan dokoki biyar, kamar shiga ƙungiya, zaɓe, kuɗi da hukunci.",
        exceeds: "Dokokin sun kuma haɗa da sayarwa a gefe da yadda ake raba ribar da ta rage."
      },
      {
        name: "Rajista",
        objective: "O2",
        notYet: "Ba a ambaci ofishin rajista ba.",
        meets: "Ya ambaci ofishin da ƙungiyar za ta yi rajista da abin da dole a tabbatar a can.",
        exceeds: "Ya kira ko ya ziyarci ofishin, ya rubuta matakan yanzu da ranar."
      },
      {
        name: "Bayanai da kuɗi",
        objective: "O3",
        notYet: "Babu bayanai, ko mutum ɗaya ne ke sarrafa kuɗin.",
        meets: "Rajistar mambobi, littafin kuɗi, littafin kawo amfanin gona da bayanan biya, kuma mutum biyu ne ke amincewa da biya.",
        exceeds: "Ya faɗi yadda za a karanta bayanan kuɗi ga mambobi kuma a bincika su kowace shekara."
      },
      {
        name: "Kawowa, rarrabawa da biya",
        objective: "O4",
        notYet: "Babu dokokin tarawa ko na biya.",
        meets: "Yadda mambobi ke kawo amfanin gona, yadda ake rarraba shi bisa inganci da auna shi a gabansu, da yadda da yaushe ake biyansu.",
        exceeds: "An rubuta kuɗaɗen ƙungiya da ranakun biya da aka amince tun da wuri."
      },
      {
        name: "Farashi",
        objective: "O5",
        notYet: "Wuraren farashi ƙasa da uku, ko babu lissafin farashin bakin gona.",
        meets: "Farashi daga aƙalla wurare uku, an kwatanta abu da irinsa, kuma an lissafa farashi a bakin gona.",
        exceeds: "Ya haɗa da littafin farashi na kowane mako na makonni da yawa."
      },
      {
        name: "Sharuɗɗan kwangila",
        objective: "O6",
        notYet: "Sharuɗɗa ƙasa da shida, ko babu manyan sharuɗɗa kamar biya.",
        meets: "Sharuɗɗan kwangila shida da za a duba, har da farashi, inganci, kai kaya, biya da gazawar ɗauka.",
        exceeds: "Ya ambaci wanda zai duba manyan kwangiloli, kamar ofishin ƙungiyoyin haɗin gwiwa ko lauya."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka samu \"Ya cika\" ko \"Ya wuce\" a kowane layin rubric na tsarin sayarwa na ƙungiya",
      "Ƙungiyoyin da suka ce sun rubuta dokoki, sun ajiye bayanai ko sun yi rajista cikin kwanaki 90 (binciken biyo baya)",
      "Ƙungiyoyin da suka ce sun yi sayarwa tare da rubutacciyar kwangila, da farashin idan aka kwatanta da sayarwa shi kaɗai",
      "Masu koyo da suka ce sun guje wa zambar biyan kuɗi don farashi ko ta neman PIN"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafin rubutu da alƙalami, ko littattafan bayanai na ƙungiya",
      "Waya mai sauƙi don farashi, SMS ko WhatsApp da na'urar lissafi",
      "Samfurin dokoki daga ofishin ƙungiyoyin haɗin gwiwa da misalin kwangilar mai saye, idan akwai",
      "Kusan minti 60 gaba ɗaya, a gajerun zama, tare da lokaci da ƙungiya don rubuta tsarin sayarwa"
    ],
    facilitatorNotes: [
      "Ku gudanar da kwas ɗin da ƙungiya ta gaske ko wadda ake kafawa: ku yi gwajin farko tare, sannan ku yi ɗan taron gwaji mai ajanda da bayanin taro.",
      "Ku gayyaci jami'in ƙungiyoyin haɗin gwiwa ya bayyana rajista; ku tabbatar da sabbin kuɗaɗe da matakai kafin zaman.",
      "Ku yi ranar tarawa ta gwaji da ma'auni, rarrabawa bisa inganci da littafin kawo amfanin gona.",
      "Kada ku taɓa neman mambobi su raba lambobin PIN ko bayanan banki; ku yi amfani da madadi a misalan bayanai.",
      "Ku ba da maki ga tsarin sayarwa da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
