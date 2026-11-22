"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-climate-smart.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Akwụkwọ Ntụzi Ọrụ Ugbo Nke Kwadoro Maka Mgbanwe Ihu Igwe (Climate-Smart Agriculture Sourcebook)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const KMD = { name: "Kenya Meteorological Department (amụma ihu igwe nke oge, akwụkwọ ozi ihu igwe maka ndị ọrụ ugbo)", url: "https://meteo.go.ke" };
const NIMET = { name: "Ụlọ Ọrụ Ihu Igwe Naịjirịa (NiMet)", url: "https://nimet.gov.ng" };
const CGIAR_MAIZE = { name: "CGIAR: Ọka nke na-anagide ụkọ mmiri ozuzo (drought-tolerant maize)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const ICIPE_PUSHPULL = { name: "icipe: Usoro push-pull na-akwụsị mbibi fall armyworm", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const FAO_EO = { name: "FAO GIEWS: Nlele Ụwa site na satịlaịtị (ihe ngosi ụkọ mmiri na ahịhịa)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };

module.exports = {
  id: "agri-climate-smart-ig",
  lang: "ig",
  translationOf: "agri-climate-smart",
  category: "Agriculture (Africa)",
  name: "Ọrụ Ugbo Nke Kwadoro Maka Mgbanwe Ihu Igwe",
  skills: "Ịkọwa ọrụ ugbo nke kwadoro maka mgbanwe ihu igwe, Ịgụ amụma ihu igwe nke oge sitere n'aka gọọmentị, Ịdepụta ihe egwu ihu igwe n'ugbo gị, Ịhọrọ omume maka ala na mmiri, Ịhọrọ ihe ọkụkụ na ụdị mkpụrụ siri ike, Iji osisi, anụ ụlọ na mkpuchi (insurance) kesaa ihe egwu",
  outcome: "ide ma malite atụmatụ ọrụ ugbo kwadoro maka mgbanwe ihu igwe maka ugbo gị: ihe egwu ihu igwe ọ na-eche ihu n'afọ niile, ihe amụma ihu igwe nke oge gọọmentị na-ekwu, na omume ala, mmiri, ihe ọkụkụ, osisi, anụ ụlọ na mkpuchi ị ga-eji n'oge a.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo, ndị ọrụ ugbo na-eto eto, ndị ọrụ ndụmọdụ ugbo (extension officers) na ndị ndu otu ndị ọrụ ugbo na Kenya, Naịjirịa na Africa niile, ndị na-ahụ oge ọkọchị ka ogologo n'etiti mmiri ozuzo, mmiri ozuzo ka ike, okpomọkụ ka ukwuu na ụmụ ahụhụ ọhụrụ, ma chọọ ụzọ ga-eme ka owuwe ihe ubi na ego ha kwụsie ike.",
    "Isi 1 na-enyere gị aka ịghọta ihe egwu ihu igwe n'ugbo gị: ihe ọrụ ugbo kwadoro maka mgbanwe ihu igwe pụtara, otu esi agụ amụma ihu igwe nke oge sitere n'ụlọ ọrụ ihu igwe mba gị, na otu esi ese kalenda ihe egwu ihu igwe dị mfe. Isi 2 bụ maka omume: idebe ala na mmiri n'ugbo, ịhọrọ ihe ọkụkụ na ụdị mkpụrụ na-anagide, na iji osisi, anụ ụlọ na mkpuchi kesaa ihe egwu.",
    "Ugbo ọ bụla dị iche. Jiri ihe ọmụmụ a na ndụmọdụ onye ọrụ ndụmọdụ ugbo gị, onye na-ere ọgwụ na mkpụrụ ugbo (agrovet) ma ọ bụ ụlọ ọrụ nchọpụta, ma buru ụzọ nwalee omume ọhụrụ n'obere ala. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ n'ugbo gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ ọrụ ugbo kwadoro maka mgbanwe ihu igwe dị otu peeji maka ugbo gị (ma ọ bụ ugbo ọmụmaatụ dị ka acre 2 nke ọka na agwa na Machakos, ma ọ bụ acre 3 nke ọka okpoko na akịdị na Kano): kalenda ihe egwu ihu igwe ọnwa n'ọnwa, ihe amụma ihu igwe gọọmentị nke oge a na-ekwu na ụbọchị i gụrụ ya, na opekata mpe omume ise ị ga-eji (opekata mpe otu maka ala na mmiri, otu maka ihe ọkụkụ na ụdị mkpụrụ, na otu maka ịkesa ihe egwu), ya na mgbe ị ga-amalite nke ọ bụla na otu ị ga-esi mara ma ọ rụrụ ọrụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo, ndị ọrụ ugbo na-eto eto, ndị ọrụ ndụmọdụ ugbo na ndị ndu otu ndị ọrụ ugbo na Kenya, Naịjirịa na Africa niile, ndị na-eche oge ọkọchị ka ogologo, mmiri ozuzo ka ike, okpomọkụ ka ukwuu na ụmụ ahụhụ ọhụrụ ihu.",
    startingPoint: "Ha maara ala ha, ihe ọkụkụ ha na oge ha nke ọma, ọtụtụ n'ime ha na-ejiworị ụfọdụ omume kwadoro maka mgbanwe ihu igwe n'amaghị aha ya. Ole na ole na-agụ amụma ihu igwe nke oge gọọmentị, na-ese kalenda ihe egwu ihu igwe ma ọ bụ na-eme atụmatụ omume iji kesaa ihe egwu n'oge niile.",
    gap: "Mmiri ozuzo na-agbanwe agbanwe na ụmụ ahụhụ ọhụrụ na-eme ka owuwe ihe ubi na ego ghara ịkwụsi ike. Ndị ọrụ ugbo kwesịrị ịgụ amụma ihu igwe gọọmentị, ịhụ oge ihe egwu dị n'afọ ha, na ịhọrọ omume ala, mmiri, ihe ọkụkụ, osisi, anụ ụlọ na mkpuchi dabara ugbo ha, na-anwale ha tupu ha eji ha ebe niile.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-eji bekee dị ka asụsụ nke abụọ",
      "Ngwaọrụ: ekwentị nkịtị, redio ma ọ bụ akwụkwọ ozi ndụmọdụ ugbo; smartphone na-enyere aka mana ọ bụghị iwu",
      "Ọnụ ahịa na ọrụ aka: malite n'omume na-adịghị ọnụ, nwalee ha n'obere ala",
      "Amụma ihu igwe, ụdị mkpụrụ, mkpuchi na ndị na-achị ha dị iche site na mba ruo mba: ndị na-amụ ihe na-elele KMD, NiMet ma ọ bụ ụlọ ọrụ ihu igwe mba ha, ndị ọrụ ndụmọdụ ugbo na ndị na-ere ihe nwere ikike",
      "Oge: ndị na-amụ ihe na-eme nkuzi n'etiti ọrụ ugbo na oge ha"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị omume a na-eji n'ugbo gị ma ọ bụ n'obodo gị", action: "ịkọwa ebumnuche atọ nke ọrụ ugbo kwadoro maka mgbanwe ihu igwe ma kpebie ma omume ọ bụla kwadoro maka ya", standard: "na-akpọ aha ebumnuche omume ọ bụla na-enyere aka" },
    { id: "O2", condition: "Tupu oge mmiri ozuzo", action: "ịchọta amụma ihu igwe nke oge sitere n'ụlọ ọrụ ihu igwe mba gị ma dee mgbanwe abụọ ọ pụtara maka atụmatụ gị", standard: "na-edetu ihe ọ na-ekwu, ụbọchị i gụrụ ya, na na ọ na-enye ohere, ọ bụghị nkwa" },
    { id: "O3", condition: "Maka ugbo gị ma ọ bụ ugbo ọmụmaatụ", action: "ise kalenda ihe egwu ihu igwe ọnwa n'ọnwa ma gbaa gburugburu n'oge ihe egwu", standard: "nwere oge, ọrụ ugbo, ihe egwu na opekata mpe oge ihe egwu abụọ a kara akara" },
    { id: "O4", condition: "Mgbe e nyere gị mkpọda ala na otu mmiri si asọ n'ugbo gị", action: "ịhọrọ omume ala na mmiri dabara ma mee atụmatụ obere nnwale", standard: "na-atụnyere ala a nwalere na ụzọ i ji eme ya mgbe niile" },
    { id: "O5", condition: "Mgbe e nyere gị ihe ọkụkụ gị kachasị na ihe egwu obodo gị", action: "ịhọrọ ụdị mkpụrụ akwadoro (certified) nke na-anagide ụkọ mmiri ma ọ bụ nke na-eto ngwa ngwa, ihe ọkụkụ siri ike n'ọkọchị, na usoro ịkụ ihe na-ebelata ihe egwu", standard: "na-azụta mkpụrụ naanị n'aka ndị na-ere ihe edebara aha" },
    { id: "O6", condition: "Karịa ihe ọkụkụ gị kachasị", action: "ime atụmatụ opekata mpe otu ụzọ iji kesaa ihe egwu site n'osisi, nri na mmiri anụ ụlọ, ma ọ bụ mkpuchi", standard: "na-elele ihe na-eme ka mkpuchi kwụọ ụgwọ na na ụlọ ọrụ mkpuchi ahụ nwere ikike" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịghọta ihe egwu ihu igwe n'ugbo gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ọrụ ugbo kwadoro maka mgbanwe ihu igwe pụtara",
          minutes: 5,
          goal: "Kọwaa ebumnuche atọ nke ọrụ ugbo kwadoro maka mgbanwe ihu igwe ma kpebie ma omume kwadoro maka ya.",
          text: [
            "Ọrụ ugbo kwadoro maka mgbanwe ihu igwe (climate-smart agriculture, CSA) bụ ụzọ ịhọrọ omume ọrụ ugbo na-eche banyere mgbanwe ihu igwe. FAO (Ụlọ Ọrụ Nri na Ọrụ Ugbo nke Mba Ụwa) na-akọwa ebumnuche atọ: ịbawanye ihe ubi na ego n'ụzọ ga-adịgide; inyere ugbo na ezinụlọ aka ịnagide na ịkwụsi ike megide ihe ọjọọ ihu igwe na-ebute; na ibelata ma ọ bụ iwepụ anwụrụ ọkụ na-ekpo ụwa ọkụ (greenhouse gas) ebe o kwere omume.",
            "FAO na-ekwusi ike na omume ekwesighi ime ihe atọ ahụ niile. Maka ọtụtụ obere ndị ọrụ ugbo, nri na ego na-ebu ụzọ; ibelata anwụrụ ọkụ bụ uru ọzọ. Omume kwadoro maka mgbanwe ihu igwe ma ọ bụrụ na ọ dabara ugbo gị ma mee ka ọ mịkwuo ihe ma kwụsikwuo ike.",
            "Ọmụmaatụ ndị ọrụ ugbo na Africa na-ejiworị: ikpuchi ala (mulch) na ịkọ ala obere (minimum tillage) iji debe mmiri n'ala, olulu ịkụ ihe na ọdọ mmiri, ụdị mkpụrụ na-anagide ụkọ mmiri na nke na-eto ngwa ngwa, ịkụ ọka na agwa ma ọ bụ akịdị ọnụ, push-pull maka ikpuru na-egbu ọka (stemborer) na fall armyworm, osisi n'ugbo, nri anụ ụlọ ka mma, na mkpuchi ihe ọkụkụ ma ọ bụ anụ ụlọ."
          ],
          words: [["Ọrụ ugbo kwadoro maka mgbanwe ihu igwe (CSA)", "ọrụ ugbo na-ebawanye ihe ubi, na-enyere ugbo aka ịnagide mgbanwe ihu igwe, ma na-ebelata anwụrụ ọkụ ebe o kwere omume."], ["Ịkwụsi ike (resilience)", "ike ugbo na ezinụlọ nwere ịnagide ihe ọjọọ, dị ka ụkọ mmiri, ma bilie ọzọ ngwa ngwa."], ["Ịnagide (adaptation)", "ịgbanwe otu i si arụ ọrụ ugbo iji nagide ihu igwe na-agbanwe agbanwe."]],
          slides: [
            { title: "Ebumnuche atọ (FAO)", bullets: ["Ịbawanye ihe ubi na ego", "Ịnagide na ịkwụsi ike", "Ibelata anwụrụ ọkụ ebe o kwere omume"] },
            { title: "Ọ bụghị ha atọ n'otu oge", bullets: ["Nri na ego na-ebu ụzọ", "Ibelata anwụrụ ọkụ bụ uru ọzọ", "Dabara ugbo gị + kwụsikwuo ike = kwadoro maka ihu igwe"] },
            { title: "Ọmụmaatụ na Africa", bullets: ["Mulch, ịkọ ala obere, olulu ịkụ ihe, ọdọ mmiri", "Mkpụrụ na-anagide ụkọ mmiri, ịkụ ihe ọnụ, push-pull", "Osisi n'ugbo, nri anụ ụlọ, mkpuchi"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Depụta omume atọ a na-ejiworị n'ugbo gị ma ọ bụ n'obodo gị. Maka nke ọ bụla, dee ebumnuche CSA ọ na-enyere aka (ihe ubi, ịkwụsi ike, anwụrụ ọkụ).",
          youCanNow: "ịkọwa ebumnuche atọ nke ọrụ ugbo kwadoro maka mgbanwe ihu igwe ma kpebie ma omume kwadoro maka ya.",
          quickCheck: [
            { objective: "O1", q: "Kedu omume kwadoro maka mgbanwe ihu igwe ndị ọrụ ugbo na Africa na-ejiworị?", options: ["Ikpuchi ala (mulch) iji debe mmiri n'ala", "Ịkpọ ọkụ n'ihe niile fọdụrụ n'ubi", "Ịkụ naanị otu ihe ọkụkụ kwa afọ", "Ịkọ ubi ọtụtụ ugboro"], answer: 0, why: "Mulch na-edebe ala ka ọ dị mmiri mmiri ma kpuchie ya, na-enyere ihe ubi na ịkwụsi ike aka." },
            { objective: "O1", q: "Otu omume na-ebawanye ihe ubi gị ma na-enyere gị aka ịlanarị oge ọkọchị, mana ọ naghị ebelata anwụrụ ọkụ. Ọ kwadoro maka mgbanwe ihu igwe?", options: ["Mba; ọ ga-eme ihe atọ ahụ niile", "Ee, ma ọ bụrụ na ọ dabara ugbo gị ma mee ka ihe ubi na ịkwụsi ike ka mma", "Naanị ma ọ bụrụ na gọọmentị kwadoro ya", "Naanị ma ọ bụrụ na ọ bụ ihe ọhụrụ"], answer: 1, why: "FAO na-ekwu na omume ekwesighi imezu ebumnuche atọ ahụ niile; maka obere ndị ọrụ ugbo, nri na ego na-ebu ụzọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgụ amụma ihu igwe nke oge sitere n'aka gọọmentị",
          minutes: 5,
          goal: "Chọta ma jiri amụma ihu igwe nke oge sitere n'ụlọ ọrụ ihu igwe mba gị mee atụmatụ oge.",
          text: [
            "Tupu oge mmiri ozuzo ọ bụla, ụlọ ọrụ ihu igwe mba na-ebipụta amụma ihu igwe nke oge: ma a na-atụ anya mmiri ozuzo karịa, ruo nso ma ọ bụ erughị nke a na-ahụkarị, na mgbe ọ nwere ike ịmalite na ịkwụsị. Na Kenya, Kenya Meteorological Department (KMD) na-ebipụta amụma nke oge na akwụkwọ ozi ihu igwe maka ndị ọrụ ugbo. Na Naịjirịa, Nigerian Meteorological Agency (NiMet) na-ebipụta amụma ihu igwe nke oge. Mba ndị ọzọ nwere ụlọ ọrụ nke ha; a na-ekesakwa ọtụtụ amụma na redio na site n'aka ndị ọrụ ndụmọdụ ugbo.",
            "Amụma ihu igwe nke oge na-enye ohere, ọ bụghị nkwa. \"Erughị nke a na-ahụkarị\" (below normal) pụtara na e nwere ohere ka ukwuu na mmiri ozuzo ga-erughị nke a na-ahụkarị n'ebe obibi gị, ọ pụtaghị na ọ ga-akọ n'ezie. Jiri ya gbanwee ihe, ọ bụghị itinye ihe niile n'otu ebe: dịka ọmụmaatụ, họrọ ụdị mkpụrụ na-eto ngwa ngwa, kụọ n'ụbọchị kwesịrị ekwesị, mee atụmatụ ịchekwa mmiri ozuzo, ma ọ bụ belata ala nke ihe ọkụkụ na-achọ mmiri nke ukwuu.",
            "Jiri amụma ihu igwe nke ụbọchị ole na ole na-abịa maka mkpebi kwa ụbọchị, dị ka mgbe ị ga-akụ ihe mgbe mmiri ozuzo malitere, mgbe ị ga-agba ọgwụ ma ọ bụ tinye fatịlaịza nke abụọ (topdress), na mgbe ị ga-ewe ihe ubi ma kpọọ ya nkụ."
          ],
          steps: ["Chọta weebụsaịtị, oge redio ma ọ bụ akwụkwọ ozi ndụmọdụ ugbo nke ụlọ ọrụ ihu igwe mba gị.", "Gụọ amụma ihu igwe nke oge maka county ma ọ bụ steeti gị.", "Detuo: karịa, ruo nso ma ọ bụ erughị nke a na-ahụkarị; mgbe a na-atụ anya mmiri ozuzo ịmalite na ịkwụsị.", "Dee mgbanwe abụọ ị ga-eme n'ihi ya.", "Lelee amụma ihu igwe nke ụbọchị ole na ole maka ụbọchị ịkụ ihe, itinye fatịlaịza na owuwe ihe ubi."],
          words: [["Amụma ihu igwe nke oge", "ihe a na-atụ anya maka mmiri ozuzo na okpomọkụ n'oge na-abịa, nke e kwuru dị ka ohere."], ["Mmalite mmiri ozuzo (onset)", "mbido oge mmiri ozuzo."], ["Akwụkwọ ozi ihu igwe maka ndị ọrụ ugbo (agrometeorological bulletin)", "akụkọ ihu igwe e dere maka ndị ọrụ ugbo, na-ejikọta ihu igwe na ihe ọkụkụ."]],
          slides: [
            { title: "Amụma ihu igwe nke oge sitere n'aka gọọmentị", bullets: ["Kenya: Kenya Meteorological Department (KMD)", "Naịjirịa: NiMet", "Ọ na-adịkwa na redio na n'aka ndị ọrụ ndụmọdụ ugbo"] },
            { title: "Ohere, ọ bụghị nkwa", bullets: ["Karịa, ruo nso ma ọ bụ erughị nke a na-ahụkarị", "Mgbe a na-atụ anya mmiri ozuzo ịmalite na ịkwụsị", "Gbanwee ihe; etinyela ihe niile n'otu ebe"] },
            { title: "Jiri ya", bullets: ["Ụdị mkpụrụ na-eto ngwa ngwa ma mmiri ozuzo ga-adị ntakịrị", "Mee atụmatụ ịchekwa mmiri ozuzo", "Amụma ụbọchị ole na ole maka ọrụ kwa ụbọchị"] }
          ],
          sources: [KMD, NIMET],
          tryIt: "Chọta amụma ihu igwe nke oge kachasị ọhụrụ maka ebe obibi gị site na KMD, NiMet ma ọ bụ ụlọ ọrụ ihu igwe mba gị. Dee ihe ọ na-ekwu, ụbọchị i gụrụ ya, na mgbanwe abụọ ị ga-eme n'atụmatụ gị.",
          youCanNow: "ịchọta amụma ihu igwe nke oge gọọmentị ma jiri ya gbanwee atụmatụ oge gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka amụma ihu igwe nke oge na-agwa gị?", options: ["Ole mmiri ga-ezo kpọmkwem kwa ụbọchị", "Ọnụ ahịa ọka", "Ma o yikarịrị ka mmiri ozuzo ga-akarị, ruo nso ma ọ bụ erughị nke a na-ahụkarị", "Mkpụrụ ị ga-azụ"], answer: 2, why: "Amụma ihu igwe nke oge na-enye ohere nke mmiri ozuzo karịa, ruo nso ma ọ bụ erughị nke a na-ahụkarị, na mgbe ọ nwere ike ịmalite na ịkwụsị." },
            { objective: "O2", q: "Amụma ihu igwe na-ekwu na mmiri ozuzo nwere ike ịkwụsị n'oge. Gịnị bụ mgbanwe kwesịrị ekwesị?", options: ["Kụọ ụdị mkpụrụ na-ewe ogologo oge ito", "Kụọ ihe mgbe e mesịrị karịa ka ọ dị na mbụ", "Emela ihe ọ bụla", "Họrọ ụdị mkpụrụ na-eto ngwa ngwa"], answer: 3, why: "Ụdị mkpụrụ na-eto ngwa ngwa nwere ike ito ruo tupu mmiri ozuzo akwụsị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ise kalenda ihe egwu ihu igwe nke ugbo gị",
          minutes: 5,
          goal: "See kalenda ọnwa n'ọnwa nke ihe egwu ihu igwe ugbo gị na-eche ihu.",
          text: [
            "Kalenda ihe egwu ihu igwe na-etinye ihe ọkụkụ gị na anụ ụlọ gị n'akụkụ ihe egwu nke ọnwa ọ bụla. See kọlụm 12 maka ọnwa. N'ahịrị mbụ, dee oge gị (mmiri ozuzo ogologo, mmiri ozuzo mkpụmkpụ, oge ọkọchị, ma ọ bụ udu mmiri na ọkọchị n'ọtụtụ ebe na Naịjirịa). N'okpuru ya, dee ihe ị na-eme kwa ọnwa: ịkwadebe ala, ịkụ ihe, iwepụ ahịhịa, itinye fatịlaịza nke abụọ, owuwe ihe ubi, ịkpọ nkụ, ire ere, na mgbe anụ ụlọ chọrọ nri na mmiri kachasị.",
            "Wee kaa ihe egwu akara: mmiri ozuzo ịmalite n'azụ oge ma ọ bụ ịkwụsị n'oge, oge ọkọchị n'etiti oge mmiri ozuzo, oke ifufe na iju mmiri, okpomọkụ mgbe ihe ọkụkụ na-eme ifuru, ụmụ ahụhụ na ọrịa na-eso ihu igwe (fall armyworm, aphids, ọrịa fungus n'oge mmiri), na mfu mgbe owuwe ihe ubi gasịrị mgbe e chekwara mkpụrụ akọrọghị nkụ.",
            "Chọọ oge ihe egwu: ọnwa ndị ọrụ dị mkpa na-ezute nnukwu ihe egwu, dị ka ọka na-eme ifuru n'ọnwa nke oge ọkọchị na-adịkarị. Ebe ndị ahụ ka omume kwadoro maka mgbanwe ihu igwe na-enyere aka kachasị. Jụọ ndị ọrụ ugbo merela agadi otu usoro ahụ si gbanwee n'ime afọ ndị gara aga."
          ],
          steps: ["See kọlụm ọnwa 12; dee oge gị.", "Dee ọrụ ugbo gị na mkpa anụ ụlọ site n'ọnwa.", "Kaa ihe egwu ihu igwe na ụmụ ahụhụ na-eso ihu igwe akara.", "Gbaa gburugburu n'oge ihe egwu ebe ọrụ dị mkpa na-ezute nnukwu ihe egwu.", "Jụọ ndị ọrụ ugbo merela agadi ihe gbanwere."],
          words: [["Oge ọkọchị n'etiti mmiri ozuzo (dry spell)", "ụbọchị ma ọ bụ izu ole na ole na-enweghị mmiri ozuzo bara uru n'oge mmiri ozuzo."], ["Oge ihe egwu", "oge ọrụ ugbo dị mkpa na-ezute nnukwu ihe egwu ihu igwe."]],
          slides: [
            { title: "Kọlụm iri na abụọ", bullets: ["Oge n'elu", "Ọrụ ugbo na mkpa anụ ụlọ site n'ọnwa"] },
            { title: "Kaa ihe egwu akara", bullets: ["Mmiri ozuzo ịmalite n'azụ, ịkwụsị n'oge, oge ọkọchị", "Oke ifufe, iju mmiri, okpomọkụ n'oge ifuru", "Ụmụ ahụhụ na-eso ihu igwe, nchekwa mkpụrụ mmiri mmiri"] },
            { title: "Chọta oge ihe egwu", bullets: ["Ọrụ dị mkpa na-ezute nnukwu ihe egwu", "Ebe omume CSA na-enyere aka kachasị", "Jụọ ndị ọrụ ugbo merela agadi ihe gbanwere"] }
          ],
          sources: [FAO_EO],
          tryIt: "See kalenda ihe egwu ihu igwe maka ugbo gị n'akwụkwọ ma ọ bụ na spreadsheet n'ekwentị. Gbaa gburugburu n'opekata mpe oge ihe egwu abụọ.",
          youCanNow: "ise kalenda ihe egwu ihu igwe maka ugbo gị ma chọta oge ihe egwu ya.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-aba n'ahịrị ndị dị n'okpuru ọnwa na kalenda ihe egwu ihu igwe?", options: ["Ọrụ ugbo gị, mkpa anụ ụlọ na ihe egwu", "Naanị ọnụ ahịa n'ahịa", "Ụbọchị ọmụmụ ezinụlọ gị", "Naanị ole mmiri zoro n'ozuzu"], answer: 0, why: "Kalenda ahụ na-etinye ọrụ ugbo na mkpa anụ ụlọ n'akụkụ ihe egwu nke ọnwa ọ bụla." },
            { objective: "O3", q: "Ị na-echekwa ọka n'ọnwa mmiri na-adịkarị. Gịnị ka ị ga-akara?", options: ["Ọ dịghị ihe; nchekwa enweghị nsogbu", "Ihe egwu mfu mgbe owuwe ihe ubi gasịrị site na mkpụrụ mmiri mmiri", "Ihe egwu ụkọ mmiri", "Ọrụ ịkụ ihe"], answer: 1, why: "Mkpụrụ e chekwara mgbe ọ ka dị mmiri mmiri n'ọnwa mmiri bụ ihe egwu mfu mgbe owuwe ihe ubi gasịrị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịghọta ihe egwu ihu igwe n'ugbo gị",
        questions: [
          { objective: "O1", q: "Kedu nke bụ otu n'ime ebumnuche atọ FAO maka ọrụ ugbo kwadoro maka mgbanwe ihu igwe?", options: ["Iji kemịkalụ dị ukwuu otu o kwere", "Inyere ugbo aka ịnagide na ịkwụsi ike", "Ịkụ naanị otu ihe ọkụkụ", "Igbutu osisi niile"], answer: 1, why: "CSA na-elekwasị anya n'ihe ubi, ịnagide na ịkwụsi ike, na ibelata anwụrụ ọkụ ebe o kwere omume." },
          { objective: "O1", q: "Omume kwadoro maka mgbanwe ihu igwe ga-emezurịrị ebumnuche atọ ahụ n'otu oge?", options: ["Ee, mgbe niile", "Naanị na Kenya", "Mba; ọ ga-adaba ugbo ahụ ma mee ka ihe ubi na ịkwụsi ike ka mma", "Naanị n'ugbo buru ibu"], answer: 2, why: "FAO na-ekwu na omume ekwesighi imezu ebumnuche ọ bụla; nri na ego na-ebu ụzọ." },
          { objective: "O2", q: "Amụma ihu igwe nke oge na-ekwu \"mmiri ozuzo erughị nke a na-ahụkarị\". Nke a pụtara:", options: ["Ohere ka ukwuu nke mmiri ozuzo erughị nke a na-ahụkarị", "Mmiri agaghị ezo n'ezie", "Iju mmiri ga-adị n'ezie", "Ọ dịghị ihe bara uru"], answer: 0, why: "Amụma ihu igwe nke oge na-enye ohere, ọ bụghị ihe doro anya." },
          { objective: "O2", q: "Ebee ka onye ọrụ ugbo Naịjirịa kwesịrị ịchọ amụma ihu igwe nke oge gọọmentị?", options: ["Asịrị n'ahịa", "Kalenda afọ gara aga", "Onye ọ na-amaghị na soshal midia", "NiMet ma ọ bụ amụma ya ndị ọrụ ndụmọdụ ugbo na redio na-ekesa"], answer: 3, why: "NiMet bụ ụlọ ọrụ ihu igwe gọọmentị Naịjirịa." },
          { objective: "O3", q: "Oge ihe egwu na kalenda ihe egwu ihu igwe bụ:", options: ["Mgbe ọrụ ugbo dị mkpa na-ezute nnukwu ihe egwu ihu igwe", "Ebe a na-ere ihe ọkụkụ", "Ụdị ahụhụ", "Ọnwa na-enweghị ọrụ ugbo"], answer: 0, why: "Oge ihe egwu na-egosi ebe omume na-enyere aka kachasị." }
        ]
      }
    },
    {
      name: "Isi 2: Omume kwadoro maka mgbanwe ihu igwe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Idebe ala na mmiri n'ugbo",
          minutes: 6,
          goal: "Họrọ omume ala na mmiri dabara ugbo gị na mkpọda ala ya.",
          text: [
            "Ala dị mma na-ejide mmiri karịa ma na-azụ ihe ọkụkụ n'oge ọkọchị. Ụkpụrụ atọ nke ọrụ ugbo na-echekwa ala (conservation agriculture) na-enyere aka: emebisịla ala karịa ka ọ dị mkpa (ịkọ ala obere), kpuchie ya mgbe niile (ihe fọdụrụ n'ubi ma ọ bụ mulch kama ịkpọ ha ọkụ), ma gbanwee ihe ọkụkụ ma ọ bụ kụọ ha ọnụ (dịka ọmụmaatụ ọka na agwa, akịdị ma ọ bụ fiofio). Tinye nsị anụ ma ọ bụ kompost iji wulite ihe ndụ dị n'ala.",
            "Jide mmiri ozuzo ebe ọ dara. Olulu ịkụ ihe (a na-akpọ ha zai na Sahel) na-anakọta mmiri na nsị anụ gburugburu osisi ọ bụla. Ebe e kere ekere (tied ridges) na mgbidi ala dị n'ahịrị mkpọda (contour bunds) na-egbochi mmiri ịsọpụ. N'ala mkpọda, terraces dị ka fanya juu na Kenya, ahịrịahịrị ahịhịa na osisi n'ahịrị mkpọda na-egbochi mbuso ala. Ọdọ mmiri e gwuru egwu (water pans) na ịnakọta mmiri n'elu ụlọ na-echekwa mmiri maka anụ ụlọ, ebe a na-azụ mkpụrụ osisi na ubi ụlọ.",
            "Malite n'obere: nwalee omume n'otu akụkụ ubi, tụnyere ya na ụzọ i ji eme ya mgbe niile, ma debe ihe rụrụ ọrụ. Jụọ onye ọrụ ndụmọdụ ugbo gị maka ụdị ndị dabara obodo gị na ọrụ aka ha chọrọ."
          ],
          steps: ["Kwụsị ịkpọ ihe fọdụrụ n'ubi ọkụ; hapụ ya dị ka mulch.", "Belata ịkọ ala ebe enwere ike ịchịkwa ahịhịa.", "Gbanwee ihe ọkụkụ ma ọ bụ kụọ ya na mkpụrụ agwa ọnụ.", "Jide mmiri ozuzo: olulu ịkụ ihe, tied ridges, contour bunds.", "N'ala mkpọda: terraces, ahịrịahịrị ahịhịa, osisi n'ahịrị mkpọda.", "Buru ụzọ nwalee n'obere ala ma tụnyere."],
          words: [["Ọrụ ugbo na-echekwa ala (conservation agriculture)", "ọrụ ugbo na-emebi ala obere, na-ekpuchi ala mgbe niile, ma na-agbanwe ihe ọkụkụ."], ["Mulch", "ihe fọdụrụ n'ubi, ahịhịa ma ọ bụ akwụkwọ osisi a gbasara n'elu ala iji debe ya mmiri mmiri ma dị jụụ."], ["Olulu zai / olulu ịkụ ihe", "obere olulu na-anakọta mmiri ozuzo na nsị anụ gburugburu osisi."], ["Fanya juu", "terrace Kenya e mere site n'ịtụba ala n'elu site n'olulu ka ọ bụrụ mgbidi."]],
          slides: [
            { title: "Ala dị mma na-ejide mmiri", bullets: ["Ịkọ ala obere", "Kpuchie ala: mulch, akpọla ọkụ", "Gbanwee ma ọ bụ kụọ ihe ọnụ na mkpụrụ agwa"] },
            { title: "Jide mmiri ozuzo ebe ọ dara", bullets: ["Olulu ịkụ ihe (zai)", "Tied ridges na contour bunds", "Ọdọ mmiri na ịnakọta mmiri n'elu ụlọ"] },
            { title: "Chebe ala mkpọda", bullets: ["Terraces dị ka fanya juu", "Ahịrịahịrị ahịhịa na osisi n'ahịrị mkpọda"] },
            { title: "Malite n'obere", bullets: ["Nwalee n'otu akụkụ ubi", "Tụnyere ya na ụzọ i ji eme ya mgbe niile", "Jụọ ndị ndụmọdụ ugbo maka ụdị dabara obodo gị"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Jegharịa n'ugbo gị mgbe mmiri zoro ma ọ bụ lee ya ugbu a. Kaa akara ebe mmiri na-asọpụ, ebe ala na-asa, na ebe mmiri na-akwụ. Họrọ otu omume ala ma ọ bụ mmiri maka otu ebe ma dee otu ị ga-esi nwalee ya.",
          youCanNow: "ịhọrọ ma nwalee omume ala na mmiri na-edebe mmiri na ala n'ugbo gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka tied ridges na contour bunds bụ maka ya?", options: ["Ịchekwa mkpụrụ", "Inye anụ ụlọ nri", "Igbochi mmiri ịsọpụ n'ubi", "Ịkara ókè ugbo"], answer: 2, why: "Ha na-ejide mmiri ozuzo n'ubi ka ọ banye n'ala kama ịsọpụ." },
            { objective: "O4", q: "Mmiri na-asọ ngwa ngwa n'ubi gị dị mkpọda mgbe mmiri zoro, na-ebuga ala. Gịnị ka ị ga-ahọrọ?", options: ["Kọọ ala n'elu na ala mkpọda ahụ", "Kpọọ ihe fọdụrụ n'ubi ọkụ", "Hapụ ala ka ọ dị n'efu", "Ahịrịahịrị ahịhịa ma ọ bụ terraces n'ahịrị mkpọda"], answer: 3, why: "Terraces na ahịrịahịrị ahịhịa n'ahịrị mkpọda na-egbochi mbuso ala n'ala mkpọda." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhọrọ ihe ọkụkụ na ụdị mkpụrụ na-anagide",
          minutes: 5,
          goal: "Họrọ ihe ọkụkụ, ụdị mkpụrụ na usoro ịkụ ihe na-ebelata ihe egwu ihu igwe.",
          text: [
            "Ụdị mkpụrụ dị mkpa. Ụlọ ọrụ nchọpụta ọka nke CGIAR, CIMMYT, na ndị mmekọ ya azụpụtala ụdị ọka na-anagide ụkọ mmiri e wepụtara n'ọtụtụ mba dị na Africa n'okpuru Sahara; CGIAR na-akọ na ha nwere ike ịmịpụta ihe karịa ụdị nkịtị nke ọma n'oge ụkọ mmiri. Agwa na ọka na-eto ngwa ngwa na-agbanarị ụkọ mmiri nke na-abịa n'ọgwụgwụ oge. Jụọ agrovet gị ma ọ bụ onye ọrụ ndụmọdụ ugbo ụdị mkpụrụ akwadoro (certified) dabara ebe obibi gị, ma zụta mkpụrụ akwadoro n'aka ndị na-ere ihe edebara aha.",
            "Ihe ọkụkụ dịkwa mkpa. Ọka okpoko (sorghum), millet, akpụ, akịdị na fiofio na-anagide ọkọchị karịa ọka n'ọtụtụ ebe. Ịkụ ihe ọkụkụ karịa otu, na ịkụ ha ọnụ, na-ekesa ihe egwu: ọ bụrụ na otu ada, nke ọzọ nwere ike ịga nke ọma.",
            "Ụmụ ahụhụ na-agbanwe na ihu igwe. Push-pull, nke icipe na ndị mmekọ ya mepụtara, na-akụ desmodium n'etiti ọka ma ọ bụ ọka okpoko ma kụọ ahịhịa Napier ma ọ bụ Brachiaria gburugburu ya; icipe na-akọ na ọ na-ebelata mbibi stemborer, striga na fall armyworm nke ukwuu. Kụọ ihe n'ụbọchị dị iche iche n'obere akụkụ ala, ma kụọ ozugbo mmiri ozuzo malitere n'ezie."
          ],
          steps: ["Jụọ onye ọrụ ndụmọdụ ugbo ma ọ bụ agrovet maka ụdị mkpụrụ akwadoro na-anagide ụkọ mmiri ma ọ bụ na-eto ngwa ngwa maka ebe obibi gị.", "Zụta mkpụrụ akwadoro n'aka onye na-ere ihe edebara aha.", "Tinye ihe ọkụkụ siri ike n'ọkọchị (ọka okpoko, akpụ, akịdị, fiofio).", "Kụọ ihe ọnụ iji kesaa ihe egwu; tụlee push-pull maka ọka ma ọ bụ ọka okpoko.", "Kụọ ozugbo mmiri ozuzo malitere n'ezie; kụọ obere akụkụ n'ụbọchị dị iche iche."],
          words: [["Ụdị mkpụrụ na-anagide ụkọ mmiri", "ụdị ihe ọkụkụ a zụpụtara ka ọ mịa ihe karịa ndị ọzọ mgbe mmiri dị ụkọ."], ["Na-eto ngwa ngwa (early-maturing)", "na-eru owuwe n'oge, ya mere ọ nwere ike ịgbanarị ụkọ mmiri nke ọgwụgwụ oge."], ["Mkpụrụ akwadoro (certified seed)", "mkpụrụ ụlọ ọrụ gọọmentị na-ahụ maka mkpụrụ lelere maka ịdị ọcha na ịdị mma ya."], ["Push-pull", "usoro ebe desmodium na-achụpụ ụmụ ahụhụ n'ọka ma ọ bụ ọka okpoko, ahịhịa gburugburu na-adọta ha pụọ."]],
          slides: [
            { title: "Ụdị mkpụrụ", bullets: ["Ọka na-anagide ụkọ mmiri (CGIAR/CIMMYT)", "Ọka na agwa na-eto ngwa ngwa", "Mkpụrụ akwadoro n'aka ndị na-ere ihe edebara aha"] },
            { title: "Ihe ọkụkụ", bullets: ["Ọka okpoko, millet, akpụ, akịdị, fiofio", "Ihe ọkụkụ karịa otu na-ekesa ihe egwu"] },
            { title: "Ụmụ ahụhụ na oge", bullets: ["Push-pull: desmodium + ahịhịa gburugburu (icipe)", "Kụọ ozugbo mmiri ozuzo malitere n'ezie", "Kụọ obere akụkụ n'ụbọchị dị iche iche"] }
          ],
          sources: [CGIAR_MAIZE, ICIPE_PUSHPULL],
          tryIt: "Maka ihe ọkụkụ gị kachasị, chọta otu ụdị mkpụrụ akwadoro na-anagide ụkọ mmiri ma ọ bụ na-eto ngwa ngwa a na-ere nso gị (jụọ agrovet ma ọ bụ onye ọrụ ndụmọdụ ugbo), ma họrọ otu ihe ọkụkụ siri ike n'ọkọchị ị ga-agbakwunye. Dee ebe ị ga-akụ nke ọ bụla.",
          youCanNow: "ịhọrọ ihe ọkụkụ, ụdị mkpụrụ na usoro ịkụ ihe na-ebelata ihe egwu ihu igwe n'ugbo gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ụdị mkpụrụ na-eto ngwa ngwa ji enyere aka n'ebe ọkọchị?", options: ["Ha nwere ike ịgbanarị ụkọ mmiri nke ọgwụgwụ oge", "Ha chọrọ mmiri karịa", "Ụmụ ahụhụ anaghị emetụ ha mgbe ọ bụla", "Ha achọghị mkpụrụ"], answer: 0, why: "Ihe ọkụkụ na-eto ngwa ngwa na-eru tupu ụkọ mmiri nke ọgwụgwụ oge abịa." },
            { objective: "O5", q: "Ọka gị na-adakarị n'afọ ọkọchị. Gịnị ga-enye gị nchekwa?", options: ["Kụọ naanị ọka karịa", "Gbakwunye ihe ọkụkụ siri ike n'ọkọchị dị ka ọka okpoko ma ọ bụ akịdị", "Kụọ ihe mgbe onye ọ bụla kụchara", "Zụta mkpụrụ na-akwadoghị n'ahịa"], answer: 1, why: "Ịkụ ihe ọkụkụ karịa otu, gụnyere nke siri ike n'ọkọchị, na-ekesa ihe egwu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Osisi, anụ ụlọ na mkpuchi: ịkesa ihe egwu",
          minutes: 6,
          goal: "Gbakwunye opekata mpe otu ụzọ iji kesaa ihe egwu karịa ihe ọkụkụ gị kachasị, wee dee atụmatụ gị.",
          text: [
            "Osisi n'ugbo (agroforestry) na-enye ndò, ihe mgbochi ifufe, nri anụ ụlọ, mkpụrụ osisi, nkụ na osisi ụlọ, na-echebe ala, ma na-echekwa carbon. Osisi mkpụrụ dị ka mango na ube bekee (avocado), osisi na-etinye nitrogen n'ala, na osisi ókè ala nwere ike ịgbakwunye ego na-adabereghị na mmiri ozuzo otu oge.",
            "Anụ ụlọ nwere ike ịbụ nchekwa, mana ha na-atakwa ahụhụ n'oge ụkọ mmiri. Kụọ ma chekwaa nri anụ ụlọ (Napier, Brachiaria, ihe fọdụrụ n'ubi, ahịhịa kpọrọ nkụ), chebe isi mmiri, họrọ ụdị anụ siri ike, ma debe ọnụ ọgụgụ anụ ka o kwekọọ na nri ị nwere ike ịkụ ma ọ bụ zụta. Obere anụ dị ka ewu na ọkụkọ nwere ike ịdị mfe ilekọta n'afọ ọkọchị.",
            "Mkpuchi (insurance) na-ebunye ụlọ ọrụ mkpuchi akụkụ nke ihe egwu. Mkpuchi weather-index na mkpuchi area-yield na-akwụ ụgwọ mgbe mmiri ozuzo ma ọ bụ ihe ubi mpaghara dara n'okpuru ọkwa a kara aka, a na-erekwa ha n'ebe ụfọdụ site na otu nkwado (cooperatives), ndị na-ere ihe ugbo ma ọ bụ mobile money. Jụọ otu nkwado gị ma ọ bụ onye ọrụ ndụmọdụ ugbo, gụọ ihe na-eme ka ha kwụọ ụgwọ, ma lelee na onye na-ahụ maka mkpuchi na mba gị nyere ụlọ ọrụ mkpuchi ahụ ikike (na Kenya Insurance Regulatory Authority, na Naịjirịa NAICOM). Otu nchekwa ego na ụzọ ego dị iche iche na-ekesakwa ihe egwu."
          ],
          steps: ["Họrọ osisi dabara ugbo gị: mkpụrụ osisi, nri anụ ụlọ, ókè ala ma ọ bụ nke na-etinye nitrogen.", "Mee atụmatụ nri na mmiri anụ ụlọ n'oge ọkọchị niile.", "Mee ka ọnụ ọgụgụ anụ kwekọọ na nri ị nwere ike ịkụ ma ọ bụ zụta.", "Jụọ maka mkpuchi weather-index ma ọ bụ area-yield; gụọ ihe na-eme ka ha kwụọ ụgwọ; lelee na ụlọ ọrụ mkpuchi ahụ nwere ikike.", "Dee atụmatụ ọrụ ugbo kwadoro maka mgbanwe ihu igwe gị."],
          words: [["Osisi n'ugbo (agroforestry)", "ịkụ osisi ya na ihe ọkụkụ ma ọ bụ anụ ụlọ n'otu ala."], ["Nri anụ ụlọ (fodder)", "ihe ọkụkụ a kụrụ ma ọ bụ chekwaa iji zụọ anụ ụlọ."], ["Mkpuchi weather-index", "mkpuchi na-akwụ ụgwọ mgbe ihe a na-atụ n'ihu igwe, dị ka mmiri ozuzo, dara n'okpuru ọkwa a kara aka."], ["Ihe na-eme ka ha kwụọ ụgwọ (payout trigger)", "ọnọdụ na-eme ka ụlọ ọrụ mkpuchi kwụọ ụgwọ."]],
          slides: [
            { title: "Osisi n'ugbo", bullets: ["Ndò, mgbochi ifufe, nri anụ ụlọ, mkpụrụ osisi, nkụ", "Na-echebe ala, na-echekwa carbon", "Ego karịa nke otu oge"] },
            { title: "Anụ ụlọ dị ka nchekwa", bullets: ["Kụọ ma chekwaa nri anụ ụlọ", "Chebe mmiri, ụdị anụ siri ike", "Ọnụ ọgụgụ kwekọrọ na nri"] },
            { title: "Mkpuchi na nchekwa ego", bullets: ["Mkpuchi weather-index na area-yield", "Gụọ ihe na-eme ka ha kwụọ ụgwọ", "Lelee na ụlọ ọrụ mkpuchi ahụ nwere ikike"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ọrụ ugbo kwadoro maka mgbanwe ihu igwe gị dị otu peeji: kalenda ihe egwu, amụma ihu igwe nke oge a na ụbọchị i gụrụ ya, na opekata mpe omume ise (ala na mmiri, ihe ọkụkụ na ụdị mkpụrụ, ịkesa ihe egwu), ya na ụbọchị mmalite na otu ị ga-esi mara ma o mere nke ọma.",
          youCanNow: "iji osisi, anụ ụlọ, mkpuchi na nchekwa ego kesaa ihe egwu ihu igwe, ma dee atụmatụ ọrụ ugbo kwadoro maka mgbanwe ihu igwe zuru ezu maka ugbo gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ agroforestry?", options: ["Igbutu osisi maka icheku ọkụ", "Ịkụ naanị osisi", "Ịkụ osisi ya na ihe ọkụkụ ma ọ bụ anụ ụlọ", "Ịzụta osisi ụlọ"], answer: 2, why: "Agroforestry pụtara osisi n'ugbo ya na ihe ọkụkụ ma ọ bụ anụ ụlọ." },
            { objective: "O6", q: "Oge ọkọchị na-abịa, ị na-azụkwa ewu na ehi. Gịnị ka ị ga-eme atụmatụ ya?", options: ["Zụta anụ ọzọ", "Ree nri anụ ụlọ niile", "Elegharala isi mmiri anya", "Nri na mmiri, ya na ọnụ ọgụgụ anụ kwekọrọ na nri"], answer: 3, why: "Ime atụmatụ nri na mmiri na ime ka ọnụ ọgụgụ kwekọọ na nri na-echebe anụ ụlọ n'oge ụkọ mmiri." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Omume kwadoro maka mgbanwe ihu igwe",
        questions: [
          { objective: "O4", q: "Kedu nke bụ ụkpụrụ ọrụ ugbo na-echekwa ala?", options: ["Kpọọ ihe fọdụrụ n'ubi ọkụ mgbe owuwe gasịrị", "Kọọ ala miri emi kwa oge", "Debe ala ka a kpuchie ya na mulch ma ọ bụ ihe fọdụrụ n'ubi", "Kụọ otu ihe ọkụkụ ruo mgbe ebighi ebi"], answer: 2, why: "Ikpuchi ala na-edebe mmiri n'ime ya ma na-echebe ya pụọ na mbuso ala." },
          { objective: "O4", q: "Olulu ịkụ ihe (zai) na-enyere aka n'ihi na ha:", options: ["Na-anakọta mmiri ozuzo na nsị anụ gburugburu osisi ọ bụla", "Na-achụpụ nnụnụ", "Na-eme ka owuwe dị ngwa", "Na-anọchi mkpụrụ"], answer: 0, why: "Ha na-achịkọta mmiri na nri ala n'ebe mgbọrọgwụ dị." },
          { objective: "O5", q: "Ebee ka ị ga-azụta mkpụrụ ụdị na-anagide ụkọ mmiri?", options: ["N'aka onye ọ bụla na-ere n'akụkụ ụzọ", "N'ọba mkpụrụ onye agbata obi", "Site na mkpụrụ ọka a zụtara n'ahịa", "N'aka onye na-ere ihe edebara aha na-ere mkpụrụ akwadoro"], answer: 3, why: "A na-elele mkpụrụ akwadoro maka ịdị ọcha na ịdị mma ya." },
          { objective: "O5", q: "Na push-pull, gịnị ka desmodium na-eme?", options: ["Na-adọta ụmụ ahụhụ banye n'ọka", "Na-achụpụ ụmụ ahụhụ n'ọka ma ọ bụ ọka okpoko", "Na-anọchi fatịlaịza kpamkpam", "Na-azụ nnụnụ"], answer: 1, why: "Desmodium na-achụpụ ụmụ ahụhụ; ahịhịa gburugburu na-adọta ha pụọ." },
          { objective: "O6", q: "Tupu ị zụta mkpuchi weather-index, ị kwesịrị:", options: ["Ịgụ ihe na-eme ka ha kwụọ ụgwọ ma lelee na ụlọ ọrụ mkpuchi ahụ nwere ikike", "Ịkwụ onye mbụ jụrụ gị ụgwọ", "Inye PIN mobile money gị", "Ịzụtara ndị agbata obi gị ya"], answer: 0, why: "Mara mgbe ọ ga-akwụ ụgwọ, ma hụ na ụlọ ọrụ mkpuchi ahụ bụ ezi nke." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ Ugbo Nke Kwadoro Maka Mgbanwe Ihu Igwe",
    questions: [
      { objective: "O1", q: "Ọrụ ugbo kwadoro maka mgbanwe ihu igwe bụ:", options: ["Ịrụ ọrụ ugbo naanị na igwe", "Ịhọrọ omume na-ebawanye ihe ubi, na-ewulite ịkwụsi ike ma na-ebelata anwụrụ ọkụ ebe o kwere omume", "Ịrụ ọrụ ugbo naanị n'obodo mepere emepe", "Ụdị fatịlaịza"], answer: 1, why: "Nke ahụ bụ otu FAO si akọwa CSA." },
      { objective: "O1", q: "Maka ọtụtụ obere ndị ọrụ ugbo, kedu ebumnuche CSA na-ebukarị ụzọ?", options: ["Ibelata anwụrụ ọkụ", "Ịzụta drone", "Nri zuru ezu na ego", "Ibuga ihe mba ọzọ"], answer: 2, why: "FAO na-ekwu na nri na ego na-ebu ụzọ; ibelata anwụrụ ọkụ na-abụkarị uru ọzọ." },
      { objective: "O1", q: "Ịkwụsi ike (resilience) pụtara:", options: ["Ike ịnagide ihe ọjọọ ma bilie ọzọ", "Ịkụ ihe n'azụ oge", "Iji mmiri karịa", "Ụdị ala"], answer: 0, why: "Ugbo kwụsiri ike na-ebili ọzọ mgbe ụkọ mmiri ma ọ bụ iju mmiri gasịrị." },
      { objective: "O2", q: "Amụma ihu igwe nke oge gọọmentị Kenya na-esi n'aka:", options: ["KCAA", "NiMet", "Ụlọ ọrụ mkpụrụ", "Kenya Meteorological Department (KMD)"], answer: 3, why: "KMD na-ebipụta amụma ihu igwe nke oge na akwụkwọ ozi ihu igwe maka ndị ọrụ ugbo." },
      { objective: "O2", q: "Ekwesịrị iji amụma ihu igwe nke oge:", options: ["Tinye ihe niile n'otu ihe ọkụkụ", "Gbanwee atụmatụ, dị ka ịhọrọ ụdị mkpụrụ na-eto ngwa ngwa", "Leghara ụbọchị ịkụ ihe anya", "Kwụsị ọrụ ugbo"], answer: 1, why: "Amụma ihu igwe na-enye ohere; gbanwee ihe n'ụzọ kwesịrị ekwesị." },
      { objective: "O3", q: "Mmalite mmiri ozuzo (onset) pụtara:", options: ["Ọgwụgwụ owuwe ihe ubi", "Ahụhụ", "Mbido oge mmiri ozuzo", "Fatịlaịza"], answer: 2, why: "Onset bụ mgbe mmiri ozuzo malitere." },
      { objective: "O3", q: "Oge ọkọchị n'etiti mmiri ozuzo (dry spell) bụ:", options: ["Ụbọchị ma ọ bụ izu na-enweghị mmiri ozuzo bara uru n'oge mmiri ozuzo", "Iju mmiri", "Abalị oyi", "Ụbọchị ahịa"], answer: 0, why: "Oge ọkọchị n'etiti oge nwere ike imebi ihe ọkụkụ n'oge dị mkpa." },
      { objective: "O3", q: "Ọka na-eme ifuru n'ọnwa nke oge ọkọchị na-adịkarị bụ:", options: ["Ohere ahịa", "Ezi ihe ịrịba ama", "Usoro ịkụ ihe", "Oge ihe egwu"], answer: 3, why: "Oge dị mkpa na-ezute nnukwu ihe egwu bụ oge ihe egwu." },
      { objective: "O4", q: "Ịkpọ ihe fọdụrụ n'ubi ọkụ:", options: ["Bụ ụkpụrụ ọrụ ugbo na-echekwa ala", "Na-ahapụ ala n'efu ma na-efunahụ ihe ndụ dị n'ala", "Na-ejide mmiri karịa n'ala", "Kwadoro maka mgbanwe ihu igwe"], answer: 1, why: "Ihe fọdụrụ n'ubi e debere dị ka mulch na-echebe ma na-azụ ala." },
      { objective: "O4", q: "Ịkọ ala obere (minimum tillage) pụtara:", options: ["Ịkọ ala ugboro abụọ", "Ịghara iwepụ ahịhịa", "Imebi ala obere otu o kwere omume", "Ịkụ naanị osisi"], answer: 2, why: "Imebi ala obere na-echebe usoro ala na mmiri dị na ya." },
      { objective: "O4", q: "Kedu omume na-egbochi mbuso ala n'ala mkpọda?", options: ["Terraces dị ka fanya juu, na ahịrịahịrị ahịhịa n'ahịrị mkpọda", "Ịkọ ala kwụ ọtọ n'ala mkpọda", "Iwepụ ahịhịa niile", "Ịkpọ ala mkpọda ọkụ"], answer: 0, why: "Terraces na ahịrịahịrị n'ahịrị mkpọda na-eme ka mmiri jee nwayọọ ma jide ala." },
      { objective: "O4", q: "Ọdọ mmiri e gwuru egwu (water pan) bụ:", options: ["Ite esi nri", "Ọnyà ahụhụ", "Mkpọ mkpụrụ", "Ọdọ e gwuru egwu na-echekwa mmiri ozuzo"], answer: 3, why: "Ọdọ mmiri na-echekwa mmiri maka anụ ụlọ na obere ịgba mmiri n'ubi." },
      { objective: "O5", q: "CGIAR na-akọ na ụdị ọka na-anagide ụkọ mmiri:", options: ["Chọrọ mmiri karịa", "Nwere ike ịmịpụta ihe karịa ụdị nkịtị nke ọma n'oge ụkọ mmiri", "Enweghị ike ito na Africa", "Bụ otu ihe ahụ ọka nkịtị bụ"], answer: 1, why: "A zụpụtara ha ka ha mee nke ọma mgbe mmiri dị ụkọ." },
      { objective: "O5", q: "Kedu ihe ọkụkụ na-anagidekarị ọkọchị karịa ọka?", options: ["Osikapa n'ọdọ mmiri", "Okpete", "Ọka okpoko (sorghum)", "Tii"], answer: 2, why: "Ọka okpoko bụ ihe ọkụkụ mkpụrụ siri ike n'ọkọchị." },
      { objective: "O5", q: "Ịkụ ọka na agwa ma ọ bụ akịdị ọnụ:", options: ["Na-ekesa ihe egwu ma na-agbakwunye mkpụrụ agwa", "Na-ebelata ego mgbe niile", "Ekweghị ekwe", "Chọrọ drone"], answer: 0, why: "Ihe ọkụkụ abụọ na-ekesa ihe egwu; mkpụrụ agwa na-agbakwunye nitrogen." },
      { objective: "O5", q: "Na push-pull, ahịhịa gburugburu:", options: ["Na-achụpụ ụmụ ahụhụ", "A na-ewe ya buga mba ọzọ", "A na-agba ya ọgwụ", "Na-adọta ụmụ ahụhụ pụọ n'ihe ọkụkụ"], answer: 3, why: "Ahịhịa Napier ma ọ bụ Brachiaria gburugburu na-adọta ụmụ ahụhụ pụọ." },
      { objective: "O6", q: "Agroforestry pụtara:", options: ["Igbutu ọhịa maka ihe ọkụkụ", "Ịkụ osisi ya na ihe ọkụkụ ma ọ bụ anụ ụlọ", "Ịkụ naanị ifuru", "Ịzụta osisi ụlọ"], answer: 1, why: "Osisi n'ugbo na-agbakwunye ego, ndò na nchekwa ala." },
      { objective: "O6", q: "N'oge ụkọ mmiri, ndị na-azụ anụ ụlọ kwesịrị:", options: ["Ịnọgide na-agbakwunye anụ", "Ire nri anụ ụlọ niile", "Ime atụmatụ nri na mmiri ma mee ka ọnụ ọgụgụ anụ kwekọọ na nri", "Ịkwụsị inye anụ mmiri"], answer: 2, why: "Ime atụmatụ nri na mmiri na-eme ka anụ ụlọ dị ndụ n'oge ọkọchị." },
      { objective: "O6", q: "Ihe na-eme ka ha kwụọ ụgwọ (payout trigger) na mkpuchi weather-index bụ:", options: ["Ọnọdụ na-eme ka ụlọ ọrụ mkpuchi kwụọ ụgwọ", "Ọnụ ahịa mkpụrụ", "Ụdị egbe", "Adreesị ụlọ ọrụ mkpuchi"], answer: 0, why: "Ọ na-akọwa mgbe mkpuchi ahụ ga-akwụ ụgwọ." },
      { objective: "O4", q: "Tupu i jiri omume ọhụrụ n'ugbo gị niile, ị kwesịrị:", options: ["Iji ya ebe niile n'otu oge", "Ileghara ndụmọdụ ndị ọrụ ndụmọdụ ugbo anya", "Ichere afọ iri", "Ịnwale ya n'obere ala ma tụnyere"], answer: 3, why: "Obere nnwale na-egosi ma ọ na-arụ ọrụ n'ugbo gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 7, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Kalenda ihe egwu ihu igwe", objective: "O3", notYet: "Ọnwa, ọrụ ma ọ bụ ihe egwu adịghị, ma ọ bụ enweghị oge ihe egwu.", meets: "Ọnwa iri na abụọ nwere oge, ọrụ ugbo, ihe egwu na opekata mpe oge ihe egwu abụọ a gbara gburugburu.", exceeds: "Gụnyere ihe ndị ọrụ ugbo merela agadi kwuru gbanwere." },
      { name: "Amụma ihu igwe nke oge", objective: "O2", notYet: "Enweghị amụma ihu igwe, ma ọ bụ enweghị ụbọchị ma ọ bụ ebe o si.", meets: "Ihe amụma ihu igwe gọọmentị nke oge a na-ekwu, ebe o si na ụbọchị a gụrụ ya.", exceeds: "Na-egosi mgbanwe abụọ e mere n'atụmatụ n'ihi amụma ahụ." },
      { name: "Omume ala na mmiri", objective: "O4", notYet: "Enweghị omume ala ma ọ bụ mmiri.", meets: "Opekata mpe otu omume ala ma ọ bụ mmiri dabara ugbo ahụ, ya na ụbọchị mmalite.", exceeds: "E mere atụmatụ ya dị ka obere nnwale a tụnyere na ụzọ a na-eme ya mgbe niile." },
      { name: "Ihe ọkụkụ na ụdị mkpụrụ", objective: "O5", notYet: "Enweghị omume ihe ọkụkụ ma ọ bụ ụdị mkpụrụ.", meets: "Opekata mpe otu omume ụdị mkpụrụ ma ọ bụ ihe ọkụkụ na-ebelata ihe egwu, ya na mkpụrụ akwadoro sitere n'aka onye na-ere ihe edebara aha.", exceeds: "Gụnyekwara ịkụ ihe ọnụ ma ọ bụ push-pull ebe ọ dabara." },
      { name: "Ịkesa ihe egwu", objective: "O6", notYet: "Enweghị ụzọ ịkesa ihe egwu karịa ihe ọkụkụ kachasị.", meets: "Opekata mpe otu omume osisi, anụ ụlọ ma ọ bụ mkpuchi, ya na ụbọchị mmalite.", exceeds: "Maka mkpuchi, na-akpọ aha ihe na-eme ka ha kwụọ ụgwọ ma na-elele na ụlọ ọrụ mkpuchi ahụ nwere ikike." },
      { name: "Omume ise na ihe ngosi ịga nke ọma", objective: "O1", notYet: "Omume erughị ise, ma ọ bụ enweghị ụzọ isi mara ma o mere nke ọma.", meets: "Opekata mpe omume ise, nke ọ bụla nwere mgbe a ga-amalite ya na otu a ga-esi mara ma ọ rụrụ ọrụ.", exceeds: "Na-edetu ebumnuche ọrụ ugbo kwadoro maka mgbanwe ihu igwe omume ọ bụla na-enyere aka." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị ọrụ ugbo jiri opekata mpe omume ọhụrụ abụọ kwadoro maka mgbanwe ihu igwe n'oge a (nnyocha nsochi)",
      "Owuwe ihe ubi na ego a tụnyere na oge ọkọchị ma ọ bụ oge siri ike na nso nso a, dị ka ndị ọrụ ugbo ma ọ bụ ndị mmekọ kọrọ",
      "Ndị ọrụ ugbo na-elele amụma ihu igwe nke oge gọọmentị tupu ha akụọ ihe, ma ọ bụ na-anabata mkpuchi ihe ọkụkụ ma ọ bụ anụ ụlọ nwere ikike"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ redio iji nweta amụma ihu igwe nke oge, ma ọ bụ akwụkwọ ozi ndụmọdụ ugbo",
      "Akwụkwọ na mkpịsị ode (ma ọ bụ spreadsheet n'ekwentị) maka kalenda ihe egwu ihu igwe na atụmatụ",
      "Ohere ịbanye n'ugbo onye na-amụ ihe ma ọ bụ ugbo ọmụmaatụ iji jegharịa n'ime ya",
      "Ozi ịkpọtụrụ onye ọrụ ndụmọdụ ugbo ma ọ bụ agrovet maka ụdị mkpụrụ na ụdị omume dabara obodo",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere oge n'ugbo maka njegharị na atụmatụ"
    ],
    facilitatorNotes: [
      "Mee nnọkọ na otu ndị ọrụ ugbo tupu oge amalite ka atụmatụ wee dị njikere tupu ịkụ ihe.",
      "Gụkọọ amụma ihu igwe gọọmentị kachasị ọhụrụ ọnụ ma kọwaa na ọ na-enye ohere, ọ bụghị nkwa.",
      "Buru ụzọ see otu kalenda ihe egwu ihu igwe nke otu ahụ, wee hapụ ndị ọrụ ugbo ka ha see nke ha; kpọọ ndị ọrụ ugbo merela agadi ka ha kọọ ihe gbanwere.",
      "Gbaa ume ka a nwalee omume ọhụrụ n'obere ala, ma kpọọ onye ọrụ ndụmọdụ ugbo maka ụdị omume na ụdị mkpụrụ dabara obodo.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
