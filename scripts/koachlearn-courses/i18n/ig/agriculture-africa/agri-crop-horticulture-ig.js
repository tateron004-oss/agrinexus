"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-crop-horticulture.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_IPM = { name: "FAO: Njikwa ụmụ ahụhụ jikọtara ọnụ (IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const FAO_FAMEWS = { name: "FAO: app ekwentị maka ịlụ ọgụ megide fall armyworm n'Afrịka (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_PUSHPULL = { name: "icipe: usoro push-pull kwụsịrị fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "Ụlọ ọrụ na-ahụ maka nri na ọgwụ (NAFDAC, Naịjirịa)", url: "https://www.nafdac.gov.ng" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO)", url: "https://www.kalro.org" };
const FAO_CSA = { name: "FAO: Akwụkwọ ntụaka maka ọrụ ugbo dabara n'ihu igwe (njikwa ala na mmiri)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-crop-horticulture-ig",
  lang: "ig",
  translationOf: "agri-crop-horticulture",
  category: "Agriculture (Africa)",
  name: "Ịkọ Ihe Ubi na Akwụkwọ Nri n'Ụzọ Ga-adịgide",
  skills: "Ilele na ime ka ahụike ala ka mma, Ịkụ ihe n'ezigbo mkpụrụ, ohere na oge kwesịrị ekwesị, Inye ihe ọkụkụ nri site na nsị anụmanụ, kompost na fatịlaịza, Ilegharị ubi na njikwa ụmụ ahụhụ jikọtara ọnụ (IPM), Iji ọgwụ ụmụ ahụhụ n'enweghị nsogbu na n'ụzọ iwu kwadoro, Ịgba akwụkwọ nri mmiri na ilekọta ihe e wetara n'ubi",
  outcome: "ịhazi na ime otu oge ịkọ ihe maka otu ihe ọkụkụ n'ubi na otu ubi akwụkwọ nri: ịkwado ala ma nye ya nri, ịkụ ihe nke ọma, ilegharị ubi ma jikwaa ụmụ ahụhụ site na IPM, ịgba mmiri n'ụzọ na-enweghị ịla n'iyi, na iwe ihe ubi ma lekọta ya ka ọ ghara ịla uru ya n'iyi.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo, ndị ntorobịa na-amalite ịkọ akwụkwọ nri na mkpụrụ osisi, otu ụmụnwaanyị na otu ndị ntorobịa, na ndị ndụmọdụ ọrụ ugbo (extension officers) na Kenya, Naịjirịa na n'Afrịka niile. Ihe atụ ndị anyị ga-eji bụ ọka, agwa, akpụ na sorghum (ọka okpoko) n'ubi, na tomato, kale (sukuma wiki) na yabasị n'ubi akwụkwọ nri.",
    "Isi 1 bụ maka ịkọ ihe ọkụkụ siri ike: ịghọta na ịnwale ala gị, ịkụ ihe n'ezigbo mkpụrụ n'ohere na oge kwesịrị ekwesị, na inye ihe ọkụkụ nri site n'ịgwakọta nsị anụmanụ, kompost na fatịlaịza. Isi 2 bụ maka ichebe ihe ọkụkụ na imecha ya: ilegharị ubi na IPM, iji ọgwụ ụmụ ahụhụ n'enweghị nsogbu na n'ụzọ iwu kwadoro, ịgba akwụkwọ nri mmiri nke ọma, na iwe ihe ubi na ilekọta ya mgbe e wesịrị ya.",
    "Ihe ọkụkụ, ala na ụmụ ahụhụ dị iche iche site n'otu mpaghara ruo n'ọzọ. Jiri ihe ọmụmụ a na onye ndụmọdụ ọrụ ugbo gị, ụlọ nchọpụta (dị ka KALRO na Kenya, ma ọ bụ mmemme mmepe ọrụ ugbo nke steeti gị na Naịjirịa) na agrovet gị. Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ ịkọ ihe nke otu oge maka otu ihe ọkụkụ n'ubi (dịka ọmụmaatụ ọkara acre nke ọka na agwa) na otu ubi akwụkwọ nri (dịka ọmụmaatụ otu ụzọ n'ụzọ asatọ nke acre nke tomato ma ọ bụ kale): ilele ala na nnwale ala ọ bụla, otu ị ga-esi kwado ala ma nye ya nri, mkpụrụ na ohere, ụbọchị ịkụ ihe, usoro ilegharị ubi kwa izu na ụmụ ahụhụ na ọrịa ndị bụ isi ị ga-ele anya na nzọụkwụ IPM gị, atụmatụ ịgba akwụkwọ nri mmiri, na otu ị ga-esi wee ihe ubi, kewaa ya, chekwaa ya ma ree ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo, ndị ntorobịa na-amalite ịkọ akwụkwọ nri na mkpụrụ osisi, otu ụmụnwaanyị na otu ndị ntorobịa, na ndị ndụmọdụ ọrụ ugbo na Kenya, Naịjirịa na n'Afrịka niile, ndị na-akọ ihe ọkụkụ n'ubi dị ka ọka, agwa, akpụ na sorghum, na akwụkwọ nri dị ka tomato, kale na yabasị.",
    startingPoint: "Ọtụtụ n'ime ha na-akụ ihe ma na-ewe ihe ubi kwa oge, ọtụtụ mgbe site na mkpụrụ ha chekwara ma ọ bụ mkpụrụ a na-enyochaghị, fatịlaịza a fesasịrị fesasị, na ọgwụ ụmụ ahụhụ a zụtara n'ọkpụkpụ. Ọ bụ mmadụ ole na ole meworo nnwale ala, legharịa ubi n'usoro a kara aka, gụchaa akwụkwọ ntụziaka ọgwụ ụmụ ahụhụ niile, ma ọ bụ hazie ịgba mmiri na ilekọta ihe ubi mgbe e wesịrị ya.",
    gap: "Ala na-adịghị mma, ịkụ ihe ọkụkụ ọnụ ọnụ ma ọ bụ n'oge gafere, fatịlaịza etinyeghị nke ọma, ịgba ọgwụ mgbe ọ dịghị mkpa na ihe ubi na-emebi mgbe e wesịrị ya na-ebelata owuwe ihe ubi na ego a na-enweta, iji ọgwụ ụmụ ahụhụ n'ụzọ dị egwu na-emerụkwa ezinụlọ na ndị na-azụ ihe ahụ ahụ. Atụmatụ oge e dere ede, nke dabere n'ezi omume, na-enyere ndị ọrụ ugbo aka ịkọ ihe karịa, mefuo ego ole na ole n'ihe ọrụ ugbo ma ree ihe ubi na-ejide uru ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọrụ ugbo ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị na akwụkwọ ndetu; ọtụtụ omume na-eme n'ubi",
      "Oge: nkuzi dị mkpụmkpụ nke dabara n'etiti ọrụ ugbo na oge ịkọ ihe",
      "Ala, ụdị mkpụrụ, ọnụọgụ ntinye na ngwaahịa a debanyere aha dị iche iche site n'otu mpaghara ruo n'ọzọ: ndị na-amụ ihe na-enweta ọnụọgụ na ngwaahịa site na nnwale ala, onye ndụmọdụ ọrụ ugbo ma ọ bụ akwụkwọ ntụziaka",
      "Nchekwa ọgwụ ụmụ ahụhụ: ọ dịghị omume ịgba ọgwụ na klas; ndị na-amụ ihe na-agbaso akwụkwọ ntụziaka na iwu obodo ha"
    ],
    prerequisites: "Ọ dịghị. \"Ahụike Ala na Ọmụmụ Ya\" na-abanye n'ime ala karịa, \"Njikwa Ụmụ Ahụhụ Jikọtara Ọnụ na Njikwa Ụmụ Ahụhụ n'Ụzọ Okike\" na-abanyekwa n'ime ụmụ ahụhụ karịa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'otu n'ime ubi gị", action: "ilele ahụike ala n'ubi ma kọwaa otu esi ewere ezigbo ihe nlele maka nnwale ala", standard: "na-akpọ aha opekata mpe ihe ịrịba ama atọ nke ala dị mma ma ọ bụ nke na-adịghị mma" },
    { id: "O2", condition: "Maka otu ihe ọkụkụ n'ubi na otu akwụkwọ nri", action: "ịhọrọ mkpụrụ a nyochara (certified) ma ọ bụ ihe ịkụ dị ọcha, ohere, na ụbọchị ịkụ ma ọ bụ ịkwaga", standard: "nke ọ bụla n'ime nhọrọ ahụ si n'aka onye na-ere mkpụrụ, onye ndụmọdụ ọrụ ugbo ma ọ bụ akpa mkpụrụ ahụ" },
    { id: "O3", condition: "Maka ihe ọkụkụ bụ isi n'ubi gị", action: "ide atụmatụ inye ihe ọkụkụ nri nke jikọtara ihe ndụ rere ure, ihe ọkụkụ ezinụlọ agwa na fatịlaịza etinyere nke ọma", standard: "na-egosi na ọnụọgụ ntinye si na nnwale ala ma ọ bụ onye ndụmọdụ ọrụ ugbo" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ọkụkụ nwere ụmụ ahụhụ ma ọ bụ ọrịa", action: "ilegharị ya n'usoro kwa izu, ịhọrọ ihe IPM a ga-eme, na iji ọgwụ ụmụ ahụhụ a debanyere aha naanị dịka akwụkwọ ntụziaka ya si kwuo mgbe ọ dị mkpa n'ezie", standard: "na-amalite site na mgbochi na ụzọ njikwa na-abụghị ọgwụ" },
    { id: "O5", condition: "Maka obere ubi akwụkwọ nri", action: "ịhazi ịgba mmiri n'ụzọ na-enweghị ịla n'iyi site na drip ma ọ bụ ite mmiri, mulch na oge kwesịrị ekwesị n'ụbọchị", standard: "na-elele mmiri dị n'ala tupu ịgba mmiri ọ bụla" },
    { id: "O6", condition: "N'oge owuwe ihe ubi", action: "ịhazi otu esi ewe ihe ubi, kewaa ya, kpọọ ya nkụ ma chekwaa ya iji belata mfu", standard: "na-ewe ihe ọkụkụ ọ bụla mgbe o ruru eru, na-emeso ya nwayọọ ma na-echekwa ya n'ebe dị mma" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkọ ihe ọkụkụ siri ike",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mara ala gị",
          minutes: 5,
          goal: "Lelee ahụike ala gị n'ubi ma mara mgbe na otu ị ga-esi nweta nnwale ala.",
          text: [
            "Ala dị mma na-agba oji, na-ada ada mgbe i jidere ya, na-esi isi ala, nwere idide na mgbọrọgwụ na-abanye n'ime, ma na-ara mmiri ozuzo kama ịhapụ ya ka ọ gbapụ. Ala na-adịghị mma siri ike, na-acha ọcha ọcha, na-akpụ ihe mkpuchi siri ike mgbe mmiri zochara, ma ọ bụ na-ejide mmiri ruo ogologo oge. Mee nlele dị mfe n'ubi: gwuo olulu dị omimi dị ka shọvel, lee agba ala na ọkwa ya, pịa ya n'aka, gụọ idide, ma lee ebe mmiri na-asọ ma ọ bụ na-anọ mgbe mmiri zochara.",
            "Nnwale ala na-agwa gị ihe anya gị na-enweghị ike ịhụ: otu ala si dị asịd (pH) na nri ndị bụ isi dị n'ime ya. Ọtụtụ ala n'akụkụ Kenya na Naịjirịa ebe mmiri na-ezo nke ukwuu dị asịd, nke na-egbochi ihe ọkụkụ inweta nri; a pụrụ ịdụ gị ọdụ ka i tinye lime. Jụọ onye ndụmọdụ ọrụ ugbo gị, ụlọ nchọpụta ma ọ bụ agrovet ebe ị ga-enweta nnwale ala na otu esi ewere ezigbo ihe nlele: ọtụtụ obere ihe nlele site n'akụkụ ubi niile, gwakọtara ọnụ, ọ bụghị site n'ebe a tụkọbara nsị anụmanụ ma ọ bụ ebe a gbara ọkụ.",
            "Mee ka ala gị dịkwuo mma kwa oge: tinye ihe ndụ rere ure (nsị anụmanụ, kompost, ihe fọdụrụ n'ihe ọkụkụ), kpuchie ala mgbe niile, gbanwee ihe ọkụkụ site n'otu oge ruo n'ọzọ, ma zere ịgba ọkụ na ịkọ ala mgbe ọ dịghị mkpa."
          ],
          steps: ["Gwuo olulu dị omimi dị ka shọvel ma lee agba, ọkwa na mgbọrọgwụ.", "Pịa ala n'aka; gụọ idide.", "Lee ebe mmiri na-asọ ma ọ bụ na-anọ.", "Jụọ onye ndụmọdụ ọrụ ugbo ma ọ bụ agrovet ebe ị ga-enweta nnwale ala.", "Were ọtụtụ obere ihe nlele n'akụkụ ubi niile ma gwakọta ha."],
          words: [["Ahụike ala", "ike ala nwere ịzụlite osisi siri ike, ijide mmiri na ịkwado ihe ndụ."], ["pH", "ihe na-atụ otu ala si dị asịd ma ọ bụ alkaline; ọtụtụ ihe ọkụkụ na-achọ ala dị ntakịrị asịd ruo nke dị n'etiti."], ["Ihe ndụ rere ure (organic matter)", "osisi na anụmanụ rere ure n'ime ala, dị ka nsị anụmanụ na kompost."], ["Itinye lime (liming)", "itinye lime n'ala iji belata asịd ya."]],
          slides: [
            { title: "Ala dị mma", bullets: ["Na-agba oji, na-ada ada, na-esi isi ala", "Idide, mgbọrọgwụ na-abanye n'ime", "Na-ara mmiri ozuzo"] },
            { title: "Nlele n'ubi", bullets: ["Olulu dị ka shọvel: agba, ọkwa, mgbọrọgwụ", "Pịa ya, gụọ idide", "Ebe mmiri na-asọ ma ọ bụ na-anọ"] },
            { title: "Nnwale ala", bullets: ["Na-egosi pH na nri ala", "Ala dị asịd nwere ike ịchọ lime", "Ọtụtụ obere ihe nlele, gwakọtara ọnụ"] },
            { title: "Mee ka ọ dị mma kwa oge", bullets: ["Nsị anụmanụ, kompost, ihe fọdụrụ n'ihe ọkụkụ", "Kpuchie ala, gbanwee ihe ọkụkụ", "Agbala ọkụ"] }
          ],
          sources: [KALRO, FAO_CSA],
          tryIt: "Mee nlele n'ubi n'otu ubi gị: gwuo, lee, pịa, gụọ idide, ma dee ihe ị hụrụ. Mgbe ahụ chọpụta ebe ị ga-enweta nnwale ala n'akụkụ gị na ego ọ na-efu.",
          youCanNow: "ilele ahụike ala gị n'ubi ma mara otu esi ewere ihe nlele maka nnwale ala.",
          quickCheck: [
            { objective: "O1", q: "Mgbe mmiri zochara, mmiri na-anọ n'ubi gị ọtụtụ ụbọchị, ala ahụ na-acha ọcha ọcha ma sie ike. Gịnị ka nke a na-egosi?", options: ["Ala dị ezigbo mma", "Ala chọrọ nlekọta, dị ka ihe ndụ rere ure karịa", "Ala na-achọghị mgbanwe ọ bụla", "Ala nwere idide karịrị akarị"], answer: 1, why: "Ala dị mma na-agba oji, na-ada ada ma na-ara mmiri ozuzo; mmiri na-anọ na ala siri ike, na-acha ọcha ọcha bụ ihe ịrịba ama nke ala na-adịghị mma." },
            { objective: "O1", q: "Ị na-ewere ihe nlele ala. Ebee ka ị ga-egwu?", options: ["Naanị n'akụkụ ebe a tụkọbara nsị anụmanụ", "Naanị ebe ị gbara ihe fọdụrụ n'ihe ọkụkụ ọkụ", "Otu ebe n'etiti ubi", "Ọtụtụ obere ebe n'akụkụ ubi niile, gwakọtara ọnụ"], answer: 3, why: "Ọtụtụ obere ihe nlele gwakọtara ọnụ na-egosi ubi ahụ niile; ebe a tụkọbara nsị anụmanụ na ebe a gbara ọkụ na-enye azịza na-ezighi ezi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkụ ihe nke ọma: mkpụrụ, ohere na oge",
          minutes: 5,
          goal: "Kụọ ihe ọkụkụ n'ubi ma zụlite obere akwụkwọ nri site n'ezigbo mkpụrụ, ohere na oge.",
          text: [
            "Ezigbo mkpụrụ bụ ụzọ kacha dị ọnụ ala isi bulie owuwe ihe ubi. Zụta mkpụrụ a nyochara (certified) nke ụdị dabara mpaghara gị n'aka onye na-ere mkpụrụ a debanyere aha, ma lelee ụbọchị dị n'akpa ya na akara mkpuchi ya. Maka akpụ, jiri osisi akpụ dị ọcha e bepụtara site n'osisi dị mma, n'ihi na ọrịa nje virus na-agbasa site n'osisi akpụ butere ọrịa.",
            "Ohere na-ekpebi osisi ole na-ekerịta ìhè, mmiri na nri ala. Jiri ohere a tụrụ aro maka ụdị mkpụrụ gị na mpaghara gị, dịka ọmụmaatụ ohere dị n'etiti ahịrị na n'etiti osisi maka ọka, na ohere sara mbara karịa n'ebe ọkọchị dị. Ma oghere ma ịkụ ọnụ ọnụ na-ebelata owuwe ihe ubi. Kụọ ihe ozugbo mmiri ozuzo malitere n'ezie, ala ahụ jupụtakwa mmiri ruo n'ime.",
            "A na-ebu ụzọ zụlite akwụkwọ nri dị ka tomato, kale na yabasị n'ebe a na-azụlite obere osisi (nursery): akwa ala e buliri elu nke mmiri na-agbapụ nke ọma, ma ọ bụ trey obere osisi, nwere ala dị ọcha, ndò na mbụ, ịgba mmiri nke ọma na nchebe pụọ n'aka ụmụ ahụhụ. Mee ka obere osisi ndị ahụ sie ike (hardening) site n'inye ha anyanwụ karịa na mmiri ole na ole nwayọọ nwayọọ tupu ị kwaga ha, ka mma n'oge mgbede dị jụụ."
          ],
          steps: ["Zụta mkpụrụ a nyochara (ma ọ bụ osisi akpụ dị ọcha) nke ụdị dabara.", "Jiri ohere a tụrụ aro maka ụdị mkpụrụ gị na mpaghara gị.", "Kụọ mgbe mmiri ozuzo malitere n'ezie, ala ahụ jupụtakwa mmiri.", "Zụlite obere akwụkwọ nri n'ebe nursery dị ọcha, mmiri na-agbapụ nke ọma.", "Mee ka obere osisi sie ike, wee kwaga ha n'oge mgbede dị jụụ."],
          words: [["Mkpụrụ a nyochara (certified seed)", "mkpụrụ ụlọ ọrụ gọọmentị na-ahụ maka mkpụrụ lere maka ịdị mma ya na ụdị ya."], ["Ohere (spacing)", "anya dị n'etiti ahịrị na n'etiti osisi."], ["Nursery", "obere ebe e chebere ebe a na-azụlite obere osisi tupu a kwaga ha."], ["Ime ka osisi sie ike (hardening)", "ime ka obere osisi jiri nwayọọ mata ọnọdụ ubi tupu a kwaga ha."]],
          slides: [
            { title: "Ezigbo mkpụrụ", bullets: ["A nyochara ya, ọ dabara mpaghara gị", "Onye na-ere mkpụrụ a debanyere aha; lelee ụbọchị na akara mkpuchi", "Akpụ: osisi dị ọcha site n'osisi dị mma"] },
            { title: "Ohere na oge", bullets: ["Ohere a tụrụ aro maka ụdị mkpụrụ gị", "Ma oghere ma ịkụ ọnụ ọnụ na-ebelata owuwe", "Kụọ ozugbo mmiri ozuzo malitere n'ezie"] },
            { title: "Nursery akwụkwọ nri", bullets: ["E buliri elu, mmiri na-agbapụ, ala dị ọcha", "Ndò na mbụ, ịgba mmiri nke ọma", "Mee ka ha sie ike, wee kwaga ha na mgbede"] }
          ],
          sources: [KALRO],
          tryIt: "Maka ihe ọkụkụ bụ isi n'ubi gị na otu akwụkwọ nri, dee: ụdị mkpụrụ ahụ, ebe ị ga-azụta mkpụrụ a nyochara, ohere a tụrụ aro (jụọ agrovet ma ọ bụ onye ndụmọdụ ọrụ ugbo), na ụbọchị ị chọrọ ịkụ ma ọ bụ ịkwaga.",
          youCanNow: "ịkụ ihe ọkụkụ n'ubi ma zụlite obere akwụkwọ nri site n'ezigbo mkpụrụ, ohere na oge.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere e ji kwesị ịkụ akpụ site n'osisi dị ọcha e bepụtara n'osisi dị mma?", options: ["Ọrịa nje virus na-agbasa site n'osisi butere ọrịa", "Osisi dị ọcha na-eto n'enweghị mmiri", "Osisi dị mma anaghị achọ ohere", "Osisi si n'osisi na-arịa ọrịa dị oke ọnụ"], answer: 0, why: "Ọrịa nje virus akpụ na-agbasa site n'osisi butere ọrịa, ya mere osisi dị ọcha site n'osisi dị mma na-echebe ihe ọkụkụ ọhụrụ ahụ." },
            { objective: "O2", q: "Obere osisi tomato gị adịla njikere n'ebe nursery. Gịnị ka ị ga-eme tupu ị kwaga ha?", options: ["Gbaa ha mmiri okpukpu abụọ", "Bufee ha ozugbo n'anyanwụ zuru oke n'ehihie", "Mee ka ha sie ike site n'anyanwụ karịa na mmiri ole na ole, wee kwaga ha n'oge mgbede dị jụụ", "Bepụ akwụkwọ ha niile"], answer: 2, why: "Ime ka ha sie ike na-akwado obere osisi maka ubi, oge mgbede dị jụụ na-ebelatakwa nsogbu ịkwaga ha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Inye ihe ọkụkụ nri: nsị anụmanụ, kompost na fatịlaịza",
          minutes: 6,
          goal: "Hazie otu ị ga-esi nye ihe ọkụkụ nri site n'ihe ndụ na fatịlaịza, etinyere nke ọma n'oge kwesịrị ekwesị.",
          text: [
            "Ihe ọkụkụ chọrọ nitrogen (N), phosphorus (P) na potassium (K), tinyere ntakịrị nri ndị ọzọ. Nsị anụmanụ na kompost na-agbakwụnye ụfọdụ nri, ma nke dị mkpa ka ukwuu, ihe ndụ rere ure nke na-ejide mmiri ma na-azụ ihe ndụ dị n'ala. Ihe ọkụkụ ezinụlọ agwa (legumes) dị ka agwa, akidi na ahụekere na-agbakwụnye nitrogen n'ala site na mgbọrọgwụ ha.",
            "Fatịlaịza (mineral fertilizer) na-enye nri ngwa ngwa, n'ọnụọgụ a maara. Usoro a na-ahụkarị maka ọka bụ fatịlaịza ịkụ ihe nwere phosphorus, wee tinye nitrogen n'elu (topdressing) mgbe ọka ahụ ruru ikpere, mana ngwaahịa na ọnụọgụ kwesịrị ekwesị dabere na nnwale ala gị na ndụmọdụ mpaghara gị. Itinye ntakịrị n'akụkụ osisi (n'olulu ịkụ ihe) na-eji fatịlaịza eme ihe nke ọma karịa ifesa ya ebe niile.",
            "Gwakọta ha abụọ: ihe ndụ rere ure tinyere fatịlaịza etinyere nke ọma na-enyekarị owuwe ihe ubi ka mma ma kwụsie ike karịa otu n'ime ha naanị. Mee kompost site n'ihe fọdụrụ n'ihe ọkụkụ, nsị anụmanụ na ihe mkpofu kichin, na-atụgharị ya ma na-eme ka o jupụta mmiri. Etinyela nsị anụmanụ ọhụrụ na-ekpo ọkụ ma ọ bụ fatịlaịza ozugbo n'elu mkpụrụ."
          ],
          steps: ["Tinye nsị anụmanụ ma ọ bụ kompost tupu ma ọ bụ n'oge ịkụ ihe.", "Tinye ihe ọkụkụ ezinụlọ agwa n'ịgbanwe ihe ọkụkụ ma ọ bụ n'ịkọkọta ọnụ.", "Jiri ngwaahịa fatịlaịza na ọnụọgụ si na nnwale ala gị na ndụmọdụ mpaghara gị.", "Tinye fatịlaịza n'akụkụ osisi, ka ọ ghara imetụ mkpụrụ aka.", "Tinye nitrogen n'elu n'oge kwesịrị ekwesị, mgbe ala jupụtara mmiri."],
          words: [["N, P, K", "nitrogen, phosphorus na potassium: nri ndị bụ isi osisi chọrọ."], ["Itinye n'elu (topdressing)", "itinye fatịlaịza, ọtụtụ mgbe nitrogen, n'ihe ọkụkụ na-eto eto."], ["Kompost", "ihe mkpofu osisi na anụmanụ rere ure nke a na-eji enye ala nri."]],
          slides: [
            { title: "Ihe ihe ọkụkụ chọrọ", bullets: ["Nitrogen, phosphorus, potassium", "Tinyere ntakịrị nri ndị ọzọ", "Ihe ọkụkụ ezinụlọ agwa na-agbakwụnye nitrogen"] },
            { title: "Ihe ndụ rere ure", bullets: ["Nsị anụmanụ na kompost", "Na-ejide mmiri, na-azụ ihe ndụ dị n'ala"] },
            { title: "Iji fatịlaịza nke ọma", bullets: ["Ngwaahịa na ọnụọgụ site na nnwale ala na ndụmọdụ mpaghara", "Tinye n'akụkụ osisi, ọ bụghị n'elu mkpụrụ", "Tinye nitrogen n'elu n'oge kwesịrị ekwesị"] },
            { title: "Gwakọta ha abụọ", bullets: ["Ihe ndụ + fatịlaịza = owuwe kwụsiri ike karịa", "Mee kompost site n'ihe fọdụrụ na nsị anụmanụ"] }
          ],
          sources: [FAO_CSA, KALRO],
          tryIt: "Dee atụmatụ inye ihe ọkụkụ nri maka ihe ọkụkụ n'ubi gị: ihe ndụ rere ure ị ga-etinye na mgbe, ihe ọkụkụ ezinụlọ agwa ọ bụla, na ngwaahịa fatịlaịza na oge (dee \"ọnụọgụ si na nnwale ala ma ọ bụ onye ndụmọdụ ọrụ ugbo\" ma ọ bụrụ na ị maghị ya ugbu a). Malite ikpokọta kompost ma ọ bụrụ na i nweghị.",
          youCanNow: "ịhazi otu ị ga-esi nye ihe ọkụkụ nri site na nsị anụmanụ, kompost na fatịlaịza etinyere nke ọma.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka nsị anụmanụ na kompost na-agbakwụnye karịa nri?", options: ["Ọgwụ ụmụ ahụhụ", "Ihe ndụ rere ure na-ejide mmiri ma na-azụ ihe ndụ dị n'ala", "Mkpụrụ a nyochara", "Lime"], answer: 1, why: "Ihe ndụ rere ure na-ejide mmiri ma na-azụ ihe ndụ dị n'ala, nke dị mkpa dị ka nri ndị ahụ." },
            { objective: "O3", q: "I nwere fatịlaịza maka ịkụ ọka. Ebee ka ị ga-etinye ya?", options: ["Ntakịrị n'akụkụ osisi, ka ọ ghara imetụ mkpụrụ aka", "Fesaa ya ebe niile n'ubi ahụ dum", "Ozugbo n'elu mkpụrụ", "Kpokọta ya n'otu ebe na nsọtụ ubi"], answer: 0, why: "Itinye ntakịrị n'akụkụ osisi na-eji fatịlaịza eme ihe nke ọma, fatịlaịza dị n'elu mkpụrụ nwekwara ike imebi ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkọ ihe ọkụkụ siri ike",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ihe ịrịba ama nke ala dị mma?", options: ["O siri ike, na-acha ọcha ọcha, na-akpụ ihe siri ike mgbe mmiri zochara", "Ọ na-agba oji, na-ada ada, nwere idide", "Mmiri na-agbapụ na ya mgbe niile", "Ọ na-esi isi kemịkalụ"], answer: 1, why: "Ala dị mma na-ada ada, na-agba oji ma jupụta n'ihe ndụ." },
          { objective: "O1", q: "Kedu otu i kwesịrị isi were ihe nlele ala?", options: ["Otu ngaji site n'ebe a tụkọbara nsị anụmanụ", "Site n'ebe a gbara ọkụ", "Ọtụtụ obere ihe nlele n'akụkụ ubi niile, gwakọtara ọnụ", "Site n'okporo ụzọ"], answer: 2, why: "Ihe nlele gwakọtara ọnụ na-anọchi anya ubi ahụ niile." },
          { objective: "O2", q: "Gịnị mere e ji eji osisi akpụ dị ọcha?", options: ["Ọrịa nje virus na-agbasa site n'osisi butere ọrịa", "Ha dị ọnụ ala karịa", "Ha na-eto ngwa ngwa n'ala ọ bụla", "Ndị na-azụ ihe na-arịọ ha"], answer: 0, why: "Ihe ịkụ dị ọcha na-egbochi ọrịa ịgbasa." },
          { objective: "O2", q: "Gịnị bụ ime ka obere osisi sie ike (hardening)?", options: ["Ịgba mmiri karịa", "Itinye fatịlaịza", "Ịkụ ha n'ala siri ike", "Inye ha anyanwụ karịa na mmiri ole na ole nwayọọ nwayọọ tupu ịkwaga ha"], answer: 3, why: "Ọ na-akwado obere osisi maka ọnọdụ ubi." },
          { objective: "O3", q: "Ebee ka ọnụọgụ fatịlaịza kwesịrị ekwesị si?", options: ["Ihe onye agbata obi chere", "Nnwale ala gị na ndụmọdụ mpaghara gị", "Agba akpa ahụ", "Iji nke kacha ukwuu i nwere ike"], answer: 1, why: "Ala na mpaghara na-ekpebi ihe ihe ọkụkụ chọrọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ichebe ihe ọkụkụ na imecha ya",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ilegharị ubi na njikwa ụmụ ahụhụ jikọtara ọnụ (IPM)",
          minutes: 6,
          goal: "Legharịa ihe ọkụkụ kwa izu ma họrọ ihe IPM a ga-eme tupu ị gaa n'ọgwụ kemịkalụ.",
          text: [
            "FAO na-akọwa njikwa ụmụ ahụhụ jikọtara ọnụ (IPM) dị ka ilele ụzọ niile dị maka ijikwa ụmụ ahụhụ ma jikọta ndị kwesịrị ekwesị, na-ejide iji ọgwụ ụmụ ahụhụ naanị n'ihe dị mkpa n'ezie. Ọ na-amalite site na mgbochi: ala dị mma, ụdị mkpụrụ na-eguzogide ọrịa, mkpụrụ dị ọcha, ịgbanwe ihe ọkụkụ, ịkụ ihe n'oge, ịdị ọcha n'ubi (iwepụ osisi butere ọrịa na ihe fọdụrụ) na ịkwado ndị iro okike nke ụmụ ahụhụ dị ka ladybird na ebu (wasps) na-awakpo ụmụ ahụhụ.",
            "Legharịa ubi kwa izu. Jee ije n'ụdị W ma ọ bụ zigzag n'ubi ahụ, lelee ọnụọgụ osisi a kara aka (dịka ọmụmaatụ osisi 10 n'ebe 5), ma dee ihe ị hụrụ: mmebi fall armyworm n'ime ọkpọ ọka, aphids, whiteflies, ntụpọ n'akwụkwọ, ịkpọnwụ, tomato leaf miner. Tụnyere ya na ihe onye ndụmọdụ ọrụ ugbo kwuru bụ ọkwa ọ ga-aba uru ime ihe.",
            "Buru ụzọ jiri ụzọ njikwa na-abụghị ọgwụ ebe ha na-arụ ọrụ: iji aka chịpụ ha, push-pull maka ọka na sorghum, ọnya, ngwaahịa sitere na dọgọyarọ (neem) ma ọ bụ ngwaahịa ndụ (biological) a kwadoro maka iji, na iwepụ osisi butere ọrịa. Ebe a na-eji ya, a pụrụ idebanye fall armyworm a hụrụ n'app FAMEWS nke FAO. Nweta nchọpụta ọrịa site n'aka onye ndụmọdụ ọrụ ugbo ma ọ bụ ụlọ ọgwụ osisi (plant clinic) mgbe ị na-ejighị n'aka."
          ],
          steps: ["Gbochie: ụdị na-eguzogide ọrịa, mkpụrụ dị ọcha, ịgbanwe ihe ọkụkụ, ịdị ọcha n'ubi.", "Legharịa kwa izu n'ụdị W; lelee ọnụọgụ osisi a kara aka.", "Dee ụmụ ahụhụ, ọrịa na mmebi.", "Tụnyere ya na ọkwa ime ihe onye ndụmọdụ ọrụ ugbo nyere.", "Buru ụzọ jiri ụzọ na-abụghị ọgwụ; nweta nchọpụta mgbe ị na-ejighị n'aka."],
          words: [["IPM", "njikwa ụmụ ahụhụ jikọtara ọnụ: ijikọta mgbochi, nlekota na ọtụtụ ụzọ njikwa, na-eji ọgwụ ụmụ ahụhụ naanị mgbe ọ dị mkpa n'ezie."], ["Ilegharị ubi (scouting)", "ịgagharị n'ubi mgbe niile iji lelee ụmụ ahụhụ na ọrịa."], ["Ndị iro okike (natural enemies)", "ụmụ ahụhụ na ihe ndị ọzọ dị ndụ na-eri ma ọ bụ na-awakpo ụmụ ahụhụ na-emebi ihe."], ["Ọkwa ime ihe (action level)", "ọnụọgụ ụmụ ahụhụ ma ọ bụ mmebi mgbe njikwa ga-aba uru karịa ego ọ ga-efu."]],
          slides: [
            { title: "IPM (FAO)", bullets: ["Lelee ụzọ niile, jikọta ndị kwesịrị ekwesị", "Ọgwụ ụmụ ahụhụ naanị mgbe ọ dị mkpa n'ezie"] },
            { title: "Buru ụzọ gbochie", bullets: ["Ụdị na-eguzogide ọrịa, mkpụrụ dị ọcha, ịgbanwe ihe ọkụkụ", "Ịdị ọcha n'ubi", "Kwado ndị iro okike"] },
            { title: "Legharịa kwa izu", bullets: ["Ụdị W, ọnụọgụ osisi a kara aka", "Dee ihe ị hụrụ", "Tụnyere ya na ọkwa ime ihe"] },
            { title: "Jikwaa n'amamihe", bullets: ["Iji aka chịpụ, push-pull, ọnya", "Ngwaahịa ndụ a kwadoro", "Nchọpụta mgbe ị na-ejighị n'aka"] }
          ],
          sources: [FAO_IPM, ICIPE_PUSHPULL, FAO_FAMEWS],
          tryIt: "Mee mpempe akwụkwọ ilegharị ubi kwa izu (ụbọchị, ebe, osisi ole i lere, ụmụ ahụhụ, ọrịa, mmebi, ihe i mere) ma legharịa otu ubi ma ọ bụ otu akwa akwụkwọ nri n'izu a.",
          youCanNow: "ilegharị ihe ọkụkụ kwa izu ma họrọ ihe IPM a ga-eme, na-amalite site na mgbochi na ụzọ njikwa na-abụghị ọgwụ.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke bụ nzọụkwụ mgbochi na IPM?", options: ["Ịgba ọgwụ kwa izu ma ọ bụrụ na ihe emee", "Ịzụta ọgwụ ụmụ ahụhụ siri ike karịa", "Ịgwakọta ọgwụ ụmụ ahụhụ abụọ ọnụ", "Iji ụdị na-eguzogide ọrịa na iwepụ osisi butere ọrịa"], answer: 3, why: "IPM na-amalite site na mgbochi: ụdị na-eguzogide ọrịa, mkpụrụ dị ọcha, ịgbanwe ihe ọkụkụ na ịdị ọcha n'ubi." },
            { objective: "O4", q: "Ị hụrụ fall armyworm ole na ole n'ọka gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gbaa ugbo ahụ niile ọgwụ taa", "Dee ya ma tụnyere ya na ọkwa ime ihe onye ndụmọdụ ọrụ ugbo nyere", "Hapụ ya ruo oge owuwe ihe ubi", "Gbaa ubi ahụ ọkụ"], answer: 1, why: "A na-atụnyere ihe e dere n'ilegharị ubi na ọkwa ime ihe iji kpebie ma njikwa ga-aba uru." }
          ]
        },
        {
          objectives: ["O4","O5"],
          title: "Iji ọgwụ ụmụ ahụhụ n'enweghị nsogbu na ịgba akwụkwọ nri mmiri",
          minutes: 6,
          goal: "Jiri ọgwụ ụmụ ahụhụ n'enweghị nsogbu mgbe ọ dị mkpa n'ezie, ma hazie ịgba mmiri nke ọma maka ubi akwụkwọ nri.",
          text: [
            "Ọ bụrụ na ọgwụ ụmụ ahụhụ dị mkpa, jiri naanị ngwaahịa a debanyere aha maka ihe ọkụkụ ahụ na ụmụ ahụhụ ahụ na mba gị (na Kenya site na Pest Control Products Board; na Naịjirịa site na NAFDAC), nke ị zụtara n'aka onye na-ere ahịa nwere ikike, ọ bụghị nke e kesara n'ime karama na-enweghị akwụkwọ ntụziaka. Gụọ akwụkwọ ntụziaka ahụ ma gbasoo ya kpọmkwem: ọnụọgụ, otu esi agwakọta, uwe nchebe, oge ị ga-echere tupu ịbanye n'ubi ọzọ (re-entry), na oge nchere tupu owuwe (pre-harvest interval), ya bụ ụbọchị ole dị n'etiti ịgba ọgwụ na owuwe ihe ubi. Mee ka ụmụaka na anụmanụ nọrọ n'ebe dị anya, erila nri ma ọ bụ ṅụọ sịga mgbe ị na-agba ọgwụ, ma tufuo karama ndị ahụ n'ụzọ dị mma, ọ bụghị dị ka ite mmiri ma ọ bụ nri.",
            "Akwụkwọ nri na-achọ mmiri nke ukwuu ma dị nro. Ịgba mmiri drip (drip irrigation) na-etinye mmiri na mgbọrọgwụ, na-echekwa mmiri ma na-eme ka akwụkwọ ghara ịdị mmiri mmiri, nke na-ebelata ọrịa na tomato. Ngwa drip dị ọnụ ala na ite mmiri (watering can) na-arụ ọrụ maka obere ubi. Gbaa mmiri n'isi ụtụtụ ma ọ bụ na mgbede, gbaakwa ya nke ọma ruo n'ime ma ugboro ole na ole kama ntakịrị kwa ụbọchị.",
            "Tinye mulch n'akụkụ akwụkwọ nri iji jide mmiri n'ala ma gbochie ala ịfesa n'akwụkwọ. Jiri mkpịsị aka gị lelee mmiri dị n'ala ruo centimita ole na ole n'ime tupu ịgba mmiri. Ebe mmiri dị ụkọ, chịkọta mmiri ozuzo site n'elu ụlọ ma jiri ọdọ mmiri (water pans)."
          ],
          steps: ["Jiri naanị ngwaahịa a debanyere aha maka ihe ọkụkụ na ụmụ ahụhụ ahụ, site n'aka ndị na-ere ahịa nwere ikike.", "Gụọ ma gbasoo akwụkwọ ntụziaka: ọnụọgụ, uwe nchebe, oge ịbanye ọzọ, oge nchere tupu owuwe.", "Tufuo karama n'ụzọ dị mma.", "Gbaa akwụkwọ nri mmiri na mgbọrọgwụ (drip ma ọ bụ ite), n'ụtụtụ ma ọ bụ na mgbede.", "Tinye mulch ma lelee mmiri dị n'ala tupu ịgba mmiri."],
          words: [["Oge nchere tupu owuwe (PHI)", "ụbọchị ole ị ga-echere mgbe ị gbachara ọgwụ tupu iwe ihe ubi."], ["Ọgwụ ụmụ ahụhụ a debanyere aha", "ngwaahịa ụlọ ọrụ gọọmentị na-achị ya kwadoro maka otu ọrụ a kpọrọ aha."], ["Ịgba mmiri drip", "ịgba mmiri site na paịpụ nwere obere oghere na-atụ mmiri na mgbọrọgwụ."]],
          slides: [
            { title: "Naanị ngwaahịa a debanyere aha", bullets: ["Kenya: PCPB. Naịjirịa: NAFDAC", "Onye na-ere ahịa nwere ikike, ngwugwu mbụ nwere akwụkwọ ntụziaka", "Maka ihe ọkụkụ na ụmụ ahụhụ ahụ"] },
            { title: "Gbasoo akwụkwọ ntụziaka", bullets: ["Ọnụọgụ na ngwakọta, uwe nchebe", "Oge ịbanye n'ubi ọzọ", "Oge nchere tupu owuwe"] },
            { title: "Nchekwa", bullets: ["Ụmụaka ma ọ bụ anụmanụ anọla nso", "Erila nri ma ọ bụ ṅụọ sịga mgbe ị na-agba ọgwụ", "Ejila karama ndị ahụ chekwaa nri ma ọ bụ mmiri"] },
            { title: "Gbaa akwụkwọ nri mmiri nke ọma", bullets: ["Drip ma ọ bụ ite na mgbọrọgwụ", "Ụtụtụ ma ọ bụ mgbede, ruo n'ime, ugboro ole na ole", "Mulch; buru ụzọ lelee mmiri dị n'ala"] }
          ],
          sources: [PCPB, NAFDAC, FAO_IPM],
          tryIt: "Were akwụkwọ ntụziaka ọgwụ ụmụ ahụhụ ọ bụla (site n'ụlọ ahịa, ịntanetị ma ọ bụ ụlọ nkwakọba gị). Dee: ihe ọkụkụ na ụmụ ahụhụ e debanyere ya aha maka ha, ọnụọgụ, uwe nchebe, na oge nchere tupu owuwe. Mgbe ahụ dee atụmatụ ịgba mmiri maka ubi akwụkwọ nri gị.",
          youCanNow: "iji ọgwụ ụmụ ahụhụ n'enweghị nsogbu na n'ụzọ iwu kwadoro mgbe ọ dị mkpa n'ezie, ma gbaa akwụkwọ nri mmiri nke ọma.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ oge nchere tupu owuwe dị n'akwụkwọ ntụziaka ọgwụ ụmụ ahụhụ?", options: ["Oge e ji agwakọta ọgwụ ahụ", "Ụbọchị dị tupu ịkụ ihe", "Ụbọchị ị ga-echere n'etiti ịgba ọgwụ na owuwe ihe ubi", "Oge karama ahụ ga-adịgide tupu ọ mebie"], answer: 2, why: "Oge nchere tupu owuwe bụ ụbọchị ole dị n'etiti ọgwụ ikpeazụ e gbara na owuwe ihe ubi." },
            { objective: "O5", q: "Ubi kale gị kpọrọ nkụ, i nwekwara ite mmiri. Olee mgbe ị ga-agba mmiri?", options: ["N'ehihie, ntakịrị kwa elekere", "N'isi ụtụtụ ma ọ bụ na mgbede, mgbe i lelechara mmiri dị n'ala", "Naanị mgbe akwụkwọ ya kpọnwụchara otu izu", "Ọ dịghị mgbe; chere mmiri ozuzo"], answer: 1, why: "Ịgba mmiri n'isi ụtụtụ ma ọ bụ na mgbede, ruo n'ime ma naanị mgbe ala kpọrọ nkụ, na-echekwa mmiri ma dabara akwụkwọ nri." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Owuwe ihe ubi na ilekọta ya mgbe e wesịrị ya",
          minutes: 5,
          goal: "Wee ihe ubi n'oge kwesịrị ekwesị ma lekọta, kewaa ma chekwaa ya ka ọ ghara ịla uru ya n'iyi.",
          text: [
            "Ọtụtụ nri na-efu mgbe e wesịrị ihe ubi. Wee ihe ubi mgbe o ruru eru: tomato n'ọkwa onye na-azụ ya chọrọ (ọtụtụ mgbe mgbe ọ malitere ịgbanwe agba maka ahịa dị anya), akwụkwọ kale mgbe ọ ka dị ọhụrụ ma dị nro, ọka mgbe mkpụrụ ya chara ma kpọọ nkụ nke ọma, akpụ mgbe mgbọrọgwụ ya ruru eru ma naanị nke ị nwere ike ire ma ọ bụ hazie ngwa ngwa, n'ihi na mgbọrọgwụ ya na-emebi n'ime ụbọchị ole na ole.",
            "Mesoo ya nwayọọ: jiri igbe (crates) dị ọcha, ọ bụghị akpa, maka tomato na ihe ubi dị nro; debe ihe ubi na ndò; ma wee ya n'ụtụtụ dị jụụ. Kewaa ma hazie ya site n'ịdị ukwuu na ịdị mma, ma wepụ ndị mebiri emebi ka ha ghara imebi ndị fọdụrụ. Sọpụrụ oge nchere tupu owuwe mgbe ọ bụla i gbachara ọgwụ.",
            "Kpọọ mkpụrụ ọka nkụ nke ọma tupu ịchekwa ya: ọka na ahụekere dị mmiri mmiri nwere ike ito ero (moulds) na-emepụta aflatoxin, bụ nsi. Jụọ onye na-azụ ihe gị ma ọ bụ onye ndụmọdụ ọrụ ugbo ọkwa mmiri a chọrọ ma nwalee ya ma ọ bụrụ na i nwere ike. Chekwaa mkpụrụ ọka n'ụlọ nkwakọba dị ọcha, kpọrọ nkụ, e buliri elu, ma ọ bụ n'akpa hermetic (akpa ikuku anaghị abanye) iji jikwaa weevils n'enweghị kemịkalụ."
          ],
          steps: ["Wee ihe ubi mgbe o ruru eru dịka onye na-azụ ya chọrọ.", "Wee n'ụtụtụ dị jụụ; debe ihe ubi na ndò.", "Jiri igbe dị ọcha maka ihe ubi dị nro.", "Kewaa ma hazie ya; wepụ ndị mebiri emebi.", "Kpọọ mkpụrụ ọka nkụ nke ọma; chekwaa ya n'ụlọ nkwakọba dị ọcha, kpọrọ nkụ, e buliri elu, ma ọ bụ n'akpa hermetic."],
          words: [["Mfu mgbe owuwe gasịrị (post-harvest loss)", "nri na-efu ma ọ bụ na-emebi n'etiti owuwe ihe ubi na ire ya ma ọ bụ iji ya."], ["Ịhazi n'ọkwa (grading)", "ikewa ihe ubi site n'ịdị ukwuu na ịdị mma."], ["Aflatoxin", "nsi ero na-emepụta n'elu mkpụrụ ọka na ahụekere dị mmiri mmiri."], ["Akpa hermetic", "akpa nchekwa ikuku anaghị abanye, nke na-egbu ụmụ ahụhụ site n'igbochi ikuku."]],
          slides: [
            { title: "Wee ihe ubi n'oge kwesịrị ekwesị", bullets: ["Tomato n'ọkwa onye na-azụ ya chọrọ", "Kale mgbe ọ ka dị ọhụrụ ma dị nro", "Akpụ: naanị ihe ị ga-ere ngwa ngwa"] },
            { title: "Mesoo ya nwayọọ", bullets: ["Ụtụtụ dị jụụ, ndò", "Igbe dị ọcha, ọ bụghị akpa", "Kewaa, hazie, wepụ ndị mebiri emebi"] },
            { title: "Chekwaa mkpụrụ ọka nke ọma", bullets: ["Kpọọ ya nkụ nke ọma: ọka dị mmiri mmiri nwere ike iwe aflatoxin", "Ụlọ nkwakọba dị ọcha, kpọrọ nkụ, e buliri elu", "Akpa hermetic megide weevils"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ịkọ ihe nke otu oge maka otu ihe ọkụkụ n'ubi na otu ubi akwụkwọ nri: ilele ala na nnwale ala, ịkwado ala na inye ya nri, mkpụrụ na ohere, ụbọchị ịkụ ihe, ilegharị ubi kwa izu na nzọụkwụ IPM, ịgba akwụkwọ nri mmiri, na owuwe, ikewa, ichekwa na ire ihe ubi.",
          youCanNow: "iwe, ilekọta, ikewa na ichekwa ihe ubi iji belata mfu ma debe uru ya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ aflatoxin?", options: ["Otu fatịlaịza", "Otu akpa nchekwa", "Otu ụdị weevil", "Nsi si n'ero na-eto n'elu mkpụrụ ọka dị mmiri mmiri"], answer: 3, why: "Ọka na ahụekere dị mmiri mmiri nwere ike ito ero na-emepụta aflatoxin, bụ nsi." },
            { objective: "O6", q: "Ị na-ewe tomato iji ree ya. Kedu otu ị ga-esi buru ya?", options: ["N'igbe dị ọcha, debere na ndò", "N'akpa n'anyanwụ", "Tụkọbara ya otu o si dị n'ụgbọ", "N'akpa ya na ndị mebiri emebi"], answer: 0, why: "Igbe dị ọcha na ndò na-echebe ihe ubi dị nro; akpa na anyanwụ na-apịa ya ma mebie ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ichebe ihe ọkụkụ na imecha ya",
        questions: [
          { objective: "O4", q: "Na IPM, a na-eji ọgwụ ụmụ ahụhụ:", options: ["Kwa izu ihe ọ bụla mee", "Ọ dịghị mgbe ọ bụla n'ọnọdụ ọ bụla", "Naanị mgbe ọ dị mkpa n'ezie, mgbe e lechara ụzọ ndị ọzọ", "Naanị n'akwụkwọ nri"], answer: 2, why: "IPM nke FAO na-ejide iji ọgwụ ụmụ ahụhụ naanị n'ihe dị mkpa n'ezie." },
          { objective: "O4", q: "Kedu otu i kwesịrị isi legharịa ubi?", options: ["Lee naanị na nsọtụ ya", "Jee ije n'ụdị W ma lelee ọnụọgụ osisi a kara aka", "Lee ya site n'ụlọ", "Naanị mgbe owuwe ihe ubi gasịrị"], answer: 1, why: "Ụdị W na-elele ubi ahụ niile n'ụzọ ziri ezi." },
          { objective: "O4", q: "Oge nchere tupu owuwe bụ:", options: ["Ụbọchị ị ga-echere n'etiti ịgba ọgwụ na owuwe ihe ubi", "Oge ịkụ ihe", "Ọnụ ahịa ọgwụ ụmụ ahụhụ ahụ", "Ịdị ukwuu nke igwe ịgba ọgwụ"], answer: 0, why: "Ọ na-eme ka ihe fọdụrụ n'ọgwụ dị na nri nọrọ n'ọkwa dị mma." },
          { objective: "O5", q: "Gịnị mere e ji eji ịgba mmiri drip maka tomato?", options: ["Ọ na-eme ka akwụkwọ dị mmiri mmiri", "Ọ na-eji mmiri karịa", "Iwu chọrọ ya", "Ọ na-etinye mmiri na mgbọrọgwụ ma na-eme ka akwụkwọ kpọọ nkụ, na-ebelata ọrịa"], answer: 3, why: "Akwụkwọ kpọrọ nkụ pụtara ọrịa ole na ole na mmiri ole na ole na-efu." },
          { objective: "O6", q: "Gịnị mere e ji kpọọ ọka nkụ nke ọma tupu ịchekwa ya?", options: ["Ka ọ dị arọ karịa", "Ọka dị mmiri mmiri nwere ike ito ero na-emepụta aflatoxin", "Ndị na-azụ ihe na-achọ ọka dị mmiri mmiri", "Ka agba ya gbanwee"], answer: 1, why: "Aflatoxin bụ nsi dị egwu si n'ero na-eto n'elu mkpụrụ ọka dị mmiri mmiri." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkọ Ihe Ubi na Akwụkwọ Nri n'Ụzọ Ga-adịgide",
    questions: [
      { objective: "O1", q: "Nnwale ala na-agwa gị:", options: ["Ihu igwe", "pH na ọkwa nri ala", "Ọnụ ahịa ihe ọkụkụ", "Aha ụmụ ahụhụ"], answer: 1, why: "Nnwale ala na-atụ asịd na nri ala." },
      { objective: "O1", q: "Ala dị asịd nwere ike ịchọ:", options: ["Ịgba ọkụ karịa", "Nnu", "Lime, ma ọ bụrụ na nnwale ala dụrụ ọdụ ya", "Ọ dịghị ihe ọ bụla mgbe ọ bụla"], answer: 2, why: "Itinye lime na-ebelata asịd ma na-ahapụ nri ala." },
      { objective: "O1", q: "Kedu nke na-eme ka ahụike ala ka mma?", options: ["Itinye nsị anụmanụ na kompost na ikpuchi ala", "Ịgba ihe fọdụrụ n'ihe ọkụkụ ọkụ", "Ịkọ ala ọtụtụ ugboro", "Ịhapụ ala ka ọ dị ọtọ"], answer: 0, why: "Ihe ndụ rere ure na mkpuchi na-azụ ma na-echebe ala." },
      { objective: "O2", q: "Mkpụrụ a nyochara (certified seed) bụ:", options: ["Mkpụrụ ọka ọ bụla si n'ahịa", "Mkpụrụ na-enweghị akpa", "Mkpụrụ e chekwara afọ iri", "Mkpụrụ ụlọ ọrụ gọọmentị na-ahụ maka mkpụrụ lere"], answer: 3, why: "Nnyocha ahụ na-elele ụdị na ịdị mma." },
      { objective: "O2", q: "Osisi a kụrụ ọnụ ọnụ na-akarị:", options: ["Iwe ihe karịa", "Ịlụ ọgụ maka ìhè, mmiri na nri ala, ma na-ebelata owuwe", "Ịchọghị fatịlaịza", "Iguzogide ụmụ ahụhụ niile"], answer: 1, why: "Ohere kwesịrị ekwesị na-ehazi ọnụọgụ osisi na ihe ha chọrọ." },
      { objective: "O2", q: "Olee mgbe e kwesịrị ịkwaga obere osisi?", options: ["N'ehihie n'anyanwụ zuru oke", "N'oge oke ifufe na mmiri ozuzo", "Mgbe e mechara ka ha sie ike, ka mma n'oge mgbede dị jụụ", "Tupu ha enwee akwụkwọ"], answer: 2, why: "Ọnọdụ dị jụụ na-ebelata nsogbu ịkwaga ha." },
      { objective: "O3", q: "Kedu ihe ọkụkụ na-agbakwụnye nitrogen n'ala?", options: ["Agwa, akidi na ahụekere", "Naanị ọka", "Tomato", "Yabasị"], answer: 0, why: "Ihe ọkụkụ ezinụlọ agwa na-ejide nitrogen site na mgbọrọgwụ ha." },
      { objective: "O3", q: "Itinye fatịlaịza n'elu (topdressing) ọka na-apụtakarị itinye:", options: ["Lime n'oge ịkụ ihe", "Mkpụrụ", "Naanị mmiri", "Nitrogen n'ihe ọkụkụ na-eto eto"], answer: 3, why: "Itinye nitrogen n'elu na-akwado ito n'oge kwesịrị ekwesị." },
      { objective: "O3", q: "E kwesịrị itinye fatịlaịza:", options: ["Ozugbo n'elu mkpụrụ", "N'akụkụ osisi, ka ọ ghara imetụ mkpụrụ aka", "N'okporo ụzọ", "Naanị n'akwụkwọ"], answer: 1, why: "Itinye ya n'akụkụ mgbọrọgwụ na-eji ya eme ihe nke ọma n'emebighị mkpụrụ." },
      { objective: "O4", q: "Ndị iro okike bụ:", options: ["Ahịhịa", "Ọgwụ ụmụ ahụhụ", "Ụmụ ahụhụ na-eri ma ọ bụ na-awakpo ụmụ ahụhụ na-emebi ihe", "Ndị ohi"], answer: 2, why: "Ladybird na ebu (wasps) na-enyere aka ijikwa ụmụ ahụhụ." },
      { objective: "O4", q: "Ọkwa ime ihe bụ:", options: ["Ọnụọgụ ụmụ ahụhụ mgbe njikwa ga-aba uru karịa ego ọ ga-efu", "Otu ụdị igwe ịgba ọgwụ", "Oge owuwe ihe ubi", "Azịza nnwale ala"], answer: 0, why: "Ọ na-enyere aka izere ịgba ọgwụ mgbe ọ dịghị mkpa." },
      { objective: "O4", q: "A na-eji push-pull karịsịa na:", options: ["Tomato", "Kale", "Yabasị", "Ọka na sorghum"], answer: 3, why: "icipe mepụtara ya maka ụmụ ahụhụ na-emebi mkpụrụ ọka dị ka stemborer na fall armyworm." },
      { objective: "O4", q: "Na Kenya, onye na-edebanye aha ọgwụ ụmụ ahụhụ bụ:", options: ["KCAA", "Pest Control Products Board (PCPB)", "KMD", "ODPC"], answer: 1, why: "PCPB na-achị ngwaahịa njikwa ụmụ ahụhụ na Kenya." },
      { objective: "O4", q: "Ọgwụ ụmụ ahụhụ a na-ere n'ime karama e kesara na-enweghị akwụkwọ ntụziaka:", options: ["Bụ ọnụ ahịa dị mma", "Dị mma ma ọ bụrụ na ọ dị ọnụ ala", "Ekwesịghị ịzụta ya ma ọ bụ iji ya", "Dị nchebe karịa"], answer: 2, why: "Na-enweghị akwụkwọ ntụziaka, ị pụghị ịmara ngwaahịa ahụ ma ọ bụ jiri ya n'enweghị nsogbu." },
      { objective: "O4", q: "E kwesịrị ime karama ọgwụ ụmụ ahụhụ tọgbọrọ chakoo:", options: ["Tufuo ha n'ụzọ dị mma, ọ dịghị mgbe a ga-eji ha chekwaa nri ma ọ bụ mmiri", "Jiri ha chekwaa mmiri ọṅụṅụ", "Nye ha ụmụaka", "Tụba ha n'osimiri"], answer: 0, why: "Ihe fọdụrụ n'ime ha nwere ike imerụ mmadụ na mmiri." },
      { objective: "O5", q: "Oge kacha mma ịgba akwụkwọ nri mmiri bụ:", options: ["Ehihie", "Naanị n'abalị n'oge mmiri ozuzo", "Ọ dịghị mgbe", "Isi ụtụtụ ma ọ bụ mgbede"], answer: 3, why: "Mmiri ole na ole na-efu site n'okpomọkụ na ikuku." },
      { objective: "O5", q: "Mulch n'akụkụ akwụkwọ nri:", options: ["Na-eme ka ala kpọọ nkụ", "Na-ejide mmiri n'ala ma na-egbochi ala ịfesa n'akwụkwọ", "Na-adọta ụmụ ahụhụ niile", "Na-anọchi mmiri kpamkpam"], answer: 1, why: "Mulch na-echekwa mmiri ma na-ebelata ọrịa ala na-afesa." },
      { objective: "O6", q: "E kwesịrị iburu ihe ubi dị nro dị ka tomato n':", options: ["Akpa siri ike", "Naanị aka ghere oghe", "Igbe dị ọcha", "Akpa plastik n'anyanwụ"], answer: 2, why: "Igbe na-echebe ihe ubi dị nro ka a ghara ịpịa ya." },
      { objective: "O6", q: "Gịnị mere ị ga-eji wee naanị akpụ ole ị nwere ike ire ma ọ bụ hazie ngwa ngwa?", options: ["Mgbọrọgwụ ya na-emebi n'ime ụbọchị ole na ole mgbe e wesịrị ya", "Ndị na-azụ ihe anaghị achọ akpụ", "Akpụ na-eto ọzọ n'otu abalị", "Ọ bụ iwu"], answer: 0, why: "Mgbọrọgwụ akpụ ọhụrụ na-emebi ngwa ngwa." },
      { objective: "O6", q: "Akpa hermetic na-ejikwa weevils site n':", options: ["Itinye nsi", "Ime mkpọtụ", "Ịhapụ ìhè ka ọ banye", "Igbochi ikuku"], answer: 3, why: "Akpa ikuku anaghị abanye na-agụ ụmụ ahụhụ oxygen." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 9, 12, 15, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ilele ala", objective: "O1", notYet: "Ọ dịghị ebe a kpọtụrụ aha nlele ala ma ọ bụ nnwale ala.", meets: "E dere ihe a hụrụ na nlele n'ubi, tinyere ebe na otu a ga-esi were ihe nlele maka nnwale ala.", exceeds: "Na-eji azịza nnwale ala, ma ọ bụ ụbọchị a ga-enweta ya, hazie atụmatụ ahụ." },
      { name: "Mkpụrụ, ohere na ụbọchị", objective: "O2", notYet: "Ebe mkpụrụ si, ohere ma ọ bụ ụbọchị ịkụ ihe adịghị.", meets: "Mkpụrụ a nyochara ma ọ bụ ihe ịkụ dị ọcha, ohere a tụrụ aro na ụbọchị ịkụ ihe maka ihe ọkụkụ abụọ ahụ, tinyere ebe nke ọ bụla si.", exceeds: "Tinyere atụmatụ nursery na ime ka obere osisi akwụkwọ nri sie ike." },
      { name: "Inye ala nri", objective: "O3", notYet: "Ọ bụ naanị fatịlaịza ka e dere, ma ọ bụ e chere echiche ọnụọgụ ntinye.", meets: "Ihe ndụ rere ure, ihe ọkụkụ ezinụlọ agwa ọ bụla, na oge na ebe a ga-etinye fatịlaịza, tinyere ọnụọgụ si na nnwale ala ma ọ bụ onye ndụmọdụ ọrụ ugbo.", exceeds: "Tinyere atụmatụ kompost na ịgbanwe ihe ọkụkụ maka oge na-abịa." },
      { name: "Ilegharị ubi na IPM", objective: "O4", notYet: "Na-ezube ịgba ọgwụ n'usoro oge n'ilegharịghị ubi.", meets: "Usoro ilegharị ubi kwa izu, ụmụ ahụhụ ndị bụ isi a ga-ele anya, nzọụkwụ mgbochi na ndị na-abụghị ọgwụ, na iwu akwụkwọ ntụziaka maka ọgwụ ụmụ ahụhụ ọ bụla.", exceeds: "Na-akpọ aha ebe a ga-enweta nchọpụta ọrịa na ọkwa ime ihe maka otu ụmụ ahụhụ bụ isi." },
      { name: "Ịgba mmiri", objective: "O5", notYet: "Ọ dịghị atụmatụ ịgba mmiri maka akwụkwọ nri.", meets: "Ụzọ ịgba mmiri, oge n'ụbọchị, mulch na ilele mmiri dị n'ala.", exceeds: "Tinyere ụzọ ịchịkọta ma ọ bụ ichekwa mmiri." },
      { name: "Owuwe na nchekwa", objective: "O6", notYet: "Owuwe, ikewa ma ọ bụ nchekwa adịghị.", meets: "Oge owuwe, imeso ya nwayọọ, ikewa, ịkpọ nkụ na nchekwa, na ebe a ga-ere ya.", exceeds: "Na-akpọ aha ihe ịdị mma onye na-azụ ihe chọrọ na otu a ga-esi dekọọ mfu." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ oge ahụ",
      "Ndị na-amụ ihe kọrọ na ha mere nnwale ala, jiri mkpụrụ a nyochara ma ọ bụ legharịa ubi kwa izu n'oge na-esote (nnyocha nsochi)",
      "Mgbanwe na mfu n'owuwe na mgbe owuwe gasịrị nke ndị na-amụ ihe ma ọ bụ otu ha kọrọ mgbe otu oge gachara",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọrụ ugbo Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, na ekwentị nkịtị",
      "Ohere ịbanye n'ubi ma ọ bụ ubi akwụkwọ nri, na shọvel maka nlele ala",
      "Ezi akwụkwọ ntụziaka ọgwụ ụmụ ahụhụ na akpa mkpụrụ, ma ọ bụrụ na ọ dị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, tinyere oge n'ubi na oge ide atụmatụ oge ahụ"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ ụlọ akwụkwọ n'ubi (field school): meenụ ule mbido ọnụ, wee mee nlele ala na ije ilegharị ubi n'ezi ubi.",
      "Kpọọ onye ndụmọdụ ọrụ ugbo ma ọ bụ agrovet ka o nye ohere, ụdị mkpụrụ na ọnụọgụ fatịlaịza nke mpaghara ahụ; enyela ọnụọgụ n'onwe gị.",
      "Agwakọtala ma ọ bụ gbaa ọgwụ ụmụ ahụhụ na klas; gosi akwụkwọ ntụziaka ma mee omume ịgụ ya.",
      "Jiri rubric tụọ akara atụmatụ oge ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
