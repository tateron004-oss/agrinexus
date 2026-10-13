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
  titleXFind: { name: "HHS Office of Population Affairs: Family Planning Clinic Locator", url: "https://opa-fpclinicdb.hhs.gov/" },
  healthcareGov: { name: "HealthCare.gov: Medicaid and CHIP", url: "https://www.healthcare.gov/medicaid-chip/getting-medicaid-chip/" },
  hotline: { name: "National Domestic Violence Hotline", url: "https://www.thehotline.org/" }
});

const TOPICS = {
  "womens-health-overview": {
    title: "Women's health: what I can help with",
    us: { sources: [], text: "I can explain, in plain words and with the official source, cervical screening and the HPV vaccine, breast health, birth control and family planning, periods, menopause, prenatal care, the time after a birth, and where to find care. Ask in your own words, for example: how often should I get a Pap smear, what are my birth control options, or where can I get low-cost family planning. I cannot diagnose, advise on medicines or doses, or keep a record of your cycle. If you have heavy bleeding, you are in labour, the baby has stopped moving, or you are in danger, get help now: call your local emergency number. I can also remind you about a check-up or an appointment: say something like remind me about my check-up on 3 March at 9 am. The notification on your phone will say only that you have a private reminder." }
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
      text: "Menopause is when your periods stop for good and you can no longer get pregnant; it is confirmed after 12 months in a row with no period, including spotting. The Office on Women's Health says the average age in the US is 52, with a usual range of about 45 to 58. The change before it, perimenopause, often starts in the mid to late 40s and lasts about 4 years on average. Common signs are irregular periods, hot flashes, trouble sleeping, mood swings, vaginal dryness and less interest in sex; some women have few or none. Talk with a provider if symptoms bother you, or if your periods stop before age 40. Vaginal bleeding after menopause is not normal, so see a provider as soon as you can. If you do not want to get pregnant, keep using birth control until a full year after your last period."
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
      text: "Two places to look. Health centers: the HRSA locator at findahealthcenter.hrsa.gov finds one near you; ask the center about its fees. Family planning clinics: the Title X program, run by the Office of Population Affairs, covers birth control counselling, pregnancy testing, breast and cervical cancer screening, and testing and treatment for STIs and HIV, and mainly serves people with low incomes or no insurance; find one at opa-fpclinicdb.hhs.gov and ask the clinic about cost. Coverage: Medicaid and CHIP cover low-income adults and families, including pregnant women; you can apply any time of year at HealthCare.gov or through your state Medicaid agency, rules vary by state, and applying is worth it even if you think you may not qualify. If someone is hurting you, the National Domestic Violence Hotline is free, confidential and open 24 hours: call 1-800-799-7233 or text START to 88788. I cannot tell which clinics offer which service, so ask when you call. To see clinics on a map, say: find a clinic near, and then your town."
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
      version = { text: `${who.text}${kenya ? kenya.text : ""}`, sources: [...who.sources, ...(kenya ? kenya.sources : [])] };
      allSources = WHO.SOURCES;
    } else if (id !== "womens-health-overview") {
      return null;
    }
  }
  if (!version) return null;
  const sources = version.sources.map(key => allSources[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  return { topic: id, title: topic.title, text: `${version.text}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, WHO_SOURCES: WHO.SOURCES, WHO_TOPICS: WHO.TOPICS, womensHealthAnswer });
