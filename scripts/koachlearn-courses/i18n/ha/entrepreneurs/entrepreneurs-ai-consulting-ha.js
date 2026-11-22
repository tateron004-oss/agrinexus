"use strict";

// Koach Learn course, Hausa (ha) translation of entrepreneurs/entrepreneurs-ai-consulting.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "entrepreneurs-ai-consulting-ha",
  lang: "ha",
  translationOf: "entrepreneurs-ai-consulting",
  category: "Entrepreneurs",
  name: "Fara Kasuwancin Ba da Shawara kan AI",
  skills: "Zaɓar fannin ba da shawara, Gina shaida da aikin gwaji (pilot), Tsara da sanya farashin hidimomi, Yi wa abokin ciniki binciken AI (audit), Rubuta takardar tayi (proposal), Kula da bayanan abokan ciniki da yarjejeniyoyi",
  outcome: "kafa ƙaramin kasuwancin ba da shawara kan AI: zaɓar fanninku, tsara hidimomi uku da farashinsu, yi wa ƙaramin kasuwanci na gaske binciken AI, da mayar da shi takardar tayi mai shafi ɗaya da ƙa'idoji masu sarari game da kula da bayanan abokin ciniki.",
  about: [
    "Ƙananan kasuwanci da yawa sun san ya kamata su yi amfani da AI, amma ba su san ta inda za su fara ba. Mai ba da shawara kan AI (AI consultant) yana taimaka musu su gano amfanin da ya dace, su saita kayan aiki, su horar da ma'aikata, kuma su kasance lafiya. Ba sai kun zama mai rubuta shirin kwamfuta (programmer) ba; kuna buƙatar fahimtar matsalolin kasuwanci, sanin manyan kayan AI sosai, da faɗin gaskiya game da abin da AI zai iya yi da wanda ba zai iya ba.",
    "Wannan kwas ɗin na mutane ne masu ƙwarewa a kasuwanci ko aiki da ke son ba da taimakon AI ga ƙananan kasuwanci, ƙungiyoyin sa-kai ko ƙungiyoyin unguwa. Za ku zaɓi fanninku, ku gina shaida ta aikin gwaji (pilot), ku tsara hidimominku da farashinsu, ku nemo abokan ciniki, ku yi binciken AI, ku rubuta takardar tayi, kuma ku kafa ƙa'idoji game da bayanan abokan ciniki da yarjejeniyoyi.",
    "Kowane darasi yana ɗaukar kusan minti biyar tare da aikin hannu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Batutuwan haraji da doka suna da hanyoyin haɗi zuwa majiyoyin hukuma; ku yi magana da akanta (accountant) da lauya game da tsarinku."
  ],
  finalTask: "Ku haɗa kayan farawa na kasuwancin ba da shawara kan AI: tayinku da fanninku a jimla ɗaya, hidimomi uku da farashinsu, takardar tambayoyi 10 na binciken AI, sakamakon bincike na kasuwanci ɗaya na gaske (an cire bayanan sirri), takardar tayi mai shafi ɗaya ga wannan kasuwancin, da rubutattun ƙa'idojinku na bayanan abokan ciniki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Mutane masu ƙwarewa a kasuwanci ko aiki da ke son ba da taimakon AI ga ƙananan kasuwanci, ƙungiyoyin sa-kai ko ƙungiyoyin unguwa. Yawancinsu ba masu rubuta shirin kwamfuta ba ne.",
    startingPoint: "Suna amfani da manyan kayan AI sosai kuma sun san aƙalla masana'antu ɗaya ko wani nau'in kasuwanci. Kaɗan ne suka taɓa tsara ko sanya farashin wata hidima, yin bincike (audit), rubuta takardar tayi ko kafa ƙa'idoji game da bayanan abokan ciniki.",
    gap: "Ƙananan kasuwanci suna buƙatar taimakon AI na gaskiya da na aiki, amma sababbin masu ba da shawara sukan sayar da hidimomi marasa sarari, su rage farashin lokacinsu, su yi alƙawarin sakamakon da ya wuce kima, ko su yi wa bayanan abokan ciniki rashin kulawa. Masu koyo suna buƙatar tayi mai ma'ana, shaida ta gaske, hidimomi masu sarari, binciken da za a iya maimaitawa, da rubutattun ƙa'idojin bayanai don samun abokan ciniki da riƙe su.",
    constraints: [
      "Kalmomi masu sauƙi; ba a buƙatar rubuta shirin kwamfuta",
      "Na'urori: kwamfuta mai mataimakin AI kyauta, spreadsheet (takardar lissafi) da imel",
      "Lokaci: kusan minti biyar a kowane darasi, da ayyuka tare da abokin ciniki na gaske ko na atisaye",
      "Ƙa'idojin imel na neman abokan ciniki suna aiki; ana tabbatar da tsarin haraji da doka da majiyoyin hukuma, akanta da lauya",
      "Ana cire sunayen abokan ciniki da bayanan sirri kafin kowane rubutu ya shiga AI"
    ],
    prerequisites: "Ana ba da shawarar kwas ɗin \"AI Tools Every Entrepreneur Should Know\" (Kayan AI da Kowane Ɗan Kasuwa Ya Kamata Ya Sani) da \"Ɗabi'u, Haɗari da Batutuwan Shari'a na AI\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku masana'antu da kasuwancin da kuka sani", action: "rubuta tayin ba da shawara a jimla ɗaya ga wani takamaiman nau'in abokin ciniki", standard: "kuna faɗin waɗanda kuke taimakawa, sakamakon, da yadda kuke yi" },
    { id: "O2", condition: "Idan aka ba ku kasuwanci ɗaya da ke son gwada taimakonku", action: "tsara aikin gwaji (pilot) mai sakamako ɗaya da za a iya aunawa, da lambobin kafin da bayan", standard: "da rubutaccen izinin abokin ciniki kafin a raba kowane sakamako" },
    { id: "O3", condition: "Idan aka ba ku tayinku da kuɗin lokacinku na kowace sa'a", action: "ƙirƙirar hidimomi uku masu abubuwan da za a kawo, lokaci, abin da ake buƙata daga abokin ciniki, da farashi", standard: "an duba lissafin sa'o'i a spreadsheet, har da lokacin dubawa da na biyo baya" },
    { id: "O4", condition: "Idan aka ba ku abokan hulɗarku da fanninku", action: "tsara yadda za ku tuntuɓi abokan ciniki 10 masu yiwuwa, da shirya gajeren jawabi ga masu kasuwanci", standard: "da saƙonni na kai-tsaye masu ɗauke da adireshinku da hanyar dakatar da karɓar saƙo (opt-out)" },
    { id: "O5", condition: "Idan aka ba ku takardar tambayoyi 10 na bincike da mai kasuwanci ɗaya", action: "yin binciken AI da ba da shawarar manyan amfani uku na AI", standard: "kuna auna kowane ra'ayi kan lokacin da ake ajiyewa, kuɗi, sauƙi da haɗari, tare da matakin kariya ga kowanne" },
    { id: "O6", condition: "Ga kasuwancin da kuka bincika", action: "rubuta takardar tayi mai shafi ɗaya da ƙa'idojinku na bayanan abokan ciniki", standard: "da halin da abokin ciniki yake ciki a kalmominsa, kuma ana goge bayanai ko a mayar da su a ƙarshe" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kafa kasuwancinku",
      lessons: [
        {
          objectives: ["O1"],
          title: "Zaɓar fanninku da tayinku",
          minutes: 5,
          goal: "Rubuta tayi a jimla ɗaya ga wani takamaiman nau'in abokin ciniki.",
          text: [
            "\"Ina taimakon kasuwanci da AI\" yana da wuyar sayarwa. \"Ina taimakon gidajen abinci masu zaman kansu su ajiye sa'o'i 5 a mako wajen yin oda, tsara lokutan aiki da kafofin sada zumunta da kayan AI masu sauƙi\" yana da sauƙin fahimta, kuma yana da sauƙin a ba da shawarar ku ga wasu.",
            "Ku zaɓi fannin da kuke da ƙwarewa ko abokan hulɗa a ciki: masana'antar da kuka yi aiki a ciki, al'ummar da kuke ciki, ko wani nau'in ƙungiya (shagunan gyaran gashi, coci-coci, 'yan kwangila, ofisoshin karɓar baƙi na asibitoci, ƙungiyoyin sa-kai). Ƙwarewarku ta baya ita ce fifikonku a kan mutanen fasaha na gama-gari.",
            "Ku nemi taimakon AI: \"Na yi shekaru 8 ina aiki a [fanni]. Ka jera ayyukan da ƙananan kasuwanci a wannan fannin suke maimaitawa waɗanda kayan AI za su iya hanzartawa.\" Sannan ku rubuta tayinku: waɗanda kuke taimakawa, wane sakamako, da ta yaya."
          ],
          steps: ["Ku jera masana'antu ko al'ummomin da kuka sani sosai.", "Ku tambayi AI ayyukan da ake maimaitawa a waɗannan fannoni waɗanda AI zai iya hanzartawa.", "Ku zaɓi fanni ɗaya.", "Ku rubuta tayinku: waɗanda kuke taimakawa, wane sakamako, ta yaya."],
          words: [["Mai ba da shawara (consultant)", "ƙwararre da ke ba kasuwanci shawara kuma yana taimaka masa ya yi canje-canje."], ["Fanni (niche)", "takamaiman nau'in abokin ciniki da kuka mai da hankali a kai."], ["Tayi (offer)", "bayani mai sarari na waɗanda kuke taimakawa, sakamakon, da yadda kuke yi."]],
          slides: [
            { title: "Takamaimai yana sayuwa", bullets: ["Ba \"Ina taimakon kasuwanci da AI\" ba", "\"Ina taimakon gidajen abinci masu zaman kansu su ajiye sa'o'i 5 a mako\""] },
            { title: "Ku yi amfani da abin da kuka sani", bullets: ["Masana'antar da kuka yi aiki a ciki", "Al'ummar da kuke ciki", "Ƙwarewarku ita ce fifikonku"] },
            { title: "Ku rubuta tayinku", bullets: ["Waɗanda kuke taimakawa", "Wane sakamako", "Ta yaya"] }
          ],
          tryIt: "Ku zaɓi fanninku da taimakon AI, ku rubuta tayinku a jimla ɗaya: su wa, wane sakamako, ta yaya.",
          youCanNow: "bayyana tayin ba da shawara kan AI mai ma'ana da abokan ciniki za su fahimta da sauri.",
          quickCheck: [
            { objective: "O1", q: "Mene ne fanni (niche) a harkar ba da shawara?", options: ["Takamaiman nau'in abokin ciniki da kuka mai da hankali a kai", "Kowane kasuwanci a ƙasar", "Wani nau'in kayan AI", "Farashinku na kowace sa'a"], answer: 0, why: "Fanni yana ba ku damar fahimtar matsalolin abokan ciniki sosai." },
            { objective: "O1", q: "Tayinku yana cewa \"Ina taimakon kasuwanci da AI\". Me za ku yi?", options: ["Ku bar shi a faɗaɗe", "Ku faɗi waɗanda kuke taimakawa, sakamakon da ta yaya", "Ku ƙara jerin kowane kayan AI", "Ku cire tayin"], answer: 1, why: "Tayi mai ƙarfi yana da takamaimai don abokan ciniki su fahimce shi da sauri." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Gina shaida da aikin gwaji (pilot)",
          minutes: 5,
          goal: "Tsara ƙaramin aikin gwaji da zai ba ku sakamako na gaske da za ku nuna.",
          text: [
            "Abokan ciniki suna son shaida cewa za ku iya taimaka. Idan ku sababbi ne, ku yi aikin gwaji (pilot): ƙarami, gajeren aiki ga kasuwanci ɗaya (shagon aboki, ƙungiyar sa-kai ta unguwa) da ɗan kuɗi kaɗan ko kyauta, a madadin izinin raba sakamakon da shaidar baki (testimonial).",
            "Ku zaɓi aikin gwaji mai sakamakon da za a iya aunawa: \"Saita samfuran amsa (template) na AI kuma a rage lokacin imel daga sa'o'i 6 zuwa 3 a mako.\" Ku auna kafin da bayan.",
            "Ku rubuta shi a matsayin gajeren nazarin aiki (case study): matsalar, abin da kuka yi, sakamakon a lambobi, da kalaman mai kasuwancin. Ku sami rubutaccen izini kafin ku raba shi, kuma ku cire duk abin da yake na sirri. Kada ku taɓa ƙirƙirar sakamako ko shaidar baki."
          ],
          steps: ["Ku nemo kasuwanci ɗaya da ke son gwada aikin gwaji.", "Ku amince kan sakamako ɗaya da za a iya aunawa.", "Ku auna kafin ku fara.", "Ku yi aikin, sannan ku auna bayan.", "Ku rubuta gajeren nazarin aiki da izini."],
          words: [["Aikin gwaji (pilot)", "ƙaramin aikin gwaji don nuna cewa wani abu yana aiki."], ["Nazarin aiki (case study)", "gajeren labarin wani aiki na gaske: matsala, aiki, sakamako."], ["Shaidar baki (testimonial)", "kalaman abokin ciniki game da aikinku, da ake amfani da su da izininsa."]],
          slides: [
            { title: "Sababbi? Ku yi aikin gwaji", bullets: ["Kasuwanci ɗaya, gajere kuma ƙarami", "Ɗan kuɗi kaɗan ko kyauta", "A madadin haka: izinin raba sakamako"] },
            { title: "Ku auna shi", bullets: ["Sakamako ɗaya mai sarari", "Lambobin kafin da bayan"] },
            { title: "Ku rubuta nazarin aiki", bullets: ["Matsala, aiki, sakamako, kalamai", "Rubutaccen izini", "Kada ku taɓa ƙirƙirar sakamako"] }
          ],
          tryIt: "Ku rubuta shirin aikin gwaji: wane kasuwanci, sakamako ɗaya da za a iya aunawa, yadda za ku auna kafin da bayan, da abin da kuke nema a madadin haka.",
          youCanNow: "tsara aikin gwaji da zai zama shaida ta gaskiya ga kasuwancinku na ba da shawara.",
          quickCheck: [
            { objective: "O2", q: "Me ya kamata aikin gwaji ya auna?", options: ["Yawan kayan aikin da kuka yi amfani da su", "Tsawon imel ɗinku", "Sakamako ɗaya da lambobin kafin da bayan", "Babu komai; kyauta ne"], answer: 2, why: "Sakamakon da za a iya aunawa yana mayar da aikin gwaji shaida ta gaskiya." },
            { objective: "O2", q: "Aikin gwajinku ya ajiye wa abokin ciniki sa'o'i 2 a mako, ba 5 da kuka yi fata ba. Me za ku raba?", options: ["Ku ce ya ajiye sa'o'i 5", "Ku ɓoye aikin gwajin", "Ku ƙara shi zuwa sa'o'i 4", "Ainihin sakamakon, da izinin abokin ciniki"], answer: 3, why: "Kada ku taɓa ƙirƙirar sakamako; ku raba abin da ya faru da gaske kawai." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Tsara hidimominku da sanya farashi",
          minutes: 6,
          goal: "Ƙirƙiri hidimomi uku masu abubuwan da za a kawo da farashi a sarari.",
          text: [
            "Hidimomin da aka tsara (package) sun fi sauƙin saye fiye da sa'o'i marasa iyaka. Tsarin da aka saba: Binciken AI (AI Audit: duba kasuwancin ku ba da shawarar manyan amfani uku na AI), Saitin AI (AI Setup: saita kayan aiki, samfura da sauƙaƙan ayyukan kai-tsaye ta na'ura), da Horon AI (AI Training: koyar da mai kasuwancin da ma'aikata, tare da rubutattun jagorori). Wasu masu ba da shawara suna ƙara shirin taimako na wata-wata.",
            "Ga kowace hidima ku rubuta: abin da abokin ciniki zai samu, tsawon lokacin da zai ɗauka, abin da kuke buƙata daga gare shi, da farashin. Ku sanya farashi bisa amfanin aikin da lokacinku: ku ƙiyasta sa'o'inku, ku haɗa lokacin dubawa da na biyo baya, kuma ku kwatanta da abin da hidimomi irin wannan a yankinku suke caji.",
            "Ku sami EIN daga IRS (hukumar haraji ta Amurka) idan kuna buƙata (IRS ta ce kyauta ne kuma tana gargaɗi game da shafukan da ke karɓar kuɗi). A matsayinku na mai sana'ar kansa, yawanci kuna biyan harajin sana'ar kai (self-employment tax) kuma kuna iya buƙatar biyan harajin ƙiyasi duk bayan wata uku; ku duba irs.gov kuma ku yi magana da akanta."
          ],
          steps: ["Ku rubuta hidimomi uku: Bincike, Saiti, Horo.", "Ga kowanne: abubuwan da za a kawo, lokaci, abin da kuke buƙata daga abokin ciniki, farashi.", "Ku ƙiyasta sa'o'inku har da dubawa da biyo baya.", "Ku kwatanta da farashin yankinku kuma ku duba lissafinku.", "Ku duba muhimman abubuwan haraji a irs.gov kuma ku tambayi akanta."],
          words: [["Hidimar da aka tsara (package)", "takamaiman hidima mai abubuwan da za a kawo da farashi tabbatacce."], ["Kuɗin wata-wata (retainer)", "kuɗin da ake biya kowane wata don taimakon da ke ci gaba."], ["EIN", "Employer Identification Number: lambar haraji ta tarayya kyauta ga kasuwanci daga IRS."]],
          slides: [
            { title: "Hidimomi uku", bullets: ["Binciken AI: manyan amfani uku na AI", "Saitin AI: kayan aiki, samfura, ayyukan kai-tsaye", "Horon AI: mai kasuwanci da ma'aikata, tare da jagorori"] },
            { title: "Kowace hidima tana faɗin", bullets: ["Abin da abokin ciniki zai samu", "Tsawon lokaci, abin da kuke buƙata daga gare shi", "Farashin"] },
            { title: "Ku kafa shi yadda ya kamata", bullets: ["IRS: EIN kyauta ne; ku yi hankali da shafuka masu caji", "Harajin sana'ar kai da harajin ƙiyasi", "Ku tambayi akanta"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number (Samun lambar EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center (Cibiyar haraji ga masu sana'ar kansu)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Ku rubuta hidimominku uku da abubuwan da za a kawo, lokaci, abin da ake buƙata daga abokin ciniki da farashin kowanne, kuma ku duba lissafin sa'o'inku a spreadsheet.",
          youCanNow: "tsara hidimomin ba da shawara kan AI da sanya musu farashi a sarari.",
          quickCheck: [
            { objective: "O3", q: "Me yasa za a sayar da hidimomin da aka tsara maimakon sa'o'i marasa iyaka?", options: ["Sun fi sauƙi ga abokan ciniki su fahimta su saya", "Suna ɓoye farashinku", "Suna cire buƙatar abubuwan da za a kawo", "Suna nufin ƙaramin aiki"], answer: 0, why: "Hidimomi masu sarari suna sauƙaƙa wa abokan ciniki saye." },
            { objective: "O3", q: "Farashin hidimarku bai bar lokaci don tambayoyin biyo baya ba. Me za ku yi?", options: ["Ku yi watsi da biyo baya", "Ku ƙara lokacin biyo baya a sa'o'inku ku sake sanya farashi", "Ku caji ƙari daga baya ba tare da faɗa wa abokin ciniki ba", "Ku cire abubuwan da za a kawo"], answer: 1, why: "Farashi dole ya haɗa da lokacin dubawa da na biyo baya." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kafa kasuwancinku",
        questions: [
          { objective: "O1", q: "Wane tayin ba da shawara ne ya fi ƙarfi?", options: ["\"Ina yin abubuwan AI\"", "\"Ina taimakon gidajen abinci masu zaman kansu su ajiye sa'o'i 5 a mako da kayan AI masu sauƙi\"", "\"Ina taimakon kowa da komai\"", "\"Ƙwararren AI, ku kira ni\""], answer: 1, why: "Yana faɗin su wa, wane sakamako da ta yaya." },
          { objective: "O1", q: "Mene ne babban fifikon zaɓar fannin da kuka sani?", options: ["Yana hana haraji", "Koyaushe shi ne mafi riba", "Ba sai kun koyi AI ba", "Kun fi fahimtar matsalolin abokan ciniki fiye da mutanen fasaha na gama-gari"], answer: 3, why: "Ƙwarewa a fannin ita ce fifikonku." },
          { objective: "O2", q: "Abokin cinikin aikin gwaji ya amince da ɗan kuɗi kaɗan. Me za ku nema a madadin haka?", options: ["Izinin raba sakamako da shaidar baki", "Kalmar sirrin bankinsa", "Sharhohi na bogi", "Babu komai"], answer: 0, why: "Aikin gwaji yana gina shaida ta gaskiya." },
          { objective: "O2", q: "Kuna iya ƙirƙirar sakamako don nazarin aiki idan aikin gwajin bai yi kyau ba?", options: ["Eh, idan babu wanda zai duba", "Eh, idan ƙarami ne", "A'a, kada ku taɓa ƙirƙirar sakamako", "A kafofin sada zumunta kawai"], answer: 2, why: "Ƙirƙirarren sakamako rashin gaskiya ne kuma yana ruɗarwa." },
          { objective: "O3", q: "Me IRS ta ce game da samun EIN?", options: ["Lauyoyi ne kaɗai za su iya samun sa", "Yana kashe $500", "Kyauta ne; ku yi hankali da shafukan da ke caji", "Dole ku biya kowane wata"], answer: 2, why: "IRS tana ba da EIN ba tare da kuɗi ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Samun abokan ciniki da yi musu hidima",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nemo abokan cinikinku na farko",
          minutes: 5,
          goal: "Tsara yadda za ku tuntuɓi abokan ciniki 10 na farko masu yiwuwa.",
          text: [
            "Abokan cinikinku na farko yawanci suna zuwa ne daga mutanen da suka riga suka san ku: tsofaffin abokan aiki, ƙungiyoyin kasuwanci na yankinku, cocinku ko al'ummarku, da shawarwarin wasu (referral) daga aikin gwajinku. Gajeren jawabi ko taron koyarwa kyauta (\"Hanyoyi 5 da AI zai iya ajiye lokacin shagon gyaran gashinku\") hanya ce mai ƙarfi ta haɗuwa da masu kasuwanci.",
            "Ku rubuta saƙonni na kai-tsaye, ba imel ɗin taro ba. AI zai iya rubuta daftarinsu: \"Ka rubuta saƙo mai kalmomi 70 ga mai shagon gyaran gashi da na haɗu da shi a taron ƙungiyar 'yan kasuwa, ina tayin binciken AI kyauta na minti 20. Cikin abota, ba tare da zuzuta ba.\" Ku ƙara wani bayani na gaske.",
            "Idan kuna aika wa mutane imel na kasuwanci, ku bi muhimman ƙa'idojin CAN-SPAM (dokar imel ta Amurka): layukan Daga (From) da Batu (subject) na gaskiya, adireshinku na zahiri, da hanyar dakatar da karɓar saƙo (opt-out) mai sarari, wadda ake girmamawa cikin kwanakin aiki 10. Kada ku yi alƙawarin sakamakon da ba za ku iya tabbatarwa ba."
          ],
          steps: ["Ku jera masu kasuwanci ko ƙungiyoyi 10 a fanninku da za ku iya kaiwa.", "Ku tsara jawabi ko taron koyarwa ɗaya kyauta.", "Ku rubuta daftarin saƙonni na kai-tsaye da AI kuma ku ƙara bayani na gaske a kowanne.", "Ku saka adireshinku da hanyar dakatar da karɓar saƙo a imel na kasuwanci.", "Ku riƙe bayanan waɗanda kuka tuntuɓa da amsarsu."],
          words: [["Shawarar wani (referral)", "shawarar da wanda ya san aikinku ya ba da game da ku."], ["Taron koyarwa (workshop)", "gajeren zama da kuke koya wa rukunin mutane wani abu mai amfani."]],
          slides: [
            { title: "Ku fara da mutanen da suka san ku", bullets: ["Tsofaffin abokan aiki da al'umma", "Ƙungiyoyin kasuwanci na yankinku", "Shawarwarin wasu daga aikin gwajinku"] },
            { title: "Ku koyar don haɗuwa da masu kasuwanci", bullets: ["Gajeren jawabi ko taron koyarwa kyauta", "\"Hanyoyi 5 da AI zai iya ajiye lokacin shagon gyaran gashinku\""] },
            { title: "Tuntuɓa ta kai-tsaye, bisa ƙa'ida", bullets: ["AI yana rubuta daftari; ku ƙara bayani na gaske", "CAN-SPAM: layuka na gaskiya, adireshi, opt-out", "Babu alƙawarin da ba za ku iya tabbatarwa ba"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business (Jagorar bin dokar CAN-SPAM)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Ku jera abokan ciniki 10 masu yiwuwa, ku rubuta saƙonni uku na kai-tsaye da taimakon AI, kuma ku tsara jawabi na minti 20 da za ku iya ba masu kasuwanci a fanninku.",
          youCanNow: "kaiwa ga abokan cinikinku na farko ta mutanen da kuka sani, jawabai da tuntuɓa ta gaskiya.",
          quickCheck: [
            { objective: "O4", q: "Daga ina abokan ciniki na farko a ba da shawara suke yawan zuwa?", options: ["Jerin imel da aka saya", "Kiran baƙi kawai a ƙasashen waje", "Mutanen da suka riga suka san ku da shawarwarin wasu", "Tallace-tallace da aka biya a rana ta farko"], answer: 2, why: "Abokan hulɗarku da shawarwarin wasu ne suka fara amincewa da ku." },
            { objective: "O4", q: "AI ya rubuta daftarin imel na tuntuɓa babu adireshi ko opt-out. Me za ku yi?", options: ["Ku aika shi", "Ku aika shi ga jerin da aka saya", "Ku tsawaita shi", "Ku ƙara adireshinku na zahiri da layin opt-out"], answer: 3, why: "Imel na tuntuɓa na kasuwanci dole ya ƙunshi adireshi da hanyar dakatar da karɓar saƙo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Yin binciken AI (AI audit)",
          minutes: 6,
          goal: "Yi hira da mai kasuwanci kuma ku ba da shawarar manyan amfani uku na AI a gare shi.",
          text: [
            "Binciken AI duba ne mai tsari na yadda kasuwanci yake aiki da inda AI zai iya taimakawa. Ku yi amfani da gajeriyar takardar tambayoyi: Waɗanne ayyuka ne suka fi cin lokaci kowane mako? Me abokan ciniki suka fi tambaya? A ina ake yawan yin kuskure? Waɗanne kayan aiki kuke amfani da su yanzu? Me ke damun ku game da AI?",
            "Daga amsoshin, ku auna kowane amfanin AI mai yiwuwa kan lokacin da ake ajiyewa, kuɗi, sauƙi da haɗari. AI zai iya taimaka muku ku jera ku auna (bayan an cire sunan kasuwancin da bayanan sirri), amma hukuncinku ne ya fi muhimmanci. Ku zaɓi manyan uku: nasarori masu sauri (quick wins) da farko.",
            "Ku haɗa haɗari da matakan kariya ga kowace shawara: wane ne zai duba abin da AI ya fitar, waɗanne bayanai ne dole su nisanci kayan AI, da duk abin da ke buƙatar lauya ko akanta. Faɗin iyaka ta gaskiya yana sa abokan ciniki su ƙara amincewa da ku."
          ],
          steps: ["Ku yi amfani da takardar tambayoyi 10 na bincike tare da mai kasuwancin.", "Ku jera kowane amfanin AI mai yiwuwa da kuka ji.", "Ku auna kowanne kan lokacin da ake ajiyewa, kuɗi, sauƙi da haɗari.", "Ku zaɓi manyan uku, nasarori masu sauri da farko.", "Ku ƙara matakin kariya ga kowanne: dubawar mutum, ƙa'idar bayanai, ƙwararre idan ana buƙata."],
          words: [["Binciken AI (AI audit)", "duba mai tsari na kasuwanci don gano inda AI zai iya taimakawa lafiya."], ["Nasara mai sauri (quick win)", "canjin da ke da sauƙin yi kuma yana taimakawa nan take."], ["Matakin kariya (safeguard)", "matakin da ke hana cutarwa, kamar dubawar mutum."]],
          slides: [
            { title: "Tambayoyin bincike", bullets: ["Me ya fi cin lokaci?", "Me abokan ciniki suka fi tambaya?", "A ina ake yin kuskure? Me ke damun ku?"] },
            { title: "Ku auna ku zaɓa", bullets: ["Lokacin da ake ajiyewa, kuɗi, sauƙi, haɗari", "Manyan uku, nasarori masu sauri da farko", "AI yana taimakawa wajen jerawa; ku ne kuke yanke hukunci"] },
            { title: "Ku ƙara matakan kariya", bullets: ["Wane ne zai duba abin da AI ya fitar", "Waɗanne bayanai ne za su nisanci kayan AI", "Yaushe za a sa lauya ko akanta"] }
          ],
          tryIt: "Ku rubuta takardar tambayoyi 10 ta binciken ku, kuma ku yi ta tare da mai kasuwanci na gaske ɗaya (ko aboki da ke yin kamar shi ne). Ku auna ra'ayoyin kuma ku rubuta manyan uku tare da matakan kariya.",
          youCanNow: "yin binciken AI da ba kasuwanci shawarwari uku masu aminci da na aiki.",
          quickCheck: [
            { objective: "O5", q: "Waɗanne shawarwarin bincike ne ya kamata su zo da farko?", options: ["Nasarori masu sauri da ke da sauƙi kuma suna taimakawa nan take", "Kayan aiki mafi tsada", "Ra'ayoyi masu haɗari mafi girma", "Duk abin da AI ya ba da shawara"], answer: 0, why: "Nasarori masu sauri suna gina amincewa kuma suna nuna amfani da wuri." },
            { objective: "O5", q: "Kuna son AI ya taimaka muku jera rubuce-rubucen binciken ku. Me za ku fara yi?", options: ["Ku liƙa su yadda suke", "Ku cire sunan kasuwancin da bayanan sirri", "Ku aika su ga aboki ta imel", "Ku saka su a intanet"], answer: 1, why: "Bayanan abokin ciniki suna nisanci kayan AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Takardun tayi, yarjejeniyoyi da bayanan abokan ciniki",
          minutes: 6,
          goal: "Rubuta takardar tayi mai shafi ɗaya da ƙa'idojinku na kula da bayanan abokan ciniki.",
          text: [
            "Takardar tayi (proposal) tana mayar da binciken ku zuwa yanke shawara. Shafi ɗaya: halin da abokin ciniki yake ciki a kalmominsa, shawarwari uku, hidimar da kuke ba da shawara, abin da za ku kawo da lokacin, farashin, da abin da kuke buƙata daga gare shi. AI zai iya rubuta daftarinta daga rubuce-rubucenku; ku gyara ta don kowane alƙawari ya zama wanda za ku iya cikawa.",
            "Ku sami rubutacciyar yarjejeniya kafin ku fara aikin da ake biya: iyakar aiki (scope), farashi, sharuɗɗan biya, jadawalin lokaci, wane ne ya mallaki abin da kuka ƙirƙira, da sirri. Akwai samfuran yarjejeniya, amma ku sa lauya ya duba naku.",
            "Ku rubuta ƙa'idojin bayanan abokan ciniki kuma ku bi su: kada ku taɓa saka jerin abokan cinikin wani abokin ciniki, bayanan kuɗinsa, kalmomin sirri ko bayanan sirri a kayan AI ba tare da rubutaccen izininsa ba da kuma kayan aikin da sharuɗɗan bayanansa suka dace; ku yi amfani da asusun abokin ciniki, ba naku ba, ga kayan aikin da ke riƙe bayanansa; kuma ku goge bayanansa ko ku mayar masa da su idan aikin ya ƙare. Jagorar FTC (hukumar kasuwanci ta Amurka) kan kare bayanan mutum tushe ne mai kyau."
          ],
          steps: ["Ku rubuta daftarin takardar tayi mai shafi ɗaya daga rubuce-rubucen binciken ku da AI.", "Ku duba kowane alƙawari da farashi.", "Ku shirya rubutacciyar yarjejeniya kuma ku sa lauya ya duba ta.", "Ku rubuta ƙa'idojinku na bayanan abokan ciniki.", "Ku raba ƙa'idojin da abokan ciniki kafin ku fara."],
          words: [["Takardar tayi (proposal)", "gajeriyar takarda da ke tayin takamaiman aiki a kan takamaiman farashi."], ["Sirri (confidentiality)", "kiyaye bayanan abokin ciniki a ɓoye."], ["Iyakar aiki (scope)", "ainihin aikin da aka haɗa."]],
          slides: [
            { title: "Takardar tayi mai shafi ɗaya", bullets: ["Halin da suke ciki a kalmominsu", "Shawarwari uku da hidima ɗaya", "Abubuwan da za a kawo, jadawali, farashi"] },
            { title: "Rubutacciyar yarjejeniya", bullets: ["Iyakar aiki, farashi, biya, jadawali", "Mallaka da sirri", "Ku sa lauya ya duba ta"] },
            { title: "Ƙa'idojin bayanan abokan ciniki", bullets: ["Babu bayanan sirri na abokin ciniki a AI ba tare da rubutaccen izini ba", "Ku yi amfani da asusun abokin ciniki", "Ku goge ko ku mayar da bayanai a ƙarshe"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business (Kare bayanan mutum: jagora ga kasuwanci)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Aikin ƙarshe: ku rubuta takardar tayi mai shafi ɗaya ga kasuwancin da kuka bincika da ƙa'idojinku na bayanan abokan ciniki, sannan ku haɗa kayan farawa na kasuwancinku: tayi, hidimomi, takardar tambayoyi, sakamakon bincike, takardar tayi da ƙa'idojin bayanai.",
          youCanNow: "samun abokan ciniki na ba da shawara kan AI da yi musu hidima da takardun tayi, yarjejeniyoyi da ƙa'idojin bayanai masu sarari.",
          quickCheck: [
            { objective: "O6", q: "Me rubutacciyar yarjejeniyar ba da shawara take ƙunsa?", options: ["Farashi kawai", "Kayan aikin da kuka fi so", "Iyakar aiki, farashi, biya, jadawali, mallaka da sirri", "Rayuwar abokin ciniki ta kansa"], answer: 2, why: "Yarjejeniya mai sarari tana hana rashin fahimta." },
            { objective: "O6", q: "Aikin ya ƙare kuma har yanzu kuna riƙe da fayilolin abokin ciniki. Me za ku yi?", options: ["Ku riƙe su har abada", "Ku yi amfani da su ga wani abokin ciniki", "Ku raba su a matsayin misali", "Ku goge su ko ku mayar da su yadda ƙa'idojin bayananku suka ce"], answer: 3, why: "Ya kamata a goge bayanan abokin ciniki ko a mayar da su a ƙarshen aiki." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Samun abokan ciniki da yi musu hidima",
        questions: [
          { objective: "O4", q: "Daga ina abokan ciniki na farko a ba da shawara suke yawan zuwa?", options: ["Mutanen da suka riga suka san ku da shawarwarin wasu", "Jerin imel da aka saya", "Kiran baƙi kawai da muryoyin AI", "Sharhohi na bogi"], answer: 0, why: "Amincewa da shawarwarin wasu ne ke kawo abokan ciniki na farko." },
          { objective: "O5", q: "Wace ce tambayar binciken AI mai kyau?", options: ["\"Zan iya samun jerin abokan cinikinku?\"", "\"Mece ce kalmar sirrin bankinku?\"", "\"Kuna son mutum-mutumin na'ura (robot)?\"", "\"Waɗanne ayyuka ne suka fi cin lokaci kowane mako?\""], answer: 3, why: "Tana gano inda AI zai iya ajiye lokaci." },
          { objective: "O5", q: "Waɗanne shawarwari ne ya kamata su zo da farko?", options: ["Ayyuka mafi tsada", "Nasarori masu sauri da ke da sauƙi kuma suna taimakawa nan take", "Ra'ayoyi mafi haɗari", "Duk abin da AI ya faɗa"], answer: 1, why: "Nasarori masu sauri suna gina amincewa da sakamako." },
          { objective: "O6", q: "Kafin ku fara aikin da ake biya, ya kamata ku sami:", options: ["Rubutacciyar yarjejeniya, wadda lauya ya duba", "Musafaha kawai", "Babu komai", "Saƙo a kafofin sada zumunta"], answer: 0, why: "Yarjejeniyoyi suna hana rashin fahimta." },
          { objective: "O6", q: "Kuna iya liƙa jerin abokan cinikin wani abokin ciniki a kayan AI?", options: ["Eh, idan kayan aikin kyauta ne", "Eh, a kowane lokaci", "Sai da rubutaccen izininsa da kayan aikin da sharuɗɗan bayanansa suka dace", "Da dare kawai"], answer: 2, why: "Bayanan abokin ciniki suna buƙatar izini da kariya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Fara Kasuwancin Ba da Shawara kan AI",
    questions: [
      { objective: "O1", q: "Mai ba da shawara kan AI ya fi buƙatar:", options: ["Ya zama mai rubuta shirin kwamfuta na cikakken lokaci", "Fahimtar matsalolin kasuwanci da sanin kayan AI sosai", "Mallakar cibiyar bayanai (data center)", "Samun mabiya da yawa a kafofin sada zumunta"], answer: 1, why: "Fahimtar kasuwanci tare da sanin kayan aiki su ne ginshiƙi." },
      { objective: "O1", q: "Tayi mai ƙarfi ya haɗa da:", options: ["Farashinku na kowace sa'a kawai", "Sunanku kawai", "Dogon jerin kowane kayan aiki", "Waɗanda kuke taimakawa, sakamakon da ta yaya"], answer: 3, why: "Waɗannan uku suna sa shi ya yi sarari." },
      { objective: "O1", q: "Fanni (niche) shi ne:", options: ["Farashi", "Wani nau'in samfurin AI", "Wani tsarin doka na kasuwanci", "Takamaiman nau'in abokin ciniki da kuka mai da hankali a kai"], answer: 3, why: "Mai da hankali yana sauƙaƙa tallace-tallace." },
      { objective: "O2", q: "Aikin gwaji (pilot) shi ne:", options: ["Aikin tuƙa jirgin sama", "Ƙaramin aikin gwaji don nuna cewa wani abu yana aiki", "Doguwar kwangila", "Takardar haraji"], answer: 1, why: "Ayyukan gwaji suna gina shaida." },
      { objective: "O2", q: "Ya kamata aikin gwaji ya kasance da:", options: ["Manufofi goma", "Babu manufa", "Sakamako ɗaya da za a iya aunawa da lambobin kafin da bayan", "Tambari (logo) kawai"], answer: 2, why: "Lambobi suna sa shaida ta gamsar." },
      { objective: "O2", q: "Kafin ku raba nazarin aiki, kuna buƙatar:", options: ["Rubutaccen izinin abokin ciniki", "Babu komai", "Amincewar AI", "Amincewar abokin hamayya"], answer: 0, why: "Ku girmama sirri da amincewar abokin ciniki." },
      { objective: "O3", q: "Hidimomin da aka tsara sun fi sa'o'i marasa iyaka domin:", options: ["Suna hana haraji", "Koyaushe sun fi arha", "Sun fi sauƙi ga abokan ciniki su fahimta su saya", "Ba sa buƙatar aiki"], answer: 2, why: "Abubuwan da za a kawo da farashi masu sarari suna taimakon abokan ciniki su yanke shawara." },
      { objective: "O3", q: "Hidimar Binciken AI (AI Audit) tana kawo:", options: ["Duba kasuwancin da manyan shawarwarin AI", "Sabon shafin intanet", "Shigar da takardun haraji", "Shawarar doka"], answer: 0, why: "Wannan ita ce manufar binciken." },
      { objective: "O3", q: "Lokacin sanya farashi, ku haɗa lokacin:", options: ["Babu wani ƙari", "Dubawa da biyo baya", "Tafiya kawai", "Hutun shan shayi kawai"], answer: 1, why: "Lokacin da ba a ƙidaya ba yana cinye riba." },
      { objective: "O3", q: "Masu ba da shawara masu sana'ar kansu yawanci suna biyan:", options: ["Kuɗin lasisi kawai", "Babu haraji", "Harajin sayarwa kawai", "Harajin sana'ar kai, kuma sau da yawa harajin ƙiyasi duk bayan wata uku"], answer: 3, why: "Cibiyar haraji ta IRS ga masu sana'ar kansu tana bayanin haka." },
      { objective: "O4", q: "Gajeren taron koyarwa kyauta yana taimaka muku:", options: ["Haɗuwa da masu kasuwanci da nuna abin da kuka sani", "Guje wa abokan ciniki", "Tattara kalmomin sirri", "Tsallake takardun tayi"], answer: 0, why: "Koyarwa tana gina amincewa." },
      { objective: "O4", q: "Imel na tuntuɓa na kasuwanci dole ya ƙunshi:", options: ["Tabbacin sakamako", "Kalmar sirrin abokin ciniki", "Wa'adin ƙarya", "Adireshinku na zahiri da hanyar dakatar da karɓar saƙo (opt-out)"], answer: 3, why: "Waɗannan su ne muhimman ƙa'idojin CAN-SPAM." },
      { objective: "O5", q: "A binciken AI, kuna auna ra'ayoyi kan:", options: ["Yadda suke tashe a yanzu", "Launi da salon rubutu", "Lokacin da ake ajiyewa, kuɗi, sauƙi da haɗari", "Kayan aikin da kuka fi so"], answer: 2, why: "Waɗannan suna nuna ra'ayoyin da suka cancanci a yi." },
      { objective: "O5", q: "Kafin ku nemi AI ya taimaka jera rubuce-rubucen bincike, ya kamata ku:", options: ["Ƙara bayanan bankinsu", "Cire sunan kasuwancin da bayanan sirri", "Saka su a intanet", "Aika su ga kowa ta imel"], answer: 1, why: "Ku kare bayanan abokin ciniki." },
      { objective: "O5", q: "Kowace shawara ya kamata ta haɗa da:", options: ["Babu wani abu", "Tabbacin sakamako", "Shaidar baki ta bogi", "Matakin kariya, kamar wane ne zai duba abin da AI ya fitar"], answer: 3, why: "Matakan kariya suna sa amfani da AI ya zama lafiya." },
      { objective: "O6", q: "Takardar tayi ya kamata ta bayyana halin da abokin ciniki yake ciki:", options: ["Ko kaɗan ba", "Da kalmomin ƙwararru masu wuya", "A kalmominsa", "Da labarin abokin hamayya"], answer: 2, why: "Kalmominsa suna nuna cewa kun saurara." },
      { objective: "O6", q: "Rubutacciyar yarjejeniya tana ƙunsa:", options: ["Iyakar aiki, farashi, biya, jadawali, mallaka da sirri", "Tambarinku kawai", "Ranar farawa kawai", "Babu komai"], answer: 0, why: "Waɗannan suna hana rikici." },
      { objective: "O6", q: "Wane ne ya kamata ya duba samfurin yarjejeniyarku?", options: ["AI kaɗai", "Lauya", "Abokan cinikin abokin cinikinku", "Babu kowa"], answer: 1, why: "Takardun doka suna buƙatar dubawar ƙwararre." },
      { objective: "O6", q: "Ga kayan aikin da ke riƙe bayanan abokin ciniki, ya fi kyau a yi amfani da:", options: ["Asusunku na kanku", "Asusun abokin ciniki na kansa", "Asusun jama'a da ake rabawa", "Kowane kayan aiki kyauta"], answer: 1, why: "Abokin ciniki yana ci gaba da riƙe ikon bayanansa." },
      { objective: "O6", q: "A ƙarshen aiki, ya kamata bayanan abokin ciniki su kasance:", options: ["An goge su ko an mayar da su", "An riƙe su har abada", "An raba su da sauran abokan ciniki", "An saka su a intanet"], answer: 0, why: "Kada ku riƙe bayanan da ba ku ƙara buƙata ba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      0,
      1,
      3,
      4,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Fanni da tayi",
        objective: "O1",
        notYet: "Tayin ba shi da sarari ko ba shi da takamaiman abokin ciniki.",
        meets: "Jimla ɗaya da ke faɗin su wa, sakamakon da ta yaya.",
        exceeds: "Yana amfani da kalmomin da abokan ciniki a fannin suke amfani da su a zahiri."
      },
      {
        name: "Hidimomin da aka tsara",
        objective: "O3",
        notYet: "Hidimomi ƙasa da uku, ko farashin da babu lissafi a bayansa.",
        meets: "Hidimomi uku masu abubuwan da za a kawo, lokaci, abin da ake buƙata daga abokin ciniki da farashi, an duba lissafi.",
        exceeds: "Ya haɗa lokacin dubawa da na biyo baya kuma yana bayyana amfanin ga abokin ciniki."
      },
      {
        name: "Binciken AI",
        objective: "O5",
        notYet: "Babu takardar tambayoyi, ko shawarwari ba tare da maki ko matakan kariya ba.",
        meets: "Takardar tambayoyi 10, bincike ɗaya na gaske, manyan amfani uku da aka auna tare da matakan kariya.",
        exceeds: "Shawarwarin suna farawa da nasarori masu sauri kuma suna nuna lokacin da ake sa ran ajiyewa."
      },
      {
        name: "Takardar tayi",
        objective: "O6",
        notYet: "Takardar tayin ta gama-gari ce ko babu iyakar aiki ko farashi.",
        meets: "Shafi ɗaya mai halin da abokin ciniki yake ciki a kalmominsa, iyakar aiki, farashi da jadawali.",
        exceeds: "Ya haɗa sakamakon da za a iya aunawa da yadda za a duba shi."
      },
      {
        name: "Ƙa'idojin bayanan abokan ciniki",
        objective: "O6",
        notYet: "Babu rubutattun ƙa'idoji, ko bayanan sirri sun shiga AI.",
        meets: "Rubutattun ƙa'idoji: izini, asusun abokin ciniki na kansa, ana goge bayanai ko a mayar da su a ƙarshe.",
        exceeds: "Ya kuma bayyana waɗanne kayan AI ne za su iya riƙe bayanan abokan ciniki da duba sharuɗɗansu."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka yi aikin gwaji ko binciken da aka biya tare da kasuwanci na gaske cikin kwanaki 60 (binciken biyo baya)",
      "Abokan ciniki na farko masu biya, da abokan cinikin da suka dawo ko aka turo ta shawarwarin wasu",
      "Masu koyo da suka fara wani kwas na Koach Learn na 'yan kasuwa cikin kwanaki 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta mai mataimakin AI kyauta, spreadsheet da imel",
      "Mai kasuwanci na gaske ɗaya (ko aboki da ke yin kamar shi ne) don binciken",
      "Samfurin takardar tayi mai shafi ɗaya",
      "Kusan minti 60 zuwa 75 don darussa da gwaje-gwaje, da kuma taron binciken"
    ],
    facilitatorNotes: [
      "Ku haɗa masu koyo bibbiyu su yi wasan kwaikwayon hirar bincike kafin su haɗu da mai kasuwanci na gaske.",
      "Ku jaddada cewa sakamakon ayyukan gwaji da nazarin aiki dole su zama na gaske kuma a raba su da rubutaccen izini kawai.",
      "Ku duba cewa an cire sunayen abokan ciniki da bayanan sirri kafin rubuce-rubuce su shiga AI.",
      "Ku tura tambayoyin haraji da yarjejeniya zuwa majiyoyin hukuma, akanta da lauya.",
      "Ku ba da maki ga kayan farawa da ma'aunin rubric, layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
