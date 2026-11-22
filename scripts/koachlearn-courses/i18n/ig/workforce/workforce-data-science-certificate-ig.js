"use strict";

// Koach Learn course (Igbo translation of workforce/workforce-data-science-certificate.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const GOOGLE_DA = { name: "Coursera: Google Data Analytics Professional Certificate (asambodo ọkachamara Google n'ịtụle data)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" };
const IBM_DS = { name: "Coursera: IBM Data Science Professional Certificate (asambodo ọkachamara IBM na sayensị data)", url: "https://www.coursera.org/professional-certificates/ibm-data-science" };
const MS_PL300 = { name: "Microsoft Learn: Microsoft Certified: Power BI Data Analyst Associate (Ule PL-300)", url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/" };
const COLAB = { name: "Google Colab", url: "https://colab.research.google.com/" };

module.exports = {
  id: "workforce-data-science-certificate-ig",
  lang: "ig",
  translationOf: "workforce-data-science-certificate",
  category: "Workforce Development",
  name: "Ịkwado maka Asambodo Ọkachamara na Sayensị Data",
  skills: "Ịhọrọ asambodo data kwesịrị gị, Ime atụmatụ ọmụmụ kwa izu, Ihicha na ịchịkọta data, Ịjụ ajụjụ data na ịza ya site na chaatị, Iwu ọrụ pọtfoliyo",
  outcome: "ịhọrọ asambodo data dabara ebumnuche gị, ime atụmatụ ọmụmụ ị ga-enwe ike idebe, ma mechaa obere ọrụ omume dị ka nke asambodo ndị a na-arịọ: were ezi data, hichaa ya, chịkọta ya, mee otu chaatị doro anya ma dee ihe ọ pụtara.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ na ndị na-arụ ọrụ chọrọ ịbanye n'ọrụ data, ma ọ bụ iji data n'ọrụ ha nwere ugbu a, ndị na-eche maka asambodo data a ma ama n'ịntanetị dị ka Google Data Analytics Professional Certificate, IBM Data Science Professional Certificate, ma ọ bụ Power BI Data Analyst Associate nke Microsoft.",
    "Ọ naghị anọchi mmemme ndị ahụ. Ọ na-akwado gị maka ha: ị ga-amụta ihe nke ọ bụla na-akụzi, họrọ otu dabara ebumnuche gị na izu gị, ma mụọ nka ndị bụ isi ha niile na-eji, n'obere ọrụ ị nwere ike igosi ndị were mmadụ n'ọrụ.",
    "Asambodo bụ ụzọ isi mụta ihe na igosi ihe ị mụtara. Ọ naghị ekwe nkwa ọrụ ma ọ bụ mmụba ụgwọ ọnwa. Ihe na-enyekarị aka bụ imecha, ime omume, na inwe ike ịkọwa ọrụ nke gị. Lelee peeji ugbu a nke mmemme ọ bụla maka ego ọ na-efu, oge ọ na-ewe na ihe dị n'ime ya tupu i debanye aha.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ aka. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mechaa obere ọrụ pọtfoliyo: họrọ data ọha n'efu (ma ọ bụ tebụl ire ahịa ọmụmaatụ dị na Nkuzi 4), dee otu ajụjụ doro anya, hichaa data ahụ (dozie oghere, ahịrị ugboro abụọ na ụdị edemede), mee tebụl nchịkọta, mee otu chaatị na-aza ajụjụ ahụ, ma dee nchọpụta nwere ahịrịokwu atọ ya na otu oke data gị nwere. Chekwaa ya na Google Sheets, Excel ma ọ bụ Google Colab ya na obere aha na nkọwa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-achọ ọrụ na ndị na-arụ ọrụ chọrọ ịbanye n'ọrụ data, ma ọ bụ iji data n'ọrụ ha nwere, ndị na-eche maka asambodo data a ma ama n'ịntanetị (Google Data Analytics, IBM Data Science ma ọ bụ Microsoft Power BI Data Analyst).",
    startingPoint: "Ha nwere ike iji kọmputa na spreadsheet dị mfe. Ọtụtụ atụnyebeghị asambodo data, ha edebebeghị atụmatụ ọmụmụ ogologo n'ịntanetị, ha ahichabeghịkwa, chịkọta ma ọ bụ mee chaatị nke ezi data.",
    gap: "Nka data na-emeghe ọtụtụ ọrụ, mana ndị mmadụ na-ahọrọkarị asambodo ezighi ezi, kwụsị n'etiti, ma ọ bụ mechaa n'enweghị ọrụ ha ga-egosi. Ndị na-amụ ihe kwesịrị ịhọrọ asambodo dabara ebumnuche ha, mee atụmatụ ọmụmụ ha ga-enwe ike idebe, ma mechaa obere ọrụ pọtfoliyo dị ka nke asambodo ndị a na-arịọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu data",
      "Ngwaọrụ: a chọrọ kọmputa maka spreadsheet na Google Colab; ekwentị zuru maka ime atụmatụ",
      "Ego na ihe dị n'ihe ọmụmụ na-agbanwe, ya mere ndị na-amụ ihe na-elele ezi peeji mmemme ọ bụla taa",
      "Nzuzo: enweghị data nzuzo ndị ahịa na pọtfoliyo ọha n'enweghị ikike; naanị data ọmụmaatụ ma ọ bụ data ọha",
      "Oge: nkuzi dị ka nkeji 5 gbakwunyere omume aka; asambodo na-ewe ọtụtụ ọnwa mgbe ihe ọmụmụ a gachara"
    ],
    prerequisites: "Ọ dịghị. Omume spreadsheet dị mfe na-enyere aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ebe ọrụ ị maara", action: "ịkọwa usoro ọrụ data ma dee ajụjụ atọ data nwere ike ịza n'ebe ahụ", standard: "na-akara nke ọ bụla dị ka ọrụ onye nyocha data (analyst) ma ọ bụ ọkà sayensị data" },
    { id: "O2", condition: "Mgbe e nyere gị asambodo data atọ a ma ama", action: "itụnyere ọkwa ha, ngwa ndị bụ isi, oge na ego ha ma họrọ nke dabara ebumnuche gị", standard: "na-ewere ego ahụ site na ezi peeji taa" },
    { id: "O3", condition: "Maka asambodo ị họọrọ", action: "ime atụmatụ ọmụmụ kwa izu nwere oge ọmụmụ a kara aka na ebumnuche kwa izu", standard: "nke dabara n'ọrụ gị na ezinụlọ gị" },
    { id: "O4", condition: "Mgbe e nyere gị obere data nwere nsogbu", action: "ịchọta ma dozie oghere, ahịrị ugboro abụọ na nsogbu ụdị edemede ma dee ndekọ nhicha", standard: "mgbe i bu ụzọ chekwaa otu nnomi nke mbụ" },
    { id: "O5", condition: "Mgbe e nyere gị data a hichara na otu ajụjụ", action: "ime tebụl nchịkọta na otu chaatị na-aza ajụjụ ahụ", standard: "na ụdị chaatị ziri ezi na aha na-ekwu azịza ya" },
    { id: "O6", condition: "Site n'iji chaatị na nchịkọta gị", action: "ide nchọpụta nwere ahịrịokwu atọ ya na otu oke ma chekwaa ya dị ka ọrụ pọtfoliyo", standard: "ya na obere aha na nkọwa, na-enweghị data nzuzo" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhọrọ asambodo gị na ime atụmatụ imecha ya",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ndị nyocha data na ndị ọkà sayensị data na-arụ",
          minutes: 5,
          goal: "Kọwaa usoro ọrụ data ma kwuo akụkụ kacha masị gị.",
          text: [
            "Ọrụ data na-eso ụzọ dị mfe: jụọ ajụjụ, chịkọta data, hichaa ya, nyochaa ma tụlee ya, gosi ya na chaatị, ma kesaa ihe ọ pụtara. Mmemme Google na-akọwa otu echiche a n'usoro nke ya.",
            "Onye nyocha data (data analyst) na-arụkarị ọrụ n'ihe merelarị: \"Kedu ngwaahịa kacha ree n'ọnwa gara aga?\" Ha na-eji spreadsheet, SQL (asụsụ e ji ajụ database ajụjụ) na ngwa dashboard dị ka Tableau ma ọ bụ Power BI.",
            "Ọkà sayensị data (data scientist) na-eme nke ahụ, ma na-ewukwa model na-ebu amụma ma ọ bụ na-ahazi ihe: \"Kedu ndị ahịa nwere ike ịkwụsị ịzụ ihe?\" Ha na-ede koodu na Python ma na-eji mgbakọ na mwepụ karịa. Ọtụtụ ndị na-amalite dị ka ndị nyocha data wee too banye na sayensị data."
          ],
          words: [["Data set (data)", "nchịkọta data, na-abụkarị tebụl nwere ahịrị na kọlụm."], ["SQL", "Structured Query Language: asụsụ e ji ewepụta data site na database."], ["Model", "mmemme na-amụta ụkpụrụ site na data iji buo amụma ma ọ bụ hazie ihe."], ["Dashboard", "peeji chaatị na-agbanwe ka data na-agbanwe."]],
          slides: [
            { title: "Usoro ọrụ data", bullets: ["Jụọ ajụjụ", "Chịkọta ma hichaa data", "Tụlee ma mee chaatị ya", "Kesaa ihe ọ pụtara"] },
            { title: "Onye nyocha data (analyst)", bullets: ["Na-akọwa ihe mere", "Spreadsheet, SQL, Tableau ma ọ bụ Power BI", "\"Kedu ngwaahịa kacha ree n'ọnwa gara aga?\""] },
            { title: "Ọkà sayensị data (scientist)", bullets: ["Na-ebukwa amụma ma na-ahazi ihe site na model", "Na-ejikarị Python na mgbakọ na mwepụ karịa", "\"Kedu ndị ahịa nwere ike ịkwụsị ịzụ ihe?\""] }
          ],
          tryIt: "Chee maka ọrụ gị ugbu a ma ọ bụ nke ikpeazụ (ụlọ ahịa, ụlọ nkwakọba ngwaahịa, ụlọ ọgwụ, ụlọ nri). Dee ajụjụ atọ data nwere ike ịza n'ebe ahụ, dị ka \"Kedu oge kacha nwee ọrụ?\" Kaa nke ọ bụla \"analyst\" ma ọ bụ \"data scientist\".",
          youCanNow: "ịkọwa usoro ọrụ data na ọdịiche dị n'etiti onye nyocha data na ọkà sayensị data.",
          quickCheck: [
            { objective: "O1", q: "Kedu nzọụkwụ mbụ a na-emekarị n'usoro ọrụ data?", options: ["Mee chaatị", "Hichaa data", "Wuo model", "Jụọ ajụjụ"], answer: 3, why: "Ọrụ data na-amalite site n'ajụjụ doro anya, nke na-eduzi nzọụkwụ ọ bụla na-esote." },
            { objective: "O1", q: "N'ụlọ ahịa gị, ị chọrọ ịmata oge kacha nwee ọrụ. Ọrụ onye bụ nke ahụ?", options: ["Naanị ọkà sayensị data", "Onye nyocha data", "Ọ dịghị onye; a pụghị ịza ya", "Naanị onye na-ede mmemme kọmputa"], answer: 1, why: "Ịkọwa ihe mere, dị ka oge kacha nwee ọrụ, bụ ọrụ onye nyocha data." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Itụnyere asambodo data ndị a ma ama",
          minutes: 6,
          goal: "Tụnyere asambodo data atọ a ma ama ma họrọ nke dabara ebumnuche gị.",
          text: [
            "Google Data Analytics Professional Certificate (na Coursera): usoro ihe ọmụmụ 9 maka ndị mbido, a chọghị ahụmịhe. Peeji ya depụtara spreadsheet, SQL, Tableau na ngosi (presentation), FAQ ya kwukwara na ọ na-akụzi Python. Ọ na-atụ aro ihe dị ka ọnwa 6 n'awa 10 kwa izu.",
            "IBM Data Science Professional Certificate (na Coursera): usoro ihe ọmụmụ 12 maka ndị mbido. Peeji ya depụtara Python, SQL, Jupyter na library dị ka Pandas, NumPy, Matplotlib na Scikit-learn, ma na-akụzi nyocha data, ngosi data na chaatị, na model machine learning. Ọ na-atụ aro ihe dị ka ọnwa 4 n'awa 10 kwa izu.",
            "Microsoft Certified: Power BI Data Analyst Associate: asambodo ọkwa etiti (intermediate) a na-enweta site n'ịgafe Ule PL-300, ule a na-eleba anya (proctored). Ọ na-anwale ịkwado, ịhazi (modeling), igosi na ịtụle data na Power BI, ị na-emeghachikwa ya kwa ọnwa 12 n'efu na Microsoft Learn.",
            "Ego, oge na ndepụta ihe ọmụmụ na-agbanwe, a na-etinyekwa ụfọdụ mmemme n'ime ndebanye aha (subscription) ma ọ bụ na-enye ha n'efu site n'ọba akwụkwọ, ụlọ ọrụ enyemaka ọrụ ma ọ bụ enyemaka ego. Meghee ezi peeji nke ọ bụla ma lelee tupu i debanye aha. Ọ dịghị asambodo na-ekwe nkwa ọrụ."
          ],
          steps: ["Dee ebumnuche gị: onye nyocha data, ọkà sayensị data, ma ọ bụ iji data n'ọrụ gị ugbu a.", "Meghee ezi peeji nke asambodo ọ bụla.", "Dee ọkwa ya, ngwa ya, ogologo ya na ego ọ na-efu ugbu a.", "Jụọ ụlọ ọrụ enyemaka ọrụ ma ọ bụ ọba akwụkwọ dị nso gị maka ohere n'efu.", "Họrọ otu, ma dee ihe mere i ji họrọ ya."],
          words: [["Asambodo ọkachamara (professional certificate)", "usoro ihe ọmụmụ n'ịntanetị site n'ụlọ ọrụ ma ọ bụ ụlọ akwụkwọ nke na-ejedebe n'asambodo."], ["Ule a na-eleba anya (proctored exam)", "ule onye ọrụ na-ele anya, n'ihu ya ma ọ bụ n'ịntanetị, iji gbochie aghụghọ."], ["Python", "asụsụ mmemme kọmputa a ma ama e ji eme sayensị data."]],
          slides: [
            { title: "Google Data Analytics", bullets: ["Ihe ọmụmụ 9 na Coursera, ọkwa mbido", "Spreadsheet, SQL, Tableau; FAQ kwuru na Python dịkwa", "Ihe dị ka ọnwa 6 n'awa 10 kwa izu (dị ka peeji ya si kwuo)"] },
            { title: "IBM Data Science", bullets: ["Ihe ọmụmụ 12 na Coursera, ọkwa mbido", "Python, SQL, Jupyter, Pandas, Scikit-learn", "Ihe dị ka ọnwa 4 n'awa 10 kwa izu (dị ka peeji ya si kwuo)"] },
            { title: "Microsoft Power BI Data Analyst", bullets: ["Ọkwa etiti: gafee Ule PL-300", "Ịkwado, ịhazi, igosi na ịtụle data na Power BI", "Meghachi ya n'efu kwa ọnwa 12 na Microsoft Learn"] },
            { title: "Tupu i debanye aha", bullets: ["Lelee ezi peeji maka ego na oge", "Jụọ maka ohere n'efu: ọba akwụkwọ, ụlọ ọrụ enyemaka ọrụ, enyemaka ego", "Ọ dịghị asambodo na-ekwe nkwa ọrụ"] }
          ],
          sources: [GOOGLE_DA, IBM_DS, MS_PL300],
          tryIt: "Mee tebụl ntụnyere nwere ahịrị atọ: asambodo, ọkwa, ngwa ndị bụ isi, oge, ego taa (site na ezi peeji). Gbaa okirikiri na nke dabara ebumnuche gị ma dee otu ahịrịokwu na-ekwu ihe mere.",
          youCanNow: "itụnyere asambodo data nke Google, IBM na Microsoft ma họrọ otu dabara ebumnuche gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka inweta asambodo data na-ekwe nkwa ya?", options: ["Ọ dịghị ihe; ọ na-egosi ihe ị mụtara", "Ọrụ e nyere gị", "Mmụba ụgwọ ọnwa", "Nzere mahadum"], answer: 0, why: "Asambodo na-egosi nka; ọ naghị ekwe nkwa ọrụ." },
            { objective: "O2", q: "Enyi gị kwuru na asambodo na-efu ego dị otú a kwa ọnwa. Gịnị ka ị ga-eme tupu i debanye aha?", options: ["Kwere enyi gị", "Jụọ AI ọnụ ahịa ya", "Lelee ego ahụ na ezi peeji mmemme ahụ taa", "Debanye aha ma chọpụta ma emechaa"], answer: 2, why: "Ego na-agbanwe, ya mere ị na-elele ezi peeji n'oge ị na-edebanye aha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime atụmatụ ọmụmụ ị ga-edebe",
          minutes: 5,
          goal: "Mee atụmatụ ọmụmụ kwa izu dabara n'ọrụ na ezinụlọ gị.",
          text: [
            "Ọtụtụ ndị na-anaghị emecha asambodo na-akwụsị n'ihi na ndụ na-ejupụta n'ọrụ, ọ bụghị n'ihi na o siri ike nke ukwuu. Atụmatụ e dere ede, nwere oge a kara aka, na-eme ka imecha dịkwuo mfe.",
            "Bido site n'izu gị n'ezie. Ọ bụrụ na ị na-arụ ọrụ n'oge dị iche iche (shift), họrọ oge ọmụmụ dabara: dịka ọmụmaatụ, oge atọ nke nkeji 45 n'ụbọchị ọrụ na otu oge nke awa 2 na ngwụcha izu. Ọmụmụ mkpụmkpụ a na-eme mgbe niile ka otu ogologo ọmụmụ na ngwụcha izu mma.",
            "Kwa izu, debe otu obere ebumnuche ị nwere ike ịkara na i mere: \"mechaa module 2 na nnwale ya\". Dee ndetu n'okwu nke gị, ma mee lab ọ bụla nke aka: n'ime lab ka a na-ewu nka ahụ. Ngwa enyemaka AI nwere ike ịkọwa echiche na-agbagwoju anya n'okwu dị mfe karị ma ọ bụ jụọ gị ajụjụ, mana mee ọrụ a na-enye akara n'onwe gị ma gbasoo iwu eziokwu nke mmemme ahụ."
          ],
          steps: ["Dee awa gị a kara aka: ọrụ, ezinụlọ, ụra.", "Họrọ oge ọmụmụ 3-5 kwa izu ma tinye ha na kalenda gị.", "Debe otu ebumnuche kwa izu ị nwere ike ịkara na i mere.", "Rịọ enyi gị ma ọ bụ ngwa enyemaka AI ka ọ jụọ gị ajụjụ site na ndetu gị.", "Lelee ya kwa Sọnde ma gbanwee ya."],
          words: [["Oge ọmụmụ (study block)", "oge a kara aka na kalenda gị maka ịmụ ihe."], ["Lab", "omume aka ebe ị na-eme nka na ezi data ma ọ bụ koodu."]],
          slides: [
            { title: "Ihe mere atụmatụ ji dị mkpa", bullets: ["Ndị mmadụ na-akwụsị mgbe ndụ jupụtara n'ọrụ", "Atụmatụ e dere ede nwere oge a kara aka na-enyere gị aka imecha"] },
            { title: "Mee ka ọ dabara n'izu gị", bullets: ["Oge mkpụmkpụ 3-5 ka otu ogologo oge mma", "Ọmụmaatụ: oge atọ nke nkeji 45 n'ụbọchị ọrụ", "Gbakwunyere otu oge awa 2 na ngwụcha izu"] },
            { title: "Kwa izu", bullets: ["Otu obere ebumnuche ị nwere ike ịkara", "Mee lab ọ bụla nke aka", "AI nwere ike ịjụ gị ajụjụ; mee ọrụ akara n'onwe gị"] }
          ],
          tryIt: "Tinye oge ọmụmụ anọ maka izu na-abịa na kalenda ekwentị gị ma ọ bụ nke akwụkwọ. Dee otu ebumnuche kwa izu site n'asambodo ị họọrọ, dịka ọmụmaatụ \"mechaa module mbụ\".",
          youCanNow: "ime atụmatụ ọmụmụ kwa izu nwere oge a kara aka na ebumnuche ị nwere ike ịkara na i mere.",
          quickCheck: [
            { objective: "O3", q: "N'ihe ọmụmụ n'ịntanetị, ebee ka a na-ewu ezi nka ahụ?", options: ["Ikiri vidiyo ngwa ngwa okpukpu abụọ", "Ịgụ mgbasa ozi ihe ọmụmụ ahụ", "Ime lab ndị nke aka", "Ịwụfe gaa n'ule ikpeazụ"], answer: 2, why: "Omume na lab na-ewu nka ndị were mmadụ n'ọrụ chọrọ ịhụ." },
            { objective: "O3", q: "Ị na-arụ ọrụ n'anyasị. Kedu atụmatụ ọmụmụ ị ga-ede?", options: ["Tinye oge ọmụmụ dabara n'oge ọrụ gị na kalenda gị, ya na ebumnuche kwa izu", "Mụọ ihe mgbe ọ bụla i nwere ụbọchị ezumike", "Mụọ ihe awa asatọ n'otu abalị kwa ọnwa", "Chere ruo mgbe oge ọrụ gị gbanwere"], answer: 0, why: "Oge a kara aka na kalenda gị ya na ebumnuche bụ atụmatụ nwere ike ịrụ ọrụ karịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhọrọ asambodo gị na ime atụmatụ imecha ya",
        questions: [
          { objective: "O1", q: "Kedu ajụjụ kacha yie ọrụ onye nyocha data?", options: ["Kedu otu m ga-esi dozie injin ụgbọala?", "Kedu ngwaahịa kacha ree n'ọnwa gara aga?", "Gịnị ka m ga-esi n'abalị a?", "Onye ga-emeri egwuregwu ahụ?"], answer: 1, why: "Ndị nyocha data na-akọwa ihe mere site n'iji data dị adị." },
          { objective: "O2", q: "Kedu asambodo a na-enweta site n'ịgafe Ule PL-300?", options: ["Google Data Analytics Professional Certificate", "IBM Data Science Professional Certificate", "Asambodo ụlọ akwụkwọ sekọndrị", "Microsoft Certified: Power BI Data Analyst Associate"], answer: 3, why: "A na-enweta Power BI Data Analyst Associate nke Microsoft site n'ịgafe PL-300." },
          { objective: "O2", q: "Ebumnuche gị bụ iwu model na-ebu amụma na Python. Isiokwu mmemme ole kacha dabara?", options: ["IBM Data Science Professional Certificate", "Ihe ọmụmụ ịpị mkpụrụedemede", "Akwụkwọ ikike ịnya forklift", "Kaadị onye na-emetụ nri aka"], answer: 0, why: "Mmemme IBM na-akụzi Python, Scikit-learn na model machine learning." },
          { objective: "O2", q: "Ego mmemme bụ $49 kwa ọnwa n'afọ gara aga. Gịnị ka ị ga-eme ugbu a?", options: ["Were ya na ọ ka bụ otu", "Jụọ onye ị na-amaghị n'ịntanetị", "Lelee ezi peeji taa", "Ghara ilele ya"], answer: 2, why: "Ego na-agbanwe; ezi peeji nwere nke ugbu a." },
          { objective: "O3", q: "Kedu atụmatụ ọmụmụ kacha nwee ike ịrụ ọrụ maka onye na-arụ ọrụ shift?", options: ["Mụọ ihe awa 10 otu ugboro kwa ọnwa", "Mụọ ihe naanị mgbe ọ masịrị gị", "Oge atọ nke nkeji 45 n'ụbọchị ọrụ na otu oge na ngwụcha izu", "Wụfee lab iji chekwaa oge"], answer: 2, why: "Oge mkpụmkpụ a na-eme mgbe niile na kalenda gị dị mfe idebe." }
        ]
      }
    },
    {
      name: "Isi 2: Ime omume nka ndị bụ isi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ihicha data",
          minutes: 6,
          goal: "Chọta ma dozie oghere, ahịrị ugboro abụọ na nsogbu ụdị edemede n'obere data.",
          text: [
            "Ezi data adịghị ọcha. Tupu ị tụlee ya, ị na-ehicha ya. Asambodo niile dị n'elu na-ewe oge na nke a, n'ihi na data ezighi ezi na-enye azịza ezighi ezi.",
            "Nsogbu a na-ahụkarị: igbe (cell) tọgbọrọ chakoo, otu ahịrị ugboro abụọ (duplicate), otu ihe e dere n'ụzọ dị iche iche (\"CA\", \"Calif.\", \"California\"), nọmba e chekwara dị ka mkpụrụedemede (text), na ụbọchị e dere n'ụdị dị iche iche.",
            "Na Google Sheets ma ọ bụ Excel, ị nwere ike ịhazi (sort) na ịchọcha (filter) iji chọta nsogbu, jiri Remove duplicates, jiri Find and replace mee ka aha dakọọ, ma gbanwee ụdị kọlụm ka ọ bụrụ nọmba ma ọ bụ ụbọchị. Debe nnomi nke mbụ ma dee mgbanwe ọ bụla i mere, ka ndị ọzọ wee tụkwasị ọrụ gị obi."
          ],
          steps: ["Chekwaa nnomi nke data mbụ.", "Hazie ma chọchaa kọlụm ọ bụla iji hụ oghere na ihe dị iche.", "Wepụ ahịrị ugboro abụọ.", "Mee ka edemede dakọọ site na Find and replace.", "Debe ụdị nọmba na ụbọchị.", "Dee obere ndekọ mgbanwe ọ bụla."],
          words: [["Ihicha data (data cleaning)", "idozi mperi dị na data tupu ị tụlee ya."], ["Duplicate (ahịrị ugboro abụọ)", "ahịrị pụtara karịa otu ugboro."], ["Ndekọ nhicha (cleaning log)", "ndepụta mgbanwe ọ bụla i mere na data."]],
          slides: [
            { title: "Ihe mere a ga-eji buru ụzọ hichaa", bullets: ["Data na-adịghị ọcha na-enye azịza ezighi ezi", "Asambodo data ọ bụla na-akụzi nke a"] },
            { title: "Nsogbu a na-ahụkarị", bullets: ["Igbe tọgbọrọ chakoo na ahịrị ugboro abụọ", "\"CA\", \"Calif.\", \"California\"", "Nọmba dị ka text; ụbọchị n'ụdị dị iche iche"] },
            { title: "Otu esi edozi ha", bullets: ["Hazie ma chọchaa iji chọta nsogbu", "Remove duplicates; Find and replace", "Debe ụdị nọmba na ụbọchị"] },
            { title: "Bụrụ onye a pụrụ ịtụkwasị obi", bullets: ["Debe nnomi nke mbụ", "Dee ndekọ mgbanwe ọ bụla"] }
          ],
          tryIt: "Mee obere tebụl nke ire ahịa 15: Date, Item, Store, Amount. Tinye ahịrị 2 ugboro abụọ, otu Amount tọgbọrọ chakoo na edemede abụọ nke otu ụlọ ahịa. Wee hichaa ya ma dee ndekọ nhicha gị.",
          youCanNow: "ịchọta ma dozie nsogbu data a na-ahụkarị ma debe ndekọ nhicha.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ duplicate na data?", options: ["Igbe tọgbọrọ chakoo", "Ahịrị pụtara karịa otu ugboro", "Chaatị", "Aha kọlụm"], answer: 1, why: "Duplicate na-agụ otu ihe ugboro abụọ ma mee ka mkpokọta ghara iziri ezi." },
            { objective: "O4", q: "Ị na-achọ ihicha tebụl ire ahịa. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Hichapụ ahịrị ndị dị ka ihe dị iche", "Mee chaatị", "Hazie naanị site n'ụbọchị", "Chekwaa nnomi nke mbụ"], answer: 3, why: "Ichekwa nke mbụ na-enye gị ohere ilele ma ọ bụ ịlaghachi azụ na nhicha gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịchịkọta data na ime otu chaatị doro anya",
          minutes: 5,
          goal: "Zaa ajụjụ site na tebụl nchịkọta na otu chaatị.",
          text: [
            "Bido site n'otu ajụjụ doro anya, dị ka \"Kedu ụlọ ahịa kacha ree n'ọnwa gara aga?\" Ezigbo ajụjụ na-ekpebi kọlụm ndị ị chọrọ.",
            "Tebụl nchịkọta na-achịkọta data n'otu n'otu ma gbakọọ mkpokọta ya. Na Sheets ma ọ bụ Excel, pivot table na-eme nke a: tinye Store na rows na sum of Amount na values. Na Python, library Pandas na-eme otu ihe ahụ site na groupby. Ị nwere ike ịnwale Python n'efu na Google Colab, nke yiri ngwa mmemme IBM na-eji.",
            "Wee họrọ chaatị dabara: bar chart iji tụnyere otu dị iche iche, line chart maka mgbanwe n'oge, ma zere pie chart nwere ọtụtụ mpekere. Nye ya aha na-ekwu azịza ya, dị ka \"Eastside rere nke kacha n'ọnwa March\", ma dee aha n'akụkụ abụọ (axes) ya."
          ],
          steps: ["Dee otu ajụjụ.", "Mee pivot table (ma ọ bụ Pandas groupby).", "Họrọ chaatị: bar iji tụnyere, line maka oge.", "Dee aha na-ekwu azịza ya.", "Dee aha n'akụkụ (axes)."],
          words: [["Pivot table", "ngwa spreadsheet na-achịkọta data n'otu n'otu ma gbakọọ mkpokọta."], ["Pandas", "library Python maka iji tebụl data arụ ọrụ."], ["Bar chart", "chaatị na-atụnyere otu dị iche iche site na ogwe dị iche n'ogologo."]],
          slides: [
            { title: "Bido site n'ajụjụ", bullets: ["\"Kedu ụlọ ahịa kacha ree n'ọnwa gara aga?\"", "Ajụjụ ahụ na-ahọrọ kọlụm gị"] },
            { title: "Chịkọta ya", bullets: ["Spreadsheet: pivot table", "Python: Pandas groupby (nwalee ya na Google Colab)", "Rows: Store. Values: sum of Amount"] },
            { title: "Mee chaatị doro anya", bullets: ["Bar iji tụnyere, line maka oge", "Aha na-ekwu azịza ya", "Dee aha n'akụkụ (axes)"] }
          ],
          sources: [COLAB],
          tryIt: "Jiri tebụl i hichara na Nkuzi 4. Mee pivot table nke mkpokọta Amount site na Store, wee mee bar chart nwere aha na-ekwu azịza ya.",
          youCanNow: "ịgbanwe ajụjụ ka ọ bụrụ tebụl nchịkọta na chaatị doro anya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka pivot table na-eme?", options: ["Na-ese map", "Na-ehichapụ duplicate", "Na-edozi edemede", "Na-achịkọta data ma gbakọọ mkpokọta"], answer: 3, why: "Pivot table na-achịkọta ahịrị, dị ka site n'ụlọ ahịa, ma gbakọọ mkpokọta ha." },
            { objective: "O5", q: "Ị chọrọ itụnyere mkpokọta ire ahịa n'ụlọ ahịa 5. Kedu chaatị ị ga-eme?", options: ["Line chart", "Bar chart nwere aha na-ekwu azịza ya", "Pie chart nwere mpekere 50", "Ọ dịghị chaatị"], answer: 1, why: "Bar chart na-atụnyere otu dị iche iche, aha na-ekwu azịza ya na-emekwa ka o doo anya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọ akụkọ data na iwu ọrụ pọtfoliyo",
          minutes: 5,
          goal: "Dee obere nchọpụta ma hazie ọrụ gị dị ka ọrụ pọtfoliyo.",
          text: [
            "Ndị were mmadụ n'ọrụ chọrọ ịhụ na ị nwere ike ịkọwa data, ọ bụghị naanị ime chaatị. Ezigbo nchọpụta bụ ahịrịokwu atọ: ihe ị chọpụtara, ihe mere o ji dị mkpa, na otu oke data ahụ nwere. Ọmụmaatụ: \"Eastside rere 40% nke ire ahịa March. O nwere ike ịchọ ndị ọrụ ọzọ na Satọde. Data ahụ gụnyere naanị otu ọnwa.\"",
            "Ọtụtụ n'ime asambodo ndị a na-ejedebe n'ọrụ capstone ma ọ bụ ọrụ pọtfoliyo. Ị nwere ike ịmalite otu ugbu a: aha, ajụjụ, ebe data ahụ si, ndekọ nhicha gị, chaatị na nchọpụta gị. Jiri data ọha n'efu, dị ka saịtị data ọha nke obodo, ma ọ bụ tebụl omume gị. Ejila data nzuzo nke ndị ahịa ma ọ bụ nke ụlọ ọrụ mgbe ọ bụla n'enweghị ikike.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ilele ma ihe i dere doro anya, mana hụ na nọmba ọ bụla dị na nchọpụta gị si na tebụl nke gị."
          ],
          steps: ["Dee nchọpụta gị n'ahịrịokwu atọ: nsonaazụ, ihe mere o ji dị mkpa, otu oke.", "Chịkọta aha, ajụjụ, ebe data si, ndekọ nhicha, chaatị.", "Lelee nọmba ọ bụla megide tebụl gị.", "Chekwaa ya n'otu ebe ị nwere ike ikesa, dị ka folda Google Drive ma ọ bụ GitHub."],
          words: [["Capstone", "ọrụ ikpeazụ na njedebe mmemme."], ["Pọtfoliyo (portfolio)", "nchịkọta ọrụ gị nke ị na-egosi ndị were mmadụ n'ọrụ."], ["Oke (limitation)", "ihe gbasara data nke pụtara na azịza ahụ nwere ike ọ gaghị ezu oke."]],
          slides: [
            { title: "Nchọpụta nwere ahịrịokwu atọ", bullets: ["Ihe ị chọpụtara", "Ihe mere o ji dị mkpa", "Otu oke data ahụ nwere"] },
            { title: "Ọrụ pọtfoliyo gị", bullets: ["Aha, ajụjụ na ebe data si", "Ndekọ nhicha, chaatị na nchọpụta", "Naanị data ọha ma ọ bụ data omume"] },
            { title: "Tupu i kesaa ya", bullets: ["Lelee nọmba ọ bụla megide tebụl gị", "AI nwere ike ilele ma o doro anya, ọ bụghị eziokwu gị", "Chekwaa ya ebe ị nwere ike ikesa njikọ (link)"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa obere ọrụ pọtfoliyo gị. Ajụjụ, data a hichara, ndekọ nhicha, tebụl nchịkọta, otu chaatị na nchọpụta nwere ahịrịokwu atọ ya na otu oke. Chekwaa ya ya na aha na obere nkọwa.",
          youCanNow: "imecha ma kọwaa obere ọrụ data dị ka nke asambodo data na-arịọ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere i ji tinye otu oke na nchọpụta gị?", options: ["Ọ na-egosi eziokwu banyere ihe data ahụ nwere ike na enweghị ike ikwu", "Ọ na-eme ka nchọpụta ahụ dị ogologo", "Iwu chọrọ ya", "Ọ na-ezo mperi"], answer: 0, why: "Ikwu otu oke, dị ka na ọ gụnyere naanị otu ọnwa, na-eme ka ndị mmadụ tụkwasị ọrụ gị obi." },
            { objective: "O6", q: "Ị chọrọ iji ndepụta ndị ahịa onye were gị n'ọrụ na pọtfoliyo ọha gị. Gịnị ka ị ga-eme?", options: ["Tinye ya otu o si dị", "Wepụ naanị aha ha", "Jiri data ọha ma ọ bụ data ọmụmaatụ kama, ọ gwụla ma i nwere ikike", "Tinye ya ma jụọ ma emechaa"], answer: 2, why: "Data nzuzo ndị ahịa anaghị aba na pọtfoliyo ọha n'enweghị ikike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime omume nka ndị bụ isi",
        questions: [
          { objective: "O4", q: "Data gị nwere \"CA\", \"Calif.\" na \"California\". Gịnị ka ị ga-eme?", options: ["Mee ka ha dakọọ site na Find and replace", "Hapụ ya", "Hichapụ kọlụm ahụ", "Chepụta mkpokọta"], answer: 0, why: "Ime ka edemede dakọọ na-egbochi ịgụ otu ebe dị ka ebe atọ." },
          { objective: "O4", q: "Gịnị mere i ji debe ndekọ nhicha?", options: ["Ọ baghị uru", "Iji mee ka faịlụ ahụ buo ibu", "N'ihi na chaatị chọrọ ya", "Ka ndị ọzọ tụkwasị obi ma megharịa mgbanwe gị"], answer: 3, why: "Ndekọ na-egosi kpọmkwem ihe i gbanwere." },
          { objective: "O5", q: "Kedu ngwa na-achịkọta data ma gbakọọ mkpokọta na spreadsheet?", options: ["Spell check", "Pivot table", "Print preview", "Comments"], answer: 1, why: "Pivot table na-achịkọta ma na-ewepụta nchịkọta." },
          { objective: "O5", q: "Ị chọrọ igosi ka ire ahịa si gbanwee n'ime ọnwa 12. Kedu chaatị?", options: ["Line chart", "Pie chart", "Ọ dịghị chaatị", "Foto"], answer: 0, why: "Line chart na-egosi mgbanwe n'oge." },
          { objective: "O6", q: "Kedu nke bụ ezigbo nchọpụta nwere ahịrịokwu atọ?", options: ["\"Lee chaatị.\"", "\"Data na-atọ ụtọ.\"", "\"Eastside rere nke kacha n'ọnwa March. O nwere ike ịchọ ndị ọrụ ọzọ na Satọde. Data gụnyere otu ọnwa.\"", "\"Eji m Excel.\""], answer: 2, why: "Ọ na-enye nsonaazụ, ihe mere o ji dị mkpa na otu oke." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkwado maka Asambodo Ọkachamara na Sayensị Data",
    questions: [
      { objective: "O1", q: "Kedu nzọụkwụ mbụ a na-emekarị n'usoro ọrụ data?", options: ["Mee chaatị", "Jụọ ajụjụ", "Zụta software", "Kesaa nsonaazụ"], answer: 1, why: "Ajụjụ doro anya na-eduzi ihe niile na-esote." },
      { objective: "O1", q: "Ọkà sayensị data, karịa onye nyocha data, na-emekarị:", options: ["Naanị iji akwụkwọ", "Naanị ịpị data", "Anaghị eji data mgbe ọ bụla", "Iwu model na-ebu amụma"], answer: 3, why: "Ndị ọkà sayensị data na-ewu model na-ebu amụma, na-ejikarị Python." },
      { objective: "O1", q: "Gịnị ka e ji SQL eme?", options: ["Ise foto", "Idezi vidiyo", "Iziga email", "Iwepụta data site na database"], answer: 3, why: "SQL bụ asụsụ e ji ajụ database ajụjụ." },
      { objective: "O2", q: "A na-enye Google Data Analytics Professional Certificate na:", options: ["Naanị Microsoft Learn", "Coursera", "Ọfịs DMV", "Ụlọ ahịa app ekwentị"], answer: 1, why: "Ezi peeji ya dị na Coursera." },
      { objective: "O2", q: "Dị ka peeji ya si kwuo, ihe ọmụmụ ole dị na IBM Data Science Professional Certificate?", options: ["3", "9", "12", "20"], answer: 2, why: "Peeji IBM na Coursera depụtara usoro ihe ọmụmụ 12." },
      { objective: "O2", q: "Kedu ngwa asambodo Microsoft ahụ gbadoro ụkwụ na ya?", options: ["Power BI", "Photoshop", "Word", "Tableau"], answer: 0, why: "Ọ bụ Power BI Data Analyst Associate." },
      { objective: "O2", q: "Gịnị ka inweta asambodo data na-ekwe nkwa ya?", options: ["Ọrụ", "Mmụba ụgwọ ọnwa", "Ọ dịghị ihe; ọ na-egosi ihe ị mụtara", "Nzere mahadum"], answer: 2, why: "Asambodo na-egosi ihe ị mụtara; ọ naghị ekwe nkwa nsonaazụ." },
      { objective: "O2", q: "Tupu i debanye aha, ị kwesịrị ilele ego ya na:", options: ["Ezi peeji mmemme ahụ", "Mgbasa ozi na soshal midia", "Ndetu afọ gara aga", "Ncheta AI"], answer: 0, why: "Ezi peeji nwere ego na ihe dị n'ime ya ugbu a." },
      { objective: "O3", q: "Kedu atụmatụ kacha mma maka imecha asambodo?", options: ["Mụọ ihe mgbe ọ bụla oge dị", "Tinye oge ọmụmụ na kalenda gị ya na ebumnuche kwa izu", "Wụfee lab", "Mụọ ihe otu ụbọchị kwa ọnwa"], answer: 1, why: "Oge a kara aka a na-eme mgbe niile ya na ebumnuche na-enyere gị aka imecha." },
      { objective: "O3", q: "Mgbe ị na-eji ngwa enyemaka AI n'oge asambodo, ị kwesịrị:", options: ["Ime ka o mee ọrụ a na-enye akara", "Ịzere ya kpamkpam, mgbe niile", "Itinye ule gị n'ime ya", "Iji ya kọwaa echiche ma jụọ gị ajụjụ, ma gbasoo iwu eziokwu"], answer: 3, why: "AI nwere ike inyere gị aka ịmụ ihe, mana ọrụ a na-enye akara ga-abụ nke gị." },
      { objective: "O3", q: "N'ihe ọmụmụ n'ịntanetị, ebee ka a na-ewu ezi nka ahụ?", options: ["Ime lab ndị nke aka", "Naanị ikiri vidiyo", "Ịgụ aha ya", "Ịwụfe nnwale"], answer: 0, why: "Lab bụ omume aka." },
      { objective: "O4", q: "Gịnị bụ duplicate na data?", options: ["Igbe tọgbọrọ chakoo", "Aha kọlụm", "Chaatị", "Ahịrị pụtara karịa otu ugboro"], answer: 3, why: "Duplicate bụ ahịrị a megharịrị." },
      { objective: "O4", q: "Tupu ị hichaa data, ị kwesịrị:", options: ["Ihichapụ nke mbụ", "Ime chaatị", "Ichekwa nnomi nke mbụ", "Iziga ya onye ọ bụla email"], answer: 2, why: "Nnomi na-enye gị ohere ịmalitegharị ma ọ bụ ilele ọrụ gị." },
      { objective: "O4", q: "Nọmba e chekwara dị ka text nwere ike ịkpata:", options: ["Ọrụ ngwa ngwa", "Mkpokọta ezighi ezi", "Chaatị ka mma", "Ọ dịghị ihe"], answer: 1, why: "Nọmba dị ka text nwere ike ọ gaghị agbakọ nke ọma." },
      { objective: "O4", q: "Na Python, kedu library na-arụ ọrụ na tebụl dị ka spreadsheet?", options: ["Outlook", "Paint", "Zoom", "Pandas"], answer: 3, why: "Pandas bụ maka iji tebụl data arụ ọrụ." },
      { objective: "O5", q: "Kedu ngwa n'efu na-ekwe ka ị gbaa Python na web browser?", options: ["Igwe mgbakọ", "Notepad", "Google Colab", "Paint"], answer: 2, why: "Google Colab na-agba notebook Python n'ịntanetị." },
      { objective: "O5", q: "Iji tụnyere ire ahịa n'ụlọ ahịa 5, chaatị kacha mma na-abụkarị:", options: ["Bar chart", "Pie nwere mpekere 20", "Map", "Ọ dịghị chaatị"], answer: 0, why: "Bar chart na-atụnyere otu dị iche iche nke ọma." },
      { objective: "O5", q: "Ezigbo aha chaatị:", options: ["\"Chaatị 1\"", "Na-ekwu azịza ya, dị ka \"Eastside rere nke kacha n'ọnwa March\"", "A hapụrụ ya oghere", "Dị ogologo nke ukwuu"], answer: 1, why: "Aha na-ekwu azịza ya na-enyere ndị na-agụ ya aka." },
      { objective: "O6", q: "Kedu data ị na-ekwesịghị iji na pọtfoliyo ọha?", options: ["Data ọha nke obodo", "Data nzuzo ndị ahịa n'enweghị ikike", "Tebụl omume gị", "Data ọha n'efu"], answer: 1, why: "Data nzuzo chọrọ ikike, a na-ekwesịghịkwa ikesa ya." },
      { objective: "O6", q: "Nchọpụta gị kwesịrị inwe otu oke n'ihi na:", options: ["Ọ na-egosi eziokwu banyere ihe data ahụ nwere ike na enweghị ike ikwu", "Ọ na-eme ka ọ dị ogologo", "Ndị were mmadụ n'ọrụ anaghị achọ ya", "Iwu chọrọ ya"], answer: 0, why: "Ikwu otu oke na-egosi nyocha a kpachara anya mee nke a pụrụ ịtụkwasị obi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      6,
      8,
      10,
      11,
      12,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ajụjụ doro anya",
        objective: "O1",
        notYet: "Ọ dịghị ajụjụ, ma ọ bụ ajụjụ data ahụ enweghị ike ịza.",
        meets: "Otu ajụjụ doro anya data ahụ nwere ike ịza.",
        exceeds: "Ajụjụ ahụ dị mkpa n'ezi ebe ọrụ, ọ na-ekwukwa ihe mere."
      },
      {
        name: "Data a hichara na ndekọ",
        objective: "O4",
        notYet: "Oghere, duplicate ma ọ bụ nsogbu ụdị edemede ka dị, ma ọ bụ enweghị ndekọ.",
        meets: "E doziri oghere, duplicate na ụdị edemede, ya na ndekọ nhicha, e chekwakwara nke mbụ.",
        exceeds: "Ndekọ ahụ na-ekwu ahịrị ole mgbanwe ọ bụla metụtara."
      },
      {
        name: "Nchịkọta na chaatị",
        objective: "O5",
        notYet: "Enweghị tebụl nchịkọta, ma ọ bụ chaatị anaghị aza ajụjụ ahụ.",
        meets: "Tebụl nchịkọta na otu chaatị nke ụdị ziri ezi nwere aha na-ekwu azịza ya.",
        exceeds: "E dere aha n'akụkụ (axes), chaatị ahụ dịkwa mfe ịghọta ozugbo a hụrụ ya."
      },
      {
        name: "Nchọpụta na oke",
        objective: "O6",
        notYet: "Enweghị nchọpụta, ma ọ bụ ekwughị oke ọ bụla.",
        meets: "Nchọpụta nwere ahịrịokwu atọ ya na otu oke data ahụ nwere.",
        exceeds: "Nchọpụta ahụ na-atụ aro nzọụkwụ ọzọ bara uru."
      },
      {
        name: "Njikere maka pọtfoliyo",
        objective: "O6",
        notYet: "E chekwaghị ya, ma ọ bụ o nwere data nzuzo.",
        meets: "E chekwara ya na Google Sheets, Excel ma ọ bụ Google Colab ya na obere aha na nkọwa, na-enweghị data nzuzo.",
        exceeds: "E kesara ya dị ka njikọ (link) onye na-amụ ihe nwere ike itinye na résumé ma ọ bụ profaịlụ ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha n'asambodo data n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe mechara asambodo data n'ime ọnwa 6",
      "Ndị na-amụ ihe jiri ọrụ pọtfoliyo ha n'arịrịọ ọrụ ma ọ bụ nweta ọrụ metụtara data"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Spreadsheet n'efu (Google Sheets ma ọ bụ Microsoft Excel n'ịntanetị), ma ọ bụrụ na ị chọrọ, Google Colab",
      "Data ọha n'efu, ma ọ bụ tebụl ire ahịa ọmụmaatụ site na Nkuzi 4",
      "Kalenda ekwentị ma ọ bụ nke akwụkwọ maka atụmatụ ọmụmụ",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge omume aka maka ọrụ ahụ"
    ],
    facilitatorNotes: [
      "Kwadebe tebụl ire ahịa ọmụmaatụ nwere nsogbu e tinyere n'ime ya ka onye ọ bụla na-amụ ihe nwee ike ihicha otu data ahụ.",
      "Mee ka ndị na-amụ ihe lelee ego asambodo na ezi peeji n'oge klaasị kama iji nọmba ochie.",
      "Gosi otu pivot table na otu chaatị nzọụkwụ n'otu nzọụkwụ tupu ndị na-amụ ihe emee nke ha.",
      "Chetara ndị na-amụ ihe ka ha jiri naanị data ọha ma ọ bụ data ọmụmaatụ na pọtfoliyo.",
      "Jiri rubric tụọ akara ọrụ pọtfoliyo ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
