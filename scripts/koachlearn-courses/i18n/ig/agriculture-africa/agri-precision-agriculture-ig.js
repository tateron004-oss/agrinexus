"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-precision-agriculture.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const COPERNICUS = { name: "Copernicus Data Space Ecosystem na Copernicus Browser (data Sentinel n'efu, ghere oghe)", url: "https://dataspace.copernicus.eu/" };
const ESA_S2 = { name: "European Space Agency: Sentinel-2 (pixel 10 m, ọ na-alọghachi kwa ụbọchị 5)", url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2" };
const DEAFRICA = { name: "Digital Earth Africa (ọrụ satellite n'efu, gụnyere mgbanwe NDVI na map ala a na-akọ)", url: "https://www.digitalearthafrica.org/" };
const GPS_ACC = { name: "GPS.gov: izi ezi GPS (smartphone dị ka 4.9 m n'ebe mbara igwe ghere oghe)", url: "https://archive.gps.gov/systems/gps/performance/accuracy/" };
const IFDC_KITS = { name: "IFDC: Nyocha ngwa nnwale ala a na-ebugharị, ihe a mụtara", url: "https://hub.ifdc.org/handle/20.500.14297/2026" };
const EMBU = { name: "Nyocha otu sensọ dị nso si arụ ọrụ maka ịlele ala n'obere ugbo na Embu County, Kenya", url: "https://alliancebioversityciat.org/publications-data/performance-evaluation-proximal-sensors-soil-assessment-smallholder-farms-embu" };
const ISDA = { name: "iSDAsoil: map njirimara ala maka Afrịka niile na 30 m (PLOS Biology, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8584968/" };
const KALRO = { name: "Kenya Agricultural and Livestock Research Organization (KALRO), ụlọ ọrụ nchọcha ugbo nke Kenya", url: "https://www.kalro.org" };

module.exports = {
  id: "agri-precision-agriculture-ig",
  lang: "ig",
  translationOf: "agri-precision-agriculture",
  category: "Agriculture (Africa)",
  name: "Ọrụ Ugbo Ziri Ezi (Precision Agriculture): Nlekọta site na Satellite na Sensọ Ala",
  skills: "Ịhụ ihe dị iche n'ime otu ubi, Ịgụ map NDVI satellite n'efu nke ọma, Ime map ubi site na GPS ekwentị, Ịhọrọ ule ala na sensọ na ịmata ma a ga-atụkwasị ha obi, Ịtụle ego e mefuru na uru, Ime map mpaghara ubi nwere atụmatụ maka mpaghara ọ bụla",
  outcome: "ikewa otu n'ime ubi gị n'ime mpaghara site n'iji map satellite n'efu, GPS ekwentị, ule ala na anya na ndekọ gị, na ide atụmatụ dị ọnụ ala maka mpaghara ọ bụla nke ị nwere ike imefu ego ya ma lelee.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị obere ugbo na ndị ugbo azụmahịa na-eto eto, ndị na-elekọta ugbo, ụmụ okorobịa na ụmụ agbọghọ na-azụ ahịa ugbo (agripreneurs) na ndị ndụmọdụ ugbo (extension) chọrọ ịkọ ugbo \"n'ụzọ ziri ezi\" n'enweghị nnukwu igwe. Precision agriculture pụtara inye akụkụ ọ bụla nke ubi ihe ọ chọrọ, kama ime ubi ahụ niile otu ihe.",
    "Ị ga-amụta ịhụ ihe dị iche n'ime ubi, ịgụ map ihe ọkụkụ satellite n'efu (na ịmata ebe ike ya kwụsịrị), ime map ubi na mpaghara ya site na ekwentị, ịhọrọ ule ala na sensọ ma mata otu ị ga-esi tụkwasị ha obi, na ikpebi ma ngwa ọ bara uru karịa ego ya. Ị ga-emecha site na map mpaghara nke ubi gị na atụmatụ maka mpaghara ọ bụla.",
    "Ọ dịghị mkpa drone. Ọ bụrụ na ị chọrọ ime map site na drone, ihe ọmụmụ \"Drone maka Nlekọta Ugbo\" na-akụzi ya. Ọnụọgụ ego bụ naanị ọmụmaatụ. Nkuzi ọ bụla na-ejedebe n'ọrụ n'ubi gị; nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Mee map mpaghara nke otu n'ime ubi gị: jiri app GPS na ekwentị jegharịa ma dekọọ oke ubi ahụ, kewaa ubi ahụ n'ime mpaghara 2 ruo 4 site n'iji opekata mpe ụdị ihe akaebe abụọ (NDVI satellite n'ụbọchị abụọ, ihe ule ala ma ọ bụ kit gosiri, owuwe ihe ubi gara aga, ihe ị hụrụ), dee oke na ihe akaebe nke mpaghara ọ bụla, ma dee atụmatụ maka mpaghara ọ bụla (ihe ị ga-eme n'ụzọ dị iche, ego ọ ga-efu n'ego obodo gị dị ka ọmụmaatụ, na otu ị ga-esi lelee n'oge ọkụkụ ọzọ ma ọ rụrụ ọrụ).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị obere ugbo na ndị ugbo azụmahịa na-eto eto, ndị na-elekọta ugbo, ụmụ okorobịa na ụmụ agbọghọ na-azụ ahịa ugbo na ndị ndụmọdụ ugbo na Kenya, Naịjirịa, Ghana, Côte d'Ivoire, Senegal na Afrịka niile, ndị na-akọ ọka, osikapa, ọka okpoko (sorghum), akpụ, agwa, ahụekere, tomato, kọfị na koko n'ubi dị obere karịa otu hekta ruo ọtụtụ iri hekta.",
    startingPoint: "Ha maara ubi ha nke ọma site n'anya ma na-eji smartphone. Ọtụtụ na-eme ubi ọ bụla otu ihe: otu ọnụọgụ fatịlaịza, otu ọnụọgụ mkpụrụ. Ole na ole ejirila map satellite, ngwa GPS ekwentị na-atụ oke ala ma ọ bụ ule ala, ọtụtụ anụkwala nnukwu okwu banyere sensọ na app.",
    gap: "N'ime otu ubi, ala, mmiri na owuwe ihe ubi nwere ike ịdị iche nke ukwuu, ya mere otu ọnụọgụ na-emebi ihe a na-etinye n'ala n'akụkụ ụfọdụ ma na-eme ka akụkụ ndị ọzọ kọọ. Ndị na-amụ ihe kwesịrị ịhụ ihe ndị a dị iche site na ngwa n'efu na ngwa dị ọnụ ala, mata ngwa a ga-atụkwasị obi maka gịnị, ma gbanwee ha ka ọ bụrụ atụmatụ mpaghara dị mfe na-akwụ ụgwọ n'obere ugbo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: smartphone; kọmputa na-enyere aka maka ihe nlele satellite mana ọ bụghị iwu",
      "Ubi dị obere ma gwakọta: foto satellite n'efu (pixel dị ka 10 m) adịghị nkọ maka ubi dị obere karịa ọkara hekta",
      "Igwe ojii n'oge udu mmiri na-egbochi foto satellite",
      "Ego: ngwa dị ọnụ ala na mbụ; ọnụọgụ niile bụ ọmụmaatụ; anyị anaghị akwado ngwaahịa ọ bụla",
      "Ọgwụ ahụhụ na fatịlaịza: naanị ngwaahịa e debanyere aha, jiri ha otu akara ha si kwuo"
    ],
    prerequisites: "Inwe ike iji smartphone n'enweghị nsogbu. \"Ahụike Ala na Ọmụmụ Ya\" na \"Data na Teknụzụ n'Ọrụ Ugbo\" na-enyere aka ma ọ bụrụ na e buru ụzọ were ha."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-ejegharị n'otu n'ime ubi gị", action: "ịdepụta ihe dị iche n'ime ubi ahụ nke precision agriculture nwere ike ime ihe banyere ya", standard: "na-akpọ aha opekata mpe ihe atọ dị iche na otu i si hụ nke ọ bụla" },
    { id: "O2", condition: "Site n'iji ihe nlele satellite n'efu dị ka Copernicus Browser", action: "ịchọta ubi gị ma tụnyere NDVI ya n'ụbọchị abụọ", standard: "ma kwuo otu ihe map ahụ na-egosi na otu ihe ọ na-apụghị igosi" },
    { id: "O3", condition: "Site n'iji app GPS na ekwentị", action: "ịdekọ oke ubi na oke mpaghara ya ma gụọ oke ala ha", standard: "na-echeta na mperi nwere ike ịdị ihe dị ka mita 5" },
    { id: "O4", condition: "Mgbe e nyere gị nhọrọ ule laabụ, kit nnwale ma ọ bụ sensọ aka", action: "ịhọrọ ụzọ ule ala, were ihe atụ ala site na mpaghara ọ bụla ma kwuo otu ị ga-esi tụkwasị ihe ọ bụla gosiri obi", standard: "na-atụkwasị pH obi karịa nitrogen, phosphorus na potassium nke kit gosiri" },
    { id: "O5", condition: "Mgbe e nyere gị ngwa ma ọ bụ omume precision na ọnụọgụ ubi gị", action: "ịtụnyere ego ọ ga-efu na uru a na-atụ anya ya ma kpebie ma ị ga-eji ya", standard: "site n'iji partial budget dị mfe n'ego obodo gị" },
    { id: "O6", condition: "Mgbe e nyere gị ihe akaebe site n'opekata mpe isi iyi abụọ", action: "ikewa ubi n'ime mpaghara nlekọta 2 ruo 4 ma dee atụmatụ maka mpaghara ọ bụla", standard: "atụmatụ ọ bụla dị ọnụ ala ị nwere ike ịkwụ ma nwee ike ilele n'oge ọkụkụ ọzọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhụ ubi gị n'akụkụ n'akụkụ",
      lessons: [
        {
          title: "Ihe precision agriculture bụ, n'obere ugbo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta ihe dị iche n'ime otu n'ime ubi gị nke ị nwere ike ilekọta iche iche.",
          text: [
            "Precision agriculture pụtara ilekọta akụkụ dị iche iche nke ubi n'ụzọ dị iche, n'ihi na ha dị iche. Otu nkuku ubi ọka nwere ike ịbụ ájá na nkụ, akụkụ dị ala jupụta na mmiri, etiti ya bụrụ ala ọma n'ihi na e debere ehi ebe ahụ. Ime ubi ahụ niile otu ihe na-emebi fatịlaịza na mkpụrụ n'akụkụ ụfọdụ ma na-eme ka akụkụ ndị ọzọ kọọ.",
            "N'ugbo buru ibu, a na-eme nke a site na traktọ na-agbanwe ọnụọgụ ya n'onwe ya. N'obere ugbo, ị nwere ike iji aka mee otu ihe ahụ: nsị anụmanụ karịa ebe ala adịghị mma, ụzọ mmiri n'ebe mmiri na-ekwụ, ụdị mkpụrụ ọzọ n'ugwu nkụ, ma ọ bụ enweghị fatịlaịza ebe ihe ọkụkụ anaghị akwụ ụgwọ. Echiche ahụ bụ otu: lee anya, tụọ, kpebie site na mpaghara, ma lelee ihe pụtara.",
            "Ị maralarị ọtụtụ ihe site n'anya. Jegharịa n'ubi ma dee ebe ihe ọkụkụ dị mkpụmkpụ, na-acha odo odo ma ọ bụ na-adịghị nhata, ebe mmiri na-ekwụ, ebe ahịhịa dị ka Striga na-apụta, na ebe owuwe ihe ubi dị mma ma ọ bụ dị njọ. Jụọ ndị ọrụ na-asụ ahịhịa ma na-ewe ihe ubi: ha na-ahụ nkuku ọ bụla. Map satellite, GPS na ule ala, na nkuzi ndị na-esote, na-enyere gị aka ikwado na ịtụ ihe ị hụrụ."
          ],
          steps: ["Jegharịa n'ubi niile, n'akụkụ na n'etiti.", "Dee ebe ihe ọkụkụ adịghị ike, ebe mmiri na-ekwụ, ebe ahịhịa ma ọ bụ ahụhụ ka njọ.", "Jụọ ndị ọrụ ebe owuwe ihe ubi dị mma ma ọ bụ dị njọ.", "Dee ihe ọ bụla dị iche na otu i si hụ ya.", "Tinye ha n'ihe osise ubi ahụ i sere n'ọsọ."],
          words: [["Precision agriculture", "ilekọta akụkụ dị iche iche nke ubi n'ụzọ dị iche, dabere n'ilele anya na ịtụ ihe."], ["Ọdịiche (variability)", "otu ala, mmiri ma ọ bụ uto ihe ọkụkụ si agbanwe site n'otu akụkụ ubi gaa n'akụkụ ọzọ."], ["Mpaghara nlekọta (management zone)", "akụkụ ubi a na-elekọta dị ka otu n'ihi na ọ na-akpa àgwà n'otu ụzọ."]],
          slides: [
            { title: "Otu ubi, ọtụtụ akụkụ", bullets: ["Ugwu ájá, akụkụ dị ala nwere mmiri, ebe ehi nọbu nwere ala ọma", "Ime ha niile otu ihe na-emebi ihe a na-etinye n'ala"] },
            { title: "Precision site n'aka", bullets: ["Nsị anụmanụ karịa ebe ala adịghị mma", "Ụzọ mmiri n'ebe mmiri na-ekwụ", "Ụdị mkpụrụ kwesịrị ekwesị maka akụkụ ọ bụla"] },
            { title: "Lee anya, tụọ, kpebie, lelee", bullets: ["Anya gị na ndekọ gị na-ebu ụzọ", "Ngwa na-akwado ma na-atụ"] },
            { title: "Jegharịa ma jụọ", bullets: ["Ihe ọkụkụ adịghị ike, na-acha odo odo ma ọ bụ na-adịghị nhata", "Mmiri na-ekwụ, ahịhịa, ahụhụ", "Jụọ ndị ọrụ"] }
          ],
          tryIt: "Jegharịa n'otu n'ime ubi gị. See ihe osise ubi ahụ n'ọsọ ma tinye opekata mpe ihe atọ dị iche (dịka ọmụmaatụ ebe adịghị ike, ebe mmiri, ebe ahịhịa jupụtara). N'akụkụ nke ọ bụla, dee otu i si hụ ya: site n'anya, site n'owuwe ihe ubi, ma ọ bụ site n'aka ndị ọrụ.",
          youCanNow: "ịhụ ubi dị ka akụkụ dị iche iche, na ịdepụta ihe dị iche ị nwere ike ilekọta iche iche.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ isi echiche nke precision agriculture?", options: ["Ịzụta igwe kachasị ọnụ", "Iji otu ọnụọgụ n'ebe niile", "Ilekọta akụkụ dị iche iche nke ubi n'ụzọ dị iche", "Ịkọ ugbo naanị site na drone"], answer: 2, why: "Ọ na-enye akụkụ ọ bụla nke ubi ihe ọ chọrọ." },
            { objective: "O1", q: "Onye nwere ike ịgwa gị ngwa ngwa ebe owuwe ihe ubi adịghị mma n'ubi?", options: ["Ndị ọrụ na-asụ ahịhịa ma na-ewe ihe ubi ahụ", "Mgbasa ozi maka sensọ", "Onye na-azụ ahịa n'obodo mepere emepe", "Ọ dịghị onye"], answer: 0, why: "Ndị ọrụ na-ahụ nkuku ọ bụla nke ubi n'oge ọkụkụ niile." }
          ]
        },
        {
          title: "Map satellite n'efu na ihe NDVI na-egosi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tụnyere NDVI ubi gị n'ụbọchị abụọ n'ihe nlele satellite n'efu.",
          text: [
            "Satellite Sentinel-2 nke Europe na-ese foto Afrịka niile ihe dị ka ụbọchị 5 ọ bụla, nwere pixel nke mita 10 (otu pixel bụ square 10 m x 10 m). Foto ndị a bụ n'efu ma ghere oghe. Copernicus Browser na-ekwe ka ị lee ha n'akwụghị ụgwọ; ị nwere ike ịmalite n'enweghị akaụntụ, akaụntụ n'efu na-enyekwa nhọrọ ndị ọzọ. Digital Earth Africa na-enyekwa ọrụ satellite n'efu, dị ka map mgbanwe NDVI na map ala a na-akọ, e mere maka Afrịka.",
            "NDVI (Normalised Difference Vegetation Index) bụ ọnụọgụ si n'agba ndị osisi na-agbaghachi. Akwụkwọ ndụ dị mma, jupụtara ma na-acha akwụkwọ ndụ na-enye NDVI dị elu; ala tọgbọrọ chakoo, ihe ọkụkụ kpọrọ nkụ ma ọ bụ dị mkpa na-enye NDVI dị ala. N'ihe nlele ahụ, chọta ubi gị, họrọ ihe ngosi NDVI, ma tụnyere ụbọchị abụọ, dịka ọmụmaatụ izu anọ na izu asatọ mgbe ị kụrụ. Ebe na-anọgide na-adị ala mgbe ndị ọzọ dị elu kwesịrị ka ị jegharịa gaa lee ya.",
            "Ihe NDVI ANAGHỊ egosi: ihe kpatara ya. NDVI dị ala nwere ike ịbụ ụkọ mmiri, mmiri juru oke, ụkọ nitrogen, ahụhụ, ọrịa, ahịhịa ma ọ bụ ịkụ ihe n'oge. Ọ pụghịkwa ịhụ ihe dị n'okpuru igwe ojii, n'oge udu mmiri ị nwere ike ichere ọtụtụ izu maka foto doro anya. N'ubi dị obere karịa ọkara hekta, ma ọ bụ ubi dị ogologo ma dị warara, pixel 10 m adịghị nkọ ma na-agwakọta ihe ọkụkụ ma ọ bụ osisi onye agbata obi. Ahịhịa nwekwara ike ịdị ka akwụkwọ ndụ dị mma. Ya mere NDVI na-agwa gị ebe ị ga-ele anya, ụkwụ gị na-agwakwa gị ihe kpatara ya."
          ],
          steps: ["Meghee Copernicus Browser na kọmputa ma ọ bụ na browser ekwentị.", "Chọọ mpaghara gị ma bubie ihe ruo n'ubi gị.", "Họrọ foto nwere obere igwe ojii na ihe ngosi NDVI.", "Tụnyere ụbọchị abụọ n'otu oge ọkụkụ.", "Tinye ebe dị ala n'ihe osise gị ma jegharịa gaa n'ebe ahụ chọta ihe kpatara ya."],
          words: [["Sentinel-2", "satellite abụọ nke Europe na-ese foto ụwa n'efu ihe dị ka ụbọchị 5 ọ bụla na nkọwa 10 m."], ["NDVI", "ọnụọgụ si n'agba satellite na-egosi otu osisi si acha akwụkwọ ndụ ma jupụta."], ["Pixel", "otu square nke foto satellite; maka Sentinel-2, ọ bụ 10 m x 10 m."]],
          slides: [
            { title: "Foto satellite n'efu", bullets: ["Sentinel-2: ihe dị ka ụbọchị 5 ọ bụla, pixel 10 m", "Copernicus Browser: ilele ya bụ n'efu", "Digital Earth Africa: ọrụ n'efu maka Afrịka"] },
            { title: "Ihe NDVI na-egosi", bullets: ["Elu: osisi jupụtara ma na-acha akwụkwọ ndụ", "Ala: ala tọgbọrọ chakoo, kpọrọ nkụ ma ọ bụ ihe ọkụkụ dị mkpa", "Tụnyere ụbọchị abụọ"] },
            { title: "Ihe NDVI ANAGHỊ egosi", bullets: ["Ihe kpatara ebe dị ala", "Ihe ọ bụla dị n'okpuru igwe ojii", "Nkọwa n'ubi dị obere karịa ọkara hekta"] },
            { title: "Map na-egosi ebe, ụkwụ na-egosi ihe mere", bullets: ["Tinye akara n'ebe dị ala", "Jegharịa gaa ebe ahụ ma chọta ihe kpatara ya"] }
          ],
          sources: [COPERNICUS, ESA_S2, DEAFRICA],
          tryIt: "Meghee Copernicus Browser, chọta otu n'ime ubi gị (ma ọ bụ ubi dị nso gị), ma lee NDVI n'ụbọchị abụọ doro anya n'oge ọkụkụ a. Tinye ebe ọ bụla dị ala n'ihe osise gị, wee jegharịa gaa ebe ahụ ma dee ihe ị chere kpatara ya.",
          youCanNow: "ịgụ map NDVI satellite n'efu nke ubi gị ma jiri ya kpebie ebe ị ga-ele anya, ọ bụghị ihe kpatara ya.",
          quickCheck: [
            { objective: "O2", q: "Otu akụkụ ubi ọka gị nwere NDVI dị ala. Gịnị ka nke ahụ na-agwa gị?", options: ["O nwere ụkọ nitrogen", "O nwere ikpuru fall armyworm", "Ọ chọrọ ịgba mmiri", "Osisi ebe ahụ anaghị acha akwụkwọ ndụ nke ọma ma ọ bụ dị mkpa, ya mere jegharịa gaa chọpụta ihe mere"], answer: 3, why: "NDVI na-egosi ebe uto adịghị ike, ọ bụghị ihe kpatara ya." },
            { objective: "O2", q: "Gịnị mere map Sentinel-2 n'efu ji sie ike iji n'ubi hekta 0.2?", options: ["Pixel 10 m adịghị nkọ ma na-agwakọta ala gbara ya gburugburu", "Foto ndị ahụ bụ naanị maka Europe", "Ọ dị oke ọnụ", "NDVI anaghị arụ ọrụ n'ọka"], answer: 0, why: "Ubi hekta 0.2 bụ naanị pixel iri abụọ na ole na ole, ọtụtụ n'ime ha gwakọtara na oke ya." }
          ]
        },
        {
          title: "Ime map ubi site na GPS ekwentị gị",
          objectives: ["O3"],
          minutes: 5,
          goal: "Dekọọ oke ubi na mpaghara ya site n'app GPS na ekwentị ma gụọ oke ala ha.",
          text: [
            "GPS ekwentị nwere ike ime map ubi gị. Ọtụtụ app n'efu nwere ike ịdekọ oke ị jegharịrị ma ọ bụ kwe ka ị tinye ntụpọ gburugburu ubi wee gosi oke ala ya. Ị nwekwara ike itinye pin na app map ma kesaa ebe ọ dị (coordinates). Ịmara ezi oke ubi na mpaghara ọ bụla dị mkpa: fatịlaịza, mkpụrụ, ọrụ aka na owuwe ihe ubi kwa acre ma ọ bụ hekta niile dabere na ya, ọtụtụ ndị ọrụ ugbo na-achọpụtakwa na ubi ha buru ibu ma ọ bụ dị obere karịa ka ha chere.",
            "GPS adịghị ezi ezi kpọmkwem. N'ebe mbara igwe ghere oghe, smartphone na-adịkarị ezi ezi ruo ihe dị ka mita 5, ọ na-akakwa njọ n'akụkụ osisi, ụlọ na na ndagwurugwu. N'obere ubi, mperi ahụ dị mkpa: jee nwayọọ, guzoro sekọnd ole na ole na nkuku ọ bụla, debe ekwentị n'ebe mbara igwe ghere oghe, ma jegharịa oke ahụ ugboro abụọ ka i tụnyere. Ọ bụrụ na oke ala abụọ ahụ dị iche nke ukwuu, jegharịa ya ọzọ.",
            "Mee map mpaghara ndị ahụ kwa. Jegharịa n'oke ebe mmiri na-ekwụ ma ọ bụ ugwu ájá ma chekwaa ya dị ka ọdịdị (shape) dị iche, ma ọ bụ tinye pin na nkuku ya. Kpọọ ọdịdị ọ bụla aha ubi na mpaghara ya (\"F2 Zone A wet\"), ma chekwaa faịlụ ahụ ma ọ bụ screenshot nwere oke ala ya. Ọdịdị ndị a ga-abụ ntọala map mpaghara gị na Nkuzi 6."
          ],
          steps: ["Meghee app GPS na-atụ oke ala ma ọ bụ app map n'èzí n'ebe mbara igwe ghere oghe.", "Jegharịa n'oke ubi nwayọọ, na-akwụsị na nkuku ọ bụla.", "Gụọ ma dekọọ oke ala ya; jegharịa ya ọzọ ka i lelee.", "Jegharịa ma ọ bụ tinye pin n'oke mpaghara ọ bụla ma chekwaa nke ọ bụla n'aha.", "Chekwaa faịlụ ahụ ma ọ bụ screenshot nwere oke ala ndị ahụ."],
          words: [["GPS", "Global Positioning System: satellite na-enyere ekwentị aka ịmata ebe ọ nọ n'ụwa."], ["Oke ubi (boundary)", "ọnụ ubi, ebe ubi kwụsịrị."], ["Hekta", "oke ala nke 100 m x 100 m, ihe dị ka acre 2.5."]],
          slides: [
            { title: "Ekwentị gị nwere ike ime map ubi", bullets: ["Jegharịa n'oke ubi ma ọ bụ tinye ntụpọ na nkuku", "Gụọ oke ala ya", "Oke ubi na-achịkwa ọnụọgụ ọ bụla kwa acre"] },
            { title: "GPS adịghị ezi ezi kpọmkwem", bullets: ["Ihe dị ka 5 m n'ebe mbara igwe ghere oghe", "Ọ na-aka njọ n'akụkụ osisi, ụlọ, ndagwurugwu"] },
            { title: "Ihe a gụrụ ka mma", bullets: ["Jee nwayọọ, kwụsị na nkuku", "Jegharịa ugboro abụọ ma tụnyere"] },
            { title: "Mee map mpaghara", bullets: ["Otu ọdịdị echekwara maka mpaghara ọ bụla", "Aha: F2 Zone A wet", "Chekwaa oke ala ya"] }
          ],
          sources: [GPS_ACC],
          tryIt: "Jiri app GPS na ekwentị jegharịa oke otu ubi ugboro abụọ ma dee oke ala abụọ ahụ. Wee mee map oke otu mpaghara i chọtara na Nkuzi 1, kpọọ ya aha, ma dee oke ala ya.",
          youCanNow: "ime map ubi na mpaghara ya site na GPS ekwentị ma dekọọ oke ala ha, na-echeta mperi GPS.",
          quickCheck: [
            { objective: "O3", q: "I jegharịrị oke ubi ugboro abụọ ma nweta acre 0.9 na acre 1.4. Gịnị ka ị ga-eme?", options: ["Kee ha nkezi ma kwụsị", "Jegharịa ya ọzọ nwayọọ, na-akwụsị na nkuku, n'ebe mbara igwe ghere oghe", "Jiri ọnụọgụ ka ukwuu", "Hapụ iji GPS"], answer: 1, why: "Nnukwu ọdịiche pụtara na ihe a gụrụ adịghị mma; jegharịa ọzọ nke ọma." },
            { objective: "O3", q: "Ebee ka GPS ekwentị na-akacha adịghị ezi ezi?", options: ["N'ubi ghere oghe", "N'ụbọchị anwụ", "N'ala dị larịị", "N'okpuru osisi na n'akụkụ ụlọ"], answer: 3, why: "Osisi na ụlọ na-egbochi ma na-agbaghachi akara satellite." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhụ ubi gị n'akụkụ n'akụkụ",
        questions: [
          { objective: "O1", q: "Onye obere ugbo na-etinye nsị anụmanụ ọzọ naanị n'akụkụ ubi nwere ájá, nke adịghị mma. Nke a bụ:", options: ["Ịla ihe n'iyi", "Precision agriculture site n'aka", "Megide iwu", "Naanị ihe e nwere ike iji traktọ mee"], answer: 1, why: "Ilekọta akụkụ ubi n'ụzọ dị iche bụ isi precision agriculture." },
          { objective: "O2", q: "Ihe dị ka ugboro ole ka satellite Sentinel-2 na-ese foto otu ebe ahụ?", options: ["Ihe dị ka ụbọchị 5 ọ bụla", "Otu ugboro n'afọ", "Elekere ọ bụla", "Naanị mgbe a rịọrọ ya"], answer: 0, why: "Satellite abụọ ahụ na-alọghachi ihe dị ka ụbọchị 5 ọ bụla; igwe ojii nwere ike izo ụfọdụ foto." },
          { objective: "O2", q: "Kedu ihe NDVI NA-APỤGHỊ ịgwa gị?", options: ["Ebe ihe ọkụkụ na-acha akwụkwọ ndụ karịa", "Ebe uto adịghị ike", "Ihe mere otu akụkụ ji adịghị ike", "Otu ụbọchị abụọ si dị iche"], answer: 2, why: "Ọtụtụ ihe na-ebute NDVI dị ala; ị na-ejegharị gaa ebe ahụ ịchọpụta nke ọ bụ." },
          { objective: "O3", q: "Izi ezi GPS smartphone n'ebe mbara igwe ghere oghe na-adịkarị ihe dị ka:", options: ["Sentimita 1", "Mita 500", "Kilomita 5", "Mita 5"], answer: 3, why: "Ihe dị ka 4.9 m n'ebe mbara igwe ghere oghe, ọ na-aka njọ n'akụkụ osisi na ụlọ." },
          { objective: "O3", q: "Gịnị mere ịmara ezi oke ubi ji dị mkpa?", options: ["Mkpụrụ, fatịlaịza, ọrụ aka na owuwe ihe ubi kwa acre niile dabere na ya", "Ndị na-azụ ahịa na-akwụ ụgwọ site n'oke ala", "App GPS chọrọ ya", "Ọ dịghị mkpa"], answer: 0, why: "Oke ala na-ezighi ezi na-eme ka ọnụọgụ ọ bụla kwa acre ghara iziri ezi." }
        ]
      }
    },
    {
      name: "Isi 2: Ịtụ ala na ime atụmatụ site na mpaghara",
      lessons: [
        {
          title: "Kit nnwale ala na sensọ: otu ị ga-esi tụkwasị ha obi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Họrọ ụzọ ule ala maka mpaghara ọ bụla ma kwuo otu ị ga-esi tụkwasị ihe ọ gosiri obi.",
          text: [
            "E nwere ụzọ atọ bụ isi isi nwalee ala. Ule laabụ (site n'ụlọ ọrụ nchọcha mba dị ka KALRO, mahadum ma ọ bụ laabụ nkeonwe a kwadoro) kachasị ezi ezi, na-ewe ụbọchị ruo izu, ma na-efu ego karịa. Kit nnwale n'ubi (mpempe agba ma ọ bụ kemịkal n'ime tube) na-enye azịza ngwa ngwa n'ebe ahụ. Sensọ eletrọnịkị aka ma ọ bụ meta na-enye ọnụọgụ n'ime nkeji ole na ole, a na-erekarị ya na app.",
            "Ule nnwere onwe nke kit a na-ebugharị, dị ka nyocha IFDC mere, chọpụtara na ha na laabụ kwekọrịtara nke ọma maka pH ala mana ihe ha gosiri maka nitrogen, phosphorus na potassium anaghị adịgide. Nchọcha na Embu County, Kenya, chọpụtara na ụfọdụ sensọ aka dị elu nwere ike ịkọ ọtụtụ njirimara ala nke ọma, mana ngwa ndị ahụ dị oke ọnụ ma chọọ calibration site n'ihe atụ laabụ. Kpachara anya maka probe dị ọnụ ala na-ekwu na ọ na-agụ NPK ozugbo: ọnụọgụ izi ezi ndị na-ere ya n'onwe ha abụghị ihe akaebe nnwere onwe.",
            "Atụmatụ bara uru: ziga otu ezigbo ihe atụ gwakọtara (composite sample) maka mpaghara ọ bụla na laabụ ọtụtụ afọ ole na ole, ma jiri kit ma ọ bụ meta maka nlele pH ngwa ngwa n'etiti ule laabụ. Were ihe atụ ọ bụla n'otu ụzọ ahụ (ọtụtụ obere ala e gwuru, gwakọta, site n'otu omimi, na-ezere ụzọ na ebe a kpọkọbara nsị). Map iSDAsoil n'efu na-eme atụmatụ njirimara ala n'Afrịka niile na 30 m, ha bakwara uru ịhụ foto n'ozuzu, mana ha bụ atụmatụ site na model, ọ bụghị ule nke ubi gị."
          ],
          steps: ["Kpebie: ule laabụ, kit ma ọ bụ sensọ, maka ajụjụ ọ bụla i nwere.", "Were ihe atụ gwakọtara maka mpaghara ọ bụla: ọtụtụ obere ala e gwuru, otu omimi, gwakọta.", "Ziga ihe atụ ndị ahụ na laabụ a kwadoro ọtụtụ afọ ole na ole.", "Jiri kit ma ọ bụ meta maka nlele pH ngwa ngwa n'etiti.", "Dee ihe ọ bụla gosiri n'akụkụ mpaghara ya, na ụzọ e ji mee ya."],
          words: [["Ihe atụ gwakọtara (composite sample)", "ọtụtụ obere ala e gwuru site n'otu mpaghara, e gwakọtara ka ọ bụrụ otu ihe atụ."], ["Calibration", "ilele na idozi sensọ site n'iji ihe laabụ a tụkwasịrị obi tụnyere ya."], ["pH", "ihe na-atụ otu ala si bụrụ acid ma ọ bụ alkaline."]],
          slides: [
            { title: "Ụzọ atọ isi nwalee", bullets: ["Laabụ: kachasị ezi ezi, nwayọọ, na-efu ego karịa", "Kit n'ubi: ngwa ngwa, n'ebe ahụ", "Sensọ aka: nkeji ole na ole, na-enwekarị app"] },
            { title: "Otu ị ga-esi tụkwasị ha obi", bullets: ["Kit: dị mma maka pH", "Kit: anaghị adịgide maka N, P na K", "Sensọ dị elu chọrọ calibration"] },
            { title: "Atụmatụ bara uru", bullets: ["Otu ihe atụ laabụ maka mpaghara ọ bụla ọtụtụ afọ ole na ole", "Kit ma ọ bụ meta maka nlele pH ngwa ngwa", "Otu ụzọ iwe ihe atụ oge niile"] },
            { title: "Map ala n'efu", bullets: ["iSDAsoil: atụmatụ na 30 m", "Foto n'ozuzu, ọ bụghị ule nke ubi gị"] }
          ],
          sources: [IFDC_KITS, EMBU, ISDA, KALRO],
          tryIt: "Maka mpaghara ọ bụla n'ihe osise gị, dee ule ị ga-eji (laabụ, kit ma ọ bụ sensọ) na ihe mere. Were, ma ọ bụ mee atụmatụ iwe, otu ihe atụ gwakọtara maka mpaghara ọ bụla, ma dee otu ị ga-esi tụkwasị ihe kit gosiri obi maka pH na maka nitrogen.",
          youCanNow: "ịhọrọ ụzọ ule ala maka mpaghara ọ bụla na ịmata otu ị ga-esi tụkwasị ihe ọ gosiri obi.",
          quickCheck: [
            { objective: "O4", q: "Maka ihe ole ka kit nnwale ala a na-ebugharị kachasị a tụkwasị obi, ma e jiri laabụ tụnyere ya?", options: ["Nitrogen", "Potassium", "pH ala", "Phosphorus"], answer: 2, why: "Ule nnwere onwe chọpụtara na pH kwekọrọ nke ọma mana N, P na K anaghị adịgide." },
            { objective: "O4", q: "Onye na-ere ahịa kwuru na probe ya dị ọnụ ala na-agụ NPK ozugbo na izi ezi pasent 95. Ị kwesịrị:", options: ["Ịrịọ ihe ule nnwere onwe gosiri ma tụnyere ihe ole na ole ọ gụrụ na laabụ", "Ịzụta ya ozugbo", "Iji ya kama ule laabụ niile", "Ikwere ya n'ihi na o nwere app"], answer: 0, why: "Ọnụọgụ ndị na-ere ahịa n'onwe ha abụghị ihe akaebe nnwere onwe; tụnyere ya na laabụ." }
          ]
        },
        {
          title: "Ego e mefuru na uru, na mgbe drone na-enyere aka",
          objectives: ["O5"],
          minutes: 5,
          goal: "Tụnyere ego ngwa ma ọ bụ omume precision ga-efu na uru a na-atụ anya ya.",
          text: [
            "Ngwa precision na-aba uru naanị ma ọ bụrụ na uru ya karịrị ego ọ na-efu. Jiri partial budget dị mfe: gịnị ka m ga-enweta ma ọ bụ chekwaa karịa (owuwe ihe ubi karịa, fatịlaịza ma ọ bụ mkpụrụ na-efughị efu), gịnịkwa ka ọ ga-efu karịa (ule ahụ, sensọ ahụ, app ahụ, oge gị, ọrụ aka)? Naanị ọmụmaatụ: ọ bụrụ na ikewa mpaghara chekwaa akpa fatịlaịza 2 n'otu mpaghara na-adịghị ike nke anaghị akwụ ụgwọ (2 x GHS 400 = GHS 800 echekwara), ule laabụ ahụ efuo GHS 300, ọ na-akwụ ụgwọ.",
            "N'obere ugbo, malite site n'ihe n'efu ma ọ bụ dị ọnụ ala: anya gị, ndekọ, GPS ekwentị na map satellite n'efu. Mefuo ego n'ule laabụ maka mpaghara ọ bụla mgbe ahụ. Zụta sensọ aka naanị ma ọ bụrụ na ị ga-eji ya ọtụtụ mgbe ma nwee ike iji laabụ lelee ya. Otu dị iche iche nwere ike ikesa ego: otu cooperative na Côte d'Ivoire ma ọ bụ otu ndị ọrụ ugbo na Naịjirịa nwere ike ịzụta otu meta ma ọ bụ kwụọ ụgwọ ule laabụ ọnụ.",
            "Drone na-enye foto nwere nkọwa sentimita ole na ole kama mita 10, na-efe n'okpuru igwe ojii, ma nwee ike ife n'ụbọchị ị chọrọ ya. Ha na-enyere aka n'ihe ọkụkụ dị oke ọnụ, ubi buru ibu, ma ọ bụ maka otu na-azụ ọrụ ọnụ. Ha na-efu ego karịa nke ukwuu, ife ha chọkwara ikike (licence) site n'aka ụlọ ọrụ na-ahụ maka ụgbọelu obodo (civil aviation authority). Ọ bụrụ na i chere na ị chọrọ otu, were ihe ọmụmụ \"Drone maka Nlekọta Ugbo\" na \"Drone n'Ugbo: Nnyocha Data na Ọrụ Ugbo Ziri Ezi (Precision Agriculture)\"; ihe ọmụmụ a anaghị ekwughachi ha."
          ],
          steps: ["Dee ego ngwa ma ọ bụ omume ahụ ga-efu: ego, oge, ọrụ aka.", "Dee ego ọzọ ma ọ bụ ihe ị ga-echekwa ị na-atụ anya ya, na ọnụọgụ ọmụmaatụ.", "Tụnyere: uru wepụ ego e mefuru.", "Malite site na ngwa n'efu; wee ule laabụ maka mpaghara ọ bụla; wee sensọ ma ọ bụ ọrụ drone naanị ma ọ bụrụ na ọ na-akwụ ụgwọ.", "Tụlee ikesa ego ahụ na otu."],
          words: [["Partial budget", "mgbakọ dị mfe nke naanị ego ọzọ e mefuru na uru ọzọ nke otu mgbanwe."], ["Ọrụ drone", "azụmahịa na-efe drone n'elu ubi gị maka ụgwọ."], ["Uru e nwetara (return)", "ihe ị na-enweta azụ maka ihe i mefuru."]],
          slides: [
            { title: "Uru ga-akarịrị ego e mefuru", bullets: ["Ego ọzọ ma ọ bụ ihe echekwara", "Wepụ ego ọzọ e mefuru", "Naanị ọmụmaatụ: GHS 800 echekwara, ule GHS 300"] },
            { title: "Mefuo ego n'usoro a", bullets: ["N'efu: anya, ndekọ, GPS, satellite", "Ule laabụ maka mpaghara ọ bụla", "Sensọ naanị ma ọ bụrụ na a na-eji ya ọtụtụ mgbe ma lelee ya"] },
            { title: "Kesaa ego", bullets: ["Otu na cooperative", "Otu meta ma ọ bụ ọtụtụ ule laabụ ọnụ"] },
            { title: "Mgbe drone na-enyere aka", bullets: ["Nkọwa sentimita, n'okpuru igwe ojii", "Ihe ọkụkụ dị oke ọnụ, ubi buru ibu, ọrụ otu", "Lee ihe ọmụmụ drone; a chọrọ licence"] }
          ],
          tryIt: "Họrọ otu ngwa ma ọ bụ omume precision maka ugbo gị (ule laabụ maka mpaghara ọ bụla, meta ala, ọrụ drone, ma ọ bụ fatịlaịza site na mpaghara). Dee partial budget nwere ọnụọgụ ọmụmaatụ n'ego obodo gị: ego ọzọ e mefuru, uru ọzọ, na mkpebi gị.",
          youCanNow: "ikpebi ma ngwa precision ọ bara uru maka ugbo gị site na partial budget dị mfe.",
          quickCheck: [
            { objective: "O5", q: "N'obere ugbo, kedu nke ị kwesịrị ibu ụzọ nwaa?", options: ["Drone", "Nnukwu netwọk sensọ", "Ndebanye aha app dị oke ọnụ", "Anya gị, ndekọ, GPS ekwentị na map satellite n'efu"], answer: 3, why: "Malite site na ngwa n'efu ma mefuo ego naanị ebe ọ na-akwụ ụgwọ." },
            { objective: "O5", q: "Meta ala na-efu karịa ihe ị ga-echekwa n'oge ọkụkụ ise. Gịnị bụ nhọrọ nwere uche?", options: ["Zụta ya n'agbanyeghị", "Kesaa ego ya site n'otu, ma ọ bụ jiri ule laabụ kama", "Gbazinye ego zụta abụọ", "Kwụsị itinye fatịlaịza"], answer: 1, why: "Ọ bụrụ na uru akarịghị ego ahụ mgbe ọ bụ naanị gị, kesaa ya ma ọ bụ họrọ ụzọ dị ọnụ ala." }
          ]
        },
        {
          title: "Ime map mpaghara ubi na atụmatụ maka mpaghara ọ bụla",
          objectives: ["O6", "O5"],
          minutes: 6,
          goal: "Kewaa ubi n'ime mpaghara 2 ruo 4 ma dee atụmatụ maka mpaghara ọ bụla.",
          text: [
            "Ugbu a, chịkọta ihe akaebe ndị ahụ. Tinye ọdịdị GPS gị n'elu ihe osise gị. Maka akụkụ ọ bụla nke ubi, depụta ihe ị maara: NDVI n'ụbọchị abụọ, ihe ule ala ma ọ bụ kit gosiri, owuwe ihe ubi gara aga, ihe gị na ndị ọrụ na-ahụ. Mpaghara chọrọ opekata mpe ụdị ihe akaebe abụọ kwekọrịtara, dịka ọmụmaatụ NDVI dị ala na pH dị ala, ma ọ bụ ebe mmiri a na-ahụ oge ọkụkụ ọ bụla na owuwe ihe ubi na-adịghị mma e dekọrọ.",
            "Mee ka ọ dị mfe: mpaghara 2 ruo 4 zuru ezu n'obere ugbo. Kpọọ ha aha site n'ihe ha bụ: \"Zone A ala ọma\", \"Zone B acid na adịghị ike\", \"Zone C mmiri juru\". Dee oke ala mpaghara ọ bụla site na map GPS gị.",
            "Wee dee atụmatụ maka mpaghara ọ bụla: ihe ị ga-eme n'ụzọ dị iche (compost na lime karịa ebe pH dị ala otu laabụ si tụọ aro; ụzọ mmiri ma ọ bụ osikapa ma ọ bụ akwụkwọ nri na mpaghara mmiri; ọnụọgụ fatịlaịza dị ala ebe ihe ọkụkụ anaghị akwụ ụgwọ), ego ọ ga-efu dị ka ọmụmaatụ n'ego obodo gị, na otu ị ga-esi lelee ya: dekọọ owuwe ihe ubi site na mpaghara mgbe owuwe ihe ubi ma tụnyere NDVI n'oge ọkụkụ ọzọ. Jiri naanị fatịlaịza na ọgwụ ahụhụ e debanyere aha, otu akara ha si kwuo. Atụmatụ precision ziri ezi naanị ma ọ bụrụ na ndekọ oge ọkụkụ ọzọ gosiri na ọ rụrụ ọrụ."
          ],
          steps: ["Tinye ọdịdị GPS, ndetu NDVI, ihe ule ala gosiri na owuwe ihe ubi n'otu map.", "See mpaghara 2 ruo 4 ebe ụdị ihe akaebe abụọ kwekọrịtara.", "Kpọọ mpaghara ọ bụla aha ma dee oke ala ya.", "Dee atụmatụ, ego na nlele maka mpaghara ọ bụla.", "Dekọọ owuwe ihe ubi site na mpaghara mgbe owuwe ihe ubi ma tụnyere n'oge ọkụkụ ọzọ."],
          words: [["Map mpaghara (zone map)", "map ubi e kewara n'ime mpaghara nlekọta."], ["Ihe akaebe", "eziokwu ị nwere ike igosi, dị ka ihe ule gosiri, foto NDVI ma ọ bụ ndekọ owuwe ihe ubi."], ["Lime", "ihe a na-etinye n'ala na-eme ka ala acid belata acid ya."]],
          slides: [
            { title: "Chịkọta ihe akaebe", bullets: ["Ọdịdị GPS na ihe osise", "NDVI n'ụbọchị abụọ, ihe ule ala gosiri", "Owuwe ihe ubi na ihe ị hụrụ"] },
            { title: "See mpaghara 2 ruo 4", bullets: ["Ụdị ihe akaebe abụọ ga-ekwekọrịta", "Kpọọ ha aha site n'ihe ha bụ", "Dee oke ala nke ọ bụla"] },
            { title: "Atụmatụ maka mpaghara ọ bụla", bullets: ["Ihe na-agbanwe", "Ego ọmụmaatụ", "Otu ị ga-esi lelee ya"] },
            { title: "Lelee n'oge ọkụkụ ọzọ", bullets: ["Owuwe ihe ubi site na mpaghara mgbe owuwe ihe ubi", "Tụnyere NDVI", "Ihe e debanyere aha, otu akara si kwuo"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee map mpaghara nke ubi gị nwere mpaghara 2 ruo 4, nke ọ bụla nwere oke ala ya na opekata mpe ụdị ihe akaebe abụọ. Dee atụmatụ maka mpaghara ọ bụla: mgbanwe ahụ, ego ọmụmaatụ n'ego obodo gị, na otu ị ga-esi lelee n'oge ọkụkụ ọzọ ma ọ rụrụ ọrụ.",
          youCanNow: "ime map mpaghara ubi site n'ọtụtụ ụdị ihe akaebe ma dee atụmatụ a ga-elele maka mpaghara ọ bụla.",
          quickCheck: [
            { objective: "O6", q: "Kedu ihe akaebe zuru ezu iji see mpaghara?", options: ["NDVI dị ala n'otu ụbọchị igwe ojii", "Ihe onye agbata obi chere", "NDVI dị ala n'ụbọchị abụọ na ule ala gosiri pH dị ala", "Mgbasa ozi"], answer: 2, why: "Ụdị ihe akaebe abụọ kwekọrịtara na-eme ka mpaghara a tụkwasị obi." },
            { objective: "O6", q: "Kedu otu ị ga-esi mara na atụmatụ mpaghara rụrụ ọrụ?", options: ["Dekọọ owuwe ihe ubi site na mpaghara mgbe owuwe ihe ubi ma tụnyere n'oge ọkụkụ ọzọ", "Chee na ọ rụrụ ọrụ", "Jụọ onye na-ere ihe a na-etinye n'ala", "Lee atụmatụ ahụ ọzọ"], answer: 0, why: "Naanị ndekọ site na mpaghara na-egosi ma mgbanwe ahụ kwụrụ ụgwọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịtụ ala na ime atụmatụ site na mpaghara",
        questions: [
          { objective: "O4", q: "Gịnị bụ ihe atụ ala gwakọtara (composite sample)?", options: ["Otu shọvel ala site n'etiti", "Ọtụtụ obere ala e gwuru site n'otu mpaghara, e gwakọtara ọnụ", "Ala site n'ebe a kpọkọbara nsị", "Ihe atụ site n'okporo ụzọ"], answer: 1, why: "Ịgwakọta ọtụtụ ala e gwuru na-enye foto ziri ezi nke mpaghara ahụ." },
          { objective: "O4", q: "Ụzọ kacha mma iji map iSDAsoil n'efu bụ:", options: ["Iji ha dochie ule ala niile", "Ikpebi ọnụọgụ ọgwụ ahụhụ", "Ịhụ foto ala n'ozuzu tupu i nwalee ubi gị", "Ịtụ mmiri dị n'ala taa"], answer: 2, why: "Ha bụ atụmatụ site na model, ọ bụghị ule nke ubi gị." },
          { objective: "O5", q: "Partial budget na-atụnyere:", options: ["Ego ọzọ e mefuru na uru ọzọ nke otu mgbanwe", "Ego ugbo niile e mefuru n'afọ iri", "Naanị ọnụahịa ihe ubi", "Ego dị n'akaụntụ ụlọ akụ gị"], answer: 0, why: "Ọ na-ele naanị ihe na-agbanwe." },
          { objective: "O5", q: "Olee mgbe ọrụ drone nwere ike ịba uru?", options: ["Mgbe niile, n'ubi ọ bụla", "Ọ dịghị mgbe n'Afrịka", "Naanị n'enweghị licence", "N'ihe ọkụkụ dị oke ọnụ ma ọ bụ ubi buru ibu, ma ọ bụ mgbe otu kesara ya, mgbe ọ na-akwụ ụgwọ"], answer: 3, why: "Drone na-efu ego karịa; ha na-enyere aka ebe uru dị elu ma ọ bụ e kesara ego." },
          { objective: "O6", q: "Mpaghara ole ka ihe ọmụmụ a na-atụ aro maka obere ugbo?", options: ["2 ruo 4", "20 ruo 40", "Otu", "Otu maka osisi ọ bụla"], answer: 0, why: "Mpaghara ole na ole zuru ezu ilekọta na ilele site n'aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ Ugbo Ziri Ezi (Precision Agriculture): Nlekọta site na Satellite na Sensọ Ala",
    questions: [
      { objective: "O1", q: "Precision agriculture n'obere ugbo pụtara:", options: ["Ịzụta traktọ nwere sensọ", "Ilekọta akụkụ dị iche iche nke ubi n'ụzọ dị iche", "Iji otu ọnụọgụ fatịlaịza n'ebe niile", "Ịkọ ugbo n'enweghị ndekọ"], answer: 1, why: "Akụkụ ọ bụla na-enweta ihe ọ chọrọ." },
      { objective: "O1", q: "Kedu ihe dị iche n'ime ubi ị nwere ike ime ihe banyere ya?", options: ["Agba ekwentị gị", "Ọnụahịa ahịa", "Ebe mmiri dị n'akụkụ dị ala", "Ihe ọkụkụ onye agbata obi gị"], answer: 2, why: "Ị nwere ike igwu ụzọ mmiri n'ebe mmiri ma ọ bụ kụọ ihe ọzọ ebe ahụ." },
      { objective: "O1", q: "Gịnị na-ebu ụzọ na precision farming n'obere ugbo?", options: ["Ijegharị n'ubi na idetu ihe dị iche", "Ịzụta sensọ", "Ịkwụ ụgwọ drone", "Ịgbanwe ihe niile a na-etinye n'ala"], answer: 0, why: "Ilele anya bụ n'efu ma na-eduzi ihe ndị ọzọ." },
      { objective: "O2", q: "Gịnị ka Sentinel-2 na-enye n'efu?", options: ["Foto nwere nkọwa 1 cm", "Amụma ihu igwe", "Ule ala", "Foto ihe dị ka ụbọchị 5 ọ bụla na pixel 10 m"], answer: 3, why: "Data Sentinel-2 bụ n'efu ma ghere oghe na 10 m." },
      { objective: "O2", q: "NDVI dị elu na-apụtakarị:", options: ["Ala tọgbọrọ chakoo", "Osisi jupụtara ma na-acha akwụkwọ ndụ", "Mmiri na-ekwụ", "Igwe ojii"], answer: 1, why: "Akwụkwọ dị mma na-agbaghachi ìhè n'ụzọ na-enye NDVI dị elu." },
      { objective: "O2", q: "Gịnị mere a ga-eji tụnyere NDVI n'ụbọchị abụọ?", options: ["Ịhụ akụkụ na-anọgide na-adịghị ike mgbe ndị ọzọ na-eto", "N'ihi na otu foto na-ezighi ezi mgbe niile", "Ime ka map nwee agba mara mma", "Ịgụ osisi"], answer: 0, why: "Akụkụ na-anọgide na-adị ala n'ụbọchị dị iche iche kwesịrị ka ị jegharịa gaa lee ya." },
      { objective: "O2", q: "N'oge udu mmiri, ị nwere ike ọ gaghị enweta foto satellite doro anya n'ihi na:", options: ["Satellite na-akwụsị", "NDVI na-arụ ọrụ naanị n'oge ọkọchị", "Igwe ojii na-ezo ala", "Ihe ọkụkụ toro ogologo nke ukwuu"], answer: 2, why: "Sentinel-2 apụghị ịhụ ihe site n'igwe ojii." },
      { objective: "O3", q: "Otu hekta bụ:", options: ["10 m x 10 m", "1 km x 1 km", "Ọkara acre", "100 m x 100 m, ihe dị ka acre 2.5"], answer: 3, why: "Otu hekta = square mita 10,000." },
      { objective: "O3", q: "Kedu otu ị ga-esi nweta oke ala GPS ka mma?", options: ["Gbaa ọsọ gburugburu ubi", "Jee nwayọọ n'ebe mbara igwe ghere oghe, kwụsị na nkuku, ma jegharịa ugboro abụọ", "Debe ekwentị n'akpa gị", "Guzoro n'okpuru osisi"], answer: 1, why: "Ije nwayọọ, ịkwụsị na mbara igwe ghere oghe na-eme ka izi ezi ka mma." },
      { objective: "O3", q: "Gịnị mere a ga-eji mee map mpaghara ọ bụla dị ka ọdịdị nke ya nwere aha?", options: ["Ka i wee mara oke ala mpaghara ọ bụla maka atụmatụ na ndekọ", "N'ihi na GPS chọrọ ya", "Ikesa ya na soshal midia", "Ọ baghị uru"], answer: 0, why: "Oke ala mpaghara ọ bụla na-achịkwa ihe a na-etinye n'ala na owuwe ihe ubi ya kwa acre." },
      { objective: "O4", q: "Kedu ụzọ ule ala kachasị ezi ezi?", options: ["Probe dị ọnụ ala", "Ịkọ site n'agba", "Ule laabụ a kwadoro", "Foto WhatsApp"], answer: 2, why: "Laabụ bụ ihe a na-eji elele kit na sensọ." },
      { objective: "O4", q: "Kit a na-ebugharị gosiri ihe na-adịgideghị maka:", options: ["Agba ala", "Nitrogen, phosphorus na potassium", "Oke ubi", "Mmiri ozuzo"], answer: 1, why: "Ule nnwere onwe chọpụtara na pH dị mma mana N, P na K anaghị adịgide." },
      { objective: "O4", q: "Iji tụkwasị sensọ aka obi karịa, ị kwesịrị:", options: ["Iji ya naanị n'abalị", "Ọ dịghị mgbe ị ga-atụnyere ya na ihe ọ bụla", "Ịzụta nke abụọ", "Ịtụnyere ụfọdụ ihe ọ gụrụ na ihe laabụ gosiri"], answer: 3, why: "Calibration site na laabụ na-egosi otu ị ga-esi tụkwasị ya obi." },
      { objective: "O5", q: "Naanị ọmụmaatụ: ikewa mpaghara chekwara fatịlaịza GHS 800, ule laabụ efuo GHS 300. Ihe pụtara bụ:", options: ["Mfu GHS 500", "Ọ dịghị mgbanwe", "Uru GHS 500", "Uru GHS 1,100"], answer: 2, why: "800 echekwara wepụ 300 e mefuru = 500 e nwetara." },
      { objective: "O5", q: "Otu ndị ọrụ ugbo nwere ike ibelata ego ngwa precision site na:", options: ["Ikesa otu meta ma ọ bụ ịkwụ ụgwọ ule laabụ ọnụ", "Onye ọ bụla ịzụta drone", "Ịhapụ ule niile", "Iji fatịlaịza a na-edebanyeghị aha"], answer: 0, why: "Ikesa na-ekesa ego ahụ n'ọtụtụ ugbo." },
      { objective: "O5", q: "Iji mụta ime map site na drone, ị kwesịrị:", options: ["Ife n'enweghị licence", "Were ihe ọmụmụ drone dị adị ma gbasoo iwu civil aviation", "Iji naanị ihe ọmụmụ a", "Iṅomi vidiyo n'ịntanetị"], answer: 1, why: "Ihe ọmụmụ drone na-akụzi ya; a chọrọ licence." },
      { objective: "O6", q: "Mpaghara kwesịrị ịdabere na:", options: ["Otu foto igwe ojii", "Ndụmọdụ onye na-ere ahịa", "Otu obi dị gị", "Opekata mpe ụdị ihe akaebe abụọ kwekọrịtara"], answer: 3, why: "Isi iyi abụọ kwekọrịtara na-eme ka mpaghara a tụkwasị obi." },
      { objective: "O6", q: "Kedu ezigbo atụmatụ maka mpaghara mmiri juru?", options: ["Tinye fatịlaịza karịa ma nwee olileanya", "Leghara ya anya", "Gwuo ụzọ mmiri ma ọ bụ kụọ ihe ọkụkụ na-anabata ala mmiri, ma dekọọ ihe pụtara", "Kụọ otu ihe ahụ dị ka n'ugwu nkụ"], answer: 2, why: "Atụmatụ ahụ dabara ihe kpatara ya, a na-ejikwa ndekọ elele ya." },
      { objective: "O6", q: "Atụmatụ mpaghara ọ bụla kwesịrị inwe:", options: ["Ihe na-agbanwe, ego ọmụmaatụ ya na otu ị ga-esi lelee ya", "Naanị agba mpaghara ahụ", "Naanị ọnụahịa ihe ubi", "Ọ dịghị ihe; mpaghara bụ naanị maka map"], answer: 0, why: "Atụmatụ ị na-apụghị ịgụ ego ya ma ọ bụ lelee abụghị atụmatụ." },
      { objective: "O6", q: "Fatịlaịza na ọgwụ ahụhụ n'atụmatụ mpaghara ga-abụrịrị:", options: ["Nke kachasị ọnụ ala ị chọtara", "Ngwaahịa e debanyere aha, e ji otu akara si kwuo", "Nke e gwakọtara site n'ịkọ nkọ", "Nke e mere okpukpu abụọ na mpaghara na-adịghị ike"], answer: 1, why: "Naanị ngwaahịa e debanyere aha, e ji otu akara si kwuo, dị nchebe ma kwekọọ n'iwu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 7, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "E mere map ubi na mpaghara", objective: "O3", notYet: "Enweghị oke ubi, ma ọ bụ e chere oke ala n'uche.", meets: "E jiri GPS jegharịa oke ubi, mpaghara ọ bụla nwekwara ọdịdị nwere aha na oke ala.", exceeds: "E jegharịrị oke ubi ugboro abụọ, oke ala ndị ahụ kwekọrịtakwara nke ọma." },
      { name: "E ji ihe akaebe satellite mee ihe nke ọma", objective: "O2", notYet: "Enweghị nlele satellite, ma ọ bụ e weere NDVI dị ka ihe kpatara ya.", meets: "E tụnyere NDVI n'ụbọchị abụọ, e jegharịkwara gaa n'ebe dị ala ịchọta ihe kpatara ya.", exceeds: "Na-edetu ihe map ahụ na-apụghị igosi (igwe ojii, obere ubi, ahịhịa) maka ubi a." },
      { name: "Ihe akaebe ala", objective: "O4", notYet: "Enweghị ozi gbasara ala, ma ọ bụ e weere NPK kit gosiri dị ka ihe ziri ezi kpọmkwem.", meets: "E họọrọ ụzọ ule maka mpaghara ọ bụla, na otu a ga-esi tụkwasị ya obi.", exceeds: "Opekata mpe otu ihe laabụ gosiri maka mpaghara ọ bụla, ma ọ bụ e tụnyere ihe kit gosiri na laabụ." },
      { name: "Mpaghara na atụmatụ", objective: "O6", notYet: "E sere mpaghara site n'otu isi iyi, ma ọ bụ enweghị atụmatụ maka mpaghara ọ bụla.", meets: "Mpaghara 2 ruo 4, nke ọ bụla nwere ụdị ihe akaebe abụọ na atụmatụ, ego na nlele.", exceeds: "Atụmatụ ọ bụla na-akpọ aha ndekọ ga-egosi ma ọ rụrụ ọrụ n'oge ọkụkụ ọzọ." },
      { name: "Ọ bara uru karịa ego ya", objective: "O5", notYet: "E họọrọ ngwa n'agụghị ego ha ga-efu.", meets: "Partial budget nwere ọnụọgụ ọmụmaatụ n'ego obodo na-akwado atụmatụ ahụ.", exceeds: "Na-atụle ikesa ego na otu, ma ọ bụ ụzọ dị ọnụ ala na-enye otu azịza ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere opekata mpe otu atụmatụ mpaghara n'ọrụ n'oge ọkụkụ na-esote (nsochi ụbọchị 30 na njedebe oge ọkụkụ)",
      "Ndị na-amụ ihe dekọrọ owuwe ihe ubi site na mpaghara mgbe owuwe ihe ubi",
      "Ihe a kọrọ banyere ego echekwara n'ihe a na-etinye n'ala ma ọ bụ mgbanwe owuwe ihe ubi site na mpaghara mgbe otu oge ọkụkụ gasịrị",
      "Otu ndị ọrụ ugbo na-ekesa ule ala ma ọ bụ ngwa mgbe ihe ọmụmụ a gasịrị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere app GPS n'efu na-atụ oke ala ma ọ bụ app map",
      "Ịntanetị iji banye Copernicus Browser (kọmputa ma ọ bụ browser ekwentị)",
      "Ubi a ga-ejegharị, akwụkwọ, mkpịsị ode na ihe osise ubi ahụ e sere n'ọsọ",
      "Ihe ngwu ala (auger) ma ọ bụ shọvel na bọket dị ọcha maka ihe atụ gwakọtara; laabụ ma ọ bụ kit ma ọ bụrụ na ọ dị",
      "Ihe dị ka nkeji 90 n'ozuzu, gbakwunye oge n'ubi"
    ],
    facilitatorNotes: [
      "Mee Nkuzi 1 na 3 n'ubi: jegharịanụ oke ubi na mpaghara ọnụ, ma tụnyere oke ala GPS ekwentị dị iche iche.",
      "Kwadebe foto Copernicus Browser doro anya nke ubi dị nso tupu oge eruo; igwe ojii n'oge udu mmiri nwere ike igbochi ngosi ozugbo.",
      "Erela ma ọ bụ kwado sensọ ala ma ọ bụ app ọ bụla; ọ bụrụ na onye na-ere ahịa bịara, rịọ ya ihe ule nnwere onwe gosiri.",
      "Chetara ndị na-amụ ihe na NDVI na-egosi ebe, ọ bụghị ihe mere, nakwa na NPK kit gosiri chọrọ nlele laabụ.",
      "Ziga ajụjụ gbasara drone n'ihe ọmụmụ drone; ihe ọmụmụ a anaghị akụzi ife drone.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
