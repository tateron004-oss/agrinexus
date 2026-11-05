"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-digital-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KOBO = { name: "KoboToolbox (fọm nchịkọta ozi n'efu na-arụ ọrụ n'enweghị ịntanetị)", url: "https://www.kobotoolbox.org" };
const ODPC = { name: "Ọfịs Kọmishọna Nchekwa Ozi (Office of the Data Protection Commissioner, Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Kọmịshọn Nchekwa Ozi nke Nigeria (Nigeria Data Protection Commission, NDPC)", url: "https://ndpc.gov.ng" };
const GH_DPC = { name: "Kọmịshọn Nchekwa Ozi, Ghana (Data Protection Act, 2012, Act 843)", url: "https://dpc.gov.gh/" };
const FAO_CHILD = { name: "FAO: Ọrụ ụmụaka n'ọrụ ugbo (Child labour in agriculture)", url: "https://www.fao.org/childlabouragriculture/en/" };

module.exports = {
  id: "agri-digital-farm-management-ig",
  lang: "ig",
  translationOf: "agri-digital-farm-management",
  category: "Agriculture (Africa)",
  name: "Ijikwa Ugbo site n'Ozi na Ngwa Ekwentị",
  skills: "Ịhọrọ ngwa ugbo ma ọ bụ mpempe akwụkwọ e kekọrịtara, Ịhazi ndekọ ugbo na ngwaahịa ọrụ ugbo dị n'ụlọ nkwakọba, Ịkwụ ndị ọrụ ụgwọ site na mobile money nwere ndekọ, Ichebe ozi ugbo na nke ndị ọrụ, Ijikwa onye njikwa ugbo site n'ebe dị anya, Iji ihe nlele nọmba ise kwa izu",
  outcome: "iji ekwentị gị jikwaa ugbo gị: idebe otu ndekọ nke ubi, anụmanụ, ọrụ, ndị ọrụ na ngwaahịa ọrụ ugbo dị n'ụlọ nkwakọba, ịkwụ ndị ọrụ ụgwọ site na mobile money nwere ndekọ maka ụgwọ ọ bụla, inweta akụkọ kwa ụbọchị site n'aka onye njikwa gị nke ị nwere ike ilele, na ilele nọmba ise kwa izu iji kpebie ihe ị ga-eme ọzọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo na-eto eto: i nwere ndị ọrụ, ọtụtụ ubi ma ọ bụ igwe anụmanụ, ma eleghị anya ị bi n'obodo mepere emepe ebe onye njikwa na-elekọta ugbo ahụ. Ọ dabara ndị obere ugbo na-azụ ahịa, ndị ntorobịa na-azụ ahịa ugbo, ndị nwe ugbo bi n'ebe ọzọ na Nairobi, Lagos, Accra ma ọ bụ Dakar, na ndị njikwa ugbo na-akọrọ ha akụkọ.",
    "Ọ gafere idebe ndekọ nkịtị. Ị ga-ahọrọ ngwa njikwa ugbo (app) ma ọ bụ mpempe akwụkwọ e kekọrịtara (spreadsheet), hazie ndekọ nke ubi, anụmanụ, ọrụ na ngwaahịa dị n'ụlọ nkwakọba, kwụọ ndị ọrụ ụgwọ ma dekọọ ya site na mobile money, chebe ozi ugbo na nke ndị ọrụ, hazie usoro akụkọ kwa ụbọchị gị na onye njikwa nke ị nwere ike ilele, ma wuo ihe nlele (dashboard) kwa izu nwere nọmba ise.",
    "Ihe ọmụmụ a anaghị atụ aro app ọ bụla. Ọ na-egosi gị ihe ndị ị ga-achọ n'ime ya, ka i nwee ike ikpe ikpe app ọ bụla, ma ọ bụ wuo otu usoro ahụ na spreadsheet n'efu. Ọnụ ego niile bụ naanị ọmụmaatụ. Nkuzi ọ bụla na-ejedebe n'ọrụ n'ugbo nke gị; nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechi ihe ọmụmụ ahụ. Ọ bụrụ na idebeghị ndekọ ugbo mgbe ọ bụla, buru ụzọ were \"Data na Teknụzụ n'Ọrụ Ugbo\"."
  ],
  finalTask: "Wuo ihe nlele (dashboard) kwa izu maka ugbo nke gị (ezi nọmba ma ọ bụ nọmba ọmụmaatụ): nọmba ise, nke ọ bụla nwere ebe o si na ndekọ gị, ebumnuche ma ọ bụ oke nkịtị, na ihe ị ga-eme ma ọ bụrụ na ọ adabaghị. Wee dee usoro akụkọ nke otu peeji maka onye na-elekọta ugbo ahụ kwa ụbọchị: ihe akụkọ WhatsApp kwa ụbọchị ga-enwe (foto, nọmba, nsogbu), oge ọ ga-abịa, nzukọ nlele kwa izu, otu ị ga-esi lelee ya (nlele na mberede, ịgụ ngwaahịa n'ụlọ nkwakọba, ndekọ mobile money), na onye nwere ike ịhụ ozi ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị obere ugbo na ndị ugbo azụmahịa na-eto eto, ndị ntorobịa na-azụ ahịa ugbo, ndị nwe ugbo bi n'ebe ọzọ na ndị njikwa ugbo na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire na n'Africa niile. Ọtụtụ na-akọ ihe ọkụkụ ma na-azụ anụmanụ ọnụ (ọka, tomato, ọkụkọ, ewu, ezi, azụ tilapia) ma na-ewe ndị ọrụ nkeji ụbọchị ma ọ bụ ndị ọrụ na-adịgide adịgide.",
    startingPoint: "Ha na-eji smartphone kwa ụbọchị maka oku, WhatsApp na mobile money. Ụfọdụ na-edebe ndetu n'akwụkwọ ma ọ bụ na mpempe akwụkwọ dị mfe. Ole na ole nwere otu usoro na-ejikọ ubi, anụmanụ, ndị ọrụ, ego na ngwaahịa, ọtụtụ ndị nwe ugbo na-adabere n'oku ekwentị iji mara ihe na-eme n'ugbo.",
    gap: "Ka ugbo na-eto, ego na-efu site n'ụbọchị ọrụ a na-edekọghị, ngwaahịa ọrụ ugbo na-efu efu, anụmanụ nwụrụ anwụ a chọpụtara n'oge na-adịghị mma, na mkpebi e mere n'echiche. Ndị na-amụ ihe chọrọ usoro dị mfe na-ejikọ ndekọ, ụgwọ na akụkọ, na omume ilele nọmba ole na ole kwa izu, ka ha nwee ike ijikwa site n'ebe dị anya ma hụ nsogbu n'oge.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị Android dị ọnụ ala; kọmputa na-enyere aka mana ọ dịghị mkpa",
      "Netwọk: netwọk anaghị adịgide n'ọtụtụ ugbo, ya mere ngwa ga-arụ ọrụ n'enweghị ịntanetị ma ọ bụ site na WhatsApp",
      "Ego: ngwa n'efu na mbụ; a naghị akwado app ọ bụla; ọnụ ego niile bụ ọmụmaatụ",
      "Iwu nzuzo metụtara ozi ndị ọrụ (Kenya, Nigeria, Ghana na ndị ọzọ nwere iwu nchekwa ozi)",
      "Enweghị PIN, okwuntughe ma ọ bụ nọmba ID n'ọrụ omume ọ bụla"
    ],
    prerequisites: "Ị ma iji smartphone, WhatsApp na mobile money nke ọma. A na-atụ aro ka i buru ụzọ were \"Data na Teknụzụ n'Ọrụ Ugbo\" (ndekọ nkịtị na spreadsheet)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ihe ugbo gị kwesịrị ịdekọ", action: "ịtụnyere ngwa njikwa ugbo ma ọ bụ spreadsheet e kekọrịtara na ndepụta njirimara ma họrọ otu", standard: "site n'inye opekata mpe nhọrọ abụọ akara ma dee ihe mere i ji họrọ ya" },
    { id: "O2", condition: "Site n'iji ngwa ị họrọ", action: "ịhazi ndekọ ugbo nke ubi, anụmanụ, ọrụ na ngwaahịa ọrụ ugbo nwere aha na nha a kara aka", standard: "nke mere na a ga-agbakọ ndekọ ọ bụla site n'ubi, otu anụmanụ ma ọ bụ ngwaahịa" },
    { id: "O3", condition: "Mgbe e nyere gị otu izu ọrụ nke ndị ọrụ nkeji ụbọchị na ndị na-adịgide adịgide", action: "idekọ ụbọchị na ọrụ onye ọrụ ọ bụla ma kwụọ ha ụgwọ site na mobile money nwere ndekọ dabara", standard: "nke mere na ụgwọ ọ bụla nwere ụbọchị, onye ọrụ, ọrụ, ego na koodu azụmahịa" },
    { id: "O4", condition: "Mgbe onye njikwa ma ọ bụ onye ezinụlọ na-elekọta ugbo mgbe ị nọghị", action: "ide usoro akụkọ kwa ụbọchị nwere akụkọ foto na WhatsApp, nzukọ nlele kwa izu na nlele na mberede", standard: "na-ekwu ihe a ga-akọ, oge ọ ga-abịa, na otu ị ga-esi lelee ya" },
    { id: "O5", condition: "Site n'iji ndekọ ugbo gị", action: "iwu ihe nlele kwa izu nwere nọmba ise na ihe nke ọ bụla ga-eme ka i mee", standard: "nke a na-emelite kwa izu site na ndekọ, ọ bụghị site n'ncheta" },
    { id: "O6", condition: "Mgbe ị na-achịkọta ozi gbasara ugbo gị na ndị ọrụ gị", action: "ikpebi ozi ị ga-achịkọta, onye nwere ike ịhụ ya na otu ị ga-esi chebe ya", standard: "na-achịkọta naanị ihe ị chọrọ ma na-ekesaghị PIN, okwuntughe ma ọ bụ nọmba ID ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi usoro ugbo gị",
      lessons: [
        {
          title: "Ịhọrọ ngwa ugbo ma ọ bụ spreadsheet e kekọrịtara",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ ngwa njikwa ugbo ma ọ bụ spreadsheet e kekọrịtara site n'inye ya akara n'ndepụta njirimara.",
          text: [
            "Ngwa njikwa ugbo (app) na-edebe ubi gị, anụmanụ gị, ọrụ, ngwaahịa na ego n'otu ebe n'ekwentị gị. Ọtụtụ dị, ha na-agbanwekwa ọtụtụ oge, ya mere ihe ọmụmụ a anaghị atụ aro otu. Spreadsheet e kekọrịtara n'efu (Google Sheets ma ọ bụ Microsoft Excel) nwere ike ịrụ otu ọrụ ahụ ma ọ bụrụ na i hazie ya nke ọma. Ihe dị mkpa bụ na gị na ndị ọrụ gị na-eji ya n'ezie kwa ụbọchị.",
            "Malite n'ihe ị chọrọ ịdekọ, wee nye nhọrọ ọ bụla akara. Njirimara ị ga-achọ: ọ na-arụ ọrụ n'enweghị ịntanetị ma zipụ ozi mgbe e mesịrị (sync) (ọtụtụ ugbo nwere netwọk na-adịghị ike); ubi na otu anụmanụ dị ka ndekọ dị iche iche; ụzọ dị mfe isi dekọọ ọrụ na ngwaahịa; ngwaahịa n'ụlọ nkwakọba na-ebelata mgbe e jiri ha; ndekọ ndị ọrụ na ụgwọ; foto; ọtụtụ ndị ọrụ nwere ikike dị iche iche (onye ọrụ nwere ike itinye ozi mana ọ gaghị ahụ ndekọ ụgwọ ọnwa); ibupụ (export) na spreadsheet ka ozi gị ghara ịbụ nke a kpọchiri akpọchi; asụsụ gị; na ọnụ ahịa na iwu nzuzo doro anya.",
            "Kpachara anya maka app ndị na-adị n'efu n'ihi na ha na-ere ozi gị, ndị chọrọ ịntanetị dị ngwa, ma ọ bụ ndị ị na-enweghị ike iji ozi gị hapụ. Jụọ ndị ọrụ ugbo ndị ọzọ nọ n'ógbè gị ihe ha na-eji, nwalee app ọ bụla izu abụọ site n'ezi ndekọ, ma lelee ọnụ ahịa ya mgbe oge nnwale n'efu gwụrụ tupu i tinye ndekọ gị niile n'ime ya."
          ],
          steps: ["Depụta ihe ị ga-edekọ: ubi, anụmanụ, ọrụ, ndị ọrụ, ngwaahịa, ihe e rere.", "Họrọ nhọrọ abụọ ma ọ bụ atọ, gụnyere spreadsheet e kekọrịtara n'efu.", "Nye nke ọ bụla akara site n'ndepụta: enweghị ịntanetị, ndị ọrụ na ikike, ngwaahịa, ndị ọrụ, foto, export, asụsụ, ọnụ ahịa, nzuzo.", "Nwalee nke kacha mma izu abụọ site n'ezi ndekọ.", "Dee nhọrọ gị na ihe mere i ji họrọ ya."],
          words: [["Ngwa njikwa ugbo (farm management app)", "mmemme ekwentị ma ọ bụ weebụ maka idekọ na ịhazi ubi, anụmanụ, ọrụ, ngwaahịa na ego nke ugbo."], ["Sync", "mgbe app na-ezipu ozi e chekwara n'ekwentị na ịntanetị ozugbo netwọk dị."], ["Export", "iwepụta ozi gị n'app, dịka ọmụmaatụ dị ka faịlụ spreadsheet."]],
          slides: [
            { title: "App ka ọ bụ spreadsheet e kekọrịtara?", bullets: ["Ha abụọ nwere ike ịrụ ọrụ", "Ihe dị mkpa: gị na ndị ọrụ gị na-eji ya kwa ụbọchị", "A naghị akwado app ọ bụla ebe a: kpee ikpe site na njirimara"] },
            { title: "Njirimara ị ga-achọ", bullets: ["Ọ na-arụ ọrụ n'enweghị ịntanetị, na-eme sync mgbe e mesịrị", "Ubi, anụmanụ, ọrụ, ngwaahịa, ndị ọrụ", "Ọtụtụ ndị ọrụ nwere ikike dị iche iche", "Export na spreadsheet"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ọ dị n'efu n'ihi na ọ na-ere ozi gị", "Ọ chọrọ ịntanetị dị ngwa", "Ị nweghị ike iwepụta ozi gị", "Ọnụ ahịa edoghị anya mgbe nnwale gwụrụ"] },
            { title: "Kpebie", bullets: ["Nye nhọrọ abụọ ma ọ bụ atọ akara", "Nwalee otu izu abụọ", "Dee nhọrọ gị na ihe kpatara ya"] }
          ],
          tryIt: "Dee ndepụta ihe ugbo gị ga-edekọ. Mee tebụl akara nwere njirimara ndepụta ahụ n'akụkụ na nhọrọ abụọ ma ọ bụ atọ n'elu (otu nwere ike ịbụ spreadsheet e kekọrịtara n'efu). Nye nke ọ bụla akara ma dee nhọrọ gị na ihe mere i ji họrọ ya.",
          youCanNow: "ikpe ikpe app ugbo ma ọ bụ spreadsheet ọ bụla site na njirimara ya ma họrọ otu nwere ihe kpatara ya doro anya.",
          quickCheck: [
            { objective: "O1", q: "Ugbo gị dị na Kakamega anaghị enwekarị netwọk. Kedu njirimara kacha mkpa?", options: ["Agba na-egbuke egbuke", "Ọ na-arụ ọrụ n'enweghị ịntanetị ma na-eme sync mgbe e mesịrị", "Ọnụ ọgụgụ nbudata buru ibu", "Oku vidiyo"], answer: 1, why: "Ọ bụrụ na app enweghị ike ichekwa ndekọ n'enweghị netwọk, ndị ọrụ ga-akwụsị iji ya." },
            { objective: "O1", q: "Gịnị mere ị ga-eji lelee ma app nwere ike ime export nke ozi gị?", options: ["Ka ndekọ gị ghara ịbụ nke a kpọchiri n'ime otu app", "Ka ekwentị gị dị ngwa", "N'ihi na iwu chọrọ ka onye ọrụ ugbo ọ bụla mee export", "Iji nweta mbelata ọnụ ahịa"], answer: 0, why: "Export na-ekwe ka i bufee ndekọ gị na spreadsheet ma ọ bụ app ọzọ n'oge ọ bụla." }
          ]
        },
        {
          title: "Ịhazi ubi, anụmanụ, ọrụ na ngwaahịa ọrụ ugbo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hazie ndekọ ugbo nwere aha a kara aka, nha a kara aka na ndepụta ngwaahịa ọrụ ugbo.",
          text: [
            "Ndekọ (register) bụ ọkpụkpụ azụ nke usoro ahụ. Nye ubi ọ bụla aha mkpụmkpụ a kara aka na nha ya (dịka ọmụmaatụ \"F1 Tomato 0.5 acre\"), nyekwa otu anụmanụ ọ bụla ma ọ bụ ọdọ mmiri azụ aha na ọnụ ọgụgụ (\"Layers House A, 500 birds\", \"Goats 24\", \"Pond 2 tilapia\"). Jiri otu aha ahụ na ndekọ ọ bụla ka i nwee ike ịgbakọ ego e mefuru na ihe e nwetara site n'ubi ma ọ bụ otu.",
            "Wee mee ndekọ ọrụ: ụbọchị, ubi ma ọ bụ otu, ọrụ (ịkụ ihe, ịkpa ahịhịa, ịgba ọgwụ, inye nri, ọgwụ mgbochi nke dọkịta anụmanụ gbara, iwe ihe ubi, ire ere), ọnụ ọgụgụ, nha, ego e mefuru, onye mere ya na foto ma ọ bụrụ na ọ bara uru. Kaa nha aka: kilogram, lita, akpa 50 kg, crate, tray akwa 30. Nha agwakọtara na-eme ka mgbakọ ghara iziri ezi.",
            "Tinye ndepụta ngwaahịa ọrụ ugbo: ngwaahịa ọ bụla nwere nha ya, ihe batara, ihe e jiri na ihe fọdụrụ. Mgbe onye ọrụ dekọrọ \"2 bags NPK used on F1\", ihe fọdụrụ kwesịrị ibelata site na abụọ. Gụọ ihe dị n'ụlọ nkwakọba tụnyere ndepụta ahụ kwa izu. Ọ bụrụ na ọnụ ọgụgụ na ndekọ adabaghị, ịchọtala ebe ego na-efu, mperi ndekọ ma ọ bụ izu ohi, ị nwekwara ike ịjụ ihe kpatara ya n'otu izu ahụ."
          ],
          steps: ["Nye ubi ọ bụla aha na nha ya, nyekwa otu anụmanụ, ọdọ mmiri ma ọ bụ ụlọ ọ bụla aha na ọnụ ọgụgụ ya.", "Kaa nha aka maka ihe ọ bụla: kg, lita, akpa 50 kg, crate, tray.", "Mee ndekọ ọrụ: ụbọchị, ubi ma ọ bụ otu, ọrụ, ọnụ ọgụgụ, nha, ego, onye, foto.", "Mee ndepụta ngwaahịa: ngwaahịa, nha, ihe batara, ihe e jiri, ihe fọdụrụ.", "Gụọ ihe dị n'ụlọ nkwakọba kwa izu ma tụnyere ya na ndepụta."],
          words: [["Ndekọ (register)", "ndepụta isi nke ubi gị, otu anụmanụ gị na ngwaahịa gị nke ndekọ ọ bụla na-ezo aka na ya."], ["Nha (unit)", "ihe ị na-eji atụ, dị ka kilogram, lita ma ọ bụ akpa 50 kg."], ["Ịgụ ngwaahịa (stock count)", "ịgụ n'anya ihe dị n'ụlọ nkwakọba ma tụnyere ya na ndekọ."]],
          slides: [
            { title: "Aha a kara aka", bullets: ["Ubi nwere nha: F1 Tomato 0.5 acre", "Otu anụmanụ nwere ọnụ ọgụgụ: Layers House A, 500", "Otu aha ahụ na ndekọ ọ bụla"] },
            { title: "Ndekọ ọrụ", bullets: ["Ụbọchị, ubi ma ọ bụ otu, ọrụ", "Ọnụ ọgụgụ, nha, ego e mefuru", "Onye mere ya, foto"] },
            { title: "Ngwaahịa ọrụ ugbo", bullets: ["Ihe batara, ihe e jiri, ihe fọdụrụ maka ngwaahịa ọ bụla", "Nha a kara aka: kg, lita, akpa 50 kg"] },
            { title: "Ịgụ kwa izu", bullets: ["Gụọ ihe dị n'ụlọ nkwakọba", "Tụnyere ya na ndepụta", "Ọ dabaghị? Jụọ ihe kpatara ya n'izu a"] }
          ],
          tryIt: "Na ngwa ị họrọ, mepụta ndekọ maka ugbo gị: ubi ọ bụla ma ọ bụ otu anụmanụ ọ bụla nwere nha ma ọ bụ ọnụ ọgụgụ ya, ndekọ ọrụ nwere opekata mpe ezi ndekọ ise site n'izu a, na ndepụta ngwaahịa maka opekata mpe ngwaahịa anọ. Wee gụọ otu ngwaahịa n'ụlọ nkwakọba gị ma tụnyere ya na ndepụta.",
          youCanNow: "ịhazi ndekọ ugbo nke a na-agbakọ site n'ubi, otu anụmanụ na ngwaahịa, ma lelee ngwaahịa gị tụnyere ya.",
          quickCheck: [
            { objective: "O2", q: "Otu onye ọrụ dere \"akpa 2\", onye ọzọ dere \"100 kg\" maka otu fatịlaịza ahụ. Gịnị bụ ngwọta?", options: ["Hapụ ya; mgbakọ ga-adị nso", "Hichapụ ndekọ abụọ ahụ", "Kaa otu nha aka maka ngwaahịa ahụ ma jiri ya mgbe niile", "Kwụsị idekọ fatịlaịza"], answer: 2, why: "Nha a kara aka na-ekwe ka ị gbakọọ ndekọ nke ọma." },
            { objective: "O2", q: "Ndepụta ngwaahịa kwuru akpa 6 nke nri ọkụkọ (layers mash), mana ụlọ nkwakọba nwere 4. Gịnị ka ị ga-eme?", options: ["Gbanwee ndepụta ahụ ka ọ bụrụ 6 ọzọ", "Chere ruo ọgwụgwụ oge ugbo", "Zụta akpa 2 ọzọ ma ghara ikwu ihe ọ bụla", "Jụọ n'izu a ihe mere ha ji dị iche: mperi ndekọ, ebe ọ na-efu ma ọ bụ izu ohi"], answer: 3, why: "Ịgụ kwa izu na-ejide ọdịiche mgbe ha ka dị obere ma dị mfe ịkọwa." }
          ]
        },
        {
          title: "Idekọ ọrụ na ịkwụ ndị ọrụ ụgwọ site na mobile money",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dekọọ ụbọchị na ọrụ onye ọrụ ọ bụla ma kwụọ ha ụgwọ site na mobile money nwere ndekọ dabara.",
          text: [
            "Ọrụ aka na-abụkarị ego kacha ukwuu a na-emefu n'ugbo na-eto eto, ọ bụkwa ihe a na-edekọ obere. Debe ndepụta ndị ọrụ (aha, nọmba ekwentị maka mobile money, ụgwọ kwa ụbọchị ma ọ bụ kwa ọnwa, ụbọchị mmalite) na ndekọ ọbịbịa na ọrụ kwa ụbọchị: ụbọchị, onye ọrụ, ubi ma ọ bụ otu, ọrụ, ụbọchị ma ọ bụ awa. Onye nlekọta nwere ike iziga ya dị ka foto WhatsApp nke akwụkwọ ọbịbịa ma ọ bụ dejupụta fọm e kekọrịtara kwa mgbede.",
            "Kwụọ ụgwọ site na mobile money ebe ị nwere ike: M-Pesa na Kenya, MTN MoMo na Ghana, Orange Money ma ọ bụ Wave na Senegal na Côte d'Ivoire, ma ọ bụ nnyefe ego site n'ụlọ akụ ma ọ bụ mobile money na Nigeria. Ụgwọ ọ bụla wee nwee koodu azụmahịa (transaction code). Detuo ụbọchị, onye ọrụ, ego na koodu azụmahịa n'ime ndekọ ụgwọ gị, n'akụkụ ụbọchị a rụrụ ọrụ. Na njedebe izu, ụbọchị mụbara n'ụgwọ kwesịrị ịha nhata ihe i kwụrụ. Naanị ọmụmaatụ: 6 days x KES 500 = KES 3,000, ma ọ bụ 5 days x NGN 4,000 = NGN 20,000.",
            "Kwụọ ụgwọ n'ụzọ ziri ezi na n'oge, ma lelee ụgwọ kacha nta iwu kwadoro (minimum wage) na iwu ọrụ n'ụlọ ọrụ gọọmentị na-ahụ maka ọrụ (ministry of labour) na mba gị. Ekwela ka ụmụaka rụọ ọrụ ugbo dị ize ndụ dị ka ịgba ọgwụ, imetụ kemịkalụ aka ma ọ bụ iji igwe. Gwa ndị ọrụ ihe ị na-edekọ na ihe kpatara ya, ma kwado ụgwọ ọ bụla na ha, ka ndekọ ahụ chebe akụkụ abụọ."
          ],
          steps: ["Debe ndepụta ndị ọrụ: aha, nọmba mobile money, ụgwọ, ụbọchị mmalite.", "Dekọọ ọbịbịa na ọrụ kwa ụbọchị.", "Kwụọ ụgwọ site na mobile money ma detuo koodu azụmahịa n'ime ndekọ ụgwọ.", "Kwa izu, lelee: ụbọchị x ụgwọ = ego e kwụrụ.", "Kwado ụgwọ ọ bụla na onye ọrụ ahụ."],
          words: [["Onye ọrụ nkeji ụbọchị (casual worker)", "onye ọrụ a na-akwụ ụgwọ kwa ụbọchị ma ọ bụ kwa ọrụ, ọ bụghị na nkwekọrịta kwa ọnwa."], ["Koodu azụmahịa (transaction code)", "koodu pụrụ iche dị n'ozi mobile money nke na-egosi na e mere ụgwọ."], ["Ndekọ ụgwọ ọnwa (payroll)", "ndekọ onye a na-akwụ ụgwọ, ego ole na mgbe."]],
          slides: [
            { title: "Ọrụ aka: ego buru ibu, ndekọ dị obere", bullets: ["Ndepụta ndị ọrụ: aha, nọmba, ụgwọ", "Ndekọ kwa ụbọchị: ụbọchị, onye ọrụ, ubi, ọrụ, ụbọchị"] },
            { title: "Kwụọ ụgwọ nwere akara", bullets: ["M-Pesa, MTN MoMo, Orange Money, Wave", "Detuo koodu azụmahịa n'ime ndekọ", "Naanị ọmụmaatụ: 6 days x KES 500 = KES 3,000"] },
            { title: "Nlele kwa izu", bullets: ["Ụbọchị x ụgwọ = ego e kwụrụ", "Kwado ya na onye ọrụ ọ bụla"] },
            { title: "Kwụọ ụgwọ ziri ezi na nke iwu", bullets: ["Lelee minimum wage n'ụlọ ọrụ gọọmentị na-ahụ maka ọrụ", "Enweghị ọrụ dị ize ndụ maka ụmụaka", "Gwa ndị ọrụ ihe ị na-edekọ"] }
          ],
          sources: [FAO_CHILD],
          tryIt: "Mee ndepụta ndị ọrụ na ndekọ ọbịbịa na ọrụ nke otu izu maka ugbo gị (ezi ma ọ bụ ọmụmaatụ). Dejupụta ndekọ ụgwọ nwere ụbọchị, onye ọrụ, ụbọchị a rụrụ, ụgwọ, ego na kọlụm koodu azụmahịa, ma lelee na ụbọchị mụbara n'ụgwọ hara nhata ego ahụ maka onye ọrụ ọ bụla.",
          youCanNow: "idekọ onye rụrụ ọrụ, ọrụ ọ rụrụ na ogologo oge ọ rụrụ, ma kwụọ ndị ọrụ ụgwọ site na mobile money nwere ndekọ dabara.",
          quickCheck: [
            { objective: "O3", q: "Kedu ndekọ ụgwọ zuru ezu?", options: ["\"E kwụrụ Juma\"", "\"12 May, Juma, ụbọchị 6 ịkpa ahịhịa F2, KES 3,000 (ọmụmaatụ), koodu QX7...\"", "\"E kwụrụ ndị ọrụ n'izu a\"", "\"KES 3,000\""], answer: 1, why: "O nwere ụbọchị, onye ọrụ, ọrụ, ụbọchị a rụrụ, ego na koodu azụmahịa." },
            { objective: "O3", q: "Otu onye ọrụ kwuru na ọ rụrụ ọrụ ụbọchị 6; ndekọ na-egosi 5. Gịnị na-enyere aka kacha?", options: ["Ndekọ ọbịbịa kwa ụbọchị na mkparịta ụka gị na ya na onye nlekọta", "Ịkwụghị ihe ọ bụla ruo ọnwa ọzọ", "Iwere nọmba ka elu n'ajụghị ajụjụ", "Ihichapụ ndekọ ahụ"], answer: 0, why: "Ndekọ kwa ụbọchị na-enye akụkụ abụọ ndekọ ha ga-elele ọnụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi usoro ugbo gị",
        questions: [
          { objective: "O1", q: "Kedu ihe ịdọ aka na ntị mgbe ị na-ahọrọ app ugbo?", options: ["Ọ na-arụ ọrụ n'enweghị ịntanetị", "Ị nwere ike ime export nke ozi gị", "Ọ dị n'efu n'ihi na ọ na-ere ozi gị", "Ndị ọrụ nwere ike itinye ozi n'ahụghị ndekọ ụgwọ"], answer: 2, why: "Ị na-atụfu ikike n'elu ozi ugbo gị na nke ndị ọrụ gị." },
          { objective: "O1", q: "Tupu i tinye ndekọ gị niile n'app, ị kwesịrị:", options: ["Ịnwale ya izu abụọ site n'ezi ndekọ ma lelee ọnụ ahịa ya mgbe nnwale gwụrụ", "Ịkwụ ụgwọ otu afọ dum otu mgbe", "Ịhọrọ nke nwere mgbasa ozi kacha", "Ịrịọ app ahụ ka ọ họọrọ gị"], answer: 0, why: "Ezi nnwale na-egosi ma gị na ndị ọrụ gị ga-eji ya, na ego ọ ga-efu." },
          { objective: "O2", q: "Gịnị mere ị ga-eji nye ubi ọ bụla aha a kara aka dị ka \"F1 Tomato 0.5 acre\"?", options: ["App agaghị emeghe ma ọ bụghị ya", "Ka ego e mefuru na ihe e nwetara gbakọọ site n'ubi", "Ndị na-azụ ahịa na-arịọ ya", "Ọ bụ iwu"], answer: 1, why: "Otu aha ahụ na ndekọ ọ bụla na-ekwe ka ị gbakọọ ubi ọ bụla." },
          { objective: "O2", q: "Ndepụta ngwaahịa gị kwuru na akpa NPK 10 fọdụrụ. Ọnụ ọgụgụ n'ụlọ nkwakọba bụ 7. Nke a na-egosi:", options: ["Ndepụta ngwaahịa na-eziri ezi mgbe niile", "Ọ dịghị ihe dị mkpa", "Ị chọrọ app ọhụrụ", "Mperi, ebe ọ na-efu ma ọ bụ izu ohi i kwesịrị inyocha n'izu a"], answer: 3, why: "Ọdịiche bụ akara ka ị jụọ ihe kpatara ya mgbe ọ ka dị obere." },
          { objective: "O3", q: "Gịnị mere ị ga-eji kwụọ ndị ọrụ ụgwọ site na mobile money ebe ị nwere ike?", options: ["Ọ na-adị n'efu mgbe niile", "Ndị ọrụ na-ahọrọ ego n'aka", "Ụgwọ ọ bụla nwere koodu azụmahịa ị nwere ike idekọ", "Ọ na-egbochi ịkwụ minimum wage"], answer: 2, why: "Koodu azụmahịa bụ ihe akaebe nke ụgwọ maka gị na onye ọrụ ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ijikwa site n'ozi, nso ma ọ bụ n'ebe dị anya",
      lessons: [
        {
          title: "Ichebe ozi ugbo na nke ndị ọrụ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kpebie ozi ị ga-achịkọta, onye nwere ike ịhụ ya na otu ị ga-esi chebe ya.",
          text: [
            "Usoro gị ugbu a nwere ozi bara uru na nke nzuzo: aha na nọmba ekwentị ndị ọrụ, ụgwọ ha, ihe ị rere na ngwaahịa gị. Kenya (Office of the Data Protection Commissioner), Nigeria (Nigeria Data Protection Commission) na Ghana (Data Protection Commission) nwere iwu nchekwa ozi na ndị na-achị ya, ọtụtụ mba Africa ndị ọzọ nwekwara. Ugbo na azụmahịa buru ibu nwere ike ịdebanye aha; lelee weebụsaịtị onye na-achị ya na mba gị.",
            "Chịkọta naanị ihe ị chọrọ. Ị chọrọ aha onye ọrụ, nọmba mobile money ya, ụbọchị ọ rụrụ na ụgwọ ya. Ị chọghị nọmba ID ya na spreadsheet e kekọrịtara ma ọ bụ foto ID ya n'otu WhatsApp. Gwa ndị ọrụ ihe ị na-edebe na ihe kpatara ya. Etinyela PIN mobile money, okwuntughe ma ọ bụ nọmba ID mgbe ọ bụla na spreadsheet, n'app ma ọ bụ na ngwa AI.",
            "Kaa ikike site n'ọrụ onye ọ bụla: ndị ọrụ na-etinye ọrụ; onye njikwa na-ahụ ngwaahịa na ọbịbịa; naanị gị (na onye na-edekọ ego gị, accountant) na-ahụ ụgwọ na ihe e rere. Jiri mkpọchi ekwentị na ịbanye nzọụkwụ abụọ, wepụ ndị hapụrụ ugbo n'otu ụbọchị ahụ, ma debe nkwado (backup). Ọ bụrụ na i kesaa ozi na onye na-azụ ahịa, onye na-agbazinye ego ma ọ bụ mmemme, kesaa naanị ihe ha chọrọ ma jụọ otu ha ga-esi jiri ya."
          ],
          steps: ["Depụta ozi i nwere ma gbachapụ ihe ị chọghị.", "Gwa ndị ọrụ ihe ị na-edekọ na ihe kpatara ya.", "Kaa ikike site n'ọrụ: onye ọrụ, onye njikwa, onye nwe ugbo.", "Kpọchie ekwentị, gbanye ịbanye nzọụkwụ abụọ, debe backup.", "Wepụ ikike onye ọ bụla hapụrụ, n'otu ụbọchị ahụ."],
          words: [["Ozi onwe (personal data)", "ozi gbasara mmadụ, dị ka aha, nọmba ekwentị ma ọ bụ ụgwọ."], ["Ikike (access)", "onye nwere ike ịhụ ma ọ bụ gbanwee ozi ọ bụla."], ["Ịbanye nzọụkwụ abụọ (two-step sign-in)", "nlele nke abụọ, dị ka koodu e zitere n'ekwentị gị, mgbe ị na-abanye."]],
          slides: [
            { title: "I nwere ozi nzuzo ugbu a", bullets: ["Aha, nọmba na ụgwọ ndị ọrụ", "Ihe ị rere na ngwaahịa gị", "Iwu nchekwa ozi metụtara ya"] },
            { title: "Chịkọta naanị ihe ị chọrọ", bullets: ["Aha, nọmba mobile money, ụbọchị, ụgwọ", "Enweghị foto ID n'otu WhatsApp", "Ọ dịghị mgbe PIN ma ọ bụ okwuntughe"] },
            { title: "Ikike site n'ọrụ", bullets: ["Ndị ọrụ: na-etinye ọrụ", "Onye njikwa: ngwaahịa na ọbịbịa", "Onye nwe ugbo: ụgwọ na ihe e rere"] },
            { title: "Debe ya n'enweghị nsogbu", bullets: ["Mkpọchi ekwentị, ịbanye nzọụkwụ abụọ, backup", "Wepụ ndị hapụrụ n'otu ụbọchị ahụ", "Kesaa naanị ihe ndị ọzọ chọrọ"] }
          ],
          sources: [ODPC, NDPC, GH_DPC],
          tryIt: "Depụta ụdị ozi ọ bụla dị n'usoro ugbo gị. Gbachapụ ihe ị chọghị. Dee tebụl ikike: maka ọrụ ọ bụla (onye ọrụ, onye njikwa, onye nwe ugbo, accountant), ihe ha nwere ike ịhụ na ihe ha nwere ike itinye.",
          youCanNow: "ịchịkọta naanị ozi ugbo gị chọrọ ma chịkwaa onye nwere ike ịhụ ya.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke a na-ekwesịghị itinye na spreadsheet ugbo e kekọrịtara?", options: ["Aha ndị ọrụ", "Ụbọchị a rụrụ ọrụ", "Aha ubi", "PIN mobile money ndị ọrụ"], answer: 3, why: "PIN bụ nzuzo; ọ dịghị onye ọzọ kwesịrị ijide ya mgbe ọ bụla." },
            { objective: "O6", q: "Onye njikwa gị hapụrụ ugbo. Olee mgbe ị ga-ewepụ ikike ya na spreadsheet na app ugbo?", options: ["Na njedebe oge ugbo", "N'otu ụbọchị ahụ", "Naanị ma ọ bụrụ na ọ rịọrọ", "Ọ dịghị mgbe; o nwere ike ịlọghachi"], answer: 1, why: "Iwepụ ikike n'otu ụbọchị ahụ na-echebe ozi gị na ozi ndị ọrụ gị." }
          ]
        },
        {
          title: "Ijikwa ugbo site n'ebe dị anya",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dee usoro akụkọ kwa ụbọchị nke ị nwere ike ilele.",
          text: [
            "Ọtụtụ ndị nwe ugbo na-elekọta ugbo site n'obodo mepere emepe site n'aka onye njikwa ma ọ bụ onye ikwu. Ọ na-arụ ọrụ mgbe akụkọ bụ usoro a na-agbaso, ọ bụghị mgbe ị na-akpọ oku n'oge ọ bụla ma jụọ \"Kedu ka ihe niile si aga?\". Kwekọrịta na akụkọ WhatsApp kwa ụbọchị n'oge a kara aka, dịka ọmụmaatụ 6 pm: ihe e mere n'ubi ma ọ bụ ụlọ ọ bụla, nọmba (akwa e chịkọtara, ọkụkọ nwụrụ anwụ, nri e jiri, lita mmiri ara ehi, crate e rere, ndị ọrụ bịara), nsogbu, na foto atọ nke otu ebe ahụ kwa ụbọchị (ihe ọkụkụ, anụmanụ, ụlọ nkwakọba).",
            "Mee obere nzukọ nlele kwa izu site n'ekwentị ma ọ bụ vidiyo n'oge a kara aka: gaa n'ime nọmba izu ahụ, ọnụ ọgụgụ ngwaahịa na atụmatụ izu na-abịa. Kpebie ọnụ ma dee mkpebi ndị ahụ n'otu WhatsApp ahụ. A ga-akwụkwa ezigbo onye njikwa ụgwọ ma tụkwasị ya obi ime obere mkpebi n'enweghị gị.",
            "Tụkwasị obi, mana lelee. Tụnyere akụkọ na ihe ndị siri ike ịgha ụgha: ndekọ mobile money (statement), akwụkwọ nnata ego nke ndị na-azụ ahịa, ọnụ ọgụgụ ngwaahịa kwa izu na foto nwere ụbọchị na ebe e sere ya. Gaa leta n'ebughị ụzọ gwa ha ogologo oge mgbe ụfọdụ, ma rịọ onye agbata obi ị tụkwasịrị obi, dọkịta anụmanụ ma ọ bụ onye ndụmọdụ ọrụ ugbo (extension officer) ka o nye gị echiche nke abụọ. Mgbe nọmba dị ka ọ ezighi ezi, jụọ nwayọọ na n'oge. Ọtụtụ ọdịiche bụ mperi, nlele mgbe niile na-eme ka ndị eziokwu nọgide na-ekwu eziokwu."
          ],
          steps: ["Kwekọrịta na akụkọ kwa ụbọchị: oge, nọmba, nsogbu, foto atọ a kara aka.", "Kaa oge nzukọ nlele kwa izu aka.", "Dee mkpebi n'otu ahụ.", "Lelee site na statement, akwụkwọ nnata ego, ọnụ ọgụgụ ngwaahịa na foto nwere ụbọchị.", "Gaa leta mgbe ụfọdụ n'ebughị ụzọ gwa ha ogologo oge; jụọ n'oge na nwayọọ banyere nọmba na-adịghị mma."],
          words: [["Onye nwe ugbo bi n'ebe ọzọ (absentee owner)", "onye nwe ugbo bi n'ebe dị anya ma na-elekọta ugbo site n'aka onye ọzọ."], ["Ilele (verify)", "ịchọpụta na akụkọ bụ eziokwu site n'iji isi iyi nke abụọ."], ["Nzukọ nlele (check-in)", "obere nzukọ a na-enwe mgbe niile iji lelee nọmba na atụmatụ."]],
          slides: [
            { title: "Usoro ka mma karịa oku na mberede", bullets: ["Akụkọ WhatsApp kwa ụbọchị n'oge a kara aka", "Nọmba, nsogbu, foto atọ a kara aka"] },
            { title: "Nzukọ nlele kwa izu", bullets: ["Otu oge ahụ kwa izu", "Nọmba, ọnụ ọgụgụ ngwaahịa, atụmatụ izu na-abịa", "Dee mkpebi n'otu ahụ"] },
            { title: "Tụkwasị obi, mana lelee", bullets: ["Statement mobile money na akwụkwọ nnata ego", "Ọnụ ọgụgụ ngwaahịa kwa izu, foto nwere ụbọchị", "Nleta na echiche nke abụọ nke onye ị tụkwasịrị obi"] },
            { title: "Mgbe nọmba dị ka ọ ezighi ezi", bullets: ["Jụọ n'oge na nwayọọ", "Ọtụtụ ọdịiche bụ mperi", "Nlele mgbe niile na-eme ka onye ọ bụla kwuo eziokwu"] }
          ],
          tryIt: "Dee ụdị akụkọ kwa ụbọchị onye njikwa gị ga-eziga (nọmba, ahịrị nsogbu na ebe atọ a ga-ese foto). Wee depụta ụzọ atọ ị ga-esi lelee akụkọ ahụ, na ụbọchị na oge nzukọ nlele gị kwa izu.",
          youCanNow: "ịhazi akụkọ kwa ụbọchị na nzukọ nlele kwa izu gị na onye njikwa ma lelee ihe ha gwara gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu akụkọ kwa ụbọchị kacha baa uru site n'aka onye njikwa ugbo ọkụkọ?", options: ["\"Ihe niile dị mma.\"", "Ozi olu n'oge ọ bụla n'ụbọchị", "\"6 pm: akwa 412, ọkụkọ 2 nwụrụ, akpa nri 3 e jiri, ndị ọrụ 4, foto House A, ọkụkọ na ụlọ nkwakọba\"", "Naanị otu oku kwa izu"], answer: 2, why: "Nọmba na foto a kara aka n'oge a kara aka nwere ike ịtụnyere ụbọchị na ụbọchị." },
            { objective: "O4", q: "Kedu ụzọ kacha mma isi lelee akwa a kọrọ na e rere?", options: ["Tụnyere ha na statement mobile money na akwụkwọ nnata ego nke ndị na-azụ ahịa", "Jụọ onye njikwa ma o ji n'aka", "Gụọ akwa dị na foto WhatsApp", "Kwere ya n'ihi na ọ bụ onye ezinụlọ"], answer: 0, why: "Ụgwọ na akwụkwọ nnata ego bụ isi iyi nke abụọ siri ike ịgha ụgha." }
          ]
        },
        {
          title: "Ihe nlele gị kwa izu: nọmba ise ị ga-ele anya",
          objectives: ["O5", "O4"],
          minutes: 6,
          goal: "Wuo ihe nlele kwa izu nwere nọmba ise, nke ọ bụla nwere oke nkịtị na ihe a ga-eme.",
          text: [
            "Ihe nlele (dashboard) bụ obere peeji nke nọmba ole na ole na-agwa gị ma ugbo ọ na-aga nke ọma. Ise ezuola ịgụ n'ime nkeji abụọ kwa izu. Họrọ nọmba ndị si na ndekọ gị ozugbo, ka onye ọ bụla ghara icheta ha.",
            "Nhọrọ ọma maka ọtụtụ ugbo: (1) ego batara na ego pụrụ n'izu a; (2) ihe e nwetara, dị ka kg e wetara n'ubi, akwa kwa ụbọchị, lita mmiri ara ehi ma ọ bụ uto azụ; (3) mfu, dị ka ọkụkọ nwụrụ anwụ, anụmanụ na-arịa ọrịa ma ọ bụ crate a jụrụ; (4) ngwaahịa ọrụ ugbo fọdụrụ tụnyere ihe izu abụọ na-abịa chọrọ; (5) ụbọchị ọrụ ma ọ bụ ego ọrụ aka kwa ubi ma ọ bụ otu. Ugbo ọkụkọ na-eyi akwa na Ghana nwere ike ile akwa kwa ụbọchị, ọkụkọ nwụrụ anwụ, nri e jiri, ego si n'ire akwa na nri fọdụrụ. Onye ọrụ ugbo tomato na Senegal nwere ike ile crate e wetara, crate a jụrụ, ụbọchị ọrụ, ego si n'ire ere na XOF na ọgwụ ụmụ ahụhụ na fatịlaịza fọdụrụ.",
            "Maka nọmba ọ bụla, dee oke nkịtị na ihe a ga-eme. Ọmụmaatụ: \"Ọkụkọ nwụrụ karịrị 3 kwa ụbọchị: kpọọ dọkịta anụmanụ n'otu ụbọchị ahụ.\" \"Nri fọdụrụ erughị ụbọchị 10: zụta nri.\" Tinye nọmba ise ahụ n'obere tebụl nwere otu kọlụm kwa izu, ka ị hụ ụzọ ha na-aga (trend). Lelee ya na nzukọ nlele kwa izu, ma gbanwee nọmba ma ọ bụrụ na ọ dịghị mgbe ọ na-eduga na mkpebi."
          ],
          steps: ["Họrọ nọmba ise si na ndekọ gị.", "Dee oke nkịtị ma ọ bụ ebumnuche maka nke ọ bụla.", "Dee ihe a ga-eme ma ọ bụrụ na nọmba pụọ n'oke ahụ.", "Mee tebụl nwere otu kọlụm kwa izu.", "Lelee ya na nzukọ nlele kwa izu ma mee ihe."],
          words: [["Ihe nlele (dashboard)", "obere nchịkọta nke nọmba ndị bụ isi na-egosi otu ugbo si aga."], ["Ụzọ nọmba na-aga (trend)", "ụzọ nọmba na-aga n'ime ọtụtụ izu."], ["Oke nkịtị (normal range)", "ọnụ ọgụgụ ị na-atụ anya mgbe ihe na-aga nke ọma."]],
          slides: [
            { title: "Nọmba ise, nkeji abụọ", bullets: ["Ozugbo site na ndekọ gị", "Gụọ ya kwa izu"] },
            { title: "Nhọrọ ọma", bullets: ["Ego batara na ego pụrụ", "Ihe e nwetara: kg, akwa, lita", "Mfu, ngwaahịa fọdụrụ, ego ọrụ aka"] },
            { title: "Oke na ihe a ga-eme", bullets: ["Ọkụkọ nwụrụ karịrị nkịtị: kpọọ dọkịta anụmanụ", "Nri erughị ụbọchị 10: zụta nri"] },
            { title: "Lee ụzọ ọ na-aga", bullets: ["Otu kọlụm kwa izu", "Lelee ya na nzukọ nlele", "Wepụ nọmba na-adịghị eduga n'omume"] }
          ],
          tryIt: "Ọrụ ikpeazụ: wuo ihe nlele ugbo gị kwa izu nwere nọmba ise, nke ọ bụla nwere ebe o si na ndekọ gị, oke nkịtị na ihe ị ga-eme ma ọ bụrụ na ọ adabaghị, ma dejupụta opekata mpe izu abụọ. Wee dee usoro akụkọ gị nke otu peeji: akụkọ kwa ụbọchị, nzukọ nlele kwa izu, otu ị ga-esi lelee, na onye na-ahụ ozi ọ bụla.",
          youCanNow: "iji ihe nlele nọmba ise kwa izu na usoro akụkọ ị nwere ike ilele jikwaa ugbo gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere nọmba ihe nlele ga-eji si na ndekọ ozugbo?", options: ["Ka ha yie ihe ọkachamara", "Ka onye ọ bụla ghara icheta ma ọ bụ chee ha", "N'ihi na app chọrọ ya", "Ka ndị ọrụ ghara ịhụ ha"], answer: 1, why: "Nọmba si na ndekọ a pụrụ ịtụkwasị obi; nọmba si n'ncheta adịghị otú ahụ." },
            { objective: "O5", q: "Ihe nlele gị kwuru \"nri fọdụrụ erughị ụbọchị 10: zụta nri\". Nri fọdụrụ bụ ụbọchị 6. Gịnị ugbu a?", options: ["Chere nlele kwa ọnwa", "Wepụ nọmba ahụ n'ihe nlele", "Gwa ndị ọrụ ka ha nye nri obere", "Zụta nri n'izu a"], answer: 3, why: "Nọmba ọ bụla nwere ihe a ga-eme; mgbe ọ pụrụ n'oke ahụ, ị na-eme ihe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ijikwa site n'ozi, nso ma ọ bụ n'ebe dị anya",
        questions: [
          { objective: "O6", q: "Onye kwesịrị ịhụ ụgwọ ndị ọrụ n'usoro ugbo?", options: ["Onye ọrụ ọ bụla", "Onye ọ bụla nọ n'otu WhatsApp ugbo", "Onye nwe ugbo na, ma ọ dị mkpa, accountant", "Ndị na-azụ ahịa"], answer: 2, why: "Ụgwọ bụ nzuzo; ikike site n'ọrụ na-echebe ya." },
          { objective: "O4", q: "Gịnị na-eme ka akụkọ ugbo kwa ụbọchị dị mfe ilele?", options: ["Nọmba a kara aka na otu ebe foto ahụ n'oge a kara aka", "Ozi olu dị ogologo", "Ịkpọ oku mgbe ọ bụla i chetara", "Naanị ịkọ nsogbu"], answer: 0, why: "Otu ihe ahụ kwa ụbọchị na-ekwe ka ị tụnyere ma hụ mgbanwe." },
          { objective: "O4", q: "Ihe onye njikwa kọrọ na e rere dị obere karịa akwụkwọ nnata ego nke onye na-azụ ahịa. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Chụpụ ya ozugbo", "Hapụ ya", "Tinye ya n'otu ndị ọrụ", "Jụọ nwayọọ na n'oge, ma tụnyere ndekọ ndị ahụ ọnụ"], answer: 3, why: "Ọtụtụ ọdịiche bụ mperi; ịjụ n'oge site na ndekọ na-achọpụta nke ọ bụ." },
          { objective: "O5", q: "Kedu nọmba ihe nlele dị mma maka ugbo ehi mmiri ara?", options: ["Agba ụlọ anụmanụ", "Lita mmiri ara ehi kwa ụbọchị", "Ọnụ ọgụgụ ozi WhatsApp", "Ehi onye njikwa kacha hụ n'anya"], answer: 1, why: "Nọmba ihe e nwetara dị ka lita kwa ụbọchị na-egosi ma ugbo ọ na-aga nke ọma." },
          { objective: "O5", q: "Otu nọmba ihe nlele anaghị eduga na mkpebi ọ bụla. Ị kwesịrị:", options: ["Iji nke na-eduga na mkpebi dochie ya", "Idebe ya ruo mgbe ebighị ebi", "Itinye ise ọzọ dị ka ya", "Izobe ihe nlele ahụ"], answer: 0, why: "Ihe nlele bụ maka mkpebi; wepụ nọmba na-adịghị enyere aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ijikwa Ugbo site n'Ozi na Ngwa Ekwentị",
    questions: [
      { objective: "O1", q: "Gịnị bụ nnwale kacha mkpa nke app ugbo?", options: ["O nwere njirimara kacha ọtụtụ", "Ọ kacha ọnụ", "A gbasara ozi ya na redio", "Gị na ndị ọrụ gị na-eji ya kwa ụbọchị"], answer: 3, why: "Ngwa onye ọ bụla anaghị eji anaghị enye gị ozi ọ bụla." },
      { objective: "O1", q: "Kedu njirimara na-ekwe ka onye ọrụ dekọọ ọrụ n'ahụghị ndekọ ụgwọ?", options: ["Ọtụtụ ndị ọrụ nwere ikike dị iche iche", "Ọnọdụ ọchịchịrị (dark mode)", "Oku vidiyo", "Foto na-enweghị njedebe"], answer: 0, why: "Ikike site n'ọrụ na-eme ka ozi nzuzo nọgide na nzuzo." },
      { objective: "O1", q: "Spreadsheet e kekọrịtara n'efu ọ nwere ike dochie app ugbo?", options: ["Mba, ọ dịghị mgbe", "Ee, ma ọ bụrụ na e hazie ya nke ọma ma jiri ya kwa ụbọchị", "Naanị maka ugbo buru ibu nke ukwuu", "Naanị ma ọ bụrụ na e bipụtara ya"], answer: 1, why: "Spreadsheet e hazịrị nke ọma nwere ike idekọ ubi, ọrụ, ngwaahịa na ụgwọ." },
      { objective: "O2", q: "Kedu aha ubi dị mma na ndekọ?", options: ["\"Nke dị nso n'okporo ụzọ\"", "\"Tomato\"", "\"F1 Tomato 0.5 acre\"", "Aha dị iche kwa izu"], answer: 2, why: "Aha mkpụmkpụ a kara aka nwere nha na-eme ka ndekọ gbakọọ." },
      { objective: "O2", q: "Gịnị mere ị ga-eji kaa nha aka dị ka \"akpa 50 kg\" maka ngwaahịa ọ bụla?", options: ["Ka mgbakọ na ngwaahịa fọdụrụ ziri ezi", "N'ihi na ndị na-ere ngwaahịa chọrọ ya", "Ka ndị ọrụ dee obere", "Ọ dịghị mkpa"], answer: 0, why: "Nha agwakọtara na-eme ka mgbakọ ghara iziri ezi." },
      { objective: "O2", q: "Mgbe onye ọrụ dekọrọ \"2 bags NPK used on F1\", ndepụta ngwaahịa kwesịrị:", options: ["Ịnọ otu ebe", "Ịrị elu site na abụọ", "Ka e hichapụ ya", "Ibelata site na abụọ"], answer: 3, why: "Ngwaahịa fọdụrụ = ihe batara wepụ ihe e jiri." },
      { objective: "O2", q: "Ugboro ole ka ị ga-agụ ụlọ nkwakọba ngwaahịa tụnyere ndepụta?", options: ["Otu ugboro n'afọ", "Naanị mgbe izu ohi mere", "Kwa izu", "Ọ dịghị mgbe"], answer: 2, why: "Ịgụ kwa izu na-ejide ọdịiche n'oge." },
      { objective: "O3", q: "Gịnị na-ejikọ ụgwọ mobile money na ndekọ onye ọrụ?", options: ["Koodu azụmahịa", "Agba ekwentị", "Foto ID onye ọrụ na WhatsApp", "Ihu igwe"], answer: 0, why: "Koodu ahụ na-egosi ụgwọ ma jikọọ ya na ndekọ." },
      { objective: "O3", q: "Otu onye ọrụ rụrụ ụbọchị 5 n'ụgwọ ọmụmaatụ NGN 4,000 kwa ụbọchị. Ndekọ kwesịrị igosi:", options: ["NGN 4,000", "NGN 20,000", "NGN 9,000", "NGN 45,000"], answer: 1, why: "5 x 4,000 = 20,000; ụbọchị mụbara n'ụgwọ ga-aharịrị nhata ego e kwụrụ." },
      { objective: "O3", q: "Ebee ka ị ga-elele minimum wage iwu kwadoro?", options: ["Otu WhatsApp", "Onye na-ere ngwaahịa ọrụ ugbo", "Naanị ngwa enyemaka AI", "Ụlọ ọrụ gọọmentị na-ahụ maka ọrụ na mba gị"], answer: 3, why: "Iwu ụgwọ na-esi n'aka ndị ọchịchị na-ahụ maka ọrụ, ha na-agbanwekwa ka oge na-aga." },
      { objective: "O6", q: "Kedu ozi ugbo chọrọ gbasara onye ọrụ nkeji ụbọchị?", options: ["Aha, nọmba mobile money, ụbọchị na ụgwọ", "PIN ya", "Foto ID ya n'otu mkparịta ụka", "Okwuntughe ụlọ akụ ya"], answer: 0, why: "Chịkọta naanị ihe ị chọrọ." },
      { objective: "O6", q: "Kedu ọfịs na-achị ozi onwe na Kenya?", options: ["Kenya Meteorological Department", "Pest Control Products Board", "Office of the Data Protection Commissioner", "KALRO"], answer: 2, why: "ODPC bụ onye na-achị nchekwa ozi na Kenya." },
      { objective: "O6", q: "Onye na-azụ ahịa na-arịọ ndekọ ugbo gị. Ị kwesịrị:", options: ["Iziga ihe niile, gụnyere ụgwọ", "Ikesa naanị ihe ha chọrọ ma jụọ otu ha ga-esi jiri ya", "Ịjụ ire ha ihe", "Iziga okwuntughe ekwentị gị"], answer: 1, why: "Kesaa ihe kacha nta ma mara otu a ga-esi jiri ya." },
      { objective: "O4", q: "Gịnị ka akụkọ kwa ụbọchị site n'ugbo kwesịrị inwe?", options: ["Naanị ozi ọma", "Akụkọ dị ogologo", "Ọ dịghị ihe; akụkọ adịghị mkpa", "Nọmba, nsogbu na foto nke otu ebe ahụ"], answer: 3, why: "Ihe a kara aka na-ekwe ka ị tụnyere ụbọchị na ụbọchị." },
      { objective: "O4", q: "Kedu nke kacha sie ike ịgha ụgha mgbe ị na-elele akụkọ?", options: ["Statement mobile money", "Ozi olu", "Nkwa", "Ozi ederede na-ekwu \"ihe niile dị mma\""], answer: 0, why: "Statement na akwụkwọ nnata ego bụ ndekọ nọọrọ onwe ha." },
      { objective: "O4", q: "Gịnị bụ ebumnuche nzukọ nlele kwa izu?", options: ["Iti onye njikwa mkpu", "Ilele nọmba, ngwaahịa na atụmatụ izu na-abịa ọnụ", "Iji dochie ndekọ niile", "Ịkwụ ndị na-ere ngwaahịa ụgwọ"], answer: 1, why: "Ọ na-eme ka nọmba ghọọ mkpebi." },
      { objective: "O5", q: "Nọmba ole ka ihe ọmụmụ a na-atụ aro maka ihe nlele kwa izu?", options: ["Otu", "Iri abụọ", "Ise", "Iri ise"], answer: 2, why: "A pụrụ ịgụ nọmba ise ma mee ihe n'ime nkeji abụọ." },
      { objective: "O5", q: "Kedu nọmba mfu maka ugbo ọkụkọ na-eyi akwa?", options: ["Akwa e rere", "Nri e bubatara", "Ndị ọrụ bịara", "Ọkụkọ nwụrụ n'izu a"], answer: 3, why: "Mfu dị ka ọkụkọ nwụrụ anwụ na-adọ gị aka na ntị n'oge." },
      { objective: "O5", q: "\"Ọkụkọ nwụrụ karịrị 3 kwa ụbọchị: kpọọ dọkịta anụmanụ n'otu ụbọchị ahụ\" bụ ọmụmaatụ nke:", options: ["Oke nkịtị nwere ihe a ga-eme", "Iwu nchekwa ozi", "Koodu mobile money", "Ịgụ ngwaahịa"], answer: 0, why: "Nọmba ihe nlele ọ bụla nwere oke na ihe ị ga-eme." },
      { objective: "O5", q: "Gịnị mere ị ga-eji tinye otu kọlụm kwa izu n'ihe nlele?", options: ["Iji jupụta peeji ahụ", "Iji hụ ụzọ ọ na-aga ka oge na-aga", "N'ihi na app chọrọ ya", "Iji zoo izu ndị na-adịghị mma"], answer: 1, why: "Ụzọ nọmba na-aga na-egosi nsogbu tupu ha ebuo ibu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nọmba ise bara uru", objective: "O5", notYet: "Nọmba erughị ise, ma ọ bụ nọmba na-adịghị eduga na mkpebi ọ bụla.", meets: "Nọmba ise gbasara ego, ihe e nwetara, mfu, ngwaahịa na ọrụ aka, nke ọ bụla nwere oke nkịtị na ihe a ga-eme.", exceeds: "E dejupụtala opekata mpe izu abụọ, e meelarịrị otu mkpebi n'ihi otu nọmba." },
      { name: "Nọmba si na ndekọ", objective: "O2", notYet: "E chere nọmba ma ọ bụ cheta ha n'isi.", meets: "Nọmba ọ bụla na-akpọ aha ebe o si na ndekọ (ndekọ ọrụ, ndepụta ngwaahịa, ndekọ ụgwọ).", exceeds: "Ndekọ ahụ na-eji aha na nha a kara aka, ọnụ ọgụgụ ngwaahịa dabakwara ndepụta." },
      { name: "E dekọrọ ọrụ aka na ụgwọ", objective: "O3", notYet: "Ọrụ aka adịghị ma ọ bụ e kwụrụ ụgwọ n'enweghị ndekọ.", meets: "Ụbọchị ọrụ si na ndekọ ọbịbịa, ụgwọ niile nwekwara koodu azụmahịa.", exceeds: "A na-elele ụbọchị x ụgwọ tụnyere ụgwọ e kwụrụ kwa izu." },
      { name: "Usoro akụkọ", objective: "O4", notYet: "Enweghị akụkọ a kara aka, ma ọ bụ naanị \"kpọọ oku mgbe ọ dị mkpa\".", meets: "E dere ihe akụkọ kwa ụbọchị ga-enwe na oge ya, nzukọ nlele kwa izu, na opekata mpe ụzọ abụọ isi lelee.", exceeds: "Ọ gụnyere nleta na-agwaghị ha tupu oge ma ọ bụ echiche nke abụọ nke onye a tụkwasịrị obi, na otu a ga-esi kwuo maka nọmba na-adịghị mma." },
      { name: "E chebere ozi", objective: "O6", notYet: "Onye ọ bụla na-ahụ PIN, nọmba ID ma ọ bụ ụgwọ.", meets: "A na-achịkọta naanị ozi dị mkpa, e kakwara ikike site n'ọrụ.", exceeds: "Ọ gụnyere backup, ịbanye nzọụkwụ abụọ na iwepụ ndị hapụrụ n'otu ụbọchị ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-elele ihe nlele ha kwa izu ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe chọpụtara ma dozie ọdịiche na ngwaahịa, ọrụ aka ma ọ bụ ihe e rere n'ime ụbọchị 60",
      "Akụkụ ụgwọ ndị ọrụ e mere nwere koodu azụmahịa e dekọrọ",
      "Otu ndị ọrụ ugbo ma ọ bụ mmemme na-akọ na mfu ma ọ bụ esemokwu gbasara ụgwọ belatara mgbe ihe ọmụmụ a gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere WhatsApp na mobile money",
      "App spreadsheet n'efu (Google Sheets ma ọ bụ Microsoft Excel) ma ọ bụ app ugbo onye na-amụ ihe na-anwale",
      "Ozi ugbo nke onye na-amụ ihe n'onwe ya, ma ọ bụ nọmba ọmụmaatụ dị na nkuzi ndị ahụ",
      "Akwụkwọ na mkpịsị ode maka tebụl akara na tebụl ikike",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ọ na-arụ ọrụ nke ọma n'otu ndị ọrụ ugbo, mmemme ndị ntorobịa na-azụ ahịa ugbo na otu ndị nwe ugbo bi n'ebe ọzọ; otu isi n'otu nnọkọ.",
      "Akwadola ma ọ bụ ree app ọ bụla na nnọkọ ahụ; hapụ ndị na-amụ ihe ka ha jiri ndepụta ahụ nye nhọrọ akara.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha gosi ezi PIN, okwuntughe, nọmba ID ma ọ bụ ụgwọ ndị ọzọ n'otu.",
      "Jikọọ ndị nwe ugbo na ndị njikwa ha maka ọrụ Nkuzi 5 mgbe ị nwere ike, ka ha abụọ kwekọrịta n'usoro ahụ.",
      "Chetara ndị na-amụ ihe na iwu ụgwọ, ọrụ na nchekwa ozi dị iche site na mba ruo mba ma na-agbanwe; lelee isi iyi gọọmentị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
