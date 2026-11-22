"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-marketing-outreach.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-marketing-outreach-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-marketing-outreach",
  category: "Non Profits",
  name: "AI maka Mgbasa Ozi na Iru Obodo Aka",
  skills: "Ịmata ndị ị na-agwa na ozi gị, Iji AI dee ozi soshal midia, Ide akwụkwọ akụkọ (newsletter), Ime ka ozi doo anya ma dịrị onye ọ bụla, Ịhazi otu ọnwa mgbasa ozi",
  outcome: "iji AI hazie ma dee otu ọnwa mgbasa ozi maka mmemme òtù na-adịghị achọ uru (nonprofit): isi ozi maka otu ìgwè ndị mmadụ, ozi soshal midia anọ, obere edemede akwụkwọ akụkọ (newsletter) na flaya n'okwu dị mfe, nke e lelere niile, nke onye ọ bụla nwere ike iji, ma dị n'olu òtù gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ na ndị ọrụ afọ ofufo n'òtù na-adịghị achọ uru na n'òtù okpukpe, ndị na-elekọta soshal midia, akwụkwọ akụkọ (newsletter), flaya na ọkwa obodo, ọtụtụ mgbe n'elu ọrụ ndị ọzọ ha na-arụ.",
    "Ị ga-amụta ịkpọ aha ndị ị na-agwa na ozi gị, wee jiri AI dee ozi, akwụkwọ akụkọ na flaya ngwa ngwa, mee ka ha doo anya ma dịrị onye ọ bụla n'obodo gị, ma hazie otu ọnwa mgbasa ozi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ aka nke ga-abụ akụkụ atụmatụ mgbasa ozi gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee atụmatụ mgbasa ozi otu ọnwa maka otu ezi mmemme ma ọ bụ ihe omume. Tinye otu ìgwè ndị ị na-agwa na otu isi ozi, ozi soshal midia anọ nwere nkọwa foto, edemede akwụkwọ akụkọ nwere okwu 200, na ederede flaya n'okwu dị mfe. Jiri AI dee ha niile, lelee eziokwu na nzuzo, ma dezie ha ka ha dị ka òtù gị. Tinye ha na kalenda dị mfe nke izu anọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ na ndị ọrụ afọ ofufo n'òtù na-adịghị achọ uru na n'òtù okpukpe, ndị na-elekọta soshal midia, akwụkwọ akụkọ, flaya na ọkwa obodo, ọtụtụ mgbe n'elu ọrụ ndị ọzọ ha na-arụ.",
    startingPoint: "Ha na-etinye ozi na soshal midia ma na-ezipu email ma ọ bụ flaya mgbe ụfọdụ, ọtụtụ mgbe n'ọsọ ọsọ. Ọtụtụ ahazibeghị mgbasa ozi tupu oge eruo, edebeghị nkọwa foto, ma ọ bụ jiri AI dee ihe mbụ (draft).",
    gap: "Mgbasa ozi e mere n'ọsọ ọsọ, nke edoghị anya ma ọ bụ nke siri ike ịgụ na-agafe ndị mmemme ahụ dịịrị, gụnyere ndị na-agụ n'asụsụ ọzọ ma ọ bụ ndị na-eji screen reader. Ndị na-amụ ihe kwesịrị iji AI hazie ngwa ngwa otu ọnwa mgbasa ozi doro anya, nke onye ọ bụla nwere ike iji, nke na-ekwu eziokwu, n'etinyeghị nzuzo onye ọ bụla n'ihe egwu.",
    constraints: [
      "Oge: a na-eme mgbasa ozi n'elu ọrụ ndị ọzọ, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Nzuzo: ikike e dere ede maka foto ụmụaka na ndị ahịa; ọ dịghị nkọwa na-egosi onye mmadụ bụ n'akụkọ n'enweghị nkwekọrịta",
      "Onye na-asụ asụsụ ahụ nke ọma site n'obodo na-elele ntụgharị AI",
      "Akwụkwọ akụkọ email chọrọ ụzọ doro anya isi kwụsị inweta ya (unsubscribe)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa n'efu"
    ],
    prerequisites: "\"Mmalite AI maka Otu Na-adịghị Achọ Uru\", ma ọ bụ ahụmahụ n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu mmemme na otu ìgwè ndị ị na-agwa", action: "ide isi ozi na-ekwu ihe ọ bụ, ihe mere o ji dị ha mkpa na ihe ha ga-eme ọzọ", standard: "n'otu ahịrịokwu ma ọ bụ abụọ" },
    { id: "O2", condition: "Mgbe e nyere gị isi ozi gị", action: "iji AI dee ozi soshal midia anọ: ọkwa, ozi n'azụ ihe nkiri, ekele na ncheta ikpeazụ", standard: "nke ọ bụla dị mkpụmkpụ, na-ejedebe n'otu omume, na-eji naanị foto na akụkọ nwere ikike" },
    { id: "O3", condition: "Mgbe e nyere gị ndetu mmemme gị", action: "ide edemede akwụkwọ akụkọ nwere okwu 200 nwere otu akụkọ, otu ezi nọmba na otu esi enye aka", standard: "ma lelee nọmba, aha, ụbọchị na okwu e hotara ọ bụla" },
    { id: "O4", condition: "Mgbe e nyere gị ihe mbụ mgbasa ozi", action: "ide ya ọzọ n'okwu dị mfe ma dee ntụgharị mbụ maka obodo gị", standard: "ma onye na-asụ asụsụ ahụ nke ọma lelee ntụgharị ahụ tupu e kesaa ya" },
    { id: "O5", condition: "Mgbe e nyere gị ozi gị na flaya gị", action: "ide alt text ma mee ka ha dịrị onye ọ bụla site na captions, contrast na hashtag a na-agụ nke ọma", standard: "nke alt text ya dabara n'ihe dị n'ezie na foto ọ bụla" },
    { id: "O6", condition: "Mgbe e nyere gị akụkụ mgbasa ozi gị na ụbọchị ihe omume", action: "ime kalenda mgbasa ozi izu anọ nwere izu, ọwa, akụkụ na onye na-etinye ya", standard: "ma lelee ụbọchị ndị ahụ na ezi kalenda gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ozi na ọwa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịmata ndị ị na-agwa na ozi gị",
          minutes: 5,
          goal: "Dee otu isi ozi doro anya maka otu ìgwè ndị mmadụ.",
          text: [
            "Ezigbo mgbasa ozi na-agwa otu ìgwè n'otu oge. Ndị ọrụ afọ ofufo, ndị na-enye onyinye, ezinụlọ ndị unu na-enyere aka, ndị otu ụka na azụmahịa obodo, onye ọ bụla na-elebara ihe dị iche anya.",
            "Isi ozi na-ekwu, n'otu ahịrịokwu ma ọ bụ abụọ, ihe ị chọrọ ka ìgwè ahụ mara ma mee. Ọmụmaatụ maka ndị nne na nna: \"Nkuzi n'efu mgbe ụlọ akwụkwọ gachara ga-amalite na September 8 n'ụlọ obodo. Debanye aha tupu September 1 ka nwa gị nweta oche.\"",
            "AI nwere ike inyere gị aka ime ka ọ ka mma. Jụọ: \"Nke a bụ mmemme anyị: [nkọwa ọha]. Dee ụdị atọ nke ozi otu ahịrịokwu maka [ìgwè]. Nke ọ bụla kwesịrị ikwu ihe ọ bụ, ihe mere o ji dị ha mkpa, na ihe ha ga-eme ọzọ.\""
          ],
          steps: ["Họrọ otu mmemme na otu ìgwè ndị ị na-agwa.", "Dee ihe ị chọrọ ka ha mara ma mee.", "Rịọ AI ụdị atọ nke otu ahịrịokwu.", "Họrọ nke kacha doo anya ma dezie ya."],
          words: [["Ìgwè ndị ị na-agwa (audience)", "ndị mmadụ ị na-anwa iru aka."], ["Isi ozi (key message)", "otu ahịrịokwu ma ọ bụ abụọ ị kacha chọọ ka ndị ị na-agwa cheta ma mee ihe banyere ya."]],
          slides: [
            { title: "Otu ìgwè n'otu oge", bullets: ["Ndị ọrụ afọ ofufo, ndị na-enye onyinye, ezinụlọ, ndị otu", "Onye ọ bụla na-elebara ihe dị iche anya"] },
            { title: "Isi ozi na-ekwu", bullets: ["Ihe ọ bụ", "Ihe mere o ji dị ha mkpa", "Ihe ha ga-eme ọzọ"] },
            { title: "Jiri AI mee ka ọ ka mma", bullets: ["Rịọ ụdị atọ nke otu ahịrịokwu", "Họrọ nke kacha doo anya", "Dezie ya ka ọ dị ka gị"] }
          ],
          tryIt: "Họrọ otu mmemme na otu ìgwè. Jiri AI nweta ụdị atọ nke isi ozi, wee dee nke ikpeazụ gị n'elu peeji nwere aha \"Atụmatụ mgbasa ozi\".",
          youCanNow: "ide isi ozi doro anya maka otu ìgwè ndị mmadụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere mgbasa ozi ji kwesị ịgwa otu ìgwè n'otu oge?", options: ["Ìgwè dị iche iche na-elebara ihe dị iche anya", "Ọ dị ọnụ ala ibipụta", "Soshal midia na-ekwe naanị otu ìgwè", "Ndị na-enye onyinye na ndị ọrụ afọ ofufo bụ otu ndị ahụ"], answer: 0, why: "Ndị ọrụ afọ ofufo, ndị na-enye onyinye, ezinụlọ na azụmahịa, onye ọ bụla na-elebara ihe dị iche anya." },
            { objective: "O1", q: "Ozi gị nye ndị ọrụ afọ ofufo ekwughị ihe ha ga-eme ọzọ. Gịnị ka ị ga-agbakwunye?", options: ["Akụkọ ogologo banyere òtù ahụ", "Otu omume doro anya, dị ka \"Debanye aha tupu Fraịde\"", "Hashtag ndị ọzọ", "Ndepụta mmemme niile"], answer: 1, why: "Isi ozi na-ekwu ihe ọ bụ, ihe mere o ji dị mkpa na ihe a ga-eme ọzọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI dee ozi soshal midia",
          minutes: 5,
          goal: "Jiri AI dee ozi soshal midia anọ maka otu mmemme.",
          text: [
            "Ozi soshal midia na-arụ ọrụ nke ọma mgbe ha dị mkpụmkpụ, na-egosi ezi oge, ma na-ejedebe n'otu omume doro anya. Ebe dị iche iche (platform) dabara n'ogologo dị iche: ozi Facebook nwere ike ịdị ogologo, caption Instagram na-eso foto, ozi n'ebe a na-ede obere ederede ga-adị mkpụmkpụ.",
            "Jụọ: \"Site n'iji isi ozi a: [ozi], dee ozi soshal midia anọ maka [platform] n'ime izu anọ: ọkwa, ozi n'azụ ihe nkiri, ekele nye onye ọrụ afọ ofufo ma ọ bụ onye sonyere, na ncheta ikpeazụ. Nke ọ bụla erughị okwu 60, nwee obi ụtọ, nwekwa otu ọkpụkpọ omume.\"",
            "Jiri foto nke gị nwere ikike. Etinyela foto ụmụaka ma ọ bụ ndị ahịa mgbe ọ bụla n'enweghị ikike e dere ede, ekesakwala akụkọ onye ọ bụla nwere nkọwa nwere ike igosi onye ọ bụ ma ọ bụrụ na o kwetaghị."
          ],
          steps: ["Nye AI isi ozi gị na platform gị.", "Rịọ ụdị ozi anọ n'ime izu anọ.", "Dezie nke ọ bụla ka ọ dị ka òtù gị.", "Họrọ foto i nwere ikike iji."],
          words: [["Platform", "ọrụ soshal midia, dị ka Facebook ma ọ bụ Instagram."], ["Caption", "ederede na-eso foto ma ọ bụ vidiyo."], ["Ikike (consent)", "nkwenye mmadụ, ka mma ma e dee ya ede, ka e gosi ya ma ọ bụ hota okwu ya."]],
          slides: [
            { title: "Ozi na-arụ ọrụ", bullets: ["Dị mkpụmkpụ", "Ezi oge", "Otu omume doro anya"] },
            { title: "Ụdị ozi anọ", bullets: ["Ọkwa", "N'azụ ihe nkiri", "Ekele", "Ncheta ikpeazụ"] },
            { title: "Foto na akụkọ", bullets: ["Jiri foto nke gị nwere ikike", "Ikike e dere ede maka ụmụaka na ndị ahịa"] }
          ],
          tryIt: "Jiri AI dee ozi anọ maka otu platform site n'isi ozi gị. Dezie ha ma tinye ha n'atụmatụ mgbasa ozi gị.",
          youCanNow: "iji AI dee usoro ozi soshal midia.",
          quickCheck: [
            { objective: "O2", q: "Kedu ụdị ozi ga-adị mkpụmkpụ?", options: ["Ozi Facebook", "Edemede akwụkwọ akụkọ", "Ozi n'ebe a na-ede obere ederede", "Flaya e bipụtara"], answer: 2, why: "Ozi n'ebe a na-ede obere ederede ga-adị mkpụmkpụ; ozi Facebook nwere ike ịdị ogologo." },
            { objective: "O2", q: "Onye sonyere kọrọ akụkọ na-emetụ obi mana o kwetaghị ka a kpọọ aha ya. Olee otu ị ga-esi tinye ya?", options: ["Tinye ya na aha ya", "Tinye foto ya na akụkọ ahụ", "Tinye ya ma jụọ ya emesịa", "Kesaa ya naanị n'enweghị nkọwa na-egosi onye ọ bụ, ma ọ bụ ghara ikesa ya"], answer: 3, why: "Ekesala akụkọ onye ọ bụla nwere nkọwa na-egosi onye ọ bụ ma ọ bụrụ na o kwetaghị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide edemede akwụkwọ akụkọ",
          minutes: 5,
          goal: "Jiri AI gbanwee ndetu mmemme ka ọ bụrụ obere edemede akwụkwọ akụkọ.",
          text: [
            "Akwụkwọ akụkọ (newsletter) na-eme ka ndị na-enye onyinye, ndị ọrụ afọ ofufo na ndị otu nọrọ nso. Obere edemede na-akọ otu akụkọ: ihe mere, onye o nyeere aka (n'enweghị ozi nzuzo), ihe ọ pụtara maka ebumnuche òtù ahụ, na ihe ndị na-agụ ya nwere ike ime ọzọ.",
            "Nye AI ndetu gị: \"Gbanwee ndetu ndị a ka ha bụrụ edemede akwụkwọ akụkọ nwere okwu 200 maka ndị na-akwado anyị. Jiri isiokwu nwere obi ụtọ, otu obere akụkọ, otu ezi nọmba, ma jedebe n'otu esi enye aka: [ndetu].\"",
            "Lelee nọmba ahụ na aha na ụbọchị ọ bụla. Tinye okwu e hotara naanị ma ọ bụrụ na ezi mmadụ kwuru ya ma kwenye ka e hota ya. Ọ bụrụ na ị na-ezipu akwụkwọ akụkọ site n'email, tinye ụzọ doro anya isi kwụsị inweta ya (unsubscribe) ma gbasoo iwu ngwa email gị."
          ],
          steps: ["Dee ndetu banyere otu ihe mere n'oge na-adịbeghị anya.", "Rịọ AI edemede okwu 200 nwere isiokwu, akụkọ, nọmba na otu esi enye aka.", "Lelee eziokwu na okwu e hotara ọ bụla.", "Tinye ya n'akwụkwọ akụkọ gị na foto i nwere ike iji."],
          words: [["Akwụkwọ akụkọ (newsletter)", "ozi ọhụrụ a na-ezigara ndị na-akwado unu mgbe niile site n'email ma ọ bụ n'akwụkwọ."], ["Unsubscribe", "njikọ (link) na-ekwe ka mmadụ kwụsị inweta email gị."]],
          slides: [
            { title: "Otu akụkọ n'otu edemede", bullets: ["Ihe mere", "Onye o nyeere aka, n'enweghị ozi nzuzo", "Ihe ndị na-agụ ya nwere ike ime"] },
            { title: "Prompt ahụ", bullets: ["Okwu 200, isiokwu nwere obi ụtọ", "Otu akụkọ, otu ezi nọmba", "Jedebe n'otu esi enye aka"] },
            { title: "Tupu i zipu", bullets: ["Lelee eziokwu na okwu e hotara", "Naanị ezi okwu e hotara, nwere nkwenye", "Tinye njikọ unsubscribe"] }
          ],
          tryIt: "Dee ahịrị ndetu ise banyere ihe mere na mmemme n'oge na-adịbeghị anya. Jiri AI gbanwee ha ka ha bụrụ edemede akwụkwọ akụkọ nwere okwu 200. Lelee eziokwu ọ bụla.",
          youCanNow: "ịgbanwe ndetu mmemme ka ọ bụrụ edemede akwụkwọ akụkọ e lelere.",
          quickCheck: [
            { objective: "O3", q: "Akụkọ ole ka obere edemede akwụkwọ akụkọ kwesịrị ịkọ?", options: ["Otu", "Ise", "Ọ dịghị", "Ole ọ bụla dabara"], answer: 0, why: "Obere edemede na-akọ otu akụkọ." },
            { objective: "O3", q: "Ihe mbụ AI dere tinyere okwu e hotara site n'onye ọrụ afọ ofufo nke na-ekwughị ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-ada mma", "Wepụ ya, ma ọ bụ rịọ onye ọrụ afọ ofufo ahụ ezi okwu o kwenyere ka e hota", "Gbanwee aha onye ọrụ afọ ofufo ahụ", "Bugharịa ya na njedebe"], answer: 1, why: "Tinye okwu e hotara naanị ma ọ bụrụ na ezi mmadụ kwuru ya ma kwenye ka e hota ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ozi na ọwa",
        questions: [
          { objective: "O1", q: "Gịnị bụ isi ozi?", options: ["Otu ahịrịokwu ma ọ bụ abụọ ị chọrọ ka ndị ị na-agwa cheta ma mee ihe banyere ya", "Akụkọ afọ gị zuru ezu", "Okwuntughe", "Ndepụta ndị na-enye onyinye"], answer: 0, why: "Isi ozi dị mkpụmkpụ ma na-eduga n'omume." },
          { objective: "O1", q: "Kedu isi ozi kacha mma maka ndị nne na nna?", options: ["\"Anyị na-eme ọtụtụ ihe.\"", "\"Nkuzi n'efu ga-amalite na September 8 n'ụlọ obodo. Debanye aha tupu September 1.\"", "\"Mụtakwuo.\"", "\"Kwado anyị.\""], answer: 1, why: "Ọ na-ekwu ihe ọ bụ, ihe mere ya na ihe a ga-eme ọzọ." },
          { objective: "O2", q: "Ị chọrọ itinye foto ụmụaka nọ na mmemme gị. Ihe ị chọrọ bụ:", options: ["Ọ dịghị ihe", "Filter", "Ikike e dere ede site n'aka nne ma ọ bụ nna ma ọ bụ onye nlekọta", "Caption AI"], answer: 2, why: "Foto ụmụaka chọrọ ikike." },
          { objective: "O3", q: "Okwu e hotara n'edemede akwụkwọ akụkọ kwesịrị isi n'aka:", options: ["AI", "Onye ọrụ afọ ofufo e chepụtara", "Onye a ma ama i nweghị mgbe gị na ya kparịtara", "Ezi mmadụ kwenyere ka e hota ya"], answer: 3, why: "Okwu e chepụtara echepụta abụghị eziokwu." },
          { objective: "O3", q: "Gịnị mere a ga-eji tinye njikọ unsubscribe n'akwụkwọ akụkọ email?", options: ["Ka ndị mmadụ nwee ike ịkwụsị inweta email", "Iji nweta onyinye ọzọ", "Ọ bụ ihe ịchọ mma", "Iji kesaa data"], answer: 0, why: "Ndị mmadụ kwesịrị inwe ike ịpụ." }
        ]
      }
    },
    {
      name: "Isi 2: Iru onye ọ bụla aka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Okwu dị mfe na asụsụ ndị ọzọ",
          minutes: 5,
          goal: "Jiri AI dee mgbasa ozi ọzọ n'okwu dị mfe ma dee ntụgharị maka nlele.",
          text: [
            "Ọtụtụ ndị nọ n'obodo gị na-agụ n'asụsụ nke abụọ, na-agụ n'ọkwa mbido, ma ọ bụ nọ n'ọrụ ma na-agụ ngwa ngwa. Okwu dị mfe (plain language) na-enyere onye ọ bụla aka: ahịrịokwu dị mkpụmkpụ, okwu a na-ejikarị, ihe kacha mkpa na mbụ.",
            "Jụọ: \"Dee nke a ọzọ n'ọkwa ịgụ akwụkwọ klas 6. Ahịrịokwu dị mkpụmkpụ. Tinye ụbọchị, ebe na otu esi edebanye aha na mbụ.\" Wee: \"Tụgharịa nke a gaa n'asụsụ Spanish maka ezinụlọ dị n'obodo anyị.\"",
            "Ntụgharị AI nwere ike ịbụ ihe ezighi ezi ma ọ bụ ịda iche. Mgbe niile, mee ka onye na-asụ asụsụ ahụ nke ọma site n'obodo gị lelee ntụgharị tupu i kesaa ya."
          ],
          steps: ["Rịọ AI ka o dee ederede gị ọzọ n'ọkwa ịgụ akwụkwọ klas 6.", "Tinye ụbọchị, ebe na omume na mbụ.", "Rịọ ntụgharị gaa n'asụsụ obodo gị na-asụ.", "Mee ka onye na-asụ ya nke ọma lelee ya."],
          words: [["Okwu dị mfe (plain language)", "ide ihe ndị mmadụ ga-aghọta na nke mbụ ha gụrụ ya."], ["Ọkwa ịgụ akwụkwọ (reading level)", "otu ederede si dị mfe ịgụ; klas dị ala ka mfe."]],
          slides: [
            { title: "Okwu dị mfe na-enyere onye ọ bụla aka", bullets: ["Ahịrịokwu dị mkpụmkpụ, okwu a na-ejikarị", "Ihe kacha mkpa na mbụ"] },
            { title: "Jụọ AI", bullets: ["\"Dee ya ọzọ n'ọkwa ịgụ akwụkwọ klas 6\"", "\"Tụgharịa nke a gaa n'asụsụ Spanish\""] },
            { title: "Lelee ntụgharị", bullets: ["AI nwere ike ime mperi", "Onye obodo na-asụ ya nke ọma na-elele ya"] }
          ],
          tryIt: "Were isi ozi gị na otu ozi soshal midia. Rịọ AI ka o dee ha ọzọ n'okwu dị mfe ma tụgharịa ha gaa n'asụsụ obodo gị na-asụ. Dee onye nwere ike ilele ntụgharị ahụ.",
          youCanNow: "ime ka mgbasa ozi dị mfe ma dee ntụgharị mbụ maka onye na-asụ asụsụ ahụ nke ọma ilele.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke bụ akụkụ nke okwu dị mfe?", options: ["Ahịrịokwu ogologo", "Okwu teknụzụ", "Ahịrịokwu dị mkpụmkpụ na okwu a na-ejikarị", "Ihe kacha mkpa na njedebe"], answer: 2, why: "Okwu dị mfe na-eji ahịrịokwu dị mkpụmkpụ, okwu a na-ejikarị, na ihe kacha mkpa na mbụ." },
            { objective: "O4", q: "AI tụgharịrị flaya gị gaa n'asụsụ Vietnamese, ma ọ dịghị onye ọrụ na-asụ ya. Gịnị ka ị ga-eme?", options: ["Kesaa ya otu o sila dị", "Rịọ AI ka o lelee ntụgharị nke ya", "Jiri naanị bekee", "Chọta onye na-asụ ya nke ọma site n'obodo gị ka o buru ụzọ lelee ya"], answer: 3, why: "Ntụgharị AI nwere ike ịbụ ihe ezighi ezi, ya mere onye obodo na-asụ ya nke ọma na-elele ha tupu e kesaa ha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka mgbasa ozi dịrị onye ọ bụla",
          minutes: 4,
          goal: "Dee nkọwa foto ma mee ka ozi na flaya dị mfe maka onye ọ bụla iji.",
          text: [
            "Mgbasa ozi onye ọ bụla nwere ike iji (accessible) na-arụ ọrụ maka ndị kpuru ìsì ma ọ bụ ndị anya ha adịghị ike, ndị ntị chiri, ma ọ bụ ndị na-eji screen reader. Alt text bụ obere nkọwa foto nke screen reader na-agụpụta n'olu dị elu.",
            "AI nwere ike ide alt text mbụ: \"Dee alt text erughị mkpụrụedemede 125 maka foto ndị ọrụ afọ ofufo na-ahazi tin nri na mmemme nnakọta nri.\" Lelee na ọ na-akọwa ihe dị n'ezie na foto ahụ.",
            "Ihe ndị ọzọ dị mfe: tinye captions na vidiyo, jiri contrast agba siri ike na flaya, etinyela okwu dị mkpa naanị n'ime foto, ma dee hashtag na mkpụrụedemede ukwu (#FeedOurCity) ka screen reader kwuo ha nke ọma."
          ],
          steps: ["Dee alt text maka foto ọ bụla (AI nwere ike ide nke mbụ).", "Tinye captions na vidiyo.", "Jiri contrast siri ike na flaya.", "Debe nkọwa dị mkpa n'ederede, ọ bụghị naanị na foto.", "Malite okwu ọ bụla dị na hashtag na mkpụrụedemede ukwu."],
          words: [["Alt text", "obere nkọwa e dere ede maka foto, nke screen reader na-agụpụta."], ["Screen reader", "mmemme na-agụpụta ederede dị na ihuenyo maka ndị kpuru ìsì ma ọ bụ ndị anya ha adịghị ike."], ["Contrast", "otu agba ederede si dị iche n'agba azụ ya."]],
          slides: [
            { title: "Mgbasa ozi maka onye ọ bụla", bullets: ["Na-arụ ọrụ maka ndị kpuru ìsì, ndị anya adịghị ike ma ọ bụ ndị ntị chiri", "Alt text na-akọwa foto"] },
            { title: "AI na-ede alt text mbụ", bullets: ["Erughị mkpụrụedemede 125", "Lelee na ọ dabara na foto ahụ"] },
            { title: "Ihe ndị dị mfe", bullets: ["Captions na vidiyo", "Contrast siri ike", "Nkọwa dị mkpa n'ederede, ọ bụghị naanị na foto", "#CapitalizeHashtags"] }
          ],
          tryIt: "Dee alt text maka foto ndị so ozi anọ gị, AI na-ede nke mbụ, gị na-elele ya. Dozie hashtag ọ bụla ka okwu ọ bụla malite na mkpụrụedemede ukwu.",
          youCanNow: "ime ka ozi na flaya dịrị onye ọ bụla site n'alt text, captions na nhazi doro anya.",
          quickCheck: [
            { objective: "O5", q: "Onye ka alt text na-enyere aka?", options: ["Ndị na-eji screen reader", "Naanị igwe nchọta (search engine)", "Naanị ndị ọrụ", "Ndị nwere ịntanetị na-agba ọsọ"], answer: 0, why: "Screen reader na-agụpụta alt text maka ndị kpuru ìsì ma ọ bụ ndị anya ha adịghị ike." },
            { objective: "O5", q: "Flaya gị nwere ụbọchị na ebe naanị n'ime foto. Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe", "Tinyekwa nkọwa ndị dị mkpa n'ederede", "Mee ka foto ahụ buo ibu", "Tinye foto ndị ọzọ"], answer: 1, why: "Screen reader enweghị ike ịgụ okwu dị n'ime foto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhazi otu ọnwa mgbasa ozi",
          minutes: 5,
          goal: "Tinye akụkụ mgbasa ozi gị na kalenda izu anọ.",
          text: [
            "Kalenda dị mfe na-eme ka mgbasa ozi gaa n'ihu n'usoro. Depụta izu anọ. Maka izu ọ bụla, dee ihe na-apụ, n'ọwa ole, na onye na-etinye ya.",
            "AI nwere ike ịtụ aro usoro oge: \"Ndị a bụ akụkụ m nwere: [ndepụta]. Ihe omume anyị bụ na [ụbọchị]. Mee kalenda mgbasa ozi izu anọ dị ka tebụl: izu, ọwa, akụkụ, onye na-etinye ya.\" Lelee ụbọchị ndị ahụ na ezi kalenda gị.",
            "Emesịa, lee ihe rụrụ ọrụ: ndebanye aha, nkwupụta (comments), nkesa (shares), azịza. Nọgide na-eme ihe kpọbatara ndị mmadụ."
          ],
          steps: ["Depụta akụkụ gị: ozi, akwụkwọ akụkọ, flaya.", "Rịọ AI tebụl kalenda izu anọ.", "Lelee ụbọchị na ezi kalenda gị.", "Kpebie onye ga-etinye akụkụ ọ bụla.", "Mgbe ọnwa ahụ gwụrụ, dee ihe kpọbatara ndị mmadụ."],
          words: [["Kalenda ihe a ga-etinye (content calendar)", "usoro oge nke ihe ị ga-etinye ma ọ bụ zipu, na mgbe."], ["Ọwa (channel)", "ụzọ ị na-esi eru ndị mmadụ aka: soshal midia, email, flaya, ọkwa."]],
          slides: [
            { title: "Kalenda dị mfe", bullets: ["Izu anọ", "Ihe na-apụ, ebe, na onye na-etinye ya"] },
            { title: "Rịọ AI tebụl", bullets: ["Izu, ọwa, akụkụ, onye na-etinye ya", "Lelee ụbọchị n'onwe gị"] },
            { title: "Mụta ihe site na nsonaazụ", bullets: ["Ndebanye aha, comments, shares", "Nọgide na ihe kpọbatara ndị mmadụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ mgbasa ozi otu ọnwa gị. Tinye isi ozi gị, ozi anọ nwere alt text, edemede akwụkwọ akụkọ na ederede flaya n'okwu dị mfe na kalenda izu anọ.",
          youCanNow: "iji AI hazie ma dee otu ọnwa mgbasa ozi maka òtù na-adịghị achọ uru.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ị ga-ele mgbe otu ọnwa mgbasa ozi gachara?", options: ["Naanị ozi ole i tinyere", "Agba flaya ndị ahụ", "Ndebanye aha, comments, shares na azịza", "Ozi ìgwè ndị ọzọ"], answer: 2, why: "Lee ihe rụrụ ọrụ: ndebanye aha, comments, shares na azịza." },
            { objective: "O6", q: "Kalenda AI tinyere ncheta ikpeazụ mgbe ụbọchị ihe omume gị gachara. Gịnị ka ị ga-eme?", options: ["Jiri ya otu o si dị", "Hichapụ ncheta ahụ", "Tinye ya ugboro abụọ", "Bugharịa ya tupu ihe omume ahụ, na-elele ụbọchị na ezi kalenda gị"], answer: 3, why: "Lelee ụbọchị AI na ezi kalenda gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iru onye ọ bụla aka",
        questions: [
          { objective: "O4", q: "Gịnị bụ okwu dị mfe?", options: ["Ide ihe n'enweghị akara edemede", "Ide ihe ndị mmadụ ga-aghọta na nke mbụ", "Ahịrịokwu ogologo nke ukwuu", "Naanị okwu teknụzụ"], answer: 1, why: "Okwu dị mfe na-edo anya na nke mbụ a gụrụ ya." },
          { objective: "O4", q: "AI tụgharịrị flaya gị gaa n'asụsụ Spanish. Tupu i kesaa ya, ị kwesịrị:", options: ["Ikesa ya ozugbo", "Iji AI tụgharịa ya ọzọ", "Ime ka onye na-asụ ya nke ọma lelee ya", "Ime ka ọ dị mkpụmkpụ"], answer: 2, why: "Ntụgharị AI nwere ike ịbụ ihe ezighi ezi." },
          { objective: "O5", q: "Gịnị bụ alt text?", options: ["Okwuntughe ndabere", "Ozi nke abụọ", "Ụdị mkpụrụedemede (font)", "Obere nkọwa foto nke screen reader na-agụ"], answer: 3, why: "Alt text na-eme ka foto dịrị onye ọ bụla." },
          { objective: "O5", q: "Kedu hashtag kacha mfe maka screen reader?", options: ["#FeedOurCity", "#feedourcity", "#FEEDOURCITY", "#f_o_c"], answer: 0, why: "Mkpụrụedemede ukwu na-enyere screen reader aka ikwu okwu ọ bụla." },
          { objective: "O6", q: "Gịnị bụ content calendar?", options: ["Ndepụta ezumike", "Usoro oge nke ihe ị na-etinye ma ọ bụ na-ezipu, na mgbe", "Ndepụta ụbọchị ọmụmụ ndị na-enye onyinye", "Fọm ụtụ isi"], answer: 1, why: "Ọ na-eme ka mgbasa ozi gaa n'ihu n'usoro ma hazie nke ọma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Mgbasa Ozi na Iru Obodo Aka",
    questions: [
      { objective: "O1", q: "Ezigbo mgbasa ozi na-agwa:", options: ["Onye ọ bụla otu ozi ahụ", "Ọ dịghị onye kpọmkwem", "Otu ìgwè n'otu oge", "Naanị ndị isi òtù (board)"], answer: 2, why: "Ìgwè dị iche iche na-elebara ihe dị iche anya." },
      { objective: "O1", q: "Isi ozi kwesịrị ikwu:", options: ["Akụkọ ndụ gị niile", "Naanị akara (logo) gị", "Mmefu ego gị", "Ihe ọ bụ, ihe mere o ji dị ha mkpa, na ihe ha ga-eme ọzọ"], answer: 3, why: "Akụkụ ndị ahụ na-eduga n'omume." },
      { objective: "O1", q: "Ezigbo ụzọ iji AI mee ka ozi ka mma bụ:", options: ["Ịrịọ ụdị atọ dị mkpụmkpụ ma họrọ nke kacha doo anya", "Ịrịọ otu ụdị dị ogologo nke ukwuu", "Ịrịọ ya ka ọ họọrọ ìgwè ị ga-agwa", "Ịghara idezi ya"], answer: 0, why: "Itụnyere ụdị dị iche iche na-enyere gị aka ịhọrọ." },
      { objective: "O2", q: "Ozi soshal midia na-arụ ọrụ nke ọma mgbe ha:", options: ["Dị ogologo ma dị n'ozuzu", "Dị mkpụmkpụ, bụrụ eziokwu ma jedebe n'otu omume", "Enweghị omume ọ bụla", "Jupụtara n'okwu siri ike"], answer: 1, why: "Ozi dị mkpụmkpụ ma doo anya na-enweta azịza." },
      { objective: "O2", q: "Kedu nke bụ otu n'ime ụdị ozi anọ dị na nkuzi ahụ?", options: ["Akwụkwọ ụtụ isi", "Nkwekọrịta iwu", "Ncheta ikpeazụ", "Ịtọgharị okwuntughe"], answer: 2, why: "Ncheta na-enyere ndị mmadụ aka ime ihe tupu oge agwụ." },
      { objective: "O2", q: "Gịnị bụ caption?", options: ["Okpu", "Onyinye onye na-enye onyinye", "Adreesị weebụ", "Ederede na-eso foto ma ọ bụ vidiyo"], answer: 3, why: "Caption na-akọwa foto ma ọ bụ vidiyo ahụ." },
      { objective: "O2", q: "Tupu i kesaa akụkọ onye ahịa, ihe ị chọrọ bụ:", options: ["Ikike ya, na enweghị nkọwa na-egosi onye ọ bụ ma ọ bụrụ na o kwetaghị", "Ọ dịghị ihe", "Nkọwa ụlọ akụ ya", "Okwu a ma ama e hotara"], answer: 0, why: "Akụkọ chọrọ ikike na nzuzo." },
      { objective: "O3", q: "Edemede akwụkwọ akụkọ kwesịrị ịkọ:", options: ["Ihe omume ọ bụla n'afọ ahụ", "Otu akụkọ nwere otu ezi nọmba na otu esi enye aka", "Naanị aha ndị na-enye onyinye", "Ọ dịghị ihe banyere ebumnuche òtù ahụ"], answer: 1, why: "Otu akụkọ lekwasịrị anya ka mfe ịgụ." },
      { objective: "O3", q: "Gịnị ka ị ga-elele n'ihe mbụ akwụkwọ akụkọ AI dere?", options: ["Naanị agba isiokwu", "Ọ dịghị ihe", "Nọmba, aha, ụbọchị na okwu e hotara ọ bụla", "Naanị ọnụọgụ okwu"], answer: 2, why: "AI nwere ike ime mperi n'eziokwu." },
      { objective: "O3", q: "Njikọ unsubscribe na-ekwe ka ndị mmadụ:", options: ["Nye onyinye ugboro abụọ", "Bụrụ ndị ọrụ afọ ofufo", "Gbanwee okwuntughe gị", "Kwụsị inweta email gị"], answer: 3, why: "Ndị mmadụ kwesịrị inwe ike ịpụ." },
      { objective: "O4", q: "Kedu prompt na-eme ka ederede dị mfe ịgụ?", options: ["\"Dee ya ọzọ n'ọkwa ịgụ akwụkwọ klas 6 na ahịrịokwu dị mkpụmkpụ.\"", "\"Mee ka o sie ike karị.\"", "\"Tinye okwu siri ike.\"", "\"Mee ka ọ dị ogologo.\""], answer: 0, why: "Ọkwa ịgụ akwụkwọ dị ala ka mfe." },
      { objective: "O4", q: "N'okwu dị mfe, gịnị na-abụ ụzọ?", options: ["Akụkọ ogologo", "Ihe kacha mkpa, dị ka ụbọchị, ebe na omume", "Ekele nye ndị isi òtù", "Ndetu iwu"], answer: 1, why: "Ndị na-agụ ngwa ngwa na-ebu ụzọ hụ nkọwa ndị dị mkpa." },
      { objective: "O4", q: "Onye kwesịrị ilele ntụgharị AI?", options: ["AI ọzọ", "Ọ dịghị onye", "Onye na-asụ asụsụ ahụ nke ọma site n'obodo gị", "Weebụsaịtị ọ bụla"], answer: 2, why: "Ndị na-asụ ya nke ọma na-ahụ mperi." },
      { objective: "O5", q: "Screen reader bụ:", options: ["Onye na-agụ ihuenyo", "Televishọn", "Igwe mbipụta", "Mmemme na-agụpụta ederede dị na ihuenyo n'olu dị elu"], answer: 3, why: "Ọ na-enyere ndị kpuru ìsì ma ọ bụ ndị anya ha adịghị ike aka." },
      { objective: "O5", q: "AI dere alt text mbụ maka foto. Ị kwesịrị:", options: ["Ilele na ọ dabara n'ihe dị n'ezie na foto ahụ", "Iji ya n'eleghị ya anya", "Ihichapụ foto ahụ", "Ime ka ọ bụrụ okwu 500"], answer: 0, why: "AI nwere ike ịkọwa foto n'ụzọ ezighi ezi." },
      { objective: "O5", q: "Kedu ihe dị mfe na-eme ka vidiyo dịrị onye ọ bụla?", options: ["Gbanyụọ ụda", "Tinye captions", "Mee ka ọ dị ogologo", "Jiri obere mkpụrụedemede"], answer: 1, why: "Captions na-enyere ndị ntị chiri aka, na ndị na-ekiri n'enweghị ụda." },
      { objective: "O5", q: "Gịnị mere ị ga-eji zere itinye nkọwa dị mkpa naanị n'ime foto?", options: ["Foto megidere iwu", "Ọ na-efu ego karị", "Screen reader enweghị ike ịgụ okwu dị n'ime foto", "Ndị na-enye onyinye anaghị achọ foto"], answer: 2, why: "Ederede dị n'ozi na-eru onye ọ bụla aka." },
      { objective: "O6", q: "Tebụl content calendar kwesịrị inwe:", options: ["Naanị agba", "Ego ndị na-enye onyinye nyere", "Okwuntughe", "Izu, ọwa, akụkụ na onye na-etinye ya"], answer: 3, why: "Nke a na-eme ka mgbasa ozi dị n'usoro." },
      { objective: "O6", q: "AI mere kalenda mgbasa ozi gị. Tupu i jiri ya:", options: ["Lelee ụbọchị ya na ezi kalenda gị", "Tinye ihe niile taa", "Kwere ụbọchị ọ bụla", "Hichapụ ya"], answer: 0, why: "AI nwere ike ime mperi n'ụbọchị." },
      { objective: "O6", q: "Mgbe otu ọnwa mgbasa ozi gachara, ị kwesịrị:", options: ["Ghara ilele nsonaazụ mgbe ọ bụla", "Dee ihe kpọbatara ndị mmadụ ma nọgide na-eme ya", "Hichapụ ozi niile", "Kwụsị mgbasa ozi niile"], answer: 1, why: "Nsonaazụ na-egosi ihe na-arụ ọrụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 7, 10, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ìgwè na isi ozi", objective: "O1", notYet: "Enweghị otu ìgwè doro anya, ma ọ bụ ozi ahụ enweghị nzọụkwụ ọzọ.", meets: "Otu ìgwè na ozi otu ahịrịokwu ma ọ bụ abụọ nwere ihe ọ bụ, ihe mere ya na ihe a ga-eme ọzọ.", exceeds: "Onye na-amụ ihe nwalere ụdị atọ ma nwee ike ikwu ihe mere o ji họrọ nke a." },
      { name: "Ozi soshal midia anọ", objective: "O2", notYet: "Ozi erughị anọ, ma ọ bụ foto ma ọ bụ akụkọ enweghị ikike.", meets: "Ozi anọ dị mkpụmkpụ n'ụdị anọ ahụ, nke ọ bụla na-ejedebe n'otu omume, nwee ikike maka foto na akụkọ niile.", exceeds: "Ozi ọ bụla dabara n'ogologo platform ya." },
      { name: "Edemede akwụkwọ akụkọ", objective: "O3", notYet: "E leleghị nọmba, aha, ụbọchị ma ọ bụ okwu e hotara.", meets: "Ihe dị ka okwu 200, otu akụkọ, otu ezi nọmba na otu esi enye aka, nke e lelere niile.", exceeds: "Nwere ezi okwu e hotara nke onye ahụ kwenyere." },
      { name: "Dị mfe ma dịrị onye ọ bụla", objective: "O5", notYet: "Flaya siri ike ịgụ, ma ọ bụ foto enweghị alt text.", meets: "Flaya n'okwu dị mfe nwere nkọwa dị mkpa na mbụ, na alt text maka foto ọ bụla dabara na foto ahụ.", exceeds: "Nwekwara ntụgharị onye na-asụ ya nke ọma lelere na hashtag a na-agụ nke ọma." },
      { name: "Kalenda izu anọ", objective: "O6", notYet: "Enweghị kalenda, ma ọ bụ ụbọchị adabaghị na ezi kalenda.", meets: "Tebụl izu anọ nwere izu, ọwa, akụkụ na onye na-etinye ya, nke e lelere ụbọchị ya.", exceeds: "Na-ekwu otu a ga-esi soro nsonaazụ mgbe ọnwa ahụ gwụrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Òtù ndị mere otu ọnwa mgbasa ozi a hazịrị n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndebanye aha mmemme ma ọ bụ ọnụọgụ ndị bịara ihe omume a kọrọ tupu na mgbe ọnwa mgbasa ozi ahụ gachara",
      "Òtù ndị na-etinye alt text na ntụgharị na mgbasa ozi ha"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu",
      "Nkọwa ọha maka otu ezi mmemme ma ọ bụ ihe omume, na foto i nwere ikike iji",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ka ndị na-amụ ihe họrọ otu ezi mmemme ma ọ bụ ihe omume na-abịa tupu nnọkọ ahụ.",
      "Chetara ndị na-amụ ihe banyere ikike e dere ede maka foto ụmụaka na ndị ahịa.",
      "Kpọọ onye obodo na-asụ asụsụ ahụ nke ọma ka o lelee ntụgharị ọ bụla e mere n'oge nnọkọ ahụ.",
      "Nwalee screen reader n'ekwentị ọnụ ka ndị na-amụ ihe nụ ihe mere alt text na hashtag ji dị mkpa.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
