"use strict";

// Koach Learn course (Igbo translation of shared/ai-community-advocacy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-community-advocacy-ig",
  lang: "ig",
  translationOf: "ai-community-advocacy",
  category: "Non Profits",
  name: "AI maka Ịkwado Mkpa Obodo",
  skills: "Ịkọwa nsogbu na arịrịọ doro anya, Ịchọ eziokwu na ịlele isi iyi, Ịchọta onye na-eme mkpebi, Iji AI dee akwụkwọ ozi ma ọ bụ nkwupụta ọha, Ime mpempe akwụkwọ eziokwu otu peeji, Ikwu okwu nkeji abụọ n'ihu ọha",
  outcome: "iji enyemaka AI hazie obere mgbasa ozi ịkwado maka otu nsogbu obodo: ịkọwa arịrịọ doro anya, iji eziokwu e lelere na ezi akụkọ kwado ya, iji akwụkwọ ozi ma ọ bụ nkwupụta ọha na mpempe akwụkwọ eziokwu otu peeji ruo onye kwesịrị ime mkpebi, na ikwu okwu nkeji abụọ n'ihu ọha, ma na-agbaso iwu maka nzukọ na-anaghị achọ uru (nonprofit).",
  about: [
    "Ịkwado (advocacy) pụtara ikwu okwu iji gbanwee ihe: ebe ngafe ụzọ dị ize ndụ, ụzọ bọs e wepụrụ, ogige na-achọ ọkụ, ma ọ bụ iwu na-egbochi ndị mmadụ inweta ọrụ ma ọ bụ ebe obibi. Obodo na-ekwu okwu nke ọma na eziokwu na-enwekarị ndị na-ege ha ntị.",
    "Ihe ọmụmụ a bụ maka ndị ọrụ na ndị ọrụ afọ ofufo nke nzukọ nonprofit, otu okpukpe na otu agbata obi, na ndị obodo chọrọ ime mgbanwe. Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot na Google Gemini nwere ike inyere aka ịchọ ihe, ide akwụkwọ ozi, ime mpempe akwụkwọ eziokwu na ịmụ okwu, ma olu obodo gị na ezi akụkọ ha ka bụ isi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechi ihe ọmụmụ ahụ. Ịkwado ebe a bụ maka nsogbu, ọ bụghị maka ndị na-azọ ọkwa; nzukọ nonprofit nwere iwu pụrụ iche, nke Nkuzi 6 kọwara."
  ],
  finalTask: "Mee ngwugwu ịkwado maka otu ezi nsogbu obodo: nsogbu n'otu ahịrịokwu na arịrịọ doro anya, eziokwu atọ nwere ezi isi iyi, obere akụkọ obodo abụọ e kesara site n'ikike, aha onye na-eme mkpebi na otu esi eru ya aka, akwụkwọ ozi ma ọ bụ nkwupụta ọha nke na-erughị okwu 300, mpempe akwụkwọ eziokwu otu peeji, na okwu nkeji abụọ ị mụrụ n'olu dị elu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ na ndị ọrụ afọ ofufo nke nzukọ nonprofit, otu okpukpe na otu agbata obi, na ndị obodo chọrọ ịgbanwe nsogbu obodo dị ka ebe ngafe ụzọ dị ize ndụ, ụzọ bọs e wepụrụ ma ọ bụ iwu na-egbochi ndị mmadụ inweta ọrụ ma ọ bụ ebe obibi.",
    startingPoint: "Ha na-eche maka otu nsogbu obodo ma nwee ike ikwu banyere ya na ndị agbata obi. Ọtụtụ edebeghị nkwupụta ọha, achọtabeghị onye kwesịrị ime mkpebi, eleleghị eziokwu na ezi isi iyi gọọmentị, ma ọ bụ kwuo okwu na nzukọ ọha.",
    gap: "Obodo na-ekwu okwu nwere arịrịọ doro anya, eziokwu e lelere na ezi akụkọ na-enwekarị ndị na-ege ha ntị. Ndị na-amụ ihe kwesịrị iji enyemaka AI hazie obere mgbasa ozi ma debe olu obodo ha n'etiti ma gbasoo iwu maka nzukọ nonprofit, ka mgbalị ha weta ezi mgbanwe.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu na ngwa nhazi ma ọ bụ akwụkwọ n'efu",
      "A na-ekesa akụkọ naanị site n'ikike, ozi nzuzo anaghị abanye na prompt AI",
      "Iwu nzukọ nonprofit: naanị ịkwado maka nsogbu, enweghị nkwado maka onye na-azọ ọkwa; ndị na-amụ ihe na-elele ntuziaka IRS",
      "Oge: nkuzi ihe dị ka nkeji ise, gbakwunyere oge ịchọ ihe na ịmụ okwu"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa AI nwere ike ibu ụzọ were \"Mmalite AI na Obi Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu nchegbu obodo", action: "ide nsogbu n'otu ahịrịokwu na arịrịọ doro anya nke na-ekwu gịnị, site n'aka onye na mgbe ole", standard: "nke opekata mpe mmadụ abụọ ọ metụtara nyere aka hazie" },
    { id: "O2", condition: "Maka nsogbu gị", action: "ịchọta eziokwu site n'ezi isi iyi gọọmentị ma ọ bụ isi iyi a tụkwasịrị obi ma chịkọta akụkọ obodo", standard: "ya na eziokwu atọ, nke ọ bụla nwere isi iyi, njikọ na ụbọchị, na akụkọ e kesara naanị site n'ikike" },
    { id: "O3", condition: "Site n'iji weebụsaịtị gọọmentị", action: "ịchọpụta onye na-eme mkpebi, nzukọ na-esote ma ọ bụ oge njedebe nkwupụta, ndị enyi gị na ndị nwere ike imegide gị", standard: "ma kwenye onye na-eme mkpebi n'ezi isi iyi" },
    { id: "O4", condition: "Site n'iji eziokwu ị lelere na otu akụkọ", action: "ide akwụkwọ ozi ma ọ bụ nkwupụta ọha nwere nkwanye ugwu nke na-ekwu arịrịọ gị", standard: "n'okwu na-erughị 300, ya na onye ị bụ, eziokwu, akụkọ na arịrịọ" },
    { id: "O5", condition: "Site n'iji AI maka ederede na ngwa nhazi n'efu", action: "ime mpempe akwụkwọ eziokwu otu peeji nke arịrịọ ya dị n'igbe doro anya", standard: "nke mere na onye gụrụ ya nwere ike ịgwa gị arịrịọ ahụ mgbe otu nkeji gasịrị" },
    { id: "O6", condition: "Na nzukọ ọha", action: "ikwu okwu nkeji abụọ ma hazie ihe ndị na-akwado gị ga-eme n'ime iwu ịkwado nke nzukọ nonprofit", standard: "n'ime nkeji abụọ ma ọ bụ na-erughị ya, n'akwadoghị onye na-azọ ọkwa ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwadebe ihe ị ga-ekwu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịkọwa nsogbu ahụ na arịrịọ gị",
          minutes: 5,
          goal: "Gbanwee nchegbu obodo ka ọ bụrụ nsogbu doro anya na arịrịọ a kapịrị ọnụ.",
          text: [
            "Nchegbu buru ibu dị ka \"agbata obi anyị adịghị mma\" na-esiri ndị ọchịchị ike ime ihe. Mee ka ọ bụrụ otu nsogbu a kapịrị ọnụ: \"Ụmụaka na-agafe okporo ụzọ isii na Main Street na 5th Avenue iji ruo ụlọ akwụkwọ, ma enweghị ọkụ ngafe ụzọ.\"",
            "Mgbe ahụ, mee arịrịọ a kapịrị ọnụ: kpọmkwem ihe ị chọrọ, site n'aka onye, na mgbe ole. \"Anyị na-arịọ Ngalaba Njem nke Obodo ka ha tinye ọkụ ngafe ụzọ na Main na 5th tupu afọ akwụkwọ na-esote.\" Arịrịọ doro anya na-enye ndị na-eme mkpebi ihe ha ga-ekwe.",
            "Rịọ AI ka o mee ka ọ doo anya karịa: \"Nyere m aka gbanwee nchegbu a ka ọ bụrụ nsogbu n'otu ahịrịokwu na arịrịọ a kapịrị ọnụ nke a ga-emeli: [nchegbu gị].\" Mgbe ahụ, gosi ya ndị ọ kacha metụta. Ịkwado na-arụ ọrụ nke ọma mgbe obodo n'onwe ya hazie arịrịọ ahụ."
          ],
          steps: ["Dee nchegbu ahụ n'okwu nke gị.", "Mee ka ọ bụrụ otu nsogbu, otu ebe na otu otu ndị ọ metụtara.", "Dee arịrịọ: gịnị, onye na-ekpebi, mgbe ole.", "Rịọ AI ka o mee ka okwu ahụ doo anya karịa.", "Gosi ya ndị ọ kacha metụta."],
          words: [["Ịkwado (Advocacy)", "ikwu okwu iji gbanwee iwu, omume ma ọ bụ mkpebi."], ["Arịrịọ (Ask)", "kpọmkwem ihe ị chọrọ ka onye na-eme mkpebi mee."], ["Nkọwa nsogbu", "otu ahịrịokwu ma ọ bụ abụọ na-akọwa nsogbu ahụ nke ọma."]],
          slides: [
            { title: "Site na nchegbu ruo na nsogbu", bullets: ["\"Adịghị mma\" sara mbara nke ukwuu", "Kpọọ aha ebe ahụ, ndị ahụ, nsogbu ahụ"] },
            { title: "Arịrịọ a kapịrị ọnụ", bullets: ["Kpọmkwem gịnị", "Site n'aka onye", "Mgbe ole"] },
            { title: "Obodo na-ebu ụzọ", bullets: ["AI na-eme ka okwu doo anya", "Ndị ọ metụtara na-ahazi arịrịọ ahụ"] }
          ],
          tryIt: "Họrọ otu ezi nchegbu obodo. Dee nsogbu n'otu ahịrịokwu na arịrịọ a kapịrị ọnụ, jiri AI mee ka ha doo anya karịa, ma gosi ha mmadụ abụọ ọ metụtara.",
          youCanNow: "ịgbanwe nchegbu ka ọ bụrụ nkọwa nsogbu doro anya na arịrịọ a kapịrị ọnụ.",
          quickCheck: [
            { objective: "O1", q: "Ihe atọ dị aṅaa ka arịrịọ siri ike nwere?", options: ["Aha gị, afọ gị na adreesị gị", "Gịnị, site n'aka onye na mgbe ole", "Okwu ngosi, akara na agba", "Mkpesa, iyi egwu na oge njedebe"], answer: 1, why: "Arịrịọ siri ike na-akpọ aha ihe a ga-eme, onye na-eme mkpebi na oge njedebe." },
            { objective: "O1", q: "Nchegbu otu gị bụ \"agbata obi anyị adịghị mma.\" Gịnị ka ị ga-ebu ụzọ mee?", options: ["Mee ka ọ bụrụ otu nsogbu ndị ọchịchị nwere ike idozi", "Ziga ya onye ọchịchị ọ bụla na steeti ahụ", "Tinye ya n'ịntanetị n'agbanweghị ya", "Chere ka ihe ka njọ"], answer: 0, why: "Nsogbu a kapịrị ọnụ na-eduga n'omume ndị ọchịchị nwere ike ime." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọ eziokwu na ịlele isi iyi",
          minutes: 6,
          goal: "Chọta eziokwu na-akwado ihe ị na-ekwu ma lelee nke ọ bụla n'ezi isi iyi ma ọ bụ isi iyi a tụkwasịrị obi.",
          text: [
            "Eziokwu na-eme ka ndị ọchịchị gee ntị. Isi iyi bara uru: weebụsaịtị obodo na county, ndekọ nzukọ na mmefu ego, ụlọ ọrụ steeti, U.S. Census Bureau (data.census.gov) maka ọnụ ọgụgụ ndị mmadụ na ego ha na-enweta, data ndị uwe ojii ma ọ bụ njem, akụkọ obodo, na nchọpụta mahadum ma ọ bụ nzukọ nonprofit.",
            "AI nwere ike ịtụ aro ebe ị ga-ele na ihe ị ga-achọ: \"Ụdị data ọha dị aṅaa ga-egosi nsogbu nchekwa ndị na-aga ụkwụ n'okporo ụzọ na obodo US, ebee ka m ga-ahụ ha?\" Ma AI nwere ike ịmepụta ọnụ ọgụgụ na nchọpụta na-adịghị adị. Ejila nọmba si n'AI ma ọ bụrụ na ị hụghị ya n'onwe gị n'isi iyi mbụ ya.",
            "Chịkọta eziokwu atọ siri ike, nke ọ bụla nwere aha isi iyi, njikọ na ụbọchị. Tinye ezi akụkọ: nne ma ọ bụ nna, nwa akwụkwọ, onye na-eduzi ngafe ụzọ. Rịọ ikike mgbe niile tupu i kesaa akụkọ mmadụ, ma hapụ ozi nzuzo ha na-achọghị ka ọha mara."
          ],
          steps: ["Jụọ AI ebe ị ga-ahụ data gbasara nsogbu gị.", "Gaa n'isi iyi ndị ahụ n'onwe gị.", "Dee eziokwu atọ ya na isi iyi, njikọ na ụbọchị.", "Ejila nọmba ị na-enweghị ike ịhụ n'isi iyi mbụ ya.", "Chịkọta akụkọ abụọ site n'ikike."],
          words: [["Isi iyi (Source)", "ebe eziokwu si bịa."], ["Isi iyi mbụ (Primary source)", "ebe mbụ e bipụtara data ma ọ bụ ozi ahụ."], ["Ndekọ nzukọ (Meeting minutes)", "ezi ndekọ e dere ede nke nzukọ ọha."]],
          slides: [
            { title: "Ebe eziokwu dị", bullets: ["Weebụsaịtị obodo, county na steeti", "Data Census na akụkọ ụlọ ọrụ", "Akụkọ obodo na nchọpụta"] },
            { title: "AI na-egosi ụzọ, gị na-elele", bullets: ["AI nwere ike ịmepụta ọnụ ọgụgụ", "Chọta nọmba ọ bụla n'isi iyi mbụ ya", "Dee isi iyi, njikọ na ụbọchị"] },
            { title: "Eziokwu gbakwunyere akụkọ", bullets: ["Ihe ndị mmadụ n'ezie hụrụ", "Rịọ ikike mgbe niile", "Hapụ ozi nzuzo"] }
          ],
          sources: [{ name: "U.S. Census Bureau: data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Chọta eziokwu atọ gbasara nsogbu gị site n'ezi isi iyi ma ọ bụ isi iyi a tụkwasịrị obi, ya na njikọ na ụbọchị nke ọ bụla. Jụọ mmadụ abụọ ma ị nwere ike ikesa akụkọ ha.",
          youCanNow: "ịchọ eziokwu e lelere ma chịkọta akụkọ obodo site n'ikike.",
          quickCheck: [
            { objective: "O2", q: "Kedu isi iyi a tụkwasịrị obi maka eziokwu gbasara obodo gị?", options: ["Ihe mmadụ ọ bụla tinyere na soshal midia", "Azịza AI na-enweghị njikọ", "Weebụsaịtị ma ọ bụ akụkọ gọọmentị obodo n'onwe ya", "Asịrị si n'ọnụ onye agbata obi"], answer: 2, why: "Ezi isi iyi gọọmentị bụ ebe a ga-elele ma kpọọ aha eziokwu." },
            { objective: "O2", q: "Onye agbata obi gwara gị akụkọ siri ike gbasara otu o si merụọ ahụ n'ebe ngafe ụzọ. Gịnị ka ị ga-eme tupu i jiri ya?", options: ["Jiri ya ya na aha ya zuru ezu na adreesị ya", "Gbanwee ihe ndị dị n'ime ya ma jiri ya", "Buru ụzọ tinye ya n'ịntanetị", "Rịọ ya ikike ma jụọ otu ọ chọrọ ka a kpọọ ya"], answer: 3, why: "A na-ekesa akụkọ naanị site n'ikike onye nwe ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọta onye na-eme mkpebi na oge kwesịrị ekwesị",
          minutes: 5,
          goal: "Chọpụta onye nwere ike ikwe arịrịọ gị na mgbe ọ ga-ekpebi.",
          text: [
            "Ịkwado na-ada mgbe ọ gakwuru onye na-ezighi ezi. Chọpụta onye nwere ike ikwe: onye otu kansụl obodo, bọọdụ county, bọọdụ ụlọ akwụkwọ, onye omebe iwu steeti, onye isi ngalaba ma ọ bụ onye njikwa ụlọ ọrụ.",
            "Jụọ AI: \"N'obodo US nkịtị, onye na-ekpebi ma a ga-etinye ọkụ ngafe ụzọ ọhụrụ, olee usoro ọ na-agbaso?\" Mgbe ahụ, kwenye ya na weebụsaịtị obodo gị ma ọ bụ kpọọ ọfịs ahụ. Mụta kalenda: mgbe a na-edozi mmefu ego, mgbe kansụl ma ọ bụ bọọdụ na-ezukọ, na mgbe nkwupụta ọha ghere oghe.",
            "Depụta ndị enyi gị (ndị agbata obi, ụlọ akwụkwọ, ụka, azụmahịa, nzukọ nonprofit ndị ọzọ) na onye ọ bụla nwere ike imegide gị, na ihe kpatara ya. Ndị enyi na-eme ka ị sie ike; ịghọta ndị na-emegide gị na-enyere gị aka ịza nchegbu ha."
          ],
          steps: ["Jụọ AI onye na-ekpebikarị maka nsogbu gị.", "Kwenye ya na weebụsaịtị gọọmentị obodo gị ma ọ bụ site n'ekwentị.", "Chọta ụbọchị nzukọ, oge mmefu ego na oge nkwupụta ọha.", "Depụta ndị enyi na ndị nwere ike imegide gị.", "Họrọ oge ị ga-eme ihe."],
          words: [["Onye na-eme mkpebi", "onye ma ọ bụ otu nwere ike ikwe arịrịọ gị."], ["Nkwupụta ọha (Public comment)", "ohere ọha nwere ikwu okwu ma ọ bụ ide ihe nye ndị ọchịchị tupu mkpebi."], ["Onye enyi (Ally)", "onye ma ọ bụ otu na-akwado ihe ị na-alụ ọgụ maka ya."]],
          slides: [
            { title: "Onye nwere ike ikwe?", bullets: ["Kansụl, bọọdụ, onye omebe iwu, onye isi ngalaba", "Kwenye ya na weebụsaịtị gọọmentị"] },
            { title: "Mara kalenda", bullets: ["Ụbọchị nzukọ", "Oge mmefu ego", "Oge nkwupụta ọha"] },
            { title: "Depụta ndị nọ n'ọgbọ", bullets: ["Ndị enyi: ndị agbata obi, ụlọ akwụkwọ, ụka, azụmahịa", "Ndị na-emegide na ihe kpatara ya"] }
          ],
          tryIt: "Chọta onye na-eme mkpebi maka nsogbu gị na nzukọ ya na-esote ma ọ bụ oge njedebe nkwupụta na weebụsaịtị gọọmentị. Depụta ndị enyi atọ na otu nchegbu ndị na-emegide gị nwere ike inwe.",
          youCanNow: "ịchọta onye kwesịrị ime mkpebi, oge kwesịrị ekwesị na ndị enyi maka arịrịọ ịkwado.",
          quickCheck: [
            { objective: "O3", q: "Onye bụ onye na-eme mkpebi n'ịkwado?", options: ["Onye ma ọ bụ otu nwere ike ikwe arịrịọ gị", "Onye ọ bụla kwenyere gị", "Akwụkwọ akụkọ", "Onye na-eme mkpesa kacha olu dị elu"], answer: 0, why: "Onye na-eme mkpebi nwere ike inye gị ihe ị rịọrọ." },
            { objective: "O3", q: "Ị chọrọ ọkụ ọhụrụ n'ogige, ma ị maghị onye na-ekpebi. Gịnị ka ị ga-eme?", options: ["Dee akwụkwọ nye Onye isi ala", "Lelee weebụsaịtị obodo ma ọ bụ kpọọ obodo ka ị chọpụta", "Chee echiche ma ziga ya bọọdụ ụlọ akwụkwọ", "Chere ruo mgbe mmadụ gwara gị"], answer: 1, why: "Kwenye onye na-eme mkpebi n'ezi isi iyi tupu i kpọtụrụ ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwadebe ihe ị ga-ekwu",
        questions: [
          { objective: "O1", q: "Kedu arịrịọ ịkwado kacha doo anya?", options: ["\"Mee ka ihe ka mma\"", "\"Dozie nchekwa\"", "\"Anyị na-arịọ Ngalaba Njem ka ha tinye ọkụ ngafe ụzọ na Main na 5th tupu afọ akwụkwọ na-esote\"", "\"Mee ihe ugbu a\""], answer: 2, why: "Ọ na-ekwu gịnị, onye na mgbe ole." },
          { objective: "O2", q: "AI nyere gị ọnụ ọgụgụ gbasara ihe mberede n'okporo ụzọ gị. Gịnị ka ị ga-eme?", options: ["Chọta ya n'isi iyi mbụ ya tupu i jiri ya", "Jiri ya ozugbo", "Mee ka ọ dị elu karịa", "Dee ya n'akara siri ike"], answer: 0, why: "AI nwere ike ịmepụta ọnụ ọgụgụ." },
          { objective: "O2", q: "Tupu i kesaa akụkọ onye agbata obi na mgbasa ozi gị, ị ga-ebu ụzọ:", options: ["Tinye adreesị ya", "Gbanwee ya ka ọ dị njọ karịa", "Ọ dịghị ihe", "Nweta ikike ya"], answer: 3, why: "Akụkọ bụ nke ndị biri ndụ ya." },
          { objective: "O3", q: "Gịnị mere ị ga-eji chọta onye na-eme mkpebi?", options: ["Iji tinye adreesị ụlọ ya", "Ịkwado na-ada mgbe ọ gakwuru onye na-ezighi ezi", "Ọ dịghị mkpa", "Iji zere ya"], answer: 1, why: "Naanị onye kwesịrị ekwesị nwere ike ikwe." },
          { objective: "O3", q: "Gịnị bụ oge nkwupụta ọha?", options: ["Ihe ngosi TV", "Ohere ọha nwere ikwu okwu ma ọ bụ ide ihe tupu mkpebi", "Oge njedebe ụtụ isi", "Nzukọ nzuzo"], answer: 1, why: "Ọ bụ oge e kwadoro ka ọha tinye aka." }
        ]
      }
    },
    {
      name: "Isi 2: Ikwu okwu nke ọma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI dee akwụkwọ ozi ma ọ bụ nkwupụta ọha",
          minutes: 5,
          goal: "Dee akwụkwọ ozi ma ọ bụ nkwupụta ọha dị mkpụmkpụ, nwere nkwanye ugwu, nke na-ekwu arịrịọ gị.",
          text: [
            "Akwụkwọ ozi ma ọ bụ nkwupụta siri ike dị mkpụmkpụ (na-erughị okwu 300) ma nwee akụkụ anọ: onye ị bụ na njikọ gị na nsogbu ahụ, nsogbu ahụ ya na eziokwu otu ma ọ bụ abụọ, obere ezi akụkọ, na arịrịọ gị a kapịrị ọnụ ya na ekele.",
            "Jụọ AI: \"Dee nkwupụta ọha nwere nkwanye ugwu, na-erughị okwu 300, nye City Council. Abụ m nne ma ọ bụ nna na Lincoln Elementary. Nsogbu: [nsogbu]. Eziokwu: [eziokwu ị lelere]. Akụkọ: [e kesara site n'ikike]. Arịrịọ: [arịrịọ gị].\" Mgbe ahụ, dozie ya ka ọ dị ka okwu gị.",
            "Akwụkwọ ozi nke onwe ka mma karịa akwụkwọ ozi otu ụdị: ndị ọchịchị na-ahụ mgbe ọtụtụ narị ozi AI yiri onwe ha rutere. Gbaa ndị na-akwado gị ume ka ha tinye ahịrịokwu nke ha. Nwee nkwanye ugwu ọ bụrụgodị na iwe na-ewe gị; a na-eleghara mkparị anya."
          ],
          steps: ["Onye ị bụ na njikọ gị.", "Nsogbu ahụ ya na eziokwu otu ma ọ bụ abụọ e lelere.", "Obere ezi akụkọ, e kesara site n'ikike.", "Arịrịọ gị a kapịrị ọnụ na ekele.", "Dozie ya ka ọ dị ka okwu gị; mee ka ọ ghara ịgafe okwu 300."],
          words: [["Akwụkwọ ozi otu ụdị (Form letter)", "otu akwụkwọ ozi ọtụtụ mmadụ na-eziga n'agbanweghị ya ma ọ bụ n'agbanwe ya ntakịrị."], ["Onye mpaghara (Constituent)", "onye bi na mpaghara onye ọchịchị, onye ọ na-anọchite anya ya."]],
          slides: [
            { title: "Akụkụ anọ", bullets: ["Onye ị bụ", "Nsogbu na eziokwu", "Ezi akụkọ", "Arịrịọ gị na ekele"] },
            { title: "AI na-ede, gị na-eme ka ọ bụrụ nke gị", bullets: ["Nye ya naanị eziokwu e lelere", "Na-erughị okwu 300", "Mee ka ọ dị ka okwu gị"] },
            { title: "Ka a nụ olu gị", bullets: ["Akwụkwọ nke onwe ka mma karịa nke yiri onwe ha", "Ndị na-akwado gị na-etinye okwu nke ha", "Nwee nkwanye ugwu"] }
          ],
          tryIt: "Jiri enyemaka AI dee akwụkwọ ozi ma ọ bụ nkwupụta ọha na-erughị okwu 300 maka nsogbu gị, site n'iji eziokwu ị lelere na akụkọ e kesara site n'ikike. Gụpụta ya n'olu dị elu ma dozie ya.",
          youCanNow: "ide akwụkwọ ozi ma ọ bụ nkwupụta ọha dị mkpụmkpụ, nwere nkwanye ugwu, nke na-ekwu arịrịọ doro anya.",
          quickCheck: [
            { objective: "O4", q: "Onye bụ onye mpaghara (constituent)?", options: ["Onye ọrụ nzukọ nonprofit", "Onye a na-akwụ ụgwọ ka ọ kwado iwu (lobbyist)", "Onye nta akụkọ", "Onye bi na mpaghara onye ọchịchị"], answer: 3, why: "Ndị ọchịchị na-ege ndị ha na-anọchite anya ntị." },
            { objective: "O4", q: "AI dere akwụkwọ ozi nwere iwe nke na-ata kansụl ụta. Gịnị ka ị ga-eme?", options: ["Ziga ya ka ha mara otu iwe si were gị", "Dezigharịa ya ka o nwee nkwanye ugwu, ya na eziokwu, akụkọ na arịrịọ", "Tinyekwuo okwu iwe", "Ziga otu akwụkwọ ahụ site n'aha adịgboroja 100"], answer: 1, why: "A na-egekarị akwụkwọ ozi nke onwe nwere nkwanye ugwu na arịrịọ doro anya ntị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime mpempe akwụkwọ eziokwu otu peeji",
          minutes: 5,
          goal: "Mee mpempe akwụkwọ eziokwu otu peeji nke ndị ọchịchị na ndị agbata obi na-arụsi ọrụ ike nwere ike ịgụ n'otu nkeji.",
          text: [
            "Mpempe akwụkwọ eziokwu (fact sheet) bụ akwụkwọ otu peeji ị na-ahapụrụ ndị ọchịchị, na-ekesa n'ịntanetị ma na-enye ndị na-akwado gị. Ndị na-arụsi ọrụ ike na-agụ elu ya ma lefee nke fọdụrụ anya.",
            "Nhazi: isiokwu siri ike nke na-akpọ aha nsogbu ahụ, eziokwu atọ dị mkpa ya na isi iyi ha, obere okwu e hotara ma ọ bụ akụkọ, arịrịọ n'ime igbe, na onye ị bụ ya na otu esi akpọtụrụ gị. Jiri okwu dị mfe, mkpụrụedemede buru ibu, na otu eserese ma ọ bụ foto dị mfe ma ọ bụrụ na ọ ga-enye aka.",
            "Rịọ AI ka o dee ederede ahụ site n'eziokwu gị, wee hazie ya na Canva ma ọ bụ Google Docs. Lelee nọmba na isi iyi ọ bụla ọzọ. Sụgharịa ya ma ọ bụrụ na obodo gị na-asụ asụsụ ndị ọzọ; AI nwere ike ide nsụgharị mbụ, ma mee ka onye na-asụ asụsụ ahụ nke ọma lelee ya."
          ],
          steps: ["Dee isiokwu na-akpọ aha nsogbu ahụ.", "Tinye eziokwu atọ ya na isi iyi ha.", "Tinye otu obere okwu e hotara ma ọ bụ akụkọ.", "Tinye arịrịọ n'ime igbe.", "Hazie ya n'otu peeji; lelee nọmba; mee ka ndị na-asụ asụsụ nke ọma lelee nsụgharị."],
          words: [["Mpempe akwụkwọ eziokwu (Fact sheet)", "akwụkwọ otu peeji na-achịkọta nsogbu, eziokwu na arịrịọ."], ["Okwu dị mfe (Plain language)", "ederede doro anya, dị mfe, nke ọtụtụ mmadụ ghọtara."]],
          slides: [
            { title: "Otu peeji, otu nkeji", bullets: ["Ndị na-arụsi ọrụ ike na-agụ elu ya", "Mgbe ahụ ha na-elefe anya"] },
            { title: "Nhazi", bullets: ["Isiokwu nwere nsogbu ahụ", "Eziokwu atọ ya na isi iyi", "Okwu e hotara, arịrịọ n'igbe, otu esi akpọtụrụ gị"] },
            { title: "Mee ka ọ maa mma", bullets: ["Canva ma ọ bụ Google Docs", "Lelee nọmba ọ bụla ọzọ", "Ndị na-asụ asụsụ nke ọma na-elele nsụgharị"] }
          ],
          tryIt: "Mee mpempe akwụkwọ eziokwu otu peeji maka nsogbu gị, AI na-ede ederede ahụ, Canva ma ọ bụ Google Docs maka nhazi. Rịọ mmadụ ka ọ gụọ ya n'otu nkeji ma gwa gị arịrịọ ahụ.",
          youCanNow: "ime mpempe akwụkwọ eziokwu otu peeji doro anya maka nsogbu ịkwado.",
          quickCheck: [
            { objective: "O5", q: "Maka onye ka e mere mpempe akwụkwọ eziokwu karịsịa?", options: ["Ndị ọchịchị na ndị agbata obi na-arụsi ọrụ ike chọrọ isi ihe ngwa ngwa", "Naanị ndị dere ya", "Ndị ọka iwu n'ụlọikpe", "Ụmụ akwụkwọ na-ede edemede"], answer: 0, why: "Mpempe akwụkwọ eziokwu na-enye ndị na-arụsi ọrụ ike nsogbu, eziokwu na arịrịọ n'otu nkeji." },
            { objective: "O5", q: "Mpempe akwụkwọ eziokwu i dere bụ peeji abụọ zuru ezu nwere obere mkpụrụedemede. Gịnị ka ị ga-eme?", options: ["Mee ka mkpụrụedemede dị obere karịa", "Tinye peeji nke atọ maka eziokwu ndị ọzọ", "Belata ya ka ọ bụrụ otu peeji, arịrịọ n'igbe doro anya", "Wepụ arịrịọ ka ohere dị"], answer: 2, why: "Otu peeji nwere arịrịọ doro anya dị mfe ịgụ na ime ihe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Okwu n'ihu ọha, ndị na-akwado gị na iwu",
          minutes: 6,
          goal: "Kwuo okwu nkeji abụọ, kpọkọta ndị na-akwado gị ma gbasoo iwu ịkwado nke nzukọ nonprofit.",
          text: [
            "Ọtụtụ kansụl na bọọdụ na-enye onye ọ bụla na-ekwu okwu nkeji abụọ ma ọ bụ atọ. Kwadebe ụdị akwụkwọ ozi gị nke nkeji abụọ: ihe dị ka okwu 250 a na-ekwu ekwu. Rịọ AI ka o belata ya, wee mụọ ya n'olu dị elu ya na ihe ngụ oge. Malite n'aha gị na njikọ gị, mechie n'arịrịọ gị, ma bute mbipụta mpempe akwụkwọ eziokwu gị.",
            "Bute ndị na-akwado gị. Ọnụ ụlọ jupụtara na ndị agbata obi yi otu agba na-ezi ozi. Jiri AI dee obere ozi ndebanye aha na ozi ncheta, ma nyere ndị na-akwado gị aka ide nkwupụta nke ha.",
            "Mara iwu maka nzukọ nonprofit. IRS kwuru na 501(c)(3) nwere ike ime ụfọdụ lobbying, ma ọ bụghị dị ka akụkụ buru ibu nke ọrụ ya, na ịkụziri ọha ihe gbasara iwu abụghị lobbying. A machibidoro ya kpamkpam ịkwado ma ọ bụ imegide ndị na-azọ ọkwa, ma a na-ekwe ka a kụziere ndị ntuli aka ihe ma debanye ha aha n'ekeghị òkè. Jụọ ọka iwu nzukọ nonprofit ma ọ bụ otu nzukọ nonprofit nke steeti gị maka nkọwa zuru ezu."
          ],
          steps: ["Belata akwụkwọ ozi gị ka ọ bụrụ ihe dị ka okwu 250 a na-ekwu ekwu.", "Mụọ ya n'olu dị elu ya na ihe ngụ oge nkeji abụọ.", "Bute mbipụta mpempe akwụkwọ eziokwu na ndị na-akwado gị.", "Jiri AI dee ozi ndebanye aha na ozi ncheta.", "Lelee iwu nzukọ nonprofit gbasara lobbying na ndị na-azọ ọkwa."],
          words: [["Okwu n'ihu ọha (Testimony)", "ikwu okwu nye ndị ọchịchị na nzukọ ọha gbasara otu nsogbu."], ["Lobbying", "ịgbalị imetụta iwu, dịka ịkpọtụrụ ndị omebe iwu gbasara otu ụkpụrụ iwu (bill)."], ["N'ekeghị òkè (Nonpartisan)", "ịghara ịkwado otu ndọrọ ndọrọ ọchịchị ma ọ bụ onye na-azọ ọkwa ọ bụla."]],
          slides: [
            { title: "Okwu nkeji abụọ", bullets: ["Ihe dị ka okwu 250 a na-ekwu ekwu", "Aha na njikọ na mbụ, arịrịọ na njedebe", "Jiri ihe ngụ oge mụọ ya"] },
            { title: "Bute ndị na-akwado gị", bullets: ["Bịakọọ ọnụ", "AI na-ede ozi ndebanye aha na ncheta", "Onye ọ bụla na-etinye okwu nke ya"] },
            { title: "Iwu 501(c)(3) (IRS)", bullets: ["E kwere ụfọdụ lobbying, ọ bụghị akụkụ buru ibu", "Ọ dịghị ịkwado ma ọ bụ imegide ndị na-azọ ọkwa", "E kwere ịkụziri ndị ntuli aka ihe n'ekeghị òkè"] }
          ],
          sources: [{ name: "IRS: Lobbying", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS: Restriction of political campaign intervention by 501(c)(3) organizations", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Ọrụ ikpeazụ: belata akwụkwọ ozi gị ka ọ bụrụ okwu nkeji abụọ ma mụọ ya n'olu dị elu ya na ihe ngụ oge. Jikọta ya na nsogbu na arịrịọ gị, eziokwu, akụkọ, onye na-eme mkpebi, akwụkwọ ozi na mpempe akwụkwọ eziokwu iji mezue ngwugwu ịkwado gị.",
          youCanNow: "iji enyemaka AI hazie ma mee obere mgbasa ozi ịkwado dabere n'eziokwu, n'ime iwu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka nonpartisan pụtara?", options: ["Ịkwado otu ndọrọ ndọrọ ọchịchị", "Gọọmentị kwụrụ ụgwọ ya", "Ịghara ịkwado onye na-azọ ọkwa ma ọ bụ otu ndọrọ ndọrọ ọchịchị ọ bụla", "Imegide ndị ọchịchị niile"], answer: 2, why: "Nonpartisan pụtara ịghara ikere òkè n'akụkụ ndị na-azọ ọkwa ma ọ bụ otu ndọrọ ndọrọ ọchịchị." },
            { objective: "O6", q: "Okwu gị na-ewe nkeji atọ na ọkara, ma ọ bụ nkeji abụọ ka i nwere. Gịnị ka ị ga-eme?", options: ["Kwuo okwu ngwa ngwa karịa", "Gaa n'ihu mgbe oge gwụrụ", "Hapụ arịrịọ ahụ", "Belata ya ka ọ bụrụ aha gị, njikọ gị, otu eziokwu, otu akụkọ na arịrịọ, ma jiri ihe ngụ oge mụọ ya"], answer: 3, why: "Ibelata ya ruo n'isi ihe na ịmụ ya na-eme ka ị nọrọ n'ime oge e nyere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ikwu okwu nke ọma",
        questions: [
          { objective: "O4", q: "Gịnị mere akwụkwọ ozi nke onwe ji ka mma karịa ọtụtụ narị akwụkwọ ozi yiri onwe ha?", options: ["Akwụkwọ ozi yiri onwe ha megidere iwu", "Akwụkwọ ozi nke onwe dị ogologo karịa", "Ha akaghị mma", "Ndị ọchịchị na-ahụ ma na-eji olu onye ọ bụla kpọrọ ihe"], answer: 3, why: "Akụkọ na okwu nke onwe na-adị arọ karịa." },
          { objective: "O5", q: "Mpempe akwụkwọ eziokwu kwesịrị ịbụ:", options: ["Otu peeji a ga-agụ n'ihe dị ka otu nkeji", "Peeji iri abụọ", "Naanị foto", "E dere ya n'okwu siri ike nke ndị ọkachamara"], answer: 0, why: "Ndị na-arụsi ọrụ ike chọrọ ihe dị mkpụmkpụ ma doo anya." },
          { objective: "O5", q: "AI sụgharịrị mpempe akwụkwọ eziokwu gị gaa n'asụsụ Spanish. Gịnị ka ị ga-eme ọzọ?", options: ["Bipụta ya n'eleleghị ya", "Hichapụ nke Bekee", "Mee ka onye na-asụ asụsụ ahụ nke ọma lelee ya", "Hapụ nsụgharị"], answer: 2, why: "Nsụgharị AI nwere ike inwe njehie." },
          { objective: "O6", q: "Ihe dị ka okwu ole a na-ekwu ekwu na-adaba na nkeji abụọ?", options: ["Ihe dị ka 2,500", "Ihe dị ka 20", "Ihe dị ka 1,000", "Ihe dị ka 250"], answer: 3, why: "Ọtụtụ mmadụ na-ekwu ihe dị ka okwu 120-130 kwa nkeji." },
          { objective: "O6", q: "Dị ka IRS si kwuo, 501(c)(3) ọ nwere ike ịkwado onye na-azọ ọkwa n'ihu ọha?", options: ["Ee, oge ọ bụla", "Naanị na soshal midia", "Mba, a machibidoro ya kpamkpam", "Naanị obere onyinye"], answer: 2, why: "IRS kwuru na a machibidoro itinye aka na mgbasa ozi ntuli aka kpamkpam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịkwado Mkpa Obodo",
    questions: [
      { objective: "O1", q: "Ịkwado (advocacy) pụtara:", options: ["Naanị ịtụ vootu", "Ikwu okwu iji gbanwee iwu, omume ma ọ bụ mkpebi", "Ịzọ ọkwa", "Ịgba mmadụ akwụkwọ n'ụlọikpe"], answer: 1, why: "Ịkwado bụ iweta mgbanwe site n'ikwu okwu." },
      { objective: "O1", q: "Gịnị mere ị ga-eji mee ka nchegbu buru ibu bụrụ otu nsogbu a kapịrị ọnụ?", options: ["Ndị ọchịchị nwere ike idozi nsogbu a kapịrị ọnụ", "Ọ na-ada ka ihe dị obere", "AI chọrọ ya", "Iji zere ime ihe"], answer: 0, why: "Nsogbu a kapịrị ọnụ na-eduga na ngwọta a kapịrị ọnụ." },
      { objective: "O1", q: "Arịrịọ siri ike nwere:", options: ["Naanị mmetụta obi", "Iyi egwu", "Gịnị, site n'aka onye na mgbe ole", "Enweghị nkọwa ọ bụla"], answer: 2, why: "Ọ dị mfe ikwe arịrịọ doro anya." },
      { objective: "O1", q: "Onye kwesịrị ịhazi arịrịọ ahụ?", options: ["Ndị ọ kacha metụta", "Naanị AI", "Naanị ndị si n'èzí", "Ọ dịghị onye"], answer: 0, why: "Ịkwado nke obodo na-edu siri ike karịa." },
      { objective: "O2", q: "Ebee ka ị nwere ike ịhụ data ọnụ ọgụgụ ndị mmadụ na ego ha na-enweta na US?", options: ["Ihe ọchị mmadụ ọ bụla tinyere", "Echiche AI", "Okwu mmadụ dere na soshal midia", "data.census.gov"], answer: 3, why: "Census Bureau na-ebipụta ezi data gọọmentị." },
      { objective: "O2", q: "Isi iyi mbụ (primary source) bụ:", options: ["Blọọgụ ọ bụla", "Ebe mbụ e bipụtara ozi ahụ", "Nchịkọta AI", "Asịrị"], answer: 1, why: "Isi iyi mbụ kacha bụrụ nke a tụkwasịrị obi." },
      { objective: "O2", q: "Maka eziokwu ọ bụla ị chịkọtara, dee:", options: ["Naanị nọmba ahụ", "Isi iyi, njikọ na ụbọchị", "Ọ dịghị ihe", "Echiche gị"], answer: 1, why: "Isi iyi na-enye ndị ọzọ ohere ilele eziokwu gị." },
      { objective: "O3", q: "Ndekọ nzukọ (meeting minutes) bụ:", options: ["Ogologo oge nzukọ were", "Ụdị elekere", "Akwụkwọ ndekọ nzuzo", "Ezi ndekọ e dere ede nke nzukọ ọha"], answer: 3, why: "Ndekọ nzukọ na-edekọ ihe e kpebiri." },
      { objective: "O3", q: "AI kwuru na bọọdụ ụlọ akwụkwọ na-ekpebi maka ebe ngafe ụzọ. Ị kwesịrị:", options: ["Kwenye ya na weebụsaịtị obodo gị ma ọ bụ site n'ịkpọ oku", "Tụkwasị ya obi", "Dee akwụkwọ nye ọfịs niile otu mgbe n'eleleghị", "Kwụsị"], answer: 0, why: "Usoro obodo dị iche iche; kwenye ya n'ezi isi iyi." },
      { objective: "O3", q: "Gịnị mere ị ga-eji mụta kalenda mmefu ego?", options: ["Mmefu ego bụ ihe nzuzo", "Ọ baghị uru", "A na-eme ọtụtụ mkpebi mgbe a na-edozi mmefu ego", "Iji hapụ nzukọ"], answer: 2, why: "Ime arịrịọ gị n'oge mkpebi mmefu ego dị mkpa." },
      { objective: "O3", q: "Onye enyi (ally) bụ:", options: ["Onye na-emegide gị", "Naanị onye na-eme mkpebi", "Weebụsaịtị", "Onye ma ọ bụ otu na-akwado ihe ị na-alụ ọgụ maka ya"], answer: 3, why: "Ndị enyi na-agbakwunye ike na olu." },
      { objective: "O3", q: "Gịnị mere ị ga-eji ghọta ndị nwere ike imegide gị?", options: ["Iji kparịa ha", "Iji leghara ha anya", "Ka i nwee ike ịza nchegbu ha", "Iji ṅomie ha"], answer: 2, why: "Ịza nchegbu na-ewulite nkwado." },
      { objective: "O4", q: "Onye mpaghara (constituent) bụ:", options: ["Ụdị iwu", "Onye bi na mpaghara onye ọchịchị", "Ọka iwu", "Ụlọ obodo"], answer: 1, why: "Ndị ọchịchị na-ege ndị mpaghara ha ntị." },
      { objective: "O4", q: "Nkwupụta ọha siri ike bụ:", options: ["Na-erughị okwu 300 ya na onye ị bụ, eziokwu, akụkọ na arịrịọ", "Ogologo dị ka o kwere mee", "Nke iwe na mkparị", "Naanị ọnụ ọgụgụ"], answer: 0, why: "Ihe dị mkpụmkpụ, nke onwe ma kapịrị ọnụ na-arụ ọrụ kacha mma." },
      { objective: "O4", q: "Iwe na-ewe gị maka ndị ọchịchị. N'akwụkwọ ozi gị, ị kwesịrị:", options: ["Iji mkparị", "Iyi egwu", "Inwe nkwanye ugwu", "Iji mkpụrụedemede ukwu dee ihe niile"], answer: 2, why: "A na-agụ ma tụlee ozi nwere nkwanye ugwu." },
      { objective: "O5", q: "Ebee ka arịrịọ kwesịrị ịdị na mpempe akwụkwọ eziokwu?", options: ["N'ime igbe doro anya", "Zoro ezo n'okpuru n'obere mkpụrụedemede", "Ọ dịghị ebe", "Naanị n'azụ"], answer: 0, why: "Arịrịọ kwesịrị ipụta ìhè." },
      { objective: "O6", q: "N'okwu n'ihu ọha, ị kwesịrị ịmalite na:", options: ["Akụkọ ihe mere eme dị ogologo", "Naanị arịrịọ gị", "Njakịrị", "Aha gị na njikọ gị na nsogbu ahụ"], answer: 3, why: "Ọ na-agwa ndị ọchịchị ihe mere nsogbu ahụ ji metụta gị." },
      { objective: "O6", q: "Dị ka IRS si kwuo, ịkụziri ọha ihe gbasara iwu:", options: ["Megidere iwu mgbe niile", "Abụghị lobbying", "Bụ mgbasa ozi ntuli aka", "A machibidoro ya maka nzukọ nonprofit"], answer: 1, why: "IRS kwuru na ọrụ nkuzi abụghị lobbying." },
      { objective: "O6", q: "501(c)(3) nwere ike ime ụfọdụ lobbying, ma:", options: ["Enweghị oke", "Ọ bụghị dị ka akụkụ buru ibu nke ọrụ ya", "Naanị maka ndị na-azọ ọkwa", "Mgbe ọ bụla"], answer: 1, why: "Lobbying karịrị akarị nwere ike ime ka ọ tụfuo ohere ịghara ịkwụ ụtụ isi." },
      { objective: "O6", q: "Dị ka IRS si kwuo, mgbalị 501(c)(3) ịdebanye ndị ntuli aka aha n'ekeghị òkè bụ:", options: ["A machibidoro ya mgbe niile", "E kwere ya naanị maka otu ndọrọ ndọrọ ọchịchị", "Ọ bụ iwu", "A na-ekwekarị ya ma ọ bụrụ na o kereghị òkè n'ezie"], answer: 3, why: "A machibidoghị ndebanye aha ndị ntuli aka n'ekeghị òkè." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 5, 6, 8, 13, 15, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nsogbu na arịrịọ", objective: "O1", notYet: "Nsogbu ahụ sara mbara nke ukwuu, ma ọ bụ arịrịọ ahụ enweghị gịnị, site n'aka onye ma ọ bụ mgbe ole.", meets: "Nsogbu n'otu ahịrịokwu na arịrịọ a kapịrị ọnụ nwere gịnị, site n'aka onye na mgbe ole.", exceeds: "Na-egosi otu ndị ọ metụtara si nyere aka hazie arịrịọ ahụ." },
      { name: "Eziokwu na akụkọ", objective: "O2", notYet: "Otu eziokwu enweghị isi iyi, ma ọ bụ e jiri akụkọ n'enweghị ikike.", meets: "Eziokwu atọ ya na isi iyi, njikọ na ụbọchị, na akụkọ abụọ e kesara site n'ikike.", exceeds: "Eziokwu si n'isi iyi mbụ, akụkọ na-eji aha ndị mmadụ họọrọ." },
      { name: "Onye na-eme mkpebi", objective: "O3", notYet: "Onye na-eme mkpebi ezighi ezi ma ọ bụ a kwenyeghị ya.", meets: "A kwenyere onye na-eme mkpebi na oge njedebe na-esote na weebụsaịtị gọọmentị.", exceeds: "Na-edepụtakwa ndị enyi na azịza nye isi nchegbu ndị na-emegide." },
      { name: "Akwụkwọ ozi ma ọ bụ nkwupụta na mpempe akwụkwọ eziokwu", objective: "O4", notYet: "Karịrị okwu 300, enweghị nkwanye ugwu, ma ọ bụ enweghị arịrịọ doro anya.", meets: "Na-erughị okwu 300, nwere nkwanye ugwu, ya na onye ị bụ, eziokwu, akụkọ na arịrịọ; mpempe akwụkwọ eziokwu dabara n'otu peeji.", exceeds: "Onye gụrụ mpempe akwụkwọ eziokwu nwere ike ikwu arịrịọ ahụ mgbe otu nkeji gasịrị." },
      { name: "Okwu n'ihu ọha na iwu", objective: "O6", notYet: "Karịrị nkeji abụọ, a mụghị ya, ma ọ bụ o kwuru maka ịkwado onye na-azọ ọkwa.", meets: "A mụrụ ya n'olu dị elu n'ime nkeji abụọ ma ọ bụ na-erughị ya, na-amalite n'aha na njikọ, ma bụrụ naanị maka nsogbu.", exceeds: "Gụnyere atụmatụ ka ndị na-akwado bịa ma ọ bụ nye nkwupụta." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe zipụrụ akwụkwọ ozi ma ọ bụ nkwupụta ọha, ma ọ bụ kwuo okwu na nzukọ ọha, n'ime ụbọchị 60 (nyocha nsochi)",
      "Mgbasa ozi ebe onye na-eme mkpebi zara, debere nsogbu ahụ n'usoro nzukọ ma ọ bụ kwere arịrịọ ahụ",
      "Ọnụ ọgụgụ ndị obodo sonyere na mgbasa ozi mgbe ihe ọmụmụ ahụ gasịrị",
      "Ndị na-amụ ihe bidoro ihe ọmụmụ Koach Learn ọzọ gbasara nzukọ nonprofit n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejuputa ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Canva ma ọ bụ Google Docs maka mpempe akwụkwọ eziokwu",
      "Ihe ngụ oge maka ịmụ okwu n'ihu ọha",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge ịchọ ihe na ịmụ okwu"
    ],
    facilitatorNotes: [
      "Hapụ otu dị iche iche ka ha rụọ ọrụ n'otu nsogbu obodo ha niile nwere, ka ndị na-amụ ihe kewaa ọrụ nchọpụta ma mụkọọ okwu n'ihu ọha ọnụ.",
      "Chetara ndị ọrụ nzukọ nonprofit na otu 501(c)(3) enweghị ike ịkwado ndị na-azọ ọkwa; duzie ha gaa na ntuziaka IRS maka ọnọdụ nke ha.",
      "A na-ekesa akụkọ naanị site n'ikike; ozi nzuzo anaghị abanye na prompt AI.",
      "Mee ka ndị na-amụ ihe mụọ okwu n'ihu ọha n'olu dị elu ya na ihe ngụ oge n'ihu otu ahụ.",
      "Jiri rubric tụọ ngwugwu ịkwado ma nye nzaghachi n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
