"use strict";

// Koach Learn course (Igbo translation of leadership/edu-ai-stem.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-stem-ig",
  lang: "ig",
  translationOf: "edu-ai-stem",
  category: "Leadership Development",
  name: "AI na Agụmakwụkwọ STEM",
  skills: "Ime ajụjụ STEM nwere azịza e lelere, Iji AI nyere aka ide koodu n'nyocha data, Ịkụzi otu AI si amụta ihe site na data, Ịlele ihe AI kwuru dị ka ọkà mmụta sayensị, Iji AI n'usoro nhazi injinịa, Ịhazi ọrụ na-egosi echiche ụmụ akwụkwọ",
  outcome: "ịhazi na ịkụzi nkuzi STEM ebe ụmụ akwụkwọ na-eji AI dị ka ngwa, iji nyere aka ide koodu, nyochaa data ma ọ bụ chepụta echiche nhazi, wee lelee ihe ọ mepụtara dị ka ndị ọkà mmụta sayensị na ndị injinịa, site n'ọrụ na-eme ka echiche ụmụ akwụkwọ pụta ìhè.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nkuzi, ndị nchịkwa na ndị ndu nke STEM (sayensị, teknụzụ, injinịa na mgbakọ na mwepụ). AI bụ ma ngwa maka mmụta STEM ma isiokwu STEM n'onwe ya. Ụmụ akwụkwọ kwesịrị ịmụta iji ya, ilele ya, na ịghọta otu o si arụ ọrụ.",
    "Isi 1 na-eji AI dị ka ngwa onye nkuzi na nwa akwụkwọ: ajụjụ omume nwere azịza e lelere, ihe ngosi (simulation) na eserese, na nyocha data ebe AI na-enyere aka ide koodu. Isi 2 na-eme AI isiokwu: otu igwe si amụta ihe site na data, ịlele ihe AI kwuru dị ka ọkà mmụta sayensị, AI n'usoro nhazi injinịa, na ọrụ na-eme ka echiche ụmụ akwụkwọ nọrọ n'etiti.",
    "Ụmụ akwụkwọ ga-eji ngwa AI naanị ma ọ bụrụ na district gị kwadoro ya, ma gbasoo iwu afọ ndụ nke ngwa ọ bụla. Etinyela ozi ụmụ akwụkwọ na ngwa a na-akwadoghị. Obere nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Hazie ma (ọ bụrụ na ị nwere ike) kụzie otu nkuzi STEM ebe ụmụ akwụkwọ na-eji ngwa AI e kwadoro dị ka akụkụ nke nyocha, dịka ọmụmaatụ ịrịọ AI ka o nyere aka ide koodu Python na Google Colab iji see eserese nke data ọha, ma ọ bụ ịchepụta echiche nhazi maka ihe ịma aka injinịa. Nkuzi ahụ ga-enwerịrị nzọụkwụ nlele (ụmụ akwụkwọ na-elele koodu, nọmba ma ọ bụ ihe AI kwuru site na data, ngụkọ ma ọ bụ nnwale), ọrụ ebe ụmụ akwụkwọ na-akọwa echiche ha n'okwu nke ha, na ọkwa iji AI maka ọrụ ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nkuzi sayensị, teknụzụ, injinịa na mgbakọ na mwepụ, ndị nchịkwa nkuzi na ndị ndu ụlọ akwụkwọ chọrọ ka ụmụ akwụkwọ jiri AI dị ka ngwa n'nyocha na nhazi, ma ka na-ewulite ezi echiche.",
    startingPoint: "Ha nwere ike ịkụzi ihe STEM, duzie ọrụ lab ma nye ajụjụ omume. Ụfọdụ ejiela ngwa enyemaka AI mee ajụjụ omume. Ole na ole nwere usoro maka ilele mgbakọ, koodu ma ọ bụ ihe AI kwuru, ma ọ bụ maka ịhazi ọrụ ebe echiche ụmụ akwụkwọ na-apụta ìhè.",
    gap: "AI na-eme mperi n'obi ike na mgbakọ nwere ọtụtụ nzọụkwụ, koodu, eserese na ntụaka (citation), ọ nwekwara ike ịza ọtụtụ ajụjụ akwụkwọ ọgụgụ n'ọnọdụ ụmụ akwụkwọ. Ndị nkuzi chọrọ nkuzi ebe ụmụ akwụkwọ na-eji AI dị ka ndị ọkà mmụta sayensị na ndị injinịa ga-eji ya: dị ka onye enyemaka nke ihe ọ mepụtara bụ echiche a ga-anwale, ebe ụmụ akwụkwọ na-akọwa echiche nke ha.",
    constraints: [
      "Oge: nkuzi dị mkpụmkpụ nke dabara n'oge nhazi nkuzi",
      "Ngwaọrụ: kọmputa ụlọ akwụkwọ; ụfọdụ ngwa (Google Colab, Teachable Machine) chọrọ akaụntụ na nkwado district",
      "Nzuzo na iwu: lelee iwu district na usoro ngwa ahụ tupu ụmụ akwụkwọ jiri AI ma ọ bụ ngwa ịntanetị ọ bụla",
      "Ihe ngwa n'efu na-enye enweghị nkwa, ya mere atụmatụ chọrọ ụzọ ọzọ, ụmụ akwụkwọ na-echekwakwa ọrụ ha mgbe niile",
      "A ga-elelerịrị ajụjụ, nkọwa na koodu ọ bụla AI mere tupu ụmụ akwụkwọ ahụ ya"
    ],
    prerequisites: "Ọ dịghị. Ndị nkuzi bụ ndị ọhụrụ n'ngwa AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ajụjụ omume STEM AI mere nwere azịza", action: "ịlele azịza ọ bụla site n'ụzọ nke abụọ, igwe mgbakọ ma ọ bụ ngwa eserese", standard: "tupu ụmụ akwụkwọ ahụ ajụjụ ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị data ọha na onye enyemaka AI maka koodu", action: "ịhazi nyocha data ebe ụmụ akwụkwọ na-ede nkọwa n'ahịrị koodu ọ bụla, buru amụma nsonaazụ ya ma jiri aka lelee otu nọmba", standard: "ebe nzọụkwụ nghọta ọ bụla dị n'ime ya" },
    { id: "O3", condition: "Mgbe e nyere gị nkọwa, ntụnyere ma ọ bụ eserese AI mere", action: "ịchọta na idozi echiche ezighi ezi site n'iji usoro ọmụmụ gị ma ọ bụ isi iyi a tụkwasịrị obi lelee ya", standard: "tupu i jiri ya na klas" },
    { id: "O4", condition: "Site n'iji ngwa n'efu ma ọ bụ omume kaadị na-enweghị ngwaọrụ", action: "ịkọwa otu machine learning si eji data ọzụzụ ebu amụma na ihe mere data dị iche iche ji dị mkpa", standard: "site n'ọmụmaatụ klas na-arụ ọrụ" },
    { id: "O5", condition: "Mgbe e nyere gị ihe AI kwuru dị ka ọnụ ọgụgụ, ntụgharị nha ma ọ bụ ntụaka", action: "itinye usoro nkwupụta, ihe akaebe, nlele, mkpebi n'ọrụ", standard: "ruo na nabata, jụ ma ọ bụ ihe akaebe ezughị, ya na ihe kpatara ya" },
    { id: "O6", condition: "Mgbe ị na-ahazi ọrụ STEM ma ọ bụ ihe ịma aka nhazi", action: "ịhazi ọrụ ebe ụmụ akwụkwọ na-egosi echiche nke ha ma dee ọkwa iji AI ya", standard: "ya na nzọụkwụ nlele na nkọwa n'okwu ụmụ akwụkwọ n'onwe ha" }
  ],
  chapters: [
    {
      name: "Isi 1: AI dị ka ngwa STEM",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ajụjụ omume nwere azịza e lelere",
          minutes: 5,
          goal: "Jiri AI mee omume STEM ma lelee azịza ọ bụla.",
          text: [
            "AI nwere ike ime ọtụtụ ajụjụ omume ngwa ngwa: ajụjụ okwu gbasara ndụ kwa ụbọchị, ajụjụ n'ọtụtụ ọkwa isi ike, na azịza nwere nzọụkwụ niile. Nke a na-echekwa oge, mana a maara na AI na-emehie na ngụkọ na echiche, karịsịa n'ajụjụ nwere ọtụtụ nzọụkwụ, ọ nwekwara ike ikwu azịza ezighi ezi n'obi ike.",
            "Ya mere lelee azịza ọ bụla. Gbakọọ ya n'onwe gị, lelee ya site n'igwe mgbakọ ma ọ bụ ngwa eserese dị ka Desmos, ma ọ bụ rịọ AI ka o lelee azịza ya site n'ụzọ nke abụọ wee tụnyere ha. Ọ bụrụ na ụzọ abụọ ahụ adabaghị, gbakọọ ya n'onwe gị.",
            "Rịọ maka ajụjụ nwere nọmba dị mfe maka omume, ma ọ bụ nọmba dị ka nke ndụ n'ezie maka itinye ihe n'ọrụ. Rịọ maka mperi ụmụ akwụkwọ na-emekarị n'ajụjụ ọ bụla; ha na-abụ ezigbo ajụjụ mkparịta ụka."
          ],
          steps: ["Rịọ maka ajụjụ n'ọkwa na ọnọdụ ị chọrọ.", "Rịọ maka azịza nwere nzọụkwụ niile.", "Gbakọọ ma ọ bụ lelee azịza ọ bụla site n'igwe mgbakọ ma ọ bụ ngwa eserese.", "Rịọ maka ụzọ nke abụọ ma tụnyere ha.", "Rịọ maka mperi a na-emekarị ka a kparịta ha."],
          words: [["Azịza nwere nzọụkwụ (worked solution)", "azịza na-egosi nzọụkwụ ọ bụla."], ["Ilele (verify)", "ịhụ na ihe ziri ezi site n'iji ụzọ ma ọ bụ isi iyi ọzọ."]],
          slides: [
            { title: "Omume ngwa ngwa", bullets: ["Ajụjụ okwu gbasara ndụ kwa ụbọchị", "Ọtụtụ ọkwa isi ike", "Azịza nwere nzọụkwụ niile"] },
            { title: "AI na-emehie na mgbakọ", bullets: ["Karịsịa n'ajụjụ nwere ọtụtụ nzọụkwụ", "Ọ nwere ike imehie n'obi ike", "Lelee azịza ọ bụla"] },
            { title: "Otu esi elele", bullets: ["Gbakọọ ya n'onwe gị", "Igwe mgbakọ ma ọ bụ ngwa eserese dị ka Desmos", "Ụzọ nke abụọ; tụnyere ha"] }
          ],
          tryIt: "Rịọ AI maka ajụjụ isii nwere ọtụtụ nzọụkwụ n'isiokwu ị na-akụzi, ya na azịza ha. Lelee nke ọ bụla ma gụọ ole ezighi ezi.",
          youCanNow: "iji AI mee omume STEM ma lelee azịza ọ bụla tupu ụmụ akwụkwọ ahụ ya.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka AI nwere ike imehie karịsịa na mgbakọ?", options: ["Idegharị okwu ajụjụ", "Ajụjụ nwere ọtụtụ nzọụkwụ", "Ide ọnọdụ ajụjụ okwu", "Ịhọrọ nọmba dị mfe"], answer: 1, why: "AI na-emehie na ngụkọ na echiche, karịsịa n'ọtụtụ nzọụkwụ." },
            { objective: "O1", q: "Azịza AI na nlele igwe mgbakọ gị nyere azịza dị iche. Gịnị ka ị ga-eme?", options: ["Kwere AI n'ihi na o gosiri nzọụkwụ", "Kwere igwe mgbakọ n'eleghị anya", "Wepụ ajụjụ ahụ n'eleleghị ya", "Gbakọọ ajụjụ ahụ n'onwe gị"], answer: 3, why: "Mgbe ụzọ abụọ adabaghị, nkuzi ahụ kwuru ka ị gbakọọ ya n'onwe gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nyocha data ebe AI na-enyere aka ide koodu",
          minutes: 6,
          goal: "Hazie nyocha data ebe AI na-enyere aka ide koodu ụmụ akwụkwọ ga-elele ma kọwaa.",
          text: [
            "Ezi data na-eme ka STEM bụrụ ihe n'ezie. Ụmụ akwụkwọ nwere ike inyocha data ọha (ihu igwe, ahụike, egwuregwu, gburugburu ebe obibi) na Google Colab, akwụkwọ ndetu Python n'efu dị na browser; ọ chọrọ akaụntụ Google, ihe ọ na-enye n'efu enweghịkwa nkwa, ya mere chekwaa ọrụ mgbe niile. Buru ụzọ lelee iwu district gị maka akaụntụ Google ụmụ akwụkwọ.",
            "AI nwere ike ịbụ onye enyemaka koodu: ụmụ akwụkwọ na-akọwa ihe ha chọrọ (\"gụọ CSV a ma see eserese ahịrị nke okpomọkụ n'ọnwa ọ bụla\") AI na-atụ aro koodu. Ọtụtụ ụmụ akwụkwọ nwere ike ịgba koodu ha na-enwebeghị ike ide n'onwe ha, ma mụta ihe site na ya.",
            "Tinye nghọta n'ime ya: ụmụ akwụkwọ ga-ede nkọwa (comment) n'ahịrị ọ bụla na-akọwa ihe ọ na-eme, buru amụma eserese ahụ tupu ha agba koodu ahụ, ma jiri aka lelee otu nọmba n'ihe ọ mepụtara. Ọ bụrụ na ha enweghị ike ịkọwa koodu ahụ, ha amụtabeghị ya."
          ],
          steps: ["Họrọ data ọha na ajụjụ.", "Ụmụ akwụkwọ na-arịọ AI ka o nyere aka ide koodu maka otu nzọụkwụ.", "Ụmụ akwụkwọ na-ede nkọwa n'ahịrị ọ bụla n'okwu nke ha.", "Buru amụma nsonaazụ ya, wee gbaa koodu ahụ.", "Jiri aka lelee otu nọmba."],
          words: [["Data (dataset)", "nchịkọta data a haziri ahazi, nke na-abụkarị tebụl."], ["CSV", "ụdị faịlụ dị mfe maka tebụl, ebe a na-eji kọma kewaa ihe ndị dị n'ime ya."], ["Nkọwa koodu (code comment)", "ndetu n'ime koodu, nke na-amalitekarị na #, na-akọwa ihe koodu ahụ na-eme."]],
          slides: [
            { title: "Ezi data, ngwa n'efu", bullets: ["Data ọha: ihu igwe, ahụike, egwuregwu", "Google Colab: n'efu, na browser", "Lelee iwu district maka akaụntụ ụmụ akwụkwọ"] },
            { title: "AI dị ka onye enyemaka koodu", bullets: ["Kọwaa nzọụkwụ ahụ n'okwu", "AI na-atụ aro koodu", "Ụmụ akwụkwọ na-agba ihe ha na-enwebeghị ike ide"] },
            { title: "Wulite nghọta", bullets: ["Dee nkọwa n'ahịrị ọ bụla", "Buru amụma, wee gbaa ya", "Jiri aka lelee otu nọmba"] }
          ],
          sources: [{ name: "Google Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }],
          tryIt: "Chọta data ọha n'isiokwu ụmụ akwụkwọ gị nwere mmasị na ya. Jiri AI nyere aka ide koodu na Colab nke na-ese eserese otu ihe, dee nkọwa n'ahịrị ọ bụla, ma jiri aka lelee otu nọmba.",
          youCanNow: "ịhazi nyocha data ebe AI na-enyere aka na koodu, ụmụ akwụkwọ na-egosikwa nghọta.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ Google Colab?", options: ["Akwụkwọ ndetu Python n'efu na-arụ ọrụ na browser", "Ngwa mgbakọ ọnụ ọgụgụ a na-akwụ ụgwọ", "Ngwa na-eme naanị slaịdị", "Data nke ihe ndekọ ihu igwe"], answer: 0, why: "Colab na-ekwe ka ụmụ akwụkwọ gbaa Python na browser site n'akaụntụ Google." },
            { objective: "O2", q: "Nwa akwụkwọ gbara koodu AI dere, nweta eserese, mana o nweghị ike ikwu ihe koodu ahụ na-eme. Gịnị ka ị ga-eme?", options: ["Nabata eserese ahụ dị ka ihe gwụrụ", "Mee ka o dee nkọwa n'ahịrị ọ bụla n'okwu nke ya ma jiri aka lelee otu nọmba", "Rịọ AI ka o dee mmemme ka ogologo", "Nye ya akara dị ala ma gaa n'ihu"], answer: 1, why: "Ọ bụrụ na ụmụ akwụkwọ enweghị ike ịkọwa koodu ahụ, ha amụtabeghị ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ihe ngosi, eserese na nkọwa",
          minutes: 5,
          goal: "Jiri AI mee nkọwa na eserese, ma lelee ha maka echiche ezighi ezi.",
          text: [
            "AI nwere ike ịkọwa echiche STEM n'ọtụtụ ụzọ (ntụnyere, nzọụkwụ n'otu n'otu, akụkọ) ma tụọ aro eserese, ihe ngosi (simulation) ma ọ bụ ngosipụta. Ngwa ihe ngosi na eserese n'efu dị ka PhET simulations na Desmos na-ekwe ka ụmụ akwụkwọ nyochaa; AI nwere ike inyere gị aka ide ajụjụ nduzi.",
            "Kpachara anya maka echiche ezighi ezi. Ntụnyere AI nwere ike iduhie (dịka ọmụmaatụ, ịkọwa ọkụ eletrik na-asọ asọ site na mmiri na-asọ n'ụzọ na-agbaji n'ebe ụfọdụ), eserese AI mere nwekwara ike ịbụ ihe ezighi ezi na sayensị. Lelee nkọwa ọ bụla n'usoro ọmụmụ gị na isi iyi a tụkwasịrị obi.",
            "Ezigbo omume klas: nye ụmụ akwụkwọ nkọwa AI nwere mperi (nke i tinyere n'ebumnuche ma ọ bụ ezi mperi) ma rịọ ha ka ha chọta ma dozie ya. Ịchọta mperi n'ihe AI mepụtara bụ nka sayensị."
          ],
          steps: ["Rịọ AI maka nkọwa abụọ ma ọ bụ atọ nke otu echiche.", "Lelee nke ọ bụla n'usoro ọmụmụ gị na isi iyi a tụkwasịrị obi.", "Jiri AI dee ajụjụ nduzi maka ihe ngosi.", "Lelee eserese ka ị hụ na ha ziri ezi na sayensị.", "Mee ka ụmụ akwụkwọ chọta mperi na nkọwa AI."],
          words: [["Ihe ngosi (simulation)", "ụdị kọmputa na-ekwe ka ị nyochaa otu ihe si arụ ọrụ."], ["Ntụnyere (analogy)", "ịkọwa ihe site n'ịtụnyere ya na ihe ị maraworị."], ["Echiche ezighi ezi (misconception)", "echiche ezighi ezi a na-enwekarị banyere otu ihe si arụ ọrụ."]],
          slides: [
            { title: "Nkọwa na ihe ngosi", bullets: ["Ọtụtụ ụzọ isi kọwaa otu echiche", "Ajụjụ nduzi maka PhET ma ọ bụ Desmos"] },
            { title: "Kpachara anya maka echiche ezighi ezi", bullets: ["Ntụnyere nwere ike iduhie", "Eserese AI nwere ike ịbụ ihe ezighi ezi", "Lelee ya n'isi iyi a tụkwasịrị obi"] },
            { title: "Chọta mperi ahụ", bullets: ["Nye ụmụ akwụkwọ nkọwa AI nwere mperi", "Ha na-achọta ma dozie ya"] }
          ],
          tryIt: "Rịọ AI ka ọ kọwaa otu echiche STEM ị na-akụzi n'ụzọ abụọ dị iche. Chọta echiche ezighi ezi ọ bụla dị na nke ọ bụla, ma dee ọrụ \"chọta mperi\" maka ụmụ akwụkwọ.",
          youCanNow: "iji nkọwa na ihe ngosi AI ma na-ahụ echiche ezighi ezi dị n'ime ha.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ihe egwu dị na ntụnyere AI na sayensị?", options: ["Ọ na-adị ogologo mgbe niile", "A pụghị ibipụta ya", "Ọ nwere ike iduhie n'ebe ntụnyere ahụ na-agbaji", "Ọ na-arụ ọrụ naanị na mgbakọ"], answer: 2, why: "Ntụnyere dị ka mmiri maka ọkụ eletrik nwere ike ịgbaji ma mee ka e nwee echiche ezighi ezi." },
            { objective: "O3", q: "Eserese AI mere nke ị chọrọ igosi yiri ihe ezighi ezi n'otu ebe. Gịnị ka ị ga-eme?", options: ["Lelee ya n'usoro ọmụmụ gị ma ọ bụ isi iyi a tụkwasịrị obi ma dozie ya", "Gosi ya n'agbanyeghị n'ihi na AI mere ya", "Rịọ ụmụ akwụkwọ ka ha buru ya n'isi", "Hichapụ eserese AI niile i nwere"], answer: 0, why: "Eserese AI nwere ike ịbụ ihe ezighi ezi na sayensị, ya mere lelee ha tupu i jiri ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI dị ka ngwa STEM",
        questions: [
          { objective: "O1", q: "AI nyere azịza nwere nzọụkwụ maka ajụjụ nwere ọtụtụ nzọụkwụ. Ị kwesịrị:", options: ["Iji ya otu o si dị", "Ime ka ọ dị ogologo", "Ịlele ya tupu ụmụ akwụkwọ ahụ ya", "Ihichapụ nzọụkwụ ndị ahụ"], answer: 2, why: "AI na-emehie na ngụkọ na echiche." },
          { objective: "O1", q: "Ezigbo ụzọ isi lelee azịza AI bụ:", options: ["Ilele ya site n'ụzọ nke abụọ ma ọ bụ igwe mgbakọ", "Ịjụ otu ajụjụ ahụ ọzọ ma nabata otu azịza ahụ", "Ikwere ya ma ọ bụrụ na o ji n'aka", "Ịrịọ nwa akwụkwọ ka o chee echiche"], answer: 0, why: "Ụzọ nke abụọ na-ejide mperi." },
          { objective: "O2", q: "Ihe Google Colab na-enye n'efu:", options: ["Nwere nkwa ma enweghị oke", "Bụ naanị maka ego", "Bụ naanị maka ndị nkuzi", "Enweghị nkwa; chekwaa ọrụ mgbe niile"], answer: 3, why: "Colab kwuru na ihe ọ na-enye n'efu enweghị nkwa." },
          { objective: "O2", q: "Ụmụ akwụkwọ jiri AI dee koodu. Kedu otu ha ga-esi gosi nghọta?", options: ["Gbaa ya n'agụghị ya", "Dee nkọwa n'ahịrị ọ bụla n'okwu nke ha ma jiri aka lelee otu nsonaazụ", "Detuo ya n'akwụkwọ ndetu ọzọ", "Rịọ AI ka ọ kọwaara onye nkuzi ya"], answer: 1, why: "Ịkọwa na ilele na-ewulite nghọta." },
          { objective: "O3", q: "Gịnị mere ị ga-eji nye ụmụ akwụkwọ nkọwa AI nwere mperi?", options: ["Iji mee ka ha gbagwojuo anya", "Ọ bụ nnwale ọsọ", "Iji chekwaa oge", "Ịchọta mperi n'ihe AI mepụtara bụ nka sayensị"], answer: 3, why: "Ilele ihe e kwuru bụ ihe ndị ọkà mmụta sayensị na-eme." }
        ]
      }
    },
    {
      name: "Isi 2: AI dị ka isiokwu STEM",
      lessons: [
        {
          objectives: ["O4"],
          title: "Otu igwe si amụta ihe site na data",
          minutes: 6,
          goal: "Kụzie echiche bụ isi nke machine learning site n'ọmụmaatụ aka.",
          text: [
            "Machine learning (mmụta igwe) bụ isiokwu STEM ụmụ akwụkwọ nwere ike ịghọta. Echiche bụ isi: kama ide iwu, anyị na-egosi mmemme ọtụtụ ọmụmaatụ nwere akara (data ọzụzụ), ọ na-achọta usoro, wee buru amụma n'ọmụmaatụ ọhụrụ. Izi ezi ya dabere na data ahụ: ọmụmaatụ ole na ole, ma ọ bụ ọmụmaatụ na-adịghị iche iche, na-eduga n'amụma ezighi ezi.",
            "Omume aka: ngwa n'efu dị ka Teachable Machine nke Google na-ekwe ka ụmụ akwụkwọ zụọ classifier dị mfe maka foto ma ọ bụ ụda na browser; lelee usoro ya na nkwado district gị tupu ụmụ akwụkwọ jiri ya. Ụdị na-enweghị ngwaọrụ na-arụkwa ọrụ: ụmụ akwụkwọ na-ahazi kaadị anụmanụ site n'àgwà ha ma dee iwu, wee nwalee ha na kaadị ọhụrụ.",
            "Wee jụọ ajụjụ ndị dị mkpa: Gịnị na-eme ma ọ bụrụ na data ọzụzụ na-egosi naanị otu ụdị ọmụmaatụ? Kedu otu anyị ga-esi tụọ izi ezi? Nke a na-ejikọta machine learning na mgbakọ ọnụ ọgụgụ (statistics), ịdị mma data na ikpe ziri ezi."
          ],
          steps: ["Kọwaa: ọmụmaatụ nwere akara na-abanye, a na-achọta usoro, amụma na-apụta.", "Zụọ classifier dị mfe, ma ọ bụ mee omume ịhazi kaadị na-enweghị ngwaọrụ.", "Nwalee ya n'ọmụmaatụ ọhụrụ.", "Gbanwee data ọzụzụ ma hụ ihe na-eme.", "Kparịta izi ezi, ịdị mma data na ikpe ziri ezi."],
          words: [["Machine learning", "mmemme na-amụta usoro site n'ọmụmaatụ kama ịgbaso iwu mmadụ jiri aka dee."], ["Data ọzụzụ (training data)", "ọmụmaatụ nwere akara mmemme na-amụta ihe site na ha."], ["Classifier", "mmemme na-ekewa ihe n'ụdị dị iche iche."]],
          slides: [
            { title: "Machine learning n'otu ahịrị", bullets: ["Ọmụmaatụ nwere akara na-abanye", "A na-achọta usoro", "Amụma n'ọmụmaatụ ọhụrụ"] },
            { title: "Omume aka", bullets: ["Zụọ classifier dị mfe na browser", "Ma ọ bụ ịhazi kaadị na-enweghị ngwaọrụ", "Buru ụzọ lelee usoro na nkwado"] },
            { title: "Ajụjụ ndị dị mkpa", bullets: ["Ọ bụrụ na data na-egosi naanị otu akụkụ?", "Kedu otu anyị ga-esi tụọ izi ezi?", "Njikọ na statistics na ikpe ziri ezi"] }
          ],
          tryIt: "Hazie omume nkeji 20 ebe ụmụ akwụkwọ na-azụ (ma ọ bụ na-eme ya na-enweghị ngwaọrụ) classifier dị mfe, wee gbanwee data ọzụzụ ma kọwaa ihe mere amụma ya.",
          youCanNow: "ịkụzi echiche bụ isi nke machine learning site n'omume aka.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ echiche bụ isi nke machine learning?", options: ["Mmadụ na-eji aka dee iwu ọ bụla", "Mmemme ahụ na-ebu otu azịza n'isi", "Kọmputa na-eche echiche n'enweghị usoro", "Mmemme na-achọta usoro n'ọtụtụ ọmụmaatụ nwere akara"], answer: 3, why: "Machine learning na-amụta site na data ọzụzụ kama iwu mmadụ jiri aka dee." },
            { objective: "O4", q: "Klas gị enweghị ngwaọrụ maka Teachable Machine. Gịnị ka ị ga-eme?", options: ["Hapụ isiokwu ahụ", "Mee ụdị na-enweghị ngwaọrụ: hazie kaadị anụmanụ site n'àgwà, dee iwu, nwalee na kaadị ọhụrụ", "Gosi naanị vidiyo", "Chere ruo afọ ọzọ"], answer: 1, why: "Omume kaadị na-enweghị ngwaọrụ na-akụzi otu echiche ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele ihe AI kwuru dị ka ọkà mmụta sayensị",
          minutes: 5,
          goal: "Kụziere ụmụ akwụkwọ usoro iji nwalee ihe AI kwuru site n'ihe akaebe.",
          text: [
            "Echiche sayensị bụ ihe nchebe kacha mma megide mperi AI. Kụzie usoro nzọụkwụ anọ: Nkwupụta: gịnị kpọmkwem ka AI kwuru? Ihe akaebe: kedu data ma ọ bụ isi iyi ga-egosi na ọ bụ eziokwu? Nlele: lelee nkwupụta ahụ site na data, ngụkọ, nnwale sayensị ma ọ bụ isi iyi a tụkwasịrị obi. Mkpebi: nabata, jụ ma ọ bụ \"ihe akaebe ezughị\".",
            "Mee omume site na nkwupụta STEM AI nwere ike imehie: ntụgharị nha, ọnụ ọgụgụ, nkwupụta ihe kpatara na ihe si na ya pụta, usoro kemịkal, ma ọ bụ ntụaka (citation) nke nwere ike ọ gaghị adị. Ụmụ akwụkwọ na-amụta na a ga-achọta ma lelee isi iyi AI, ọ bụghị ikwere ha.",
            "Usoro a na-arụ ọrụ n'ọmụmụ ihe niile ma na-ewulite omume ị chọrọ ruo ndụ: ihe AI mepụtara bụ echiche (hypothesis) a ga-anwale, ọ bụghị azịza a ga-edetuo."
          ],
          steps: ["Nkwupụta: kwuo kpọmkwem ihe AI kwuru.", "Ihe akaebe: gịnị ga-egosi na ọ bụ eziokwu?", "Nlele: data, ngụkọ, nnwale sayensị ma ọ bụ isi iyi a tụkwasịrị obi.", "Mkpebi: nabata, jụ ma ọ bụ ihe akaebe ezughị."],
          words: [["Nkwupụta (claim)", "okwu na-ekwu na ihe bụ eziokwu."], ["Echiche a ga-anwale (hypothesis)", "echiche a pụrụ ịnwale."], ["Ntụaka (citation)", "ihe na-egosi isi iyi ozi."]],
          slides: [
            { title: "Usoro nzọụkwụ anọ", bullets: ["Nkwupụta", "Ihe akaebe", "Nlele", "Mkpebi"] },
            { title: "Nkwupụta maka omume", bullets: ["Ntụgharị nha na ọnụ ọgụgụ", "Ihe kpatara na ihe si na ya pụta", "Ntụaka nke nwere ike ọ gaghị adị"] },
            { title: "Omume ndụ", bullets: ["Ihe AI mepụtara bụ echiche a ga-anwale", "Nwalee ya, edetula ya"] }
          ],
          tryIt: "Chịkọta nkwupụta STEM atọ site na ngwa AI n'isiokwu ị na-akụzi. Gafee nke ọ bụla n'usoro nzọụkwụ anọ ahụ ma dee nke kwụsiri ike.",
          youCanNow: "ịkụziere ụmụ akwụkwọ ịnwale ihe AI kwuru dị ka ndị ọkà mmụta sayensị.",
          quickCheck: [
            { objective: "O5", q: "N'usoro nlele, gịnị na-esochi \"Nkwupụta\" ozugbo?", options: ["Mkpebi", "Nlele", "Ihe akaebe", "Mbipụta"], answer: 2, why: "Usoro ahụ bụ Nkwupụta, Ihe akaebe, Nlele, Mkpebi." },
            { objective: "O5", q: "AI nyere ụmụ akwụkwọ ọnụ ọgụgụ nwere ntụaka. Gịnị ka ha kwesịrị ime?", options: ["Detuo ntụaka ahụ n'akụkọ ha", "Jụọ AI ma ntụaka ahụ ọ bụ eziokwu", "Leghara ọnụ ọgụgụ ahụ anya", "Chọta isi iyi ahụ ma lelee na ọ dị ma kwuo ihe ahụ"], answer: 3, why: "A ga-achọta ma lelee isi iyi AI, ọ bụghị ikwere ha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nhazi injinịa na ọrụ na-egosi echiche",
          minutes: 6,
          goal: "Jiri AI n'usoro nhazi injinịa ma hazie ọrụ ebe echiche na-apụta ìhè.",
          text: [
            "N'usoro nhazi injinịa (ịkọwa nsogbu, ịchepụta echiche, ịhazi atụmatụ, iwu, ịnwale, ime ka ọ ka mma), AI na-aba uru karịsịa n'oge ịchepụta echiche na ime ka ọ ka mma: ịchepụta ọtụtụ echiche nhazi, ịtụ aro nnwale, ma ọ bụ ịkọwa ihe mere prototype ji daa. Ụmụ akwụkwọ ka na-ahọrọ, na-ewu, na-anwale ma na-akọwa ihe kpatara ya.",
            "N'ihi na AI nwere ike ịza ọtụtụ ajụjụ akwụkwọ ọgụgụ, hazie ọrụ ebe echiche na-apụta ìhè: rịọ ụmụ akwụkwọ ka ha kọwaa ihe mere otu ụzọ ji arụ ọrụ, tụnyere ụzọ abụọ, chọta mperi, buru amụma tupu ha agbakọọ, ma ọ bụ tinye echiche ahụ na data ma ọ bụ nhazi nke ha. Nkọwa ọnụ na akwụkwọ ndetu lab na-egosi echiche.",
            "Dee ọkwa iji AI n'ọrụ ọ bụla ka ụmụ akwụkwọ mara mgbe AI bụ ngwa na mgbe a ga-egosi nka ahụ naanị ha, ma kọwaa ihe kpatara ya."
          ],
          steps: ["Jiri AI maka ịchepụta echiche na ime ka ọ ka mma na nhazi.", "Ụmụ akwụkwọ na-ahọrọ, na-ewu, na-anwale ma na-akọwa ihe kpatara ya.", "Hazie ọrụ: kọwaa, tụnyere, chọta mperi, buru amụma, tinye n'ọrụ.", "Jiri nkọwa ọnụ na akwụkwọ ndetu lab.", "Dee ọkwa iji AI maka ọrụ ọ bụla."],
          words: [["Usoro nhazi injinịa", "okirikiri ịkọwa nsogbu, ịhazi, iwu, ịnwale na ime ka ọ ka mma."], ["Prototype", "ụdị mbụ e wuru iji nwalee echiche."], ["Akwụkwọ ndetu lab", "ndekọ ihe nwa akwụkwọ mere, hụrụ ma kpebie."]],
          slides: [
            { title: "AI na nhazi injinịa", bullets: ["Chepụta ọtụtụ echiche", "Tụọ aro nnwale; kọwaa ihe mere o ji daa", "Ụmụ akwụkwọ na-ahọrọ, na-ewu, na-anwale, na-akọwa"] },
            { title: "Mee ka echiche pụta ìhè", bullets: ["Kọwaa ihe mere, tụnyere ụzọ", "Chọta mperi, buru ụzọ buru amụma", "Tinye ya na data ma ọ bụ nhazi nke ha"] },
            { title: "Dee ọkwa iji AI", bullets: ["Mgbe AI bụ ngwa", "Mgbe a ga-egosi nka ahụ naanị ha"] }
          ],
          tryIt: "Ọrụ ikpeazụ: hazie nkuzi STEM gị ebe ụmụ akwụkwọ na-eji ngwa AI e kwadoro na nyocha ma ọ bụ ihe ịma aka nhazi, ya na nzọụkwụ nlele, ọrụ echiche n'okwu nke ha, na ọkwa iji AI. Kụzie ya ma ọ bụrụ na ị nwere ike, ma dee ihe ụmụ akwụkwọ chọtara mgbe ha lelere AI.",
          youCanNow: "iduzi mmụta STEM ebe ụmụ akwụkwọ na-eji AI dị ka ngwa, na-elele ya nke ọma ma na-eme ka echiche nke ha pụta ìhè.",
          quickCheck: [
            { objective: "O6", q: "N'oge ndị ole n'usoro nhazi injinịa ka AI kacha aba uru?", options: ["Ịchepụta echiche na ime ka ọ ka mma", "Naanị iwu na ịnwale", "Naanị ịkọwa nsogbu", "Ọ dịghị nke ọ bụla"], answer: 0, why: "AI na-enyere aka ịchepụta echiche na ịkọwa ihe mere ihe ji daa; ụmụ akwụkwọ ka na-ahọrọ, na-ewu, na-anwale ma na-akọwa." },
            { objective: "O6", q: "AI nwere ike ịza ajụjụ omume dị n'akwụkwọ ọgụgụ gị. Gịnị ka ị ga-agbanwe ka echiche pụta ìhè?", options: ["Nye ọtụtụ ajụjụ ndị ahụ ọzọ", "Machibido igwe mgbakọ", "Rịọ ụmụ akwụkwọ ka ha buru ụzọ buru amụma ma kọwaa ihe mere ụzọ ahụ ji arụ ọrụ", "Nye azịza tupu oge eruo"], answer: 2, why: "Ibu amụma, ịkọwa na ịtụnyere ụzọ na-egosi echiche AI na-enweghị ike iche n'ọnọdụ ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: AI dị ka isiokwu STEM",
        questions: [
          { objective: "O4", q: "Na machine learning, data ọzụzụ bụ:", options: ["Akara ikpeazụ", "Koodu mmemme ahụ", "Ọmụmaatụ nwere akara mmemme na-amụta ihe site na ha", "Okwuntughe"], answer: 2, why: "A na-amụta usoro site n'ọmụmaatụ." },
          { objective: "O4", q: "Classifier a zụrụ naanị site na foto otu ụdị nkịta ga-eme eleghị anya:", options: ["Amụma ezighi ezi n'ọmụmaatụ dị iche iche", "Mata anụmanụ niile nke ọma", "Jụ ịrụ ọrụ", "Dị ngwa karịa"], answer: 0, why: "Data na-egosi naanị otu akụkụ na-eduga n'amụma na-adịghị mma." },
          { objective: "O5", q: "Gịnị bụ nzọụkwụ nke 3 n'usoro nlele?", options: ["Nkwupụta", "Nlele", "Ihe akaebe", "Mkpebi"], answer: 1, why: "Lelee nkwupụta ahụ site na data ma ọ bụ isi iyi a tụkwasịrị obi." },
          { objective: "O5", q: "AI nyere ntụaka maka ọnụ ọgụgụ. Ụmụ akwụkwọ kwesịrị:", options: ["Ịchọta isi iyi ahụ ma lelee na ọ dị ma kwuo ihe ahụ", "Idetuo ya", "Ileghara ya anya", "Ịkpọ AI aha kama"], answer: 0, why: "Ntụaka AI nwere ike ọ gaghị adị." },
          { objective: "O6", q: "Kedu ọrụ kacha eme ka echiche ụmụ akwụkwọ pụta ìhè?", options: ["Ịza ajụjụ 20 dị n'akwụkwọ ọgụgụ n'ụlọ", "Ikiri naanị vidiyo", "Idetuo akwụkwọ azịza", "Ibu amụma tupu ịgbakọ ma kọwaa ihe mere ụzọ ahụ ji arụ ọrụ"], answer: 3, why: "Amụma na nkọwa na-egosi echiche." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI na Agụmakwụkwọ STEM",
    questions: [
      { objective: "O1", q: "STEM pụtara:", options: ["Ụmụ akwụkwọ, ndị nkuzi, ndị ndezi, ndị njikwa", "Sayensị, teknụzụ, injinịa na mgbakọ na mwepụ", "Ịmụ, ịnwale, inyocha, iburu n'isi", "Software, ngwa, email, mgbasa ozi"], answer: 1, why: "Ngalaba anọ ahụ." },
      { objective: "O1", q: "AI na-emehie karịsịa na:", options: ["Ndepụta agba", "Ozi ekele", "Ajụjụ mgbakọ nwere ọtụtụ nzọụkwụ", "Isụpe okwu a na-ahụkarị"], answer: 2, why: "Echiche nwere ọtụtụ nzọụkwụ na-ebute mperi." },
      { objective: "O1", q: "Desmos bara uru maka:", options: ["Email", "Ịtụ akara edemede", "Ise eserese na ilele mgbakọ", "Ndekọ ọbịbịa"], answer: 2, why: "Ngwa eserese na-eji anya elele azịza." },
      { objective: "O1", q: "Ịrịọ AI maka mperi a na-emekarị n'ajụjụ na-enye gị:", options: ["Ajụjụ mkparịta ụka gbasara echiche ezighi ezi", "Azịza ikpeazụ", "Akara", "Ụzọ mkpirisi"], answer: 0, why: "Mperi na-eme ka mkparịta ụka dị mma." },
      { objective: "O2", q: "Google Colab bụ:", options: ["App vidiyo", "Laptọọpụ a na-akwụ ụgwọ", "Ngwa ịtụ akara", "Akwụkwọ ndetu Python n'efu na browser"], answer: 3, why: "Ọ na-agba Python n'ịntanetị." },
      { objective: "O2", q: "Faịlụ CSV bụ:", options: ["Foto", "Faịlụ tebụl dị mfe nwere ihe ndị e ji kọma kewaa", "Vidiyo", "Faịlụ okwuntughe"], answer: 1, why: "A na-ejikarị ya maka data." },
      { objective: "O2", q: "Nkọwa koodu (comment) na-akọwa:", options: ["Ọ dịghị ihe", "Ihu igwe", "Akara nwa akwụkwọ", "Ihe otu ahịrị koodu na-eme"], answer: 3, why: "Nkọwa na-egosi nghọta." },
      { objective: "O2", q: "Ibu amụma eserese tupu ịgba koodu na-enyere ụmụ akwụkwọ aka:", options: ["Ịgba koodu ngwa ngwa", "Ịhapụ mmụta", "Iche echiche banyere ihe koodu ahụ kwesịrị ime", "Izere mperi n'onwe ya"], answer: 2, why: "Amụma na-ewulite echiche." },
      { objective: "O3", q: "Ntụnyere AI na sayensị nwere ike:", options: ["Iduhie ma ọ bụrụ na ha agbajie", "Ọ dịghị mgbe ha ga-ezighi ezi", "Inọchi nnwale sayensị", "Igosi na nkwupụta bụ eziokwu"], answer: 0, why: "Lelee ntụnyere maka echiche ezighi ezi." },
      { objective: "O3", q: "Ihe ngosi (simulation) na-ekwe ka ụmụ akwụkwọ:", options: ["Zere iche echiche", "Nyochaa otu ihe si arụ ọrụ site n'ụdị", "Tụọrọ onwe ha akara", "Hapụ nkuzi ahụ"], answer: 1, why: "Ụdị na-akwado nyocha." },
      { objective: "O4", q: "Machine learning na-achọta:", options: ["Usoro n'ọmụmaatụ nwere akara", "Naanị iwu e ji aka dee", "Okwuntughe", "Faịlụ furu efu"], answer: 0, why: "Ọ na-amụta site na data." },
      { objective: "O4", q: "Ọ bụrụ na data ọzụzụ adịghị iche iche, amụma:", options: ["Na-akwụsị kpamkpam", "Na-ezi ezi mgbe niile", "Na-adị ngwa karịa", "Nwere ike ọ gaghị ezi ezi maka ọmụmaatụ ọhụrụ"], answer: 3, why: "Ịdị mma data na-ekpebi izi ezi." },
      { objective: "O4", q: "Tupu ụmụ akwụkwọ jiri ngwa dị ka Teachable Machine, lelee:", options: ["Agba ya", "Usoro ya na nkwado district gị", "Ka a ma ama ọ dị", "Ọ dịghị ihe"], answer: 1, why: "Iji ya na ụmụ akwụkwọ chọrọ nkwado na nlele afọ ndụ." },
      { objective: "O4", q: "Omume machine learning na-enweghị ngwaọrụ na-eji:", options: ["Naanị ekwentị", "Naanị laptọọpụ", "Kaadị na iwu, na-enweghị ngwaọrụ", "Robot"], answer: 2, why: "A pụrụ ịkụzi echiche n'enweghị ngwaọrụ." },
      { objective: "O5", q: "N'usoro nlele, \"mkpebi\" nwere ike ịbụ:", options: ["Jụ mgbe niile", "Nabata mgbe niile", "Nabata, jụ ma ọ bụ ihe akaebe ezughị", "Hapụ ya"], answer: 2, why: "Ihe akaebe na-ekpebi." },
      { objective: "O5", q: "A ga-ewere ihe AI mepụtara dị ka:", options: ["Echiche a ga-anwale", "Azịza ikpeazụ", "Iwu", "Akara"], answer: 0, why: "Nwalee tupu i kwere." },
      { objective: "O6", q: "Na nhazi injinịa, AI kacha aba uru maka:", options: ["Ịtụ akara nhazi", "Iwuru ụmụ akwụkwọ prototype", "Ịnwale ihe ndị a na-emetụ aka n'onwe ya", "Ịchepụta echiche na ime ka ọ ka mma"], answer: 3, why: "Ụmụ akwụkwọ ka na-ewu, na-anwale ma na-akọwa." },
      { objective: "O6", q: "Prototype bụ:", options: ["Ngwaahịa ikpeazụ", "Ụdị mbụ iji nwalee echiche", "Akara ule", "Ikike software"], answer: 1, why: "A na-anwale prototype ma mee ka ọ ka mma." },
      { objective: "O6", q: "Akwụkwọ ndetu lab na-egosi:", options: ["Ndekọ ọbịbịa", "Naanị azịza ikpeazụ", "Atụmatụ onye nkuzi", "Ihe nwa akwụkwọ mere, hụrụ ma kpebie"], answer: 3, why: "Ọ na-eme ka echiche pụta ìhè." },
      { objective: "O6", q: "A ga-ede n'ọrụ STEM ọ bụla:", options: ["Okwuntughe", "Ọnụahịa", "Ọkwa iji AI", "Ọ dịghị ihe"], answer: 2, why: "Ụmụ akwụkwọ kwesịrị ịmara mgbe e kwere ka ha jiri AI." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      4,
      7,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "AI dị ka ngwa na nyocha",
        objective: "O2",
        notYet: "AI na-emere ụmụ akwụkwọ nyocha ahụ, ma ọ bụ e kwadoghị ngwa ahụ.",
        meets: "Ụmụ akwụkwọ na-eji ngwa AI e kwadoro maka otu akụkụ doro anya, dị ka ide koodu ma ọ bụ ịchepụta echiche nhazi.",
        exceeds: "Ụmụ akwụkwọ na-eburukwa amụma ihe ihe AI mepụtara kwesịrị igosi tupu ha agba ya."
      },
      {
        name: "Nzọụkwụ nlele",
        objective: "O5",
        notYet: "Ọ dịghị nzọụkwụ ebe ụmụ akwụkwọ na-elele ihe AI mepụtara.",
        meets: "Ụmụ akwụkwọ na-elele koodu, nọmba ma ọ bụ ihe AI kwuru site na data, ngụkọ ma ọ bụ nnwale.",
        exceeds: "Ụmụ akwụkwọ na-ede mkpebi: nabata, jụ ma ọ bụ ihe akaebe ezughị, ya na ihe kpatara ya."
      },
      {
        name: "Echiche n'okwu nke ha",
        objective: "O6",
        notYet: "Ụmụ akwụkwọ na-enyefe naanị azịza ma ọ bụ eserese.",
        meets: "Ọrụ ebe ụmụ akwụkwọ na-akọwa echiche ha n'okwu nke ha.",
        exceeds: "Ụmụ akwụkwọ na-atụnyerekwa ụzọ abụọ ma ọ bụ chọta mperi."
      },
      {
        name: "Ọkwa iji AI",
        objective: "O6",
        notYet: "E nyeghị ọkwa iji AI.",
        meets: "E dere ọkwa iji AI n'ọrụ ahụ.",
        exceeds: "Atụmatụ ahụ na-akọwara ụmụ akwụkwọ ihe mere ọkwa ahụ ji dabara ọrụ ahụ."
      },
      {
        name: "Onye nkuzi lelere ihe nkuzi",
        objective: "O1",
        notYet: "E leleghị ajụjụ, koodu ma ọ bụ nkọwa AI mere.",
        meets: "E lelere azịza na nkọwa ọ bụla AI mere tupu klas.",
        exceeds: "Atụmatụ ahụ na-akpọ aha ụzọ e ji lelee, dị ka igwe mgbakọ, Desmos ma ọ bụ isi iyi a tụkwasịrị obi."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị nkuzi mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nkuzi kụziri nkuzi STEM nwere nzọụkwụ nlele AI n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ụmụ akwụkwọ nwere ike ịkpọ aha mperi AI ha chọtara na otu ha si lelee ya",
      "Ndị nkuzi weere ihe ọmụmụ Koach Learn ọzọ gbasara AI maka ndị nkuzi"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ngwa enyemaka AI district gị kwere",
      "Ngwa n'efu dị ka Desmos, PhET simulations, Google Colab ma ọ bụ Teachable Machine, ebe district gị kwadoro ha",
      "Otu nkuzi STEM ma ọ bụ ihe ịma aka nhazi ị ga-akụzi n'oge na-adịghị anya",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ya dị ka nnọkọ ngalaba: meenụ ule mbido ọnụ, wee mee ka onye nkuzi ọ bụla hazie otu nkuzi maka klas nke ya.",
      "Lelee nkwado district na iwu akaụntụ ụmụ akwụkwọ tupu onye ọ bụla anwale Colab ma ọ bụ Teachable Machine na ụmụ akwụkwọ.",
      "Mee ka ndị nkuzi abụọ abụọ gbanwere otu ajụjụ omume AI mere ma lelee azịza ibe ha site n'ụzọ nke abụọ.",
      "Jiri omume kaadị na-enweghị ngwaọrụ mgbe ngwaọrụ ma ọ bụ nkwado adịbeghị njikere.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
