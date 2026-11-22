"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-export-gap-certification.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Pesticides: registered products only, as the label says, with protective equipment; no doses or pre-harvest intervals as numbers. No figures for fees.

const GGAP_IFA = { name: "GLOBALG.A.P.: Integrated Farm Assurance (IFA) don 'ya'yan itace da kayan lambu (batutuwa, zaɓin ƙungiyar manoma, abubuwan kuɗi, matakan samun takardar shaida)", url: "https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/" };
const GGAP_PORTAL = { name: "GLOBALG.A.P.: Supply Chain Portal (duba takardar shaida da lambar GLOBALG.A.P.)", url: "https://globalgap.org/supply-chain-portal/" };
const EU_MRL = { name: "Hukumar Tarayyar Turai (European Commission): EU Pesticides Database (iyakar ragowar maganin ƙwari bisa abinci da magani)", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" };
const CODEX = { name: "Codex Alimentarius (FAO/WHO): ƙa'idojin abinci na duniya, har da iyakar ragowar maganin ƙwari", url: "https://codex.fao.org/" };
const KE_VEG_DROP = { name: "Business Daily (bayanan KNBS, rahoton AFA): kuɗin da Kenya ke samu daga fitar da kayan lambu ya ragu saboda dokokin EU kan maganin ƙwari; kame-kamen MRL sun tashi daga 25 (2023) zuwa 57 (2024)", url: "https://www.businessdailyafrica.com/bd/economy/kenya-s-vegetable-export-earnings-down-on-eu-pesticide-rules-5392706" };
const FAO_PEST_REG = { name: "FAO Pesticide Registration Toolkit: rajistar maganin ƙwari ta ƙasashe a Afirka", url: "https://www.fao.org/pesticide-registration-toolkit/information-sources/registrations-elsewhere/africa/en" };
const KE_AFA = { name: "Hukumar Noma da Abinci ta Kenya (AFA), Horticultural Crops Directorate: lasisin fitarwa da rajista (ku duba dokokin yanzu)", url: "https://www.afa.go.ke" };
const KEPHIS_PHYTO = { name: "KEPHIS (Kenya): hidimomin lafiyar shuka da takardar shaidar fitarwa", url: "https://www.kephis.go.ke/phytosanitary-services" };
const NEPC = { name: "Majalisar Bunƙasa Fitar da Kaya ta Najeriya (NEPC): rajistar masu fitar da kaya ta intanet", url: "https://nepc.gov.ng/get-started/e-registration/" };
const GEPA = { name: "Hukumar Bunƙasa Fitar da Kaya ta Ghana (GEPA): rajista a matsayin mai fitar da kaya", url: "https://www.gepaghana.org/" };

module.exports = {
  id: "agri-export-gap-certification-ha",
  lang: "ha",
  translationOf: "agri-export-gap-certification",
  category: "Agriculture (Africa)",
  name: "Sayarwa ga Manyan Kantuna, Masu Sarrafawa da Masu Saye don Fitarwa: Ƙa'idoji da Takardar Shaida",
  skills: "Karanta buƙatun mai saye, Bin Kyawawan Hanyoyin Noma, Ajiye bayanan bin diddigi, Auna takardar shaida, Cika iyakar ragowar magani da dokokin fitarwa, Rubuta tayin samarwa",
  outcome: "duba ko gonarku ko ƙungiyarku ta shirya samar wa babban kanti, kamfanin sarrafawa ko mai saye don fitarwa, rufe manyan giɓi a hanyoyin noma, bayanai da takardar shaida, da rubuta tayin samarwa da za ku iya cikawa.",
  about: [
    "Manyan kantuna (supermarkets), kamfanonin sarrafa amfanin gona da masu saye don fitarwa zuwa ƙasashen waje suna iya saye fiye da kasuwar gida, kuma sau da yawa suna biyan ƙarin kuɗi don inganci mai ɗorewa. Amma suna neman abubuwan da yawancin ƙananan gonaki ba sa yi tukuna: yawa mai ɗorewa, daraja ɗaya a kowane lokaci, bayanan da ke bin kowane akwati (crate), lafiyar abinci, wani lokaci kuma takardar shaida kamar GLOBALG.A.P. Wannan kwas na manoma masu kasuwanci da ke girma ne, ƙungiyoyin manoma, matasa 'yan kasuwar noma da ma'aikatan faɗakarwa (extension) a Kenya, Najeriya, Ghana, Senegal da ko'ina a Afirka.",
    "Za ku koyi abin da manyan masu saye ke so, Kyawawan Hanyoyin Noma da ke bayansa, yadda ake ajiye bayanan da ke bin amfanin gona har zuwa gona, kuɗin takardar shaida da amfaninta, dalilin da yasa ake ƙin karɓar kayan fitarwa saboda ragowar maganin ƙwari, waɗanne hukumomin ƙasa ke kula da fitarwa, da yadda ake ganawa da mai saye, cinikin kwangilar samarwa da auna tsarin outgrower.",
    "Yana ginuwa kan kwas ɗin \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\", wanda ke bayanin sayarwa a matsayin ƙungiya da karanta kwangila. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aikin \"Gwada yanzu\". Dokoki, kuɗaɗe da iyakoki suna canjawa, don haka kowane darasi yana faɗin inda za ku duba. Adadin kuɗi misalai ne kawai."
  ],
  finalTask: "Ku yi jerin dubawa na shirin sayarwa ga mai saye (buyer-readiness checklist) don gonarku ko ƙungiyarku, don amfanin gona ɗaya da nau'in mai saye ɗaya (babban kanti, mai sarrafawa ko mai fitarwa), kuna alamar abin da kuka riga kuka cika da abin da dole ku gyara. Sannan ku rubuta tayin samarwa mai shafi ɗaya ga wannan mai saye: amfanin gona da daraja, yawa da jadawali, yadda kuke kiyaye lafiyar kaya da bin diddiginsu, duk wata takardar shaida, tushen farashi, da sharuɗɗan da kuke so a kwangilar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manoma masu kasuwanci da ke girma, ƙungiyoyin manoma da kungiyoyin haɗin gwiwa (cooperatives), manajojin gona, matasa 'yan kasuwar noma da ma'aikatan faɗakarwa a Kenya, Najeriya, Ghana, ƙasashen Afirka ta Yamma masu Faransanci da ko'ina a Afirka, masu sayar da kayan lambu da 'ya'yan itace (wake na French beans, avocado, mangwaro, abarba, tumatir) ko kayan abinci na yau da kullum (rogo, masara, dawa, shinkafa) ga manyan masu saye.",
    startingPoint: "Suna iya noma amfanin gona mai kyau su sayar a kasuwannin gida ko ta ƙungiya. Wasu suna ajiye bayanan gona masu sauƙi. Kaɗan ne suka san abin da babban kanti ko mai fitarwa ke dubawa, yadda takardar shaida ke aiki, ko mene ne iyakar ragowar magani.",
    gap: "Manyan masu saye suna ƙin manoman da ba za su iya nuna yawa da daraja mai ɗorewa, bayanan bin diddigi da amfani da maganin ƙwari lafiya ba. Hukumar kula da noma ta Kenya kanta ta danganta faɗuwar kuɗin fitar da kayan lambu mai tsanani galibi da kame-kamen EU saboda ragowar maganin ƙwari. Manoma suna buƙatar ganin giɓinsu, gyara hanyoyin noma da bayanai, auna takardar shaida, da yin tayin da za su iya cikawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; masu koyo da yawa Turanci harshe na biyu ne a gare su",
      "Na'urori: waya mai sauƙi ko wayar zamani; littattafan bayanai na takarda",
      "Kuɗi: takardar shaida da gwaje-gwaje suna da tsada; zaɓuɓɓukan ƙungiya suna da muhimmanci ga ƙananan gonaki",
      "Dokoki: lasisin fitarwa, iyakar ragowar magani da dokokin takardar shaida suna canjawa kuma sun bambanta bisa ƙasa da kasuwa; masu koyo suna duba majiyoyin hukuma",
      "Tsaro: maganin ƙwari mai rajista kaɗai, a yi amfani da shi kamar yadda alamarsa (label) ta ce, tare da kayan kariya; babu adadin magani a cikin kwas ɗin"
    ],
    prerequisites: "Mai amfani: \"Ƙungiyoyin Haɗin Gwiwa na Manoma da Kai Amfanin Gona Kasuwa\", da Farm Records and Business Basics (\"Kasuwancin Noma da Sarrafa Gona\"). Karatu da ƙari masu sauƙi."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku buƙatun babban kanti, mai sarrafawa ko mai saye don fitarwa", action: "jera abin da mai saye ke nema da kwatanta shi da abin da gonarku ko ƙungiyarku ke samarwa yanzu", standard: "kuna rufe yawa, ɗorewa, daraja, bin diddigi da lafiyar abinci, tare da alamar kowane giɓi" },
    { id: "O2", condition: "Don amfanin gona ɗaya a gonarku", action: "rubuta Kyawawan Hanyoyin Noma da za ku bi", standard: "kuna rufe maganin ƙwari mai rajista da ake amfani da shi kamar yadda alamarsa ta ce, kayan kariya, lokacin jira kafin girbi na alamar, ruwa mai tsabta, tsafta a lokacin girbi da tsaron ma'aikata" },
    { id: "O3", condition: "Idan aka ba ku takardar shaida kamar GLOBALG.A.P.", action: "kwatanta kuɗinta da amfaninta ga gonarku ko ƙungiyarku da faɗin hanyar da za ku bi", standard: "kuna ambaton abubuwan kuɗi uku, matakan zuwa binciken (audit) da ko zaɓin ƙungiya ya dace" },
    { id: "O4", condition: "Don kakar noma ɗaya ta amfanin gona ɗaya", action: "kafa bayanan bin diddigi da ke haɗa kowane rukuni (lot) da gonarsa, kayan aikin noma da ranar girbi", standard: "ta yadda za a iya bin kowane akwati har zuwa gona da kowane feshi cikin 'yan mintuna" },
    { id: "O5", condition: "Idan aka ba ku kasuwar fitarwa da kuke so", action: "duba iyakar ragowar magani da hukumomin fitarwa na ƙasa da suka shafe ku", standard: "kuna faɗin inda za a sami iyakokin (misali EU Pesticides Database ko Codex) da hukumomin fitarwa da na lafiyar shuka na ƙasarku" },
    { id: "O6", condition: "Idan aka ba ku ganawa da mai saye ko tayin tsarin outgrower", action: "rubuta tayin samarwa da sharuɗɗan kwangilar da kuke buƙata", standard: "kuna faɗin daraja, yawa, jadawali, tushen farashi, dokokin ƙin karɓa, sharuɗɗan biya da abin da zai faru idan wani ɓangare ya kasa" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da manyan masu saye ke so, da shirya gonarku",
      lessons: [
        {
          title: "Abin da manyan kantuna, masu sarrafawa da masu fitarwa ke so",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera buƙatun babban mai saye ku yi alamar inda gonarku ta gaza.",
          text: [
            "Manyan masu saye suna sayarwa ga abokan ciniki da ke sa ran samun kaya iri ɗaya, lafiyayye, a kan shiryayye kowane mako. Don haka suna son abubuwa biyar daga gare ku: yawa (isasshen kaya don cika odarsu), ɗorewa (samarwa mako bayan mako, ba lokacin girbi kaɗai ba), daraja (girma, launi, nunarwa da lahani bisa bayanin buƙatarsu), bin diddigi (za su iya gano gona da filin da akwati ya fito) da lafiyar abinci (babu ragowar magani mai cutarwa, ƙwayoyin cuta ko datti).",
            "Kowane mai saye ya bambanta. Babban kanti a Nairobi ko Accra yana iya son tumatir mai girma ƙayyadadde a cikin akwati ƙayyadadde, ana kai shi sau biyu a mako. Kamfanin sarrafawa a Najeriya da ke sayen rogo don sitaci ko tumatir don manna (paste) yana son kaya masu yawa a inganci ƙayyadadde, kuma ƙila bai damu sosai da kyan gani ba. Mai fitarwa da ke kai wake na French beans daga Kenya ko mangwaro daga Senegal zuwa Turai dole ya cika dokokin ƙasar da ke shigo da kayan, kuma sau da yawa yana neman takardar shaida.",
            "Ku nemi mai saye ya ba ku bayanin buƙatarsa (specification) a rubuce. Sannan ku kwatanta shi, abu-abu, da abin da kuke samarwa yanzu. Giɓin da kuka gano su ne tsarin aikinku. Ƙananan gonaki da yawa suna rufe giɓin yawa da ɗorewa ta hanyar aiki a matsayin ƙungiya da raba ranakun shuka."
          ],
          steps: ["Ku nemi mai saye ɗaya ya ba ku bayanin buƙatarsa a rubuce da girman odarsa.", "Ku jera buƙatunsa a ƙarƙashin yawa, ɗorewa, daraja, bin diddigi da lafiyar abinci.", "Kusa da kowanne, ku rubuta abin da gonarku ko ƙungiyarku ke samarwa yanzu.", "Ku yi alamar kowane giɓi da yadda za ku iya rufe shi (misali a matsayin ƙungiya ko ta raba ranakun shuka)."],
          words: [["Bayanin buƙata (specification)", "rubutaccen bayanin mai saye na kayan da yake so: girma, launi, nunarwa, kunshewa da lahanin da aka yarda da shi."], ["Bin diddigi (traceability)", "iya bin amfanin gona har zuwa gona, fili da kayan aikin noma da ya fito daga gare su."], ["Ɗorewa (consistency)", "samar da inganci da yawa iri ɗaya, a kan lokaci, akai-akai."]],
          slides: [
            { title: "Abubuwa biyar da manyan masu saye ke so", bullets: ["Yawa da ɗorewa", "Daraja bisa bayanin buƙatarsu", "Bin diddigi da lafiyar abinci"] },
            { title: "Masu saye sun bambanta", bullets: ["Babban kanti: girma ƙayyadadde, akwati, sau biyu a mako", "Mai sarrafawa: kaya masu yawa, inganci ƙayyadadde", "Mai fitarwa: dokokin ƙasar da ke shigowa, sau da yawa takardar shaida"] },
            { title: "Ku gano giɓinku", bullets: ["Ku sami bayanin buƙata a rubuce", "Ku kwatanta abu-abu da abin da kuke samarwa", "Giɓi = tsarin aikinku; ƙungiya za ta iya rufe giɓin yawa"] }
          ],
          tryIt: "Ku zaɓi babban mai saye ɗaya kusa da ku (babban kanti, mai sarrafawa ko mai fitarwa). Ku rubuta buƙatunsa a ƙarƙashin kanu biyar ɗin, abin da kuke samarwa yanzu kusa da kowanne, sannan ku yi alamar giɓi. Wannan shi ne farkon jerin dubawarku na shirin sayarwa.",
          youCanNow: "jera abin da babban mai saye ke so da yin alamar inda gonarku ko ƙungiyarku ta gaza.",
          quickCheck: [
            { objective: "O1", q: "Babban kanti yana son tumatir kowane mako duk shekara. Kuna girbi sau ɗaya a kaka. Wace buƙata kuka rasa?", options: ["Daraja", "Ɗorewar samarwa", "Bin diddigi", "Lafiyar abinci"], answer: 1, why: "Samarwa kowane mako, ba lokacin girbi kaɗai ba, shi ne ɗorewa." },
            { objective: "O1", q: "Wace hanya ce mafi kyau don sanin ainihin abin da mai saye ke so?", options: ["Ku yi hasashe daga abin da ke shagonsa", "Ku tambayi maƙwabcin da ya taɓa sayar masa sau ɗaya", "Ku aika kaya ku gani ko zai karɓa", "Ku nemi bayanin buƙatarsa a rubuce"], answer: 3, why: "Rubutaccen bayanin buƙata yana nuna ainihin girma, inganci da kunshewar da mai saye zai karɓa." }
          ]
        },
        {
          title: "Kyawawan Hanyoyin Noma a gonarku",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rubuta Kyawawan Hanyoyin Noma da za ku bi don amfanin gona ɗaya.",
          text: [
            "Kyawawan Hanyoyin Noma (Good Agricultural Practices, GAP) su ne al'adun gona da ke kiyaye lafiyar amfanin gona, kare ma'aikata da muhalli, da sa inganci ya dore. Tsare-tsaren takardar shaida da masu saye suna bincikensu. Kuna iya fara yawancinsu da ɗan kuɗi kaɗan.",
            "Maganin ƙwari: ku yi amfani da magungunan da hukumar ƙasarku ta yi musu rajista kaɗai (misali Pest Control Products Board ta Kenya, NAFDAC ta Najeriya ko EPA ta Ghana), ku duba jerinta na yanzu, kuma ku yi amfani da su daidai kamar yadda alamarsu ta ce. Ku sa kayan kariyar da alamar ta nema, ku ajiye sinadarai a kulle nesa da abinci, kuma ku mutunta lokacin jira kafin girbi na alamar, wato lokacin jira tsakanin feshi na ƙarshe da girbi. Feshi kusa da girbi yana ɗaya daga cikin manyan dalilan ƙin karɓar kaya saboda ragowar magani. Ku yi amfani da haɗaɗɗen sarrafa ƙwari (integrated pest management) don ku rage feshi.",
            "Haka kuma: ruwa mai tsabta don feshi, wanki da ban ruwa; akwatunan girbi masu tsabta da ba a ajiye su a ƙasa ba; bandakuna da wurin wanke hannu ga ma'aikata; babu dabbobi ko taki kusa da amfanin gona kafin girbi; taimakon farko da horo ga ma'aikata; da zubar da kwalaben magani marasa komai lafiya kamar yadda alamar ko hukumar ƙasarku ta ce. Ku rubuta waɗannan a matsayin dokokin GAP na gonarku."
          ],
          steps: ["Ku duba cewa kowane maganin ƙwari da kuke amfani da shi yana cikin rajistar hukumar ƙasarku.", "Ku rubuta kayan kariya da lokacin jira kafin girbi na alamar kusa da kowane magani.", "Ku shirya wurin wanke hannu, bandakuna da akwatuna masu tsabta don girbi.", "Ku rubuta dokokin GAP ɗinku ku horar da kowane ma'aikaci a kansu."],
          words: [["Kyawawan Hanyoyin Noma (GAP)", "al'adun gona da ke kiyaye lafiyar amfanin gona da kare ma'aikata da muhalli."], ["Lokacin jira kafin girbi (pre-harvest interval)", "lokacin jira da ke kan alamar magani tsakanin feshi na ƙarshe da girbi."], ["Maganin ƙwari mai rajista", "maganin da hukumar ƙasarku ta amince da shi don wannan amfanin gona da amfani."], ["Haɗaɗɗen sarrafa ƙwari (integrated pest management)", "sarrafa ƙwari da hanyoyi da yawa don ku fesa magani sai lokacin da ake buƙata kawai."]],
          slides: [
            { title: "Abin da GAP ya ƙunsa", bullets: ["Amfanin gona lafiyayye", "Tsaro da jin daɗin ma'aikata", "Muhalli da inganci mai ɗorewa"] },
            { title: "Maganin ƙwari ta hanyar da ta dace", bullets: ["Magunguna masu rajista kaɗai: ku duba jerin PCPB, NAFDAC, Ghana EPA", "Daidai kamar yadda alamar ta ce, tare da kayan kariya", "Ku mutunta lokacin jira kafin girbi na alamar"] },
            { title: "Girbi mai tsabta", bullets: ["Ruwa mai tsabta; akwatuna ba a ƙasa ba", "Bandakuna da wurin wanke hannu ga ma'aikata", "Babu dabbobi ko taki kusa da amfanin gona lokacin girbi"] },
            { title: "Ku rubuta, ku horar", bullets: ["Dokokin GAP na gonarku a shafi ɗaya", "Ku horar da kowane ma'aikaci", "Ku ajiye sinadarai a kulle, nesa da abinci"] }
          ],
          sources: [FAO_PEST_REG],
          tryIt: "Ku rubuta dokokin GAP na gonarku don amfanin gona ɗaya a shafi ɗaya: magungunan ƙwari masu rajista da kuke amfani da su tare da kayan kariya da lokacin jira kafin girbi na alamarsu, tsaftar ruwa da ta girbi, da tsaron ma'aikata. Ku ƙara giɓin a jerin dubawarku na shirin sayarwa.",
          youCanNow: "rubuta dokokin Kyawawan Hanyoyin Noma don amfanin gona, har da amfani da maganin ƙwari mai rajista lafiya.",
          quickCheck: [
            { objective: "O2", q: "A ina za ku sami tsawon lokacin da za ku jira tsakanin feshi na ƙarshe da girbi?", options: ["A kan alamar maganin (lokacin jira kafin girbi)", "Daga direban mai saye", "Daga tunanin maƙwabci", "Ba shi da muhimmanci ga fitarwa"], answer: 0, why: "Alamar tana ba da lokacin jira kafin girbi; mutunta shi yana sa ragowar magani ta kasance cikin iyaka." },
            { objective: "O2", q: "Wani ɗan kasuwa yana tayin maganin ƙwari mai arha da babu lambar rajista. Me za ku yi?", options: ["Ku saya idan yana da arha", "Ku haɗa shi da mai rajista", "Kada ku yi amfani da shi; ku yi amfani da magungunan da ke cikin rajistar ƙasarku kaɗai", "Ku yi amfani da rabin adadin"], answer: 2, why: "Magungunan da babu rajista suna iya zama na bogi ko haramtattu, kuma suna iya jawo ƙin karɓa da cutarwa." }
          ]
        },
        {
          title: "Bayanan da ke bin kowane akwati",
          objectives: ["O4"],
          minutes: 5,
          goal: "Kafa bayanan da ke bin akwati har zuwa gonarsa, kayan aikin noma da ranar girbi.",
          text: [
            "Idan mai saye ya gano ragowar magani ko wata matsala, zai tambaya: wace gona, wane fili, me aka fesa kuma yaushe? Bayanan bin diddigi suna amsawa cikin mintuna. Ba tare da su ba, mai saye zai iya watsar da dukkan ƙungiyar.",
            "Ku ba kowane fili ko gona lamba (code), misali KB-F2 don gonar Kiambu, fili na 2. Ku ajiye bayanan feshi da kayan aikin noma don kowane fili: rana, sunan magani da lambar rajistarsa, adadi, wanda ya fesa da lokacin jira kafin girbi daga alamar. Ku ajiye bayanan girbi: rana, lambar fili, akwatuna ko kilo, da lambar rukuni (lot number). Ku rubuta lambar rukunin a kan kowane akwati ko takardar kai kaya (delivery note).",
            "Ku ajiye bayanan a littafi ko a tebur mai sauƙi a waya (spreadsheet), kuma ku ajiye rasitin kayan aikin noma. Ƙungiyoyin manoma suna ajiye rajistar membobi da bayanan kowane memba. Kenya tana fara taswirar gonakin fitarwa da rajistarsu ta hanyar dijital, don haka ku duba da AFA abin da amfanin gonarku ke buƙata."
          ],
          steps: ["Ku ba kowane fili ko gona gajeriyar lamba.", "Ku ajiye bayanan feshi da kayan aikin noma don kowane fili: rana, magani, lambar rajista, adadi, wanda ya fesa, lokacin jira kafin girbi.", "Ku ajiye bayanan girbi da lambar rukuni don kowane girbi.", "Ku rubuta lambar rukunin a kan kowane akwati ko takardar kai kaya.", "Ku yi atisaye: ku ɗauki akwati ɗaya ku bi shi baya cikin mintuna."],
          words: [["Lambar rukuni (lot number)", "lambar girbi ɗaya daga fili ɗaya a rana ɗaya, da ake rubutawa a kan akwatuna."], ["Bayanan feshi", "rubutaccen jerin kowane maganin ƙwari da aka yi amfani da shi: yaushe, wane, nawa kuma wa ya fesa."], ["Bincike (audit)", "dubawa da mai saye ko mai ba da takardar shaida ke yi don tabbatar kuna yin abin da kuka ce."]],
          slides: [
            { title: "Me yasa za a bi diddigi?", bullets: ["Mai saye ya gano matsala: wane fili, wane feshi, yaushe?", "Bayanai masu kyau suna amsawa cikin mintuna", "Babu bayanai: ana iya watsar da dukkan ƙungiyar"] },
            { title: "Bayanai uku", bullets: ["Lambobin fili (misali KB-F2)", "Bayanan feshi da kayan aikin noma don kowane fili", "Bayanan girbi da lambar rukuni"] },
            { title: "Ku sa su aiki", bullets: ["Lambar rukuni a kan kowane akwati", "Littafi ko tebur a waya; ku ajiye rasiti", "Ku yi atisayen bin akwati baya"] }
          ],
          sources: [KE_AFA],
          tryIt: "Ku shirya bayanai uku don amfanin gona ɗaya: lambobin fili, bayanan feshi da kayan aikin noma, da bayanan girbi masu lambobin rukuni. Ku cike layi ɗaya na gaske ko na atisaye a kowanne, sannan ku bi wannan akwatin baya har zuwa filin da feshi na ƙarshe.",
          youCanNow: "ajiye bayanan fili, feshi da girbi da ke bin kowane akwati har zuwa filinsa da kayan aikin noma.",
          quickCheck: [
            { objective: "O4", q: "Me ke haɗa akwati a kan shiryayyen mai saye da filinku?", options: ["Launin akwatin", "Sunan direban", "Farashin kasuwa", "Lambar rukuni da aka rubuta a kan akwatin da cikin bayanan girbinku"], answer: 3, why: "Lambar rukuni a kan akwati da cikin bayananku tana bin sa har zuwa fili da rana." },
            { objective: "O4", q: "Wane bayani ne ya kamata ya kasance a cikin bayanan feshi?", options: ["Lambar wayar mai saye", "Rana, magani, lambar rajista, adadi da wanda ya fesa", "Hasashen yanayi na wata mai zuwa", "Farashin amfanin gona"], answer: 1, why: "Waɗannan bayanai suna nuna abin da aka fesa da lokacin, abin da masu saye da masu ba da takardar shaida ke dubawa." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da manyan masu saye ke so, da shirya gonarku",
        questions: [
          { objective: "O1", q: "Wanne BA ɗaya daga cikin abubuwa biyar da manyan masu saye ke so ba ne?", options: ["Yawa", "Bin diddigi", "Kyauta ga mai saye", "Lafiyar abinci"], answer: 2, why: "Masu saye suna son yawa, ɗorewa, daraja, bin diddigi da lafiyar abinci; kyauta ba buƙata ba ce." },
          { objective: "O1", q: "Ƙungiyarku za ta iya cika rabin odar mako-mako ta mai saye ne kawai. Me zai iya rufe giɓin?", options: ["Ƙarin membobi da raba ranakun shuka", "Aika kaya masu ƙarancin daraja", "Yin alƙawarin fiye da abin da kuke da shi", "Yin watsi da girman odar"], answer: 0, why: "Ƙarin manoma da raba ranakun shuka suna ƙara yawa kuma suna sa samarwa ta dore." },
          { objective: "O2", q: "Wace hanya ce ɓangare na GAP?", options: ["Ajiye maganin ƙwari kusa da abinci", "Feshi kwana ɗaya kafin girbi ko da me alamar ta ce", "Barin awaki su yi kiwo kusa da amfanin gona lokacin girbi", "Sa kayan kariyar da alamar ta nema"], answer: 3, why: "Bin alamar, har da kayan kariya, yana kare ma'aikata da amfanin gona." },
          { objective: "O4", q: "Mene ne lambar rukuni?", options: ["Farashin kowane akwati", "Lambar girbi ɗaya daga fili ɗaya a rana ɗaya", "Yawan ma'aikata", "Girman gona"], answer: 1, why: "Lambar rukuni tana nuna girbi ɗaya don a iya bin diddiginsa." },
          { objective: "O4", q: "Mai saye ya ba da rahoton ragowar magani a kaya ɗaya da aka kai. Bayanai masu kyau za su ba ku damar:", options: ["Ɗora laifi kan mai saye", "Canja bayanan", "Bin sa har zuwa fili da feshi, da gyara dalilin", "Daina sayarwa ga kowa"], answer: 2, why: "Bin diddigi yana nuna inda matsalar ta fara don ku gyara ta ku riƙe mai sayen." }
        ]
      }
    },
    {
      name: "Babi na 2: Takardar shaida, dokokin fitarwa da kwangilolin samarwa",
      lessons: [
        {
          title: "GLOBALG.A.P. da takardar shaida: kuɗi da amfani",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kwatanta kuɗin takardar shaida da amfaninta ga gonarku, ku zaɓi hanya.",
          text: [
            "Takardar shaida (certification) na nufin wata hukuma mai zaman kanta tana duba gonarku bisa wata ƙa'ida, kuma tana ba ku takardar shaida idan kun ci. GLOBALG.A.P. ita ce ƙa'idar gona mafi shahara da manyan kantunan Turai da masu fitarwa da yawa ke nema. Ƙa'idarta ta Integrated Farm Assurance (IFA) don 'ya'yan itace da kayan lambu ta ƙunshi lafiyar abinci da bin diddigi, lafiya, tsaro da jin daɗin ma'aikata, da muhalli (ruwa, taki, sarrafa ƙwari da magungunan kare shuka). Wasu masu saye suna neman wasu ƙa'idoji, kamar na organic (noma ba tare da sinadarai ba) ko fair-trade (ciniki mai adalci).",
            "GLOBALG.A.P. ta ce akwai abubuwan kuɗi uku: kuɗinku na shiryawa (horo, bandakuna, ɗakin ajiyar sinadarai, bayanai); kuɗin hukumar ba da takardar shaida don bincike da tafiya; da kuɗin rajista da lasisi na GLOBALG.A.P., wanda ya dogara da yankinku da zaɓinku. Ana yin bincike kowace shekara, kuma takardar shaida tana aiki shekara ɗaya. Akwai zaɓi ga ƙungiyoyin manoma, har da ƙananan manoma, inda takardar shaida ɗaya ta ƙungiya ke rufe membobin da ke bin tsarin inganci ɗaya tare da binciken cikin gida.",
            "Matakan: ku sauke dokoki da jerin dubawa kyauta, ku aiwatar da buƙatun, ku yi binciken kai, ku nemi hukumar ba da takardar shaida da aka amince da ita da ke aiki a ƙasarku ta yi bincike, ku gyara duk wata matsala cikin lokacin da aka bayar, sannan ku karɓi takardar shaidar. Masu saye za su iya duba takardun shaida a Supply Chain Portal na GLOBALG.A.P. Kafin ku biya, ku tambayi mai sayenku: kuna buƙatar wannan takardar shaida, kuma za ku ƙara saye ko ƙara biya idan ina da ita? Ku nemi farashi (quote) daga hukumomin ba da takardar shaida fiye da ɗaya."
          ],
          steps: ["Ku tambayi mai sayenku wace takardar shaida yake buƙata, idan akwai.", "Ku sauke dokoki da jerin dubawa na ƙa'idar kyauta ku yi binciken kai.", "Ku jera abubuwan kuɗi uku ku nemi farashi daga hukumomin ba da takardar shaida da aka amince da su.", "Ku kwatanta kuɗin da amfanin: sababbin masu saye, ƙarin yawa ko farashi mafi kyau.", "Ku yanke shawara: takardar shaida ku kaɗai, a matsayin ƙungiya, ko ba yanzu ba."],
          words: [["Takardar shaida (certification)", "dubawa mai zaman kanta da ke nuna gona ta cika wata ƙa'ida, ana tabbatar da ita da takarda."], ["Hukumar ba da takardar shaida (certification body)", "kamfanin da aka amince da shi da ke binciken gonarku kuma yake ba da takardar shaidar."], ["Takardar shaida ta ƙungiya", "takardar shaida ɗaya ga ƙungiyar manoma da membobinta ke bin tsarin inganci ɗaya."], ["Binciken kai (self-assessment)", "duba gonarku da kanku bisa jerin dubawa na ƙa'idar kafin ainihin binciken."]],
          slides: [
            { title: "Abin da GLOBALG.A.P. IFA ya ƙunsa", bullets: ["Lafiyar abinci da bin diddigi", "Lafiya, tsaro da jin daɗin ma'aikata", "Muhalli: ruwa, taki, sarrafa ƙwari"] },
            { title: "Abubuwan kuɗi uku", bullets: ["Kuɗinku na shiryawa", "Kuɗin bincike da tafiya na hukumar ba da takardar shaida", "Kuɗin rajista da lasisi na GLOBALG.A.P."] },
            { title: "Matakan samun takardar shaida", bullets: ["Dokoki da jerin dubawa kyauta; binciken kai", "Bincike daga hukumar ba da takardar shaida da aka amince da ita", "Gyara matsaloli; takardar shaida ta shekara ɗaya"] },
            { title: "Shin ya cancanci?", bullets: ["Ku tambayi mai saye ko yana buƙatarta", "Zai ƙara saye ko ƙara biya?", "Zaɓin ƙungiya ga ƙananan manoma; ku nemi farashi da yawa"] }
          ],
          sources: [GGAP_IFA, GGAP_PORTAL],
          tryIt: "Don amfanin gonarku da mai sayenku, ku rubuta bayanin kuɗi da amfani game da takardar shaida: shin mai sayen yana buƙatarta, abubuwan kuɗi uku (da farashi idan za ku iya samu), amfanin da kuke sa rai, da zaɓinku: ku kaɗai, a matsayin ƙungiya, ko ba yanzu ba.",
          youCanNow: "kwatanta kuɗi da amfanin takardar shaida kamar GLOBALG.A.P. da zaɓar hanya ga gonarku ko ƙungiyarku.",
          quickCheck: [
            { objective: "O3", q: "Wanne ne ɗaya daga cikin abubuwan kuɗi uku na GLOBALG.A.P.?", options: ["Kuɗin sufurin mai saye", "Kuɗin makarantarku", "Kuɗin bincike da tafiya na hukumar ba da takardar shaida", "Farashin amfanin gona"], answer: 2, why: "GLOBALG.A.P. ta jera kuɗinku na shiryawa, kuɗin hukumar ba da takardar shaida, da kuɗin rajista da lasisi nata." },
            { objective: "O3", q: "Ƙananan manoma ashirin suna son takardar shaida amma kowannensu ba zai iya biyan bincike ba. Me zai iya dacewa?", options: ["Takardar shaida ta ƙungiya tare da tsarin inganci ɗaya", "Kowannensu ya kwafi takardar shaidar maƙwabci", "Tsallake binciken", "Sayen takardar shaida a intanet"], answer: 0, why: "Zaɓin ƙungiyar manoma yana bar takardar shaida ɗaya ta rufe membobin da ke bin tsari ɗaya tare da binciken cikin gida." }
          ]
        },
        {
          title: "Iyakar ragowar magani, dokokin fitarwa da dalilan ƙin karɓar kaya",
          objectives: ["O5"],
          minutes: 6,
          goal: "Duba iyakar ragowar magani da hukumomin fitarwa da suka shafi amfanin gonarku da kasuwarku.",
          text: [
            "Iyakar ragowar magani (maximum residue level, MRL) ita ce mafi yawan adadin maganin ƙwari da aka yarda ya rage a kan abinci. Kowace kasuwar da ke shigo da kaya tana sa nata. Tarayyar Turai (EU) tana jera iyakokinta a EU Pesticides Database; Codex Alimentarius yana sa iyakokin duniya da ƙasashe da yawa ke amfani da su. Kaya na iya zama halal a gida amma har yanzu su wuce iyaka a Turai, ko kuma ba a amince da wani magani a can ba kwata-kwata.",
            "Wannan ba ƙaramin haɗari ba ne. Hukumar Noma da Abinci ta Kenya (AFA) ta danganta faɗuwar kuɗin fitar da kayan lambu mai tsanani galibi da kame-kamen EU saboda ragowar maganin ƙwari, waɗanda suka tashi daga 25 a 2023 zuwa 57 a 2024, kuma EU ta ƙara dubawa kan wake da peas na Kenya. Dalilai da aka saba gani: feshi kusa da girbi, amfani da maganin da ba a yarda da shi a kasuwar ba, haɗa magani ba daidai ba, feshin maƙwabci da iska ta kawo, da haɗa kaya daga gonakin da ba a bin diddiginsu.",
            "Fitarwa kuma tana buƙatar izinin ƙasa. A Kenya, Horticultural Crops Directorate ta AFA tana ba masu fitarwa lasisi kuma tana yi wa wakilai rajista, KEPHIS kuma tana ba da takardar shaidar lafiyar shuka (phytosanitary certificate). A Najeriya, masu fitarwa suna rajista da Majalisar Bunƙasa Fitar da Kaya ta Najeriya (NEPC). A Ghana, masu fitarwa suna rajista da Hukumar Bunƙasa Fitar da Kaya ta Ghana (GEPA). Hukumar kare shuka ta kowace ƙasa ce ke binciken lafiyar shuka. Dokoki suna canjawa, don haka ku duba kowace hukuma kafin kaka."
          ],
          steps: ["Ku faɗi kasuwar da kuke so (misali EU, Birtaniya ko kasuwar yanki).", "Ku nemo iyakar ragowar magani na amfanin gonarku a wannan kasuwa a rumbun bayananta ko Codex.", "Ku duba cewa an yarda da kowane magani da kuke amfani da shi a can, kuma ku bi lokacin jira kafin girbi na alamar.", "Ku tambayi mai sayenku ko ana buƙatar gwajin ragowar magani kafin a tura kaya.", "Ku jera hukumomin fitarwa da na lafiyar shuka na ƙasarku da abin da suke buƙata."],
          words: [["Iyakar ragowar magani (MRL)", "mafi yawan adadin maganin ƙwari da aka yarda ya rage a kan abinci a wata kasuwa."], ["Kame (interception)", "lokacin da ƙasar da ke shigo da kaya ta tsayar da kaya a kan iyaka saboda sun karya doka."], ["Takardar shaidar lafiyar shuka (phytosanitary certificate)", "takardar hukuma da ke cewa kayan shuka ba su da ƙwari da cututtukan da aka jera."]],
          slides: [
            { title: "Mene ne MRL", bullets: ["Mafi yawan adadin maganin ƙwari da aka yarda a kan abinci", "Kowace kasuwa tana sa nata", "EU Pesticides Database; iyakokin Codex"] },
            { title: "Dalilan ƙin karɓar kaya", bullets: ["An fesa kusa da girbi", "Maganin da ba a yarda da shi a wannan kasuwa ba", "Haɗawa ba daidai ba, feshin iska, kayan da ba a bin diddiginsu"] },
            { title: "Gargaɗin Kenya", bullets: ["AFA: kame-kamen EU na ragowar magani 25 (2023) zuwa 57 (2024)", "Kuɗin fitar da kayan lambu ya faɗi sosai", "Ƙarin dubawar EU kan wake da peas"] },
            { title: "Hukumomin fitarwa (ku duba dokokin yanzu)", bullets: ["Kenya: AFA Horticultural Crops Directorate; KEPHIS", "Najeriya: rajista da NEPC", "Ghana: rajista da GEPA; hukumomin kare shuka"] }
          ],
          sources: [EU_MRL, CODEX, KE_VEG_DROP, KE_AFA, KEPHIS_PHYTO, NEPC, GEPA],
          tryIt: "Don amfanin gonarku da kasuwar da kuke so, ku nemo inda aka jera iyakar ragowar magani ku duba magunguna biyu da kuke amfani da su. Sannan ku jera hukumomin fitarwa da na lafiyar shuka na ƙasarku da tambaya ɗaya da za ku yi wa kowanne. Ku ƙara sakamakon a jerin dubawarku.",
          youCanNow: "nemo iyakar ragowar magani na kasuwarku da faɗin hukumomin fitarwa da na lafiyar shuka da dole ku yi hulɗa da su.",
          quickCheck: [
            { objective: "O5", q: "Maganin ƙwarinku yana da rajista a ƙasarku. Shin har yanzu ana iya ƙin karɓar kayanku a Turai?", options: ["A'a, rajistar gida ta isa", "Eh, idan ragowar magani ta wuce iyakar EU ko ba a yarda da maganin a can ba", "Sai idan akwatunan suna da datti", "Sai don furanni kawai"], answer: 1, why: "Kowace kasuwa tana sa nata iyakoki, don haka kayan da ke halal a gida za su iya karya dokokin EU." },
            { objective: "O5", q: "A Kenya, wa ke ba da takardar shaidar lafiyar shuka don fitarwa?", options: ["KEBS", "NAFDAC", "NEPC", "KEPHIS"], answer: 3, why: "KEPHIS ce ke binciken lafiyar shuka da ba da takardar shaidar lafiyar shuka don fitarwar Kenya." }
          ]
        },
        {
          title: "Ganawa da masu saye, kwangilolin samarwa da tsarin outgrower",
          objectives: ["O6"],
          minutes: 6,
          goal: "Rubuta tayin samarwa da jera sharuɗɗan kwangilar da kuke buƙata daga mai saye.",
          text: [
            "Idan za ku gana da mai saye, ku zo a shirye: amfanin gonarku, daraja, nawa za ku iya samarwa da yaushe, yadda kuke kiyaye lafiyar kaya da bin diddiginsu, duk wata takardar shaida, da samfurori. Ku yi alƙawarin abin da za ku iya cikawa kaɗai. Kasa kai kaya yana ɓata amana fiye da ƙaramin tayi.",
            "Ku yi ciniki kan sharuɗɗa, ba farashi kaɗai ba. Ku amince kan daraja da yadda ake duba ta, yawa da jadawali, farashi ko yadda ake sa shi (ƙayyadadde, ko an haɗa shi da farashin kasuwa), wa ke biyan sufuri da kunshewa, dokokin ƙin karɓa (wa ke dubawa, yaushe, da me ke faruwa da kayan da aka ƙi), ranar biya da hanyar biya, da abin da zai faru idan girbinku ya lalace ko mai sayen bai zo ɗauka ba. Sayarwa ga wani mai saye a ɓoye (side-selling) yana karya amana kuma sau da yawa yana karya kwangilar.",
            "A tsarin outgrower, wani kamfani kamar mai sarrafawa ko mai fitarwa yana yin kwangila da ƙananan manoma da yawa, sau da yawa yana ba da iri, kayan aikin noma, horo ko bashi, kuma yana sayen amfanin gonar. Zai iya buɗe kasuwa mai ɗorewa, amma ku duba: ana cire kuɗin kayan aikin noma daga biyanku kuma da wane farashi, wa ke sa daraja, me zai faru idan farashi ya tashi, kuma za ku iya fita? Ku karanta kowace kwangila gaba ɗaya, ku ajiye kwafi, kuma ku tambayi mai ba da shawara da kuka amince da shi, jami'in faɗakarwa ko jami'in ƙungiyar haɗin gwiwa kafin ku sa hannu."
          ],
          steps: ["Ku shirya tayinku: amfanin gona, daraja, yawa, jadawali, lafiya da bin diddigi, takardar shaida, samfurori.", "Ku jera sharuɗɗan da kuke buƙata: duba daraja, tushen farashi, sufuri, dokokin ƙin karɓa, ranar biya, sharuɗɗan gazawa.", "Don tsarin outgrower, ku tambayi yadda ake cajin kayan aikin noma, wa ke sa daraja, da yadda za ku iya fita.", "Ku karanta kwangilar gaba ɗaya ku tambayi mai ba da shawara da kuka amince da shi kafin sa hannu.", "Ku ajiye kwafi ku kai daidai abin da kuka yi alƙawari."],
          words: [["Tayin samarwa (supply offer)", "rubutaccen tayi ga mai saye na abin da za ku iya samarwa, yaushe da kan wane sharuɗɗa."], ["Tsarin outgrower", "tsarin da wani kamfani ke yin kwangila da ƙananan manoma da yawa don su noma masa, sau da yawa yana ba da kayan aikin noma kuma yana sayen amfanin gonar."], ["Sayarwa a ɓoye (side-selling)", "sayar da kayan da ke ƙarƙashin kwangila ga wani mai saye daban."], ["Dokokin ƙin karɓa", "dokokin da aka amince da su don duba kaya da abin da ke faruwa da kayan da mai saye ya ƙi."]],
          slides: [
            { title: "Ku zo a shirye", bullets: ["Amfanin gona, daraja, yawa da jadawali", "Yadda kuke kiyaye lafiyar kaya da bin diddiginsu", "Takardar shaida da samfurori; ku yi alƙawarin abin da za ku iya cikawa kaɗai"] },
            { title: "Ku yi ciniki kan sharuɗɗa", bullets: ["Duba daraja, tushen farashi, sufuri", "Dokokin ƙin karɓa da ranar biya", "Idan girbi ya lalace ko mai saye bai zo ɗauka ba fa?"] },
            { title: "Tsarin outgrower", bullets: ["Kasuwa mai ɗorewa; kayan aikin noma, horo ko bashi", "Ku duba: cajin kayan aiki, wa ke sa daraja, za ku iya fita?", "Sayarwa a ɓoye tana karya amana da kwangiloli"] },
            { title: "Kafin ku sa hannu", bullets: ["Ku karanta kowane layi; ku ajiye kwafi", "Ku tambayi jami'in faɗakarwa, na ƙungiyar haɗin gwiwa ko mai ba da shawara", "Ku kai daidai abin da kuka yi alƙawari"] }
          ],
          tryIt: "Aikin ƙarshe: ku kammala jerin dubawarku na shirin sayarwa, kuna alamar abin da kuka cika da abin da za ku gyara. Sannan ku rubuta tayin samarwa mai shafi ɗaya ga wannan mai saye: amfanin gona da daraja, yawa da jadawali, lafiya da bin diddigi, takardar shaida, tushen farashi da sharuɗɗan kwangilar da kuke so.",
          youCanNow: "yin tayin samarwa ga babban mai saye da jera sharuɗɗan kwangilar da ke kare ku, har da a tsarin outgrower.",
          quickCheck: [
            { objective: "O6", q: "Wane sharaɗi ne ke kare ku idan mai saye ya ƙi karɓar wani ɓangare na kayan da aka kai?", options: ["Dokokin ƙin karɓa a sarari: wa ke dubawa, yaushe, da me ke faruwa da kayan da aka ƙi", "Tambarin mai saye", "Ƙaramin farashi", "Kai kaya mafi yawa"], answer: 0, why: "Dokokin ƙin karɓa suna hana ƙin karɓa marar adalci kuma suna faɗin wa zai ɗauki asarar." },
            { objective: "O6", q: "Wani kamfanin outgrower yana ba da iri da taki a bashi. Me ya kamata ku fara tambaya?", options: ["Launin buhunan", "Ko maƙwabta sun shiga", "Yadda ake sa farashin kayan aikin noma da yadda ake cire su daga biyanku", "Ko za ku iya sayarwa a ɓoye"], answer: 2, why: "Cajin kayan aikin noma zai iya ɗaukar yawancin biyanku, don haka ku san farashin da yadda ake cire shi." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Takardar shaida, dokokin fitarwa da kwangilolin samarwa",
        questions: [
          { objective: "O3", q: "Har yaushe takardar shaida ta GLOBALG.A.P. IFA ke aiki?", options: ["Shekara ɗaya, tare da bincike kowace shekara", "Har abada", "Shekaru goma", "Har sai mai saye ya canja"], answer: 0, why: "GLOBALG.A.P. ta ce ana bincike kowace shekara kuma takardar shaida tana aiki shekara ɗaya." },
          { objective: "O3", q: "Kafin ku biya kuɗin takardar shaida, me ya kamata ku tambayi mai sayenku?", options: ["Adireshin gidansa", "Amfanin gonar da ya fi so", "Babu komai, ku nemi takardar shaidar kawai", "Kuna buƙatarta, kuma za ku ƙara saye ko ƙara biya idan ina da ita?"], answer: 3, why: "Takardar shaida tana da tsada, don haka ku tabbata za ta kawo kasuwa ko farashi mafi kyau." },
          { objective: "O5", q: "A ina za ku iya nemo iyakar ragowar magani ta EU don amfanin gona?", options: ["Gidan rediyo na gida", "EU Pesticides Database", "Fakitin irinku", "Status na WhatsApp na mai saye"], answer: 1, why: "EU Pesticides Database ta Hukumar Tarayyar Turai tana jera MRL bisa abinci da maganin ƙwari." },
          { objective: "O6", q: "Mene ne sayarwa a ɓoye (side-selling)?", options: ["Sayarwa a gefen hanya", "Sayarwa ga kasuwanni biyu lokaci ɗaya da izini", "Sayar da kayan da ke ƙarƙashin kwangila ga wani mai saye", "Sayarwa da yawa a lokaci ɗaya"], answer: 2, why: "Sayarwa a ɓoye tana karya kwangila kuma tana lalata amana da mai sayen." },
          { objective: "O6", q: "Za ku iya samar da tan 2 a mako. Mai saye yana neman 4. Me za ku yi?", options: ["Ku yi alƙawarin 4 ku yi fata", "Ku aika kayan da ba a ware ba don cika nauyi", "Ku yi shiru ku kai 2", "Ku yi tayin tan 2, ko ku yi aiki da ƙungiya don samar da ƙari"], answer: 3, why: "Ku yi alƙawarin abin da za ku iya cikawa kaɗai; ƙungiya za ta iya taimaka a kai ga yawa mafi girma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Sayarwa ga Manyan Kantuna, Masu Sarrafawa da Masu Saye don Fitarwa: Ƙa'idoji da Takardar Shaida",
    questions: [
      { objective: "O1", q: "Wane rukuni ne ke jera abin da manyan masu saye ke so yawanci?", options: ["Ƙaramin farashi, babbar gona, sabon tarakta", "Organic kaɗai, babu komai kuma", "Kyautai, bashi, sufuri kyauta", "Yawa, ɗorewa, daraja, bin diddigi, lafiyar abinci"], answer: 3, why: "Waɗannan biyar su ne buƙatun da aka saba gani na manyan kantuna, masu sarrafawa da masu fitarwa." },
      { objective: "O1", q: "Mai sarrafawa da ke sayen rogo don sitaci ya fi damuwa da:", options: ["Kaya masu yawa a inganci ƙayyadadde", "Launi da sura masu kyau", "Ƙananan fakiti ga masu sayayya", "Alamomi masu ƙawa"], answer: 0, why: "Masu sarrafawa suna buƙatar yawa da inganci mai ɗorewa don masana'antarsu; kyan gani ba shi da muhimmanci sosai." },
      { objective: "O1", q: "Kun kwatanta bayanin buƙatar mai saye da abin da kuke samarwa. Me giɓin ke zama?", options: ["Dalilan hakura", "Sirri daga ƙungiyar", "Tsarin aikinku", "Matsalar mai sayen"], answer: 2, why: "Kowane giɓi aiki ne da za ku gyara kafin ku iya samar wa wannan mai saye." },
      { objective: "O2", q: "Me GAP ke nufi a wannan kwas?", options: ["Group Agricultural Payment (biyan noma na ƙungiya)", "Good Agricultural Practices (Kyawawan Hanyoyin Noma)", "Grain and Produce (hatsi da amfanin gona)", "Government Approval Permit (izinin amincewar gwamnati)"], answer: 1, why: "Kyawawan Hanyoyin Noma su ne al'adun gona da masu saye da masu ba da takardar shaida ke dubawa." },
      { objective: "O2", q: "Waɗanne magungunan ƙwari ya kamata ku yi amfani da su?", options: ["Duk wani magani mai arha a kasuwa", "Magungunan da maƙwabci ya ba da shawara", "Magungunan da babu alama a tsofaffin kwalabe", "Magungunan da hukumar ƙasarku ta yi musu rajista, ana amfani da su kamar yadda alamar ta ce"], answer: 3, why: "Magunguna masu rajista da ake amfani da su bisa alama suna kare mutane kuma suna sa ragowar magani ta kasance cikin iyaka." },
      { objective: "O2", q: "Me yasa za a samar da bandakuna da wurin wanke hannu ga masu girbi?", options: ["Don hana ƙwayoyin cuta shiga amfanin gona", "Don faranta wa maƙwabta rai", "Domin masu saye suna son gine-gine", "Don ajiye sinadarai"], answer: 0, why: "Tsafta a lokacin girbi tana kiyaye amfanin gona daga ƙwayoyin cuta, abin da masu saye ke bincike." },
      { objective: "O4", q: "Me lambar fili ke taimakawa da shi?", options: ["Biyan ma'aikata", "Bin amfanin gona har zuwa ainihin filin", "Zaɓar mai saye", "Sa farashi"], answer: 1, why: "Lambar fili tana haɗa bayanan girbi da na feshi da fili ɗaya." },
      { objective: "O4", q: "A ina ya kamata lambar rukuni ta bayyana?", options: ["A kanku kawai", "A motar mai saye", "A kan kowane akwati ko takardar kai kaya, da cikin bayanan girbinku", "A kan fakitin iri"], answer: 2, why: "Rubuta ta a kan akwatuna da cikin bayanai yana bar kowa ya bi amfanin gona baya." },
      { objective: "O4", q: "Wane bayani ne ke nuna abin da aka fesa a fili da lokacin?", options: ["Rajistar membobi", "Littafin sayarwa", "Takardar kai kaya", "Bayanan feshi da kayan aikin noma"], answer: 3, why: "Bayanan feshi da kayan aikin noma suna jera rana, magani, adadi da wanda ya fesa." },
      { objective: "O3", q: "Me GLOBALG.A.P. IFA don 'ya'yan itace da kayan lambu ya ƙunsa?", options: ["Lafiyar abinci, jin daɗin ma'aikata da muhalli", "Launin amfanin gona kaɗai", "Farashi kaɗai", "Girman gona kaɗai"], answer: 0, why: "IFA ya ƙunshi lafiyar abinci da bin diddigi, lafiya da jin daɗin ma'aikata, da muhalli." },
      { objective: "O3", q: "Wa ke yin binciken GLOBALG.A.P.?", options: ["Direban mai sayenku", "Hukumar ba da takardar shaida da aka amince da ita", "Maƙwabci", "Banki"], answer: 1, why: "Hukumar ba da takardar shaida da aka amince da ita da ke aiki a ƙasarku ce kaɗai za ta iya bincike da ba da takardar shaida." },
      { objective: "O3", q: "Ta yaya mai saye zai iya duba cewa takardar shaidarku ta gaskiya ce?", options: ["Ya ce ku rantse", "Ya kalli allon sunan gonarku", "A Supply Chain Portal na GLOBALG.A.P.", "Ba zai iya dubawa ba"], answer: 2, why: "Ana ganin matsayin takardar shaida a dandalin GLOBALG.A.P. ta amfani da lambarku." },
      { objective: "O3", q: "Wane ne matakin farko zuwa takardar shaida?", options: ["Biyan kuɗaɗen nan take", "Buga takardar shaida", "Faɗa wa mai saye cewa kuna da takardar shaida", "Sauke dokoki da jerin dubawa kyauta da yin binciken kai"], answer: 3, why: "Binciken kai yana nuna giɓinku kafin ku biya kuɗin bincike." },
      { objective: "O5", q: "Mene ne MRL?", options: ["Wani nau'in taki", "Wani nau'in iri", "Mafi yawan adadin maganin ƙwari da aka yarda ya rage a kan abinci", "Izinin sufuri"], answer: 2, why: "Iyakar ragowar magani ita ce iyakar doka ta ragowar maganin ƙwari a kan abinci." },
      { objective: "O5", q: "Me hukumar kula da noma ta Kenya ta ce game da kame-kamen EU na ragowar magani?", options: ["Sun faɗi zuwa sifili", "Sun tashi daga 25 a 2023 zuwa 57 a 2024", "Ba sa faruwa", "Sun shafi furanni kaɗai"], answer: 1, why: "AFA ta ba da rahoton cewa kame-kamen sun ninka fiye da biyu, kuma ta danganta su da faɗuwar kuɗin fitar da kayan lambu mai tsanani." },
      { objective: "O5", q: "Wane ne dalili da aka saba gani na ƙin karɓar kaya saboda ragowar magani?", options: ["Feshi kusa da girbi", "Ajiye bayanai masu kyau", "Amfani da akwatuna masu tsabta", "Horar da ma'aikata"], answer: 0, why: "Rashin mutunta lokacin jira kafin girbi yana barin ragowar magani sama da iyaka." },
      { objective: "O5", q: "Wata ƙungiya a Najeriya tana son fitar da busasshen zoɓo (hibiscus). Da wace hukuma za su yi rajista a matsayin masu fitarwa?", options: ["KEPHIS", "GEPA", "AFA", "Majalisar Bunƙasa Fitar da Kaya ta Najeriya (NEPC)"], answer: 3, why: "Masu fitarwa na Najeriya suna rajista da NEPC, kuma ya kamata su duba buƙatunta na yanzu." },
      { objective: "O6", q: "Me ya kamata tayin samarwa ya ƙunsa?", options: ["Amfanin gona, daraja, yawa, jadawali, lafiya, takardar shaida da tushen farashi", "Ƙaramin farashi kawai", "Lambar sirrin bankinku (PIN)", "Alƙawarin duk yawan da aka nema"], answer: 0, why: "Tayi a sarari yana nuna wa mai saye ainihin abin da za ku iya kawowa da yadda." },
      { objective: "O6", q: "Kafin ku sa hannu a kwangilar outgrower, ya kamata ku:", options: ["Sa hannu da sauri kafin wasu", "Karanta shafin farko kawai", "Karanta ta gaba ɗaya, ajiye kwafi, kuma tambayi mai ba da shawara da kuka amince da shi", "Bar kamfanin ya riƙe kwafi ɗaya tilo"], answer: 2, why: "Karantawa gaba ɗaya da neman shawara suna kare ku daga sharuɗɗan da ba ku zata ba." },
      { objective: "O6", q: "Girbinku ya lalace bayan fari. Wane sharaɗin kwangila ne ke da muhimmanci yanzu?", options: ["Tambarin mai saye", "Abin da zai faru idan wani ɓangare ya kasa kawowa", "Launin akwatunan", "Lokutan aikin ofishin mai saye"], answer: 1, why: "Sharaɗin gazawa yana faɗin abin da zai faru idan girbi ya lalace, don kada a hukunta ku ba bisa adalci ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 6, 9, 11, 13, 15, 17, 19] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na jerin dubawa ko tayin ku sake gwadawa.",
    criteria: [
      { name: "Buƙatun mai saye da giɓi", objective: "O1", notYet: "Buƙatun mai saye ba su da sarari, ko ba a yi alamar giɓi ba.", meets: "An jera yawa, ɗorewa, daraja, bin diddigi da lafiyar abinci, tare da abin da kuke samarwa yanzu da alamar kowane giɓi.", exceeds: "An dogara da rubutaccen bayanin buƙatar mai saye, tare da tsari da rana don rufe kowane giɓi." },
      { name: "Kyawawan Hanyoyin Noma", objective: "O2", notYet: "Babu rubutattun dokokin GAP, ko akwai maganin ƙwari marar rajista ko babu kayan kariya.", meets: "Rubutattun dokoki: magunguna masu rajista da ake amfani da su bisa alama, kayan kariya, lokacin jira kafin girbi, ruwa, tsaftar girbi da tsaron ma'aikata.", exceeds: "An horar da ma'aikata kuma an liƙa dokokin a wurin da suke aiki." },
      { name: "Bayanan bin diddigi", objective: "O4", notYet: "Babu lambobin fili, bayanan feshi ko lambobin rukuni.", meets: "Lambobin fili, bayanan feshi da kayan aikin noma, da bayanan girbi masu lambobin rukuni; ana iya bin akwati ɗaya baya.", exceeds: "Ana ajiye bayanai don dukkan ƙungiyar kuma an yi gwajin bin diddigi cikin 'yan mintuna." },
      { name: "Takardar shaida da dokokin fitarwa", objective: "O3", notYet: "An ɗauka ana da takardar shaida ko an yi watsi da ita, ko ba a faɗi hukumomin fitarwa ba.", meets: "Bayanin kuɗi da amfani ya faɗi abubuwan kuɗi uku da hanya (shi kaɗai, ƙungiya ko ba yanzu ba).", exceeds: "Yana da ainihin farashi daga hukumomin ba da takardar shaida da amsar mai saye kan ko ana buƙatarta." },
      { name: "Iyakar ragowar magani", objective: "O5", notYet: "Ba a duba iyakar ragowar magani ta kasuwar ba.", meets: "Ya faɗi inda aka jera iyakokin kuma ya duba magungunan da ake amfani da su bisa su, tare da hukumomin fitarwa da na lafiyar shuka.", exceeds: "Ya tambayi mai saye ko dakin gwaje-gwaje (lab) game da gwajin ragowar magani kafin turawa." },
      { name: "Tayin samarwa da sharuɗɗa", objective: "O6", notYet: "Babu tayi, ko yana alƙawarin fiye da abin da gona ko ƙungiyar za ta iya kawowa.", meets: "Tayi mai shafi ɗaya da daraja, yawa, jadawali, lafiya, takardar shaida, tushen farashi da sharuɗɗan kwangilar da ake so.", exceeds: "Ya haɗa da dokokin ƙin karɓa, sharuɗɗan gazawa da sharuɗɗan biya, kuma an nuna shi ga mai ba da shawara." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo ko ƙungiyoyi da suka aika tayin samarwa ga babban kanti, mai sarrafawa ko mai fitarwa cikin kwanaki 90 (binciken biyo baya)",
      "Masu koyo ko ƙungiyoyi da suka sami kwangilar samarwa ko yarjejeniyar outgrower cikin watanni shida",
      "Masu koyo da suka ajiye bayanan feshi da girbi masu lambobin rukuni har tsawon kaka gaba ɗaya",
      "Masu koyo ko ƙungiyoyi da suka fara ko kammala binciken kai na takardar shaida, ko suka sami takardar shaida"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya (wayar zamani tana da amfani) da littafi don bayanai",
      "Ainihin bayanin buƙatar mai saye idan zai yiwu (ku tambayi babban kanti, mai sarrafawa ko mai fitarwa na kusa)",
      "Alamomin magungunan ƙwari da masu koyo ke amfani da su, don karanta kayan kariya da lokacin jira kafin girbi",
      "Na zaɓi: jerin dubawa kyauta na GLOBALG.A.P. daga globalgap.org",
      "Kusan minti 90 gaba ɗaya, a gajerun zama, da ƙarin lokaci don tuntuɓar masu saye da hukumomi"
    ],
    facilitatorNotes: [
      "Ku gudanar da wannan kwas tare da ƙungiyoyin manoma idan zai yiwu: yawa, bayanai da takardar shaida ta ƙungiya suna aiki mafi kyau tare.",
      "Ku kawo ainihin alamomin maganin ƙwari ku yi atisayen nemo kayan kariya da lokacin jira kafin girbi; kada ku taɓa ba da adadin magani ko na lokacin jira da kanku.",
      "Ku gayyaci mai saye, mai fitarwa ko hukumar ba da takardar shaida don su yi magana game da abin da suke bincike; ku nemi su ba ku samfurin bayanin buƙata.",
      "Ku duba dokokin yanzu da AFA da KEPHIS (Kenya), NEPC (Najeriya), GEPA (Ghana) da hukumar kare shuka ta ƙasarku kafin zaman; dokoki da kuɗaɗe suna canjawa.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric; ku yi wasan kwaikwayo na ganawa da mai saye inda 'mai sayen' ke matsa wa ƙungiyar ta samar da fiye da abin da za ta iya."
    ]
  }
};
