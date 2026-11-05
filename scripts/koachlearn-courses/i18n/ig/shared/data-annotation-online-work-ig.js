"use strict";

// Koach Learn course (Igbo translation of shared/data-annotation-online-work.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const MINDRIFT = { name: "Mindrift (ọrụ ọzụzụ AI; ọ na-ekwu na ọrụ Toloka kwagara ebe a, na isonye bụ n'efu)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen nke Appen (ọrụ ndị na-enye aka; ọ na-ekwu na ọ naghị arịọ gị ka ị kwụọ ụgwọ iji sonye)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (obere ọrụ dị ka data ọzụzụ AI, nnyocha na ndekọ olu)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Ọrụ na Sama (ọfịs na Nairobi, Kenya, na Gulu na Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "US Federal Trade Commission: Aghụghọ ọrụ (Job scams)", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "ILO: Ọrụ nke ikpo okwu ọrụ dijitalụ na-arụ n'ịgbanwe ụwa ọrụ", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Nigeria Data Protection Commission (Kọmịshọn Nchekwa Data nke Naịjirịa)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-ig",
  lang: "ig",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Ịkpọ Aha Data maka AI na Obere Ọrụ n'Ịntanetị",
  skills: "Ịmata ọrụ ịkpọ aha data na obere ọrụ, Ịkpọ aha data site n'ịgbaso ntụziaka, Ịgafe ule ntozu na idebe ogo ọrụ elu, Ịlele na ikpo okwu bụ ezi nke na ịjụ ọrụ adịgboroja, Ichebe data nke gị na data ọrụ, Ịgbakọ ezi ụgwọ gị kwa elekere",
  outcome: "ịkpọ aha data maka AI site n'ịgbaso ntụziaka e dere ede, ịlele na ikpo okwu ọrụ n'ịntanetị bụ ezi nke tupu i sonye, ichebe data nke gị na data ị na-ahụ, na ịgbakọ ihe ọrụ ahụ na-akwụ gị n'ezie kwa elekere.",
  about: [
    "Ngwa AI na-amụta ihe site n'ọmụmaatụ ndị mmadụ na-akwado: foto e sere igbe gburugburu ụgbọala, ahịrịokwu e kara akara na ọ dị mma ma ọ bụ na ọ dịghị mma, ndekọ olu e detuuru ede, na azịza AI e nyere akara site na nke kacha mma ruo nke kacha njọ. A na-akpọ ọrụ a ịkpọ aha data (data annotation ma ọ bụ data labeling). Ọtụtụ mmadụ na-arụ ya n'ịntanetị dị ka obere ọrụ a na-akwụ ụgwọ, a na-akpọ micro-jobs, site na Nairobi ruo Lagos, Accra, Dakar, Manila, Hyderabad, Bogotá, Mexico City, Casablanca, Cairo na obodo dị iche iche na US.",
    "Ihe ọmụmụ a bụ maka ndị ntorobịa na ndị okenye nwere ekwentị ma ọ bụ kọmputa, ndị chọrọ ịnwale ọrụ a n'enweghị nsogbu. Ị ga-amụta ụdị ọrụ ndị bụ isi, mee omume ịkpọ aha site na ntụziaka e dere ede n'akwụkwọ, mụta otu ule ntozu na akara ogo ọrụ si arụ ọrụ, lelee na ikpo okwu bụ ezi nke, jụ ọtụtụ \"ọrụ AI\" adịgboroja na-arịọ ego, chebe data nzuzo, ma gbakọọ ezi ụgwọ gị kwa elekere.",
    "Kwuo eziokwu nye onwe gị banyere ego. Ụgwọ anaghị adị otu: izu ụfọdụ, ọrụ dị ọtụtụ; izu ụfọdụ, ọ dị ole na ole. A naghị akwụkarị ụgwọ maka oge e ji were ule na ịchọ ọrụ. Ezi ikpo okwu anaghị arịọ gị ka ị kwụọ ụgwọ iji malite. Ihe ọmụmụ a anaghị ekwe nkwa ego; ọ na-enyere gị aka ikpebi n'anya doro anya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\" ị nwere ike ime n'akwụkwọ ma ọ bụ n'ekwentị. E nwere ajụjụ 2 dị mkpụmkpụ mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee atụmatụ mbido gị maka obere ọrụ: (1) ihe omume 10 i kpọrọ aha site na ntụziaka nke gị dị otu peeji, ya na ihe ndị edoghị anya e kara akara (flag); (2) ikpo okwu abụọ i lelere, ya na ihe i chọtara n'ịlele nke ọ bụla (ezi weebụsaịtị, isonye n'efu, ọ na-anabata obodo gị, otu e si akwụ ụgwọ); (3) ndepụta ihe ịrịba ama aghụghọ ise; (4) iwu nchekwa data gị atọ; na (5) ndekọ oge na ụgwọ kwa izu, ya na atụmatụ izu 4 nwere ụbọchị, gụnyere otu ị ga-esi gbakọọ ezi ụgwọ gị kwa elekere.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye nọ na US na mba ofesi (Kenya, Naịjirịa, Ghana, Senegal, Côte d'Ivoire, Philippines, India, Mexico, Colombia, Morocco, Egypt): ndị gụchara ụlọ akwụkwọ, ndị gụsịrị mahadum, ndị nne na nna nọ n'ụlọ, ndị na-achọ ego mgbakwunye, na ndị na-achọ ọrụ na-ahụ mgbasa ozi \"kpata ego site n'AI\" mgbe niile. A sụgharịrị ihe ọmụmụ a n'asụsụ iri.",
    startingPoint: "Ha nwere ike iji smartphone, WhatsApp na mgbasa ozi ọha; ụfọdụ nwere laptọọpụ ma ọ bụ na-eji ebe cyber café ma ọ bụ ọba akwụkwọ. Ọtụtụ akpọbeghị aha data, gụọ ntụziaka ọrụ ma ọ bụ were ule ntozu mgbe ọ bụla. Ọtụtụ ahụla mgbasa ozi \"rụọ ọrụ n'ụlọ\" na-arịọ ka ha tinye ego (deposit).",
    gap: "Ndị na-amụ ihe kwesịrị ịma otu ezi ọrụ data AI dị, kpọọ aha nke ọma site na ntụziaka, kpebie ma ikpo okwu ọ bụ ezi nke, chebe data nzuzo, ma gbakọọ ezi ụgwọ, ka ha nwee ike ịkpata ego ebe ezi ọrụ dị ma zere ịtụfu ego na akwụkwọ njirimara ha n'aka ọrụ adịgboroja.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a sụgharịrị ya n'asụsụ iri",
      "Ngwaọrụ: ọtụtụ mgbe naanị smartphone; data dị oke ọnụ; ọkụ eletrik nwere ike ịpụ",
      "Oge: nkuzi nkeji 4 ruo 6; omume n'akwụkwọ",
      "Ikpo okwu, obodo ha na-anabata, ụzọ ịkwụ ụgwọ na ụgwọ na-agbanwe ugboro ugboro: ndị na-amụ ihe na-elele peeji nke ikpo okwu ọ bụla n'onwe ya",
      "Akwụla ụgwọ iji malite; ekesala okwuntughe, PIN, koodu otu oge ma ọ bụ akwụkwọ njirimara ma ọ bụghị n'ime nlele njirimara nke ikpo okwu ahụ"
    ],
    prerequisites: "Nka ekwentị ma ọ bụ kọmputa dị mfe na adreesị email. Ịgụ ihe nke ọma n'asụsụ e ji arụ ọrụ ahụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ asatọ n'ịntanetị", action: "ịmata ndị bụ ịkpọ aha data ma ọ bụ obere ọrụ ma kpọọ aha nka nke ọ bụla chọrọ", standard: "ma nweta opekata mpe 6 n'ime 8 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ntụziaka ịkpọ aha dị mkpụmkpụ na ihe omume iri", action: "ịkpọ aha ihe ọ bụla site n'ịgbaso ntụziaka ahụ ma kaa akara (flag) ndị edoghị anya", standard: "ma dabara na azịza ziri ezi n'opekata mpe 8 n'ime 10" },
    { id: "O3", condition: "Tupu ịmalite ule ntozu", action: "idepụta nzọụkwụ ị ga-eme iji gụọ ntụziaka, mee omume ma lelee ọrụ nke gị", standard: "ka i nwee ike ịkọwa otu ị ga-esi debe akara ogo ọrụ gị elu" },
    { id: "O4", condition: "Mgbe e nyere gị ikpo okwu ma ọ bụ onyinye ọrụ", action: "ịlele na ọ bụ ezi nke ma kpọọ aha ihe ịrịba ama ọ bụla nke ọrụ adịgboroja", standard: "tupu ị kwụọ ụgwọ ọ bụla ma ọ bụ kesaa akwụkwọ ọ bụla" },
    { id: "O5", condition: "Mgbe ị na-arụ ọrụ", action: "idebe ozi nzuzo nke gị na data ọrụ ahụ na nzuzo", standard: "n'ekesaghị okwuntughe, koodu ma ọ bụ ihe dị n'ọrụ ahụ n'èzí ikpo okwu ahụ" },
    { id: "O6", condition: "Mgbe izu omume ma ọ bụ ezi ọrụ gasịrị", action: "idekọ oge na ụgwọ gị ma gbakọọ ezi ego ị na-enweta kwa elekere", standard: "gụnyere oge a na-akwụghị ụgwọ dị ka ule na ịchọ ọrụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịrụ ọrụ ahụ nke ọma",
      lessons: [
        {
          title: "Ihe ịkpọ aha data na obere ọrụ bụ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mata ụdị ọrụ data AI ndị bụ isi na nka nke ọ bụla chọrọ.",
          text: [
            "Ngwa AI na-amụta ihe site n'ọmụmaatụ. Ndị mmadụ na-akwado ọmụmaatụ ndị ahụ site n'itinye aha (label): foto a na-egosi igwe kwụ otu ebe, ozi a bụ mkpesa, ahịrịokwu a dị n'asụsụ Hausa, azịza AI a ka nke ahụ mma. Itinye aha ndị a ka a na-akpọ ịkpọ aha data (data annotation ma ọ bụ data labeling).",
            "Ụdị ọrụ a na-ahụkarị: ịkpọ aha foto (ịse igbe gburugburu ụgbọala ọ bụla, ma ọ bụ ịhọrọ otu ụdị), ịkpọ aha ederede (nyocha a ọ dị mma, ọ dịghị mma ka ọ bụ n'etiti?), ọrụ olu (ide ihe onye na-ekwu okwu kwuru, ma ọ bụ idekọ olu gị ka ị na-agụ ahịrịokwu), na inye azịza AI akara (ịgụ azịza abụọ sitere n'AI ma họrọ nke ka mma, ya na ihe kpatara ya). Ụfọdụ ọrụ ọhụrụ na-achọ ndị ọkachamara, dị ka nọọsụ, ndị na-agụ akwụkwọ ego (accountant) ma ọ bụ ndị maara asụsụ abụọ nke ọma.",
            "Obere ọrụ (micro-jobs) bụ ọrụ nta n'ịntanetị a na-akwụ ụgwọ otu otu, nke na-ewekarị sekọnd ole na ole ruo nkeji ole na ole. Ụfọdụ mmadụ na-arụ ha n'ikpo okwu ghere oghe site n'ụlọ; e were ndị ọzọ n'ọrụ dị ka ndị ọrụ n'ọfịs, dịka ọmụmaatụ ụlọ ọrụ nwere otu data na Nairobi ma ọ bụ Kampala. N'ụzọ ọ bụla, nka ndị bụ isi bụ ịgụ ihe nke ọma, ịgbaso iwu kpọmkwem, ilebara anya mgbe niile, na eziokwu."
          ],
          words: [["Ịkpọ aha data (data annotation, data labeling)", "itinye aha na foto, ederede, olu ma ọ bụ vidiyo ka ngwa AI nwee ike ịmụta ihe site na ha."], ["Obere ọrụ (micro-job, micro-task)", "ọrụ nta n'ịntanetị a na-akwụ ụgwọ otu otu."], ["Inye azịza AI akara (AI response rating)", "ịgụ azịza sitere na ngwa AI ma kpebie nke ka mma, site n'iji iwu."], ["Ide ihe e kwuru (transcription)", "ide kpọmkwem ihe e kwuru na ndekọ olu."]],
          slides: [
            { title: "AI na-amụta site n'ọmụmaatụ e nyere aha", bullets: ["Ndị mmadụ na-etinye aha ndị ahụ", "A na-akpọ nke a ịkpọ aha data (data annotation ma ọ bụ data labeling)"] },
            { title: "Ụdị ọrụ a na-ahụkarị", bullets: ["Foto: igbe ma ọ bụ ụdị", "Ederede: ọ dị mma, ọ dịghị mma ma ọ bụ n'etiti", "Olu: dee ihe e kwuru, ma ọ bụ dekọọ olu gị", "Azịza AI: họrọ nke ka mma, ya na ihe kpatara ya"] },
            { title: "Ebe ọrụ ahụ dị", bullets: ["Ikpo okwu ghere oghe n'ịntanetị, ọrụ n'ọrụ", "Ọrụ ọfịs n'ụlọ ọrụ data, dị ka onye ọrụ", "Ọrụ ndị ọkachamara maka ndị nwere ọrụ aka ma ọ bụ asụsụ abụọ"] },
            { title: "Nka kacha mkpa", bullets: ["Ịgụ ihe nke ọma", "Ịgbaso iwu kpọmkwem", "Ilebara anya mgbe niile na eziokwu"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Dee ụdị ọrụ anọ ahụ (foto, ederede, olu, inye AI akara) n'akwụkwọ. N'akụkụ nke ọ bụla, dee otu nka i nweworị nke dabara ya, dịka ọmụmaatụ \"Ana m asụ Bekee na Igbo\" n'akụkụ olu, ma ọ bụ \"Ana m ahụ obere ihe\" n'akụkụ foto.",
          youCanNow: "ịkpọ aha ụdị ọrụ data AI ndị bụ isi ma jikọọ nke ọ bụla na nka i nweworị.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke n'ime ndị a bụ ọrụ ịkpọ aha data?", options: ["Ire ekwentị n'ịntanetị", "Iji ọgba tum tum ebuga nri", "Ịse igbe gburugburu ụgbọala ọ bụla na foto okporo ụzọ", "Idozi ihuenyo laptọọpụ"], answer: 2, why: "Ịse igbe gburugburu ihe bụ ịkpọ aha foto, otu n'ime ọrụ ịkpọ aha data ndị bụ isi." },
            { objective: "O1", q: "Ọrụ na-egosi gị azịza AI abụọ ma jụọ nke ka mma na ihe kpatara ya. Kedu ụdị ọrụ ọ bụ?", options: ["Inye azịza AI akara", "Ide ihe e kwuru (transcription)", "Ịkpọ aha foto", "Itinye akwụkwọ ụgwọ (invoice) na kọmputa"], answer: 0, why: "Ikpe azịza AI ikpe ya na ihe kpatara ya bụ inye azịza AI akara." }
          ]
        },
        {
          title: "Ịkpọ aha site na ntụziaka",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kpọọ aha ihe omume iri site n'ịgbaso ntụziaka e dere ede ma kaa akara ndị edoghị anya.",
          text: [
            "Ọrụ ọ bụla nwere ntụziaka (guideline): iwu maka otu e si akpọ aha. Ọ na-ekwu ihe aha ọ bụla pụtara, na-enye ọmụmaatụ, ma na-akọwa ihe ndị siri ike. Echiche gị adịghị mkpa ka ntụziaka ahụ. Ọ bụrụ na ntụziaka ahụ kwuru \"mmadụ dị na paịsta (poster) bụ mmadụ\", kpọọ ya aha otu ahụ, ọbụlagodi ma ọ dị gị ka ihe ijuanya.",
            "Gụchaa ntụziaka ahụ dum tupu ọrụ mbụ gị, wee hapụ ya ka ọ ghere oghe. Chọọ ọmụmaatụ na ihe ndị dị n'oke (edge cases): ihe ndị nwere ike ịdaba n'aha abụọ. Ọtụtụ mperi na-eme n'ebe ahụ.",
            "Mgbe ihe edoghị anya n'ezie, echela ọnụ (guess) n'efu. Jiri nhọrọ ịgafe (skip) ma ọ bụ ịka akara (flag) ma ọ bụrụ na o nwere ya, ma ọ bụ mee ihe ntụziaka ahụ kwuru ka e mee ihe ndị edoghị anya. Ime nke ọma na otu ụzọ mgbe niile ka ime ngwa ngwa."
          ],
          steps: ["Gụọ ntụziaka ahụ dum otu ugboro, nwayọọ.", "Dee aha ọ bụla na ihe ọ pụtara n'okwu nke gị.", "Mụọ ọmụmaatụ na ihe ndị dị n'oke.", "Kpọọ aha ihe ọ bụla, na-elele ntụziaka mgbe o doghị gị anya.", "Kaa akara ma ọ bụ gafee ihe ndị ntụziaka ahụ na-ekwughị maka ha, dị ka o kwuru."],
          words: [["Ntụziaka (guideline)", "iwu e dere ede maka ọrụ ịkpọ aha: ihe aha ọ bụla pụtara na otu e si eme ihe ndị siri ike."], ["Ihe dị n'oke (edge case)", "ihe nwere ike ịdaba n'ihe karịrị otu aha, ya mere a ga-elele iwu ahụ."], ["Ịka akara (flag)", "ịkara ihe akara na o doghị anya ma ọ bụ na ọ mebiri emebi ka onye nyocha lee ya anya."]],
          slides: [
            { title: "Ntụziaka bụ onye isi", bullets: ["Ọ na-ekwu ihe aha ọ bụla pụtara", "Ọ na-enye ọmụmaatụ na ihe ndị siri ike", "Gbasoo ya, ọbụlagodi karịa echiche gị"] },
            { title: "Otu esi akpọ aha nke ọma", bullets: ["Bụrụ ụzọ gụchaa ntụziaka ahụ dum", "Hapụ ya ka ọ ghere oghe mgbe ị na-arụ ọrụ", "Lelee ya mgbe ọ bụla o doghị gị anya"] },
            { title: "Ihe dị n'oke na ihe edoghị anya", bullets: ["Ọtụtụ mperi na-eme n'ihe dị n'oke", "Jiri flag ma ọ bụ skip dị ka ntụziaka kwuru", "Ime nke ọma na otu ụzọ ka ime ngwa ngwa"] }
          ],
          tryIt: "Mee omume n'akwụkwọ. Ntụziaka: kpọọ ozi ọ bụla POSITIVE (obi dị ya ụtọ maka ọrụ e nyere), NEGATIVE (obi adịghị ya ụtọ) ma ọ bụ NEUTRAL (ajụjụ ma ọ bụ eziokwu); ọ bụrụ na obi dị ya ụtọ ma ọ dịkwa ya njọ, kpọọ ya aha site n'arịrịọ bụ isi. Kpọọ aha iri ndị a: 1 \"Daalụ, e bugara m ya ngwa ngwa!\" 2 \"Ebee ka ụlọ ahịa unu dị na Kumasi?\" 3 \"Achịcha ahụ kara nka ọzọ.\" 4 \"Ọnụ ahịa dị mma, mana igbe ahụ gbajiri. Biko gbanwee ya.\" 5 \"Unu na-emepe na Sọnde?\" 6 \"Onye na-akwa akwa kacha mma na Dakar!\" 7 \"Echere m awa abụọ.\" 8 \"Ihe m nyere iwu 2231 abịala.\" 9 \"Ọ masịrị m, mana achọrọ m ka e nyeghachi m ego maka nke abụọ.\" 10 \"asdf\". Azịza: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 flag (ọ bụghị ezi ozi).",
          youCanNow: "ịgụ ntụziaka ịkpọ aha, jiri ya kpọọ ihe ọ bụla aha, ma kaa akara ihe ndị ọ na-ekwughị maka ha.",
          quickCheck: [
            { objective: "O2", q: "Ntụziaka kwuru na mmadụ e sere ese (cartoon) bụ mmadụ. Ị chere na ọ bụghị. Gịnị ka ị ga-eme?", options: ["Gbasoo echiche nke gị", "Kpọọ ya mmadụ, dị ka ntụziaka kwuru", "Gafee foto e sere ese niile", "Jụọ enyi gị na WhatsApp ka o kpebie"], answer: 1, why: "N'ọrụ ịkpọ aha, ntụziaka na-ekpebi, ọ bụghị echiche onwe gị." },
            { objective: "O2", q: "Otu ihe adabaghị n'aha ọ bụla dị na ntụziaka. Gịnị kacha mma ime?", options: ["Họrọ aha ọ bụla na mberede ka ị chekwaa oge", "Nye ya aha a na-ahụkarị", "Hapụ ikpo okwu ahụ", "Kaa ya akara ma ọ bụ gafee ya dị ka ntụziaka gwara gị"], answer: 3, why: "Ịka akara n'ihe edoghị anya na-eme ka data dị ọcha ma na-echebe akara ogo ọrụ gị." }
          ]
        },
        {
          title: "Ule ntozu na akara ogo ọrụ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Depụta nzọụkwụ ị ga-eme iji gafee ule ntozu ma debe akara ogo ọrụ gị elu.",
          text: [
            "Ọtụtụ ọrụ na-amalite site n'ule ntozu (qualification test): obere ọrụ omume nwere azịza a maara. Ọ na-achọkarị ezigbo akara tupu i nweta ọrụ a na-akwụ ụgwọ. N'ọtụtụ ikpo okwu, a naghị akwụ ụgwọ maka oge ule a, ya mere kwadoo nke ọma ma were ya mgbe i zuru ike.",
            "Mgbe ị malitere, ikpo okwu ahụ na-anọgide na-elele ọrụ gị. Ụfọdụ ihe nwere azịza a maara e zoro ezo, ndị nyocha na-elelekwa ụfọdụ ọrụ gị. Ha abụọ na-eme akara ogo ọrụ gị (quality score). Akara dị elu nwere ike iweta ọrụ ndị ọzọ; akara dị ala nwere ike iwepụ gị n'ọrụ ahụ.",
            "Iji debe ogo ọrụ elu: gụọ ndụmọdụ ọ bụla (feedback), gụghachi ntụziaka mgbe ọ gbanwere, jiri nwayọọ mee ihe dị n'oke, zuo ike, ma ejila aghụghọ ma ọ bụ depụta azịza onye ọzọ. Ụfọdụ ọrụ anaghị ekwe ka ngwa AI rụọ ọrụ ahụ maka gị; gbasoo iwu nke ọrụ ahụ."
          ],
          steps: ["Gụchaa ntụziaka ahụ tupu ule.", "Mee ọrụ omume ọ bụla e nyere.", "Were ule ahụ mgbe i zuru ike, nwee ịntanetị kwụsiri ike.", "Mgbe otu ìgwè ọrụ gwụrụ, gụọ ndụmọdụ ma dee mperi gị.", "Gụghachi ntụziaka ahụ mgbe ọ bụla e mezigharịrị ya."],
          words: [["Ule ntozu (qualification test)", "obere ule nwere ọrụ omume i ga-agafe tupu i nweta ọrụ a na-akwụ ụgwọ n'otu ọrụ."], ["Akara ogo ọrụ (quality score)", "ihe na-egosi ugboro ole aha gị na-eziri ezi, nke e ji ekpebi ma ị ga-enweta ọrụ ndị ọzọ."], ["Ajụjụ ọlaedo (gold question)", "ọrụ e zoro ezo nwere azịza a maara, nke e ji elele ma ị na-eziri ezi."]],
          slides: [
            { title: "Tupu ọrụ a na-akwụ ụgwọ: ule", bullets: ["Ọrụ omume nwere azịza a maara", "A naghị akwụkarị ụgwọ, ya mere bụrụ ụzọ kwadoo", "Were ya mgbe i zuru ike, nwee ịntanetị kwụsiri ike"] },
            { title: "A na-elele ọrụ gị mgbe niile", bullets: ["Azịza a maara e zoro ezo", "Ndị nyocha na-elele ụfọdụ ọrụ", "Ha abụọ na-eme akara ogo ọrụ gị"] },
            { title: "Debe akara gị elu", bullets: ["Gụọ ndụmọdụ ma dee mperi gị", "Gụghachi ntụziaka mgbe ọ gbanwere", "Jiri nwayọọ mee ihe dị n'oke; zuo ike", "Gbasoo iwu ọrụ ahụ gbasara ngwa AI"] }
          ],
          tryIt: "Lelee aha omume iri gị site na nkuzi gara aga site n'iji azịza ndị ahụ. Dee akara gị n'ime 10, ihe ndị ị zighi ezi, na otu iwu ị ga-elele nke ọma oge ọzọ. Wee dee atụmatụ nzọụkwụ ise gị maka ezi ule ntozu mbụ gị.",
          youCanNow: "ịkwadebe maka ule ntozu, ịlele ọrụ nke gị site n'iji azịza ziri ezi, ma kọwaa otu ị ga-esi debe akara ogo ọrụ gị elu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ule ntozu n'ọrụ ịkpọ aha?", options: ["Obere ọrụ omume i ga-agafe tupu ọrụ a na-akwụ ụgwọ", "Ule ụlọ akwụkwọ ị na-akwụ ụgwọ maka ya", "Arịrịọ mgbazinye ego", "Ajụjụ ọnụ vidiyo ya na onye isi onye ahịa"], answer: 0, why: "Ọrụ na-eji ule ntozu elele ma ị nwere ike ịgbaso ntụziaka tupu e nye gị ọrụ a na-akwụ ụgwọ." },
            { objective: "O3", q: "Akara ogo ọrụ gị dara mgbe e mezigharịrị ntụziaka. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Rụọ ọrụ ngwa ngwa karị iji kwụghachi ya", "Meghee akaụntụ nke abụọ", "Gụghachi ntụziaka e mezigharịrị na ndụmọdụ gị", "Leghara ya anya; akara adịghị mkpa"], answer: 2, why: "Mgbe akara dara n'ihi mmezigharị, ọ na-apụtakarị na iwu gbanwere; ịgụghachi ya na ndụmọdụ na-edozi ihe kpatara ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịrụ ọrụ ahụ nke ọma",
        questions: [
          { objective: "O1", q: "Ide kpọmkwem ihe onye na-ekwu okwu kwuru na ndekọ olu ka a na-akpọ:", options: ["Ịkpọ aha foto", "Inye azịza AI akara", "Idekọ ego (bookkeeping)", "Ide ihe e kwuru (transcription)"], answer: 3, why: "Transcription pụtara ide kpọmkwem ihe e kwuru." },
          { objective: "O1", q: "Kedu nka kacha mkpa maka ọrụ ịkpọ aha?", options: ["Ịpị mkpịsị ngwa ngwa nwere ọtụtụ mperi", "Ịgụ ihe nke ọma na ịgbaso iwu kpọmkwem", "Inwe kọmputa dị oke ọnụ", "Ịma ide koodu"], answer: 1, why: "Ịkpọ aha dabere n'ịgụ iwu nke ọma na iji ha otu ụzọ mgbe niile." },
          { objective: "O2", q: "Ntụziaka: kpọọ ozi NEGATIVE ma ọ bụrụ na obi adịghị onye ahụ ụtọ. \"Nri ahụ jụrụ oyi, ọ bịakwaghị n'oge.\" Kedu aha?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Kaa ya akara (flag)"], answer: 0, why: "Obi adịghị onye ahụ ụtọ maka nri ahụ, ya mere ntụziaka kwuru NEGATIVE." },
          { objective: "O2", q: "Ebee ka ọtụtụ mperi ịkpọ aha na-eme?", options: ["Naanị n'ihe mbụ", "N'ihe nwere ọmụmaatụ doro anya", "N'ihe dị n'oke nwere ike ịdaba n'aha abụọ", "N'ihe ị kara akara"], answer: 2, why: "Ihe dị n'oke nwere ike ịdaba n'ihe karịrị otu aha, ya mere ha chọrọ ịlele iwu nke ọma." },
          { objective: "O3", q: "Kedu omume na-enyere aka idebe akara ogo ọrụ gị elu?", options: ["Ịdepụta azịza site n'otu WhatsApp", "Ịgụ ndụmọdụ mgbe ìgwè ọrụ ọ bụla gwụrụ ma dee mperi", "Ịrụ ọrụ awa iri n'ezughị ike", "Ịchepụta azịza ngwa ngwa n'ihe siri ike"], answer: 1, why: "Ndụmọdụ na-egosi kpọmkwem iwu ndị ị na-adaghị, ka i nwee ike idozi ha." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ọrụ n'enweghị nsogbu na ịkpata ego n'eziokwu",
      lessons: [
        {
          title: "Ịlele na ikpo okwu bụ ezi nke na ịjụ ọrụ adịgboroja",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lelee ma ikpo okwu ma ọ bụ onyinye ọrụ ọ bụ ezi nke ma kpọọ aha ihe ịrịba ama nke adịgboroja.",
          text: [
            "Ezi ikpo okwu dị. Ọmụmaatụ ndị na-ekwu na weebụsaịtị nke ha na isonye bụ n'efu gụnyere CrowdGen nke Appen, Mindrift (ebe ọrụ Toloka kwagara) na Clickworker. Ikpo okwu na-agbanwe, na-emechi, na-anabatakwa obodo dị iche iche, ya mere lelee weebụsaịtị nke ikpo okwu ahụ n'onwe ya mgbe niile maka obodo gị, ọrụ dị ya na otu e si akwụ ụgwọ.",
            "\"Ọrụ AI\" adịgboroja dị ebe niile, na WhatsApp, Telegram, TikTok na Facebook. Ihe ịrịba ama kacha ukwuu: ha na-arịọ gị ka ị kwụọ ụgwọ. Ezi ọrụ anaghị arịọ gị ụgwọ mgbe ọ bụla iji sonye, imeghe ọrụ, maka ọzụzụ, maka ngwa mbido ma ọ bụ iji wepụta ego i nwetara. US Federal Trade Commission (FTC), ọfịs gọọmentị US na-echebe ndị ahịa, kwuru na ndị were mmadụ n'ọrụ n'eziokwu anaghị ana gị ego iji nweta ọrụ.",
            "Ihe ịrịba ama ndị ọzọ: ụgwọ dị ka ihe dị oke mma maka ọrụ dị mfe; onye na-achọ ndị ọrụ na-ekwu okwu naanị na WhatsApp ma ọ bụ Telegram; ọrụ dị ka ịkpọ vidiyo \"like\" ma ọ bụ inye ngwaahịa akara ebe ị ga-etinye ego (ọtụtụ mgbe crypto) iji gaa n'ihu; ịkwụ gị ụgwọ wee rịọ ka ị zighachi ụfọdụ; ịrịọ njirimara gị (ID), PIN ụlọ akụ ma ọ bụ koodu otu oge na chat; na ịmanye gị ikpebi taa."
          ],
          steps: ["Chọta ezi weebụsaịtị ikpo okwu ahụ n'onwe gị; ejila njikọ (link) dị n'ozi ahụ.", "Lelee na isonye bụ n'efu ma gụọ peeji ụgwọ na ịkwụ ụgwọ ya.", "Lelee na ọ na-anabata ndị ọrụ si n'obodo gị.", "Chọọ aha ikpo okwu ahụ ya na okwu \"scam\" ma gụọ ihe ndị ọzọ kọrọ.", "Jụ onyinye ọ bụla na-arịọ gị ka ị kwụọ ụgwọ, tinye ego ma ọ bụ zighachi ego."],
          words: [["Aghụghọ ọrụ (task scam)", "ọrụ adịgboroja ebe ị na-arụ ọrụ dị mfe, hụ ego adịgboroja i nwetara, ma a gwa gị ka i tinye ego iji gaa n'ihu ma ọ bụ wepụta ego."], ["Onye na-achọ ndị ọrụ (recruiter)", "onye na-achọta ndị ọrụ maka ụlọ ọrụ. Ndị ezi anaghị ana gị ego."], ["Ezi weebụsaịtị (official website)", "saịtị nke ikpo okwu ahụ n'onwe ya, nke ị chọtara n'onwe gị, ọ bụghị site na njikọ mmadụ zitere gị."]],
          slides: [
            { title: "Ezi ikpo okwu: lelee ha n'onwe gị", bullets: ["Chọta ezi weebụsaịtị n'onwe gị", "Isonye kwesịrị ịbụ n'efu", "Lelee obodo gị, ọrụ ahụ na otu e si akwụ ụgwọ"] },
            { title: "Ihe ịrịba ama nke mbụ", bullets: ["Ha na-arịọ gị ka ị kwụọ ụgwọ", "Iji sonye, imeghe ọrụ, maka ọzụzụ ma ọ bụ iji wepụta ego", "Ezi ọrụ anaghị ana gị ego iji rụọ ọrụ"] },
            { title: "Ihe ịrịba ama ndị ọzọ", bullets: ["Ụgwọ buru ibu maka ọrụ dị mfe", "Ndị na-achọ ndị ọrụ na-ekwu naanị na WhatsApp ma ọ bụ Telegram", "Itinye ego iji gaa n'ihu, ma ọ bụ izighachi ego", "Ịrịọ ID, PIN ma ọ bụ koodu gị na chat"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Họrọ ikpo okwu abụọ (site na nkuzi a, ma ọ bụ nke enyi gị na-eji). Maka nke ọ bụla, dee: ezi weebụsaịtị ị chọtara n'onwe gị, ma isonye ọ bụ n'efu, ma ọ na-anabata obodo gị, otu e si akwụ ụgwọ, na ihe ọ bụla i chọtara mgbe i chọrọ aha ya ya na \"scam\". Wee dee ndepụta ihe ịrịba ama aghụghọ ise gị.",
          youCanNow: "ịlele ikpo okwu na weebụsaịtị nke ya n'onwe ya ma jụ ọrụ adịgboroja site n'ịkpọ aha ihe ịrịba ama ya.",
          quickCheck: [
            { objective: "O4", q: "Ozi WhatsApp na-enye \"ọrụ inye AI akara\" mana ọ na-arịọ ụgwọ mmeghe $20. Gịnị bụ nke a?", options: ["Ụgwọ mbido nkịtị", "Ụgwọ ọzụzụ ziri ezi", "Ihe ịrịba ama aghụghọ: ezi ọrụ anaghị ana gị ego iji malite", "Ịkwụ ụtụ isi"], answer: 2, why: "Ịrịọ gị ka ị kwụọ ụgwọ iji malite bụ ihe ịrịba ama kacha doo anya nke ọrụ adịgboroja." },
            { objective: "O4", q: "Kedu otu ị ga-esi meghee ikpo okwu ị nụrụ maka ya?", options: ["Pịa njikọ dị n'ozi onye na-achọ ndị ọrụ", "Chọta ezi weebụsaịtị ya n'onwe gị ma gụọ peeji ya", "Rịọ onye na-achọ ndị ọrụ ka o zite foto ihuenyo (screenshot)", "Budata faịlụ onye na-achọ ndị ọrụ zitere"], answer: 1, why: "Ịchọta saịtị ahụ n'onwe gị na-egbochi peeji adịgboroja yiri ya na faịlụ na-emerụ ihe." }
          ]
        },
        {
          title: "Ichebe data nke gị na data ọrụ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dee iwu atọ na-edebe ozi nke gị na data ọrụ na nzuzo.",
          text: [
            "Chebe onwe gị. Jiri okwuntughe siri ike nke ị na-ejighị ebe ọzọ, ma gbanye ịbanye nzọụkwụ abụọ (two-step sign-in). Ekesala koodu otu oge, PIN ma ọ bụ okwuntughe gị na onye ọ bụla, ọbụlagodi onye kwuru na o si n'ikpo okwu ahụ. Ezi ikpo okwu nwere ike ịrịọ ID gị iji gosi na ọ bụ gị, mana naanị n'ime ezi saịtị ma ọ bụ app ha, ọ bụghị na chat.",
            "Chebe data ị na-ahụ. Ọrụ nwere ike igosi foto, olu, ozi ma ọ bụ ozi ahụike na ego nke ndị mmadụ. Ọtụtụ ọrụ na-eme ka i kwenye idebe ọrụ ndị ahụ na nzuzo. Esela foto ihuenyo (screenshot) ọrụ, etinyela ha n'otu, ma ọ bụ etinyela ha na ngwa AI ndị ọzọ ma ọ bụrụ na ọrụ ahụ ekweghị. Mba nwere iwu nchekwa data na ndị na-elekọta ya, dịka ọmụmaatụ Nigeria Data Protection Commission.",
            "Chebe akaụntụ gị. Ekesala ma ọ bụ ree akaụntụ gị, ekwekwala ka onye ọzọ rụọ ọrụ na ya. Ikpo okwu nwere ike imechi akaụntụ maka nke a, ị nwekwara ike ịtụfu ego a na-akwụbeghị gị. Jiri naanị ezi njirimara nke gị."
          ],
          steps: ["Jiri okwuntughe siri ike nke ị na-ejighị ebe ọzọ na ịbanye nzọụkwụ abụọ.", "Kesaa ID naanị n'ime ezi saịtị ma ọ bụ app ikpo okwu ahụ.", "Ekesala koodu, PIN ma ọ bụ okwuntughe mgbe ọ bụla.", "Debe ihe dị n'ọrụ n'ime ikpo okwu ahụ: enweghị screenshot ma ọ bụ ikesa.", "Ekesala, egbazinyela ma ọ bụ ree akaụntụ gị mgbe ọ bụla."],
          words: [["Ịbanye nzọụkwụ abụọ (two-step sign-in)", "nlele nke abụọ, dị ka koodu e zitere n'ekwentị gị, mgbe ị na-abanye."], ["Nzuzo (confidential)", "ihe nzuzo: ị gaghị ekesa ya na onye ọ bụla nọ n'èzí ọrụ ahụ."], ["Koodu otu oge (one-time code)", "obere koodu e zitere gị iji gosi na ọ bụ gị n'ezie. Ekesala ya mgbe ọ bụla."]],
          slides: [
            { title: "Chebe onwe gị", bullets: ["Okwuntughe siri ike, nke ị na-ejighị ebe ọzọ, na ịbanye nzọụkwụ abụọ", "Ekesala koodu, PIN ma ọ bụ okwuntughe mgbe ọ bụla", "ID naanị n'ime ezi saịtị ma ọ bụ app"] },
            { title: "Chebe data ọrụ", bullets: ["Ọrụ nwere ike igosi ozi ezi ndị mmadụ", "Enweghị screenshot, enweghị ikesa n'otu", "Etinyela ya na ngwa AI ndị ọzọ ma ọ bụrụ na e kweghị"] },
            { title: "Chebe akaụntụ gị", bullets: ["Ekesala, egbazinyela ma ọ bụ ree ya", "Jiri naanị njirimara nke gị", "Imebi iwu a nwere ike ime ka ị tụfuo ego a na-akwụbeghị gị"] }
          ],
          sources: [NDPC],
          tryIt: "Dee iwu nchekwa data gị atọ n'okwu nke gị: otu maka akaụntụ gị, otu maka ID na koodu gị, na otu maka data ọrụ. Wee gbanye ịbanye nzọụkwụ abụọ maka akaụntụ email gị ma ọ bụrụ na ọ gbanyebeghị.",
          youCanNow: "idebe ozi nke gị ka ọ dị nchebe ma debe data ọrụ na nzuzo.",
          quickCheck: [
            { objective: "O5", q: "Mmadụ kwuru na ya bụ ndị enyemaka ikpo okwu ahụ ma rịọ koodu e zitere n'ekwentị gị ugbu a. Gịnị ka ị ga-eme?", options: ["Ekesala ya mgbe ọ bụla, ma kpọtụrụ ndị enyemaka site na ezi saịtị", "Zipu ya, n'ihi na ndị enyemaka chọrọ ya", "Zipu ọkara koodu ahụ", "Tinye ya n'otu iji jụọ ajụjụ"], answer: 0, why: "Koodu otu oge bụ naanị maka gị; ikesa ya na-eme ka mmadụ weghara akaụntụ gị." },
            { objective: "O5", q: "Ọrụ na-egosi foto akwụkwọ ozi ahụike nke onye ị na-amaghị. Gịnị ziri ezi?", options: ["See ya screenshot maka omume", "Kesaa ya n'otu ọmụmụ ihe gị", "Tinye ya na ngwa AI n'efu ka ọ gụọ ya", "Kpọọ ya aha n'ime ikpo okwu ahụ ma ekesala ya na onye ọ bụla"], answer: 3, why: "Data ọrụ bụ nzuzo ma na-anọ n'ime ikpo okwu ahụ." }
          ]
        },
        {
          title: "Ịgbakọ ezi ụgwọ gị na ime atụmatụ",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dekọọ oge na ụgwọ gị ma gbakọọ ezi ego ị na-enweta kwa elekere.",
          text: [
            "Ụgwọ obere ọrụ anaghị adị otu. Ọ dị iche site n'ọrụ, obodo na ikpo okwu; izu ụfọdụ, ọrụ dị ọtụtụ, izu ụfọdụ, ọ dịghị. A naghị akwụkarị ụgwọ maka oge ule, ọzụzụ na ịchọ ọrụ. International Labour Organization (ILO), otu mba ụwa na-ahụ maka ọrụ, amụọla ọrụ ikpo okwu ma na-akpọ ka ọ bụrụ ọrụ kwesịrị ekwesị, nwere ụgwọ na ọnọdụ ziri ezi.",
            "Ya mere, tụọ ya. Debe ndekọ (log) nke oge ọrụ ọ bụla: ụbọchị, nkeji i ji rụọ ọrụ (gụnyere ule na ichere), ọrụ i mere, na ego i nwetara. Ezi ụgwọ kwa elekere = ego niile i nwetara ÷ awa niile, na-agụ oge niile. Ọmụmaatụ: i nwetara dọla 6 n'otu izu ma were awa 4 n'ozuzu, ya mere ezi ụgwọ gị kwa elekere bụ dọla 1.50.",
            "Wee kpebie. Tụnyere ya na nhọrọ ndị ọzọ dị gị nso. Ọtụtụ mmadụ na-ewere obere ọrụ dị ka ego mgbakwunye ma ọ bụ nzọụkwụ mbụ gaa n'ọrụ ndị ụgwọ ha ka mma, dị ka onye nyocha ogo ọrụ, ọrụ ndị ọkachamara, ma ọ bụ ọrụ oge niile n'ụlọ ọrụ data. Debe ndekọ ihe a na-akwụ gị, ma jụọ ọfịs ụtụ isi nke mba gị ma ọ ga-ekwe ka ị kọọ ya na otu ị ga-esi kọọ ya."
          ],
          steps: ["Dekọọ oge ọrụ ọ bụla: ụbọchị, nkeji niile (ya na ule na ichere), ọrụ, ego.", "Gbakọọ ego izu ahụ na awa izu ahụ.", "Kee ego site n'awa iji nweta ezi ụgwọ gị kwa elekere.", "Tụnyere ya na nhọrọ ndị ọzọ i nwere.", "Mee atụmatụ ọnwa na-abịa: awa, ikpo okwu, na otu nka ị ga-azụlite."],
          words: [["Ezi ụgwọ kwa elekere", "ego niile i nwetara e kere site n'awa niile i ji rụọ ọrụ, gụnyere oge a na-akwụghị ụgwọ."], ["Oge a na-akwụghị ụgwọ", "oge e ji were ule, ọzụzụ na ịchọ ọrụ nke na-adịghị ewete ego ọ bụla."], ["Ndekọ (log)", "ndekọ dị mfe e dere ede nke ị na-ejupụta mgbe ọ bụla ị rụrụ ọrụ."]],
          slides: [
            { title: "Ụgwọ anaghị adị otu", bullets: ["Ọ dị iche site n'ọrụ, obodo na ikpo okwu", "Izu nwere ọrụ ọtụtụ na izu na-enweghị ọrụ", "A naghị akwụkarị ụgwọ maka ule na ịchọ ọrụ"] },
            { title: "Jiri ndekọ tụọ ya", bullets: ["Ụbọchị, nkeji niile, ọrụ, ego", "Gụnye oge ule na oge ichere"] },
            { title: "Ezi ụgwọ gị kwa elekere", bullets: ["Ego niile ÷ awa niile", "Ọmụmaatụ: dọla 6 ÷ awa 4 = dọla 1.50 kwa elekere"] },
            { title: "Kpebie ma mee atụmatụ", bullets: ["Tụnyere ya na nhọrọ ndị ọzọ dị gị nso", "Mee atụmatụ awa, ikpo okwu na otu nka ị ga-azụlite", "Debe ndekọ; jụọ ọfịs ụtụ isi gị"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "See ndekọ nwere kọlụm ise: ụbọchị, nkeji (ha niile), ọrụ, ego, ndetu. Jupụta otu ahịrị site n'omume taa (ego 0). Wee dee atụmatụ izu 4 nwere ụbọchị: ikpo okwu abụọ ị ga-elele ma ọ bụ sonye, awa ole kwa izu, na ụbọchị kwa izu ị ga-agbakọ ezi ụgwọ gị kwa elekere.",
          youCanNow: "idebe ndekọ oge na ụgwọ, ịgbakọ ezi ụgwọ gị kwa elekere ma mee atụmatụ izu anọ na-abịa.",
          quickCheck: [
            { objective: "O6", q: "I nwetara dọla 10 ma were awa 5 n'ozuzu, gụnyere otu awa ule a na-akwụghị ụgwọ. Gịnị bụ ezi ụgwọ gị kwa elekere?", options: ["Dọla 10 kwa elekere", "Dọla 2.50 kwa elekere", "Dọla 2 kwa elekere", "Dọla 5 kwa elekere"], answer: 2, why: "Ezi ụgwọ kwa elekere na-agụ oge niile: dọla 10 ÷ awa 5 = dọla 2 kwa elekere." },
            { objective: "O6", q: "Gịnị ka ndekọ ọrụ gị kwesịrị inwe?", options: ["Naanị ego i nwetara", "Naanị ụbọchị a kwụrụ gị ụgwọ", "Okwuntughe gị, ka i cheta ya", "Ụbọchị, nkeji niile gụnyere ule na ichere, ọrụ na ego"], answer: 3, why: "Ịgụ nkeji ọ bụla na ụgwọ ọ bụla na-egosi ihe ọrụ ahụ na-akwụ n'ezie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ọrụ n'enweghị nsogbu na ịkpata ego n'eziokwu",
        questions: [
          { objective: "O4", q: "\"Ọrụ\" na Telegram na-egosi ego gị na-amụba mana ọ na-ekwu na ị ga-etinye crypto iji wepụta ya. Gịnị bụ ya?", options: ["Usoro onyinye (bonus) nkịtị", "Aghụghọ ọrụ (task scam)", "Ụgwọ ụlọ akụ", "Ụtụ isi gọọmentị"], answer: 1, why: "Ịrịọ ka i tinye ego iji gaa n'ihu ma ọ bụ wepụta ego bụ ụkpụrụ aghụghọ ọrụ." },
          { objective: "O4", q: "Kedu nlele mbụ kacha mma maka ikpo okwu?", options: ["Chọta ezi weebụsaịtị ya n'onwe gị ma hụ na isonye bụ n'efu", "Tụkwasị foto profaịlụ onye na-achọ ndị ọrụ obi", "Gụọ \"like\" dị na mgbasa ozi ya", "Kwụọ obere ụgwọ iji nwalee ya"], answer: 0, why: "Ezi saịtị, nke ị chọtara n'onwe gị, na-egosi ma ọ bụ n'efu, ezi nke na ma ọ na-anabata obodo gị." },
          { objective: "O5", q: "Ezi ikpo okwu rịọrọ ka i gosi ID gị. Ebee ka ị ga-etinye ya?", options: ["Na chat WhatsApp ya na onye na-achọ ndị ọrụ", "Site n'email gaa n'adreesị ọ bụla ha nyere", "Naanị n'ime ezi saịtị ma ọ bụ app ikpo okwu ahụ", "N'otu ọha"], answer: 2, why: "ID kwesịrị ịdị naanị na nzọụkwụ nlele njirimara nke ikpo okwu ahụ n'onwe ya, ọ bụghị na chat." },
          { objective: "O5", q: "Enyi gị chọrọ ịkwụ gị ụgwọ ka o jiri akaụntụ ikpo okwu gị. Gịnị ka ị ga-eme?", options: ["Gbazinye ya otu ọnwa", "Kesaa okwuntughe mana debe ego ahụ", "Kwe ka o jiri ya naanị n'abalị", "Jụ: ikesa ma ọ bụ ire akaụntụ na-emebi iwu ma nwee ike ime ka ị tụfuo ego gị"], answer: 3, why: "Ikpo okwu na-emechi akaụntụ e kesara ekesa, ị nwekwara ike ịtụfu ego a na-akwụbeghị gị." },
          { objective: "O6", q: "Gịnị mere i ji agụ oge ule a na-akwụghị ụgwọ na ndekọ gị?", options: ["Iji hụ ezi ụgwọ gị kwa elekere", "N'ihi na ikpo okwu ga-akwụ ụgwọ ya ma emechaa", "Ọ dịghị mkpa", "Iji kesaa ya n'ịntanetị"], answer: 0, why: "Oge a na-akwụghị ụgwọ na-ebelata ihe ị na-enweta n'ezie kwa elekere, ya mere a ga-agụrịrị ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkpọ Aha Data maka AI na Obere Ọrụ n'Ịntanetị",
    questions: [
      { objective: "O1", q: "Gịnị bụ ịkpọ aha data (data annotation)?", options: ["Idozi kọmputa", "Itinye aha na data ka ngwa AI nwee ike ịmụta ihe site na ya", "Ide akụkọ ozi", "Ire data nye ụlọ akụ"], answer: 1, why: "Ịkpọ aha data pụtara itinye aha na foto, ederede, olu ma ọ bụ vidiyo maka ọzụzụ AI." },
      { objective: "O1", q: "Kedu nke bụ obere ọrụ (micro-job)?", options: ["Nkwekọrịta afọ abụọ dị ka onye njikwa", "Inwe ụlọ ahịa", "Ịhọrọ ụdị foto ngwaahịa, a na-akwụ ụgwọ kwa ọrụ", "Ịnya bọs"], answer: 2, why: "Obere ọrụ bụ ọrụ nta n'ịntanetị a na-akwụ ụgwọ otu otu." },
      { objective: "O1", q: "Ị na-asụ Yoruba na Bekee nke ọma. Kedu ọrụ nwere ike ịdaba gị?", options: ["Ide ma ọ bụ ịlele ndekọ olu Yoruba", "Idozi ekwentị", "Ibuga ngwaahịa", "Iwu ụlọ"], answer: 0, why: "Nka asụsụ dabara n'ọrụ olu na ederede n'asụsụ ahụ." },
      { objective: "O2", q: "Gịnị ka ntụziaka ọrụ na-eme?", options: ["Ọ na-ekpebi ụgwọ gị", "Ọ na-edepụta akara ndị enyi gị", "Ọ na-enye gị okwuntughe", "Ọ na-ekwu ihe aha ọ bụla pụtara na otu e si eme ihe ndị siri ike"], answer: 3, why: "Ntụziaka bụ iwu maka otu e si akpọ aha." },
      { objective: "O2", q: "Ntụziaka: kpọọ ya NEUTRAL ma ọ bụrụ na ozi ahụ bụ naanị ajụjụ ma ọ bụ eziokwu. \"Mgbe ole ka unu na-emechi?\" Kedu aha?", options: ["POSITIVE", "NEGATIVE", "NEUTRAL", "Kaa ya akara (flag)"], answer: 2, why: "Ọ bụ naanị ajụjụ, ya mere ntụziaka kwuru NEUTRAL." },
      { objective: "O2", q: "\"Akpụkpọ ụkwụ mara mma, mana otu adọwala. Achọrọ m ka e nyeghachi m ego.\" Ntụziaka kwuru ka a kpọọ ozi gwakọtara agwakọta aha site n'arịrịọ bụ isi. Kedu aha?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Gafee ya n'agụghị ya"], answer: 0, why: "Arịrịọ bụ isi bụ inyeghachi ego maka akpụkpọ ụkwụ dọwara adọwa, ya mere ọ bụ NEGATIVE." },
      { objective: "O2", q: "Ndekọ olu bụ naanị ịgbachi nkịtị. Gịnị ka ị ga-eme?", options: ["Dee ihe ọ bụla ka i mechaa ngwa ngwa", "Kaa ya akara ma ọ bụ gafee ya dị ka ntụziaka kwuru", "Depụta azịza onye ọrụ ọzọ", "Hapụ ọrụ ahụ"], answer: 1, why: "A na-aka akara n'ihe mebiri emebi ma ọ bụ nke tọgbọ chakoo, a naghị echepụta azịza." },
      { objective: "O3", q: "Gịnị bụ ajụjụ ọlaedo (gold question)?", options: ["Ụgwọ onyinye (bonus)", "Ajụjụ maka ndị na-ere ọlaedo", "Ọrụ e zoro ezo nwere azịza a maara nke na-elele ma ị na-eziri ezi", "Ule a na-akwụ ụgwọ ị zụtara"], answer: 2, why: "Ikpo okwu na-ezo ọrụ nwere azịza a maara n'etiti ọrụ gị iji tụọ ogo ọrụ." },
      { objective: "O3", q: "Olee oge kacha mma iji were ule ntozu?", options: ["Ozugbo, n'agụghị ihe ọ bụla", "Mgbe i gụchara ntụziaka ma mee omume, mgbe i zuru ike ma nwee ịntanetị kwụsiri ike", "N'etiti abalị nwere data na-adịghị ike", "Mgbe ị na-arụ ọrụ ọzọ"], answer: 1, why: "Nkwadebe na ọnọdụ dị mma na-enye gị ohere kacha mma, a naghịkwa akwụkarị ụgwọ maka oge ule." },
      { objective: "O3", q: "Gịnị nwere ike ime ma ọ bụrụ na akara ogo ọrụ gị anọgide na-adị ala?", options: ["Ị ga-enweta ọrụ ndị ọzọ", "Ụgwọ gị ga-amụba okpukpu abụọ", "Ọ dịghị ihe ga-eme mgbe ọ bụla", "Enwere ike iwepụ gị n'ọrụ ahụ"], answer: 3, why: "Ikpo okwu na-eji akara ogo ọrụ ekpebi onye ga-anọgide na-enweta ọrụ." },
      { objective: "O3", q: "Iwu ọrụ ahụ kwuru ka ejila ngwa AI rụọ ọrụ ndị ahụ. Gịnị ka ị ga-eme?", options: ["Gbasoo iwu ahụ ma rụọ ọrụ ndị ahụ n'onwe gị", "Jiri ngwa AI na nzuzo", "Rịọ enyi gị ka o jiri AI maka gị", "Kwụsị ịgụ iwu ndị ahụ"], answer: 0, why: "Imebi iwu ọrụ nwere ike ime ka ị tụfuo ọrụ ahụ na akaụntụ gị." },
      { objective: "O4", q: "Kedu onyinye nwere ike ịbụ ezi nke?", options: ["\"Kwụọ naira 5,000 iji meghee ọrụ\"", "\"Tinye crypto iji wepụta ego i nwetara\"", "Ikpo okwu ị chọtara n'onwe gị nke saịtị ya kwuru na isonye bụ n'efu", "\"Kpata dọla 200 kwa ụbọchị site n'ịkpọ vidiyo like\""], answer: 2, why: "Isonye n'efu na ịchọta ya na ezi saịtị ya bụ ihe ịrịba ama nke ezi ikpo okwu; ndị ọzọ bụ ụkpụrụ aghụghọ." },
      { objective: "O4", q: "\"Onye na-achọ ndị ọrụ\" kwụrụ gị dọla 30 wee rịọ ka i zighachi dọla 25. Gịnị bụ nke a?", options: ["Aghụghọ: ezi ndị were mmadụ n'ọrụ anaghị arịọ ka i zighachi ego", "Inyeghachi ego nkịtị", "Ụtụ isi", "Onyinye ọzụzụ"], answer: 0, why: "FTC na-adọ aka na ntị na ịkwụ gị ụgwọ wee rịọ ka i zighachi ego bụ aghụghọ." },
      { objective: "O4", q: "Kedu nke na-ABỤGHỊ ihe ịrịba ama nke ọrụ adịgboroja?", options: ["Ha na-arịọ ụgwọ iji malite", "Ha na-ekwu okwu naanị na Telegram ma na-amanye gị ikpebi taa", "Ha na-arịọ PIN ụlọ akụ gị", "Saịtị ikpo okwu ahụ n'onwe ya na-akọwa ọrụ ya ma na-ekwu na isonye bụ n'efu"], answer: 3, why: "Ezi saịtị doro anya nwere isonye n'efu bụ ihe ịrịba ama dị mma; ndị ọzọ bụ ihe ịrịba ama aghụghọ." },
      { objective: "O5", q: "Kedu omume akaụntụ siri ike?", options: ["Iji otu okwuntughe ebe niile", "Okwuntughe ị na-ejighị ebe ọzọ na ịbanye nzọụkwụ abụọ", "Ide okwuntughe gị na profaịlụ gị", "Ikesa ịbanye gị na ezinụlọ gị"], answer: 1, why: "Okwuntughe ị na-ejighị ebe ọzọ na ịbanye nzọụkwụ abụọ na-echebe akaụntụ na ego gị." },
      { objective: "O5", q: "Ị nwere ike itinye foto ọrụ na-atọ ụtọ n'otu WhatsApp gị?", options: ["Ee, ma ọ bụrụ na i mee ka ha ghara ịdị nkọ ntakịrị", "Ee, mgbe ọrụ ahụ gwụrụ", "Mba: data ọrụ na-anọ n'ime ikpo okwu ahụ", "Ee, ma ọ bụrụ na otu ahụ dị obere"], answer: 2, why: "Data ọrụ bụ nzuzo; ikesa ya na-emebi iwu ma nwee ike imerụ ezi ndị mmadụ ahụ." },
      { objective: "O5", q: "Onye kwesịrị inweta koodu ịbanye otu oge gị?", options: ["Ọ dịghị onye", "Ndị enyemaka ikpo okwu na chat", "Onye na-achọ ndị ọrụ", "Enyi na-enyere gị aka"], answer: 0, why: "Koodu otu oge bụ naanị maka gị; onye ọ bụla na-arịọ ya na-achọ iwere akaụntụ gị." },
      { objective: "O6", q: "I nwetara dọla 12 n'otu izu ma were awa 8 n'ozuzu. Gịnị bụ ezi ụgwọ gị kwa elekere?", options: ["Dọla 12", "Dọla 8", "Dọla 4", "Dọla 1.50"], answer: 3, why: "Dọla 12 ÷ awa 8 = dọla 1.50 kwa elekere." },
      { objective: "O6", q: "Kedu okwu banyere ụgwọ obere ọrụ bụ eziokwu?", options: ["Ọ bụ otu kwa izu", "Ọ naghị adị otu ma dị iche site n'ọrụ, obodo na ikpo okwu", "Ọ na-akarị ọrụ dị n'obodo mgbe niile", "Gọọmentị na-ekpebi ya"], answer: 1, why: "Ọnụ ọgụgụ ọrụ dị na ọnụ ụgwọ na-agbanwe, ya mere ụgwọ anaghị adị otu." },
      { objective: "O6", q: "Ị na-edekọ ego ị na-enweta n'ịntanetị. Onye ka ị ga-ajụ maka ịkọ ya maka ụtụ isi?", options: ["Onye na-achọ ndị ọrụ na Telegram", "Ọ dịghị onye, a naghị atụ ụtụ isi n'ego ịntanetị", "Ọfịs ụtụ isi nke mba gị", "Ndị ọrụ ọzọ nọ n'otu gị"], answer: 2, why: "Iwu ụtụ isi dị iche site na mba, ya mere ọfịs ụtụ isi nke mba gị bụ ezi isi iyi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Aha omume", objective: "O2", notYet: "Ihe na-erughị 8 n'ime 10 dabara na azịza, ma ọ bụ e chepụtara azịza maka ihe edoghị anya.", meets: "Opekata mpe 8 n'ime 10 dabara na azịza, e kakwara akara n'ihe edoghị anya.", exceeds: "10 n'ime 10, ya na ntụziaka dị otu peeji n'okwu nke gị nke na-ekpuchi ihe ndị dị n'oke." },
      { name: "Atụmatụ ule na ogo ọrụ", objective: "O3", notYet: "Enweghị atụmatụ, ma ọ bụ atụmatụ ahụ bụ naanị \"rụọ ọrụ ngwa ngwa\".", meets: "Nzọụkwụ ise: gụọ ntụziaka, mee omume, were ule mgbe i zuru ike, gụọ ndụmọdụ, gụghachi mmezigharị.", exceeds: "Ọ na-edepụtakwa mperi nke gị site n'omume na iwu ị ga-elele maka nke ọ bụla." },
      { name: "Ikpo okwu e lelere", objective: "O4", notYet: "E si na njikọ dị n'ozi họrọ ikpo okwu, ma ọ bụ e kwere ịkwụ ụgwọ.", meets: "E lelere ikpo okwu abụọ na ezi saịtị ha: isonye n'efu, obodo gị, otu e si akwụ ụgwọ.", exceeds: "Ọ gụnyekwara ịchọ \"scam\" maka nke ọ bụla na ndepụta ihe ịrịba ama aghụghọ ise n'okwu nke gị." },
      { name: "Iwu nchekwa data", objective: "O5", notYet: "Iwu adịghị, ma ọ bụ atụmatụ ahụ na-ekesa koodu, ID ma ọ bụ data ọrụ na chat.", meets: "Iwu atọ doro anya: akaụntụ, ID na koodu, na data ọrụ.", exceeds: "E gbanyela ịbanye nzọụkwụ abụọ, iwu ndị ahụ na-ekwukwa ihe a ga-eme ma ọ bụrụ na mmadụ arịọ koodu." },
      { name: "Ndekọ ụgwọ na atụmatụ", objective: "O6", notYet: "Enweghị ndekọ, ma ọ bụ ndekọ ahụ na-agụ naanị oge a kwụrụ ụgwọ.", meets: "Ndekọ na-agụ nkeji niile, usoro ezi ụgwọ kwa elekere, na atụmatụ izu 4 nwere ụbọchị.", exceeds: "Ọ na-atụnyekwa nsonaazụ ya na nhọrọ ọzọ ma kpọọ aha otu nka ị ga-azụlite maka ọrụ ụgwọ ya ka mma." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gafere ule ntozu n'ezi ikpo okwu n'efu n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe kọrọ na ha kwụrụ ụgwọ ma ọ bụ tinye ego maka \"ọrụ ịntanetị\" mgbe ihe ọmụmụ a gasịrị (ebumnuche: ọ dịghị onye)",
      "Ndị na-amụ ihe nwere ike ikwu ezi ụgwọ ha kwa elekere site na ndekọ nke ha na nsochi ụbọchị 30",
      "Ndị na-amụ ihe gara n'ọrụ ụgwọ ya ka mma (onye nyocha, ọrụ ndị ọkachamara, ma ọ bụ ọrụ n'ụlọ ọrụ data) n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị (omume na-arụ ọrụ n'akwụkwọ)",
      "Akwụkwọ na mkpịsị ode maka omume ịkpọ aha, ndepụta ihe ịrịba ama aghụghọ na ndekọ ụgwọ",
      "Akaụntụ email nwere ịbanye nzọụkwụ abụọ",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ. Wee mee omume ịkpọ aha dị ka otu ma tụnyere azịza: esemokwu bụ ụzọ kacha mma iji kụzie ihe ndị dị n'oke.",
      "Weta ezi ozi aghụghọ (e wepụrụ aha na nọmba) ma kwe ka otu ahụ chọta ihe ịrịba ama ya.",
      "Atụla aro otu ikpo okwu dị ka ego e ji n'aka. Ikpo okwu na-agbanwe ma na-anabata obodo dị iche iche; ndị na-amụ ihe na-elele peeji nke ọ bụla n'onwe ya.",
      "Anakọtala okwuntughe, koodu ma ọ bụ akwụkwọ ID ndị na-amụ ihe mgbe ọ bụla, arịọkwala ha ka ha debanye aha n'oge nnọkọ ma ọ bụrụ na ha adịghị njikere.",
      "Kwuo eziokwu banyere ụgwọ. Nyere ndị na-amụ ihe aka ịtụnyere obere ọrụ na nhọrọ dị n'obodo na ọzụzụ maka ọrụ ụgwọ ya ka mma.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
