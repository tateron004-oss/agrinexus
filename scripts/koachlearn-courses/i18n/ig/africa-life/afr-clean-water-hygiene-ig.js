"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-clean-water-hygiene.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const WHO_WATER = { name: "World Health Organization (WHO): Akwụkwọ ozi gbasara mmiri ọṅụṅụ", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "US Centers for Disease Control and Prevention (CDC): Otu esi eme ka mmiri dị mma (isi ya, ime ka ọ dọwa na ịcha ya, igbu nje)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: Banyere ịsa aka (oge ndị dị mkpa na nzọụkwụ)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "WHO/UNICEF Joint Monitoring Programme (JMP): Ọkwa ụlọ mposi", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "World Health Organization: Akwụkwọ ozi gbasara ọrịa afọ ọsịsa", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "World Health Organization: Akwụkwọ ozi gbasara ọrịa kọlera", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-ig",
  lang: "ig",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Mmiri Dị Ọcha, Ụlọ Mposi na Ịdị Ọcha n'Ụlọ",
  skills: "Ịhọrọ ebe mmiri kacha dị mma, Ime ka mmiri ọṅụṅụ dị mma karị, Idebe mmiri n'ụzọ dị mma, Iji ncha asa aka, Idebe ụlọ mposi na nsị ụmụaka n'ụzọ dị mma, Ịhụ ihe ịrịba ama ihe egwu nke afọ ọsịsa na kọlera",
  outcome: "idebe mmiri, aka na ụlọ mposi ezinụlọ gị n'ọcha: ịhọrọ mmiri kacha dị mma, ime ka ọ dị mma karị n'ụlọ, idebe ya ka o kpuchie, iji ncha asa aka n'oge ndị dị mkpa, iwepụ nsị n'ụzọ dị mma, na ịmata ihe ịrịba ama na-egosi na ị ga-aga ụlọ ọgwụ ugbu a.",
  about: [
    "Nje dị na mmiri, n'aka na n'ime nsị na-ebute afọ ọsịsa, kọlera na typhoid. Afọ ọsịsa so n'ihe kacha egbu ụmụaka, ma enwere ike igbochi ọtụtụ ya site na mmiri dị mma, ncha na ụlọ mposi dị ọcha. Ihe ọmụmụ a bụ maka ndị nne, ndị nna, nne na nna ochie, ndị na-elekọta ụmụaka na ndị ntorobịa n'obodo mepere emepe na n'ime obodo na Kenya, Nigeria, Ghana, DR Congo, Senegal, Egypt na n'Africa niile.",
    "Ị ga-atụnyere ebe mmiri dị nso gị, mee ka mmiri ọṅụṅụ dị mma karị site n'isi ya ma ọ bụ iji ihe chlorine, debe ya ka ọ nọrọ n'ọcha, dozie ebe a na-eji ncha asa aka, debe ụlọ mposi na nsị ụmụaka n'ụzọ dị mma, ma mụta ihe ịrịba ama ihe egwu nke afọ ọsịsa na kọlera.",
    "Ihe ọmụmụ a na-akụzi otu esi egbochi ọrịa na mgbe ị ga-achọ enyemaka. Ọ naghị agwa gị otu esi agwọ ọrịa ma ọ bụ ọgwụ ị ga-enye: nke ahụ bụ ọrụ ụlọ ọgwụ, onye ọrụ ahụike obodo na ministri ahụike gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'ụlọ."
  ],
  finalTask: "Mee atụmatụ mmiri dị ọcha na ịdị ọcha n'otu peeji maka ụlọ gị: ebe mmiri gị kacha dị mma na nke ndabere, otu ị ga-esi mee ka mmiri ọṅụṅụ dị mma karị, otu ị ga-esi debe ma kesaa ya, ebe ị na-asa aka na oge ndị dị mkpa ezinụlọ gị na-asa aka, otu ị na-esi debe ụlọ mposi na nsị ụmụaka n'ụzọ dị mma, na kaadị ihe ịrịba ama ihe egwu nwere aha na nọmba ekwentị ụlọ ọgwụ ma ọ bụ onye ọrụ ahụike obodo kacha nso gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nne, ndị nna, nne na nna ochie, ndị na-elekọta ụmụaka na ndị ntorobịa n'Africa niile, n'obodo mepere emepe, n'ebe obibi na-enweghị usoro na n'ime obodo. Ọtụtụ na-eku mmiri na borehole, olulu mmiri, kiosk, osimiri ma ọ bụ pọmpụ a na-ekekọrịta, ma ọ bụ zụta ya na sachet ma ọ bụ jerrycan, ma na-ekekọrịta ụlọ mposi ma ọ bụ olulu mposi.",
    startingPoint: "Ha maara na mmiri ruru unyi nwere ike ime ka mmadụ daa ọrịa, ha na-esikarịkwa mmiri maka ụmụ ọhụrụ. Ọtụtụ anaghị edozi mmiri ọṅụṅụ niile, ha na-edebe ya n'ihe e meghere emeghe, na-eji aka tinye iko n'ime ya, na-asa aka n'enweghị ncha ma ọ bụ naanị mmiri, ha amaghịkwa nke ọma ihe ịrịba ama afọ ọsịsa nke chọrọ ụlọ ọgwụ ozugbo.",
    gap: "Afọ ọsịsa, kọlera na typhoid na-agbasa site na mmiri na-adịghị mma, aka a na-asaghị asa na nsị, ma na-egbu ọtụtụ ụmụaka. Ezinụlọ chọrọ omume ole na ole kwa ụbọchị, mmiri dị mma, ncha n'oge kwesịrị ekwesị na ụlọ mposi dị mma, ya na ịmata mgbe ha ga-aga ụlọ ọgwụ ozugbo, iji chebe ụmụ ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: ekwentị nkịtị nwere data dị oke ọnụ; nkuzi na-arụ ọrụ n'enweghị ịntanetị mgbe e bupụtara ha",
      "Ego: obere ego; jiri ụzọ dị ọnụ ala (isi mmiri, ihe chlorine e rere maka mmiri, ncha, ebe ịsa aka dị mfe)",
      "Ahụike: naanị mgbochi na ihe ịrịba ama; enweghị ọnụọgụ ọgwụ, ọgwụgwọ ma ọ bụ nchọpụta ọrịa; ndị na-amụ ihe na-agbaso ụlọ ọgwụ ha, onye ọrụ ahụike obodo na ministri ahụike",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ ụlọ na ọrụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ebe mmiri dị nso ụlọ gị", action: "ịhazi ebe mmiri ndị ahụ site na nke kacha dị mma ruo nke kacha nwee ihe egwu ma họrọ otu maka ọṅụṅụ", standard: "na-enye ihe kpatara ya maka nke ọ bụla ma na-akpọ aha ebe mmiri ndabere" },
    { id: "O2", condition: "Mgbe e nyere gị mmiri site n'ebe mmiri gị na ihe ndị ị nwere n'ụlọ", action: "ime ka mmiri ọṅụṅụ dị mma karị site n'isi ya ma ọ bụ iji ihe chlorine e rere maka mmiri", standard: "na-agbaso nzọụkwụ ọ bụla, gụnyere ibu ụzọ hapụ mmiri gbara agba ka ọ dọwa ma ọ bụ cha ya, na ịgbaso ihe e dere na labelụ ihe ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị mmiri e doziri edozi na ihe ndị e ji ebu mmiri n'ụlọ gị", action: "idebe na ikesa mmiri ọṅụṅụ ka aka na unyi ghara imetụ ya", standard: "na-eji ihe dị ọcha e kpuchiri ekpuchi ma na-awụpụ ya ma ọ bụ eji tap, ọ dịghị mgbe a na-etinye iko n'ime ya" },
    { id: "O4", condition: "Mgbe e nyere gị ncha ma ọ bụ ntụ na mmiri n'ụlọ", action: "iji ncha asa aka n'oge ndị dị mkpa ma dozie ebe ịsa aka", standard: "na-ekpochapụ akụkụ aka niile opekata mpe sekọnd 20, ebe ịsa aka ahụ dịkwa nso ụlọ mposi na kichin" },
    { id: "O5", condition: "Mgbe e nyere gị ụlọ mposi ma ọ bụ olulu mposi gị na ụmụaka nọ n'ụlọ", action: "idebe ụlọ mposi n'ọcha ma wepụ nsị ụmụaka n'ụzọ dị mma", standard: "na-enweghị nsị a hapụrụ n'ezi, ma ihe mkpuchi dị n'elu ya" },
    { id: "O6", condition: "Mgbe e nyere gị onye ezinụlọ nwere afọ ọsịsa ma ọ bụ nsị dị ka mmiri", action: "ịhụ ihe ịrịba ama ihe egwu nke mmiri ịkpọ nkụ n'ahụ na kọlera ma kpọga onye ahụ n'ụlọ ọgwụ ozugbo", standard: "na-akpọ aha opekata mpe ihe ịrịba ama ihe egwu anọ na ụlọ ọgwụ ma ọ bụ onye ọrụ ahụike obodo kacha nso" }
  ],
  chapters: [
    {
      name: "Isi 1: Mmiri dị mma ịṅụ",
      lessons: [
        {
          title: "Ịhọrọ ebe mmiri kacha dị mma",
          objectives: ["O1"],
          minutes: 5,
          goal: "Hazie ebe mmiri dị nso ụlọ gị site na nke kacha dị mma ruo nke kacha nwee ihe egwu.",
          text: [
            "Mmiri nwere ike ịdị ọcha n'anya ma ka bu nje. Ihe egwu kacha ukwuu bụ mgbe nsị (unyi mmadụ ma ọ bụ anụmanụ) banyere n'ime mmiri. WHO kwuru na mmiri na-adịghị mma nwere ike igbasa afọ ọsịsa, kọlera, afọ ọsịsa ọbara (dysentery), typhoid, hepatitis A na polio. Mmiri si n'osimiri na ọdọ mmiri nwekwara ike ibu ikpuru na-ebute bilharzia (schistosomiasis).",
            "Ebe mmiri dị mma karị bụkarị mmiri pọmpụ (pipe), borehole ma ọ bụ olulu mmiri e chebere echebe nwere mkpuchi na pọmpụ, isi iyi e chebere echebe, na mmiri ozuzo e chekwara n'ime tank dị ọcha e kpuchiri ekpuchi. Ebe mmiri nwere ihe egwu karị bụ olulu mmiri e meghere emeghe, isi iyi e chebeghị, osimiri, ọdọ mmiri, ọdọ mmiri ukwu na dam, ebe mmadụ na anụmanụ na-asa ahụ, egwu mmiri ma na-aṅụ mmiri. Mmiri si na kiosk, tanka ma ọ bụ sachet dị mma naanị dị ka ebe o si bịa na otu e si jikwaa ya.",
            "Lee ebe mmiri ọ bụla dị nso gị. E kpuchiri ya? Ụlọ mposi, olulu mposi ma ọ bụ ebe anụmanụ dị nso ya, ma ọ bụ n'elu ugwu karịa ya? Ndị mmadụ na-asa akwa ebe ahụ ma ọ bụ na-ahapụ anụmanụ ka ha ṅụọ mmiri ebe ahụ? Họrọ nke kacha dị mma maka ọṅụṅụ na isi nri, na nke ndabere maka mgbe ọ kọrọ ma ọ bụ mebie. Ọbụlagodi ezigbo mmiri nwere ike ịrụ unyi n'ụzọ ịla n'ụlọ, ya mere ị ka ga-edozi ma debe ya nke ọma (nkuzi ndị na-esote)."
          ],
          steps: ["Depụta ebe mmiri ọ bụla ezinụlọ gị na-eji.", "Maka nke ọ bụla jụọ: e kpuchiri ya, e chebere ya, ọ dị anya n'ụlọ mposi na anụmanụ?", "Hazie ha site na nke kacha dị mma ruo nke kacha nwee ihe egwu.", "Họrọ otu maka ọṅụṅụ na isi nri, na nke ndabere.", "Jiri mmiri nwere ihe egwu naanị maka ịsa ihe, ma ka dozie mmiri ọ bụla ị ga-aṅụ."],
          words: [["Nsị", "unyi mmadụ ma ọ bụ anụmanụ (mposi)."], ["Ebe mmiri e chebere echebe", "olulu mmiri, borehole ma ọ bụ isi iyi e kpuchiri ma mechie nke ọma ka unyi na mmiri na-asọ asọ ghara ịbanye."], ["Bilharzia (schistosomiasis)", "ọrịa na-esi n'obere ikpuru dị n'ụfọdụ osimiri na ọdọ mmiri."]],
          slides: [
            { title: "Ịdị ọcha n'anya abụghị ịdị mma", bullets: ["Nsị dị na mmiri na-agbasa nje", "Afọ ọsịsa, kọlera, typhoid, hepatitis A", "Osimiri na ọdọ mmiri nwere ike ibu ikpuru bilharzia"] },
            { title: "Ndị dị mma karị", bullets: ["Mmiri pọmpụ (pipe)", "Borehole ma ọ bụ olulu mmiri e chebere, nwere mkpuchi na pọmpụ", "Isi iyi e chebere; mmiri ozuzo na tank dị ọcha e kpuchiri"] },
            { title: "Ndị nwere ihe egwu karị", bullets: ["Olulu mmiri e meghere na isi iyi e chebeghị", "Osimiri, ọdọ mmiri, ọdọ mmiri ukwu na dam", "Kiosk, tanka, sachet: dị mma naanị dị ka ebe o si bịa"] },
            { title: "Lelee ebe mmiri ọ bụla", bullets: ["E kpuchiri ya? Ọ dị anya n'ụlọ mposi na anụmanụ?", "Họrọ nke kacha dị mma maka ọṅụṅụ, na nke ndabere", "Ka dozie ma debe ya nke ọma"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Dee ebe mmiri ọ bụla ezinụlọ gị na-eji. Debe akara n'akụkụ nke ọ bụla: dị mma karị ma ọ bụ nwere ihe egwu karị, na ihe kpatara ya. Gbaa okirikiri gburugburu nke ị ga-eji maka ọṅụṅụ na nke ndabere.",
          youCanNow: "ịtụnyere ebe mmiri dị nso gị ma họrọ nke kacha dị mma maka ọṅụṅụ, ya na nke ndabere.",
          quickCheck: [
            { objective: "O1", q: "Kedu ebe mmiri na-adịkarị mma maka ọṅụṅụ?", options: ["Borehole e chebere echebe nwere mkpuchi na pọmpụ", "Osimiri ebe ehi na-aṅụ mmiri", "Ọdọ mmiri e meghere emeghe", "Dam ebe ndị mmadụ na-asa akwa"], answer: 0, why: "Ebe mmiri e chebere ma kpuchie na-egbochi nsị na mmiri na-asọ asọ ịbanye." },
            { objective: "O1", q: "Mmiri osimiri dị ọcha n'anya. Gịnị bụ eziokwu?", options: ["Mmiri dị ọcha n'anya na-adị mma mgbe niile", "Mmiri dị ọcha n'anya ka nwere ike ibu nje, ya mere dozie ya tupu ị ṅụọ", "Naanị mmiri na-acha aja aja nwere ihe egwu", "Osimiri na-asacha onwe ha"], answer: 1, why: "Anya anaghị ahụ nje; mmiri dị ọcha n'anya ka nwere ike ibu ha." }
          ]
        },
        {
          title: "Ime ka mmiri ọṅụṅụ dị mma karị n'ụlọ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mee ka mmiri ọṅụṅụ dị mma karị site n'isi ya ma ọ bụ iji ihe chlorine e rere maka mmiri.",
          text: [
            "Ọ bụrụ na mmiri gị nwere ike ọ gaghị adị mma, dozie ya tupu ị ṅụọ ya, tupu ị gwakọta nri nwa ọhụrụ ma ọ bụ formula, na tupu ị kpọọ ezé. Ụzọ abụọ a na-ejikarị bụ isi ya na chlorine. Ha abụọ na-arụ ọrụ kacha mma na mmiri dị ọcha.",
            "Ọ bụrụ na mmiri ahụ gbara agba (cloudy), buru ụzọ hapụ ya n'ihe dị ọcha ka ọ dọwa ka unyi daa n'ala, wee wụpụ mmiri dị ọcha ahụ site na akwa dị ọcha a pịaji ọtụtụ ugboro. Ịhapụ ya ka ọ dọwa na iji akwa cha ya anaghị eme ka mmiri dị mma n'onwe ha; ha na-akwado ya maka isi ya ma ọ bụ chlorine.",
            "Isi ya: mee ka mmiri ahụ sie ike nke ọma, nwee nnukwu afụ, ruo nkeji 1. N'elu ugwu dị elu, karịa ihe dị ka mita 2,000, sie ya nkeji 3. Hapụ ya ka ọ jụọ oyi, e kpuchiri ya, n'otu ite ahụ ma ọ bụ n'ihe ọzọ dị ọcha.",
            "Chlorine: jiri ihe chlorine e rere maka mmiri ọṅụṅụ (mmiri mmiri, mkpụrụ ọgwụ ma ọ bụ sachet) ma ọ bụ nke onye ọrụ ahụike gị nyere gị. Gbasoo labelụ ya kpọmkwem: ole maka mmiri ole, na ogologo oge ị ga-echere tupu ị ṅụọ (ọtụtụ mgbe opekata mpe nkeji 30). Mmiri gbara agba nwere ike ịchọ karịa; labelụ ga-agwa gị. Debe chlorine ebe ụmụaka na-agaghị eru. Ọ bụrụ na ọ nweghị labelụ ma ọ bụ obi abụọ dị gị, jụọ onye ọrụ ahụike obodo gị ma ọ bụ ụlọ ọgwụ. WHO na-anwale ụfọdụ ihe e ji edozi mmiri n'ụlọ; ministri ahụike gị nwere ike ịgwa gị nke a kwadoro n'ebe ị bi."
          ],
          steps: ["Ọ bụrụ na ọ gbara agba: hapụ ya ka ọ dọwa, wee wụpụ ya site na akwa dị ọcha a pịajiri.", "Sie ya: sie ya nke ọma nkeji 1 (nkeji 3 n'elu ugwu dị elu), wee hapụ ya ka ọ jụọ oyi e kpuchiri ya.", "Ma ọ bụ chlorine: tinye ihe ahụ dị ka labelụ ya kwuru, kpalie ya, ma chere oge e dere na labelụ.", "Wụnye ya n'ihe dị ọcha e kpuchiri ekpuchi.", "Debe ihe chlorine ebe ụmụaka na-agaghị eru."],
          words: [["Isi ya nke ọma (rolling boil)", "mmiri na-esi ike nke ọma nwere nnukwu afụ na-anaghị akwụsị mgbe ị kpaliri ya."], ["Ihe chlorine", "mmiri mmiri, mkpụrụ ọgwụ ma ọ bụ sachet e rere iji gbuo nje dị na mmiri ọṅụṅụ."], ["Ịdọwa (settle)", "ịhapụ mmiri ka ọ nọrọ jụụ ka unyi daa n'ala."]],
          slides: [
            { title: "Mgbe ị ga-edozi mmiri", bullets: ["Tupu ị ṅụọ ya", "Tupu ị gwakọta nri nwa ọhụrụ ma ọ bụ formula", "Tupu ị kpọọ ezé"] },
            { title: "Buru ụzọ dozie mmiri gbara agba", bullets: ["Hapụ ya ka ọ dọwa", "Wụpụ ya site na akwa dị ọcha a pịajiri", "Nke a na-akwado ya; ọ dịbeghị mma"] },
            { title: "Isi ya", bullets: ["Sie ya nke ọma nkeji 1", "Nkeji 3 karịa ihe dị ka mita 2,000", "Hapụ ya ka ọ jụọ oyi e kpuchiri ya"] },
            { title: "Chlorine", bullets: ["Ihe e rere maka mmiri ọṅụṅụ", "Gbasoo labelụ: ole na oge ichere", "Obi abụọ? Jụọ onye ọrụ ahụike; debe ya ebe ụmụaka na-agaghị eru"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Họrọ otu ụzọ, isi ya ma ọ bụ ihe chlorine, ma dozie otu ihe e ji ebu mmiri ọṅụṅụ taa, nzọụkwụ n'otu n'otu. Dee nzọụkwụ ọ bụla i mere.",
          youCanNow: "ime ka mmiri gbara agba ma ọ bụ nke obi abụọ dị ka ọ dị mma ịṅụ site n'ịhapụ ya ka ọ dọwa, wee sie ya ma ọ bụ jiri ihe chlorine dị ka labelụ ya kwuru.",
          quickCheck: [
            { objective: "O2", q: "Mmiri gị gbara agba. Gịnị ka ị ga-eme tupu ị sie ya ma ọ bụ tinye chlorine?", options: ["Tinye shuga", "Ṅụọ ya ngwa ngwa", "Hapụ ya ka ọ dọwa ma wụpụ ya site na akwa dị ọcha a pịajiri", "Ọ dịghị ihe; mmiri gbara agba dị mma"], answer: 2, why: "Ịhapụ ya ka ọ dọwa na ịcha ya na-ewepụ unyi ka isi ya ma ọ bụ chlorine rụọ ọrụ nke ọma." },
            { objective: "O2", q: "Ogologo oge ole ka ị ga-esi mmiri nke ọma n'ebe nkịtị?", options: ["Naanị ruo mgbe ọ kpọrọ ọkụ", "Sekọnd 5", "Ruo mgbe ọkara ya kọrọ", "Nkeji 1"], answer: 3, why: "CDC na-adụ ọdụ ka e sie ya nke ọma nkeji 1, ma ọ bụ nkeji 3 n'elu ugwu dị elu." }
          ]
        },
        {
          title: "Idebe na ikesa mmiri n'ụzọ dị mma",
          objectives: ["O3"],
          minutes: 4,
          goal: "Debe ma kesaa mmiri ọṅụṅụ ka aka na unyi ghara imetụ ya.",
          text: [
            "Mmiri dị mma nwere ike ịrụ unyi ọzọ n'ụlọ. Nje na-abanye mgbe a tinyere aka ma ọ bụ iko n'ime ihe e ji ebu mmiri ahụ, mgbe a hapụrụ ya ka ọ ghere oghe, ma ọ bụ mgbe ihe ahụ n'onwe ya ruru unyi.",
            "Debe mmiri ọṅụṅụ n'ihe dị ọcha nwere mkpuchi, ọ kachasị mma ma ọ bụrụ na o nwere olu dị warara ma ọ bụ tap. Debe ya n'elu, ọ bụghị n'ala, ma dị anya n'anụmanụ. Wụpụ mmiri ma ọ bụ jiri tap; etinyela iko ma ọ bụ aka gị n'ime ya mgbe ọ bụla. Jiri ncha na mmiri dị mma saa ihe ahụ na mkpuchi ya mgbe niile, ma hapụ ya ka ọ kpọọ nkụ, gbanwee ya isi n'ala.",
            "Ikpuchi mmiri na-egbochikwa anwụnta ịkọ àkwá n'ime ya. Kewapụ mmiri ọṅụṅụ na mmiri e ji asa ihe. Ezinụlọ nọ na Kumasi, Lubumbashi ma ọ bụ Kano nwere ike iji otu iwu a: otu ihe dị ọcha e kpuchiri ekpuchi maka mmiri ọṅụṅụ n'ụlọ ọ bụla, ọ dịkwaghị onye na-etinye iko n'ime ya."
          ],
          steps: ["Jiri ihe dị ọcha nwere mkpuchi, olu dị warara ma ọ bụ tap.", "Debe ya n'elu, ọ bụghị n'ala, dị anya n'anụmanụ.", "Wụpụ ya ma ọ bụ jiri tap: etinyela iko ma ọ bụ aka.", "Jiri ncha na mmiri dị mma saa ihe ahụ mgbe niile.", "Kewapụ mmiri ọṅụṅụ na mmiri e ji asa ihe."],
          words: [["Ihe e ji ebu mmiri", "jerrycan, bọket, ite ma ọ bụ karama na-ebu mmiri."], ["Itinye iko n'ime ya (dipping)", "itinye iko ma ọ bụ aka n'ime mmiri iji wepụta ụfọdụ."]],
          slides: [
            { title: "Mmiri dị mma nwere ike ịrụ unyi ọzọ", bullets: ["Itinye aka ma ọ bụ iko n'ime ya", "Ihe e ji ebu mmiri e meghere emeghe", "Ihe e ji ebu mmiri ruru unyi"] },
            { title: "Debe ya nke ọma", bullets: ["Ihe dị ọcha nwere mkpuchi, olu dị warara ma ọ bụ tap", "N'elu, ọ bụghị n'ala, dị anya n'anụmanụ", "Kewapụ ya na mmiri e ji asa ihe"] },
            { title: "Kesaa ya nke ọma", bullets: ["Wụpụ ya, ma ọ bụ jiri tap", "Etinyela iko ma ọ bụ aka mgbe ọ bụla", "Jiri ncha saa ihe ahụ mgbe niile"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Lee otu e si edebe mmiri ọṅụṅụ n'ụlọ gị. E kpuchiri ya? Onwere onye na-etinye iko n'ime ya? Mee otu mgbanwe taa, dị ka mkpuchi, ngaji mmiri nwere ogologo aka a kwụnyere n'ihe nkwụnye, ma ọ bụ ihe e ji ebu mmiri nwere tap.",
          youCanNow: "idebe na ikesa mmiri ọṅụṅụ ka ọ nọrọ n'ọcha mgbe i dozichara ya.",
          quickCheck: [
            { objective: "O3", q: "Kedu ụzọ kacha dị mma isi wepụta mmiri n'ihe e ji edebe ya?", options: ["Tinye iko n'ime ya", "Wụpụ ya ma ọ bụ jiri tap", "Tinye aka gị n'ime ya", "Hapụ mkpuchi ya ka ọ dị ngwa"], answer: 1, why: "Iwụpụ ya ma ọ bụ iji tap na-egbochi aka na iko ịbanye na mmiri dị ọcha." },
            { objective: "O3", q: "Gịnị mere a ga-eji debe mkpuchi n'elu ihe e ji ebu mmiri ọṅụṅụ?", options: ["Ọ na-egbochi unyi, aka na anwụnta", "Ọ na-eme ka mmiri jụkwuo oyi", "Ọ bụ naanị maka mma", "Ọ na-eme ka mmiri sie"], answer: 0, why: "Mkpuchi na-egbochi unyi, nje na àkwá anwụnta ịbanye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mmiri dị mma ịṅụ",
        questions: [
          { objective: "O1", q: "Olulu mposi dị n'elu ugwu nso olulu mmiri na-emighị emi e meghere emeghe. Gịnị ka ị ga-eme?", options: ["Ṅụọ ya; ọ dị ọcha n'anya", "Jiri olulu mmiri ahụ naanị maka ọṅụṅụ", "Họrọ ebe mmiri dị mma karị maka ọṅụṅụ, ma dozie mmiri ọ bụla ị ga-aṅụ", "Tinye naanị mkpuchi n'olulu mposi ahụ"], answer: 2, why: "Nsị nwere ike isi n'olulu mposi sọba n'olulu mmiri e meghere dị nso; họrọ ebe mmiri dị mma karị ma dozie mmiri ọṅụṅụ." },
          { objective: "O2", q: "Kedu okwu ziri ezi gbasara ihe chlorine e ji edozi mmiri?", options: ["Jiri ole masịrị gị", "Ṅụọ ya ozugbo", "Bleach ọ bụla bụ otu ihe ahụ", "Gbasoo labelụ maka ole na ogologo oge ichere"], answer: 3, why: "Labelụ na-enye ole kwesịrị ekwesị na oge ichere maka ihe ahụ." },
          { objective: "O2", q: "Ị bi n'elu ugwu dị elu, karịa ihe dị ka mita 2,000. Ogologo oge ole ka ị ga-esi ya?", options: ["Nkeji 3, na-esi ike nke ọma", "Sekọnd 10", "Naanị nkeji 1", "Ọ dịghị mkpa isi ya"], answer: 0, why: "Mmiri na-esi n'okpomọkụ dị ala n'elu ugwu, ya mere CDC na-adụ ọdụ nkeji 3 n'ebe ahụ." },
          { objective: "O3", q: "Nwa gị na-etinye iko n'ime bọket mmiri. Kedu mgbanwe kacha mma?", options: ["Gwa ya ka o tinye ya ngwa ngwa", "Jiri ihe e kpuchiri ekpuchi ị na-awụpụ mmiri na ya, ma ọ bụ nke nwere tap", "Hapụ bọket ahụ ka ọ ghere oghe", "Tinye shuga na mmiri ahụ"], answer: 1, why: "Iwụpụ ya ma ọ bụ tap na-egbochi aka na iko ruru unyi iru mmiri dị ọcha." },
          { objective: "O1", q: "Mmiri si na kiosk ma ọ bụ tanka...", options: ["Na-adị mma mgbe niile", "Anaghị adị mma mgbe ọ bụla", "Na-adị mma naanị mgbe ọ kpọrọ ọkụ", "Dị mma naanị dị ka ebe o si bịa na otu e si jikwaa ya"], answer: 3, why: "Mmiri a zụrụ azụ nwere ike ịdị ọcha ma ọ bụ ruru unyi; jụọ ebe o si bịa ma ka debe ya nke ọma." }
        ]
      }
    },
    {
      name: "Isi 2: Aka dị ọcha, ụlọ mposi dị mma, omume ọsọ ọsọ",
      lessons: [
        {
          title: "Iji ncha asa aka n'oge ndị dị mkpa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jiri ncha saa aka n'oge ndị dị mkpa ma dozie ebe ịsa aka n'ụlọ.",
          text: [
            "Iji ncha asa aka so n'ụzọ kacha dị ọnụ ala isi kwụsị afọ ọsịsa na ọrịa obi (chest infections). Naanị mmiri ezughị; ncha na-ewepụ nje.",
            "Oge ndị dị mkpa: mgbe i jiri ụlọ mposi; mgbe i hichara ike nwa ma ọ bụ gbanwee nappy; tupu, n'oge na mgbe ị na-akwado nri; tupu ị rie nri na tupu ị nye nwa nri; mgbe ị lekọtara onye na-arịa afọ ọsịsa ma ọ bụ agbọ; mgbe ị fụrụ imi, kwaa ụkwara ma ọ bụ zee uzere; na mgbe i metụrụ anụmanụ ma ọ bụ ahịhịa unyi aka.",
            "Otu esi asa: jiri mmiri dị ọcha na-asọ asọ mee ka aka gị dị mmiri, tinye ncha, kpochapụ ọbụ aka, azụ aka, n'etiti mkpịsị aka na n'okpuru mbọ opekata mpe sekọnd 20 (ihe dị ka oge ị ga-abụ obere abụ ugboro abụọ), saa ya na mmiri na-asọ asọ ma hapụ ya ka ọ kpọọ nkụ n'ikuku ma ọ bụ jiri akwa dị ọcha. Ebe tap na-adịghị, ebe ịsa aka na-enyere aka: jerrycan ma ọ bụ karama nwere obere oghere na ihe mkpuchi, a kwụnyere ya ma ọ bụ a na-eji osisi ụkwụ atụgharị ya (a na-akpọkarị ya tippy tap), ncha kegidere na eriri, na obere nkume dị n'okpuru ya maka mmiri unyi. Debe ya nso ụlọ mposi na nso ebe ị na-esi nri."
          ],
          steps: ["Jiri mmiri dị ọcha na-asọ asọ mee ka aka dị mmiri.", "Tinye ncha.", "Kpochapụ ọbụ aka, azụ aka, n'etiti mkpịsị aka na n'okpuru mbọ opekata mpe sekọnd 20.", "Saa ya na mmiri na-asọ asọ.", "Hapụ ya ka ọ kpọọ nkụ n'ikuku ma ọ bụ jiri akwa dị ọcha.", "Dozie ebe ịsa aka nso ụlọ mposi na kichin."],
          words: [["Oge ndị dị mkpa", "oge ịsa aka na-egbochi nje kachasị."], ["Ebe ịsa aka", "ebe a kwadoro nwere mmiri na ncha maka ịsa aka."], ["Tippy tap", "ebe ịsa aka dị mfe e ji jerrycan ma ọ bụ karama mee, nke ị na-eji ụkwụ zọọ osisi iji tụgharịa ya."]],
          slides: [
            { title: "Ncha, ọ bụghị naanị mmiri", bullets: ["Ncha na-ewepụ nje n'aka", "Ọ na-egbochi afọ ọsịsa na ọrịa obi"] },
            { title: "Oge ndị dị mkpa", bullets: ["Mgbe ị gara ụlọ mposi ma ọ bụ hichaa ike nwa", "Tupu isi nri, iri nri ma ọ bụ inye nwa nri", "Mgbe ilekọta onye ọrịa; mgbe anụmanụ ma ọ bụ ahịhịa unyi"] },
            { title: "Otu esi asa", bullets: ["Mmiri, ncha, kpochapụ opekata mpe sekọnd 20", "Ọbụ aka, azụ aka, n'etiti mkpịsị aka, n'okpuru mbọ", "Saa na mmiri na-asọ asọ; kpọọ nkụ n'ikuku ma ọ bụ akwa dị ọcha"] },
            { title: "Ebe ịsa aka n'ụlọ", bullets: ["Jerrycan ma ọ bụ karama nwere tap ma ọ bụ osisi ntụgharị", "Ncha na eriri; obere nkume n'okpuru ya", "Nso ụlọ mposi na kichin"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Dozie ma ọ bụ mee ka otu ebe ịsa aka n'ụlọ gị ka mma taa, nwere mmiri na ncha, nso ụlọ mposi ma ọ bụ kichin. Wee gosi onye ọ bụla nọ n'ụlọ gị otu esi asa aka sekọnd 20.",
          youCanNow: "iji ncha saa aka nke ọma n'oge ndị dị mkpa ma dozie ebe ịsa aka n'ụlọ.",
          quickCheck: [
            { objective: "O4", q: "Olee mgbe ị ga-eji ncha saa aka gị?", options: ["Naanị otu ugboro n'ụbọchị", "Naanị tupu ịga chọọchị ma ọ bụ ụlọ alakụba", "Mgbe ụlọ mposi, mgbe ị hichara ike nwa na tupu isi nri ma ọ bụ iri nri", "Naanị mgbe ha ruru unyi n'anya"], answer: 2, why: "Oge ndị a dị mkpa na-egbochi nje si na nsị iru nri na ọnụ." },
            { objective: "O4", q: "Ogologo oge ole ka ị ga-eji ncha kpochapụ aka?", options: ["Sekọnd 2", "Ruo mgbe ncha gwụrụ", "Naanị ọbụ aka, ngwa ngwa", "Opekata mpe sekọnd 20, akụkụ aka niile"], answer: 3, why: "Ikpochapụ akụkụ aka niile opekata mpe sekọnd 20 na-ewepụ nje." }
          ]
        },
        {
          title: "Ụlọ mposi dị mma na nsị ụmụaka",
          objectives: ["O5"],
          minutes: 5,
          goal: "Debe ụlọ mposi gị n'ọcha ma wepụ nsị ụmụaka n'ụzọ dị mma.",
          text: [
            "Nsị a hapụrụ n'ezi, n'ọhịa, n'ubi, n'olulu mmiri nsọ (drain) ma ọ bụ n'osimiri, na-ebu nje nke ijiji, ụkwụ, mmiri ozuzo na aka na-eweghachi na nri na mmiri. WHO na UNICEF na-agụ ụlọ mposi dị ka nke dị mma karị mgbe ọ na-ekewapụ nsị na ndị mmadụ: ụlọ mposi flush ma ọ bụ pour-flush (nke a na-awụ mmiri), ma ọ bụ olulu mposi nwere slab. Ụlọ mposi ezinụlọ gị anaghị ekekọrịta na ndị ọzọ ka mma karị.",
            "Debe ụlọ mposi ma ọ bụ olulu mposi n'ọcha: saa slab ma ọ bụ oche ya mgbe niile, debe mkpuchi n'elu oghere ya ka ijiji ghara ịbịa, ma debe ebe ịsa aka n'akụkụ ya. Ụmụaka chọkwara ụlọ mposi ha nwere ike iji n'ụzọ dị mma, dị ka potty ma ọ bụ obere mkpuchi oghere.",
            "Nsị ụmụaka nta dị ize ndụ dị ka nke ndị okenye. Tinye ha n'ụlọ mposi ma ọ bụ olulu mposi ozugbo, gụnyere nke si na nappy na potty, wee jiri ncha saa potty ahụ na aka gị. Ahapụla ha n'ezi ma ọ bụ tụba ha n'olulu mmiri nsọ ma ọ bụ n'ahịhịa unyi."
          ],
          steps: ["Saa slab ma ọ bụ oche ya mgbe niile.", "Debe mkpuchi n'elu oghere ya.", "Debe ncha na mmiri n'akụkụ ụlọ mposi.", "Tinye nsị ụmụaka n'ụlọ mposi ozugbo.", "Jiri ncha saa potty ahụ na aka gị."],
          words: [["Olulu mposi (latrine)", "ụlọ mposi dị n'elu olulu e gwuru n'ala."], ["Slab", "ala siri ike n'elu olulu mposi ị na-eguzo na ya."], ["Inyụ nsị n'ezi (open defecation)", "inyụ nsị n'ubi, n'ọhịa, n'osimiri ma ọ bụ n'ebe ọzọ e meghere emeghe."]],
          slides: [
            { title: "Nsị dị n'ezi na-alọghachi", bullets: ["Ijiji, ụkwụ, mmiri ozuzo na aka na-ebu nje", "Banye na nri na mmiri"] },
            { title: "Ụlọ mposi dị mma karị", bullets: ["Flush, pour-flush, ma ọ bụ olulu mposi nwere slab", "Nke a na-ekekọrịtaghị na ezinụlọ ndị ọzọ ka mma", "Mkpuchi dị n'elu; ncha na mmiri n'akụkụ ya"] },
            { title: "Nsị ụmụaka", bullets: ["Dị ize ndụ dị ka nke ndị okenye", "Tinye ya n'ụlọ mposi ozugbo", "Jiri ncha saa potty na aka gị"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Lelee ụlọ mposi ma ọ bụ olulu mposi gị taa: ọ dị ọcha, e kpuchiri ya, ncha na mmiri dịkwa n'akụkụ ya? Dozie otu ihe. Kwekọrịta na ezinụlọ gị ebe nsị ụmụaka ga-aga oge ọ bụla.",
          youCanNow: "idebe ụlọ mposi ma ọ bụ olulu mposi n'ọcha na e kpuchiri ya ma wepụ nsị ụmụaka n'ụzọ dị mma.",
          quickCheck: [
            { objective: "O5", q: "Ebee ka nsị nwa ọhụrụ si na nappy ga-aga?", options: ["N'ụlọ mposi ma ọ bụ olulu mposi ozugbo", "N'ezi", "N'olulu mmiri nsọ (drain)", "N'ebe a na-atụ ahịhịa unyi"], answer: 0, why: "Nsị ụmụaka na-ebukwa nje, ọ ghaghị ịga n'ụlọ mposi." },
            { objective: "O5", q: "Gịnị mere a ga-eji debe mkpuchi n'elu oghere olulu mposi?", options: ["Ka ọ dị ọkụ", "Iji gbochie ijiji ibuga nje na nri", "Naanị iji zoo isi ọjọọ", "Ọ dịghị mkpa"], answer: 1, why: "Ijiji na-adakwasị nsị nwere ike ibuga nje na nri." }
          ]
        },
        {
          title: "Afọ ọsịsa na kọlera: mgbe ị ga-aga ụlọ ọgwụ ugbu a",
          objectives: ["O6"],
          minutes: 6,
          goal: "Hụ ihe ịrịba ama ihe egwu nke mmiri ịkpọ nkụ n'ahụ na kọlera ma chọọ enyemaka ozugbo.",
          text: [
            "Afọ ọsịsa na-ewepụ mmiri na nnu n'ahụ. A na-akpọ nke a mmiri ịkpọ nkụ n'ahụ (dehydration), ọ nwekwara ike igbu nwa ọhụrụ ngwa ngwa. Kọlera nwere ike ime ka mmadụ nyụọ nnukwu nsị dị ka mmiri, WHO kwukwara na ọ nwere ike igbu mmadụ n'ime awa ole na ole ma ọ bụrụ na a gwọghị ya. Echerela ịhụ ma ọ ga-aka mma.",
            "Gaa ụlọ ọgwụ, ebe ahụike ma ọ bụ onye ọrụ ahụike obodo UGBU A ma ọ bụrụ na onye ahụ: na-ehi ụra nke ukwuu, adịghị ike, ahụ ya dara mbà ma ọ bụ siri ike ịkpọte; enweghị ike ịṅụ mmiri ma ọ bụ na-aṅụ ntakịrị nke ukwuu; anya ya abanyela n'ime; akpụkpọ ahụ ya na-alaghachi nwayọọ nwayọọ mgbe a tụrụ ya; na-anyụ ọtụtụ nsị dị ka mmiri, dị ka mmiri osikapa; nwere ọbara na nsị ya; na-agbọ ugboro ugboro; ma ọ bụ nwere afọ ọsịsa na-aga ọtụtụ ụbọchị. Nwa ọhụrụ ma ọ bụ nwatakịrị nwere afọ ọsịsa chọrọ nlekọta pụrụ iche.",
            "Oral rehydration salts (ORS) na-eweghachi mmiri na nnu ahụ furu efu, ndị ọrụ ahụike na-enyekwa ụmụaka zinc. Jụọ ụlọ ọgwụ gị, onye ọrụ ahụike obodo ma ọ bụ ụlọ ahịa ọgwụ otu esi eji ORS; nye ya n'ụzọ, dị ka ha gwara gị, ma ka gaa. Nọgide na-enye ara. Mgbe kọlera gbasara (outbreak), gee ministri ahụike gị ntị: o nwere ike ime mkpọsa ọgwụ mgbochi (vaccine) na ebe ọgwụgwọ. Dee aha na nọmba ekwentị ụlọ ọgwụ na onye ọrụ ahụike obodo kacha nso gị na kaadị, ma debe ego ụgbọ ma ọ bụrụ na ị nwere ike."
          ],
          steps: ["Lekọta onye ọ bụla nwere afọ ọsịsa nke ọma, karịsịa ụmụaka nta.", "Lelee ihe ịrịba ama ihe egwu.", "Ọ bụrụ na ị hụrụ nke ọ bụla, gaa ụlọ ọgwụ ma ọ bụ kpọọ onye ọrụ ahụike obodo ugbu a.", "Jụọ onye ọrụ ahụike otu esi enye ORS, ma nọgide na-enye ara.", "Jiri ncha saa aka mgbe ọ bụla i metụrụ onye ahụ, ma hichaa ihe n'ụzọ dị mma."],
          words: [["Mmiri ịkpọ nkụ n'ahụ (dehydration)", "mgbe ahụ tufuru mmiri na nnu karịa."], ["ORS (oral rehydration salts)", "ngwakọta nnu na shuga nke, mgbe a gwakọtara ya na mmiri dị mma, na-eweghachi ihe afọ ọsịsa wepụrụ."], ["Kọlera", "ọrịa si na mmiri ma ọ bụ nri ruru unyi na-ebute afọ ọsịsa dị ka mmiri nke ukwuu, ọ nwekwara ike igbu ngwa ngwa."], ["Mgbasa ọrịa (outbreak)", "ọtụtụ mmadụ na-arịa otu ọrịa n'otu ebe n'otu oge."]],
          slides: [
            { title: "Afọ ọsịsa nwere ike igbu ngwa ngwa", bullets: ["Ahụ na-atụfu mmiri na nnu", "Kọlera nwere ike igbu n'ime awa ole na ole", "Echerela"] },
            { title: "Gaa ụlọ ọgwụ UGBU A ma ọ bụrụ", bullets: ["Na-ehi ụra nke ukwuu, ahụ dara mbà, siri ike ịkpọte; enweghị ike ịṅụ", "Anya abanyela n'ime; akpụkpọ a tụrụ na-alaghachi nwayọọ", "Ọtụtụ nsị dị ka mmiri osikapa; ọbara na nsị", "Na-agbọ ugboro ugboro; na-aga ọtụtụ ụbọchị"] },
            { title: "N'ụzọ", bullets: ["Jụọ onye ọrụ ahụike otu esi enye ORS", "Nọgide na-enye ara", "Saa aka mgbe ọ bụla i metụrụ onye ahụ"] },
            { title: "Dị njikere", bullets: ["Kaadị nwere nọmba ụlọ ọgwụ na nke onye ọrụ ahụike", "Ego ụgbọ ma ọ bụrụ na ị nwere ike", "Mgbe ọrịa gbasara, gbasoo ministri ahụike"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Mee kaadị ihe ịrịba ama ihe egwu: dee ihe ịrịba ama ihe egwu anọ ma ọ bụ karịa, aha na nọmba ekwentị ụlọ ọgwụ ma ọ bụ onye ọrụ ahụike obodo kacha nso gị, na otu ị ga-esi eru ebe ahụ. Kwụnye ya na mgbidi.",
          youCanNow: "ịhụ ihe ịrịba ama ihe egwu nke mmiri ịkpọ nkụ n'ahụ na kọlera ma kpọga onye ahụ n'ụlọ ọgwụ ozugbo.",
          quickCheck: [
            { objective: "O6", q: "Kedu ihe ịrịba ama ihe egwu na-egosi na ị ga-aga ụlọ ọgwụ ugbu a?", options: ["Otu nsị dị nro", "Nwatakịrị na-egwu egwu dị ka ọ na-adị", "Nwatakịrị na-ehi ụra nke ukwuu ma enweghị ike ịṅụ", "Akpịrị ịkpọ nkụ mgbe bọọlụ"], answer: 2, why: "Ihi ụra nke ukwuu na enweghị ike ịṅụ bụ ihe ịrịba ama nke mmiri ịkpọ nkụ n'ahụ siri ike." },
            { objective: "O6", q: "Onye agbata obi na-anyụ nnukwu nsị dị ka mmiri osikapa n'oge kọlera gbasara. Gịnị ka ị ga-eme?", options: ["Chere ruo echi", "Nye ya ọgwụ ọ bụla ị nwere n'ụlọ", "Zoo ya n'anya ndị ọrụ ahụike", "Nyere ya aka ịga ụlọ ọgwụ ma ọ bụ ebe ọgwụgwọ ugbu a"], answer: 3, why: "Kọlera nwere ike igbu n'ime awa ole na ole; nlekọta ọsọ ọsọ n'ụlọ ọgwụ na-azọpụta ndụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Aka dị ọcha, ụlọ mposi dị mma, omume ọsọ ọsọ",
        questions: [
          { objective: "O4", q: "Mmiri dị n'ebe ịsa aka mana ncha adịghị. Gịnị bụ eziokwu?", options: ["Naanị mmiri zuru", "A chọrọ ncha iji wepụ nje; wetara ebe ahụ ncha", "Aka adịghị mkpa ịsa", "Jiri bọket mmiri ọṅụṅụ"], answer: 1, why: "Ncha na-ewepụ nje nke naanị mmiri na-ahapụ." },
          { objective: "O4", q: "Ebee kacha mma maka ebe ịsa aka?", options: ["Nso ụlọ mposi na nso ebe ị na-esi nri", "Ebe dị anya n'ụlọ", "N'ime bọket mmiri ọṅụṅụ", "N'ime ụlọ ihi ụra"], answer: 0, why: "Nso ụlọ mposi na kichin na-eme ka ịsa aka dị mfe n'oge ndị dị mkpa." },
          { objective: "O5", q: "Nsị nwatakịrị dị n'ezi. Gịnị ka ị ga-eme?", options: ["Zachapụ ya n'olulu mmiri nsọ", "Hapụ ya ka ọ kpọọ nkụ", "Jiri aja kpuchie ya ma hapụ ya", "Tinye ya n'ụlọ mposi ma jiri ncha saa aka gị"], answer: 3, why: "Nsị ụmụaka kwesịrị ịga n'ụlọ mposi; wee saa aka." },
          { objective: "O6", q: "Nwa gị nwere afọ ọsịsa, anya ya abanyela n'ime, akpụkpọ a tụrụ na-alaghachikwa nwayọọ. Gịnị ka ị ga-eme?", options: ["Chere ụbọchị abụọ", "Kwụsị ihe ọṅụṅụ niile", "Gaa ụlọ ọgwụ ugbu a ma jụọ otu esi enye ORS n'ụzọ", "Nye ya ọgwụ okenye"], answer: 2, why: "Ndị a bụ ihe ịrịba ama mmiri ịkpọ nkụ n'ahụ; onye ọrụ ahụike ga-ahụrịrị nwa ahụ ugbu a." },
          { objective: "O6", q: "Gịnị ka ORS na-eme?", options: ["Ọ na-egbu anwụnta", "Ọ na-eweghachi mmiri na nnu afọ ọsịsa wepụrụ", "Ọ na-asa ụlọ mposi", "Ọ na-eme ka mmiri sie ngwa ngwa"], answer: 1, why: "ORS na-eweghachi mmiri na nnu afọ ọsịsa wepụrụ n'ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmiri Dị Ọcha, Ụlọ Mposi na Ịdị Ọcha n'Ụlọ",
    questions: [
      { objective: "O1", q: "Gịnị bụ ihe egwu kacha ukwuu nye ịdị mma mmiri ọṅụṅụ?", options: ["Nsị na-abanye na mmiri", "Mmiri jụrụ oyi", "Mmiri siri ike (hard water)", "Mmiri na-atọ ụtọ dị ka igwe"], answer: 0, why: "WHO kwuru na nje si na nsị bụ ihe egwu kacha ukwuu maka mmiri ọṅụṅụ." },
      { objective: "O1", q: "Kedu ajụjụ na-enyere gị aka ikpe ikpe olulu mmiri?", options: ["Kedu agba bọket ahụ?", "E kpuchiri ya, ọ dịkwa anya n'ụlọ mposi na anụmanụ?", "Onye gwuru ya?", "Ọ dị nso ahịa?"], answer: 1, why: "Ebe mmiri e kpuchiri nke dị anya n'ụlọ mposi na anụmanụ anaghị ebu nsị ngwa ngwa." },
      { objective: "O1", q: "Borehole ị na-ejikarị emebiela. Gịnị ka ị ga-eme?", options: ["Ṅụọ mmiri osimiri n'edozighị ya", "Kwụsị ịṅụ mmiri", "Jiri ebe mmiri ndabere gị ma dozie mmiri ahụ tupu ị ṅụọ", "Jiri mmiri e ji asa ihe"], answer: 2, why: "Ebe mmiri ndabere na idozi ya na-eme ka mmiri ọṅụṅụ dị mma karị mgbe isi ebe mmiri mebiri." },
      { objective: "O2", q: "Kedu ụzọ abụọ na-eme ka mmiri ọṅụṅụ dị mma karị n'ụlọ?", options: ["Itinye shuga ma ọ bụ nnu", "Ịhapụ ya n'anwụ otu awa ma ọ bụ ịma ya jijiji", "Ime ka ọ jụọ oyi ma ọ bụ kpụkọọ ya", "Isi ya, ma ọ bụ iji ihe chlorine e rere maka mmiri"], answer: 3, why: "Isi ya na ihe chlorine na-egbu nje; ndị ọzọ anaghị egbu." },
      { objective: "O2", q: "Iwụpụ mmiri gbara agba site n'akwa ọ na-eme ka ọ dị mma?", options: ["Mba; ọ na-ewepụ unyi, mana ị ka ga-esi ya ma ọ bụ tinye chlorine", "Ee, mgbe niile", "Naanị ma ọ bụrụ na akwa ahụ dị ọhụrụ", "Ee, ma ọ bụrụ na i mere ya ugboro abụọ"], answer: 0, why: "Akwa na-ewepụ unyi, ọ bụghị nje niile; ị ka chọrọ isi ya ma ọ bụ iji chlorine." },
      { objective: "O2", q: "Ị nwere ihe chlorine mana labelụ ya furu efu. Gịnị ka ị ga-eme?", options: ["Chee ole ị ga-etinye", "Tinye ọtụtụ ka o wee dị mma", "Jụọ onye ọrụ ahụike obodo gị ma ọ bụ ụlọ ọgwụ otu esi eji ya", "Ṅụọ ya ozugbo i tinyere ya"], answer: 2, why: "Ole kwesịrị ekwesị na oge ichere dị mkpa; onye ọrụ ahụike nwere ike ịgwa gị." },
      { objective: "O2", q: "Tupu ị gwakọta formula nwa ọhụrụ, mmiri ahụ kwesịrị ịbụ...", options: ["Nke si n'osimiri ozugbo", "Nke e doziri: e siri ya ma hapụ ya ka ọ jụọ oyi, ma ọ bụ e doziri ya n'ụzọ dị mma", "Nke anwụ mere ka ọ kpọọ ọkụ", "Mmiri ọ bụla"], answer: 1, why: "Ụmụ ọhụrụ nọ n'ihe egwu kacha ukwuu; a ga-ebu ụzọ dozie mmiri ha." },
      { objective: "O3", q: "Kedu ihe e ji ebu mmiri ọṅụṅụ kacha mma?", options: ["Bọket e meghere emeghe dị n'ala", "Ihe e jiri buo mmanụ ụgbọ", "Ihe dị ọcha e kpuchiri ekpuchi nwere olu dị warara ma ọ bụ tap, dị n'elu, ọ bụghị n'ala", "Ite ọ bụla"], answer: 2, why: "Ịdị ọcha, mkpuchi na ịnọ n'elu na-eme ka mmiri e doziri nọrọ n'ọcha." },
      { objective: "O3", q: "Gịnị mere na onye ọ bụla ekwesịghị itinye iko n'ime mmiri ọṅụṅụ?", options: ["Aka na iko na-ewebata nje na mmiri dị ọcha", "Ọ na-ala mmiri n'iyi", "Ọ na-eme mkpọtụ", "Ọ bụ enweghị nkwanye ugwu"], answer: 0, why: "Itinye iko na-ebu nje site n'aka na iko gaa na mmiri niile dị n'ime ya." },
      { objective: "O3", q: "Ugboro ole ka ị ga-asa ihe e ji ebu mmiri?", options: ["Ọ dịghị mgbe", "Otu ugboro n'afọ", "Naanị mgbe ọ na-esi isi", "Mgbe niile, jiri ncha na mmiri dị mma, wee hapụ ya ka ọ kpọọ nkụ, isi ya n'ala"], answer: 3, why: "Ịsa ya mgbe niile na-egbochi nje ịba ụba n'ime ya." },
      { objective: "O4", q: "Kedu oge dị mkpa maka ịsa aka?", options: ["Tupu ị nye nwa nri", "Mgbe i lechara telivishọn", "Naanị tupu ihi ụra", "Mgbe i ṅụchara mmiri"], answer: 0, why: "Aka dị ọcha tupu ị nye nwa nri na-egbochi nje ịbanye n'ọnụ nwa ahụ." },
      { objective: "O4", q: "Kedu akụkụ aka ị na-akpochapụ?", options: ["Naanị isi mkpịsị aka", "Ọbụ aka, azụ aka, n'etiti mkpịsị aka na n'okpuru mbọ", "Naanị ọbụ aka", "Naanị aka nri"], answer: 1, why: "Nje na-ezo n'akụkụ aka niile, ya mere kpochapụ ha niile." },
      { objective: "O4", q: "Ị nweghị tap n'ụlọ. Olee otu ị ga-esi saa aka na mmiri na-asọ asọ?", options: ["Tinye aka gị na bọket mmiri ọṅụṅụ", "Naanị hichaa ha n'akwa", "Mee ebe ịsa aka site na jerrycan ma ọ bụ karama na-awụpụ mmiri, nwere ncha na eriri", "Hapụ ịsa aka"], answer: 2, why: "Ebe ịsa aka dị mfe na-enye mmiri na-asọ asọ n'emebighị mmiri e debere." },
      { objective: "O5", q: "Kedu ụlọ mposi WHO na UNICEF na-agụ dị ka nke dị mma karị?", options: ["Ubi dị anya n'ụlọ", "Bọket a na-awụpụ n'olulu mmiri nsọ", "Olulu na-enweghị slab", "Olulu mposi nwere slab, ma ọ bụ ụlọ mposi flush ma ọ bụ pour-flush"], answer: 3, why: "Ndị a na-ekewapụ nsị na ndị mmadụ; olulu na-enweghị slab ma ọ bụ ubi e meghere emeghe anaghị eme ya." },
      { objective: "O5", q: "Gịnị ga-adị n'akụkụ ụlọ mposi mgbe niile?", options: ["Ncha na mmiri maka ịsa aka", "Ihe e ji ebu mmiri ọṅụṅụ", "Nri", "Ọ dịghị ihe"], answer: 0, why: "Ịsa aka ozugbo mgbe ụlọ mposi na-egbochi nje ịgbasa." },
      { objective: "O5", q: "Gịnị mere nsị ụmụaka ji dị ize ndụ?", options: ["Ha adịghị ize ndụ", "Ha na-ebu nje dị ka nsị ndị okenye", "Naanị n'ihi na ha na-esi isi", "Naanị mgbe nwa ahụ na-arịa ọrịa"], answer: 1, why: "Nsị ụmụaka na-ebu otu nje ahụ, ha ga-agakwa n'ụlọ mposi." },
      { objective: "O6", q: "Kedu n'ime ndị a chọrọ ụlọ ọgwụ ugbu a?", options: ["Otu nsị dị nro ma nwa ahụ na-egwu egwu", "Nwatakịrị akpịrị kpọrọ nkụ mgbe ọ gbachara ọsọ", "Ọbara na nsị", "Nwatakịrị chọrọ iri nri"], answer: 2, why: "Ọbara na nsị bụ ihe ịrịba ama ihe egwu chọrọ onye ọrụ ahụike." },
      { objective: "O6", q: "Gịnị mere na ị ekwesịghị ichere mgbe mmadụ nwere ihe ịrịba ama kọlera?", options: ["N'ihi na ọ bụ ihe ihere", "N'ihi na ụlọ ọgwụ na-emechi n'isi ụtụtụ", "Ọ na-agafe n'onwe ya", "Kọlera nwere ike igbu n'ime awa ole na ole ma a lekọtaghị ya"], answer: 3, why: "WHO kwuru na kọlera nwere ike igbu n'ime awa ole na ole ma ọ bụrụ na a gwọghị ya." },
      { objective: "O6", q: "Nwa ọhụrụ nwere afọ ọsịsa. Gịnị ka ị ga-anọgide na-eme ka ị na-achọ enyemaka?", options: ["Nọgide na-enye ara", "Kwụsị mmiri ara niile", "Kwụsị ihe ọṅụṅụ niile", "Nye ya ọgwụ okenye"], answer: 0, why: "Inye ara na-anọgide na-enye nwa ahụ mmiri na nri; onye ọrụ ahụike ga-adụ ọdụ maka ihe ndị ọzọ." },
      { objective: "O6", q: "Gịnị ka kaadị ihe ịrịba ama ihe egwu gị kwesịrị inwe?", options: ["PIN mobile money gị", "Ihe ịrịba ama ihe egwu na aha na nọmba ụlọ ọgwụ ma ọ bụ onye ọrụ ahụike kacha nso gị", "Ndepụta ọgwụ na ọnụọgụ ha", "Ọ dịghị ihe; ị ga-echeta"], answer: 1, why: "N'oge ihe mberede, ihe ịrịba ama na onye ị ga-akpọ bụ ihe ị chọrọ ozugbo." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebe mmiri", objective: "O1", notYet: "Ọ dịghị ebe mmiri a họpụtara, ma ọ bụ a họpụtara ebe mmiri nwere ihe egwu n'enweghị ihe kpatara ya.", meets: "E hazirela ebe mmiri ndị ahụ ya na ihe kpatara ya; a họpụtara nke kacha dị mma maka ọṅụṅụ ma kpọọ aha nke ndabere.", exceeds: "Ọ na-ekwukwa ihe na-eme ka ebe mmiri ọ bụla nwee ihe egwu (ụlọ mposi, anụmanụ, enweghị mkpuchi) na onye a ga-agwa maka ebe mmiri mebiri emebi ma ọ bụ ruru unyi." },
      { name: "Ime ka mmiri dị mma karị", objective: "O2", notYet: "Ọ dịghị ụzọ e si edozi ya, ma ọ bụ ụzọ nke nzọụkwụ ụfọdụ na-adịghị (enweghị oge isi ya, enweghị oge ichere dị na labelụ).", meets: "Isi ya ma ọ bụ ihe chlorine, ya na ibu ụzọ hapụ mmiri gbara agba ka ọ dọwa, nzọụkwụ ọ bụla na iwu labelụ.", exceeds: "E mekwara atụmatụ ụzọ ndabere, a na-edebekwa chlorine ebe ụmụaka na-agaghị eru." },
      { name: "Idebe na ikesa", objective: "O3", notYet: "Ihe e meghere emeghe, ma ọ bụ a ka na-ekwe ka etinye iko n'ime ya.", meets: "Ihe dị ọcha e kpuchiri ekpuchi, dị n'elu, a na-awụpụ ya ma ọ bụ eji tap, a na-asakwa ya mgbe niile.", exceeds: "E kewapụrụ mmiri ọṅụṅụ na mmiri e ji asa ihe, onye ọ bụla n'ụlọ makwaara iwu na a gaghị etinye iko n'ime ya." },
      { name: "Ịsa aka", objective: "O4", notYet: "Ọ dịghị ebe ịsa aka ma ọ bụ ncha; oge ndị dị mkpa adịghị.", meets: "Ebe nwere mmiri na ncha nso ụlọ mposi ma ọ bụ kichin, e dekwara oge ndị dị mkpa.", exceeds: "Ebe ịsa aka dị nso ma ụlọ mposi ma kichin, e gosikwara onye ọ bụla n'ezinụlọ otu esi asa aka sekọnd 20." },
      { name: "Ụlọ mposi na nsị ụmụaka", objective: "O5", notYet: "A hapụrụ nsị n'ezi ma ọ bụ ọ dịghị atụmatụ maka nsị ụmụaka.", meets: "A na-edebe ụlọ mposi n'ọcha ma kpuchie ya, nsị ụmụaka na-agakwa n'ime ya oge ọ bụla.", exceeds: "E kesara ọrụ ihicha ya n'etiti ndị ezinụlọ, ncha dịkwa n'akụkụ ụlọ mposi." },
      { name: "Kaadị ihe ịrịba ama ihe egwu", objective: "O6", notYet: "Ihe ịrịba ama ihe egwu erughị anọ, ma ọ bụ enweghị nọmba ụlọ ọgwụ.", meets: "Opekata mpe ihe ịrịba ama ihe egwu anọ na aha na nọmba ụlọ ọgwụ ma ọ bụ onye ọrụ ahụike kacha nso.", exceeds: "Otu a ga-esi eru ebe ahụ na atụmatụ maka ego ụgbọ, n'enweghị ọnụọgụ ọgwụ ọ bụla na kaadị ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ụlọ ndị na-edozi mmiri ọṅụṅụ niile ma na-edebe ya e kpuchiri ekpuchi ụbọchị 30 mgbe e mechara (nnyocha nsochi)",
      "Ụlọ ndị nwere ebe ịsa aka nwere ncha ụbọchị 30 mgbe e mechara",
      "Afọ ọsịsa na-adịkwaghị ugboro ugboro n'ụmụaka nta, dị ka ezinụlọ ma ọ bụ ndị ọrụ ahụike obodo kọrọ n'oge na-esote",
      "Ịbịa ụlọ ọgwụ ọsọ ọsọ maka afọ ọsịsa nwere ihe ịrịba ama ihe egwu, dị ka ndị ọrụ ahụike obodo kọrọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ncha, ihe e ji ebu mmiri nwere mkpuchi, na jerrycan ma ọ bụ karama maka ebe ịsa aka",
      "Ite e ji esi mmiri, ma ọ bụ ihe chlorine e rere maka mmiri ọṅụṅụ ya na labelụ ya",
      "Akwụkwọ na mkpịsị ode maka atụmatụ na kaadị ihe ịrịba ama ihe egwu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọ na-arụ ọrụ nke ọma n'otu ụmụ nwanyị, otu ndị nne, ụlọ akwụkwọ, otu okpukpe na nleta ndị ọrụ ahụike obodo; meenụ ule mbido ọnụ.",
      "Wuonụ ebe ịsa aka ọnụ n'oge Nkuzi 4; ọ bụ akụkụ ndị na-amụ ihe na-echeta kacha mma.",
      "Kpọọ onye ọrụ ahụike obodo ma ọ bụ nọọsụ ụlọ ọgwụ ka ọ bịa n'oge nkuzi gbasara ihe ịrịba ama ihe egwu na ORS.",
      "Enyela ọnụọgụ ọgwụ ma ọ bụ ndụmọdụ ọgwụgwọ; zipu ajụjụ niile gbasara ọgwụgwọ n'ụlọ ọgwụ, onye ọrụ ahụike obodo ma ọ bụ ministri ahụike.",
      "Mgbe kọlera gbasara, jiri ozi ministri ahụike nke ugbu a na ebe ọgwụgwọ dị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
