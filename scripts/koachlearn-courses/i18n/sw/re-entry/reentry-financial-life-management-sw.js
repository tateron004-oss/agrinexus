"use strict";

// Koach Learn course (Swahili translation of re-entry/reentry-financial-life-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-financial-life-management-sw",
  lang: "sw",
  translationOf: "reentry-financial-life-management",
  category: "Re-Entry",
  name: "Kusimamia Fedha na Maisha kwa Msaada wa AI",
  skills: "Kutengeneza bajeti rahisi ya mwezi kwa AI, Kufuatilia matumizi, Kuweka vikumbusho vya bili, Kuchagua njia salama zaidi za benki na mikopo, Kukagua ripoti yako ya mikopo bure, Kupanga malengo wiki kwa wiki",
  outcome: "kutengeneza bajeti rahisi ya mwezi kwa msaidizi wa AI ukitumia namba za makadirio, kuweka vikumbusho vya bili zako, kujua jinsi ya kupata ripoti yako ya mikopo bure, na kugeuza lengo moja la fedha au maisha kuwa hatua za kila wiki.",
  about: [
    "Kozi hii ni kwa watu wanaorudi nyumbani wanaotaka kudhibiti pesa zao na wiki yao. Kuanza upya kunaweza kumaanisha mshahara wa kwanza, bili mpya, labda madeni ya zamani, na miadi mingi kwa wakati mmoja. Mpango unafanya yote yaonekane yanawezekana.",
    "Utatumia msaidizi wa AI wa bure kama ChatGPT, Microsoft Copilot au Google Gemini kutengeneza bajeti, kupanga wiki yako na kuweka malengo, na utajifunza chaguo salama zaidi za benki na mikopo na jinsi ya kukagua ripoti yako ya mikopo bure.",
    "Kamwe huandiki namba halisi za akaunti, namba yako ya Social Security (namba ya hifadhi ya jamii ya Marekani) wala maelezo ya kesi yako kwenye AI; makadirio ya kiasi yanatosha. Kozi hii haitoi ushauri wa kifedha wala wa kisheria; kwa madeni, faini au malezi ya mtoto (child support), ongea na ofisi husika, ofisi ya msaada wa kisheria au mshauri wa mikopo asiye wa faida. Kila somo linachukua kama dakika tano. Jaribio la maarifa linafunga kila sura na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Tumia msaidizi wa AI kutengeneza bajeti rahisi ya mwezi kutoka namba za makadirio (mapato, kodi ya nyumba, simu, usafiri, chakula, bili nyingine na kiasi kidogo cha akiba). Weka kikumbusho kwenye simu kwa tarehe ya mwisho ya kila bili, andika jinsi utakavyopata ripoti yako ya mikopo bure, na ugeuze lengo moja kuwa hatua za wiki nne zijazo.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaokabiliwa na mshahara wa kwanza, bili mpya, labda madeni ya zamani na miadi mingi kwa wakati mmoja.",
    startingPoint: "Wanaweza kupiga simu, kutuma ujumbe mfupi na kushughulikia pesa taslimu. Wana uzoefu mdogo wa bajeti, akaunti za benki, ripoti za mikopo, apps za kalenda au wasaidizi wa AI. Baadhi walikuwa na matatizo ya akaunti ya benki au mikopo hapo awali.",
    gap: "Bila mpango, bili mpya, ada na miadi hurundikana haraka na zinaweza kuleta faini za kuchelewa, mikopo ghali au majukumu yaliyokosekana. Wanafunzi wanahitaji kutengeneza bajeti rahisi, kufuatilia bili, kuchagua benki salama zaidi, kukagua ripoti ya mikopo na kupanga wiki zao, ili kuanza upya kuonekane kunawezekana.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi (kama darasa la 5 hadi 6)",
      "Vifaa: simu janja, wakati mwingine kompyuta ya maktaba",
      "Muda: masomo ya kama dakika 5 yanayoingia kati ya kazi na miadi",
      "Hakuna ushauri wa kifedha wala wa kisheria: madeni, faini na malezi ya mtoto yanapelekwa kwa ofisi husika, msaada wa kisheria au mshauri wa mikopo asiye wa faida",
      "Faragha: makadirio ya kiasi tu; kamwe namba halisi za akaunti, namba za Social Security au maelezo ya kesi kwenye AI"
    ],
    prerequisites: "Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" inasaidia lakini si lazima."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukiwa na mshahara wako halisi unaoupokea na bili zako kama namba za makadirio", action: "kutengeneza bajeti ya mwezi mmoja kwa msaidizi wa AI", standard: "mahitaji yakiwa yameorodheshwa kwanza na mstari mdogo wa akiba, bila kutumia namba halisi za akaunti" },
    { id: "O2", condition: "Ukitumia kidokezo (note) na vikumbusho vya simu yako", action: "kufuatilia matumizi yako kwa wiki moja na kuweka kikumbusho kwa tarehe ya mwisho ya kila bili", standard: "kila kikumbusho kikiwa kimewekwa siku chache kabla ya tarehe ya mwisho" },
    { id: "O3", condition: "Ukipewa chaguo za benki na mikopo", action: "kuzilinganisha na kutambua zile ghali au za hatari", standard: "ukitaja jumla ya kulipa kabla ya mkopo wowote na kutambua ulaghai wa ada ya mapema" },
    { id: "O4", condition: "Ukitumia tovuti rasmi ya ripoti ya mikopo ya bure", action: "kueleza jinsi ya kupata ripoti yako ya mikopo bure na nini cha kutafuta ndani yake", standard: "ukipanga kuiomba kwenye kifaa cha binafsi na ukijua wapi pa kuripoti akaunti ambayo hukuwahi kufungua" },
    { id: "O5", condition: "Ukipewa wiki yenye shughuli nyingi na lengo moja la fedha au maisha", action: "kupanga wiki yako na kugawa lengo kuwa hatua za kila wiki kwa msaada wa AI", standard: "mgongano wowote wa ratiba ukiwa umerekebishwa na hatua nne za kila wiki zinazowezekana" }
  ],
  chapters: [
    {
      name: "Sura 1: Misingi ya pesa kwa AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kutengeneza bajeti rahisi kwa AI",
          minutes: 6,
          goal: "Tengeneza bajeti ya mwezi mmoja kutoka namba za makadirio kwa msaidizi wa AI.",
          text: [
            "Bajeti ni mpango wa pesa zako: kinachoingia, na kinakokwenda. Inakusaidia kulipa vitu muhimu kwanza na kuepuka kuishiwa kabla ya siku ya mshahara.",
            "Andika namba za makadirio, bila maelezo ya akaunti: \"Ninapokea takriban $1,800 kwa mwezi. Kodi ya nyumba ni $700, simu $40, pasi ya basi $60, chakula takriban $300. Nina malipo ya $50 kila mwezi. Nisaidie kutengeneza bajeti rahisi ya mwezi katika jedwali, yenye akiba kidogo, na uniambie kiasi kinachobaki kwa mambo mengine.\"",
            "Weka mahitaji kwanza: makazi, chakula, usafiri wa kwenda kazini, simu, na malipo ya lazima. Kisha akiba, hata $10 kwa wiki; inaongezeka na inasaidia wakati wa dharura. Kisha matakwa. Namba zisipolingana, uliza AI: \"Ninaweza kupunguza wapi?\" na uamue kinachokufaa."
          ],
          steps: ["Andika mshahara unaoupokea na bili zako kuu kama namba za makadirio.", "Iombe AI jedwali rahisi la bajeti ya mwezi.", "Weka mahitaji kwanza, kisha akiba, kisha matakwa.", "Uliza unaweza kupunguza wapi isipolingana.", "Hifadhi bajeti."],
          words: [["Bajeti", "mpango wa jinsi utakavyotumia pesa zako kila mwezi."], ["Mshahara unaoupokea (take-home pay)", "pesa unazopokea kweli baada ya kodi na makato."], ["Mahitaji na matakwa", "mahitaji ni vitu unavyolazimika kulipia; matakwa ni vitu vizuri kuwa navyo."]],
          slides: [
            { title: "Bajeti ni mpango", bullets: ["Kinachoingia", "Kinakokwenda", "Lipa vitu muhimu kwanza"] },
            { title: "Uliza AI kwa namba za makadirio", bullets: ["Mshahara unaoupokea na bili kuu", "Hakuna namba za akaunti", "\"Tengeneza jedwali rahisi la bajeti.\""] },
            { title: "Mpangilio ni muhimu", bullets: ["Mahitaji kwanza", "Kisha akiba, hata $10 kwa wiki", "Kisha matakwa"] }
          ],
          tryIt: "Andika mshahara wako halisi au wa makadirio na bili tano kama namba za makadirio. Muombe msaidizi wa AI atengeneze jedwali rahisi la bajeti ya mwezi lenye mstari mdogo wa akiba.",
          youCanNow: "kutengeneza bajeti rahisi ya mwezi kwa msaada wa AI, bila kutoa maelezo ya binafsi.",
          quickCheck: [
            { objective: "O1", q: "Mshahara unaoupokea (take-home pay) ni nini?", options: ["Mshahara wako kabla ya kodi", "Unachopokea baada ya kodi na makato", "Pesa unazokopa", "Akiba yako"], answer: 1, why: "Mshahara unaoupokea ni pesa unazopata kweli za kupangia bajeti." },
            { objective: "O1", q: "Unataka AI ikusaidie na bajeti. Ungeandika nini?", options: ["Namba ya akaunti yako ya benki", "Namba yako ya Social Security", "Makadirio kama \"kodi ya nyumba takriban $800\"", "Nywila yako ya benki mtandaoni"], answer: 2, why: "Makadirio ya kiasi yanatosha, na namba za binafsi hazipaswi kuingia kwenye AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kufuatilia matumizi na bili",
          minutes: 5,
          goal: "Fuatilia unachotumia kwa wiki moja na uweke vikumbusho vya tarehe za mwisho za bili.",
          text: [
            "Bajeti inafanya kazi tu ukijua pesa zinakokwenda kweli. Kwa wiki moja, andika kila kitu unachotumia katika kidokezo (note) kwenye simu yako: kitu na kiasi. Vitu vidogo kama vitafunio na usafiri wa teksi za apps vinaongezeka.",
            "Mwishoni mwa wiki, bandika orodha (bila namba za kadi) kwenye AI na uulize: \"Panga matumizi yangu katika makundi na ujumlishe kila moja. Pesa zangu nyingi zilikwenda wapi?\"",
            "Faini za kuchelewa zinapoteza pesa. Weka kikumbusho kwenye simu siku chache kabla ya tarehe ya mwisho ya kila bili: \"Nikumbushe kulipa bili ya simu tarehe 12 kila mwezi.\" Lipa bili kupitia app au tovuti rasmi ya kampuni tu, au ana kwa ana."
          ],
          steps: ["Andika kila ununuzi katika kidokezo cha simu kwa wiki moja.", "Iombe AI ipange na kujumlisha.", "Linganisha na bajeti yako.", "Weka kikumbusho cha kila mwezi kabla ya tarehe ya mwisho ya kila bili.", "Lipa kupitia apps rasmi, tovuti rasmi au ana kwa ana tu."],
          words: [["Kundi (category)", "matumizi yanayofanana yaliyowekwa pamoja, kama chakula au usafiri."], ["Faini ya kuchelewa", "pesa za ziada zinazotozwa bili inapolipwa baada ya tarehe yake ya mwisho."], ["Tarehe ya mwisho", "siku ya mwisho ya kulipa bili kwa wakati."]],
          slides: [
            { title: "Jua pesa zinakokwenda", bullets: ["Andika kila ununuzi kwa wiki moja", "Vitu vidogo vinaongezeka"] },
            { title: "Iache AI ipange", bullets: ["Bandika orodha, bila namba za kadi", "\"Panga na ujumlishe kwa makundi.\""] },
            { title: "Shinda faini za kuchelewa", bullets: ["Kikumbusho siku chache kabla ya kila tarehe ya mwisho", "Lipa kupitia njia rasmi tu"] }
          ],
          tryIt: "Anza kidokezo cha matumizi leo. Kisha weka kikumbusho kinachojirudia kila mwezi kwa bili moja siku chache kabla ya tarehe yake ya mwisho.",
          youCanNow: "kufuatilia matumizi yako na kuweka vikumbusho ili bili zilipwe kwa wakati.",
          quickCheck: [
            { objective: "O2", q: "Tarehe ya mwisho ni nini?", options: ["Siku ya mwisho ya kulipa bili kwa wakati", "Siku unayolipwa mshahara", "Siku bili inatumwa kwa posta", "Siku yoyote unayochagua"], answer: 0, why: "Tarehe ya mwisho ni siku ya mwisho ya kulipa bila kuchelewa." },
            { objective: "O2", q: "Bili yako ya simu inapaswa kulipwa tarehe 15 kila mwezi. Ungefanya nini?", options: ["Kulipa wakati wowote unapokumbuka", "Kusubiri taarifa ya kuchelewa", "Kuilipa mara mbili ili kuwa salama", "Kuweka kikumbusho kinachojirudia siku chache kabla ya tarehe 15"], answer: 3, why: "Kikumbusho kabla ya tarehe ya mwisho kinakusaidia kuepuka faini za kuchelewa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Njia salama zaidi za benki na mikopo",
          minutes: 5,
          goal: "Linganisha chaguo za benki na mikopo na utambue zile ghali au za hatari.",
          text: [
            "Akaunti ya benki au ya chama cha ushirika cha akiba na mikopo (credit union) kwa kawaida ni nafuu na salama zaidi kuliko kubadilisha hundi kuwa pesa kwenye duka la kubadilisha hundi (check-cashing store), linalotoza ada kila mara. Kama ulikuwa na matatizo na akaunti ya benki zamani, uliza benki na credit unions kama zina akaunti za \"nafasi ya pili\" (second chance) au za ada ndogo.",
            "Kuwa mwangalifu na pesa za haraka. Mikopo ya siku ya mshahara (payday loans), mikopo ya dhamana ya gari (title loans) na baadhi ya apps za malipo ya mapema zinaweza kugharimu zaidi sana ya unachokopa ada na riba zikiongezwa. Kabla ya kukopa, uliza: \"Jumla nitakayolipa ni kiasi gani, na lini?\" Unaweza kuiomba AI ikueleze masharti ya ofa kwa maneno rahisi, lakini si ikuamulie.",
            "Tahadhari ya ulaghai: hakuna mkopeshaji halisi anayekuomba ulipe ada mapema kwa kadi za zawadi au kwa kutuma pesa kwa wire. Kwa msaada wa madeni, tafuta mshauri wa mikopo asiye wa faida au ofisi ya msaada wa kisheria; epuka kampuni zinazoahidi kufuta deni kwa ada kubwa ya mapema."
          ],
          steps: ["Uliza benki na credit unions kuhusu akaunti za ada ndogo au za nafasi ya pili.", "Epuka kulipa ada za kubadilisha hundi kila siku ya mshahara kama unaweza.", "Kabla ya kukopa, uliza gharama ya jumla na tarehe.", "Iombe AI ieleze masharti kwa maneno rahisi.", "Kamwe usilipe ada ya mapema kwa kadi ya zawadi au wire."],
          words: [["Credit union", "benki isiyo ya faida inayomilikiwa na wanachama wake (chama cha ushirika cha akiba na mikopo)."], ["Riba", "pesa za ziada unazolipa kwa kukopa."], ["Mkopo wa siku ya mshahara (payday loan)", "mkopo mdogo wa muda mfupi ambao kwa kawaida una ada kubwa sana."]],
          slides: [
            { title: "Tumia benki, usilipe kubadilisha hundi", bullets: ["Ada za kubadilisha hundi zinaongezeka", "Uliza kuhusu akaunti za nafasi ya pili au za ada ndogo", "Credit unions zinafaa kuangaliwa"] },
            { title: "Kuwa mwangalifu na pesa za haraka", bullets: ["Payday loans na title loans zinagharimu sana", "Uliza: jumla ya kulipa ni kiasi gani, na lini?", "AI inaweza kueleza masharti; wewe unaamua"] },
            { title: "Tahadhari ya ulaghai", bullets: ["Hakuna ada ya mapema kwa kadi ya zawadi au wire", "Tumia washauri wa mikopo wasio wa faida au msaada wa kisheria"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (payment red flags)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Uliza msaidizi wa AI: \"Nieleze kwa maneno rahisi tofauti kati ya credit union, benki na duka la kubadilisha hundi, na maswali ninayopaswa kuuliza kabla ya kufungua akaunti.\" Andika maswali matatu ya kuuliza.",
          youCanNow: "kuchagua njia salama zaidi za benki na kutambua mikopo ghali au ya hatari.",
          quickCheck: [
            { objective: "O3", q: "Riba ya mkopo ni nini?", options: ["Zawadi ya bure kutoka kwa mkopeshaji", "Pesa za ziada unazolipa kwa kukopa", "Aina ya akaunti ya akiba", "Ada ya kubadilisha hundi"], answer: 1, why: "Riba ni gharama ya kukopa juu ya kiasi ulichokopa." },
            { objective: "O3", q: "Mkopeshaji anasema lazima ulipe ada kwa kadi za zawadi kabla ya kupata mkopo. Ungefanya nini?", options: ["Kuilipa haraka", "Kulipa nusu sasa", "Kuondoka; ni ulaghai", "Kuiomba AI itume kadi za zawadi"], answer: 2, why: "Ada za mapema zinazolipwa kwa kadi za zawadi ni dalili ya ulaghai." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Misingi ya pesa kwa AI",
        questions: [
          { objective: "O1", q: "Uandike nini kwenye AI ili kutengeneza bajeti?", options: ["Namba yako ya Social Security", "Namba ya akaunti yako ya benki", "Makadirio ya kiasi tu", "PIN ya kadi yako"], answer: 2, why: "Namba za makadirio zinatosha na zinakuweka salama." },
          { objective: "O1", q: "Katika bajeti, nini kinakuja kwanza?", options: ["Mahitaji kama makazi, chakula na usafiri", "Matakwa", "Zawadi", "Burudani"], answer: 0, why: "Mahitaji yanakuweka na makazi, chakula na kazi." },
          { objective: "O2", q: "Kwa nini ufuatilie matumizi kwa wiki moja?", options: ["Inatakiwa na sheria", "Kuwavutia wengine", "Kuongeza mshahara wako", "Kuona pesa zako zinakokwenda kweli"], answer: 3, why: "Kufuatilia kunaonyesha nini cha kubadilisha." },
          { objective: "O2", q: "Unawezaje kuepuka faini za kuchelewa?", options: ["Kulipa wakati wowote unapokumbuka", "Kuweka kikumbusho siku chache kabla ya kila tarehe ya mwisho", "Kupuuza bili", "Kuwalipa watu usiowajua"], answer: 1, why: "Vikumbusho vinakusaidia kulipa kwa wakati." },
          { objective: "O3", q: "Mkopeshaji anaomba ada ya mapema kwa kadi za zawadi. Hii ni:", options: ["Kawaida", "Ulaghai", "Inatakiwa na benki", "Mpango mzuri"], answer: 1, why: "Wakopeshaji halisi hawapokei ada kwa kadi za zawadi." }
        ]
      }
    },
    {
      name: "Sura 2: Kupanga maisha yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukagua ripoti yako ya mikopo bure",
          minutes: 5,
          goal: "Eleza jinsi ya kupata ripoti yako ya mikopo bure na nini cha kutafuta ndani yake.",
          text: [
            "Ripoti ya mikopo (credit report) ni kumbukumbu ya mikopo yako na bili zako. Wenye nyumba, baadhi ya waajiri na wakopeshaji wanaweza kuiangalia. Baada ya kuwa mbali, inaweza kuwa na taarifa chache, za zamani, au makosa, au hata akaunti ambazo mtu alifungua kwa jina lako.",
            "Unaweza kupata ripoti zako za mikopo bure kutoka kwa kampuni tatu za kitaifa za ripoti za mikopo (Equifax, Experian na TransUnion) mara moja kwa wiki kwenye AnnualCreditReport.com, tovuti rasmi. Unaweza pia kupiga 1-877-322-8228. Fanya hivi kwenye kifaa cha binafsi, si kompyuta ya pamoja, kwa sababu utaandika maelezo ya binafsi huko, si kwenye AI.",
            "Tafuta akaunti usizozitambua na taarifa zisizo sahihi. Kama mtu alitumia utambulisho wako, nenda IdentityTheft.gov kupata mpango wa bure wa kurekebisha. Unaweza kuiomba AI ikueleze maneno ya ripoti ya mikopo, lakini kamwe usibandike ripoti yako ndani yake."
          ],
          steps: ["Nenda AnnualCreditReport.com kwenye kifaa cha binafsi, au piga 1-877-322-8228.", "Omba ripoti kutoka kampuni zote tatu.", "Tafuta akaunti usizozitambua na makosa.", "Kama utambulisho wako ulitumiwa, nenda IdentityTheft.gov.", "Iombe AI ieleze maneno, lakini kamwe usibandike ripoti."],
          words: [["Ripoti ya mikopo", "kumbukumbu ya mikopo yako, kadi za mkopo na malipo ya bili."], ["Kampuni ya ripoti za mikopo (credit bureau)", "kampuni inayotunza ripoti za mikopo: Equifax, Experian au TransUnion."]],
          slides: [
            { title: "Ripoti yako ya mikopo", bullets: ["Kumbukumbu ya mikopo na bili", "Wenye nyumba na wakopeshaji wanaweza kuikagua", "Inaweza kuwa na makosa baada ya kuwa mbali"] },
            { title: "Bure, kutoka tovuti rasmi", bullets: ["AnnualCreditReport.com, kila wiki", "Au piga 1-877-322-8228", "Tumia kifaa cha binafsi"] },
            { title: "Nini cha kutafuta", bullets: ["Akaunti usizozitambua", "Taarifa zisizo sahihi", "Utambulisho ulitumiwa? IdentityTheft.gov"] }
          ],
          sources: [{ name: "FTC: Free credit reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }],
          tryIt: "Muombe msaidizi wa AI akueleze maneno haya ya ripoti ya mikopo kwa njia rahisi: \"collection account\", \"hard inquiry\" na \"payment history\". Kisha andika utaomba lini ripoti yako ya bure kwenye kifaa cha binafsi.",
          youCanNow: "kupata ripoti yako ya mikopo bure na kujua nini cha kutafuta.",
          quickCheck: [
            { objective: "O4", q: "Kampuni tatu za kitaifa za ripoti za mikopo ni zipi?", options: ["Visa, Mastercard na Discover", "IRS, DMV na mahakama", "Benki yako, credit union na duka la kubadilisha hundi", "Equifax, Experian na TransUnion"], answer: 3, why: "Equifax, Experian na TransUnion ndizo kampuni tatu za kitaifa za ripoti za mikopo." },
            { objective: "O4", q: "Unataka AI ikusaidie kusoma ripoti yako ya mikopo. Ungefanya nini?", options: ["Kuiomba AI ikueleze tu maneno usiyoyaelewa", "Kubandika ripoti nzima kwenye AI", "Kumtumia mtu usiyemjua mtandaoni ripoti", "Kutosoma ripoti"], answer: 0, why: "AI inaweza kueleza maneno bila wewe kutoa ripoti yako ya binafsi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kupanga wiki yako",
          minutes: 5,
          goal: "Tumia AI kugeuza wiki yenye miadi, kazi na shughuli nyingi kuwa mpango rahisi.",
          text: [
            "Kurudi nyumbani kunaweza kumaanisha mambo mengi kwa wakati mmoja: zamu za kazi, kuripoti (check-ins), maombi ya kazi, ofisi za vitambulisho, muda na familia, labda masomo. Mpango wa wiki unazuia mambo hayo yasigongane.",
            "Orodhesha kila kitu cha wiki pamoja na siku na saa, kwa maneno ya jumla. Uliza AI: \"Hizi ni zamu zangu za kazi, miadi na shughuli. Tengeneza mpango rahisi wa wiki, onyesha migongano yoyote, na uache muda wa safari kati ya mambo.\" Huhitaji kusema ni aina gani ya kuripoti.",
            "Weka mambo yasiyobadilika kwenye kalenda ya simu yako pamoja na vikumbusho. Acha muda wa bure. Mambo mawili yakigongana, piga simu mapema kupanga upya; ofisi kwa kawaida hupokea vizuri zaidi simu za mapema kuliko mtu asiyefika."
          ],
          steps: ["Orodhesha zamu, miadi na shughuli za wiki kwa maneno ya jumla.", "Iombe AI mpango wa wiki wenye muda wa safari, na ionyeshe migongano.", "Ongeza mambo yasiyobadilika kwenye kalenda yako pamoja na vikumbusho.", "Acha muda wa bure.", "Piga simu mapema kupanga upya migongano yoyote."],
          words: [["Mgongano", "mambo mawili yaliyopangwa kwa wakati mmoja."], ["Kalenda", "app kwenye simu yako inayotunza miadi kwa tarehe."]],
          slides: [
            { title: "Mambo mengi kwa wakati mmoja", bullets: ["Zamu, miadi, shughuli, familia", "Mpango wa wiki unazuia yasigongane"] },
            { title: "Iombe AI mpango", bullets: ["Orodhesha mambo kwa maneno ya jumla", "Ongeza muda wa safari", "Onyesha migongano"] },
            { title: "Ufanye uwe halisi", bullets: ["Weka mambo yasiyobadilika kwenye kalenda", "Acha muda wa bure", "Piga simu mapema kupanga upya"] }
          ],
          tryIt: "Orodhesha majukumu yako halisi au ya mazoezi ya wiki ijayo kwa maneno ya jumla. Iombe AI mpango wa wiki wenye muda wa safari, na urekebishe mgongano mmoja inaoupata.",
          youCanNow: "kugeuza wiki yenye shughuli nyingi kuwa mpango rahisi usio na migongano.",
          quickCheck: [
            { objective: "O5", q: "Mgongano katika ratiba ni nini?", options: ["Ugomvi kazini", "Mchana usio na kazi", "Mambo mawili kwa wakati mmoja", "Bili iliyochelewa"], answer: 2, why: "Mgongano wa ratiba unamaanisha majukumu mawili yanaingiliana." },
            { objective: "O5", q: "Mpango wa wiki wa AI hauonyeshi muda wa safari kati ya miadi miwili iliyo pande tofauti za mji. Ungefanya nini?", options: ["Kuongeza muda wa safari na kuhamisha mmoja ikihitajika", "Kuuamini mpango", "Kuacha miadi yote miwili", "Kufuta mpango"], answer: 0, why: "Mpango halisi unahitaji muda wa safari ili ufike kwa wakati." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kugeuza malengo kuwa hatua za kila wiki",
          minutes: 5,
          goal: "Gawa lengo moja la fedha au maisha kuwa hatua ndogo kwa wiki nne zijazo.",
          text: [
            "Malengo makubwa, kama kuweka akiba kwa amana ya nyumba ya kupanga, kupata leseni ya udereva, au kupunguza deni, yanaweza kuonekana mbali. Kuyagawa kuwa hatua za kila wiki kunayafanya yawezekane.",
            "Uliza AI: \"Lengo langu ni kuweka akiba ya $600 kwa amana ya nyumba ya kupanga ndani ya miezi minne. Ninapokea takriban $1,800 kwa mwezi. Ligawe kuwa hatua za kila wiki na vitendo vidogo.\" Au: \"Nisaidie kupanga hatua za kurudishiwa leseni yangu ya udereva katika jimbo langu. Niambie nini cha kukagua na DMV (ofisi ya magari na leseni).\"",
            "Chagua lengo moja, andika hatua za wiki nne, na uweke ya kwanza kwenye kalenda yako. Jikague kila wiki: nimefanya nini, nini kinafuata? Kwa hatua za kisheria kama kurudishiwa leseni, faini au maswali ya rekodi, thibitisha na ofisi rasmi au programu ya msaada wa kisheria; AI inaweza kutoa orodha ya kuanzia tu."
          ],
          steps: ["Chagua lengo moja.", "Iombe AI iligawe kuwa hatua za kila wiki.", "Andika wiki nne za kwanza.", "Weka wiki ya kwanza kwenye kalenda yako.", "Jikague kila wiki na uthibitishe hatua za kisheria na ofisi rasmi."],
          words: [["Lengo", "kitu unachotaka kufikia."], ["Msaada wa kisheria (legal aid)", "msaada wa kisheria wa bure au wa gharama ndogo kwa watu wanaostahili."]],
          slides: [
            { title: "Malengo makubwa, hatua ndogo", bullets: ["Weka akiba kwa amana", "Rudishiwa leseni", "Punguza deni"] },
            { title: "Iombe AI iligawe", bullets: ["Lengo lako na muda wake", "Hatua na vitendo vya kila wiki"] },
            { title: "Endelea hadi mwisho", bullets: ["Hatua ya kwanza kwenye kalenda yako", "Jikague kila wiki", "Thibitisha hatua za kisheria na ofisi au msaada wa kisheria"] }
          ],
          tryIt: "Kazi ya mwisho: tengeneza bajeti yako ya mwezi kwa AI kutoka namba za makadirio, weka kikumbusho kwa tarehe ya mwisho ya kila bili, andika lini na jinsi gani utapata ripoti yako ya mikopo bure, na ugeuze lengo moja kuwa hatua nne za kila wiki.",
          youCanNow: "kusimamia pesa zako na wiki yako kwa msaada wa AI, na kugeuza malengo kuwa hatua unazoweza kuchukua.",
          quickCheck: [
            { objective: "O5", q: "Unafanyaje lengo kubwa liwezekane?", options: ["Kusubiri hadi uwe na muda zaidi", "Kulifanya lote kwa siku moja", "Kuliweka kichwani tu", "Kuligawa kuwa hatua ndogo za kila wiki"], answer: 3, why: "Hatua ndogo za kila wiki zinageuza lengo kubwa kuwa kitu unachoweza kuanza sasa." },
            { objective: "O5", q: "AI inakupa hatua za kurudishiwa leseni yako ya udereva. Ungefanya nini baadaye?", options: ["Kuzifuata bila kukagua", "Kupuuza hatua zote", "Kuthibitisha hatua na DMV au msaada wa kisheria", "Kuziweka mtandaoni"], answer: 2, why: "Ofisi rasmi zina neno la mwisho kuhusu hatua za kisheria, kwa hiyo unathibitisha nazo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kupanga maisha yako",
        questions: [
          { objective: "O4", q: "Unapata wapi ripoti za mikopo za bure kutoka chanzo rasmi?", options: ["Tovuti yoyote inayoomba ada", "Tangazo linalojitokeza ghafla (pop-up)", "Kiungo kwenye ujumbe mfupi", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com ndicho chanzo rasmi cha bure." },
          { objective: "O4", q: "Je, ubandike ripoti yako ya mikopo kwenye msaidizi wa AI?", options: ["Hapana; iombe AI ieleze maneno tu", "Ndiyo, kila wakati", "Nusu yake tu", "Kwenye kompyuta ya maktaba tu"], answer: 0, why: "Ripoti za mikopo zina maelezo ya binafsi." },
          { objective: "O4", q: "Unakuta akaunti ambayo hukuwahi kufungua. Unafanya nini?", options: ["Kuilipa mara moja", "Kuipuuza", "Kwenda IdentityTheft.gov kupata mpango wa kurekebisha", "Kuiweka mtandaoni"], answer: 2, why: "IdentityTheft.gov inaongoza hatua za kurekebisha." },
          { objective: "O5", q: "Miadi miwili iko wakati mmoja wiki ijayo. Hatua bora ni ipi?", options: ["Kutumaini itafanikiwa", "Kuacha yote miwili", "Kutokwenda yoyote na kutosema kitu", "Kupiga simu mapema kupanga upya mmoja"], answer: 3, why: "Simu za mapema zinafanya kazi vizuri kuliko kutofika." },
          { objective: "O5", q: "AI inakupa hatua za kurudishiwa leseni. Nini kinafuata?", options: ["Kutofanya kitu", "Kuiamini kabisa", "Kuthibitisha na DMV au msaada wa kisheria", "Kumlipa mtu usiyemjua"], answer: 2, why: "Hatua za kisheria lazima zithibitishwe na ofisi rasmi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kusimamia Fedha na Maisha kwa Msaada wa AI",
    questions: [
      { objective: "O1", q: "Bajeti ni:", options: ["Aina ya mkopo", "Mpango wa pesa zako", "Kadi ya benki", "Bili"], answer: 1, why: "Inapanga kinachoingia na kinachotoka." },
      { objective: "O1", q: "Mshahara unaoupokea (take-home pay) ni:", options: ["Unachopokea baada ya kodi na makato", "Malipo yako ya saa kabla ya kodi", "Bonasi", "Mkopo"], answer: 0, why: "Ni pesa unazopata kweli." },
      { objective: "O1", q: "Kipi ni hitaji?", options: ["Kodi ya nyumba", "Mchezo mpya wa video", "Kula hotelini kila siku", "Huduma ya pili ya filamu mtandaoni"], answer: 0, why: "Makazi ni hitaji la msingi." },
      { objective: "O1", q: "Hata akiba ndogo, kama $10 kwa wiki, inasaidia kwa sababu:", options: ["Inaongeza mshahara wako", "Inaongezeka na inasaidia wakati wa dharura", "Inatakiwa", "Inazuia bili zote"], answer: 1, why: "Viasi vidogo vinakua kuwa akiba ya kukulinda." },
      { objective: "O1", q: "Bajeti yako isipolingana, unaweza kuiuliza AI:", options: ["\"Nilipie bili zangu.\"", "\"PIN yangu ni ipi?\"", "\"Ninaweza kupunguza wapi?\"", "\"Nichukulie mkopo.\""], answer: 2, why: "AI inaweza kupendekeza chaguo; wewe unaamua." },
      { objective: "O2", q: "Kundi la matumizi ni:", options: ["Tarehe ya mwisho", "Benki", "Mkopo", "Matumizi yanayofanana yaliyowekwa pamoja, kama chakula"], answer: 3, why: "Makundi yanaonyesha pesa zinakokwenda." },
      { objective: "O2", q: "Tarehe ya mwisho ni:", options: ["Sikukuu", "Siku ya mshahara", "Siku ya mwisho ya kulipa bili kwa wakati", "Siku ya kuzaliwa"], answer: 2, why: "Kulipa baada yake kunaweza kuleta faini za kuchelewa." },
      { objective: "O2", q: "Njia salama zaidi ya kulipa bili ni:", options: ["Kupitia app rasmi ya kampuni, tovuti yake au ana kwa ana", "Kupitia kiungo kwenye ujumbe mfupi", "Kwa kadi ya zawadi kwa mtu anayepiga simu", "Kwa wire kwa mtu usiyemjua"], answer: 0, why: "Njia rasmi zinaepusha ulaghai." },
      { objective: "O3", q: "Maduka ya kubadilisha hundi kwa kawaida:", options: ["Yanaendeshwa na serikali", "Ni bure", "Yanakulipa riba", "Yanatoza ada kila mara"], answer: 3, why: "Ada zinaongezeka kila siku ya mshahara." },
      { objective: "O3", q: "Credit union ni:", options: ["Mkopeshaji wa payday loans", "Benki isiyo ya faida inayomilikiwa na wanachama", "Kampuni ya ripoti za mikopo", "Duka la kubadilisha hundi"], answer: 1, why: "Credit unions zinamilikiwa na wanachama." },
      { objective: "O3", q: "Kama ulikuwa na matatizo ya akaunti ya benki zamani, uliza kuhusu:", options: ["Akaunti za kadi za zawadi", "Akaunti za nafasi ya pili au za ada ndogo", "Sarafu za kidijitali (crypto) tu", "Hakuna kitu"], answer: 1, why: "Benki na credit unions nyingi zinazitoa." },
      { objective: "O3", q: "Kabla ya kuchukua mkopo wowote, uliza:", options: ["Rangi anayoipenda mkopeshaji", "Malipo ya kila mwezi tu", "Hakuna kitu", "Jumla ya kiasi utakacholipa, na lini"], answer: 3, why: "Gharama ya jumla inaonyesha unacholipa kweli." },
      { objective: "O3", q: "Riba ni:", options: ["Pesa za ziada unazolipa kwa kukopa", "Zawadi ya bure", "Mshahara wako", "Kikumbusho cha bili"], answer: 0, why: "Kukopa kunagharimu riba." },
      { objective: "O3", q: "Kwa msaada wa madeni, chaguo salama ni:", options: ["Mtu usiyemjua mtandaoni", "Kampuni inayotoza ada kubwa ya mapema kufuta deni", "Mshauri wa mikopo asiye wa faida au msaada wa kisheria", "Ofa ya kadi ya zawadi"], answer: 2, why: "Mashirika yasiyo ya faida na msaada wa kisheria yanaepusha ulaghai wa kufuta madeni." },
      { objective: "O4", q: "Unaweza kupata ripoti za mikopo za bure kutoka kila kampuni kwenye tovuti rasmi mara ngapi?", options: ["Kwa ada tu", "Mara moja kila miaka kumi", "Kamwe", "Mara moja kwa wiki"], answer: 3, why: "Kampuni hizo ziliongeza ripoti za bure za kila wiki." },
      { objective: "O4", q: "Kampuni tatu za kitaifa za ripoti za mikopo ni:", options: ["Google, Apple na Microsoft", "Visa, Mastercard na Discover", "Equifax, Experian na TransUnion", "DMV, IRS na SSA"], answer: 2, why: "Kampuni hizo tatu ndizo zinatunza ripoti za mikopo." },
      { objective: "O4", q: "Omba ripoti yako ya mikopo kwenye:", options: ["Kompyuta ya pamoja ya maktaba ukiwa umeingia kwenye kila kitu", "Kifaa cha binafsi", "Simu ya mtu usiyemjua", "Mazungumzo ya AI"], answer: 1, why: "Unaandika maelezo ya binafsi huko." },
      { objective: "O5", q: "Unapoiomba AI ipange wiki yako, eleza majukumu:", options: ["Kwa maneno ya jumla", "Pamoja na namba ya kesi yako", "Pamoja na namba ya kitambulisho chako", "Pamoja na namba yako ya Social Security"], answer: 0, why: "Maneno ya jumla yanatosha." },
      { objective: "O5", q: "\"Mgongano\" katika ratiba unamaanisha:", options: ["Mambo mawili kwa wakati mmoja", "Ugomvi", "Siku ya bure", "Bili"], answer: 0, why: "Migongano inahitaji kupangwa upya." },
      { objective: "O5", q: "Ili lengo kubwa liwezekane, wewe:", options: ["Unasubiri bahati", "Unaligawa kuwa hatua za kila wiki", "Unalifanya lote kwa siku moja", "Unalificha hata kwako mwenyewe"], answer: 1, why: "Hatua ndogo zinaongezeka kuwa matokeo makubwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 2, 6, 7, 8, 11, 14, 16, 18, 19]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Bajeti ya mwezi", objective: "O1", notYet: "Hakuna bajeti, au inatumia namba halisi za akaunti au inaacha mahitaji.", meets: "Bajeti ya mwezi mmoja kutoka namba za makadirio, mahitaji yakiwa kwanza na mstari mdogo wa akiba.", exceeds: "Inalingana, na mwanafunzi aliiuliza AI wapi pa kupunguza ikihitajika." },
      { name: "Vikumbusho vya bili", objective: "O2", notYet: "Baadhi ya bili hazina kikumbusho.", meets: "Kikumbusho kwa kila bili siku chache kabla ya tarehe yake ya mwisho.", exceeds: "Vikumbusho vinajirudia kila mwezi na mwanafunzi ameanza kidokezo cha matumizi." },
      { name: "Mpango wa ripoti ya mikopo", objective: "O4", notYet: "Hakuna mpango, au anapanga kutumia tovuti isiyo rasmi.", meets: "Anaandika lini ataomba ripoti ya bure kutoka tovuti rasmi kwenye kifaa cha binafsi.", exceeds: "Pia anaandika nini cha kutafuta na nini cha kufanya kuhusu akaunti ambayo hakuwahi kufungua." },
      { name: "Lengo katika hatua za kila wiki", objective: "O5", notYet: "Lengo halieleweki au halina hatua.", meets: "Lengo moja limegawanywa kuwa hatua nne ndogo za kila wiki.", exceeds: "Kila hatua ina siku na inaingia vizuri katika wiki ya mwanafunzi." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaoripoti kufuata bajeti na kulipa bili kwa wakati kwa siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoomba ripoti yao ya mikopo ya bure au kufungua akaunti ya ada ndogo ya benki au credit union ndani ya siku 60",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja yenye intaneti na app ya vikumbusho au kalenda",
      "Msaidizi wa AI wa bure: Microsoft Copilot, ChatGPT au Google Gemini",
      "Karatasi na kalamu kwa namba za makadirio na kidokezo cha matumizi",
      "Kama dakika 60 kwa jumla, katika vipindi vifupi: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Wanafunzi wanaweza kutumia namba za mazoezi badala ya mshahara na bili zao halisi wakipenda.",
      "Usiwaombe wanafunzi kamwe kuandika namba halisi za akaunti, namba za Social Security au maelezo ya kesi; makadirio ya kiasi yanatosha.",
      "Kozi hii haitoi ushauri wa kifedha wala wa kisheria; kuwa na mawasiliano ya msaada wa kisheria wa eneo lako na ya mshauri wa mikopo asiye wa faida tayari kwa maswali kuhusu madeni, faini au malezi ya mtoto.",
      "Ripoti za mikopo ziombwe kwenye kifaa cha binafsi, si kompyuta ya pamoja ya maabara.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
