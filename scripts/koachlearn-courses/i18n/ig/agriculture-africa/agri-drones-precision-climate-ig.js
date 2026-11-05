"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-precision-climate.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };

module.exports = {
  id: "agri-drones-precision-climate-ig",
  lang: "ig",
  translationOf: "agri-drones-precision-climate",
  category: "Agriculture (Africa)",
  name: "Drone maka Nlekọta Ugbo 4: Ọrụ Ugbo Ziri Ezi, Ihu Igwe na Nlekọta Anụ Ụlọ",
  skills: "Ikewa ubi ka ọ bụrụ mpaghara njikwa, Iziga ihe a na-etinye n'ubi dịka mpaghara si dị, Ịlele ọnụ ọgụgụ osisi pụtara na ịkọ owuwe ihe ubi, Ilekọta mbuze ala, idei mmiri na ụkọ mmiri ozuzo, Ilekọta anụ ụlọ na ebe ịta nri, Ilele ihe owuwu ugbo",
  outcome: "iji maapụ drone jikwaa ugbo agwakọtara agwakọta dịka mpaghara si dị, ma dee atụmatụ nlekọta nke oge ọrụ ugbo niile nke gụnyere ihe ọkụkụ, ihe egwu ihu igwe, anụ ụlọ na ihe owuwu ugbo.",
  about: [
    "Nke a bụ Ihe ọmụmụ 4 nke usoro nlekọta site na drone, maka ndị ọrụ ugbo, ndị njikwa ugbo, ndị ọrụ cooperative na extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ), na ndị na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile. Ị kwesịrị ịma ime na ịgụ maapụ drone (Ihe ọmụmụ 2 na 3).",
    "Isi 1 bụ ọrụ ugbo ziri ezi (precision agriculture): ilekọta akụkụ ọ bụla nke ubi dịka mkpa ya si dị, kama imeso ubi niile otu ụdị. Ị ga-ekewa ubi ka ọ bụrụ mpaghara, ziga mkpụrụ, fatịlaịza na ndị ọrụ ebe ha kwesịrị, ma jiri ọnụ ọgụgụ osisi kọọ owuwe ihe ubi. Isi 2 na-ele ugbo niile anya: ihe egwu ihu igwe na gburugburu dị ka mbuze ala, idei mmiri na ụkọ mmiri ozuzo, anụ ụlọ na ebe ịta nri, na dam, water pan, ngere, ọwa mmiri na greenhouse ndị na-eme ka ugbo na-aga n'ihu.",
    "Ọmụmaatụ gụnyere ọka na agwa na Rift Valley, akpụ na ji na south-west Nigeria, tii na Kericho, na ugbo nwere ihe ọkụkụ na anụ ụlọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ nlekọta drone nke oge ọrụ ugbo niile maka ugbo agwakọtara agwakọta (ezi ugbo ma ọ bụ ọmụmaatụ, dị ka hekta 10 nwere ọka, agwa, ebe ịta nri, ehi 30, water pan na oke e gbara ngere): mpaghara dị n'isi ubi ihe ọkụkụ na ihe mpaghara ọ bụla ga-enweta, ụgbọ elu drone ị ga-efe na mgbe (ihe ọkụkụ, ihe egwu ihu igwe, anụ ụlọ, ihe owuwu), ihe ị ga-achọ oge ọ bụla, na ihe a ga-eme maka ihe ọ bụla a chọpụtara.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo, ndị njikwa ugbo, ndị ọrụ cooperative na extension, na ndị na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile na-amụ Ihe ọmụmụ 4 nke usoro nlekọta drone, ọtụtụ mgbe n'ugbo nwere ihe ọkụkụ na anụ ụlọ.",
    startingPoint: "Ndị na-amụ ihe nwere ike ime ma gụọ maapụ drone (Ihe ọmụmụ 2 na 3). Ọtụtụ ka na-emeso ubi niile otu ụdị, na-eji ụkwụ elele anụ ụlọ, ebe ịta nri na ihe owuwu, ma na-eme ihe banyere mbuze ala, idei mmiri na ụkọ mmiri ozuzo naanị mgbe mmebi mechara. Ole na ole na-ahazi ụgbọ elu drone maka oge ọrụ ugbo niile.",
    gap: "Ubi na-adịghị otu na-emefu ihe a na-etinye n'ebe ọ na-adịghị akwụghachi, ma ịma ọkwa n'oge banyere mbuze ala, oge ụkọ mmiri, ịta ahịhịa karịa oke ma ọ bụ dam na-ehi mmiri na-efu owuwe ihe ubi na ego. Atụmatụ nlekọta nke oge niile nwere mpaghara na-enyere ugbo aka itinye ihe na ndị ọrụ n'ebe ha na-akwụghachi, ma mee ihe n'oge banyere ihe egwu ihu igwe, anụ ụlọ na ihe owuwu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu ọ bụla gbasara ọrụ ugbo ziri ezi",
      "Ngwaọrụ: maapụ drone site n'ezi ugbo ma ọ bụ ọmụmaatụ; ekwentị nwere GPS iji kaa akara mpaghara",
      "Iwu: ụgbọ elu drone chọrọ ikike obodo ahụ; ịgba ọgwụ site na drone chọkwara ikike ọgwụ ahụhụ",
      "Ọdịmma anụmanụ na nzuzo: atụla anụmanụ egwu ma ọ bụ chụọ ha; esela foto ndị mmadụ ma ọ bụ ụlọ ha n'enweghị ikike",
      "Ọnụ ọgụgụ fatịlaịza na owuwe ihe ubi na-esi n'ahụmịhe obodo ma ọ bụ extension, ọ bụghị site n'ihe ọmụmụ a"
    ],
    prerequisites: "\"Drone maka Nlekọta Ugbo 3: Ahụike Ihe Ọkụkụ, Ụmụ Ahụhụ na Nhazi Data\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị maapụ drone sitere n'ihe karịrị otu ụbọchị na ihe onye ọrụ ugbo maara", action: "ikewa ubi ka ọ bụrụ mpaghara njikwa abụọ ruo anọ ma kaa ha akara n'ala", standard: "na mpaghara ọ bụla nwere aha na ihe kpatara ya" },
    { id: "O2", condition: "Maka mpaghara njikwa ọ bụla", action: "ikpebi ihe mpaghara ahụ ga-enweta: mkpụrụ, fatịlaịza, ndị ọrụ ma ọ bụ ndozi", standard: "na-eme ka omume ahụ dabara ihe kpatara nsogbu mpaghara ahụ, n'ahazighị ịgba ọgwụ site na drone n'enweghị ikike" },
    { id: "O3", condition: "Mgbe e nyere gị maapụ drone na ọnụ ọgụgụ nlele", action: "ịgụkọ ọnụ ọgụgụ osisi pụtara na oke owuwe ihe ubi a na-atụ anya ya", standard: "na e jiri ohere a chọrọ n'etiti osisi tụnyere ọnụ ọgụgụ osisi ahụ, ma nye owuwe ihe ubi dị ka oke (site na ruo)" },
    { id: "O4", condition: "N'oge ọrụ ugbo niile", action: "ịhazi ụgbọ elu drone iji hụ ihe egwu mbuze ala, idei mmiri na ụkọ mmiri ozuzo ma soro omume ọrụ ugbo kwesịrị ihu igwe", standard: "n'ụbọchị a kara aka ka e wee tụnyere maapụ" },
    { id: "O5", condition: "Maka ụgbọ elu drone n'elu anụ ụlọ ma ọ bụ ebe ịta nri", action: "ịhazi ụgbọ elu dị jụụ ma dị nchekwa iji gụọ anụmanụ ma lelee ebe ịta nri na ebe mmiri", standard: "na onye na-azụ anụ kwere ma n'atụghị anụmanụ ahụ egwu" },
    { id: "O6", condition: "Maka dam, ọwa mmiri, ngere, greenhouse na ụlọ nkwakọba ihe nke ugbo", action: "ilele ha site n'elu ma dee ndepụta ndozi", standard: "nwere ihe ahụ, ebe ọ dị, nsogbu ya, ka o si ọsọ ọsọ na onye ga-edozi ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ugbo ziri ezi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mpaghara njikwa: otu ubi, mkpa dị iche iche",
          minutes: 5,
          goal: "Kewaa ubi ka ọ bụrụ mpaghara njikwa abụọ ruo anọ site na maapụ drone na ihe onye ọrụ ugbo maara.",
          text: [
            "Ọtụtụ ubi adịghị otu. Omimi ala, ndịda ala, ebe ikpu ochie dị, nsị anụ e tinyere na mbụ, mmiri na-akwụ ọtọ na ndò na-eme ka akụkụ ụfọdụ too karịa ndị ọzọ. Ọrụ ugbo ziri ezi pụtara ilekọta akụkụ ọ bụla dịka mkpa ya si dị.",
            "Mpaghara njikwa bụ akụkụ ubi na-akpa otu agwa ahụ oge ọrụ ugbo ọ bụla. Iji see mpaghara, jikọta ọtụtụ maapụ drone (NDVI ma ọ bụ agba, site n'ihe karịrị otu ụbọchị ma ọ bụ oge) na ihe onye ọrụ ugbo maara: ebe mmiri na-akwụ, ebe ala na-adịghị omimi, ebe ihe ọkụkụ na-eme nke ọma mgbe niile.",
            "Mee ka ọ dị mfe. Mpaghara abụọ ruo anọ zuru maka ọtụtụ obere ugbo na ugbo etiti: dịka ọmụmaatụ mpaghara siri ike, mpaghara nkịtị na mpaghara na-adịghị ike, nke mmiri juru. Nye ha aha ma kaa ha akara site na osisi a kpọbara n'ala ma ọ bụ ebe GPS ka ndị ọrụ wee chọta ha."
          ],
          steps: ["Chịkọta maapụ ubi ahụ site n'ụbọchị abụọ ma ọ bụ karịa ma ọ bụrụ na ọ ga-ekwe omume.", "Jụọ onye ọrụ ugbo ebe ihe ọkụkụ na-esi ike ma ọ bụ na-adịghị ike mgbe niile, na ihe kpatara ya.", "See mpaghara abụọ ruo anọ dabara ma maapụ ma ihe onye ọrụ ugbo maara.", "Nye mpaghara ọ bụla aha ma kaa ya akara n'ala site na osisi a kpọbara ma ọ bụ ebe GPS."],
          words: [["Ọrụ ugbo ziri ezi (precision agriculture)", "ilekọta akụkụ ọ bụla nke ubi dịka mkpa ya si dị."], ["Mpaghara njikwa (management zone)", "akụkụ ubi na-akpa otu agwa ahụ oge ọrụ ugbo ọ bụla, a na-elekọtakwa ya dị ka otu."]],
          slides: [
            { title: "Ubi adịghị otu", bullets: ["Ala, ndịda, mmiri, ndò, nsị anụ ochie", "Akụkụ ụfọdụ na-eto nke ọma mgbe niile"] },
            { title: "Isese mpaghara", bullets: ["Maapụ sitere n'ihe karịrị otu ụbọchị", "Gbakwunye ihe onye ọrụ ugbo maara", "Akụkụ na-akpa otu agwa oge ọ bụla"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Mpaghara abụọ ruo anọ", "Siri ike, nkịtị, na-adịghị ike ma ọ bụ nke mmiri juru", "Kaa ha akara n'ala"] }
          ],
          tryIt: "See ubi ị maara (ma ọ bụ jiri maapụ ọmụmaatụ). See mpaghara abụọ ruo anọ, nye ha aha, ma dee ihe mere mpaghara ọ bụla ji dị iche.",
          youCanNow: "ikewa ubi ka ọ bụrụ mpaghara njikwa dị mfe site n'iji maapụ na ihe onye ọrụ ugbo maara.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ mpaghara njikwa kwesịrị ekwesị maka obere ubi?", options: ["Mpaghara siri ike, mpaghara nkịtị na mpaghara na-adịghị ike, nke mmiri juru", "Otu mpaghara maka osisi ọ bụla", "Mpaghara iri abụọ hà nhata", "Enweghị mpaghara ọ bụla"], answer: 0, why: "Mpaghara abụọ ruo anọ dị mfe zuru maka ọtụtụ obere ugbo na ugbo etiti." },
            { objective: "O1", q: "Onye ọrụ ugbo kwuru na otu nkuku na-eme njọ mgbe niile, mana naanị maapụ oge a na-egosi ya na-acha akwụkwọ ndụ. Gịnị ka ị ga-eme?", options: ["Leghara onye ọrụ ugbo anya", "See mpaghara site naanị n'otu maapụ a", "Lelee maapụ ụbọchị na oge ndị ọzọ ma jiri ihe onye ọrụ ugbo maara", "Hapụ mpaghara kpamkpam"], answer: 2, why: "A na-ese mpaghara site n'ọtụtụ maapụ na ụbọchị, ya na ihe onye ọrụ ugbo maara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iziga ihe a na-etinye n'ubi dịka mpaghara si dị",
          minutes: 6,
          goal: "Kpebie ihe mpaghara ọ bụla ga-enweta: mkpụrụ, fatịlaịza, ndị ọrụ ma ọ bụ ndozi.",
          text: [
            "Mgbe i nwere mpaghara, jụọ ihe nke ọ bụla chọrọ. Mpaghara na-adịghị ike n'ala na-adịghị omimi nwere ike ọ gaghị akwụghachi fatịlaịza ọzọ; mpaghara mmiri juru nwere ike ịchọ ọwa mmiri, ọ bụghị fatịlaịza; mpaghara nkịtị nwere ike inye uru kacha mma maka ihe ọzọ e tinyere. Nke a bụ variable-rate management: oke dị iche iche n'ebe dị iche iche.",
            "N'ugbo buru ibu, igwe nwere ike itinye oke dị iche iche site na prescription map. N'obere ugbo, otu echiche ahụ na-arụ ọrụ site n'aka: ndị ọrụ na-etinye fatịlaịza ma ọ bụ nsị anụ karịa ma ọ bụ belata n'olulu ọkụkụ ọ bụla dịka mpaghara si dị, na-akụgharị naanị ebe drone gosiri oghere, ma na-ebu ụzọ wepụ ahịhịa ma ọ bụ lelee mpaghara nwere nsogbu.",
            "Drone ụfọdụ nwere ike ịgba ọgwụ ma ọ bụ fesaa ihe. Ịgba ọgwụ ahụhụ site na drone chọrọ ikike nke ya site n'aka ụlọ ọrụ na-ahụ maka ụgbọ elu na onye na-achịkwa ọgwụ ahụhụ n'obodo gị, ndị ọrụ a zụrụ azụ ma nwee akwụkwọ ikike, na omume nchekwa dị ka ndị dị na ntụziaka FAO na WHO banyere ịgba ọgwụ site n'elu. Agbala ọgwụ, ma ọ bụ dụọ ndụmọdụ ka a gbaa, n'enweghị ha."
          ],
          steps: ["Maka mpaghara ọ bụla, dee ihe mere o ji dị ike ma ọ bụ na-adịghị ike.", "Họrọ omume na-edozi ihe kpatara ya: ọwa mmiri, ịkụgharị, fatịlaịza karịa ma ọ bụ belata, iwepụ ahịhịa.", "Dee oke ma ọ bụ ọrụ maka mpaghara ọ bụla ka ndị ọrụ wee soro ya.", "Ịgba ọgwụ site na drone: naanị mgbe e nwere ikike ụgbọ elu na ọgwụ ahụhụ a chọrọ."],
          words: [["Variable-rate", "itinye oke mkpụrụ, fatịlaịza ma ọ bụ mmiri dị iche iche n'akụkụ dị iche iche nke ubi."], ["Prescription map", "maapụ na-agwa mmadụ ma ọ bụ igwe oke ọ ga-etinye na mpaghara ọ bụla."]],
          slides: [
            { title: "Dozie ihe kpatara ya", bullets: ["Ala na-adịghị omimi: fatịlaịza ọzọ nwere ike ọ gaghị akwụghachi", "Mmiri juru: ọwa mmiri, ọ bụghị fatịlaịza", "Mpaghara nkịtị: ọtụtụ mgbe na-enye uru kacha mma"] },
            { title: "Variable rate site n'aka", bullets: ["Karịa ma ọ bụ belata n'olulu ọkụkụ ọ bụla dịka mpaghara si dị", "Kụgharịa oghere naanị ebe ọ dị mkpa", "Buru ụzọ wepụ ahịhịa ma lelee mpaghara nwere nsogbu"] },
            { title: "Drone na-agba ọgwụ", bullets: ["Chọrọ ikike ụgbọ elu NA ikike ọgwụ ahụhụ", "Ndị ọrụ a zụrụ azụ, nwere akwụkwọ ikike", "Soro ntụziaka FAO/WHO maka ịgba ọgwụ site n'elu"] }
          ],
          sources: [FAO_WHO_AERIAL, KCAA_UAS, NCAA_P21],
          tryIt: "Jiri mpaghara gị site na Nkuzi 1, dee ntụziaka otu ahịrị maka mpaghara ọ bụla nke onye ọrụ ugbo nwere ike ịgbaso (dịka ọmụmaatụ: Mpaghara C, nkuku mmiri juru: gwuo ọwa mmiri tupu itinye fatịlaịza n'elu; enweghị fatịlaịza ọzọ).",
          youCanNow: "ikpebi ma dee ihe mpaghara njikwa ọ bụla kwesịrị inweta, ma mara mgbe ịgba ọgwụ chọrọ ikike pụrụ iche.",
          quickCheck: [
            { objective: "O2", q: "N'ugbo buru ibu, gịnị ka e ji prescription map eme?", options: ["Ịgụ ehi", "Ilele ngere", "Ide mmefu ego ugbo", "Ịgwa igwe oke ọ ga-etinye n'ebe ọ bụla"], answer: 3, why: "N'ugbo buru ibu, igwe nwere ike itinye oke dị iche iche site na prescription map." },
            { objective: "O2", q: "Drone na-egosi oghere naanị na mpaghara nkịtị. Gịnị ka ị ga-agwa ndị ọrụ?", options: ["Kụgharịa ubi niile", "Kụgharịa oghere naanị ebe drone gosiri ha", "Tinye fatịlaịza n'oghere ndị ahụ", "Hapụ oghere ndị ahụ"], answer: 1, why: "N'obere ugbo, ndị ọrụ na-akụgharị naanị ebe drone gosiri oghere." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ọnụ ọgụgụ osisi na ịkọ owuwe ihe ubi n'oge",
          minutes: 5,
          goal: "Kọọ ọnụ ọgụgụ osisi pụtara na oke owuwe ihe ubi site na maapụ drone na ọnụ ọgụgụ nlele.",
          text: [
            "Plant stand bụ ole osisi pụtara ma e jiri ya tụnyere ole a kụrụ. Maapụ drone nwere nkọwa dị nta na-egosi oghere nke ọma. Sọftwia ụfọdụ nwere ike ịgụ osisi n'onwe ya; ị nwekwara ike iji aka gụọ ha n'igbe nlele dị na maapụ.",
            "Iji kọọ plant stand: kaa akara ebe nlele ole na ole a maara nha ha na mpaghara ọ bụla, gụọ osisi, ma tụnyere ya na ohere a chọrọ n'etiti osisi. Ọ bụrụ na a kụrụ ubi ọka n'ohere 75 cm na 25 cm, ihe a chọrọ bụ ihe dị ka osisi 53,000 kwa hekta; ọ bụrụ na ị gụrụ 40,000, plant stand bụ ihe dị ka pasentị 75.",
            "Ịkọ owuwe ihe ubi n'ụzọ nkịtị na-eji osisi kwa hekta mụbaa owuwe a na-atụ anya kwa osisi site n'ahụmịhe obodo ma ọ bụ ọnụ ọgụgụ extension, mpaghara n'otu n'otu. Were ya dị ka oke (site na ruo), ọ bụghị nkwa: ihu igwe, ụmụ ahụhụ na ihe na-efu n'oge owuwe na-agbanwe ọnụ ọgụgụ ikpeazụ. Ọ ka na-enyere aka ịhazi nchekwa, ire ere na ibufe ihe n'oge."
          ],
          steps: ["Kaa akara igbe nlele a maara nha ha na mpaghara ọ bụla na maapụ.", "Gụọ osisi n'igbe ọ bụla (site n'anya ma ọ bụ sọftwia).", "Gụkọọ osisi kwa hekta ma tụnyere ya na ihe a chọrọ.", "Mụbaa ya na owuwe a na-atụ anya kwa osisi site n'ọnụ ọgụgụ obodo iji nweta oke.", "Dee oke ahụ na ihe nwere ike ịgbanwe ya."],
          words: [["Plant stand", "ọnụ ọgụgụ osisi pụtara ma e jiri ya tụnyere ọnụ ọgụgụ a kụrụ."], ["Ịkọ owuwe ihe ubi (yield estimate)", "nkọ mbụ nke ole ubi ahụ ga-amịpụta."]],
          slides: [
            { title: "Plant stand", bullets: ["Osisi pụtara ma e jiri ya tụnyere osisi a kụrụ", "Oghere na-apụta ìhè na maapụ nwere nkọwa dị nta"] },
            { title: "Gụọ site na nlele", bullets: ["Igbe nlele na mpaghara ọ bụla", "Gụọ osisi, gbasaa ya ruo otu hekta", "Ọka 75 cm x 25 cm: ihe dị ka osisi 53,000 kwa ha"] },
            { title: "Ịkọ owuwe ihe ubi n'oge", bullets: ["Osisi kwa ha x owuwe a na-atụ anya kwa osisi", "Nye oke (site na ruo), ọ bụghị nkwa", "Na-enyere aka ịhazi nchekwa, ire ere na ibufe ihe"] }
          ],
          tryIt: "A kụrụ mpaghara ọka nke otu hekta n'ohere 75 cm na 25 cm. Ọnụ ọgụgụ nlele gị na-egosi osisi 44,000 kwa hekta. Gụkọọ pasentị plant stand, wee dee ihe nwere ike ịkọwa oghere ndị ahụ na ihe ị ga-elele.",
          youCanNow: "ịkọ plant stand na oke owuwe ihe ubi dịka mpaghara si dị site na maapụ drone na ọnụ ọgụgụ nlele.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere a ga-eji gụọ osisi n'ebe nlele a maara nha ha?", options: ["Ịchọta oke ugbo", "Ịgụkọ osisi kwa hekta ma tụnyere ya na ihe a chọrọ", "Ịtụ mmiri ozuzo", "Ilele batrị drone"], answer: 1, why: "Ọnụ ọgụgụ n'ebe a maara nha ha na-enye osisi kwa hekta, nke a na-atụnyere na ohere a chọrọ n'etiti osisi." },
            { objective: "O3", q: "Onye na-azụ ihe jụrụ ole kpọmkwem ị ga-ewe otu ọnwa tupu owuwe ihe ubi. Gịnị ka ị ga-enye?", options: ["Otu ọnụ ọgụgụ kpọmkwem dị ka nkwa", "Ọ dịghị ihe ọ bụla", "Ọnụ ọgụgụ afọ gara aga", "Oke (site na ruo), na-akọwa na ihu igwe, ụmụ ahụhụ na ihe na-efu nwere ike ịgbanwe ya"], answer: 3, why: "Ịkọ owuwe ihe ubi n'oge bụ oke, ọ bụghị nkwa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ugbo ziri ezi",
        questions: [
          { objective: "O1", q: "Gịnị bụ mpaghara njikwa?", options: ["Igbe ọ bụla a họọrọ n'efu", "Akụkụ ubi na-akpa otu agwa ahụ oge ọrụ ugbo ọ bụla", "Ọfịs ugbo", "Ebe a na-anaghị efe drone"], answer: 1, why: "Mpaghara na-achịkọta akụkụ ndị na-eme otu ihe ahụ, ka e wee lekọta ha otu ụdị." },
          { objective: "O1", q: "Kedu ụzọ kacha mma isi see mpaghara?", options: ["Jiri naanị otu maapụ site n'otu ụbọchị", "Detuo mpaghara onye agbata obi", "Jikọta maapụ sitere n'ihe karịrị otu ụbọchị na ihe onye ọrụ ugbo maara", "See igbe hà nhata"], answer: 2, why: "Ọtụtụ maapụ na ihe obodo maara na-egosi ụdị ihe na-adịgide adịgide." },
          { objective: "O2", q: "Mpaghara adịghị ike n'ihi na mmiri na-akwụ ebe ahụ mgbe mmiri zochara. Omume kacha mma bụ:", options: ["Mee ka mmiri na-asọpụ nke ọma", "Tinye fatịlaịza okpukpu abụọ", "Gbaa ọgwụ ahụhụ", "Kụkwuo mkpụrụ"], answer: 0, why: "Dozie ihe kpatara ya; fatịlaịza anaghị edozi mmiri na-akwụ ọtọ." },
          { objective: "O2", q: "Ọrụ drone kwere ịgba ọgwụ ahụhụ n'ọka onye ahịa. Gịnị ga-adịrịrị?", options: ["Naanị ikike onye ọrụ ugbo", "Ọ dịghị ihe ọzọ", "Ezigbo igwefoto", "Ikike ụgbọ elu na ọgwụ ahụhụ na ndị ọrụ nwere akwụkwọ ikike"], answer: 3, why: "Ịgba ọgwụ site na drone bụ ọrụ a na-achịkwa, nwere ihe egwu karịa." },
          { objective: "O3", q: "Ọka a kụrụ n'ohere 75 cm x 25 cm nwere ihe a chọrọ dị ka:", options: ["Osisi 5,300 kwa hekta", "Osisi 53,000 kwa hekta", "Osisi 530,000 kwa hekta", "Osisi 530 kwa hekta"], answer: 1, why: "10,000 m2 kewara site na 0.1875 m2 kwa osisi bụ ihe dị ka 53,000." }
        ]
      }
    },
    {
      name: "Isi 2: Ihu igwe, anụ ụlọ na ihe owuwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ilekọta ihe egwu ihu igwe na gburugburu",
          minutes: 6,
          goal: "Jiri ụgbọ elu drone hụ ihe egwu mbuze ala, idei mmiri na ụkọ mmiri ozuzo ma soro omume ọrụ ugbo kwesịrị ihu igwe.",
          text: [
            "Mgbanwe ihu igwe na-eweta mmiri ozuzo siri ike karị, oge ụkọ mmiri dị ogologo karị na okpomọkụ karịa n'ọtụtụ ebe ọrụ ugbo. FAO na-akọwa climate-smart agriculture dị ka ọrụ ugbo na-ebuli mmepụta na ego a na-enweta, na-enyere ugbo aka ịgbanwe na iwulite ike iguzosi ike, ma na-ebelata ma ọ bụ wepụ gas na-ekpo ụwa ọkụ ebe ọ ga-ekwe omume.",
            "Drone na-enyere aka n'akụkụ ịgbanwe. Mgbe mmiri ozuzo siri ike, ụgbọ elu na-egosi gully, terrace mmiri bupụrụ, ọwa mmiri apịtị juru na ubi idei mmiri kpuchiri; elevation model na-egosi ebe mmiri ga-asọ oge ọzọ. N'oge ụkọ mmiri, maapụ thermal na NDVI na-egosi akụkụ ndị na-ebu ụzọ kpọọ nkụ. N'ọtụtụ oge, maapụ na-egosi ma terrace, ihe ọkụkụ na-ekpuchi ala (cover crops), mulch, ịkụ osisi na ichekwa mmiri ozuzo na-arụ ọrụ.",
            "Fee otu ebe ahụ n'ụbọchị a kara aka (dịka ọmụmaatụ tupu oge mmiri ozuzo ogologo, mgbe oke mmiri mbụ zochara, n'etiti oge, na mgbe owuwe ihe ubi gasịrị) ma tụnyere ha. Kesaa maapụ ndị ahụ na otu ndị ọrụ ugbo ma ọ bụ ndị ọrụ county ma ọ bụ steeti: ha na-egosi obodo niile ebe a ga-ebu ụzọ mee ihe."
          ],
          steps: ["Họrọ ụbọchị ụgbọ elu a kara aka jikọrọ na oge ọrụ ugbo.", "Mgbe mmiri ozuzo siri ike: see maapụ gully, ebe mmiri bupụrụ, ọwa mmiri apịtị juru, ubi idei mmiri kpuchiri.", "N'oge ụkọ mmiri: jiri NDVI ma ọ bụ thermal see maapụ akụkụ ndị na-ebu ụzọ kpọọ nkụ.", "Oge ọ bụla: lelee terrace, cover crops, mulch, osisi, ichekwa mmiri ozuzo.", "Tụnyere maapụ n'ime oge ma kesaa ha."],
          words: [["Climate-smart agriculture (CSA)", "ọrụ ugbo na-ebuli mmepụta, na-enyere ugbo aka ịgbanwe maka mgbanwe ihu igwe, ma na-ebelata gas na-ekpo ụwa ọkụ ebe ọ ga-ekwe omume."], ["Mbuze ala (erosion)", "ala mmiri ma ọ bụ ifufe bupụrụ."], ["Gully", "ọwa miri emi mmiri na-asọ gwuru n'ala."]],
          slides: [
            { title: "Climate-smart agriculture", bullets: ["Bulie mmepụta na ego a na-enweta", "Gbanwee ma wulite ike iguzosi ike", "Belata gas na-ekpo ụwa ọkụ ebe ọ ga-ekwe omume"] },
            { title: "Ihe drone na-egosi", bullets: ["Mgbe mmiri zochara: gully, ebe mmiri bupụrụ, ubi idei mmiri kpuchiri", "Oge ụkọ mmiri: akụkụ na-ebu ụzọ kpọọ nkụ", "Ma terrace, mulch, osisi na-arụ ọrụ"] },
            { title: "Fee n'ụbọchị a kara aka", bullets: ["Tupu mmiri ozuzo, mgbe oke mmiri, n'etiti oge, mgbe owuwe gasịrị", "Tụnyere n'ime oge", "Kesaa na otu ndị ọrụ ugbo na ndị ọrụ gọọmentị"] }
          ],
          sources: [FAO_CSA, FAO_ITU_DRONES],
          tryIt: "Dee kalenda afọ nwere ụgbọ elu ihu igwe anọ maka ugbo ị maara, jikọrọ na oge mmiri ozuzo na oge ọkọchị ya. Maka ụgbọ elu ọ bụla, depụta ihe abụọ ị ga-achọ.",
          youCanNow: "ịhazi ụgbọ elu drone na-eso ihe egwu mbuze ala, idei mmiri na ụkọ mmiri ozuzo, ma lelee ma omume climate-smart na-arụ ọrụ.",
          quickCheck: [
            { objective: "O4", q: "Mgbe mmiri ozuzo siri ike, gịnị ka elevation model na-enyere aka igosi?", options: ["Ehi ndị na-arịa ọrịa", "Ọnụ ahịa ọka", "Ebe mmiri ga-asọ oge ọzọ", "Mkpụrụ e nyere asambodo"], answer: 2, why: "Elevation model na-egosi ogo ala, ka i wee hụ ebe mmiri ga-asọ oge ọzọ." },
            { objective: "O4", q: "Mgbe oke mmiri ozuzo gasịrị, maapụ gị na-egosi gully n'ọtụtụ ugbo dị n'otu ahụ. Gịnị ka ị ga-eme?", options: ["Kesaa maapụ ndị ahụ na otu ndị ọrụ ugbo na ndị ọrụ county ma ọ bụ steeti", "Debe maapụ ndị ahụ naanị gị", "Hichapụ ha n'ihi na oke mmiri ahụ agafeela", "Fee naanị ugbo gị oge ọzọ"], answer: 0, why: "Maapụ e kesara na-egosi obodo niile ebe a ga-ebu ụzọ mee ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ilekọta anụ ụlọ na ebe ịta nri",
          minutes: 5,
          goal: "Hazie ụgbọ elu drone dị jụụ ma dị nchekwa iji gụọ anụmanụ ma lelee ebe ịta nri na ebe mmiri.",
          text: [
            "N'ugbo anụ ụlọ (ranch) na nnukwu ebe ndị na-azụ anụ, drone nwere ike ịgụ ehi, ewu ma ọ bụ kamel, chọta anụmanụ furu efu ma ọ bụ na-arịa ọrịa, ma lelee ma ebe mmiri na trough na-arụ ọrụ, na-echekwa ọtụtụ awa ije ụkwụ ma ọ bụ ịnya ụgbọala. Igwefoto thermal na-achọta anụmanụ n'isi ụtụtụ ma ọ bụ n'ọhịa gbara agbata.",
            "Drone nwere ike ịtụ anụmanụ egwu, karịsịa mgbe ọ dị ala. Fee elu nke ọma ka ọ ghara ịtụ ha egwu, bịaruo nso nwayọọ site n'akụkụ, ejila drone chụọ ma ọ bụ kpọkọta anụmanụ belụsọ na a zụrụ gị azụ ma e kwere ya, ma kwụsị ma ọ bụrụ na ha amalite ịgba ọsọ. Jụọ onye na-azụ anụ tupu i fee.",
            "Maapụ ebe ịta nri (NDVI ma ọ bụ agba) na-egosi ebe ahịhịa siri ike, ebe a tara ya karịa oke, ma ọ bụ ebe ala tọgbọrọ chakoo. N'ime oge, ha na-enyere aka ịhazi rotational grazing ma hụ ala chọrọ izu ike. Esela foto ndị mmadụ ma ọ bụ ụlọ ha n'enweghị ikike."
          ],
          steps: ["Jụọ onye na-azụ anụ ma ọ bụ onye nwe ya; kwekọọ n'oge na ebe.", "Fee elu ma bịaruo nso nwayọọ site n'akụkụ.", "Gụọ anụmanụ site na foto, ọ bụghị site n'ịgagharị ala ala.", "Lelee ebe mmiri, trough na ngere n'ụzọ.", "See maapụ ebe ịta nri: siri ike, a tara karịa oke, tọgbọrọ chakoo.", "Kwụsị ma ọ bụrụ na anụmanụ amalite ịgba ọsọ."],
          words: [["Rotational grazing", "ịkwaga anụmanụ n'etiti paddock dị iche iche ka ahịhịa wee zuo ike ma too ọzọ."], ["Ịta karịa oke (overgrazing)", "mgbe anụmanụ na-eri ahịhịa ngwa ngwa karịa ka ọ na-eto ọzọ, na-ahapụ ala tọgbọrọ chakoo."]],
          slides: [
            { title: "Ihe drone na-eme n'ugbo anụ ụlọ", bullets: ["Gụọ anụmanụ, chọta ndị furu efu ma ọ bụ na-arịa ọrịa", "Lelee ebe mmiri na trough", "Thermal n'isi ụtụtụ ma ọ bụ n'ọhịa gbara agbata"] },
            { title: "Ọdịmma anụmanụ bụ isi", bullets: ["Jụọ onye na-azụ anụ", "Fee elu, bịaruo nso nwayọọ site n'akụkụ", "Achụla ha; kwụsị ma ọ bụrụ na anụmanụ agbaa ọsọ"] },
            { title: "Maapụ ebe ịta nri", bullets: ["Ahịhịa siri ike, a tara karịa oke ma ọ bụ tọgbọrọ chakoo", "Hazie rotational grazing", "Hụ ala chọrọ izu ike"] }
          ],
          tryIt: "Dee obere atụmatụ ụgbọ elu maka ịgụ ehi 60 n'ime paddock nke hekta 40: oge n'ụbọchị, ogo elu, otu ị ga-esi bịaruo nso, ihe ọzọ ị ga-elele, na mgbe ị ga-akwụsị.",
          youCanNow: "ịhazi ụgbọ elu dị jụụ ma dị nchekwa n'elu anụ ụlọ na ebe ịta nri, ma jiri ya kwado mkpebi gbasara ịta nri.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka drone nwere ike ime n'ugbo anụ ụlọ?", options: ["Ịgụ anụmanụ ma lelee ma ebe mmiri na trough na-arụ ọrụ", "Ịkpọbata ehi n'ime boma", "Ịgwọ anụmanụ na-arịa ọrịa", "Ịra ehi mmiri ara"], answer: 0, why: "Drone nwere ike ịgụ anụmanụ, chọta ndị furu efu ma ọ bụ na-arịa ọrịa, ma lelee ebe mmiri, na-echekwa ije ụkwụ ma ọ bụ ịnya ụgbọala." },
            { objective: "O5", q: "Onye na-azụ anụ na-akwaga ewu n'akụkụ ebe ị chọrọ ife drone. Gịnị ka ị ga-eme?", options: ["Fee ala ka i see foto dị nso", "Chụkọta ewu ndị ahụ n'otu ebe", "Buru ụzọ jụọ onye na-azụ anụ, fee elu ma bịaruo nso nwayọọ site n'akụkụ", "Fee ngwa ngwa kpọmkwem n'elu ha"], answer: 2, why: "Jụọ onye na-azụ anụ, ma fee elu na nwayọọ site n'akụkụ ka anụmanụ ghara ịtụ egwu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ilele ihe owuwu ugbo",
          minutes: 5,
          goal: "Lelee dam, ọwa mmiri, ngere, greenhouse na ụlọ nkwakọba ihe site n'elu ma depụta ndozi.",
          text: [
            "Ihe owuwu ugbo dị oke ọnụ, ọ na-adịkwa mfe ichefu ya ruo mgbe ọ mebiri. Obere ụgbọ elu drone nwere ike ilele mgbidi water pan ma ọ bụ obere dam maka mgbawa na mmiri na-ehi, ọwa mmiri ịgba mmiri na ọkpọkọ maka ebe na-ehi ma ọ bụ ebe e gbochiri, ngere oke maka ebe gbajiri agbaji, elu greenhouse na ụgbụ ya maka ebe dọwara adọwa, na elu ụlọ nkwakọba ihe maka mmebi.",
            "Fee nwayọọ n'akụkụ ihe owuwu ahụ, na igwefoto e hulatara, ọ bụghị naanị kpọmkwem n'ala. Nọrọ n'ebe dị anya nke ọma site na waya ọkụ na ụlọ, ma nọrọ n'ime ikike gị. See foto n'otu ebe ahụ oge ọ bụla ka i wee tụnyere ha.",
            "Gbanwee foto ndị ahụ ka ọ bụrụ ndepụta ndozi: ihe ahụ, ebe ọ dị, nsogbu ya, ka o si ọsọ ọsọ, na onye ga-edozi ya. Fee ọzọ mgbe e dozichara, na tupu mmiri ozuzo amalite mgbe mmebi ga-akacha merụọ ahụ."
          ],
          steps: ["Depụta ihe owuwu a ga-elele na ebe ha dị.", "Fee nwayọọ n'akụkụ nke ọ bụla na igwefoto e hulatara.", "See foto n'otu ebe ahụ oge ọ bụla.", "Dee ndepụta ndozi: ihe, ebe, nsogbu, ka o si ọsọ ọsọ, onye ga-edozi ya.", "Fee ọzọ mgbe e dozichara na tupu mmiri ozuzo."],
          words: [["Water pan", "ọdọ mmiri e gwuru egwu na-anakọta mmiri ozuzo maka anụmanụ ma ọ bụ ịgba mmiri n'ubi."], ["Seepage", "mmiri na-ehi nwayọọ nwayọọ site na mgbidi dam ma ọ bụ n'ọnụ ọwa mmiri."]],
          slides: [
            { title: "Ihe a ga-elele", bullets: ["Water pan na mgbidi obere dam", "Ọwa mmiri na ọkpọkọ", "Ngere, elu greenhouse, elu ụlọ nkwakọba ihe"] },
            { title: "Otu esi efe ya", bullets: ["Nwayọọ n'akụkụ ihe owuwu ahụ", "Igwefoto e hulatara, ọ bụghị naanị kpọmkwem n'ala", "Otu ebe foto ahụ oge ọ bụla"] },
            { title: "Gbanwee foto ka ọ bụrụ ndozi", bullets: ["Ihe, ebe, nsogbu, ka o si ọsọ ọsọ, onye", "Fee ọzọ mgbe e dozichara na tupu mmiri ozuzo"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nlekọta gị nke oge ọrụ ugbo niile maka ugbo agwakọtara agwakọta: mpaghara na ihe nke ọ bụla ga-enweta, ụgbọ elu maka ihe ọkụkụ, ụgbọ elu maka ihu igwe, otu ụgbọ elu maka anụ ụlọ na ebe ịta nri, otu ụgbọ elu maka ihe owuwu, ihe ị ga-achọ oge ọ bụla na ihe a ga-eme maka ihe ọ bụla a chọpụtara.",
          youCanNow: "ilele ihe owuwu ugbo site na drone ma hazie nlekọta ugbo niile n'oge ọrụ ugbo niile.",
          quickCheck: [
            { objective: "O6", q: "Kedu nsogbu ụgbọ elu drone nwere ike ịchọta na greenhouse?", options: ["Ọnụ ahịa ihe ọkụkụ", "pH ala", "Aha ahụhụ", "Ebe dọwara adọwa na rọba elu ma ọ bụ ụgbụ"], answer: 3, why: "Ụgbọ elu nwere ike igosi ebe dọwara adọwa n'elu greenhouse na ụgbụ tupu ha akawanye njọ." },
            { objective: "O6", q: "Mmiri ozuzo ga-amalite n'izu atọ, e dozikwara mgbidi water pan n'izu gara aga. Gịnị ka ị ga-eme?", options: ["Chere ruo mgbe mmiri ozuzo gafere", "Fee ọzọ ilele ndozi ahụ tupu mmiri ozuzo", "Elelekwala ya ọzọ", "Fee naanị kpọmkwem n'ala, n'elu dị anya"], answer: 1, why: "Fee ọzọ mgbe e dozichara na tupu mmiri ozuzo, mgbe mmebi ga-akacha merụọ ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ihu igwe, anụ ụlọ na ihe owuwu",
        questions: [
          { objective: "O4", q: "Climate-smart agriculture nke FAO nwere ebumnuche atọ. Kedu nke bụ otu n'ime ha?", options: ["Inyere ugbo aka ịgbanwe ma wulite ike iguzosi ike", "Iji fatịlaịza dị ukwuu dịka o kwere mee", "Igbutu osisi niile", "Ịkụ naanị otu ihe ọkụkụ"], answer: 0, why: "CSA na-elekwasị anya na mmepụta, ịgbanwe na ike iguzosi ike, na ibelata gas na-ekpo ụwa ọkụ." },
          { objective: "O4", q: "Olee mgbe kwesịrị ekwesị maka ụgbọ elu ihu igwe iji chọta gully na ebe mmiri bupụrụ?", options: ["Naanị n'etiti abalị", "Ọ dịghị mgbe ọ bụla", "Mgbe oke mmiri ozuzo mbụ nke oge ahụ zochara", "N'oge ngosi drone"], answer: 2, why: "Mmebi ọhụrụ na-apụta ìhè nke ọma ozugbo oke mmiri zochara." },
          { objective: "O5", q: "Ehi amalite ịgba ọsọ mgbe drone nọ n'elu ha. I kwesịrị:", options: ["Fee ala karị ka ha dajụọ", "Chụghachi ha", "Nọgide na-agagharị", "Kwụsị ma bupụ drone ahụ"], answer: 3, why: "Ọdịmma anụmanụ na nchekwa bụ isi." },
          { objective: "O5", q: "Maapụ ebe ịta nri na-egosi paddock nwere ọtụtụ ala tọgbọrọ chakoo. Nke a na-egosi:", options: ["Ịta karịa oke; paddock ahụ nwere ike ịchọ izu ike", "Drone ahụ mebiri emebi", "Naanị mmiri ozuzo karịrị akarị", "Ebe ịta nri zuru oke"], answer: 0, why: "Ala tọgbọrọ chakoo n'ebe ịta nri na-apụtakarị na anụmanụ riri ngwa ngwa karịa ka ahịhịa tolitere ọzọ." },
          { objective: "O6", q: "Mgbe ị na-elele mgbidi water pan, i kwesịrị:", options: ["Fee naanị kpọmkwem n'ala, ngwa ngwa", "Fee nwayọọ n'akụkụ ya na igwefoto e hulatara", "Fee n'elu ndị mmadụ nọ nso", "Hapụ ya"], answer: 1, why: "Igwefoto e hulatara na-egosi mgbawa na seepage na mgbidi ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone maka Nlekọta Ugbo 4: Ọrụ Ugbo Ziri Ezi, Ihu Igwe na Nlekọta Anụ Ụlọ",
    questions: [
      { objective: "O1", q: "Ọrụ ugbo ziri ezi pụtara:", options: ["Imeso akụkụ ọ bụla nke ubi otu ụdị", "Ilekọta akụkụ ọ bụla nke ubi dịka mkpa ya si dị", "Iji naanị drone", "Ịrụ ọrụ ugbo n'abalị"], answer: 1, why: "Ọ na-eme ka ihe a na-etinye na ọrụ dabara ihe akụkụ ọ bụla chọrọ." },
      { objective: "O1", q: "Gịnị mere ọtụtụ ubi anaghị adị otu?", options: ["Drone na-eme ka ha ghara ịdị otu", "Ha dị otu", "Ala, ndịda, mmiri, ndò na otu e si jiri ya na mbụ dị iche", "Mkpụrụ na-adị njọ mgbe niile"], answer: 2, why: "Ọdịdị ala na akụkọ ọrụ ugbo na-eme ka akụkụ ụfọdụ too nke ọma." },
      { objective: "O1", q: "Mpaghara ole na-ezukarị n'obere ugbo?", options: ["Abụọ ruo anọ", "Iri ise", "Otu narị", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Mpaghara ole na ole dị mfe dị mfe ijikwa na ịka akara." },
      { objective: "O1", q: "Gịnị mere a ga-eji kaa akara mpaghara n'ala?", options: ["Iji chọọ ugbo mma", "Iwu chọrọ osisi a kpọbara", "Iji tụọ nnụnụ egwu", "Ka ndị ọrụ wee chọta ma lekọta mpaghara ọ bụla"], answer: 3, why: "Ndị ọrụ kwesịrị ịhụ ebe mpaghara ọ bụla na-amalite na ebe ọ na-akwụsị." },
      { objective: "O2", q: "Variable-rate pụtara:", options: ["Oke dị iche iche n'ebe dị iche iche", "Otu oke n'ebe niile", "Ịgbanwe ọsọ drone", "Ịgbanwe ọnụ ahịa ihe ọkụkụ"], answer: 0, why: "Oke na-agbanwe dịka mpaghara na mkpa si dị." },
      { objective: "O2", q: "N'obere ugbo, enwere ike ime variable-rate site na:", options: ["Naanị nnukwu igwe", "Ndị ọrụ na-etinye fatịlaịza karịa ma ọ bụ belata n'olulu ọ bụla dịka mpaghara si dị", "Satịlaịt", "Ọ gaghị ekwe omume"], answer: 1, why: "Echiche ahụ na-arụ ọrụ site n'aka mgbe e nwere ntụziaka mpaghara doro anya." },
      { objective: "O2", q: "Mpaghara na-adịghị ike n'ala na-adịghị omimi nwere nkume nwere ike:", options: ["Ịchọ fatịlaịza okpukpu abụọ mgbe niile", "Ịbụ ebe kacha mma maka mkpụrụ ọzọ", "Ghara ịkwụghachi fatịlaịza ọzọ", "Ịchọ ịgba ọgwụ"], answer: 2, why: "Ala ahụ na-egbochi uto; ihe ọzọ e tinyere nwere ike ịla n'iyi." },
      { objective: "O2", q: "Onye ga-enyerịrị ikike maka ịgba ọgwụ ahụhụ site na drone?", options: ["Naanị onye na-ere drone", "Naanị onye ọrụ ugbo", "Naanị onye agbata obi", "Ụlọ ọrụ na-ahụ maka ụgbọ elu na onye na-achịkwa ọgwụ ahụhụ"], answer: 3, why: "Iwu ụgbọ elu na iwu ọgwụ ahụhụ na-emetụta drone na-agba ọgwụ." },
      { objective: "O3", q: "Plant stand bụ:", options: ["Osisi pụtara ma e jiri ya tụnyere osisi a kụrụ", "Ogo elu drone", "Akara ugbo", "Ọnụ ahịa mkpụrụ"], answer: 0, why: "Ọ na-egosi otu ihe ọkụkụ si guzosie ike nke ọma." },
      { objective: "O3", q: "Ị gụrụ osisi ọka 40,000 kwa hekta, ihe a chọrọ bụ ihe dị ka 53,000. Plant stand bụ ihe dị ka:", options: ["Pasentị 25", "Pasentị 50", "Pasentị 75", "Pasentị 100"], answer: 2, why: "40,000 kewara site na 53,000 bụ ihe dị ka 0.75." },
      { objective: "O3", q: "A ga-enye ịkọ owuwe ihe ubi n'oge dị ka:", options: ["Nkwa kpọmkwem", "Ihe nzuzo", "Oke (site na ruo) nwere ike ịgbanwe", "Ego mgbazinye"], answer: 2, why: "Ihu igwe, ụmụ ahụhụ na ihe na-efu na-agbanwe owuwe ikpeazụ." },
      { objective: "O4", q: "Kedu omume climate-smart drone nwere ike inyere aka iso?", options: ["Ịkpọ ọkụ n'ihe fọdụrụ n'ubi", "Ịkọ ala elu na ala n'ugwu", "Iwepụ osisi niile", "Terrace, mulch na ịkụ osisi"], answer: 3, why: "Maapụ na-egosi ma omume ndị a na-arụ ọrụ n'ime oge." },
      { objective: "O4", q: "N'oge ụkọ mmiri, maapụ ndị ole na-egosi akụkụ ndị na-ebu ụzọ kpọọ nkụ?", options: ["Maapụ NDVI ma ọ bụ thermal", "Maapụ okporo ụzọ", "Ndepụta ọnụ ahịa", "Akwụkwọ mmado mmiri ozuzo"], answer: 0, why: "NDVI na thermal na-egosi ike osisi na nsogbu okpomọkụ." },
      { objective: "O4", q: "Gịnị mere a ga-eji fee otu ebe ahụ n'ụbọchị a kara aka?", options: ["Iji batrị karịa", "Iji tụnyere mgbanwe n'ime oge", "N'ihi na drone chọrọ usoro", "Iji see foto ndị agbata obi"], answer: 1, why: "Maapụ a na-emegharị na-egosi otu ihe si agbanwe na nsonaazụ omume." },
      { objective: "O5", q: "Tupu ụgbọ elu n'elu anụ ụlọ, i kwesịrị:", options: ["Fee ala n'elu igwe anụ ahụ", "Chụkọta anụmanụ n'otu ebe", "Jụọ onye na-azụ anụ ma kwekọọ n'oge na ebe", "Fee n'ọsọ kachasị elu"], answer: 2, why: "Ikike na ibịaruo nso n'udo na-echebe anụmanụ na ndị mmadụ." },
      { objective: "O5", q: "Igwefoto thermal n'ugbo anụ ụlọ na-enyere aka:", options: ["Ime ka ahịhịa too", "Idozi ngere", "Ịgụ akara ntị (ear tags)", "Ịchọta anụmanụ n'isi ụtụtụ ma ọ bụ n'ọhịa gbara agbata"], answer: 3, why: "Anụmanụ na-apụta dị ka ebe na-ekpo ọkụ." },
      { objective: "O5", q: "Rotational grazing pụtara:", options: ["Ịkwaga anụmanụ n'etiti paddock ka ahịhịa wee too ọzọ", "Idebe anụmanụ n'otu ebe afọ niile", "Ịta nri naanị n'abalị", "Inye naanị ahịhịa kpọrọ nkụ (hay)"], answer: 0, why: "Ịhapụ paddock ka o zuo ike na-eme ka ahịhịa laghachi." },
      { objective: "O6", q: "Seepage na mgbidi dam pụtara:", options: ["Dam ahụ juru azụ", "Mmiri na-ehi nwayọọ nwayọọ site na ya", "Mgbidi ahụ dị ọhụrụ", "Mmiri na-ezo"], answer: 1, why: "Seepage nwere ike ime ka mgbidi ahụ ghara isi ike, a ga-edozikwa ya." },
      { objective: "O6", q: "Ezigbo ndepụta ndozi ihe owuwu gụnyere:", options: ["Naanị foto", "Ụdị drone", "Ihe, ebe, nsogbu, ka o si ọsọ ọsọ na onye ga-edozi ya", "Ọnụ ahịa n'ahịa"], answer: 2, why: "Nkọwa doro anya na-eme ka e mee ndozi." },
      { objective: "O6", q: "Olee mgbe ilele ihe owuwu na-akacha baa uru?", options: ["Ọ dịghị mgbe ọ bụla", "Naanị mgbe ihe mebiri", "N'oge oke mmiri ozuzo", "Tupu mmiri ozuzo na mgbe e dozichara"], answer: 3, why: "Idozi nsogbu tupu mmiri ozuzo na-egbochi mmebi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 8, 9, 11, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Mpaghara njikwa", objective: "O1", notYet: "Enweghị mpaghara, ma ọ bụ mpaghara e sere site n'otu maapụ n'enweghị ihe kpatara ya.", meets: "Mpaghara abụọ ruo anọ nwere aha n'isi ubi, site na maapụ na ihe onye ọrụ ugbo maara, na otu e si kaa ha akara.", exceeds: "Na-eji maapụ sitere n'ihe karịrị otu ụbọchị ma ọ bụ oge." },
      { name: "Ihe mpaghara ọ bụla na-enweta", objective: "O2", notYet: "Mpaghara niile na-enweta otu ọgwụgwọ, ma ọ bụ a hazira ịgba ọgwụ site na drone n'enweghị ikike.", meets: "Mpaghara ọ bụla nwere omume dabara ihe kpatara ya: mkpụrụ, fatịlaịza, ndị ọrụ ma ọ bụ ndozi.", exceeds: "Gụnyere ilele plant stand na oke owuwe ihe ubi dịka mpaghara si dị." },
      { name: "Ụgbọ elu ihu igwe", objective: "O4", notYet: "Enweghị ụgbọ elu maka ihu igwe ma ọ bụ gburugburu.", meets: "Ụgbọ elu n'ụbọchị a kara aka iji lelee mbuze ala, idei mmiri na ụkọ mmiri ozuzo, na ihe ihe ọ bụla a chọpụtara ga-eduga na ya.", exceeds: "Na-eso omume climate-smart dị ka terrace ma ọ bụ mulch n'oge niile." },
      { name: "Anụ ụlọ na ebe ịta nri", objective: "O5", notYet: "Enweghị ụgbọ elu maka anụ ụlọ, ma ọ bụ ụgbọ elu ga-atụ anụmanụ egwu.", meets: "Ụgbọ elu iji gụọ anụmanụ ma lelee ebe ịta nri na ebe mmiri, na onye na-azụ anụ kwere na ogo elu dị nchekwa.", exceeds: "Na-ejikọ maapụ ebe ịta nri na atụmatụ rotational grazing." },
      { name: "Ihe owuwu", objective: "O6", notYet: "Etinyeghị dam, ngere ma ọ bụ ihe owuwu ndị ọzọ.", meets: "Ụgbọ elu iji lelee water pan, ngere na ihe owuwu ndị ọzọ, na ụdị ndepụta ndozi.", exceeds: "E hazirị ya tupu mmiri ozuzo na mgbe e dozichara, na foto site n'otu ebe ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ nlekọta ahụ",
      "Ndị na-amụ ihe kwuru na ha na-ejikwa ubi dịka mpaghara si dị ma ọ bụ na-agbaso atụmatụ nlekọta nke oge n'ime otu oge ọrụ ugbo (nnyocha nsochi)",
      "Ugbo ma ọ bụ otu kwuru na ha mere ihe n'oge banyere mbuze ala, ụkọ mmiri ozuzo, ịta karịa oke ma ọ bụ mmebi ihe owuwu",
      "Ndị na-amụ ihe gara n'ihu na Ihe ọmụmụ 5 nke usoro drone"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Maapụ drone nke ezi ugbo, ma ọ bụ ugbo agwakọtara agwakọta nke ọmụmaatụ dị n'ihe ọmụmụ a",
      "Ekwentị nwere GPS, na osisi a kpọbara n'ala ma ọ bụ ọkọlọtọ iji kaa akara mpaghara",
      "Akwụkwọ ndetu ma ọ bụ spreadsheet maka tebụl mpaghara na atụmatụ oge",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge ide atụmatụ nlekọta"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee see mpaghara n'otu maapụ ọmụmaatụ dị ka otu tupu ndị na-amụ ihe esee nke ha.",
      "Wetara owuwe ihe ubi a na-atụ anya n'obodo na ndụmọdụ fatịlaịza site n'aka extension; enyela oke n'onwe gị.",
      "Ahazila ma ọ bụ gosi ịgba ọgwụ site na drone n'enweghị ikike ụgbọ elu na ọgwụ ahụhụ.",
      "Ọ bụrụ na ị na-efe nso anụ ụlọ, buru ụzọ jụọ onye na-azụ anụ, fee elu ma kwụsị ma ọ bụrụ na anụmanụ amalite ịgba ọsọ.",
      "Jiri rubric tụọ akara atụmatụ nlekọta ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
