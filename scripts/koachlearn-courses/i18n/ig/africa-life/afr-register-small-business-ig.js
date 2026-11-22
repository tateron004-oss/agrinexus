"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-register-small-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const BRS = { name: "Business Registration Service, Kenya: debanye aha azụmahịa gị n'ịntanetị site na eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission, Nigeria: ndebanye aha ụlọ ọrụ (company), aha azụmahịa na incorporated trustees (portal icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies, Ghana: aha azụmahịa, ụlọ ọrụ, mmeghari ọhụrụ (gụnyere site na *222#) na annual returns", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: ụlọ ọrụ na-akwalite itinye ego n'azụmahịa, na otu ebe e si emepe azụmahịa", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Côte d'Ivoire: ebe na-akwalite itinye ego n'azụmahịa, na otu ebe e si emepe azụmahịa", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Nzukọ na-eme ka iwu azụmahịa dị n'otu n'Afrịka (mba 17 so na ya)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Morocco: portal maka ọnọdụ auto-entrepreneur", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority: banyere KRA PIN (nweta ya na iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS): ọfịs ụtụ isi gọọmentị etiti Nigeria", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority: idebanye aha site na TIN ma ọ bụ Ghana Card PIN; Modified Taxation Scheme maka obere azụmahịa", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nigeria: enyemaka maka obere na etiti azụmahịa (ndebanye aha n'efu, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-ig",
  lang: "ig",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Idebanye Aha na Ịgba Obere Azụmahịa n'Afrịka",
  skills: "Ịhọrọ ụdị azụmahịa, Ịchọta ezi ọfịs ndebanye aha, Ịkwado ndepụta maka ndebanye aha, Inweta nọmba ụtụ isi na akwụkwọ ikike obodo, Idebe akwụkwọ ego dị mfe, Ịhazi mmeghari ọhụrụ na akụkọ kwa afọ",
  outcome: "ime ka obere azụmahịa gị bụrụ nke gọọmentị maara ma debe ya n'usoro: ịhọrọ ụdị azụmahịa kwesịrị ekwesị, ịchọta ezi ọfịs ndebanye aha nke mba gị, ịkwado ihe niile ị chọrọ iji debanye aha, ịmata nọmba ụtụ isi na akwụkwọ ikike ndị metụtara gị, idebe akwụkwọ ego dị mfe, na ịhazi mmeghari ọhụrụ na akụkọ gị kwa afọ.",
  about: [
    "Ọtụtụ obere azụmahịa n'Afrịka na-arụ ọrụ n'edebanyeghị aha. Nke a nwere ike ịga nke ọma ruo oge ụfọdụ, mana ndebanye aha nwere ike imeghe ụzọ: akaụntụ ụlọ akụ n'aha azụmahịa, nkwekọrịta na ụlọ ọrụ na gọọmentị, akaụntụ n'ahịa ịntanetị, mbinye ego na ụfọdụ mmemme enyemaka. Ihe ọmụmụ a bụ maka ndị ahịa, ndị omenka, ndị nwe ụlọ isi, ndị na-esi nri maka mmemme, ndị na-akwa akwa na onye ọ bụla nwere azụmahịa n'akụkụ na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco na n'Afrịka niile.",
    "Ị ga-ahọrọ ụdị azụmahịa dabara gị, chọta ezi ọfịs ndebanye aha nke mba gị ma zere ndị nnọchite anya adịgboroja, kwado ndepụta maka ndebanye aha, mata nọmba ụtụ isi na akwụkwọ ikike obodo ndị metụtara gị, malite akwụkwọ ego dị mfe, ma mee kalenda nke mmeghari ọhụrụ na akụkọ kwa afọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebekwa n'ọrụ \"Nwalee ya ugbu a\" maka azụmahịa nke gị. Iwu, fọm na ụgwọ na-agbanwe, ha dịkwa iche site na mba ruo mba, ya mere ihe ọmụmụ a na-akpọ aha ọfịs ndị ahụ ma gosi gị otu esi elele ha. Ọ naghị enye ụgwọ ma ọ bụ ndụmọdụ iwu; maka mkpebi dị ukwuu, jụọ ọfịs ndebanye aha, ebe enyemaka azụmahịa, ma ọ bụ onye na-agụ akaụntụ ma ọ bụ ọka iwu ruru eru."
  ],
  finalTask: "Mee ndepụta ndebanye aha maka azụmahịa nke gị: ụdị azụmahịa i họrọ na ihe mere i ji họrọ ya, ezi ọfịs ndebanye aha na weebụsaịtị ya, aha atọ ị nwere ike iji, akwụkwọ na ozi ndị ị chọrọ, nọmba ụtụ isi na akwụkwọ ikike obodo ndị metụtara gị (na ebe i lelere ha), otu ị ga-esi debe akwụkwọ ego gị, na kalenda kwa afọ nke mmeghari ọhụrụ na akụkọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na azụmahịa na-edebanyeghị aha n'Afrịka niile: ndị na-ere n'ahịa, ndị omenka, ndị na-akwa akwa, ndị na-edozi isi, ndị na-esi nri maka mmemme, ndị na-arụzi ụgbọala, ndị na-ere n'ịntanetị na ndị ntorobịa na-amalite, na Kenya, Nigeria, Ghana, mba ndị na-asụ French n'Ọdịda Anyanwụ na Etiti Afrịka, na Ugwu Afrịka.",
    startingPoint: "Ha na-agba azụmahịa kwa ụbọchị ma na-eji ego aka na ego ekwentị (mobile money). Ọtụtụ edebanyebeghị aha, amaghị ọfịs ha ga-eji, na-agwakọta ego azụmahịa na ego ụlọ, ma na-edekarịghị ihe ọ bụla. Ụfọdụ akwụọla ndị nnọchite anya adịgboroja ego ma ọ bụ nụ ndụmọdụ na-agbagwoju anya.",
    gap: "N'enweghị ndebanye aha na ndekọ dị mfe, ọtụtụ obere azụmahịa enweghị ike imeghe akaụntụ ụlọ akụ azụmahịa, nweta nkwekọrịta, ree n'ụfọdụ ahịa ịntanetị ma ọ bụ rịọ maka enyemaka. Ndị ọzọ na-edebanye aha otu ugboro wee hapụ mmeghari ọhụrụ ma ọ bụ akụkọ, wee kwụọ ntaramahụhụ. Ndị na-amụ ihe kwesịrị ịhọrọ ụdị azụmahịa, debanye aha site n'ezi ụzọ gọọmentị, mata nọmba ụtụ isi na akwụkwọ ikike ndị metụtara ha, ma debe ndekọ na ụbọchị ha n'usoro.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ndị na-amụ ihe na-asụ Bekee dị ka asụsụ nke abụọ (e nwekwara ihe ọmụmụ a n'asụsụ French na Arabic)",
      "Ngwaọrụ: ekwentị nkịtị, mgbe ụfọdụ kọmputa n'ụlọ cyber café; data dị oke ọnụ",
      "Iwu: ụdị azụmahịa, ụgwọ, ụtụ isi na akwụkwọ ikike dị iche site na mba ruo mba ma na-agbanwe; ihe ọmụmụ a anaghị enye ụgwọ ma ọ bụ ụbọchị njedebe, ọ na-egosikwa ezi ọfịs mgbe niile",
      "Nchekwa: e nwere ndị nnọchite anya na weebụsaịtị adịgboroja maka ndebanye aha; ndị na-amụ ihe na-eji naanị ezi saịtị gọọmentị, anaghịkwa ekesa okwuntughe ma ọ bụ PIN mgbe ọ bụla",
      "Ọ bụghị ndụmọdụ iwu ma ọ bụ ụtụ isi: ndị na-amụ ihe na-elele okwu nke ha n'ọfịs ndebanye aha, ọfịs ụtụ isi ma ọ bụ onye ọkachamara ruru eru"
    ],
    prerequisites: "Ịgba ma ọ bụ ịhazi obere azụmahịa. Ịgbakọ na iwepụ ọnụọgụ dị mfe."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị maara ogo azụmahịa gị, ndị nwe ya na ihe egwu ya", action: "ịhọrọ ụdị azụmahịa, dị ka aha azụmahịa nke otu onye ma ọ bụ limited company, ma dee ihe mere o ji dabara", standard: "na-akpọ otu uru na otu ọrụ nke ụdị i họrọ" },
    { id: "O2", condition: "Mgbe ị maara mba ebe ị na-azụ ahịa", action: "ịmata ezi ọfịs ndebanye aha azụmahịa ma meghee weebụsaịtị ya ma ọ bụ chọta ọfịs ya", standard: "n'ejighị onye nnọchite anya na-abụghị nke gọọmentị ma ọ bụ weebụsaịtị yiri ezi nke" },
    { id: "O3", condition: "Tupu ịmalite ndebanye aha", action: "ịkwado ndepụta ndebanye aha nwere aha atọ, ozi ndị nwe ya, ọrụ azụmahịa ahụ, adreesị na akwụkwọ", standard: "nke mere na a ga-ejupụta arịrịọ ahụ n'otu oge" },
    { id: "O4", condition: "Maka azụmahịa gị na obodo gị", action: "idepụta nọmba ụtụ isi, akwụkwọ ikike ahịa obodo na akwụkwọ ikike ngalaba ọ bụla metụtara gị, na ebe a na-enweta nke ọ bụla", standard: "na-elele ezi ọfịs maka nke ọ bụla" },
    { id: "O5", condition: "N'ime otu izu ịzụ ahịa", action: "idebanye ihe ọ bụla e rere na ego ọ bụla e mefuru n'akwụkwọ ego dị mfe, nke dị iche n'ego ụlọ", standard: "nke ego batara na ego pụrụ n'izu ahụ na-adaba" },
    { id: "O6", condition: "Mgbe e debanyechara aha azụmahịa gị", action: "ime kalenda kwa afọ nke mmeghari ọhụrụ, akụkọ na ụbọchị akwụkwọ ikike", standard: "na-elele ụbọchị ọ bụla na saịtị gọọmentị ma tọọ ncheta tupu ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhọrọ na idebanye aha",
      lessons: [
        {
          title: "Ihe mere i ji debanye aha, na ụdị azụmahịa dabara gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ ụdị azụmahịa dabara azụmahịa gị ma dee ihe kpatara ya.",
          text: [
            "Idebanye aha na-agwa gọọmentị na azụmahịa gị dị, ma nye ya aha gọọmentị maara. Uru ya nwere ike ịgụnye akaụntụ ụlọ akụ azụmahịa, nkwekọrịta na ụlọ ọrụ na gọọmentị, ire n'ụfọdụ ahịa ịntanetị, ntụkwasị obi ndị ahịa, na ịrịọ mbinye ego na mmemme enyemaka. Ọrụ ya nwere ike ịgụnye idebe ndekọ, imeghari ọhụrụ, iziga akụkọ na ịkwụ ụtụ isi.",
            "Ụdị ndị a na-ahụkarị: sole proprietorship (otu onye nwe ya, a na-edebanyekarị ya dị ka aha azụmahịa); partnership (mmadụ abụọ ma ọ bụ karịa na-ekerịta uru na ụgwọ); na limited company (ọ bụ onye nke ya n'anya iwu, ya mere ụlọ na nchekwa ego ndị nwe ya ka nwee nchebe site n'ụgwọ azụmahịa, mana o nwere akwụkwọ karịa). Aha dị iche site na mba ruo mba: Nigeria na Ghana na-edebanye aha azụmahịa na ụlọ ọrụ; na Kenya, Business Registration Service na-elekọta aha azụmahịa na ụlọ ọrụ.",
            "Na mba 17 nke OHADA, gụnyere Senegal, Côte d'Ivoire, Cameroon, Mali, Burkina Faso na DR Congo, iwu azụmahịa bụ otu. Obere onye ahịa nwere ike idebanye aha dị ka azụmahịa nke otu onye (entreprise individuelle) ma ọ bụ mepụta ụlọ ọrụ dị ka SARL. Na Morocco, ọtụtụ obere ndị na-ere ahịa na-eji ọnọdụ auto-entrepreneur.",
            "Ọtụtụ ndị na-ere n'ahịa na ndị omenka na-amalite dị ka sole proprietor ma ọ bụ aha azụmahịa. Ụlọ ọrụ (company) nwere ike ịdaba mgbe i nwere ndị mmekọ, nkwekọrịta buru ibu ma ọ bụ ihe egwu buru ibu. Maka mkpebi dị ukwuu, jụọ ọfịs ndebanye aha ma ọ bụ onye na-agụ akaụntụ ma ọ bụ ọka iwu ruru eru."
          ],
          steps: ["Dee onye nwe azụmahịa ahụ: naanị gị, ma ọ bụ gị na ndị ọzọ.", "Dee ihe egwu kacha ukwuu: ụgwọ, mmerụ ahụ, nkwekọrịta buru ibu.", "Tụnyere aha azụmahịa (sole proprietor), partnership na ụlọ ọrụ.", "Họrọ otu ma dee otu uru na otu ọrụ."],
          words: [["Sole proprietor", "azụmahịa otu onye nwe ma na-agba, onye ahụ n'onwe ya na-aza maka ụgwọ ya."], ["Limited company", "azụmahịa bụ onye nke ya n'anya iwu, ya mere ihe onwunwe ndị nwe ya ka nwee nchebe site n'ụgwọ ya."], ["OHADA", "nzukọ mba 17 nke Afrịka na-eji otu iwu azụmahịa, ọkachasị n'Ọdịda Anyanwụ na Etiti Afrịka."]],
          slides: [
            { title: "Gịnị mere i ji debanye aha?", bullets: ["Akaụntụ ụlọ akụ azụmahịa na nkwekọrịta", "Ahịa ịntanetị, mbinye ego na mmemme enyemaka", "Ntụkwasị obi ndị ahịa", "Ọrụ: ndekọ, mmeghari ọhụrụ, akụkọ, ụtụ isi"] },
            { title: "Ụdị atọ a na-ahụkarị", bullets: ["Sole proprietor / aha azụmahịa: otu onye nwe ya", "Partnership: mmadụ abụọ ma ọ bụ karịa nwe ya", "Limited company: onye nke ya n'anya iwu, akwụkwọ karịa"] },
            { title: "Mba French na Ugwu Afrịka", bullets: ["Mba 17 nke OHADA na-eji otu iwu azụmahịa", "Entreprise individuelle ma ọ bụ ụlọ ọrụ dị ka SARL", "Morocco: ọnọdụ auto-entrepreneur"] },
            { title: "Ịhọrọ", bullets: ["Ọtụtụ obere ndị ahịa na-amalite n'aha azụmahịa", "Ụlọ ọrụ: ndị mmekọ, nkwekọrịta ukwu, ihe egwu ukwu", "Mkpebi dị ukwuu? Jụọ ọfịs ndebanye aha ma ọ bụ ọkachamara"] }
          ],
          tryIt: "Dee ndị nwe azụmahịa gị na ihe egwu ya kacha ukwuu. Wee họrọ ụdị azụmahịa ma dee otu uru na otu ọrụ nke ụdị ahụ.",
          youCanNow: "itụnyere ụdị azụmahịa a na-ahụkarị ma họrọ nke dabara azụmahịa gị.",
          quickCheck: [
            { objective: "O1", q: "Fatima na-ere akwa naanị ya n'otu ahịa na Kano. Kedu ụdị ọtụtụ ndị ahịa dị ka ya na-eji amalite?", options: ["Nnukwu ụlọ ọrụ ọha", "Aha azụmahịa dị ka sole proprietor", "Ụlọ ọrụ gọọmentị", "Ọgbakọ ọrụ ebere"], answer: 1, why: "Otu onye nwe obere azụmahịa na-ejikarị aha azụmahịa amalite." },
            { objective: "O1", q: "Gịnị bụ otu isi ihe mere a ga-eji họrọ limited company?", options: ["O nweghị akwụkwọ ọ bụla", "Ọ naghị akwụ ụtụ isi mgbe ọ bụla", "Ọ na-echebe ihe onwunwe ndị nwe ya nke ọma site n'ụgwọ azụmahịa", "Ọ pụghị imeghe akaụntụ ụlọ akụ"], answer: 2, why: "Ụlọ ọrụ bụ onye nke ya n'anya iwu, nke na-ebelata ihe egwu ndị nwe ya n'onwe ha." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Ịchọta ezi ọfịs ndebanye aha, na izere ndị nnọchite anya adịgboroja",
          objectives: ["O2"],
          minutes: 5,
          goal: "Chọta ezi ọfịs ndebanye aha azụmahịa nke mba gị ma meghee ezi weebụsaịtị ya.",
          text: [
            "Mba ọ bụla nwere ezi ọfịs gọọmentị na-edebanye aha azụmahịa. Kenya: Business Registration Service (BRS), n'ịntanetị site na eCitizen. Nigeria: Corporate Affairs Commission (CAC). Ghana: Office of the Registrar of Companies (ORC). Senegal: APIX, otu ebe e si emepe azụmahịa. Côte d'Ivoire: CEPICI. Na Morocco, ọnọdụ auto-entrepreneur nwere portal nke ya na mba ahụ.",
            "Jiri naanị ezi weebụsaịtị ma ọ bụ ọfịs gọọmentị. Saịtị gọọmentị na-ejedebekarị n'ọgwụgwụ gọọmentị mba ahụ, dị ka .go.ke, .gov.ng ma ọ bụ .gov.gh. E nwere weebụsaịtị yiri ezi nke na ndị na-enye ndebanye aha \"ngwa ngwa\" ma ọ bụ \"n'efu\"; saịtị BRS nke Kenya n'onwe ya na-adọ aka na ntị banyere onyinye ndebanye aha \"n'efu\" adịgboroja.",
            "Ị nwere ike ịkwụ onye nnọchite anya a kwadoro (accredited agent) ma ọ bụ ọka iwu ụgwọ ka o nyere gị aka, mana lelee na ọ bụ ezi onye, rịọ maka ezi akwụkwọ nnata ego (receipt), ma hụ na e debanyere azụmahịa ahụ n'aha gị. Enyela onye ọ bụla okwuntughe akaụntụ eCitizen, CAC ma ọ bụ nke ọzọ gị, ma ọ bụ koodu otu oge e zitere n'ekwentị gị.",
            "Ọ bụrụ na weebụsaịtị emeghe, nwaa ọzọ ma emechaa ma ọ bụ gaa n'ọfịs ndebanye aha ma ọ bụ ebe ọrụ gọọmentị. Ekwụla onye ị na-amaghị ego kama."
          ],
          steps: ["Dee ọfịs ndebanye aha nke mba gị site na ndepụta dị na nkuzi a.", "Dee adreesị ya n'onwe gị; apịala njikọ (link) site n'ozi ndị ị na-amaghị.", "Lelee ọgwụgwụ adreesị ahụ, dị ka .go.ke, .gov.ng ma ọ bụ .gov.gh.", "Ọ bụrụ na i ji onye nnọchite anya, lelee na ọ bụ ezi onye ma nweta ezi akwụkwọ nnata ego.", "Ekesala okwuntughe gị ma ọ bụ koodu otu oge mgbe ọ bụla."],
          words: [["Ọfịs ndebanye aha (registry)", "ọfịs gọọmentị na-edekọ azụmahịa na ụlọ ọrụ."], ["Weebụsaịtị yiri ezi nke", "saịtị adịgboroja e mere ka ọ dị ka nke gọọmentị, na-achọkarị iwere ego gị."], ["Koodu otu oge (one-time code)", "obere koodu e zitere n'ekwentị gị iji gosi na ọ bụ gị; ekesala ya mgbe ọ bụla."]],
          slides: [
            { title: "Ezi ọfịs ndebanye aha", bullets: ["Kenya: BRS site na eCitizen", "Nigeria: Corporate Affairs Commission (CAC)", "Ghana: Registrar of Companies (ORC)", "Senegal: APIX; Côte d'Ivoire: CEPICI"] },
            { title: "Jiri naanị ezi saịtị", bullets: ["Dee adreesị ahụ n'onwe gị", "Lelee ọgwụgwụ dị ka .go.ke, .gov.ng, .gov.gh", "Kpachara anya maka ndebanye aha \"ngwa ngwa\" ma ọ bụ \"n'efu\""] },
            { title: "Ọ bụrụ na i ji onye nnọchite anya", bullets: ["Lelee na ọ bụ ezi onye", "Nweta ezi akwụkwọ nnata ego", "Azụmahịa ahụ ga-adị n'aha GỊ"] },
            { title: "Ekesala mgbe ọ bụla", bullets: ["Okwuntughe akaụntụ gị", "Koodu otu oge e zitere n'ekwentị gị"] }
          ],
          tryIt: "Chọta ọfịs ndebanye aha azụmahịa nke mba gị. Dee adreesị weebụsaịtị ya n'onwe gị, lelee ọgwụgwụ ya, ma dee adreesị ahụ na otu ọrụ ọ na-enye.",
          youCanNow: "ịchọta ezi ọfịs ndebanye aha azụmahịa nke mba gị ma mata ezi saịtị na nke adịgboroja.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka a na-edebanye aha azụmahịa na Nigeria?", options: ["Corporate Affairs Commission (CAC)", "Otu WhatsApp", "Ụlọ akụ ọ bụla", "Ọdụ ndị uwe ojii"], answer: 0, why: "CAC na-edebanye aha azụmahịa, ụlọ ọrụ na incorporated trustees na Nigeria." },
            { objective: "O2", q: "Ozi na-enye \"ndebanye aha azụmahịa n'efu n'otu awa\" site na njikọ. Gịnị ka ị ga-eme?", options: ["Pịa ya ma kwụọ ụgwọ ngwa ngwa", "Zipu okwuntughe gị", "Zigara ya ndị enyi gị", "Leghara njikọ ahụ anya ma dee adreesị ezi ọfịs ndebanye aha n'onwe gị"], answer: 3, why: "Onyinye adịgboroja na-eji njikọ; ezi saịtị ị dere n'onwe gị enweghị nsogbu." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Ịkwado ndepụta maka ndebanye aha gị",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kwado ndepụta ndebanye aha ka i wee nwee ike ịrịọ n'otu oge.",
          text: [
            "Fọm ịntanetị nwere ike ịkwụsị ma ọ bụrụ na ị nọọ ogologo oge, data na-efukwa ego. Buru ụzọ kwado ihe niile, wee rịọ n'otu oge.",
            "Ọtụtụ ọfịs ndebanye aha na-arịọ ihe yiri onwe ha: aha azụmahịa atọ ị nwere ike iji (ọ bụrụ na e werela nke mbụ; BRS nke Kenya na-arịọ nhọrọ atọ), aha zuru ezu nke ndị nwe ya na ozi ID mba ma ọ bụ paspọtụ ha, ekwentị na email, adreesị ma ọ bụ ebe azụmahịa ahụ dị, obere nkọwa ọrụ azụmahịa ahụ, na mgbe ụfọdụ foto paspọtụ ma ọ bụ mbinye aka. Ụlọ ọrụ (company) chọkwara ndị isi (directors), ndị nwe òkè (shareholders) na iwu ya. Ndepụta zuru ezu dị na saịtị ọfịs ndebanye aha ahụ.",
            "Họrọ aha doro anya, nke onye ọzọ na-ejibeghị, nke na-adịghịkwa eṅomi aha ụlọ ọrụ a ma ama. Ọmụmaatụ: Kofi nọ na Takoradi depụtara \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" na \"Sea Gold Fish Supplies\".",
            "Dee ụgwọ e gosiri na saịtị gọọmentị n'oge ị na-arịọ, na otu esi akwụ ya. Debe akwụkwọ nnata ego ọ bụla na asambodo ndebanye aha, n'akwụkwọ na dị ka foto n'ebe nchekwa."
          ],
          steps: ["Dee aha atọ ị nwere ike iji.", "Depụta aha ndị nwe ya, ozi ID ha, ekwentị na email.", "Dee adreesị ma ọ bụ ebe ọ dị na ọrụ azụmahịa ahụ.", "Gụọ ndepụta nke ọfịs ndebanye aha n'onwe ya maka akwụkwọ ndị ọzọ.", "Dee ụgwọ dị ugbu a na ụzọ ịkwụ ya site na saịtị gọọmentị.", "Rịọ n'otu oge ma debe akwụkwọ nnata ego ọ bụla na asambodo ahụ."],
          words: [["Ịchọ / idowe aha (name search / reservation)", "ịlele na aha azụmahịa adịghị onye ji ya, na idowe ya maka gị mgbe ị na-edebanye aha."], ["Asambodo ndebanye aha (certificate of registration)", "ezi akwụkwọ gọọmentị na-egosi na e debanyere aha azụmahịa gị."], ["Onye isi ụlọ ọrụ (director)", "onye na-agba ụlọ ọrụ ma nwee ọrụ iwu n'ebe ọ nọ."]],
          slides: [
            { title: "Buru ụzọ kwado, rịọ otu ugboro", bullets: ["Fọm nwere ike ịkwụsị", "Data na-efu ego", "Nwee ihe niile njikere"] },
            { title: "Ihe a na-arịọkarị", bullets: ["Aha atọ ị nwere ike iji", "Aha ndị nwe ya, ID, ekwentị na email", "Adreesị na ọrụ azụmahịa", "Ụlọ ọrụ: directors na shareholders"] },
            { title: "Ezigbo aha", bullets: ["Doro anya, onye ọzọ ejibeghị ya", "Eṅomila aha ụlọ ọrụ a ma ama", "Lelee ndepụta nke ọfịs ndebanye aha"] },
            { title: "Mgbe ị rịọchara", bullets: ["Dee ụgwọ site na saịtị gọọmentị", "Debe akwụkwọ nnata ego ọ bụla", "Debe asambodo, n'akwụkwọ na foto"] }
          ],
          tryIt: "Dee ndepụta ndebanye aha gị: aha atọ, ozi ndị nwe ya (edela nọmba ID gị n'ebe ọ bụla a na-ekerịta), adreesị, ọrụ azụmahịa, akwụkwọ, na weebụsaịtị ọfịs ndebanye aha.",
          youCanNow: "ịkwado ndepụta ndebanye aha ka i wee nwee ike ịrịọ n'otu oge.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị ga-eji kwado aha azụmahịa atọ?", options: ["Iwu chọrọ azụmahịa atọ", "Ọ bụrụ na e werela aha mbụ gị", "Iji gbagwoju ndị nnọchite anya adịgboroja anya", "Iji kwụọ obere ụtụ isi"], answer: 1, why: "Ọ bụrụ na e werela aha mbụ gị, nhọrọ nke ọzọ na-azọpụta gị n'ịrịọ ugboro abụọ." },
            { objective: "O3", q: "Ebee ka ị ga-ahụ akwụkwọ ndị ọfịs ndebanye aha gị chọrọ n'ezie?", options: ["Ihe onye agbata obi chetara", "Okwu e dere na soshal midia", "Ezi weebụsaịtị ma ọ bụ ọfịs nke ọfịs ndebanye aha", "Mgbasa ozi nke onye nnọchite anya ị na-amaghị"], answer: 2, why: "Ihe a chọrọ na-agbanwe, ọ bụkwa naanị ọfịs ndebanye aha ji n'aka." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhọrọ na idebanye aha",
        questions: [
          { objective: "O1", q: "Ndị enyi abụọ mepere azụmahịa isi nri maka mmemme ọnụ ma na-ekerịta uru. Kedu ụdị nke a kacha yie?", options: ["Sole proprietor", "Ụlọ ọrụ gọọmentị", "Partnership ma ọ bụ ụlọ ọrụ (company)", "Ọgbakọ ọrụ ebere"], answer: 2, why: "Mmadụ abụọ ma ọ bụ karịa na-ekerịta uru bụ partnership, ma ọ bụ ha nwere ike ime ụlọ ọrụ." },
          { objective: "O1", q: "Na Senegal na Côte d'Ivoire, iwu azụmahịa si:", options: ["Naanị iwu obodo ọ bụla", "OHADA, nke mba 17 na-ekerịta", "Ahịa ịntanetị ebe ị na-ere", "Ụlọ akụ gị"], answer: 1, why: "Iwu azụmahịa OHADA dị n'otu na-arụ ọrụ na mba ndị so na ya." },
          { objective: "O2", q: "Kedu ọgwụgwụ adreesị weebụsaịtị bụ ihe ịrịba ama nke saịtị gọọmentị Kenya?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Saịtị gọọmentị Kenya na-ejedebekarị na .go.ke." },
          { objective: "O2", q: "Onye nnọchite anya kwuru na ya ga-edebanye aha azụmahịa gị. Gịnị ka ị ga-elele?", options: ["Na o nwere ọfịs mara mma", "Na ọ na-eme ngwa ngwa", "Na ọ na-anabata naanị ego aka", "Na ọ bụ ezi onye, na-enye ezi akwụkwọ nnata ego, ma debanye ya n'aha gị"], answer: 3, why: "Ezi onye nnọchite anya, ezi akwụkwọ nnata ego na aha gị n'azụmahịa ahụ na-echebe gị." },
          { objective: "O3", q: "Gịnị ka ị ga-edebe mgbe i debanyechara aha?", options: ["Ọ dịghị ihe", "Naanị ozi ederede", "Asambodo ndebanye aha na akwụkwọ nnata ego ọ bụla, n'akwụkwọ na dị ka foto", "Okwu onye nnọchite anya"], answer: 2, why: "Ị ga-achọ asambodo na akwụkwọ nnata ego maka ụlọ akụ, mmeghari ọhụrụ na nkwekọrịta." }
        ]
      }
    },
    {
      name: "Isi 2: Ịgba ya nke ọma",
      lessons: [
        {
          title: "Nọmba ụtụ isi na akwụkwọ ikike obodo",
          objectives: ["O4"],
          minutes: 6,
          goal: "Depụta nọmba ụtụ isi na akwụkwọ ikike azụmahịa gị chọrọ, na ebe a na-enweta nke ọ bụla.",
          text: [
            "Idebanye aha bụkarị naanị nzọụkwụ mbụ. Ọtụtụ azụmahịa chọkwara nọmba njirimara ụtụ isi, akwụkwọ ikike ịzụ ahịa nke obodo, na, maka ụfọdụ ọrụ, akwụkwọ ikike ngalaba (sector permit).",
            "Nọmba ụtụ isi: na Kenya, KRA PIN site na Kenya Revenue Authority, nke ị na-enweta na iTax; a chọrọ ya maka ndebanye aha azụmahịa na ọtụtụ ihe ndị ọzọ. Na Nigeria, ọfịs ụtụ isi gọọmentị etiti bụ Nigeria Revenue Service (NRS), steeti ọ bụla nwekwara ọfịs ụtụ isi nke ya (internal revenue service). Na Ghana, Ghana Revenue Authority na-eji TIN gị ma ọ bụ Ghana Card PIN, ma depụta Modified Taxation Scheme maka obere azụmahịa. Jụọ ọfịs ụtụ isi ụdị ụtụ isi obere azụmahịa metụtara gị.",
            "Akwụkwọ ikike obodo: ọtụtụ obodo na county chọrọ akwụkwọ ikike ịzụ ahịa ma ọ bụ azụmahịa, a na-emeghari ya ọhụrụ oge niile. Na Kenya, ọ si na gọọmentị county gị; na Nigeria, site na steeti ma ọ bụ gọọmentị ime obodo (local government); na Ghana, site na district ma ọ bụ municipal assembly. Akwụkwọ ikike ngalaba: ndị na-ere nri, ụlọ isi, ụlọ ọgwụ, ndị njem na ndị ọzọ nwere ike ịchọ asambodo ahụike ma ọ bụ ikike site n'otu ngalaba.",
            "Jụọ n'ọfịs gọọmentị ime obodo ma ọ bụ n'ebe enyemaka azụmahịa dị ka SMEDAN na Nigeria. Dee ihe ọ bụla a chọrọ, ọfịs ahụ na ụbọchị i lelere. Nọmba ID mba gị ma ọ bụ nọmba ụtụ isi gị bụ nzuzo: etinyela ya n'ịntanetị ma ọ bụ zigara ya ndị ị na-amaghị."
          ],
          steps: ["Chọta ọfịs ụtụ isi gị ma jụọ otu obere azụmahịa si enweta nọmba ụtụ isi.", "Jụọ county, steeti, gọọmentị ime obodo ma ọ bụ assembly gị banyere akwụkwọ ikike ịzụ ahịa.", "Jụọ ma ụdị ọrụ gị chọrọ asambodo ahụike ma ọ bụ ikike ngalaba.", "Dee nke ọ bụla, ọfịs ahụ, na ụbọchị i lelere."],
          words: [["Nọmba njirimara ụtụ isi (TIN)", "nọmba ọfịs ụtụ isi na-enye gị iji ziga akụkọ ma kwụọ ụtụ isi; na Kenya ọ bụ KRA PIN."], ["Akwụkwọ ikike ịzụ ahịa (trading permit)", "ikike gọọmentị ime obodo gị na-enye gị ịgba azụmahịa n'ebe ahụ."], ["Akwụkwọ ikike ngalaba (sector permit)", "ikike maka ụfọdụ ọrụ, dị ka nri, ahụike ma ọ bụ njem."]],
          slides: [
            { title: "Mgbe aha gasịrị: ihe atọ ọzọ ị ga-elele", bullets: ["Nọmba ụtụ isi", "Akwụkwọ ikike ịzụ ahịa nke obodo", "Akwụkwọ ikike ngalaba maka ụfọdụ ọrụ"] },
            { title: "Nọmba ụtụ isi", bullets: ["Kenya: KRA PIN na iTax", "Nigeria: Nigeria Revenue Service na ọfịs ụtụ isi steeti", "Ghana: GRA, TIN ma ọ bụ Ghana Card PIN"] },
            { title: "Akwụkwọ ikike obodo na nke ngalaba", bullets: ["County, steeti, gọọmentị ime obodo ma ọ bụ assembly", "Nri, ụlọ isi, njem nwere ike ịchọ ihe ọzọ", "Jụọ ebe enyemaka azụmahịa"] },
            { title: "Dee ya", bullets: ["Ihe ọ bụla a chọrọ na ọfịs ya", "Ụbọchị i lelere", "Debe nọmba ID na nọmba ụtụ isi na nzuzo"] }
          ],
          tryIt: "Mee tebụl nwere ahịrị atọ: nọmba ụtụ isi, akwụkwọ ikike obodo, akwụkwọ ikike ngalaba. Maka nke ọ bụla, dee ọfịs ahụ, weebụsaịtị ma ọ bụ adreesị ya, na ma ọ metụtara gị. Lelee opekata mpe otu n'ọfịs ahụ n'izu a.",
          youCanNow: "idepụta nọmba ụtụ isi na akwụkwọ ikike azụmahịa gị chọrọ na ọfịs maka nke ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Na Kenya, olee otu i si enweta KRA PIN?", options: ["Site na kọmitii ahịa", "Na iTax, site na Kenya Revenue Authority", "Site n'aka onye isi ụlọ akụ gị", "Site n'aka onye nnọchite anya na WhatsApp"], answer: 1, why: "KRA na-enye PIN ahụ site na sistemụ iTax ya." },
            { objective: "O4", q: "Grace mepere ebe ọ na-ere nri n'Accra. E wezụga ndebanye aha, gịnị ka ọ ga-ajụ banyere ya?", options: ["Ọ dịghị ihe ọzọ", "Akwụkwọ ikike ịnya ụgbọala", "Akwụkwọ ikike ịzụ ahịa na asambodo nri ma ọ bụ ahụike ọ bụla", "Paspọtụ"], answer: 2, why: "Akwụkwọ ikike obodo na iwu nchekwa nri na-emetụtakarị ndị na-ere nri." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Akwụkwọ ego dị mfe: idebe ego azụmahịa iche",
          objectives: ["O5"],
          minutes: 5,
          goal: "Debanye ihe ọ bụla e rere na ego ọ bụla e mefuru n'akwụkwọ ego dị mfe maka otu izu.",
          text: [
            "Ndekọ na-egosi ma ị na-enweta uru n'ezie. Ha na-enyekwa aka maka ụtụ isi, mbinye ego na mmeghari ọhụrụ. Malite n'ụzọ dị mfe: akwụkwọ ndetu ma ọ bụ peeji ndetu n'ekwentị.",
            "Akwụkwọ ego nwere kọlụm anọ: ụbọchị, ihe mere, ego batara, ego pụrụ. Dee ihe ọ bụla e rere na ego ọ bụla e mefuru n'otu ụbọchị ahụ, gụnyere mobile money. Na njedebe ụbọchị ma ọ bụ izu, gbakọọ ego batara, gbakọọ ego pụrụ, ma wepụ otu n'ime nke ọzọ. Ọmụmaatụ site na Douala: na Mọnde, Paul rere mkpuchi ekwentị 12 maka 24,000 XAF ma zụta ngwaahịa maka 15,000 XAF; ego batara wepụ ego pụrụ bụ 9,000 XAF (ọnụọgụ ọmụmaatụ).",
            "Debe ego azụmahịa iche n'ego ụlọ. Ọ bụrụ na i wepụrụ ego maka nri ma ọ bụ ụgwọ akwụkwọ ụmụaka, dee ya dị ka \"onye nwe ya wepụrụ\" ka i wee hụ ya. Ahịrị mobile money ma ọ bụ akaụntụ dị iche maka azụmahịa na-eme ka nke a dị mfe. Debe akwụkwọ nnata ego n'ime envelopu ma ọ bụ see ha foto."
          ],
          steps: ["See kọlụm anọ: ụbọchị, ihe mere, ego batara, ego pụrụ.", "Dee ihe ọ bụla e rere na ego ọ bụla e mefuru n'otu ụbọchị ahụ.", "Dee ego i wepụrụ maka ụlọ dị ka \"onye nwe ya wepụrụ\".", "Na njedebe izu, gbakọọ kọlụm ọ bụla ma chọta ọdịiche ya.", "Debe akwụkwọ nnata ego n'ime envelopu ma ọ bụ dị ka foto."],
          words: [["Akwụkwọ ego (cash book)", "ndekọ dị mfe nke ego na-abata n'azụmahịa na nke na-apụ."], ["Onye nwe ya wepụrụ (drawings)", "ego onye nwe azụmahịa na-ewepụ n'azụmahịa maka onwe ya."]],
          slides: [
            { title: "Ihe mere i ji debe ndekọ", bullets: ["Hụ ma ị na-enweta uru n'ezie", "A chọrọ ha maka ụtụ isi, mbinye ego na mmeghari ọhụrụ"] },
            { title: "Kọlụm anọ", bullets: ["Ụbọchị", "Ihe mere", "Ego batara", "Ego pụrụ"] },
            { title: "Debe ego azụmahịa iche", bullets: ["Dee mmefu ụlọ dị ka \"onye nwe ya wepụrụ\"", "Ahịrị mobile money dị iche na-enyere aka", "Debe akwụkwọ nnata ego ma ọ bụ foto ha"] }
          ],
          tryIt: "Malite akwụkwọ ego taa. Dee ihe ọ bụla e rere na ego ọ bụla e mefuru maka otu izu, gụnyere ego i wepụrụ maka ụlọ. N'ụbọchị ikpeazụ, gbakọọ kọlụm ọ bụla ma dee ọdịiche ya.",
          youCanNow: "idebe akwụkwọ ego dị mfe ma debe ego azụmahịa iche n'ego ụlọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu kọlụm anọ nke akwụkwọ ego dị mfe?", options: ["Ụbọchị, ihe mere, ego batara, ego pụrụ", "Aha, afọ, obodo, ekwentị", "Ọnụahịa, agba, nha, aha ụdị", "Mọnde ruo Tọzdee"], answer: 0, why: "Kọlụm anọ ndị a na-egosi mmegharị ego ọ bụla." },
            { objective: "O5", q: "I wepụrụ 2,000 NGN n'azụmahịa maka nri n'ụlọ. Gịnị ka ị ga-ede?", options: ["Ọ dịghị ihe", "Ihe e rere", "Onye ahịa ọhụrụ", "\"Onye nwe ya wepụrụ 2,000 NGN\" n'ego pụrụ"], answer: 3, why: "Ide ihe onye nwe ya wepụrụ na-eme ka ndekọ ahụ bụrụ eziokwu." }
          ]
        },
        {
          title: "Ịnọgide na ndebanye aha: mmeghari ọhụrụ, akụkọ na kalenda kwa afọ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Mee kalenda kwa afọ nke mmeghari ọhụrụ, akụkọ na ụbọchị akwụkwọ ikike.",
          text: [
            "Idebanye aha otu ugboro abụghị njedebe. Ọtụtụ azụmahịa ga-emeghari ọhụrụ, ziga akụkọ kwa afọ (annual return) ma ọ bụ akụkọ ụtụ isi (tax return), ma meghari akwụkwọ ikike obodo ọhụrụ. Ịhapụ otu ụbọchị nwere ike ịpụta ntaramahụhụ ma ọ bụ ịtụfu ndebanye aha ahụ.",
            "Ọmụmaatụ: ORC nke Ghana kwuru na a chọrọ annual returns n'aka ụlọ ọrụ niile e debanyere (incorporated companies), na a pụrụ imeghari aha azụmahịa ọhụrụ n'ịntanetị, gụnyere site n'ịkpọ *222#. CAC nke Nigeria na-elekọta annual returns. KRA nke Kenya na-atụ anya akụkọ site n'aka ndị nwere ọrụ ụtụ isi. Akwụkwọ ikike obodo na-adịkarị otu afọ. Ụbọchị na ụgwọ n'ezie dị iche, ya mere lelee nke ọ bụla na saịtị gọọmentị ma ọ bụ n'ọfịs ahụ.",
            "Mee kalenda kwa afọ: dee ọrụ ọ bụla, ọfịs ahụ, ọnwa ọ ga-eru na ụbọchị i lelere. Tọọ ncheta n'ekwentị gị otu ọnwa tupu ya. Debe akwụkwọ ego gị n'usoro, n'ihi na akụkọ na-eji ọnụọgụ ndị ahụ.",
            "Ọ bụrụ na ị maghị nke metụtara gị, jụọ ọfịs ndebanye aha, ọfịs ụtụ isi, ebe enyemaka azụmahịa ma ọ bụ onye na-agụ akaụntụ ruru eru. Ọ bụrụ na mmadụ akpọọ gị oku sị na a ga-ehichapụ ndebanye aha gị taa ma ọ bụrụ na ị kwụghị ya ego ugbu a, buru ụzọ lelee n'ọfịs ndebanye aha n'onwe gị."
          ],
          steps: ["Depụta ọrụ ọ bụla: mmeghari ọhụrụ, annual return, akụkọ ụtụ isi, mmeghari akwụkwọ ikike.", "Lelee ụbọchị na ọfịs nke ọ bụla na saịtị gọọmentị.", "Dee ha na kalenda ọnwa 12.", "Tọọ ncheta n'ekwentị otu ọnwa tupu ụbọchị ọ bụla.", "Lelee arịrịọ ego e ji ọsọ achọ n'ọfịs ndebanye aha n'onwe gị."],
          words: [["Akụkọ kwa afọ (annual return)", "akụkọ kwa afọ a na-ezigara ọfịs ndebanye aha na azụmahịa gị ka dị, na ozi ya ziri ezi."], ["Mmeghari ọhụrụ (renewal)", "ịkwụ ụgwọ ma ọ bụ iziga akwụkwọ ọzọ ka ndebanye aha ma ọ bụ akwụkwọ ikike nọgide na-arụ ọrụ."], ["Ntaramahụhụ (penalty)", "ego a na-akwụ maka ịbịa n'azụ oge ma ọ bụ imebi iwu."]],
          slides: [
            { title: "Ndebanye aha abụghị njedebe", bullets: ["Mmeghari ọhụrụ na annual returns", "Akụkọ ụtụ isi", "Mmeghari akwụkwọ ikike obodo"] },
            { title: "Ọmụmaatụ", bullets: ["Ghana ORC: annual returns maka ụlọ ọrụ; meghari aha site na *222#", "Nigeria CAC: annual returns", "Kenya KRA: akụkọ ma ọ bụrụ na i nwere ọrụ ụtụ isi"] },
            { title: "Kalenda gị kwa afọ", bullets: ["Ọrụ, ọfịs, ọnwa ọ ga-eru", "Ụbọchị i lelere ya", "Ncheta n'ekwentị otu ọnwa tupu ya"] },
            { title: "Nọrọ na nchekwa", bullets: ["Ị maghị? Jụọ ọfịs ahụ ma ọ bụ onye na-agụ akaụntụ", "Oku \"kwụọ ugbu a\" e ji ọsọ: lelee n'ọfịs ndebanye aha n'onwe gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: chịkọta ndepụta ndebanye aha gị nwere ụdị azụmahịa gị, ọfịs ndebanye aha, aha ị nwere ike iji, akwụkwọ, nọmba ụtụ isi na akwụkwọ ikike, atụmatụ akwụkwọ ego, na kalenda ọnwa 12 nke mmeghari ọhụrụ na akụkọ nwere ncheta e tọrọ.",
          youCanNow: "ịhazi mmeghari ọhụrụ na akụkọ gị kwa afọ ka azụmahịa gị nọgide na ndebanye aha ma nọrọ n'ọnọdụ dị mma.",
          quickCheck: [
            { objective: "O6", q: "Olee mgbe ị ga-atọ ncheta maka mmeghari ọhụrụ?", options: ["Mgbe ụbọchị ahụ gafere", "Ọ dịghị mgbe ọ bụla", "Ihe dị ka otu ọnwa tupu ọ ruo", "Naanị ma ọ bụrụ na mmadụ akpọọ gị"], answer: 2, why: "Ncheta otu ọnwa tupu ya na-enye gị oge ịkwado na ịkwụ ụgwọ." },
            { objective: "O6", q: "Onye kpọrọ oku kwuru na a ga-ehichapụ azụmahịa gị taa ma ọ bụrụ na ị kwụghị ya ego ugbu a. Gịnị ka ị ga-eme?", options: ["Lelee n'ọfịs ndebanye aha n'onwe gị tupu ịkwụ onye ọ bụla", "Kwụọ ya ngwa ngwa", "Zipu okwuntughe gị", "Mechie azụmahịa ahụ"], answer: 0, why: "Arịrịọ ego e ji ọsọ achọ bụ ihe ịrịba ama aghụghọ; ọfịs ndebanye aha n'onwe ya nwere ike ịgwa gị ọnọdụ gị." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịgba ya nke ọma",
        questions: [
          { objective: "O4", q: "E wezụga idebanye aha, ọtụtụ azụmahịa chọkwara:", options: ["Nọmba ụtụ isi na akwụkwọ ikike ịzụ ahịa nke obodo", "Ọ dịghị ihe ọ bụla", "Ekwentị ọhụrụ", "Akaụntụ n'ahịa ịntanetị"], answer: 0, why: "Nọmba ụtụ isi na akwụkwọ ikike obodo dị iche na ndebanye aha." },
          { objective: "O4", q: "Ebee ka ị ga-ajụ banyere akwụkwọ ikike ịzụ ahịa na Kenya?", options: ["Onye nnọchite anya mobile money", "Gọọmentị county gị", "Ụlọ akwụkwọ", "Ụlọ ọrụ redio"], answer: 1, why: "County ndị Kenya na-enye akwụkwọ ikike azụmahịa maka mpaghara ha." },
          { objective: "O5", q: "Gịnị mere ị ga-eji debe ego azụmahịa na ego ụlọ iche?", options: ["Ọ na-atọ ụtọ karịa", "Ka ụlọ akụ kwụọ gị ụgwọ", "Ka i wee hụ ma azụmahịa ahụ na-enweta uru n'ezie", "Ka ị ghara ịkwụ ụtụ isi"], answer: 2, why: "Ịgwakọta ego na-ezo ma azụmahịa ahụ na-enweta ego." },
          { objective: "O5", q: "Izu gị na-egosi ego batara 40,000 KES na ego pụrụ 31,000 KES. Ọdịiche ya bụ:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 wepụ 31,000 bụ 9,000." },
          { objective: "O6", q: "Gịnị bụ annual return?", options: ["Akụkọ kwa afọ a na-ezigara ọfịs ndebanye aha na azụmahịa ahụ na ozi ya ka dị ọhụrụ", "Ego ndị ahịa na-enyeghachi", "Ezumike", "Mbinye ego ụlọ akụ"], answer: 0, why: "Annual returns na-eme ka ndekọ ọfịs ndebanye aha banyere azụmahịa gị dị ọhụrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Idebanye Aha na Ịgba Obere Azụmahịa n'Afrịka",
    questions: [
      { objective: "O1", q: "Kedu nke bụ uru idebanye aha azụmahịa?", options: ["Ịghara ịkwụ ụtụ isi mgbe ọ bụla", "Imeghe akaụntụ ụlọ akụ azụmahịa na inweta nkwekọrịta", "Ọ dịghị ndekọ a chọrọ", "Ọ dịghị ọrụ ọ bụla"], answer: 1, why: "Ndebanye aha na-emeghe akaụntụ ụlọ akụ, nkwekọrịta na mmemme, ya na ọrụ ụfọdụ." },
      { objective: "O1", q: "Sole proprietor bụ:", options: ["Azụmahịa otu onye nwe", "Ọfịs gọọmentị", "Ụlọ ọrụ nwere ọtụtụ shareholders", "Otu nchekwa ego"], answer: 0, why: "Otu onye nwe ya, onye n'onwe ya na-aza maka azụmahịa ahụ." },
      { objective: "O1", q: "Ọtụtụ obere ndị na-ere ahịa na Morocco na-eji:", options: ["Ụlọ ọrụ ọha", "Naanị SARL nke OHADA", "Ọnọdụ auto-entrepreneur", "Ọ dịghị ndebanye aha mgbe ọ bụla"], answer: 2, why: "Morocco nwere ọnọdụ auto-entrepreneur maka obere ọrụ." },
      { objective: "O1", q: "Onye ka ị ga-ajụ tupu mkpebi dị ukwuu banyere ụdị azụmahịa gị?", options: ["Onye ị na-amaghị n'ịntanetị", "Ọ dịghị onye", "Onye na-ere n'ahịa", "Ọfịs ndebanye aha ma ọ bụ onye na-agụ akaụntụ ma ọ bụ ọka iwu ruru eru"], answer: 3, why: "Ọfịs ndebanye aha ma ọ bụ ọkachamara nwere ike inye ndụmọdụ maka okwu nke gị." },
      { objective: "O2", q: "Na Ghana, onye na-edebanye aha azụmahịa bụ:", options: ["Office of the Registrar of Companies (ORC)", "Naanị Ghana Revenue Authority", "Onye nnọchite anya mobile money", "Ụka"], answer: 0, why: "ORC na-edebanye aha azụmahịa na ụlọ ọrụ na Ghana." },
      { objective: "O2", q: "Na Kenya, ị na-edebanye aha azụmahịa n'ịntanetị site na:", options: ["Peeji Facebook", "eCitizen, ya na Business Registration Service", "Otu WhatsApp nzuzo", "App ụlọ akụ gị"], answer: 1, why: "A na-eme ndebanye aha BRS n'ịntanetị site na eCitizen." },
      { objective: "O2", q: "Kedu ụzọ kacha enweghị nsogbu iji ruo weebụsaịtị ọfịs ndebanye aha?", options: ["Pịa njikọ n'ozi ederede ị na-amaghị", "Jiri mgbasa ozi na-apụta na mberede", "Dee ezi adreesị ahụ n'onwe gị ma lelee ọgwụgwụ ya", "Rịọ onye ị na-amaghị ka o jiri okwuntughe gị mee ya"], answer: 2, why: "Ide adreesị ahụ n'onwe gị na-egbochi saịtị yiri ezi nke." },
      { objective: "O3", q: "Tupu ịmalite ndebanye aha n'ịntanetị, ị kwesịrị:", options: ["Ibu ụzọ kwado aha, ozi na akwụkwọ niile", "Ịmalite ma tụọ anya na ọ ga-aga nke ọma", "Ikesa okwuntughe gị na onye nnọchite anya", "Ịkwụ onye ị na-amaghị ego"], answer: 0, why: "Ịdị njikere na-eme ka ị mechaa n'otu oge ma chekwaa data." },
      { objective: "O3", q: "Ezigbo aha azụmahịa bụ:", options: ["Nke ṅomiri aha ụlọ ọrụ a ma ama", "Nke doro anya, nke azụmahịa ọzọ na-ejibeghị", "Nke dị ogologo nke ukwuu, siri ike ide", "Otu ihe ahụ dị ka nke onye agbata obi gị"], answer: 1, why: "Aha doro anya, nke a na-ejibeghị, nwere ike ịbụ nke a ga-anabata." },
      { objective: "O3", q: "Ebee ka ị ga-ahụ ụgwọ ndebanye aha dị ugbu a?", options: ["Akwụkwọ mgbasa ozi ochie", "Asịrị", "Ihe i chere", "Ezi saịtị ma ọ bụ ọfịs nke ọfịs ndebanye aha"], answer: 3, why: "Ụgwọ na-agbanwe, ya mere ezi isi iyi gọọmentị bụ naanị nke ji n'aka." },
      { objective: "O4", q: "KRA PIN bụ:", options: ["PIN mobile money", "Okwuntughe ị ga-ekesa", "Nọmba njirimara ụtụ isi nke Kenya", "Akwụkwọ ikike azụmahịa"], answer: 2, why: "KRA PIN bụ nọmba ụtụ isi gị na Kenya Revenue Authority." },
      { objective: "O4", q: "Ọfịs ụtụ isi gọọmentị etiti Nigeria bụ:", options: ["Nigeria Revenue Service (NRS)", "Corporate Affairs Commission", "SMEDAN", "Otu ndị ahịa nke ahịa gị"], answer: 0, why: "NRS bụ ọfịs ụtụ isi gọọmentị etiti Nigeria; steeti nwere ọfịs ụtụ isi nke ha." },
      { objective: "O4", q: "Ụlọ isi ma ọ bụ ebe a na-ere nri nwekwara ike ịchọ:", options: ["Akwụkwọ ikike ịnya ụgbọelu", "Ọ dịghị ihe ọzọ", "Asambodo mahadum", "Asambodo ahụike ma ọ bụ ikike ngalaba"], answer: 3, why: "Ụfọdụ ọrụ chọrọ akwụkwọ ikike ngalaba maka ahụike na nchekwa." },
      { objective: "O5", q: "Akwụkwọ ego na-edekọ:", options: ["Ụbọchị ọmụmụ ndị ahịa", "Ego batara na ego pụrụ, ya na ụbọchị", "Naanị nnukwu ihe e rere", "Naanị mbinye ego ụlọ akụ"], answer: 1, why: "Ọ na-edekọ mmegharị ego ọ bụla, ya na ụbọchị na ihe mere." },
      { objective: "O5", q: "Olee mgbe ị ga-ede ihe e rere n'akwụkwọ ego?", options: ["Otu ugboro n'afọ", "Naanị mgbe i chetara", "N'otu ụbọchị ahụ", "Ọ dịghị mgbe maka mobile money"], answer: 2, why: "Ide ya n'otu ụbọchị ahụ na-eme ka ndekọ ahụ zuo ezu ma bụrụ eziokwu." },
      { objective: "O5", q: "Ego i wepụrụ n'azụmahịa maka ụgwọ akwụkwọ ụmụaka ka a na-ede dị ka:", options: ["\"Onye nwe ya wepụrụ\" n'ego pụrụ", "Ihe e rere", "Ọ dịghị ihe", "Onyinye onye ahịa"], answer: 0, why: "Idekọ ihe onye nwe ya wepụrụ na-eme ka ego azụmahịa na ego ụlọ doo anya." },
      { objective: "O6", q: "ORC nke Ghana na-ekwe ka e meghari aha azụmahịa ọhụrụ:", options: ["Naanị n'onwe gị na mba ọzọ", "Ọ dịghị mgbe", "N'ịntanetị, gụnyere site n'ịkpọ *222#", "Site n'aka onye nnọchite anya na WhatsApp"], answer: 2, why: "ORC kwuru na a pụrụ ime mmeghari ọhụrụ n'ịntanetị na site na *222#." },
      { objective: "O6", q: "Kalenda kwa afọ maka idebe iwu na-edepụta:", options: ["Naanị ụbọchị ezumike", "Adreesị ndị ahịa", "Egwuregwu bọọlụ", "Mmeghari ọhụrụ, akụkọ na akwụkwọ ikike ọ bụla, ọfịs ya na ọnwa ọ ga-eru"], answer: 3, why: "Otu kalenda na-eme ka ị hụ ọrụ na ụbọchị ọ bụla." },
      { objective: "O6", q: "Ịhapụ mmeghari ọhụrụ ma ọ bụ annual return nwere ike iweta:", options: ["Onyinye n'efu", "Ntaramahụhụ ma ọ bụ ịtụfu ndebanye aha", "Ọnụahịa dị ala", "Ọ dịghị ihe mgbe ọ bụla"], answer: 1, why: "Iziga akwụkwọ n'azụ oge nwere ike iweta ụgwọ ntaramahụhụ ma ọ bụ iwepụ gị n'ndekọ." },
      { objective: "O6", q: "Tupu ụbọchị ọ bụla ga-eru, ị kwesịrị:", options: ["Ilele ụbọchị ahụ na saịtị gọọmentị ma tọọ ncheta", "Ichere ka onye kpọrọ oku chetara gị", "Ịkwụ onye ọ bụla rịọrọ ego", "Ileghara ya anya"], answer: 0, why: "Ilele na saịtị gọọmentị na ịtọ ncheta na-eme ka ị bịa n'oge ma zere aghụghọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ụdị azụmahịa", objective: "O1", notYet: "Ọ dịghị ụdị a họrọ, ma ọ bụ e nyeghị ihe kpatara ya.", meets: "E họrọ otu ụdị nwere otu uru na otu ọrụ, dabara ndị nwe ya na ihe egwu ya.", exceeds: "Na-atụnyere ụdị abụọ ma kwuo mgbe azụmahịa ahụ nwere ike ịgbanwe ụdị." },
      { name: "Ezi ọfịs ndebanye aha", objective: "O2", notYet: "Ọ dịghị ọfịs ndebanye aha a kpọrọ aha, ma ọ bụ saịtị ma ọ bụ onye nnọchite anya na-abụghị nke gọọmentị.", meets: "Ezi ọfịs ndebanye aha ziri ezi na ezi weebụsaịtị ya ma ọ bụ adreesị ọfịs ya.", exceeds: "Na-ekwukwa otu esi amata saịtị ma ọ bụ onye nnọchite anya adịgboroja." },
      { name: "Ndepụta ndebanye aha", objective: "O3", notYet: "Aha ị nwere ike iji, ozi ndị nwe ya ma ọ bụ ọrụ azụmahịa adịghị.", meets: "Aha atọ, ozi ndị nwe ya, adreesị, ọrụ azụmahịa, akwụkwọ na ụgwọ site na saịtị gọọmentị.", exceeds: "Na-akpọkwa aha akwụkwọ ụlọ ọrụ (company) ga-achọ, ma ọ bụ ebe a ga-edebe asambodo ahụ n'ụzọ nchekwa." },
      { name: "Nọmba ụtụ isi na akwụkwọ ikike", objective: "O4", notYet: "Ọ dịghị nọmba ụtụ isi ma ọ bụ akwụkwọ ikike e depụtara, ma ọ bụ ọ dịghị ọfịs a kpọrọ aha.", meets: "Nọmba ụtụ isi, akwụkwọ ikike obodo na akwụkwọ ikike ngalaba ọ bụla, nke ọ bụla ya na ọfịs ya na ụbọchị e lelere.", exceeds: "E kwadoro opekata mpe otu n'ọfịs ahụ n'onwe ya ma ọ bụ site n'ekwentị." },
      { name: "Akwụkwọ ego", objective: "O5", notYet: "Ọ dịghị akwụkwọ ego, ma ọ bụ e gwakọtara ego azụmahịa na ego ụlọ.", meets: "Ndekọ otu izu nwere kọlụm anọ, ndekọ \"onye nwe ya wepụrụ\" na ngụkọ izu ziri ezi.", exceeds: "Ahịrị ma ọ bụ akaụntụ ego azụmahịa dị iche, na akwụkwọ nnata ego e debere." },
      { name: "Kalenda kwa afọ", objective: "O6", notYet: "Ọ dịghị kalenda, ma ọ bụ e chere ụbọchị n'eche.", meets: "Kalenda ọnwa 12 nke mmeghari ọhụrụ, akụkọ na akwụkwọ ikike nwere ọfịs, ụbọchị e lelere na ncheta e tọrọ.", exceeds: "Na-ekwu onye a ga-ajụ (ọfịs ndebanye aha, ọfịs ụtụ isi ma ọ bụ onye na-agụ akaụntụ) maka ọrụ ọ bụla." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha azụmahịa ha ma ọ bụ nweta akwụkwọ ikike n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe debere akwụkwọ ego opekata mpe izu anọ mgbe ihe ọmụmụ a gwụrụ",
      "Ndị na-amụ ihe mepere akaụntụ ụlọ akụ ma ọ bụ mobile money azụmahịa, nweta nkwekọrịta ma ọ bụ banye na mmemme enyemaka n'ime ọnwa isii"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa ụlọ cyber café nwere ịntanetị",
      "Akwụkwọ ndetu maka ndepụta, akwụkwọ ego na kalenda",
      "Ezi adreesị weebụsaịtị nke ọfịs ndebanye aha gị, ọfịs ụtụ isi na gọọmentị ime obodo",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunye otu izu omume akwụkwọ ego"
    ],
    facilitatorNotes: [
      "Tupu ihe ọmụmụ a, chọọ ọfịs ndebanye aha, ọfịs ụtụ isi na ọfịs akwụkwọ ikike obodo maka mba na obodo gị na saịtị gọọmentị ha, ma bipụta adreesị ha.",
      "Anakọtala nọmba ID, okwuntughe ma ọ bụ nọmba ụtụ isi ndị na-amụ ihe mgbe ọ bụla; ndepụta na-ekwu ihe a chọrọ, ọ bụghị nọmba ndị ahụ n'onwe ha.",
      "Kpọọ onye si n'ọfịs ndebanye aha, ebe enyemaka azụmahịa (dịka ọmụmaatụ SMEDAN na Nigeria) ma ọ bụ onye na-agụ akaụntụ nọ nso ka ọ zaa ajụjụ.",
      "Ekwula ụgwọ ma ọ bụ ụbọchị njedebe site n'ihe i chetara; gosi ndị na-amụ ihe otu esi elele ha na saịtị gọọmentị.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
