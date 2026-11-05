"use strict";

// Koach Learn course (Igbo translation of shared/data-science-beginners.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const COLAB = { name: "Google Colab: Ajụjụ a na-ajụkarị", url: "https://research.google.com/colaboratory/faq.html" };
const PANDAS = { name: "pandas: 10 minutes to pandas", url: "https://pandas.pydata.org/docs/user_guide/10min.html" };
const SEABORN = { name: "seaborn: load_dataset", url: "https://seaborn.pydata.org/generated/seaborn.load_dataset.html" };

module.exports = {
  id: "data-science-beginners-ig",
  lang: "ig",
  translationOf: "data-science-beginners",
  category: "Youth",
  name: "Mmalite Sayensị Data na Nyocha Data",
  skills: "Ịjụ ajụjụ data nwere ike ịza, Ịgbakọ nkezi na ịhụ outlier, Ibubata data na pandas, Ihicha na ịkpakọta data, Ime chaatị na ikesa ihe ị chọpụtara",
  outcome: "iwere ezi data na Google Colab, bubata ya na pandas, hichaa ya, zaa ajụjụ doro anya site na nkezi na otu, mee chaatị, ma dee ihe atọ ị chọpụtara n'eziokwu.",
  about: [
    "Ndị nyocha data na-agbanwe ahịrị nọmba ka ha bụrụ azịza ndị mmadụ nwere ike iji mee ihe: ụbọchị ụlọ ahịa na-enwe ndị ahịa kacha, omume egwuregwu na-enyere otu aka kacha, ebe ego mmemme na-aga. Ọ bụ otu n'ime nka ọrụ kacha baa uru taa, ị nwekwara ike ịmalite n'efu.",
    "Isi 1 na-akụzi otu esi eche echiche n'enweghị koodu: ịjụ ezigbo ajụjụ, ịmata data gị, na iji nkezi n'ekweghị ka a ghọgbuo gị. Isi 2 na-aga na Google Colab, weebụsaịtị n'efu na-agba Python, ebe ị ga-eji pandas, ngwa data kacha ewu ewu na Python, na ezi data nke ụlọ nri.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Na Google Colab, bubata data tips nke ụlọ nri site na pandas, lelee ma ọ nwere ihe efu (missing values), tinye kọlụm maka tip dị ka pasent nke ụgwọ nri, chọta nkezi pasent tip maka ụbọchị ọ bụla na maka nri ehihie na nri abalị, mee bar chart nke otu n'ime ha, ma dee ihe atọ ị chọpụtara n'ahịrịokwu dị mfe, gụnyere otu ihe data ahụ na-enweghị ike ịgwa gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye na-amalite iji data: ụmụ akwụkwọ sekọndrị na mahadum, ndị otu mmemme ntorobịa, ndị nkuzi egwuregwu (coach), ndị ọrụ obere azụmahịa na otu na-adịghị achọ uru, na ndị na-agbanwe ọrụ na-ele ọrụ nyocha data anya.",
    startingPoint: "Ha nwere ike iji kọmputa na web browser, ha edekwala ntakịrị Python. Ọtụtụ na-eji spreadsheet mana ha ebubateghị data na pandas mgbe ọ bụla, leleghị ihe efu, tụnyereghị otu dị iche iche, ma ọ bụ dee ihe ha chọpụtara nke na-ekwu oke ya.",
    gap: "Otu egwuregwu, ụlọ akwụkwọ, azụmahịa na otu na-adịghị achọ uru na-eme mkpebi site na data, nyocha data bụkwa ụzọ a na-ejikarị abanye n'ọrụ teknụzụ. Ọ bụrụ na ha amaghị nzọụkwụ ndị bụ isi, ndị mmadụ na-aza ajụjụ ezighi ezi, outlier ma ọ bụ correlation na-aghọgbu ha, ma ọ bụ ha na-ekesa chaatị na okwu data ahụ na-apụghị ịkwado.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka DataFrame, median, outlier na correlation",
      "Ngwaọrụ: kọmputa ma ọ bụ laptọọpụ nwere web browser",
      "Akaụntụ na ego: akaụntụ Google n'efu maka Google Colab; pandas na seaborn adịlarị n'ime ya",
      "Oge: ihe dị ka nkeji 5 ruo 6 maka nkuzi ọ bụla gbakwunyere omume, ihe dị ka nkeji 60 ruo 75 n'ozuzu",
      "Mgbakọ na mwepụ: naanị nkezi na pasent"
    ],
    prerequisites: "Mmalite Mmemme Kọmputa na Python."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ezi ajụjụ, dị ka nke onye nkuzi egwuregwu ma ọ bụ nke ụlọ ahịa", action: "idepụta nzọụkwụ ise nke ọrụ data n'usoro ma jikọọ nke ọ bụla na ọmụmaatụ ahụ", standard: "na nzọụkwụ ise niile (Ask, Get, Clean, Explore, Share) n'usoro ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị tebụl data na ajụjụ", action: "ịkọwa ihe kọlụm ọ bụla nwere na ụdị ya ma lelee ma data ahụ nwere ike ịza ajụjụ ahụ", standard: "na-akpọ kọlụm nọmba (numeric) na kọlụm otu (categorical) aha n'ụzọ ziri ezi ma na-ekwu ya mgbe a na-apụghị ịza ajụjụ" },
    { id: "O3", condition: "Mgbe e nyere gị obere ndepụta nọmba ma ọ bụ okwu banyere ihe abụọ", action: "ịgbakọ mean na median, ịhụ outlier ọ bụla ma lelee ma okwu ahụ na-agwakọta correlation na ihe kpatara (cause)", standard: "na mean na median ziri ezi, na-akpọkwa aha ngwakọta correlation na cause ọ bụla" },
    { id: "O4", condition: "Na Google Colab nwere pandas", action: "ibubata data n'ime DataFrame ma kọwaa ahịrị ya, kọlụm ya na ụdị ya", standard: "site n'iji head(), shape, info() na describe() ma kọọ azịza ha n'ụzọ ziri ezi" },
    { id: "O5", condition: "Mgbe e nyere gị DataFrame e bubatara", action: "ilele ihe efu, ịgbakwunye kọlụm e gbakọrọ agbakọ, ịhọpụta ahịrị ma tụnyere otu dị iche iche", standard: "na koodu nzọụkwụ ọ bụla na-agba ọsọ, na-edekwa nhicha ọ bụla e mere" },
    { id: "O6", condition: "Mgbe e nyere gị azịza otu gị", action: "ime bar chart nwere aha ma dee ihe ị chọpụtara nke na-ekwu oke ya", standard: "na nọmba site n'azịza nke gị na opekata mpe otu oke e kwuru n'eziokwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Iche echiche dị ka onye nyocha data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe sayensị data bụ, na nzọụkwụ ise ahụ",
          minutes: 4,
          goal: "Kpọọ aha nzọụkwụ ise nke ọrụ data ma jikọọ ha na ezi ọmụmaatụ.",
          text: [
            "Sayensị data pụtara iji data aza ajụjụ ma mee mkpebi ka mma. Nyocha data bụ akụkụ e ji aka eme: ihicha, ịgụ ọnụ, ịtụnyere na ime chaatị.",
            "Ihe fọrọ nke nta ka ọ bụrụ ọrụ ọ bụla na-agbaso nzọụkwụ ise. Ask (Jụọ): gịnị ka ị chọrọ ịmata? Get (Nweta): chọta data. Clean (Hichaa): dozie mperi na oghere. Explore (Nyochaa): gụọ ọnụ, gbakọọ nkezi, tụnyere ma mee chaatị. Share (Kesaa): gwa ndị mmadụ ihe ị chọpụtara n'okwu dị mfe.",
            "Ọmụmaatụ: onye nkuzi bọọlụ ụmụaka jụrụ \"Ànyị na-etinye goolu karịa na ọkara nke abụọ?\" Ọ na-enweta akara egwuregwu ọ bụla, wepụ otu egwuregwu e kagburu, gbakọọ goolu ọkara mbụ na ọkara nke abụọ, ma kesaa obere chaatị nye otu ya."
          ],
          steps: ["Jụọ ajụjụ doro anya.", "Nweta data.", "Hichaa ya.", "Nyochaa ya site n'ịgụ ọnụ, nkezi na chaatị.", "Kesaa ihe ị chọpụtara."],
          words: [["Data", "eziokwu na nọmba e chịkọtara banyere ihe."], ["Sayensị data (data science)", "iji data aza ajụjụ ma duzie mkpebi."], ["Nyocha data (data analysis)", "ihicha, ịchịkọta na ime chaatị nke data iji chọta azịza."], ["Dataset", "ngwakọta data, na-abụkarị tebụl."]],
          slides: [
            { title: "Sayensị data bụ", bullets: ["Iji data aza ajụjụ", "Na ime mkpebi ka mma"] },
            { title: "Nzọụkwụ ise ahụ", bullets: ["Ask, Get, Clean", "Explore, Share"] },
            { title: "Ọmụmaatụ: onye nkuzi bọọlụ", bullets: ["Ask: goolu karịa na ọkara nke abụọ?", "Get na Clean: akara egwuregwu", "Explore na Share: obere chaatị"] }
          ],
          tryIt: "Chee otu ajụjụ site na ndụ gị, ọrụ gị ma ọ bụ obodo gị nke data nwere ike ịza (dịka ọmụmaatụ \"Ụbọchị ole ka m na-emefu ego kacha?\"). Dee ihe ị ga-eme na nzọụkwụ ọ bụla n'ime ise ahụ.",
          youCanNow: "ịkọwa nzọụkwụ ise nke ọrụ data ma hazie otu.",
          quickCheck: [
            { objective: "O1", q: "Gịnị na-eme na nzọụkwụ Clean nke ọrụ data?", options: ["Ị na-ajụ ajụjụ ahụ", "Ị na-edozi mperi na oghere dị na data", "Ị na-ekesa chaatị", "Ị na-anakọta data ọzọ"], answer: 1, why: "Clean pụtara idozi mperi na oghere tupu ị nyochaa." },
            { objective: "O1", q: "Onye nwe ụlọ ahịa jụrụ, \"Ụbọchị ole ka anyị na-ere ahịa kacha?\" Gịnị ka ị ga-eme ozugbo mgbe nzọụkwụ Ask a gasịrị?", options: ["Mee chaatị", "Dee ihe ị chọpụtara", "Gbakọọ nkezi ụbọchị izu", "Nweta data ahịa nwere ụbọchị"], answer: 3, why: "Mgbe Ask gasịrị, Get na-abịa: chọta data nwere ike ịza ajụjụ ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịmata data gị: ahịrị, kọlụm na ụdị",
          minutes: 5,
          goal: "Gụọ tebụl data ma kwuo ihe kọlụm ọ bụla nwere na ụdị ya.",
          text: [
            "Ọtụtụ data na-abịa dị ka tebụl. Tidy data pụtara na ahịrị ọ bụla bụ otu ihe ị tụrụ (otu egwuregwu, otu ahịa, otu mmadụ) na kọlụm ọ bụla bụ otu eziokwu banyere ya (ụbọchị, ego, otu).",
            "Kọlụm nwere ụdị. Nọmba ị nwere ike iji gbakọọ ihe, dị ka ọnụahịa ma ọ bụ nkeji. Otu (categories) bụ ìgwè, dị ka ụbọchị izu ma ọ bụ aha otu: ị na-agụ ha ọnụ, mana ị naghị agbakọ nkezi ha. Ụbọchị (dates) bụ ụdị nke ha.",
            "Ezigbo ajụjụ na-adaba na data i nwere. \"Gịnị bụ nkezi ahịa na Satọdee?\" chọrọ kọlụm ego ahịa na kọlụm ụbọchị. Ọ bụrụ na data enweghị ya, ị pụghị ịza ya, ikwu nke ahụ bụkwa akụkụ nke ọrụ ahụ."
          ],
          steps: ["Kwuo ihe otu ahịrị na-anọchi anya ya.", "Depụta kọlụm ọ bụla na ihe ọ pụtara.", "Kaa kọlụm ọ bụla dị ka nọmba, otu ma ọ bụ ụbọchị.", "Lelee na kọlụm ndị a nwere ike ịza ajụjụ gị."],
          words: [["Ahịrị (row)", "otu ndekọ: otu ihe ị tụrụ."], ["Kọlụm (column)", "otu eziokwu e dere maka ahịrị ọ bụla."], ["Tidy data", "otu ahịrị maka otu ihe, otu kọlụm maka otu eziokwu."], ["Numeric", "kọlụm nọmba ị nwere ike iji gbakọọ ihe."], ["Categorical", "kọlụm ìgwè ma ọ bụ akara, dị ka ụbọchị ma ọ bụ otu."]],
          slides: [
            { title: "Tidy data", bullets: ["Ahịrị ọ bụla: otu ihe a tụrụ", "Kọlụm ọ bụla: otu eziokwu banyere ya"] },
            { title: "Ụdị kọlụm", bullets: ["Nọmba: ọnụahịa, nkeji", "Otu: ụbọchị, otu egwuregwu", "Ụbọchị (dates)"] },
            { title: "Jikọọ ajụjụ na data", bullets: ["Ajụjụ chọrọ kọlụm ziri ezi", "Kọlụm efu = ị pụghị ịza ya", "Kwuo ya n'eziokwu"] }
          ],
          tryIt: "Mee obere tebụl nke ụbọchị 7 gị gara aga: ụbọchị, ụbọchị izu, awa ụra na ọnọdụ obi site na 1 ruo 5. Kaa kọlụm ọ bụla dị ka nọmba, otu ma ọ bụ ụbọchị, ma dee otu ajụjụ tebụl ahụ nwere ike ịza na otu ọ na-apụghị ịza.",
          youCanNow: "ịgụ tebụl, ịkpọ aha ụdị kọlụm ọ bụla ma lelee ma ajụjụ dabara na data.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ kọlụm categorical?", options: ["Kọlụm ọnụahịa", "Kọlụm nwere naanị ụbọchị", "Kọlụm ìgwè, dị ka aha otu ma ọ bụ ụbọchị izu", "Kọlụm nkezi"], answer: 2, why: "Otu (categories) bụ ìgwè ị na-agụ ọnụ, ọ bụghị nke ị na-agbakọ nkezi." },
            { objective: "O2", q: "Tebụl ahịa gị nwere kọlụm ego na ụbọchị mana o nweghị oge n'ụbọchị. Mmadụ jụrụ ma ụtụtụ na-ere karịa. Gịnị ka ị ga-ekwu?", options: ["Data ahụ apụghị ịza nke ahụ, n'ihi na o nweghị kọlụm oge", "Ụtụtụ na-ere karịa", "Gbakọọ nkezi kọlụm ụbọchị", "Chepụta ya site n'ego ndị ahụ"], answer: 0, why: "Ọ bụrụ na data enweghị ya, ị pụghị ịza ya, ikwu nke ahụ bụkwa akụkụ nke ọrụ ahụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nkezi, outlier na ịghara ịbụ onye a ghọgburu",
          minutes: 6,
          goal: "Gbakọọ mean na median, hụ outlier, ma zere otu mperi a na-emekarị.",
          text: [
            "Mean (nkezi) bụ ngụkọta e kere site n'ọnụ ọgụgụ ha. Median bụ nọmba dị n'etiti mgbe ị hazirila ha n'usoro. Maka 3, 4, 4, 5 na 34, mean bụ 50 / 5 = 10, mana median bụ 4.",
            "34 ahụ bụ outlier: nọmba dị anya na ndị ọzọ. O nwere ike ịbụ mperi ide ihe, ma ọ bụ o nwere ike ịbụ eziokwu ma dị mkpa. Outlier na-adọkpụ mean nke ukwuu mana ọ naghị emegharị median nke ukwuu, ya mere mgbe outlier dị, median na-akọwakarị nọmba nkịtị nke ọma karịa.",
            "Mgbe ihe abụọ na-agbanwe ọnụ, a na-akpọ ya correlation, mana ọ naghị egosi na otu na-akpata nke ọzọ. Ahịa ice cream na ọkụ anwụ na-ere ahụ na-arị elu n'oge okpomọkụ: anwụ na-akpata ha abụọ. Tupu i kwuo na ihe kpatara ihe, chọọ ihe ọzọ nwere ike ịkpata ya."
          ],
          steps: ["Hazie nọmba ndị ahụ n'usoro.", "Mean: gbakọọ ha ọnụ ma kee ya site n'ọnụ ọgụgụ ha.", "Median: were nke dị n'etiti (ma ọ bụ nkezi nke abụọ dị n'etiti).", "Chọọ nọmba dị anya na ndị ọzọ ma lelee ma ha bụ mperi.", "Tupu i kwuo \"X na-akpata Y\", chọọ nkọwa ọzọ."],
          words: [["Mean", "nkezi: ngụkọta e kere site n'ọnụ ọgụgụ."], ["Median", "nọmba dị n'etiti mgbe e hazirila nọmba ndị ahụ n'usoro."], ["Outlier", "nọmba dị anya na ndị ọzọ."], ["Correlation", "ihe abụọ na-agbanwekarị ọnụ."], ["Causation", "otu ihe na-eme n'ezie ka ihe ọzọ mee."]],
          slides: [
            { title: "Mean na median", bullets: ["Mean: ngụkọta / ọnụ ọgụgụ", "Median: nọmba dị n'etiti n'usoro", "3, 4, 4, 5, 34: mean 10, median 4"] },
            { title: "Outlier", bullets: ["Dị anya na nọmba ndị ọzọ", "Mperi ide ihe, ma ọ bụ eziokwu dị mkpa", "Ọ na-adọkpụ mean, ọ bụghị median"] },
            { title: "Correlation abụghị causation", bullets: ["Ice cream na ọkụ anwụ na-arị elu ọnụ", "Anwụ na-akpata ha abụọ", "Buru ụzọ chọọ ihe ọzọ kpatara ya"] }
          ],
          tryIt: "Lee oge nnyefe 7 na nkeji: 22, 25, 19, 24, 95, 21, 23. Jiri aka gbakọọ mean na median, kpọọ aha outlier ahụ, ma dee nọmba na-akọwa nnyefe nkịtị nke ọma karịa na ihe mere. (Mean dị ka 32.7, median 23.)",
          youCanNow: "ịgbakọ mean na median, ịhụ outlier ma zere ịgwakọta correlation na causation.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ mean nke 2, 4, 6 na 8?", options: ["5", "4", "6", "20"], answer: 0, why: "2 + 4 + 6 + 8 = 20, na 20 / 4 = 5." },
            { objective: "O3", q: "Oge e chere ụgbọ ala n'izu a bụ nkeji 5, 6, 5, 7 na 60. Kedu nọmba ị ga-akọ dị ka oge nchere nkịtị?", options: ["Mean, 16.6", "Nke kacha elu, 60", "Median, 6", "Ngụkọta, 83"], answer: 2, why: "60 bụ outlier na-adọlite mean; median na-egosi oge nchere nkịtị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iche echiche dị ka onye nyocha data",
        questions: [
          { objective: "O1", q: "Gịnị bụ nzọụkwụ mbụ nke ọrụ data?", options: ["Mee chaatị", "Hichapụ outlier", "Jụọ ajụjụ doro anya", "Kesaa azịza"], answer: 2, why: "Ajụjụ doro anya na-eduzi nzọụkwụ ndị ọzọ niile." },
          { objective: "O2", q: "Na tebụl egwuregwu, \"aha otu\" bụ ụdị kọlụm dị aṅaa?", options: ["Categorical", "Numeric", "Ụbọchị (date)", "Outlier"], answer: 0, why: "Aha otu bụ ìgwè, ọ bụghị nọmba." },
          { objective: "O3", q: "Gịnị bụ median nke 2, 9, 3, 7, 5?", options: ["3", "5", "5.2", "7"], answer: 1, why: "N'usoro: 2, 3, 5, 7, 9. Nọmba dị n'etiti bụ 5." },
          { objective: "O3", q: "Otu ụlọ n'ime ndepụta dị oke ọnụ ugboro iri karịa ndị ọzọ. Kedu nke na-akọwa ụlọ nkịtị nke ọma karịa?", options: ["Mean", "Median", "Ọnụahịa kacha elu", "Ngụkọta"], answer: 1, why: "Otu outlier buru ibu anaghị adọkpụ median nke ukwuu." },
          { objective: "O3", q: "Ụmụaka na-egwu egwuregwu karịa na-enweta akara ka mma n'ụlọ akwụkwọ. Gịnị ka ị na-ekwesịghị ikwubi ozugbo?", options: ["Na ha abụọ na-agbanwe ọnụ", "Na egwuregwu na-akpata akara ka mma", "Na data ọzọ nwere ike inyere aka", "Na ihe ndị ọzọ nwere ike ịkpata ya"], answer: 1, why: "Naanị correlation anaghị egosi causation." }
        ]
      }
    },
    {
      name: "Isi 2: Inyocha data site na Python",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ibubata na ile data anya site na pandas",
          minutes: 5,
          goal: "Bubata data n'ime pandas DataFrame na Colab ma kọwaa ya.",
          text: [
            "pandas bụ library Python n'efu maka iji tebụl arụ ọrụ, ọ dịkwalarị na Google Colab. A na-akpọ tebụl na pandas DataFrame, a na-akpọkarị ya df.",
            "Maka omume, anyị na-eji ezi data ụlọ nri nwere nri 244 nke na-abịa na seaborn, library chaatị: df = sns.load_dataset(\"tips\"). Ọ chọrọ ịntanetị, nke Colab nwere. Kọlụm ya gụnyere total_bill, tip, day, time (Lunch ma ọ bụ Dinner) na size (ndị nọ na tebụl). Maka data nke gị, pd.read_csv(\"file.csv\") na-ebubata faịlụ CSV ị bulitere.",
            "Iwu anọ na-egosi gị ihe i nwere: df.head() na-egosi ahịrị ise mbụ, df.shape na-enye ahịrị na kọlụm, df.info() na-edepụta ụdị kọlụm ọ bụla, df.describe() na-enyekwa count, mean, min, max na ihe ndị ọzọ maka kọlụm nọmba."
          ],
          steps: ["Na notebook Colab ọhụrụ, gbaa: import pandas as pd na import seaborn as sns", "Bubata: df = sns.load_dataset(\"tips\")", "Lee anya: df.head()", "Nha na ụdị: df.shape na df.info()", "Nchịkọta: df.describe()"],
          words: [["pandas", "library Python n'efu maka iji tebụl data arụ ọrụ."], ["DataFrame", "tebụl na pandas, nwere ahịrị na kọlụm nwere aha."], ["CSV", "faịlụ ederede nkịtị nke tebụl, nwere rịkọm (comma) n'etiti ihe ndị ahụ."], ["head()", "na-egosi ahịrị mbụ nke DataFrame."], ["describe()", "na-enye nọmba nchịkọta maka kọlụm nọmba ọ bụla."]],
          slides: [
            { title: "pandas na DataFrame", bullets: ["pandas: ngwa tebụl nke Python", "Tebụl bụ DataFrame, a na-akpọkarị ya df", "Ọ dịlarị na Google Colab"] },
            { title: "Bubata data", bullets: ["df = sns.load_dataset(\"tips\")", "Faịlụ nke gị: pd.read_csv(\"file.csv\")"] },
            { title: "Lee anya tupu i nyochaa", bullets: ["df.head(): ahịrị mbụ", "df.shape na df.info(): nha na ụdị", "df.describe(): nọmba nchịkọta"] }
          ],
          sources: [PANDAS, SEABORN, COLAB],
          tryIt: "Bubata data tips na Colab. Dee ọnụ ọgụgụ ahịrị na kọlụm o nwere, kọlụm ndị bụ nọmba na ndị bụ otu, na mean na maximum nke total_bill site na df.describe().",
          youCanNow: "ibubata data site na pandas ma kọwaa nha ya, kọlụm ya na nọmba nchịkọta ya.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka df.info() na-egosi?", options: ["Bar chart", "Naanị ahịrị mbụ", "Ihe efu ndị e mejupụtara", "Ụdị kọlụm ọ bụla"], answer: 3, why: "df.info() na-edepụta kọlụm ọ bụla na ụdị ya." },
            { objective: "O4", q: "I bulitere faịlụ klọb gị attendance.csv na Colab. Kedu ahịrị ị ga-eji bubata ya?", options: ["sns.load_dataset(\"attendance\")", "df = pd.read_csv(\"attendance.csv\")", "df.head(\"attendance.csv\")", "df.describe(\"attendance.csv\")"], answer: 1, why: "pd.read_csv na-ebubata faịlụ CSV ị bulitere." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ihicha, ịhọpụta na ịkpakọta",
          minutes: 6,
          goal: "Lelee ihe efu, tinye kọlụm, họpụta ahịrị ma tụnyere otu dị iche iche.",
          text: [
            "Buru ụzọ hichaa. df.isna().sum() na-agụ ihe efu dị na kọlụm ọ bụla. Ọ bụrụ na ụfọdụ efu, ị nwere ike iwepụ ahịrị ndị ahụ site na df.dropna() ma ọ bụ kpebie otu ị ga-esi mejupụta ha; dee ihe i mere. Lelekwa ihe na-apụghị ịdị adị, dị ka ụgwọ nri na-erughị efu (negative).",
            "Mee kọlụm ị chọrọ. Tip $5 pụtara ihe dị iche n'ụgwọ $20 na n'ụgwọ $100, ya mere tinye nha ziri ezi: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100.",
            "Họpụta ahịrị site na ọnọdụ: df[df[\"time\"] == \"Dinner\"] na-edebe naanị nri abalị. Kpakọta iji tụnyere: df.groupby(\"day\")[\"tip_pct\"].mean() na-enye nkezi pasent tip maka ụbọchị ọ bụla. Ọ bụrụ na pandas egosi ịdọ aka na ntị edo edo (warning), gụọ ya, mana ọ bụghị mperi (error). .round(1) na-eme ka nọmba ndị ahụ dị mma ile anya."
          ],
          steps: ["Gụọ ihe efu: df.isna().sum()", "Tinye kọlụm: df[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100", "Họpụta: dinners = df[df[\"time\"] == \"Dinner\"]", "Kpakọta: df.groupby(\"day\")[\"tip_pct\"].mean().round(1)", "Nwaa otu ọzọ, dị ka time ma ọ bụ size."],
          words: [["Ihe efu (missing value)", "igbe tebụl tọgbọrọ chakoo; pandas na-egosi ya dị ka NaN."], ["Ihicha (cleaning)", "ịchọta na idozi ihe efu, ihe ezighi ezi ma ọ bụ ihe na-apụghị ịdị adị."], ["Ịhọpụta (filter)", "idebe naanị ahịrị dabara n'ọnọdụ."], ["groupby", "ikewa ahịrị n'ìgwè ma chịkọta ìgwè ọ bụla."]],
          slides: [
            { title: "Buru ụzọ hichaa", bullets: ["df.isna().sum() na-agụ ihe efu", "Wepụ ma ọ bụ mejupụta, ma dee ihe i mere", "Chọọ ihe na-apụghị ịdị adị"] },
            { title: "Mee nha ziri ezi", bullets: ["tip_pct = tip / total_bill * 100", "Ọ na-atụnyere ụgwọ buru ibu na nke nta n'ụzọ ziri ezi"] },
            { title: "Họpụta ma kpakọta", bullets: ["df[df[\"time\"] == \"Dinner\"]", "df.groupby(\"day\")[\"tip_pct\"].mean()", "Warning abụghị error"] }
          ],
          sources: [PANDAS],
          tryIt: "Lelee data tips maka ihe efu. Tinye kọlụm tip_pct. Chọta nkezi pasent tip maka ụbọchị ọ bụla na maka Lunch na Dinner. Dee ụbọchị nwere nkezi kacha elu.",
          youCanNow: "ilele data maka ihe efu, ịmepụta kọlụm ọhụrụ, ịhọpụta ahịrị ma tụnyere otu dị iche iche.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka df.dropna() na-eme?", options: ["Ọ na-agbakwunye kọlụm ọhụrụ", "Ọ na-agụ ahịrị", "Ọ na-ewepụ ahịrị nwere ihe efu", "Ọ na-eme chaatị"], answer: 2, why: "dropna() na-ewepụ ahịrị nwere ihe efu; dee na i mere ya." },
            { objective: "O5", q: "Ị hụrụ ụgwọ nri -12.00 na data. Gịnị ka ị ga-eme?", options: ["Were ya dị ka ihe na-apụghị ịdị adị, dozie ma ọ bụ wepụ ya, ma dee ihe i mere", "Debe ya; ụgwọ na-erughị efu bụ ihe nkịtị", "Gbakọọ ya na nkezi ndị ọzọ n'agbanyeghị", "Zoo ya na chaatị"], answer: 0, why: "Ilele ihe na-apụghị ịdị adị dị ka ụgwọ na-erughị efu bụ akụkụ nke ihicha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ime chaatị na ikesa ihe ị chọpụtara n'eziokwu",
          minutes: 6,
          goal: "Mee bar chart doro anya ma dee ihe ị chọpụtara nke ndị mmadụ nwere ike ịtụkwasị obi.",
          text: [
            "Chaatị na-egosi usoro ngwa ngwa karịa tebụl. Bar chart kacha mma maka ịtụnyere otu dị iche iche: tip_by_day = df.groupby(\"day\")[\"tip_pct\"].mean() wee tip_by_day.plot(kind=\"bar\", title=\"Average tip % by day\"). Nye chaatị ọ bụla aha ma kwuo ihe nọmba ndị ahụ pụtara.",
            "Dee ihe ị chọpụtara n'ahịrịokwu dị mfe nwere nọmba: \"N'nkezi, tip [ụbọchị] kacha elu, ihe dị ka pasent X nke ụgwọ nri.\" Jiri nọmba koodu gị n'onwe ya bipụtara.",
            "Kwuo oke ya n'eziokwu. Kwuo ole ahịrị otu nwere: df[\"day\"].value_counts() na-egosi ụbọchị nwere nri ole na ole, ya mere a pụghị ịtụkwasị nkezi ya obi nke ukwuu. Data a si n'otu ụlọ nri, ya mere o nwere ike ọ gaghị adị otu ahụ n'ụlọ nri ndị ọzọ. Ọ na-egosikwa ihe mere, ọ bụghị ihe mere o ji mee."
          ],
          steps: ["Mee nọmba otu ahụ.", "See ha: .plot(kind=\"bar\", title=\"...\")", "Lelee nha otu site na value_counts().", "Dee ihe atọ ị chọpụtara nwere ezi nọmba.", "Tinye otu oke: ihe data ahụ na-enweghị ike ịgwa gị."],
          words: [["Bar chart", "chaatị nwere ogwe (bars) e ji atụnyere otu dị iche iche."], ["value_counts()", "na-agụ ole ahịrị otu ọ bụla nwere."], ["Ihe ị chọpụtara (finding)", "okwu doro anya banyere ihe data na-egosi, nwere nọmba."], ["Oke (limitation)", "ihe data gị ma ọ bụ nyocha gị na-apụghị ịgwa gị."]],
          slides: [
            { title: "Bar chart na-atụnyere otu", bullets: ["groupby, wee .plot(kind=\"bar\")", "Tinye aha mgbe niile"] },
            { title: "Dee ihe ị chọpụtara nke ọma", bullets: ["Ahịrịokwu dị mfe gbakwunyere nọmba", "Jiri nọmba koodu gị bipụtara"] },
            { title: "Kwuo oke n'eziokwu", bullets: ["A pụghị ịtụkwasị otu nta obi nke ukwuu", "Otu ụlọ nri, ọ bụghị ụlọ nri niile", "Ọ na-egosi ihe mere, ọ bụghị ihe kpatara ya"] }
          ],
          sources: [PANDAS],
          tryIt: "Ọrụ ikpeazụ: n'otu notebook, bubata data tips, lelee ihe efu, tinye tip_pct, chọta nkezi pasent tip site n'ụbọchị na site n'oge (time), mee bar chart nwere aha nke otu n'ime ha, ma dee ihe atọ ị chọpụtara nwere nọmba, gụnyere otu ihe data a na-apụghị ịgwa gị.",
          youCanNow: "ịgbanwe data ka ọ bụrụ chaatị na ihe ị chọpụtara n'eziokwu n'okwu dị mfe.",
          quickCheck: [
            { objective: "O6", q: "Kedu ụdị chaatị kacha mma maka ịtụnyere otu, dị ka ụbọchị?", options: ["Pie chart nke otu nọmba", "Bar chart", "Tebụl na-enweghị akara", "Chaatị na-enweghị aha"], answer: 1, why: "Bar chart kacha mma maka ịtụnyere otu dị iche iche." },
            { objective: "O6", q: "Chaatị gị na-egosi na Satọdee nwere tip dị elu. Gịnị ka ị ga-agbakwunye tupu i kesaa ya?", options: ["Okwu na Satọdee na-akpata tip buru ibu ebe niile", "Ọ dịghị ihe; chaatị na-ekwu okwu n'onwe ha", "Nọmba e chepụtara iji mee ka o doo anya", "Aha na oke e kwuru n'eziokwu, dị ka ole nri ụbọchị ọ bụla nwere"], answer: 3, why: "Aha na oke e kwuru n'eziokwu na-enyere ndị mmadụ aka ịtụkwasị obi ma ghọta ihe ahụ a chọpụtara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Inyocha data site na Python",
        questions: [
          { objective: "O4", q: "Na pandas, gịnị bụ DataFrame?", options: ["Ogwe foto", "Chaatị", "Mperi Python", "Tebụl nwere ahịrị na kọlụm nwere aha"], answer: 3, why: "DataFrame bụ tebụl pandas." },
          { objective: "O5", q: "Kedu iwu na-agụ ihe efu dị na kọlụm ọ bụla?", options: ["df.isna().sum()", "df.head()", "df.plot()", "df.shape"], answer: 0, why: "isna na-aka igbe efu akara, sum na-agụkwa ha ọnụ." },
          { objective: "O5", q: "Gịnị mere ị ga-eji tinye kọlụm pasent tip kama ịtụnyere ego tip?", options: ["Ego abụghị nọmba", "pandas apụghị iji ego", "Pasent na-atụnyere ụgwọ buru ibu na nke nta n'ụzọ ziri ezi", "Ọ na-eme ka tebụl dị nta"], answer: 2, why: "Pasent nke ụgwọ nri bụ ntụnyere ziri ezi." },
          { objective: "O5", q: "Kedu ahịrị na-enye nkezi pasent tip maka ụbọchị ọ bụla?", options: ["df[\"day\"].plot()", "df.mean(\"day\")", "df.head(\"day\")", "df.groupby(\"day\")[\"tip_pct\"].mean()"], answer: 3, why: "groupby na-ekewa site n'ụbọchị; mean na-agbakọ nkezi otu ọ bụla." },
          { objective: "O6", q: "Otu ụbọchị nwere naanị nri 19. Gịnị ka ihe i dere kwesịrị ikwu?", options: ["Ọ dịghị ihe", "Na data ahụ ezighi ezi", "Na a pụghị ịtụkwasị nkezi ya obi nke ukwuu n'ihi na otu ahụ dị nta", "Na ọ bụ ụbọchị kacha mma"], answer: 2, why: "Otu nta na-eme ka nkezi ghara ido anya nke ukwuu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Sayensị Data na Nyocha Data",
    questions: [
      { objective: "O1", q: "Sayensị data bụ isi ihe banyere:", options: ["Idozi kọmputa", "Iji data aza ajụjụ ma mee mkpebi", "Ide ihe ngwa ngwa", "Iwu weebụsaịtị"], answer: 1, why: "Ọ na-agbanwe data ka ọ bụrụ azịza." },
      { objective: "O1", q: "Kedu usoro ziri ezi maka ọrụ data?", options: ["Ask, Get, Clean, Explore, Share", "Share, Ask, Clean, Get, Explore", "Explore, Share, Ask, Get, Clean", "Clean, Share, Get, Ask, Explore"], answer: 0, why: "Malite n'ajụjụ ma jedebe n'ikesa." },
      { objective: "O2", q: "Na tidy data, ahịrị ọ bụla bụ:", options: ["Otu kọlụm", "Otu chaatị", "Otu ihe ị tụrụ", "Ngụkọta"], answer: 2, why: "Otu ahịrị maka otu ndekọ." },
      { objective: "O2", q: "Kedu kọlụm bụ numeric?", options: ["Nkeji e gwuru egwu", "Aha otu", "Ụbọchị izu", "Obodo"], answer: 0, why: "Ị nwere ike iji nkeji gbakọọ ihe." },
      { objective: "O2", q: "Data gị enweghị kọlụm banyere ihu igwe. Ị nwere ike ịza \"Ndị mmadụ na-enye tip karịa mgbe mmiri na-ezo?\"", options: ["Ee, naanị chepụta ya", "Ee, jiri mean", "Ee, jiri chaatị", "Mba, ị kwesịkwara ikwu ya"], answer: 3, why: "Ajụjụ chọrọ data na-ekpuchi ya." },
      { objective: "O3", q: "Gịnị bụ mean nke 4, 6 na 8?", options: ["4", "6", "8", "18"], answer: 1, why: "18 / 3 = 6." },
      { objective: "O3", q: "Gịnị bụ median nke 1, 3, 3, 9, 50?", options: ["3", "9", "13.2", "50"], answer: 0, why: "Nọmba dị n'etiti n'usoro bụ 3." },
      { objective: "O3", q: "Outlier bụ:", options: ["Median", "Kọlụm efu", "Aha chaatị", "Nọmba dị anya na ndị ọzọ"], answer: 3, why: "Outlier na-anọ iche na ndị ọzọ." },
      { objective: "O3", q: "Outlier na-adọkpụ nọmba ole karịa?", options: ["Mean", "Median", "Ọnụ ọgụgụ ahịrị", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Mean na-eji nọmba ọ bụla, ya mere nọmba dị oke na-emegharị ya." },
      { objective: "O3", q: "Ahịa nche anwụ (umbrella) na ihe mberede ụgbọ ala na-arị elu ọnụ n'ụbọchị mmiri ozuzo. Nke a na-egosi:", options: ["Nche anwụ na-akpata ihe mberede", "Ihe mberede na-akpata ahịa nche anwụ", "Correlation, nke mmiri ozuzo nwere ike ịkpata", "Ọ dịghị ihe ọ bụla"], answer: 2, why: "Ihe nke atọ, mmiri ozuzo, na-akpata ha abụọ." },
      { objective: "O4", q: "pandas bụ:", options: ["App spreadsheet a na-akwụ ụgwọ", "Ụdị chaatị", "Weebụsaịtị", "Library Python n'efu maka tebụl data"], answer: 3, why: "pandas na-arụ ọrụ DataFrame na Python." },
      { objective: "O4", q: "Kedu iwu na-egosi ahịrị ise mbụ?", options: ["df.tail(0)", "df.shape", "df.head()", "df.sum()"], answer: 2, why: "head na-egosi ahịrị ndị dị n'elu." },
      { objective: "O4", q: "df.shape na-enye (244, 7). Gịnị ka nke ahụ pụtara?", options: ["Kọlụm 244 na ahịrị 7", "Ahịrị 244 na kọlụm 7", "Ihe efu 244", "Chaatị 7"], answer: 1, why: "shape bụ ahịrị, wee kọlụm." },
      { objective: "O4", q: "Kedu nke na-ebubata faịlụ CSV nke gị?", options: ["pd.read_csv(\"file.csv\")", "df.head(\"file.csv\")", "sns.plot(\"file.csv\")", "print(\"file.csv\")"], answer: 0, why: "read_csv na-agụ CSV n'ime DataFrame." },
      { objective: "O4", q: "df.describe() na-enye:", options: ["Bar chart", "Aha faịlụ", "Nọmba nchịkọta dị ka mean, min na max", "Ndozi ihe efu"], answer: 2, why: "describe na-achịkọta kọlụm nọmba." },
      { objective: "O5", q: "Kedu nke na-edebe naanị ahịrị nri abalị (dinner)?", options: ["df[df[\"time\"] == \"Dinner\"]", "df[\"Dinner\"]", "df.dinner()", "df.drop(\"Dinner\")"], answer: 0, why: "Ọnọdụ n'ime df[ ] na-ahọpụta ahịrị." },
      { objective: "O5", q: "Ị chọtara ihe efu ma wepụ ahịrị ndị ahụ. Gịnị ọzọ ka ị kwesịrị ime?", options: ["Zoo ya", "Hichapụ data ahụ niile", "Ọ dịghị ihe", "Dee ihe i mere"], answer: 3, why: "Idekọ nzọụkwụ ihicha na-eme ka nyocha ahụ bụrụ eziokwu." },
      { objective: "O6", q: "Kedu chaatị kacha mma maka ịtụnyere nkezi n'ụbọchị dị iche iche?", options: ["Foto", "Bar chart", "Otu nọmba", "Word cloud"], answer: 1, why: "Ogwe (bars) na-atụnyere otu nke ọma." },
      { objective: "O6", q: "Kedu nke bụ ihe a chọpụtara e dere nke ọma?", options: ["\"Tip dị mma.\"", "\"Ahịa ngwụcha izu ruru nkezi $420 kwa ụbọchị, ihe dị ka 30% karịa ụbọchị ọrụ.\"", "\"Data na-egosi ihe.\"", "\"Ngwụcha izu kacha mma n'ihi na obi na-atọ ndị mmadụ ụtọ.\""], answer: 1, why: "Ọ doro anya, o nwere nọmba, ọ naghị ekwukwa ihe kpatara ọ na-apụghị igosi." },
      { objective: "O6", q: "Data tips a si n'otu ụlọ nri. Kedu oke ziri ezi ị ga-ekwu?", options: ["Azịza ndị ahụ dị otu ahụ ebe niile", "Data ahụ bụ adịgboroja", "O nweghị oke ọ bụla", "Azịza ndị ahụ nwere ike ọ gaghị adị otu ahụ n'ụlọ nri ndị ọzọ"], answer: 3, why: "Otu isi iyi apụghị ikwu okwu maka ụlọ nri niile." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [1, 3, 4, 6, 8, 9, 11, 12, 15, 17]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ibubata na ilele data", objective: "O4", notYet: "Data ahụ ebubataghị, ma ọ bụ a leleghị ihe efu.", meets: "E bubatara data tips, kọwaa ya ma lelee ya maka ihe efu.", exceeds: "Ọ na-ekwukwa ọnụ ọgụgụ ahịrị na ụdị kọlụm ọ bụla e ji mee ihe." },
      { name: "Kọlụm pasent tip", objective: "O5", notYet: "Enweghị kọlụm pasent tip, ma ọ bụ e gbakọrọ ya n'ụzọ ezighi ezi.", meets: "Kọlụm tip_pct hà nhata tip e kere site na total_bill, mụbaa ya na 100.", exceeds: "Ọ na-elelekwa ihe na-apụghị ịdị adị dị ka ụgwọ na-erughị efu." },
      { name: "Nkezi otu", objective: "O5", notYet: "Naanị otu ntụnyere, ma ọ bụ nkezi ndị ahụ ezighi ezi.", meets: "Nkezi pasent tip maka ụbọchị ọ bụla na maka nri ehihie na nri abalị, e mechiri (rounded).", exceeds: "Ọ na-egosikwa ole nri dị n'otu ọ bụla." },
      { name: "Bar chart", objective: "O6", notYet: "Enweghị chaatị, ma ọ bụ chaatị ahụ enweghị aha.", meets: "Bar chart nke otu ntụnyere nwere aha doro anya.", exceeds: "Akara axis ma ọ bụ ndetu na-ekwu ihe nọmba ndị ahụ pụtara." },
      { name: "Ihe a chọpụtara n'eziokwu", objective: "O6", notYet: "Ihe a chọpụtara erughị atọ, ma ọ bụ e kwughị oke ọ bụla.", meets: "Ihe atọ a chọpụtara n'okwu dị mfe nwere nọmba site n'azịza, gụnyere otu ihe data ahụ na-apụghị ịgwa gị.", exceeds: "Ọ na-ezerekwa ikwu ihe kpatara ma na-akpọ otu nta aha ebe ọ dị mkpa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke nyocha tips",
      "Ndị na-amụ ihe kwuru na ha nyochara data nke ha, dị ka maka otu egwuregwu, klọb, klas ma ọ bụ ọrụ, n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ọzọ, dị ka \"Mmalite Machine Learning\"",
      "Ndị na-amụ ihe tinyere notebook ahụ na portfolio ha ma ọ bụ jiri ya rịọ ọrụ data ma ọ bụ mmemme"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ laptọọpụ nwere web browser na ịntanetị",
      "Akaụntụ Google n'efu iji Google Colab",
      "Akwụkwọ na mkpịsị ode iji dee ajụjụ na ihe a chọpụtara",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, gbakwunyere oge omume"
    ],
    facilitatorNotes: [
      "Malite n'ajụjụ ndị na-amụ ihe na-eche maka ya, dị ka akara otu egwuregwu ma ọ bụ ndị bịara klọb, tupu imeghe koodu ọ bụla.",
      "Jiri aka gbakọọ mean na median nke obere ndepụta ọnụ tupu iji pandas.",
      "Data tips na-esi n'ịntanetị abịa; nwalee ya na netwọk gị tupu klas ma nwee nnomi CSV ya njikere.",
      "Mee ka ndị na-amụ ihe gụọ ihe ndị ọzọ chọpụtara ma kaa akara okwu ọ bụla na-ekwu ihe kpatara ma ọ bụ oke na-efu efu.",
      "Ọ bụrụ na ndị na-amụ ihe wetara data nke ha, lelee na o nweghị ozi nzuzo banyere ezi mmadụ tupu ha bulite ya."
    ]
  }
};
