"use strict";

// A checked guide for churches and other houses of worship (synagogues, temples, mosques) in the United States: whether a church must apply for tax-exempt status, forming and registering one, the annual return, income from a business,
// giving members receipts for their gifts, how a pastor's pay and housing allowance are taxed, the payroll-tax choice some churches have, and the limit on political campaigns. It was asked for by the owner ("church capabilities") when
// the readiness of Kyro for every group of users was reviewed: until now a church's question got the general nonprofit answer, which does not say that a church is automatically exempt and need not file a Form 990.
//
// What is an official fact and what is Kyro's: every statement of a rule was read from the pages in SOURCES on CHECKED_ON (IRS pages) and is said in the IRS's own terms. Where a page does not say something (what a receipt must contain, how the
// unrelated business income rules reach a church, what a state requires of a church, how the political rule applies to a sermon) the answer says the page does not say it and sends the person to a professional. Nothing here is a
// template or a form: Kyro files nothing, sets up nothing and gives no tax or legal advice.
// Outside the United States the guide does not state any rule. For Kenya and Nigeria no official page on registering a church could be read (only news reports, which say the rules are disputed and changing), so the answer says that and
// names the national registry to ask. When an official page is found it is added here with its date.
//
// churchAnswer(id, { us, country }) -> { topic, title, text, sources: [{ name, url }] } or null.   The matching of a question to a topic is in public/kyro-church-topics.js.

const CHECKED_ON = "21 October 2026";

const SOURCES = Object.freeze({
  irsChurches: { name: "IRS: churches and religious organizations", url: "https://www.irs.gov/charities-non-profits/churches-religious-organizations" },
  irsChurchStatus: { name: "IRS: churches, integrated auxiliaries and conventions or associations of churches", url: "https://www.irs.gov/charities-non-profits/churches-integrated-auxiliaries-and-conventions-or-associations-of-churches" },
  irsNotRequired1023: { name: "IRS: organizations not required to file Form 1023", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/organizations-not-required-to-file-form-1023" },
  irsApplyExempt: { name: "IRS: applying for tax-exempt status", url: "https://www.irs.gov/charities-non-profits/applying-for-tax-exempt-status" },
  irsFilingChurches: { name: "IRS: filing requirements for churches and religious organizations", url: "https://www.irs.gov/charities-non-profits/churches-religious-organizations/filing-requirements-for-churches-and-religious-organizations" },
  irs990N: { name: "IRS: Form 990-N (e-Postcard) for small exempt organizations", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" },
  irsUbit: { name: "IRS: unrelated business income tax", url: "https://www.irs.gov/charities-non-profits/unrelated-business-income-tax" },
  irsSubstantiation: { name: "IRS: charitable organizations, substantiation and disclosure requirements", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-organizations-substantiation-and-disclosure-requirements" },
  irsP1771: { name: "IRS: Publication 1771, charitable contributions, substantiation and disclosure", url: "https://www.irs.gov/pub/irs-pdf/p1771.pdf" },
  irsClergy: { name: "IRS: Topic no. 417, earnings for clergy", url: "https://www.irs.gov/taxtopics/tc417" },
  irsP517: { name: "IRS: Publication 517, social security and other information for members of the clergy and religious workers", url: "https://www.irs.gov/publications/p517" },
  irsFica: { name: "IRS: elective FICA exemption for churches and church-controlled organizations", url: "https://www.irs.gov/charities-non-profits/churches-religious-organizations/elective-fica-exemption-churches-and-church-controlled-organizations" },
  irsPolitical: { name: "IRS: restriction of political campaign intervention by section 501(c)(3) organizations", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" },
  irsEin: { name: "IRS: get an employer identification number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" },
  irsStateSolicit: { name: "IRS: charitable solicitation, state requirements", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-solicitation-state-requirements" },
  nasco: { name: "National Association of State Charity Officials: resources", url: "https://www.nasconet.org/resources" },
  irsP1828: { name: "IRS: Publication 1828, tax guide for churches and religious organizations", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" },
  cacSite: { name: "Corporate Affairs Commission (Nigeria)", url: "https://www.cac.gov.ng/" }
});

const TOPICS = Object.freeze({
  "church-overview": {
    title: "What Kyro can do for a church or house of worship",
    sources: ["irsChurches", "irsP1828"],
    text: "I can explain, in plain words and with the official page behind every answer, the United States rules that most affect a church or other house of worship: whether it must apply for tax-exempt status, forming and registering one, what it files each year, giving members a receipt for their gifts, how a pastor's pay and housing allowance are taxed, the payroll-tax choice some churches have, the limit on political campaigns, and income from a business. The IRS uses the word church for synagogues, temples and mosques too. I do not file anything, set up a church, or give tax or legal advice; for that, talk to a tax professional or lawyer who knows churches. You could ask: does a church have to apply for tax-exempt status? Does our church file a Form 990? Do we have to give members donation receipts? How is a pastor's housing allowance taxed? I have not read an official page about running a church outside the United States."
  },
  "church-exempt-status": {
    title: "Does a church have to apply for tax-exempt status?",
    sources: ["irsChurchStatus", "irsNotRequired1023", "irsApplyExempt"],
    text: "The IRS says churches that meet the requirements of section 501(c)(3) are automatically considered tax exempt and are not required to apply for and obtain recognition of exempt status from the IRS. Its page on who need not file Form 1023 lists churches, including synagogues, temples and mosques, and says that although there is no requirement to apply, many churches seek IRS recognition because it gives contributors assurance that their gifts are deductible. The IRS page on churches adds that recognition provides reliance to church leaders, members and contributors, and that donors are allowed to claim a charitable deduction for donations to a church that meets the 501(c)(3) requirements even without IRS recognition. A church on the IRS Auto-Revocation List that wants a determination letter must apply for reinstatement. Automatic does not mean the rules do not apply: the church must still meet the section 501(c)(3) requirements. If you decide to ask the IRS for recognition anyway, the page on applying for tax-exempt status has the forms."
  },
  "church-register": {
    title: "Setting up and registering a church",
    sources: ["irsChurchStatus", "irsEin", "irsStateSolicit", "nasco"],
    text: "Tax exemption and forming a legal organization are two different things. The IRS says a church that meets section 501(c)(3) is automatically considered tax exempt and need not apply to the IRS. Whether and how to form a nonprofit corporation or another legal organization is decided by your state, and I have not read a state page about churches in particular, so I will not say what your state requires of a church. If you tell me your state and ask how to start a nonprofit in that state, I can read you what that state's official page says about nonprofit corporations. If you need an employer identification number, the IRS says you can get one directly from the IRS in minutes for free and that you never have to pay a fee for an EIN, so be careful of sites that charge; its page does not say whether a church must have one. Raising money from the public and property tax are state and county matters too: the IRS's page on state charitable solicitation requirements points to each state's rules, and the National Association of State Charity Officials has resources. I have not read whether your state exempts churches from either, so ask your state's charity office or your county assessor."
  },
  "church-990": {
    title: "Does a church file Form 990?",
    sources: ["irsFilingChurches", "irs990N"],
    text: "The IRS's filing requirements page says tax-exempt organizations generally must file an annual information return, Form 990 or Form 990-EZ, and that most small ones whose gross receipts are normally $50,000 or less can instead submit Form 990-N if they choose not to file the longer forms. It then says that churches, some church-affiliated organizations and certain other types of organizations are excepted from filing. So a church is not required to file a Form 990. The page does not say how far the exception reaches for something separate that a church runs, such as a school or a charity with its own legal identity, so check that page or ask a tax professional before assuming it does. Income from a business that is not part of the church's religious work is a different question: see unrelated business income."
  },
  "church-unrelated-income": {
    title: "A church's income from a business: unrelated business income",
    sources: ["irsUbit", "irsFilingChurches"],
    text: "The IRS defines unrelated business income as income from a trade or business, regularly carried on, that is not substantially related to the purpose that is the basis of the organization's exemption. It says that even though an organization is recognized as tax exempt, it still may be liable for tax, and that an exempt organization with $1,000 or more of gross income from an unrelated business must file Form 990-T; it must also pay estimated tax if it expects its tax for the year to be $500 or more. The IRS page does not mention churches, so I cannot tell you whether or how it applies to yours. If your church runs something that earns money and is not part of its religious work, that is the thing to ask a tax professional who knows churches about."
  },
  "church-donation-receipts": {
    title: "Giving members a receipt for their gifts",
    sources: ["irsSubstantiation", "irsP1771", "irsChurchStatus"],
    text: "The IRS says a donor can deduct a contribution of $250 or more only with a written acknowledgment from the charitable organization. The donor must have it by the earlier of the date they file their return for that year or the due date including extensions, and the donor is responsible for requesting and getting it from the organization. For a quid pro quo contribution over $75, which is a gift where the donor also receives something in return, the organization must give the donor a written disclosure statement. The IRS also says donors are allowed to claim a charitable deduction for donations to a church that meets the 501(c)(3) requirements even without IRS recognition. The pages I read do not list what an acknowledgment must say; Publication 1771, linked here, is the IRS's full publication on this subject."
  },
  "church-clergy-pay": {
    title: "A pastor's pay, housing allowance and parsonage",
    sources: ["irsClergy", "irsP517"],
    text: "The IRS's page on earnings for clergy says all of a minister's earnings, including wages, offerings and fees, are taxable for income tax purposes. A minister is generally an employee if the organization has the legal right to control both what the minister does and how, and fees paid directly by members are generally earnings from self-employment. A minister may exclude a housing allowance from gross income to the extent it is used to pay expenses in providing a home, but not more than reasonable compensation for the minister's services, and the employer must officially designate the allowance as such before paying it. A minister may instead exclude the fair rental value of a parsonage, including utilities. Ministerial services are generally covered by Social Security and Medicare under the self-employment tax system, and the housing allowance is subject to self-employment tax. A minister can ask for exemption from that tax only if opposed to certain public insurance for religious or conscientious reasons, not for economic reasons, and once granted the exemption is irrevocable. Publication 517 is the IRS's publication for clergy and religious workers."
  },
  "church-payroll": {
    title: "Church employees and the payroll-tax choice (Form 8274)",
    sources: ["irsFica", "irsP517"],
    text: "The IRS says churches and qualified church-controlled organizations can elect exemption from employer FICA taxes, which are Social Security and Medicare, by filing Form 8274, and that an organization may elect only if it is opposed for religious reasons to paying FICA taxes. The form must be filed before the first date on which a quarterly employment tax return would otherwise be due. If an election is made, pay for services to that church, outside an unrelated trade or business, is not subject to FICA, and the employee, unless otherwise exempt, is subject to self-employment tax on that income. The page does not mention ministers; for clergy and religious workers it refers to Publication 517. Whether to make this election is a decision for a tax professional who knows churches, not something to guess at."
  },
  "church-politics": {
    title: "Churches and political campaigns",
    sources: ["irsPolitical"],
    text: "The IRS says section 501(c)(3) organizations are absolutely prohibited from directly or indirectly participating in, or intervening in, any political campaign on behalf of or in opposition to any candidate for elective public office. It says contributions to political campaign funds, and public statements of position, verbal or written, for or against a candidate violate the prohibition, and that violations may result in denial or revocation of tax-exempt status and certain excise taxes. It also says voter education such as public forums and voter guides, and voter registration and get-out-the-vote drives, conducted in a non-partisan manner are not prohibited, but that ones with a bias for or against a candidate are. That page does not say anything specific about churches or about a pastor speaking as an individual, and it does not cover lobbying, so how the rule applies to a sermon, an announcement or a pastor's own statement is a question for a lawyer who knows religious organizations. I will not guess."
  }
});

const CLOSING = "This is general information, not tax or legal advice, and it does not replace a tax professional or lawyer who knows churches. Rules change, so confirm on the official pages.";

// Outside the United States no rule is stated: the pages above are the IRS's. For Kenya and Nigeria the reason is given (no official page could be read) and the national registry to ask is named.
function outsideNote(country) {
  const base = "These are United States rules, from the IRS. A church outside the United States is governed by its own country's law, so please ask your country's registry before you decide anything.";
  if (country === "ng") return { text: `${base} I have not read an official page about registering or running a church in Nigeria, and news reports say the rules there are disputed and changing, so I will not state them. The Corporate Affairs Commission's website is the place to start asking.`, extra: ["cacSite"] };
  if (country === "ke") return { text: `${base} I have not read an official page about registering or running a church in Kenya, and news reports say the rules there are changing, so I will not state them. Reports name the Registrar of Societies, in the Attorney General's office, as the registry for religious groups, which I could not confirm from an official page, so please confirm it with that office.`, extra: [] };
  return { text: `${base} I have not read an official page about running a church in your country.`, extra: [] };
}

function churchAnswer(id, { us = true, country = null } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const keys = [...topic.sources];
  let lead = "";
  if (!us) {
    const note = outsideNote(country);
    lead = `${note.text} `;
    for (const key of note.extra) if (!keys.includes(key)) keys.push(key);
  }
  const sources = keys.map(key => SOURCES[key]);
  const cited = ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).`;
  return { topic: id, title: topic.title, text: `${lead}${topic.text}${cited} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, churchAnswer });
