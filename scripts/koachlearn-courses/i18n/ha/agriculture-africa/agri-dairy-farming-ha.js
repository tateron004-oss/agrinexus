"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-dairy-farming.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.
// Safety rule kept: the course never gives drug, vaccine or hormone doses or withdrawal periods as numbers; it tells students to follow the vet and the label.

const ILRI_MANUAL = { name: "ILRI: Littafin horar da ƙananan manoman shanun madara (Goopy da Gakige, ILRI Manual 24, bugu na 2, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO, samar da madara da kayanta: adana madara (a sanyaya ta zuwa 4 °C cikin awa 3 zuwa 4 bayan tatsa)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO, samar da madara da kayanta: ingancin madara da gwaje-gwajenta", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO, samar da madara da kayanta: lafiyar dabbobi (ciwon hantsa yana rage yawan madara da ingancinta)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "University of Missouri Extension: Yadda ake amfani da gwajin California Mastitis Test (matakai da karanta sakamako)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (hukumar da ke kula da harkar madara a Kenya; tana ba da izini ga masu sarrafa madara)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: sharuɗɗan samun lasisi", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-ha",
  lang: "ha",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Kiwon Dabbobin Madara: Samar da Madara da Tsafta",
  skills: "Zaɓen shanu da awakin madara, Gina gidan kiwon zaune (zero-grazing), Tatsa da tsafta, Gane da gwada ciwon hantsa (mastitis), Sanyaya da sayar da madara mai inganci, Kiwon 'yan maruƙa da lissafin kuɗin kowace lita",
  outcome: "gudanar da ƙaramar gonar madara da ke samar da madara mai tsafta da mai saye zai karɓa: zaɓi da ajiye shanunku ko awakinku, tatsa su da tsari mai tsafta, gano ciwon hantsa da wuri da gwajin California Mastitis Test, sanyaya da sayar da madarar da ta ci gwaje-gwajen inganci, kiwon 'yan maruƙa masu lafiya, da lissafin kuɗin da kowace lita take ci muku.",
  about: [
    "Wannan kwas na ƙananan manoman madara ne da masu faɗaɗa kiwo, ma'aikatan gona, matasan manoma da jami'an faɗakarwa (extension) a Kenya, Najeriya, Ghana, Burkina Faso da sauran Afirka, waɗanda ke kiwon shanun madara ko awakin madara, ko suke shirin farawa. Madara mai tsafta tana da farashi mafi kyau, ba a cika ƙin karɓar ta ba, kuma tana kare lafiyar iyali; madara mai datti da ciwon hantsa da ba a gani ba suna cinye ribarku a hankali.",
    "Babi na 1 yana kafa gonar madara: zaɓen dabbobi, gidan kiwon zaune da ciyarwa don madara, da tsarin tatsa mai tsafta. Babi na 2 yana kare madarar ne kuma yana sayar da ita: ciwon hantsa da gwajin California Mastitis Test, sanyayawa da sayarwa ga ƙungiyar haɗin gwiwa (cooperative) ko kamfanin sarrafa madara, da kiwon 'yan maruƙa, bayanai da kuɗin kowace lita. An yi bayanin ciyarwa dalla-dalla a kwas ɗin \"Livestock Nutrition and Feed Formulation with Local Ingredients\" (Abincin Dabbobi da Haɗa Abinci da Kayan Gida); a nan za ku koyi yadda abinci ke da alaƙa da madara da kuɗi.",
    "Wannan kwas ba ya ba da yawan magani, na allurar rigakafi ko na hormone (dose), ko lokacin jira. Koyaushe ku bi likitan dabbobi ko jami'in lafiyar dabbobi da abin da ke rubuce a jikin magani (label). Lissafin kuɗi misalai ne kawai; ku yi amfani da farashinku. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki a gonarku. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas."
  ],
  finalTask: "Ku yi shafuka biyu don gonar madararku (ko misali kamar shanu 3 a Kiambu ko awakin madara 10 kusa da Kumasi). Shafi na 1, tsarin tsaftar tatsa da za a manna a wurin tatsa: matakai tun daga shirya mai tatsa da kayan aiki har zuwa sanyaya madara, alamun ciwon hantsa da za a duba, lokacin da kuke yin CMT, da abin da ake yi da madarar dabbobi marasa lafiya ko waɗanda aka yi wa magani. Shafi na 2, takardar kuɗin kowace lita na wata ɗaya: kowane kuɗi (abinci da ciyawa, ma'aikata, likitan dabbobi da barbara, sauransu), litocin da aka samar, kuɗin kowace lita, farashin da mai saye ke biya, da canji ɗaya da za ku yi don rage kuɗin kowace lita.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoman madara da masu faɗaɗa kiwo, ma'aikatan gona, matasan manoma da jami'an faɗakarwa a Kenya, Najeriya, Ghana, ƙasashen Afirka ta Yamma masu magana da Faransanci da sauran Afirka, masu kiwon shanu 1 zuwa 20 ko ƙaramin garken awakin madara, sau da yawa a tsarin kiwon zaune ko rabin kiwon zaune.",
    startingPoint: "Suna iya ciyarwa, shayarwa da tatsa dabbobi da hannu, kuma suna sayar da madara a kusa. Da yawa suna tatsa ba tare da tsayayyen tsarin tsafta ba, suna amfani da kwantenonin roba (plastic), suna gane ciwon hantsa ne kawai idan madarar ta lalace a gani, kuma ba su san kuɗin da samar da lita ɗaya ke ci musu ba.",
    gap: "Masu saye da ƙungiyoyin haɗin gwiwa suna gwada madara, kuma suna ƙin karɓa ko su rage farashin madarar da ta yi tsami, aka zuba mata ruwa, ko take da sauran magani. Ciwon hantsa da ba a gani (subclinical) yana rage yawan madara ba tare da alama ba. Manoma suna buƙatar tsarin da ke samar da madara mai tsafta da sanyi, hanyar gano ciwon hantsa da wuri, da bayanan da ke nuna ko kowace lita tana kawo riba.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; ana samun kwas ɗin a Sifaniyanci, Faransanci da Larabci ma",
      "Na'urori: waya mai sauƙi ko wayar zamani; na'urar lissafi; bayanan takarda ma suna da kyau",
      "Lokaci: darussa na minti 4 zuwa 6 da suka dace da lokutan tatsa",
      "Gonaki da yawa ba su da wutar lantarki ko na'urar sanyaya madara",
      "Lafiyar dabbobi: babu yawan magani, na allurar rigakafi ko na hormone, kuma babu lambobin lokacin jira; a bi likitan dabbobi da label",
      "Lissafin kuɗi misalai ne; farashi, izini da dokokin masu saye sun bambanta daga ƙasa zuwa ƙasa da mai saye zuwa mai saye"
    ],
    prerequisites: "Babu. Kwas ɗin \"Lafiyar Dabbobin Kiwo da Kula da Su\" (duba lafiya kowace rana) da \"Livestock Nutrition and Feed Formulation with Local Ingredients\" (haɗa abinci) suna taimakawa tare da wannan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan kuna da ƙasarku, kuɗinku, ciyawarku da kasuwarku", action: "zaɓen shanu ko awakin madara da tsara gidan kiwon zaune mai turke, kwamin abinci, ruwa da magudanar ruwa", standard: "kuna ambaton aƙalla abubuwa huɗu da kuka duba kafin ku saya" },
    { id: "O2", condition: "A kowane lokacin tatsa", action: "bin tsarin tatsa mai tsafta tun daga shirya mai tatsa da kayan aiki har zuwa tace madara da rufe ta", standard: "kuna yin kowane mataki a jere ba tare da tsallake ko ɗaya ba" },
    { id: "O3", condition: "Idan kuna da saniya ko akuya mai bayar da madara", action: "duba alamun ciwon hantsa da yin gwajin California Mastitis Test a kowane kan nono", standard: "kuna rubuta sakamakon kowane sashe na hantsa, kuma kuna kiran likitan dabbobi don duk dabbar da ta nuna alama ko take rashin lafiya" },
    { id: "O4", condition: "Bayan tatsa, da na'urar sanyaya ko ba tare da ita ba", action: "sanyaya, ajiye da kai madara ta yadda za ta ci gwaje-gwajen ingancin mai saye", standard: "tana isa wurin sanyaya ko wurin mai saye cikin lokacin da ya ƙayyade, ba tare da an ƙara mata komai ba" },
    { id: "O5", condition: "Idan kuna da bayanan gona na wata ɗaya", action: "lissafin kuɗin kowace litar madara da kwatanta shi da farashin da mai sayenku ke biya", standard: "da dukkan kuɗaɗe a ciki, kuma lissafin ya yi daidai" }
  ],
  chapters: [
    {
      name: "Babi na 1: Kafa gonar madara mai tsafta",
      lessons: [
        {
          title: "Zaɓen shanu da awakin madara",
          objectives: ["O1"],
          minutes: 5,
          goal: "Zaɓi dabbobin madara da suka dace da abincinku, kuɗinku da kasuwarku.",
          text: [
            "Dabbar madara tana da kyau ne gwargwadon abinci da kulawar da za ku iya ba ta. Saniyar Friesian (Holstein) mai bayar da madara mai yawa tana buƙatar abinci mai kyau da ruwa da yawa kowace rana; idan ba za ku iya samarwa ba, saniya mai gauraye da irin gida, ko ƙaramin iri kamar Jersey ko Ayrshire, zai iya kawo muku riba fiye da haka. A wuraren da suka fi bushewa, irin gida masu jure wahala da gaurayensu, kamar gaurayen shanun zebu a arewacin Najeriya ko shanun Azawak a Nijar da Burkina Faso, sun fi jure zafi da ciyawa maras kyau.",
            "Awakin madara sun dace da ƙananan filaye da ƙaramin jari. Suna cin abinci kaɗan, kuɗinsu bai yi yawa ba, kuma madarar akuya tana da nata masu saye. A Kenya, ana kiwon awakin Saanen, Toggenburg da Alpine da gaurayensu da awakin gida don madara.",
            "Kafin ku saya, ku duba: Kuna da ciyawa da ruwa duk shekara, har da lokacin rani? Wa zai sayi madararku, kuma a wane farashi? Za ku iya samun likitan dabbobi da hidimar barbarar roba (AI)? Sannan ku duba dabbar: ku saya daga sanannen manomi mai bayanai, ku nemi dabba mai lafiya da kuzari mai hantsa mai kyakkyawan siffa da kan nono huɗu (saniya) ko biyu (akuya) masu aiki, ku tambayi yawan madararta a baya, haihuwa da rashin lafiya, kuma ku nemi likitan dabbobi ko jami'in lafiyar dabbobi ya duba ta kafin ku biya."
          ],
          steps: ["Ku jera ciyawarku da ruwanku na lokacin damina da na rani.", "Ku nemo mai sayenku da farashin kowace lita.", "Ku nemo likitan dabbobi da hidimar barbarar roba (AI) mafi kusa.", "Ku zaɓi irin ko gauraye da abincinku zai iya ɗauka.", "Ku saya daga sanannen mai sayarwa mai bayanai; ku duba hantsa, kan nono da lafiya.", "Ku nemi likitan dabbobi ya duba dabbar kafin ku biya."],
          words: [["Irin dabbar madara", "irin da ake kiwo musamman don madara, kamar shanun Friesian, Jersey ko Ayrshire, ko awakin Saanen da Toggenburg."], ["Gauraye (cross)", "dabbar da iyayenta iri biyu ne daban, sau da yawa irin madara na waje da irin gida."], ["Barbarar roba (artificial insemination, AI)", "saka maniyyin zaɓaɓɓen bijimi ko bunsuru a cikin mace; ƙwararren ma'aikaci ne ke yi."]],
          slides: [
            { title: "Abinci ne ke zaɓar irin", bullets: ["Masu madara mai yawa suna buƙatar abinci mai kyau da ruwa da yawa", "Gauraye da ƙananan iri sun dace da ƙarancin abinci", "Irin gida masu jure wahala suna jure zafi da lokacin rani"] },
            { title: "Awakin madara", bullets: ["Abinci kaɗan, kuɗi kaɗan, wuri kaɗan", "Saanen, Toggenburg, Alpine da gaurayensu", "Ku fara nemo masu sayen madarar akuya"] },
            { title: "Kafin ku saya", bullets: ["Ciyawa da ruwa duk shekara?", "Mai saye da farashin kowace lita?", "Likitan dabbobi da hidimar AI da za ku iya samu?"] },
            { title: "Ku duba dabbar", bullets: ["Sanannen mai sayarwa mai bayanai", "Lafiya da kuzari; hantsa mai kyau; dukkan kan nono suna aiki", "Likitan dabbobi ya duba ta kafin ku biya"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Ku rubuta jerin abubuwan da za ku duba kafin saye: ciyawarku da ruwanku na lokacin rani, mai sayenku da farashinsa, likitan dabbobi da hidimar AI mafi kusa, irin ko gauraye da za ku iya ciyarwa, da abubuwa biyar da za ku duba a jikin dabbar kafin ku biya.",
          youCanNow: "daidaita irin dabbar madara da abincinku da kasuwarku, da duba dabba yadda ya kamata kafin ku saya.",
          quickCheck: [
            { objective: "O1", q: "Ciyawarku kaɗan ce a lokacin rani. Wane zaɓi ne mafi hikima?", options: ["Ku sayi saniyar Friesian mafi bayar da madara da za ku samu", "Ku sayi gauraye ko ƙaramin iri da abincinku zai iya ɗauka", "Ku sayi shanu da yawa don wasu su tsira", "Ku saya yanzu, ku tsara ciyawa daga baya"], answer: 1, why: "Saniya tana bayar da abin da abincinta ya ba da dama ne kawai; gauraye ko ƙaramin iri ya dace da ƙarancin ciyawa." },
            { objective: "O1", q: "Wane bincike ya kamata ku yi kafin ku biya kuɗin saniya?", options: ["Ku nemi likitan dabbobi ya duba ta, ku kuma duba bayananta", "Ku ƙirga tabonta", "Ku duba launinta kawai", "Ku tambayi mai sayarwa ko tana da kyau"], answer: 0, why: "Binciken likitan dabbobi da bayanai suna nuna lafiya, yawan madara a baya da haihuwa." }
          ]
        },
        {
          title: "Gidan kiwon zaune da ciyarwa don madara",
          objectives: ["O1"],
          minutes: 6,
          goal: "Tsara gidan kiwon zaune, ku shirya abinci da ruwa don madara.",
          text: [
            "A kiwon zaune (zero-grazing), dabbobin suna zama a cikin gida, ku kuma kuna kawo musu abinci, kamar yankakkiyar ciyawar Napier, wasu ciyawoyi da ragowar amfanin gona. Yana adana ƙasa kuma yana ba ku iko kan abinci, amma yana buƙatar aiki kowace rana da tsafta mai kyau.",
            "Gida mai kyau yana da: rufi don inuwa da kariya daga ruwan sama; turke ko ɗaki ga kowace saniya mai busasshiyar shimfiɗa mai laushi don ta kwanta; ƙasa mai gangare don fitsari da ruwa su gudu; kwamin abinci da kwamin ruwa masu sauƙin wankewa; wuri mai tsafta, na daban, don tatsa; ɗakin 'yan maruƙa; ramin taki nesa da wurin tatsa; da rumbun ajiyar abinci. Ga awaki, ƙasa mai tsayi ta katako mai rata tana sa su zama a bushe. Ku kwashe kashin dabbobi kowace rana, domin shimfiɗa mai datti tana ɗaya daga cikin manyan dalilan ciwon hantsa.",
            "Ana samar da madara ne daga abinci da ruwa. Saniya mai bayar da madara tana buƙatar ruwa mai tsafta da yawa duk yini, ciyawa mai kyau, da ƙarin kuzari, furotin da ma'adinai a daidai gwargwado; madara tana raguwa da sauri idan ruwa ko abinci ya yi ƙaranci. Ana koyar da yadda ake haɗa abinci da kayan gida a \"Livestock Nutrition and Feed Formulation with Local Ingredients\". A nan, ku tuna abubuwa biyu: ku rubuta kuɗin kowane abinci, domin abinci yawanci shi ne kuɗinku mafi girma, kuma ku canja abinci a hankali."
          ],
          steps: ["Ku auna wurin gida mai rufi a ƙasa mai saurin tsotse ruwa.", "Ku ba kowace dabba turke mai busasshiyar shimfiɗa da ƙasa mai gangare.", "Ku sa kwamin abinci da na ruwa inda za a iya cika su da wanke su cikin sauƙi.", "Ku ƙara wurin tatsa mai tsafta, ɗakin 'yan maruƙa da rumbun abinci.", "Ku sa ramin taki nesa da wurin tatsa da ruwa.", "Ku kwashe kashi kowace rana; ku rubuta abincin da kuka saya da kuɗinsa."],
          words: [["Kiwon zaune (zero-grazing)", "ajiye dabbobi a cikin gida da kawo musu dukkan abincinsu maimakon barin su su yi kiwo."], ["Shimfiɗa", "busasshen abu mai laushi a ƙasa inda dabbobi ke kwanciya, kamar garin katako, busasshiyar ciyawa ko yashi."], ["Ciyawa mai yawa (roughage)", "abinci mai girma kamar ciyawa, harawa, busasshiyar ciyawa (hay) da ragowar amfanin gona."]],
          slides: [
            { title: "Kiwon zaune", bullets: ["Dabbobi suna zama a gida; ku ke kawo abinci", "Yana adana ƙasa; ku ke da iko kan abinci", "Yana buƙatar aiki da tsafta kowace rana"] },
            { title: "Gida mai kyau", bullets: ["Rufi; turke ɗaya ga kowace saniya; busasshiyar shimfiɗa", "Ƙasa mai gangare da ke zubar da ruwa", "Kwamin abinci da na ruwa masu sauƙin wankewa"] },
            { title: "Ku tsaftace shi", bullets: ["Wurin tatsa mai tsafta na daban", "Ɗakin 'yan maruƙa; rumbun abinci", "Ramin taki nesa da wurin tatsa; tsaftacewa kowace rana"] },
            { title: "Abinci ne ke kawo madara", bullets: ["Ruwa mai tsafta da yawa duk yini", "Ciyawa da kuzari, furotin da ma'adinai a daidai gwargwado", "Ku rubuta kuɗin abinci; ku canja abinci a hankali"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Ku zana taswira mai sauƙi ta gidan kiwon zaunenku (ko wanda za ku gina): turaku, shimfiɗa, gangaren ƙasa, kwamin abinci, kwamin ruwa, wurin tatsa, ɗakin 'yan maruƙa, rumbun abinci da ramin taki. Ku yi alama a kan abu ɗaya da za ku fara gyarawa.",
          youCanNow: "tsara gidan kiwon zaune da ke kiyaye dabbobi a bushe kuma a tsafta, da bayyana yadda abinci da ruwa ke zama madara.",
          quickCheck: [
            { objective: "O1", q: "Me yasa ƙasar turken kiwon zaune ya kamata ta kasance mai gangare?", options: ["Don saniyar ta zame ta fita", "Don fitsari da ruwa su gudu, shimfiɗa ta zauna a bushe", "Don a adana siminti", "Don abinci ya mirgina zuwa wurin saniya"], answer: 1, why: "Ƙasa da shimfiɗa a bushe suna kiyaye hantsa a tsafta kuma suna rage ciwon hantsa." },
            { objective: "O1", q: "A ina ya kamata ramin taki ya kasance?", options: ["Kusa da kwamin ruwa", "A cikin wurin tatsa", "Nesa da wurin tatsa da ruwa", "A ƙarƙashin rumbun abinci"], answer: 2, why: "Taki kusa da wurin tatsa ko ruwa yana kai datti da ƙwayoyin cuta cikin madara." }
          ]
        },
        {
          title: "Tsarin tatsa mai tsafta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tatsa saniya ko akuya da tsari mai tsafta, mataki-mataki.",
          text: [
            "Ƙwayoyin cuta suna shiga madara daga hannaye masu datti, hantsa mai datti, kwantenoni masu datti da iskar gida mai datti. Tsayayyen tsari, da ake yi iri ɗaya a kowane lokacin tatsa, yana hana su shiga. Ku yi tatsa a lokuta iri ɗaya kowace rana, a wuri mai tsafta, a natse: dabbar da ta firgita tana sakin madara kaɗan.",
            "Ku yi amfani da kwantenonin ƙarfe masu santsi (aluminium ko bakin ƙarfe, stainless steel) masu sauƙin wankewa. Jarkokin roba suna yin kaɗe-kaɗe da ke riƙe datti, kuma masu saye da yawa suna ƙin karɓar madarar da aka kawo a cikinsu. Ku wanke kwantenoni bayan kowane amfani da ruwa mai tsafta da sabulun wanke-wanke, ku kurkura, ku shanya su a juye a kan rumfa a rana.",
            "Ku fara tatsa dabbobi masu lafiya, ku bar duk dabbar da ba ta da lafiya ko aka yi wa magani a ƙarshe. Ku ware madarar dabbar da aka yi wa magani, kuma kada ku sayar da ita har sai lokacin jira da ke rubuce a jikin magani (label), ko wanda likitan dabbobinku ya faɗa, ya wuce."
          ],
          steps: ["Ku sa tufafi masu tsafta; ku yanke farce; ku wanke hannu da sabulu.", "Ku kawo kwantenonin ƙarfe masu tsafta da busasshe, kofin gwaji (strip cup) da matata ko rariya mai tsafta.", "Ku ɗaure ko ku natsar da dabbar a hankali a wurin tatsa mai tsafta.", "Ku wanke kan nono (da hantsa idan tana da datti kawai) da ruwan ɗumi mai tsafta, ku goge su da tsumma ko takarda mai tsafta ta daban ga kowace dabba.", "Ku matsa madarar farko daga kowane kan nono cikin kofin gwaji, ku duba ko akwai gudaji, ɓarɓashi ko madara mai ruwa-ruwa.", "Ku tatsa da sauri har ta ƙare da dukkan hannu, ba ta jan nono da yatsu ba.", "Ku tsoma ko ku fesa maganin kan nono bayan tatsa idan likitan dabbobinku ya ba da shawara, ku ba da abinci don dabbar ta ci gaba da tsayuwa na ɗan lokaci.", "Ku tace madarar, ku rufe ta, ku fara sanyaya ta nan take."],
          words: [["Kofin gwaji (strip cup)", "kofi mai faranti ko tsumma mai duhu a saman sa; matsin farko na madara yana nuna gudaji ko ɓarɓashi a kansa."], ["Maganin tsoma kan nono (teat dip)", "ruwan maganin kashe ƙwayoyin cuta da ake tsoma kan nono a ciki bayan tatsa; ku yi amfani da wanda likitan dabbobinku ya ba da shawara, kamar yadda label ya faɗa."], ["Lokacin jira (withdrawal period)", "lokacin bayan an ba da magani da ba za a sayar ko a ci madara ko nama ba; yana rubuce a jikin label ko likitan dabbobi ya faɗa."]],
          slides: [
            { title: "Inda ƙwayoyin cuta ke fitowa", bullets: ["Hannaye da hantsa masu datti", "Kwantenoni masu datti", "Gida mai datti da ƙura"] },
            { title: "Kafin tatsa", bullets: ["Tufafi masu tsafta, gajerun farce, wanke hannu", "Kwantenonin ƙarfe masu tsafta da busasshe", "Wanke da goge kan nono: tsumma ɗaya ga kowace dabba"] },
            { title: "Lokacin tatsa", bullets: ["Kofin gwaji: duba madarar farko", "Tatsa da sauri har ta ƙare, da dukkan hannu", "Masu lafiya da farko, marasa lafiya ko masu magani a ƙarshe"] },
            { title: "Bayan tatsa", bullets: ["Maganin tsoma kan nono idan likitan dabbobi ya ba da shawara", "Tace, rufe kuma sanyaya madarar nan take", "Dabbobin da aka yi wa magani: babu sayarwa sai label ya ba da dama"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Ku kalli ko ku yi tatsa ɗaya a gonarku, ku yi alama a kan kowane mataki na wannan darasi. Ku rubuta kowane matakin da aka tsallake da canji ɗaya da za a yi gobe, kamar tsumma ɗaya ga kowace dabba ko kwanon ƙarfe maimakon jarka.",
          youCanNow: "tatsa saniya ko akuya da tsari mai tsafta da ke hana ƙwayoyin cuta shiga madara.",
          quickCheck: [
            { objective: "O2", q: "Me yasa ake matsa madarar farko cikin kofin gwaji?", options: ["Don a ba kyanwa", "Ita ce madara mafi ƙarfi", "Don a ga gudaji ko ɓarɓashi da ke nuna ciwon hantsa", "Don a natsar da saniyar"], answer: 2, why: "Kofin gwaji yana nuna madara mara kyau da wuri, kafin ta gauraya da madara mai kyau." },
            { objective: "O2", q: "Likitan dabbobi ya yi wa wata saniya magani kwana biyu da suka wuce. Me za ku yi da madararta?", options: ["Ku gauraya ta da sauran; kaɗan ba laifi", "Ku sayar da ita ga wani mai saye daban", "Ku ba ɗan maraƙinta ba tare da tambaya ba", "Ku ware ta, kada ku sayar da ita har sai lokacin jira na label ko na likitan dabbobi ya wuce"], answer: 3, why: "Sauran magani suna sa madara ta zama mara aminci, kuma masu saye suna gwada su; label ko likitan dabbobi ne ke ba da lokacin jira." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Kafa gonar madara mai tsafta",
        questions: [
          { objective: "O1", q: "Me ya kamata ya zaɓar muku irin dabbar madara da za ku saya?", options: ["Abinci, ruwa da kulawar da za ku iya ba ta duk shekara", "Launin da kuka fi so", "Abin da maƙwabcinku ya saya", "Dabba mafi arha a kasuwa"], answer: 0, why: "Dabbar madara tana samarwa ne gwargwadon abinci da kulawarta kawai." },
          { objective: "O1", q: "Wanne BA ya cikin gidan kiwon zaune mai kyau?", options: ["Busasshiyar shimfiɗa a kowane turke", "Ƙasa mai zubar da ruwa", "Ramin taki kusa da wurin tatsa", "Kwamin abinci da na ruwa masu sauƙin wankewa"], answer: 2, why: "Dole a ajiye taki nesa da wurin tatsa don hana ƙwayoyin cuta shiga madara." },
          { objective: "O2", q: "Wace kwantena ce mafi kyau ga madara?", options: ["Jarkar roba", "Kwano mai tsafta, mai santsi, na aluminium ko bakin ƙarfe", "Tsohon bokitin fenti", "Kowace kwantena mai murfi"], answer: 1, why: "Ƙarfe mai santsi yana da sauƙin wankewa; roba tana yin kaɗe-kaɗe kuma tana riƙe datti." },
          { objective: "O2", q: "Ta yaya ya kamata ku goge kan nono kafin tatsa?", options: ["Da tawul ɗaya da duk dabbobi ke amfani da shi", "Ku bar su a jike", "Da tufafinku", "Da tsumma ko takarda mai tsafta ta daban ga kowace dabba"], answer: 3, why: "Tawul ɗaya na kowa yana kai ƙwayoyin ciwon hantsa daga wata dabba zuwa wata." },
          { objective: "O2", q: "A wane jeri ya kamata ku tatsa dabbobinku?", options: ["Masu lafiya da farko, marasa lafiya ko waɗanda aka yi wa magani a ƙarshe", "Marasa lafiya da farko", "Kowane jeri", "Mafi ƙanƙanta da farko"], answer: 0, why: "Tatsa marasa lafiya a ƙarshe yana hana ƙwayoyin cuta yaɗuwa zuwa hantsa masu lafiya." }
        ]
      }
    },
    {
      name: "Babi na 2: Hantsa mai lafiya, madara mai aminci da riba",
      lessons: [
        {
          title: "Ciwon hantsa: alamu, rigakafi da CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Duba dabba don ciwon hantsa, ku yi gwajin California Mastitis Test.",
          text: [
            "Ciwon hantsa (mastitis) cuta ce da kumburin hantsa. Yana rage yawan madara da ingancinta, kuma yana ɗaya daga cikin cututtukan dabbobin madara mafi tsada. Ciwon hantsa da ake gani (clinical) yana nuna: sashen hantsa mai zafi, kumburi ko ciwo; madara mai gudaji, ɓarɓashi, ruwa-ruwa ko jini; wani lokaci kuma zazzaɓi da rashin cin abinci. Ciwon hantsa da ba a gani (subclinical) ba ya nuna komai da ido, amma dabbar tana bayar da madara kaɗan. Shi yasa ake gwadawa.",
            "Gwajin California Mastitis Test (CMT) yana gano ciwon hantsa da ke ɓoye a gona. Kuna buƙatar faranti mai kofuna huɗu (paddle) da ruwan gwajin CMT (reagent). Ku tatsa ɗan kaɗan daga kowane kan nono cikin nasa kofi, ku ƙara ruwan gwaji daidai da yawansa, ku juya a hankali, ku karanta cikin daƙiƙoƙi. Madarar da ta zauna a ruwa-ruwa daidai ce. Idan ta yi kauri kamar jelly, ko ta yi yauƙi ko gudaji, ƙwayoyin halitta (cells) sun yi yawa, wanda ke nuna ciwon hantsa a wannan sashe. Gwargwadon kaurinta, gwargwadon ƙarfin alamar. Kada ku gwada a kwanakin farko bayan haihuwa, lokacin da sakamakon yake da yawa a dabi'ance. Madarar akuya tana iya nuna alama mai ƙarfi ko da tana da lafiya, don haka ku tambayi likitan dabbobinku yadda ake karanta sakamakon awaki.",
            "Ku hana ciwon hantsa da busasshiyar shimfiɗa mai tsafta, tsarin tatsa mai tsafta, maganin tsoma kan nono idan likitan dabbobinku ya ba da shawara, tatsa dabbobin da suka kamu a ƙarshe, da yin magani da shawarar likitan dabbobinku kawai. Kada ku taɓa ba da maganin ƙwayoyin cuta (antibiotics) da kanku: ku bi likitan dabbobi da label. Ku rubuta kowane ciwo da kowane magani."
          ],
          steps: ["Ku duba ku taɓa: kowane sashen hantsa don zafi, kumburi ko ciwo.", "Ku duba madarar farko a kofin gwaji don gudaji, ɓarɓashi ko jini.", "Don CMT: ku zubar da matsin farko, sannan ku tatsa ɗan kaɗan daga kowane kan nono cikin nasa kofi.", "Ku karkatar da farantin don daidai yawan madara ya rage; ku ƙara ruwan gwaji daidai da yawansa.", "Ku juya a hankali ku karanta cikin daƙiƙoƙi: ruwa-ruwa daidai ne, kauri kamar jelly alama ce.", "Ku rubuta sakamakon kowane sashen hantsa.", "Ku kira likitan dabbobinku don duk ciwon da ake gani ko sakamakon da ya nuna alama; ku bi likitan dabbobi da label."],
          words: [["Ciwon hantsa (mastitis)", "cuta da kumburin hantsa da ke rage yawan madara da ingancinta."], ["Ciwon hantsa da ba a gani (subclinical mastitis)", "ciwon hantsa ba tare da alamar da ake gani ba; sai gwaji kamar CMT ne ke nuna shi."], ["Sashen hantsa (quarter)", "ɗaya daga cikin sassa huɗu na hantsar saniya, kowanne da nasa kan nono."], ["Ruwan gwaji (reagent)", "ruwan da ake amfani da shi a gwaji, wanda ke haɗuwa da madara ya nuna sakamako."]],
          slides: [
            { title: "Ciwon hantsa yana jawo asara", bullets: ["Cuta da kumburin hantsa", "Madara kaɗan, inganci ƙasa", "Clinical: kuna gani. Subclinical: ba ku gani"] },
            { title: "Alamun da ake gani", bullets: ["Sashen hantsa mai zafi, kumburi ko ciwo", "Madara mai gudaji, ɓarɓashi, ruwa-ruwa ko jini", "Wani lokaci zazzaɓi da rashin cin abinci"] },
            { title: "Gwajin CMT", bullets: ["Kofi ɗaya ga kowane kan nono; ruwan gwaji daidai yawa", "Ku juya ku karanta cikin daƙiƙoƙi", "Ruwa-ruwa = daidai; kauri ko yauƙi = alama"] },
            { title: "Hanawa da ɗaukar mataki", bullets: ["Busasshiyar shimfiɗa, tsari mai tsafta, tsoma kan nono idan an ba da shawara", "Ana tatsa dabbobin da suka kamu a ƙarshe", "Likitan dabbobi ne ke zaɓar magani; ku bi label"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Ku yi CMT a kan saniya ko akuya ɗaya (ku ari faranti da ruwan gwaji daga ƙungiyar haɗin gwiwarku, likitan dabbobi ko jami'in faɗakarwa idan ba ku da su). Ku rubuta sakamakon kowane sashen hantsa a littafinku, ku kuma rubuta abin da za ku yi game da duk wata alama.",
          youCanNow: "gane alamun ciwon hantsa, yin CMT a kowane kan nono, rubuta sakamakon da sanin lokacin kiran likitan dabbobi.",
          quickCheck: [
            { objective: "O3", q: "Madarar saniyarku tana da kyau a gani, amma yawanta ya ragu. Me zai iya gano ciwon hantsa da ke ɓoye?", options: ["Jira har madarar ta nuna gudaji", "Gwajin California Mastitis Test", "Ƙara mata gishiri", "Shaƙar ƙamshin madarar"], answer: 1, why: "Ciwon hantsa da ba a gani ba shi da alamar da ake gani; CMT ne ke nuna shi." },
            { objective: "O3", q: "A gwajin CMT, kofi ɗaya ya yi kauri sosai kamar jelly. Me hakan ke nufi?", options: ["An yi gwajin daidai kuma sashen hantsar yana da lafiya", "Kun zuba madara kaɗan", "Madarar tana da ƙarfi sosai", "Alama mai ƙarfi a wannan sashe; ku rubuta ta ku kira likitan dabbobi"], answer: 3, why: "Kauri yana nufin ƙwayoyin halitta sun yi yawa, alamar ciwon hantsa a wannan sashe." }
          ]
        },
        {
          title: "Sanyayawa, kula da sayar da madara",
          objectives: ["O4"],
          minutes: 6,
          goal: "Sanyaya ku kai madarar da za ta ci gwaje-gwajen ingancin mai saye.",
          text: [
            "Sabuwar madara tana da kariya ta dabi'a da ke hana ƙwayoyin cuta ƙaruwa na kusan awa uku zuwa huɗu kawai bayan tatsa. FAO tana ba da shawarar a sanyaya ta zuwa 4 °C cikin wannan lokaci don ta riƙe ingancinta. Idan ba ku da na'urar sanyaya, ku tsayar da kwanon ƙarfe da aka rufe a cikin ruwa mai sanyi da tsafta, mai gudu ko wanda aka ajiye, a inuwa, ku kai madarar wurin sanyayawa na cibiyar karɓa da sauri. Kada ku taɓa barin madara a rana.",
            "Yawancin ƙananan manoma suna sayarwa ga ƙungiyar haɗin gwiwa ta madara, cibiyar karɓar madara, kamfanin sarrafa madara, ko ƙaramin kamfanin madara (misali, ƙananan kamfanonin madara a Burkina Faso suna sayen madara daga makiyaya da manoma). Lokacin da kuka kai, mai saye yana gwada madararku. Gwaje-gwajen da aka saba sun haɗa da: kallo da shaƙa; gwajin alcohol da gwajin dafawa (clot-on-boiling), da ke nuna madarar da ke fara tsami; lactometer, da ke nuna madarar da aka zuba mata ruwa; kuma, a wasu kamfanonin sarrafawa, gwajin sauran magani. Madarar da ta faɗi ana ƙin karɓar ta ko a biya ƙasa.",
            "Kada ku taɓa ƙara ruwa, gari, maganin ajiya (preservative) ko wani abu a madara: zamba ce, sau da yawa ta saɓa wa doka, kuma gwaje-gwajen suna kama ta. Ku tambayi mai sayenku yadda yake biya (a kowace lita, wani lokaci da ƙarin kuɗi don inganci ko kitse), lokacin da yake biya (sau da yawa kowane wata ta banki ko kuɗin waya), da abubuwan da yake cirewa. Ku karanta kowace kwangila gaba ɗaya kafin ku sa hannu. Sayar da ɗanyen madara ga jama'a yana iya buƙatar izini: a Kenya, Kenya Dairy Board tana ba da lasisi ga masu sarrafa madara, don haka ku duba dokokinta ko na hukumar madara ta ƙasarku."
          ],
          steps: ["Ku tace madarar ku rufe ta nan da nan bayan tatsa.", "Ku sanyaya ta nan take: a na'urar sanyaya, ko kwanon a tsaye cikin ruwa mai sanyi a inuwa.", "Ku kai ta cibiyar karɓa ko wurin mai saye cikin lokacin da suka ƙayyade.", "Ku kalli gwaje-gwajen ku nemi sakamakon.", "Ku rubuta litocin da kuka kai, duk wani ƙin karɓa da dalilinsa.", "Ku duba kowane biyan kuɗi da bayanan abin da kuka kai."],
          words: [["Lactometer", "ma'auni mai yawo da ke auna nauyin (kaurin) madara; ruwan da aka ƙara yana sa madara ta yi sauƙi."], ["Gwajin alcohol", "gauraya madara da alcohol; madarar da ke fara tsami tana yin gudaji."], ["Cibiyar karɓar madara (collection centre)", "wurin da manoma ke kai madara don a gwada ta, a sanyaya ta, a tura ta ga kamfanin sarrafawa."]],
          slides: [
            { title: "Ku sanyaya da sauri", bullets: ["Kariyar dabi'a tana ɗaukar kusan awa 3 zuwa 4", "FAO: a sanyaya zuwa 4 °C cikin wannan lokaci", "Babu na'urar sanyaya: kwano cikin ruwa mai sanyi, a inuwa"] },
            { title: "Gwaje-gwajen mai saye", bullets: ["Kallo da shaƙa", "Alcohol da gwajin dafawa: tsami", "Lactometer: ƙarin ruwa; wasu suna gwada magani"] },
            { title: "Kada ku ƙara komai", bullets: ["Babu ruwa, gari ko maganin ajiya", "Zamba ce, sau da yawa ta saɓa wa doka, kuma gwaji yana kama ta"] },
            { title: "Samun kuɗinku", bullets: ["A kowace lita; ku tambayi ƙarin kuɗin inganci", "Yaushe da yaya suke biya; abin da suke cirewa", "Ku karanta kwangila; ku duba izini (Kenya: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Ku ziyarci ko ku kira cibiyar karɓa, ƙungiyar haɗin gwiwa ko mai saye mafi kusa. Ku tambaya: waɗanne gwaje-gwaje suke yi, lokaci na ƙarshe da suke karɓar madara, yaya da yaushe suke biya, da abin da suke cirewa. Ku rubuta amsoshin ku kwatanta su da yadda kuke kula da madara yanzu.",
          youCanNow: "sanyaya da kula da madara don ta riƙe ingancinta, bayyana gwaje-gwajen mai saye, da duba yadda ake biyan ku.",
          quickCheck: [
            { objective: "O4", q: "Ba ku da na'urar sanyaya madara. Mene ne abu mafi kyau bayan tatsa?", options: ["Ku tsayar da kwanon ƙarfe da aka rufe cikin ruwa mai sanyi a inuwa, ku kai da sauri", "Ku bar madarar a rana don ta zauna da ɗumi", "Ku ƙara ɗan ruwa don ta zauna sabuwa", "Ku ajiye ta har gobe ku kai tatsa biyu tare"], answer: 0, why: "Sanyayawa da sauri da kai wa da sauri suna hana ƙwayoyin cuta ƙaruwa." },
            { objective: "O4", q: "Me gwajin lactometer a cibiyar karɓa ke kamawa?", options: ["Ciwon hantsa a sashe ɗaya", "Madarar da aka zuba mata ruwa", "Irin saniyar", "Madarar da ta yi sanyi sosai"], answer: 1, why: "Ruwan da aka ƙara yana rage kaurin madara, kuma lactometer yana nuna haka." }
          ]
        },
        {
          title: "Kiwon 'yan maruƙa, bayanai da kuɗin kowace lita",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lissafa kuɗin kowace lita, ku ajiye bayanan da ake buƙata don lissafin.",
          text: [
            "'Yan maruƙanku da 'yan awakinku su ne garkenku na gaba. Ku tabbata sabuwar haihuwa ta sha nonon farko (colostrum), madarar farko mai kauri, da wuri-wuri bayan haihuwa, a mafi kyau cikin awoyin farko kaɗan, domin tana ɗauke da kariyar uwar daga cututtuka. Ku ajiye 'yan maruƙa a ɗaki mai tsafta, busasshe kuma na daban, ku ba su ruwa mai tsafta, ku ba su busasshiyar ciyawa mai kyau ko ciyawa mai laushi da abincin 'yan maruƙa da wuri don cikinsu ya girma, ku yaye su lokacin da jami'in faɗakarwa ko likitan dabbobinku ya ce ɗan maraƙin yana cin isasshen abinci mai tauri. Ku bi tsarin likitan dabbobinku don kula da cibiya, maganin tsutsotsi da allurar rigakafi.",
            "Ku ajiye bayanai masu sauƙi kowace rana: litoci na kowace dabba a kowace tatsa, abincin da aka saya da kuɗinsa, alamun neman namiji (heat) da ranakun barbarar roba ko barbara, ranakun haihuwa, magunguna da ranar da za a iya sake sayar da madara, madarar da aka kai, ƙin karɓa da biyan kuɗi. Littafi yana aiki; tebur ɗin lissafi a waya (spreadsheet) yana sauƙaƙa lissafi.",
            "Kuɗin kowace lita = dukkan kuɗaɗen wata a raba da litocin da aka samar. Misali (lambobin misali ne kawai): shanu 3 a Kenya sun samar da lita 1,050 a wata ɗaya. Kuɗaɗe: abinci da ciyawa KES 27,000, ma'aikata KES 9,000, likitan dabbobi da AI KES 3,000, sauransu KES 3,000; jimla KES 42,000. Kuɗin kowace lita = 42,000 / 1,050 = KES 40. Idan mai sayenku yana biya ƙasa da kuɗin kowace litarku, kuna asara a kan kowace lita; ku fara duba ɓarnar abinci, asarar ciwon hantsa da madarar da aka ƙi karɓa."
          ],
          steps: ["Ku ba da nonon farko da wuri-wuri bayan haihuwa.", "Ku ajiye ɗan maraƙi a ɗaki mai tsafta da busasshe mai ruwa, busasshiyar ciyawa da abincin 'yan maruƙa.", "Ku rubuta litoci, abinci, barbara, haihuwa, magunguna, abin da aka kai da biyan kuɗi.", "A ƙarshen wata, ku haɗa dukkan kuɗaɗe.", "Ku raba jimlar kuɗaɗe da litocin da aka samar: wannan shi ne kuɗin kowace litarku.", "Ku kwatanta da farashin da ake biya, ku zaɓi canji ɗaya don rage kuɗin."],
          words: [["Nonon farko (colostrum)", "madarar farko mai kauri, mai launin rawaya bayan haihuwa; tana kare sabuwar haihuwa daga cututtuka."], ["Yaye", "mayar da ƙaramar dabba daga madara zuwa abinci mai tauri."], ["Kuɗin kowace lita", "dukkan kuɗaɗen gonar madararku na wani lokaci a raba da litocin da kuka samar."]],
          slides: [
            { title: "'Yan maruƙa su ne garkenku na gaba", bullets: ["Nonon farko da wuri-wuri bayan haihuwa", "Ɗaki mai tsafta da busasshe; ruwa, ciyawa, abincin 'yan maruƙa da wuri", "Tsarin likitan dabbobi don cibiya, tsutsotsi, rigakafi"] },
            { title: "Bayanan kowace rana", bullets: ["Litoci na kowace dabba; abinci da kuɗinsa", "Neman namiji, AI, haihuwa, magunguna", "Abin da aka kai, ƙin karɓa, biyan kuɗi"] },
            { title: "Kuɗin kowace lita", bullets: ["Dukkan kuɗaɗen wata / litocin da aka samar", "Misali: KES 42,000 / 1,050 L = KES 40 a kowace lita", "Lambobin misali ne: ku yi amfani da naku"] },
            { title: "Idan ba ta kawo riba", bullets: ["Farashi ƙasa da kuɗi: kuna asara a kowace lita", "Ku duba ɓarnar abinci, ciwon hantsa, madarar da aka ƙi", "Ku zaɓi canji ɗaya ku bi diddiginsa"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Aikin ƙarshe: ku rubuta tsarin tsaftar tatsarku da za a manna a wurin tatsa, sannan ku cike takardar kuɗin kowace lita ta watan da ya wuce (ko watan misali): kowane kuɗi, litocin da aka samar, kuɗin kowace lita, farashin mai sayenku, da canji ɗaya da za ku yi.",
          youCanNow: "kiwon 'yan maruƙa masu lafiya, ajiye bayanan gonar madara da lissafin kuɗin kowace litar madara.",
          quickCheck: [
            { objective: "O5", q: "Yaushe ya kamata sabon ɗan maraƙi ya sha nonon farko?", options: ["Bayan mako ɗaya", "Sai idan ya yi kama da rauni", "Da wuri-wuri bayan haihuwa, a mafi kyau cikin awoyin farko kaɗan", "Kada ya sha; a ba shi ruwa kawai"], answer: 2, why: "Nonon farko yana ɗauke da kariyar uwar, kuma ɗan maraƙi ya fi karɓar sa a awoyin farko." },
            { objective: "O5", q: "Kuɗaɗen wata KES 36,000 ne, shanun kuma sun samar da lita 900. Nawa ne kuɗin kowace lita?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 a raba da 900 shi ne 40." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Hantsa mai lafiya, madara mai aminci da riba",
        questions: [
          { objective: "O3", q: "Wanne ne alamar ciwon hantsa da ake gani?", options: ["Sashen hantsa mai zafi da kumburi, da gudaji a madara", "Gashi mai sheƙi", "Tuƙa", "Cin abinci da kyau"], answer: 0, why: "Zafi, kumburi, ciwo da madara mara kyau alamun ciwon hantsa ne da ake gani." },
          { objective: "O3", q: "CMT ya nuna alama a sashen hantsa ɗaya. Me za ku yi?", options: ["Ku ba da maganin ƙwayoyin cuta da kuke da shi a gida", "Ku rubuta shi ku kira likitan dabbobinku; ku bi shawararsa da label", "Ku ƙyale shi; madarar tana da kyau a gani", "Ku sayar da saniyar yau"], answer: 1, why: "Likitan dabbobi ne ke zaɓar magani; yin magani a gida ba tare da shawara ba yana jawo sauran magani a madara da ƙwayoyin cuta masu jure magani." },
          { objective: "O4", q: "A cewar FAO, cikin wane lokaci ya kamata a sanyaya madara zuwa kusan 4 °C?", options: ["Cikin mako ɗaya", "Kafin gobe", "Cikin kusan awa uku zuwa huɗu bayan tatsa", "A lokacin zafi kawai"], answer: 2, why: "Kariyar dabi'a ta madara tana hana ƙwayoyin cuta na kusan awa uku zuwa huɗu kawai." },
          { objective: "O4", q: "Cibiyar karɓa tana yin gwajin alcohol. Me yake nunawa?", options: ["Ƙarin ruwa", "Yawan kitse", "Irin saniyar", "Madarar da ke fara tsami"], answer: 3, why: "Madarar da ke fara tsami tana yin gudaji idan aka gauraya ta da alcohol." },
          { objective: "O5", q: "Kuɗin kowace litarku KES 45 ne, mai saye kuma yana biya KES 40. Me hakan ke nufi?", options: ["Kuna asarar kusan KES 5 a kan kowace lita", "Kuna samun KES 5 a kowace lita", "Ba riba ba asara", "Ba komai; farashi ba shi da muhimmanci"], answer: 0, why: "Idan kuɗin kowace lita ya fi farashi, kowace lita tana jawo asara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Kiwon Dabbobin Madara: Samar da Madara da Tsafta",
    questions: [
      { objective: "O1", q: "Kafin sayen shanun madara, abu na farko da za a duba shi ne:", options: ["Launin shanun", "Ko kuna da ciyawa da ruwa duk shekara, har da lokacin rani", "Wane iri ne ya fi shahara", "Shanu nawa maƙwabcinku yake da su"], answer: 1, why: "Abinci da ruwa ne ke yanke yawan madarar da kowace saniya za ta bayar." },
      { objective: "O1", q: "Me yasa manomi zai zaɓi awakin madara maimakon shanu?", options: ["Awaki ba sa buƙatar ruwa", "Awaki ba sa taɓa rashin lafiya", "Awaki suna cin abinci kaɗan kuma sun dace da ƙananan filaye da ƙaramin jari", "Madarar akuya ba ta buƙatar tsafta"], answer: 2, why: "Awaki suna buƙatar abinci, wuri da kuɗi kaɗan, wanda ya dace da ƙananan manoma da yawa." },
      { objective: "O1", q: "A kiwon zaune, me yasa dole a kwashe kashi kowace rana?", options: ["Shimfiɗa mai datti tana ɗaya daga cikin manyan dalilan ciwon hantsa", "Don a sayar da shi kowace rana", "Shanu ba sa son ƙamshin", "Ba dole ba ne"], answer: 0, why: "Hantsa tana kwanciya a kan shimfiɗa; datti a can yana yaɗa ƙwayoyin ciwon hantsa." },
      { objective: "O1", q: "Wane abu ne ke taimakawa turken kiwon zaune ya zauna a bushe?", options: ["Ƙasa mai lebur ba tare da magudanar ruwa ba", "Rashin rufi", "Ciyawa mai jiƙa", "Ƙasa mai gangare zuwa magudanar ruwa"], answer: 3, why: "Ƙasa mai gangare tana zubar da fitsari da ruwa." },
      { objective: "O2", q: "Mene ne matakin farko na tsarin tatsa mai tsafta?", options: ["Fara tatsa nan take", "Mai tatsa da tufafi masu tsafta, gajerun farce, hannaye da aka wanke da sabulu", "Zuba madara a jarkar roba", "Ciyar da ɗan maraƙi"], answer: 1, why: "Hannaye da tufafi masu tsafta suna hana ƙwayoyin cuta shiga madara tun farko." },
      { objective: "O2", q: "Me yasa ake tatsa da dukkan hannu maimakon jan nono da yatsu?", options: ["Ya fi sauƙin koyo", "Yana amfani da madara kaɗan", "Ya fi kyautata wa kan nono kuma yana taimaka madara ta fito duka", "Yatsu sun fi datti"], answer: 2, why: "Tatsa da dukkan hannu yana hana raunin kan nono kuma yana zubar da hantsa duka." },
      { objective: "O2", q: "Bayan tatsa, me ya kamata ku fara yi da madarar?", options: ["Ku tace ta, ku rufe ta, ku fara sanyaya ta nan take", "Ku bar ta a buɗe ta yi sanyi a cikin gida", "Ku ƙara ruwa don ta yi yawa", "Ku gauraya ta da madarar jiya"], answer: 0, why: "Tacewa, rufewa da sanyayawa da sauri suna hana datti da ƙwayoyin cuta." },
      { objective: "O2", q: "Me yasa ake ba saniya abinci nan da nan bayan tatsa?", options: ["Don ta yi barci", "Don ƙara kitse", "Don ta ci gaba da tsayuwa yayin da kan nono ke rufewa", "Ba shi da wani amfani"], answer: 2, why: "Tsayuwa yayin da hanyar kan nono ke rufewa tana hana datti daga shimfiɗa shiga cikinta." },
      { objective: "O3", q: "Ciwon hantsa da ba a gani (subclinical) shi ne:", options: ["Ciwon hantsa mai sashe mai kumburi da zafi", "Cutar awaki kawai", "Matsalar abinci", "Ciwon hantsa ba tare da alamar da ake gani ba, wanda gwaji ke ganowa"], answer: 3, why: "Sai gwaji kamar CMT ne ke nuna ciwon hantsa da ba a gani." },
      { objective: "O3", q: "A gwajin CMT, ta yaya ake karanta sakamako?", options: ["A jira awa ɗaya, sannan a shaƙa", "A juya a karanta cikin daƙiƙoƙi: ruwa-ruwa daidai ne, kauri alama ce", "A ɗanɗana", "A fara dafa ta"], answer: 1, why: "Ana karanta alamar cikin daƙiƙoƙi; kauri yana nufin ƙwayoyin halitta sun yi yawa." },
      { objective: "O3", q: "Yaushe BA za ku dogara da CMT ga saniya ba?", options: ["A kwanakin farko bayan haihuwa", "Da safe", "Lokacin da take a natse", "Bayan ciyarwa"], answer: 0, why: "Ƙwayoyin halitta suna da yawa a dabi'ance jim kaɗan bayan haihuwa, don haka sakamakon yana ruɗarwa." },
      { objective: "O3", q: "Wa ke zaɓar yadda za a yi maganin ciwon hantsa?", options: ["Maƙwabci", "Mai sayen madara", "Likitan dabbobinku, tare da bin label", "Bidiyo a intanet"], answer: 2, why: "Magani da lokacin jira kafin sayar da madara suna fitowa ne daga likitan dabbobi da label." },
      { objective: "O4", q: "Wace kwantena ce ta fi jawo a ƙi karɓar madara?", options: ["Kwanon aluminium mai tsafta", "Kwanon bakin ƙarfe", "Gangar ƙarfe ta madara mai tsafta", "Jarkar roba mai kaɗe-kaɗe"], answer: 3, why: "Kaɗe-kaɗen roba suna riƙe datti da ƙwayoyin cuta, kuma masu saye da yawa suna ƙin karɓar madara a cikinsu." },
      { objective: "O4", q: "Wani ɗan kasuwa ya ba da shawarar a ƙara ɗan ruwa a kowane kwano. Ku:", options: ["Ƙi: zamba ce, sau da yawa ta saɓa wa doka, kuma lactometer yana kama ta", "Yarda idan farashi ya yi ƙasa", "Ƙara gari maimakon haka", "Ƙara ruwa a lokacin rani kawai"], answer: 0, why: "Ƙara wani abu a madara zamba ce, kuma gwaje-gwajen mai saye suna kama ta." },
      { objective: "O4", q: "Gwajin dafawa (clot-on-boiling) yana duba:", options: ["Ƙarin ruwa", "Madarar da ta yi tsami ko mara kyau", "Shekarun dabbar", "Yawan kitse"], answer: 1, why: "Madara mai tsami ko mara kyau tana yin gudaji idan aka dafa ta." },
      { objective: "O4", q: "A Kenya, wace hukuma ce ke ba da lasisi ga masu sarrafa madara?", options: ["Kenya Wildlife Service (hukumar namun daji)", "Ofishin ruwa na gundumar", "Kenya Dairy Board", "Pest Control Products Board (hukumar magungunan ƙwari)"], answer: 2, why: "Kenya Dairy Board tana kula da harkar madara kuma tana ba da izini ga masu sarrafa madara." },
      { objective: "O5", q: "Kuɗin kowace lita shi ne:", options: ["Farashin da mai saye ke biya", "Kuɗin abinci kawai", "Litoci a raba da adadin shanu", "Dukkan kuɗaɗen lokacin a raba da litocin da aka samar"], answer: 3, why: "Ya haɗa da kowane kuɗi, ba abinci kaɗai ba." },
      { objective: "O5", q: "Kuɗaɗen wata KES 50,000 ne kuma kun samar da lita 1,250. Kuɗin kowace lita?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 a raba da 1,250 shi ne 40." },
      { objective: "O5", q: "Wane bayani kuke buƙata don sanin lokacin da za a iya sake sayar da madarar saniyar da aka yi wa magani?", options: ["Ranar magani da lokacin jira daga label ko likitan dabbobi", "Launinta", "Yanayi", "Farashin abinci"], answer: 0, why: "Rubuta magani da lokacin jirarsa yana hana sauran magani isa ga masu saye." },
      { objective: "O5", q: "Kuɗin kowace litarku ya fi farashi. Wuri mai kyau na farko da za a duba shi ne:", options: ["Sayen ƙarin shanu lokaci ɗaya", "Sayar da madara ba tare da gwaji ba", "Ɓarnar abinci, asarar ciwon hantsa da madarar da aka ƙi karɓa", "Daina ajiye dukkan bayanai"], answer: 2, why: "Abinci yawanci shi ne kuɗi mafi girma, kuma ciwon hantsa da ƙin karɓa suna ɓata madarar da kuka biya kuɗi don samarwa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Dabbobi da gida", objective: "O1", notYet: "Babu alaƙa tsakanin dabbobi, gida da abincin da gonar ke da shi.", meets: "Tsarin ya dace da dabbobin gonar da gidansu: wurin tatsa mai tsafta, busasshiyar shimfiɗa da taki a nesa.", exceeds: "Ya ambaci gyaran gida ɗaya da ranarsa, kamar ingantacciyar magudanar ruwa ko wurin tatsa na daban." },
      { name: "Tsarin tatsa", objective: "O2", notYet: "Wasu matakai sun ɓace ko ba a jere suke ba, misali babu wanke hannu ko goge kan nono.", meets: "Dukkan matakai tun daga mai tatsa da kayan aiki har zuwa tacewa, rufewa da sanyayawa, a jere.", exceeds: "Ya faɗi wanda ke yin kowane mataki da yadda ake duba tsarin kowane mako." },
      { name: "Duba ciwon hantsa", objective: "O3", notYet: "Babu alamun ciwon hantsa ko CMT a tsarin, ko magani a gida ba tare da likitan dabbobi ba.", meets: "Ya jera alamun, lokacin yin CMT, yadda ake rubuta sakamako, da kiran likitan dabbobi idan aka ga alama; ana ware madarar dabbobin da aka yi wa magani har sai label ko likitan dabbobi ya ba da dama.", exceeds: "Ya haɗa da tebur mai sauƙi na sakamakon CMT ga kowace dabba da kowane sashen hantsa." },
      { name: "Sanyayawa da kai wa", objective: "O4", notYet: "Ana barin madara da ɗumi ko a kai ta a makare; ana amfani da kwantenonin roba.", meets: "Ana sanyaya madara nan take kuma a kai ta cikin lokacin mai saye, a kwantenonin ƙarfe, ba tare da ƙara komai ba.", exceeds: "Ana rubuta lokutan kai wa, sakamakon gwaji da duk wani ƙin karɓa da dalilinsa." },
      { name: "Kuɗin kowace lita", objective: "O5", notYet: "Wasu kuɗaɗe sun ɓace ko lissafin bai yi daidai ba.", meets: "An jera dukkan kuɗaɗe, kuɗin kowace lita daidai ne, kuma an kwatanta shi da farashin mai saye.", exceeds: "Ya ambaci canji ɗaya don rage kuɗin kowace lita da yadda za a auna tasirinsa a wata mai zuwa." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Raguwar ƙin karɓar madara a cibiyar karɓa ko wurin mai saye cikin watanni 3 (bayanan kai wa)",
      "Masu koyo da ke yin CMT a kan dabbobinsu aƙalla sau ɗaya a wata (binciken biyo baya)",
      "Masu koyo da suka san kuɗin kowace litarsu kuma suke bin diddiginsa bayan kwanaki 30 (binciken biyo baya)",
      "Canjin matsakaicin madarar da kowace dabba ke kai wa cikin watanni 3, inda bayanai suka ba da dama"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Littafi da alƙalami, ko waya mai tebur ɗin lissafi (spreadsheet) ko manhajar rubutu",
      "Na'urar lissafi (ta waya ma ta isa)",
      "Samun dabbar da ake tatsa don ayyukan atisaye, ko gonar nuni",
      "Farantin CMT da ruwan gwaji, aro daga ƙungiyar haɗin gwiwa, likitan dabbobi ko ofishin faɗakarwa idan an buƙata",
      "Kusan minti 75 gaba ɗaya, a gajerun zama, da atisaye a lokutan tatsa"
    ],
    facilitatorNotes: [
      "Ku nuna tsarin tatsa da CMT a aikace a gonar wani memba ko ta ƙungiyar haɗin gwiwa; ku bar kowane mai koyo ya yi CMT da kansa.",
      "Ku gayyaci cibiyar karɓar madara ko ƙungiyar haɗin gwiwa ta yankin ta nuna gwaje-gwajen madararta (alcohol, gwajin dafawa, lactometer).",
      "Kada ku taɓa ba da yawan magani, na allurar rigakafi ko na hormone, ko lokacin jira; ku tura masu koyo zuwa likitan dabbobinsu da label na magani.",
      "Ku nemi masu koyo su kawo rasitan abincin watan da ya wuce da takardun kai madara don aikin kuɗin kowace lita; ku yi amfani da lambobin misali ga waɗanda ba su da bayanai.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya.",
      "Ku haɗa wannan kwas da \"Livestock Nutrition and Feed Formulation with Local Ingredients\" ga masu koyo da kuɗin kowace litarsu ya yi yawa saboda abinci."
    ]
  }
};
