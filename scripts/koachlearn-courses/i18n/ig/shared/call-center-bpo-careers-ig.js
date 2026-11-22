"use strict";

// Koach Learn course (Igbo translation of shared/call-center-bpo-careers.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const BLS_CSR = { name: "US Bureau of Labor Statistics: Customer Service Representatives (education, training, schedules, work environment)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP: IT and Business Process Association Philippines (the Philippine IT-BPM industry association)", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "US Federal Trade Commission: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "US Federal Trade Commission: report a scam (US)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "IOM IRIS: ethical recruitment and the Employer Pays Principle", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "International Labour Organization (ILO): fair recruitment", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Philippines: Technical Education and Skills Development Authority (training and certification; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency: youth urged to embrace the Ajira Digital Program (government programme for online work)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers-ig",
  lang: "ig",
  translationOf: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Ọrụ Call Center na Outsourcing (BPO)",
  skills: "Ịmara ụdị ọrụ BPO, Ịhụ ndị na-achọ ndị ọrụ adịgboroja, Ịgafe ule e ji ewe mmadụ n'ọrụ, Ịza oku dịka QA scorecard si chọọ, Iru ọnụọgụ call center, Ịhazi shift na ụzọ ọrụ gị",
  outcome: "ịchọ ọrụ call center ma ọ bụ outsourcing (BPO) nwere atụmatụ: ịhọrọ ụdị ọrụ BPO dabara gị, ịlele na onye were mmadụ n'ọrụ bụ ezi onye, ịmụ ule ịpị mkpịsị (typing), ule olu na oku omume, ịza oku dịka scorecard ịdị mma si chọọ, ịkọwa ọnụọgụ a ga-eji tụọ ọrụ gị, na ịhazi shift gị na nzọụkwụ gị na-esote.",
  about: [
    "Call center na ụlọ ọrụ outsourcing (BPO) na-ewe ọtụtụ ndị nwere akwụkwọ sekọndrị na ezigbo nka nkwurịta okwu, n'ebe dị ka Philippines, India, Kenya, Nigeria, Ghana, Egypt, Morocco, Senegal, Mexico, Colombia na United States. Ọtụtụ n'ime ha na-akwụ ụgwọ maka ọzụzụ, ụfọdụ na-ekwekwa ka ndị mmadụ rụọ ọrụ n'ụlọ.",
    "Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị ntorobịa, ndị na-agbanwe ọrụ na onye ọ bụla chọrọ ịmara ka ọrụ a si dị n'ezie tupu ha etinye akwụkwọ. Ị ga-amụta ụdị ọrụ BPO, otu esi ahụ onye na-achọ ndị ọrụ adịgboroja, otu ule e ji ewe mmadụ si arụ ọrụ, otu e si enye oku akara, na otu ndị mmadụ si arị elu.",
    "Ihe ọmụmụ a na-akwado gị itinye akwụkwọ; ọ naghị enye gị ọrụ ma ọ bụ asambodo. Ụlọ ọrụ ọ bụla nwere ule nke ya. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma kwụsị n'ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ ọrụ BPO nke ụbọchị 90 nke gị: ụdị ọrụ BPO ị chọrọ na ihe kpatara ya, ndị were mmadụ n'ọrụ atọ ị lelere na weebụsaịtị gọọmentị ha, ndepụta gị maka ịhụ aghụghọ, usoro omume nwere ụbọchị maka ịpị mkpịsị, ịgụpụta ihe n'olu dị elu na oku omume, otu oku omume i dekọrọ ma tụọ ya akara site na QA scorecard ihe atụ, atụmatụ shift gị ma ọ bụ ọrụ n'ụlọ, na otu nzọụkwụ elu ị chọrọ n'ime otu afọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-achọ ọrụ ndị gbara ihe dị ka afọ 18 gaa n'ihu n'Africa, Asia, Latin America na US: ndị gụchara sekọndrị, ndị gụsịrị mahadum na-enweghị ọrụ, ndị okenye na-agbanwe ọrụ, ndị na-alọghachi n'ọrụ na ndị na-asụ asụsụ nke abụọ. Ọtụtụ ga-amụ ihe ọmụmụ a n'asụsụ nke ha ma tinye akwụkwọ maka ọrụ n'asụsụ bekee, French ma ọ bụ Spanish.",
    startingPoint: "Ha nwere ike ikwu okwu na mmadụ ma jiri ekwentị; ọtụtụ nwere ike iji kọmputa ntakịrị. Ọ bụ mmadụ ole na ole maara otu BPO si ewe mmadụ n'ọrụ, ule ndị ahụ, ma ọ bụ otu e si atụ ọrụ call center. Ọtụtụ ahụla mgbasa ozi ọrụ na soshal midia mana ha amaghị ịmata nke bụ eziokwu na nke adịgboroja.",
    gap: "Ọrụ BPO bụ ọrụ mbụ a haziri ahazi nke ọtụtụ mmadụ na-enweta, mana ndị na-etinye akwụkwọ na-ada ule ha amaghị maka ya, na-atụfu ego n'aka ndị na-achọ ndị ọrụ adịgboroja na-ajụ ụgwọ, ma ọ bụ na-ahapụ ọrụ n'ọnwa mbụ n'ihi na shift na ebumnuche ọnụọgụ mere ha mberede. Ndị na-amụ ihe kwesịrị ịmara ọrụ ahụ, ilele onye were mmadụ n'ọrụ, ịmụ ule ndị ahụ ma hazie maka usoro oge.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a sụgharịrị ya n'asụsụ iri",
      "Ngwaọrụ: ọtụtụ mgbe naanị ekwentị; ụfọdụ nkuzi ka mma na kọmputa, mana enwere ike ime ọrụ ọ bụla n'akwụkwọ",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Ule e ji ewe mmadụ, ụgwọ ọnwa, shift na iwu ọrụ dị iche site na mba na ụlọ ọrụ; ndị na-amụ ihe na-elele onye were mmadụ n'ọrụ na ministri ọrụ nke mba ha",
      "Ihe egwu dị elu nke aghụghọ: enweghị ezi nọmba ID, okwuntughe ma ọ bụ ozi akaụntụ ụlọ akụ n'ọrụ omume ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Ọrụ Ndị Ahịa Kacha Mma\" na \"AI maka Ọrụ Ilekọta Ndị Ahịa\" bụ ezigbo ihe ọmụmụ ị nwere ike iwere na-esote ma ọ bụ n'otu oge; ndị na-amụ bekee nwere ike iwere \"Bekee maka Ebe Ọrụ (ESL)\" n'otu oge."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa ọrụ BPO ise", action: "ịkewa ọrụ ọ bụla dịka voice ma ọ bụ non-voice, na inbound ma ọ bụ outbound, ma kpọọ aha isi nka ọ chọrọ", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị mgbasa ozi ọrụ ma ọ bụ ozi onye na-achọ ndị ọrụ", action: "ilele ọrụ ahụ maka ihe ịdọ aka na ntị nke onye na-achọ ndị ọrụ adịgboroja ma kwuo ihe ị ga-eme ọzọ", standard: "na-akpọ aha opekata mpe ihe ịdọ aka na ntị anọ, n'akwụghị ụgwọ ọ bụla ma ọ bụ inye akwụkwọ mbụ gị (original)" },
    { id: "O3", condition: "Site n'iji script omume na ekwentị ma ọ bụ akwụkwọ", action: "imecha oku omume na onye ahịa nke na-amalite, na-akwado onye ọ bụ, na-edozi nsogbu, na-ekwughachi ihe e mere ma na-emechi", standard: "na-enweta Ruru eru n'ahịrị ọ bụla nke QA scorecard ihe atụ" },
    { id: "O4", condition: "Mgbe e nyere gị akụkọ agent ihe atụ", action: "ịkọwa ihe handle time, first contact resolution, customer satisfaction, QA score na schedule adherence na-atụ", standard: "ya na otu ụzọ eziokwu iji meziwanye nke ọ bụla" },
    { id: "O5", condition: "Maka ọrụ shift ma ọ bụ ọrụ n'ụlọ ị chọrọ", action: "ide atụmatụ nhazi maka ụra, njem, ngwaọrụ na oge izu ike", standard: "na-ekpuchi opekata mpe ihe ise, gụnyere ihe nkwado maka ọkụ latrik ma ọ bụ ịntanetị" },
    { id: "O6", condition: "Site n'iji ebumnuche gị na ezi weebụsaịtị ndị were mmadụ n'ọrụ", action: "ide atụmatụ ụbọchị 90 iji nweta ọrụ na nzọụkwụ na-esote n'ọkwa ọrụ BPO", standard: "nwere ụbọchị, ndị were mmadụ n'ọrụ atọ e lelere na otu ebumnuche uto" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịbanye n'ọrụ BPO",
      lessons: [
        {
          title: "Ihe ọrụ BPO bụ na ụdị ọrụ dị iche iche",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kewaa ọrụ BPO dịka voice ma ọ bụ non-voice, na inbound ma ọ bụ outbound, ma kpọọ aha nka nke ọ bụla chọrọ.",
          text: [
            "BPO pụtara business process outsourcing: otu ụlọ ọrụ na-akwụ ụlọ ọrụ ọzọ ụgwọ ka o mee akụkụ ọrụ ya, dị ka ịza ndị ahịa, ịhazi fọm ma ọ bụ ilele ihe e bipụtara n'ịntanetị. Ụlọ ọrụ na-akwụ ụgwọ bụ client, a na-akpọkwa ọrụ maka otu client account ma ọ bụ campaign.",
            "Ọrụ voice bụ n'ekwentị. Inbound pụtara na ndị ahịa na-akpọ gị (enyemaka maka ụgwọ, ihe e zitere, atụmatụ ekwentị). Outbound pụtara na ị na-akpọ ha (ire ahịa, nnyocha, ncheta, ịnakọta ụgwọ). Ọrụ non-voice bụ chat, email, ịza ozi na soshal midia, itinye data, ọrụ azụ ụlọ ọrụ (back office) na ilele ihe e bipụtara (content moderation); ha chọrọ ezigbo ide ihe na ịpị mkpịsị karịa ikwu okwu.",
            "BPO na-ewe ọtụtụ mmadụ n'ọrụ n'ọtụtụ mba. Philippines na India na-arụrụ ọtụtụ client na-asụ bekee ọrụ. Kenya, Nigeria, Ghana, Egypt na South Africa na-eto eto. Morocco, Tunisia, Senegal, Côte d'Ivoire, Madagascar na Mauritius na-arụrụ client na-asụ French ọrụ. Mexico na Colombia na-arụrụ client US na ndị na-asụ Spanish ọrụ. Na US, call center na-ewe mmadụ n'ihe fọrọ nke nta ka ọ bụrụ ụdị azụmahịa ọ bụla.",
            "Asụsụ na-abụkarị isi nka. Account nwere ike ịchọ bekee doro anya, French, Spanish, Arabic ma ọ bụ asụsụ ọzọ, ya na ndidi, ige ntị na nka kọmputa dị mfe. Ọtụtụ ọrụ na-achọ akwụkwọ sekọndrị, ọ bụghị digrii mahadum."
          ],
          words: [
            ["BPO", "business process outsourcing: otu ụlọ ọrụ na-arụrụ ụlọ ọrụ ọzọ akụkụ ọrụ ya."],
            ["Client na account", "client bụ ụlọ ọrụ na-akwụ BPO ụgwọ; account (ma ọ bụ campaign) bụ ọrụ maka client ahụ."],
            ["Voice na non-voice", "ọrụ voice bụ oku ekwentị; ọrụ non-voice bụ chat, email, data na ọrụ azụ ụlọ ọrụ."],
            ["Inbound na outbound", "inbound: ndị ahịa na-akpọtụrụ gị. Outbound: ị na-akpọtụrụ ndị ahịa."],
            ["Content moderation", "ilele ihe e bipụtara, foto ma ọ bụ vidiyo ma ha dabara n'iwu nke ikpo okwu ahụ."]
          ],
          slides: [
            { title: "BPO n'otu ahịrịokwu", bullets: ["Otu ụlọ ọrụ na-akwụ ụlọ ọrụ ọzọ ka o mee akụkụ ọrụ ya", "Ụlọ ọrụ na-akwụ ụgwọ bụ client", "Ọrụ maka otu client bụ account"] },
            { title: "Ọrụ voice", bullets: ["Inbound: ndị ahịa na-akpọ gị maka enyemaka", "Outbound: ị na-akpọ ha maka ire ahịa, nnyocha ma ọ bụ ncheta", "Isi nka: okwu doro anya, ige ntị, ndidi"] },
            { title: "Ọrụ non-voice", bullets: ["Chat, email, ịza ozi na soshal midia", "Itinye data, back office, content moderation", "Isi nka: ide ihe, ịpị mkpịsị, izi ezi"] },
            { title: "Ebe BPO na-ewe mmadụ", bullets: ["Philippines, India, Kenya, Nigeria, Ghana, Egypt", "Account French: Morocco, Tunisia, Senegal, Côte d'Ivoire", "Nso US (nearshore): Mexico, Colombia"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "N'akwụkwọ, mee tebụl nwere igbe anọ: inbound voice, outbound voice, chat ma ọ bụ email, back office. Tinye otu ọrụ ị hụrụ na mgbasa ozi n'igbe ọ bụla, dee isi nka ọ chọrọ, ma gbaa igbe kacha dabara gị gburugburu.",
          youCanNow: "ịmata ọdịiche dị n'etiti ọrụ BPO voice na non-voice, na inbound na outbound, ma họrọ ụdị dabara nka gị.",
          quickCheck: [
            { objective: "O1", q: "Ndị ahịa na-akpọ gị ka i dozie nsogbu ụgwọ ekwentị ha. Kedu ụdị ọrụ nke a bụ?", options: ["Outbound voice", "Itinye data n'back office", "Inbound voice", "Content moderation"], answer: 2, why: "Ndị ahịa na-akpọ gị, ọrụ ahụ dịkwa n'ekwentị: inbound voice." },
            { objective: "O1", q: "Kedu ọrụ chọrọ ezigbo ide ihe na ịpị mkpịsị karịa ikwu okwu?", options: ["Enyemaka email na chat", "Oku outbound maka ire ahịa", "Enyemaka inbound n'ekwentị", "Nnyocha n'ekwentị"], answer: 0, why: "Email na chat bụ ọrụ non-voice: ndị ahịa na-agụ okwu gị, ya mere ide ihe na ịpị mkpịsị kacha mkpa." }
          ]
        },
        {
          title: "Ịhụ ndị na-achọ ndị ọrụ adịgboroja na aghụghọ ọrụ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Lelee mgbasa ozi ọrụ ma ọ bụ ozi onye na-achọ ndị ọrụ maka ihe ịdọ aka na ntị nke aghụghọ ma kpebie ihe ị ga-eme.",
          text: [
            "Ezi ndị were mmadụ n'ọrụ anaghị ana gị ego ka i nweta ọrụ. Ndị na-achọ ndị ọrụ adịgboroja na-arịọ \"ụgwọ nhazi\", \"ụgwọ ọzụzụ\", \"ụgwọ ule ahụike\", \"ụgwọ uwe ọrụ\" ma ọ bụ ego maka \"ngwugwu mmalite\" ma ọ bụ ngwaọrụ. US Federal Trade Commission kwuru na ezi ndị were mmadụ n'ọrụ agaghị arịọ gị ka ị kwụọ ụgwọ iji nweta ọrụ, ọrụ mba ụwa maka ịchọ ndị ọrụ n'ụzọ ziri ezi nke ILO na IOM na-akwalitekwa ka ndị were mmadụ n'ọrụ, ọ bụghị ndị ọrụ, kwụọ ụgwọ ịchọ ndị ọrụ.",
            "Ihe ịdọ aka na ntị ndị ọzọ: ụgwọ ọnwa dị elu maka obere ọrụ; ajụjụ ọnụ naanị site n'ide ozi na WhatsApp ma ọ bụ Telegram; adreesị email n'efu kama nke ụlọ ọrụ ahụ n'onwe ya; ịmanye gị ikpebi taa; chekụ ị ga-etinye n'ụlọ akụ ma zighachi akụkụ ya; na arịrịọ maka paspọtụ gị, kaadị ID mba gị ma ọ bụ asambodo ụlọ akwụkwọ ka ha \"chekwaa\". Debe akwụkwọ mbụ gị n'onwe gị. Nye naanị oyiri, naanị nye onye were mmadụ n'ọrụ i lelere.",
            "Iji lelee onye were mmadụ n'ọrụ: chọta weebụsaịtị gọọmentị ụlọ ọrụ ahụ n'onwe gị (ejila njikọ dị n'ozi ahụ), chọọ otu ọrụ ahụ na peeji careers ya, ma tinye akwụkwọ n'ebe ahụ. Maka ọrụ mba ọzọ, lelee na ụlọ ọrụ ahụ nwere ikikere site na ministri ọrụ mba gị ma ọ bụ ụlọ ọrụ na-ahụ maka ndị ọrụ na-aga mba ọzọ. Ọ bụrụ na ihe adịghị mma, kwụsị, chekwaa ozi ndị ahụ, ma kọọ ya ndị uweojii ma ọ bụ ụlọ ọrụ mba na-ahụ maka ndị ahịa ma ọ bụ ọrụ (na US: reportfraud.ftc.gov)."
          ],
          steps: [
            "Gụọ mgbasa ozi ahụ ma depụta ihe ọ bụla na-arịọ ego ma ọ bụ akwụkwọ mbụ.",
            "Chọta weebụsaịtị gọọmentị ụlọ ọrụ ahụ n'onwe gị, ọ bụghị site na njikọ dị n'ozi ahụ.",
            "Chọọ otu ọrụ ahụ na peeji careers gọọmentị ma tinye akwụkwọ n'ebe ahụ.",
            "Maka ọrụ mba ọzọ, lelee na gọọmentị gị nyere ụlọ ọrụ na-achọ ndị ọrụ ahụ ikikere.",
            "Ọ bụrụ na ihe adịghị mma, kwụsị, chekwaa screenshot, ma kọọ ya."
          ],
          words: [
            ["Recruiter", "onye ma ọ bụ ụlọ ọrụ na-achọtara onye were mmadụ n'ọrụ ndị ọrụ."],
            ["Ụgwọ ịchọ ndị ọrụ (recruitment fee)", "ego a na-ana onye ọrụ ka o nweta ọrụ; ịchọ ndị ọrụ n'ụzọ ziri ezi na-ekwu na ndị ọrụ ekwesịghị ịkwụ ya."],
            ["Peeji careers", "akụkụ weebụsaịtị ụlọ ọrụ n'onwe ya ebe ọ na-edepụta ezi ọrụ ya."],
            ["Ụlọ ọrụ nwere ikikere", "ụlọ ọrụ na-achọ ndị ọrụ e debanyere aha na gọọmentị, nke ị nwere ike ịchọta na ndepụta gọọmentị."]
          ],
          slides: [
            { title: "Ezi ndị were mmadụ n'ọrụ anaghị ana gị ego", bullets: ["Enweghị ụgwọ nhazi, ọzụzụ, ule ahụike ma ọ bụ uwe ọrụ iji nweta ọrụ", "Akwụla ụgwọ maka ngwugwu mmalite ma ọ bụ ngwaọrụ", "Enweghị chekụ ị ga-etinye n'ụlọ akụ ma zighachi ego"] },
            { title: "Ihe ịdọ aka na ntị ndị ọzọ", bullets: ["Ụgwọ ọnwa dị elu maka obere ọrụ", "Ajụjụ ọnụ naanị site n'ide ozi na WhatsApp ma ọ bụ Telegram", "Email n'efu, ịmanye gị ikpebi taa"] },
            { title: "Debe akwụkwọ gị", bullets: ["Enyela onye ọ bụla paspọtụ, ID ma ọ bụ asambodo mbụ gị", "Nye naanị oyiri, nye onye were mmadụ n'ọrụ i lelere"] },
            { title: "Lelee, wee tinye akwụkwọ", bullets: ["Chọta weebụsaịtị gọọmentị n'onwe gị", "Tinye akwụkwọ na peeji careers gọọmentị", "Ọrụ mba ọzọ: lelee ikikere ụlọ ọrụ ahụ", "Ihe adịghị mma: kwụsị, chekwaa ihe akaebe, kọọ ya"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Gụọ ozi omume a: \"Ekele! E were gị n'ọrụ call center n'ụlọ maka 900 dollars kwa izu. Zipu 50 dollars maka akwụkwọ ọzụzụ na foto kaadị ID gị na WhatsApp taa.\" Dee ihe ịdọ aka na ntị ọ bụla ị hụrụ (e nwere opekata mpe ise) na ihe ị ga-eme.",
          youCanNow: "ịhụ onye na-achọ ndị ọrụ adịgboroja, ichekwa akwụkwọ gị, na ilele ọrụ na weebụsaịtị onye were mmadụ n'ọrụ n'onwe ya tupu i tinye akwụkwọ.",
          quickCheck: [
            { objective: "O2", q: "Onye na-achọ ndị ọrụ kwuru na i nwetala ọrụ ahụ mana ị ga-ebu ụzọ kwụọ ụgwọ ọzụzụ. Gịnị ka ị ga-eme?", options: ["Kwụọ ya, n'ihi na ọzụzụ bara uru", "Kwụọ ọkara ugbu a, ọkara ọzọ emesịa", "Rịọ enyi gị ka ọ kwụọ ya maka gị", "Kwụsị: ezi ndị were mmadụ n'ọrụ anaghị ana gị ego ka e were gị"], answer: 3, why: "Ịrịọ gị ka ị kwụọ ụgwọ iji nweta ọrụ bụ isi ihe ịrịba ama nke aghụghọ." },
            { objective: "O2", q: "Onye na-achọ ndị ọrụ maka ọrụ mba ọzọ chọrọ ijide paspọtụ gị. Kedu azịza n'enweghị nsogbu?", options: ["Nye ha nke mbụ ka ha mee ya ngwa ngwa", "Debe paspọtụ mbụ gị ma nye naanị oyiri ya onye were mmadụ n'ọrụ i lelere", "Zipu ya n'adreesị dị n'ozi ahụ", "Hapụ ya n'aka enyi onye na-achọ ndị ọrụ ahụ"], answer: 1, why: "Idebe akwụkwọ gị n'onwe gị na-echebe gị; inye ha ndị ọzọ nwere ike ịtọrọ gị n'ọrụ na-ezighi ezi." }
          ]
        },
        {
          title: "Ịgafe usoro na ule e ji ewe mmadụ n'ọrụ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Mụọ ịpị mkpịsị, ịgụpụta ihe n'olu dị elu na oku omume nke usoro BPO e ji ewe mmadụ n'ọrụ.",
          text: [
            "Usoro e ji ewe mmadụ dị iche site n'ụlọ ọrụ, mana ọtụtụ BPO na-eji ụzọ yiri ibe ya: itinye akwụkwọ n'ịntanetị; ule nwere ajụjụ ịpị mkpịsị, grama, ịgụ ihe ma ọ bụ ige ntị; ule olu ma ọ bụ asụsụ ebe ị na-agụpụta ihe n'olu dị elu ma ọ bụ na-aza ajụjụ e dekọrọ; ajụjụ ọnụ; na oku omume (mock call), obere egwuregwu ebe onye na-achọ ndị ọrụ na-eme ka onye ahịa. Mgbe ahụ, onyinye ọrụ, nlele akụkọ ndụ ma ọ bụ akwụkwọ, na ọzụzụ a na-akwụ ụgwọ.",
            "Ule olu na-elele na ndị mmadụ na-aghọta gị nke ọma: okwu doro anya, ọsọ kwụsiri ike, ezigbo grama na olu enyi. Ọ dịghị mkpa ka ị gbanwee ụda olu (accent) gị. Kwuo okwu nwayọọ nke ọma, kwuchaa okwu gị, ma mụmụọ ọnụ ọchị mgbe ị na-ekwu okwu; ndị mmadụ na-anụ ya.",
            "Mụọ ya n'ụlọ n'efu. Pịnye otu peeji site n'akwụkwọ ma ọ bụ akwụkwọ akụkọ n'ime ngwa ide ihe ọ bụla (text editor) maka nkeji ise ma gụọ okwu ole. Gụpụta obere akụkọ n'olu dị elu ma dekọọ ya n'ekwentị gị, wee gee ya ntị. Mee oku omume ya na enyi na-eme ka onye ahịa. Mgbe e were gị, a na-enwekarị ọzụzụ n'ime klas maka ngwaahịa client ahụ, wee nesting: izu mbụ gị n'ezi oku ya na enyemaka ọzọ."
          ],
          steps: [
            "Ịpị mkpịsị: pịa maka nkeji 5 site na peeji e bipụtara, gụọ okwu ole, kewaa ya na 5, ma meghachi ya kwa ụbọchị.",
            "Ịgụpụta n'olu dị elu: dekọọ akụkọ nkeji 1, gee ntị, ma dozie okwu ndị i kwuru ọsọ ọsọ ma ọ bụ ndị i wepụrụ.",
            "Ige ntị: ka enyi gụọ obere ozi, wee dee ya ma lelee ya.",
            "Oku omume: enyi na-eme ka onye ahịa nwere obere nsogbu; ị na-amalite, ajụ ajụjụ, dozie ya ma mechie."
          ],
          words: [
            ["Assessment", "ule na-elele nka dị ka ịpị mkpịsị, grama, ịgụ ihe na ige ntị."],
            ["Okwu kwa nkeji (words per minute)", "okwu ole ị na-apị n'otu nkeji; otu ụzọ e si atụ ọsọ ịpị mkpịsị."],
            ["Mock call (oku omume)", "oku omume ebe mmadụ na-eme ka onye ahịa, nke a na-eji n'iwe mmadụ n'ọrụ na n'ọzụzụ."],
            ["Nesting", "izu mbụ n'ezi oku mgbe ọzụzụ gachara, ya na enyemaka ọzọ site n'aka onye nkuzi (coach)."]
          ],
          slides: [
            { title: "Ụzọ BPO a na-ejikarị ewe mmadụ n'ọrụ", bullets: ["Itinye akwụkwọ, wee ule n'ịntanetị", "Ule olu ma ọ bụ asụsụ, wee ajụjụ ọnụ", "Oku omume, onyinye ọrụ, nlele akwụkwọ, ọzụzụ a na-akwụ ụgwọ"] },
            { title: "Ule olu", bullets: ["Ndị mmadụ ọ na-aghọta gị nke ọma?", "Okwu doro anya, ọsọ kwụsiri ike, ezigbo grama, olu enyi", "Ọ dịghị mkpa ka ị gbanwee ụda olu gị"] },
            { title: "Mụọ ya n'ụlọ n'efu", bullets: ["Pịa site na peeji e bipụtara nkeji 5 kwa ụbọchị", "Dekọọ onwe gị ka ị na-agụ n'olu dị elu ma gee ntị", "Oku omume na enyi na-eme ka onye ahịa"] },
            { title: "Mgbe e were gị", bullets: ["Ọzụzụ n'ime klas maka ngwaahịa client ahụ", "Nesting: izu mbụ n'ezi oku ya na onye nkuzi"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Mee obere omume atọ taa ma dee ihe ọ rụpụtara: pịa maka nkeji 5 ma gbakọọ okwu ole ị na-apị kwa nkeji; dekọọ onwe gị ka ị na-agụ akụkọ nkeji 1 ma dee okwu abụọ ị ga-ekwu nke ọma karịa; ma dee mmalite ahịrị 3 ị ga-eji n'oku omume.",
          youCanNow: "ịkọwa usoro BPO a na-ejikarị ewe mmadụ n'ọrụ na ịmụ ule ịpị mkpịsị, ule olu na oku omume n'ụlọ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ule olu BPO na-elele kachasị?", options: ["Na ndị mmadụ na-aghọta gị nke ọma", "Na ị nwere ụda olu mba ọzọ", "Na ị na-ekwu okwu ọsọ ọsọ dị ka o kwere mee", "Na ị maara ọnụahịa client ahụ"], answer: 0, why: "Ule olu na-elele okwu doro anya, ọsọ, grama na olu, ọ bụghị otu ụda olu." },
            { objective: "O3", q: "N'ime nkeji 5 ị pịrị okwu 150. Ihe dị ka ole bụ ọsọ ịpị mkpịsị gị?", options: ["Okwu 15 kwa nkeji", "Okwu 75 kwa nkeji", "Okwu 150 kwa nkeji", "Okwu 30 kwa nkeji"], answer: 3, why: "Okwu 150 e kewara na nkeji 5 bụ okwu 30 kwa nkeji." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịbanye n'ọrụ BPO",
        questions: [
          { objective: "O1", q: "Ị na-akpọ ndị mmadụ iji chetara ha ụgwọ ha akwụbeghị. Kedu ụdị ọrụ nke a bụ?", options: ["Inbound voice", "Outbound voice", "Enyemaka chat", "Back office"], answer: 1, why: "Ị bụ onye na-akpọ oku, ya mere ọ bụ outbound voice." },
          { objective: "O1", q: "N'ime BPO, onye bụ client?", options: ["Ụlọ ọrụ na-akwụ BPO ụgwọ ka o mee ọrụ ya", "Onye ahịa na-akpọ oku", "Team leader", "Ụlọ ọrụ na-achọ ndị ọrụ"], answer: 0, why: "Client na-akwụ BPO ụgwọ; ndị ahịa ya bụ ndị agent na-enyere aka." },
          { objective: "O2", q: "Kedu ozi nwere ike ịbụ aghụghọ karịa?", options: ["Email site n'adreesị ụlọ ọrụ n'onwe ya na-akpọ gị òkù ule n'ịntanetị", "Ọrụ dị na peeji careers gọọmentị ụlọ ọrụ ahụ", "Ozi WhatsApp na-enye ụgwọ ọnwa dị elu ma ọ bụrụ na i zipu ụgwọ taa", "Ajụjụ ọnụ n'ekwentị a haziri site na saịtị gọọmentị"], answer: 2, why: "Ụgwọ ọnwa dị elu, ịkpọtụrụ naanị site na WhatsApp, ụgwọ na ịmanye gị taa bụ ihe ịdọ aka na ntị niile." },
          { objective: "O2", q: "Kedu otu ị ga-esi chọta ezi ọrụ ụlọ ọrụ?", options: ["Pịa njikọ dị n'ozi onye na-achọ ndị ọrụ", "Chọọ weebụsaịtị gọọmentị ụlọ ọrụ ahụ n'onwe gị ma jiri peeji careers ya", "Rịọ onye na-achọ ndị ọrụ ka o zitere gị screenshot", "Tụkwasị obi na peeji ọ bụla nwere logo ụlọ ọrụ ahụ"], answer: 1, why: "Ịchọta saịtị gọọmentị n'onwe gị na-egbochi peeji adịgboroja e jiri logo ụlọ ọrụ ahụ mee." },
          { objective: "O3", q: "Gịnị bụ oku omume (mock call)?", options: ["Ezi oku ya na onye ahịa iwe na-ewe", "Oku ị na-akpọ onye isi gị", "Egwu e dekọrọ", "Egwuregwu omume ebe mmadụ na-eme ka onye ahịa"], answer: 3, why: "Oku omume bụ oku omume a na-eji n'iwe mmadụ n'ọrụ na n'ọzụzụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ọrụ ahụ na ịrị elu",
      lessons: [
        {
          title: "Usoro oku (call flow) na QA scorecard",
          objectives: ["O3"],
          minutes: 6,
          goal: "Zaa oku omume na-amalite, na-akwado onye ọ bụ, na-edozi nsogbu, na-ekwughachi ma na-emechi, ma tụọ ya akara site na QA scorecard.",
          text: [
            "Account ọ bụla nwere call flow: nzọụkwụ agent na-agbaso n'oku ọ bụla. Usoro a na-ejikarị bụ: mmalite (kelee, kwuo aha gị, aha ụlọ ọrụ, nye enyemaka); nkwado (kwado onye onye ahịa ahụ bụ site n'ajụjụ nchekwa nke account ahụ); probe (jụọ ajụjụ iji chọta ezi nsogbu); dozie (dozie ya ma ọ bụ kọwaa nzọụkwụ na-esote); recap (kwughachi ihe e mere); na mmechi (jụọ ma ọ nwere ihe ọzọ, kelee ha).",
            "Otu quality assurance (QA) na-ege oku e dekọrọ ntị ma na-enye ha akara na QA scorecard. Ahịrị na-agụnyekarị mmalite, nkwado, ige ntị na ọmịiko, ozi ziri ezi, ndetu i dere, na mmechi. Ụfọdụ ahịrị bụ ahịrị compliance: ịwụfe nkwado ma ọ bụ ikesa ozi nzuzo nwere ike ime ka oku ahụ dum daa.",
            "Kwado naanị n'ụzọ account gị kụziiri gị. Arịọla onye ahịa okwuntughe zuru ezu ma ọ bụ koodu otu oge ọ na-ekwesịghị inye, ma agụla ozi nzuzo nye onye i kwadobeghị. Ọ bụrụ na ị maghị azịza, jiri nkwanye ugwu kwụsịtụ onye ahịa ahụ (hold) ma lelee knowledge base ma ọ bụ jụọ team leader."
          ],
          steps: [
            "Mmalite: \"Daalụ maka ịkpọ [ụlọ ọrụ], nke a bụ [aha]. Kedu otu m ga-esi nyere gị aka taa?\"",
            "Nkwado: jụọ ajụjụ nchekwa nke account ahụ tupu gị ekwuo maka account ahụ.",
            "Probe: jụọ ajụjụ mepere emepe, wee kwado nsogbu ahụ n'otu ahịrịokwu.",
            "Dozie: dozie ya, ma ọ bụ kọwaa nzọụkwụ na-esote na mgbe ọ ga-eme.",
            "Recap na mmechi: kwuo ihe e mere, jụọ ma ọ nwere ihe ọzọ, ma kelee ha."
          ],
          words: [
            ["Call flow", "nzọụkwụ a kara aka agent na-agbaso n'oku ọ bụla."],
            ["Verification (nkwado)", "ilele na onye na-akpọ oku bụ onye nwe account ahụ tupu e kwuo maka account ahụ."],
            ["QA (quality assurance)", "otu na-ege oku ntị ma na-enye ha akara site na scorecard."],
            ["Compliance", "ịgbaso iwu nke gọọmentị na nke client, dị ka iwu nzuzo na iwu nkwado."],
            ["Knowledge base", "ọba akwụkwọ account ahụ nke azịza na nzọụkwụ a kwadoro."]
          ],
          slides: [
            { title: "Call flow a na-ejikarị", bullets: ["Mmalite, nkwado, probe", "Dozie, recap, mmechi"] },
            { title: "QA scorecard", bullets: ["QA na-ege oku e dekọrọ ntị", "Ahịrị: mmalite, nkwado, ọmịiko, izi ezi, ndetu, mmechi", "Mperi compliance nwere ike ime ka oku dum daa"] },
            { title: "Chebe onye ahịa", bullets: ["Kwado tupu i kwuo maka account ahụ", "Arịọla okwuntughe ị na-achọghị", "Obi abụọ? Kwụsịtụ ya nwayọọ ma lelee knowledge base"] }
          ],
          tryIt: "Dee obere script maka oku omume: ịntanetị onye ahịa na-agba nwayọọ ụbọchị abụọ. Jiri nzọụkwụ isii ahụ niile. Wee mee oku ahụ ya na enyi ma ọ bụ dekọọ onwe gị ka ị na-eme akụkụ abụọ, ma tụọ ya akara: maka nzọụkwụ ọ bụla dee Ruru eru ma ọ bụ Ọ ruchabeghị.",
          youCanNow: "ịgbaso call flow site na mmalite ruo mmechi na ilele oku nke gị site na QA scorecard.",
          quickCheck: [
            { objective: "O3", q: "Onye na-akpọ oku jụrụ maka ego dị n'account ya. Gịnị na-ebu ụzọ?", options: ["Gụọ ego ahụ ozugbo", "Rịọ okwuntughe ya zuru ezu", "Kwado onye ọ bụ site n'ajụjụ nchekwa nke account ahụ", "Nyefee ya otu ọzọ"], answer: 2, why: "Nkwado na-echebe ozi nzuzo onye ahịa, ọ na-abụkarịkwa ahịrị compliance na scorecard." },
            { objective: "O3", q: "Kedu nzọụkwụ na-abịa tupu mmechi?", options: ["Recap: ikwu ihe e mere", "Mmalite", "Nkwado", "Ekele mbụ"], answer: 0, why: "Recap na-akwado ihe e mere, ka onye ahịa pụọ ji n'aka maka ihe ọ rụpụtara." }
          ]
        },
        {
          title: "Ọnụọgụ, usoro oge na ilekọta onwe gị",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Kọwaa isi ọnụọgụ ise nke call center ma dee atụmatụ nhazi maka shift ma ọ bụ ọrụ n'ụlọ.",
          text: [
            "A na-eji ọnụọgụ atụ agent, nke a na-akpọkarị KPI. Average handle time (AHT) bụ ogologo oge kọntaktị n'ozuzu, gụnyere hold na ndetu mgbe oku gachara. First contact resolution (FCR) bụ ugboro ole e dozirila nsogbu na kọntaktị mbụ. Customer satisfaction (CSAT) si n'obere nnyocha mgbe kọntaktị gachara. QA score si na scorecard. Schedule adherence bụ otu ị si agbaso usoro oge gị nke ọma: ịbanye n'oge na izu ike n'oge a hazịrị.",
            "Ọnụọgụ ndị a na-adọkọ ibe ha. Ime ọsọ ọsọ na-ebelata handle time mana ọ nwere ike imebi FCR na CSAT mgbe ndị ahịa kpọghachiri. Ụzọ eziokwu isi rị elu bụ ịmara knowledge base nke ọma, ige ntị nke ọma, na ide ezigbo ndetu ka agent na-esote ghara ịmalite ọzọ.",
            "Ọtụtụ account na-arụ ọrụ awa 24 kwa ụbọchị, ya mere shift nwere ike ịbụ n'abalị, na ngwụcha izu na n'ụbọchị ezumike, na-adabakarị n'oge mpaghara client ahụ. Hazie ụra gị (ọnụ ụlọ gbara ọchịchịrị, dị jụụ, otu awa kwa ụbọchị), njem n'enweghị nsogbu n'abalị, nri na mmiri. Maka ọrụ n'ụlọ: ebe dị jụụ, headset, ịntanetị dị ngwa nke ọma, na ihe nkwado maka ọkụ latrik ma ọ bụ ịntanetị, ya na iwu ụlọ ọrụ ahụ maka nzuzo n'ụlọ."
          ],
          words: [
            ["KPI", "key performance indicator: ọnụọgụ e ji atụ otu ọrụ si gaa nke ọma."],
            ["AHT (average handle time)", "ogologo oge kọntaktị n'ozuzu, gụnyere hold na ọrụ mgbe oku gachara."],
            ["FCR (first contact resolution)", "ugboro ole e dozirila nsogbu n'oku ma ọ bụ chat mbụ."],
            ["CSAT (customer satisfaction)", "akara si n'obere nnyocha ndị ahịa mgbe kọntaktị gachara."],
            ["Schedule adherence", "otu agent si agbaso usoro oge a hazịrị maka ịbanye, izu ike na ịpụ."]
          ],
          slides: [
            { title: "Ọnụọgụ ise agent na-ezute", bullets: ["AHT: average handle time", "FCR: edoziri na kọntaktị mbụ", "CSAT: akara nnyocha ndị ahịa", "QA score na schedule adherence"] },
            { title: "Ọnụọgụ na-adọkọ ibe ha", bullets: ["Ime ọsọ ọsọ na-ebelata AHT mana ọ nwere ike imebi FCR na CSAT", "Mara knowledge base, gee ntị, dee ezigbo ndetu"] },
            { title: "Ọrụ shift", bullets: ["Abalị, ngwụcha izu na ụbọchị ezumike n'oge mpaghara client", "Otu awa ụra n'ọnụ ụlọ gbara ọchịchịrị, dị jụụ", "Hazie njem n'enweghị nsogbu n'abalị, nri na mmiri"] },
            { title: "Ịrụ ọrụ n'ụlọ", bullets: ["Ebe dị jụụ na headset", "Ịntanetị dị ngwa na ihe nkwado maka ọkụ ma ọ bụ data", "Gbasoo iwu nzuzo ụlọ ọrụ ahụ n'ụlọ"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Akụkọ omume: AHT Ama bụ nkeji 4 (nke otu ya bụ 6), FCR ya bụ 55 percent (otu ahụ 75 percent), CSAT ya dịkwa ala. N'ahịrịokwu abụọ, kọwaa ihe na-eme na otu ụzọ eziokwu isi dozie ya. Wee dee atụmatụ nhazi nke gị nwere opekata mpe ihe ise: ụra, njem, nri, ngwaọrụ na ihe nkwado maka ọkụ ma ọ bụ ịntanetị.",
          youCanNow: "ịkọwa AHT, FCR, CSAT, QA score na schedule adherence, na ịhazi ụra gị, njem gị na nhazi gị maka shift ma ọ bụ ọrụ n'ụlọ.",
          quickCheck: [
            { objective: "O4", q: "Agent nwere handle time dị mkpụmkpụ nke ukwuu mana ọtụtụ ndị ahịa na-akpọghachi. Kedu ọnụọgụ nwere ike ịdị ala?", options: ["Schedule adherence", "Ọsọ ịpị mkpịsị", "Ọnụọgụ oge izu ike", "First contact resolution"], answer: 3, why: "Ndị ahịa na-akpọghachi pụtara na e dozighị nsogbu ahụ na mbụ, ya mere FCR dị ala." },
            { objective: "O5", q: "Ị na-arụ ọrụ n'ụlọ, ọkụ latrik na-anyụkwa n'ógbè gị. Gịnị kwesịrị ịdị n'atụmatụ nhazi gị?", options: ["Ọ dịghị ihe; kpọọ kwuo na ị na-arịa ọrịa mgbe ọkụ nyụrụ", "Ihe nkwado maka ọkụ ma ọ bụ ịntanetị na ịgwa team leader gị n'oge", "Ịrụ ọrụ n'ụlọ oriri na ọṅụṅụ jupụtara na mmadụ n'ajụghị ajụjụ", "Iji speakerphone n'ọnụ ụlọ a na-ekekọrịta"], answer: 1, why: "Ihe nkwado na ịgwa ha n'oge na-eme ka ị nọgide na-arụ ọrụ ma na-agbaso iwu ụlọ ọrụ ahụ." }
          ]
        },
        {
          title: "Ịrị elu na atụmatụ ụbọchị 90 gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dee atụmatụ ụbọchị 90 iji nweta ọrụ ma kpọọ aha nzọụkwụ gị na-esote n'ọkwa ọrụ BPO.",
          text: [
            "BPO nwere ọkwa ọrụ dị ka ubube. Agent nwere ike ịghọ senior agent ma ọ bụ subject matter expert (SME), wee team leader, wee operations manager. Ụzọ n'akụkụ gụnyere QA analyst, trainer, workforce management (ịhazi usoro oge na ọnụọgụ ndị ọrụ), ịchọ ndị ọrụ, akụkọ na data, na enyemaka IT. Ọtụtụ ụlọ ọrụ na-ahọrọ ịkwalite ndị maralarị account ahụ.",
            "Ihe na-enyere gị aka ịrị elu: ọnụọgụ kwụsiri ike, ịbịa ọrụ mgbe niile, ịkụziri ndị ọzọ ihe, asụsụ nke abụọ, na obere ihe ọmụmụ. Ụfọdụ gọọmentị na-enye ọzụzụ: TESDA nke Philippines na-edobe ụkpụrụ ma na-enye ọzụzụ na asambodo, Ajira Digital Program nke Kenya na-akwalitekwa ọrụ n'ịntanetị. Lelee peeji gọọmentị ha maka ihe ha na-enye ugbu a.",
            "Atụmatụ ụbọchị 90 gị na-achịkọta ihe niile. Izu 1 ruo 2: họrọ ụdị ọrụ ma lelee ndị were mmadụ n'ọrụ atọ na weebụsaịtị gọọmentị ha. Izu 3 ruo 8: mụọ ịpị mkpịsị, ịgụpụta n'olu dị elu na oku omume n'ụbọchị a kara aka, ma tinye akwụkwọ na peeji careers gọọmentị. Izu 9 ruo 12: nọgide na-etinye akwụkwọ, soro ha nwayọọ, ma kwadoo maka ọzụzụ. Wee dee otu nzọụkwụ elu ị chọrọ n'ime otu afọ."
          ],
          steps: [
            "Dee ụdị ọrụ ị chọrọ (voice ma ọ bụ non-voice, inbound ma ọ bụ outbound) na ihe kpatara ya.",
            "Lelee ezi ndị were mmadụ n'ọrụ atọ na weebụsaịtị gọọmentị ha ma dee njikọ ha.",
            "Tinye ndepụta gị maka ịhụ aghụghọ site na Nkuzi 2.",
            "Tinye ụbọchị omume na kalenda: ịpị mkpịsị, ịgụpụta n'olu dị elu, oku omume.",
            "Dee atụmatụ nhazi shift ma ọ bụ ụlọ gị site na Nkuzi 5.",
            "Kpọọ aha otu nzọụkwụ elu maka afọ na-abịa na otu ihe ị ga-eme iji ruo ya."
          ],
          words: [
            ["SME (subject matter expert)", "agent nwere ahụmahụ nke ndị agent ndị ọzọ na-ajụ maka enyemaka n'okwu siri ike."],
            ["Team leader", "onye nlekọta na-akụziri otu agent ihe ma na-ele ọnụọgụ ha anya."],
            ["Workforce management (WFM)", "otu na-ebu amụma ọnụọgụ oku ma na-ahazi usoro oge na ọnụọgụ ndị ọrụ."],
            ["TESDA", "ụlọ ọrụ gọọmentị Philippines maka agụmakwụkwọ teknụzụ na ọzụzụ nka."]
          ],
          slides: [
            { title: "Ọkwa ọrụ BPO", bullets: ["Agent, senior agent ma ọ bụ SME, team leader, operations manager", "Ụzọ n'akụkụ: QA, trainer, workforce management, ịchọ ndị ọrụ, IT"] },
            { title: "Ihe na-enyere gị aka ịrị elu", bullets: ["Ọnụọgụ kwụsiri ike na ịbịa ọrụ mgbe niile", "Ịkụziri ndị ọzọ ihe na asụsụ nke abụọ", "Obere ihe ọmụmụ na mmemme ọzụzụ gọọmentị"] },
            { title: "Atụmatụ ụbọchị 90 gị", bullets: ["Izu 1-2: ụdị ọrụ na ndị were mmadụ n'ọrụ atọ e lelere", "Izu 3-8: mụọ ma tinye akwụkwọ na saịtị gọọmentị", "Izu 9-12: soro ha ma kwadoo maka ọzụzụ"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Malite atụmatụ ụbọchị 90 gị ugbu a. N'akwụkwọ ma ọ bụ n'akwụkwọ dijitalụ, dee ụbọchị taa, ụdị ọrụ ị chọrọ, aha na adreesị weebụsaịtị gọọmentị nke ndị were mmadụ n'ọrụ atọ i lelere, na ụbọchị nke oge omume atọ mbụ gị.",
          youCanNow: "ide atụmatụ ụbọchị 90 nwere ụbọchị iji nweta ọrụ BPO na ịkpọ aha nzọụkwụ gị na-esote.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ezi nzọụkwụ elu site n'agent n'ọtụtụ BPO?", options: ["Onye ahịa", "Client", "Team leader", "Ụgwọ ịchọ ndị ọrụ"], answer: 2, why: "Agent na-agakarị na SME, wee team leader, wee operations manager." },
            { objective: "O6", q: "Ebee ka ndị were mmadụ n'ọrụ dị n'atụmatụ gị kwesịrị isi?", options: ["Weebụsaịtị gọọmentị ha, nke ị chọtara n'onwe gị", "Otu WhatsApp na-ere ndepụta ọrụ", "Mgbasa ozi ọ bụla na-ekwe nkwa ụgwọ ọnwa dị elu", "Onye na-achọ ndị ọrụ na-arịọ ụgwọ"], answer: 0, why: "Weebụsaịtị gọọmentị ị chọtara n'onwe gị bụ ụzọ kacha enweghị nsogbu iji lelee na onye were mmadụ n'ọrụ bụ ezi onye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ọrụ ahụ na ịrị elu",
        questions: [
          { objective: "O3", q: "N'ọtụtụ QA scorecard, kedu mperi nwere ike ime ka oku dum daa?", options: ["Ikwu daalụ ugboro abụọ", "Obere nkwụsị tupu ịza", "Ịmụmụ ọnụ ọchị mgbe ị na-ekwu okwu", "Ịwụfe nkwado tupu ikesa ozi account"], answer: 3, why: "Nkwado bụ ahịrị compliance; ịwụfe ya na-etinye ozi onye ahịa n'ihe egwu." },
          { objective: "O4", q: "Gịnị ka CSAT na-atụ?", options: ["Ogologo oge oku ahụ were", "Otu afọ siri ndị ahịa ju dịka ha kwuru na nnyocha", "Ugboro ole ị banyere n'oge", "Otu ị si apị mkpịsị ọsọ"], answer: 1, why: "CSAT bụ akara afọ ojuju ndị ahịa site n'obere nnyocha mgbe kọntaktị gachara." },
          { objective: "O4", q: "Ị na-alọghachi site n'izu ike nkeji 10 karịa oge mgbe niile. Kedu ọnụọgụ na-ada?", options: ["Schedule adherence", "First contact resolution", "Ọsọ ịpị mkpịsị", "Akara QA maka nkwado"], answer: 0, why: "Schedule adherence na-atụ otu ị si agbaso oge ịbanye na izu ike gị." },
          { objective: "O5", q: "Ị ga-amalite shift abalị n'izu na-abịa. Kedu nke bụ ezigbo atụmatụ?", options: ["Ihi ụra n'oge dị iche kwa ụbọchị", "Ịṅụ ihe ọṅụṅụ ike (energy drinks) kama ihi ụra", "Otu awa ụra n'ọnụ ụlọ gbara ọchịchịrị, dị jụụ na ụzọ n'enweghị nsogbu isi laa", "Ịga ụkwụ naanị gị laa n'okporo ụzọ na-enweghị ọkụ"], answer: 2, why: "Ụra mgbe niile n'ọnụ ụlọ gbara ọchịchịrị na njem n'enweghị nsogbu na-echebe ahụike na nchekwa gị na shift abalị." },
          { objective: "O6", q: "Gịnị ka workforce management (WFM) na-eme?", options: ["Naanị ịza oku ndị ahịa", "Ịbu amụma ọnụọgụ oku na ịhazi usoro oge na ọnụọgụ ndị ọrụ", "Ire ngwaahịa nye client", "Ilele paspọtụ gị"], answer: 1, why: "WFM na-ahazi agent ole a chọrọ na mgbe a chọrọ ha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ Call Center na Outsourcing (BPO)",
    questions: [
      { objective: "O1", q: "Gịnị ka BPO pụtara?", options: ["Business process outsourcing", "Basic phone operations", "Bank payment office", "Business product order"], answer: 0, why: "BPO bụ business process outsourcing: otu ụlọ ọrụ na-arụ akụkụ ọrụ ụlọ ọrụ ọzọ." },
      { objective: "O1", q: "Ị na-aza email na chat ndị ahịa maka ụlọ ahịa n'ịntanetị. Kedu ụdị ọrụ nke a bụ?", options: ["Outbound voice", "Inbound voice", "Enyemaka non-voice", "Ire ahịa n'ọhịa"], answer: 2, why: "Email na chat bụ ọrụ non-voice." },
      { objective: "O1", q: "Otu account na-arụrụ ndị ahịa na-asụ French ọrụ. Kedu nka kacha mkpa maka ndị agent ya?", options: ["Ịnya ụgbọala", "French doro anya n'ikwu okwu na n'ide ihe", "Ide ihe n'aka ọsọ ọsọ", "Ịmara ọtụtụ ụdị ekwentị"], answer: 1, why: "Asụsụ account ahụ na-abụkarị isi nka BPO na-ewe mmadụ maka ya." },
      { objective: "O2", q: "Kedu nke bụ ihe ịdọ aka na ntị nke ọrụ adịgboroja?", options: ["Ule n'ịntanetị site na weebụsaịtị ụlọ ọrụ n'onwe ya", "Ọrụ e depụtara na peeji careers gọọmentị", "Ajụjụ ọnụ a haziri site n'email ụlọ ọrụ n'onwe ya", "Ụgwọ ị ga-akwụ tupu ịmalite"], answer: 3, why: "Ezi ndị were mmadụ n'ọrụ anaghị ana gị ego ka e were gị." },
      { objective: "O2", q: "\"Onye na-achọ ndị ọrụ\" zitere gị chekụ ka i tinye n'ụlọ akụ ma rịọ gị ka i zighachi akụkụ ya maka ngwaọrụ. Gịnị bụ nke a?", options: ["Aghụghọ chekụ adịgboroja a na-ahụkarị", "Ụzọ nkịtị isi zụta headset", "Ego mmalite ọrụ (signing bonus)", "Ego enyemaka ọzụzụ"], answer: 0, why: "Chekụ ahụ na-ada emesịa, ị ga-akwụkwa ụlọ akụ ego i zipụrụ." },
      { objective: "O2", q: "Otu ụlọ ọrụ na-enye gị ọrụ call center na mba ọzọ. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Ole ndị na-eso ya na soshal midia", "Ma ọ na-ekwe nkwa ụgwọ ọnwa dị elu", "Ma ọ nwere ikikere site n'ụlọ ọrụ gọọmentị gị na-ahụ maka ọrụ ma ọ bụ ndị ọrụ na-aga mba ọzọ", "Ma ọ chọrọ paspọtụ mbụ gị"], answer: 2, why: "Enwere ike ilele ụlọ ọrụ nwere ikikere na ndepụta gọọmentị; ndị na-enweghị ikikere bụ nnukwu ihe egwu." },
      { objective: "O3", q: "Kedu ụzọ kacha mma isi kwadoo maka ule olu BPO?", options: ["Ịnwa iṅomi ụda olu ọzọ", "Ịdekọ onwe gị ka ị na-agụpụta ihe n'olu dị elu ma dozie okwu na-edoghị anya", "Ikwu okwu ọsọ ọsọ dị ka i nwere ike", "Ibu ọnụahịa client ahụ n'isi"], answer: 1, why: "Ịdekọ na ige ntị na-enyere gị aka ikwu okwu doro anya n'ọsọ kwụsiri ike." },
      { objective: "O3", q: "Gịnị bụ nesting?", options: ["Izu mbụ gị n'ezi oku ya na enyemaka ọzọ", "Ọnụ ụlọ izu ike", "Otu ụdị ụgwọ e ji ewe mmadụ", "Ego ọzọ maka shift abalị"], answer: 0, why: "Nesting na-abịa mgbe ọzụzụ klas gachara: ezi oku ya na nkuzi." },
      { objective: "O3", q: "N'ime call flow, gịnị ka nzọụkwụ probe na-eme?", options: ["Ọ na-ekele onye ahịa", "Ọ na-emechi oku", "Ọ na-akwụsịtụ onye ahịa (hold)", "Ọ na-ajụ ajụjụ iji chọta ezi nsogbu"], answer: 3, why: "Probe na-achọta ezi nsogbu tupu ị nwaa idozi ya." },
      { objective: "O3", q: "Ị maghị azịza ajụjụ onye ahịa. Gịnị ka ị ga-eme?", options: ["Chee echiche ka oku ahụ dị mkpụmkpụ", "Kwụsị oku ahụ", "Jiri nkwanye ugwu kwụsịtụ ya ma lelee knowledge base ma ọ bụ team leader", "Gwa ha ka ha kpọọ ụlọ ọrụ ọzọ"], answer: 2, why: "Ilele azịza a kwadoro na-eme ka ozi ahụ zie ezi ma oku ahụ dị ka nke ọkachamara." },
      { objective: "O4", q: "Gịnị ka AHT gụnyere?", options: ["Naanị oge ị na-ekwu okwu", "Oge okwu, oge hold na ndetu mgbe oku gachara", "Naanị oge izu ike gị", "Oge dị n'etiti shift"], answer: 1, why: "Average handle time na-agụ kọntaktị ahụ dum, gụnyere hold na ọrụ mgbe oku gachara." },
      { objective: "O4", q: "Kedu ụzọ eziokwu isi bulie first contact resolution?", options: ["Kwụsị oku siri ike", "Gwa ndị ahịa ka ha kpọghachi emesịa", "Kaa oku akara na e dozirila ha mgbe e dozibeghị", "Mụta knowledge base ma kwado ndozi ahụ tupu imechi"], answer: 3, why: "Ịmara azịza na ịkwado ndozi ahụ na-edozi nsogbu ndị ọzọ na kọntaktị mbụ." },
      { objective: "O4", q: "Onye na-enyekarị QA score?", options: ["Otu ịdị mma, site n'iji scorecard n'oku e dekọrọ", "Onye ahịa, na nnyocha", "Ọka iwu client ahụ", "Ụlọ ọrụ na-achọ ndị ọrụ"], answer: 0, why: "Ndị QA analyst na-ege oku ntị ma na-enye ha akara na scorecard; CSAT si n'aka ndị ahịa." },
      { objective: "O5", q: "Gịnị mere ọtụtụ ọrụ BPO ji nwee shift abalị?", options: ["A naghị atụ ụtụ isi n'oku abalị", "Ọfịs dị ọnụ ala n'abalị", "Account na-agbasokarị oge mpaghara client ma na-arụ ọrụ awa 24", "Ndị ahịa na-akpọ naanị n'abalị"], answer: 2, why: "Ọtụtụ account na-arụrụ ndị ahịa nọ n'oge mpaghara ndị ọzọ ọrụ ma ọ bụ na-arụ ehihie na abalị." },
      { objective: "O5", q: "Kedu ihe kwesịrị ịdị n'atụmatụ nhazi ọrụ n'ụlọ?", options: ["Ọnụ ụlọ a na-ekekọrịta nwere mkpọtụ", "Headset na ihe nkwado maka ọkụ ma ọ bụ ịntanetị", "Email nke onwe gị maka data ndị ahịa", "TV na-agba mgbe ị na-aza oku"], answer: 1, why: "Headset na ihe nkwado na-eme ka oku doo anya ma mee ka ị nọgide na-arụ ọrụ mgbe ọkụ ma ọ bụ ịntanetị nyụrụ." },
      { objective: "O5", q: "Kedu atụmatụ kacha enweghị nsogbu isi laa mgbe shift abalị gachara?", options: ["Hazie ụgbọ n'enweghị nsogbu ma ọ bụ ụgbọ ụlọ ọrụ tupu shift ahụ", "Nabata ụgbọ site n'aka onye ọ bụla ị na-amaghị", "Ịga ụkwụ naanị gị n'okporo ụzọ na-enweghị ọkụ", "Kpebie mgbe shift ahụ gwụrụ"], answer: 0, why: "Ịhazi njem n'enweghị nsogbu n'oge na-echebe gị n'abalị." },
      { objective: "O6", q: "Kedu nke bụ ụzọ n'akụkụ n'ọrụ BPO?", options: ["Onye ahịa", "Ụgwọ ịchọ ndị ọrụ", "Onye na-akpọ oku", "Quality assurance analyst"], answer: 3, why: "QA, ọzụzụ, workforce management na ịchọ ndị ọrụ bụ ụzọ n'akụkụ a na-ahụkarị." },
      { objective: "O6", q: "Gịnị na-aba n'izu 3 ruo 8 nke atụmatụ ụbọchị 90 gị?", options: ["Ọ dịghị ihe; chere oku", "Ịkwụ onye na-achọ ndị ọrụ ụgwọ ka ọ chọtara gị ọrụ", "Omume n'ụbọchị a kara aka na itinye akwụkwọ na peeji careers gọọmentị", "Inye ụlọ ọrụ paspọtụ gị"], answer: 2, why: "Omume mgbe niile na itinye akwụkwọ na peeji gọọmentị bụ isi atụmatụ ahụ." },
      { objective: "O6", q: "Gịnị na-enyere agent aka ka e bulie ya ka ọ bụrụ team leader?", options: ["Ọnụọgụ kwụsiri ike, ịbịa ọrụ mgbe niile na inyere ndị ọzọ aka", "Ịlọghachi n'azụ oge site n'izu ike", "Izere nkuzi", "Ịgbanwe account kwa ọnwa"], answer: 0, why: "Ọnụọgụ a pụrụ ịtụkwasị obi, ịbịa ọrụ na ịkụziri ndị ọzọ ihe na-egosi ndu." },
      { objective: "O2", q: "Ị chọpụtara na onyinye ọrụ bụ adịgboroja mgbe i zipụrụ foto ID gị. Gịnị ka ị ga-eme?", options: ["Zipu akwụkwọ ndị ọzọ iji gosi onwe gị", "Kwụọ ụgwọ ahụ ka ha weghachi foto gị", "Hichapụ ozi ndị ahụ ma chefuo ya", "Kwụsị ịkpọtụrụ ha, chekwaa screenshot ma kọọ ya ndị uweojii ma ọ bụ ụlọ ọrụ gọọmentị na-ahụ maka aghụghọ"], answer: 3, why: "Ichekwa ihe akaebe na ịkọ ya na-enyere aka ichebe gị na ndị ọzọ pụọ n'iji njirimara gị eme ihe ọjọọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ahọrọla ụdị ọrụ", objective: "O1", notYet: "Enweghị ụdị ọrụ, ma ọ bụ voice na non-voice gbagwojuru anya.", meets: "Na-akpọ aha voice ma ọ bụ non-voice na inbound ma ọ bụ outbound, ya na isi nka ọ chọrọ.", exceeds: "Na-akọwakwa ihe mere o ji dabara nka na asụsụ nke onye ahụ." },
      { name: "E lelere ndị were mmadụ n'ọrụ, zere aghụghọ", objective: "O2", notYet: "Ndị were mmadụ n'ọrụ si na mgbasa ozi ma ọ bụ ozi, ma ọ bụ atụmatụ ahụ gụnyere ịkwụ ụgwọ.", meets: "Ndị were mmadụ n'ọrụ atọ nwere njikọ weebụsaịtị gọọmentị, na ndepụta maka ịhụ aghụghọ nwere opekata mpe ihe ịrịba ama anọ.", exceeds: "Na-edekwa otu esi elele ikikere ụlọ ọrụ maka ọrụ mba ọzọ na ebe a ga-akọ aghụghọ." },
      { name: "Oku omume", objective: "O3", notYet: "Oku e dekọrọ na-awụfe nzọụkwụ, ma ọ bụ na-awụfe nkwado.", meets: "Na-amalite, na-akwado, na-eme probe, na-edozi, na-eme recap ma na-emechi; Ruru eru n'ahịrị scorecard ọ bụla.", exceeds: "Onye na-amụ ihe na-akpọ aha otu ihe ọ ga-emeziwanye ma dekọọ nnwale nke abụọ ka mma." },
      { name: "Ọ maara ọnụọgụ", objective: "O4", notYet: "Ọ pụghị ikwu ihe AHT, FCR, CSAT, QA score na adherence na-atụ.", meets: "Na-akọwa ise ahụ niile, nke ọ bụla ya na otu ụzọ eziokwu iji meziwanye ya.", exceeds: "Na-akọwa otu ime ọsọ ọsọ nwere ike isi belata AHT mana mebie FCR na CSAT." },
      { name: "Atụmatụ nhazi", objective: "O5", notYet: "Ihe na-erughị ise, ma ọ bụ enweghị atụmatụ nkwado.", meets: "Opekata mpe ihe ise: ụra, njem, nri, ngwaọrụ na ihe nkwado maka ọkụ ma ọ bụ ịntanetị.", exceeds: "Na-agbakwụnye iwu nzuzo onye were ya n'ọrụ maka ọrụ n'ụlọ na atụmatụ ịgwa team leader n'oge maka nsogbu." },
      { name: "Atụmatụ ụbọchị 90", objective: "O6", notYet: "Enweghị ụbọchị, ma ọ bụ enweghị nzọụkwụ elu a kpọrọ aha ya.", meets: "Nzọụkwụ omume na itinye akwụkwọ nwere ụbọchị n'ime ụbọchị 90 na otu nzọụkwụ elu n'ime otu afọ.", exceeds: "Na-akpọ aha otu nka ma ọ bụ ihe ọmụmụ maka nzọụkwụ elu ahụ na mgbe ọ ga-amalite ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere akwụkwọ n'opekata mpe ndị BPO atọ e lelere n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe a kpọrọ òkù ule e ji ewe mmadụ ma ọ bụ ajụjụ ọnụ, na ndị e were n'ọrụ, n'ime ụbọchị 90",
      "Ndị na-amụ ihe kọrọ mgbalị aghụghọ ha matara ma ha akwụghị ụgwọ",
      "Ndị e were n'ọrụ ka na-arụ ọrụ mgbe ụbọchị 90 gachara (ọnwa mbụ bụ mgbe ọtụtụ mmadụ na-ahapụ)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị; akwụkwọ na mkpịsị ode maka ọrụ ọ bụla",
      "Ekwentị na-edekọ olu maka omume ịgụpụta n'olu dị elu na oku omume",
      "Onye mmekọ maka oku omume (enyi, onye ezinụlọ ma ọ bụ onye klas), ma ọ bụ onye na-amụ ihe na-eme akụkụ abụọ",
      "Peeji e bipụtara site n'akwụkwọ ma ọ bụ akwụkwọ akụkọ maka omume ịpị mkpịsị, na ngwa ide ihe ọ bụla",
      "Ihe dị ka nkeji 70 n'ozuzu, n'oge nkenke, gbakwunyere omume n'oge atụmatụ ụbọchị 90"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ. Wee mee otu isi n'otu nnọkọ, na oku omume n'abụọ abụọ n'oge Isi 2.",
      "Weta ezi mgbasa ozi ọrụ nke mpaghara gị, ebe e wepụrụ aha ụlọ ọrụ, ma ka ndị na-amụ ihe kewaa ha site n'ụdị ọrụ ma lelee ha maka ihe ịrịba ama aghụghọ.",
      "Ọ bụrụ na ị nwere ike, kpọọ team leader, onye na-achọ ndị ọrụ ma ọ bụ trainer site na BPO dị nso ka ọ kọwaa ezi usoro ha ji ewe mmadụ; ule e ji ewe mmadụ dị iche site n'ụlọ ọrụ.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha kesaa ezi nọmba ID, okwuntughe ma ọ bụ ozi ụlọ akụ n'omume; jiri ozi account e chepụtara echepụta.",
      "Maka ọrụ mba ọzọ, gosi ndị na-amụ ihe ndepụta gọọmentị nke ụlọ ọrụ na-achọ ndị ọrụ nwere ikikere na mba gị na ebe a ga-akọ ịchọ ndị ọrụ n'ụzọ megidere iwu.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
