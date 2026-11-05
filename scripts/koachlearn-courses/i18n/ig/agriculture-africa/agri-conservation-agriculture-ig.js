"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-conservation-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CA = { name: "FAO: Ọrụ ugbo nchekwa ala (nkọwa ya na ụkpụrụ atọ ya)", url: "https://www.fao.org/conservation-agriculture/en/" };
const WOCAT_ZAI = { name: "WOCAT: Olulu ịkụ ihe zai ma ọ bụ tassa (Niger)", url: "https://qcat.wocat.net/en/wocat/technologies/view/permalink/1220" };
const ZIM_CA = { name: "Mmetụta ọrụ ugbo nchekwa ala n'ọka ubi na mpaghara kpọrọ nkụ na Zimbabwe (Experimental Agriculture)", url: "https://www.cambridge.org/core/product/36E50D9D434ADE25762F6D8E4E185FB7" };
const CIMMYT_ZM = { name: "CIMMYT: Nnwale ọrụ ugbo nchekwa ala n'ubi ndị ọrụ ugbo na Zambia (olulu, ripping, ịkụ ozugbo na ịkọ ala, 2006-2015)", url: "https://hdl.handle.net/11529/10825" };
const PCPB = { name: "Pest Control Products Board, Kenya (ngwaahịa e debanyere aha)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "NAFDAC, Nigeria (ọgwụ ugbo e debanyere aha)", url: "https://www.nafdac.gov.ng" };
const EPA_GH = { name: "Environmental Protection Agency, Ghana (ndebanye aha ọgwụ ahụhụ)", url: "https://www.epa.gov.gh" };
const FAO_SOM = { name: "FAO: Mkpa ihe ndụ rere ure dị n'ala (soil organic matter) bara", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };

module.exports = {
  id: "agri-conservation-agriculture-ig",
  lang: "ig",
  translationOf: "agri-conservation-agriculture",
  category: "Agriculture (Africa)",
  name: "Ọrụ Ugbo Nchekwa Ala maka Oge Ọkọchị",
  skills: "Iji ụkpụrụ atọ nke ọrụ ugbo nchekwa ala, Igwu olulu ịkụ ihe na olulu zai, Ịhọrọ ripping ma ọ bụ ịkụ ozugbo, Ilekọta ihe mkpuchi ala, Ịchịkwa ahịhịa n'ekoghị ala, Ịhazi oge ubi na oge mgbanwe",
  outcome: "ịhazi ma malite otu oge ọrụ ugbo nchekwa ala n'otu ubi: otu ị ga-esi kwado ala n'ekoghị ya, kpuchie ya, gbanwee ihe ọkụkụ, chịkwaa ahịhịa, na ngwaọrụ na ụbọchị ị ga-eji, ya na obere ubi ntụnyere iji soro nsonaazụ n'afọ mgbanwe.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị na-arụ ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ndụmọdụ ugbo (extension) n'akụkụ kpọrọ nkụ nke Kenya, Nigeria, Ghana, Burkina Faso, Senegal na Africa niile, ebe mmiri ozuzo na-adị mkpụmkpụ, oge ọkọchị n'etiti udu mmiri na-adịkarị, ịkọ ala na-ahapụkwa ala n'efu, sie ike ma kpọọ nkụ.",
    "Isi 1 na-akọwa ụkpụrụ atọ nke ọrụ ugbo nchekwa ala dị ka FAO si kọwaa ha, ma gosi otu esi akwado ala n'ekoghị ya: olulu ịkụ ihe, olulu zai, ripping na ịkụ ozugbo. Isi 2 na-ekwu maka ikpuchi ala na ihe mkpuchi (mulch), ịchịkwa ahịhịa n'ekoghị ala, ngwaọrụ na oge maka otu oge ubi, ihe ị ga-atụ anya n'afọ ụkọ mmiri, na otu esi agafe oge mbụ ole na ole.",
    "A na-akụzi ịgba mmiri n'ubi na ịchekwa mmiri ozuzo n'ihe ọmụmụ \"Ịgba Mmiri n'Ubi na Ijikwa Mmiri\", na isi ihe gbasara kompost na ihe mkpuchi n'ihe ọmụmụ \"Ahụike Ala na Ọmụmụ Ya\"; ihe ọmụmụ a anaghị ekwughachi ha. Malite n'otu ubi ma debe obere ubi a kọrọ akọ n'akụkụ ya iji tụnyere. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ n'ala nke gị."
  ],
  finalTask: "Dee atụmatụ otu oge ọrụ ugbo nchekwa ala maka otu ubi (ma ọ bụ ọmụmaatụ: 1 acre nke ọka na akidi na Machakos, 2 hectare nke sorghum n'ebe ugwu Ghana, ma ọ bụ 1 hectare nke millet na ahụekere na Central Plateau nke Burkina Faso): eserese ubi ahụ; otu ị ga-esi kwado ya n'ekoghị ala (olulu, olulu zai, ripping ma ọ bụ ịkụ ozugbo) na ihe kpatara ya; otu ị ga-esi kpuchie opekata mpe pasent 30 nke ala ahụ; ihe ọkụkụ ahụ na mgbanwe ma ọ bụ ịgwakọta ihe ọkụkụ; atụmatụ ahịhịa gị; kalenda ọnwa n'ọnwa nke ọrụ, ngwaọrụ na ego ọ ga-efu; na otu ị ga-esi tụnyere ya na obere ubi a kọrọ akọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị na-arụ ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ndụmọdụ ugbo n'ebe ugbo kpọrọ nkụ n'Africa (Kenya, Nigeria, Ghana na Sahel ebe a na-asụ French), ndị na-akụ ọka, sorghum, millet, akidi, agwa na ahụekere, ọtụtụ mgbe ya na ehi ma ọ bụ ewu na-ata ihe fọdụrụ n'ubi.",
    startingPoint: "Ha na-akwado ala site n'ịkọ ya na ehi, traktọ ma ọ bụ ọgụ, ọtụtụ mgbe ha na-akpọ ihe fọdụrụ n'ubi ọkụ ma ọ bụ hapụ anụ ka ha taa ya. Ọtụtụ anụla maka olulu zai ma ọ bụ olulu ịkụ ihe, mana ha emebeghị otu oge ọrụ ugbo nchekwa ala zuru ezu ma ọ bụ hazie maka ahịhịa na esemokwu gbasara ihe fọdụrụ n'ubi na-eso ya.",
    gap: "Ịkọ ala na ala dị n'efu na-emefu mmiri ozuzo dị ụkọ ma na-ebute mbuze ala, ịkọ ala n'oge na-adịghị na-egbukwa oge ịkụ ihe. Ndị na-amụ ihe chọrọ ụzọ bara uru isi rụọ ọrụ ugbo n'enweghị ịkpasu ala nke ukwuu, na mkpuchi na mgbanwe ihe ọkụkụ karịa, ịhazi ngwaọrụ, ọrụ aka na oge, na ịnọgide na ya n'oge mbụ mgbe ahịhịa na-aba ụba ma nsonaazụ adịghị otu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ọrụ aka na ngwaọrụ: ọgụ aka, ehi ma ọ bụ traktọ a gbaziri; igwu olulu bụ ọrụ siri ike",
      "Ihe fọdụrụ n'ubi: anụmanụ na-ata nri n'ubi mgbe owuwe ihe ubi gasịrị dị ka omenala obodo si dị",
      "Nchekwa ọgwụ: ọgwụ ahịhịa naanị ma ọ bụrụ na e debanyere ya aha na mba ahụ, jiri ya otu akwụkwọ dị na karama ya si kwuo, ma yiri uwe nchekwa",
      "Oge: nkuzi nkeji 4 ruo 6; nsonaazụ na-eto n'ọtụtụ oge ubi"
    ],
    prerequisites: "Ọ dịghị. \"Ahụike Ala na Ọmụmụ Ya\" na \"Ọrụ Ugbo Nke Kwadoro Maka Mgbanwe Ihu Igwe\" bụ ihe mmụta nkwado bara uru."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-ele otu ubi ma ọ bụ nkọwa ya", action: "ịmata ma ọ na-agbaso nke ọ bụla n'ime ụkpụrụ atọ nke ọrụ ugbo nchekwa ala", standard: "na-akpọ aha atọ ahụ niile dị ka FAO si kọwaa ha, gụnyere mkpuchi ala opekata mpe pasent 30" },
    { id: "O2", condition: "N'otu ubi tupu udu mmiri", action: "ịkara ma gwuo olulu ịkụ ihe ma ọ bụ olulu zai nwere nsị anụmanụ ma ọ bụ kompost n'ime nke ọ bụla", standard: "n'ahịrị gafere mkpọda ala, gwuo n'oge ọkọchị" },
    { id: "O3", condition: "Mgbe ị maara ụdị ala gị, ọrụ aka, ike anụmanụ ma ọ bụ igwe, na mmiri ozuzo", action: "ịhọrọ n'etiti olulu, ripping na ịkụ ozugbo maka otu ubi", standard: "na-enye opekata mpe ihe abụọ mere i ji họrọ ya" },
    { id: "O4", condition: "Maka ubi a na-arụ ọrụ ugbo nchekwa ala", action: "ịhazi otu ị ga-esi kpuchie ala ma chịkwaa ahịhịa n'ekoghị ala", standard: "na-edobe mkpuchi opekata mpe pasent 30, na-ejikwa naanị ọgwụ ahịhịa e debanyere aha otu akwụkwọ ya si kwuo, ma ọ bụrụ na i jiri ya" },
    { id: "O5", condition: "Maka otu oge ubi n'otu ubi", action: "ide kalenda nke ọrụ ọ bụla nke ọrụ ugbo nchekwa ala ya na ọnwa ya, ngwaọrụ ya na ego ọ ga-efu", standard: "site na nkwadebe oge ọkọchị ruo owuwe ihe ubi na ilekọta ihe fọdụrụ n'ubi" },
    { id: "O6", condition: "N'oge mbụ nke ọrụ ugbo nchekwa ala", action: "itụnyere obere ubi ọrụ ugbo nchekwa ala na obere ubi a kọrọ akọ", standard: "na-edekọ ihe ubi mịrị, ụbọchị ọrụ na ego e mefuru maka ha abụọ n'oge ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụkpụrụ na ịkwado ala n'ekoghị ya",
      lessons: [
        {
          title: "Ụkpụrụ atọ nke ọrụ ugbo nchekwa ala",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mata ma otu ubi na-agbaso nke ọ bụla n'ime ụkpụrụ atọ nke ọrụ ugbo nchekwa ala.",
          text: [
            "Ọrụ ugbo nchekwa ala (conservation agriculture, CA) bụ ụzọ ọrụ ugbo na-echebe ala ka o jide ọtụtụ n'ime obere mmiri ozuzo na-ezo. FAO kọwara ụkpụrụ atọ na-arụkọ ọrụ ọnụ.",
            "1. Ịkpasu ala obere: ọ dịghị ịkọ ala. Mkpụrụ na fatịlaịza na-aba n'ala site n'obere oghere, olulu ma ọ bụ ahịrị dị warara (rip lines), a hapụ ala fọdụrụ otu o si dị. 2. Mkpuchi ala mgbe niile: hapụ ihe fọdụrụ n'ubi ma ọ bụ ihe ọkụkụ mkpuchi n'elu ala, na-ekpuchi opekata mpe pasent 30 nke ala, afọ niile. 3. Ịgbanwe ihe ọkụkụ: gbanwee ma ọ bụ gwakọta opekata mpe ihe ọkụkụ atọ dị iche iche ka oge na-aga, dịka ọmụmaatụ ọka, akidi na sorghum, ọ bụghị ọka kwa afọ.",
            "Ime naanị otu na-enyere obere aka; ime atọ ahụ ọnụ na-eweta ezi uru. Ịkọ ala n'enweghị mkpuchi na-eme ka ala kpọọ nkụ; mkpuchi n'enweghị mgbanwe ihe ọkụkụ na-eme ka ahụhụ baa ụba; ịghara ịkọ ala ma hapụ ala n'efu na-eme ka ala kpụkọọ n'elu, mmiri ozuzo agbapụ. N'ebe kpọrọ nkụ, uru kacha ukwuu bụ mmiri: ala e kpuchiri, nke a na-akpasughị, na-ekwe ka mmiri ozuzo banye n'ime ya, anwụ anaghịkwa ewepụ ya nke ukwuu."
          ],
          words: [["Ọrụ ugbo nchekwa ala (CA)", "ọrụ ugbo na-akpasu ala obere, na-ekpuchi ala mgbe niile, na-agbanwekwa ihe ọkụkụ."], ["Ịkọ ala (tillage)", "ịtụgharị ma ọ bụ ịgbaji ala, dịka ọmụmaatụ site n'iji plough ma ọ bụ igwu ala."], ["Ihe fọdụrụ n'ubi (crop residues)", "osisi, akwụkwọ na mkpokoro na-afọdụ mgbe owuwe ihe ubi gasịrị."], ["Mkpụkọ ala (crust)", "akpụkpọ siri ike na-etolite n'elu ala dị n'efu mgbe mmiri zochara, na-egbochi mmiri ịbanye n'ime ala."]],
          slides: [
            { title: "Ụkpụrụ atọ (FAO)", bullets: ["1. Ịkpasu ala obere: ọ dịghị ịkọ ala", "2. Mkpuchi ala mgbe niile: opekata mpe pasent 30", "3. Ịgbanwe ihe ọkụkụ: opekata mpe ihe ọkụkụ atọ"] },
            { title: "Kpasuo naanị ebe ị na-akụ ihe", bullets: ["Obere oghere, olulu ma ọ bụ rip lines", "Hapụ ala fọdụrụ otu o si dị"] },
            { title: "Kpuchie ma gbanwee", bullets: ["Ihe fọdụrụ n'ubi ma ọ bụ ihe ọkụkụ mkpuchi n'elu, afọ niile", "Dịka ọmụmaatụ: ọka, wee akidi, wee sorghum"] },
            { title: "Atọ ahụ ọnụ", bullets: ["Naanị otu na-enyere obere aka", "Ọnụ: mmiri ozuzo ka ukwuu na-abanye ma na-anọ", "Uru kacha ukwuu n'ebe kpọrọ nkụ bụ mmiri"] }
          ],
          sources: [FAO_CA],
          tryIt: "Jee ije n'otu ubi gị. Maka ụkpụrụ ọ bụla, dee ee, ntakịrị ma ọ bụ mba: E kọrọ ya akọ? Ole n'ime ala ahụ ka e kpuchiri (chee ya na pasent)? Ihe ọkụkụ dị iche iche ole tolitere ebe ahụ n'oge ubi atọ gara aga? Gbaa ụkpụrụ kacha adịghị ike gburugburu.",
          youCanNow: "ịkpọ aha ụkpụrụ atọ nke ọrụ ugbo nchekwa ala ma lelee otu ubi n'ụkpụrụ ọ bụla.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ otu n'ime ụkpụrụ atọ FAO nke ọrụ ugbo nchekwa ala?", options: ["Ịkọ ala nke ọma n'ime n'oge ọ bụla", "Ịkpọ ihe fọdụrụ n'ubi ọkụ iji mee ka ubi dị ọcha", "Mkpuchi ala mgbe niile opekata mpe pasent 30", "Ịkụ otu ihe ọkụkụ ahụ kwa afọ"], answer: 2, why: "FAO depụtara ịkpasu ala obere, mkpuchi ala mgbe niile (opekata mpe pasent 30) na ịgbanwe ihe ọkụkụ." },
            { objective: "O1", q: "Onye ọrụ ugbo kwụsịrị ịkọ ala mana ọ na-ahapụ ala n'efu ma na-akụ ọka kwa afọ. Gịnị fọdụrụ?", options: ["Mkpuchi ala na ịgbanwe ihe ọkụkụ", "Ọ dịghị ihe; ọ bụ CA zuru ezu", "Ịkọ ala karịa", "Ịkpọ ọkụ karịa"], answer: 0, why: "N'enweghị mkpuchi na mgbanwe ihe ọkụkụ, naanị ịghara ịkọ ala na-eweta obere uru." }
          ]
        },
        {
          title: "Olulu ịkụ ihe na olulu zai",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kaa ma gwuo olulu ịkụ ihe ma ọ bụ olulu zai nwere nsị anụmanụ n'ime nke ọ bụla, tupu udu mmiri.",
          text: [
            "Olulu ịkụ ihe (planting basins) na olulu zai bụ obere olulu e ji aka gwuo ebe a na-akụ ihe ọkụkụ. Naanị olulu ahụ ka a na-akpasu; ala dị n'etiti ha na-anọ n'okpuchi. Olulu ọ bụla na-ejide mmiri ozuzo ma na-edobe nsị anụmanụ ma ọ bụ kompost n'ebe mgbọrọgwụ dị.",
            "Olulu zai sitere n'aka ndị ọrụ ugbo na Burkina Faso na Niger, ndị ji ha weghachite ala siri ike, kpụkọrọ akpụkọ ka ọ mịa millet na sorghum ọzọ. WOCAT kọwara olulu sara mbara ihe dị ka 30 ruo 40 cm, miri emi 10 ruo 15 cm, n'ahịrị a gbanwere agbanwe gafere mkpọda ala, ihe dị ka 10,000 n'otu hectare, nwere nsị anụmanụ ma ọ bụ kompost n'ime nke ọ bụla. Olulu ịkụ ihe a na-eji na ndịda na ọwụwa anyanwụ Africa yiri ha: obere olulu nhata n'ahịrị, e gwuru n'otu oghere ahụ kwa afọ ka ị laghachi n'otu ebe ahụ.",
            "Gwuo ha n'oge ọkọchị mgbe owuwe ihe ubi gasịrị, mgbe ọrụ ndị ọzọ dị obere, ka i nwee ike ịkụ ihe na mmiri ozuzo mbụ dị mma kama ichere ịkọ ala. Tinye ala si n'olulu ahụ n'akụkụ ala mkpọda (downhill) ka o jidekwuo mmiri. Tinye otu ma ọ bụ aka abụọ nke nsị anụmanụ ma ọ bụ kompost n'olulu ọ bụla ma kpuchie ya nwayọọ. Jụọ onye ndụmọdụ ugbo gị oghere a na-eji maka ihe ọkụkụ gị n'obodo gị.",
            "Ọ bụ ọrụ siri ike, karịsịa n'afọ mbụ. Gwuo otu akụkụ ubi ahụ kwa izu, kerịta ọrụ n'otu otu, ma jiri otu olulu ahụ ọzọ n'oge ubi ndị ọzọ, nke na-adị ọsọ ọsọ karịa."
          ],
          steps: ["Họrọ ubi ahụ ma kaa ahịrị gafere mkpọda ala site n'eriri ma ọ bụ osisi.", "Kaa ebe olulu ga-adị n'oghere onye ndụmọdụ ugbo kwuru maka ihe ọkụkụ gị.", "Gwuo n'oge ọkọchị; tụkọta ala n'akụkụ ala mkpọda.", "Tinye nsị anụmanụ ma ọ bụ kompost n'olulu ọ bụla ma kpuchie ya nwayọọ.", "Hapụ ala dị n'etiti olulu ka ọ nọrọ n'okpuchi.", "Kụọ ihe n'olulu ndị ahụ na mmiri ozuzo mbụ dị mma."],
          words: [["Olulu ịkụ ihe (planting basin)", "obere olulu e ji aka gwuo ebe mkpụrụ na nsị anụmanụ na-aba, na-ahapụ ala fọdụrụ ka a ghara ịkpasu ya."], ["Olulu zai", "olulu ịkụ ihe e jupụtara na nsị anụmanụ ma ọ bụ kompost, nke ndị ọrụ ugbo na Burkina Faso na Niger buru ụzọ jiri weghachite ala kpụkọrọ akpụkọ."], ["Gafere mkpọda ala (across the slope)", "n'ogologo ahịrị ala nhata (contour), ka ahịrị jide mmiri kama ime ka ọ gbadaa ugwu."]],
          slides: [
            { title: "Obere olulu, uru ukwuu", bullets: ["Kpasuo naanị olulu ahụ", "Ọ na-ejide mmiri ozuzo ebe mgbọrọgwụ dị", "Ọ na-edobe nsị anụmanụ n'akụkụ ihe ọkụkụ"] },
            { title: "Olulu zai (Burkina Faso, Niger)", bullets: ["Ihe dị ka 30-40 cm n'obosara, 10-15 cm n'omimi (WOCAT)", "Ahịrị a gbanwere agbanwe gafere mkpọda ala", "Nsị anụmanụ ma ọ bụ kompost n'ime nke ọ bụla"] },
            { title: "Oge", bullets: ["Gwuo n'oge ọkọchị mgbe owuwe ihe ubi gasịrị", "Kụọ na mmiri ozuzo mbụ dị mma", "Ọ dịghị ichere ịkọ ala"] },
            { title: "Mee ka ọrụ ahụ dị mfe", bullets: ["Otu akụkụ ubi kwa izu", "Kerịta ọrụ n'otu otu", "Jiri otu olulu ahụ ọzọ n'oge ubi na-esote"] }
          ],
          sources: [WOCAT_ZAI, FAO_CA],
          tryIt: "N'obere akụkụ otu ubi (dịka ọmụmaatụ 10 m na 10 m), kaa ahịrị gafere mkpọda ala ma gwuo olulu ise ma ọ bụ olulu zai ise. Gụọ oge nke ọ bụla were, tinye nsị anụmanụ, ma gbakọọ ụbọchị ole ubi ahụ niile ga-ewe.",
          youCanNow: "ịkara ma gwuo olulu ịkụ ihe ma ọ bụ olulu zai nwere nsị anụmanụ, gafere mkpọda ala, tupu udu mmiri.",
          quickCheck: [
            { objective: "O2", q: "Olee mgbe i kwesịrị igwu olulu ịkụ ihe ma ọ bụ olulu zai?", options: ["Mgbe ihe ọkụkụ puputara", "Naanị mgbe mmiri na-ezo nke ukwuu", "N'oge owuwe ihe ubi, n'elu ihe ọkụkụ", "N'oge ọkọchị tupu udu mmiri"], answer: 3, why: "Igwu ya n'oge na-ekwe ka ị kụọ ihe na mmiri ozuzo mbụ dị mma ma na-ekesa ọrụ ahụ." },
            { objective: "O2", q: "Ebee ka ala si n'olulu zai kwesịrị ịga?", options: ["Tụpụ ya ebe dị anya", "N'akụkụ ala mkpọda nke olulu ahụ, ka o jidekwuo mmiri", "Laghachi n'olulu ahụ ozugbo", "N'ụzọ"], answer: 1, why: "Obere mkpọ ala n'akụkụ ala mkpọda na-enyere olulu ọ bụla aka ijide mmiri na-asọ asọ." }
          ]
        },
        {
          title: "Ripping na ịkụ ozugbo",
          objectives: ["O3"],
          minutes: 5,
          goal: "Họrọ n'etiti olulu, ripping na ịkụ ozugbo maka otu n'ime ubi gị.",
          text: [
            "Olulu dabara ndị ọrụ ugbo ji ọgụ aka n'obere ubi. Ọ bụrụ na i nwere ehi ma ọ bụ nwee ike ịgbazite traktọ, ripper ma ọ bụ igwe ịkụ ozugbo nwere ike ikpuchi ala buru ibu karịa na ọrụ aka dị obere.",
            "Ripper bụ ezé dị warara, nke a na-adọbakarị n'osisi plough ehi n'ọnọdụ mouldboard, nke na-emeghe oghere dị warara (rip line) maka mkpụrụ na fatịlaịza, na-ahapụ ala dị n'etiti ahịrị n'okpuchi. Ripping n'oge ọkọchị nwekwara ike ịgbaji akwa ala siri ike dị n'okpuru elu ala (plough pan) ka mgbọrọgwụ na mmiri gbadaa n'ime. Ịkụ ozugbo (direct seeding) na-etinye mkpụrụ ozugbo n'ime ihe fọdụrụ n'ubi site na jab planter (ngwaọrụ aka) ma ọ bụ igwe ịkụ ihe anụmanụ ma ọ bụ traktọ na-adọkpụ, n'emegheghị ahịrị ọ bụla.",
            "Kedu nke ị ga-ahọrọ? Chee banyere ọrụ aka gị (olulu chọrọ nke kacha ukwuu), ike ịdọkpụ (ripping chọrọ ehi ma ọ bụ traktọ), ala gị (ala siri ike, kpụkọrọ akpụkọ na-erite uru n'olulu ma ọ bụ ripping), na ịdị ukwuu ubi ahụ. Nnwale n'ofe Zambia site na 2006 ruo 2015 tụnyere olulu, ripping na ịkụ ozugbo na ịkọ ala na mouldboard plough n'ezi ugbo. Jụọ onye ndụmọdụ ugbo gị ma ọ bụ ọrụ CA ebe ị ga-ahụ ngwaọrụ ndị a ka ha na-arụ ọrụ, na ma enwere ike ịgbazite ha."
          ],
          steps: ["Dee ịdị ukwuu ubi gị, ọrụ aka gị na ma i nwere ike inweta ehi ma ọ bụ traktọ.", "Lelee ala: ọ nwere akwa siri ike ma ọ bụ mkpụkọ?", "Obere ubi na ọrụ aka: olulu.", "Ehi ma ọ bụ traktọ na ala siri ike: ripping.", "Ihe fọdụrụ n'ubi dị mma na igwe ịkụ ihe dị: ịkụ ozugbo.", "Jụọ onye ndụmọdụ ugbo ebe ị ga-ahụ ma gbazite ngwaọrụ ndị ahụ."],
          words: [["Ripper", "ezé dị warara ehi ma ọ bụ traktọ na-adọkpụ, nke na-emeghe oghere maka mkpụrụ n'atụgharịghị ala."], ["Plough pan", "akwa ala siri ike dị n'okpuru omimi a na-akọ ala, nke na-egbochi mgbọrọgwụ na mmiri."], ["Jab planter", "ngwaọrụ aka a na-amanye n'ala iji tinye mkpụrụ (na mgbe ụfọdụ fatịlaịza) n'ime ihe fọdụrụ n'ubi."], ["Ịkụ ozugbo (direct seeding)", "ịkụ ihe ozugbo n'ala a na-akpasughị na n'ime ihe fọdụrụ n'ubi."]],
          slides: [
            { title: "Ụzọ atọ n'ekoghị ala", bullets: ["Olulu: ọgụ aka, obere ubi", "Ripping: ehi ma ọ bụ traktọ na-emeghe rip lines", "Ịkụ ozugbo: jab planter ma ọ bụ igwe ịkụ ihe"] },
            { title: "Ripping", bullets: ["Ezé dị warara n'osisi plough", "O nwere ike ịgbaji plough pan siri ike", "Ala dị n'etiti ahịrị na-anọ n'okpuchi"] },
            { title: "Otu esi ahọrọ", bullets: ["Ọrụ aka: olulu chọrọ nke kacha ukwuu", "Ike ịdọkpụ: ehi ma ọ bụ traktọ?", "Ịdị ike ala na ịdị ukwuu ubi"] },
            { title: "Buru ụzọ hụ ya", bullets: ["Nnwale Zambia: olulu, ripping, ịkụ ozugbo", "Jụọ onye ndụmọdụ ugbo ebe ị ga-ahụ ngwaọrụ ndị ahụ", "Ị nwere ike ịgbazite ha?"] }
          ],
          sources: [CIMMYT_ZM, FAO_CA],
          tryIt: "Maka ubi ị họọrọ, dee ịdị ukwuu ubi ahụ, ọrụ aka gị, ma i nwere ike inweta ehi ma ọ bụ traktọ, na otu ala ahụ si sie ike. Họrọ olulu, ripping ma ọ bụ ịkụ ozugbo ma dee ihe abụọ mere i ji họrọ ya.",
          youCanNow: "ịhọrọ n'etiti olulu, ripping na ịkụ ozugbo maka otu ubi, ya na ihe kpatara ya.",
          quickCheck: [
            { objective: "O3", q: "Onye ọrụ ugbo nwere hectare 3, ehi abụọ na ala siri ike. Kedu ụzọ kacha dabara?", options: ["Ripping na ripper ehi na-adọkpụ", "Olulu e ji aka gwuo na hectare 3 niile n'otu izu", "Ịkọ ala n'ime ugboro abụọ", "Ịghara ịkụ ihe ọ bụla"], answer: 0, why: "Ehi na ala siri ike dabara ripping, nke na-ekpuchi ala buru ibu karịa olulu aka." },
            { objective: "O3", q: "Gịnị bụ jab planter?", options: ["Plough traktọ", "Ngwaọrụ aka na-etinye mkpụrụ n'ime ihe fọdụrụ n'ubi", "Igwe na-agba mmiri", "Ụdị fatịlaịza"], answer: 1, why: "Jab planter na-ekwe ka ị kụọ ihe ozugbo n'ala e kpuchiri, nke a na-akpasughị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụkpụrụ na ịkwado ala n'ekoghị ya",
        questions: [
          { objective: "O1", q: "Dị ka FAO si kwuo, ihe ọkụkụ dị iche iche ole ka mgbanwe ma ọ bụ ngwakọta CA kwesịrị inwe?", options: ["Otu", "Abụọ ka ọ kacha", "Opekata mpe atọ", "Ọ dịghị"], answer: 2, why: "Ụkpụrụ FAO nke ịgbanwe ihe ọkụkụ na-ekwu maka opekata mpe ihe ọkụkụ atọ dị iche iche." },
          { objective: "O1", q: "Gịnị mere ala e kpuchiri, nke a na-akpasughị, ji baa uru karịsịa n'ebe kpọrọ nkụ?", options: ["Ọ na-eme ka ala dị oyi n'oge oyi", "Mmiri ozuzo ka ukwuu na-abanye, anwụ anaghịkwa ewepụ ya nke ukwuu", "Ọ na-akwụsị ahịhịa niile ruo mgbe ebighị ebi", "Ọ chọghị mkpụrụ"], answer: 1, why: "Mkpuchi na ịghara ịkọ ala na-eme ka mmiri banye n'ala ma belata mmiri na-ekpo ọkụ apụ." },
          { objective: "O2", q: "Olulu zai buru ụzọ gbasaa n'etiti ndị ọrụ ugbo na mba ndị ole?", options: ["Burkina Faso na Niger", "Egypt na Libya", "South Africa na Namibia", "Naanị Kenya na Uganda"], answer: 0, why: "Olulu zai sitere n'aka ndị ọrụ ugbo na Sahel, karịsịa Burkina Faso na Niger." },
          { objective: "O2", q: "Gịnị na-aba n'olulu zai ma ọ bụ olulu ịkụ ihe ọ bụla tupu ịkụ ihe?", options: ["Ọ dịghị ihe", "Plastik", "Naanị ntụ si n'ihe fọdụrụ n'ubi a kpọrọ ọkụ", "Nsị anụmanụ ma ọ bụ kompost"], answer: 3, why: "Nsị anụmanụ ma ọ bụ kompost n'olulu na-azụ ihe ọkụkụ ozugbo n'ebe mgbọrọgwụ dị." },
          { objective: "O3", q: "Gịnị ọzọ ka ripping n'oge ọkọchị nwere ike ime karịa imeghe rip lines?", options: ["Ịgba ihe ọkụkụ mmiri", "Ịgbaji plough pan siri ike ka mgbọrọgwụ na mmiri gbadaa n'ime", "Igbu ahụhụ niile", "Ịnọchi fatịlaịza"], answer: 1, why: "Ripper nwere ike ịgbaji akwa ala siri ike nke ịkọ ala na-ahapụkarị." }
        ]
      }
    },
    {
      name: "Isi 2: Oge ubi na oge mgbanwe",
      lessons: [
        {
          title: "Ilekọta ihe mkpuchi na ihe fọdụrụ n'ubi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hazie otu ị ga-esi kpuchie opekata mpe pasent 30 nke otu ubi afọ niile.",
          text: [
            "Mkpuchi bụ ụkpụrụ ndị ọrụ ugbo na-ahụ na ọ kacha sie ike, n'ihi na ihe fọdụrụ n'ubi nwere ọrụ ndị ọzọ: anụmanụ na-ata nri n'ubi mgbe owuwe ihe ubi gasịrị, a na-ejikwa osisi ọka maka nkụ, ngere na iwu ụlọ. N'ebe kpọrọ nkụ, akụ (termites) nwekwara ike iri ihe fọdụrụ n'elu ala.",
            "Hazie maka ya. Kpebie ole n'ime ihe fọdụrụ n'ubi ga-anọ n'ubi na ole ga-aga nye anụmanụ. Bekọọ ma chekwaa ụfọdụ osisi ọka a mịrị amị (stover) maka nri oge ọkọchị ka a ghara ịhapụ anụmanụ n'ubi CA. Gwa ndị agbata obi na ndị na-azụ anụ okwu banyere ubi ahụ: ụfọdụ obodo na-ekwekọrịta na anụmanụ agaghị ata nri n'ubi CA e kara akara, ma ọ bụ onye ọrụ ugbo na-eji ngere ndụ ma ọ bụ alaka osisi ogwu gbaa obere ubi gburugburu. Nweta mkpuchi site n'ebe ndị ọzọ: ịgwakọta akidi ma ọ bụ lablab, ahịhịa si n'akụkụ ubi, ma ọ bụ alaka a kpụchara n'osisi.",
            "Iji lelee mkpuchi, lee anya ozugbo n'otu square metre n'ọtụtụ ebe ma chee ole n'ime ala ị naghị ahụ. Ị chọrọ ka e kpuchie opekata mpe pasent 30 (FAO); karịa ka mma. Gbasaa ihe fọdụrụ n'ubi nhata, ọ bụghị n'ikpo, ma hapụ ha n'elu kama ili ha.",
            "Akpọla ihe fọdụrụ n'ubi ọkụ mgbe ọ bụla n'ubi CA. Ịkpọ ọkụ na-ewepụ mkpuchi na ihe ndụ rere ure (organic matter) ị na-ewulite."
          ],
          steps: ["Kpebie òkè ihe fọdụrụ n'ubi maka mkpuchi na maka nri anụmanụ.", "Bekọọ ma chekwaa nri ka anụmanụ ghara ịbanye n'ubi CA.", "Kwekọrịta na ndị agbata obi na ndị na-azụ anụ, ma ọ bụ gbaa ubi ahụ ngere.", "Tinye mkpuchi site n'ịgwakọta ihe ọkụkụ, ahịhịa akụkụ ubi ma ọ bụ alaka osisi.", "Lelee mkpuchi: lee anya n'otu square metre n'ọtụtụ ebe.", "Gbasaa ya nhata; akpọla ya ọkụ mgbe ọ bụla."],
          words: [["Ihe mkpuchi ala (mulch)", "ihe a gbasara n'elu ala iji kpuchie ma chebe ya."], ["Stover", "osisi na akwụkwọ ọka ma ọ bụ sorghum a mịrị amị mgbe owuwe ihe ubi gasịrị."], ["Ngere ndụ (live fence)", "ahịrị obere osisi ma ọ bụ osisi a kụrụ nso nso iji gbochie anụmanụ."]],
          slides: [
            { title: "Mkpuchi na ọrụ ndị ọzọ na-asọ mpi", bullets: ["Anụmanụ na-ata nri mgbe owuwe ihe ubi gasịrị", "Nkụ, ngere, iwu ụlọ", "Akụ (termites) n'ebe kpọrọ nkụ"] },
            { title: "Hazie ihe fọdụrụ n'ubi", bullets: ["Òkè maka mkpuchi na maka nri anụmanụ", "Chekwaa nri; gbochie anụmanụ", "Kwekọrịta na ndị na-azụ anụ ma ọ bụ gbaa ngere"] },
            { title: "Chọta mkpuchi ọzọ", bullets: ["Ịgwakọta akidi ma ọ bụ lablab", "Ahịhịa si n'akụkụ ubi", "Alaka a kpụchara n'osisi"] },
            { title: "Lelee: opekata mpe pasent 30", bullets: ["Lee anya n'otu square metre", "Gbasaa ya nhata, hapụ ya n'elu", "Akpọla ọkụ mgbe ọ bụla n'ubi CA"] }
          ],
          sources: [FAO_CA, FAO_SOM],
          tryIt: "Chee mkpuchi dị n'ubi ị họọrọ taa n'ebe atọ. Dee ebe mkpuchi ọzọ ga-esi bịa, ole stover ga-aga nye anụmanụ, na otu ị ga-esi gbochie anụmanụ n'ubi ahụ (nkwekọrịta, ngere ma ọ bụ nri e chekwara).",
          youCanNow: "ịhazi otu ị ga-esi kpuchie opekata mpe pasent 30 nke ubi CA, ma ka na-azụ anụmanụ gị.",
          quickCheck: [
            { objective: "O4", q: "Ehi ndị agbata obi gị na-ata ihe niile fọdụrụ n'ubi CA gị n'oge ọkọchị ọ bụla. Gịnị nwere ike inye aka?", options: ["Buru ụzọ kpọọ ihe fọdụrụ n'ubi ọkụ", "Kọọ ubi ahụ", "Kwekọrịta na ndị na-azụ anụ, gbaa ubi ahụ ngere, ma ọ bụ chekwaa nri ka anụmanụ ghara ịbịa", "Hapụ mkpuchi"], answer: 2, why: "Nkwekọrịta obodo, ngere na nri e chekwara na-echebe mkpuchi ahụ." },
            { objective: "O4", q: "Kedu otu ị ga-esi mara ma ubi nwere mkpuchi zuru ezu?", options: ["Gụọ ehi ndị ahụ", "Lee anya n'otu square metre n'ọtụtụ ebe ma chee òkè ala e zoro ezo", "Tụọ ihe ubi mịrị", "Tụọ mmiri ozuzo"], answer: 1, why: "Ịlele anya ngwa ngwa n'ọtụtụ ebe na-egosi ma mkpuchi ruru pasent 30." }
          ]
        },
        {
          title: "Ịchịkwa ahịhịa n'ekoghị ala",
          objectives: ["O4"],
          minutes: 5,
          goal: "Hazie ịchịkwa ahịhịa maka ubi CA n'ekoghị ala.",
          text: [
            "Ịkọ ala na-eli ahịhịa; n'enweghị ya, ahịhịa nwere ike ịba ụba n'oge mbụ. Nke a bụ isi ihe kpatara ndị ọrụ ugbo ji ahapụ CA, ya mere hazie ịwacha ahịhịa site na mbido.",
            "Wachaa ahịhịa n'oge na ọtụtụ mgbe: izu mbụ mgbe ihe ọkụkụ puputara kacha mkpa. Jiri ọgụ nwayọọ, na-akpụcha n'okpuru elu ala kama ịtụgharị ala, ma ọ bụ jiri aka hopụta ha. Ekwela ka ahịhịa mịa mkpụrụ mgbe ọ bụla; ahịhịa ọ bụla mịrị mkpụrụ na-agbakwunye puku kwuru puku mkpụrụ maka afọ na-abịa. Ihe mkpuchi na ihe ọkụkụ mkpuchi na-ekpuchi ala ndò ma na-egbochi ọtụtụ ahịhịa, ngwakọta ihe ọkụkụ jupụtara ejupụta na-ahapụkwa obere ohere. Mgbe ọtụtụ oge ubi nke ịwacha ahịhịa tupu ha amịa mkpụrụ gasịrị, mkpụrụ ahịhịa dị n'ala na-agwụ, ịwacha ahịhịa na-adịkwa mfe.",
            "Ụfọdụ ndị ọrụ ugbo CA na-ejikwa ọgwụ ahịhịa (herbicide). Ọ bụrụ na i jiri ya, jiri naanị ngwaahịa e debanyere aha na mba gị (na Kenya, lelee ndepụta Pest Control Products Board; na Nigeria, NAFDAC; na Ghana, Environmental Protection Agency), zụta ya n'aka ndị ahịa nwere ikike, ma soro akwụkwọ dị na karama ya kpọmkwem maka ihe ọkụkụ, oge na ọnụọgụ. Yiri uwe nchekwa, uwe aka (gloves) na akpụkpọ ụkwụ buru ibu (boots), gbochie ụmụaka na anụmanụ, ma agbala ya nso mmiri mgbe ọ bụla. Jụọ onye ndụmọdụ ugbo gị tupu ị malite."
          ],
          steps: ["Wachaa ahịhịa n'oge: izu mbụ mgbe ihe ọkụkụ puputara.", "Jiri ọgụ nwayọọ ma ọ bụ hopụta ya n'aka; atụgharịla ala.", "Ekwela ka ahịhịa mịa mkpụrụ mgbe ọ bụla.", "Jiri ihe mkpuchi, ihe ọkụkụ mkpuchi na ngwakọta jupụtara ejupụta kpuchie ahịhịa ndò.", "Ọ bụrụ na ị na-eji ọgwụ ahịhịa: ngwaahịa e debanyere aha, akwụkwọ ya, uwe nchekwa.", "Hazie ọrụ aka maka ịwacha ahịhịa tupu oge ubi amalite."],
          words: [["Mkpụrụ ahịhịa dị n'ala (weed seed bank)", "mkpụrụ ahịhịa ndị dị n'ime ala, na-eche oge ha ga-epupụta."], ["Ọgwụ ahịhịa (herbicide)", "ọgwụ na-egbu ahịhịa."], ["Ngwaahịa e debanyere aha (registered product)", "ọgwụ ahụhụ ma ọ bụ ọgwụ ahịhịa ndị ọchịchị mba ahụ kwadoro maka iji ya."]],
          slides: [
            { title: "Ahịhịa bụ ule ukwuu", bullets: ["Ha na-aba ụba n'oge mbụ", "Isi ihe kpatara ndị ọrụ ugbo ji akwụsị", "Hazie ịwacha ahịhịa site na mbido"] },
            { title: "Wachaa ahịhịa n'ekoghị ala", bullets: ["N'oge na ọtụtụ mgbe mgbe ihe ọkụkụ puputara", "Ọgụ nwayọọ ma ọ bụ ịhopụta n'aka", "Ekwela ka ahịhịa mịa mkpụrụ"] },
            { title: "Ka mkpuchi rụọ ọrụ ahụ", bullets: ["Ihe mkpuchi na ihe ọkụkụ mkpuchi na-ekpuchi ahịhịa ndò", "Ngwakọta jupụtara ejupụta na-ahapụ obere ohere", "Mkpụrụ ahịhịa dị n'ala na-agwụ ka oge na-aga"] },
            { title: "Ọgwụ ahịhịa? Naanị n'enweghị nsogbu", bullets: ["E debanyere aha: PCPB (KE), NAFDAC (NG), EPA (GH)", "Soro akwụkwọ ya kpọmkwem", "Uwe nchekwa; tere aka na mmiri na ụmụaka"] }
          ],
          sources: [PCPB, NAFDAC, EPA_GH, FAO_CA],
          tryIt: "Dee atụmatụ ahịhịa maka ubi gị: mgbe ị ga-awacha ahịhịa (izu ole mgbe ịkụ ihe gasịrị), ngwaọrụ ị ga-eji, onye ga-eme ya na ụbọchị ole ọ ga-ewe, na otu mkpuchi ma ọ bụ ngwakọta ihe ọkụkụ ga-esi nyere aka. Ọ bụrụ na ị na-eche maka ọgwụ ahịhịa, dee ebe ị ga-elele na e debanyere ya aha.",
          youCanNow: "ịhazi ịchịkwa ahịhịa maka ubi CA n'ekoghị ala, na-eji ọgwụ ahịhịa naanị n'enweghị nsogbu na n'ụzọ iwu kwadoro, ma ọ bụrụ na i jiri ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere na i kwesịghị ikwe ka ahịhịa mịa mkpụrụ n'ubi CA mgbe ọ bụla?", options: ["Mkpụrụ na-eme ka ihe ọkụkụ ghara ịtọ ụtọ", "Mkpụrụ ahịhịa bụ fatịlaịza dị mma", "Iwu machiri ya", "Ahịhịa ọ bụla mịrị mkpụrụ na-agbakwunye puku kwuru puku mkpụrụ maka afọ na-abịa"], answer: 3, why: "Igbochi ahịhịa ịmịa mkpụrụ na-eme ka mkpụrụ ahịhịa dị n'ala gwụ ka oge ubi na-aga." },
            { objective: "O4", q: "Nwanyị ọrụ ugbo na Kenya chọrọ iji ọgwụ ahịhịa n'ọka CA ya. Gịnị ka o kwesịrị ibu ụzọ lelee?", options: ["Na Pest Control Products Board debanyere ya aha na otu akwụkwọ ya si kwuo ka e jiri ya", "Na ọ bụ karama kacha dị ọnụ ala", "Na onye agbata obi masịrị ya", "Na o nweghị akwụkwọ"], answer: 0, why: "Naanị ngwaahịa e debanyere aha, e ji otu akwụkwọ ya si kwuo, ya na uwe nchekwa, dị mma ma kwekọọ n'iwu." }
          ]
        },
        {
          title: "Ngwaọrụ, oge, afọ ụkọ mmiri na oge mgbanwe",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Dee kalenda oge ubi nke ọrụ CA, ngwaọrụ na ego, ma hazie obere ubi ntụnyere.",
          text: [
            "Oge ubi CA na-amalite n'oge ọkọchị, ọ bụghị mgbe udu mmiri bịara. Kalenda a na-ahụkarị: mgbe owuwe ihe ubi gasịrị, debe ihe fọdụrụ n'ubi ma kwekọrịta maka ịta nri anụmanụ; n'oge ọkọchị, gwuo olulu ma ọ bụ jiri nke ochie ọzọ, ma ọ bụ mee ripping, ma tinye nsị anụmanụ; na mmiri ozuzo mbụ dị mma, kụọ ihe ozugbo (ọ dịghị ichere ịkọ ala); n'izu mbụ, wachaa ahịhịa n'oge na ọtụtụ mgbe; n'oge ubi, tinye ngwakọta ihe ọkụkụ ma ọ bụ ihe ọkụkụ mkpuchi; n'oge owuwe ihe ubi, hapụ ihe fọdụrụ n'ubi n'ubi ahụ ma hazie mgbanwe ihe ọkụkụ maka oge ubi na-esote. N'akụkụ ọrụ ọ bụla, dee ngwaọrụ ahụ (ọgụ, ripper, jab planter, igwe ịgba ọgwụ na uwe nchekwa) na ego ọ ga-efu, ma ọ bụ nke gị, nke ị gbaziri ego ma ọ bụ nke ị gbaziri n'efu.",
            "N'afọ ụkọ mmiri, isi uru CA na-egosi. Olulu na ihe mkpuchi na-ejide ma na-edobe mmiri karịa, ịkụ ihe n'oge kwesịrị ekwesị na-ejikwa mmiri ozuzo mbụ. Nyocha nke ọtụtụ nnwale n'akụkụ Zimbabwe kpọrọ nkụ chọpụtara na olulu ịkụ ihe mịrị ọka karịa ịkọ ala n'ihe karịrị ọkara nnwale ndị ahụ. Mana CA anaghị akara ịkọ ala kwa afọ, ọ pụkwaghị inyeghachi ihe ọ bụla ma ọ bụrụ na mmiri ezoghị ma ọlị.",
            "Tụọ anya oge mgbanwe. Ihe ubi mịrị nwere ike ịnọ otu ebe ma ọ bụ ọbụna ibelata n'oge ubi mbụ ma ọ bụ nke abụọ mgbe ahịhịa na-aba ụba, ala na-agbanwekwa; uru na-etokarị n'ọtụtụ oge ubi ka mkpuchi na ihe ndụ rere ure na-amụba. Malite n'otu ubi, debe obere ubi a kọrọ akọ n'akụkụ ya, ma dekọọ ihe ubi mịrị, ụbọchị ọrụ na ego e mefuru maka ha abụọ n'oge ubi ọ bụla. Kpee CA ikpe mgbe oge ubi atọ gasịrị, ọ bụghị otu."
          ],
          steps: ["Depụta ọrụ ọ bụla site n'owuwe ihe ubi ruo owuwe ihe ubi.", "Tinye nke ọ bụla n'otu ọnwa.", "Tinye ngwaọrụ ahụ na ma ọ bụ nke gị, ị ga-akwụ ụgwọ ịgbazite ya ma ọ bụ ịgbazite ya n'efu.", "Tinye ego ọ ga-efu na ụbọchị ọrụ.", "Kaa obere ubi ntụnyere a kọrọ akọ nke hara otu.", "Dekọọ ihe ubi mịrị, ọrụ aka na ego maka ha abụọ n'oge ubi ọ bụla; kpee ikpe mgbe oge ubi atọ gasịrị."],
          words: [["Oge mgbanwe (transition period)", "oge ubi mbụ mgbe ị gbanwere gaa CA, mgbe ahịhịa na-aba ụba, uru ka na-eto."], ["Obere ubi ntụnyere (comparison plot)", "obere ubi a na-arụ n'ụzọ ochie n'akụkụ obere ubi CA, ka e nwee ike itụnyere nsonaazụ n'ụzọ ziri ezi."], ["Ụbọchị ọrụ (labour day)", "otu onye na-arụ ọrụ otu ụbọchị; a na-eji ya atụ ọrụ ole otu ọrụ na-ewe."]],
          slides: [
            { title: "Oge ubi na-amalite n'ọkọchị", bullets: ["Mgbe owuwe ihe ubi gasịrị: debe ihe fọdụrụ, kwekọrịta maka ịta nri", "Oge ọkọchị: olulu ma ọ bụ ripping, nsị anụmanụ", "Mmiri ozuzo mbụ dị mma: kụọ ozugbo"] },
            { title: "Kalenda nwere ngwaọrụ na ego", bullets: ["Ọgụ, ripper, jab planter, uwe nchekwa", "Nke gị, ị gbaziri ego ka ọ bụ n'efu?", "Ego na ụbọchị ọrụ maka ọrụ ọ bụla"] },
            { title: "Afọ ụkọ mmiri", bullets: ["Olulu na ihe mkpuchi na-ejide mmiri karịa", "Zimbabwe: olulu karịrị ịkọ ala n'ihe karịrị ọkara nnwale", "Ọ bụghị kwa afọ; enweghị mmiri ozuzo = enweghị ihe ubi"] },
            { title: "Ịgafe oge mgbanwe", bullets: ["Ihe ubi mịrị nwere ike ibelata n'oge ubi 1 ruo 2", "Debe obere ubi a kọrọ akọ iji tụnyere", "Dekọọ ihe ubi mịrị, ọrụ aka, ego; kpee ikpe mgbe oge ubi 3 gasịrị"] }
          ],
          sources: [ZIM_CA, CIMMYT_ZM, FAO_CA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ CA nke otu oge ubi maka otu ubi, ya na eserese, ụzọ ịkwado ala na ihe kpatara ya, atụmatụ mkpuchi na ahịhịa, ihe ọkụkụ na mgbanwe ya, kalenda ọnwa n'ọnwa nke ọrụ, ngwaọrụ na ego, na ebe obere ubi ntụnyere a kọrọ akọ ga-adị.",
          youCanNow: "ịhazi oge ubi CA zuru ezu nwere ngwaọrụ, oge na ego, ma tụnyere ya n'ụzọ ziri ezi na ịkọ ala n'afọ mgbanwe.",
          quickCheck: [
            { objective: "O5", q: "Olee mgbe ọrụ maka oge ubi CA na-amalite?", options: ["Mgbe ihe ọkụkụ na-eme ifuru", "N'oge ọkọchị, mgbe owuwe ihe ubi ikpeazụ gasịrị", "Na mmiri ozuzo mbụ, site n'ịkọ ala", "N'owuwe ihe ọkụkụ na-esote"], answer: 1, why: "A na-eme olulu, ripping, nsị anụmanụ na atụmatụ ihe fọdụrụ n'ubi n'oge ọkọchị ka ị kụọ ihe na mmiri ozuzo mbụ." },
            { objective: "O6", q: "Obere ubi CA gị mịrị otu ihe ahụ obere ubi a kọrọ akọ mịrị n'oge ubi mbụ. Gịnị ka ị ga-eme?", options: ["Hapụ CA", "Kọọ obere ubi CA ahụ", "Kpọọ ihe fọdụrụ n'ubi ọkụ", "Nọgide na-edekọ opekata mpe oge ubi atọ tupu ị kpee ikpe"], answer: 3, why: "Uru na-eto n'ọtụtụ oge ubi; otu oge ubi dị ngwa nke ukwuu maka ikpe ikpe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Oge ubi na oge mgbanwe",
        questions: [
          { objective: "O4", q: "Gịnị ka i kwesịghị ime mgbe ọ bụla na ihe fọdụrụ n'ubi CA?", options: ["Gbasaa ha nhata", "Hapụ ha n'elu ala", "Kpọọ ha ọkụ", "Tinyekwuo ndị si n'akụkụ ubi"], answer: 2, why: "Ịkpọ ọkụ na-ewepụ mkpuchi na ihe ndụ rere ure CA dabere na ha." },
          { objective: "O4", q: "Kedu ụzọ ịwacha ahịhịa dabara CA?", options: ["Ịkọ ala ka ahịhịa banye n'okpuru", "Ịkpọ ubi niile ọkụ", "Ịwacha ahịhịa naanị n'oge owuwe ihe ubi", "Ọgụ nwayọọ ma ọ bụ ịhopụta n'aka n'oge na ọtụtụ mgbe"], answer: 3, why: "Ịwacha ahịhịa n'elu n'atụgharịghị ala na-edobe ịkpasu ala n'obere." },
          { objective: "O5", q: "Kedu ihe kwesịrị ịdị na kalenda oge ubi CA?", options: ["Gwuo olulu ma ọ bụ jiri nke ochie ọzọ n'oge ọkọchị, ya na ngwaọrụ na ego", "Kọọ ala ugboro abụọ tupu ịkụ ihe", "Kpọọ ihe fọdụrụ n'ubi ọkụ mgbe owuwe ihe ubi gasịrị", "Kụọ ihe otu ọnwa mgbe udu mmiri malitere"], answer: 0, why: "Kalenda CA na-edepụta ọrụ ọ bụla ya na ọnwa ya, ngwaọrụ ya na ego ya." },
          { objective: "O5", q: "Gịnị mere CA ji ekwe ka ị kụọ ihe n'oge karịa?", options: ["Mkpụrụ ahụ na-eto ngwa ngwa", "Mmiri na-ezo karịa n'ubi CA", "A na-akwado ala n'oge ọkọchị, ya mere ị na-akụ ihe na mmiri ozuzo mbụ dị mma", "Mkpụrụ dị ọnụ ala karịa"], answer: 2, why: "Ịghara ichere ịkọ ala pụtara ịkụ ihe n'oge kwesịrị ekwesị." },
          { objective: "O6", q: "Kedu ihe atọ i kwesịrị idekọ maka ma obere ubi CA ma obere ubi a kọrọ akọ?", options: ["Agba, isi na ụtọ", "Naanị mmiri ozuzo", "Ihe ubi mịrị, ụbọchị ọrụ na ego e mefuru", "Ọnụọgụ ndị ọbịa"], answer: 2, why: "Ihe ubi mịrị, ọrụ aka na ego na-egosi ma CA na-akwụ ụgwọ n'ugbo gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ Ugbo Nchekwa Ala maka Oge Ọkọchị",
    questions: [
      { objective: "O1", q: "Kedu ndepụta na-enye ụkpụrụ atọ FAO nke ọrụ ugbo nchekwa ala?", options: ["Ịkọ ala, ịkpọ ọkụ, ịkụ naanị otu ihe ọkụkụ", "Ịkpasu ala obere, mkpuchi ala mgbe niile, ịgbanwe ihe ọkụkụ", "Ịgba mmiri n'ubi, fatịlaịza, ọgwụ ahụhụ", "Ịkọ ala n'ime, ala dị n'efu, otu ihe ọkụkụ"], answer: 1, why: "Ndị a bụ ụkpụrụ atọ FAO kọwara." },
      { objective: "O1", q: "Opekata mpe ole n'ime ala kwesịrị ịnọ n'okpuchi n'okpuru CA, dị ka FAO si kwuo?", options: ["Pasent 5", "Pasent 10", "Pasent 30", "Pasent 100 mgbe niile"], answer: 2, why: "FAO na-ekwu maka mkpuchi ihe ndụ mgbe niile opekata mpe pasent 30." },
      { objective: "O1", q: "Gịnị ka ịkpasu ala obere pụtara?", options: ["Ịkpasu ala naanị ebe mkpụrụ na fatịlaịza na-aba", "Ịkọ ala otu ugboro kama ugboro abụọ", "Ịghara ịkụ ihe mgbe ọ bụla", "Iji aka gwuo ubi niile"], answer: 0, why: "Naanị ebe a na-akụ ihe, olulu ma ọ bụ rip line ka a na-akpasu." },
      { objective: "O1", q: "Kedu mgbanwe ihe ọkụkụ na-egosi ịgbanwe ihe ọkụkụ?", options: ["Ọka, ọka, ọka", "Ịhapụ ala n'efu kwa afọ", "Naanị sorghum", "Ọka, wee akidi, wee sorghum"], answer: 3, why: "Ihe ọkụkụ atọ dị iche iche ka oge na-aga bụ ịgbanwe ihe ọkụkụ." },
      { objective: "O2", q: "Gịnị bụ olulu zai?", options: ["Ọdọ mmiri azụ", "Olulu ịkụ ihe nwere nsị anụmanụ ma ọ bụ kompost na-ejide mmiri ozuzo", "Ebe nchekwa mkpụrụ", "Olulu mmiri maka ịgba mmiri n'ubi"], answer: 1, why: "Olulu zai na-achịkọta mmiri na nri ala n'ebe osisi ahụ dị." },
      { objective: "O2", q: "Ahịrị olulu kwesịrị ịga:", options: ["Elu na ala mkpọda", "Gburugburu", "Gafere mkpọda ala, n'ogologo ahịrị ala nhata", "Ụzọ ọ bụla"], answer: 2, why: "Ahịrị gafere mkpọda ala na-ejide mmiri kama ime ka ọ gbadaa ugwu." },
      { objective: "O2", q: "Gịnị mere ị ga-eji jiri otu olulu ahụ ọzọ n'oge ubi ndị ọzọ?", options: ["Ọ na-echekwa ọtụtụ ọrụ aka ma na-ewulite ala n'otu ebe ahụ", "A pụghị igwu olulu ugboro abụọ", "Iwu chọrọ ya", "Olulu ọhụrụ na-adọta ahụhụ"], answer: 0, why: "Iji olulu ochie ọzọ dị ọsọ ọsọ karịa ma na-achịkọta ihe ndozi n'otu ebe." },
      { objective: "O3", q: "Kedu onye ọrụ ugbo kacha dabara olulu e ji aka gwuo?", options: ["Onye ọrụ ugbo nwere hectare 20 na traktọ", "Onye ọrụ ugbo na-enweghị ọrụ aka ọ bụla", "Onye ọrụ ugbo chọrọ ịkọ ala", "Onye ọrụ ugbo ji ọgụ aka n'obere ubi"], answer: 3, why: "Olulu dabara obere ubi a na-eji aka arụ." },
      { objective: "O3", q: "Gịnị bụ plough pan?", options: ["Ite esi nri", "Ụdị mkpụrụ", "Ọdọ mmiri na-adịghị omimi", "Akwa ala siri ike n'okpuru omimi a na-akọ ala nke na-egbochi mgbọrọgwụ na mmiri"], answer: 3, why: "Ịkọ ala ọtụtụ ugboro nwere ike ime akwa ala siri ike nke ripper nwere ike ịgbaji." },
      { objective: "O3", q: "Gịnị ka ịkụ ozugbo pụtara?", options: ["Ịkụ ihe ozugbo n'ala a na-akpasughị na n'ime ihe fọdụrụ n'ubi", "Iji aka fesa mkpụrụ n'ala a kọrọ akọ", "Ịkụ obere osisi si n'ebe a na-azụ ha", "Ịzụta mkpụrụ ozugbo n'aka ụlọ ọrụ"], answer: 0, why: "Ịkụ ozugbo na-etinye mkpụrụ n'emegheghị ala karịa ebe a na-akụ ihe." },
      { objective: "O4", q: "Ebee ka mkpuchi ala ọzọ nwere ike isi bịa ma ọ bụrụ na anụmanụ na-eri ọtụtụ ihe fọdụrụ n'ubi?", options: ["Ịkpọ ọkụ", "Ịkọ ala", "Ngwakọta akidi ma ọ bụ lablab, ahịhịa akụkụ ubi ma ọ bụ alaka a kpụchara n'osisi", "Akwụkwọ plastik"], answer: 2, why: "Ngwakọta ihe ọkụkụ, ahịhịa na alaka osisi na-agbakwunye mkpuchi n'ewepụghị nri anụmanụ niile." },
      { objective: "O4", q: "Na Nigeria, kedu ụlọ ọrụ na-edebanye aha ọgwụ ugbo dị ka ọgwụ ahịhịa?", options: ["NAFDAC", "Ụlọ ọrụ ihu igwe", "Central bank", "Otu egwuregwu bọọlụ"], answer: 0, why: "NAFDAC na-edebanye aha ọgwụ ugbo na Nigeria; lelee ndepụta ya." },
      { objective: "O4", q: "Olee mgbe ịchịkwa ahịhịa kacha mkpa n'ihe ọkụkụ CA?", options: ["Naanị n'oge owuwe ihe ubi", "Ọ dịghị mgbe", "Naanị mgbe ifuru gasịrị", "N'izu mbụ mgbe ihe ọkụkụ puputara"], answer: 3, why: "Ahịhịa mbụ na-asọ mpi kacha ukwuu na ihe ọkụkụ na-eto eto." },
      { objective: "O4", q: "Ọ bụrụ na i jiri ọgwụ ahịhịa, gịnị ka ị ga-eme?", options: ["Gwakọta ọgwụ nke gị siri ike karịa", "Jiri ngwaahịa e debanyere aha, soro akwụkwọ ya kpọmkwem ma yiri uwe nchekwa", "Gbaa ya nso olulu mmiri", "Kwe ka ụmụaka nyere aka gbaa ya"], answer: 1, why: "Naanị ngwaahịa e debanyere aha, e ji otu akwụkwọ ya si kwuo, ya na nchekwa, dị mma ma kwekọọ n'iwu." },
      { objective: "O5", q: "Kedu ngwaọrụ na-eji aka etinye mkpụrụ n'ime ihe fọdụrụ n'ubi?", options: ["Mouldboard plough", "Karama ịgba mmiri", "Jab planter", "Harrow"], answer: 2, why: "Jab planter bụ ngwaọrụ aka maka ịkụ ozugbo." },
      { objective: "O5", q: "Gịnị ka ahịrị ọ bụla na kalenda CA gị kwesịrị inwe?", options: ["Ọrụ ahụ, ọnwa, ngwaọrụ na ego", "Naanị aha ihe ọkụkụ", "Naanị mmiri ozuzo", "Aha onye agbata obi"], answer: 0, why: "Ọrụ, ọnwa, ngwaọrụ na ego na-eme ka kalenda ahụ baa uru." },
      { objective: "O5", q: "Olee mgbe a na-egwu olulu ma ọ bụ jiri nke ochie ọzọ ma tinye nsị anụmanụ?", options: ["Mgbe ifuru na-eme", "N'oge ọkọchị tupu udu mmiri", "N'oge owuwe ihe ubi", "Mgbe udu mmiri gwụrụ"], answer: 1, why: "Nkwadebe oge ọkọchị na-ekwe ka ị kụọ ihe na mmiri ozuzo mbụ dị mma." },
      { objective: "O6", q: "N'afọ ụkọ mmiri, gịnị mere CA na-emekarị nke ọma karịa ịkọ ala?", options: ["Ọ na-eme ka mmiri zoo", "Ọ chọghị mkpụrụ", "Ọ na-akwụsị ahụhụ niile", "Olulu na ihe mkpuchi na-ejide ma na-edobe mmiri karịa"], answer: 3, why: "Mmiri ka ukwuu na-abanye, nke na-ekpo ọkụ apụ na-adịkwa obere n'okpuru mkpuchi." },
      { objective: "O6", q: "Gịnị nwere ike ime ihe ubi mịrị n'oge ubi CA mbụ ma ọ bụ nke abụọ?", options: ["Ọ na-amụba okpukpu abụọ mgbe niile", "O nwere ike ịnọ otu ebe ma ọ bụ ibelata mgbe ahịhịa na-aba ụba, ala na-agbanwekwa", "Ọ na-alaghachi efu mgbe niile", "Ọ dịghị ihe a pụrụ ịma"], answer: 1, why: "Oge mgbanwe nwere ike isi ike; uru na-eto n'ọtụtụ oge ubi." },
      { objective: "O6", q: "Gịnị mere ị ga-eji debe obere ubi a kọrọ akọ n'akụkụ obere ubi CA gị?", options: ["Iji tụnyere ihe ubi mịrị, ọrụ aka na ego n'ụzọ ziri ezi", "Iji zụọ ehi", "N'ihi na iwu CA chọrọ ya", "Iji kụọ ahịhịa"], answer: 0, why: "Obere ubi ntụnyere na-egosi ihe CA na-eme n'ezie n'ugbo gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 4, 7, 10, 13, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ụkpụrụ atọ", objective: "O1", notYet: "Atụmatụ ahụ ka na-akọ ala, na-ahapụ ala n'efu, ma ọ bụ na-akụ naanị otu ihe ọkụkụ.", meets: "Atụmatụ ahụ na-egosi ịkpasu ala obere, mkpuchi, na mgbanwe ma ọ bụ ngwakọta nwere opekata mpe ihe ọkụkụ atọ ka oge na-aga.", exceeds: "Ọ na-akọwa otu ụkpụrụ atọ ahụ si akwado ibe ha n'ubi a." },
      { name: "Nkwadebe ala", objective: "O3", notYet: "Ọ dịghị ụzọ a họọrọ, ma ọ bụ ọ dịghị ihe kpatara ya.", meets: "A họọrọ olulu, olulu zai, ripping ma ọ bụ ịkụ ozugbo ya na opekata mpe ihe abụọ kpatara ya (ọrụ aka, ike, ala, ịdị ukwuu).", exceeds: "Ọ na-ekwu ebe ngwaọrụ ndị ahụ ga-esi bịa ma hụọla ma ọ bụ nwaala ụzọ ahụ." },
      { name: "E hazịrị olulu", objective: "O2", notYet: "Olulu adịghị n'ahịrị gafere mkpọda ala ma ọ bụ enweghị atụmatụ nsị anụmanụ.", meets: "Ahịrị gafere mkpọda ala, ụbọchị igwu ala n'oge ọkọchị, na nsị anụmanụ ma ọ bụ kompost n'olulu ọ bụla (ma ọ bụrụ na e ji olulu).", exceeds: "Ọ gwuola obere ebe nnwale, gụọ oge ya, ma gbakọọ ọrụ aka maka ubi niile." },
      { name: "Mkpuchi na ahịhịa", objective: "O4", notYet: "Ọ dịghị atụmatụ maka ihe fọdụrụ n'ubi, ịta nri anụmanụ ma ọ bụ ahịhịa.", meets: "Ọ na-edobe opekata mpe pasent 30 mkpuchi, na-edozi okwu ịta nri anụmanụ, ma nwee usoro ịwacha ahịhịa; ọgwụ ahịhịa ọ bụla bụ nke e debanyere aha, e ji ya otu akwụkwọ ya si kwuo, ya na uwe nchekwa.", exceeds: "Ọ na-agbakwunye ihe ọkụkụ mkpuchi ma ọ bụ ngwakọta, na atụmatụ igbochi ahịhịa ịmịa mkpụrụ." },
      { name: "Kalenda oge ubi", objective: "O5", notYet: "Ọrụ ụfọdụ adịghị ma ọ bụ ha enweghị ụbọchị.", meets: "Ọrụ ọ bụla site na nkwadebe oge ọkọchị ruo owuwe ihe ubi, ya na ọnwa, ngwaọrụ na ego.", exceeds: "Ọ gụnyere ụbọchị ọrụ na onye ga-arụ ọrụ ọ bụla." },
      { name: "Ntụnyere n'oge mgbanwe", objective: "O6", notYet: "Ọ dịghị obere ubi ntụnyere ma ọ bụ ndekọ.", meets: "Obere ubi ntụnyere a kọrọ akọ, ya na ihe ubi mịrị, ụbọchị ọrụ na ego a ga-edekọ n'oge ubi ọ bụla.", exceeds: "O kwere nkwa ikpe ikpe mgbe oge ubi atọ gasịrị ma depụta ihe ga-eme ka ọ gbanwee atụmatụ ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rụrụ otu oge ubi CA opekata mpe n'otu ubi ya na obere ubi ntụnyere (nnyocha nsochi)",
      "Ihe ubi mịrị, ụbọchị ọrụ na ego n'obere ubi CA na n'obere ubi a kọrọ akọ n'ime oge ubi atọ, karịsịa n'afọ kpọrọ nkụ (ndekọ ndị na-amụ ihe)",
      "Ndị na-amụ ihe ka na-eme CA mgbe oge ubi atọ gasịrị, na ịdị ukwuu ala ha na-arụ CA na ya",
      "Ndị agbata obi ma ọ bụ ndị otu na-anabata CA (akụkọ ndị ndụmọdụ ugbo)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ na mkpịsị ode maka eserese ubi na kalenda",
      "Ọgụ, eriri ma ọ bụ osisi, na teepu ma ọ bụ osisi a tụrụ atụ maka ịhazi olulu",
      "Nsị anụmanụ ma ọ bụ kompost maka olulu nnwale",
      "Ọnụ ahịa obodo ma ọ bụ ego ịgbazite ripper, jab planter na ọrụ aka (ma ọ bụ ọnụọgụ ọmụmaatụ)",
      "Ihe dị ka nkeji 90 n'ozuzu, gbakwunyere oge n'ubi maka nnwale olulu"
    ],
    facilitatorNotes: [
      "Mee Nkuzi 2 n'ubi: hazienụ ma gwuo olulu ma ọ bụ olulu zai ole na ole ọnụ, ma gụọ oge ọrụ ahụ were.",
      "Kpọọ onye ọrụ ugbo na-eme CA ugbu a, ma ọ bụ hazie nleta n'ubi ngosi, ka ndị na-amụ ihe hụ ka ripping ma ọ bụ ịkụ ozugbo si arụ ọrụ.",
      "Kwuo okwu n'ihu ọha banyere omenala ịta nri anụmanụ; ọ bụrụ na o kwere omume, kpọbata ndị na-azụ anụ ma ọ bụ ndị isi obodo na mkparịta ụka ahụ.",
      "Akwadola ọgwụ ahịhịa ọ bụla kpọmkwem; zipu ndị na-amụ ihe na ndepụta ndebanye aha mba ahụ na onye ndụmọdụ ugbo, ma kwusie ike na akwụkwọ ọgwụ ahụ na uwe nchekwa.",
      "Gwa ha eziokwu banyere ihe ha ga-atụ anya n'oge mgbanwe: ihe ubi mịrị nwere ike ọ gaghị ebili n'oge ubi mbụ.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ ahụ ma soro ha mgbe oge ubi ọ bụla gasịrị iji tụnyere obere ubi ndị ahụ."
    ]
  }
};
