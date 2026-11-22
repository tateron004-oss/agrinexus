"use strict";

// Koach Learn course (Swahili translation of shared/data-annotation-online-work.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const MINDRIFT = { name: "Mindrift (kazi za kufundisha AI; inasema kazi za Toloka zimehamia hapa na kujiunga ni bure)", url: "https://mindrift.ai/welcome" };
const CROWDGEN = { name: "CrowdGen ya Appen (miradi ya wachangiaji; inasema haikuombi kamwe kulipa ili kujiunga)", url: "https://crowdgen.com/" };
const CLICKWORKER = { name: "Clickworker (kazi ndogo kama data ya kufundisha AI, tafiti na kurekodi sauti)", url: "https://www.clickworker.com/clickworker/" };
const SAMA = { name: "Ajira za Sama (ofisi Nairobi, Kenya, na Gulu na Kampala, Uganda)", url: "https://www.sama.com/careers" };
const FTC_JOBS = { name: "Tume ya Biashara ya Shirikisho ya Marekani (FTC): Ulaghai wa ajira", url: "https://consumer.ftc.gov/articles/job-scams" };
const ILO_PLATFORMS = { name: "ILO: Nafasi ya majukwaa ya kazi ya kidijitali katika kubadilisha ulimwengu wa kazi", url: "https://www.ilo.org/publications/flagship-reports/role-digital-labour-platforms-transforming-world-work" };
const NDPC = { name: "Tume ya Ulinzi wa Data ya Nigeria (Nigeria Data Protection Commission)", url: "https://ndpc.gov.ng/" };

module.exports = {
  id: "data-annotation-online-work-sw",
  lang: "sw",
  translationOf: "data-annotation-online-work",
  category: "Workforce Development",
  name: "Kuweka Lebo kwenye Data ya AI na Kazi Ndogo za Mtandaoni",
  skills: "Kutambua kazi za kuweka lebo kwenye data na kazi ndogo, Kuweka lebo kwa kufuata mwongozo, Kufaulu majaribio ya kufuzu na kudumisha ubora wa juu, Kuhakikisha jukwaa ni halisi na kukataa kazi bandia, Kulinda data binafsi na data ya kazi, Kukokotoa malipo yako halisi kwa saa",
  outcome: "kuweka lebo kwenye data ya AI kwa kufuata mwongozo ulioandikwa, kuhakikisha jukwaa la kazi la mtandaoni ni halisi kabla ya kujiunga, kulinda data yako na data unayoiona, na kukokotoa kazi inakulipa kiasi gani hasa kwa saa.",
  about: [
    "Zana za AI zinajifunza kutoka kwa mifano ambayo watu wanaitayarisha: picha zenye visanduku vilivyochorwa kuzunguka magari, sentensi zilizowekwa alama kuwa chanya au hasi, rekodi za sauti zilizoandikwa, na majibu ya AI yaliyopangwa kutoka bora hadi mabaya. Kazi hii inaitwa kuweka lebo kwenye data (data annotation au data labeling). Watu wengi wanaifanya mtandaoni kama kazi ndogo zinazolipwa, zinazoitwa kazi ndogo (micro-jobs), kuanzia Nairobi hadi Lagos, Accra, Dakar, Manila, Hyderabad, Bogotá, Mexico City, Casablanca, Cairo na miji mingi ya Marekani.",
    "Kozi hii ni kwa vijana na watu wazima wenye simu au kompyuta wanaotaka kujaribu kazi hii kwa usalama. Utajifunza aina kuu za kazi, utafanya mazoezi ya kuweka lebo kwa mwongozo ulioandikwa kwenye karatasi, utajifunza jinsi majaribio ya kufuzu na alama za ubora zinavyofanya kazi, utahakikisha jukwaa ni halisi, utakataa \"kazi za AI\" nyingi bandia zinazoomba pesa, utalinda data ya siri, na utakokotoa malipo yako halisi kwa saa.",
    "Jiambie ukweli kuhusu pesa. Malipo hayalingani: wiki nyingine kuna kazi nyingi na wiki nyingine chache sana, na muda unaotumia kwenye majaribio na kutafuta kazi mara nyingi haulipwi. Jukwaa halisi halikuombi kamwe ulipe ili kuanza. Kozi hii haikuahidi mapato; inakusaidia kuamua ukiwa na macho wazi.",
    "Kila somo linachukua kama dakika tano, na kazi ya \"Jaribu sasa\" unayoweza kufanya kwenye karatasi au simu. Kuna maswali 2 mafupi baada ya kila somo, jaribio la maarifa baada ya kila sura na mtihani wa maswali 20 mwishoni."
  ],
  finalTask: "Tengeneza mpango wako wa kuanza kazi ndogo: (1) seti ya mazoezi ya vitu 10 ulivyoweka lebo kwa mwongozo wako wa ukurasa mmoja, vitu visivyo wazi vikiwa vimewekewa alama (flag); (2) majukwaa mawili uliyokagua, na ulichopata kwa kila ukaguzi (tovuti rasmi, kujiunga ni bure, nchi yako inakubaliwa, malipo yanatumwaje); (3) orodha yako ya dalili tano za hatari za ulaghai; (4) sheria zako tatu za usalama wa data; na (5) daftari la kila wiki la muda na malipo lenye mpango wa wiki 4 na tarehe, pamoja na jinsi utakavyokokotoa malipo yako halisi kwa saa.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Vijana na watu wazima nchini Marekani na nje (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Ufilipino, India, Mexico, Colombia, Morocco, Misri): waliomaliza shule, wahitimu, wazazi walio nyumbani, watu wanaotafuta mapato ya ziada, na wanaotafuta kazi ambao wanaona matangazo ya \"pata pesa kwa AI\" kila mara. Kozi imetafsiriwa katika lugha kumi.",
    startingPoint: "Wanaweza kutumia simu janja, WhatsApp na mitandao ya kijamii; baadhi wana kompyuta mpakato au wanatumia cyber café au maktaba. Wengi hawajawahi kuweka lebo kwenye data, kusoma mwongozo wa kazi au kufanya jaribio la kufuzu. Wengi wameona ofa za \"kazi ya nyumbani\" za kufanya kazi ndogo zilizoomba amana (deposit).",
    gap: "Wanafunzi wanahitaji kujua kazi halisi ya data ya AI inaonekanaje, kuweka lebo kwa uangalifu kwa kufuata mwongozo, kupima kama jukwaa ni halisi, kulinda data ya siri, na kukokotoa malipo halisi, ili wapate pesa pale kazi halisi ipo na waepuke kupoteza pesa na nyaraka za utambulisho kwa kazi bandia.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; imetafsiriwa katika lugha kumi",
      "Vifaa: mara nyingi simu janja tu; bando la intaneti ni ghali; umeme unaweza kukatika",
      "Muda: masomo ya dakika 4 hadi 6; mazoezi kwenye karatasi",
      "Majukwaa, nchi yanazokubali, njia za malipo na kiasi cha malipo hubadilika mara kwa mara: wanafunzi wanakagua kurasa za kila jukwaa zenyewe",
      "Usilipe kamwe ili kuanza; usitoe kamwe nywila, PIN, misimbo ya mara moja au nyaraka za utambulisho nje ya uthibitisho rasmi wa jukwaa"
    ],
    prerequisites: "Ujuzi wa msingi wa simu au kompyuta na anwani ya barua pepe. Kusoma kwa uangalifu katika lugha ya kazi."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa orodha ya kazi nane za mtandaoni", action: "kutambua zipi ni kuweka lebo kwenye data au kazi ndogo na kutaja ujuzi ambao kila moja inahitaji", standard: "ukipata angalau 6 kati ya 8 sahihi" },
    { id: "O2", condition: "Ukipewa mwongozo mfupi wa kuweka lebo na vitu kumi vya mfano", action: "kuweka lebo kwenye kila kitu kwa kufuata mwongozo na kuwekea alama (flag) vile visivyo wazi", standard: "ukilingana na majibu sahihi kwa angalau 8 kati ya 10" },
    { id: "O3", condition: "Kabla ya kuanza jaribio la kufuzu", action: "kuorodhesha hatua utakazochukua kusoma mwongozo, kufanya mazoezi na kukagua kazi yako mwenyewe", standard: "ili uweze kueleza jinsi utakavyodumisha alama yako ya ubora juu" },
    { id: "O4", condition: "Ukipewa jukwaa au ofa ya kazi", action: "kuhakikisha ni halisi na kutaja dalili zozote za hatari za kazi bandia", standard: "kabla ya kulipa chochote au kutoa nyaraka zozote" },
    { id: "O5", condition: "Unapofanya kazi", action: "kuweka siri taarifa zako binafsi na data ya kazi", standard: "bila kutoa nywila, misimbo au maudhui ya kazi nje ya jukwaa" },
    { id: "O6", condition: "Baada ya wiki moja ya mazoezi au kazi halisi", action: "kuandika muda na malipo yako na kukokotoa mapato yako halisi kwa saa", standard: "ukihesabu muda usiolipwa kama majaribio na kutafuta kazi" }
  ],
  chapters: [
    {
      name: "Sura 1: Kufanya kazi vizuri",
      lessons: [
        {
          title: "Kuweka lebo kwenye data na kazi ndogo ni nini",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tambua aina kuu za kazi za data ya AI na ujuzi ambao kila moja inahitaji.",
          text: [
            "Zana za AI zinajifunza kutoka kwa mifano. Watu wanatayarisha mifano hiyo kwa kuongeza lebo: picha hii inaonyesha baiskeli, ujumbe huu ni malalamiko, sentensi hii iko kwa Kihausa, jibu hili la AI ni bora kuliko lile. Kuongeza lebo kunaitwa kuweka lebo kwenye data (data annotation au data labeling).",
            "Aina za kawaida za kazi: kuweka lebo kwenye picha (kuchora kisanduku kuzunguka kila gari, au kuchagua kundi), kuweka lebo kwenye maandishi (je, maoni haya ni chanya, hasi au ya kawaida?), kazi ya sauti (kuandika anachosema mzungumzaji, au kurekodi sauti yako ukisoma sentensi), na kupima majibu ya AI (kusoma majibu mawili ya AI na kuchagua bora zaidi, pamoja na sababu). Baadhi ya miradi mipya inaomba wataalamu, kama wauguzi, wahasibu au watu wanaozungumza lugha mbili vizuri.",
            "Kazi ndogo ni kazi fupi za mtandaoni zinazolipwa moja moja, mara nyingi zinachukua sekunde hadi dakika. Baadhi ya watu wanazifanya kwenye majukwaa ya wazi wakiwa nyumbani; wengine wanaajiriwa kama wafanyakazi ofisini, kwa mfano na kampuni zenye timu za data Nairobi au Kampala. Kwa njia yoyote, ujuzi muhimu ni kusoma kwa uangalifu, kufuata sheria kikamilifu, umakini usiokatika na uaminifu."
          ],
          words: [["Kuweka lebo kwenye data (data annotation)", "kuongeza lebo kwenye picha, maandishi, sauti au video ili zana ya AI ijifunze kutoka kwazo."], ["Kazi ndogo (micro-job)", "kazi fupi ya mtandaoni inayolipwa moja moja."], ["Kupima majibu ya AI", "kusoma majibu ya zana ya AI na kuamua lipi ni bora, kwa kutumia sheria."], ["Unukuzi (transcription)", "kuandika hasa kile kinachosemwa kwenye rekodi."]],
          slides: [
            { title: "AI inajifunza kutoka mifano yenye lebo", bullets: ["Watu ndio wanaoongeza lebo", "Hii inaitwa kuweka lebo kwenye data (data annotation)"] },
            { title: "Aina za kawaida za kazi", bullets: ["Picha: visanduku au makundi", "Maandishi: chanya, hasi au ya kawaida", "Sauti: andika kinachosemwa, au rekodi sauti yako", "Majibu ya AI: chagua bora zaidi, pamoja na sababu"] },
            { title: "Kazi iko wapi", bullets: ["Majukwaa ya wazi ya mtandaoni, kazi moja moja", "Ajira za ofisini katika kampuni za data, kama mfanyakazi", "Miradi ya wataalamu kwa wenye taaluma au lugha mbili"] },
            { title: "Ujuzi muhimu zaidi", bullets: ["Kusoma kwa uangalifu", "Kufuata sheria kikamilifu", "Umakini usiokatika na uaminifu"] }
          ],
          sources: [SAMA, ILO_PLATFORMS],
          tryIt: "Andika aina nne za kazi (picha, maandishi, sauti, kupima AI) kwenye karatasi. Kando ya kila moja, andika ujuzi mmoja ulio nao tayari unaofaa, kwa mfano \"Ninazungumza Kiingereza na Kiswahili\" kando ya sauti, au \"Ninaona maelezo madogo\" kando ya picha.",
          youCanNow: "kutaja aina kuu za kazi za data ya AI na kulinganisha kila moja na ujuzi ulio nao tayari.",
          quickCheck: [
            { objective: "O1", q: "Kipi kati ya hivi ni kazi ya kuweka lebo kwenye data?", options: ["Kuuza simu mtandaoni", "Kupeleka chakula kwa pikipiki", "Kuchora kisanduku kuzunguka kila gari kwenye picha ya barabara", "Kutengeneza skrini ya kompyuta mpakato"], answer: 2, why: "Kuchora visanduku kuzunguka vitu ni kuweka lebo kwenye picha, moja ya kazi kuu za aina hii." },
            { objective: "O1", q: "Kazi inakuonyesha majibu mawili ya AI na kukuuliza lipi ni bora na kwa nini. Ni kazi ya aina gani?", options: ["Kupima majibu ya AI", "Unukuzi", "Kuweka lebo kwenye picha", "Kuingiza data ya ankara"], answer: 0, why: "Kupima majibu ya AI pamoja na sababu ndiko kunakoitwa kupima majibu ya AI." }
          ]
        },
        {
          title: "Kuweka lebo kwa kufuata mwongozo",
          objectives: ["O2"],
          minutes: 6,
          goal: "Weka lebo kwenye vitu kumi vya mfano kwa kufuata mwongozo ulioandikwa na uwekee alama vile visivyo wazi.",
          text: [
            "Kila mradi una mwongozo (guideline): sheria za jinsi ya kuweka lebo. Unasema kila lebo ina maana gani, unatoa mifano, na unaeleza hali ngumu. Maoni yako si muhimu kama mwongozo. Mwongozo ukisema \"mtu kwenye bango anahesabiwa kama mtu\", unaweka lebo hiyo, hata kama inaonekana ajabu.",
            "Soma mwongozo wote kabla ya kazi yako ya kwanza, kisha uache wazi. Tafuta mifano na hali za mpakani (edge cases): vitu vinavyoweza kufaa lebo mbili. Makosa mengi yanatokea hapo.",
            "Kitu kisipokuwa wazi kabisa, usibahatishe ovyo. Tumia chaguo la kuruka (skip) au kuwekea alama (flag) kama lipo, au fuata mwongozo unavyosema kuhusu vitu visivyo wazi. Uangalifu na kufanya vivyo hivyo kila mara ni bora kuliko kasi."
          ],
          steps: ["Soma mwongozo wote mara moja, polepole.", "Andika kila lebo na maana yake kwa maneno yako mwenyewe.", "Jifunze mifano na hali za mpakani.", "Weka lebo kwenye kila kitu, ukiangalia mwongozo usipokuwa na uhakika.", "Wekea alama au ruka vitu ambavyo mwongozo haujavieleza, kama unavyosema."],
          words: [["Mwongozo (guideline)", "sheria zilizoandikwa za mradi wa kuweka lebo: kila lebo ina maana gani na jinsi ya kushughulikia hali ngumu."], ["Hali ya mpakani (edge case)", "kitu kinachoweza kufaa zaidi ya lebo moja, kwa hiyo lazima sheria iangaliwe."], ["Kuwekea alama (flag)", "kuonyesha kwamba kitu hakiko wazi au kimeharibika ili mkaguzi akiangalie."]],
          slides: [
            { title: "Mwongozo ndio bosi", bullets: ["Unasema kila lebo ina maana gani", "Unatoa mifano na hali ngumu", "Ufuate, hata kuliko maoni yako mwenyewe"] },
            { title: "Jinsi ya kuweka lebo vizuri", bullets: ["Soma mwongozo wote kwanza", "Uache wazi unapofanya kazi", "Uangalie kila usipokuwa na uhakika"] },
            { title: "Hali za mpakani na vitu visivyo wazi", bullets: ["Makosa mengi yanatokea kwenye hali za mpakani", "Tumia flag au skip kama mwongozo unavyosema", "Uangalifu na kufanya vivyo hivyo ni bora kuliko kasi"] }
          ],
          tryIt: "Fanya mazoezi kwenye karatasi. Mwongozo: weka lebo kila ujumbe POSITIVE (ameridhika na huduma), NEGATIVE (hajaridhika) au NEUTRAL (swali au ukweli tu); ukiwa umeridhika na pia haujaridhika, weka lebo kulingana na ombi kuu. Weka lebo kwenye hivi kumi: 1 \"Asante, mzigo ulifika haraka!\" 2 \"Duka lenu liko wapi Kumasi?\" 3 \"Mkate ulikuwa umechakaa tena.\" 4 \"Bei nzuri, lakini boksi lilikuwa limevunjika. Tafadhali libadilisheni.\" 5 \"Mko wazi Jumapili?\" 6 \"Fundi cherehani bora Dakar!\" 7 \"Nilisubiri saa mbili.\" 8 \"Oda 2231 imefika.\" 9 \"Ninaipenda, lakini ninahitaji kurudishiwa pesa ya kile cha pili.\" 10 \"asdf\". Majibu sahihi: 1 POS, 2 NEU, 3 NEG, 4 NEG, 5 NEU, 6 POS, 7 NEG, 8 NEU, 9 NEG, 10 flag (si ujumbe halisi).",
          youCanNow: "kusoma mwongozo wa kuweka lebo, kuutumia kwa kila kitu, na kuwekea alama vitu ambavyo haujavieleza.",
          quickCheck: [
            { objective: "O2", q: "Mwongozo unasema mtu wa katuni anahesabiwa kama mtu. Wewe unaona hapaswi. Unafanya nini?", options: ["Kufuata maoni yako mwenyewe", "Kumwekea lebo ya mtu, kama mwongozo unavyosema", "Kuruka kila katuni", "Kumwomba rafiki kwenye WhatsApp aamue"], answer: 1, why: "Katika kazi ya kuweka lebo, mwongozo ndio unaoamua, si maoni ya mtu binafsi." },
            { objective: "O2", q: "Kitu hakifai lebo yoyote katika mwongozo. Hatua bora ni ipi?", options: ["Kuchagua lebo yoyote bila mpango ili kuokoa muda", "Kukipa lebo inayotumika zaidi", "Kuondoka kwenye jukwaa", "Kukiwekea alama au kukiruka kama mwongozo unavyokuambia"], answer: 3, why: "Kuwekea alama vitu visivyo wazi kunaweka data safi na kulinda alama yako ya ubora." }
          ]
        },
        {
          title: "Majaribio ya kufuzu na alama za ubora",
          objectives: ["O3"],
          minutes: 5,
          goal: "Orodhesha hatua utakazochukua kufaulu jaribio la kufuzu na kudumisha alama yako ya ubora juu.",
          text: [
            "Miradi mingi inaanza na jaribio la kufuzu (qualification test): seti fupi ya kazi za mazoezi zenye majibu yanayojulikana. Kwa kawaida unahitaji matokeo mazuri ili upate kazi inayolipwa. Kwenye majukwaa mengi muda wa jaribio hili haulipwi, kwa hiyo jiandae vizuri na ulifanye ukiwa umepumzika.",
            "Baada ya kuanza, jukwaa linaendelea kukagua kazi yako. Baadhi ya vitu vina majibu yaliyofichwa yanayojulikana, na wakaguzi wanakagua sampuli. Pamoja hivi vinaunda alama yako ya ubora (quality score). Alama ya juu inaweza kuleta kazi zaidi; alama ya chini inaweza kukuondoa kwenye mradi.",
            "Kudumisha ubora wa juu: soma maoni yoyote unayopewa, soma tena mwongozo unapobadilika, enda polepole kwenye hali za mpakani, pumzika, na usitumie kamwe hila au kunakili majibu. Baadhi ya miradi hairuhusu zana za AI kukufanyia kazi; fuata sheria za mradi."
          ],
          steps: ["Soma mwongozo wote kabla ya jaribio.", "Fanya kazi zozote za mazoezi unazopewa.", "Fanya jaribio ukiwa umepumzika, na intaneti isiyokatika.", "Baada ya kila kundi la kazi, soma maoni na uandike makosa yako.", "Soma tena mwongozo kila unaposasishwa."],
          words: [["Jaribio la kufuzu (qualification test)", "jaribio fupi la kazi za mazoezi ambalo lazima ufaulu kabla ya kupata kazi inayolipwa kwenye mradi."], ["Alama ya ubora (quality score)", "kipimo cha mara ngapi lebo zako ni sahihi, kinachotumika kuamua kama utapata kazi zaidi."], ["Swali la dhahabu (gold question)", "kazi iliyofichwa yenye jibu linalojulikana, inayotumika kukagua usahihi wako."]],
          slides: [
            { title: "Kabla ya kazi inayolipwa: jaribio", bullets: ["Kazi za mazoezi zenye majibu yanayojulikana", "Mara nyingi halilipwi, kwa hiyo jiandae kwanza", "Lifanye ukiwa umepumzika, na intaneti isiyokatika"] },
            { title: "Kazi yako inakaguliwa kila wakati", bullets: ["Majibu yaliyofichwa yanayojulikana", "Wakaguzi wanakagua sampuli", "Pamoja vinaunda alama yako ya ubora"] },
            { title: "Dumisha alama yako juu", bullets: ["Soma maoni na uandike makosa", "Soma tena mwongozo unapobadilika", "Enda polepole kwenye hali za mpakani; pumzika", "Fuata sheria za mradi kuhusu zana za AI"] }
          ],
          tryIt: "Sahihisha lebo zako kumi za mazoezi kutoka somo lililopita kwa kutumia majibu sahihi. Andika alama yako kati ya 10, vitu ulivyokosea, na sheria moja utakayoiangalia kwa uangalifu zaidi wakati ujao. Kisha andika mpango wako wa hatua tano kwa jaribio lako la kwanza halisi la kufuzu.",
          youCanNow: "kujiandaa kwa jaribio la kufuzu, kukagua kazi yako mwenyewe kwa majibu sahihi na kueleza jinsi utakavyodumisha alama yako ya ubora juu.",
          quickCheck: [
            { objective: "O3", q: "Jaribio la kufuzu kwenye mradi wa kuweka lebo ni nini?", options: ["Seti fupi ya kazi za mazoezi ambayo lazima ufaulu kabla ya kazi inayolipwa", "Mtihani wa shule unaoulipia", "Ombi la mkopo", "Usaili wa video na bosi wa mteja"], answer: 0, why: "Miradi inatumia jaribio la kufuzu kukagua kama unaweza kufuata mwongozo kabla ya kukupa kazi zinazolipwa." },
            { objective: "O3", q: "Alama yako ya ubora inashuka baada ya mwongozo kusasishwa. Ufanye nini kwanza?", options: ["Kufanya kazi kwa kasi zaidi ili kufidia", "Kufungua akaunti ya pili", "Kusoma tena mwongozo uliosasishwa na maoni uliyopewa", "Kupuuza; alama si muhimu"], answer: 2, why: "Alama ikishuka baada ya sasisho kwa kawaida sheria imebadilika; kusoma tena mwongozo na maoni kunarekebisha chanzo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kufanya kazi vizuri",
        questions: [
          { objective: "O1", q: "Kuandika hasa kile mzungumzaji anachosema kwenye rekodi kunaitwa:", options: ["Kuweka lebo kwenye picha", "Kupima majibu ya AI", "Kuweka hesabu za biashara", "Unukuzi (transcription)"], answer: 3, why: "Unukuzi ni kuandika hasa kile kinachosemwa." },
          { objective: "O1", q: "Ujuzi upi ni muhimu zaidi kwa kazi ya kuweka lebo?", options: ["Kuandika haraka kwa makosa mengi", "Kusoma kwa uangalifu na kufuata sheria kikamilifu", "Kuwa na kompyuta ya bei ghali", "Kujua kuandika programu"], answer: 1, why: "Kuweka lebo kunategemea kusoma sheria kwa uangalifu na kuzitumia kwa njia ile ile kila mara." },
          { objective: "O2", q: "Mwongozo: weka lebo NEGATIVE ujumbe ikiwa mtu hajaridhika. \"Chakula kilikuwa baridi na kilichelewa.\" Lebo ipi?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Kuwekea alama (flag)"], answer: 0, why: "Mtu hajaridhika na chakula, kwa hiyo mwongozo unasema NEGATIVE." },
          { objective: "O2", q: "Makosa mengi ya kuweka lebo yanatokea wapi?", options: ["Kwenye kitu cha kwanza tu", "Kwenye vitu vyenye mifano iliyo wazi", "Kwenye hali za mpakani zinazoweza kufaa lebo mbili", "Kwenye vitu unavyowekea alama"], answer: 2, why: "Hali za mpakani zinaweza kufaa zaidi ya lebo moja, kwa hiyo zinahitaji kuangalia sheria kwa uangalifu." },
          { objective: "O3", q: "Tabia ipi inasaidia kudumisha alama yako ya ubora juu?", options: ["Kunakili majibu kutoka kikundi cha gumzo", "Kusoma maoni baada ya kila kundi la kazi na kuandika makosa", "Kufanya kazi bila mapumziko kwa saa kumi", "Kubahatisha haraka kwenye vitu vigumu"], answer: 1, why: "Maoni yanaonyesha hasa sheria zipi unakosea, ili uzirekebishe." }
        ]
      }
    },
    {
      name: "Sura 2: Kufanya kazi kwa usalama na kupata pesa kwa uaminifu",
      lessons: [
        {
          title: "Kuhakikisha jukwaa ni halisi na kukataa kazi bandia",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hakikisha kama jukwaa au ofa ya kazi ni halisi na utaje dalili za hatari za ile bandia.",
          text: [
            "Majukwaa halisi yapo. Mifano inayosema kwenye tovuti zao wenyewe kwamba kujiunga ni bure ni pamoja na CrowdGen ya Appen, Mindrift (ambako kazi za Toloka zimehamia) na Clickworker. Majukwaa hubadilika, hufungwa na hukubali nchi tofauti, kwa hiyo kila wakati angalia tovuti ya jukwaa lenyewe kuhusu nchi yako, kazi zilizopo na jinsi malipo yanavyotumwa.",
            "\"Kazi za AI\" bandia ziko kila mahali, kwenye WhatsApp, Telegram, TikTok na Facebook. Dalili kubwa zaidi: wanakuomba ulipe. Kazi halisi haikuombi kamwe ulipe ada ili kujiunga, kufungua kazi, kwa mafunzo, kwa kifurushi cha kuanzia au ili kutoa mapato yako. Tume ya Biashara ya Shirikisho ya Marekani (FTC) inasema waajiri waaminifu hawakutozi pesa ili upate kazi.",
            "Dalili nyingine za hatari: malipo yanayoonekana mazuri mno kwa kazi rahisi; wakala wa ajira anayeongea kupitia WhatsApp au Telegram tu; kazi kama kupenda (like) video au kupima bidhaa ambapo lazima uweke amana (mara nyingi crypto) ili uendelee; kulipwa kisha kuombwa urudishe sehemu ya pesa; kuombwa kitambulisho chako, PIN ya benki au msimbo wa mara moja kwenye gumzo; na shinikizo la kuamua leo."
          ],
          steps: ["Tafuta tovuti rasmi ya jukwaa wewe mwenyewe; usitumie kiungo kilichoko kwenye ujumbe.", "Hakikisha kujiunga ni bure na usome kurasa zake za malipo.", "Hakikisha linakubali wafanyakazi kutoka nchi yako.", "Tafuta jina la jukwaa pamoja na neno \"scam\" na usome wengine wanachosema.", "Kataa ofa yoyote inayokuomba ulipe, uweke amana au urudishe pesa."],
          words: [["Ulaghai wa kazi (task scam)", "kazi bandia ambapo unafanya kazi rahisi, unaona mapato bandia, na unaambiwa uweke pesa ili uendelee au utoe mapato."], ["Wakala wa ajira (recruiter)", "mtu anayetafuta wafanyakazi kwa ajili ya kampuni. Mawakala halisi hawakutozi pesa."], ["Tovuti rasmi", "tovuti ya jukwaa lenyewe, unayoipata wewe mwenyewe, si kupitia kiungo mtu anachokutumia."]],
          slides: [
            { title: "Majukwaa halisi: yakague wewe mwenyewe", bullets: ["Tafuta tovuti rasmi wewe mwenyewe", "Kujiunga kunapaswa kuwa bure", "Angalia nchi yako, kazi na jinsi malipo yanavyotumwa"] },
            { title: "Dalili ya hatari namba moja", bullets: ["Wanakuomba ulipe", "Ili kujiunga, kufungua kazi, kufunzwa au kutoa pesa", "Kazi halisi hazikutozi pesa ili ufanye kazi"] },
            { title: "Dalili nyingine za hatari", bullets: ["Malipo mengi mno kwa kazi rahisi", "Mawakala wanaoongea kwa WhatsApp au Telegram tu", "Amana ili uendelee, au urudishe pesa", "Kuombwa kitambulisho, PIN au msimbo kwenye gumzo"] }
          ],
          sources: [CROWDGEN, MINDRIFT, CLICKWORKER, FTC_JOBS],
          tryIt: "Chagua majukwaa mawili (kutoka somo hili, au moja ambalo rafiki anatumia). Kwa kila moja, andika: tovuti rasmi uliyoipata wewe mwenyewe, kama kujiunga ni bure, kama linakubali nchi yako, malipo yanatumwaje, na chochote ulichopata ulipotafuta jina lake pamoja na \"scam\". Kisha andika orodha yako ya dalili tano za hatari za ulaghai.",
          youCanNow: "kukagua jukwaa kwenye tovuti yake lenyewe na kukataa kazi bandia kwa kutaja dalili zake za hatari.",
          quickCheck: [
            { objective: "O4", q: "Ujumbe wa WhatsApp unatoa \"kazi ya kupima AI\" lakini unaomba ada ya kuanzisha akaunti ya $20. Hii ni nini?", options: ["Gharama ya kawaida ya kuanza", "Ada ya haki ya mafunzo", "Dalili ya hatari ya ulaghai: kazi halisi hazikutozi pesa ili kuanza", "Malipo ya kodi"], answer: 2, why: "Kukuomba ulipe ili kuanza ndiyo dalili iliyo wazi zaidi ya kazi bandia." },
            { objective: "O4", q: "Ufungue vipi jukwaa ulilosikia habari zake?", options: ["Kubofya kiungo kwenye ujumbe wa wakala", "Kutafuta tovuti yake rasmi wewe mwenyewe na kusoma kurasa zake", "Kumwomba wakala akutumie picha za skrini", "Kupakua faili ambalo wakala anakutumia"], answer: 1, why: "Kutafuta tovuti wewe mwenyewe kunakuepusha na kurasa bandia zinazofanana na halisi na faili hatari." }
          ]
        },
        {
          title: "Kulinda data yako na data ya kazi",
          objectives: ["O5"],
          minutes: 5,
          goal: "Andika sheria tatu zinazoweka siri taarifa zako binafsi na data ya kazi.",
          text: [
            "Jilinde. Tumia nywila imara ambayo hutumii mahali pengine na washa kuingia kwa hatua mbili. Usimpe mtu yeyote kamwe msimbo wa mara moja, PIN au nywila, hata mtu anayesema anatoka kwenye jukwaa. Majukwaa halisi yanaweza kuomba kitambulisho ili kukuthibitisha, lakini ndani ya tovuti au app yao rasmi tu, kamwe si kwenye gumzo.",
            "Linda data unayoiona. Kazi zinaweza kuonyesha picha za watu, sauti zao, jumbe zao au taarifa zao za afya na pesa. Miradi mingi inakutaka ukubali kuweka kazi kuwa siri. Usipige kamwe picha ya skrini ya kazi, usiziweke kwenye vikundi, wala usizibandike kwenye zana nyingine za AI isipokuwa mradi unaruhusu. Nchi zina sheria za ulinzi wa data na mamlaka zake, kwa mfano Tume ya Ulinzi wa Data ya Nigeria.",
            "Linda akaunti yako. Usishiriki wala usiuze akaunti yako, na usimruhusu mtu mwingine aitumie kufanya kazi. Majukwaa yanaweza kufunga akaunti kwa sababu ya hili, na unaweza kupoteza mapato ambayo hujalipwa bado. Tumia utambulisho wako halisi tu."
          ],
          steps: ["Tumia nywila imara ya kipekee na kuingia kwa hatua mbili.", "Toa kitambulisho ndani ya tovuti au app rasmi ya jukwaa tu.", "Usitoe kamwe misimbo, PIN au nywila.", "Weka maudhui ya kazi ndani ya jukwaa: hakuna picha za skrini wala kushiriki.", "Usishiriki, usikodishe wala usiuze akaunti yako kamwe."],
          words: [["Kuingia kwa hatua mbili (two-step sign-in)", "ukaguzi wa pili, kama msimbo unaotumwa kwenye simu yako, unapoingia."], ["Siri (confidential)", "binafsi: hupaswi kumwonyesha mtu yeyote nje ya kazi."], ["Msimbo wa mara moja (one-time code)", "msimbo mfupi unaotumwa kwako kuthibitisha kwamba ni wewe kweli. Usiutoe kamwe."]],
          slides: [
            { title: "Jilinde", bullets: ["Nywila imara ya kipekee na kuingia kwa hatua mbili", "Usitoe kamwe misimbo, PIN au nywila", "Kitambulisho ndani ya tovuti au app rasmi tu"] },
            { title: "Linda data ya kazi", bullets: ["Kazi zinaweza kuonyesha taarifa za watu halisi", "Hakuna picha za skrini, hakuna kushiriki kwenye vikundi", "Usibandike kwenye zana nyingine za AI isipokuwa inaruhusiwa"] },
            { title: "Linda akaunti yako", bullets: ["Usiishiriki, usiikodishe wala usiiuze", "Tumia utambulisho wako mwenyewe tu", "Kuvunja sheria hii kunaweza kukupotezea mapato ambayo hujalipwa"] }
          ],
          sources: [NDPC],
          tryIt: "Andika sheria zako tatu za usalama wa data kwa maneno yako mwenyewe: moja kwa akaunti yako, moja kwa kitambulisho na misimbo yako, na moja kwa data ya kazi. Kisha washa kuingia kwa hatua mbili kwenye akaunti yako ya barua pepe kama bado haijawashwa.",
          youCanNow: "kulinda taarifa zako binafsi na kuweka siri data ya kazi.",
          quickCheck: [
            { objective: "O5", q: "Mtu anasema ni wa huduma kwa wateja ya jukwaa na anaomba msimbo uliotumwa sasa hivi kwenye simu yako. Unafanya nini?", options: ["Kutoutoa kamwe, na kuwasiliana na huduma kwa wateja kupitia tovuti rasmi", "Kuutuma, kwa sababu huduma kwa wateja inauhitaji", "Kutuma nusu ya msimbo", "Kuuweka kwenye kikundi ili kuuliza"], answer: 0, why: "Misimbo ya mara moja ni yako peke yako; kuitoa kunamruhusu mtu kuchukua akaunti yako." },
            { objective: "O5", q: "Kazi inaonyesha picha ya barua ya matibabu ya mtu usiyemjua. Kipi ni sahihi?", options: ["Kupiga picha ya skrini kwa ajili ya mazoezi", "Kuishiriki kwenye kikundi chako cha kusoma", "Kuibandika kwenye zana ya AI ya bure ili kuisoma", "Kuiwekea lebo ndani ya jukwaa na kutomwonyesha mtu yeyote"], answer: 3, why: "Data ya kazi ni siri na inabaki ndani ya jukwaa." }
          ]
        },
        {
          title: "Kukokotoa malipo yako halisi na kutengeneza mpango",
          objectives: ["O6"],
          minutes: 6,
          goal: "Andika muda na malipo yako na ukokotoe mapato yako halisi kwa saa.",
          text: [
            "Malipo ya kazi ndogo hayalingani. Yanatofautiana kwa mradi, nchi na jukwaa; wiki nyingine kuna kazi nyingi na wiki nyingine hakuna. Muda wa majaribio, mafunzo na kutafuta kazi mara nyingi haulipwi. Shirika la Kazi Duniani (ILO) limechunguza kazi za majukwaa na linataka ziwe kazi zenye staha, zenye malipo na mazingira ya haki.",
            "Kwa hiyo pima. Weka daftari (log) la kila kipindi: tarehe, dakika ulizofanya kazi (pamoja na majaribio na kusubiri), kazi ulizomaliza, na pesa ulizopata. Malipo halisi kwa saa = jumla ya pesa ulizopata ÷ jumla ya saa, ukihesabu muda wote. Mfano: ulipata dola 6 kwa wiki na ukatumia saa 4 kwa jumla, kwa hiyo malipo yako halisi kwa saa ni dola 1.50.",
            "Kisha amua. Linganisha na njia nyingine zilizo karibu nawe. Watu wengi wanachukulia kazi ndogo kama mapato ya ziada au hatua ya kwanza kuelekea kazi zenye malipo bora, kama mkaguzi wa ubora, miradi ya wataalamu, au kazi ya kudumu katika kampuni ya data. Weka kumbukumbu za malipo yako, na uulize mamlaka ya kodi ya nchi yako kama na jinsi ya kuyatangaza."
          ],
          steps: ["Andika kila kipindi: tarehe, jumla ya dakika (pamoja na majaribio na kusubiri), kazi, pesa.", "Jumlisha pesa za wiki na saa za wiki.", "Gawanya pesa kwa saa upate malipo yako halisi kwa saa.", "Linganisha na njia zako nyingine.", "Panga mwezi ujao: saa, majukwaa, na ujuzi mmoja wa kukuza."],
          words: [["Malipo halisi kwa saa", "pesa zote ulizopata zikigawanywa kwa saa zote ulizotumia, pamoja na muda usiolipwa."], ["Muda usiolipwa", "muda wa majaribio, mafunzo na kutafuta kazi ambao hauleti pesa yoyote."], ["Daftari (log)", "kumbukumbu rahisi iliyoandikwa unayoijaza kila unapofanya kazi."]],
          slides: [
            { title: "Malipo hayalingani", bullets: ["Yanatofautiana kwa mradi, nchi na jukwaa", "Wiki zenye kazi nyingi na wiki tupu", "Majaribio na kutafuta kazi mara nyingi havilipwi"] },
            { title: "Pima kwa daftari", bullets: ["Tarehe, jumla ya dakika, kazi, pesa", "Hesabu pia muda wa majaribio na kusubiri"] },
            { title: "Malipo yako halisi kwa saa", bullets: ["Jumla ya pesa ÷ jumla ya saa", "Mfano: dola 6 ÷ saa 4 = dola 1.50 kwa saa"] },
            { title: "Amua na panga", bullets: ["Linganisha na njia nyingine zilizo karibu nawe", "Panga saa, majukwaa na ujuzi mmoja wa kukuza", "Weka kumbukumbu; uliza mamlaka ya kodi"] }
          ],
          sources: [ILO_PLATFORMS],
          tryIt: "Chora daftari lenye safu tano: tarehe, dakika (zote), kazi, pesa, maelezo. Jaza mstari mmoja kutoka mazoezi ya leo (pesa 0). Kisha andika mpango wa wiki 4 wenye tarehe: majukwaa mawili utakayokagua au kujiunga nayo, saa ngapi kwa wiki, na siku ya kila wiki utakayokokotoa malipo yako halisi kwa saa.",
          youCanNow: "kuweka daftari la muda na malipo, kukokotoa malipo yako halisi kwa saa na kupanga wiki zako nne zijazo.",
          quickCheck: [
            { objective: "O6", q: "Ulipata dola 10 na ukatumia saa 5 kwa jumla, pamoja na saa 1 ya jaribio isiyolipwa. Malipo yako halisi kwa saa ni yapi?", options: ["Dola 10 kwa saa", "Dola 2.50 kwa saa", "Dola 2 kwa saa", "Dola 5 kwa saa"], answer: 2, why: "Malipo halisi kwa saa yanahesabu muda wote: dola 10 ÷ saa 5 = dola 2 kwa saa." },
            { objective: "O6", q: "Daftari lako la kazi linapaswa kuwa na nini?", options: ["Pesa ulizopata tu", "Siku ulizolipwa tu", "Nywila yako, ili uikumbuke", "Tarehe, dakika zote pamoja na majaribio na kusubiri, kazi na pesa"], answer: 3, why: "Kuhesabu kila dakika na kila malipo kunaonyesha kazi inalipa kiasi gani hasa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kufanya kazi kwa usalama na kupata pesa kwa uaminifu",
        questions: [
          { objective: "O4", q: "\"Kazi ya task\" kwenye Telegram inaonyesha mapato yako yakikua lakini inasema lazima uweke crypto ili kutoa pesa. Hii ni nini?", options: ["Mfumo wa kawaida wa bonasi", "Ulaghai wa kazi (task scam)", "Ada ya benki", "Kodi ya serikali"], answer: 1, why: "Kuomba amana ili uendelee au utoe pesa ndio mtindo wa ulaghai wa kazi." },
          { objective: "O4", q: "Ukaguzi bora wa kwanza wa jukwaa ni upi?", options: ["Kutafuta tovuti yake rasmi wewe mwenyewe na kuhakikisha kujiunga ni bure", "Kuamini picha ya wasifu ya wakala", "Kuhesabu likes kwenye tangazo lake", "Kulipa ada ndogo ili kulijaribu"], answer: 0, why: "Tovuti rasmi, uliyoipata wewe mwenyewe, inaonyesha kama ni bure, ni halisi na inakubali nchi yako." },
          { objective: "O5", q: "Jukwaa halisi linakuomba uthibitishe kitambulisho chako. Ukipakie wapi?", options: ["Kwenye gumzo la WhatsApp na wakala", "Kwa barua pepe kwenda anwani yoyote wanayokupa", "Ndani ya tovuti au app rasmi ya jukwaa tu", "Kwenye kikundi cha umma"], answer: 2, why: "Kitambulisho kinatolewa tu katika hatua rasmi ya uthibitisho, kamwe si kwenye gumzo." },
          { objective: "O5", q: "Rafiki anajitolea kukulipa ili atumie akaunti yako ya jukwaa. Unafanya nini?", options: ["Kuikodisha kwa mwezi mmoja", "Kumpa nywila lakini ubaki na mapato", "Kumruhusu aitumie usiku tu", "Kukataa: kushiriki au kuuza akaunti kunavunja sheria na kuhatarisha mapato yako"], answer: 3, why: "Majukwaa yanafunga akaunti zinazoshirikiwa, na unaweza kupoteza mapato ambayo hujalipwa." },
          { objective: "O6", q: "Kwa nini uhesabu muda wa jaribio usiolipwa kwenye daftari lako?", options: ["Ili uone malipo yako halisi kwa saa", "Kwa sababu jukwaa litaulipia baadaye", "Hauhitajiki", "Ili uushiriki mtandaoni"], answer: 0, why: "Muda usiolipwa unapunguza unachopata hasa kwa saa, kwa hiyo lazima uhesabiwe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Kuweka Lebo kwenye Data ya AI na Kazi Ndogo za Mtandaoni",
    questions: [
      { objective: "O1", q: "Kuweka lebo kwenye data ni nini?", options: ["Kutengeneza kompyuta", "Kuongeza lebo kwenye data ili zana za AI zijifunze kutoka kwayo", "Kuandika makala za habari", "Kuuza data kwa benki"], answer: 1, why: "Kuweka lebo ni kuongeza lebo kwenye picha, maandishi, sauti au video kwa ajili ya kufundisha AI." },
      { objective: "O1", q: "Ipi ni kazi ndogo?", options: ["Mkataba wa miaka miwili kama meneja", "Kumiliki duka", "Kuchagua kundi la picha ya bidhaa, ukilipwa kwa kila kazi", "Kuendesha basi"], answer: 2, why: "Kazi ndogo ni kazi fupi za mtandaoni zinazolipwa moja moja." },
      { objective: "O1", q: "Unazungumza Kiyoruba na Kiingereza vizuri. Kazi ipi inaweza kukufaa?", options: ["Kuandika au kukagua rekodi za Kiyoruba", "Kutengeneza simu", "Kupeleka mizigo kwa gari", "Kujenga nyumba"], answer: 0, why: "Ujuzi wa lugha unafaa kazi za sauti na maandishi katika lugha hiyo." },
      { objective: "O2", q: "Mwongozo wa mradi unafanya nini?", options: ["Unaweka malipo yako", "Unaorodhesha alama za marafiki zako", "Unakupa nywila", "Unasema kila lebo ina maana gani na jinsi ya kushughulikia hali ngumu"], answer: 3, why: "Mwongozo ni seti ya sheria za jinsi ya kuweka lebo." },
      { objective: "O2", q: "Mwongozo: weka lebo NEUTRAL ikiwa ujumbe ni swali au ukweli tu. \"Mnafunga saa ngapi?\" Lebo ipi?", options: ["POSITIVE", "NEGATIVE", "NEUTRAL", "Kuwekea alama (flag)"], answer: 2, why: "Ni swali tu, kwa hiyo mwongozo unasema NEUTRAL." },
      { objective: "O2", q: "\"Viatu vizuri, lakini kimoja kimechanika. Nataka kurudishiwa pesa.\" Mwongozo unasema weka lebo jumbe mchanganyiko kulingana na ombi kuu. Lebo ipi?", options: ["NEGATIVE", "POSITIVE", "NEUTRAL", "Kuruka bila kusoma"], answer: 0, why: "Ombi kuu ni kurudishiwa pesa kwa kiatu kilichochanika, kwa hiyo ni NEGATIVE." },
      { objective: "O2", q: "Rekodi ya sauti ni ukimya tu. Unafanya nini?", options: ["Kuandika chochote ili kumaliza haraka", "Kuiwekea alama au kuiruka kama mwongozo unavyosema", "Kunakili jibu la mfanyakazi mwingine", "Kuondoka kwenye mradi"], answer: 1, why: "Vitu vilivyoharibika au vitupu vinawekewa alama, havibahatishwi." },
      { objective: "O3", q: "Swali la dhahabu (gold question) ni nini?", options: ["Malipo ya bonasi", "Swali kwa wauzaji wa dhahabu", "Kazi iliyofichwa yenye jibu linalojulikana inayokagua usahihi wako", "Jaribio la kulipia unalonunua"], answer: 2, why: "Majukwaa yanaficha kazi zenye majibu yanayojulikana katikati ya kazi yako ili kupima ubora." },
      { objective: "O3", q: "Wakati bora wa kufanya jaribio la kufuzu ni lini?", options: ["Mara moja, bila kusoma chochote", "Baada ya kusoma mwongozo na kufanya mazoezi, ukiwa umepumzika na intaneti isiyokatika", "Usiku sana ukiwa na bando dhaifu", "Ukiwa unafanya kazi nyingine"], answer: 1, why: "Maandalizi na mazingira mazuri yanakupa nafasi bora zaidi, na muda wa jaribio mara nyingi haulipwi." },
      { objective: "O3", q: "Nini kinaweza kutokea alama yako ya ubora ikibaki chini?", options: ["Unapata kazi zaidi", "Malipo yako yanaongezeka mara mbili", "Hakuna kinachotokea kamwe", "Unaweza kuondolewa kwenye mradi"], answer: 3, why: "Majukwaa yanatumia alama za ubora kuamua nani aendelee kupata kazi." },
      { objective: "O3", q: "Sheria za mradi zinasema usitumie zana za AI kufanya kazi. Unafanya nini?", options: ["Kufuata sheria na kufanya kazi mwenyewe", "Kutumia zana za AI kwa siri", "Kumwomba rafiki akutumie AI", "Kuacha kusoma sheria"], answer: 0, why: "Kuvunja sheria za mradi kunaweza kukupotezea mradi na akaunti yako." },
      { objective: "O4", q: "Ofa ipi ina uwezekano mkubwa zaidi kuwa halisi?", options: ["\"Lipa naira 5,000 ili kufungua kazi\"", "\"Weka crypto ili kutoa mapato yako\"", "Jukwaa ulilolipata wewe mwenyewe ambalo tovuti yake inasema kujiunga ni bure", "\"Pata dola 200 kwa siku kwa kupenda (like) video\""], answer: 2, why: "Kujiunga bure na kupatikana kwenye tovuti rasmi ni dalili za jukwaa halisi; nyingine ni mitindo ya ulaghai." },
      { objective: "O4", q: "\"Wakala\" anakulipa dola 30 kisha anakuomba urudishe 25. Hii ni nini?", options: ["Ulaghai: waajiri halisi hawakuombi urudishe pesa", "Kurudishiwa pesa kwa kawaida", "Kodi", "Bonasi ya mafunzo"], answer: 0, why: "FTC inaonya kwamba kulipwa kisha kuombwa urudishe pesa ni ulaghai." },
      { objective: "O4", q: "Ipi SI dalili ya hatari ya kazi bandia?", options: ["Wanaomba ada ili kuanza", "Wanaongea kwenye Telegram tu na wanakushinikiza uamue leo", "Wanaomba PIN yako ya benki", "Tovuti ya jukwaa lenyewe inaeleza kazi zake na inasema kujiunga ni bure"], answer: 3, why: "Tovuti rasmi iliyo wazi yenye kujiunga bure ni dalili nzuri; nyingine ni dalili za hatari." },
      { objective: "O5", q: "Ipi ni tabia imara ya akaunti?", options: ["Kutumia nywila ile ile kila mahali", "Nywila ya kipekee na kuingia kwa hatua mbili", "Kuandika nywila yako kwenye wasifu wako", "Kushiriki maelezo ya kuingia na familia"], answer: 1, why: "Nywila ya kipekee na kuingia kwa hatua mbili vinalinda akaunti na mapato yako." },
      { objective: "O5", q: "Unaweza kuweka picha za kazi zinazovutia kwenye kikundi chako cha WhatsApp?", options: ["Ndiyo, ukizififisha kidogo", "Ndiyo, baada ya kumaliza kazi", "Hapana: data ya kazi inabaki ndani ya jukwaa", "Ndiyo, kama kikundi ni kidogo"], answer: 2, why: "Data ya kazi ni siri; kuishiriki kunavunja sheria na kunaweza kuwadhuru watu halisi." },
      { objective: "O5", q: "Nani anapaswa kupata msimbo wako wa mara moja wa kuingia?", options: ["Hakuna mtu", "Huduma kwa wateja ya jukwaa kwenye gumzo", "Wakala wa ajira", "Rafiki anayekusaidia"], answer: 0, why: "Misimbo ya mara moja ni yako peke yako; yeyote anayeuomba anajaribu kuchukua akaunti yako." },
      { objective: "O6", q: "Ulipata dola 12 kwa wiki na ukatumia saa 8 kwa jumla. Malipo yako halisi kwa saa ni yapi?", options: ["Dola 12", "Dola 8", "Dola 4", "Dola 1.50"], answer: 3, why: "Dola 12 ÷ saa 8 = dola 1.50 kwa saa." },
      { objective: "O6", q: "Kauli ipi kuhusu malipo ya kazi ndogo ni kweli?", options: ["Ni sawa kila wiki", "Hayalingani na yanatofautiana kwa mradi, nchi na jukwaa", "Daima ni zaidi ya kazi ya eneo lako", "Yanawekwa na serikali"], answer: 1, why: "Upatikanaji wa kazi na viwango vya malipo hubadilika, kwa hiyo malipo hayalingani." },
      { objective: "O6", q: "Unaweka kumbukumbu za mapato yako ya mtandaoni. Unamuuliza nani kuhusu kuyatangaza kwa ajili ya kodi?", options: ["Wakala kwenye Telegram", "Hakuna mtu, malipo ya mtandaoni hayatozwi kodi kamwe", "Mamlaka ya kodi ya nchi yako", "Wafanyakazi wengine katika kikundi chako"], answer: 2, why: "Sheria za kodi zinatofautiana kwa nchi, kwa hiyo mamlaka ya kodi ya nchi ndiyo chanzo sahihi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  // jaribio la awali: maswali haya ya mtihani, yanayofanywa kabla ya Somo la 1, ili mtihani uonyeshe kila mwanafunzi amepiga hatua kiasi gani
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 4, 7, 9, 11, 12, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lebo za mazoezi", objective: "O2", notYet: "Chini ya 8 kati ya 10 zinalingana na majibu sahihi, au vitu visivyo wazi vilibahatishwa.", meets: "Angalau 8 kati ya 10 zinalingana na majibu sahihi na kitu kisicho wazi kimewekewa alama.", exceeds: "10 kati ya 10, pamoja na mwongozo wa ukurasa mmoja kwa maneno yako mwenyewe unaoeleza hali za mpakani." },
      { name: "Mpango wa jaribio na ubora", objective: "O3", notYet: "Hakuna mpango, au mpango ni \"fanya kazi haraka\" tu.", meets: "Hatua tano: soma mwongozo, fanya mazoezi, fanya jaribio ukiwa umepumzika, soma maoni, soma tena masasisho.", exceeds: "Pia inaorodhesha makosa yako mwenyewe kutoka mazoezi na sheria utakayoiangalia kwa kila moja." },
      { name: "Majukwaa yamekaguliwa", objective: "O4", notYet: "Jukwaa lilichaguliwa kutoka kiungo kwenye ujumbe, au ada ilikubaliwa.", meets: "Majukwaa mawili yamekaguliwa kwenye tovuti rasmi: kujiunga bure, nchi yako, malipo yanatumwaje.", exceeds: "Pia ina utafutaji wa ulaghai kwa kila moja na orodha ya dalili tano za ulaghai kwa maneno yako mwenyewe." },
      { name: "Sheria za usalama wa data", objective: "O5", notYet: "Sheria hazipo, au mpango unatoa misimbo, kitambulisho au data ya kazi kwenye gumzo.", meets: "Sheria tatu zilizo wazi: akaunti, kitambulisho na misimbo, na data ya kazi.", exceeds: "Kuingia kwa hatua mbili kumewashwa na sheria zinasema la kufanya mtu akiomba msimbo." },
      { name: "Daftari la malipo na mpango", objective: "O6", notYet: "Hakuna daftari, au daftari linahesabu muda uliolipwa tu.", meets: "Daftari linalohesabu dakika zote, kanuni ya malipo halisi kwa saa, na mpango wa wiki 4 wenye tarehe.", exceeds: "Pia linalinganisha matokeo na njia nyingine na linataja ujuzi mmoja wa kukuza kwa kazi yenye malipo bora." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (kwa rubriki)",
      "Wanafunzi wanaofaulu jaribio la kufuzu kwenye jukwaa halisi la bure ndani ya siku 60 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kulipa ada au amana kwa \"kazi ya mtandaoni\" baada ya kozi (lengo: hakuna)",
      "Wanafunzi wanaoweza kutaja malipo yao halisi kwa saa kutoka daftari lao wenyewe katika ufuatiliaji wa siku 30",
      "Wanafunzi wanaohamia kazi yenye malipo bora (mkaguzi, mradi wa wataalamu, au kazi katika kampuni ya data) ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu janja au kompyuta yenye intaneti (mazoezi yanaweza kufanywa kwenye karatasi)",
      "Karatasi na kalamu kwa mazoezi ya kuweka lebo, orodha ya dalili za ulaghai na daftari la malipo",
      "Akaunti ya barua pepe yenye kuingia kwa hatua mbili",
      "Kama dakika 60 hadi 75 kwa jumla, katika vipindi vifupi"
    ],
    facilitatorNotes: [
      "Fanyeni jaribio la awali pamoja. Kisha fanyeni mazoezi ya kuweka lebo kama kikundi na mlinganishe majibu: kutokubaliana ndiyo njia bora ya kufundisha hali za mpakani.",
      "Leteni jumbe halisi za ulaghai (majina na namba zikiwa zimeondolewa) na mkiruhusu kikundi kitafute dalili za hatari.",
      "Usipendekeze jukwaa moja kama chanzo cha uhakika cha mapato. Majukwaa hubadilika na hukubali nchi tofauti; wanafunzi wanakagua kurasa za kila moja zenyewe.",
      "Usikusanye kamwe nywila, misimbo au nyaraka za utambulisho za wanafunzi, na usiwaombe wajisajili wakati wa kipindi kama hawako tayari.",
      "Kuwa mkweli kuhusu malipo. Wasaidie wanafunzi kulinganisha kazi ndogo na njia za eneo lao na mafunzo kwa kazi zenye malipo bora.",
      "Pima kazi ya mwisho kwa rubriki, na toa maoni kuhusu mstari mmoja wa Bado kwa wakati."
    ]
  }
};
