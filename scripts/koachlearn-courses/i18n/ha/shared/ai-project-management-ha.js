"use strict";

// Koach Learn course, Hausa (ha) translation of shared/ai-project-management.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

module.exports = {
  id: "ai-project-management-ha",
  lang: "ha",
  translationOf: "ai-project-management",
  category: "Veterans (military)",
  name: "Gudanar da Ayyuka (Project Management) da AI",
  skills: "Rubuta takardar kafa aiki (charter) da AI, Rarraba aiki zuwa WBS, Shirya jadawali mai manyan matakai, Raba ayyuka da tebur ɗin RACI, Riƙe rajistar haɗari, Rubuta rahoton ci gaba da darussan da aka koya",
  outcome: "amfani da mataimakin AI don tsarawa da gudanar da ƙaramin aiki (project) daga farko har ƙarshe: takardar kafa aiki mai shafi ɗaya, rarraba aiki, jadawali mai manyan matakai, tebur ɗin RACI, rajistar haɗari, rahoton ci gaba na kowane mako da rufe aiki da darussan da aka koya, kuna duba kowane daftarin AI da kanku.",
  about: [
    "Manajojin ayyuka (project managers) suna tsara aikin, su shirya mutane, kuma su sanar da kowa har aikin ya ƙare. Mataimakan AI kamar ChatGPT, Microsoft Copilot da Google Gemini suna iya rubuta daftarin takardun cikin mintuna, don haka lokacinku yana tafiya kan yanke shawara da mutane.",
    "Wannan kwas ɗin na tsoffin sojoji ne da ke shiga ayyukan gudanarwa na farar hula (da yawa sun riga sun jagoranci ayyukan soja, jigilar kaya da ƙungiyoyi), mahalarta shirye-shiryen horar da ma'aikata da ke neman aikin mai tsarawa ko mataimakin gudanar da aiki, da duk wanda ke jagorantar aiki a wurin aiki ko a cikin al'umma.",
    "Za ku tsara aiki ɗaya na gaske ko na atisaye daga takardar kafa aiki har rufewa. Kowane darasi yana ɗaukar kusan minti biyar, tare da aikin \"Gwada yanzu\". Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku tsara aiki na gaske ko na atisaye na mako huɗu zuwa goma sha biyu (misali bikin neman aiki na al'umma, ƙaura ofis ko buɗe shafin intanet) da taimakon AI: takardar kafa aiki mai shafi ɗaya, rarraba aiki (WBS), jadawali mai aƙalla manyan matakai huɗu, tebur ɗin RACI, rajistar haɗari mai haɗari biyar, rahoton ci gaba na mako ɗaya, da samfurin darussan da aka koya. Ku yi alama a kowane wuri da kuka gyara AI.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Tsoffin sojoji da ke shiga ayyukan gudanarwa na farar hula, mahalarta shirye-shiryen horar da ma'aikata da ke neman aikin mai tsarawa ko mataimakin gudanar da aiki, da duk wanda ke jagorantar aiki a wurin aiki ko a cikin al'umma.",
    startingPoint: "Da yawa sun jagoranci ayyukan soja, jigilar kaya ko ƙungiyoyi, kuma suna iya tsara mutane da ayyuka. Yawancinsu ba su taɓa amfani da takardun gudanar da aiki na farar hula ba, kamar takardar kafa aiki, tebur ɗin RACI ko rajistar haɗari, ko amfani da AI don rubuta su.",
    gap: "Masu ɗaukar aiki na farar hula suna sa ran ma'aikatan gudanar da aiki su shirya takardun tsari na yau da kullum da rahotannin ci gaba masu sarari. Masu koyo suna buƙatar tsara aiki daga takardar kafa aiki har rufewa da daftarin AI da suke dubawa da kansu, don su nuna ƙwarewar gudanar da aiki a hirar neman aiki da kuma a wurin aiki.",
    constraints: [
      "Lokaci: darussa na kusan minti biyar tare da gajerun ayyukan atisaye",
      "Na'urori: kwamfuta ko waya mai mataimakin AI kyauta da shirin tebur na lissafi (spreadsheet)",
      "Babu bayanan sirri na mai ɗaukar aiki ko na soja a cikin prompt na AI",
      "Dole a duba ƙiyasin AI da lambobinsa; dokokin takardar shaida (certification) da kuɗaɗensu daga pmi.org suke",
      "Kalmomi masu sauƙi na farar hula; ana fassara kalmomin soja, ba a ɗauka ana fahimtarsu ba"
    ],
    prerequisites: "Babu. Masu koyo da ba su saba da kayan AI ba za su iya fara ɗaukar kwas ɗin \"Introduction to AI and Digital Confidence\" (Gabatarwa ga AI da Ƙarfin Gwiwa a Fasahar Zamani)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku muhimman bayanan wani aiki na gaske ko na atisaye", action: "rubuta takardar kafa aiki mai shafi ɗaya da ke faɗin manufa, iyakar aiki, mai ɗaukar nauyi, kasafin kuɗi, ranar ƙarshe da ma'aunin nasara", standard: "an gyara kowane kuskuren AI, kuma an rubuta cewa mai ɗaukar nauyi ya amince" },
    { id: "O2", condition: "Farawa daga takardar kafa aikinku", action: "shirya rarraba aiki (WBS) da jadawali mai tsawon lokaci, ayyukan da suka dogara da juna, da manyan matakai", standard: "da aƙalla manyan matakai huɗu, kuma an duba ƙiyasin lokacin AI" },
    { id: "O3", condition: "Idan aka ba ku manyan ayyukan aikin", action: "gina tebur ɗin RACI da ke nuna wanda ke Aiwatarwa, wanda ke da Alhaki, wanda ake Tuntuɓa da wanda ake Sanarwa", standard: "da mutum ɗaya kacal mai Alhaki a kowane aiki, kuma aikin ya daidaita" },
    { id: "O4", condition: "Idan aka ba ku jerin haɗarin aiki da AI ya tattara", action: "auna haɗari biyar mafiya gaskiya, da zaɓar mataki da mai kula da kowanne", standard: "kuna amfani da gujewa, ragewa, mayarwa ga wani ko karɓa daidai" },
    { id: "O5", condition: "Don mako ɗaya na aikin", action: "rubuta rahoton ci gaba na rabin shafi mai launin matsayi na gaskiya (ja, rawaya ko kore) da shawarwarin da ake buƙata", standard: "an duba kowace rana da kowace lamba" },
    { id: "O6", condition: "A ƙarshen aiki", action: "gudanar da bitar darussan da aka koya ba tare da zargin kowa ba, da rufe aikin bisa takardar kafa aiki", standard: "an amsa dukkan tambayoyin bita guda huɗu, kuma an ajiye fayilolin" }
  ],
  chapters: [
    {
      name: "Babi na 1: Tsara aikin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Rubuta takardar kafa aiki (charter) da AI",
          minutes: 5,
          goal: "Rubuta takardar kafa aiki mai shafi ɗaya da ke bayyana manufar aikin, iyakarsa da nasararsa.",
          text: [
            "Takardar kafa aiki (project charter) kamar takardar haihuwar aikin ce. Tana faɗin dalilin aikin, abin da zai samar, abin da ke ciki da wanda ke waje da iyakarsa, wanene mai ɗaukar nauyi, kimanin kasafin kuɗi da ranar ƙarshe, da yadda za ku san ya yi nasara. Tana kama da umarnin aikin soja (mission order): manufa, sakamakon ƙarshe, iyakoki.",
            "Ku ba AI bayanan gaskiya ku bar shi ya rubuta daftari: \"Ka rubuta takardar kafa aiki mai shafi ɗaya. Aiki: bikin neman aiki na tsoffin sojoji a cibiyar al'umma ranar 15 ga Maris. Manufa: masu ɗaukar aiki 30, masu halarta 200. Kasafin kuɗi: $3,000. Mai ɗaukar nauyi: daraktan cibiyar. Waje da iyaka: abinci sai dai kofi.\"",
            "Sannan ku gyara shi. AI yana iya ƙirƙirar lambobi, masu ruwa da tsaki ko manufofi. Kowane bayani dole ya zama naku. Ku sa mai ɗaukar nauyi ya amince da takardar kafin a fara aiki; wannan yana hana jayayya daga baya game da abin da aikin ya kamata ya yi."
          ],
          steps: ["Ku rubuta dalili, manufa, ranar ƙarshe, kasafin kuɗi da mai ɗaukar nauyi.", "Ku jera abin da ke ciki da wanda ke waje da iyakar aikin.", "Ku nemi AI ya rubuta daftarin takardar kafa aiki mai shafi ɗaya.", "Ku gyara duk abin da AI ya ƙirƙira.", "Ku sami amincewar mai ɗaukar nauyi."],
          words: [["Takardar kafa aiki (project charter)", "gajeriyar takarda da ke ba da izinin aiki kuma ke faɗin manufarsa, iyakarsa da ƙa'idojinsa."], ["Iyakar aiki (scope)", "aikin da aikin zai yi da wanda ba zai yi ba."], ["Mai ɗaukar nauyi (sponsor)", "mutumin da ke goyon bayan aikin kuma ke amincewa da shi."], ["Mai ruwa da tsaki (stakeholder)", "duk wanda aikin ya shafa ko yake da hannu a ciki."]],
          slides: [
            { title: "Takardar kafa aiki ita ce umarnin aiki", bullets: ["Dalili da manufa", "Iyaka: abin da ke ciki da wanda ke waje", "Mai ɗaukar nauyi, kasafin kuɗi, ranar ƙarshe, nasara"] },
            { title: "AI yana rubuta daftari daga bayananku", bullets: ["Ku ba shi lambobin gaskiya", "Ku nemi shafi ɗaya"] },
            { title: "Gyara da amincewa", bullets: ["Ku cire bayanan da aka ƙirƙira", "Mai ɗaukar nauyi ya amince kafin a fara aiki"] }
          ],
          tryIt: "Ku zaɓi aiki na gaske ko na atisaye. Ku rubuta muhimman bayanansa, ku sa AI ya rubuta daftarin takardar kafa aiki mai shafi ɗaya, sannan ku yi alama a duk abin da kuka gyara.",
          youCanNow: "rubuta takardar kafa aiki mai shafi ɗaya da taimakon AI.",
          quickCheck: [
            { objective: "O1", q: "Mene ne ma'anar iyakar aiki (scope) a takardar kafa aiki?", options: ["Yawan kuɗin da aikin zai ci", "Abin da aikin zai yi da wanda ba zai yi ba", "Su waye 'yan ƙungiyar", "Ranar da aikin zai ƙare"], answer: 1, why: "Iyakar aiki tana sanya bakin aikin: abin da ke ciki da wanda ke waje." },
            { objective: "O1", q: "Daftarin AI na takardar kafa aiki yana da kasafin kuɗin da ba ku taɓa ba shi ba. Me za ku yi?", options: ["Ku bar shi domin yana kama da daidai", "Ku goge layin kasafin kuɗi daga kowace takarda", "Ku sa ainihin kasafin kuɗi daga mai ɗaukar nauyi a maimakonsa, ku yi alama a gyaran", "Ku nemi ƙungiyar ta yi zaɓe kan kasafin kuɗi"], answer: 2, why: "AI yana cike giɓi da tsammani; ainihin kasafin kuɗi daga mai ɗaukar nauyi yake." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rarraba aikin da shirya jadawalinsa",
          minutes: 6,
          goal: "Mayar da takardar kafa aiki zuwa rarraba aiki (WBS) da jadawali mai manyan matakai.",
          text: [
            "Rarraba aiki (work breakdown structure, WBS) yana raba dukkan aikin zuwa ƙananan sassa har kowane sashe ya zama aikin da mutum ɗaya zai iya yi cikin 'yan kwanaki. Don bikin neman aiki: wuri, masu ɗaukar aiki, talla, masu sa kai, shirin ranar biki, bibiya, kowanne a raba shi zuwa ayyuka.",
            "Ku tambayi AI: \"Daga wannan takardar kafa aiki, ka shirya WBS mai matakai da ayyuka. Sannan ka ƙiyasta tsawon lokacin kowane aiki, ka jera ayyukan da suka dogara da wasu.\" Dogaro yana da muhimmanci: ba za ku iya buga takardun talla ba sai an tabbatar da wuri da rana.",
            "Ku mayar da shi jadawali a shirin spreadsheet ko kayan aiki kyauta, kuna aiki daga ranar ƙarshe zuwa baya. Ku yi alama a manyan matakai (milestones), wato manyan wuraren dubawa kamar \"an kama wuri\" ko \"masu ɗaukar aiki 20 sun tabbatar\". Ku duba ƙiyasin lokacin AI da gogewarku; yakan yi tsammanin abu zai yi sauri fiye da gaskiya."
          ],
          steps: ["Ku nemi AI ya ba ku WBS mai matakai da ayyuka.", "Ku raba duk aikin da ya fi 'yan kwanaki.", "Ku ƙara tsawon lokaci da ayyukan da suka dogara da juna.", "Ku shirya jadawali daga ranar ƙarshe zuwa baya.", "Ku yi alama a aƙalla manyan matakai huɗu."],
          words: [["WBS", "work breakdown structure (rarraba aiki): dukkan aikin da aka raba zuwa ƙananan ayyuka."], ["Dogaro (dependency)", "aikin da ba zai iya farawa ba sai wani ya ƙare."], ["Babban mataki (milestone)", "muhimmin wurin dubawa a cikin aiki."]],
          slides: [
            { title: "Rarraba aiki (WBS)", bullets: ["Dukkan aiki zuwa matakai zuwa ayyuka", "Kowane aiki: mutum ɗaya, 'yan kwanaki"] },
            { title: "Tsawon lokaci da dogaro", bullets: ["Tsawon lokacin da kowane aiki ke ɗauka", "Abin da dole ya ƙare da farko"] },
            { title: "Jadawali da manyan matakai", bullets: ["Ku yi aiki daga ranar ƙarshe zuwa baya", "Ku yi alama a manyan wuraren dubawa", "Ƙiyasin AI yakan yi sauri fiye da gaskiya"] }
          ],
          tryIt: "Ku yi amfani da AI don shirya WBS na aikinku, sannan ku gina jadawali mai sauƙi a spreadsheet mai tsawon lokaci, dogaro da aƙalla manyan matakai huɗu.",
          youCanNow: "raba aiki zuwa ƙananan ayyuka da shirya jadawalinsu da manyan matakai.",
          quickCheck: [
            { objective: "O2", q: "Mene ne babban mataki (milestone)?", options: ["Muhimmin wuri da ke nuna an gama babban sashe", "Aikin da ya fi tsawo a jadawali", "Taro da mai ɗaukar nauyi", "Haɗarin da ya riga ya faru"], answer: 0, why: "Babban mataki yana nuna muhimmin sakamako, kamar \"an kama wuri\"." },
            { objective: "O2", q: "WBS ɗinku yana da aikin da ake kira \"Tsara bikin\" wanda zai ɗauki mako shida. Me za ku yi?", options: ["Ku bar shi a matsayin aiki ɗaya", "Ku cire shi daga tsarin", "Ku ba mai ɗaukar nauyi shi", "Ku raba shi zuwa ƙananan ayyuka da mutum ɗaya zai iya yi cikin 'yan kwanaki"], answer: 3, why: "Ayyukan WBS ya kamata su zama ƙanana ta yadda mutum ɗaya zai yi su cikin 'yan kwanaki." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Raba ayyuka da tebur ɗin RACI",
          minutes: 5,
          goal: "Gina tebur ɗin RACI don kowa ya san wanda ke yi, wanda ke yanke shawara da wanda ake sanarwa.",
          text: [
            "Ruɗani game da wanda ke yin me yana nutsar da ayyuka. Tebur ɗin RACI yana jera ayyuka a gefe da mutane a sama, kuma yana yi wa kowane akwati alama: R don Responsible (mai aiwatarwa, wanda ke yin aikin), A don Accountable (mai alhaki, wanda ke da sakamakon kuma yake amincewa; mutum ɗaya kacal a kowane aiki), C don Consulted (wanda ake tuntuɓa, yana ba da shawara) da I don Informed (wanda ake sanarwa, ana sabunta masa labari).",
            "Ku tambayi AI: \"Ka yi tebur ɗin RACI don waɗannan ayyuka da matsayi: [ayyuka], [mutane ko matsayi].\" Sannan ku duba: shin kowane aiki yana da A ɗaya kacal? Shin akwai wanda R suka yi masa yawa? Shin akwai wanda ake tuntuɓa kan komai, yana rage saurin abubuwa?",
            "Ku raba RACI da ƙungiya da mai ɗaukar nauyi. Idan tambayoyi suka taso, kamar wa ke amincewa da takardar talla, ku nuna teburin."
          ],
          steps: ["Ku jera manyan ayyuka da mutane ko matsayi.", "Ku nemi AI ya rubuta daftarin tebur ɗin RACI.", "Ku duba cewa kowane aiki yana da A ɗaya kacal.", "Ku daidaita R ta yadda babu wanda aiki ya yi masa yawa.", "Ku raba shi da ƙungiya da mai ɗaukar nauyi."],
          words: [["Tebur ɗin RACI", "teburin da ke nuna wanda ke Aiwatarwa (R), mai Alhaki (A), wanda ake Tuntuɓa (C) da wanda ake Sanarwa (I) a kowane aiki."], ["Mai alhaki (Accountable)", "mutum ɗaya da ke da sakamakon kuma yake amincewa."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsible, mai aiwatarwa, yana yin aikin", "A: Accountable, mai alhaki; ɗaya kacal", "C: Consulted, ana tuntuɓa; I: Informed, ana sanarwa"] },
            { title: "Ku duba teburin", bullets: ["A ɗaya kacal a kowane aiki", "Babu wanda R suka yi masa yawa", "Ba kowa ake tuntuɓa kan komai ba"] },
            { title: "Ku yi amfani da shi", bullets: ["Ku raba da ƙungiya da mai ɗaukar nauyi", "Ku nuna shi idan tambayoyi suka taso"] }
          ],
          tryIt: "Ku sa AI ya rubuta daftarin tebur ɗin RACI na manyan ayyukan aikinku. Ku gyara shi ta yadda kowane aiki yana da A ɗaya kacal, kuma aikin ya daidaita.",
          youCanNow: "gina da duba tebur ɗin RACI da ke bayyana matsayin kowa a sarari.",
          quickCheck: [
            { objective: "O3", q: "A tebur ɗin RACI, mene ne ma'anar \"C\"?", options: ["An gama (Completed)", "Ana tuntuɓa (Consulted): ana neman shawararsa kafin yanke shawara", "Mai iko (Controlled): yana yin dukkan aikin", "An soke (Cancelled)"], answer: 1, why: "Mutanen da ake tuntuɓa suna ba da shawara kafin aikin ko shawarar." },
            { objective: "O3", q: "An yi wa mutane biyu alamar mai alhaki (Accountable) a aiki ɗaya. Me za ku yi?", options: ["Ku zaɓi mutum ɗaya ya zama mai alhaki", "Ku bar su duka biyu don a yi aikin", "Ku yi musu alamar ana sanarwa duka biyu", "Ku cire aikin"], answer: 0, why: "Kowane aiki yana buƙatar mai alhaki ɗaya kacal da ke da sakamakon." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Tsara aikin",
        questions: [
          { objective: "O1", q: "Me takardar kafa aiki take bayyanawa?", options: ["Odar abincin rana na ƙungiya kawai", "Takardar harajin kamfani", "Dalilin aikin, iyakarsa, mai ɗaukar nauyi, kasafin kuɗi, ranar ƙarshe da nasara", "Kowane aiki dalla-dalla"], answer: 2, why: "Takardar kafa aiki tana sanya harsashin aikin." },
          { objective: "O1", q: "AI ya ƙara manufar \"masu ɗaukar aiki 100\" a takardar kafa aikinku, amma ku kun ce 30. Me za ku yi?", options: ["Ku gyara shi zuwa ainihin manufarku", "Ku bar shi", "Ku ɗauki matsakaicinsu", "Ku goge takardar kafa aikin"], answer: 0, why: "Kowane bayani a takardar kafa aiki dole ya zama naku." },
          { objective: "O2", q: "Dogaro (dependency) shi ne:", options: ["Ɗan ƙungiya", "Layin kasafin kuɗi", "Babban mataki", "Aikin da ba zai iya farawa ba sai wani ya ƙare"], answer: 3, why: "Dogaro yana sanya jerin yadda ake yin aiki." },
          { objective: "O3", q: "Mutane nawa ya kamata su zama masu alhaki (A) a aiki ɗaya a tebur ɗin RACI?", options: ["Kowa", "Ɗaya kacal", "Babu", "Aƙalla biyar"], answer: 1, why: "Mai shi ɗaya yana hana ruɗani." },
          { objective: "O2", q: "AI ya ƙiyasta cewa kama wurin biki yana ɗaukar awa ɗaya. Bisa wannan kwas ɗin, ya kamata ku:", options: ["Karɓe shi", "Duba shi da gogewarku; ƙiyasin AI yakan yi sauri fiye da gaskiya", "Mayar da shi sifili", "Tsallake shirya jadawali"], answer: 1, why: "Ku yi amfani da hankalinku kan tsawon lokaci." }
        ]
      }
    },
    {
      name: "Babi na 2: Gudanar da aikin da rufe shi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Riƙe rajistar haɗari",
          minutes: 5,
          goal: "Gano, auna da tsara matakan da za a ɗauka kan haɗarin aiki da taimakon AI.",
          text: [
            "Haɗari (risk) wani abu ne da zai iya faruwa kuma ya shafi aikin. Rajistar haɗari (risk register) tana jera kowane haɗari, yiwuwar faruwarsa, girman illarsa, shirin mataki da mai kula da shi.",
            "Ku tambayi AI: \"Ka jera haɗari goma na wannan aiki [ku liƙa takardar kafa aiki], ka auna yiwuwa da illa a matsayin ƙasa, matsakaici ko sama, ka ba da shawarar mataki ga kowanne.\" Matakai: gujewa, ragewa, mayarwa ga wani (misali, inshora ko kwangila) ko karɓa tare da shirin ko-ta-kwana.",
            "Ku bar haɗarin da suke gaskiya ga aikinku kawai, ku ƙara duk wanda AI ya manta, kuma ku sake duba rajistar kowane mako. Masu tsara ayyukan soja suna kiran wannan tunani kan hanyoyi daban-daban da abin da zai biyo baya (branches and sequels); farar hula suna kiransa gudanar da haɗari."
          ],
          steps: ["Ku nemi AI ya tattara haɗari daga takardar kafa aikinku.", "Ku auna yiwuwa da illa.", "Ku zaɓi mataki: gujewa, ragewa, mayarwa ga wani ko karɓa.", "Ku ba kowane haɗari mai kula da shi.", "Ku sake duba rajistar kowane mako."],
          words: [["Haɗari (risk)", "wani abu da zai iya faruwa kuma ya shafi aikin."], ["Rajistar haɗari (risk register)", "jerin haɗari tare da ma'aunansu, matakai da masu kula da su."], ["Rage haɗari (mitigation)", "matakan rage yiwuwar haɗari ko illarsa."]],
          slides: [
            { title: "Ginshiƙan rajistar haɗari", bullets: ["Haɗari, yiwuwa, illa", "Mataki da mai kula"] },
            { title: "Matakai huɗu", bullets: ["Gujewa ko ragewa", "Mayarwa ga wani (inshora, kwangila)", "Karɓa tare da shirin ko-ta-kwana"] },
            { title: "Ku tsaya kan gaskiya", bullets: ["Ku cire haɗarin da ba su shafa ba", "Ku ƙara abin da AI ya manta", "Ku sake duba kowane mako"] }
          ],
          tryIt: "Ku sa AI ya tattara haɗari na aikinku. Ku bar biyar mafiya gaskiya, ku auna su, ku zaɓi matakai, ku ba da masu kula da su.",
          youCanNow: "gina da kula da rajistar haɗari da taimakon AI.",
          quickCheck: [
            { objective: "O4", q: "Wane mataki ne kan haɗari ke nufin rage yiwuwarsa ko illarsa?", options: ["Gujewa", "Mayarwa ga wani", "Ragewa", "Karɓa"], answer: 2, why: "Ragewa yana rage yiwuwa ko lalacewar haɗari." },
            { objective: "O4", q: "AI ya jera haɗari 25 da za su iya faruwa a bikin neman aikinku. Me za ku yi?", options: ["Ku sa dukkan 25 a rajistar", "Ku yi watsi da su duka", "Ku ɗauki wanda AI ya fara jerawa", "Ku bar biyar mafiya gaskiya, ku auna su ku ba da masu kula da su"], answer: 3, why: "Rajista mai amfani tana mai da hankali kan haɗari mafiya gaskiya, kowanne da mataki da mai kula." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Rubuta rahoton ci gaba da mutane ke karantawa",
          minutes: 5,
          goal: "Rubuta gajeren rahoton ci gaba na mako mai launin matsayi a sarari: ja, rawaya ko kore.",
          text: [
            "Rahoton ci gaba (status report) yana sanar da mai ɗaukar nauyi da ƙungiya. Ku sa shi ya zama rabin shafi: matsayi gaba ɗaya (kore yana kan hanya, rawaya yana cikin haɗari, ja ya kauce hanya), abin da aka gama a wannan makon, abin da ke tafe, haɗari da matsaloli, da shawarwarin da ake buƙata daga mai ɗaukar nauyi.",
            "Ku liƙa sabuntawar jadawalinku da bayananku a AI, ku tambaya: \"Ka rubuta rahoton ci gaba na mako na rabin shafi mai launin matsayi gaba ɗaya, abubuwan da aka cimma, matakai na gaba, haɗari da matsaloli, da shawarwarin da ake buƙata. Ka faɗa kai tsaye.\"",
            "Ku faɗi gaskiya game da rawaya da ja. Mummunan labari da wuri kyauta ce: yana ba mai ɗaukar nauyi lokacin taimakawa. Ɓoye matsaloli har ranar ƙarshe ita ce hanya mafi sauri ta rasa amana. Ku duba kowace rana da kowace lamba da AI ya rubuta."
          ],
          steps: ["Ku sabunta jadawali da rajistar haɗari.", "Ku liƙa bayanai da sabuntawa a AI.", "Ku nemi rahoto na rabin shafi mai launin matsayi.", "Ku duba kowace rana da kowace lamba.", "Ku aika shi a rana ɗaya a kowane mako."],
          words: [["Rahoton ci gaba (status report)", "sabuntawa na yau da kullum kan ci gaban aiki, haɗarinsa da buƙatunsa."], ["Matsala (issue)", "matsalar da ke faruwa yanzu, ba kamar haɗari da zai iya faruwa ba."], ["Matsayin RAG", "red, amber, green: ja, rawaya (amber) ko kore, alama mai sauri ta lafiyar aiki."]],
          slides: [
            { title: "Rabin shafi", bullets: ["Launin matsayi: kore, rawaya, ja", "Abin da aka gama a makon nan da matakai na gaba", "Haɗari, matsaloli, shawarwarin da ake buƙata"] },
            { title: "AI yana rubuta daftari daga bayananku", bullets: ["Ku liƙa sabuntawar jadawali", "Ku nemi kalmomi kai tsaye", "Ku duba ranaku da lambobi"] },
            { title: "Mummunan labari da wuri", bullets: ["Yana ba mai ɗaukar nauyi lokacin taimakawa", "Ɓoye matsaloli yana rasa amana"] }
          ],
          tryIt: "Ku rubuta rahoton ci gaba na mako na aikinku (na gaske ko mako na 3 na tunani) da taimakon AI. Ku sa launin matsayi na gaskiya da aƙalla shawara ɗaya da ake buƙata.",
          youCanNow: "rubuta rahoton ci gaba na mako mai sarari kuma na gaskiya da taimakon AI.",
          quickCheck: [
            { objective: "O5", q: "Mene ne matsayin rawaya yawanci yake nufi?", options: ["An gama aikin", "Akwai matsalar da za ta iya shafar tsarin idan ba a gyara ta ba", "Komai yana kan hanya", "An soke aikin"], answer: 1, why: "Rawaya gargaɗi ne: yana cikin haɗari amma har yanzu ana iya gyarawa." },
            { objective: "O5", q: "Kuna buƙatar mai ɗaukar nauyi ya amince da ƙarin kuɗi a wannan makon. Me za ku yi a rahoton ci gaba?", options: ["Ku cire shi don rahoton ya ci gaba da zama kore", "Ku sa shi a shafi na uku", "Ku ambace shi da baki kawai a wata mai zuwa", "Ku jera shi a sarari ƙarƙashin shawarwarin da ake buƙata"], answer: 3, why: "Shawarwarin da ake buƙata ya kamata su zama masu sauƙin gani don mai ɗaukar nauyi ya ɗauki mataki." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Rufe aikin da tattara darussan da aka koya",
          minutes: 5,
          goal: "Rufe aiki yadda ya kamata da gudanar da bitar darussan da aka koya.",
          text: [
            "Ayyuka da yawa suna ɓacewa a hankali kawai. Rufewa mai kyau tana tabbatar da an cimma manufofi (ku kwatanta da takardar kafa aiki), tana miƙa duk abin da zai ci gaba, tana biyan kuɗaɗen ƙarshe, tana gode wa ƙungiya, kuma tana ajiye fayiloli inda wasu za su same su.",
            "Bitar darussan da aka koya (lessons learned), kamar bitar bayan aiki ta soja (after-action review), tana tambaya: me muka tsara, me ya faru, me yasa, kuma me ya kamata mu yi daban a gaba? Ku tattara ra'ayoyin kowa, har da abin da ya yi kyau.",
            "AI zai iya tsara ra'ayoyin: \"Ka haɗa waɗannan ra'ayoyin darussan da aka koya zuwa jigogi, ka rubuta shawarwari uku don ayyuka na gaba.\" Ku sa ya zama ba tare da zargin kowa ba, ku mai da hankali kan tsarin aiki, kuma ku duba cewa taƙaitawar ta yi adalci. Idan kuna son ci gaba a gudanar da ayyuka, Project Management Institute (PMI, cibiyar gudanar da ayyuka) tana ba da takardun shaida kamar CAPM, PMP da PMI-CPMAI mai mai da hankali kan AI; ku duba pmi.org don sharuɗɗa da kuɗaɗe na yanzu."
          ],
          steps: ["Ku kwatanta sakamako da manufofin takardar kafa aiki.", "Ku miƙa aikin da ke ci gaba, ku biya kuɗaɗen ƙarshe.", "Ku gudanar da bitar darussan da aka koya ba tare da zargin kowa ba.", "Ku yi amfani da AI don haɗa ra'ayoyi da rubuta daftarin shawarwari.", "Ku ajiye dukkan fayiloli, ku gode wa ƙungiya."],
          words: [["Rufe aiki (closeout)", "ƙarshen aiki a hukumance."], ["Darussan da aka koya (lessons learned)", "abin da ƙungiya ta koya wanda ya kamata ya canja yadda ake gudanar da ayyuka na gaba."], ["Bitar bayan aiki (after-action review)", "dubawa baya mai tsari: abin da aka tsara, abin da ya faru, dalili, abin da za a canja."]],
          slides: [
            { title: "Ku rufe shi yadda ya kamata", bullets: ["Ku kwatanta sakamako da takardar kafa aiki", "Ku miƙa, ku biya kuɗaɗe, ku ajiye fayiloli", "Ku gode wa ƙungiya"] },
            { title: "Darussan da aka koya", bullets: ["Abin da aka tsara, abin da ya faru, dalili, canji", "Har da abin da ya yi kyau", "Ba tare da zargin kowa ba"] },
            { title: "Ku ci gaba a sana'arku", bullets: ["Takardun shaida na PMI: CAPM, PMP, PMI-CPMAI", "Ku duba pmi.org don ƙa'idoji da kuɗaɗe na yanzu"] }
          ],
          sources: [{ name: "Project Management Institute: takardun shaida (certifications)", url: "https://www.pmi.org/certifications" }],
          tryIt: "Aikin ƙarshe: ku kammala tsarin aikinku da takardar kafa aiki, WBS, jadawali mai manyan matakai, RACI, rajistar haɗari da rahoton ci gaba ɗaya, sannan ku rubuta samfurin darussan da aka koya mai tambayoyin bita guda huɗu. Ku yi alama a kowane wuri da kuka gyara AI.",
          youCanNow: "tsara, gudanar da rufe aiki ta amfani da AI don rubuta daftarin takardu yayin da ku ne kuke yanke shawara.",
          quickCheck: [
            { objective: "O6", q: "Mene ne manufar bitar darussan da aka koya?", options: ["Neman wanda za a zarga", "Inganta tsarin aiki don aiki na gaba", "Ƙare aiki ba tare da takardu ba", "Ba da kyaututtuka"], answer: 1, why: "Darussan da aka koya ba su da zargi, kuma suna mai da hankali kan abin da za a canja a gaba." },
            { objective: "O6", q: "An gama aikin. Me za ku yi kafin ku ce an rufe shi?", options: ["Ku goge fayilolin aikin", "Ku fara aiki na gaba nan take", "Ku kwatanta sakamako da takardar kafa aiki ku ajiye fayilolin", "Ku aika saƙon godiya ta tes kawai"], answer: 2, why: "Rufe aiki yana duba sakamako da takardar kafa aiki kuma yana ajiye bayanan." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Gudanar da aikin da rufe shi",
        questions: [
          { objective: "O4", q: "Mene ne bambanci tsakanin haɗari da matsala?", options: ["Babu bambanci", "Matsaloli koyaushe abu ne mai kyau", "Haɗari game da kuɗi ne kawai", "Haɗari zai iya faruwa; matsala tana faruwa yanzu"], answer: 3, why: "Haɗari abu ne mai yiwuwa; matsaloli suna faruwa yanzu." },
          { objective: "O4", q: "Sayen inshora don wata asara da za ta iya faruwa wane mataki ne kan haɗari?", options: ["Mayarwa ga wani", "Gujewa", "Karɓa", "Yin watsi"], answer: 0, why: "Inshora tana mayar da illar ga wani." },
          { objective: "O5", q: "Akwai yiwuwar aikinku zai kasa cimma wani babban mataki. Wane matsayi rahotonku ya kamata ya nuna?", options: ["Kore don kada a damu", "Babu matsayi", "Rawaya ko ja, da gaskiya", "Shunayya"], answer: 2, why: "Mummunan labari da wuri yana bar mai ɗaukar nauyi ya taimaka." },
          { objective: "O6", q: "Bitar darussan da aka koya ya kamata ta zama:", options: ["Neman wanda za a kora", "Abin da za a tsallake", "Game da abin da ya lalace kawai", "Ba tare da zargin kowa ba kuma mai mai da hankali kan tsarin aiki"], answer: 3, why: "Bita ba tare da zargi ba tana kawo ra'ayoyi na gaskiya." },
          { objective: "O6", q: "A ina ya kamata ku duba sharuɗɗa da kuɗaɗen takardun shaida na PMI na yanzu?", options: ["Wani dandalin intanet kawai", "Tsammanin AI", "pmi.org", "Takardar talla"], answer: 2, why: "Sharuɗɗan hukuma suna canjawa; ku duba majiyar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Gudanar da Ayyuka (Project Management) da AI",
    questions: [
      { objective: "O1", q: "Babban aikin manajan aiki shi ne:", options: ["Yin kowane aiki shi kaɗai", "Tsara aikin, shirya mutane da sanar da kowa", "Amincewa da kasafin kuɗi kawai", "Rubuta code"], answer: 1, why: "Manajojin ayyuka suna tsarawa, haɗa kai da sadarwa." },
      { objective: "O1", q: "A wannan kwas ɗin, aikin AI shi ne:", options: ["Rubuta daftarin takardu yayin da ku kuke yanke shawara", "Yanke kowace shawara", "Maye gurbin mai ɗaukar nauyi", "Amincewa da kasafin kuɗi"], answer: 0, why: "AI yana rubuta daftari; manajan aiki yana yanke shawara." },
      { objective: "O1", q: "Takardar kafa aiki ta fi kama da wace takardar soja?", options: ["Takardar neman hutu", "Jerin duba kayan sawa", "Umarnin aikin soja (mission order)", "Takardar albashi"], answer: 2, why: "Dukansu suna ba da manufa, sakamakon ƙarshe da iyakoki." },
      { objective: "O1", q: "Idan an jera \"abinci sai dai kofi\" a matsayin waje da iyaka, ma'anarsa:", options: ["Aikin ba zai samar da shi ba", "Shi ne babbar manufa", "Haɗari ne", "Babban mataki ne"], answer: 0, why: "Aikin da ke waje da iyaka ba sashe na aikin ba ne." },
      { objective: "O1", q: "Wa ya kamata ya amince da takardar kafa aiki kafin a fara aiki?", options: ["Babu kowa", "AI kawai", "Kowane ma'aikaci kawai", "Mai ɗaukar nauyi"], answer: 3, why: "Amincewar mai ɗaukar nauyi tana hana jayayya daga baya." },
      { objective: "O2", q: "WBS yana raba aiki zuwa:", options: ["Layukan kasafin kuɗi kawai", "Ƙananan ayyuka da mutum ɗaya zai iya yi cikin 'yan kwanaki", "Hotunan ƙungiya", "Ɗakunan ofis"], answer: 1, why: "Ƙananan ayyuka sun fi sauƙin tsarawa da bibiya." },
      { objective: "O2", q: "Ba za ku iya buga takardun talla ba sai an tabbatar da wuri. Wannan shi ne:", options: ["Babban mataki", "Dogaro (dependency)", "Mai ɗaukar nauyi", "Mataki kan haɗari"], answer: 1, why: "Wani aiki ya dogara da ƙarewar wani." },
      { objective: "O2", q: "\"Masu ɗaukar aiki 20 sun tabbatar\" misali ne mai kyau na:", options: ["Tsawon lokacin aiki", "Matsayi a RACI", "Launin matsayi", "Babban mataki"], answer: 3, why: "Manyan matakai muhimman wuraren dubawa ne." },
      { objective: "O2", q: "Yawanci hanya mafi kyau ta gina jadawali ita ce:", options: ["Yin aiki daga ranar ƙarshe zuwa baya", "Tsammani", "Farawa da aikin ƙarshe kawai", "Tsallake ranaku"], answer: 0, why: "Yin aiki zuwa baya yana nuna abin da dole ya fara a wane lokaci." },
      { objective: "O3", q: "A RACI, \"R\" yana nufin:", options: ["Mai ritaya (Retired)", "Mai bita kawai (Reviewer)", "Mai aiwatarwa (Responsible): yana yin aikin", "An ƙi (Rejected)"], answer: 2, why: "R shi ne mutumin da ke yin aikin." },
      { objective: "O3", q: "A RACI, \"I\" yana nufin:", options: ["Shugaba (In charge)", "Mai dubawa (Inspector)", "An yi watsi da shi (Ignored)", "Ana sanarwa (Informed): ana sabunta masa labari"], answer: 3, why: "Mutanen da ake sanarwa suna samun sabuntawa." },
      { objective: "O3", q: "Tebur ɗin RACI yana nuna mutum ɗaya da R a ayyuka 15. Ya kamata ku:", options: ["Ƙara masa wasu R", "Cire teburin", "Sake daidaita aikin", "Yin watsi da shi"], answer: 2, why: "Mutanen da aiki ya yi musu yawa suna rage saurin aikin." },
      { objective: "O4", q: "Rajistar haɗari tana ƙunshe da:", options: ["Kasafin kuɗi kawai", "Haɗari, yiwuwa, illa, mataki da mai kula", "Ranakun haihuwar ƙungiya", "Ra'ayoyin abokan ciniki"], answer: 1, why: "Waɗannan ginshiƙai suna sa a iya gudanar da haɗari." },
      { objective: "O4", q: "Canja tsari ta yadda haɗari ba zai iya faruwa ba wane mataki ne?", options: ["Gujewa", "Mayarwa ga wani", "Karɓa", "Ba da rahoto"], answer: 0, why: "Gujewa yana kawar da haɗarin." },
      { objective: "O4", q: "Sau nawa ya kamata a sake duba rajistar haɗari?", options: ["Ba sau ɗaya ba", "Sau ɗaya a ƙarshe", "Kowane mako", "Kowace shekara goma"], answer: 2, why: "Haɗari suna canjawa yayin da aikin ke tafiya." },
      { objective: "O5", q: "Rahoton ci gaba ya kamata ya zama kusan:", options: ["Rabin shafi", "Shafuka hamsin", "Kalma ɗaya", "Mai tsawo iyakar yiwuwa"], answer: 0, why: "Gajerun rahotanni ana karanta su." },
      { objective: "O5", q: "Matsayin kore yana nufin:", options: ["Ya kauce hanya", "An soke", "Ba a sani ba", "Yana kan hanya"], answer: 3, why: "Kore yana nuna aikin yana kan hanya." },
      { objective: "O5", q: "Kafin ku aika rahoton ci gaba da AI ya rubuta, dole ku:", options: ["Ƙara launuka", "Duba kowace rana da kowace lamba", "Cire sashen shawarwari", "Aika shi ba tare da karantawa ba"], answer: 1, why: "AI yana iya kuskure a cikakkun bayanai." },
      { objective: "O6", q: "Bitar darussan da aka koya tana tambaya:", options: ["Wa za a zarga", "Me muka tsara, me ya faru, me yasa, da me za a canja", "Yadda za a ɓoye kurakurai", "Babu komai"], answer: 1, why: "Tana kama da bitar bayan aiki ta soja." },
      { objective: "O6", q: "Rufe aiki yadda ya kamata ya haɗa da:", options: ["Tafiya kawai", "Goge dukkan bayanai", "Fara sabon aiki ba tare da bita ba", "Kwatanta sakamako da takardar kafa aiki da ajiye fayiloli"], answer: 3, why: "Rufewa mai kyau tana adana amfanin aikin da darussansa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Gwajin farko: Me kuka riga kuka sani?",
    from: [
      2,
      5,
      7,
      9,
      11,
      12,
      16,
      18
    ]
  },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      {
        name: "Takardar kafa aiki",
        objective: "O1",
        notYet: "Babu manufa, iyakar aiki, mai ɗaukar nauyi, ranar ƙarshe ko ma'aunin nasara, ko an bar tsammanin AI a ciki.",
        meets: "Shafi ɗaya mai dukkan sassa, kuma an yi alama a kowane gyaran AI.",
        exceeds: "Tana kuma jera abin da ke waje da iyaka da yadda za a auna nasara."
      },
      {
        name: "WBS da jadawali",
        objective: "O2",
        notYet: "Ayyukan sun yi girma sosai, ko manyan matakai ƙasa da huɗu.",
        meets: "Ƙananan ayyuka, dogaro da aƙalla manyan matakai huɗu, kuma an duba ƙiyasin AI.",
        exceeds: "An gina jadawalin daga ranar ƙarshe zuwa baya, da ɗan ƙarin lokaci na ko-ta-kwana."
      },
      {
        name: "Tebur ɗin RACI",
        objective: "O3",
        notYet: "Wani aiki ba shi da mai alhaki, ko yana da fiye da ɗaya.",
        meets: "A ɗaya kacal a kowane aiki, kuma an raba aikin cikin adalci.",
        exceeds: "Yana nuna wanda dole a tuntuɓa kafin manyan shawarwari."
      },
      {
        name: "Rajistar haɗari",
        objective: "O4",
        notYet: "Haɗari ƙasa da biyar, ko babu matakai ko masu kula.",
        meets: "Haɗari biyar na gaske da aka auna, kowanne da mataki da mai kula.",
        exceeds: "Yana nuna lokacin da za a sake duba kowane haɗari da abin da zai sa a ɗauki mataki."
      },
      {
        name: "Rahoton ci gaba",
        objective: "O5",
        notYet: "Launin matsayi ba na gaskiya ba ne, ko ba a duba ranaku da lambobi ba.",
        meets: "Rabin shafi mai launi na gaskiya, ci gaba, matakai na gaba da shawarwarin da ake buƙata.",
        exceeds: "Mai ɗaukar nauyi mai yawan aiki zai iya ɗaukar mataki a kai cikin ƙasa da minti ɗaya."
      },
      {
        name: "Rufe aiki da darussan da aka koya",
        objective: "O6",
        notYet: "Babu samfurin darussan da aka koya, ko yana zargin mutane.",
        meets: "Samfuri ba tare da zargin kowa ba mai tambayoyin bita guda huɗu.",
        exceeds: "Yana kuma tsara yadda za a kwatanta sakamako da takardar kafa aiki da inda za a ajiye fayiloli."
      }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka yi amfani da tsarin don gudanar da aiki na gaske a wurin aiki ko a cikin al'umma (binciken biyo baya)",
      "Masu koyo da suka nemi aikin mai tsarawa ko mataimakin gudanar da aiki cikin kwanaki 90",
      "Masu koyo da suka fara hanyar samun takardar shaidar gudanar da ayyuka ko wani kwas na Koach Learn cikin kwanaki 30",
      "Masu koyo da suka ci aikin ƙarshe bisa ma'aunin rubric"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kwamfuta ko waya mai intanet",
      "Mataimakin AI kyauta kamar ChatGPT, Microsoft Copilot ko Google Gemini",
      "Shirin spreadsheet kyauta kamar Google Sheets ko Microsoft Excel",
      "Kusan minti 60 gaba ɗaya, da ƙarin lokaci don kammala tsarin aikin"
    ],
    facilitatorNotes: [
      "Ku nemi kowane mai koyo ya zaɓi aiki na gaske ko na al'umma da wuri, don kowane aiki ya ginu kan tsari ɗaya.",
      "Ku taimaka wa tsoffin sojoji su fassara gogewar soja (umarnin aiki, jigilar kaya) zuwa kalmomin gudanar da aiki na farar hula.",
      "Ku tunatar da masu koyo kada su taɓa saka bayanan sirri na mai ɗaukar aiki ko na soja a kayan AI.",
      "Ku duba cewa masu koyo sun yi alama inda suka gyara AI; wannan ita ce babbar ƙwarewar da masu ɗaukar aiki ke son gani.",
      "Ku ba da maki ga tsarin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
