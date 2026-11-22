"use strict";

// Koach Learn course (Igbo translation of shared/video-editing-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "video-editing-basics-ig",
  lang: "ig",
  translationOf: "video-editing-basics",
  category: "Workforce Development",
  name: "Mmalite Ndozi Vidiyo",
  skills: "Ịgụ brief na ịhazi footage, Ịhazi project, Iwu rough cut, Iji B-roll na cut dị mma karị, Idozi ụda na itinye captions, Export na iwu portfolio",
  outcome: "iwere clip vidiyo nke gị na obere brief, dozie ha na editor vidiyo n'efu ka ha bụrụ vidiyo dị ọcha nke sekọnd 30 ruo 60 nwere ụda doro anya na captions, mee export ya n'ọdịdị kwesịrị ebe a ga-egosi ya, ma were ya dị ka ihe mbụ na portfolio ọrụ gị.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla chọrọ ịdozi vidiyo maka ọrụ: ndị ntorobịa na-achọ ọrụ okike mbụ ha, ndị okenye na-agbanwe ọrụ, ndị egwuregwu na ndị nkuzi egwuregwu na-eme clip ihe kacha mma, na ndị nwe obere azụmahịa chọrọ vidiyo maka ụlọ ahịa ha. Ọ dịghị mkpa na ị dozila vidiyo na mbụ.",
    "Ị ga-arụ ọrụ dị ka ezi onye editor: gụọ brief, hazie faịlụ gị, wuo rough cut, mee ka ọ dị nro site na B-roll na cut ka mma, dozie ụda, tinye captions, ma mee export faịlụ e mechara. Ihe niile na-arụ ọrụ na editor n'efu dị ka DaVinci Resolve, Microsoft Clipchamp, CapCut ma ọ bụ editor dị n'ime ekwentị gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọrụ \"Nwalee ya ugbu a\" na-esokwa ya, nke ị ga-eji clip nke gị mee. E nwere obere nnwale nwere ajụjụ abụọ mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ị ga-emecha bụ obere vidiyo zuru oke na ndetu portfolio ị nwere ike igosi onye were gị n'ọrụ ma ọ bụ onye ahịa.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye asambodo. Ọ bụrụ na ị chọrọ asambodo (credential) n'ọdịnihu, Nkuzi 6 na-egosi abụọ n'ezie na ebe ị ga-elele ha."
  ],
  finalTask: "Dozie vidiyo nke sekọnd 30 ruo 60 site na footage nke gị maka ezi brief ma ọ bụ brief omume (dịka ọmụmaatụ ihe kacha mma otu egwuregwu, mgbasa ozi maka ụlọ ahịa dị nso, ma ọ bụ akụkọ banyere mmemme ọrụ). Nyefee: folda project nwere aha, vidiyo e mechara nke e mere export n'ọdịdị kwesịrị ebe a ga-egosi ya, nwere B-roll, ụda dị ọcha, captions na naanị egwu e nyere gị ikike iji, na obere ndetu portfolio na-ekwu brief ahụ, ọrụ gị na ngwaọrụ i ji rụọ ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye nọ na mmemme ọrụ, ndị egwuregwu na ndị nkuzi egwuregwu, na ndị nwe obere azụmahịa na US na mba ọzọ. Ọtụtụ ejirila ekwentị see vidiyo; mmadụ ole na ole dozirila ihe karịa itinye filter n'app soshal midia.",
    startingPoint: "Ha nwere ike iji ekwentị see vidiyo ma tinye ya na soshal midia. Ha ejibeghị timeline, ha amaghị aspect ratio ma ọ bụ frame rate, ha emebeghịkwa export faịlụ maka onye ọzọ.",
    gap: "Azụmahịa, ụlọ akwụkwọ, otu egwuregwu na ụlọ ọrụ enyemaka niile chọrọ obere vidiyo, ọtụtụ ọrụ mbido na ọrụ nnwere onwe (onye enyemaka soshal midia, onye na-emepụta ọdịnaya, junior editor) na-achọkwa nka ndozi vidiyo nke mbido na ihe atụ nke ọrụ gị. Ndị na-amụ ihe chọrọ ụzọ ha nwere ike imegharị iji gbanwee clip na brief ka ọ bụrụ vidiyo dị ọcha e mechara, na otu ọrụ e mechara ha ga-egosi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ndozi ọ bụla",
      "Ngwaọrụ: ekwentị, ma ọ bụ kọmputa n'ụlọ, n'ọba akwụkwọ ma ọ bụ n'ebe enyemaka ọrụ; naanị editor n'efu",
      "Menu editor na-agbanwekarị, ya mere nkuzi na-akụzi omume, ọ bụghị aha menu kpọmkwem",
      "Oge: nkuzi nkeji 4 ruo 6 na ihe dị ka otu awa nke ndozi aka maka ọrụ ikpeazụ",
      "Iwu: ikike site n'aka ndị a na-ese (na nne ma ọ bụ nna maka onye ọ bụla na-erubeghị afọ 18) na egwu onye na-amụ ihe nwere ikike iji"
    ],
    prerequisites: "Ọ ga-enwe ike iji ekwentị see vidiyo ma bufee faịlụ na kọmputa ma ọ bụ n'etiti app. Ndị ọhụrụ n'ekwentị ma ọ bụ kọmputa nwere ike ibu ụzọ were \"Nka Mbụ nke Kọmputa\" ma ọ bụ \"Iji Smartphone na Tablet\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị obere brief na otu ìgwè clip a na-edozibeghị", action: "ịhazi footage ahụ na folda project nwere aha ma tọọ aspect ratio na frame rate nke project ka ha dabara ebe a ga-egosi vidiyo ahụ", standard: "nke mere na clip ọ bụla dị mfe ịchọta, ọ dịghịkwa clip a gbatịrị ma ọ bụ bepụrụ n'amaghị ama" },
    { id: "O2", condition: "Site n'iji editor vidiyo n'efu", action: "iwu rough cut site n'ime trim, split na ịhazi usoro clip na timeline ka o nwee mmalite, etiti na njedebe", standard: "nke na-akọ akụkọ brief ahụ n'ogologo a chọrọ n'enweghị dead time" },
    { id: "O3", condition: "Mgbe e nyere gị rough cut", action: "itinye B-roll, cutaway na transition dị mfe iji zoo mwụli na ime ka vidiyo ahụ na-aga n'ihu", standard: "n'ejighị karịa otu ma ọ bụ abụọ ụdị transition" },
    { id: "O4", condition: "Mgbe e nyere gị cut nwere okwu na egwu", action: "ịhazi ọkwa ụda ka ha dabara ma tinye captions ziri ezi na ederede n'ihuenyo", standard: "nke mere na a ga-anụ ma gụọ okwu ọ bụla, meter anaghị eru n'elu, a na-ejikwa egwu niile n'ikike" },
    { id: "O5", condition: "Mgbe e nyere gị edit e mechara", action: "ime export vidiyo ahụ n'ntọala dabara platform ahụ, lelee ya megide brief ahụ ma dee obere ndetu portfolio", standard: "nke mere na faịlụ ahụ na-akpọ nke ọma na nnwale mbụ, ndetu ahụ na-ekwukwa brief ahụ, ọrụ gị na ngwaọrụ gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Site na clip a na-edozibeghị ruo rough cut",
      lessons: [
        {
          title: "Gụọ brief ma hazie footage gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dee brief ma hazie folda project nwere aha nke clip gị dị n'usoro n'ime ya.",
          text: [
            "Ọrụ ndozi vidiyo ọ bụla na-amalite site na brief: obere nkọwa nke ihe vidiyo ahụ bụ maka ya. Ezigbo brief na-aza ajụjụ ise: onye ga-ekiri ya, ebe a ga-egosi ya (dịka ọmụmaatụ YouTube, Instagram Reels, TikTok, TV dị na windo ụlọ ahịa), ogologo ọ ga-adị, otu ozi ọ ga-ezi, na mgbe a chọrọ ya.",
            "Nke ọzọ, hazie. Ndị editor na-atụfu ọtụtụ awa na-achọ clip. Mee otu folda project nwere aha doro anya, dị ka \"2026-11 Bakery promo\". N'ime ya, mee folda maka vidiyo, ụda (audio), egwu, graphics na exports. Detuo clip gị n'ime ya ma nye ndị kacha mma aha dị mkpụmkpụ, dị ka \"oven-closeup\" ma ọ bụ \"owner-interview\".",
            "Debe mbipụta nke abụọ nke clip gị n'ebe ọzọ, dị ka USB drive ma ọ bụ nchekwa cloud. Ọ bụrụ na ekwentị agbajie ma ọ bụ e hichapụ faịlụ, ọrụ ahụ agaghị efu.",
            "Lelee ikike ugbu a, ọ bụghị mgbe i tinyechara ya n'ịntanetị. Onye ọ bụla a na-ahụ anya ma ọ bụ a na-anụ olu ya nke ọma kwesịrị ikwe ka ọ pụta na vidiyo ahụ, onye ọ bụla na-erubeghị afọ 18 chọkwara ka nne, nna ma ọ bụ onye nlekọta kwekwa."
          ],
          steps: ["Dee brief: ndị na-ekiri, platform, ogologo, otu ozi, ụbọchị a chọrọ ya.", "Mee folda project nwere aha doro anya na ụbọchị.", "Tinye folda maka vidiyo, ụda, egwu, graphics na exports.", "Detuo clip gị n'ime ya ma gbanwee aha ndị kacha mma.", "Chekwaa clip a na-edozibeghị n'ebe nke abụọ.", "Lelee na onye ọ bụla a na-ese kwere."],
          words: [["Brief", "obere nkọwa nke ihe vidiyo bụ maka ya: onye ọ bụ maka ya, ebe a ga-egosi ya, ogologo ya, ozi ya na ụbọchị a chọrọ ya."], ["Footage", "clip vidiyo i sere tupu ndozi."], ["Back up (ichekwa mbipụta)", "idebe mbipụta nke abụọ nke faịlụ gị n'ebe ọzọ."], ["Onye ahịa (client)", "onye ma ọ bụ azụmahịa ị na-emere vidiyo ahụ."]],
          slides: [
            { title: "Brief na-aza ajụjụ ise", bullets: ["Onye ga-ekiri ya?", "Ebee ka a ga-egosi ya?", "Ogologo ole? Kedu otu ozi?", "Kedu mgbe a chọrọ ya?"] },
            { title: "Otu folda project doro anya", bullets: ["Nye ya aha nwere ụbọchị na ọrụ ahụ", "Folda: vidiyo, ụda, egwu, graphics, exports", "Gbanwee aha clip gị kacha mma"] },
            { title: "Chebe ọrụ ahụ", bullets: ["Chekwaa clip a na-edozibeghị n'ebe nke abụọ", "Ikike site n'aka onye ọ bụla a na-ese", "Nne, nna ma ọ bụ onye nlekọta maka onye na-erubeghị afọ 18"] }
          ],
          tryIt: "Họrọ vidiyo ị ga-eme maka ọrụ ikpeazụ (ihe kacha mma otu egwuregwu, mgbasa ozi ụlọ ahịa, akụkọ mmemme ọrụ ma ọ bụ echiche nke gị). Dee brief nwere ahịrị ise n'akwụkwọ. Wee mee folda project nwere folda ise n'ime ya, detuo clip 8 ruo 15 i sere n'ime ya, ma gbanwee aha ise kacha mma.",
          youCanNow: "ide obere brief ma hazie folda project ebe clip ọ bụla dị mfe ịchọta.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke n'ime ndị a dị na brief vidiyo?", options: ["Agba ị kacha amasị", "Ebe a ga-egosi vidiyo ahụ na ogologo ọ ga-adị", "Ọnụ ahịa ekwentị gị", "Ndepụta app niile i nwere"], answer: 1, why: "Ebe a ga-egosi ya na ogologo ya na-ekpebi mkpebi ndozi niile na-esote." },
            { objective: "O1", q: "Ekwentị gị nwere naanị otu mbipụta nke clip onye ahịa. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Malite ndozi ozugbo", "Hichapụ clip ndị na-adịghị gị mma", "Tinye clip ahụ n'ịntanetị ka e chekwaa ha", "Detuo ha n'ebe nke abụọ dị ka USB drive ma ọ bụ nchekwa cloud"], answer: 3, why: "Mbipụta n'ebe nke abụọ pụtara na ekwentị gbajiri agbaji ma ọ bụ faịlụ e hichapụrụ agaghị eme ka ọrụ ahụ furu efu." }
          ]
        },
        {
          title: "Hazie project: ọdịdị, nha na ọsọ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ aspect ratio, resolution na frame rate nke project tupu i dozie.",
          text: [
            "Tupu i dozie, gwa editor ahụ ọdịdị na nha vidiyo e mechara. Aspect ratio bụ ọdịdị. 16:9 sara mbara dabara YouTube, laptop na TV. 9:16 toro ogologo dabara app ekwentị dị ka TikTok, Instagram Reels na YouTube Shorts. 1:1 square dabara ụfọdụ feed. Họrọ ọdịdị ahụ site na brief gị.",
            "Resolution bụ ọnụ ọgụgụ ntụpọ (pixel) mejupụtara foto ahụ. 1920 na 1080, nke a na-akpọkarị 1080p ma ọ bụ Full HD, bụ nhọrọ n'enweghị nsogbu maka ọtụtụ ọrụ. Maka vidiyo toro ogologo, ọ bụ 1080 n'obosara na 1920 n'ịdị elu.",
            "Frame rate bụ ọnụ ọgụgụ foto kwụ otu ebe na-akpọ kwa sekọnd, e dere dị ka fps. Ndị a na-ahụkarị bụ 24, 30 na 60. Tọọ project ahụ n'ọnụ ọgụgụ e ji see ọtụtụ clip gị. Ị nwere ike ịhụ nkọwa clip na editor ma ọ bụ n'ozi faịlụ ahụ na kọmputa ma ọ bụ ekwentị gị.",
            "Ọ bụrụ na ọdịdị ezighi ezi, editor ahụ ga-etinye ogwe ojii ma ọ bụ bepụ akụkụ. Ọ bụrụ na i gwakọta frame rate, mmegharị nwere ike ịdị ka ọ na-awụli awụli. Ịtọ ndị a na mbụ na-azọpụta gị ọtụtụ ndozi n'ọdịnihu."
          ],
          steps: ["Gụọ brief: ebee ka a ga-egosi vidiyo ahụ?", "Họrọ ọdịdị: 16:9 sara mbara, 9:16 toro ogologo ma ọ bụ 1:1 square.", "Họrọ nha: 1920 x 1080 sara mbara, ma ọ bụ 1080 x 1920 toro ogologo.", "Lelee frame rate nke clip gị ma tọọ project ka ọ dabara.", "Malite project ahụ ma mee import clip gị."],
          words: [["Aspect ratio", "ọdịdị vidiyo, e dere dị ka obosara na ịdị elu, dị ka 16:9 (sara mbara) ma ọ bụ 9:16 (toro ogologo)."], ["Resolution", "ọnụ ọgụgụ pixel mejupụtara foto ahụ, dị ka 1920 x 1080."], ["Pixel", "otu obere ntụpọ agba n'ihuenyo."], ["Frame rate (fps)", "ọnụ ọgụgụ foto kwụ otu ebe na-akpọ kwa sekọnd, dị ka 24, 30 ma ọ bụ 60."], ["Import", "ibubata clip gị n'ime mmemme ndozi ahụ."]],
          slides: [
            { title: "Ọdịdị: aspect ratio", bullets: ["16:9 sara mbara: YouTube, laptop, TV", "9:16 toro ogologo: TikTok, Reels, Shorts", "1:1 square: ụfọdụ feed"] },
            { title: "Nha: resolution", bullets: ["1920 x 1080 (1080p) dị mma maka ọtụtụ ọrụ", "Toro ogologo: 1080 obosara x 1920 ịdị elu"] },
            { title: "Ọsọ: frame rate", bullets: ["24, 30 ma ọ bụ 60 foto kwa sekọnd", "Dabara ọnụ ọgụgụ e ji see ọtụtụ clip"] },
            { title: "Ihe mere ị ga-eji tọọ ya na mbụ", bullets: ["Ọdịdị ezighi ezi = ogwe ojii ma ọ bụ akụkụ e bepụrụ", "Frame rate gwakọtara agwakọta = mmegharị na-awụli awụli"] }
          ],
          sources: [
            { name: "Blackmagic Design: DaVinci Resolve (free version for Mac, Windows and Linux)", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
            { name: "Microsoft Clipchamp: plans, including the free plan", url: "https://clipchamp.com/en/pricing/" }
          ],
          tryIt: "Meghee editor n'efu: DaVinci Resolve ma ọ bụ Clipchamp na kọmputa, ma ọ bụ CapCut ma ọ bụ editor dị n'ime ekwentị gị. Chọpụta frame rate nke atọ n'ime clip gị. Malite project ọhụrụ nwere ọdịdị na frame rate brief gị chọrọ, ma mee import clip gị.",
          youCanNow: "ịhazi project nwere ọdịdị, nha na frame rate kwesịrị ebe a ga-egosi vidiyo ahụ.",
          quickCheck: [
            { objective: "O1", q: "Brief gị kwuru na vidiyo ahụ ga-abụ Instagram Reel. Kedu ọdịdị ị ga-ahọrọ?", options: ["16:9 sara mbara", "4:3 TV ochie", "9:16 toro ogologo", "21:9 sinima"], answer: 2, why: "Reels, TikTok na Shorts na-akpọ toro ogologo n'ekwentị, ya mere 9:16 na-ejupụta ihuenyo." },
            { objective: "O1", q: "E ji 30 fps see ọtụtụ clip gị. Kedu frame rate project ahụ kwesịrị iji?", options: ["30 fps, ka ọ dabara clip ndị ahụ", "60 fps, n'ihi na nke dị elu ka mma mgbe niile", "Ọnụ ọgụgụ ọ bụla; ọ dịghị ihe ọ na-eme", "24 fps, n'ihi na fim na-eji ya"], answer: 0, why: "Ime ka ọ dabara ọnụ ọgụgụ nke ọtụtụ clip gị na-eme ka mmegharị dị nro." }
          ]
        },
        {
          title: "Wuo rough cut na timeline",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mee trim, split ma hazie usoro clip na timeline ka ọ bụrụ akụkọ dabara ogologo a chọrọ.",
          text: [
            "Timeline bụ ogwe ebe ị na-etinye clip n'usoro, site n'aka ekpe gaa n'aka nri. Playhead bụ ahịrị na-egosi ebe ị nọ. Rough cut bụ ụdị mbụ zuru oke: clip kwesịrị ekwesị, n'usoro kwesịrị ekwesị, n'ihe dị ka ogologo kwesịrị ekwesị. Ọ dịghị mkpa ka ọ mara mma ugbu a.",
            "Wuo ya n'akụkụ atọ. Mmalite na-adọta uche na sekọnd ole na ole mbụ. Etiti na-egosi isi ozi. Njedebe na-agwa onye na-ekiri ihe ọ ga-eme ma ọ bụ cheta. Maka ụlọ achịcha: achịcha ọhụrụ na-apụta n'oven, onye nwe ya na-ekwu ihe mere o ji malite, wee bụrụ akara ụlọ ahịa na oge mmeghe ya.",
            "Ngwaọrụ abụọ na-arụ ọtụtụ ọrụ. Trim na-ebepụ mmalite ma ọ bụ njedebe clip. Split na-ekewa otu clip ka ọ bụrụ abụọ n'ebe playhead dị, ka i wee wepụ akụkụ etiti. Malite shot ọ bụla obere oge tupu omume ahụ, ma kwụsị ya obere oge mgbe omume gachara. Wepụ dead time: ichere, ilegide igwefoto anya, \"um\" na nkwụsịtụ ogologo.",
            "Kirie rough cut niile site na mmalite. Ọ bụrụ na ọ dị ogologo karịa ihe brief kwere, wepụ shot dum tupu i mee ka ndị dị mma dị mkpụmkpụ. Chekwaa ya mgbe mgbe, ma chekwaa mbipụta nwere nọmba ụdị (v1, v2) tupu mgbanwe ukwu."
          ],
          steps: ["Dọrọ clip gị kacha mma gaa na timeline n'usoro akụkọ: mmalite, etiti, njedebe.", "Mee trim mmalite na njedebe clip ọ bụla ka ọ malite obere oge tupu omume.", "Mee split na clip iji wepụ nkwụsịtụ, mperi na dead time.", "Kirie site na mmalite ma lelee ogologo ya megide brief.", "Wepụ shot dum na-adịghị ike ma ọ bụrụ na ọ dị ogologo karịa.", "Chekwaa ya dị ka v1."],
          words: [["Timeline", "ogwe dị n'editor ebe a na-etinye clip n'usoro, site n'aka ekpe gaa n'aka nri."], ["Playhead", "ahịrị dị na timeline na-egosi oge ị na-ekiri."], ["Trim", "ime ka clip dị mkpụmkpụ site n'ibepụ mmalite ma ọ bụ njedebe ya."], ["Split", "ikewa otu clip ka ọ bụrụ iberibe abụọ n'ebe playhead dị."], ["Rough cut", "ụdị mbụ zuru oke nke edit, nwere clip kwesịrị ekwesị n'usoro mana a ka emezibeghị ya."], ["Dead time", "akụkụ ebe ihe bara uru na-adịghị eme, dị ka ichere ma ọ bụ nkwụsịtụ ogologo."]],
          slides: [
            { title: "Timeline", bullets: ["Clip n'usoro, site n'aka ekpe gaa n'aka nri", "Playhead na-egosi ebe ị nọ", "Rough cut = ụdị mbụ zuru oke"] },
            { title: "Mmalite, etiti, njedebe", bullets: ["Dọta uche na sekọnd mbụ", "Gosi isi ozi", "Kwụsị na ihe a ga-eme ma ọ bụ cheta"] },
            { title: "Trim na split", bullets: ["Trim: bepụ mmalite ma ọ bụ njedebe", "Split: kewaa clip abụọ n'ebe playhead dị", "Wepụ ichere, nkwụsịtụ na \"um\""] },
            { title: "Lelee ma chekwaa", bullets: ["Kirie site na mmalite", "Ọ dị ogologo karịa? Buru ụzọ wepụ shot dum", "Chekwaa ụdị: v1, v2"] }
          ],
          tryIt: "N'ime project gị, wuo rough cut nke vidiyo ọrụ ikpeazụ gị. Tinye clip n'usoro mmalite-etiti-njedebe, mee trim nke ọ bụla, mee split iji wepụ opekata mpe nkwụsịtụ ma ọ bụ mperi abụọ, ma ruo n'ime sekọnd 10 nke ogologo a chọrọ. Chekwaa ya dị ka v1 ma dee ogologo ya.",
          youCanNow: "iwu rough cut na-akọ akụkọ n'ogologo a chọrọ n'enweghị dead time.",
          quickCheck: [
            { objective: "O2", q: "Ị chọrọ iwepụ nkwụsịtụ ogologo n'etiti clip ajụjụ ọnụ (interview). Kedu ngwaọrụ ị ga-eji?", options: ["Gbanwee aspect ratio", "Mee export clip ahụ", "Tinye transition", "Mee split na clip ahụ n'akụkụ abụọ nke nkwụsịtụ ahụ ma hichapụ etiti ya"], answer: 3, why: "Ime split n'akụkụ abụọ nke nkwụsịtụ ahụ na-ekwe ka i wepụ naanị akụkụ etiti ahụ." },
            { objective: "O2", q: "Rough cut gị dị ogologo sekọnd 20 karịa. Gịnị ka ị ga-ebu ụzọ nwaa?", options: ["Mee ka vidiyo niile gaa ọsọ ọsọ", "Wepụ shot dum na-adịghị ike", "Mee ka clip ọ bụla dị mkpụmkpụ otu sekọnd", "Gbanwee frame rate"], answer: 1, why: "Iwepụ shot na-adịghị ike na-eme ka ndị siri ike dị n'uju ma akụkọ ahụ doo anya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Site na clip a na-edozibeghị ruo rough cut",
        questions: [
          { objective: "O1", q: "Onye nwe ụlọ ahịa rịọrọ vidiyo maka TV dị na windo ihu ụlọ ahịa ya. Kedu ọdịdị dabara TV?", options: ["9:16 toro ogologo", "16:9 sara mbara", "1:1 square", "Ọdịdị ọ bụla; TV na-ahazi onwe ya"], answer: 1, why: "TV bụ ihuenyo sara mbara, ya mere 16:9 na-ejupụta ha n'enweghị ogwe ojii." },
          { objective: "O1", q: "Kedu aha folda project kacha baa uru?", options: ["\"stuff\"", "\"New folder (3)\"", "\"video final final\"", "\"2026-11 Bakery promo\""], answer: 3, why: "Ụbọchị na aha ọrụ ahụ na-eme ka folda ahụ dị mfe ịchọta n'ọdịnihu." },
          { objective: "O2", q: "Gịnị bụ rough cut?", options: ["Ụdị mbụ zuru oke nwere clip kwesịrị ekwesị n'usoro", "Vidiyo nwere ọnya na lens", "Faịlụ e mechara nke e mere export", "Clip e sere nke ọma"], answer: 0, why: "Rough cut nwere akụkọ ahụ n'ọnọdụ ya; ime ka ọ mara mma na-abịa ma emesịa." },
          { objective: "O2", q: "Ebee ka shot kwesịrị ịmalite ọtụtụ mgbe?", options: ["Ozugbo i pịara record", "Mgbe omume ahụ gachara", "Obere oge tupu omume ahụ", "N'etiti omume ahụ"], answer: 2, why: "Ịmalite obere oge tupu omume na-ewepụ dead time ma na-eme ka vidiyo na-aga n'ihu." },
          { objective: "O2", q: "Tupu mgbanwe ukwu na edit gị, gịnị bụ ezigbo omume?", options: ["Hichapụ ụdị ochie iji chekwaa ohere", "Mechie editor n'echekwaghị", "Gbanwee aspect ratio", "Chekwaa mbipụta nwere nọmba ụdị, dị ka v2"], answer: 3, why: "Mbipụta nwere nọmba ụdị na-ekwe ka ị laghachi azụ ma ọ bụrụ na mgbanwe ahụ arụghị ọrụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ime ka ọ mara mma na inyefe ya",
      lessons: [
        {
          title: "Mee ka edit dị nro site na B-roll na cut ka mma",
          objectives: ["O3"],
          minutes: 5,
          goal: "Tinye B-roll, cutaway na L-cut ma ọ bụ J-cut iji mee ka rough cut gị dị nro.",
          text: [
            "Mgbe i bepụrụ akụkụ ajụjụ ọnụ, ihu mmadụ ahụ na-awụli. A na-akpọ nke a jump cut. Ndị editor na-eji B-roll zoo ya: shot na-egosi ihe mmadụ ahụ na-ekwu maka ya. Onye nkuzi egwuregwu na-ekwu maka mmega ahụ; anyị na-ahụ ndị egwuregwu na-eme drill. Olu ahụ na-aga n'ihu mgbe foto na-agbanwe.",
            "Cutaway bụ obere shot nke ihe dị nso, dị ka aka, igwe mmadụ ma ọ bụ bọọdụ akara, e tinyere n'etiti shot abụọ nke otu ihe ahụ. Gwakọta shot sara mbara (wide), nke etiti (medium) na nke dị nso (close-up) ka onye na-ekiri hụ ebe ahụ, ndị mmadụ na obere ihe.",
            "Aghụghọ ndị ọkachamara abụọ dị mfe. N'L-cut, foto na-agbanwe gaa na shot ọzọ mgbe ụda nke shot mbụ ka na-akpọ. N'J-cut, ị na-anụ shot ọzọ tupu ị hụ ya. Ha abụọ na-eme ka edit dị nro ma dị ka ihe okike. Ọtụtụ editor na-ekwe ka ị kewapụ (unlink) ụda na foto iji mee nke a.",
            "Ejila transition eme ihe karịa. Ndị ọkachamara na-ejikarị cut nkịtị. Jiri otu ma ọ bụ abụọ transition dị mfe, dị ka obere fade na mmalite na njedebe. Ọtụtụ wipe na spin na-egbuke egbuke na-eme ka vidiyo yie ka onye mbido mere ya."
          ],
          steps: ["Kirie rough cut gị ma kaa akara jump cut ọ bụla.", "Tinye B-roll na track dị n'elu ajụjụ ọnụ iji kpuchie mwụli ọ bụla.", "Tinye opekata mpe otu cutaway (aka, igwe mmadụ, akara, bọọdụ akara).", "Nwaa otu L-cut ma ọ bụ J-cut site n'ikewapụ ụda na foto.", "Jiri cut nkịtị, na opekata mpe otu ma ọ bụ abụọ transition dị mfe.", "Chekwaa ya dị ka v2."],
          words: [["B-roll", "shot ndị ọzọ na-egosi ihe mmadụ na-ekwu maka ya, e tinyere n'elu olu ya."], ["Jump cut", "mwụli mberede na foto mgbe e bepụrụ akụkụ shot."], ["Cutaway", "obere shot nke ihe dị nso e tinyere n'etiti shot abụọ nke otu isiokwu ahụ."], ["L-cut na J-cut", "edit ebe ụda na foto na-agbanwe n'oge dị iche, ka cut ahụ dị nro."], ["Transition", "mmetụta dị n'etiti clip abụọ, dị ka fade."]],
          slides: [
            { title: "Zoo mwụli ndị ahụ", bullets: ["Ibepụ ajụjụ ọnụ na-eme ka ihu wụli", "Jiri B-roll na-egosi isiokwu ahụ kpuchie ya", "Olu ahụ na-aga n'ihu n'okpuru"] },
            { title: "Gwakọta shot gị", bullets: ["Wide: ebe ahụ", "Medium: ndị mmadụ", "Close-up: obere ihe", "Cutaway: aka, igwe mmadụ, akara"] },
            { title: "L-cut na J-cut", bullets: ["L-cut: foto na-agbanwe, ụda na-aga n'ihu", "J-cut: nụ shot ọzọ tupu ị hụ ya", "Kewapụ ụda na foto iji mee ya"] },
            { title: "Transition: obere ka mma", bullets: ["Cut nkịtị ọtụtụ oge", "Otu ma ọ bụ abụọ fade dị mfe, ọ karịghị"] }
          ],
          tryIt: "Meghee v1 gị. Kpuchie jump cut ọ bụla site na B-roll, tinye opekata mpe otu cutaway, ma mee otu L-cut ma ọ bụ J-cut. Wepụ transition ọ bụla na-egbuke egbuke ka i ghara iji karịa ụdị abụọ. Chekwaa ya dị ka v2 ma kirie v1 na v2 n'akụkụ ibe ha.",
          youCanNow: "iji B-roll, cutaway na L-cut ma ọ bụ J-cut mee ka edit dị nro ma dị mfe ikiri.",
          quickCheck: [
            { objective: "O3", q: "Ajụjụ ọnụ nwere jump cut ebe i wepụrụ otu ahịrịokwu. Kedu otu ị ga-esi zoo ya?", options: ["Tinye B-roll n'elu mwụli ahụ mgbe olu na-aga n'ihu", "Tinye transition na-agba gburugburu", "Mee ka vidiyo ahụ dị ụda karịa", "Gbanwee frame rate"], answer: 0, why: "B-roll na-ekpuchi mwụli na foto mgbe okwu ahụ na-aga n'ihu." },
            { objective: "O3", q: "Ị na-anụ igwe mmadụ na-eti mkpu ọṅụ tupu foto agbanwee gaa n'igwe mmadụ ahụ. Kedu aha nke a?", options: ["Jump cut", "L-cut", "Rough cut", "J-cut"], answer: 3, why: "N'J-cut, ụda nke shot ọzọ na-amalite tupu foto ya." }
          ]
        },
        {
          title: "Dozie ụda, tinye egwu na captions",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hazie ọkwa olu na egwu, tinye egwu i nwere ikike iji, ma tinye captions ziri ezi.",
          text: [
            "Ndị na-ekiri na-agbaghara foto na-adịchaghị mma mana ha anaghị agbaghara ụda ọjọọ. Jiri audio meter: ọ na-egosi otu ụda si dị elu. Ọ bụrụ na o ruo n'elu ma ghọọ uhie, ụda ahụ ga-akpatụ. Ebumnuche a na-ahụkarị bụ ka olu ruo ihe dị ka -6 na meter, egwu dị ala karịa n'okpuru okwu, ma ọ dịghị ihe na-eru 0.",
            "Jiri naanị egwu i nwere ikike iji: egwu i mere, egwu nwere ikike e dere ede, ma ọ bụ ọba egwu n'efu dị n'editor ma ọ bụ platform gị, na-agbaso iwu ya. YouTube Audio Library na-enye egwu maka vidiyo YouTube; ụfọdụ egwu chọrọ ka ị kpọọ aha onye ọbụ abụ. Ịkpọ aha naanị anaghị enye gị ikike iji egwu onye ọzọ, ọ dịghịkwa ọnụ ọgụgụ sekọnd dị mma.",
            "Ọtụtụ mmadụ na-ekiri n'emeghị ka ụda pụta, captions na-enyekwa ndị ntị chiri ma ọ bụ ndị na-anụchaghị ihe nke ọma aka. Ọtụtụ editor nwere ike ime captions akpaaka. Gụọ ha mgbe niile ma dozie mperi ọ bụla, karịsịa aha, ebe na nọmba.",
            "Tinye ederede n'ihuenyo nke ọma: aha dị mkpụmkpụ, aha mmadụ na ọrụ ya na nke mbụ ọ na-ekwu okwu, na kaadị ikpeazụ nwere ozi ma ọ bụ call to action. Jiri mkpụrụ akwụkwọ buru ibu, dị mfe, ma debe ederede n'ebe dị anya site na nsọtụ, ebe app na-etinye bọtịnụ ha."
          ],
          steps: ["Kpọọ edit ahụ ma lelee audio meter.", "Wedata clip ọ bụla na-aghọ uhie; bulie olu dị ala nke ukwuu.", "Tinye egwu i nwere ike iji ma wedata ya n'okpuru okwu.", "Gbanye captions akpaaka, wee gụọ ma dozie okwu ọ bụla.", "Tinye aha, akara aha na kaadị njedebe n'mkpụrụ akwụkwọ buru ibu, dị mfe.", "Chekwaa ya dị ka v3."],
          words: [["Audio meter", "ogwe na-egosi otu ụda si dị elu."], ["Clipping", "ụda na-akpatụ nke na-eme mgbe ọkwa ya ruru n'elu meter."], ["Royalty-free", "egwu ị nwere ike iji n'akwụghị ụgwọ oge ọ bụla a kpọrọ ya, n'okpuru iwu ọba egwu ahụ; o ka nwere iwu."], ["Captions", "okwu a na-ekwu e gosiri dị ka ederede n'ihuenyo."], ["Call to action", "ihe ị chọrọ ka onye na-ekiri mee ọzọ, dị ka \"Bịa leta anyị na Satọdee\"."]],
          slides: [
            { title: "Lelee meter", bullets: ["Uhie n'elu = ụda na-akpatụ", "Olu na-eru ihe dị ka -6", "Egwu dị ala karịa n'okpuru okwu"] },
            { title: "Egwu i nwere ike iji", bullets: ["Egwu nke gị ma ọ bụ ikike e dere ede", "Ọba egwu editor ma ọ bụ platform gị, n'okpuru iwu ya", "Ịkpọ aha naanị abụghị ikike"] },
            { title: "Captions", bullets: ["Ọtụtụ na-ekiri n'enweghị ụda", "Na-enyere ndị ntị chiri ma ọ bụ ndị na-anụchaghị ihe aka", "Gụọ ma dozie caption akpaaka ọ bụla"] },
            { title: "Ederede n'ihuenyo", bullets: ["Aha dị mkpụmkpụ na akara aha", "Kaadị njedebe nwere call to action", "Mkpụrụ akwụkwọ buru ibu, dị mfe, n'ebe dị anya site na nsọtụ"] }
          ],
          sources: [
            { name: "U.S. Copyright Office: Fair use FAQ", url: "https://www.copyright.gov/help/faq/faq-fairuse.html" },
            { name: "YouTube Help: Use music and sound effects from the Audio Library", url: "https://support.google.com/youtube/answer/3376882" }
          ],
          tryIt: "Meghee v2 gị. Lelee meter ma dozie clip ọ bụla na-aghọ uhie. Tinye egwu i nwere ikike iji ma wedata ya n'okpuru okwu. Gbanye captions akpaaka ma dozie mperi ọ bụla. Tinye aha, otu akara aha na kaadị njedebe. Chekwaa ya dị ka v3, wee kirie ya otu ugboro n'enweghị ụda iji lelee na captions na-akọ akụkọ ahụ.",
          youCanNow: "ịhazi ọkwa ụda, tinye egwu n'ụzọ kwesịrị ekwesị ma tinye captions na ederede ndị mmadụ nwere ike ịgụ.",
          quickCheck: [
            { objective: "O4", q: "Audio meter na-aghọ uhie n'elu mgbe onye nkuzi egwuregwu tiri mkpu. Gịnị ka ị ga-eme?", options: ["Bulie ụda clip ahụ", "Hapụ ya; uhie pụtara na ọ dị mma", "Wedata ọkwa clip ahụ ka ọ ghara ịbanye n'uhie", "Hichapụ captions"], answer: 2, why: "Uhie n'elu pụtara clipping; iwedata ọkwa ya na-akwụsị ịkpatụ ahụ." },
            { objective: "O4", q: "Onye ahịa chọrọ egwu a ma ama na mgbasa ozi ha. I nweghị ikike. Gịnị bụ eziokwu?", options: ["Ọ dị mma ma ọ bụrụ na i jiri naanị sekọnd 10", "Ịkpọ aha onye ọbụ abụ na-eme ka ọ bụrụ iwu", "Mgbasa ozi nwere ike iji egwu ọ bụla dị na redio", "Ị chọrọ ikike, ma ọ bụ jiri egwu sitere n'ọba egwu n'okpuru iwu ya"], answer: 3, why: "Ọ dịghị ọnụ ọgụgụ sekọnd dị mma, ịkpọ aha abụghịkwa ikike, ya mere nweta ikike ma ọ bụ jiri egwu ọba egwu nwere ikike." }
          ]
        },
        {
          title: "Mee export, lelee ya ma wuo portfolio gị",
          objectives: ["O5"],
          minutes: 6,
          goal: "Mee export vidiyo e mechara, lelee ya megide brief ma dee ndetu portfolio.",
          text: [
            "Export na-agbanwe project gị ka ọ bụrụ otu faịlụ vidiyo. Maka ọtụtụ ojiji n'ịntanetị, họrọ faịlụ MP4 nwere vidiyo H.264 n'otu ọdịdị, nha na frame rate dị ka project gị. Nye faịlụ ahụ aha doro anya, dị ka \"bakery-promo-v3-9x16.mp4\", ma chekwaa ya na folda exports gị. Na DaVinci Resolve nke a na-eme na peeji a na-akpọ Deliver; editor ndị ọzọ na-eji bọtịnụ dị ka Export ma ọ bụ Save.",
            "Ezipụla faịlụ ị na-ekirighị. Kpọọ faịlụ e mere export site na mmalite ruo njedebe na ngwaọrụ a ga-ekiri ya. Lelee brief: ogologo kwesịrị ekwesị, ọdịdị kwesịrị ekwesị, otu ozi doro anya, ụda dị ọcha, captions na aha ziri ezi. Wee zipu ya, rịọ ka e kwuo uche ha (feedback), ma mee mgbanwe n'ụdị ọhụrụ. Ndị ahịa na-arịọkarị mgbanwe; nke ahụ bụ akụkụ nkịtị nke ọrụ ahụ.",
            "Portfolio gị bụ obere nchịkọta nke ọrụ gị kacha mma. Tinye vidiyo ahụ n'ịntanetị ebe e kwere gị (site n'ikike onye ahịa na onye ọ bụla nọ n'ime ya) ma dee obere ndetu: brief ahụ, ihe i mere, ngwaọrụ i jiri na ihe si na ya pụta. Ndị na-ewe junior editor, ndị enyemaka soshal midia na ndị na-emepụta ọdịnaya n'ọrụ na-arịọkarị ihe atụ dị otu a.",
            "Asambodo (credential) nwere ike inyere aka n'ọdịnihu. Certiport, azụmahịa Pearson VUE, na-enye ule Adobe Certified Professional in Digital Video Using Adobe Premiere. Blackmagic Design na-enye ọzụzụ na ule n'ịntanetị iji bụrụ editor DaVinci Resolve nwere asambodo. Lelee peeji nke ụlọ ọrụ ọ bụla n'onwe ya maka ihe a chọrọ ugbu a na ọnụ ahịa ya. Ihe ọmụmụ a na-akwado gị ịga n'ihu na-amụ ihe; ọ naghị enye asambodo ọ bụla n'ime ha."
          ],
          steps: ["Mee export MP4 (H.264) n'ọdịdị, nha na frame rate nke project.", "Nye faịlụ ahụ aha doro anya ma chekwaa ya na folda exports gị.", "Kirie faịlụ niile na ngwaọrụ a ga-egosi ya.", "Lelee ya megide ahịrị ọ bụla nke brief.", "Zipu ya, nweta feedback ma mee mgbanwe n'ụdị ọhụrụ.", "Dee ndetu portfolio: brief, ọrụ gị, ngwaọrụ, ihe si na ya pụta."],
          words: [["Export", "ịgbanwe edit gị ka ọ bụrụ otu faịlụ vidiyo e mechara."], ["MP4 na H.264", "ụdị faịlụ na ụdị vidiyo a na-ahụkarị nke na-akpọ n'ọtụtụ ekwentị, kọmputa na weebụsaịtị."], ["Portfolio", "obere nchịkọta nke ọrụ gị kacha mma iji gosi ndị were mmadụ n'ọrụ ma ọ bụ ndị ahịa."], ["Revision (mgbanwe)", "mgbanwe onye ahịa rịọrọ mgbe ọ hụrụ otu ụdị."], ["Credential (asambodo)", "ihe akaebe sitere n'aka otu ụlọ ọrụ a ma ama na i gafere ule nka gị."]],
          slides: [
            { title: "Mee export faịlụ ahụ", bullets: ["MP4 nwere H.264 maka ọtụtụ ojiji n'ịntanetị", "Otu ọdịdị, nha na frame rate dị ka project", "Aha doro anya, chekwaa ya na folda exports gị"] },
            { title: "Lelee tupu i zipu", bullets: ["Kirie faịlụ niile na ezi ngwaọrụ ahụ", "Lelee ahịrị ọ bụla nke brief", "Mgbanwe na-aga n'ụdị ọhụrụ"] },
            { title: "Ndetu portfolio gị", bullets: ["Brief ahụ", "Ihe i mere na ngwaọrụ i jiri", "Ihe si na ya pụta; kesaa naanị n'ikike"] },
            { title: "Asambodo ị ga-enyocha n'ọdịnihu", bullets: ["Adobe Certified Professional in Premiere (Certiport)", "Asambodo DaVinci Resolve (Blackmagic Design)", "Lelee peeji ha; ihe ọmụmụ a na-akwado gị naanị"] }
          ],
          sources: [
            { name: "Certiport: Adobe Certified Professional exams", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Certify" },
            { name: "Blackmagic Design: DaVinci Resolve training and certification", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
            { name: "U.S. Bureau of Labor Statistics: Film and Video Editors and Camera Operators", url: "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm" }
          ],
          tryIt: "Ọrụ ikpeazụ: mee export v3 gị dị ka MP4 n'ọdịdị kwesịrị ekwesị, nye ya aha doro anya ma kirie ya na ngwaọrụ a ga-egosi ya. Lelee ya megide brief gị ma dozie ihe ọ bụla na-adabaghị. Wee dee ndetu portfolio gị n'ahịrị anọ: brief ahụ, ihe i mere, ngwaọrụ i jiri na ihe si na ya pụta.",
          youCanNow: "ime export vidiyo e mechara, lelee ya megide brief ma gosi ya dị ka ihe dị na portfolio.",
          quickCheck: [
            { objective: "O5", q: "Kedu aha faịlụ kacha mma maka vidiyo e mechara?", options: ["\"final.mp4\"", "\"bakery-promo-v3-9x16.mp4\"", "\"untitled (2).mp4\"", "\"video.mp4\""], answer: 1, why: "Ọ na-ekwu ọrụ ahụ, ụdị ya na ọdịdị ya, ka onye ọ bụla ghara izipu faịlụ ezighi ezi." },
            { objective: "O5", q: "I mechara export vidiyo ahụ. Gịnị ka ị ga-eme tupu i zipu ya?", options: ["Zipu ya ozugbo iji chekwaa oge", "Hichapụ project iji chekwaa ohere", "Kirie faịlụ niile na ngwaọrụ a ga-egosi ya ma lelee ya megide brief", "Gbanwee frame rate"], answer: 2, why: "Ikiri ezi faịlụ ahụ na-ejide mperi tupu onye ahịa ahụ ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime ka ọ mara mma na inyefe ya",
        questions: [
          { objective: "O3", q: "Gịnị bụ B-roll?", options: ["Clip mbụ na timeline", "Ụdị igwefoto", "Shot ndị ọzọ na-egosi ihe mmadụ na-ekwu maka ya", "Faịlụ egwu"], answer: 2, why: "A na-etinye B-roll n'elu olu iji gosi isiokwu ahụ ma zoo mwụli." },
          { objective: "O3", q: "Ụdị transition ole ka vidiyo ọrụ onye mbido kwesịrị iji ọtụtụ mgbe?", options: ["Otu ma ọ bụ abụọ dị mfe, na cut nkịtị ọtụtụ oge", "Nke dị iche n'etiti clip ọ bụla", "Opekata mpe iri", "Naanị mmetụta spin na wipe"], answer: 0, why: "Ndị ọkachamara na-ejikarị cut nkịtị; ọtụtụ transition na-egbuke egbuke na-adị ka ọrụ onye mbido." },
          { objective: "O4", q: "Gịnị mere ị ga-eji gụọ captions akpaaka tupu i mee export?", options: ["Captions na-eme ka vidiyo ahụ gaa nwayọọ", "Captions na-agbanwe aspect ratio", "Captions akpaaka na-adị mma mgbe niile", "Ha na-emehiekarị aha, ebe na nọmba"], answer: 3, why: "Captions akpaaka na-eme mperi, ya mere ị na-elele ma dozie okwu ọ bụla." },
          { objective: "O4", q: "Ebee ka egwu kwesịrị ịdị mgbe mmadụ na-ekwu okwu?", options: ["Ụda ya dị elu karịa olu", "Ụda ya dị ala karịa olu", "N'elu elu nke meter", "Gbanyụọ ya ma hichapụ ya"], answer: 1, why: "Egwu dị ala n'okpuru okwu na-eme ka okwu ọ bụla doo anya." },
          { objective: "O5", q: "Onye ahịa rịọrọ mgbanwe abụọ mgbe o kirichara v3. Gịnị bụ nzaghachi ọkachamara?", options: ["Mee mgbanwe ndị ahụ n'ụdị ọhụrụ, v4", "Jụ; vidiyo ahụ agwụla", "Hichapụ v3 ma malitegharịa", "Zipu otu faịlụ ahụ ọzọ"], answer: 0, why: "Mgbanwe bụ akụkụ nkịtị nke ọrụ ahụ, ụdị ọhụrụ na-echekwakwa nke ochie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ndozi Vidiyo",
    questions: [
      { objective: "O1", q: "Brief kwuru: \"TikTok nke sekọnd 30 maka ụgbọala nri anyị, a chọrọ ya na Fraịdee.\" Kedu ọdịdị project ahụ?", options: ["16:9 sara mbara", "1:1 square", "9:16 toro ogologo", "4:3"], answer: 2, why: "TikTok na-akpọ toro ogologo n'ekwentị, ya mere 9:16 na-ejupụta ihuenyo." },
      { objective: "O1", q: "Gịnị bụ isi ihe mere a ga-eji mee folda project nwere aha na folda n'ime ya?", options: ["Ka clip na faịlụ ọ bụla dị mfe ịchọta", "Ọ na-eme ka vidiyo kpọọ ọsọ ọsọ", "Editor agaghị emeghe faịlụ na-enweghị ya", "Ọ na-etinye captions n'onwe ya"], answer: 0, why: "Folda a haziri ahazi na-azọpụta oge ma na-egbochi faịlụ furu efu ma ọ bụ nke ezighi ezi." },
      { objective: "O1", q: "Gịnị ka \"1920 x 1080\" na-akọwa?", options: ["Frame rate", "Naanị aspect ratio", "Ogologo na sekọnd", "Resolution, na pixel"], answer: 3, why: "1920 x 1080 bụ obosara na ịdị elu na pixel, nke a na-akpọkarị 1080p." },
      { objective: "O1", q: "Ị chọrọ ise onye egwuregwu dị afọ 15 maka ihe kacha mma otu egwuregwu. Onye ga-ekwerịrị?", options: ["Naanị onye nkuzi egwuregwu", "Onye egwuregwu ahụ na nne, nna ma ọ bụ onye nlekọta", "Ọ dịghị onye, ma ọ bụrụ egwuregwu ọha", "Naanị otu nke ọzọ"], answer: 1, why: "Onye ọ bụla na-erubeghị afọ 18 chọrọ ka nne, nna ma ọ bụ onye nlekọta kwe, tinyere onye egwuregwu ahụ." },
      { objective: "O2", q: "Gịnị ka ngwaọrụ trim na-eme?", options: ["Na-agbanwe agba", "Na-ebepụ mmalite ma ọ bụ njedebe clip", "Na-etinye egwu", "Na-eme export faịlụ"], answer: 1, why: "Trim na-eme ka clip dị mkpụmkpụ site na mmalite ma ọ bụ njedebe ya." },
      { objective: "O2", q: "Gịnị bụ playhead?", options: ["Clip mbụ na project", "Akara (logo) editor", "Audio meter", "Ahịrị dị na timeline na-egosi ebe ị nọ"], answer: 3, why: "Playhead na-egosi oge ị na-ekiri; split na-eme n'ebe ahụ." },
      { objective: "O2", q: "Kedu usoro dabara mgbasa ozi sekọnd 45 maka ụlọ ịkpụ isi?", options: ["Ntutu ọhụrụ a na-emecha, onye na-akpụ isi na-ekwu ihe mere ụlọ ahịa ahụ pụrụ iche, wee bụrụ adreesị na oge mmeghe", "Oge mmeghe, wee bụrụ shot ogologo nke oche tọgbọrọ chakoo, wee bụrụ logo", "Nkeji iri nke ịkpụ isi niile", "Onye na-akpụ isi na-ele igwefoto anya na-echere ịmalite"], answer: 0, why: "Ọ na-adọta uche, na-enye ozi ma na-akwụsị na ihe a ga-eme." },
      { objective: "O2", q: "Kedu nke bụ dead time ị kwesịrị iwepụ?", options: ["Oge onye egwuregwu tinyere goolu", "Onye nwe ya na-akọwa ngwaahịa ya kacha mma", "Nkwụsịtụ ogologo ebe onye na-ekwu okwu na-ekwu \"um\" ma lepụ anya", "Akara ụlọ ahịa na njedebe"], answer: 2, why: "Nkwụsịtụ na ichere na-agbakwunye ogologo n'agbakwunyeghị ihe ọ pụtara." },
      { objective: "O3", q: "Gịnị na-eme n'L-cut?", options: ["Vidiyo ahụ na-aghọ ojii", "Foto na ụda na-akwụsị ha abụọ", "Ụda na-amalite tupu foto", "Foto na-agbanwe mgbe ụda nke shot mbụ ka na-akpọ"], answer: 3, why: "N'L-cut ụda mbụ na-aga n'ihu n'okpuru foto ọhụrụ." },
      { objective: "O3", q: "Kedu shot na-arụ ọrụ dị ka cutaway n'ajụjụ ọnụ onye na-eme achịcha?", options: ["Otu shot ajụjụ ọnụ ahụ ọzọ", "Ihuenyo ojii", "Close-up nke aka ya na-akpụ ntụ ọka", "Shot sitere na vidiyo ọzọ gbasara ụgbọala"], answer: 2, why: "Cutaway na-egosi ihe dị nso na nke metụtara ya, nke na-ezo cut." },
      { objective: "O3", q: "Gịnị mere ị ga-eji gwakọta shot wide, medium na close-up?", options: ["Iji gosi ebe ahụ, ndị mmadụ na obere ihe", "Iji mee ka faịlụ dị obere", "Iji gbanwee frame rate", "Editor chọrọ nha shot atọ"], answer: 0, why: "Nha shot dị iche iche na-enye onye na-ekiri foto zuru oke ma na-eme ka ọ na-adọrọ mmasị." },
      { objective: "O3", q: "Edit gị nwere transition dị iche na-egbuke egbuke n'etiti clip ọ bụla. Gịnị ka ị ga-agbanwe?", options: ["Tinye transition ndị ọzọ", "Jiri cut nkịtị ma debe otu ma ọ bụ abụọ transition dị mfe", "Mee ka transition dị ogologo", "Mee ka vidiyo niile gaa ọsọ ọsọ"], answer: 1, why: "Cut nkịtị na transition ole na ole dị mfe na-adị ka ọrụ ọkachamara." },
      { objective: "O4", q: "Gịnị ka ọ pụtara mgbe audio meter ruru n'elu ma ghọọ uhie?", options: ["Ụda ahụ zuru oke", "Captions gbanyere", "Ụda ahụ dị elu nke ukwuu ma nwee ike ịkpatụ", "Egwu ahụ nwere ikike"], answer: 2, why: "Uhie n'elu bụ clipping, nke na-eme ka ụda kpatụ." },
      { objective: "O4", q: "Kedu egwu ị nwere ike iji na vidiyo onye ahịa?", options: ["Egwu ọ bụla ma ọ bụrụ na ị kpọọ aha", "Egwu sitere na redio ma ọ bụrụ na ọ dị n'okpuru sekọnd 15", "Egwu enyi tinyere n'ịntanetị", "Egwu sitere n'ọba egwu editor gị, na-agbaso iwu ya"], answer: 3, why: "Egwu ọba egwu n'okpuru iwu ya, egwu nke gị ma ọ bụ ikike e dere ede bụ nhọrọ ndị dị mma." },
      { objective: "O4", q: "Gịnị mere ị ga-eji tinye captions na vidiyo ọrụ?", options: ["Ọtụtụ mmadụ na-ekiri n'enweghị ụda, captions na-enyekwa ndị ntị chiri ma ọ bụ ndị na-anụchaghị ihe aka", "Captions na-eme ka faịlụ dị obere", "Captions bụ naanị maka fim", "Platform na-ehichapụ vidiyo na-enweghị captions"], answer: 0, why: "Captions na-eru ọtụtụ ndị na-ekiri ma na-eme ka ozi doo anya n'enweghị ụda." },
      { objective: "O4", q: "Ebee ka ederede n'ihuenyo kwesịrị ịdị na vidiyo ekwentị toro ogologo?", options: ["N'nsọtụ kpọmkwem", "N'ebe dị anya site na nsọtụ, n'mkpụrụ akwụkwọ buru ibu, dị mfe", "Naanị na foto ikpeazụ, dị obere nke ukwuu", "N'okpuru bọtịnụ app ahụ"], answer: 1, why: "App na-etinye bọtịnụ n'akụkụ nsọtụ, ya mere ederede dị ebe ahụ nwere ike ikpuchi." },
      { objective: "O5", q: "Maka ọtụtụ ojiji n'ịntanetị, kedu nhọrọ export dị mma?", options: ["Ụdị faịlụ ọ bụla na nha ọ bụla", "Foto kwụ otu ebe", "MP4 nwere H.264, dabara ọdịdị, nha na frame rate nke project", "Naanị faịlụ project"], answer: 2, why: "MP4 nwere H.264 na-akpọ n'ọtụtụ ekwentị, kọmputa na weebụsaịtị." },
      { objective: "O5", q: "Gịnị na-aba n'obere ndetu portfolio?", options: ["Brief ahụ, ihe i mere, ngwaọrụ i jiri na ihe si na ya pụta", "Adreesị ụlọ gị na nọmba ekwentị gị", "Okwuntughe editor gị", "Naanị nha faịlụ vidiyo ahụ"], answer: 0, why: "Ahịrị anọ ndị ahụ na-egosi onye were mmadụ n'ọrụ ihe ị nwere ike ime." },
      { objective: "O5", q: "Onye na-enye ule Adobe Certified Professional in Digital Video Using Adobe Premiere?", options: ["U.S. Department of Labor", "YouTube", "App ndozi vidiyo ọ bụla", "Certiport, azụmahịa Pearson VUE"], answer: 3, why: "Certiport na-enye ule Adobe Certified Professional; lelee peeji ya maka nkọwa ugbu a." },
      { objective: "O5", q: "Gịnị ka ihe ọmụmụ a na-enye gị?", options: ["Asambodo Adobe", "Asambodo DaVinci Resolve", "Ikike steeti iji dozie vidiyo", "Nkwado na ihe dị na portfolio, ọ bụghị asambodo"], answer: 3, why: "Ihe ọmụmụ a na-akwado gị; asambodo na-esi n'aka Adobe site na Certiport ma ọ bụ n'aka Blackmagic Design." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 8, 11, 12, 13, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ, mee export ụdị ọhụrụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ahaziri ma tọọ ya", objective: "O1", notYet: "Clip gbasasịrị agbasasị ma ọ bụ ọdịdị adabaghị platform ahụ (ogwe ojii ma ọ bụ akụkụ e bepụrụ).", meets: "Folda project nwere aha na folda n'ime ya, mbipụta e chekwara, ọdịdị na frame rate nke project dabakwara brief.", exceeds: "A gbanwere aha clip kacha mma, onye na-amụ ihe nwekwara ike ịkọwa ihe mere o ji họrọ ọdịdị na frame rate ahụ." },
      { name: "Akụkọ na ogologo", objective: "O2", notYet: "Clip anọghị n'usoro, nwere dead time, ma ọ bụ vidiyo ahụ dị anya site n'ogologo a chọrọ.", meets: "Mmalite, etiti na njedebe doro anya; enweghị dead time; n'ime sekọnd 5 nke ogologo a chọrọ.", exceeds: "Sekọnd ole na ole mbụ na-adọta uche, shot ọ bụla kwesịkwara ọnọdụ ya." },
      { name: "Ndozi dị nro", objective: "O3", notYet: "A na-ahụ jump cut ma ọ bụ e jiri ọtụtụ transition na-egbuke egbuke.", meets: "B-roll ma ọ bụ cutaway na-ezo mwụli; ụdị transition anaghị karịa abụọ.", exceeds: "Nwere L-cut ma ọ bụ J-cut dị ọcha na ezigbo ngwakọta shot wide, medium na close-up." },
      { name: "Ụda na captions", objective: "O4", notYet: "Ụda na-akpatụ ma ọ bụ siri ike ịnụ, captions nwere mperi, ma ọ bụ egwu enweghị ikike.", meets: "Olu doro anya, egwu n'okpuru okwu, captions ziri ezi, na naanị egwu onye na-amụ ihe nwere ike iji.", exceeds: "Akara aha na kaadị njedebe doro anya n'ekwentị, a kpọkwara aha ndị egwu ebe ọba egwu chọrọ ya." },
      { name: "Nyefere ma gosi ya", objective: "O5", notYet: "A gụghị faịlụ ahụ aha nke ọma, ọ naghị akpọ, ma ọ bụ ndetu portfolio adịghị.", meets: "MP4 nwere aha doro anya nke na-akpọ na ngwaọrụ a chọrọ, e lelere ya megide brief, nwekwa ndetu portfolio nwere ahịrị anọ.", exceeds: "Onye na-amụ ihe nwetara feedback ma nyefee ụdị e megharịrị emegharị, ndetu ahụ na-ekwukwa ihe gbanwere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere vidiyo e mechara na portfolio ma ọ bụ arịrịọ ọrụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe mechara ọrụ ndozi a kwụrụ ụgwọ ma ọ bụ ọrụ afọ ofufo maka azụmahịa, otu egwuregwu, ụlọ akwụkwọ ma ọ bụ ụlọ ọrụ enyemaka n'ime ụbọchị 90",
      "Ndị na-amụ ihe gara n'ihu n'ihe ọmụmụ ndozi ọzọ ma ọ bụ asambodo dị ka Adobe Certified Professional ma ọ bụ asambodo DaVinci Resolve"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị na-ese vidiyo, na clip mkpụmkpụ 8 ruo 15 onye na-amụ ihe sere n'onwe ya",
      "Editor n'efu: DaVinci Resolve ma ọ bụ Microsoft Clipchamp na kọmputa, ma ọ bụ CapCut ma ọ bụ editor dị n'ime ekwentị",
      "USB drive ma ọ bụ nchekwa cloud maka mbipụta",
      "Earbuds ma ọ bụ headphones iji lelee ụda",
      "Ihe dị ka awa 2 n'ozuzu: nkuzi, nnwale, na oge ndozi maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'ụlọ kọmputa, tupu ihe ọmụmụ amalite, lelee na editor a họọrọ na-awụnye ma na-arụ ọrụ na kọmputa mmemme ahụ; DaVinci Resolve chọrọ kọmputa siri ike karịa editor weebụ dị ka Clipchamp.",
      "Nye ndị na-amụ ihe na-enweghị footage obere brief omume ma kwe ka ha see vidiyo gburugburu ụlọ ahụ, site n'ikike onye ọ bụla a na-ese.",
      "Lelee iwu afọ nke editor ọ bụla maka ndị na-eto eto, ma nweta ikike nne, nna ma ọ bụ onye nlekọta maka onye ọ bụla na-erubeghị afọ 18 pụtara na vidiyo.",
      "Menu na-agbanwekarị: gosi omume ndị ahụ (import, trim, split, unlink audio, captions, export) n'ezie n'editor otu ahụ na-eji.",
      "Mee obere ngosi ebe ndị na-amụ ihe na-egosi vidiyo ha ma na-enye feedback site n'iji ahịrị rubric, otu ahịrị n'otu oge."
    ]
  }
};
