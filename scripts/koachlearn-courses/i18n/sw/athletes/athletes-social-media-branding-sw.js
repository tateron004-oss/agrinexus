"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-social-media-branding.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-social-media-branding-sw",
  lang: "sw",
  translationOf: "athletes-social-media-branding",
  category: "Athletes",
  name: "Kujenga Chapa ya Mwanamichezo kwenye Mitandao ya Kijamii",
  skills: "Kueleza chapa yako ya mwanamichezo, Kuandika maelezo mafupi (bio) yenye nguvu, Kuchagua nguzo za maudhui, Kukagua machapisho yako ya zamani, Kuweka mipangilio ya faragha na usalama",
  outcome: "kuandaa au kusafisha wasifu mmoja wa mtandao wa kijamii uwe chapa ya mwanamichezo iliyo wazi na salama: sentensi ya chapa, bio yenye nguvu na picha ya wasifu, nguzo tatu za maudhui, ukaguzi wa machapisho yako ya zamani, na mipangilio salama ya faragha.",
  about: [
    "Kozi hii ni kwa wanamichezo wanaojua kwamba makocha, mawakala wa usajili, kampuni za chapa na waajiri wa baadaye wanaangalia mitandao yao ya kijamii, na wanataka iwasaidie, si iwadhuru. Makocha wanaweza kuitumia kufundisha timu zao.",
    "Chapa yako ni kile watu wanachofikiria wanapoona jina lako. Utaamua unataka iwe nini, utajenga wasifu unaoionyesha, utachagua mambo ya kuchapisha, utasafisha machapisho yako ya zamani, na utalinda usalama wako.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jenga chapa ya wasifu mmoja wa mtandao wa kijamii: andika sentensi yako ya chapa, sasisha bio yako na picha ya wasifu, andika nguzo tatu za maudhui zenye mawazo mawili ya machapisho kila moja, kagua machapisho yako 30 ya mwisho na urekebishe chochote kisichoendana na chapa yako, na ukague mipangilio yako ya faragha na usalama.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, wa chuo na wa klabu wanaojua kwamba makocha, mawakala wa usajili, kampuni za chapa na waajiri wa baadaye wanaangalia mitandao yao ya kijamii, na makocha wanaofundisha timu zao kuhusu jambo hili.",
    startingPoint: "Wana akaunti moja au zaidi za mitandao ya kijamii na wanachapisha mara kwa mara. Wachache wana sentensi ya chapa iliyoandikwa, bio iliyopangwa, nguzo za maudhui, ukaguzi wa karibuni wa machapisho ya zamani, au mipangilio ya faragha waliyoichagua kwa makusudi.",
    gap: "Machapisho ya zamani, wasifu usio wazi na mipangilio iliyo wazi kwa kila mtu vinaweza kuwakosesha wanamichezo nafasi za usajili, udhamini na kazi, na kuwaweka wazi kwa watu wasiowajua na kwa ulaghai. Chapa iliyo wazi na salama inawasaidia kuonekana kwa sababu nzuri na kubaki salama.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Simu yenye apps za mitandao ya kijamii za mwanamichezo na msaidizi wa AI wa bure",
      "Kama dakika 60 kwa jumla",
      "Masharti ya umri ya kila app; wanamichezo walio chini ya miaka 18 wanamhusisha mzazi au mlezi kabla ya kutaja shule au mji",
      "Kanuni za timu, shule, ligi, NIL na za FTC kuhusu kutaja malipo; menyu za mipangilio zinatofautiana kati ya apps"
    ],
    prerequisites: "Hakuna."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa mchezo wako, maadili yako na mambo unayopenda", action: "kuandika sentensi moja ya chapa", standard: "ukitaja mchezo na nafasi yako, thamani moja na jambo moja la kweli nje ya michezo" },
    { id: "O2", condition: "Kwenye wasifu mmoja wa mtandao wa kijamii", action: "kuandika bio fupi na kuchagua picha ya wasifu zinazoendana na chapa yako", standard: "zikiwa na mchezo, nafasi, thamani moja na kiungo kimoja, picha iliyo wazi yenye mwanga mzuri, bila taarifa binafsi" },
    { id: "O3", condition: "Ukitumia sentensi yako ya chapa na msaidizi wa AI", action: "kuchagua nguzo tatu za maudhui zenye mawazo mawili ya machapisho kila moja", standard: "kila nguzo na kila wazo likiendana na sentensi yako ya chapa" },
    { id: "O4", condition: "Kwenye wasifu wako mwenyewe", action: "kukagua machapisho, maoni, machapisho uliyoshiriki tena na picha ulizotajwa 30 za mwisho kwa jaribio la kocha, mdhamini na bibi au babu", standard: "ukihifadhi pembeni, ukificha, ukifuta au ukiondoa utambulisho wako kwenye kila kitu kinachoshindwa jaribio" },
    { id: "O5", condition: "Kwenye mipangilio ya kila app", action: "kuweka nani anaweza kukutumia ujumbe, kutoa maoni na kukutaja, kuzima mahali kwenye machapisho na kuwasha uthibitishaji wa hatua mbili", standard: "kila mpangilio ukiwa umekaguliwa, pamoja na mpango wa kuhifadhi ushahidi, kuzuia, kuripoti na kumwambia mtu mzima ukitishiwa" },
    { id: "O6", condition: "Ukitumia kanuni za timu yako", action: "kuandika kanuni zako binafsi za kuchapisha, pamoja na jinsi unavyotaja mikataba ya chapa na kushughulikia maoni mabaya", standard: "zikiwa na kanuni tatu za \"Mimi huwa\", tatu za \"Mimi kamwe\" na kanuni ya kutaja malipo na kukagua NIL" }
  ],
  chapters: [
    {
      name: "Sura 1: Kueleza chapa yako",
      lessons: [
        {
          objectives: ["O1"],
          title: "Chapa ya mwanamichezo ni nini",
          minutes: 4,
          goal: "Andika sentensi moja ya chapa.",
          text: [
            "Chapa ni picha ambayo watu wanakuwa nayo akilini wanaposikia jina lako. Tayari unayo, uwe uliipanga au hukuipanga. Makocha, kampuni za chapa na mashabiki wanaijenga kutokana na machapisho yako, maoni yako na jinsi unavyojiendesha.",
            "Chapa yako ni zaidi ya mchezo wako. Ni mchezo wako, pamoja na maadili yako, pamoja na kile kinachokufanya uwe wewe: \"Mchezaji wa kuongoza mpira (point guard) anayefanya kazi kwa bidii, anayependa kufundisha watoto wadogo na anataka kusomea uuguzi.\"",
            "Andika sentensi ya chapa: \"Mimi ni [mchezo na nafasi] ninaye[kile unachothamini au kufanya] na [jambo jingine la kweli kuhusu wewe].\" Tumia msaidizi wa AI kupendekeza maneno, lakini chagua maneno ya kweli."
          ],
          steps: ["Andika mchezo na nafasi yako.", "Andika maadili matatu (kama bidii, imani, familia, uongozi).", "Andika jambo moja unalopenda nje ya michezo.", "Andika sentensi moja ya chapa."],
          words: [["Chapa", "picha ambayo watu wanakuwa nayo akilini wanaposikia jina lako."], ["Maadili", "mambo yaliyo muhimu zaidi kwako na yanayoongoza jinsi unavyojiendesha."]],
          slides: [
            { title: "Tayari una chapa", bullets: ["Imejengwa kwa machapisho, maoni na matendo", "Inaonwa na makocha, kampuni za chapa, mashabiki"] },
            { title: "Chapa = ", bullets: ["Mchezo wako", "Pamoja na maadili yako", "Pamoja na kile kinachokufanya uwe wewe"] },
            { title: "Sentensi ya chapa", bullets: ["\"Mimi ni [mchezo/nafasi] ninaye[thamini]", "na [jambo la kweli kuhusu wewe].\""] }
          ],
          tryIt: "Andika sentensi yako ya chapa. Mwombe msaidizi wa AI njia nyingine tatu za kuiandika, kisha chagua au changanya ile inayosikika zaidi kama wewe.",
          youCanNow: "kueleza chapa yako ya mwanamichezo kwa sentensi moja ya kweli.",
          quickCheck: [
            { objective: "O1", q: "Je, una chapa hata kama hukuwahi kuipanga?", options: ["Hapana, wachezaji wa kulipwa tu ndio wana chapa", "Tu kama una wafuasi 10,000", "Ndiyo, watu wanaijenga kutokana na machapisho, maoni na matendo yako", "Tu kama kampuni inakudhamini"], answer: 2, why: "Tayari una chapa, uwe uliipanga au hukuipanga." },
            { objective: "O1", q: "AI inapendekeza sentensi ya chapa inayokuita \"mfungaji bora wa jimbo\", jambo ambalo si kweli. Unafanya nini?", options: ["Kuitumia; inasikika vizuri", "Kuibadilisha iwe maneno ya kweli kuhusu wewe", "Kuichapisha uone nani atagundua", "Kuiomba AI iikuze zaidi"], answer: 1, why: "Chagua maneno ya kweli." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Picha ya wasifu, jina na bio",
          minutes: 5,
          goal: "Andika bio iliyo wazi na uchague picha ya wasifu zinazoendana na chapa yako.",
          text: [
            "Wasifu wako ni mlango wako wa mbele. Kwa sekunde chache, watu wanapaswa kujua wewe ni nani, unacheza nini, na kwa nini wakufuate.",
            "Tumia picha iliyo wazi yenye mwanga mzuri ya uso wako au yako ukicheza. Tumia jina ambalo watu wanaweza kulitafuta na kulipata. Bio yenye nguvu ni fupi: mchezo na nafasi, kiwango au timu (kama inaruhusiwa), thamani moja au jambo unalopenda, na kiungo kimoja au mwaliko wa kuchukua hatua, kama video ya matukio yako bora.",
            "Usiweke anwani ya nyumbani, namba ya simu, ratiba ya masomo wala mahali hasa pa shule yako kwenye bio. Kama uko chini ya miaka 18, mwulize mzazi au mlezi kabla ya kutaja shule au mji wako."
          ],
          steps: ["Chagua picha iliyo wazi yenye mwanga mzuri.", "Tumia jina linaloweza kutafutwa.", "Andika mchezo, nafasi na kiwango.", "Ongeza thamani moja au jambo unalopenda.", "Ongeza kiungo kimoja au mwaliko wa kuchukua hatua.", "Ondoa taarifa binafsi."],
          words: [["Bio", "maelezo mafupi juu ya wasifu wako."], ["Handle", "jina lako la mtumiaji lenye @ kwenye app ya kijamii."]],
          slides: [
            { title: "Mlango wako wa mbele", bullets: ["Wewe ni nani?", "Unacheza nini?", "Kwa nini wakufuate?"] },
            { title: "Bio yenye nguvu", bullets: ["Mchezo, nafasi, kiwango", "Thamani moja au jambo unalopenda", "Kiungo kimoja: matukio bora au mawasiliano"] },
            { title: "Usiweke kwenye bio", bullets: ["Anwani ya nyumbani au namba ya simu", "Ratiba ya masomo", "Walio chini ya 18: muulize mzazi kuhusu shule au mji"] }
          ],
          tryIt: "Mwombe msaidizi wa AI machaguo matano ya bio kwa kutumia sentensi yako ya chapa, chini ya kikomo cha herufi cha app. Chagua moja, ihariri, na usasishe wasifu wako.",
          youCanNow: "kuandika bio iliyo wazi na kuchagua picha ya wasifu zinazoendana na chapa yako.",
          quickCheck: [
            { objective: "O2", q: "Watu wanapaswa kujifunza nini kutoka kwenye wasifu wako kwa sekunde chache?", options: ["Wewe ni nani, unacheza nini na kwa nini wakufuate", "Anwani yako ya nyumbani", "Ratiba yako ya masomo", "Kila timu uliyowahi kuchezea"], answer: 0, why: "Wasifu wako ni mlango wako wa mbele na unapaswa kuonyesha mambo hayo matatu wazi." },
            { objective: "O2", q: "Una miaka 15 na unataka kuongeza mji na shule yako kwenye bio. Unafanya nini?", options: ["Kuviongeza mara moja", "Kuongeza na anwani yako pia", "Kuongeza namba yako ya simu badala yake", "Kumwuliza mzazi au mlezi kwanza"], answer: 3, why: "Walio chini ya miaka 18 wanapaswa kumwuliza mzazi au mlezi kabla ya kutaja shule au mji." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kuchagua nguzo zako za maudhui",
          minutes: 5,
          goal: "Chagua nguzo tatu za maudhui na mawazo mawili ya machapisho kwa kila moja.",
          text: [
            "Nguzo za maudhui ni mada kuu tatu au nne unazochapisha kuzihusu. Zinaweka ukurasa wako ukilenga jambo moja, ili watu wajue cha kutarajia.",
            "Nguzo za mwanamichezo zinaweza kuwa: Mazoezi (mazoezi ya mwili, vipande vya video vya mazoezi), Siku ya mechi (matukio bora, nyakati za timu), Nje ya uwanja (shule, imani, familia, mambo unayopenda, huduma kwa jamii), na Mafunzo (unachojifunza). Chagua zile zinazoendana na sentensi yako ya chapa.",
            "Msaidizi wa AI ni mzuri kwa kutoa mawazo ya machapisho kwa kila nguzo. Omba kumi, kisha baki na yale ambayo kweli ungeyachapisha."
          ],
          steps: ["Soma sentensi yako ya chapa.", "Chagua nguzo tatu zinazoendana nayo.", "Iombe AI mawazo kumi kwa kila nguzo.", "Baki na mawili kwa kila nguzo ambayo kweli utayachapisha."],
          words: [["Nguzo ya maudhui", "moja ya mada kuu chache unazochapisha kuzihusu mara kwa mara."], ["Ukurasa (feed)", "mfululizo wa machapisho kwenye wasifu wako."]],
          slides: [
            { title: "Nguzo za maudhui", bullets: ["Mada kuu 3-4", "Zinaweka ukurasa wako ukilenga jambo moja"] },
            { title: "Nguzo za mwanamichezo", bullets: ["Mazoezi", "Siku ya mechi", "Nje ya uwanja", "Mafunzo"] },
            { title: "Tumia AI kutoa mawazo", bullets: ["Omba mawazo kumi kwa kila nguzo", "Baki na yale ambayo kweli ungeyachapisha"] }
          ],
          tryIt: "Andika nguzo zako tatu za maudhui. Tumia msaidizi wa AI kutoa mawazo na ubaki na mawazo mawili halisi ya machapisho kwa kila nguzo.",
          youCanNow: "kuchagua nguzo za maudhui zinazoendana na chapa yako na kupanga machapisho kwa ajili yake.",
          quickCheck: [
            { objective: "O3", q: "Kwa nini utumie nguzo za maudhui?", options: ["Kuchapisha mara nyingi iwezekanavyo", "Kuweka ukurasa wako ukilenga jambo moja ili watu wajue cha kutarajia", "Kuficha machapisho yako", "Kupata bidhaa za bure"], answer: 1, why: "Nguzo zinaweka ukurasa wako ukilenga mada kuu chache." },
            { objective: "O3", q: "Sentensi yako ya chapa inataja imani na huduma kwa jamii. Nguzo ipi inafaa zaidi?", options: ["Kuwatukana wapinzani", "Vichekesho visivyo na mpangilio", "Nje ya uwanja: imani na huduma kwa jamii", "Matukio bora ya timu nyingine"], answer: 2, why: "Chagua nguzo zinazoendana na sentensi yako ya chapa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kueleza chapa yako",
        questions: [
          { objective: "O1", q: "Chapa yako ya mwanamichezo ni nini?", options: ["Namba ya jezi yako", "Mdhamini wa viatu vyako", "Picha ambayo watu wanakuwa nayo akilini wanaposikia jina lako", "Idadi ya wafuasi wako"], answer: 2, why: "Chapa yako ni jinsi watu wanavyokuona." },
          { objective: "O1", q: "Ipi ni sentensi ya chapa?", options: ["\"Mimi ni mchezaji wa kuongoza mpira mwenye bidii, ninayependa kufundisha watoto na nataka kusomea uuguzi.\"", "\"Nifuate\"", "\"Bora kuliko wote\"", "\"Sina la kusema\""], answer: 0, why: "Inataja mchezo wako, maadili yako na jambo la kweli kuhusu wewe." },
          { objective: "O2", q: "Kipi kinafaa kuwa kwenye bio yenye nguvu?", options: ["Anwani yako ya nyumbani", "Ratiba yako ya masomo", "Namba yako ya simu", "Mchezo, nafasi na kiungo cha matukio bora"], answer: 3, why: "Bio inaonyesha wewe ni nani bila taarifa binafsi." },
          { objective: "O3", q: "Nguzo za maudhui ni nini?", options: ["Nguzo za uwanja", "Mada kuu 3-4 unazochapisha kuzihusu", "Hashtag", "Wafuasi"], answer: 1, why: "Nguzo zinaweka ukurasa wako ukilenga jambo moja." },
          { objective: "O3", q: "AI inakupa mawazo kumi ya machapisho. Unafanya nini?", options: ["Kuyachapisha yote kumi leo", "Kubaki na yale ambayo kweli ungeyachapisha", "Kuyapuuza yote", "Kunakili machapisho ya mwanamichezo mwingine"], answer: 1, why: "Chapisha tu kinachoendana na wewe na chapa yako." }
        ]
      }
    },
    {
      name: "Sura 2: Kulinda chapa yako",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kukagua machapisho yako ya zamani",
          minutes: 5,
          goal: "Pitia machapisho yako ya zamani na urekebishe chochote kinachodhuru chapa yako.",
          text: [
            "Makocha, maafisa wa udahili, kampuni za chapa na waajiri mara nyingi hupitia machapisho ya zamani. Utani mmoja wa zamani, maoni mabaya au video moja uliyoshiriki tena inaweza kukukosesha nafasi.",
            "Fanya ukaguzi: pitia machapisho yako 30 ya mwisho, maoni, machapisho uliyoshiriki tena na picha ulizotajwa. Kwa kila kimoja, jiulize: Je, ningekuwa sawa kama kocha, mdhamini au bibi au babu yangu angeona hiki? Je, kinaendana na chapa yangu? Kama sivyo, kihifadhi pembeni (archive), kifiche au kifute, na ujiondoe kwenye utambulisho (untag) pale unapoweza.",
            "Kumbuka kwamba picha za skrini (screenshots) zinadumu milele. Kinga bora ni kuchapisha kwa uangalifu kuanzia sasa: fikiri kabla ya kuchapisha, hasa ukiwa na hasira baada ya kushindwa."
          ],
          steps: ["Pitia machapisho, maoni, uliyoshiriki tena na utambulisho 30 ya mwisho.", "Tumia jaribio la kocha, mdhamini na bibi au babu.", "Hifadhi pembeni, ficha au futa kinachoshindwa.", "Jiondoe kwenye utambulisho pale inapohitajika.", "Weka kanuni: hakuna kuchapisha ukiwa na hasira."],
          words: [["Ukaguzi", "kuangalia kila kitu kwa makini, ili kupata na kurekebisha matatizo."], ["Kuhifadhi pembeni (archive)", "kuficha chapisho kwenye wasifu wako bila kulifuta."]],
          slides: [
            { title: "Watu hupitia ya zamani", bullets: ["Makocha, udahili, kampuni za chapa, waajiri", "Chapisho moja la zamani linaweza kukukosesha nafasi"] },
            { title: "Ukaguzi", bullets: ["Machapisho, maoni, uliyoshiriki tena, utambulisho 30 ya mwisho", "Jaribio la kocha, mdhamini na bibi au babu", "Hifadhi pembeni, ficha, futa au jiondoe"] },
            { title: "Kuanzia sasa", bullets: ["Picha za skrini zinadumu milele", "Hakuna kuchapisha ukiwa na hasira"] }
          ],
          tryIt: "Kagua machapisho yako 30 ya mwisho na picha ulizotajwa. Andika ngapi ulibaki nazo, ngapi ulihifadhi pembeni na ngapi ulifuta.",
          youCanNow: "kukagua mitandao yako ya kijamii na kuondoa machapisho yanayodhuru chapa yako.",
          quickCheck: [
            { objective: "O4", q: "Ukaguzi wako unapaswa kujumuisha nini zaidi ya machapisho yako mwenyewe?", options: ["Maoni, machapisho uliyoshiriki tena na picha ulizotajwa", "Picha yako ya wasifu tu", "Akaunti za wachezaji wenzako", "Jumbe zako binafsi kwa familia"], answer: 0, why: "Ukaguzi unahusu machapisho, maoni, uliyoshiriki tena na utambulisho." },
            { objective: "O4", q: "Video mbaya ya zamani uliyoshiriki tena inashindwa jaribio la bibi au babu. Unafanya nini?", options: ["Kuiacha; ni ya zamani", "Kuishiriki tena", "Kuihifadhi pembeni, kuificha au kuifuta", "Kutoa maoni kuieleza"], answer: 2, why: "Hifadhi pembeni, ficha au futa kinachoshindwa jaribio." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mipangilio ya faragha na usalama",
          minutes: 5,
          goal: "Weka akaunti zako ili wewe ndiye uamue nani anakuona na kuwasiliana nawe.",
          text: [
            "Kuwa wazi kwa umma kunakusaidia kuonekana, lakini pia kunawaruhusu watu usiowajua wakupate. Wanamichezo wengi wana akaunti moja ya umma ya mwanamichezo na akaunti moja binafsi iliyofungwa.",
            "Kagua mipangilio yako kwenye kila app: nani anaweza kukutumia ujumbe, nani anaweza kutoa maoni, nani anaweza kukutaja, kama mahali ulipo kunaongezwa kwenye machapisho, na uthibitishaji wa hatua mbili wa kulinda kuingia kwako. Menyu za mipangilio hubadilika, kwa hiyo tafuta faragha (privacy), usalama (security) na ujumbe (messaging) kwenye mipangilio ya app.",
            "Usichapishe kamwe mahali ulipo sasa hivi, mipango yako ya safari wakati inapotokea, nyumbani kwako wala ratiba yako ya kila siku. Kuwa makini na jumbe binafsi kutoka kwa watu usiowajua, pamoja na mawakala wa usajili bandia na kampuni za chapa bandia. Mtu akikutishia au akiomba picha za faragha, usijibu; hifadhi ushahidi, mzuie, ripoti, na umwambie mtu mzima unayemwamini au kocha wako."
          ],
          steps: ["Amua: akaunti ya umma ya mwanamichezo na akaunti binafsi iliyofungwa?", "Weka mipaka ya nani anaweza kukutumia ujumbe, kutoa maoni na kukutaja.", "Zima mahali kwenye machapisho.", "Washa uthibitishaji wa hatua mbili.", "Jua jinsi ya kuzuia na kuripoti."],
          words: [["Uthibitishaji wa hatua mbili", "ukaguzi wa pili, kama msimbo, unapoingia, ili wengine wasiweze kuingia kwa nywila yako tu."], ["Ujumbe binafsi (DM)", "ujumbe wa faragha unaotumwa kwenye app ya kijamii."]],
          slides: [
            { title: "Ya umma au binafsi", bullets: ["Akaunti ya umma ya mwanamichezo ili uonekane", "Akaunti binafsi iliyofungwa kwa marafiki"] },
            { title: "Kagua mipangilio hii", bullets: ["Nani anaweza kutuma ujumbe, kutoa maoni, kukutaja", "Mahali kwenye machapisho: zima", "Uthibitishaji wa hatua mbili: washa"] },
            { title: "Baki salama", bullets: ["Usiweke mahali ulipo sasa wala ratiba yako", "Kuwa makini na DM za watu usiowajua", "Vitisho: hifadhi ushahidi, zuia, ripoti, mwambie mtu mzima"] }
          ],
          tryIt: "Fungua mipangilio ya akaunti moja. Weka mipaka ya nani anaweza kukutumia ujumbe na kukutaja, zima mahali kwenye machapisho, na uwashe uthibitishaji wa hatua mbili.",
          youCanNow: "kuweka akaunti zako ili wewe ndiye uamue nani anakuona na kuwasiliana nawe.",
          quickCheck: [
            { objective: "O5", q: "Uthibitishaji wa hatua mbili unalinda nini?", options: ["Idadi ya wafuasi wako", "Kuingia kwenye akaunti yako", "Ubora wa picha zako", "Mahali ulipo"], answer: 1, why: "Uthibitishaji wa hatua mbili unaongeza ukaguzi wa pili kulinda kuingia kwako." },
            { objective: "O5", q: "Mtu usiyemjua anayesema ni wakala wa usajili anaendelea kukutumia ujumbe na anaomba picha za faragha. Unafanya nini?", options: ["Kumjibu kwa adabu", "Kumtumia picha ili afurahi", "Kumwomba ushahidi kwanza", "Kutojibu; kuhifadhi ushahidi, kumzuia, kuripoti na kumwambia mtu mzima unayemwamini"], answer: 3, why: "Usijibu kamwe vitisho au maombi ya picha za faragha; hifadhi ushahidi na upate msaada." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kubaki ndani ya chapa yako: kanuni, kampuni za chapa na busara",
          minutes: 5,
          goal: "Andika kanuni zako binafsi za kuchapisha, pamoja na jinsi ya kushughulikia machapisho yaliyodhaminiwa.",
          text: [
            "Timu yako, shule au ligi inaweza kuwa na kanuni za mitandao ya kijamii, hasa kuhusu habari za timu, majeraha, usajili na wapinzani. Mwombe kocha wako kanuni hizo na uzifuate.",
            "Chapa yako inapokua, kampuni zinaweza kukupa bidhaa za bure au pesa ili uchapishe kuzihusu. FTC (Tume ya Biashara ya Shirikisho ya Marekani) inasema lazima utaje wazi, ndani ya chapisho lenyewe, mkataba wowote wa malipo au bidhaa ya bure. Wanamichezo wa chuo wanaweza pia kuwa na kanuni za kuripoti NIL, na kanuni za sekondari zinatofautiana kati ya majimbo. Uliza ofisi ya kanuni (compliance office) au chama cha michezo cha jimbo lako kabla ya kukubali.",
            "Andika orodha fupi ya kanuni zako mwenyewe za kuchapisha: unachochapisha, usichochapisha kamwe, na jinsi unavyoshughulikia maoni mabaya (usibishane; nyamazisha, ficha au zuia)."
          ],
          steps: ["Pata kanuni za mitandao ya kijamii za timu yako kutoka kwa kocha wako.", "Andika kanuni tatu za \"Mimi huwa\".", "Andika kanuni tatu za \"Mimi kamwe\".", "Andika jinsi unavyoshughulikia maoni mabaya.", "Ongeza: \"Mimi hutaja mkataba wowote wa chapa na kukagua kanuni za NIL kwanza.\""],
          words: [["NIL", "jina, picha na sura (name, image and likeness): mwanamichezo kupata pesa kutokana na jina lake, picha yake au chapa yake binafsi."], ["Kutaja malipo (disclosure)", "maneno yaliyo wazi ndani ya chapisho yanayosema ulilipwa au ulipewa kitu."]],
          slides: [
            { title: "Jua kanuni", bullets: ["Kanuni za mitandao za timu na shule", "Majeraha, usajili, wapinzani"] },
            { title: "Mikataba ya chapa", bullets: ["Taja mikataba ya malipo na bidhaa za bure ndani ya chapisho", "Kagua kanuni za NIL na ofisi ya kanuni au jimbo lako"] },
            { title: "Kanuni zako za kuchapisha", bullets: ["Tatu za \"Mimi huwa\"", "Tatu za \"Mimi kamwe\"", "Maoni mabaya: usibishane; nyamazisha, ficha au zuia"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers (mwongozo wa kutaja malipo kwa washawishi wa mitandao)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Name, Image and Likeness (jina, picha na sura)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Kazi ya mwisho: andika kanuni zako za kuchapisha, kisha maliza kujenga chapa ya wasifu mmoja: sentensi ya chapa, bio na picha, nguzo tatu zenye mawazo mawili kila moja, ukaguzi wa machapisho 30 na mipangilio salama.",
          youCanNow: "kuweka chapa yako kwenye njia sahihi kwa kanuni za kuchapisha zilizo wazi na kushughulikia mikataba ya chapa kwa uaminifu.",
          quickCheck: [
            { objective: "O6", q: "FTC inasema nini kuhusu bidhaa ya bure unayochapisha kuihusu?", options: ["Itaje wazi ndani ya chapisho lenyewe", "Taja tu mikataba ya pesa taslimu", "Iweke kwenye bio yako mara moja", "Wanafunzi hawahitaji kutaja"], answer: 0, why: "Mkataba wowote wa malipo au bidhaa ya bure lazima utajwe wazi ndani ya chapisho." },
            { objective: "O6", q: "Mtu anaandika maoni ya matusi baada ya timu yako kushindwa. Kanuni yako inasema nini?", options: ["Kubishana hadi aache", "Kuchapisha jibu la hasira", "Kufuta akaunti yako", "Kutobishana; kunyamazisha, kuficha au kuzuia"], answer: 3, why: "Kanuni zako za kuchapisha zinasema jinsi ya kushughulikia maoni mabaya bila kubishana." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kulinda chapa yako",
        questions: [
          { objective: "O4", q: "Jaribio la ukaguzi kwa chapisho la zamani ni lipi?", options: ["Je, lilipata likes 100?", "Je, linachekesha?", "Je, ni la zamani?", "Je, kocha, mdhamini au bibi au babu angekuwa sawa akiliona?"], answer: 3, why: "Likishindwa jaribio hilo, linaweza kudhuru chapa yako." },
          { objective: "O5", q: "Mpangilio upi unalinda kuingia kwenye akaunti yako?", options: ["Uthibitishaji wa hatua mbili", "Mwandiko mzuri", "Hashtag zaidi", "Mahali ulipo wazi kwa umma"], answer: 0, why: "Uthibitishaji wa hatua mbili unawazuia watu walio na nywila yako tu." },
          { objective: "O5", q: "Kipi hupaswi kuchapisha kamwe?", options: ["Kipande cha video cha mazoezi", "Shukrani kwa kocha wako", "Mahali ulipo sasa hivi", "Picha ya huduma kwa jamii"], answer: 2, why: "Mahali ulipo sasa hivi kunaweza kukuweka hatarini." },
          { objective: "O5", q: "Mtu anakutishia kwenye DM. Unafanya nini?", options: ["Kumjibu kwa ubishi", "Kumtumia anachoomba", "Kupuuza na kutomwambia mtu", "Kuhifadhi ushahidi, kumzuia, kuripoti na kumwambia mtu mzima unayemwamini"], answer: 3, why: "Jilinde na upate msaada." },
          { objective: "O6", q: "Kampuni inakutumia vipokea sauti (headphones) vya bure ili uchapishe kuvihusu. Lazima ufanye nini?", options: ["Hakuna kitu", "Kutaja wazi bidhaa ya bure ndani ya chapisho na kukagua kanuni za NIL", "Kuficha jina la kampuni", "Kufuta chapisho baadaye"], answer: 1, why: "FTC inataka kutaja wazi, na kanuni za NIL zinaweza kuhusika." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kujenga Chapa ya Mwanamichezo kwenye Mitandao ya Kijamii",
    questions: [
      { objective: "O1", q: "Nani anajenga chapa yako?", options: ["Wewe peke yako", "Kocha wako peke yake", "Watu wanaoona machapisho, maoni na matendo yako", "Hakuna mtu"], answer: 2, why: "Chapa yako inaishi akilini mwa watu wengine." },
      { objective: "O1", q: "Chapa ni mchezo wako pamoja na:", options: ["Maadili yako na kile kinachokufanya uwe wewe", "Nywila yako", "Mpinzani wako", "Saizi ya kiatu chako"], answer: 0, why: "Maadili na tabia yako vinakufanya utofautiane na wengine." },
      { objective: "O1", q: "Sentensi ya chapa inapaswa kuwa:", options: ["Ya kweli", "Ya kubuni", "Iliyonakiliwa", "Ndefu sana"], answer: 0, why: "Chapa inafanya kazi tu ikiwa ni ya kweli." },
      { objective: "O2", q: "Wasifu wako ni kama:", options: ["Kabati lako la nguo uwanjani", "Siri", "Mlango wako wa mbele", "Ubao wa matokeo"], answer: 2, why: "Ndicho kitu cha kwanza watu wanachokiona." },
      { objective: "O2", q: "Picha nzuri ya wasifu ni:", options: ["Iliyofifia", "Iliyo wazi yenye mwanga mzuri", "Kichekesho chochote", "Ya mtu mwingine"], answer: 1, why: "Watu wanapaswa kukutambua." },
      { objective: "O2", q: "Kipi HAKIFAI kwa bio?", options: ["Mchezo wako", "Nafasi yako", "Kiungo cha matukio bora", "Namba yako ya simu"], answer: 3, why: "Namba za simu ni za faragha." },
      { objective: "O2", q: "Kama uko chini ya miaka 18, kabla ya kutaja shule au mji wako unapaswa:", options: ["Kuchapisha hata hivyo", "Kumwuliza mtu usiyemjua", "Kumwuliza mzazi au mlezi", "Kuongeza anwani yako pia"], answer: 2, why: "Wazazi wanakusaidia kuamua kipi ni salama kushiriki." },
      { objective: "O3", q: "Unapaswa kuwa na nguzo ngapi za maudhui?", options: ["20", "Hakuna", "Chapisho 1", "3-4"], answer: 3, why: "Nguzo chache zinaweka ukurasa wako ukilenga jambo moja." },
      { objective: "O3", q: "Lipi ni chapisho la nguzo ya nje ya uwanja?", options: ["Kujitolea kwenye kliniki ya michezo ya vijana", "Tukio bora la mechi", "Kipande cha video cha mazoezi", "Picha ya takwimu"], answer: 0, why: "Linaonyesha wewe ni nani zaidi ya michezo." },
      { objective: "O3", q: "Unapaswa kutumiaje AI kwa mawazo ya machapisho?", options: ["Kuchapisha kila kitu inachosema", "Kutoa mawazo mengi, kubaki na yale yanayoendana na wewe", "Kutoitumia kamwe", "Kuiacha iendeshe akaunti yako"], answer: 1, why: "Wewe ndiye unayechagua kinachoendana na chapa yako." },
      { objective: "O4", q: "Ukaguzi wako unapaswa kuhusu angalau machapisho mangapi ya karibuni?", options: ["1", "0", "30", "Ya leo tu"], answer: 2, why: "Rudi nyuma vya kutosha kuona kile wengine wanachokiona." },
      { objective: "O4", q: "Kuhifadhi pembeni (archive) chapisho kunamaanisha:", options: ["Kulificha kwenye wasifu wako bila kulifuta", "Kulichapisha tena", "Kulifanya liwe la umma", "Kuliuza"], answer: 0, why: "Kuhifadhi pembeni kunaficha bila kufuta." },
      { objective: "O4", q: "Baada ya kushindwa vibaya, kanuni nzuri ni:", options: ["Kuchapisha mara moja", "Kumshambulia mwamuzi mtandaoni", "Kuwalaumu wachezaji wenzako", "Hakuna kuchapisha ukiwa na hasira"], answer: 3, why: "Machapisho ya hasira mara nyingi yanadhuru chapa yako." },
      { objective: "O5", q: "Wanamichezo wengi wana:", options: ["Akaunti kumi za umma", "Akaunti ya umma ya mwanamichezo na akaunti binafsi iliyofungwa", "Hakuna faragha kabisa", "Nywila yao kwenye bio"], answer: 1, why: "Inatenganisha kuonekana na maisha binafsi." },
      { objective: "O5", q: "Kuzima mahali kwenye machapisho kunakusaidia:", options: ["Kupata likes zaidi", "Kubaki salama", "Kuchapisha haraka", "Kuonekana mkubwa kwa umri"], answer: 1, why: "Watu usiowajua hawawezi kufuatilia ulipo." },
      { objective: "O5", q: "Mtu usiyemjua anakutumia DM akijifanya wakala wa usajili na anaomba pesa. Hii ni:", options: ["Kawaida", "Lazima", "Ufadhili wa masomo", "Ishara ya hatari"], answer: 3, why: "Mawakala wa usajili bandia huomba pesa." },
      { objective: "O6", q: "Unapata wapi kanuni za mitandao ya kijamii za timu yako?", options: ["Kumwuliza kocha wako", "Kubahatisha", "Kwa mpinzani", "Kwenye tangazo"], answer: 0, why: "Timu na shule zinaweka kanuni zao wenyewe." },
      { objective: "O6", q: "NIL inamaanisha:", options: ["National Interest League", "No Internet Limits", "Name, image and likeness (jina, picha na sura)", "New Influencer Level"], answer: 2, why: "NIL ni kupata pesa kutokana na jina, picha na sura yako." },
      { objective: "O6", q: "Mwanamichezo wa sekondari anapewa mkataba wa NIL. Anapaswa kwanza:", options: ["Kusaini mara moja", "Kuuficha", "Kumwuliza shabiki", "Kukagua kanuni za chama cha michezo cha jimbo lake na za shule"], answer: 3, why: "Kanuni za NIL za sekondari zinatofautiana kati ya majimbo." },
      { objective: "O6", q: "Unapaswa kushughulikiaje maoni mabaya?", options: ["Kubishana kwa herufi kubwa zote", "Usibishane; nyamazisha, ficha au zuia", "Kuchapisha anwani yao", "Kuacha mitandao ya kijamii milele"], answer: 1, why: "Kubishana kunaeneza ubaya na kunadhuru chapa yako." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      5,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Sentensi ya chapa",
        objective: "O1",
        notYet: "Haipo, haiko wazi, au si ya kweli.",
        meets: "Sentensi moja ya kweli yenye mchezo na nafasi, thamani moja na jambo moja unalopenda nje ya michezo.",
        exceeds: "Bio, picha na nguzo zote zinaendana wazi na sentensi hiyo."
      },
      {
        name: "Bio na picha",
        objective: "O2",
        notYet: "Hakuna kiungo wala mwaliko wa kuchukua hatua, picha haiko wazi, au taarifa binafsi zinaonekana.",
        meets: "Bio fupi yenye mchezo, nafasi, thamani moja na kiungo kimoja, picha iliyo wazi, bila taarifa binafsi.",
        exceeds: "Kiungo kinaelekea kwenye video ya matukio bora au wasifu wa usajili uliosasishwa."
      },
      {
        name: "Nguzo za maudhui",
        objective: "O3",
        notYet: "Nguzo chini ya tatu, au mawazo yasiyoendana na chapa.",
        meets: "Nguzo tatu zenye mawazo mawili ya machapisho kila moja yanayoendana na sentensi ya chapa.",
        exceeds: "Mawazo yamepangwa kwenye ratiba ya wiki mbili zijazo."
      },
      {
        name: "Ukaguzi wa machapisho",
        objective: "O4",
        notYet: "Machapisho chini ya 30 yamekaguliwa, au machapisho yanayoshindwa jaribio bado yanaonekana.",
        meets: "Machapisho, maoni, uliyoshiriki tena na utambulisho 30 ya mwisho yamekaguliwa, na yanayoshindwa yamehifadhiwa pembeni, yamefichwa, yamefutwa au umejiondoa kwenye utambulisho.",
        exceeds: "Ukaguzi unarudi nyuma zaidi na kanuni ya \"hakuna kuchapisha ukiwa na hasira\" imeandikwa."
      },
      {
        name: "Faragha na usalama",
        objective: "O5",
        notYet: "Mahali bado kunaonekana kwenye machapisho, ujumbe uko wazi kwa wote, au hakuna uthibitishaji wa hatua mbili.",
        meets: "Ujumbe, maoni na utambulisho vimewekewa mipaka, mahali kumezimwa na uthibitishaji wa hatua mbili umewashwa.",
        exceeds: "Akaunti binafsi iliyofungwa imeandaliwa na mwanamichezo anaweza kuonyesha jinsi ya kuzuia na kuripoti."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa kigezo",
      "Wanafunzi wanaoripoti kuondoa au kuficha machapisho ambayo yangeweza kuwakosesha nafasi",
      "Wanafunzi wanaoripoti kuwasiliana na kocha, wakala wa usajili, kampuni ya chapa au mwajiri kupitia wasifu wao uliosafishwa (utafiti wa ufuatiliaji)",
      "Wanafunzi wanaoripoti kuzuia na kuripoti wakala wa usajili bandia, ulaghai au tishio badala ya kujibu"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye app ya mtandao wa kijamii ya mwanamichezo",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini), si lazima",
      "Kanuni za mitandao ya kijamii za timu yako kutoka kwa kocha wako",
      "Karatasi au kidokezo kwenye simu kwa sentensi yako ya chapa na kanuni zako",
      "Kama dakika 60"
    ],
    facilitatorNotes: [
      "Usiwaombe kamwe wanamichezo waonyeshe kikundi jumbe zao binafsi au akaunti zao binafsi; waache wajikague wenyewe.",
      "Kwa wanamichezo walio chini ya miaka 18, washirikishe wazazi au walezi katika maamuzi kuhusu wasifu wa umma na kutaja shule au mji.",
      "Shiriki kanuni za mitandao ya kijamii za timu na nani wa kumwambia kuhusu vitisho, mawakala wa usajili bandia au maombi ya picha za faragha.",
      "Pitieni mipangilio ya faragha pamoja kwenye apps ambazo kikundi kinatumia, kwa sababu menyu zinabadilika kati ya apps na masasisho.",
      "Mwalike mtu wa ofisi ya kanuni au wa chama cha michezo cha jimbo aeleze kanuni za NIL kabla mtu yeyote hajakubali mkataba."
    ]
  }
};
