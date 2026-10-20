"use strict";

// A checked guide for PARENTS and caregivers: talking with a child about their body, growing up, relationships and staying safe; the signs that a child may be being abused; what to do if a child tells you; what to do if a young
// girl is pregnant; and who to call. It was asked for by the owner after a call with people working with girls in poor communities in the United States and in Africa, where pre-teen pregnancy, rape and molestation are real, and where
// parents have nowhere to go for information.
//
// It is information from official pages, nothing more. Kyro cannot find out what happened to a child, say whether abuse happened, give legal advice or replace a doctor, a child protection service or the police, and the guide says so.
// Every statement was read from the pages in SOURCES on CHECKED_ON through a summarising fetch tool, so the wording must be compared with the pages and REVIEWED BY A CHILD PROTECTION SPECIALIST before this is relied on. What the pages
// did NOT say is not here: teaching young children about "body safety" and "no secrets", how to question a child (and what not to ask), and each country's reporting law are not in this guide because no official page that could be read said them.
// The United States version (CDC, Childhelp, the Children's Bureau) is for a person in the United States; everyone else gets the version built on WHO, UNICEF and the child helplines, with Kenya's lines added in Kenya.
//
// parentsGuideAnswer(id, { us, country }) -> { topic, title, text, sources: [{ name, url }] } or null.   The matching of a question to a topic is in public/kyro-parents-topics.js.

const CHECKED_ON = "19 October 2026";

const SOURCES = Object.freeze({
  cdcCsa: { name: "CDC: about child sexual abuse", url: "https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html" },
  cdcPrevention: { name: "CDC: preventing child abuse and neglect", url: "https://www.cdc.gov/child-abuse-neglect/prevention/index.html" },
  cdcTalking: { name: "CDC: talking with your teens about sex", url: "https://www.cdc.gov/healthy-youth-parent-resources/conversation-tips/index.html" },
  cdcStiChildren: { name: "CDC: sexual assault or abuse of children (STI treatment guidelines, 2021)", url: "https://www.cdc.gov/std/treatment-guidelines/sexual-assault-children.htm" },
  childhelpSigns: { name: "Childhelp: identify abuse", url: "https://childhelphotline.org/identify-abuse/" },
  childhelpParents: { name: "Childhelp: resources for parents", url: "https://childhelphotline.org/resources-for-parents/" },
  acfReport: { name: "Administration for Children and Families: what to do if you suspect child abuse or neglect", url: "https://acf.gov/cb/faq/can6" },
  unicefPeriods: { name: "UNICEF: talking about periods at home", url: "https://www.unicef.org/parenting/health/talking-about-periods-at-home" },
  whoMaltreatment: { name: "WHO: child maltreatment fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/child-maltreatment" },
  whoViolenceChildren: { name: "WHO: violence against children fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/violence-against-children" },
  whoAdolescentPregnancy: { name: "WHO: adolescent pregnancy fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/adolescent-pregnancy" },
  whoPostRape: { name: "WHO: availability of post-rape care (indicator definition)", url: "https://www.who.int/data/gho/indicator-metadata-registry/imr-details/availability-of-post-rape-care" },
  childlineKenya: { name: "Childline Kenya: the child helpline 116", url: "https://www.childlinekenya.co.ke/" },
  unwomen1195: { name: "UN Women Africa: Kenya's national toll-free helpline 1195", url: "https://africa.unwomen.org/en/stories/news/2024/10/kenyas-national-toll-free-helpline-1195-a-lifeline-for-gender-based-violence-survivors" },
  childHelplineDirectory: { name: "Child Helpline International: find your local child helpline", url: "https://www.childhelplineinternational.org/helplines/" },
  ncaModel: { name: "National Children's Alliance: how a Children's Advocacy Center works", url: "https://www.nationalchildrensalliance.org/cac-model/" },
  ncaFind: { name: "National Children's Alliance: find a Children's Advocacy Center near you", url: "https://www.nationalchildrensalliance.org/nca-members/" },
  hrsaFind: { name: "HRSA: find a health center near you", url: "https://findahealthcenter.hrsa.gov/" }
});

// Finding help near the family, United States only: the two official finders, read on CHECKED_ON. Kenya and the rest of Africa have none here, because no official finder there could be opened and read; the child helplines and the
// health facility are the way. National Children's Alliance says that when police or child protective services believe a child may be experiencing abuse, a caregiver or other safe adult brings the child to a Children's Advocacy Center, where the
// child tells their story once to a trained interviewer, and that centers offer therapy, medical exams, courtroom preparation and victim advocacy. HRSA says it funds about 1,400 health centers, with more than 16,000 service sites, in every state.
const NEAR_YOU_CAC = " Near you: the National Children's Alliance says a Children's Advocacy Center is a child-focused place where, when police or child protective services believe a child may be experiencing abuse, a caregiver or other safe adult brings the child, who tells their story once to a trained interviewer; centers offer therapy, medical exams, courtroom preparation and victim advocacy. Its finder shows the centers near you.";
const NEAR_YOU_HEALTH = " For health care near you, HRSA funds about 1,400 health centers, with more than 16,000 service sites, in every state; its Find a Health Center tool shows the nearest. Ask the center about cost before you go.";

// what a person outside the United States is told where a number is concerned: Kenya's two lines (read from Childline Kenya and UN Women), and for any other country the directory of child helplines
const KENYA_LINES = " In Kenya, Childline Kenya, the national child helpline, is 116: it is free from a mobile phone, open 24 hours, and takes calls from children and from adults, who can also report on a child's behalf, confidentially and anonymously; it can also be reached by call or text on 0724 555 251, 0725 352 107 or 0732 263 554, or by WhatsApp on +254 722 116 116. Childline Kenya says it gives counselling and refers children to child protection services, medical support, legal aid, rescue and temporary shelter. Kenya's national helpline 1195 is also toll-free and open 24 hours, with trained counsellors; UN Women says it can connect you with shelters, legal aid, health providers and the police.";
const KENYA_SOURCES = ["childlineKenya", "unwomen1195"];
const OTHER_COUNTRIES = " For a child helpline in your own country, Child Helpline International lists them by country: its Africa list includes, for example, Nigeria's Cece Yara Child Helpline, Uganda's Sauti 116 and Childline South Africa. Open the entry for your country to find its number and check it before you rely on it.";

const TOPICS = Object.freeze({
  "parents-overview": {
    title: "Talking with your child about growing up and staying safe: what I can help with",
    us: {
      sources: ["childhelpParents", "acfReport"],
      text: "I can help you talk with your child about their body, growing up, relationships and staying safe; explain the signs that a child may be being abused; walk you through what to do if your child tells you something; and explain what to do if a young girl is pregnant. I give general information from official sources, with the source shown, and I can tell you who to call. Ask in your own words, for example: how do I talk to my daughter about her period, what are the signs of child sexual abuse, what do I do if my child tells me she was abused, or my daughter is 12 and pregnant, who do I call. I cannot find out what happened to a child, say whether abuse happened, give legal advice, or replace a doctor, a child protection service or the police. If a child is in danger right now, call 911. To talk it through with a counselor, the Childhelp National Child Abuse Hotline is 1-800-422-4453: call or text, 24 hours a day, 7 days a week, and you can also text GO to 800.422.4453."
    },
    who: {
      sources: ["childHelplineDirectory"],
      text: "I can help you talk with your child about their body, growing up, relationships and staying safe; explain the signs that a child may be being abused; walk you through what to do if your child tells you something; and explain what to do if a young girl is pregnant. I give general information from official sources, with the source shown, and I can tell you who to call. Ask in your own words, for example: how do I talk to my daughter about her period, what are the signs of child sexual abuse, what do I do if my child tells me she was abused, or my daughter is 12 and pregnant, who do I call. I cannot find out what happened to a child, say whether abuse happened, give legal advice, or replace a doctor, a child protection service or the police. If a child is in danger right now, call your local emergency number, or take the child to the nearest health facility."
    },
    kenya: { sources: KENYA_SOURCES, text: KENYA_LINES }
  },
  "talk-with-your-child": {
    title: "How to talk with your child about their body, growing up and relationships",
    us: {
      sources: ["cdcTalking", "unicefPeriods", "cdcPrevention"],
      text: "Start early and keep talking. The CDC says to have a series of discussions that begin early, happen often and continue over time, not one big talk, and UNICEF says that starting the conversation about periods before a girl's first period is the best way to make sure she is prepared. Look for natural moments: when she asks about puberty or changes in her body, a TV show or movie, a text, shopping for period products, or the car, which the CDC calls a private space where a teen does not have to look at you but can hear what you say. How to begin: ask what she already knows and how she feels about it, then use clear language and simple answers that fit her age, and stick to the facts. What to say: UNICEF says to reassure her that periods are a normal part of growing up and that there is no reason to be scared or ashamed of the changes. The CDC says to talk about healthy, respectful relationships and what you expect, not only the risks. Stay relaxed and open: the CDC says it is okay to say you feel uncomfortable or do not have all the answers, to avoid overreacting, to say that you value their opinion even if it is different from yours, to encourage questions, and to be ready to give honest answers. UNICEF also says to talk with sons and other male figures about periods and puberty, not to treat it as a secret for girls only. The CDC says teens who talk with their parents about sex are more likely to delay it, and that you should set aside time each day to talk or play with your child and know who is supervising your child when they are away from home. If your child is hiding something and will not talk, keep making time each day to talk or play together, as the CDC advises, stay calm rather than overreacting, and if you are worried about their safety, ask me about the signs of abuse."
    },
    who: {
      sources: ["unicefPeriods", "cdcTalking", "whoMaltreatment"],
      text: "Start early and keep talking. UNICEF says it is best to start the conversation early and have an ongoing, open dialogue, and that starting the conversation about periods before a girl's first period is the best way to make sure she is prepared. Look for natural moments, such as when she asks about puberty or changes in her body. How to begin: ask her whether she already knows about it and how she feels about it, use clear language, give simple answers that fit her age, and stick to the facts. What to say: reassure her that periods are a normal part of growing up and that there is no reason to be scared or ashamed of the changes. UNICEF also says it is important to talk to sons and other male figures about periods and puberty. The CDC in the United States adds that the talk should be a series of discussions that begin early, happen often and continue over time; that it is okay to say you feel uncomfortable or do not have all the answers; to avoid overreacting; to value their opinion even if it is different from yours; to encourage questions and give honest answers; and to talk about healthy, respectful relationships and what you expect, not only the risks. WHO says that learning nurturing, non-violent parenting, in sessions run by nurses, social workers or trained community workers, helps prevent child maltreatment, so ask at your clinic or in your community whether such sessions exist."
    }
  },
  "signs-of-abuse": {
    title: "Signs that a child may be being sexually abused",
    us: {
      sources: ["cdcCsa", "childhelpSigns"],
      text: "The CDC says child sexual abuse is a child (a person under 18) being involved in sexual activity that the child does not fully understand and cannot give informed consent to. About 90% of it is committed by someone the child or the family knows and trusts, not by strangers. The CDC says at least one in four girls and one in 20 boys in the United States experience it, and many cases are never reported. Childhelp lists these signs. Physical: difficulty sitting or walking, bowel problems; torn, stained or bloody underclothes; bleeding, bruises, pain, swelling or itching of the genital area; frequent urinary tract or yeast infections; any sexually transmitted infection or its symptoms. Behavior: the child says it happened; does not want to change clothes, for example for sports; seems withdrawn, depressed or anxious; eating problems or being preoccupied with their body; aggression, trouble with friends or trouble at school; poor self-image or self-care; a sudden drop in school attendance or grades; using substances, running away, recklessness or suicide attempts; trouble sleeping, fear of bedtime, bed-wetting at an older age or nightmares; and sexual behavior or knowledge that is advanced or unusual for the child's age. Childhelp says signs alone do not prove abuse, and that state definitions and procedures differ. If you are worried, you can talk it through with a Childhelp counselor: call or text 1-800-422-4453, 24 hours a day. If a child is in danger right now, call 911."
    },
    who: {
      sources: ["whoMaltreatment", "childhelpSigns", "cdcCsa"],
      text: "WHO says child maltreatment, which includes sexual abuse, is often hidden, and only a fraction of children who are abused ever get support from official services; WHO also says 1 in 5 women and 1 in 7 men report having been sexually abused as a child. The CDC in the United States says that about 90% of child sexual abuse is committed by someone the child or the family knows and trusts, not by strangers, and that a child cannot give informed consent. Childhelp, a United States child abuse hotline, lists these signs. Physical: difficulty sitting or walking; torn, stained or bloody underclothes; bleeding, bruises, pain, swelling or itching of the genital area; frequent urinary tract or yeast infections; any sexually transmitted infection or its symptoms. Behavior: the child says it happened; does not want to change clothes; seems withdrawn, depressed or anxious; eating problems; aggression or trouble with friends; poor self-image; a sudden drop in school attendance or grades; using substances, running away or suicide attempts; trouble sleeping, nightmares, fear of bedtime or bed-wetting at an older age; and sexual behavior or knowledge that is advanced or unusual for the child's age. Childhelp says signs alone do not prove abuse. If you are worried, speak to a health worker or a child helpline; ask me who to call."
    },
    kenya: { sources: KENYA_SOURCES, text: KENYA_LINES }
  },
  "child-tells-you": {
    title: "What to do if your child tells you they were abused",
    us: {
      sources: ["childhelpParents", "acfReport", "cdcStiChildren", "whoPostRape"],
      text: "If a child is in immediate danger, call 911. The first step, Childhelp says, is to believe your child. Then plan how to keep your child safe and which agencies to contact; a Childhelp counselor can help you with that, 24 hours a day, 7 days a week: call or text 1-800-422-4453 (Spanish is spoken). To report abuse: every state has an agency that investigates child abuse in the home, often called Child Protective Services, and most states have a toll-free number; Childhelp and the Child Welfare Information Gateway can tell you your state's number and how to make a report. Medical care: the CDC's guidance for children who may have been sexually abused says the examination should be done by an experienced clinician in a way that limits trauma, that a second visit about 2 to 6 weeks after the abuse should be scheduled, and that a clinician should consider medicine to prevent HIV when the child is seen within 72 hours of the abuse. WHO lists time limits for care after a rape: medicine to prevent HIV within 72 hours, and emergency contraception within 120 hours, which is 5 days. WHO's page is written for people who have been raped and does not mention children, so a doctor or nurse will decide what your child needs, but go as soon as you can and tell them when it happened. The CDC says a health care provider who has reasonable cause to suspect child abuse must report it under state or territory law. I cannot examine your child, investigate, or decide what happened: a health worker and child protection can."
    },
    who: {
      sources: ["whoPostRape", "whoViolenceChildren", "whoMaltreatment", "childhelpParents", "childHelplineDirectory"],
      text: "If a child is in danger right now, call your local emergency number or take the child to the nearest health facility. Childhelp, a United States child abuse hotline, says the first step is to believe your child, and then to plan how to keep your child safe and which agencies to contact. Medical care: WHO lists time limits for care after a rape: medicine to prevent HIV within 72 hours, and emergency contraception within 120 hours, which is 5 days. WHO's page is written for people who have been raped and does not mention children, so a doctor, nurse or clinical officer will decide what your child needs, but go to a health facility as soon as you can and tell them when it happened. WHO says children who have experienced violence need effective emergency care and appropriate psychosocial support, and that child maltreatment is often hidden. To talk it through or report, call a child helpline. I cannot examine your child, investigate, or decide what happened: a health worker and child protection can."
    },
    kenya: { sources: KENYA_SOURCES, text: KENYA_LINES }
  },
  "young-girl-pregnant": {
    title: "If a young girl is pregnant",
    us: {
      sources: ["whoAdolescentPregnancy", "cdcCsa", "childhelpParents", "acfReport"],
      text: "A pregnancy in a young girl needs health care and protection. Take her to a health care provider as soon as you can. WHO says adolescent mothers face higher risks of eclampsia and infections than women aged 20 to 24, and that their babies face higher risks of low birth weight and preterm birth; it calls for access to quality maternal care for pregnant and parenting adolescents. WHO also says child sexual abuse increases the risk of unintended pregnancy. In the United States, the CDC defines child sexual abuse as involving a person under 18 in sexual activity that the child cannot give informed consent to, and says about 90% of it is committed by someone the child or the family knows and trusts; laws differ by state, so ask a health care provider or child protection about what applies to your situation. To talk it through, the Childhelp National Child Abuse Hotline is 1-800-422-4453: call or text, 24 hours a day. To report concerns, every state has an agency that investigates child abuse, often called Child Protective Services, with a toll-free number; Childhelp can tell you your state's. If she or anyone is in immediate danger, call 911. I cannot tell you what happened or what to do about the pregnancy: a health care provider and child protection can."
    },
    who: {
      sources: ["whoAdolescentPregnancy", "whoMaltreatment", "childHelplineDirectory"],
      text: "A pregnancy in a young girl needs health care and protection. Take her to a health facility as soon as you can. WHO says adolescent mothers face higher risks of eclampsia and infections than women aged 20 to 24, and that their babies face higher risks of low birth weight, preterm birth and severe newborn conditions; it calls for access to quality maternal care for pregnant and parenting adolescents. WHO also says child sexual abuse increases the risk of unintended pregnancy, and that child maltreatment is often hidden. Laws differ by country, so ask a health worker or a child helpline what applies to your situation. If she is in danger right now, call your local emergency number or go to the nearest health facility. I cannot tell you what happened or what to do about the pregnancy: a health worker and child protection can."
    },
    kenya: { sources: KENYA_SOURCES, text: KENYA_LINES }
  },
  "get-help-now": {
    title: "Who to call about a child who may be being abused",
    us: {
      sources: ["acfReport", "childhelpParents"],
      text: "If a child or anyone is in immediate danger, call 911. For advice or to talk it through, the Childhelp National Child Abuse Hotline is 1-800-422-4453: call or text, 24 hours a day, 7 days a week; you can also text GO to 800.422.4453 or use its live chat; Spanish is spoken. Childhelp can also tell you where and how to report in your state. To report suspected abuse, contact child protective services in the state where it is happening: each state has trained professionals who can evaluate the situation and decide whether help and services are needed, and most states have a toll-free number to report suspected child abuse and neglect. The Child Welfare Information Gateway lists the reporting numbers for each state."
    },
    who: {
      sources: ["childHelplineDirectory"],
      text: "If a child is in danger right now, call your local emergency number or take the child to the nearest health facility. A child helpline can give advice, listen, and tell you where to report. Child Helpline International lists the child helplines by country: its Africa list includes, for example, Nigeria's Cece Yara Child Helpline, Uganda's Sauti 116 and Childline South Africa. Open the entry for your country to find its number, and check it before you rely on it."
    },
    kenya: { sources: KENYA_SOURCES, text: KENYA_LINES }
  }
});

const NEAR_YOU = Object.freeze({
  "child-tells-you": { text: `${NEAR_YOU_CAC}${NEAR_YOU_HEALTH}`, sources: ["ncaModel", "ncaFind", "hrsaFind"] },
  "get-help-now": { text: NEAR_YOU_CAC, sources: ["ncaModel", "ncaFind"] },
  "young-girl-pregnant": { text: `${NEAR_YOU_HEALTH}${NEAR_YOU_CAC}`, sources: ["hrsaFind", "ncaModel", "ncaFind"] }
});

const CLOSING = "This is general information, not medical or legal advice, and it does not replace a doctor, a child protection service or the police. If a child may be in danger, get help now.";

function parentsGuideAnswer(id, { us = true, country = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const version = us ? topic.us : topic.who;
  if (!version) return null;
  const kenya = !us && country === "ke" && topic.kenya ? topic.kenya : null;
  // (United States only; see NEAR_YOU_CAC)
  const near = us ? NEAR_YOU[id] : null;
  const keys = [...version.sources, ...(kenya ? kenya.sources : []), ...(near ? near.sources : [])];
  const sources = keys.map(key => SOURCES[key]);
  const body = `${version.text}${kenya ? kenya.text : ""}${near ? near.text : ""}`;
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  return { topic: id, title: topic.title, text: `${body}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, parentsGuideAnswer });
