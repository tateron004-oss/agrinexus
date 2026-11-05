"use strict";

// Koach Learn course, Hausa (ha) translation of small-business/smallbiz-ai-real-estate.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const HUD_FHA = { name: "HUD: Bayani game da Fair Housing Act (da Turanci)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: Tallace-tallace, maganganu da sanarwa na nuna wariya (da Turanci)", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "California Department of Real Estate (misalin hukumar jiha mai kula, da Turanci)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: Dokar CAN-SPAM, jagorar bin doka ga kasuwanci (da Turanci)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-ha",
  lang: "ha",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "AI ga Dillalan Gidaje (Real Estate)",
  skills: "Rubuta bayanin gida da ya bi dokar daidaito a gidaje, Mayar da rubutun tunatarwa zuwa labari ga abokan ciniki, Gina tsarin bibiya, Taƙaita bayanan kasuwa da kuka kawo, Shirya nuna gida da buɗaɗɗen gida, Kare bayanan abokan ciniki",
  outcome: "amfani da AI a kasuwancinku na gidaje don rubuta ingantaccen bayanin gida da ya bi dokokin daidaito a gidaje (fair housing), sanar da masu saye da masu sayarwa halin da ake ciki, gudanar da tsarin bibiyar masu sha'awa, da mayar da lambobin kasuwa da kuka ɗauko daga MLS ɗinku zuwa taƙaitaccen bayani mai sauƙi ga abokin ciniki, ba tare da saka bayanan sirri na abokan ciniki a kayan AI ba.",
  about: [
    "Wannan kwas na dillalan gidaje ne (real estate agents), manyan dillalai (brokers) da mataimakansu, musamman dillalai masu zaman kansu da sababbi da ke gina kasuwanci, ciki har da dillalai da yawa daga ƙananan ƙabilu da ke hidima ga al'ummominsu da masu sayen gida a karon farko.",
    "Za ku yi amfani da mataimakin AI kyauta don rubuta bayanin gidaje da sauri, sanar da abokan ciniki, bibiyar masu sha'awa a kai a kai, da bayanin lambobin kasuwa a sarari. Za ku kuma koyi inda AI ke kawo haɗari a kasuwancin gidaje: kalmomin da suka saɓa wa dokar daidaito a gidaje, bayanai marasa gaskiya a bayanin gida, da sirrin abokan ciniki.",
    "Wannan kwas ba shawarar shari'a ba ne. Dokar daidaito a gidaje, dokokin talla da dokokin lasisi sun shafe ku; ku duba HUD, hukumar jiharku mai kula da gidaje (a California, Department of Real Estate) da babban dillalinku (broker). Kowane darasi yana ɗaukar kusan minti biyar, akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe."
  ],
  finalTask: "Ku gina kayan AI na dillali: bayanin gida ɗaya da aka duba layi-layi don gaskiya da kalmomin daidaito a gidaje, samfurin labarin mako-mako ga mai sayarwa, samfurin labarin neman gida ga mai saye, tsarin bibiyar masu sha'awa na kwana 30 mai saƙonni huɗu, taƙaitaccen bayanin kasuwa na shafi ɗaya da aka gina daga lambobin da kuka ɗauko da kanku, da jerin abubuwan yi na buɗaɗɗen gida. Babu bayanan sirri na abokin ciniki da zai shiga kayan AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dillalan gidaje, manyan dillalai da mataimakansu, musamman dillalai masu zaman kansu da sababbi da ke gina kasuwanci, ciki har da dillalai da yawa daga ƙananan ƙabilu da ke hidima ga al'ummominsu da masu sayen gida a karon farko.",
    startingPoint: "Suna da lasisi ko suna aiki ƙarƙashin babban dillali, kuma sun san yadda ake ɗauko gidaje da lambobi daga MLS. Da yawa sun gwada AI don rubutu ɗaya ko biyu a kafofin sada zumunta amma ba su da tsari na dindindin, kuma kaɗan ne suka yi tunani game da haɗarin AI ga dokar daidaito a gidaje da sirri.",
    gap: "Rubuta bayanin gidaje, labarai da saƙonnin bibiya yana ɗaukar sa'o'i, kuma bibiya marar tsari tana sa a rasa abokan ciniki. AI yana adana wannan lokaci, amma yana iya ƙirƙirar bayanai, rubuta abin da ya saɓa wa dokar daidaito a gidaje, da bayyana bayanan abokan ciniki. Masu koyo suna buƙatar hanya mai aminci da za a iya maimaitawa wadda ke kare lasisinsu da abokan cinikinsu.",
    constraints: [
      "Ba shawarar shari'a ba ne: dokokin daidaito a gidaje, talla da lasisi daga HUD, hukumar jiha da babban dillali suke",
      "Ƙa'idodin kamfanin dillali (brokerage) game da kayan AI suna aiki",
      "Sirri: babu sunayen abokan ciniki tare da adireshi, bayanan kuɗi, sharuɗɗan tayi ko dabarar ciniki a kayan AI",
      "Lambobin kasuwa dole su fito daga MLS ko wata majiya amintacciya, ba daga AI ba",
      "Lokaci: dillalai suna da aiki sosai, don haka kowane darasi kusan minti 5 ne"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da mataimakan AI ba za su iya fara ɗaukar kwas na gabatarwa ga AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da bayanan gaskiya da aka tabbatar daga takardun hukuma, mai sayarwa da ziyararku", action: "rubuta bayanin gida da taimakon AI, da duba kowane bayani layi-layi", standard: "kuna cire duk abin da ba za ku iya tabbatarwa ba" },
    { id: "O2", condition: "Idan kuna da bayanin gida ko talla da aka rubuta da AI", action: "gane da sake rubuta kalmomin da ke nuna fifiko game da mutane maimakon bayanin gidan", standard: "ta yadda kowane layi zai bayyana gidan da abubuwansa kaɗai" },
    { id: "O3", condition: "Idan kuna da bayanin gida da aka duba", action: "ƙirƙirar rubutu na kafofin sada zumunta da imel na talla da suka bi dokokin talla na masu lasisi da na imel", standard: "da bayanan lasisi da kamfanin dillali yadda ake buƙata, adireshin gidan waya da hanyar daina karɓa (unsubscribe)" },
    { id: "O4", condition: "Idan kuna da rubutun tunatarwa na makon", action: "rubuta labari ga mai sayarwa ko mai saye da AI ta amfani da madadi a wurin bayanan sirri", standard: "ba tare da wani bayanin sirri na abokin ciniki a kayan AI ba" },
    { id: "O5", condition: "Idan kuna da sabon mai sha'awa da ya yarda ku tuntuɓe shi", action: "tsara bibiya ta kwana 30 mai saƙonni huɗu masu amfani da ranar gaba da ake bin diddiginta", standard: "da duba duk hanyoyin haɗi na shirye-shirye a shafukan hukuma" },
    { id: "O6", condition: "Idan kuna da lambobin kasuwa da kuka ɗauko daga MLS ɗinku", action: "ƙirƙirar taƙaitaccen bayanin kasuwa da kalmomi masu sauƙi da jerin abubuwan yi na buɗaɗɗen gida", standard: "ba tare da lambobin ƙirƙira ba, kuma da majiya da kwanan wata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Bayanin gidaje da dokar daidaito a gidaje",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta bayanin gida daga bayananku na gaskiya",
          minutes: 5,
          goal: "Rubuta bayanin gida ingantacce mai jan hankali daga bayanan gidan da aka tabbatar.",
          text: [
            "Bayanin gida (listing description) yana tallata abubuwan gidan: tsarin ɗakuna, gyare-gyare, haske, filin waje, da abubuwan unguwa kamar wuraren shaƙatawa ko sufuri na kusa. AI yana rubutu da sauri, amma abin da kuka faɗa masa kaɗai ya sani.",
            "Ku ba shi bayanan da aka tabbatar kaɗai: \"ɗakin kwana 3, banɗaki 2, ƙafa murabba'i 1,450 bisa takardun gundumar (county), an gina 1962, an gyara kicin 2021, sabon rufi 2023, bayan gida mai shinge da itacen lemun tsami, mil 0.3 zuwa jirgin ƙasa mai sauƙi (light rail).\" Ku nemi bayani na kalmomi 120 cikin sautin ƙauna da ƙwarewa, da gajeren sigar kafofin sada zumunta.",
            "Sannan ku duba kowane bayani: majiyar girman gidan, shekarun gyare-gyare, sunayen makarantu, nisa. AI yana iya ƙara abin da babu (\"teburin granite\", \"ganin teku\"). Bayanin ƙarya a bayanin gida yana iya kawo ƙorafi da matsalar shari'a."
          ],
          steps: ["Ku tattara bayanan da aka tabbatar daga takardun hukuma, mai sayarwa da ziyararku.", "Ku nemi AI ya rubuta bayani mai tsawo da gajere.", "Ku duba kowane bayani layi-layi.", "Ku cire duk abin da ba za ku iya tabbatarwa ba."],
          words: [["Bayanin gida (listing description)", "rubutun da ke bayyana gidan da ake sayarwa ko bayar da haya."], ["MLS", "Multiple Listing Service: rumbun bayanai da dillalai ke amfani da shi don raba gidajen da ake sayarwa."], ["Bayanin da aka tabbatar", "abin da kuka tabbatar daga takardun hukuma, mai sayarwa ko ziyararku."]],
          slides: [
            { title: "Ku tallata abubuwan gidan", bullets: ["Tsarin ɗakuna, gyare-gyare, haske, filin waje", "Wuraren shaƙatawa da sufuri na kusa"] },
            { title: "Bayanai su shiga, kalmomi su fito", bullets: ["Ku ba AI bayanan da aka tabbatar kaɗai", "Ku nemi siga mai tsawo da gajeriya"] },
            { title: "Ku duba layi-layi", bullets: ["Majiyar girman gida, shekarun gyara, nisa", "AI yana iya ƙirƙirar abubuwa", "Bayanin ƙarya yana iya kawo ƙorafi"] }
          ],
          tryIt: "Ku zaɓi gida da kuka sani (ko samfuri). Ku rubuta bayanai goma da aka tabbatar, ku nemi AI ya rubuta bayani na kalmomi 120, sannan ku duba kowane layi, kuna share duk abin da ba ya cikin bayananku.",
          youCanNow: "rubuta bayanin gida daga bayanan da aka tabbatar, da gano abubuwan da AI ya ƙirƙira.",
          quickCheck: [
            { objective: "O1", q: "Me AI ya sani game da gida idan yana rubuta bayaninsa?", options: ["Abin da kuka faɗa masa kaɗai", "Duk abin da ke cikin takardun gundumar", "Abin da mai sayarwa ya faɗa wa ofishinku", "Bayanan MLS na gidan a yanzu"], answer: 0, why: "AI abin da kuka ba shi kaɗai ya sani, don haka ku ba shi bayanan da aka tabbatar kaɗai." },
            { objective: "O1", q: "Bayanin AI ya ce \"teburin granite\" amma ba ku gani ba lokacin ziyararku. Me za ku yi?", options: ["Ku bar shi; masu saye suna son granite", "Ku cire shi sai dai idan kun tabbatar da shi", "Ku saka \"wataƙila\" a gabansa", "Ku tambayi AI ko ya tabbata"], answer: 1, why: "Kuna duba kowane bayani kuma ku cire duk abin da ba za ku iya tabbatarwa ba." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kalmomin daidaito a gidaje: abin da AI bai kamata ya rubuta ba",
          minutes: 6,
          goal: "Gano da gyara kalmomin bayanin gida da ke nuna fifiko bisa rukunin da doka ke karewa.",
          text: [
            "Dokar tarayya ta Fair Housing Act (dokar daidaito a gidaje) ta hana nuna wariya a gidaje saboda launin fata (race), launi, ƙasar asali, addini, jinsi, matsayin iyali da nakasa. Dokar HUD a 24 CFR 100.75 ta hana tallace-tallace, maganganu da sanarwa da ke nuna fifiko, iyakancewa ko wariya bisa waɗannan, ciki har da ta kalmomi, hotuna ko inda kuka zaɓi yin talla. Jihohi da yawa, ciki har da California, suna kare ƙarin rukunoni; ku duba jiharku.",
            "Ku bayyana gidan, ba mutanen da kuke so su zauna a ciki ba. Kalmomi masu haɗari: \"perfect for young professionals\" (ya dace da matasa ma'aikata), \"ideal for a couple\" (ya dace da ma'aurata), \"no kids\" (babu yara), \"great Christian neighborhood\" (unguwar Kirista mai kyau), \"bachelor pad\" (gidan saurayi), \"tafiyar ƙafa zuwa [wurin ibada] ga iyalan wannan addinin\", \"able-bodied\" (masu cikakkiyar lafiyar jiki). Mafi kyau: \"ɗakin kwana uku\", \"titi mai shiru\", \"mil 0.3 zuwa sufuri\", \"tsarin bene ɗaya\".",
            "AI yana iya kwafo halayen wariya daga abin da ya koya. Koyaushe ku karanta abin da ya rubuta don neman matsalolin daidaito a gidaje, kuma ku tambaye shi: \"Ka sake rubutawa don bayyana gidan da abubuwansa kaɗai.\" Idan kuna shakka, ku tambayi babban dillalinku ko wata majiyar taimako kan daidaito a gidaje."
          ],
          steps: ["Ku karanta kowane layi kuna tambaya: shin wannan yana bayyana gidan ne ko mutane?", "Ku cire kalmomi game da wanda ya kamata ya zauna a ciki.", "Ku maye gurbinsu da abubuwan gidan.", "Ku duba hotuna da wurin da aka saka talla ma.", "Ku tambayi babban dillalinku idan kuna shakka."],
          words: [["Fair Housing Act", "dokar tarayya da ta hana nuna wariya a gidaje bisa rukunonin da doka ke karewa."], ["Rukunin da doka ke karewa (protected class)", "rukuni da doka ke kare shi daga wariya, kamar launin fata ko matsayin iyali."], ["Matsayin iyali (familial status)", "samun yara 'yan ƙasa da shekara 18 a gida, ko kasancewa da ciki."], ["HUD", "Ma'aikatar Gidaje da Raya Birane ta Amurka (US Department of Housing and Urban Development)."]],
          slides: [
            { title: "Rukunonin da dokar tarayya ke karewa", bullets: ["Launin fata, launi, ƙasar asali, addini", "Jinsi, matsayin iyali, nakasa", "Jihohi da yawa, kamar California, suna kare ƙari"] },
            { title: "Talla kada ta nuna fifiko", bullets: ["24 CFR 100.75: kalmomi, hotuna, wurin talla", "Ku bayyana gidan, ba mutane ba"] },
            { title: "Ku gyara kalmomi masu haɗari", bullets: ["\"Ya dace da matasa ma'aikata\" -> ku cire", "\"Babu yara\" -> ku cire", "Ku yi amfani da abubuwa: \"ɗakin kwana 3\", \"kusa da sufuri\""] },
            { title: "AI yana iya kwafo wariya", bullets: ["Ku karanta kowane rubutu don matsalolin daidaito", "Ku ce: \"Ka bayyana gidan kaɗai\"", "Kuna shakka? Ku tambayi babban dillalinku"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Ku nemi AI ya rubuta bayanin gida mai girman da ya dace da iyali. Ku yi alama kan duk kalmar da ke bayyana mutane maimakon gidan, sannan ku sake rubuta su a matsayin abubuwan gidan.",
          youCanNow: "gano da gyara matsalolin daidaito a gidaje a kalmomin bayanin gida, ciki har da rubutun AI.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata bayanin gida ya bayyana?", options: ["Irin mutanen da ya kamata su saya", "Addinin maƙwabta", "Gidan da abubuwansa", "Wanda zai dace da mutanen titin"], answer: 2, why: "Ku bayyana gidan, ba mutanen da kuke so su zauna a ciki ba." },
            { objective: "O2", q: "AI ya rubuta \"ya dace da ma'aurata.\" Me za ku yi?", options: ["Ku bar shi; yana da daɗi", "Ku ƙara \"ko mutum ɗaya\"", "Ku matsar da shi zuwa ƙarshe", "Ku maye gurbinsa da abubuwan gidan, kamar \"ɗakin kwana biyu, titi mai shiru\""], answer: 3, why: "\"Ya dace da ma'aurata\" kalma ce mai haɗari game da mutane; ku bayyana gidan maimakon haka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tallata gidajenku da kanku, bisa doka",
          minutes: 5,
          goal: "Ƙirƙirar rubutun kafofin sada zumunta da imel na gida da suka bi dokokin talla da na imel.",
          text: [
            "AI zai iya mayar da bayanin gidan da kuka duba zuwa rubutu na kafofin sada zumunta, imel ga mutanen da kuka sani (sphere), rubutun takardar talla (flyer) da gajeren rubutun bidiyo. Ku yi amfani da bayanan da aka tabbatar iri ɗaya da binciken daidaito a gidaje iri ɗaya a kowane abu.",
            "Hukumar jiharku da babban dillalinku suna da dokokin talla ga masu lasisi, sau da yawa har da nuna lambar lasisinku da sunan kamfanin dillalinku. A California, wannan hukuma ita ce Department of Real Estate (DRE); ku duba dokokin jiharku da ƙa'idodin kamfanin dillalinku.",
            "Imel na talla dole ya bi dokar CAN-SPAM: mai aikawa da taken saƙo na gaskiya, a bayyana cewa talla ne, a saka adireshin gidan waya da hanyar daina karɓa (unsubscribe), kuma a girmama buƙatar daina karɓa cikin kwanakin aiki 10."
          ],
          steps: ["Ku mayar da bayanin gidan da kuka duba zuwa rubutu, imel da takardar talla da AI.", "Ku yi binciken daidaito a gidaje a kowanne.", "Ku ƙara bayanan lasisi da kamfanin dillali yadda jiharku da babban dillalinku ke buƙata.", "Ku ƙara adireshin gidan waya da unsubscribe a imel na talla."],
          words: [["Sphere (da'irar sani)", "mutanen da kuka sani da za su iya saya, sayarwa ko tura muku wani: tsofaffin abokan ciniki, abokai, iyali."], ["Mai lasisi (licensee)", "mutumin da ke riƙe da lasisin dillancin gidaje."]],
          slides: [
            { title: "Gida ɗaya, abubuwa da yawa", bullets: ["Rubutu, imel, takardar talla, rubutun bidiyo", "Bayanai iri ɗaya, binciken daidaito iri ɗaya"] },
            { title: "Dokokin talla na masu lasisi", bullets: ["Sau da yawa: lambar lasisi da sunan kamfanin dillali", "California: Department of Real Estate", "Ku duba jiharku da ƙa'idodin babban dillali"] },
            { title: "Ginshiƙan imel na talla", bullets: ["Mai aikawa da take na gaskiya; a ce talla ne", "Adireshin gidan waya da unsubscribe", "Ku girmama daina karɓa cikin kwanakin aiki 10"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Ku mayar da bayanin gidan da kuka duba zuwa rubutu na kafofin sada zumunta da gajeren imel. Ku yi binciken daidaito a gidaje, kuma ku ƙara bayanan lasisi da kamfanin dillali da jiharku da babban dillalinku ke buƙata.",
          youCanNow: "tallata gida ta hanyoyi da yawa yayin da kuke bin dokokin daidaito a gidaje, na masu lasisi da na imel.",
          quickCheck: [
            { objective: "O3", q: "Wace dokar imel ce ta shafi imel na talla a wannan darasi?", options: ["CAN-SPAM", "The Food Code", "HIPAA", "Dokar FTC game da sharhi (reviews)"], answer: 0, why: "Imel na talla dole ya bi CAN-SPAM, ciki har da adireshin gidan waya da hanyar unsubscribe." },
            { objective: "O3", q: "Kun mayar da bayanin gidanku zuwa rubutu na kafofin sada zumunta da AI. Me kuma za ku yi kafin ku saka shi?", options: ["Ku saka shi nan take; an riga an duba bayanin gidan", "Ku yi binciken daidaito a gidaje kuma ku ƙara bayanan lasisi da kamfanin dillali yadda ake buƙata", "Ku cire farashin", "Ku ƙara hoton wani gida daban daga intanet"], answer: 1, why: "Kowane abu yana samun binciken daidaito iri ɗaya da bayanan da jiharku da babban dillalinku ke buƙata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Bayanin gidaje da dokar daidaito a gidaje",
        questions: [
          { objective: "O1", q: "Bayanin AI ya ce \"ganin teku\" amma gidan ba shi da shi. Me za ku yi?", options: ["Ku bar shi; masu saye suna so", "Ku share shi", "Ku ƙara hoton teku", "Ku tambayi AI ko gaskiya ne"], answer: 1, why: "Bayanan da aka tabbatar kaɗai ne suka dace a bayanin gida." },
          { objective: "O2", q: "Wanne ne rukunin da dokar tarayya ta Fair Housing Act ke karewa?", options: ["Launin gashi", "Ƙungiyar wasan da kuka fi so", "Kamfanin mota", "Matsayin iyali"], answer: 3, why: "Matsayin iyali yana ɗaya daga cikin rukunoni bakwai na tarayya." },
          { objective: "O2", q: "Wace kalma ce ke da haɗari ga dokar daidaito a gidaje?", options: ["\"Ya dace da matasa ma'aikata\"", "\"Ɗakin kwana uku\"", "\"Sabon rufi 2023\"", "\"Mil 0.3 zuwa light rail\""], answer: 0, why: "Tana nuna fifiko game da wanda ya kamata ya zauna a ciki." },
          { objective: "O2", q: "Dokokin talla na daidaito a gidaje za su iya shafar:", options: ["Allunan talla kaɗai", "Kalmomi kaɗai", "Kalmomi, hotuna da inda kuka saka talla", "Babu komai a intanet"], answer: 2, why: "24 CFR 100.75 ya shafi kalmomi, hotuna da zaɓin kafofin talla." },
          { objective: "O3", q: "A ina za ku duba dokokin talla na masu lasisi a California?", options: ["Wurin mai saye", "Hira da AI", "Department of Real Estate da babban dillalinku", "Wata ƙungiya a kafofin sada zumunta"], answer: 2, why: "DRE ce ke kula da masu lasisi a California." }
        ]
      }
    },
    {
      name: "Babi na 2: Abokan ciniki, masu sha'awa da bayanan kasuwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Labarai ga abokan ciniki ba tare da raba bayanan sirri ba",
          minutes: 5,
          goal: "Mayar da rubutun tunatarwarku zuwa labarai masu sarari ga mai sayarwa da mai saye ta amfani da madadi.",
          text: [
            "Abokan ciniki suna son jin daga gare ku sau da yawa. Labarin mako-mako ga mai sayarwa yana bayani kan nuna gida, ra'ayoyin masu kallo, yawan kallo a intanet da matakai na gaba. Labari ga mai saye yana bayani kan sababbin gidajen da suka dace, nuna gidan da aka tsara, da abin da ke faruwa a matakin farashinsu.",
            "Ku yi amfani da AI don mayar da rubutun tunatarwa marar tsari zuwa labari mai sarari, tare da madadi: \"Ka mayar da waɗannan rubutun zuwa labarin mako-mako mai daɗi ga [sunan mai sayarwa]: an nuna gidan sau 6, an dawo karo na biyu sau 2, ra'ayoyi sun ce kicin yana da kyau amma bayan gida yana buƙatar tsaftacewa, kallo 1,200 a intanet. Ka ba da shawarar mataki ɗaya na gaba.\"",
            "Kada ku taɓa saka bayanan sirri na abokan ciniki a kayan AI: cikakkun sunaye tare da adireshi, bayanan kuɗi, adadin amincewar rance na farko (pre-approval), lambobin Social Security, sharuɗɗan tayi ko dabarar ciniki. Ku cike su da kanku a imel ɗinku ko CRM. Ku bi ƙa'idodin kamfanin dillalinku game da kayan AI."
          ],
          steps: ["Ku rubuta rubutun tunatarwa bayan makon.", "Ku maye gurbin sunaye da bayanan sirri da madadi.", "Ku nemi AI labari mai sarari da mataki na gaba.", "Ku cike ainihin bayanan da kanku sannan ku aika."],
          words: [["CRM", "customer relationship management: manhajar bin diddigin abokan ciniki da masu sha'awa."], ["Madadi (placeholder)", "gurbi kamar [sunan mai sayarwa] da ake amfani da shi maimakon ainihin bayanan sirri."]],
          slides: [
            { title: "Abokan ciniki suna son labari", bullets: ["Mai sayarwa: nuna gida, ra'ayoyi, kallo, mataki na gaba", "Mai saye: sababbin gidaje, nuna gida, canjin kasuwa"] },
            { title: "Rubutun tunatarwa su shiga, labari ya fito", bullets: ["Rubutun tunatarwa da madadi", "Ku nemi labari mai daɗi da mataki na gaba"] },
            { title: "Kada ku taɓa saka a AI", bullets: ["Sunaye tare da adireshi, kuɗi, lambar SSN", "Adadin pre-approval da sharuɗɗan tayi", "Dabarar ciniki"] }
          ],
          tryIt: "Ku rubuta rubutun tunatarwa na makon wani mai sayarwa na samfuri. Ku yi amfani da madadi, ku nemi AI ya rubuta labarin mako-mako da mataki na gaba, sannan ku duba cewa babu bayanan sirri a ciki.",
          youCanNow: "aika labarai masu sarari ga abokan ciniki da aka yi da AI yayin da kuke kiyaye bayanansu a sirri.",
          quickCheck: [
            { objective: "O4", q: "Me labarin mako-mako ga mai sayarwa ya ƙunsa?", options: ["Adadin pre-approval na mai saye", "Shirinku na ciniki", "Nuna gida, ra'ayoyi, kallo a intanet da matakai na gaba", "Tayin sauran abokan ciniki"], answer: 2, why: "Labari ga mai sayarwa yana bayani kan nuna gida, ra'ayoyi, kallo da matakai na gaba." },
            { objective: "O4", q: "Rubutun tunatarwarku yana da cikakken sunan mai saye da sharuɗɗan tayinsa. Me za ku yi kafin ku liƙa su a AI?", options: ["Ku liƙa su yadda suke", "Ku gajarta rubutun", "Ku fassara su da farko", "Ku maye gurbin bayanan sirri da madadi, ku cike su da kanku daga baya"], answer: 3, why: "Bayanan sirri na abokan ciniki ba sa shiga kayan AI; ku ne kuke cike su da kanku." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tsarin bibiya ga masu sha'awa",
          minutes: 5,
          goal: "Gina tsarin bibiya na kwana 30 mai saƙonni huɗu ga sababbin masu sha'awa.",
          text: [
            "Yawancin masu sha'awa (leads) ba su shirya yau ba. Tsarin bibiya mai tsari da taimako yana sa su tuna da ku. Misalin tsarin kwana 30: rana ta 1 godiya da tambaya ɗaya; rana ta 7 shawara mai amfani (shirye-shiryen taimakon masu sayen gida a karon farko da za su duba); rana ta 14 taƙaitaccen hoton kasuwa na yankinsu; rana ta 30 tambayar ya ake ciki.",
            "Ku nemi AI ya rubuta kowane saƙo cikin salon maganarku da gurbin [suna na farko] da [yanki]. Ku sa su zama masu taimako, ba matsa lamba ba. Ku ba da hanyoyin haɗi zuwa shafukan hukuma na shirye-shirye da kuka duba kaɗai.",
            "Ku bi diddigin masu sha'awa a CRM ɗinku ko takardar lissafi (spreadsheet): suna, inda aka same shi, kwanan wata, mataki, ranar bibiya ta gaba. Ku tura imel ko tes ga mutanen da suka yarda su ji daga gare ku kaɗai, kuma ku bi dokokin imel da tes."
          ],
          steps: ["Ku tsara tuntuɓa huɗu cikin kwana 30.", "Ku nemi AI ya rubuta kowanne da gurbi.", "Ku sa su zama masu taimako kuma ku duba bayanan shirye-shirye a shafukan hukuma.", "Ku bi diddigin ranar bibiya ta gaba ta kowane mai sha'awa.", "Ku tuntuɓi waɗanda suka yarda kaɗai."],
          words: [["Mai sha'awa (lead)", "mutumin da zai iya saya, sayarwa ko karɓar haya amma bai riga ya rattaba hannu da ku ba."], ["Tuntuɓa (touch)", "haɗuwa ɗaya da mai sha'awa: kira, tes ko imel."]],
          slides: [
            { title: "Tsarin kwana 30", bullets: ["Rana ta 1: godiya da tambaya ɗaya", "Rana ta 7: shawara mai amfani; Rana ta 14: hoton kasuwa", "Rana ta 30: tambayar ya ake ciki"] },
            { title: "Taimako, ba matsa lamba ba", bullets: ["AI yana rubutawa da [suna na farko] da [yanki]", "Ku haɗa zuwa shafukan hukuma da kuka duba kaɗai"] },
            { title: "Ku bi diddigi kuma ku girmama", bullets: ["Suna, inda aka same shi, mataki, rana ta gaba", "Ku tuntuɓi waɗanda suka yarda kaɗai"] }
          ],
          tryIt: "Ku nemi AI ya rubuta tsarin bibiyarku na kwana 30 mai saƙonni huɗu. Ku gyara kowanne zuwa salon maganarku, kuma ku shirya takardar bin diddigin masu sha'awa mai shafi na ranar bibiya ta gaba.",
          youCanNow: "gudanar da tsarin bibiya mai tsari da taimako ga sababbin masu sha'awa.",
          quickCheck: [
            { objective: "O5", q: "A misalin tsarin, mene ne saƙon rana ta 14?", options: ["Hoton kasuwa na yankinsu", "Neman su tura muku wani", "Kwangilar da za su sa hannu", "Katin murnar ranar haihuwa"], answer: 0, why: "Tsarin shi ne rana ta 1 godiya, rana ta 7 shawara, rana ta 14 hoton kasuwa, rana ta 30 tambayar ya ake ciki." },
            { objective: "O5", q: "Kun haɗu da wani a wani biki wanda bai taɓa yarda ku tuntuɓe shi ba. Ya kamata ku saka shi a tsarin tes ɗinku?", options: ["Ee, duk wanda kuka haɗu da shi mai sha'awa ne", "A'a, ku tuntuɓi waɗanda suka yarda su ji daga gare ku kaɗai", "Ee, idan saƙonnin gajeru ne", "Ee, amma a ƙarshen mako kaɗai"], answer: 1, why: "Ku tura imel ko tes ga waɗanda suka yarda kaɗai, kuma ku bi dokokin imel da tes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Taƙaitaccen bayanin kasuwa da shirin nuna gida",
          minutes: 5,
          goal: "Mayar da lambobin kasuwa da kuka ɗauko zuwa taƙaitaccen bayani mai sarari ga abokin ciniki, da shirya buɗaɗɗen gida.",
          text: [
            "Abokan ciniki suna tambaya, \"Yaya kasuwa take?\" Ku ɗauko lambobin da kanku daga MLS ɗinku ko wata majiya amintacciya: farashin tsakiya (median), kwanakin da gida ke ɗauka a kasuwa, yawan gidajen da ake sayarwa yanzu, rabon farashin sayarwa da farashin da aka saka, na 'yan watannin da suka wuce.",
            "Ku liƙa lambobin (ba tare da bayanan abokan ciniki ba) a AI ku ce: \"Ka bayyana waɗannan lambobin kasuwa ga mai sayen gida a karon farko da kalmomi masu sauƙi, cikin kalmomi 150. Kada ka ƙara lambobin da ban ba ka ba.\" Ku duba cewa bai ƙirƙiri ƙididdiga ba, kuma ku ƙara majiyarku da kwanan wata. AI ba shi da ingantattun bayanan kasuwa na yanzu; ku ne kuke da su.",
            "Don nuna gida da buɗaɗɗen gida (open house), ku nemi AI ya ba ku jerin abubuwan yi: kafin (fitilu, yanayin zafi, takardun talla, littafin rajista), lokacin (tsaro, gaisuwa, rubutun tunatarwa), bayan (bibiya cikin awa 24). Ku ƙara matakan tsaro na kamfanin dillalinku."
          ],
          steps: ["Ku ɗauko lambobin yanzu daga MLS ɗinku ko majiya amintacciya.", "Ku nemi AI ya bayyana su da kalmomi masu sauƙi ba tare da ƙara lambobi ba.", "Ku duba kowace lamba kuma ku ƙara majiya da kwanan wata.", "Ku nemi AI jerin abubuwan yi na buɗaɗɗen gida kuma ku ƙara matakan tsaro."],
          words: [["Farashin tsakiya (median price)", "farashin tsakiya: rabin gidaje an sayar da su fiye da shi, rabi ƙasa da shi."], ["Kwanakin a kasuwa (days on market)", "tsawon lokacin da gidaje ke ɗauka kafin a sayar da su."], ["Rabon sayarwa da farashin saka (sale-to-list ratio)", "farashin sayarwa da aka raba da farashin da aka saka, ana nuna shi a kashi cikin ɗari."]],
          slides: [
            { title: "Ku ne kuke ɗauko lambobin", bullets: ["Farashin tsakiya da kwanakin a kasuwa", "Gidajen da ake sayarwa yanzu da rabon sayarwa da farashin saka", "Daga MLS ɗinku ko majiya amintacciya"] },
            { title: "AI yana bayani", bullets: ["\"Ka bayyana da kalmomi masu sauƙi; kada ka ƙara lamba\"", "Ku duba kowace lamba; ku ƙara majiya da kwanan wata"] },
            { title: "Jerin abubuwan yi na buɗaɗɗen gida", bullets: ["Kafin: fitilu, takardun talla, littafin rajista", "Lokacin: tsaro da rubutun tunatarwa", "Bayan: bibiya cikin awa 24"] }
          ],
          tryIt: "Aikin ƙarshe: ku gina kayan AI na dillali: bayanin gida da aka duba, samfuran labarai ga mai sayarwa da mai saye, tsarin bibiya na kwana 30, taƙaitaccen bayanin kasuwa daga lambobin da kuka ɗauko, da jerin abubuwan yi na buɗaɗɗen gida.",
          youCanNow: "bayyana lambobin kasuwa a sarari da shirya nuna gida da taimakon AI, ta amfani da bayananku.",
          quickCheck: [
            { objective: "O6", q: "Me rabon farashin sayarwa da farashin saka (sale-to-list) ke kwatantawa?", options: ["Haya da biyan bashin gida", "Kwanakin a kasuwa da yawan gidaje", "Farashin da aka sayar da gidaje da farashin da aka saka su", "Dillalai da masu saye"], answer: 2, why: "Yana kwatanta farashin sayarwa da farashin da aka saka." },
            { objective: "O6", q: "Taƙaitaccen bayanin kasuwa na AI yana da lambar da ba ku ba shi ba. Me za ku yi?", options: ["Ku bar ta; AI yana da bayanai na yanzu", "Ku zagaye ta", "Ku matsar da ita zuwa ƙasan shafi", "Ku cire ta kuma ku duba kowace lamba da majiyarku"], answer: 3, why: "AI ba shi da ingantattun bayanan kasuwa na yanzu, don haka ku cire lambobin ƙirƙira kuma ku ƙara majiyarku da kwanan wata." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Abokan ciniki, masu sha'awa da bayanan kasuwa",
        questions: [
          { objective: "O4", q: "Wanne ne bai kamata ya taɓa shiga kayan AI ba?", options: ["Adadin pre-approval na mai saye da sunansa", "\"An nuna gidan sau 6 a wannan makon\"", "\"Kicin ya sami ra'ayoyi masu kyau\"", "\"[sunan mai sayarwa]\""], answer: 0, why: "Bayanan kuɗi na abokan ciniki sirri ne." },
          { objective: "O5", q: "Mene ne bibiya mai kyau ta rana ta 7?", options: ["Babu komai", "Matsa lamba: \"Ku sa hannu yanzu!\"", "Makin bashinsu (credit score)", "Shawara mai amfani don halin da suke ciki"], answer: 3, why: "Tuntuɓa mai taimako tana gina amincewa." },
          { objective: "O6", q: "Daga ina ya kamata lambobin kasuwa su fito?", options: ["Ƙwaƙwalwar AI", "MLS ɗinku ko wata majiya amintacciya da kuka ɗauko", "Tsammani", "Maƙwabci"], answer: 1, why: "AI ba shi da ingantattun bayanan kasuwa na yanzu." },
          { objective: "O6", q: "AI ya ƙara \"farashi ya tashi da 12% a wannan shekara\" amma ba ku taɓa ba shi wannan lamba ba. Za ku:", options: ["Cire ta", "Bar ta", "Zagaye ta sama", "Saka ta a intanet"], answer: 0, why: "Kada ku yi amfani da lambobin da ba ku kawo kuma kuka duba ba." },
          { objective: "O6", q: "Mene ne farashin tsakiya (median)?", options: ["Matsakaicin haya", "Farashi mafi tsada", "Farashin tsakiya: rabi an sayar fiye da shi, rabi ƙasa da shi", "Farashin da aka saka"], answer: 2, why: "Median ita ce ƙimar tsakiya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: AI ga Dillalan Gidaje (Real Estate)",
    questions: [
      { objective: "O1", q: "Me ya kamata ku ba AI don rubuta bayanin gida?", options: ["Lambar SSN ta mai sayarwa", "Bayanan da aka tabbatar kaɗai", "Tsammani", "Bayanin gidan wani dillali mai gasa"], answer: 1, why: "Bayanai na gaskiya su shiga, kalmomi ingantattu su fito." },
      { objective: "O1", q: "MLS gajartawar:", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Dillalai suna raba gidaje a MLS." },
      { objective: "O1", q: "Me yasa za ku duba girman gida (ƙafa murabba'i) a bayanin AI?", options: ["Ba a buƙata", "Don ya yi tsawo", "Don nishaɗi", "Bayanin ƙarya yana iya kawo ƙorafi da matsalar shari'a"], answer: 3, why: "Bayanai marasa gaskiya suna kawo matsaloli." },
      { objective: "O2", q: "Rukunoni nawa ne dokar tarayya ta Fair Housing Act ke karewa?", options: ["Uku", "Bakwai", "Goma", "Biyu"], answer: 1, why: "Launin fata, launi, ƙasar asali, addini, jinsi, matsayin iyali, nakasa." },
      { objective: "O2", q: "Wanne ne abin gida, ba fifiko game da mutane ba?", options: ["\"Babu yara\"", "\"Ya dace da ma'aurata\"", "\"Tsarin bene ɗaya\"", "\"Mai kyau ga matasa ma'aikata\""], answer: 2, why: "Yana bayyana gidan." },
      { objective: "O2", q: "Me yasa AI zai iya rubuta matsalolin daidaito a gidaje?", options: ["Yana iya kwafo halayen wariya daga abin da ya koya", "Ya san dokar daidaito a gidaje sosai", "Ba ya taɓa yin kuskure", "Shi lauya ne"], answer: 0, why: "Koyaushe ku duba rubutun AI." },
      { objective: "O2", q: "Shin California tana kare rukunoni fiye da dokar tarayya?", options: ["A ƙarshen mako kaɗai", "A'a, ba ta taɓa ba", "Ee; ku duba dokokin jiharku", "Don gidajen haya kaɗai"], answer: 2, why: "Jihohi da yawa, ciki har da California, suna kare ƙarin rukunoni." },
      { objective: "O3", q: "Tallace-tallacen masu lasisi sau da yawa dole su ƙunshi:", options: ["Lambar lasisi da sunan kamfanin dillali, bisa dokokin jiha da babban dillali", "Adireshin gidanku", "Sunayen abokan ciniki", "Babu komai"], answer: 0, why: "Ku duba dokokin talla na jiharku." },
      { objective: "O3", q: "Imel na talla ga mutanen da kuka sani (sphere) dole ya ƙunshi:", options: ["Sharuɗɗan tayin abokan ciniki", "Adireshin gidan waya da hanyar unsubscribe", "Mai aikawa na bogi", "Babu komai"], answer: 1, why: "CAN-SPAM tana buƙatar duka biyun." },
      { objective: "O3", q: "Mene ne sphere ɗinku?", options: ["Mai ba da rance", "Abu mai siffar ƙwallo", "MLS", "Mutanen da kuka sani da za su iya saya, sayarwa ko tura muku wani"], answer: 3, why: "Tsofaffin abokan ciniki, abokai da iyali." },
      { objective: "O4", q: "Labarin mako-mako ga mai sayarwa ya ƙunshi:", options: ["Nuna gida, ra'ayoyi, kallo da mataki na gaba", "Kuɗin sauran abokan ciniki", "Kalmar sirrinku", "Babu komai"], answer: 0, why: "Waɗannan suna sanar da masu sayarwa halin da ake ciki." },
      { objective: "O4", q: "Wanne ne madadi (placeholder)?", options: ["Lambar Social Security", "Cikakken sunan mai sayarwa da adireshinsa", "Lambar asusun banki", "[sunan mai sayarwa]"], answer: 3, why: "Madadi yana hana bayanan sirri shiga." },
      { objective: "O4", q: "Dabarar ciniki ya kamata a:", options: ["Saka ta a intanet", "Liƙa ta a hirarraki", "Kiyaye ta daga kayan AI", "Raba ta ga duk masu saye"], answer: 2, why: "Bayanin sirri ne na abokin ciniki." },
      { objective: "O5", q: "Tsarin bibiya na kwana 30 yana da kusan:", options: ["Kira ɗari", "Tuntuɓa huɗu masu taimako", "Babu", "Tes na matsa lamba kowace rana"], answer: 1, why: "Tsari mai taimako ne ya fi aiki." },
      { objective: "O5", q: "Wa ya kamata ku tura wa imel ko tes na talla?", options: ["Baƙi", "Duk wanda kuka sami lambarsa", "Jerin sunayen da aka saya", "Mutanen da suka yarda su ji daga gare ku"], answer: 3, why: "Izini ne farko." },
      { objective: "O5", q: "Kafin ku haɗa zuwa shirin taimakon masu sayen gida a karon farko, za ku:", options: ["Yi tsammanin dokokinsa", "Amince da hanyar haɗin AI", "Duba shafinsa na hukuma", "Tsallake dubawa"], answer: 2, why: "Bayanan shirye-shirye suna canjawa." },
      { objective: "O6", q: "Kwanakin a kasuwa (days on market) suna auna:", options: ["Tsawon lokacin da gidaje ke ɗauka kafin a sayar", "Lokutan buɗaɗɗen gida", "Kwanakin kwamishan", "Ranakun hutu"], answer: 0, why: "Yana nuna saurin kasuwa." },
      { objective: "O6", q: "Idan AI yana bayyana lambobin kasuwa, ya kamata ku ce masa:", options: ["Ka ƙirƙiri ƙarin lambobi", "Kada ka ƙara lambobin da ban ba ka ba", "Ka yi hasashen gaba", "Ka yi amfani da kowane shafi"], answer: 1, why: "Wannan yana rage ƙididdigar ƙirƙira." },
      { objective: "O6", q: "Yaushe ya kamata ku yi bibiya bayan buɗaɗɗen gida?", options: ["Shekara mai zuwa", "Cikin awa 24", "Ba za a taɓa ba", "Sai idan sun kira"], answer: 1, why: "Bibiya cikin sauri tana kawo abokan ciniki." },
      { objective: "O2", q: "Wannan kwas:", options: ["Ba shawarar shari'a ba ne; ku duba HUD, hukumar jiharku da babban dillalinku", "Shawarar shari'a ne", "Lasisi ne", "Kwangila ne"], answer: 0, why: "Majiyoyin hukuma da babban dillalinku ne ke da kalmar ƙarshe." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      3,
      5,
      7,
      11,
      13,
      17
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Ingantaccen bayanin gida",
        objective: "O1",
        notYet: "Bayanin gidan yana da abin da ba a tabbatar ba, kamar wani abu da gidan ba shi da shi.",
        meets: "An duba kowane bayani layi-layi da takardun hukuma, mai sayarwa ko ziyararku.",
        exceeds: "An rubuta majiyar manyan bayanai kamar girman gida (ƙafa murabba'i)."
      },
      {
        name: "Kalmomin daidaito a gidaje",
        objective: "O2",
        notYet: "Wani layi yana bayyana wanda ya kamata ya zauna a ciki maimakon gidan.",
        meets: "Kowane layi yana bayyana gidan da abubuwansa kaɗai.",
        exceeds: "An kuma duba hotuna da wurin talla, kuma za a iya bayyana kowane gyara."
      },
      {
        name: "Labarai ga abokan ciniki a sirri",
        objective: "O4",
        notYet: "Sunan abokin ciniki tare da adireshi, bayanin kuɗi ko sharuɗɗan tayi sun shiga kayan AI.",
        meets: "Samfuran labarai ga mai sayarwa da mai saye suna amfani da madadi, da mataki na gaba mai sarari.",
        exceeds: "Ana cike madadi ne kawai a imel ko CRM na dillalin da kansa."
      },
      {
        name: "Tsarin bibiyar masu sha'awa",
        objective: "O5",
        notYet: "Saƙonni ƙasa da huɗu, ko saƙonnin suna matsa lamba ko ba a duba su ba.",
        meets: "Saƙonni huɗu masu taimako cikin kwana 30 da gurbi da ranar gaba da ake bin diddiginta.",
        exceeds: "An duba hanyoyin haɗi na shirye-shirye a shafukan hukuma kuma an rubuta su."
      },
      {
        name: "Bayanin kasuwa da buɗaɗɗen gida",
        objective: "O6",
        notYet: "Taƙaitaccen bayanin yana da lambar da ba a ɗauko daga majiyarku ba.",
        meets: "Taƙaitaccen bayani da kalmomi masu sauƙi daga lambobinku tare da majiya da kwanan wata, da jerin abubuwan yi na buɗaɗɗen gida.",
        exceeds: "Jerin abubuwan yi yana da matakan tsaro na kamfanin dillali da bibiya cikin awa 24."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Dillalai da suka ce suna amfani da tsarin bibiyar masu sha'awa mai dorewa cikin kwanaki 30 (binciken biyo baya)",
      "Dillalai da suka ce sun adana lokaci kowane mako kan bayanin gidaje da labarai ga abokan ciniki",
      "Masu koyo da suka fara wani kwas na ƙananan kasuwanci na Koach Learn cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet",
      "Mataimakin AI kyauta",
      "Bayanan da aka tabbatar na gida ɗaya na gaske ko samfuri, da lambobin kwanan nan daga MLS ɗinku",
      "Kusan minti 60 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Ku tunatar da masu koyo cewa wannan kwas ba shawarar shari'a ba ne; tambayoyi game da daidaito a gidaje, talla da lasisi su tafi ga HUD, hukumar jiha da babban dillalinsu.",
      "Ku yi atisayen rukuni: ku karanta samfuran bayanin gidaje na AI da babbar murya kuma ku gano haɗarin daidaito a gidaje tare.",
      "Ku yi amfani da samfuran bayanin gidaje da madadi a aji; kada ku taɓa liƙa ainihin bayanan sirri na abokan ciniki a kayan AI.",
      "Ku nemi masu koyo su duba ƙa'idodin kamfanin dillalinsu game da kayan AI kafin su yi amfani da su tare da abokan ciniki.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
