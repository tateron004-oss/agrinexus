"use strict";

// Koach Learn course (Swahili translation of shared/ai-certifications.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Majina ya vyeti, ada na mpangilio vilikaguliwa kwenye kurasa rasmi tarehe 27 Oktoba 2026 (kama katika kozi ya Kiingereza). Vinabadilika: kozi inawaambia wanafunzi wakague tena kabla ya kujisajili.

module.exports = {
  id: "ai-certifications-sw",
  lang: "sw",
  translationOf: "ai-certifications",
  category: "Re-Entry",
  name: "Vyeti vya AI: Kipi Uchukue na Jinsi ya Kujiandaa",
  skills: "Kulinganisha cheti na lengo la kazi, Kusoma ukurasa rasmi wa mtihani, Kulinganisha gharama na muda, Kupata mafunzo ya bure na majaribio ya mazoezi, Kutengeneza mpango wa kusoma, Kujiandaa kwa siku ya mtihani",
  outcome: "kuchagua cheti cha AI kinachofaa lengo halisi la kazi, kusoma ukurasa wake rasmi wa mtihani ili kujua gharama, mpangilio na ujuzi unaopimwa, kutengeneza mpango wa kusoma kwa mafunzo rasmi ya bure, na kujiandaa kwa siku ya mtihani.",
  about: [
    "Vyeti vinawaonyesha waajiri kwamba una ujuzi fulani. Hii inasaidia sana ikiwa una mapengo katika historia yako ya kazi, huna shahada, au una rekodi ya uhalifu. Katika AI, kampuni kubwa za teknolojia na vikundi vya mafunzo sasa vinatoa vyeti vya ngazi ya mwanzo.",
    "Kozi hii ni kwa watu wanaorudi nyumbani kutoka gerezani, wanaotafuta kazi katika programu za ajira, na wanaobadilisha kazi. Haifundishi maudhui ya mtihani wenyewe. Inakufundisha jinsi ya kuchagua cheti sahihi, kuepuka kupoteza pesa, na kujiandaa kwa njia ya busara.",
    "Majina, bei na maelezo ya mitihani yanabadilika mara kwa mara, kwa hiyo utajifunza kukagua ukurasa rasmi kila wakati. Kila somo ni kama dakika tano na lina kazi ya \"Jaribu sasa\". Kuna jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Chagua cheti kimoja cha AI kinachofaa tangazo halisi la kazi unalolipenda. Kutoka ukurasa wake rasmi, andika jina kamili, mtoaji, gharama, urefu na mpangilio wa mtihani, ujuzi unaopimwa, masharti ya kitambulisho na muda kinachodumu. Kisha tengeneza mpango wa kusoma wa wiki nne ukitumia mafunzo rasmi ya bure na angalau jaribio moja la mazoezi, na upange tarehe ya kipindi cha mazoezi au ya mtihani.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi nyumbani kutoka gerezani (kurudi katika jamii) wanaotaka cheti kinachotambulika ili kuwaonyesha waajiri ujuzi mpya, mara nyingi kwa kazi za ofisi, huduma kwa wateja, utawala, IT au cloud.",
    startingPoint: "Baadhi wametumia msaidizi wa AI au wamemaliza kozi fupi mtandaoni; baadhi walipata vyeti wakiwa gerezani. Wengi hawajawahi kuchagua, kulipia au kufanya mtihani unaosimamiwa, na huenda hawana kitambulisho cha picha kilicho halali.",
    gap: "Cheti kinaweza kusaidia kueleza pengo na kuonyesha ujuzi wa sasa, lakini mara nyingi watu wanachagua kisicho sahihi, wanalipia mafunzo wasiyoyahitaji, wanakwama kwenye masharti ya kitambulisho, au wanadanganywa na walaghai wanaouza majibu ya mtihani. Wanafunzi wanahitaji kuchagua cheti kinacholingana na matangazo halisi ya kazi, kupata ukweli kutoka ukurasa rasmi, kusoma kwa mafunzo ya bure na kuwa tayari siku ya mtihani.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; vyeti vya kiufundi vinaelezwa kwa urahisi",
      "Vifaa: huenda wana simu ya kawaida tu au kompyuta ya maktaba yenye muda mfupi; mitihani ya mtandaoni inahitaji kompyuta inayofaa na chumba kimya",
      "Pesa: ada za mitihani zinatofautiana; wanafunzi wanauliza programu za ajira, za kurudi katika jamii au za wanajeshi wastaafu kuhusu msaada kabla ya kulipa",
      "Ukweli wa mitihani unabadilika; ukurasa rasmi wa mtihani ndio chanzo pekee cha kuaminika",
      "Kitambulisho: mara nyingi kinahitajika kitambulisho cha picha cha serikali kilicho halali, chenye jina linalolingana na la usajili"
    ],
    prerequisites: "Hakuna. Kozi \"Utangulizi wa AI na Kujiamini katika Teknolojia\" inawasaidia wanafunzi ambao ni wapya kwa zana za AI."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa maelezo ya cheti", action: "kueleza kama ni cheti cha kumaliza kozi au cheti cha mtihani unaosimamiwa, na kinamwonyesha mwajiri nini", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa vyeti kadhaa vya AI vya ngazi ya mwanzo", action: "kuvilinganisha kwa mtoaji, gharama, muda na ngazi", standard: "ukitaja kipi kinamfaa anayeanza na kipi ni cha kiufundi zaidi" },
    { id: "O3", condition: "Ukipewa matangazo matano halisi ya kazi, bajeti yako na muda wako", action: "kuchagua cheti kimoja na kujua nani anaweza kusaidia kukilipia", standard: "ukiwa na sababu inayotokana na matangazo ya kazi" },
    { id: "O4", condition: "Ukitumia ukurasa rasmi wa mtihani wa cheti", action: "kuandika karatasi ya ukweli ya ukurasa mmoja yenye jina la mtihani, gharama, mpangilio, ujuzi unaopimwa, masharti ya kitambulisho na ya kurudia, na muda kinachodumu", standard: "kila ukweli ukitoka ukurasa rasmi, pamoja na tarehe uliyokagua" },
    { id: "O5", condition: "Ukipewa ujuzi unaopimwa na mafunzo rasmi ya bure", action: "kutengeneza mpango wa kusoma wa wiki nne unaotumia AI kama mwalimu na wenye jaribio la mazoezi", standard: "muda wa kusoma ukilingana na uzito wa kila mada kwenye mtihani" },
    { id: "O6", condition: "Kabla na baada ya mtihani", action: "kujiandaa kwa siku ya mtihani na kuongeza cheti kwenye CV yako", standard: "ukiwa na jina kamili, mtoaji na tarehe" }
  ],
  chapters: [
    {
      name: "Sura 1: Kuchagua cheti sahihi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cheti cha kozi dhidi ya cheti cha mtihani, na kwa nini ni muhimu",
          minutes: 4,
          goal: "Tofautisha cheti cha kumaliza kozi na cheti cha mtihani unaosimamiwa, na ueleze kila kimoja kinamwonyesha mwajiri nini.",
          text: [
            "Cheti cha kumaliza kozi (certificate) kinaonyesha kwamba ulimaliza kozi. Cheti cha mtihani (certification) kwa kawaida kinamaanisha ulifaulu mtihani unaosimamiwa (proctored) unaopima ujuzi wako. Mara nyingi waajiri wanathamini zaidi cheti cha mtihani, lakini cheti kizuri cha kozi bado kinaonyesha juhudi na ujuzi mpya.",
            "Vyeti vya AI vinaanzia ngazi ya mwanzo (\"AI ni nini na ninaitumiaje kazini\") hadi ngazi ya kiufundi (\"kujenga suluhisho za AI kwenye cloud\"). Vya mwanzo vinasaidia katika kazi za ofisi, huduma kwa wateja, mauzo na utawala. Vya kiufundi vinasaidia katika kazi za IT na cloud, na mara nyingi vinahitaji ujuzi wa programu (coding) au wa cloud kwanza.",
            "Cheti si hakikisho la kazi. Kinafanya kazi vizuri zaidi pamoja na CV inayoonyesha jinsi ulivyotumia ujuzi huo, hata katika mradi mdogo. Kiunganishe na mazoezi halisi."
          ],
          words: [["Cheti cha kozi (certificate)", "uthibitisho kwamba ulimaliza kozi au programu."], ["Cheti cha mtihani (certification)", "cheti unachopata kwa kufaulu mtihani unaopima ujuzi wako."], ["Mtihani unaosimamiwa (proctored)", "mtihani unaoangaliwa na mtu au kamera ili kuzuia udanganyifu."], ["Cheti (credential)", "cheti chochote au leseni inayothibitisha ujuzi."]],
          slides: [
            { title: "Cheti cha kozi dhidi ya cheti cha mtihani", bullets: ["Cheti cha kozi: ulimaliza kozi", "Cheti cha mtihani: ulifaulu mtihani unaosimamiwa"] },
            { title: "Ngazi ya mwanzo dhidi ya kiufundi", bullets: ["Mwanzo: kutumia AI kazini", "Kiufundi: kujenga suluhisho za AI; huenda kunahitaji coding"] },
            { title: "Si hakikisho la kazi", bullets: ["Kiunganishe na mazoezi halisi", "Onyesha jinsi ulivyotumia ujuzi huo"] }
          ],
          tryIt: "Andika kazi moja unayoitaka. Kando yake, andika kama cheti cha AI cha ngazi ya mwanzo au cha kiufundi kinafaa zaidi, na kwa nini.",
          youCanNow: "kutofautisha cheti cha kozi na cheti cha mtihani, na kuchagua ngazi sahihi kwa lengo la kazi.",
          quickCheck: [
            { objective: "O1", q: "Cheti cha kumaliza kozi kinaonyesha nini?", options: ["Kwamba ulifaulu mtihani unaosimamiwa", "Kwamba una kazi", "Kwamba una leseni ya serikali", "Kwamba ulimaliza kozi"], answer: 3, why: "Cheti cha kumaliza kozi kinaonyesha kwamba ulimaliza kozi." },
            { objective: "O1", q: "Mwajiri anauliza cheti chako kipya cha AI kinathibitisha nini. Ulifaulu mtihani unaosimamiwa. Unasema nini?", options: ["Hakithibitishi chochote", "Kinaonyesha nilifaulu mtihani unaosimamiwa uliopima ujuzi wangu", "Kinamaanisha nimehakikishiwa kazi", "Kinamaanisha nilitazama video kadhaa"], answer: 1, why: "Cheti cha mtihani kwa kawaida kinamaanisha kufaulu mtihani unaosimamiwa unaopima ujuzi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ziara ya vyeti vya AI vya ngazi ya mwanzo vinavyojulikana",
          minutes: 6,
          goal: "Linganisha vyeti kadhaa vya AI vya ngazi ya mwanzo kwa mtoaji, gharama, muda na ngazi.",
          text: [
            "Hivi vilikaguliwa kwenye kurasa rasmi Oktoba 2026; kagua tena kila wakati kabla ya kulipa. Google AI Essentials ni kozi ya Google kwenye Coursera unayosoma kwa kasi yako mwenyewe, chini ya saa 5, yenye cheti; Marekani na Kanada ni $49 kwa mwezi baada ya majaribio ya bure ya siku 7. Inawafaa watu wanaotaka kutumia zana za AI kazini.",
            "AWS Certified AI Practitioner ni cheti cha msingi cha Amazon Web Services: mtihani wa dakika 90 wenye maswali 65 na ada ya $100. Cheti cha Google Cloud Generative AI Leader hakina masharti ya awali: dakika 90, maswali 50-60, $99, kinadumu miaka 3, na kinafanywa mtandaoni au katika kituo cha mitihani.",
            "Microsoft Certified: Azure AI Fundamentals sasa kinatumia mtihani AI-901, uliosasishwa Aprili 2026. Bei yake inategemea nchi yako, alama ya kufaulu ni 700, na sasa kinatarajia ujuzi kidogo wa Python na Azure, kwa hiyo ni cha kiufundi zaidi kuliko zamani. Microsoft inatoa tathmini ya mazoezi ya bure ukishaingia (sign in)."
          ],
          words: [["Cha msingi (foundational)", "ngazi ya kuingilia katika mfululizo wa vyeti."], ["Sharti la awali (prerequisite)", "kitu unachopaswa kuwa nacho au kukijua kabla ya kuanza."]],
          slides: [
            { title: "Google AI Essentials", bullets: ["Kozi ya Google kwenye Coursera, chini ya saa 5", "Marekani/Kanada: $49/mwezi baada ya majaribio ya siku 7", "Cheti; kutumia AI kazini"] },
            { title: "AWS Certified AI Practitioner", bullets: ["Cheti cha msingi cha AWS", "Dakika 90, maswali 65, $100"] },
            { title: "Google Cloud Generative AI Leader", bullets: ["Hakuna masharti ya awali", "Dakika 90, maswali 50-60, $99", "Kinadumu miaka 3"] },
            { title: "Azure AI Fundamentals (AI-901)", bullets: ["Kilisasishwa Aprili 2026; bei inategemea nchi", "Alama ya kufaulu 700; kinatarajia Python kidogo", "Tathmini ya mazoezi ya bure baada ya kuingia"] }
          ],
          sources: [{ name: "Grow with Google: Google AI Essentials", url: "https://grow.google/ai-essentials/" }, { name: "AWS Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }, { name: "Google Cloud: Generative AI Leader", url: "https://cloud.google.com/learn/certification/generative-ai-leader" }, { name: "Microsoft Learn: Exam AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" }],
          tryIt: "Fungua ukurasa rasmi wa vyeti viwili kati ya hivi. Kwa kila kimoja, andika jina kamili, mtoaji, gharama, urefu na ni cha nani. Andika chochote kilichobadilika tangu kozi hii iandikwe.",
          youCanNow: "kulinganisha vyeti vya AI vya ngazi ya mwanzo kwa kutumia kurasa zao rasmi.",
          quickCheck: [
            { objective: "O2", q: "Ni cheti kipi katika somo ambacho ni kozi ya kusoma kwa kasi yako yenye cheti, badala ya mtihani unaosimamiwa?", options: ["Google AI Essentials", "AWS Certified AI Practitioner", "Google Cloud Generative AI Leader", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 0, why: "Google AI Essentials ni kozi ya kusoma kwa kasi yako kwenye Coursera inayoishia na cheti." },
            { objective: "O2", q: "Wewe ni mpya kabisa kwa AI na unataka kutumia zana za AI katika kazi ya ofisi. Kipi hakikufai kwa sasa?", options: ["Kozi fupi ya AI ya ngazi ya mwanzo", "Google AI Essentials", "Microsoft Azure AI Fundamentals (AI-901), ambacho sasa kinatarajia Python na Azure kidogo", "Mafunzo ya bure ya ngazi ya mwanzo kwanza"], answer: 2, why: "AI-901 sasa kinatarajia ujuzi kidogo wa Python na Azure, kwa hiyo ni cha kiufundi zaidi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kulinganisha cheti na kazi na bajeti",
          minutes: 5,
          goal: "Chagua cheti kimoja ukitumia matangazo halisi ya kazi, bajeti yako na muda wako.",
          text: [
            "Anza na kazi, si na vyeti. Tafuta kazi unazotaka na uhesabu ni vyeti na ujuzi gani vinavyotajwa katika matangazo. Ikiwa matangazo kadhaa yanataja jukwaa moja la cloud, cheti cha jukwaa hilo kinaweza kufaa.",
            "Kisha linganisha gharama ya jumla (ada, ada ya kurudia, mafunzo yoyote), muda wa kujiandaa, na ngazi yako ya sasa. Ikiwa wewe ni mpya kabisa, kozi fupi ya ngazi ya mwanzo kwanza inaweza kukuepushia kupoteza ada ya mtihani usioufaulu.",
            "Tafuta msaada wa kulipa. Programu za ajira, American Job Centers (vituo vya ajira vya Marekani), programu za kurudi katika jamii, mafao ya wanajeshi wastaafu, maktaba na baadhi ya waajiri wanaweza kulipia mafunzo au mitihani; baadhi ya watoaji wana punguzo au msaada wa kifedha. Uliza kabla ya kulipa, na usimlipe kamwe mtu \"anayehakikisha\" utafaulu au anayeuza majibu ya mtihani: huo ni ulaghai na unaweza kufanya cheti chako kifutwe."
          ],
          steps: ["Tafuta matangazo matano ya kazi unazotaka.", "Hesabu ni vyeti na ujuzi gani vinavyotajwa.", "Linganisha gharama ya jumla, muda na ngazi kwa viwili vya juu.", "Uliza programu yako ya ajira au ya kurudi katika jamii kuhusu kukulipia.", "Chagua kimoja."],
          words: [["Ada ya kurudia (retake fee)", "unacholipa ili kufanya mtihani tena usipofaulu."], ["Msaada wa kifedha (financial aid)", "msaada wa kulipia elimu au mafunzo."]],
          slides: [
            { title: "Anza na kazi", bullets: ["Tafuta matangazo matano ya kazi", "Hesabu vyeti vinavyotajwa"] },
            { title: "Linganisha gharama ya jumla", bullets: ["Ada, kurudia, mafunzo", "Muda na ngazi yako ya sasa"] },
            { title: "Pata msaada wa kulipa", bullets: ["Programu za ajira, za kurudi katika jamii, za wanajeshi wastaafu", "Waajiri, maktaba, punguzo la watoaji", "Usilipe kamwe kwa \"kufaulu kwa uhakika\""] }
          ],
          tryIt: "Tafuta matangazo matano ya kazi unazotaka na uorodheshe vyeti vya AI au vya teknolojia vinavyotajwa. Chagua cheti kimoja na uandike gharama yake ya jumla na nani anaweza kusaidia kukilipia.",
          youCanNow: "kuchagua cheti kinachofaa kazi halisi, bajeti yako na muda wako.",
          quickCheck: [
            { objective: "O3", q: "Gharama ya jumla ya cheti inajumuisha nini?", options: ["Ada ya mtihani tu", "Mafunzo tu", "Ada ya mtihani, ada yoyote ya kurudia na mafunzo yoyote", "Hakuna kitu ukifaulu"], answer: 2, why: "Gharama ya jumla inajumuisha ada, kurudia na mafunzo." },
            { objective: "O3", q: "Matangazo matatu kati ya matano ya kazi yanataja jukwaa moja la cloud. Unafikiria nini?", options: ["Cheti cha jukwaa hilo, na kuuliza programu ya ajira kuhusu msaada wa kulipa", "Cheti chochote kutoka tangazo la biashara", "Kununua majibu ya mtihani ili kuokoa muda", "Kuacha vyeti kabisa"], answer: 0, why: "Anza na matangazo ya kazi; jukwaa linalotajwa mara nyingi linaweza kufanya cheti chake kifae." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kuchagua cheti sahihi",
        questions: [
          { objective: "O1", q: "Tofauti kuu kati ya cheti cha kozi na cheti cha mtihani ni ipi?", options: ["Hakuna tofauti", "Cheti cha kozi kina thamani zaidi kila wakati", "Cheti cha mtihani kwa kawaida kinahitaji kufaulu mtihani unaosimamiwa", "Vyeti vya mtihani havina mitihani kamwe"], answer: 2, why: "Vyeti vya mtihani vinapima ujuzi kwa mtihani unaosimamiwa." },
          { objective: "O2", q: "Kwa mujibu wa ukurasa wa AWS, ada ya mtihani wa AWS Certified AI Practitioner ni:", options: ["$100", "$1,000", "Bure", "$10"], answer: 0, why: "AWS inaorodhesha ada ya $100." },
          { objective: "O2", q: "Ukurasa wa cheti kipi unasema sasa kinatarajia ujuzi kidogo wa Python na Azure?", options: ["Google AI Essentials", "Hakuna kimoja chenye ukurasa", "Kadi ya mshughulikiaji wa chakula", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 3, why: "Ukurasa wa AI-901 unataja kuzoea Python na Azure." },
          { objective: "O3", q: "Unapaswa kuanzia wapi unapochagua cheti?", options: ["Kile cha bei ghali zaidi", "Matangazo halisi ya kazi unazotaka", "Chochote anachopendekeza mtu usiyemjua", "Tangazo la biashara la nasibu"], answer: 1, why: "Matangazo ya kazi yanaonyesha waajiri wanataka nini." },
          { objective: "O3", q: "Mtu anajitolea kukuuzia majibu ya mtihani \"yanayohakikisha\" kufaulu. Huu ni:", options: ["Njia fupi ya busara", "Ulaghai unaoweza kufanya cheti chako kifutwe", "Unaruhusiwa", "Mafunzo ya bure"], answer: 1, why: "Kununua majibu ni udanganyifu na mara nyingi ni ulaghai." }
        ]
      }
    },
    {
      name: "Sura 2: Kujiandaa na kufaulu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kusoma ukurasa rasmi wa mtihani",
          minutes: 5,
          goal: "Toa ukweli muhimu kutoka ukurasa rasmi wa mtihani na uuweke kwenye karatasi ya ukweli ya ukurasa mmoja.",
          text: [
            "Ukurasa rasmi wa mtihani ndio chanzo pekee unachopaswa kuamini kwa ukweli kuhusu mtihani. Tafuta: jina kamili na msimbo wa mtihani, bei, urefu na idadi ya maswali, alama ya kufaulu, lugha, jinsi unavyoweza kuufanya (mtandaoni au kituo cha mitihani), ujuzi unaopimwa na uzito wake, na muda cheti kinachodumu.",
            "Orodha ya ujuzi unaopimwa, ambayo wakati mwingine inaitwa mwongozo wa mtihani au mwongozo wa kusoma, ndiyo ramani yako. Ikiwa mada ni 40% ya mtihani, inastahili karibu 40% ya muda wako wa kusoma.",
            "Kagua masharti pia: kitambulisho kinachohitajika (mara nyingi kitambulisho cha picha cha serikali kilicho halali, chenye jina linalolingana na usajili wako), masharti ya chumba kwa mtihani wa mtandaoni, mwisho wa kubadilisha tarehe, na sera za kurudia. Ikiwa suala la kitambulisho chako ni gumu, lishughulikie mapema."
          ],
          steps: ["Fungua ukurasa rasmi wa mtihani wa mtoaji.", "Andika jina, msimbo, bei, urefu, maswali na alama ya kufaulu.", "Nakili ujuzi unaopimwa pamoja na asilimia zake.", "Andika masharti ya kitambulisho, ya kufanya mtihani na ya kurudia.", "Hifadhi kiungo cha ukurasa na tarehe uliyokagua."],
          words: [["Msimbo wa mtihani (exam code)", "kifupi cha jina la mtihani, kama AI-901."], ["Ujuzi unaopimwa (skills measured)", "orodha ya mada ambazo mtihani unapima, mara nyingi na asilimia."], ["Alama ya kufaulu (passing score)", "alama unayohitaji ili kufaulu."]],
          slides: [
            { title: "Amini ukurasa rasmi", bullets: ["Jina, msimbo, bei", "Urefu, maswali, alama ya kufaulu", "Mtandaoni au kituo cha mitihani"] },
            { title: "Ujuzi unaopimwa = ramani yako", bullets: ["Mada na uzito wake", "40% ya mtihani = 40% ya muda wa kusoma"] },
            { title: "Kagua masharti mapema", bullets: ["Kitambulisho cha picha kinacholingana na jina lako", "Masharti ya chumba kwa mtihani wa mtandaoni", "Sera za kubadilisha tarehe na za kurudia"] }
          ],
          tryIt: "Tengeneza karatasi ya ukweli ya ukurasa mmoja kwa cheti ulichochagua kutoka ukurasa wake rasmi, ikiwa na ujuzi unaopimwa na asilimia zake, masharti ya kitambulisho na tarehe uliyokagua.",
          youCanNow: "kusoma ukurasa rasmi wa mtihani na kuugeuza kuwa karatasi ya ukweli.",
          quickCheck: [
            { objective: "O4", q: "Orodha ya ujuzi unaopimwa kwenye ukurasa wa mtihani ni nini?", options: ["Orodha ya vituo vya mitihani", "Ramani yako ya kile mtihani unachopima na uzito wa kila mada", "Orodha ya watu waliofanya mtihani zamani", "Majibu ya mtihani"], answer: 1, why: "Orodha ya ujuzi unaopimwa inaonyesha kila mada na uzito wake kwenye mtihani." },
            { objective: "O4", q: "Kitambulisho chako kina jina la ukoo tofauti na lile utakalojisajili nalo. Unafanya nini?", options: ["Kutumaini hakuna atakayekagua", "Kutumia kitambulisho cha rafiki", "Kupuuza masharti ya kitambulisho", "Kulishughulikia mapema, kwa sababu jina la kitambulisho lazima lilingane na usajili"], answer: 3, why: "Mara nyingi jina la kitambulisho lazima lilingane na usajili, kwa hiyo lirekebishe mapema." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutengeneza mpango wa kusoma kwa mafunzo ya bure na AI",
          minutes: 6,
          goal: "Tengeneza mpango wa kusoma wa wiki nne ukitumia mafunzo rasmi ya bure, AI kama mwalimu na majaribio ya mazoezi.",
          text: [
            "Watoaji wengi wanatoa mafunzo ya bure. Microsoft Learn ina njia za kujifunza za bure na tathmini ya mazoezi ya bure kwa mitihani mingi; AWS Skill Builder na Google pia zinatoa mafunzo ya bure. Anza hapo kabla ya kulipia chochote.",
            "Tumia AI kama mwalimu, si kwa kudanganya. Uliza: \"Eleza [mada kutoka orodha ya ujuzi] kwa maneno rahisi na mfano halisi. Kisha niulize maswali matano ya kuchagua jibu na unieleze makosa yangu.\" Kagua chochote kinachoonekana si sawa dhidi ya mafunzo rasmi, kwa sababu AI inaweza kukosea au kuwa na taarifa za zamani.",
            "Panga wiki nne: wiki 1-3 zinashughulikia mada kwa mpangilio wa uzito wake kwenye mtihani, kidogo kila siku; wiki ya 4 ni ya majaribio ya mazoezi na kurudia maeneo dhaifu. Lenga kupata alama nzuri kwenye jaribio rasmi la mazoezi kabla ya kupanga mtihani halisi."
          ],
          steps: ["Orodhesha ujuzi unaopimwa na uzito wake.", "Tafuta mafunzo rasmi ya bure kwa kila mada.", "Panga dakika 30-60 kwa siku kwa wiki 1-3, mada nzito kwanza.", "Tumia AI kukueleza na kukuuliza maswali; kagua dhidi ya mafunzo rasmi.", "Wiki ya 4: majaribio ya mazoezi na maeneo dhaifu."],
          words: [["Njia ya kujifunza (learning path)", "mfululizo wa masomo kwa mpangilio kuhusu mada moja."], ["Jaribio la mazoezi (practice test)", "mtihani wa mfano unaoonyesha mtihani halisi ulivyo."]],
          slides: [
            { title: "Mafunzo ya bure kwanza", bullets: ["Microsoft Learn, AWS Skill Builder, Google", "Majaribio ya mazoezi ya bure yanapotolewa"] },
            { title: "AI kama mwalimu", bullets: ["Eleza kwa maneno rahisi na mifano", "Niulize maswali na unieleze makosa", "Kagua dhidi ya mafunzo rasmi"] },
            { title: "Mpango wa wiki nne", bullets: ["Wiki 1-3: mada kwa uzito wake", "Wiki ya 4: majaribio ya mazoezi na maeneo dhaifu", "Panga mtihani alama za mazoezi zikiwa nzuri"] }
          ],
          tryIt: "Andika mpango wa kusoma wa wiki nne kwa cheti chako. Kisha mwombe msaidizi wa AI akueleze mada moja kutoka orodha ya ujuzi na akuulize maswali matano.",
          youCanNow: "kutengeneza mpango wa kusoma kwa mafunzo ya bure, AI kama mwalimu na majaribio ya mazoezi.",
          quickCheck: [
            { objective: "O5", q: "Katika mpango wa wiki nne, wiki ya 4 ni ya nini?", options: ["Kujifunza mada mpya kabisa", "Kupumzika", "Kupanga mtihani wa pili", "Majaribio ya mazoezi na kurudia maeneo dhaifu"], answer: 3, why: "Wiki ya 4 ni ya majaribio ya mazoezi na maeneo dhaifu." },
            { objective: "O5", q: "AI inaeleza mada kwa namna moja, lakini mafunzo rasmi yanasema kitu tofauti. Unafanya nini?", options: ["Kuiamini AI", "Kuamini mafunzo rasmi", "Kuruka mada hiyo", "Kuiuliza AI tena hadi ikubali"], answer: 1, why: "AI inaweza kukosea au kuwa na taarifa za zamani; mafunzo rasmi ndio chanzo cha kuaminika." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujiandaa kwa siku ya mtihani na kutumia cheti chako",
          minutes: 5,
          goal: "Jiandae kwa siku ya mtihani na uongeze cheti chako kipya kwenye CV na wasifu wako mtandaoni.",
          text: [
            "Kabla ya siku ya mtihani, jaribu vifaa vyako ikiwa utaufanya mtandaoni: watoaji wengi wana ukaguzi wa mfumo (system check). Safisha meza na chumba chako kama masharti yanavyosema. Kwa kituo cha mitihani, panga njia yako na ufike mapema ukiwa na kitambulisho sahihi.",
            "Wakati wa mtihani: soma kila swali mara mbili, jibu rahisi kwanza, weka alama kwenye magumu na urudi kwao, na usiache swali bila jibu isipokuwa masharti yanasema majibu yasiyo sahihi yanapunguza alama.",
            "Ukifaulu, kiongeze kwenye CV yako chini ya \"Certifications\" (Vyeti) pamoja na jina kamili, mtoaji na tarehe, na uchukue beji yoyote ya kidijitali anayotoa mtoaji ili uishiriki mtandaoni. Usipofaulu, soma ripoti ya alama, soma maeneo dhaifu na utumie sera ya kurudia. Watu wengi wanafaulu katika jaribio la pili."
          ],
          steps: ["Fanya ukaguzi wa mfumo wa mtandaoni au panga njia yako.", "Andaa kitambulisho chako na chumba kama masharti yanavyotaka.", "Kwenye mtihani, soma mara mbili, rahisi kwanza, weka alama kwenye magumu.", "Ukifaulu, kiongeze kwenye CV kwa jina kamili, mtoaji na tarehe.", "Usipofaulu, soma maeneo dhaifu kutoka ripoti ya alama na urudie."],
          words: [["Ukaguzi wa mfumo (system check)", "jaribio la kuhakikisha kompyuta, kamera na intaneti yako vinafanya kazi kwa mtihani wa mtandaoni."], ["Beji ya kidijitali (digital badge)", "picha ya mtandaoni inayothibitisha kwamba ulipata cheti."], ["Ripoti ya alama (score report)", "matokeo yanayoonyesha ulivyofanya katika kila sehemu ya mtihani."]],
          slides: [
            { title: "Kabla ya siku ya mtihani", bullets: ["Mtandaoni: fanya ukaguzi wa mfumo", "Kituo cha mitihani: panga njia, fika mapema", "Kitambulisho sahihi, chumba safi"] },
            { title: "Wakati wa mtihani", bullets: ["Soma kila swali mara mbili", "Rahisi kwanza; weka alama kwenye magumu", "Usiache maswali bila jibu"] },
            { title: "Baada ya mtihani", bullets: ["Umefaulu: kiongeze kwenye CV na uchukue beji", "Bado: soma maeneo dhaifu na urudie"] }
          ],
          tryIt: "Kazi ya mwisho: maliza karatasi yako ya ukweli na mpango wa kusoma wa wiki nne, fanya jaribio moja rasmi la mazoezi au maswali ya AI, na upange tarehe ya kuanza kusoma au ya mtihani. Andika jinsi cheti kitakavyoonekana kwenye CV yako.",
          youCanNow: "kuchagua, kujiandaa kwa na kutumia cheti cha AI kinachofaa lengo lako la kazi.",
          quickCheck: [
            { objective: "O6", q: "Unapaswa kufanya nini kabla ya mtihani unaosimamiwa wa mtandaoni?", options: ["Kufanya ukaguzi wa mfumo wa mtoaji na kuandaa chumba chako", "Kupakua majibu ya mtihani", "Kumwalika rafiki akusaidie", "Kutumia kitambulisho chochote ulicho nacho"], answer: 0, why: "Ukaguzi wa mfumo na chumba kilichoandaliwa kwa masharti vinazuia matatizo siku ya mtihani." },
            { objective: "O6", q: "Umefaulu. Unakiorodheshaje kwenye CV yako?", options: ["\"Kitu fulani cha AI\"", "Nembo ya mtoaji tu", "Chini ya Certifications (Vyeti), pamoja na jina kamili, mtoaji na tarehe", "Usikiweke hadi mtu aulize"], answer: 2, why: "Orodhesha jina kamili, mtoaji na tarehe chini ya Certifications (Vyeti)." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kujiandaa na kufaulu",
        questions: [
          { objective: "O4", q: "Ni chanzo kipi cha kuaminika zaidi kwa bei na mpangilio wa mtihani?", options: ["Chapisho la mitandao ya kijamii", "Jibu la mazungumzo na AI", "Kumbukumbu ya rafiki", "Ukurasa rasmi wa mtihani wa mtoaji"], answer: 3, why: "Kurasa rasmi zina ukweli wa sasa." },
          { objective: "O4", q: "Mada ni 40% ya mtihani. Inapaswa kupata muda gani wa kusoma?", options: ["Karibu 40%", "Hakuna", "5%", "Wote"], answer: 0, why: "Muda wa kusoma unapaswa kufuata uzito wa mtihani." },
          { objective: "O5", q: "Unapaswa kutumiaje AI unaposoma?", options: ["Ikufanyie mtihani", "Kutafuta majibu yaliyovuja", "Kama mwalimu anayekueleza na kukuuliza maswali, ukikagua dhidi ya mafunzo rasmi", "Usiitumie kabisa"], answer: 2, why: "AI inaweza kufundisha, lakini lazima uikague na usidanganye kamwe." },
          { objective: "O6", q: "Unapaswa kufanya nini kabla ya mtihani unaosimamiwa wa mtandaoni?", options: ["Hakuna kitu", "Kualika marafiki wakusaidie", "Kufungua maelezo yako mezani", "Kufanya ukaguzi wa mfumo wa mtoaji"], answer: 3, why: "Ukaguzi wa mfumo unazuia matatizo ya kiufundi." },
          { objective: "O6", q: "Hukufaulu. Hatua bora inayofuata ni ipi?", options: ["Kukata tamaa milele", "Kununua majibu ya mtihani", "Kusoma maeneo dhaifu kutoka ripoti ya alama na kurudia", "Kudanganya kwenye CV yako"], answer: 2, why: "Wengi wanafaulu katika jaribio la pili kwa kusoma kwa makini." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Vyeti vya AI: Kipi Uchukue na Jinsi ya Kujiandaa",
    questions: [
      { objective: "O1", q: "Cheti cha kumaliza kozi kinaonyesha:", options: ["Ulifaulu mtihani unaosimamiwa", "Ulimaliza kozi", "Una leseni ya kufanya kazi ya sheria", "Hakuna kitu"], answer: 1, why: "Vyeti vya kozi vinaonyesha kumaliza kozi." },
      { objective: "O1", q: "Mtihani unaosimamiwa ni:", options: ["Unaoangaliwa na mtu au kamera ili kuzuia udanganyifu", "Jaribio la vitabu wazi pamoja na marafiki", "Utafiti wa maoni", "Usaili wa kazi"], answer: 0, why: "Usimamizi unafanya mtihani uwe wa haki." },
      { objective: "O1", q: "Je, cheti kinahakikisha kazi?", options: ["Ndiyo, kila wakati", "Siku za Jumatatu tu", "Hapana, kiunganishe na mazoezi halisi na CV imara", "Ikiwa tu ni ghali"], answer: 2, why: "Vyeti vinasaidia lakini havihakikishi kazi." },
      { objective: "O2", q: "Kwa mujibu wa ukurasa wa Google, Google AI Essentials inatolewa kwenye jukwaa gani?", options: ["Coursera", "Benki", "Kituo cha televisheni", "Kampuni ya simu"], answer: 0, why: "Google inaitoa kwenye Coursera." },
      { objective: "O2", q: "Kwa mujibu wa Google, kozi ya Google AI Essentials ina urefu gani?", options: ["Miaka minne", "Dakika tano", "Mihula miwili", "Chini ya saa 5"], answer: 3, why: "Google inaiorodhesha kuwa chini ya saa 5, kwa kasi yako mwenyewe." },
      { objective: "O2", q: "Mtihani wa AWS Certified AI Practitioner una urefu gani?", options: ["Siku 3", "Saa 8", "Dakika 10", "Dakika 90"], answer: 3, why: "AWS inaorodhesha dakika 90." },
      { objective: "O2", q: "Cheti cha Google Cloud Generative AI Leader kinaorodhesha masharti gani ya awali?", options: ["Shahada ya sayansi ya kompyuta", "Hakuna", "Miaka mitano ya coding", "Cheti kingine cha Google"], answer: 1, why: "Google haiorodheshi masharti yoyote ya awali." },
      { objective: "O2", q: "Kwa mujibu wa Google Cloud, cheti cha Generative AI Leader kinadumu kwa muda gani?", options: ["Milele", "Mwezi 1", "Miaka 10", "Miaka 3"], answer: 3, why: "Google inaorodhesha muda wa miaka 3." },
      { objective: "O2", q: "Mtihani wa Microsoft Certified: Azure AI Fundamentals sasa ni:", options: ["AI-901", "AZ-104", "Hakuna mtihani", "PMP"], answer: 0, why: "Microsoft inaorodhesha AI-901 kama mtihani unaohitajika." },
      { objective: "O2", q: "Bei ya mtihani wa Azure AI Fundamentals:", options: ["Ni bure kila wakati", "Ni $5 kila mahali", "Inategemea nchi unayoufanyia", "Inalipwa kwa kadi za zawadi"], answer: 2, why: "Microsoft inaweka bei za mitihani kwa nchi au eneo." },
      { objective: "O4", q: "Kwa nini ukague tena kurasa rasmi kabla ya kulipa?", options: ["Kurasa hazibadiliki kamwe", "Kupoteza muda", "Haihitajiki", "Majina, bei na maelezo yanabadilika"], answer: 3, why: "Vyeti vinasasishwa mara kwa mara." },
      { objective: "O3", q: "Unapochagua cheti, anza na:", options: ["Nembo inayong'aa zaidi", "Mtihani mrefu zaidi", "Matangazo ya kazi unazotaka", "Kuchagua bila mpango"], answer: 2, why: "Mahitaji ya waajiri yanaongoza uchaguzi." },
      { objective: "O3", q: "Gharama ya jumla ya cheti inajumuisha:", options: ["Ada ya mtihani tu", "Ada ya mtihani, kurudia na mafunzo", "Hakuna kitu", "Kodi yako ya nyumba"], answer: 1, why: "Panga kwa gharama zote." },
      { objective: "O3", q: "Nani anaweza kusaidia kulipia mafunzo au mitihani?", options: ["Programu za ajira, za kurudi katika jamii au za wanajeshi wastaafu, au mwajiri", "Hakuna mtu kamwe", "Walaghai", "Mtu yeyote anayekupigia simu"], answer: 0, why: "Programu nyingi zinafadhili mafunzo." },
      { objective: "O4", q: "Orodha ya ujuzi unaopimwa ni:", options: ["Orodha ya nafasi za kazi", "Majibu ya mtihani", "Ramani yako ya nini cha kusoma", "Si lazima kuisoma"], answer: 2, why: "Inaonyesha kile mtihani unachopima." },
      { objective: "O4", q: "Ni tatizo gani la kitambulisho unalopaswa kulishughulikia mapema?", options: ["Kuhakikisha kitambulisho chako cha picha kinalingana na jina la usajili", "Rangi unayoipenda", "Kifuniko cha simu yako", "Mtindo wa herufi wa barua pepe yako"], answer: 0, why: "Kutolingana kwa kitambulisho kunaweza kukuzuia kufanya mtihani." },
      { objective: "O5", q: "Unapaswa kutafuta mafunzo wapi kwanza?", options: ["Kambi za mafunzo ghali zisizo rasmi tu", "Tovuti za majibu yaliyovuja", "Popote pale", "Mafunzo rasmi ya bure kutoka kwa mtoaji"], answer: 3, why: "Mafunzo rasmi ya bure yanalingana na mtihani." },
      { objective: "O5", q: "AI inaeleza mada tofauti na mafunzo rasmi. Unapaswa:", options: ["Kuiamini AI", "Kuamini mafunzo rasmi", "Kuruka mada hiyo", "Kumripoti mtoaji"], answer: 1, why: "AI inaweza kukosea au kuwa na taarifa za zamani." },
      { objective: "O6", q: "Wakati wa mtihani, mbinu nzuri ni:", options: ["Kutumia muda wako wote kwenye swali la 1", "Kujibu maswali rahisi kwanza na kuweka alama kwenye magumu", "Kuacha mengi bila jibu", "Kubahatisha bila kusoma"], answer: 1, why: "Hii inatumia muda wako vizuri." },
      { objective: "O6", q: "Baada ya kufaulu, orodhesha cheti kwenye CV yako pamoja na:", options: ["Alama ya kubuni", "\"Mambo ya AI\" tu", "Hakuna kitu", "Jina kamili, mtoaji na tarehe"], answer: 3, why: "Maelezo kamili yanaweza kukaguliwa na ni ya kitaalamu." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      2,
      5,
      9,
      10,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Cheti kinalingana na kazi",
        objective: "O3",
        notYet: "Cheti hakijaunganishwa na tangazo halisi la kazi.",
        meets: "Cheti kimoja kimechaguliwa na kuunganishwa na tangazo halisi la kazi analolitaka mwanafunzi.",
        exceeds: "Alilinganisha machaguo mawili kwa gharama ya jumla, muda na ngazi, na akauliza programu kuhusu msaada wa kulipa."
      },
      {
        name: "Ukweli rasmi",
        objective: "O4",
        notYet: "Ukweli unakosekana au unatoka mahali pengine badala ya ukurasa rasmi.",
        meets: "Jina kamili, mtoaji, gharama, urefu na mpangilio, ujuzi unaopimwa, masharti ya kitambulisho na muda kinachodumu, kutoka ukurasa rasmi.",
        exceeds: "Kina kiungo cha ukurasa, tarehe ya kukagua na sera ya kurudia."
      },
      {
        name: "Mpango wa kusoma wa wiki nne",
        objective: "O5",
        notYet: "Hakuna mpango, au hakuna jaribio la mazoezi.",
        meets: "Wiki nne zinazotumia mafunzo rasmi ya bure, mada nzito kwanza, pamoja na angalau jaribio moja la mazoezi.",
        exceeds: "Kina maombi (prompts) ya kutumia AI kama mwalimu na ukaguzi dhidi ya mafunzo rasmi."
      },
      {
        name: "Mtihani umepangwa na yuko tayari",
        objective: "O6",
        notYet: "Hakuna kipindi cha mazoezi wala tarehe ya mtihani.",
        meets: "Kipindi cha mazoezi au tarehe ya mtihani imepangwa na mahitaji ya kitambulisho yanajulikana.",
        exceeds: "Ukaguzi wa mfumo umefanywa au njia imepangwa, na kuna maelezo ya jinsi cheti kitakavyoandikwa kwenye CV."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofanya jaribio la mazoezi au kupanga mtihani ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaopata cheti ndani ya siku 90, na wangapi walipata msaada wa kukilipia",
      "Wanafunzi wanaoongeza cheti kwenye CV na kuomba kazi inayokitaja"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti; kompyuta inayofaa na chumba kimya kwa mitihani ya mtandaoni",
      "Mafunzo rasmi ya bure (kama Microsoft Learn, AWS Skill Builder au mafunzo ya bure ya Google)",
      "Msaidizi wa AI wa bure kwa kufundisha na kuuliza maswali",
      "Karatasi na kalamu, au hati, kwa karatasi ya ukweli na mpango wa kusoma",
      "Kama dakika 60 kwa masomo na majaribio, pamoja na wiki nne za kusoma"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja, kisha fanyeni sura moja kwa kila kipindi; fungueni ukurasa mmoja rasmi wa mtihani pamoja kwenye skrini ya pamoja.",
      "Wakumbushe wanafunzi kwamba bei na maelezo ya mitihani katika masomo yanaweza kubadilika; kagueni tena ukurasa rasmi kila wakati kabla ya kulipa.",
      "Wasaidie wanafunzi kukagua mapema kama kitambulisho chao cha picha kinakidhi masharti ya mtihani, na uwaunganishe na msaada wa kitambulisho ikihitajika.",
      "Waunganishe wanafunzi na American Job Centers, programu za ajira au za kurudi katika jamii zinazoweza kulipa ada za mitihani; waonye dhidi ya mtu yeyote anayeuza majibu ya mtihani.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
