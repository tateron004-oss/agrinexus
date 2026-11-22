"use strict";

// Koach Learn course (Igbo translation of athletes/athletes-ai-scouting-recruiting.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-scouting-recruiting-ig",
  lang: "ig",
  translationOf: "athletes-ai-scouting-recruiting",
  category: "Athletes",
  name: "AI maka Nchọpụta na Mkpọbata Ndị Egwuregwu",
  skills: "Ime ndepụta ụlọ akwụkwọ ị na-achọ na spreadsheet, Ime profaịlụ mkpọbata na vidiyo kacha mma, Iji AI dee email nke onwe gị nye ndị nkuzi egwuregwu kọleji, Ịmara ebe a na-elele iwu ikike na iwu mkpọbata, Ịhazi ndetu nchọpụta n'ụzọ ziri ezi (maka ndị nkuzi)",
  outcome: "ịgbaso atụmatụ mkpọbata a haziri nke ọma: ndepụta ụlọ akwụkwọ 15 na spreadsheet, profaịlụ mkpọbata nwere otu peeji, vidiyo kacha mma dị nkeji abụọ ruo anọ, na email nke onwe gị nye ndị nkuzi kọleji atọ ị ji AI dee, ma na-elele iwu ikike na iwu mkpọbata gọọmentị nke egwuregwu gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị (high school) na junior college na-achọ igwu egwu na kọleji, ndị nne na nna ha, na ndị nkuzi egwuregwu na-enyere ha aka. Obere akụkụ na-enyekwa ndị nkuzi aka ịhazi ndetu nchọpụta n'ụzọ ziri ezi.",
    "Mkpọbata bụ usoro ị nwere ike ijikwa dị ka ọrụ (project). Ị ga-enyocha ụlọ akwụkwọ, gosi ikike gị na agwa gị nke ọma, kpọtụrụ ndị nkuzi n'ụzọ nwere nkwanye ugwu, ma debe ihe niile n'otu ebe. Ị ga-eji AI chekwaa oge, mana ọ bụghị mgbe ọ bụla iji gbagọọ eziokwu.",
    "Iwu mkpọbata na iwu ikike dabere n'egwuregwu gị na ọkwa (division) gị (NCAA Division I, II, III, NAIA, junior college), ha na-agbanwekwa ọtụtụ oge. Ihe ọmụmụ a na-egosi gị ebe ị ga-elele; kwado ya mgbe niile n'aka onye nkuzi egwuregwu gị n'ụlọ akwụkwọ, onye ndụmọdụ (counselor) gị, na weebụsaịtị gọọmentị."
  ],
  finalTask: "Mee atụmatụ mkpọbata gị: spreadsheet nwere ụlọ akwụkwọ 15 ị na-achọ (reach, target na likely), profaịlụ mkpọbata nwere otu peeji, vidiyo kacha mma dị nkeji abụọ ruo anọ nke ihe nkiri gị kacha mma bu ụzọ, na email nke onwe gị nye ndị nkuzi atọ ị ji AI dee ma dezie n'onwe gị. Tinye ndetu na-ekwu akaụntụ ikike ị chọrọ na ebe i lelere iwu mkpọbata nke egwuregwu gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu nọ n'ụlọ akwụkwọ sekọndrị na junior college na-achọ igwu egwu na kọleji, ndị nne na nna ha, na ndị nkuzi egwuregwu na-enyere ha aka ma ọ bụ na-achọpụta ndị egwuregwu ọhụrụ.",
    startingPoint: "Ha na-egwu egwu asọmpi, ha nwekwara ike inwe vidiyo egwuregwu, ọnụ ọgụgụ (stats) na onye nkuzi klọb ma ọ bụ ụlọ akwụkwọ. Ọtụtụ amaghị akaụntụ ikike ha chọrọ, ha na-adabere n'AI ma ọ bụ n'akụkọ ochie maka iwu mkpọbata, ha na-ezipu email otu ụdị nye mmadụ niile, ha anaghịkwa edebe ndekọ ndị ha kpọtụrụ.",
    gap: "Ịhapụ nzọụkwụ ikike, ịchụ ụlọ akwụkwọ na-adabaghị, ma ọ bụ iziga ozi otu ụdị nwere ike ime ka onye egwuregwu tụfuo ohere n'otu kọleji ma ọ bụ enyemaka ego, ụlọ ọrụ na-ana ego nwekwara ike iwere ego site na nkwa ụgha. Atụmatụ a haziri nke ọma, nke e lelere iwu ya, nwere ihe eziokwu na email nke onwe gị, na-enye ha ezi ohere.",
    constraints: [
      "Okwu dị mfe, ihe dị ka ọkwa ịgụ akwụkwọ klas 8",
      "Ekwentị ma ọ bụ kọmputa nwere Google Sheets, ngwa enyemaka AI n'efu na ngwa edezi vidiyo",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere oge iji mee profaịlụ, vidiyo na ndepụta ụlọ akwụkwọ",
      "Iwu ikike na iwu ịkpọtụrụ ndị egwuregwu dị iche iche site n'otu ụlọ ọrụ gaa n'ọzọ, site n'egwuregwu gaa n'ọzọ na site n'ọkwa gaa n'ọzọ, ha na-agbanwekwa ọtụtụ oge; lelee ncaa.org, saịtị NAIA na onye ndụmọdụ ụlọ akwụkwọ",
      "Ọtụtụ ndị egwuregwu a na-achọ bụ ụmụaka (minors): enweghị adreesị ụlọ ma ọ bụ ozi nzuzo na profaịlụ ma ọ bụ n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị. \"Nnyocha Vidiyo na Ọgụgụ Isi n'Egwuregwu\" na \"SEO na Iwu Weebụsaịtị Gị site n'AI\" bụ ihe ọmụmụ ndị ọzọ bara uru."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị maara ọkwa kọleji ị na-achọ", action: "ịmata akaụntụ ikike ị chọrọ na ebe ị ga-elele iwu ịkpọtụrụ ndị egwuregwu nke egwuregwu gị", standard: "site n'iji weebụsaịtị gọọmentị na onye ndụmọdụ gị, ọ bụghị AI ma ọ bụ akụkọ ochie, maka iwu na ụbọchị" },
    { id: "O2", condition: "Site n'iji Google Sheets na ngwa enyemaka AI", action: "ime ndepụta ụlọ akwụkwọ 15 e dere reach, target ma ọ bụ likely", standard: "ebe e lelere ụlọ akwụkwọ ọ bụla, aha onye nkuzi na ozi otu (roster) na peeji gọọmentị ụlọ akwụkwọ ahụ" },
    { id: "O3", condition: "Site n'iji ezi stats gị, akara ule gị na ihe nkiri gị", action: "ime profaịlụ mkpọbata nwere otu peeji na vidiyo kacha mma dị nkeji abụọ ruo anọ", standard: "ebe stat ọ bụla bụ eziokwu, ihe nkiri kacha mma dị na sekọnd 30 mbụ, e gosiri gị tupu ihe nkiri ọ bụla, enweghị adreesị ụlọ, ma onye nkuzi lelere ya" },
    { id: "O4", condition: "Site n'iji profaịlụ gị na ihe AI dere mbụ", action: "ide email mmeghe nke onwe gị nye ndị nkuzi kọleji atọ", standard: "nke ọ bụla erughị okwu 150, nwere isiokwu doro anya na otu ezi ihe kpọmkwem mere i ji chọọ ụlọ akwụkwọ ahụ, nke gị onwe gị zipụrụ site na email nwere nkwanye ugwu" },
    { id: "O5", condition: "Site n'iji ndepụta ụlọ akwụkwọ gị", action: "idebe ndekọ ịkpọtụrụ ọ bụla, azịza ọ bụla na nzọụkwụ ọzọ ọ bụla na ụbọchị ha", standard: "nke a na-emelite kwa izu, ebe ị jụrụ onye nkuzi ma ọ bụ onye ndụmọdụ gị tupu iji ụlọ ọrụ mkpọbata na-ana ego" },
    { id: "O6", condition: "Dị ka onye nkuzi na-achọpụta ndị egwuregwu", action: "ịhazi ndetu nchọpụta site n'iji otu ihe ntụle na ọkwa 1 ruo 5 a kọwara nke ọma maka onye egwuregwu ọ bụla", standard: "ebe akara sitere n'ihe ị hụrụ, e ji AI naanị chịkọta ndetu, e chebere ozi nzuzo ma lelee ajọ mbunobi (bias)" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwado maka mkpọbata",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iwu bu ụzọ: ihe ndabere nke ikike na mkpọbata",
          minutes: 5,
          goal: "Chọta akaụntụ ikike na iwu mkpọbata metụtara gị.",
          text: [
            "Egwuregwu kọleji nwere ụlọ ọrụ dị iche iche: NCAA Division I, II na III, NAIA, na junior college. Nke ọ bụla nwere iwu nke ya gbasara agụmakwụkwọ na ikike.",
            "Ọ bụrụ na ị chọrọ igwu egwu na NCAA Division I ma ọ bụ II, ị ga-achọ akaụntụ na NCAA Eligibility Center, nke na-elele agụmakwụkwọ gị na ọnọdụ gị dị ka onye egwuregwu na-anaghị akwụ ụgwọ (amateur). Saịtị Eligibility Center na-akọwa Profile Page maka ụmụ akwụkwọ ka nta na Division III, na akaụntụ asambodo (certification) maka Division I na II. NAIA nwere ebe ikike nke ya; lelee saịtị gọọmentị ya.",
            "Mgbe ndị nkuzi kọleji nwere ike ịkpọtụrụ gị, na otu ha ga-esi mee ya, dabere n'egwuregwu gị na ọkwa gị, ọ na-agbanwekwa ọtụtụ oge. Adaberela n'AI ma ọ bụ akụkọ ochie maka ụbọchị; lelee ncaa.org, jụọ onye nkuzi egwuregwu gị n'ụlọ akwụkwọ na onye ndụmọdụ gị, ma debe akara ule gị na isi ọmụmụ (core courses) gị n'usoro."
          ],
          steps: ["Kpebie ọkwa ndị ị na-achọ.", "Gaa na NCAA Eligibility Center ma gụọ akaụntụ dabara gị.", "Lelee saịtị ikike NAIA ma ọ bụrụ na ọ metụtara gị.", "Jụọ onye ndụmọdụ gị maka isi ọmụmụ na akara ule.", "Lelee iwu ịkpọtụrụ ndị egwuregwu nke egwuregwu gị na ncaa.org."],
          words: [["Ikike (eligibility)", "igbo iwu agụmakwụkwọ na iwu ndị ọzọ a chọrọ iji gwuo egwuregwu kọleji."], ["NCAA Eligibility Center", "ọfịs NCAA ebe ndị egwuregwu kọleji n'ọdịnihu na-edebanye aha ka e lelee agụmakwụkwọ ha na ọnọdụ amateur ha."], ["Division", "ọkwa egwuregwu kọleji, dị ka NCAA Division I, II ma ọ bụ III."]],
          slides: [
            { title: "Ọkwa egwuregwu kọleji", bullets: ["NCAA Division I, II, III", "NAIA", "Junior college"] },
            { title: "Akaụntụ ikike", bullets: ["NCAA DI na DII: akaụntụ asambodo (certification)", "Ụmụ akwụkwọ ka nta na DIII: Profile Page", "NAIA: ebe ikike nke ya"] },
            { title: "Iwu ịkpọtụrụ na-agbanwe", bullets: ["Dabere n'egwuregwu na ọkwa", "Lelee ncaa.org, ọ bụghị AI", "Jụọ onye nkuzi gị na onye ndụmọdụ gị"] }
          ],
          sources: [
            { name: "NCAA Eligibility Center", url: "https://web3.ncaa.org/ecwr3/" },
            { name: "NCAA: Name, Image and Likeness (iwu maka ndị a na-akpọbata na ndị egwuregwu)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Gaa na saịtị NCAA Eligibility Center ma dee ụdị akaụntụ dabara gị. Wee dee otu ajụjụ gbasara iwu mkpọbata nke egwuregwu gị ị ga-ajụ onye nkuzi egwuregwu gị n'ụlọ akwụkwọ ma ọ bụ onye ndụmọdụ gị.",
          youCanNow: "ịchọta akaụntụ ikike na iwu gọọmentị metụtara gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụlọ ọrụ nwere ebe ikike nke ya, nke dị iche na NCAA?", options: ["NAIA", "Ụlọ akwụkwọ sekọndrị gị", "Otu klọb gị", "Akwụkwọ akụkọ obodo"], answer: 0, why: "NAIA nwere ebe ikike nke ya; lelee saịtị gọọmentị ya." },
            { objective: "O1", q: "AI gwara gị ụbọchị ndị nkuzi kọleji nwere ike ibu ụzọ kpọọ gị. Gịnị ka ị ga-eme?", options: ["Kwere ya", "Tinye ya n'ịntanetị maka ndị otu gị", "Lelee ncaa.org ma jụọ onye nkuzi gị ma ọ bụ onye ndụmọdụ gị", "Chere ka onye nkuzi kpọọ gị"], answer: 2, why: "Iwu ịkpọtụrụ na-agbanwe ọtụtụ oge; lelee isi iyi gọọmentị, ọ bụghị AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime ndepụta ụlọ akwụkwọ ị na-achọ",
          minutes: 6,
          goal: "Mee spreadsheet nwere ụlọ akwụkwọ 15 dabara gị n'egwuregwu, n'agụmakwụkwọ na na ndụ gị.",
          text: [
            "Ụlọ akwụkwọ kwesịrị ekwesị bụ ebe ị nwere ike igwu egwu, mụọ ihe ị chọrọ, kwụọ ụgwọ ya, ma nwee obi ụtọ ọ bụrụ na egwuregwu kwụsịrị. Chọọ ngwakọta: ụlọ akwụkwọ reach (nke siri ike iru), ụlọ akwụkwọ target (nke dabara gị nke ọma) na ụlọ akwụkwọ likely (ebe ọ doro anya na ị ga-enye aka).",
            "Mee Google Sheet nwere kọlụm ndị a: Ụlọ akwụkwọ, Division, Ebe ọ dị, Isiokwu ọmụmụ (major) ị chọrọ, Mkpa otu n'ọnọdụ egwuregwu gị, Ndabara agụmakwụkwọ, Ndetu ụgwọ, Aha na email onye nkuzi, Ọnọdụ. Nweta aha ndị nkuzi na ozi otu (roster) site na weebụsaịtị egwuregwu gọọmentị nke ụlọ akwụkwọ ọ bụla.",
            "Ngwa enyemaka AI nwere ike ịtụ aro ụlọ akwụkwọ ị ga-enyocha: \"Abụ m onye egwuregwu bọọlụ (soccer) n'etiti (midfielder), ogologo m bụ 5'9\", GPA m bụ 3.5, achọrọ m ịmụ nọọsụ n'ebe ndịda ọwụwa anyanwụ US (Southeast). Tụọ aro kọleji 20 nwere egwuregwu bọọlụ n'ọkwa dị iche iche ka m nyochaa.\" Wee lelee nke ọ bụla n'onwe gị; ndepụta AI nwere ike ịbụ nke ochie ma ọ bụ nke ezighi ezi."
          ],
          steps: ["Mee spreadsheet ahụ nwere kọlụm ndị dị n'elu.", "Jụọ AI maka ụlọ akwụkwọ ị ga-enyocha.", "Lelee peeji egwuregwu na agụmakwụkwọ gọọmentị nke ụlọ akwụkwọ ọ bụla.", "Dee nke ọ bụla reach, target ma ọ bụ likely.", "Debe 15 dabara gị n'ezie."],
          words: [["Ndepụta ụlọ akwụkwọ (target list)", "ụlọ akwụkwọ ndị ị chọrọ ịkpọtụrụ."], ["Roster", "ndepụta ndị egwuregwu nọ n'otu; ọ na-egosi ndị na-agụsị akwụkwọ n'ọnọdụ egwuregwu gị."]],
          slides: [
            { title: "Ụlọ akwụkwọ kwesịrị ekwesị", bullets: ["Ị nwere ike igwu egwu?", "Ị nwere ike ịmụ ihe ị chọrọ?", "Ị nwere ike ịkwụ ụgwọ ya? Obi ụtọ na-enweghị egwuregwu?"] },
            { title: "Kọlụm spreadsheet", bullets: ["Ụlọ akwụkwọ, Division, Ebe ọ dị, Major", "Mkpa otu, Ndabara agụmakwụkwọ, Ndetu ụgwọ", "Ozi onye nkuzi, Ọnọdụ"] },
            { title: "AI na-atụ aro, gị na-elele", bullets: ["Jụọ maka ụlọ akwụkwọ ị ga-enyocha", "Lelee peeji gọọmentị", "Reach, target, likely"] }
          ],
          tryIt: "Mee spreadsheet ndepụta ụlọ akwụkwọ gị. Jiri AI nweta echiche, lelee ụlọ akwụkwọ iri na saịtị gọọmentị ha, ma dee nke ọ bụla reach, target ma ọ bụ likely.",
          youCanNow: "ime na ilele ndepụta ụlọ akwụkwọ nwere ngwakọta kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ụlọ akwụkwọ \"likely\" na ndepụta gị?", options: ["Nke siri ike iru nke ukwuu", "Ụlọ akwụkwọ ebe ọ doro anya na ị ga-enye aka", "Ụlọ akwụkwọ na-enweghị otu n'egwuregwu gị", "Naanị ụlọ akwụkwọ nrọ gị"], answer: 1, why: "Ụlọ akwụkwọ likely bụ ebe ọ doro anya na ị ga-enye aka." },
            { objective: "O2", q: "AI depụtara ụlọ akwụkwọ ị nụbeghị aha ya. Gịnị ka ị ga-eme?", options: ["Tinye ya n'eleleghị ya", "Hichapụ ndepụta ahụ niile", "Zipu onye nkuzi email ozugbo", "Bu ụzọ lelee peeji egwuregwu na agụmakwụkwọ gọọmentị ya"], answer: 3, why: "Ndepụta AI nwere ike ịbụ nke ochie ma ọ bụ nke ezighi ezi, ya mere lelee ụlọ akwụkwọ ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Profaịlụ mkpọbata gị na vidiyo kacha mma gị",
          minutes: 6,
          goal: "Mee profaịlụ mkpọbata nwere otu peeji ma hazie vidiyo kacha mma dị nkeji abụọ ruo anọ.",
          text: [
            "Profaịlụ mkpọbata bụ otu peeji: aha, afọ ị ga-agụsị akwụkwọ, ọnọdụ egwuregwu, ogologo na ibu (nke eziokwu), ụlọ akwụkwọ sekọndrị na otu klọb, stats kacha mkpa, ozi agụmakwụkwọ (GPA, akara ule ma ọ bụrụ na i nwere ha, major ị chọrọ), onyinye nturu ugo, ozi ịkpọtụrụ ndị nkuzi gị, njikọ vidiyo gị, na email gị.",
            "Vidiyo kacha mma (highlight video) kwesịrị ịdị mkpụmkpụ, ọtụtụ mgbe nkeji abụọ ruo anọ, ihe nkiri gị kacha mma dịkwa na sekọnd 30 mbụ. Gosi onwe gị tupu ihe nkiri ọ bụla site n'akara ụta ma ọ bụ okirikiri. Tinye njikọ egwuregwu zuru ezu ma ọ bụrụ na ndị nkuzi n'egwuregwu gị na-achọ ịhụ ya. Jụọ onye nkuzi gị ihe ndị nkuzi n'egwuregwu gị na-atụ anya ya.",
            "AI nwere ike inyere gị aka ide profaịlụ ahụ site na ndetu gị ma hazie ndepụta ihe nkiri gị. Stat ọ bụla ga-abụrịrị eziokwu, nke a pụrụ ịkwado; ndị nkuzi kọleji na-ajụ ndị nkuzi gị. Wepụ ozi nzuzo dị ka adreesị ụlọ na profaịlụ ahụ."
          ],
          steps: ["Chịkọta ezi stats gị, akara ule gị na onyinye nturu ugo gị.", "Jụọ AI ka ọ hazie profaịlụ nwere otu peeji.", "Họrọ ihe nkiri gị kacha mma ma tinye ndị kacha mma n'ihu.", "Gosi onwe gị tupu ihe nkiri ọ bụla.", "Jụọ onye nkuzi gị ka o lelee ha abụọ."],
          words: [["Profaịlụ mkpọbata", "nchịkọta otu peeji banyere gị dị ka onye egwuregwu na nwa akwụkwọ maka ndị nkuzi kọleji."], ["Vidiyo kacha mma (highlight video)", "vidiyo mkpụmkpụ nke ihe ọma kacha mma i mere n'egwuregwu."]],
          slides: [
            { title: "Profaịlụ otu peeji", bullets: ["Afọ ngụsị akwụkwọ, ọnọdụ, ezi ogologo na ibu", "Stats, GPA, major ị chọrọ", "Ozi ndị nkuzi, njikọ vidiyo, email gị"] },
            { title: "Vidiyo kacha mma", bullets: ["Ọtụtụ mgbe nkeji 2-4", "Ihe nkiri kacha mma na sekọnd 30 mbụ", "Gosi onwe gị tupu ihe nkiri ọ bụla"] },
            { title: "Eziokwu na nchekwa", bullets: ["Ndị nkuzi na-elele stats", "Enweghị adreesị ụlọ", "Onye nkuzi na-elele ya"] }
          ],
          tryIt: "Jiri AI gbanwee ndetu gị ka ọ bụrụ profaịlụ otu peeji. Dee ndepụta ihe nkiri gị, ise kacha mma bu ụzọ, ma jụọ onye nkuzi gị ka o lelee ha abụọ.",
          youCanNow: "ime profaịlụ mkpọbata nke eziokwu na atụmatụ vidiyo kacha mma siri ike.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị ga-eji gosi onwe gị tupu ihe nkiri ọ bụla?", options: ["Ka ndị nkuzi mara onye egwuregwu ị bụ", "Ime ka vidiyo ahụ dị ogologo", "Izochi nọmba gị", "N'ihi na egwu na-achọ ya"], answer: 0, why: "Akara ụta ma ọ bụ okirikiri na-enyere ndị nkuzi aka ịhụ gị ozugbo." },
            { objective: "O3", q: "Oge ọsọ yaadị 40 i dere na profaịlụ gị dị ngwa karịa nke ị gbabeghị mgbe ọ bụla. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ndị nkuzi agaghị elele ya", "Wepụ stat ahụ kpamkpam", "Gbanwee ya ka ọ bụrụ ezi oge gị a pụrụ ịkwado", "Belata ya ntakịrị ọzọ"], answer: 2, why: "Stat ọ bụla ga-abụrịrị eziokwu; ndị nkuzi kọleji na-ajụ ndị nkuzi gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwado maka mkpọbata",
        questions: [
          { objective: "O1", q: "Ị chọrọ igwu egwu na NCAA Division I. Ebee ka ị ga-edebanye aha maka ikike?", options: ["Ngwa soshal midia", "Ebe mgbatị ahụ gị", "NCAA Eligibility Center", "Ọ dịghị ebe"], answer: 2, why: "Ndị egwuregwu DI na DII chọrọ akaụntụ asambodo na Eligibility Center." },
          { objective: "O1", q: "Ebee ka ị ga-elele mgbe ndị nkuzi nwere ike ịkpọtụrụ gị?", options: ["ncaa.org na onye nkuzi egwuregwu gị n'ụlọ akwụkwọ ma ọ bụ onye ndụmọdụ gị", "Naanị chatbot AI", "Akụkọ e dere afọ 5 gara aga", "Onye mmegide gị"], answer: 0, why: "Iwu dabere n'egwuregwu na ọkwa, ha na-agbanwekwa ọtụtụ oge." },
          { objective: "O2", q: "Ndepụta ụlọ akwụkwọ nwere ngwakọta kwesịrị ekwesị gụnyere:", options: ["Naanị mmemme 5 kacha elu", "Naanị otu ụlọ akwụkwọ", "Ụlọ akwụkwọ ị leleghị", "Ụlọ akwụkwọ reach, target na likely"], answer: 3, why: "Ngwakọta na-enye gị ezi nhọrọ." },
          { objective: "O2", q: "AI tụrụ aro ụlọ akwụkwọ e wepụrụ mmemme egwuregwu ya. Gịnị mere?", options: ["Ọ dịghị ihe", "Ndepụta AI nwere ike ịbụ nke ochie; lelee na peeji gọọmentị", "Ụlọ akwụkwọ ahụ na-ezo ya", "Ị ka kwesịrị itinye akwụkwọ"], answer: 1, why: "Lelee saịtị gọọmentị mgbe niile." },
          { objective: "O3", q: "Ebee ka ihe nkiri gị kacha mma kwesịrị ịdị na vidiyo kacha mma?", options: ["N'ọgwụgwụ ya", "Na sekọnd 30 mbụ", "N'etiti", "Ezoro ezo"], answer: 1, why: "Ndị nkuzi na-ekpebi ngwa ngwa." }
        ]
      }
    },
    {
      name: "Isi 2: Ịkpọtụrụ ndị nkuzi na ịnọ n'usoro",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI dee email nke onwe gị nye ndị nkuzi",
          minutes: 6,
          goal: "Dee email mmeghe mkpụmkpụ nke onwe gị nye onye nkuzi kọleji.",
          text: [
            "Ndị nkuzi na-enweta ọtụtụ email. Nke dị mkpụmkpụ ma bụrụ nke onwe gị na-emeri. Tinye: isiokwu nwere afọ ngụsị akwụkwọ, ọnọdụ egwuregwu na ozi kacha mkpa (\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\"); ihe kpọmkwem mere i ji chọọ ụlọ akwụkwọ ha; stats gị kacha mkpa na agụmakwụkwọ gị; njikọ vidiyo gị na profaịlụ gị; usoro egwuregwu gị na-abịa (asọmpi, showcase); na ozi ịkpọtụrụ onye nkuzi gị.",
            "Jụọ ngwa enyemaka AI: \"Dee email mkpụmkpụ nye onye isi nkuzi bọọlụ (soccer) na [ụlọ akwụkwọ]. Jiri profaịlụ m dị n'okpuru. Kwuo na m nwere mmasị na mmemme nọọsụ ha na ụdị egwuregwu ha nke na-ejide bọọlụ (possession). Erughị okwu 150.\" Wee mee ka ọ bụrụ nke gị ma lelee ozi ọ bụla.",
            "Zipu ya site n'email nwere nkwanye ugwu nke ị na-elele kwa ụbọchị. Ezipụla otu email ahụ nye ụlọ akwụkwọ niile; ndị nkuzi na-amata. Zipu ya n'onwe gị, ọ bụghị ndị nne na nna gị, ma soro ya n'ụzọ nwere nkwanye ugwu mgbe izu abụọ gachara site n'ozi ọhụrụ, dị ka vidiyo ọhụrụ."
          ],
          steps: ["Dee isiokwu doro anya.", "Jụọ AI ka o dee ihe mbụ erughị okwu 150 site na profaịlụ gị.", "Tinye otu ezi ihe kpọmkwem mere i ji chọọ ụlọ akwụkwọ ahụ.", "Lelee ozi ọ bụla na aha onye nkuzi ahụ.", "Zipu site n'email gị nwere nkwanye ugwu; soro ya site n'ozi ọhụrụ."],
          words: [["Isiokwu (subject line)", "aha mkpụmkpụ nke email; ihe mbụ onye nkuzi na-ahụ."], ["Showcase", "mmemme ebe ndị egwuregwu na-egwu egwu n'ihu ndị nkuzi kọleji."]],
          slides: [
            { title: "Mkpụmkpụ ma bụrụ nke onwe gị", bullets: ["Isiokwu: afọ ngụsị akwụkwọ, ọnọdụ, ozi mkpa", "Ihe kpọmkwem mere ụlọ akwụkwọ a", "Stats, agụmakwụkwọ, njikọ vidiyo"] },
            { title: "AI na-ede mbụ, gị na-eme ka ọ bụrụ nke gị", bullets: ["Erughị okwu 150", "Otu ezi ihe mere ụlọ akwụkwọ ahụ", "Lelee aha onye nkuzi"] },
            { title: "Zipu ya nke ọma", bullets: ["Email nwere nkwanye ugwu, nke ị na-elele kwa ụbọchị", "Gị na-ezipu ya, ọ bụghị ndị nne na nna gị", "Soro ya site n'ozi ọhụrụ"] }
          ],
          tryIt: "Jiri enyemaka AI dee email nye ndị nkuzi atọ nọ na ndepụta gị. Mee ka nke ọ bụla bụrụ nke onwe gị, ma mee ka onye nkuzi gị ma ọ bụ nne ma ọ bụ nna gị gụọ otu tupu i zipu ya.",
          youCanNow: "ide email mkpụmkpụ nke onwe gị nye onye nkuzi kọleji.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka isiokwu email nye onye nkuzi kwesịrị inwe?", options: ["\"Ndewo onye nkuzi\"", "Afọ ngụsị akwụkwọ, ọnọdụ egwuregwu na ozi kacha mkpa", "Aha ndị nne na nna gị", "\"Biko gụọ\""], answer: 1, why: "Isiokwu doro anya nwere afọ ngụsị akwụkwọ, ọnọdụ na ozi mkpa na-adọta anya." },
            { objective: "O4", q: "Izu abụọ gachara i zipụrụ email gị, ọ dịghị azịza. Gịnị ka ị ga-eme?", options: ["Zipu otu email ahụ ọzọ", "Mee ka nne ma ọ bụ nna gị kpọọ onye nkuzi", "Hapụ ụlọ akwụkwọ ahụ", "Soro ya n'ụzọ nwere nkwanye ugwu site n'ozi ọhụrụ, dị ka vidiyo ọhụrụ"], answer: 3, why: "Soro ya n'ụzọ nwere nkwanye ugwu mgbe izu abụọ gachara site n'ihe ọhụrụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Idebe ndekọ mkpọbata gị dị ka ọrụ (project)",
          minutes: 5,
          goal: "Debe ndekọ ịkpọtụrụ ọ bụla na nzọụkwụ ọzọ ọ bụla na spreadsheet mkpọbata gị.",
          text: [
            "Tinye kọlụm ndekọ na ndepụta ụlọ akwụkwọ gị: Ụbọchị a kpọtụrụ, Azịza (ee/mba), Ihe ha kwuru, Nzọụkwụ ọzọ, Ụbọchị nzọụkwụ ọzọ. Melite ya kwa izu.",
            "Lee anya maka ihe ịrịba ama nke ezi mmasị: azịza nke onwe gị, ajụjụ gbasara akara ule gị, ọkpụkpọ òkù ka ị bịa n'ụlọ ọzụzụ (camp) ma ọ bụ nleta, ma ọ bụ onye nkuzi na-ele gị ka ị na-egwu egwu. Mgbasa ozi camp e zigaara mmadụ niile abụghị otu ihe na mmasị n'ebe ị nọ.",
            "Mkpọbata nwere ike ịkpata nchekasị. Debe ụlọ akwụkwọ na ọzụzụ n'ihu. Kpachara anya maka \"recruiting services\" (ụlọ ọrụ mkpọbata) na-ekwe nkwa sikọlashịp ma ọ bụrụ na ị kwụọ ụgwọ; jụọ onye nkuzi egwuregwu gị n'ụlọ akwụkwọ na onye ndụmọdụ gị tupu ị kwụọ onye ọ bụla ụgwọ."
          ],
          steps: ["Tinye kọlụm ndekọ na spreadsheet gị.", "Dee email ọ bụla, azịza ọ bụla na oku ọ bụla.", "Dee nzọụkwụ ọzọ na ụbọchị ya.", "Melite ya kwa izu.", "Jụọ onye nkuzi gị tupu iji ụlọ ọrụ mkpọbata ọ bụla na-ana ego."],
          words: [["Nsochi (follow-up)", "ozi ọzọ nwere nkwanye ugwu nke nwere ozi ọhụrụ."], ["Ụlọ ọrụ mkpọbata (recruiting service)", "ụlọ ọrụ na-ana ego iji kpọsaa gị nye kọleji."]],
          slides: [
            { title: "Dee ihe niile", bullets: ["Ụbọchị a kpọtụrụ, azịza, ihe ha kwuru", "Nzọụkwụ ọzọ na ụbọchị ya", "Melite kwa izu"] },
            { title: "Ezi mmasị", bullets: ["Azịza nke onwe gị", "Ajụjụ gbasara akara ule", "Òkù camp ma ọ bụ nleta"] },
            { title: "Nọgide n'usoro", bullets: ["Ụlọ akwụkwọ na ọzụzụ bu ụzọ", "Akwụla ụgwọ maka nkwa sikọlashịp", "Bu ụzọ jụọ onye nkuzi gị"] }
          ],
          tryIt: "Tinye kọlụm ndekọ na spreadsheet gị ma dee email atọ gị, ya na nzọụkwụ ọzọ na ụbọchị maka nke ọ bụla.",
          youCanNow: "idebe ndekọ ịkpọtụrụ mkpọbata na nzọụkwụ ọzọ dị ka ọrụ (project).",
          quickCheck: [
            { objective: "O5", q: "Kedu kọlụm ndekọ na-enyere gị aka icheta ihe ị ga-eme?", options: ["Nzọụkwụ ọzọ na ụbọchị nzọụkwụ ọzọ", "Agba kacha amasị gị", "Akara otu (mascot)", "Ndekọ mmeri otu"], answer: 0, why: "Nzọụkwụ ọzọ na ụbọchị ya na-eme ka mkpọbata gị na-aga n'ihu." },
            { objective: "O5", q: "Ị natara mgbasa ozi camp e zigaara mmadụ niile site na kọleji. Gịnị ka ọ pụtara?", options: ["I nwetala sikọlashịp", "Ọ bụghị otu ihe na mmasị n'ebe ị nọ", "Ị ga-agarịrị", "Onye nkuzi ahụ ahụla vidiyo gị"], answer: 1, why: "Azịza na ajụjụ nke onwe gị na-egosi ezi mmasị; mgbasa ozi nkịtị anaghị egosi ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Maka ndị nkuzi: ndetu nchọpụta ziri ezi, a haziri nke ọma",
          minutes: 5,
          goal: "Hazie ndetu nchọpụta gbasara ndị egwuregwu n'ụzọ ziri ezi ma kwụsie ike.",
          text: [
            "Ndị nkuzi na-achọpụta ma na-atụ aro ndị egwuregwu nwere ike iji otu ngwa ndị a. Mee spreadsheet nwere otu ihe ntụle maka onye egwuregwu ọ bụla: nka n'ọnọdụ egwuregwu, ike ahụ, nghọta egwuregwu, ịnabata nkuzi (coachability), agụmakwụkwọ na ndetu agwa site n'isi iyi e kwadoro.",
            "Jiri ọkwa 1 ruo 5 dị mfe nwere nkọwa e dere maka nọmba ọ bụla, ka akara pụta otu ihe n'etiti ndị niile na-atụ akara. AI nwere ike ịchịkọta ndetu i dere ka ọ bụrụ obere akụkọ, mana hụ na akara sitere n'ihe ị hụrụ, ọ bụghị ịkọ nkọ AI.",
            "Chebe ozi nzuzo ndị egwuregwu: ọtụtụ bụ ụmụaka. Debe ndetu n'ebe nzuzo a kwadoro, etinyela ozi nzuzo n'ime ngwa AI, gbasoo iwu mkpọbata nke ụlọ ọrụ gị, ma lee anya maka ajọ mbunobi, dị ka ikpe ikpe site n'ogologo naanị ma ọ bụ site n'ịma mma vidiyo kama ikike."
          ],
          steps: ["Jiri otu ihe ntụle maka onye egwuregwu ọ bụla.", "Kọwaa nọmba ọ bụla n'ọkwa 1-5.", "Dee ndetu site n'ihe ị hụrụ.", "Jiri AI chịkọta ndetu, ọ bụghị ịtụ akara.", "Debe ozi na nzuzo; lelee ajọ mbunobi."],
          words: [["Rubric", "ntụziaka akara na-akọwa ihe akara ọ bụla pụtara."], ["Ịnabata nkuzi (coachability)", "otu onye egwuregwu si ege ntị ma jiri ndụmọdụ eme ihe."]],
          slides: [
            { title: "Otu ihe ntụle maka mmadụ niile", bullets: ["Nka, ike ahụ, nghọta egwuregwu", "Ịnabata nkuzi, agụmakwụkwọ, agwa"] },
            { title: "Rubric 1-5 doro anya", bullets: ["Kọwaa nọmba ọ bụla", "Akara site n'ihe ị hụrụ", "AI na-achịkọta, ọ naghị atụ akara"] },
            { title: "Ziri ezi ma nwee nzuzo", bullets: ["Ọtụtụ ndị egwuregwu bụ ụmụaka", "Enweghị ozi nzuzo n'ime AI", "Lee anya maka ajọ mbunobi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: ndị egwuregwu, mechaa spreadsheet ụlọ akwụkwọ 15, profaịlụ, atụmatụ vidiyo kacha mma na email atọ nye ndị nkuzi, gbakwunyere ndetu na-ekwu akaụntụ ikike gị na ebe i lelere iwu. Ndị nkuzi: mee rubric 1-5 nwere nkọwa maka ihe ntụle ise.",
          youCanNow: "ịhazi ọrụ mkpọbata ma ọ bụ nchọpụta n'ụzọ doro anya, n'eziokwu na n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji dee nkọwa maka nọmba ọ bụla n'ọkwa 1 ruo 5?", options: ["Ka akara pụta otu ihe n'etiti ndị niile na-atụ akara", "Ime ka spreadsheet ahụ dị ogologo", "Ka AI wee tụọ ndị egwuregwu akara", "Ịhazi ndị egwuregwu site n'ogologo ha"], answer: 0, why: "Nọmba a kọwara na-eme ka akara kwụsie ike n'etiti ndị nkuzi." },
            { objective: "O6", q: "Onye egwuregwu dị mkpụmkpụ mana ọ na-eji uche egwu egwu ma na-emeri mgba ọ bụla. Kedu otu ị ga-esi tụọ nghọta egwuregwu ya akara?", options: ["Ala, n'ihi ogologo ya", "Gafee onye egwuregwu ahụ", "Dabere n'ihe ị hụrụ, ọ bụghị ogologo", "Dabere n'ịma mma vidiyo"], answer: 2, why: "Ikpe ikpe site n'ogologo naanị bụ ụdị ajọ mbunobi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịkpọtụrụ ndị nkuzi na ịnọ n'usoro",
        questions: [
          { objective: "O4", q: "Kedu isiokwu kacha mma maka email nye onye nkuzi?", options: ["\"Ndewo\"", "\"Biko gụọ!!!\"", "Ọ dịghị ihe e dere", "\"2027 Midfielder | 3.5 GPA | Metro FC Club Team\""], answer: 3, why: "Ọ na-enye ozi kacha mkpa n'otu ilele anya." },
          { objective: "O4", q: "Onye kwesịrị iziga email nye ndị nkuzi kọleji?", options: ["Onye egwuregwu ahụ", "Naanị ndị nne na nna", "Onye ọbịa", "Bot AI n'onwe ya"], answer: 0, why: "Ndị nkuzi chọrọ ịnụ site n'aka onye egwuregwu ahụ." },
          { objective: "O5", q: "Kedu nke bụ ihe ịrịba ama nke ezi mmasị?", options: ["Mgbasa ozi camp e zigaara mmadụ niile", "Like na soshal midia", "Azịza nke onwe gị na-ajụ maka akara ule gị", "Ọ dịghị ihe"], answer: 2, why: "Ajụjụ nke onwe gị na-egosi ezi mmasị." },
          { objective: "O5", q: "Ụlọ ọrụ na-ekwe nkwa sikọlashịp ma ọ bụrụ na ị kwụọ ụgwọ. Ị kwesịrị:", options: ["Ịkwụ ụgwọ ozugbo", "Inye okwuntughe gị", "Ịbịanye aka n'agụghị ya", "Ibu ụzọ jụọ onye nkuzi egwuregwu gị n'ụlọ akwụkwọ na onye ndụmọdụ gị"], answer: 3, why: "Ọ dịghị onye nwere ike ikwe nkwa sikọlashịp." },
          { objective: "O6", q: "Maka ndị nkuzi, e kwesịrị iji AI:", options: ["Tụọ akara ndị egwuregwu ọ hụbeghị", "Chịkọta ndetu e dere, ọ bụghị ime akara", "Chekwaa ozi nzuzo ụmụaka", "Dochie nyocha"], answer: 1, why: "Akara na-esi n'ihe onye nkuzi hụrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Nchọpụta na Mkpọbata Ndị Egwuregwu",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ụlọ ọrụ egwuregwu kọleji?", options: ["NFL", "Ụlọ ọrụ akpụkpọ ụkwụ", "NAIA", "Ngwa soshal"], answer: 2, why: "NAIA bụ otu egwuregwu kọleji." },
      { objective: "O1", q: "NCAA Eligibility Center na-elele:", options: ["Agụmakwụkwọ na ọnọdụ amateur", "Ọnụ ọgụgụ ndị na-eso gị", "Naanị ogologo gị", "Egwu na-amasị gị"], answer: 0, why: "Ọ na-akwado ikike." },
      { objective: "O1", q: "Ụmụ akwụkwọ ka nta na ndị egwuregwu DIII nwere ike ịmalite site na:", options: ["Profile Page", "Ọ dịghị ihe", "Ụlọ ọrụ na-ana ego", "Nnwale egwuregwu (tryout)"], answer: 0, why: "Eligibility Center na-akọwa Profile Page maka ha." },
      { objective: "O1", q: "Iwu ịkpọtụrụ ndị egwuregwu dabere na:", options: ["Nha akpụkpọ ụkwụ gị", "Ihu igwe", "Egwuregwu na division", "Otu kacha amasị gị"], answer: 2, why: "Iwu dị iche iche site n'egwuregwu na ọkwa." },
      { objective: "O1", q: "Onye na-enyere gị aka idebe isi ọmụmụ gị n'usoro?", options: ["Onye mmegide", "Onye ndụmọdụ ụlọ akwụkwọ gị", "Onye a ma ama n'ịntanetị (influencer)", "Ọ dịghị onye"], answer: 1, why: "Ndị ndụmọdụ maara ihe a chọrọ n'agụmakwụkwọ." },
      { objective: "O2", q: "Ụlọ akwụkwọ \"reach\" bụ:", options: ["Ihe e ji n'aka", "Nke e mechiri emechi", "Ụlọ akwụkwọ junior high", "Nke siri ike iru maka gị"], answer: 3, why: "Ụlọ akwụkwọ reach siri ike ịbanye ma ọ bụ igwu egwu na ya." },
      { objective: "O2", q: "Ebee ka ị ga-ahụ ezi email onye nkuzi?", options: ["Ịkọ nkọ", "AI", "Weebụsaịtị egwuregwu gọọmentị nke ụlọ akwụkwọ ahụ", "Peeji ndị na-akwado otu"], answer: 2, why: "Saịtị gọọmentị nwere ozi ọhụrụ." },
      { objective: "O2", q: "Gịnị mere ị ga-eji lelee roster?", options: ["Idetuo akụkọ ndụ ha", "Iziga ndị egwuregwu ozi", "Ọ baghị uru", "Ịhụ ndị na-agụsị akwụkwọ n'ọnọdụ egwuregwu gị"], answer: 3, why: "Mkpa roster na-emetụta ohere gị." },
      { objective: "O3", q: "Ogologo na ibu na profaịlụ gị kwesịrị ịbụ:", options: ["Eziokwu", "Nke e mere ka ọ karịa nke ukwuu", "Nke a na-ahapụ mgbe niile", "Nke a kọrọ nkọ"], answer: 0, why: "Ndị nkuzi na-elele ya." },
      { objective: "O3", q: "Vidiyo kacha mma na-adịkarị:", options: ["Nkeji 30", "Nkeji 2-4", "Sekọnd 5", "Awa abụọ"], answer: 1, why: "Nke dị mkpụmkpụ ma lekwasị anya na-arụ ọrụ nke ọma." },
      { objective: "O3", q: "Tupu ihe nkiri ọ bụla, ị kwesịrị:", options: ["Itinye naanị egwu dara ụda", "Igosi ìgwè mmadụ", "Igosi onwe gị site n'akara ụta ma ọ bụ okirikiri", "Ịgafe ya"], answer: 2, why: "Ndị nkuzi kwesịrị ịmara onye egwuregwu bụ gị." },
      { objective: "O3", q: "Kedu nke na-ekwesịghị ịdị na profaịlụ gị?", options: ["Adreesị ụlọ gị", "Afọ ngụsị akwụkwọ gị", "Njikọ vidiyo gị", "Ozi ịkpọtụrụ onye nkuzi gị"], answer: 0, why: "Wepụ ozi nzuzo." },
      { objective: "O4", q: "Ezigbo email nye onye nkuzi erughị ihe dị ka:", options: ["Okwu 1,000", "Okwu 5", "Enweghị oke", "Okwu 150"], answer: 3, why: "A na-agụ email dị mkpụmkpụ." },
      { objective: "O4", q: "Iziga otu email ahụ nye ụlọ akwụkwọ niile:", options: ["Kacha mma", "Ndị nkuzi na-amata; mee ka nke ọ bụla bụrụ nke onwe gị", "A chọrọ ya", "Na-enweta azịza karịa"], answer: 1, why: "Email nke onwe gị na-apụta ìhè." },
      { objective: "O4", q: "Nsochi kwesịrị inwe:", options: ["Otu email ahụ ọzọ", "Ozi ọhụrụ, dị ka vidiyo ọhụrụ", "Mkpesa", "Ọ dịghị ihe"], answer: 1, why: "Ozi ọhụrụ na-enye ha ihe mere ha ga-eji zaa." },
      { objective: "O4", q: "Showcase bụ:", options: ["Igbe onyinye nturu ugo", "Ụlọ ahịa", "Mmemme TV", "Mmemme ebe ndị egwuregwu na-egwu egwu n'ihu ndị nkuzi"], answer: 3, why: "Showcase na-enyere ndị nkuzi aka ịhụ gị." },
      { objective: "O5", q: "Ugboro ole ka ị ga-emelite spreadsheet mkpọbata gị?", options: ["Kwa izu", "Otu ugboro n'afọ", "Ọ dịghị mgbe", "Naanị mgbe ị bịanyere aka"], answer: 0, why: "Kwa izu na-eme ka nzọụkwụ ọzọ gaa n'oge." },
      { objective: "O5", q: "Gịnị bu ụzọ n'oge mkpọbata?", options: ["Soshal midia", "Ụlọ ọrụ na-ana ego", "Ụlọ akwụkwọ na ọzụzụ", "Asịrị"], answer: 2, why: "Akara ule na egwuregwu kacha mkpa." },
      { objective: "O6", q: "Rubric bụ:", options: ["Ụdị mgbatị ahụ (drill)", "Akpụkpọ ụkwụ", "Iko nturu ugo", "Ntụziaka akara na-akọwa akara ọ bụla"], answer: 3, why: "Ọ na-eme ka akara kwụsie ike." },
      { objective: "O6", q: "Ikpe ndị egwuregwu ikpe site n'ịma mma vidiyo kama ikike ha bụ:", options: ["Ziri ezi", "Ụdị ajọ mbunobi", "Ihe a chọrọ", "Omume kacha mma"], answer: 1, why: "Nchọpụta ziri ezi na-ele ikike." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 9, 11, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndetu ikike na iwu", objective: "O1", notYet: "Akpọghị aha akaụntụ ikike ọ bụla, ma ọ bụ e si n'AI ma ọ bụ akụkọ ochie were iwu.", meets: "Ọ na-akpọ aha akaụntụ ikike a chọrọ na isi iyi gọọmentị ebe e lelere iwu mkpọbata.", exceeds: "Ọ gụnyekwara nlele isi ọmụmụ na akara ule e mere ya na onye ndụmọdụ." },
      { name: "Ndepụta ụlọ akwụkwọ", objective: "O2", notYet: "Ụlọ akwụkwọ erughị 15, enweghị ngwakọta reach, target na likely, ma ọ bụ ozi a leleghị.", meets: "Ụlọ akwụkwọ 15 nwere kọlụm niile, e dere reach, target ma ọ bụ likely, e lelere na peeji gọọmentị.", exceeds: "Ọ na-edekwa mkpa roster n'ọnọdụ egwuregwu onye ahụ na ụgwọ maka ụlọ akwụkwọ ọ bụla." },
      { name: "Profaịlụ na vidiyo kacha mma", objective: "O3", notYet: "Stats na-abụghị eziokwu, ozi nzuzo, ma ọ bụ ihe nkiri kacha mma ezoro n'ọgwụgwụ vidiyo.", meets: "Profaịlụ otu peeji nke eziokwu na vidiyo nkeji 2 ruo 4 nwere ihe nkiri kacha mma bu ụzọ, e gosiri onye egwuregwu ahụ, onye nkuzi lelekwara ya.", exceeds: "Ọ na-agbakwunye njikọ egwuregwu zuru ezu ma ọ bụrụ na ndị nkuzi n'egwuregwu ahụ na-atụ anya ya, ma na-emelite profaịlụ ahụ." },
      { name: "Email nye ndị nkuzi", objective: "O4", notYet: "Otu ụdị nye mmadụ niile, ogologo, ma ọ bụ nne ma ọ bụ nna zipụrụ ya.", meets: "Email atọ nke onwe gị erughị okwu 150 nwere isiokwu doro anya na ezi ihe mere ụlọ akwụkwọ ọ bụla, nke onye egwuregwu ahụ zipụrụ.", exceeds: "Nke ọ bụla nwere usoro egwuregwu na-abịa na ozi ịkpọtụrụ onye nkuzi, e dekwara ụbọchị nsochi." },
      { name: "Ndekọ", objective: "O5", notYet: "Enweghị kọlụm ndekọ ma ọ bụ nzọụkwụ ọzọ.", meets: "E dere ịkpọtụrụ ọ bụla ya na azịza, nzọụkwụ ọzọ na ụbọchị.", exceeds: "E melitere ya kwa izu ruo otu ọnwa, e dekwara ihe ịrịba ama nke ezi mmasị." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara atụmatụ mkpọbata ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe nwere akaụntụ ikike ziri ezi e meworo (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha natara azịza nke onwe ha, òkù camp ma ọ bụ nleta site n'aka ndị nkuzi kọleji",
      "Ndị na-amụ ihe kwere nkwa isonye na mmemme kọleji, na ndị kwuru na ha zere ụlọ ọrụ na-ana ego nke kwere nkwa ihe ga-esi na ya pụta"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Akaụntụ Google n'efu maka Google Sheets",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Vidiyo egwuregwu na ngwa edezi vidiyo n'efu",
      "Akwụkwọ akara ule (transcript) gị, ezi stats gị na ozi ịkpọtụrụ ndị nkuzi gị",
      "Ihe dị ka nkeji 60 nke nkuzi, gbakwunyere oge iji mee profaịlụ na vidiyo"
    ],
    facilitatorNotes: [
      "Kpọọ onye ndụmọdụ ụlọ akwụkwọ ka ọ kọwaa isi ọmụmụ na akaụntụ ikike; enyela mkpebi ikike n'onwe gị.",
      "Mee ka ndị na-amụ ihe lelee iwu ịkpọtụrụ ndị egwuregwu na ncaa.org ma ọ bụ saịtị NAIA n'oge nnọkọ ahụ; iwu na-agbanwe ọtụtụ oge.",
      "Tinye ndị nne na nna ma ọ bụ ndị nlekọta, mana hụ na ndị egwuregwu na-ede ma na-ezipu email nke ha nye ndị nkuzi.",
      "Dọọ ezinụlọ aka na ntị maka ụlọ ọrụ na-ana ego na-ekwe nkwa sikọlashịp, ma mee ka ha jụọ onye nkuzi ma ọ bụ onye ndụmọdụ tupu ha akwụọ ụgwọ.",
      "Maka ndị nkuzi na-eji Nkuzi 6, debe ndetu ndị egwuregwu na nzuzo, jiri otu ihe ntụle maka mmadụ niile ma lelee akara maka ajọ mbunobi."
    ]
  }
};
