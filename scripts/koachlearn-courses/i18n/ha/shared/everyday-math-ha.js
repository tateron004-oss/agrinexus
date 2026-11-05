"use strict";

// Koach Learn course, Hausa (ha) translation of shared/everyday-math.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// All money and pay examples are made up for practice. US units, US paystub rules and US agency names are kept, with a short explanation.
// Numbers keep the decimal point of the English (the course teaches "moving the point").

const DOL_OT = { name: "Ma'aikatar Ƙwadago ta Amurka (DOL): biyan ƙarin lokacin aiki (overtime)", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS Topic 751: yawan cire kuɗin Social Security da Medicare", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals (takardun kasafin kuɗi kyauta)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-ha",
  lang: "ha",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Lissafin Yau da Kullum don Aiki da Rayuwa",
  skills: "Juzu'i, adadi mai ɗigo da kashi cikin ɗari, Rangwame, haraji, tip da ƙarin albashi, Farashin kowane ma'auni da saye mafi riba, Awo da sa'o'in aiki, Duba takardar albashi, Yin kasafin kuɗi na wata",
  outcome: "yin lissafin da kuke haɗuwa da shi a wurin aiki da a gida: amfani da juzu'i, adadi mai ɗigo da kashi cikin ɗari, gano saye mafi riba, auna abubuwa da canja ma'auni, duba takardar albashinku, da yin kasafin kuɗi na wata daga albashinku.",
  about: [
    "Wannan kwas na manya ne da ke son su sake samun ƙarfin gwiwa da lambobi: masu neman aiki, masu dawowa gida daga gidan yari, baƙi, iyaye da duk wanda ke komawa karatu. Ba sai kun tuna lissafin makaranta ba. Za mu fara daga farko, da abubuwa na gaske kamar alamar farashin rangwame, tef na awo da takardar albashi.",
    "Za ku yi atisayen juzu'i, adadi mai ɗigo da kashi cikin ɗari; ku lissafa rangwame, harajin saye, tip da ƙarin albashi; ku kwatanta farashin kowane ma'auni a shago; ku auna ku canja ma'auni don wani aiki; ku duba kowane layi na takardar albashi; sannan ku yi kasafin kuɗi na wata.",
    "Waɗannan su ne ƙwarewar da gwaje-gwajen ɗaukar aiki da yawa da jarabawar lissafi ta GED (jarabawar da ke ba da shaidar kammala sakandare a Amurka) suke farawa da su. Idan kun gama, \"Shirin Jarabawar GED: Lissafi\" mataki ne mai kyau na gaba. Wannan kwas ba ya ba da satifiket ko difloma; yana gina ƙwarewa ne.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da misalai da aka warware da aikin \"Gwada yanzu\" a takarda ko a na'urar lissafi ta waya. Akwai ɗan gwaji mai tambayoyi 2 bayan kowane darasi, gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas. Duk misalan albashi da kuɗi ƙirƙirarru ne don atisaye."
  ],
  finalTask: "Ku yi \"Takardar Lissafin Aiki da Kuɗi\" taku a shafi ɗaya: (1) ku duba takardar albashi ta atisaye (ko taku, da lambobin sirri a rufe) layi-layi: sa'o'i sau farashin sa'a, overtime, ragi da albashin da ake karɓa a hannu; (2) ku mayar da wannan albashi zuwa kuɗin shiga na wata ku yi kasafin kuɗi na wata da layin ajiya, inda kashe kuɗi bai wuce kuɗin shiga ba; (3) ku kwatanta farashin kowane ma'auni na abubuwa 3 da kuke yawan saye, ku rubuta wane girma ne saye mafi riba. Ku ajiye ta ku sabunta ta kowane wata.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Manya da ke komawa karatu: masu neman aiki, masu dawowa gida daga gidan yari, baƙi, iyaye da tsofaffin ma'aikata. Da yawa sun bar makaranta da wuri ko ba su yi lissafi a takarda ba tsawon shekaru, kuma wasu suna jin tsoron lambobi.",
    startingPoint: "Suna iya tarawa, ragewa da amfani da na'urar lissafi ta waya don lissafi mai sauƙi. Da yawa ba su da tabbas da juzu'i, kashi cikin ɗari, canja ma'auni da ragin takardar albashi, kuma kaɗan ne ke rubuta kasafin kuɗi.",
    gap: "Aiki da rayuwar yau da kullum suna buƙatar lissafi mai sauri kuma daidai: awo a wurin aiki, ƙirga sa'o'i, duba albashi, gano ainihin farashi da sa kuɗi su isa har ƙarshen wata. Kuskure yana jawo asarar kuɗi kuma ana iya kasa ganinsa a takardar albashi. Waɗannan ƙwarewa kuma su ne tushen jarabawar lissafi ta GED da gwaje-gwajen ɗaukar aiki da yawa.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; misalai da yawa da aka warware",
      "Kayan aiki: takarda, fensir da na'urar lissafi mai sauƙi ta waya; babu wani shiri na musamman",
      "Tsoron lissafi: ƙananan matakai, duba amsa ta hanyoyi biyu, babu matsin lokaci",
      "Sirri: takardun albashi na atisaye ƙirƙirarru ne; ku rufe lambar Social Security da lambobin asusu a takarda ta gaske",
      "Dokokin da ke canjawa (yawan haraji, overtime) suna nuni ga majiyoyin hukuma; dokokin jihohi sun bambanta"
    ],
    prerequisites: "Tarawa, ragewa da ninkawa na asali, da na'urar lissafi ko ba tare da ita ba."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku juzu'i, adadi mai ɗigo, kashi cikin ɗari da tef na awo", action: "canja tsakanin juzu'i, adadi mai ɗigo da kashi cikin ɗari, da karanta tef na awo zuwa 1/8 na inci mafi kusa", standard: "kuna samun aƙalla 4 cikin 5 daidai" },
    { id: "O2", condition: "Idan aka ba ku farashi, lissafin kuɗi ko farashin albashi", action: "lissafa rangwame, harajin saye, tip ko ƙarin albashi da kashi cikin ɗari", standard: "zuwa sisi (cent) mafi kusa" },
    { id: "O3", condition: "Idan aka ba ku girma biyu na kaya ɗaya da farashinsu", action: "lissafa farashin kowane ma'auni na kowanne, da zaɓar saye mafi riba", standard: "kuna zaɓar daidai a aƙalla 4 cikin nau'i 5" },
    { id: "O4", condition: "Idan aka ba ku wani aiki kamar shimfiɗa ƙasan ɗaki ko rubuta sa'o'in aiki", action: "canja ma'auni da lissafa faɗin wuri (area) ko sa'o'in aiki", standard: "da ma'aunin da ya dace, kuna tara sama idan kuna buƙatar cikakkun kaya" },
    { id: "O5", condition: "Idan aka ba ku takardar albashi", action: "duba sa'o'i, farashin sa'a, overtime, ragi da albashin da ake karɓa a hannu layi-layi", standard: "kowane layi ya yi daidai har zuwa sisi, ko an rubuta kuskuren don a tambaya" },
    { id: "O6", condition: "Idan kuna da albashi na yau da kullum", action: "yin kasafin kuɗi na wata mai ajiya, wanda kashe kuɗi bai wuce kuɗin shiga ba", standard: "da kowane rukuni a rubuce kuma an duba jimloli" }
  ],
  chapters: [
    {
      name: "Babi na 1: Lambobin da kuke amfani da su kowace rana",
      lessons: [
        {
          title: "Juzu'i, adadi mai ɗigo, kashi cikin ɗari da tef na awo",
          objectives: ["O1"],
          minutes: 6,
          goal: "Canja tsakanin juzu'i, adadi mai ɗigo da kashi cikin ɗari, da karanta tef na awo.",
          text: [
            "Juzu'i, adadi mai ɗigo da kashi cikin ɗari hanyoyi uku ne na rubuta adadi ɗaya. Rabin fiza shi ne 1/2, ko 0.5, ko 50%. Kwata shi ne 1/4, 0.25 ko 25%. Kwata uku shi ne 3/4, 0.75 ko 75%.",
            "Don canja juzu'i zuwa adadi mai ɗigo, ku raba lambar sama da lambar ƙasa: 3/8 shi ne 3 raba 8, wato 0.375. Don canja adadi mai ɗigo zuwa kashi cikin ɗari, ku matsar da ɗigon wurare biyu zuwa dama: 0.375 shi ne 37.5%. Don komawa daga kashi cikin ɗari zuwa adadi mai ɗigo, ku matsar da shi wurare biyu zuwa hagu: 15% shi ne 0.15.",
            "Tef na awo a Amurka yana raba kowane inci zuwa ƙananan alamomi 16. Alama mafi tsawo a tsakiyar inci ita ce 1/2. Alamomi masu tsawo na gaba su ne 1/4 da 3/4. Sannan 1/8, 3/8, 5/8 da 7/8. Mafi gajeru su ne na 1/16. Idan tef ya tsaya alamomi 3 na 1/8 bayan 5, yana karanta inci 5 da 3/8.",
            "Tara juzu'i masu lambar ƙasa ɗaya yana da sauƙi: ku tara lambobin sama, ku bar na ƙasa yadda yake. 1/8 + 3/8 = 4/8, wanda daidai yake da 1/2."
          ],
          steps: ["Juzu'i zuwa adadi mai ɗigo: ku raba sama da ƙasa.", "Adadi mai ɗigo zuwa kashi cikin ɗari: ku matsar da ɗigon wurare 2 zuwa dama.", "Kashi cikin ɗari zuwa adadi mai ɗigo: ku matsar da ɗigon wurare 2 zuwa hagu.", "Tef na awo: ku nemo cikakken inci, sannan ku ƙirga alamomin da suka wuce shi.", "Sauƙaƙawa: 4/8 daidai yake da 1/2."],
          words: [["Juzu'i (fraction)", "ɓangare na cikakken abu, ana rubuta shi lamba a sama da lamba a ƙasa, kamar 3/4."], ["Lambar sama (numerator)", "lambar saman juzu'i: ɓangarori nawa kuke da su."], ["Lambar ƙasa (denominator)", "lambar ƙasan juzu'i: ɓangarori daidai nawa ne ke yin cikakken abu."], ["Adadi mai ɗigo (decimal)", "lamba mai ɗigo, kamar 0.75, da ke nuna ɓangarorin cikakken abu."], ["Kashi cikin ɗari (%)", "ɓangarori daga cikin 100. 25% yana nufin 25 cikin 100."]],
          slides: [
            { title: "Hanyoyi uku na rubuta adadi ɗaya", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Canjawa", bullets: ["Juzu'i zuwa adadi mai ɗigo: raba sama da ƙasa (3/8 = 0.375)", "Adadi mai ɗigo zuwa %: ɗigo wurare 2 zuwa dama (37.5%)", "% zuwa adadi mai ɗigo: ɗigo wurare 2 zuwa hagu (15% = 0.15)"] },
            { title: "Karanta tef na awo", bullets: ["Alama mafi tsawo a tsakiya: 1/2", "Sannan 1/4 da 3/4, sannan na 1/8, sannan na 1/16", "Inci 5 da alamomi 3 na 1/8 = 5 3/8 in"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Ku rubuta 1/4 a matsayin adadi mai ɗigo da kashi cikin ɗari. (2) Ku rubuta 0.6 a matsayin kashi cikin ɗari. (3) Ku rubuta 8% a matsayin adadi mai ɗigo. (4) Ku canja 5/8 zuwa adadi mai ɗigo. (5) Ku tara 1/4 + 1/4. Amsoshi: (1) 0.25 da 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, wato 1/2. Idan kuna da tef na awo ko rula, ku auna abubuwa 3 a gida zuwa 1/8 na inci mafi kusa.",
          youCanNow: "canja tsakanin juzu'i, adadi mai ɗigo da kashi cikin ɗari, da karanta tef na awo zuwa 1/8 na inci mafi kusa.",
          quickCheck: [
            { objective: "O1", q: "Nawa ne 3/4 a kashi cikin ɗari?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 raba 4 shi ne 0.75, kuma matsar da ɗigon wurare biyu zuwa dama yana ba da 75%." },
            { objective: "O1", q: "Nawa ne 6% a adadi mai ɗigo?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Ku matsar da ɗigon wurare biyu zuwa hagu: 6% = 0.06." }
          ]
        },
        {
          title: "Rangwame, harajin saye, tip da ƙarin albashi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lissafa rangwame, harajin saye, tip da ƙarin albashi da kashi cikin ɗari.",
          text: [
            "Don samun kashi cikin ɗari na wata lamba, ku canja kashi cikin ɗarin zuwa adadi mai ɗigo, sannan ku ninka. 20% na $45 shi ne 0.20 x 45 = $9.",
            "Rangwame: ku cire shi daga farashin. Jaket na $45 da rangwamen 20% kuɗinsa 45 - 9 = $36. Harajin saye: ku ƙara shi. Idan harajin 8% ne, harajin $36 shi ne 0.08 x 36 = $2.88, don haka za ku biya $38.88. Yawan harajin saye ya bambanta a kowace jiha da birni; ku duba ofishin haraji na jiharku ko ku duba rasit.",
            "Tip ba tare da na'urar lissafi ba: ku nemo 10% ta matsar da ɗigon wuri ɗaya zuwa hagu, sannan ku gina daga nan. A lissafin $28, 10% shi ne $2.80, 5% rabinsa ne, $1.40, don haka 15% shi ne $2.80 + $1.40 = $4.20. 20% ninki biyu ne na 10%: $5.60.",
            "Ƙarin albashi: ƙarin 3% a kan $16.00 a sa'a shi ne 0.03 x 16 = $0.48, don haka sabon farashin shi ne $16.48 a sa'a. Ku kula da kalmomi: \"rangwamen 20%\" yana nufin kuna biyan 80% na farashin; \"ƙarin 20%\" yana nufin kuna biyan 120%."
          ],
          steps: ["Ku canja kashi cikin ɗarin zuwa adadi mai ɗigo.", "Ku ninka shi da adadin.", "Rangwame: ku cire. Haraji ko tip: ku ƙara. Ƙarin albashi: ku ƙara a kan tsohon farashin.", "Ku tara kuɗi zuwa sisi (cent) mafi kusa.", "Ku duba: amsar tana da ma'ana? Dole rangwame ya gaza farashin."],
          words: [["Rangwame (discount)", "kuɗin da aka cire daga farashi."], ["Harajin saye (sales tax)", "harajin da ake ƙarawa a kan farashi lokacin biya; yawansa ya dogara da jiharku da birninku."], ["Tip", "ƙarin kuɗin da kuke bayarwa don hidima, sau da yawa ana lissafa shi a matsayin kashi cikin ɗari na lissafin."], ["Ƙarin albashi (raise)", "ƙaruwar farashin albashinku."], ["Tarawa (round)", "sauƙaƙa lamba; ana tara kuɗi zuwa sisi mafi kusa."]],
          slides: [
            { title: "Kashi cikin ɗari na lamba", bullets: ["Ku canja kashi cikin ɗarin zuwa adadi mai ɗigo", "Ku ninka: 20% na $45 = 0.20 x 45 = $9"] },
            { title: "Rangwame da haraji", bullets: ["Rangwamen 20% a kan $45: 45 - 9 = $36", "Harajin 8% a kan $36: 0.08 x 36 = $2.88", "Kuna biyan $38.88; yawan haraji ya bambanta a jihohi da birane"] },
            { title: "Tip a cikin kai", bullets: ["10%: ku matsar da ɗigon wuri ɗaya zuwa hagu", "Lissafin $28: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Ƙarin albashi", bullets: ["3% na $16.00 = $0.48", "Sabon farashi: $16.48 a sa'a", "Rangwamen 20% = biyan 80%; ƙarin 20% = biyan 120%"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Takalman aiki na $60 suna da rangwamen 25%. Mene ne farashin rangwamen? (2) Haraji 7% ne a kan kaya na $50. Nawa ne jimilla? (3) Ku nemo tip na 20% a kan lissafin $35. (4) Albashinku na $15.50 ya sami ƙarin 4%. Mene ne sabon farashin? Amsoshi: (1) $45; (2) harajin $3.50, jimilla $53.50; (3) $7.00; (4) ƙarin $0.62, $16.12 a sa'a. Sannan ku duba rasit na gaske ku nemo yawan harajin da aka caje a yankinku.",
          youCanNow: "lissafa rangwame, harajin saye, tip da ƙarin albashi zuwa sisi mafi kusa.",
          quickCheck: [
            { objective: "O2", q: "Kot na $80 yana da rangwamen 25%. Mene ne farashin rangwamen?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% na 80 shi ne 20, kuma 80 - 20 = $60." },
            { objective: "O2", q: "Nawa ne tip na 15% a kan lissafin $40?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% shi ne $4.00, 5% kuma $2.00, don haka 15% shi ne $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: hanyoyin haɗi zuwa ofisoshin haraji na jihohi", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Farashin kowane ma'auni: gano saye mafi riba",
          objectives: ["O3"],
          minutes: 5,
          goal: "Lissafa farashin kowane ma'auni da zaɓar saye mafi riba.",
          text: [
            "Farashin kowane ma'auni (unit price) shi ne kuɗin ma'auni ɗaya: oza ɗaya, fam ɗaya, ko abu ɗaya. Yana ba ku damar kwatanta girma daban-daban cikin adalci. Don samunsa, ku raba farashin da yawan ma'aunin.",
            "Misali: akwatin hatsin karin kumallo (cereal) na oza 24 kuɗinsa $4.80. $4.80 / 24 = $0.20 a kowace oza. Akwati na oza 36 kuɗinsa $6.12. $6.12 / 36 = $0.17 a kowace oza. Babban akwatin shi ne saye mafi riba.",
            "Babba ba koyaushe ya fi arha ba. Buhun shinkafa na fam 2 a $3.18 shi ne $1.59 a kowane fam. Buhu na fam 5 a $8.45 shi ne $1.69 a kowane fam. A nan ƙaramin buhun shi ne saye mafi riba. Shaguna da yawa suna buga farashin kowane ma'auni da ƙananan haruffa a alamar farashin kan shiryayye; ku duba cewa alamomin biyu suna amfani da ma'auni ɗaya.",
            "Saye mafi riba yana da riba ne kawai idan za ku yi amfani da shi kafin ya lalace kuma kuna iya biyan sa a wannan makon. Farashin kowane ma'auni yana taimakawa a wurin aiki ma, misali lokacin odar kayan aiki."
          ],
          steps: ["Ku rubuta farashi da girman kowane kaya.", "Ku tabbata ma'aunai sun yi daidai (oza da oza).", "Ku raba: farashi / girma = farashin kowane ma'auni.", "Ku kwatanta: mafi ƙarancin farashin kowane ma'auni shi ne saye mafi riba.", "Ku tambayi: zan yi amfani da shi duka, kuma ina iya biyan sa yanzu?"],
          words: [["Farashin kowane ma'auni (unit price)", "kuɗin ma'auni ɗaya, kamar oza ɗaya ko fam ɗaya."], ["Oza (oz)", "ƙaramin ma'aunin nauyi; oza 16 suke yin fam 1."], ["Fam (lb)", "ma'aunin nauyi da ya yi daidai da oza 16."], ["Alamar farashi a shiryayye (shelf tag)", "alamar farashi a kan shiryayyen shago; sau da yawa tana nuna farashin kowane ma'auni."]],
          slides: [
            { title: "Farashin kowane ma'auni = farashi / girma", bullets: ["Kuɗin oza ɗaya, fam ɗaya ko abu ɗaya", "Kwatanta girma daban-daban cikin adalci"] },
            { title: "Misalin hatsi (cereal)", bullets: ["oz 24 a $4.80 = $0.20 a kowace oza", "oz 36 a $6.12 = $0.17 a kowace oza", "Babban akwatin ya yi nasara a nan"] },
            { title: "Babba ba koyaushe ya fi arha ba", bullets: ["Shinkafa lb 2 $3.18 = $1.59 a kowane fam", "Shinkafa lb 5 $8.45 = $1.69 a kowane fam", "Ƙaramin buhun ya yi nasara a nan"] },
            { title: "Saye da hikima", bullets: ["Ku duba alamar shiryayye, ma'auni ɗaya a duka biyun", "Za ku yi amfani da shi kafin ya lalace?", "Kuna iya biyan sa a wannan makon?"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Ƙwai 12 a $3.60 ko ƙwai 18 a $5.04? (2) Lemu oz 64 a $3.84 ko oz 128 a $6.40? Amsoshi: (1) $0.30 kowane ƙwai da $0.28 kowane ƙwai: ƙwai 18 ya fi; (2) $0.06 kowace oza da $0.05 kowace oza: oz 128 ya fi. Sannan, a shago ko a shafin intanet na shago, ku nemo farashin kowane ma'auni na abubuwa 3 da kuke yawan saye a girma biyu, ku rubuta saye mafi riba. Wannan zai shiga takardar aikinku na ƙarshe.",
          youCanNow: "nemo farashin kowane ma'auni, zaɓar saye mafi riba, da sanin lokacin da babban girma bai cancanci saye ba.",
          quickCheck: [
            { objective: "O3", q: "Buhun dankali na fam 10 kuɗinsa $5.90. Mene ne farashin kowane ma'auni?", options: ["$0.59 a kowane fam", "$5.90 a kowane fam", "$1.69 a kowane fam", "$59.00 a kowane fam"], answer: 0, why: "$5.90 / 10 = $0.59 a kowane fam." },
            { objective: "O3", q: "Sabulu A: guda 3 a $2.70. Sabulu B: guda 8 a $8.00. Wanne ne saye mafi riba?", options: ["Sabulu B, domin yana da guda da yawa", "Kuɗinsu ɗaya ne a kowane guda", "Sabulu B, domin ya fi tsada", "Sabulu A, a $0.90 kowane guda da $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 kuma $8.00 / 8 = $1.00, don haka A ya fi arha a kowane guda." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Lambobin da kuke amfani da su kowace rana",
        questions: [
          { objective: "O1", q: "Nawa ne 1/8 a adadi mai ɗigo?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 raba 8 shi ne 0.125." },
          { objective: "O1", q: "A tef na awo, alama mafi tsawo tsakanin inci 4 da 5 ita ce:", options: ["Inci 4 1/2", "Inci 4 1/8", "Inci 4 1/16", "Inci 5"], answer: 0, why: "Alama mafi tsawo a tsakiyar inci ita ce alamar 1/2." },
          { objective: "O2", q: "Harajin saye 6% ne a kan sayen $25. Nawa ne harajin?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Albashinku ya tashi daga $14.00 zuwa $14.70 a sa'a. Ƙarin kashi nawa cikin ɗari ne wannan?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "Ƙarin shi ne $0.70, kuma 0.70 / 14.00 = 0.05, wato 5%." },
          { objective: "O3", q: "Wanne ne saye mafi riba: man gyaɗa (peanut butter) oz 16 a $3.20 ko oz 40 a $7.20?", options: ["oz 16, a $0.20 kowace oza", "Iri ɗaya ne", "oz 40, a $0.18 kowace oza", "Ba za a iya sani ba"], answer: 2, why: "$3.20 / 16 = $0.20 kuma $7.20 / 40 = $0.18, don haka kwalbar oz 40 ta fi arha a kowace oza." }
        ]
      }
    },
    {
      name: "Babi na 2: Lissafi don aiki da kuɗi",
      lessons: [
        {
          title: "Awo, canja ma'auni da ƙirga sa'o'in aiki",
          objectives: ["O4"],
          minutes: 6,
          goal: "Canja ma'auni da lissafa faɗin wuri (area) da sa'o'in aiki don wani aiki.",
          text: [
            "Ma'aunan Amurka da aka saba: inci 12 = ƙafa 1, ƙafa 3 = yadi 1, oza 16 = fam 1, pint 2 = kwart 1, kwart 4 = galan 1. Wasu ayyuka suna amfani da ma'aunin metric: inci 1 = santimita 2.54, kuma kilo 1 kusan fam 2.2 ne. Don canja babban ma'auni zuwa ƙananan ma'aunai, ku ninka; don canja ƙananan ma'aunai zuwa babba, ku raba. Inci 90 / 12 = ƙafa 7.5.",
            "Faɗin wuri (area) shi ne sararin da wuri mai faɗi ya rufe: tsawo x faɗi, a ma'aunin murabba'i. Ɗaki mai ƙafa 12 da ƙafa 10 shi ne 12 x 10 = ƙafa murabba'i 120. Idan akwati ɗaya na kayan shimfiɗa ƙasa ya rufe ƙafa murabba'i 20, kuna buƙatar akwatuna 120 / 20 = 6. Ma'aikata sukan ƙara kusan 10% don yanka da kuskure: 120 x 1.10 = 132, kuma 132 / 20 = 6.6. Ba za ku iya sayen 0.6 na akwati ba, don haka ku tara SAMA zuwa 7.",
            "Sa'o'in aiki: ku ƙirga daga farawa zuwa ƙarewa, sannan ku cire hutun da ba a biya. Aiki daga 7:30 na safe zuwa 4:00 na yamma sa'o'i 8 1/2 ne; ku cire hutun abincin rana na minti 30 da ba a biya, ya zama sa'o'i 8. Katunan lokacin aiki da yawa suna amfani da sa'o'i a adadi mai ɗigo: minti 15 = 0.25, minti 30 = 0.5, minti 45 = 0.75. Wasu wuraren aiki suna amfani da agogon sa'o'i 24: 15:00 shi ne 3:00 na yamma."
          ],
          steps: ["Ku rubuta abin da kuke da shi da ma'aunin da kuke buƙata.", "Babban ma'auni zuwa ƙarami: ku ninka. Ƙarami zuwa babba: ku raba.", "Faɗin wuri: tsawo x faɗi, a ma'aunin murabba'i.", "Idan kuna buƙatar cikakkun kaya (akwatuna, buhuna): koyaushe ku tara sama.", "Sa'o'i: lokacin ƙarewa ban da lokacin farawa, ban da hutun da ba a biya; ku canja minti zuwa adadi mai ɗigo ta raba su da 60."],
          words: [["Ma'auni (unit)", "abin da kuke auna da shi, kamar inci, ƙafa, fam ko sa'a."], ["Canja ma'auni (convert)", "mayar da awo daga wani ma'auni zuwa wani."], ["Faɗin wuri (area)", "sararin da wuri mai faɗi ya rufe: tsawo sau faɗi, a ma'aunin murabba'i."], ["Ƙafa murabba'i (sq ft)", "ma'aunin faɗin wuri idan kuna auna da ƙafa."], ["Metric", "tsarin awo da ake amfani da shi a yawancin duniya: santimita, mita, kilo, lita."], ["Sa'o'i a adadi mai ɗigo (decimal hours)", "lokaci da aka rubuta a adadi mai ɗigo, kamar sa'o'i 7.75 don sa'o'i 7 da minti 45."]],
          slides: [
            { title: "Ma'aunan da ya kamata ku sani", bullets: ["12 in = 1 ft; 3 ft = 1 yd", "16 oz = 1 lb; 4 qt = 1 gal", "1 in = 2.54 cm; 1 kg kusan 2.2 lb ne", "Babba zuwa ƙarami: ninka. Ƙarami zuwa babba: raba"] },
            { title: "Faɗin wuri don aiki", bullets: ["Ɗaki 12 ft x 10 ft = 120 sq ft", "Ƙara 10% don yanka: 132 sq ft", "20 sq ft a kowane akwati: 6.6, don haka ku sayi akwatuna 7"] },
            { title: "Ƙirga sa'o'i", bullets: ["7:30 na safe zuwa 4:00 na yamma = sa'o'i 8.5", "Cire minti 30 na abincin rana da ba a biya = sa'o'i 8", "Minti 15 = 0.25, minti 30 = 0.5, minti 45 = 0.75"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): (1) Ku canja ƙafa 5 zuwa inci. (2) Ku canja oza 48 zuwa fam. (3) Ɗakin ajiya ƙafa 9 ne da ƙafa 14. Nawa ne faɗin wurin? (4) Fenti yana rufe kusan ƙafa murabba'i 350 a kowane galan (a wannan gwangwani na ƙirƙira). Dole ku rufe ƙafa murabba'i 800. Galan nawa za ku saya? (5) Kuna aiki daga 6:45 na safe zuwa 3:15 na yamma da hutun abincin rana na minti 30 da ba a biya. Sa'o'i nawa, a adadi mai ɗigo? Amsoshi: (1) inci 60; (2) fam 3; (3) ƙafa murabba'i 126; (4) 800 / 350 = 2.29, don haka ku sayi galan 3; (5) sa'o'i 8.5 ban da 0.5 = sa'o'i 8.0.",
          youCanNow: "canja ma'auni, nemo faɗin wuri, tara sama don cikakkun kaya, da ƙirga sa'o'in aikinku a adadi mai ɗigo.",
          quickCheck: [
            { objective: "O4", q: "Kuna buƙatar buhuna 4.2 na siminti. Buhuna nawa za ku saya?", options: ["4", "4.2", "42", "5"], answer: 3, why: "Ba za ku iya sayen ɓangaren buhu ba, don haka ku tara sama zuwa 5." },
            { objective: "O4", q: "Sa'o'i 7 da minti 45 sa'o'i nawa ne a adadi mai ɗigo?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, don haka sa'o'i 7.75 ne." }
          ]
        },
        {
          title: "Duba takardar albashinku",
          objectives: ["O5"],
          minutes: 6,
          goal: "Duba sa'o'i, farashin sa'a, overtime, ragi da albashin da ake karɓa a hannu a takardar albashi.",
          text: [
            "Takardar albashi (paystub) tana nuna yadda aka lissafa albashinku. Jimillar albashi (gross pay) ita ce abin da kuka samu kafin a cire komai. Ragi (deductions) su ne kuɗaɗen da aka cire, kamar haraji. Albashin hannu (net pay) shi ne abin da kuke karɓa a zahiri: jimillar albashi ban da ragi. YTD yana nufin year to date: jimillar zuwa yanzu a wannan shekarar.",
            "Takardar albashi ta atisaye (ƙirƙirarriya): sa'o'i 45 a $18.00 a sa'a. A ƙarƙashin dokar tarayyar Amurka, ma'aikatan sa'a da dokar ta shafa suna samun overtime don sa'o'in da suka wuce 40 a mako na aiki, aƙalla ninki ɗaya da rabi. Don haka: 40 x $18.00 = $720.00 albashi na yau da kullum. Farashin overtime shi ne $18.00 x 1.5 = $27.00, kuma 5 x $27.00 = $135.00. Jimillar albashi = $855.00. Wasu jihohi suna da ƙarin dokokin overtime; ku duba ofishin ƙwadago na jiharku.",
            "Ragi a wannan takarda: Social Security 6.2% na $855.00 = $53.01. Medicare 1.45% = $12.40. Harajin kuɗin shiga na tarayya $60.00 da harajin jiha $20.00 (waɗannan sun dogara da fom ɗinku na W-4 da jiharku; a nan ƙirƙirarru ne). Jimillar ragi = $145.41. Albashin hannu = $855.00 - $145.41 = $709.59.",
            "Idan wani layi ba daidai ba ne, ku rubuta ranar biyan albashi, layin da abin da kuka yi tsammani, sannan ku fara tambayar sashen biyan albashi (payroll) ko shugabanku. Idan ba a gyara ba, kuna iya tuntuɓar ofishin ƙwadago na jiharku ko Wage and Hour Division na Ma'aikatar Ƙwadago ta Amurka. Ku ajiye takardun albashinku, kuma ku rufe lambar Social Security ɗinku kafin ku nuna wa kowa."
          ],
          steps: ["Ku duba sa'o'in da rubutunku na sa'o'in da kuka yi aiki.", "Albashi na yau da kullum: har zuwa sa'o'i 40 x farashinku.", "Overtime: sa'o'in da suka wuce 40 x (farashi x 1.5), idan dokar ta shafe ku.", "Jimillar albashi = albashi na yau da kullum + overtime + duk wani ƙarin albashi.", "Ku tara dukkan ragi.", "Albashin hannu = jimillar albashi - jimillar ragi. Ya yi daidai da takardar?", "Idan bai yi daidai ba, ku rubuta ku tambayi payroll."],
          words: [["Takardar albashi (paystub)", "takarda ko bayanin intanet da ke nuna yadda aka lissafa albashinku."], ["Jimillar albashi (gross pay)", "abin da kuka samu kafin a cire komai."], ["Albashin hannu (net pay)", "abin da kuke ɗauka gida bayan ragi; ana kuma kiransa take-home pay."], ["Ragi (deduction)", "kuɗin da aka cire daga albashinku, kamar haraji ko inshora."], ["Overtime", "ƙarin albashi, aƙalla ninki 1.5 na farashinku, don sa'o'in da suka wuce 40 a mako na aiki a ƙarƙashin dokar tarayya."], ["YTD (year to date)", "jimilla daga 1 ga Janairu har zuwa wannan albashin."], ["W-4", "fom ɗin da kuke ba mai ɗaukar ku aiki wanda ke ƙayyade yawan harajin kuɗin shiga na tarayya da za a cire."]],
          slides: [
            { title: "Kalmomin takardar albashi", bullets: ["Gross pay: abin da aka samu kafin ragi", "Ragi: haraji da sauran kuɗaɗen da aka cire", "Net pay: abin da kuke ɗauka gida", "YTD: jimilla zuwa yanzu a wannan shekarar"] },
            { title: "Takardar atisaye: sa'o'i 45 a $18.00", bullets: ["Na yau da kullum: 40 x $18.00 = $720.00", "Overtime: 5 x $27.00 = $135.00", "Jimillar albashi: $855.00"] },
            { title: "Ragi da albashin hannu", bullets: ["Social Security 6.2% = $53.01; Medicare 1.45% = $12.40", "Tarayya $60.00 + jiha $20.00 (ƙirƙirarru)", "Net: $855.00 - $145.41 = $709.59"] },
            { title: "Idan wani abu ba daidai ba ne", bullets: ["Ku rubuta ranar, layin da abin da kuka yi tsammani", "Ku fara tambayar payroll ko shugabanku", "Sannan ofishin ƙwadago na jiharku ko DOL Wage and Hour Division"] }
          ],
          tryIt: "Atisaye (amsoshi a ƙasa): Kun yi aiki sa'o'i 42 a $16.00 a sa'a. Ragi: Social Security 6.2%, Medicare 1.45%, harajin tarayya $45.00, harajin jiha $15.00 (ƙirƙirarru). Ku nemo (1) albashi na yau da kullum, (2) albashin overtime, (3) jimillar albashi, (4) jimillar ragi, (5) albashin hannu. Amsoshi: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Sannan ku duba takardar albashinku ta gaske haka, da lambobin sirri a rufe.",
          youCanNow: "duba kowane layi na takardar albashi, da sanin abin da za ku yi idan wani abu bai yi daidai ba.",
          quickCheck: [
            { objective: "O5", q: "Jimillar albashi $600.00 ce kuma jimillar ragi $95.00. Nawa ne albashin hannu?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Albashin hannu = jimillar albashi - ragi = 600 - 95 = $505.00." },
            { objective: "O5", q: "Kuna samun $20.00 a sa'a kuma dokar overtime ta tarayya ta shafe ku. Nawa ne farashin overtime ɗinku?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Ninki ɗaya da rabi: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Yin kasafin kuɗi na wata daga albashinku",
          objectives: ["O6"],
          minutes: 6,
          goal: "Yin kasafin kuɗi na wata mai ajiya, wanda kashe kuɗi bai wuce kuɗin shiga ba.",
          text: [
            "Kasafin kuɗi (budget) tsari ne na kuɗinku. Ku fara da albashin hannu na wata. Watanni sun ɗan fi mako 4 tsawo, don haka kada ku ninka albashin mako da 4 kawai. Idan ana biyan ku kowane mako: albashin hannu na mako x 52 / 12. Idan ana biyan ku kowane mako biyu: albashin hannu x 26 / 12. Misali: $700 a mako x 52 = $36,400 a shekara, / 12 = $3,033.33 a wata.",
            "Ku jera kashe kuɗinku: buƙatu tukuna (kuɗin haya, wuta da ruwa, abinci, sufuri, waya, kula da yara, mafi ƙarancin biyan bashi), sannan ajiya, sannan abubuwan sha'awa. Misali: haya $1,200, wuta da ruwa $150, waya $50, abinci $400, sufuri $200, bashi $150, ajiya $150. Jimilla $2,300 ce, kuma ta bar $733.33 don sauran buƙatu da abubuwan sha'awa.",
            "Doka: jimillar kashe kuɗi (har da ajiya) dole ta yi daidai da kuɗin shiga ko ta gaza shi. Idan ta fi, ku cire wani abin sha'awa, ku rage wani lissafi, ko ku nemi ƙarin kuɗin shiga. Ku duba jimloli ta sake tara su a karo na biyu, ko da na'urar lissafi.",
            "Ku bi diddigin sa har wata ɗaya. Ku rubuta abin da kuke kashewa a zahiri, sannan ku kwatanta da tsarinku ku gyara. Takardun \"Your Money, Your Goals\" na kyauta na Consumer Financial Protection Bureau (hukumar kare masu amfani da kuɗi ta Amurka) suna da takardun aiki da za ku iya bugawa."
          ],
          steps: ["Ku nemo albashin hannu na wata (na mako x 52 / 12, ko na mako biyu x 26 / 12).", "Ku jera buƙatu: haya, wuta da ruwa, abinci, sufuri, waya, kula da yara, mafi ƙarancin biyan bashi.", "Ku ƙara layin ajiya, ko da ƙarami ne.", "Ku ƙara abubuwan sha'awa a ƙarshe.", "Jimillar kashe kuɗi dole ta yi daidai da kuɗin shiga ko ta gaza shi.", "Ku bi diddigi har wata ɗaya ku gyara."],
          words: [["Kasafin kuɗi (budget)", "tsarin yadda za ku yi amfani da kuɗinku kowane wata."], ["Kuɗin shiga (income)", "kuɗin da ke shigowa, kamar albashin hannunku."], ["Kashe kuɗi (expense)", "kuɗin da ke fita, kamar haya ko kayan abinci."], ["Kashe kuɗi na tsaye (fixed expense)", "kashe kuɗin da yake iri ɗaya kowane wata, kamar haya."], ["Kashe kuɗi mai canjawa (variable expense)", "kashe kuɗin da ke canjawa kowane wata, kamar abinci ko man fetur."]],
          slides: [
            { title: "Kuɗin shiga na wata", bullets: ["Albashin mako x 52 / 12", "Kowane mako biyu: x 26 / 12", "$700 a mako = $3,033.33 a wata"] },
            { title: "Tsarin kashe kuɗi", bullets: ["Buƙatu tukuna: haya, wuta da ruwa, abinci, sufuri", "Sannan ajiya, ko da kaɗan ne", "Sannan abubuwan sha'awa"] },
            { title: "Doka", bullets: ["Kashe kuɗi + ajiya daidai da kuɗin shiga ko ƙasa da shi", "Idan ya wuce: cire abin sha'awa, rage lissafi, ko ƙara samu", "Ku tara jimloli sau biyu don dubawa"] },
            { title: "Bi diddigi ku gyara", bullets: ["Ku rubuta ainihin kashe kuɗi har wata ɗaya", "Ku kwatanta da tsarinku", "Takardun aiki na CFPB kyauta: Your Money, Your Goals"] }
          ],
          tryIt: "Ku kammala aikinku na ƙarshe. Ku yi amfani da albashin hannu daga takardar albashi ta Darasi na 5 (ko taku) ku mayar da shi kuɗin shiga na wata. Ku rubuta kasafin kuɗi da buƙatu, layin ajiya da abubuwan sha'awa. Ku tara shi sau biyu. Idan kashe kuɗi ya fi kuɗin shiga, ku canja shi har ya dace. Ku sa duba takardar albashinku, kasafin kuɗinku da kwatancen farashin kowane ma'auni guda 3 a shafi ɗaya: \"Takardar Lissafin Aiki da Kuɗi\" taku.",
          youCanNow: "mayar da albashi zuwa kuɗin shiga na wata, da yin kasafin kuɗi da ya daidaita kuma yana da ajiya.",
          quickCheck: [
            { objective: "O6", q: "Kuna ɗaukar $500 gida a mako. Nawa ne kuɗin shigarku na wata?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; ninka da 4 yana barin ƙarin kwanakin." },
            { objective: "O6", q: "Kashe kuɗin da kuka tsara ya fi kuɗin shigarku da $50. Me za ku yi?", options: ["Ku bar tsarin ku yi fata", "Ku cire layin ajiya ku manta da shi", "Ku ci bashin payday loan kowane wata", "Ku cire ko ku rage wasu kashe kuɗi har kashe kuɗin ya dace"], answer: 3, why: "Kasafin kuɗi yana aiki ne kawai idan kashe kuɗi ya yi daidai da kuɗin shiga ko ya gaza shi." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Lissafi don aiki da kuɗi",
        questions: [
          { objective: "O4", q: "Ɗaki ƙafa 15 ne da ƙafa 11. Nawa ne faɗin wurin?", options: ["Ƙafa murabba'i 26", "Ƙafa murabba'i 165", "Ƙafa murabba'i 52", "Ƙafa murabba'i 1,511"], answer: 1, why: "Faɗin wuri = tsawo x faɗi = 15 x 11 = ƙafa murabba'i 165." },
          { objective: "O4", q: "Inci 60 ƙafa nawa ne?", options: ["Ƙafa 5", "Ƙafa 720", "Ƙafa 6", "Ƙafa 48"], answer: 0, why: "Ƙaramin ma'auni zuwa babba: ku raba. 60 / 12 = ƙafa 5." },
          { objective: "O5", q: "A takardar albashi, mene ne jimillar albashi (gross pay)?", options: ["Abin da kuke ɗauka gida", "Haraji kawai", "Albashin sa'a ɗaya", "Abin da kuka samu kafin ragi"], answer: 3, why: "Jimillar albashi ita ce duk abin da aka samu kafin a cire komai." },
          { objective: "O5", q: "Takardar albashinku tana nuna sa'o'i 38, amma rubutunku ya ce 41. Me za ku fara yi?", options: ["Ku yi shiru", "Ku bar aikin", "Ku rubuta ranaku da sa'o'i ku tambayi payroll", "Ku canja takardar albashin da kanku"], answer: 2, why: "Ku fara da payroll ko shugabanku, da rubutunku a hannu." },
          { objective: "O6", q: "Wanne ne ke cikin sashen buƙatu na kasafin kuɗi?", options: ["Haya", "Sabon wasan bidiyo", "Tikitin kide-kide", "Abincin waje kowane dare"], answer: 0, why: "Haya buƙata ce; sauran abubuwan sha'awa ne." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Lissafin Yau da Kullum don Aiki da Rayuwa",
    questions: [
      { objective: "O1", q: "Wanne ne daidai da 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% yana nufin 50 cikin 100, wato 1/2 ko 0.5." },
      { objective: "O1", q: "Nawa ne 0.4 a kashi cikin ɗari?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Ku matsar da ɗigon wurare biyu zuwa dama: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, wato 3/4"], answer: 3, why: "Lambar ƙasa ɗaya ce: ku tara lambobin sama. 6/8 ya sauƙaƙa zuwa 3/4." },
      { objective: "O2", q: "Nawa ne 10% na $73.00?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Ku matsar da ɗigon wuri ɗaya zuwa hagu: $7.30." },
      { objective: "O2", q: "Injin huda (drill) na $120 yana da rangwamen 30%. Mene ne farashin rangwamen?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% na 120 shi ne 36, kuma 120 - 36 = $84." },
      { objective: "O2", q: "\"Rangwamen 20%\" yana nufin kuna biyan kashi nawa cikin ɗari na farashin?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% na farashin." },
      { objective: "O2", q: "Yawan harajin saye:", options: ["Iri ɗaya ne ko'ina a Amurka", "Koyaushe 10% ne", "Shago ne ke ƙayyade shi", "Ya bambanta a jihohi da birane, don haka ku duba ofishin haraji na jiharku ko rasit"], answer: 3, why: "Jihohi da birane da yawa suna ƙayyade nasu yawan harajin saye." },
      { objective: "O3", q: "Yaya ake samun farashin kowane ma'auni?", options: ["Farashi x girma", "Farashi / girma", "Girma / 100", "Farashi - girma"], answer: 1, why: "Ku raba farashin da yawan ma'aunin." },
      { objective: "O3", q: "Sabulun wanki: oz 50 a $6.00 ko oz 100 a $13.00. Wanne ne saye mafi riba?", options: ["oz 100, domin ya fi girma", "Iri ɗaya ne", "oz 50, a $0.12 kowace oza da $0.13", "Ba za a iya sani ba"], answer: 2, why: "$6.00 / 50 = $0.12 kuma $13.00 / 100 = $0.13, don haka ƙaramar kwalbar ta fi arha a kowace oza." },
      { objective: "O3", q: "Kafin ku sayi babban girma, ya kamata kuma ku tambayi:", options: ["Zan yi amfani da shi kafin ya lalace, kuma ina iya biyan sa yanzu?", "Akwatin yana da kyakkyawan launi?", "Yana kan shiryayyen sama?", "Shagon yana da wurin ajiye mota?"], answer: 0, why: "Ƙarancin farashin kowane ma'auni yana ajiye kuɗi ne kawai idan kun yi amfani da shi kuma kuna iya biyan sa." },
      { objective: "O4", q: "Kwart nawa ne a galan 3?", options: ["7", "3", "16", "12"], answer: 3, why: "Kwart 4 = galan 1, don haka 3 x 4 = kwart 12." },
      { objective: "O4", q: "Akwatunan tayal suna rufe ƙafa murabba'i 15. Kuna buƙatar ƙafa murabba'i 100. Akwatuna nawa?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, kuma ku tara sama zuwa cikakkun akwatuna 7." },
      { objective: "O4", q: "Kuna aiki daga 8:00 na safe zuwa 4:30 na yamma da hutun abincin rana na minti 30 da ba a biya. Sa'o'i nawa?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "8:00 zuwa 4:30 sa'o'i 8.5 ne, ban da sa'o'i 0.5 = sa'o'i 8.0." },
      { objective: "O5", q: "Albashin hannu (net pay) shi ne:", options: ["Jimillar albashi ban da ragi", "Jimillar albashi tare da ragi", "Overtime ɗinku kawai", "Farashin sa'arku"], answer: 0, why: "Albashin hannu shi ne abin da ya rage bayan an cire ragi." },
      { objective: "O5", q: "A ƙarƙashin dokar tarayya, ma'aikatan sa'a da dokar ta shafa suna samun overtime don sa'o'in da suka wuce:", options: ["35 a mako na aiki", "8 a wata", "50 a mako na aiki", "40 a mako na aiki"], answer: 3, why: "Dokar tarayya ita ce ninki ɗaya da rabi don sa'o'in da suka wuce 40 a mako na aiki." },
      { objective: "O5", q: "Kun yi aiki sa'o'i 44 a $15.00 a sa'a da overtime. Nawa ne jimillar albashi?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, da 4 x $22.50 = $90, don haka $690.00." },
      { objective: "O5", q: "Kafin ku nuna takardar albashi ga wanda ke taimaka muku, ya kamata ku:", options: ["Saka ta a intanet", "Ƙara kalmar sirrinku a kanta", "Rufe lambar Social Security ɗinku", "Jefar da ita"], answer: 2, why: "Lambar Social Security ɗinku sirri ce kuma ana iya amfani da ita don satar shaidarku." },
      { objective: "O6", q: "Ana biyan ku kowane mako biyu kuma kuna ɗaukar $1,200 gida. Nawa ne kuɗin shigarku na wata?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "A kasafin kuɗi da ya daidaita, jimillar kashe kuɗi har da ajiya:", options: ["Ta fi kuɗin shiga", "Daidai take da kuɗin shiga ko ta gaza shi", "Koyaushe $0 ce daidai", "Ba a rubuta ta ba"], answer: 1, why: "Kashe kuɗi da bai wuce kuɗin shiga ba yana hana ku shiga sabon bashi." },
      { objective: "O6", q: "Wanne ne kashe kuɗi mai canjawa?", options: ["Hayar da ba ta canjawa", "Biyan mota na tsaye", "Tsarin waya na tsaye", "Kayan abinci, da ke canjawa kowane wata"], answer: 3, why: "Kashe kuɗi mai canjawa yana canjawa daga wata zuwa wata." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku sake yin wannan sashe da matakan darasin ku sake dubawa.",
    criteria: [
      { name: "An duba takardar albashi", objective: "O5", notYet: "Ba a duba wasu layuka ba, ko akwai kuskuren lissafi a jimillar albashi ko albashin hannu.", meets: "An duba sa'o'i, farashi, overtime, ragi da albashin hannu; kowane layi ya yi daidai har zuwa sisi ko an rubuta kuskure.", exceeds: "An kuma rubuta abin da za a faɗa wa payroll game da kowane kuskure da inda za a je na gaba." },
      { name: "Kuɗin shiga na wata", objective: "O6", notYet: "An ninka albashin mako da 4, ko an yi amfani da jimillar albashi a maimakon albashin hannu.", meets: "An nemo albashin hannu na wata da x 52 / 12 ko x 26 / 12.", exceeds: "An nuna lissafin kuma an duba shi ta wata hanya ta biyu." },
      { name: "Kasafin kuɗi da ya daidaita", objective: "O6", notYet: "Kashe kuɗi ya fi kuɗin shiga, ko babu layin ajiya.", meets: "An jera buƙatu, ajiya da abubuwan sha'awa; kashe kuɗi bai wuce kuɗin shiga ba; an duba jimloli.", exceeds: "Yana da tsarin bin diddigin ainihin kashe kuɗi da ranar sake dubawa." },
      { name: "Farashin kowane ma'auni", objective: "O3", notYet: "Kwatance ƙasa da 3, ko ma'aunai ba su yi daidai ba.", meets: "Kwatance 3 da farashin kowane ma'auni daidai, kuma an yi alama a saye mafi riba.", exceeds: "An rubuta lokacin da babban girma ba shi ne zaɓi mafi kyau ba da dalilin haka." },
      { name: "Kashi cikin ɗari", objective: "O2", notYet: "Amsoshin atisayen rangwame, haraji, tip ko ƙarin albashi sau da yawa ba daidai ba ne.", meets: "Aƙalla 4 cikin 5 na atisayen kashi cikin ɗari daidai, har zuwa sisi.", exceeds: "Zai iya bayyana wa wani dabarar gajeriyar hanya (10%, sannan a gina)." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka kammala Takardar Lissafin Aiki da Kuɗi bisa ma'aunin rubric",
      "Masu koyo da suka ce sun gano kuskure a takardar albashi ko sun ajiye kuɗi da farashin kowane ma'auni cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka riƙe kasafin kuɗi a rubuce aƙalla wata 2",
      "Masu koyo da suka ci gaba zuwa \"Shirin Jarabawar GED: Lissafi\" ko suka ci gwajin lissafi na wani aiki cikin wata 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, fensir da na'urar lissafi mai sauƙi (na'urar lissafi ta waya ma ta isa)",
      "Tef na awo ko rula mai alamomin 1/8 na inci",
      "Takardar albashi ta atisaye (ƙirƙirarriya) a Darasi na 5, ko ta mai koyo da lambobin sirri a rufe",
      "Rasit na shago ko alamomin farashi na shiryayye don farashin kowane ma'auni",
      "Kusan sa'o'i 2 gaba ɗaya: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Manya da yawa suna jin tsoron lissafi. Ku fara da gwajin farko a matsayin share fage \"ba tare da maki ba\", kuma ku yi murna da ci gaban da aka samu a jarabawar ƙarshe.",
      "Ku warware kowane misali a allo tukuna, sannan ku bar masu koyo su gwada na gaba bibbiyu.",
      "Ku koyar da duba amsa ta hanyoyi biyu (ƙiyasi, sannan lissafi) don masu koyo su amince da aikinsu.",
      "Idan masu koyo sun kawo takardun albashi na gaske, ku sa su fara rufe lambar Social Security da lambobin banki. Tambayoyin haraji da overtime da suka wuce na asali su tafi ga payroll, ofishin ƙwadago na jiha ko DOL Wage and Hour Division.",
      "Kada ku yi wa kasafin kuɗin kowa hukunci; manufar ita ce tsarin da ya daidaita, ba cikakke ba.",
      "Ku nuna wa masu koyo da ke son difloma kwas ɗin \"Shirin Jarabawar GED: Lissafi\"."
    ]
  }
};
