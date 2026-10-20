"use strict";

// A checked women's health guide, in plain words, for a woman using Kyro herself: cervical screening and the HPV vaccine, breast health, birth control and family planning, periods, menopause, prenatal care,
// the time after a birth, and how to find care. Information and navigation only: it does not diagnose, does not say what medicine to take or in what dose, does not track the body, and contacts no one.
//
// Every statement below was read from an official page on CHECKED_ON (listed in each topic's `sources`). Where a page could not be read (NIA, ACOG, HRSA's own pages), nothing from it is stated. Guidance changes (for
// example the US cervical screening recommendation is being updated), so each answer names its sources and the date, says it is general information and not medical advice, and says who to ask. To update an answer,
// read the official page again, change the text and CHECKED_ON, and run the tests. The WORDING needs clinician review before this is relied on, and the Kiswahili (not written yet) needs a fluent speaker.
//
// womensHealthAnswer(id, { us, country }) -> { topic, title, text, sources } or null.   The matching of a question to a topic is in womens-health-topics.js.

const WHO = require("./womens-health-who.js");

const CHECKED_ON = "13 October 2026";

const SOURCES = Object.freeze({
  cdcCervical: { name: "CDC: cervical cancer screening", url: "https://www.cdc.gov/cervical-cancer/screening/index.html" },
  cdcHpv: { name: "CDC: HPV vaccine", url: "https://www.cdc.gov/hpv/vaccines/index.html" },
  uspstfCervical: { name: "USPSTF: cervical cancer screening", url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening" },
  cdcBreast: { name: "CDC: breast cancer screening", url: "https://www.cdc.gov/breast-cancer/screening/index.html" },
  uspstfBreast: { name: "USPSTF: breast cancer screening", url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening" },
  cdcContraception: { name: "CDC: contraception", url: "https://www.cdc.gov/contraception/about/index.html" },
  owhCycle: { name: "Office on Women's Health: your menstrual cycle", url: "https://www.womenshealth.gov/menstrual-cycle/your-menstrual-cycle" },
  owhMenopause: { name: "Office on Women's Health: menopause basics", url: "https://www.womenshealth.gov/menopause/menopause-basics" },
  owhPrenatal: { name: "Office on Women's Health: prenatal care and tests", url: "https://www.womenshealth.gov/pregnancy/youre-pregnant-now-what/prenatal-care-and-tests" },
  cdcWarning: { name: "CDC Hear Her: urgent maternal warning signs", url: "https://www.cdc.gov/hearher/maternal-warning-signs/index.html" },
  cdcHearHer: { name: "CDC Hear Her: pregnant and postpartum", url: "https://www.cdc.gov/hearher/pregnant-postpartum/index.html" },
  nimhPerinatal: { name: "NIMH: perinatal depression", url: "https://www.nimh.nih.gov/health/publications/perinatal-depression" },
  lifeline988: { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
  hrsaFinder: { name: "HRSA: find a health center", url: "https://findahealthcenter.hrsa.gov/" },
  titleX: { name: "HHS Office of Population Affairs: Title X service grants", url: "https://opa.hhs.gov/grant-programs/title-x-service-grants" },
  titleXFind: { name: "HHS Office of Population Affairs: Family Planning Clinic Locator", url: "https://reproductivehealthservices.gov/" },
  healthcareGov: { name: "HealthCare.gov: Medicaid and CHIP", url: "https://www.healthcare.gov/medicaid-chip/getting-medicaid-chip/" },
  hotline: { name: "National Domestic Violence Hotline", url: "https://www.thehotline.org/" },
  // read again on 19 October 2026 for the topics added then: check-ups by age, STIs and HIV, PCOS, heart health and breastfeeding
  owhScreenings: { name: "Office on Women's Health: your health journey, screenings and discussions for every stage of life (2026)", url: "https://womenshealth.gov/sites/default/files/_documents/2026/nwhw/health_screenings_508_final.pdf" },
  owhHivTesting: { name: "Office on Women's Health: HIV testing", url: "https://womenshealth.gov/hiv-and-aids/hiv-and-aids-basics/hiv-testing" },
  owhHivPrevention: { name: "Office on Women's Health: HIV prevention", url: "https://womenshealth.gov/hiv-and-aids/hiv-prevention" },
  owhSti: { name: "Office on Women's Health: sexually transmitted infections", url: "https://womenshealth.gov/a-z-topics/sexually-transmitted-infections" },
  owhPcos: { name: "Office on Women's Health: polycystic ovary syndrome (PCOS)", url: "https://womenshealth.gov/a-z-topics/polycystic-ovary-syndrome" },
  cdcHeartWomen: { name: "CDC: women and heart disease", url: "https://www.cdc.gov/heart-disease/about/women-and-heart-disease.html" },
  cdcBreastfeeding: { name: "CDC: breastfeeding frequently asked questions", url: "https://www.cdc.gov/breastfeeding/php/faq/faq.html" }
});
const NEW_TOPICS_CHECKED_ON = "19 October 2026";

const TOPICS = {
  "womens-health-overview": {
    title: "Women's health: what I can help with",
    us: { sources: [], text: "I can explain, in plain words and with the official source, cervical screening and the HPV vaccine, breast health, birth control and family planning, periods, polycystic ovary syndrome, menopause, prenatal care, the time after a birth, breastfeeding, sexually transmitted infections and HIV, heart health, which check-ups and screenings to have at each age, and where to find care. Ask in your own words, for example: how often should I get a Pap smear, what are my birth control options, or where can I get low-cost family planning. I cannot diagnose, advise on medicines or doses, or keep a record of your cycle. If you have heavy bleeding, you are in labour, the baby has stopped moving, or you are in danger, get help now: call your local emergency number. I can also remind you about a check-up or an appointment: say something like remind me about my check-up on 3 March at 9 am. The notification on your phone will say only that you have a private reminder." }
  },
  "cervical-screening": {
    title: "Cervical screening and the HPV vaccine",
    us: {
      sources: ["cdcCervical", "uspstfCervical", "cdcHpv"],
      text: "Screening finds changes in the cervix early. The CDC says: at ages 21 to 29, a Pap test, and if it is normal the next one may be in 3 years. At 30 to 65, you and your doctor choose one of three: an HPV test alone, an HPV test with a Pap test, or a Pap test alone; after a normal HPV test, or a normal HPV and Pap together, the next may be in 5 years, and after a normal Pap alone, in 3. Over 65, you may be able to stop after enough normal results, so ask your doctor. The USPSTF recommends no screening under 21. A result that is not normal usually does not mean cancer; follow up with your doctor right away. For a Pap test, the CDC says to avoid sex, douching, vaginal medicines and spermicidal foam for 2 days before; having your period does not stop either test. The HPV vaccine: the CDC recommends it at 11 or 12 (it can start at 9), two doses if started before 15 and three if later, catch-up through 26, and adults 27 to 45 may choose it after talking with a doctor. The USPSTF statement is from 2018 and is being updated, so ask your doctor what applies to you. To be reminded, say something like remind me about my Pap smear on 3 March at 9 am."
    }
  },
  "breast-health": {
    title: "Breast health and screening",
    us: {
      sources: ["cdcBreast", "uspstfBreast"],
      text: "The USPSTF recommends a mammogram every 2 years for women aged 40 to 74. For women 75 and older it says the evidence is not enough to say, so decide with your clinician. The CDC says women at higher than average risk may follow a different schedule, so talk with your doctor about when to start and how often. The CDC also says most insurance plans must cover screening mammograms with no out-of-pocket cost from age 40. Tell your doctor about any change you notice in your breasts, such as a lump, pain, or a change in size. A doctor or nurse can do a breast exam. To be reminded, say something like remind me about my mammogram on 3 March at 9 am."
    }
  },
  "contraception": {
    title: "Birth control and family planning",
    us: {
      sources: ["cdcContraception"],
      text: "The CDC lists these methods. Hormonal: IUDs, the implant, the shot, the pill, the patch and the vaginal ring. Barrier: condoms (male and female), the diaphragm, the cervical cap, the sponge and spermicides. Others: fertility awareness methods, and breastfeeding for a time after birth. Permanent: tubal surgery, and vasectomy for men. With typical use the CDC gives these failure rates: implant 0.1%, IUDs 0.1% to 0.8%, the shot 4%, pill, patch and ring 7%, male condom 13%. Emergency contraception is for after unprotected sex or a method that failed, such as a broken condom: a copper IUD can be put in within 5 days, and emergency pills can be taken up to 5 days after and work better the sooner they are taken; some are sold over the counter and some need a prescription. It is not a regular method. The CDC says the choice should be voluntary and informed. A doctor, nurse or family planning clinic can explain the options; several methods are prescribed or put in by a clinician."
    }
  },
  "periods-cycle": {
    title: "Periods and the menstrual cycle",
    us: {
      sources: ["owhCycle"],
      text: "A typical cycle is about 28 days, and a normal cycle can last anywhere from 24 to 38 days. The Office on Women's Health says to call a doctor or nurse if: your cycles are shorter than 24 or longer than 38 days; they are still irregular more than 3 years after your first period; you have no period for 90 days and are not pregnant or breastfeeding; periods start before age 8, or you have had no first period by 15; bleeding often lasts longer than 8 days; you soak through a pad or tampon every 1 to 2 hours; you pass clots bigger than a quarter; pain or bleeding makes you miss school or work; or you are worried about your cycle. If you use tampons and get a sudden high fever, vomiting, a rash or muscle aches, remove the tampon right away and call 911 or go to the hospital."
    }
  },
  "menopause": {
    title: "Menopause",
    us: {
      sources: ["owhMenopause"],
      // (this page changed on 19 October 2026 and was read again that day: the usual ages are now 45 to 55, and the signs are on a separate page)
      checkedOn: "19 October 2026",
      text: "Menopause is when your periods stop for 12 months in a row, including no spotting. After it, your ovaries make very little estrogen and progesterone and stop releasing eggs, and you can no longer get pregnant. The Office on Women's Health says the change usually happens between ages 45 and 55, and the average age in the US is 52. The time before it, perimenopause, usually begins in the mid to late 40s, though some women notice symptoms in their mid to late 30s. It lasts about four years on average but can last up to 10, and your periods may become irregular while you can still get pregnant. Symptoms vary from person to person, and the hormone changes can affect sleep, mood, hair, skin, bones, joints, muscles, bladder, genital tissue and weight. Hot flashes and night sweats last 7 to 12 years on average. Your provider can usually tell whether you are in perimenopause from your age, your symptoms and changes in your periods; blood hormone tests are not usually needed. If your periods stop before age 40, you can ask about testing. Vaginal bleeding after menopause is not normal: see a provider right away. You can still get pregnant during perimenopause, so talk with your provider about birth control, and know that menopause does not protect you from sexually transmitted infections."
    }
  },
  "prenatal-care": {
    title: "Prenatal care",
    us: {
      sources: ["owhPrenatal", "cdcWarning", "cdcHearHer"],
      text: "Regular checkups and tests during pregnancy help keep you and your baby healthy and help catch problems early. The Office on Women's Health gives this schedule: about once a month from week 4 to week 28, twice a month from week 28 to 36, then every week until the birth; a higher-risk pregnancy needs more visits. After 28 weeks, track the baby's movements: call your doctor if you count fewer than 10 movements in two hours or the baby is moving less than usual, and call right away if the baby is not moving at all. Get medical care immediately for any of these warning signs, in pregnancy and for a year after the birth, says the CDC: a headache that will not go away, dizziness or fainting, changes in vision, a fever of 100.4 F or more, extreme swelling of the hands or face, trouble breathing, chest pain or a fast heartbeat, severe belly pain, bleeding or fluid leaking from the vagina, the baby moving less or stopping, thoughts of harming yourself or your baby, or overwhelming tiredness. At any appointment, say that you are or were recently pregnant. To be reminded of a visit, say something like remind me about my prenatal visit on Thursday at 10 am."
    }
  },
  "postpartum": {
    title: "Care after the birth",
    us: {
      sources: ["cdcHearHer", "nimhPerinatal", "lifeline988"],
      text: "Go to all of your checkups after the birth, says the CDC. Some tiredness and pain in the first weeks is common, and the warning signs listed under prenatal care apply for a full year after the birth. Mood: the NIMH says the baby blues usually fade within about 2 weeks, but postpartum depression usually does not get better without treatment. Signs include a sad, anxious or empty mood most of the day for at least 2 weeks, hopelessness, guilt, losing interest, trouble sleeping or concentrating, trouble bonding with the baby, and thoughts of death or of harming yourself or the baby. See a provider if you have these, or if your mood changes are severe or last more than 2 weeks after the birth. Help is free and confidential: the National Maternal Mental Health Hotline, call or text 1-833-852-6262, any time, in English or Spanish; and 988, call or text, any time. If you have thoughts of suicide, call or text 988. If you are seeing or hearing things that are not there, or feel your life or the baby's is in danger, call 911 or go to the nearest emergency room."
    }
  },
  "finding-care": {
    title: "Where to get women's health care",
    us: {
      sources: ["hrsaFinder", "titleX", "titleXFind", "healthcareGov", "hotline"],
      text: "Two places to look. Health centers: the HRSA locator at findahealthcenter.hrsa.gov finds one near you; ask the center about its fees. Family planning clinics: the Title X program, run by the Office of Population Affairs, covers birth control counselling, pregnancy testing, breast and cervical cancer screening, and testing and treatment for STIs and HIV, and mainly serves people with low incomes or no insurance; find one at reproductivehealthservices.gov and ask the clinic about cost. Coverage: Medicaid and CHIP cover low-income adults and families, including pregnant women; you can apply any time of year at HealthCare.gov or through your state Medicaid agency, rules vary by state, and applying is worth it even if you think you may not qualify. If someone is hurting you, the National Domestic Violence Hotline is free, confidential and open 24 hours: call 1-800-799-7233 or text START to 88788. I cannot tell which clinics offer which service, so ask when you call. To see clinics on a map, say: find a clinic near, and then your town."
    }
  },
  "checkups": {
    title: "Check-ups and screenings by age",
    us: {
      sources: ["owhScreenings", "owhHivTesting"],
      checkedOn: NEW_TOPICS_CHECKED_ON,
      text: "The Office on Women's Health says to see your health care provider every year: the visit can cover your heart health, your safety and well-being, your birth control needs, sun exposure, and your use of tobacco, alcohol and other substances. Its chart of screenings, which are meant to be repeated through life and may change with age or family history, lists: a Pap test for cervical cancer at 21 and every 3 years after, with a talk with your provider after 30 because the advice changes; testing for sexually transmitted infections every year, or sooner if symptoms appear or you have a new partner; cholesterol screening every 5 years; a mammogram every 1 to 2 years starting at 40 for women at average risk; colon cancer screening at 45; lung cancer screening at 50 for women with a smoking history; and a bone measurement test at 65 and older. It also lists talks about your breast health, your personal and family health history, menopause and its symptoms, and urinary leaking if it is a problem. If you have a BRCA1 or BRCA2 gene change or a strong family history of breast or ovarian cancer, your provider may advise starting breast screening earlier and more often. The Office on Women's Health also says all women and girls older than 15 need an HIV test at least once, and every pregnant woman should be tested as early as possible in her pregnancy. The chart is a starting point, not a personal plan: ask your provider what is right for you. My breast health answer gives the US Preventive Services Task Force's mammogram schedule, which differs a little. To be reminded of a check-up, say something like remind me about my check-up on 3 March at 9 am."
    }
  },
  "sti-hiv": {
    title: "Sexually transmitted infections and HIV",
    us: {
      sources: ["owhSti", "owhHivPrevention", "owhHivTesting"],
      checkedOn: NEW_TOPICS_CHECKED_ON,
      text: "An STI is an infection passed from one person to another through sexual contact. The Office on Women's Health says many STIs cause only mild symptoms or none, so testing is the main way to know. Some STIs can be cured and some cannot; for the ones that cannot, such as herpes or HIV, medicines can help manage them. To lower your risk: condoms are the best way to prevent STIs when you have sex, and male latex condoms are the most effective way to prevent HIV and other STIs (hormonal birth control and diaphragms do not protect against STIs); make sure you and your partner are tested; your risk goes up with the number of partners; and there are vaccines against HPV and hepatitis B. For HIV: PrEP is a pill taken every day by people without HIV who are at high risk, for example with a partner who has HIV; PEP must be started within three days of exposure and is taken for 28 days, so if that applies to you, get care right away; and do not share needles. All women and girls older than 15 need an HIV test at least once, and every pregnant woman should be tested as early as possible in pregnancy, because early HIV treatment in pregnancy can greatly lower the chance of passing the virus to the baby. Untreated syphilis in pregnancy results in infant death up to 40% of the time, so tell your provider if you are pregnant or planning to be. If you think you were exposed to HIV, get tested: antibodies usually appear 3 to 12 weeks after infection, so a test taken too soon can miss an early infection, and newer tests can find the virus 9 to 11 days after exposure. Many clinics offer free or low-cost testing: ask me where to find care."
    }
  },
  "pcos": {
    title: "Polycystic ovary syndrome (PCOS)",
    us: {
      sources: ["owhPcos"],
      checkedOn: NEW_TOPICS_CHECKED_ON,
      text: "PCOS is a common health problem caused by an imbalance of reproductive hormones. It can keep eggs from developing or being released normally and can cause missed or irregular periods. The Office on Women's Health says about 1 in 10 women of childbearing age have it, women of all races and ethnicities can develop it, and the risk may be higher with obesity or a family history of PCOS. Signs and symptoms: irregular or infrequent periods, extra hair on the face or body, acne, thinning scalp hair, weight gain or trouble losing weight, darkened skin in body creases, and skin tags. There is no single test: a doctor reviews your medical history, examines you, may order an ultrasound, and runs blood tests to rule out other causes; a diagnosis generally needs at least two of these: irregular periods, signs of high androgens, high androgen levels in the blood, or multiple ovarian cysts. PCOS is linked to diabetes or prediabetes, high blood pressure, unhealthy cholesterol, sleep apnea, depression and anxiety, and cancer of the uterine lining; researchers do not yet know whether PCOS causes these problems or they cause PCOS. There is no cure, but symptoms can be managed with a plan made for you: healthy eating and regular activity (even a 10% weight loss helps), options for unwanted hair such as creams, laser treatment or electrolysis, hormonal birth control to regulate periods and improve acne and hair growth, and anti-androgen medicines or metformin, which a doctor may use although the FDA has not approved them for PCOS. PCOS is one of the most common treatable causes of infertility: ask your doctor about the options, and about reaching a healthy weight and blood sugar before pregnancy, because PCOS is linked to higher rates of miscarriage, gestational diabetes, preeclampsia and C-section. A doctor should guide diagnosis and treatment. The Office on Women's Health Helpline, 1-800-994-9662 (Monday to Friday, 9 a.m. to 6 p.m. Eastern), gives information but not medical advice."
    }
  },
  "heart-health": {
    title: "Heart health in women",
    us: {
      sources: ["cdcHeartWomen"],
      checkedOn: NEW_TOPICS_CHECKED_ON,
      text: "The CDC says heart disease caused about 1 in 5 female deaths in the United States in 2023, and more than 60 million women (44%) are living with some form of heart disease. Some women have no symptoms. Others may feel angina, a dull or heavy chest discomfort, or pain in the neck, jaw, throat, upper belly or back, and may have nausea, vomiting or tiredness that does not go away. Risk factors: high blood pressure, which the CDC says is often underdiagnosed in women and has no symptoms; high LDL cholesterol; smoking; diabetes; overweight; an unhealthy diet; being inactive; heavy drinking; and stress or depression. Some are linked to reproduction and pregnancy: an early first period, early menopause, polycystic ovary syndrome, gestational diabetes, preterm delivery, and high blood pressure in pregnancy, and the CDC says pregnant women with high blood pressure have twice the risk of heart disease later in life. To lower your risk: check your blood pressure regularly and tell your care team about high readings, get at least 150 minutes of physical activity a week, do not smoke (ask about ways to quit), and talk with your doctor about diabetes screening, cholesterol and triglyceride checks, healthy eating, moderate alcohol use and managing stress. If you have chest pain, shortness of breath, palpitations, sudden tiredness, or swelling in your feet, ankles, legs or belly, the CDC says to call 9-1-1 right away."
    }
  },
  "breastfeeding": {
    title: "Breastfeeding",
    us: {
      sources: ["cdcBreastfeeding"],
      checkedOn: NEW_TOPICS_CHECKED_ON,
      text: "The CDC says the Dietary Guidelines for Americans, the American Academy of Pediatrics and WHO recommend exclusive breastfeeding for about the first 6 months, then adding other foods from around 6 months while continuing to breastfeed until the child is 2 years or older. It says breast milk is the best source of nutrition for most babies; breastfed babies have a lower risk of conditions including asthma, obesity, type 1 diabetes and sudden infant death syndrome, and for mothers breastfeeding is linked to a lower risk of breast cancer, ovarian cancer, type 2 diabetes and high blood pressure. Only a few medicines are not recommended while breastfeeding, and most that pass into breast milk have little or no effect on the baby or the milk supply; your provider can weigh the risks and benefits of a medicine, and the LactMed database covers specific medicines. There are rare situations where breastfeeding is not recommended, and the CDC says breast milk has been implicated in passing HIV from mother to baby, so if you have HIV, talk with your provider about feeding your baby before the birth. For help: the Office on Women's Health has information for going back to work or school, and WIC clinics, WIC Breastfeeding Support, lactation consultants and the American Academy of Pediatrics offer support."
    }
  }
};

const CLOSING = "This is general information, not medical advice. For your own health, talk to a doctor, nurse or health worker.";

// the US sources are used for a person in the United States; everyone else is given the WHO version of the topic (see the WHO texts), and a topic that has none yet is not answered here
function womensHealthAnswer(id, { us = true, country = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  let version = topic.us;
  let allSources = SOURCES;
  if (!us) {
    // the overview is the same everywhere; every other topic has a WHO version
    const who = WHO.TOPICS[id];
    if (who) {
      const kenya = country === "ke" && who.kenya ? who.kenya : null;
      version = { text: `${who.text}${kenya ? kenya.text : ""}`, sources: [...who.sources, ...(kenya ? kenya.sources : [])], checkedOn: who.checkedOn };
      allSources = WHO.SOURCES;
    } else if (id !== "womens-health-overview") {
      return null;
    }
  }
  if (!version) return null;
  const sources = version.sources.map(key => allSources[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${version.checkedOn || CHECKED_ON}).` : "";
  return { topic: id, title: topic.title, text: `${version.text}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, WHO_SOURCES: WHO.SOURCES, WHO_TOPICS: WHO.TOPICS, womensHealthAnswer });
