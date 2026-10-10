"use strict";

// GENERATED from the research of 2026-10-10; every figure was read from the state's own official page (see each record's source). A value the official page did not confirm is null.
// Edit a record by reading the official page again; then change checkedOn and run test/nexus/state-entities.test.js.

module.exports = Object.freeze({
  federal: {
    "ein": {
      "fee": 0,
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
      "scamWarning": "IRS page says you can get an EIN directly from the IRS for free and warns: Beware of websites that charge for an EIN. You never have to pay a fee for an EIN."
    },
    "form1023": {
      "userFee": 600,
      "url": "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee"
    },
    "form1023EZ": {
      "userFee": 275,
      "eligibilityNote": "Eligibility is decided with the Form 1023-EZ Eligibility Worksheet in the IRS Instructions for Form 1023-EZ; an organization that is not eligible files the full Form 1023. Both forms are filed online through Pay.gov with the user fee. The IRS fee page says amounts are subject to change.",
      "url": "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee"
    },
    "form2553SCorp": {
      "fee": 0,
      "deadlineNote": "IRS instructions: file no more than 2 months and 15 days after the beginning of the tax year the election is to take effect, or at any time during the tax year before it takes effect. Late-election relief may be available if filed within 3 years and 75 days of the effective date. The instructions list no filing fee for the form itself; the only fee they mention is a $6,200 user fee if you check box Q1 (a fiscal tax year), which the IRS bills later.",
      "url": "https://www.irs.gov/instructions/i2553"
    },
    "boi": {
      "whatIsTheCurrentRuleForUSDomesticCompanies": "FinCEN's BOI page (alert updated August 11, 2026) says: FinCEN has finalized its BOI reporting rule. U.S. companies are exempt from the Beneficial Ownership Information (BOI) reporting requirements and therefore, are no longer required to file BOI reports. It also says reporting companies do not need to report BOI for U.S. person beneficial owners or U.S. person company applicants, and U.S. persons do not need to provide BOI to reporting companies. The page states the final rule became effective on August 14, 2026.",
      "url": "https://www.fincen.gov/boi"
    },
    "form990": {
      "smallOrgNote": "IRS: most small tax-exempt organizations whose gross receipts are normally $50,000 or less file the electronic Form 990-N (e-Postcard); organizations with gross receipts normally greater than $50,000 must file Form 990 (an organization eligible for 990-N may instead choose to file Form 990 or 990-EZ). 990-N test: $50,000 or less normally; first-year organizations $75,000 or less; years 2-3 average $60,000 or less; year 4 on average $50,000 or less over the three preceding years. Some organizations (for example private foundations) cannot use 990-N. 990-EZ dollar limits were not confirmed on a fetched IRS page.",
      "url": "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard"
    },
    "nonprofitAnnualFilingDeadlineNote": "IRS: Form 990-N is due every year by the 15th day of the 5th month after the tax year ends (May 15 for a December 31 year end; moves to the next business day if it falls on a weekend or holiday). Failing to file a Form 990, 990-EZ or 990-N for three consecutive years results in automatic revocation of tax-exempt status.",
    "irsTaxExemptSearchUrl": "https://www.irs.gov/charities-non-profits/tax-exempt-organization-search",
    "sbaStartBusinessUrl": "https://www.sba.gov/business-guide",
    "sbaFundingProgramsUrl": "https://www.sba.gov/funding-programs",
    "sbdcLocatorUrl": "https://www.sba.gov/local-assistance",
    "scoreMentorsUrl": "https://www.sba.gov/local-assistance/resource-partners",
    "womenOwnedAndMinorityHelp": {
      "mbdaUrl": "https://www.mbda.gov/",
      "name": "Minority Business Development Agency (MBDA), U.S. Department of Commerce",
      "description": null
    },
    "checkedOn": "2026-10-10",
    "notes": [
      "irs.gov/charities-non-profits/tax-exempt-organization-search returned HTTP 403 to the fetch tool, so that URL is the standard IRS address but was not loaded; same for mbda.gov and score.org (403).",
      "MBDA description left null: mbda.gov pages could not be fetched. A web-search snippet of mbda.gov said the agency exists to promote the growth and global competitiveness of Minority Business Enterprises, but that was not read on the page itself.",
      "SCORE find-a-mentor is reached through the SBA Resource Partners page (fetched and confirmed); score.org itself could not be fetched.",
      "SBA Resource Partners page (fetched) lists Small Business Development Centers, SCORE, Veterans Business Outreach Centers and Women's Business Centers; SBA local assistance page offers a ZIP-code lookup.",
      "Form 1023-EZ gross receipts / assets limits and Form 990-EZ limits were NOT confirmed from a fetched IRS page (only IRS search-result summaries mentioned $50,000 / $250,000 for 1023-EZ and under $200,000 receipts / $500,000 assets for 990-EZ); verify before publishing numbers. The IRS user-fee page confirms 1023 = $600 and 1023-EZ = $275.",
      "Form 1024 (501(c)(4) etc.) skipped.",
      "FinCEN page also carries an earlier alert dated March 2025 describing the same domestic exemption."
    ]
  },
  states: [
    {
      "code": "AL",
      "name": "Alabama",
      "agency": "Alabama Secretary of State, Business Entities Division",
      "agencyUrl": "https://www.sos.alabama.gov/business-entities",
      "onlineFilingUrl": "https://www.alabamainteractive.org",
      "llc": {
        "formationDocument": "Certificate of Formation (Domestic Limited Liability Company); a Certificate of Name Reservation must be attached",
        "filingFee": 200,
        "expeditedFeeNote": "The Secretary of State fee schedule (effective Jan 1, 2021) shows no separate expedite fee for formation. Online filings carry a vendor/portal fee on top of the statutory fee; the fee schedule says online fees are the statutory fee for the most expeditious service plus a portal fee, and the formation form says paper credit-card payments add a convenience fee of 3% plus $2.00. Of the $200, $100 is passed to the county treasurer of the county where the registered agent's office is located (Revenue Dept and the form both say so).",
        "annualReport": {
          "name": "No Secretary of State annual report; instead an annual Business Privilege Tax return (Form PPT for LLCs) filed with the Alabama Department of Revenue",
          "fee": null,
          "due": "Limited liability entities: due two and a half months after the start of the taxable year (March 15 for a calendar-year LLC); an initial return is also required after formation",
          "lateFeeNote": "Penalty amounts were not found on the pages fetched; ALDOR says unanswered delinquency can incur interest and penalties. For tax years beginning on or after January 1, 2024, entities that would otherwise owe only the minimum tax are exempt from the privilege tax (so the return is still filed but may show $0 for small entities); tax above the minimum depends on net worth and the fee amount was not confirmed."
        },
        "otherStateTaxNote": "Alabama Business Privilege Tax is filed with the Dept of Revenue (https://www.revenue.alabama.gov/faqs/what-taxpayers-must-file-an-alabama-business-privilege-tax-return/): every corporation, limited liability entity and disregarded entity doing business in Alabama or registered with the Secretary of State must file, and for taxable years beginning on or after Jan 1, 2024 entities that would otherwise owe only the minimum tax are exempt from the privilege tax. The obligation continues each year until the entity is dissolved or withdrawn through the Secretary of State.",
        "publicationRequirement": null,
        "source": "https://www.sos.alabama.gov/business-entities/llcs"
      },
      "corporation": {
        "formationDocument": "Domestic Business Corporation Certificate of Formation (with Certificate of Name Reservation)",
        "filingFee": 200,
        "annualReport": {
          "name": "No Secretary of State annual report (the Business Entities page says corporations are no longer required by law to file one); annual Business Privilege Tax return (Form CPT for C corporations, PPT for S corporations) with the Dept of Revenue",
          "fee": null,
          "due": "C corporations: three and a half months after the start of the taxable year (April 15 for a calendar-year corporation); S corporations follow their federal return date"
        },
        "source": "https://www.sos.alabama.gov/business-entities/domestic-corporations"
      },
      "nonprofit": {
        "formationDocument": "Domestic Nonprofit Corporation Certificate of Formation (with Certificate of Name Reservation)",
        "filingFee": 200,
        "annualReport": {
          "name": "No Secretary of State annual report (per the Business Entities page). Business Privilege Tax treatment of nonprofits was not confirmed on an official page.",
          "fee": null,
          "due": null
        },
        "source": "https://www.sos.alabama.gov/business-entities/domestic-corporations",
        "stateTaxExemptionNote": "Income tax: the Alabama Department of Revenue FAQ says organizations described in 26 U.S.C. 501(a) (and others in Code of Alabama 40-18-32) are not required to file corporate income tax returns while they keep exempt status, but an exempt organization with unrelated business income should file Form 20C with a copy of federal Form 990-T (https://www.revenue.alabama.gov/faqs/what-are-the-filing-requirements-for-an-exempt-organization-operating-in-alabama/). Sales tax: per the Department of Revenue's search-result snippet, being a 501(c)(3) does not by itself exempt a nonprofit from sales and use tax; only entities named in statute qualify, using Form ST:EX-A1-SE (sales-tax detail comes from a search result summary and the exemption pages https://www.revenue.alabama.gov/sales-use/tax-exempt-entities/ were not individually fetched).",
        "charitableSolicitationRegistration": {
          "agency": "Alabama Attorney General's Office",
          "url": "https://www.alabamaag.gov/licensing-registration/charitable-organizations/",
          "feeNote": "Charities that solicit contributions in or from Alabama must register with the Attorney General; $25 for initial registration and $25 for each annual filing, due within 90 days of fiscal year end (180-day extension available). Exempt categories include religious and educational institutions and charities that receive no more than $25,000 in contributions in a fiscal year with all fundraisers unpaid; a charity that passes $25,000 must register within 30 days."
        }
      },
      "registeredAgentNote": "The Certificate of Formation form requires one registered agent with a street address (no PO boxes) in Alabama for the registered office, and a Certificate of Name Reservation must be attached.",
      "businessLicenseNote": "Alabama has no single portal for all licences: the Department of Revenue's Business License page says it coordinates state and county business privilege licences (issued through county probate offices), with city licences from the municipality - https://www.revenue.alabama.gov/division/business-license/",
      "stateTaxRegistration": {
        "agency": "Alabama Department of Revenue - My Alabama Taxes (entity registration for sales tax, withholding and other taxes)",
        "url": "https://www.revenue.alabama.gov/entity-registration/register-a-business/"
      },
      "smallBusinessHelp": {
        "name": "SBA Alabama District Office (Birmingham), which serves all 67 counties",
        "url": "https://legacy.sba.gov/district/alabama"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "AK",
      "name": "Alaska",
      "agency": "Alaska Department of Commerce, Community, and Economic Development - Division of Corporations, Business and Professional Licensing (Corporations Section)",
      "agencyUrl": "https://www.commerce.alaska.gov/web/cbpl/Corporations",
      "onlineFilingUrl": "https://www.commerce.alaska.gov/web/cbpl/Corporations/CorporationFormsFees",
      "llc": {
        "formationDocument": "Articles of Organization - Domestic Limited Liability Company (Form 08-0484, AS 10.50.075)",
        "filingFee": 250,
        "expeditedFeeNote": "Expedited filing costs an additional $150 on top of the filing fee (3 AAC 16.105(a)); expedited filings get priority over regular filings. Hard-copy filings can take up to 3 weeks per the state form instructions.",
        "annualReport": {
          "name": "Biennial Report (due every two years, not annually; an Initial Report is also due within 6 months of formation)",
          "fee": 100,
          "due": "Before January 2 of the filing year. An LLC formed in an even-numbered year reports in every even-numbered year; one formed in an odd-numbered year reports in every odd-numbered year. The report is delinquent if not filed before February 1.",
          "lateFeeNote": "Late charge of $25 for each year or part of a year of delinquency, plus an additional charge of 10 percent of the total of the filing fee and late charge (3 AAC 16.065(c)-(d))."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.commerce.alaska.gov/web/Portals/5/pub/corp0484.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation - Domestic Business Corporation (Form 08-0400, AS 10.06.205-.210)",
        "filingFee": 250,
        "annualReport": {
          "name": "Biennial Report plus biennial corporation tax (due every two years)",
          "fee": 100,
          "due": "Before January 2 of the filing year (even-numbered years if incorporated in an even year, odd-numbered years if incorporated in an odd year). Delinquent if not filed before February 1; penalty of $25 for each year or part of a year of delinquency on the biennial tax (AS 10.06.845)."
        },
        "source": "https://www.commerce.alaska.gov/web/Portals/5/pub/corp0400.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation - Domestic Nonprofit Corporation (Form 08-0438, AS 10.20.151 and .153)",
        "filingFee": 50,
        "annualReport": {
          "name": "Biennial Report (due every two years)",
          "fee": null,
          "due": "Before July 2 of the filing year (even-numbered years if incorporated in an even year, odd-numbered years if incorporated in an odd year); delinquent if not filed before August 1 (AS 10.20.630). Nonprofits formed under AS 10.20 do not pay the biennial corporation tax (AS 10.06.845(c))."
        },
        "source": "https://www.commerce.alaska.gov/web/Portals/5/pub/corp0438.pdf",
        "stateTaxExemptionNote": "Alaska Department of Revenue Tax Division corporate income tax FAQ states that exempt corporations with unrelated business income must file an Alaska return and pay Alaska tax (attaching the federal Form 990-T); no separate state exemption application is described on the pages fetched. Alaska has no statewide sales and use tax (tax.alaska.gov), so there is no state sales-tax exemption certificate to obtain; some local governments levy their own sales taxes. Confirm with the Tax Division (dor.tax.corporations@alaska.gov) whether a copy of the IRS determination letter is needed.",
        "charitableSolicitationRegistration": {
          "agency": "Alaska Department of Law, Consumer Protection Unit (Attorney General's office)",
          "url": "https://law.alaska.gov/department/civil/consumer/charityreg.html",
          "feeNote": "Required before soliciting contributions in Alaska for charitable organizations (including IRS 501(c)(3) organizations). Registration fee is $40, filed online each year by September 1 (registration opens July 1; no extensions or late fees). Exempt: charities with no paid employees or board members that do not expect to raise more than $5,000 a year (excluding government grants) or receive contributions from more than 10 persons a year, certain churches/religious organizations that do not file federal annual returns, and organizations with a current Alaska charitable gaming permit; exempt organizations must file a one-time online Notice of Exemption."
        }
      },
      "registeredAgentNote": "Per the state's Articles of Organization form, the registered agent must be located in Alaska (an individual with a physical location in Alaska, or a corporation but not an LLC, LP or LLP), may not be out-of-state, and the agent information must be kept up to date with the Corporations Section.",
      "businessLicenseNote": "The state's form instructions say every entity must obtain an Alaska business license before engaging in business, applied for online through the Division's Business Licensing section (businesslicense.alaska.gov); professional licenses go through the Professional Licensing section (professionallicense.alaska.gov). https://www.commerce.alaska.gov/web/cbpl/BusinessLicensing",
      "stateTaxRegistration": {
        "agency": "Alaska Department of Labor and Workforce Development, Employment Security Tax (unemployment insurance employer registration via TaxWeb); Alaska Department of Revenue Tax Division (corporate income tax and other state taxes). Alaska has no statewide sales and use tax.",
        "url": "https://labor.alaska.gov/estax/"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - Alaska District Office (Anchorage)",
        "url": "https://www.sba.gov/district/alaska"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "AZ",
      "name": "Arizona",
      "agency": "Arizona Corporation Commission, Corporations Division",
      "agencyUrl": "https://azcc.gov/corporations/home",
      "onlineFilingUrl": "https://arizonabusinesscenter.azcc.gov",
      "llc": {
        "formationDocument": "Articles of Organization (Form L010)",
        "filingFee": 50,
        "expeditedFeeNote": "$50 is the regular-processing fee (paper, in person, or an uploaded document online). Expedited processing adds $35, for a total of $85. The ACC FAQ says 'You can file Articles of Organization online for $85'; an ACC notice explains that an online filing without an upload pays the $35 expedite fee on top of the $50 fee for same-day approval. So $50 vs $85 are both real: $85 is the expedited total (and what the online FAQ quotes). Optional faster service adds to the filing fee: Next Day +$100, Same Day +$200, 2-Hour +$400. Fees are nonrefundable.",
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null,
          "lateFeeNote": "Arizona LLCs do not file an annual report. The ACC FAQ states: 'LLCs are not required to file annual reports. Only corporations are required to file annual reports.' An LLC must still keep a statutory agent and a principal address on file with the ACC at all times or it can be administratively dissolved."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": "Yes. A notice of the filing of the Articles of Organization must be published after the ACC approves them (do not publish before approval). If the statutory agent's street address is in Maricopa or Pima County, the ACC automatically posts the notice on its website at no extra step. If the statutory agent's street address is in any other county, the LLC must publish the notice in a newspaper of general circulation in that county; the ACC approval letter says how. The Arizona statute (A.R.S. 29-3201) says the notice runs for three consecutive publications within 60 days after the filing. Filing an Affidavit of Publication with the ACC is optional.",
        "source": "https://azcc.gov/docs/default-source/corps-files/instructions/l010i-instructions-articles-of-organization.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation, for-profit (Form C010)",
        "filingFee": 60,
        "annualReport": {
          "name": "Annual Report",
          "fee": 45,
          "due": "Each corporation has its own due date in its anniversary month; look it up on the corporation's record in the ACC online business search or call 602-542-3026. Can be filed online up to 90 days early. A 6-month extension can be requested on or before the due date, but the fee is still due. Late: $9.00 per month penalty begins when the deadline is missed, then a delinquency notice, Pending Inactive status, and administrative dissolution after roughly 120 more days."
        },
        "source": "https://www.azcc.gov/docs/default-source/corps-files/fee-schedules/fee-schedule-corporations6def4cc74b1a47129d16c2b1c3851bda.pdf?sfvrsn=2d6fbddb_5"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation, nonprofit (Form C011), filed with a Certificate of Disclosure (no extra fee)",
        "filingFee": 40,
        "annualReport": {
          "name": "Annual Report (nonprofit corporation)",
          "fee": 10,
          "due": "Each nonprofit has its own due date in its anniversary month (see its ACC record). The ACC FAQ says nonprofit corporations are not assessed the monthly penalty, but a missed report still triggers the delinquency process (Pending Inactive, then administrative dissolution), so file on time or request an extension."
        },
        "source": "https://www.azcc.gov/docs/default-source/corps-files/fee-schedules/fee-schedule-corporations6def4cc74b1a47129d16c2b1c3851bda.pdf?sfvrsn=2d6fbddb_5",
        "stateTaxExemptionNote": "Arizona does not issue its own separate 501(c)(3) income-tax approval: the state income tax exemption follows federal Section 501 status (the legislature's fact sheet for SB1293 says Arizona exempts organizations that are also exempt under IRC section 501), and the ADOR publication says it is generally unnecessary to apply to the Department of Revenue for a letter confirming state income tax exemption (apply to the IRS for the determination letter first; the ACC instructions say you do not form a tax-exempt corporation, you apply to the IRS). Since tax year 2018 exempt organizations no longer file Arizona Form 99, but unrelated business taxable income is reported on Form 99T. Sales tax is different: Arizona has NO blanket transaction privilege tax (TPT) exemption for nonprofits. Only certain activities have exemptions; some (e.g. qualifying health care organizations) need an ADOR exemption letter, and some 501(c)(3)s (e.g. free meals to the needy) submit Form 5000 with the IRS determination letter. Other 501(c)(3)s are generally taxable when buying, although their own sales of tangible goods can be exempt under A.R.S. 42-5061(A)(4).",
        "charitableSolicitationRegistration": {
          "agency": "Arizona Secretary of State (veterans' charities only)",
          "url": "https://azsos.gov/business/other-services/veterans-charities-organizations",
          "feeNote": "Not required for general charities. Arizona repealed state charitable-organization registration effective September 13, 2013 (H.B. 2457, per the Arizona Legislature's fact sheet); no other state agency took it over. Only organizations soliciting in the name of American veterans must still register with the Secretary of State (no fee). Charities are also exempt from the state's telephone-solicitation registration. Check city/county rules separately."
        }
      },
      "registeredAgentNote": "Arizona calls this a statutory agent: every corporation and LLC must appoint and maintain one at all times or be administratively dissolved; it may be an Arizona resident aged 18 or older with a permanent Arizona street address, or an Arizona or authorized foreign corporation or LLC, and the agent must accept the appointment in writing (Form M002); an entity cannot be its own agent.",
      "businessLicenseNote": "The ACC says it does not issue business licenses; you register with your city or county for local licenses and TPT, and the ACC points to the state's Arizona Business One Stop (https://businessonestop.az.gov/) for planning and starting a business (that site returned 403 to automated fetching, so its contents were not verified).",
      "stateTaxRegistration": {
        "agency": "Arizona Department of Revenue (with the Department of Economic Security for unemployment insurance) via the Joint Tax Application",
        "url": "https://azdor.gov/transaction-privilege-tax/tpt-license/applying-tpt-license"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration, Arizona District Office (Phoenix and Tucson); see also the Arizona SBDC Network at https://arizonasbdc.com",
        "url": "https://www.sba.gov/district/arizona"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "AR",
      "name": "Arkansas",
      "agency": "Arkansas Secretary of State, Business & Commercial Services Division",
      "agencyUrl": "https://www.sos.arkansas.gov/business-commercial-services-bcs/for-new-business",
      "onlineFilingUrl": "https://www.ark.org/sos/corpfilings/index.php",
      "llc": {
        "formationDocument": "Certificate of Organization (Form LL-01), filed with a Franchise Tax Registration",
        "filingFee": 50,
        "expeditedFeeNote": "Online filing is $45 (paper is $50). No expedited-service fee is listed on the official fee pages; the SOS FAQ only mentions a 48-hour turnaround for drop-offs due to heavy volume.",
        "annualReport": {
          "name": "Annual LLC Franchise Tax Report",
          "fee": 150,
          "due": "May 1 each year (no extensions available). Filing online adds a $5.00 processing fee; paper filing has no processing fee.",
          "lateFeeNote": "Late filing adds a $25.00 penalty plus interest (tax plus penalty x .000274 per day late) per the SOS franchise tax form worksheet; late or unpaid tax can lead to revocation of authority to do business."
        },
        "otherStateTaxNote": "The $150 franchise tax is the only amount all LLCs owe on the Annual LLC Franchise Tax Report if filed on time.",
        "publicationRequirement": null,
        "source": "https://www.sos.arkansas.gov/business-commercial-services-bcs/forms-fees/llc"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Form DN-01), filed with a Franchise Tax Registration",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual Corporation Franchise Tax Report",
          "fee": 150,
          "due": "May 1 each year (no extensions available). Fee shown is the minimum tax for a corporation with authorized stock ($300 for a corporation without authorized stock); actual tax is .003 x authorized capital stock if that is more than the minimum."
        },
        "source": "https://www.sos.arkansas.gov/business-commercial-services-bcs/forms-fees/corporations"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation for Domestic Nonprofit Corporation (Form NPD-1, or NPD-01-501-c-3 version for organizations seeking 501(c)(3) status)",
        "filingFee": 50,
        "annualReport": {
          "name": "Nonprofit annual disclosure statement / annual report",
          "fee": 0,
          "due": "August 1 each year; no fee to file, online or on paper"
        },
        "source": "https://www.sos.arkansas.gov/business-commercial-services-bcs/nonprofit-charitable-entities",
        "stateTaxExemptionNote": "Arkansas SOS guidance states that nonprofit corporation status does not guarantee tax-exempt status and that the IRS determines it. The SOS franchise tax form says nonprofit corporations exempt from federal income tax are exempt from the franchise tax report requirement (A.C.A. 26-54-102). For sales and use tax, the Dept. of Finance and Administration's 2025 summary says Act 1007 lets a qualified nonprofit (a 501(c)(3) with an annual operating budget under $200,000 that performs charitable community-based services for Arkansas residents in need) apply to DFA for a sales and use tax exemption certificate, with exclusions such as motor vehicles, computers, alcohol and tobacco. The application form and procedure were not confirmed on an official page; contact DFA Sales and Use Tax Section (501-682-7104). State income tax exemption procedure was not confirmed on an official page.",
        "charitableSolicitationRegistration": {
          "agency": "Arkansas Secretary of State (Charities, charities@sos.arkansas.gov)",
          "url": "https://www.sos.arkansas.gov/business-commercial-services-bcs/nonprofit-charitable-entities/charitable-entities/",
          "feeNote": "Registration is required before soliciting contributions (Form CR-01 plus IRS determination or pending application, articles, and Form CR-03 financial report, submitted by email); there is no fee to register a charitable organization. Annual financial reports are due August 1 per the SOS instruction PDF, though the SOS charitable-entities page says Act 137 of 2019 changed the due date to 180 days after fiscal year end. Small organizations can claim an exemption with Form EX-01 (e.g., not soliciting or receiving more than $50,000 in a calendar year, all-volunteer, no inurement). Paid solicitors pay $200 and telemarketers $10, not applicable to most founders."
        }
      },
      "registeredAgentNote": "The registered agent's address must be a street address in Arkansas where the agent is located; a post office box or mail drop cannot be used.",
      "businessLicenseNote": "Arkansas has no general state business license; the SOS FAQ says a state board, commission or association regulates most businesses that need a state license or permit, so check the licensing board for your type of business (and your city or county for local licenses). https://www.sos.arkansas.gov/business-commercial-services-bcs/frequently-asked-questions-faqs/business-services-faq",
      "stateTaxRegistration": {
        "agency": "Arkansas Department of Finance and Administration (DFA) via the Arkansas Taxpayer Access Point (ATAP); sales tax permit fee $50",
        "url": "https://www.dfa.arkansas.gov/office/taxes/excise-tax-administration/sales-use-tax/register-for-a-tax-account/"
      },
      "smallBusinessHelp": {
        "name": "Arkansas Small Business and Technology Development Center (ASBTDC), SBA-funded, free consulting; also U.S. SBA Arkansas District Office, 2120 Riverfront Dr., Suite 1000, Little Rock, 501-324-7379",
        "url": "https://asbtdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "CA",
      "name": "California",
      "agency": "California Secretary of State, Business Programs Division (bizfile California)",
      "agencyUrl": "https://www.sos.ca.gov/business-programs/business-entities/starting-business-checklist/",
      "onlineFilingUrl": "https://bizfileonline.sos.ca.gov/",
      "llc": {
        "formationDocument": "Articles of Organization (Form LLC-1)",
        "filingFee": 70,
        "expeditedFeeNote": "Online or Sacramento drop-off expedite is extra: 24-hour (Class C) $350, same-day (Class B, received by 9:30 a.m.) $750; 4-hour (Class A, drop-off only, needs preclearance) $500. A $15 handling fee applies only to in-person counter filings, not mail or online. Certified copy is $5 per document.",
        "annualReport": {
          "name": "Statement of Information (Form LLC-12), filed with the Secretary of State; the $800 annual tax is a separate yearly payment to the Franchise Tax Board",
          "fee": 20,
          "due": "Within 90 days of registering with the Secretary of State, then every two years in the calendar month the LLC registered (odd or even years depending on the year of registration). Filing a statement between periods to report a change has no fee.",
          "lateFeeNote": "Secretary of State sends a delinquency notice; if the statement is still not filed 60 days later the Franchise Tax Board may assess a penalty (dollar amount not confirmed on a page I could fetch). Separately, every LLC owes the Franchise Tax Board a minimum annual tax of $800, due by the 15th day of the 4th month after the start of the tax year (for a new LLC, the 15th day of the 4th month after filing with the Secretary of State), even if it does no business, until the LLC is cancelled. The first-year exemption from the $800 applied only to tax years beginning on or after Jan 1 2021 and before Jan 1 2024, so it no longer applies to a new LLC. Cancelling within one year of organizing with Short Form Cancellation (Form LLC-4/8) avoids the $800 for the first tax year. LLCs with California income of $250,000 or more also pay an LLC fee ($900 for $250,000-$499,999; $2,500 for $500,000-$999,999; $6,000 for $1,000,000-$4,999,999; $11,790 for $5,000,000 or more)."
        },
        "otherStateTaxNote": "Franchise Tax Board: every LLC doing business in or organized/registered in California pays a minimum annual tax of $800 using Form FTB 3522, due even with no business activity until the LLC is cancelled. First-year exemption expired (covered tax years beginning 1/1/2021 through before 1/1/2024). LLC fee of $900 to $11,790 applies at $250,000+ of California income, estimated and paid by the 15th day of the 6th month of the tax year (Form FTB 3536).",
        "publicationRequirement": null,
        "source": "https://bpd.cdn.sos.ca.gov/bizfile/bizfile-brochure.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (providing for shares), the stock corporation filing",
        "filingFee": 100,
        "annualReport": {
          "name": "Statement of Information (Form SI-200) for domestic stock corporations; plus the $800 minimum franchise tax to the Franchise Tax Board",
          "fee": 25,
          "due": "Within 90 days of registering with the Secretary of State, then every year in the calendar month the corporation registered. The $25 is a $20 filing fee plus a $5 disclosure fee. Filing a statement between periods to report a change has no fee."
        },
        "source": "https://bpd.cdn.sos.ca.gov/bizfile/bizfile-brochure.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (not providing for shares): nonprofit public benefit, mutual benefit, or religious corporation",
        "filingFee": 30,
        "annualReport": {
          "name": "Statement of Information (Form SI-100) for domestic nonprofit corporations; plus Form RRF-1 to the Attorney General if the charity is registered with the Registry",
          "fee": 20,
          "due": "Within 90 days of registering with the Secretary of State, then every two years in the calendar month the nonprofit registered. Filing a statement between periods to report a change has no fee."
        },
        "source": "https://bpd.cdn.sos.ca.gov/bizfile/bizfile-brochure.pdf",
        "stateTaxExemptionNote": "California exemption is separate from the federal one and must be applied for with the Franchise Tax Board. A federally recognised 501(c)(3) with no prior California exemption files Form FTB 3500A (Submission of Exemption Request) with a copy of its IRS determination letter, online through MyFTB or by mail to the FTB Exempt Organizations Unit; organizations without a federal exemption, or with a revoked status, use Form FTB 3500 instead. Since Jan 1 2021 there is no $25 filing fee for FTB 3500/3500A and no $10 fee for the Form 199 annual information return. Until exemption is granted the organization stays taxable (the $800 minimum franchise tax applies). Sources: https://www.ftb.ca.gov/file/business/types/charities-nonprofits/index.html and https://www.ftb.ca.gov/forms/misc/3500-booklet.html",
        "charitableSolicitationRegistration": {
          "agency": "California Attorney General, Registry of Charities and Fundraisers (Registry of Charitable Trusts)",
          "url": "https://oag.ca.gov/charities/initial-reg",
          "feeNote": "Required for charitable corporations, trusts and other entities holding assets for charitable purposes, within 30 days of first receiving charitable assets (some entities are exempt, for example religious organizations, educational institutions and hospitals are exempt from the RRF-1 requirement per the RRF-1 instructions). Initial registration Form CT-1: $50, paid by credit card or ACH through the Online Filing Service (https://ca-rcf.evokeplatform.com/app/registrationPortal) or by check on paper; non-refundable. Annual renewal Form RRF-1 (Rev. 01/2024), due 4 months and 15 days after the accounting period ends (May 15 for calendar-year filers), with a copy of IRS Form 990/990-EZ/990-PF, or Form CT-TR-1 if below the 990-EZ threshold. RRF-1 fee by total revenue: under $50,000 $25; $50,000 to $100,000 $50; $100,001 to $250,000 $75; $250,001 to $1 million $100; $1,000,001 to $5 million $200; $5,000,001 to $20 million $400; $20,000,001 to $100 million $800; $100,000,001 to $500 million $1,000; over $500 million $1,200. Charities with over $2 million total revenue need audited financial statements."
        }
      },
      "registeredAgentNote": "California calls this the agent for service of process: it must be a California-resident individual or a registered corporate agent under Corporations Code section 1505, a business cannot be its own agent, and the agent's name and street address are public records (SOS FAQ https://www.sos.ca.gov/business-programs/business-entities/faqs).",
      "businessLicenseNote": "The Secretary of State does not issue business licenses or permits; use CalGold, the state's permit assistance tool (CalGold v2, linked from business.ca.gov), to find which state, county and city permits apply: https://www.calgold.ca.gov/",
      "stateTaxRegistration": {
        "agency": "California Department of Tax and Fee Administration (CDTFA) for the seller's permit (sales and use tax; no fee, a security deposit may be required) via online registration; employers register separately with the Employment Development Department (EDD) within 15 days of paying more than $100 in wages in a calendar quarter (https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/)",
        "url": "https://www.cdtfa.ca.gov/services/registration.htm"
      },
      "smallBusinessHelp": {
        "name": "California Office of the Small Business Advocate (CalOSBA, in GO-Biz) small business centers network (150+ centers)",
        "url": "https://calosba.ca.gov/local-direct-assistance/small-business-centers/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "CO",
      "name": "Colorado",
      "agency": "Colorado Secretary of State, Business & Licensing Division",
      "agencyUrl": "https://www.sos.state.co.us/pubs/business/businessHome.html",
      "onlineFilingUrl": "https://www.coloradosos.gov/biz/FileDoc.do",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 50,
        "expeditedFeeNote": "Expedited service for a business filing is an additional $150 (fee schedule lists it as a paper fee; fulfilled within 3 business days). Articles of Organization are listed with an online fee of $50 and no paper fee.",
        "annualReport": {
          "name": "Periodic Report",
          "fee": 25,
          "due": "Filed once a year, online only. It can be filed starting two months before the entity's periodic report month and up to two months after it without penalty. Missing the window makes the entity Noncompliant, and missing the late deadline makes it Delinquent.",
          "lateFeeNote": "Fee schedule lists a $50 Periodic Report Late Filing Penalty. Reinstatement or curing delinquency costs $100 (Statement Curing Delinquency)."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sos.state.co.us/pubs/info_center/fees/business.html"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 50,
        "annualReport": {
          "name": "Periodic Report",
          "fee": 25,
          "due": "Filed once a year, online only; may be filed from two months before to two months after the entity's periodic report month without penalty."
        },
        "source": "https://www.sos.state.co.us/pubs/info_center/fees/business.html"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 50,
        "annualReport": {
          "name": "Periodic Report",
          "fee": 25,
          "due": "Filed once a year, online only; may be filed from two months before to two months after the entity's periodic report month without penalty."
        },
        "source": "https://www.sos.state.co.us/pubs/info_center/fees/business.html",
        "stateTaxExemptionNote": "Colorado income tax: an organization exempt from federal income tax for a tax year is also exempt from Colorado income tax for that year (this includes organizations meeting IRC 501(c)(3)); unrelated business taxable income is still taxed and filed on the DR 0112 (Department of Revenue Corporate Income Tax Guide). Colorado sales tax: apply to the Department of Revenue with Form DR 0715, Application for Exempt Entity Certificate (rev. 10/10/24), attaching articles, a current Certificate of Good Standing, financial statements or projected income and expenses, and the IRS 501(c)(3) determination letter. Submit by email (preferred) to DOR_ExemptionApplications@state.co.us with the word Encrypt in the subject line, or by mail. The Department says a 501(c)(3) letter generally leads to approval but it is not bound by the IRS determination. The exemption covers goods and services used in regular charitable activities and bought from the organization's own funds (purchases under $250 excepted). Colorado certificates are generally issued to charities with substantial Colorado operations. No application fee or expiry period is stated on the pages checked. Home-rule cities run their own sales taxes separately.",
        "charitableSolicitationRegistration": {
          "agency": "Colorado Secretary of State, Charities and Fundraisers program",
          "url": "https://www.sos.state.co.us/pubs/charities/charitableHome.html",
          "feeNote": "Registration IS required (not repealed) for a charity that solicits contributions in Colorado, has contributions solicited on its behalf, or takes part in a charitable sales promotion, unless exempt. Exemptions on the official FAQ include charities that do not intend to and do not raise or receive more than $25,000 gross revenue in a fiscal year (government and 501(c)(3) grants excluded), charities that receive contributions from no more than ten persons in a fiscal year, and churches (religious organizations that file Form 990 are not exempt). Fee schedule (revised April 30, 2024): new charity registration $10, annual renewal $10, fine for failure to file renewal $60, fine for soliciting while unregistered $300."
        }
      },
      "registeredAgentNote": "A Colorado registered agent can be one individual (18 or older with a Colorado driver's license or ID) or an entity in good standing, must consent to be listed, and must have a physical street address in Colorado where documents can be accepted in person during normal business hours (no P.O. boxes or commercial mail drops).",
      "businessLicenseNote": "Colorado has no single general state business licence; the Secretary of State's new-business checklist says to contact your city hall or county clerk for local licences, and to use the Department of Regulatory Agencies (DORA) if your business is a state-regulated profession; MyBizColorado handles online registration for other state agencies. https://www.sos.state.co.us/pubs/business/businessChecklist.html",
      "stateTaxRegistration": {
        "agency": "Colorado Department of Revenue (sales tax, wage withholding) and Colorado Department of Labor and Employment (unemployment insurance), both reachable through MyBizColorado",
        "url": "https://mybiz.colorado.gov/"
      },
      "smallBusinessHelp": {
        "name": "Colorado Small Business Development Center (SBDC) Network, hosted by OEDIT",
        "url": "https://oedit.colorado.gov/colorado-small-business-development-center-network"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "CT",
      "name": "Connecticut",
      "agency": "Connecticut Secretary of the State, Business Services Division (Business.CT.gov)",
      "agencyUrl": "https://business.ct.gov/start-your-business/register-your-business",
      "onlineFilingUrl": "https://business.ct.gov/",
      "llc": {
        "formationDocument": "Certificate of Organization (includes appointment of statutory agent)",
        "filingFee": 120,
        "expeditedFeeNote": "The official LLC fee page lists no separate expedited fee; it says expedited service is only available for online filings, not paper filings sent by mail.",
        "annualReport": {
          "name": "Limited Liability Company Annual Report (file online)",
          "fee": 80,
          "due": "Filed online each year between January 1 and March 31",
          "lateFeeNote": "No late fee is listed on the official Business.CT.gov annual report pages. An overdue report means you cannot get a Certificate of Legal Existence and the Secretary of the State's Office may administratively dissolve the business."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://business.ct.gov/knowledge-base/articles/domestic-limited-liability-companies-forms-and-fees"
      },
      "corporation": {
        "formationDocument": "Certificate of Incorporation (stock corporation), followed by an Organization and First Report ($150)",
        "filingFee": 250,
        "annualReport": {
          "name": "Corporation Annual Report (file online)",
          "fee": 150,
          "due": "Filed online each year; the exact due date for a given corporation is shown in its Business.CT.gov account after the first report (Organization and First Report)"
        },
        "source": "https://business.ct.gov/knowledge-base/articles/domestic-stock-corporations-forms-and-fees"
      },
      "nonprofit": {
        "formationDocument": "Certificate of Incorporation (nonstock corporation), followed by an Organization and First Report ($50)",
        "filingFee": 50,
        "annualReport": {
          "name": "Non-stock Corporation Annual Report (file online)",
          "fee": 50,
          "due": "Filed online each year; the exact due date for a given corporation is shown in its Business.CT.gov account after the first report (Organization and First Report)"
        },
        "source": "https://business.ct.gov/knowledge-base/articles/domestic-nonstock-corporations-forms-and-fees",
        "stateTaxExemptionNote": "Sales and use tax: Connecticut no longer issues exemption permits; an organization with a federal IRS determination letter under 501(c)(3) or (13) qualifies, and gives the retailer Form CERT-119 with a copy of the determination letter (do not send CERT-119 to DRS). Tax-free meals or lodging need DRS pre-approval (CERT-112 or CERT-123). Source: portal.ct.gov/DRS/Sales-Tax/Tax-Exemption-Programs-for-Nonprofit-Organizations. DRS says a copy of the IRS determination letter must be submitted with the DRS registration application to claim the sales and use tax exemption (portal.ct.gov/DRS/Businesses/New-Business-Portal/Managing-Exempt-status). Corporation business tax: DRS lists companies exempt under the federal corporation net income tax law as exempt from the tax and from filing Form CT-1120, but its page does not name 501(c)(3) organizations specifically (portal.ct.gov/drs/corporation-tax/tax-information); confirm with DRS.",
        "charitableSolicitationRegistration": {
          "agency": "Connecticut Department of Consumer Protection, Public Charities Unit",
          "url": "https://portal.ct.gov/dcp/charities/general-information-on-the-connecticut-solicitation-of-charitable-funds-act",
          "feeNote": "Registration with DCP is required before soliciting contributions in Connecticut unless exempt. Annual registration fee is $50, due with both the initial and renewal applications. An organization that normally receives less than $50,000 in contributions annually (two of the last three years) and pays no one primarily to solicit may claim exemption on Form CPC-54, which has no filing fee. Religious bodies, accredited educational institutions, licensed nonprofit hospitals and some other groups are also exempt. Exemption is not automatic and must be claimed. An independent audit is required when gross receipts exceed $500,000."
        }
      },
      "registeredAgentNote": "Business.CT.gov says a registered agent is a person or third party who receives and forwards legal and official correspondence, and is the official point of contact between a business and the state.",
      "businessLicenseNote": "Business.CT.gov explains that required licenses and permits depend on the type of business, offers a New Business Checklist tool, and points to the Connecticut eLicense website to apply, renew or verify licenses (https://business.ct.gov/licenses-and-permits).",
      "stateTaxRegistration": {
        "agency": "Connecticut Department of Revenue Services (DRS) via myconneCT for sales and use tax permit and withholding; Connecticut Department of Labor via ReEmployCT for unemployment insurance employer registration",
        "url": "https://portal.ct.gov/drs/sales-tax/tax-information"
      },
      "smallBusinessHelp": {
        "name": "Connecticut Small Business Development Center (CTSBDC, hosted by UConn, funded in part by the U.S. SBA and CT DECD)",
        "url": "https://ctsbdc.uconn.edu/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "DE",
      "name": "Delaware",
      "agency": "Delaware Department of State, Division of Corporations",
      "agencyUrl": "https://corp.delaware.gov/howtoform/",
      "onlineFilingUrl": "https://corp.delaware.gov/document-upload-service-information/",
      "llc": {
        "formationDocument": "Certificate of Formation (Limited Liability Company)",
        "filingFee": 110,
        "expeditedFeeNote": "Fee schedule revised Aug 1, 2026 lists the $110 LLC formation fee (filing fee plus municipality fee) with Same Day service $100 and 24-Hour (next day) service $50 extra; Priority 2 (2-Hour) $500 and Priority 1 (1-Hour) $1,000 per document. Expedite fees are in addition to the filing fee. No 30-minute tier is listed.",
        "annualReport": {
          "name": "Annual LLC tax (no annual report is filed)",
          "fee": 400,
          "due": "On or before June 1 each year, for the prior year",
          "lateFeeNote": "$200 late penalty plus 1.5% interest per month on the tax and the penalty. No proration; the tax applies if the LLC is active in the records at any time in the calendar year."
        },
        "otherStateTaxNote": "Delaware LLCs pay no annual report; only the annual tax. Delaware gross receipts tax and a Delaware business license apply to LLCs doing business in the state (see businessLicenseNote).",
        "publicationRequirement": null,
        "source": "https://corpfiles.delaware.gov/Fee_Schedule/AugustFee2026.pdf"
      },
      "corporation": {
        "formationDocument": "Certificate of Incorporation (Corporation)",
        "filingFee": 109,
        "annualReport": {
          "name": "Annual Franchise Tax Report (annual report plus franchise tax)",
          "fee": 50,
          "due": "On or before March 1 each year (filed online). Annual report filing fee is $50 for non-exempt domestic corporations, plus franchise tax: minimum $175 (Authorized Shares method) or $400 (Assumed Par Value Capital method); maximum $200,000 ($250,000 for Large Corporate Filers). Late: $200 penalty plus 1.5% interest per month."
        },
        "source": "https://corpfiles.delaware.gov/Fee_Schedule/AugustFee2026.pdf"
      },
      "nonprofit": {
        "formationDocument": "Certificate of Incorporation - Exempt Corporation (non-stock corporation not authorized to issue capital)",
        "filingFee": 109,
        "annualReport": {
          "name": "Annual Report for exempt domestic corporation (no franchise tax)",
          "fee": 25,
          "due": "On or before March 1 each year (filed online)"
        },
        "source": "https://corpfiles.delaware.gov/Fee_Schedule/AugustFee2026.pdf",
        "stateTaxExemptionNote": "Division of Revenue says a corporation the IRS has recognised under section 501(c) is exempt from Delaware corporate income tax, and a 501(c)(3) does not have to file a Delaware corporate income tax return; it is also exempt from obtaining a Delaware business license and from gross receipts tax on most sales of goods and services (leasing tangible personal property and accommodations stay taxable). The page names no separate state exemption application or form - the IRS 501(c) status is what triggers the exemption. Nonprofits with employees must still register with the Division of Revenue to withhold state income tax and register with the Delaware Department of Labor. Delaware has no state sales tax.",
        "charitableSolicitationRegistration": {
          "agency": "None - no state registration agency",
          "url": "https://revenue.delaware.gov/business-tax-forms/fundraisers-and-charitable-solicitations/",
          "feeNote": "Not required: the Division of Revenue states Delaware has no state statute requiring registration of charitable solicitations or fundraisers. Disclosure rules still apply (6 Del. C. section 2591 et seq.)."
        }
      },
      "registeredAgentNote": "Every Delaware entity must have a registered agent with a physical street address in Delaware (an individual resident or an authorised business entity; a business located in Delaware may act as its own agent).",
      "businessLicenseNote": "All businesses operating in Delaware need a Delaware business license from the Division of Revenue, applied for through Delaware One Stop (onestop.delaware.gov); the annual fee varies by category and is generally $75 for a first location, term ends December 31, and 501(c) nonprofits are exempt from the licence - https://revenue.delaware.gov/business-tax-forms/doing-business-in-delaware/step-2-requirements/ (one-stop start page: https://firststeps.delaware.gov/)",
      "stateTaxRegistration": {
        "agency": "Delaware Division of Revenue (register via Delaware One Stop); Delaware Department of Labor, Division of Unemployment Insurance for employers",
        "url": "https://onestop.delaware.gov"
      },
      "smallBusinessHelp": {
        "name": "Delaware Small Business Development Center (University of Delaware, SBA-funded); also State Division of Small Business at business.delaware.gov",
        "url": "https://www.delawaresbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "DC",
      "name": "District of Columbia",
      "agency": "Department of Licensing and Consumer Protection (DLCP), Corporations Division",
      "agencyUrl": "https://dlcp.dc.gov/node/1614386",
      "onlineFilingUrl": "https://boss.dc.gov",
      "llc": {
        "formationDocument": "Certificate of Organization",
        "filingFee": 99,
        "expeditedFeeNote": "Optional expedited service, in addition to the filing fee: $50 for 3-day service, $100 for same-day (1-day) service. Standard processing is about 5 business days. Expedited fee is required for walk-in customers at the Business License Center and may be limited or unavailable for mail-in filings.",
        "annualReport": {
          "name": "Biennial Report (form BRA-25, two-year report, filed in BOSS)",
          "fee": 300,
          "due": "April 1. The first report is due April 1 of the calendar year after the LLC registers, then every two years on April 1.",
          "lateFeeNote": "$100 late fee in addition to the $300 fee if filed after April 1 of the year due."
        },
        "otherStateTaxNote": "Unincorporated business franchise tax (OTR) applies to LLCs taxed as partnerships/sole proprietorships with DC gross receipts over $12,000: rate 8.25% (listed for 2018-2025), minimum tax $250 if DC gross receipts are $1 million or less, $1,000 if more; 30% owner salary allowance and $5,000 exemption are deducted from net income. Exempt if more than 80% of gross income is from personal services of members and capital is not a material income-producing factor.",
        "publicationRequirement": null,
        "source": "https://dlcp.dc.gov/node/1621921"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (domestic business corporation)",
        "filingFee": 99,
        "annualReport": {
          "name": "Biennial Report (form BRA-25, two-year report, filed in BOSS)",
          "fee": 300,
          "due": "April 1. The first report is due April 1 of the calendar year after registration, then every two years on April 1. Late fee $100 if filed after April 1."
        },
        "source": "https://dlcp.dc.gov/node/1621906"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (domestic nonprofit corporation)",
        "filingFee": 80,
        "annualReport": {
          "name": "Biennial Report (form BRA-25, two-year report, filed in BOSS)",
          "fee": 80,
          "due": "April 1. The first report is due April 1 of the calendar year after registration, then every two years on April 1. Late fee $50 if filed after April 1."
        },
        "source": "https://dlcp.dc.gov/node/1621926",
        "stateTaxExemptionNote": "IRS recognition does not automatically exempt an organization under DC law. Per OTR: first register with OTR using Form FR-500, then file Form FR-164 (Application for Exemption) on MyTax.DC.gov. Most IRS-exempt organizations (except 501(c)(7) social clubs) can qualify for franchise (income) tax exemption; semipublic institutions (charitable, religious, scientific, educational organizations) with a location or office in DC may qualify for sales tax exemption on purchases but must still collect DC sales tax on their own taxable sales. 501(c)(3) organizations may also qualify for personal property tax exemption. Exemption certificates now carry an expiration date and are renewed on MyTax.DC.gov. No fee is mentioned on the OTR pages. Sources: https://otr.cfo.dc.gov/node/1794941 and https://otr.cfo.dc.gov/page/exemptions-audit-division",
        "charitableSolicitationRegistration": {
          "agency": "DLCP, Business Licensing Division (Basic Business License, category Charitable Services)",
          "url": "https://dlcp.dc.gov/node/1618416",
          "feeNote": "DLCP lists two Charitable Services license types applied for through BOSS: 'Charitable Exempt' at $0 and 'Charitable Solicitation' at $99 (2-year) or $198 (4-year). Documents listed: Certificate of Occupancy or Home Occupation Permit, corporate registration (if applicable), IRS determination letter, FR-164 exemption certificate, tax registration and Clean Hands certificate. The DLCP page does not state which organizations fall under Exempt versus Solicitation, so the owner should confirm with DLCP at (202) 671-4500."
        }
      },
      "registeredAgentNote": "DLCP states that all domestic and foreign filing entities are required to appoint and maintain a registered agent, whose address must be a physical street address in the District of Columbia (no P.O. boxes or third-party mailboxes); a person or entity serving more than 50 entities must register as a commercial registered agent (form RA-1). Source: https://dlcp.dc.gov/page/corporations-division-business-registration-faqs",
      "businessLicenseNote": "Anyone engaging in business activity in DC must be licensed for that activity; a Basic Business License (BBL) is applied for online at BOSS (boss.dc.gov) after corporate registration, FEIN/SSN, OTR tax registration, Certificate of Occupancy or Home Occupation Permit, and Clean Hands attestation are in place; fees listed by DLCP are $49 (six-month), $99 (two-year), $198 (four-year) - https://dlcp.dc.gov/node/1614551 and https://dlcp.dc.gov/service/business-licensing-division",
      "stateTaxRegistration": {
        "agency": "DC Office of Tax and Revenue (OTR) via MyTax.DC.gov (Form FR-500 Combined Business Tax Registration covers franchise tax, sales and use tax and employer withholding; the same form is used to register for unemployment insurance with the Department of Employment Services, UI Tax Division, 202-698-7550; DOES employer portal essp.does.dc.gov)",
        "url": "https://mytax.dc.gov"
      },
      "smallBusinessHelp": {
        "name": "DLCP Small Business Resource Center (free workshops and one-on-one sessions) and DC Department of Small and Local Business Development (DSLBD)",
        "url": "https://dlcp.dc.gov/service/small-business-resource-center-sbrc-0"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "FL",
      "name": "Florida",
      "agency": "Florida Department of State, Division of Corporations (Sunbiz)",
      "agencyUrl": "https://dos.fl.gov/sunbiz/",
      "onlineFilingUrl": "https://dos.fl.gov/sunbiz/start-business/efile/fl-llc/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 100,
        "registeredAgentDesignationFee": 25,
        "totalRequiredAtFiling": 125,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "Annual Report",
          "fee": 138.75,
          "due": "every year by May 1; reports are also due by the third Friday in September to avoid administrative dissolution",
          "lateFeeNote": "$400 late fee if filed after May 1 (total $538.75). Reinstatement after dissolution is $100 plus the annual report fee for each year owed."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://dos.fl.gov/sunbiz/forms/fees/llc-fees/"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 35,
        "registeredAgentDesignationFee": 35,
        "totalRequiredAtFiling": 70,
        "annualReport": {
          "name": "Annual Report (profit)",
          "fee": 150,
          "due": "every year by May 1; third Friday in September to avoid administrative dissolution",
          "lateFeeNote": "$400 late fee if filed after May 1 (total $550). Reinstatement is $600 plus the annual report fee for each year."
        },
        "source": "https://dos.fl.gov/sunbiz/forms/fees/corporate-fees/"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (Not For Profit)",
        "filingFee": 35,
        "registeredAgentDesignationFee": 35,
        "totalRequiredAtFiling": 70,
        "annualReport": {
          "name": "Annual Report (non-profit)",
          "fee": 61.25,
          "due": "every year; the state does not apply the May 1 late fee to non-profit corporations; reports are due by the third Friday in September to avoid administrative dissolution",
          "lateFeeNote": "No late fee listed for non-profits. Reinstatement is $175 plus the annual report fee for each year."
        },
        "source": "https://dos.fl.gov/sunbiz/forms/fees/corporate-fees/",
        "stateTaxExemptionNote": "Florida Department of Revenue: a nonprofit must obtain a Florida Consumer's Certificate of Exemption from the Department of Revenue to get the sales and use tax exemption (the page does not give the form number or fee). Income-tax treatment not confirmed.",
        "stateTaxExemptionUrl": "https://floridarevenue.com/taxes/businesses/Pages/nonprofit.aspx",
        "charitableSolicitationRegistration": {
          "agency": "Florida Department of Agriculture and Consumer Services (Division of Consumer Services)",
          "url": "https://www.fdacs.gov/Consumer-Resources/Solicitation-of-Contributions",
          "feeNote": null
        }
      },
      "registeredAgentNote": "Florida requires a registered agent with a physical street address in Florida (a P.O. box does not work); a corporation cannot be its own agent (dos.fl.gov nonprofit articles instructions page).",
      "businessLicenseNote": "Florida's Department of State starting-a-business page says to check with your county tax collector for a business license: https://dos.fl.gov/library-archives/research/florida-information/business/starting-a-business-in-florida/",
      "stateTaxRegistration": {
        "agency": "Florida Department of Revenue (online Florida Business Tax Application: sales and use tax, reemployment/unemployment tax and others)",
        "url": "https://floridarevenue.com/taxes/eservices/Pages/registration.aspx"
      },
      "smallBusinessHelp": {
        "name": "Florida Small Business Development Center (SBDC) Network (no-cost consulting; funded in part by the SBA)",
        "url": "https://floridasbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "GA",
      "name": "Georgia",
      "agency": "Georgia Secretary of State, Corporations Division",
      "agencyUrl": "https://georgia.gov/register-llc",
      "onlineFilingUrl": "https://ecorp.sos.ga.gov/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 100,
        "expeditedFeeNote": "$100 online or $110 by mail or in person. Processing in 2 business days costs an extra $100, the same business day (before noon) an extra $250, and one hour (mail or in person only) an extra $1,000.",
        "annualReport": {
          "name": "Annual registration",
          "fee": null,
          "due": "every year by April 1 (the first one is due the year after formation)",
          "lateFeeNote": "The late fee is $25 for a registration postmarked after April 1; filing by mail adds a $10 service charge. I could not confirm the annual registration fee on a page I could read."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://georgia.gov/register-llc"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual registration",
          "fee": null,
          "due": "every year by April 1 (the first within 90 days of incorporation)"
        },
        "source": "https://georgia.gov/register-corporation"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit)",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual registration",
          "fee": null,
          "due": "every year by April 1"
        },
        "source": "https://georgia.gov/register-corporation",
        "stateTaxExemptionNote": "Georgia Department of Revenue page says churches, religious, charitable, civic and other nonprofits generally get NO general sales/use tax exemption on purchases; only specific listed types (e.g. licensed nonprofit hospitals, private schools grades 1-12, food banks, orphanages) qualify, and certain nonprofits' qualifying fundraising sales need not collect tax. The page does not give an application form. Income-tax exemption process not confirmed.",
        "stateTaxExemptionUrl": "https://dor.georgia.gov/tax-exempt-nonprofit-organizations",
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": "Georgia requires a registered agent with a physical street address in Georgia where an individual can be reached in person.",
      "businessLicenseNote": "Georgia business licences are mostly issued by your city or county; start at georgia.gov/register-llc and the Georgia Department of Revenue page https://dor.georgia.gov/taxes/register-new-business-georgia.",
      "stateTaxRegistration": {
        "agency": "Georgia Department of Revenue (Georgia Tax Center); unemployment insurance is handled by the Georgia Department of Labor",
        "url": "https://dor.georgia.gov/taxes/register-new-business-georgia"
      },
      "smallBusinessHelp": {
        "name": "University of Georgia Small Business Development Center (UGA SBDC; funded through a cooperative agreement with the SBA)",
        "url": "https://georgiasbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "HI",
      "name": "Hawaii",
      "agency": "Hawaii Department of Commerce and Consumer Affairs (DCCA), Business Registration Division",
      "agencyUrl": "https://cca.hawaii.gov/breg/",
      "onlineFilingUrl": "https://hbe.ehawaii.gov/BizEx/home.eb",
      "llc": {
        "formationDocument": "Articles of Organization (Form LLC-1)",
        "filingFee": 50,
        "expeditedFeeNote": "DCCA's LLC page says an additional $25 for expedited service.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 15,
          "onlineFee": 12.5,
          "due": "every year; due by the end of the quarter in which the entity was registered (March 31, June 30, September 30 or December 31); no annual report is needed in the year of registration",
          "lateFeeNote": "$10 late fee per delinquent year when filed online (DCCA notice). Fee schedule lists $15 (expedited $25); the 2026 DCCA notice lists $12.50 for online filing."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://cca.hawaii.gov/breg/registration/dllc/fees/"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Hawaii Business Corporation Act, Chapter 414)",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual Report",
          "fee": 15,
          "onlineFee": 12.5,
          "due": "every year; due by the end of the quarter in which the entity was registered (March 31, June 30, September 30 or December 31)"
        },
        "source": "https://cca.hawaii.gov/breg/registration/dpc/fees/"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit, Chapter 414D)",
        "filingFee": 25,
        "annualReport": {
          "name": "Annual Report",
          "fee": 5,
          "onlineFee": 2.5,
          "due": "every year; due by the end of the quarter in which the entity was registered (March 31, June 30, September 30 or December 31)"
        },
        "source": "https://cca.hawaii.gov/breg/registration/dnc/fees/",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "Hawaii Department of the Attorney General, Tax and Charities Division",
          "url": "https://ag.hawaii.gov/tax/",
          "feeNote": null
        }
      },
      "registeredAgentNote": "Hawaii's registered agent 'must be an individual or entity authorized to transact business in this State and must be physically present in the State' (DCCA BREG FAQ).",
      "businessLicenseNote": "Hawaii's Business Action Center (DCCA) is the state hub for starting a business, covering registering entities, reserving trade names and applying for licenses: https://cca.hawaii.gov/bac/",
      "stateTaxRegistration": {
        "agency": "Hawaii Department of Taxation (Form BB-1 Basic Business Application, one-time $20 fee; online via Hawaii Tax Online; covers general excise tax license and other tax types)",
        "url": "https://tax.hawaii.gov/geninfo/get/"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration, Hawaii District Office",
        "url": "https://www.sba.gov/district/hawaii"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "ID",
      "name": "Idaho",
      "agency": "Idaho Secretary of State, Business Services",
      "agencyUrl": "https://sos.idaho.gov/business-services/",
      "onlineFilingUrl": "https://sosbiz.idaho.gov/",
      "llc": {
        "formationDocument": "Certificate of Organization",
        "filingFee": 100,
        "paperFee": 120,
        "expeditedFeeNote": "Expedited service is available for certain filings (typically processed within 8 business hours; same-day requests must be received by 1 p.m. Mountain Time). The fee was not stated on the pages fetched.",
        "annualReport": {
          "name": "Annual Report",
          "fee": null,
          "due": null,
          "lateFeeNote": null
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.idaho.gov/business-forms/"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 100,
        "paperFee": 120,
        "annualReport": {
          "name": "Annual Report",
          "fee": null,
          "due": null
        },
        "source": "https://sos.idaho.gov/business-forms/"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit)",
        "filingFee": 30,
        "paperFee": 50,
        "annualReport": {
          "name": "Annual Report",
          "fee": null,
          "due": null
        },
        "source": "https://sos.idaho.gov/business-forms/",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": "Most Idaho business entities must maintain a registered agent with a physical Idaho street address (no P.O. box) who is available during normal business hours (Idaho SOS business-services and FAQ pages).",
      "businessLicenseNote": "Business.Idaho.gov, built by Idaho state agencies and run by the Idaho SBDC, has a Business Wizard showing which federal, state and local licenses and permits may apply: https://business.idaho.gov/ (page last updated Jan 2021 per the page).",
      "stateTaxRegistration": {
        "agency": "Business.Idaho.gov 'Register a Business' guidance (covers setting up withholding and unemployment accounts and tax permits with the relevant agencies)",
        "url": "https://business.idaho.gov/"
      },
      "smallBusinessHelp": {
        "name": "Idaho Small Business Development Center (no-cost consulting; funded in part by the SBA)",
        "url": "https://idahosbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "IL",
      "name": "Illinois",
      "agency": "Illinois Secretary of State, Business Services Department",
      "agencyUrl": "https://www.ilsos.gov/departments/business_services/home.html",
      "onlineFilingUrl": "https://www.ilsos.gov/departments/business-services/organization/llc-instructions.html",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": null,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "Annual Report",
          "fee": null,
          "due": null,
          "lateFeeNote": null
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": null
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": null,
        "annualReport": {
          "name": "Annual Report",
          "fee": null,
          "due": null
        },
        "source": null
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (not-for-profit)",
        "filingFee": null,
        "annualReport": {
          "name": "Annual Report",
          "fee": null,
          "due": null
        },
        "source": null,
        "stateTaxExemptionNote": "Illinois Department of Revenue accepts Form STAX-1 (Application for Sales Tax Exemption), online through MyTax Illinois or on paper. The page fetched does not say who is eligible, what documents are required or the fee, so eligibility is not confirmed here.",
        "stateTaxExemptionUrl": "https://tax.illinois.gov/forms/reg/stax-1.html",
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": null,
      "businessLicenseNote": "The Illinois Business portal has a 'Registrations, licenses, and permits' section and a 'Starting and running a business' hub: https://www.illinois.gov/business.html",
      "stateTaxRegistration": {
        "agency": "Illinois Department of Revenue (Form REG-1 via MyTax Illinois; covers sales/Retailers' Occupation Tax and withholding; unemployment insurance (IDES) can also be registered through MyTax Illinois)",
        "url": "https://tax.illinois.gov/businesses/registration.html"
      },
      "smallBusinessHelp": {
        "name": "Illinois Small Business Development Centers (DCEO; funded in part through a cooperative agreement with the SBA)",
        "url": "https://dceo.illinois.gov/smallbizassistance/beginhere/sbdc.html"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "IN",
      "name": "Indiana",
      "agency": "Indiana Secretary of State, Business Services Division (INBiz)",
      "agencyUrl": "https://www.in.gov/sos/business/",
      "onlineFilingUrl": "https://inbiz.in.gov/",
      "llc": {
        "formationDocument": "Articles of Organization (State Form 49459)",
        "filingFee": 100,
        "filingFeeBasis": "paper filing fee printed on the state form; online (INBiz) total not confirmed",
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "Business Entity Report",
          "fee": 50,
          "feeBasis": "paper fee on State Form 48725 (R18 / 01-26); INBiz page lists $32 when filed on INBiz",
          "onlineFee": 32,
          "due": "every two years (biennially) in the anniversary month of formation; first report due two years after formation",
          "lateFeeNote": "No late fee amount listed; a Past Due Notice is followed by a Pending Administrative Dissolution or Revocation notice. You have until the end of the due month before the report is considered past due."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://forms.in.gov/Download.aspx?id=16989"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (State Form 4159)",
        "filingFee": 100,
        "filingFeeBasis": "paper filing fee printed on the state form",
        "annualReport": {
          "name": "Business Entity Report",
          "fee": 50,
          "onlineFee": 32,
          "due": "every two years (biennially) in the anniversary month of formation"
        },
        "source": "https://forms.in.gov/Download.aspx?id=16996"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation, Domestic Nonprofit Corporation (State Form 4162)",
        "filingFee": 50,
        "filingFeeBasis": "paper filing fee printed on the state form; online total not confirmed",
        "annualReport": {
          "name": "Business Entity Report",
          "fee": 20,
          "feeBasis": "paper fee on State Form 48725; INBiz page lists $22 for nonprofits filed on INBiz",
          "onlineFee": 22,
          "due": "every two years (biennially) in the anniversary month of formation"
        },
        "source": "https://forms.in.gov/Download.aspx?id=16998",
        "stateTaxExemptionNote": "Indiana Department of Revenue: a nonprofit must first be recognized by the IRS, then files Form NP-20A (Nonprofit Application for Sales Tax Exemption) through INTIME; Form NP-1 is issued after DOR accepts it. The state articles form also says nonprofits must qualify with both the IRS and the Indiana Department of Revenue, and suggests contacting both before filing.",
        "stateTaxExemptionUrl": "http://www.in.gov/dor/tax-forms/nonprofit/",
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": "Indiana's Articles of Organization and Articles of Incorporation forms both require naming a registered agent (commercial or noncommercial), and INBiz tells new businesses to check name availability and find a registered agent before registering.",
      "businessLicenseNote": "INBiz is Indiana's one-stop business portal and lists Licensing under its Certification section: https://inbiz.in.gov/",
      "stateTaxRegistration": {
        "agency": "Indiana Department of Revenue (register through INBiz; all businesses must file and pay sales and withholding taxes electronically); unemployment/wage reporting is through the Department of Workforce Development",
        "url": "https://inbiz.in.gov/"
      },
      "smallBusinessHelp": {
        "name": "Indiana Small Business Development Center (no-cost advising; funded in part by the SBA)",
        "url": "https://isbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "IA",
      "name": "Iowa",
      "agency": "Iowa Secretary of State, Business Services Division",
      "agencyUrl": "https://sos.iowa.gov/businesses/business-entity-forms-and-fees",
      "onlineFilingUrl": null,
      "llc": {
        "formationDocument": "Certificate of Organization",
        "filingFee": 50,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "Biennial Report",
          "fee": 45,
          "onlineFee": 30,
          "due": "every two years, in odd-numbered years, by April 1 (the Iowa SOS business FAQ says March 31)",
          "lateFeeNote": null
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.iowa.gov/businesses/business-entity-forms-and-fees"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 50,
        "annualReport": {
          "name": "Biennial Report",
          "fee": 60,
          "due": "every two years, in even-numbered years, by April 1 (the Iowa SOS business FAQ says March 31)"
        },
        "source": "https://sos.iowa.gov/businesses/business-entity-forms-and-fees"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (Iowa Code chapter 504)",
        "filingFee": 20,
        "annualReport": {
          "name": "Biennial Report",
          "fee": 0,
          "due": "every two years, in odd-numbered years, by April 1 (the FAQ says March 31); no filing fee for chapter 504 nonprofit corporations"
        },
        "source": "https://sos.iowa.gov/businesses/business-entity-forms-and-fees",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": "Iowa entities must maintain a registered agent and registered office; the SOS reinstatement form says an entity can be administratively dissolved for failing to maintain them, and the registered agent receives the biennial-report notices starting in January of the filing year.",
      "businessLicenseNote": null,
      "stateTaxRegistration": {
        "agency": "Iowa Department of Revenue (Business Permit Registration through GovConnectIowa or paper form 78-005; covers sales/use tax and withholding permits)",
        "url": "https://revenue.iowa.gov/permits-licensing/business-permit-registration"
      },
      "smallBusinessHelp": {
        "name": "America's Small Business Development Center Iowa (no-cost business counseling)",
        "url": "https://iowasbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "KS",
      "name": "Kansas",
      "agency": "Kansas Secretary of State, Business Services Division",
      "agencyUrl": "https://www.sos.ks.gov/businesses/register-a-business.html",
      "onlineFilingUrl": "https://www.sos.ks.gov/businesses/register-a-business.html",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 85,
        "filingFeeBasis": "paper fee on form LAO (Rev. 2/27/26); the Kansas Register regulations effective Feb. 27, 2026 imply $85 online ($75 + $10, no $5 paper technology fee)",
        "onlineFee": 85,
        "expeditedFeeNote": "That is the online fee; filing on paper costs $90.",
        "annualReport": {
          "name": "Biennial information report (online fee; paper is $110)",
          "fee": 90,
          "due": "every two years (odd or even year depending on when the business formed); for-profit businesses by April 15 of their filing year",
          "lateFeeNote": "After the due date there is a three-month window to file; after that the business forfeits and must file past-due reports and be reinstated. A $10 biennial-report penalty appears in the 2026 regulations."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.ks.gov/forms/business_services/LAO.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 85,
        "onlineFee": 85,
        "annualReport": {
          "name": "Biennial information report (online fee; paper is $110)",
          "fee": 90,
          "due": "every two years (odd or even year depending on formation date), by April 15 of the filing year"
        },
        "source": "https://sos.ks.gov/forms/business_services/AI.pdf",
        "expeditedFeeNote": "That is the online fee; filing on paper costs $90."
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (not-for-profit corporation)",
        "filingFee": 20,
        "annualReport": {
          "name": "Biennial information report (same fee online or on paper)",
          "fee": 80,
          "due": "every two years, by June 15 of the filing year"
        },
        "source": "https://sos.ks.gov/forms/business_services/AI.pdf",
        "stateTaxExemptionNote": "Kansas Department of Revenue: an eligible nonprofit applies online for a Tax Entity Exemption Certificate through the KDOR Customer Service Center (KCSC); certificates expire and must be renewed. A 501(c)(3) does not need to send its IRS Form 990 to the Department of Revenue; most nonprofits file an annual/information report with the Secretary of State instead.",
        "stateTaxExemptionUrl": "https://www.ksrevenue.gov/prpecentitylearnmore.html",
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": "Kansas requires a resident agent (an individual, a business registered in Kansas, or the business itself) and a registered office at a Kansas street address where the agent can regularly be present (no P.O. box).",
      "businessLicenseNote": "The Kansas Business One Stop (Departments of Agriculture, Commerce, Labor, Revenue and the Secretary of State) has pages for researching, obtaining and maintaining licenses and permits: https://ksbiz.kansas.gov/",
      "stateTaxRegistration": {
        "agency": "Kansas Business One Stop (Business Tax Registration with the Kansas Department of Revenue; Department of Labor for unemployment)",
        "url": "https://ksbiz.kansas.gov/"
      },
      "smallBusinessHelp": {
        "name": "Kansas Business One Stop (Business Startup Wizard and Starter Kits); the Kansas SBDC site was unreachable",
        "url": "https://ksbiz.kansas.gov/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "KY",
      "name": "Kentucky",
      "agency": "Kentucky Secretary of State, Business Filings",
      "agencyUrl": "https://www.sos.ky.gov/bus/business-filings/Pages/default.aspx",
      "onlineFilingUrl": "https://onestop.ky.gov/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 40,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "Annual Report",
          "fee": 15,
          "due": "every year by June 30 (filing window January 1 through June 30; first report due the year after formation)",
          "lateFeeNote": "No late fee listed. Domestic entities that miss June 30 are administratively dissolved; reinstatement penalty is $100 plus delinquent filing fees."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sos.ky.gov/bus/business-filings/Pages/Fees.aspx"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 40,
        "organizationTaxNote": "Plus an organization tax based on authorized shares: $0.01 per share up to 20,000 shares, $0.005 per share for the next 180,000, $0.002 per share on the rest; $10 minimum for 1,000 shares or fewer.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 15,
          "due": "every year by June 30"
        },
        "source": "https://www.sos.ky.gov/bus/business-filings/Pages/Fees.aspx"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit)",
        "filingFee": 8,
        "annualReport": {
          "name": "Annual Report",
          "fee": 15,
          "due": "every year by June 30"
        },
        "source": "https://www.sos.ky.gov/bus/business-filings/Pages/Fees.aspx",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": null
        }
      },
      "registeredAgentNote": "Each Kentucky entity must designate a registered agent and registered office in Kentucky to receive service of process, and changes require a statement of change filed with the Secretary of State.",
      "businessLicenseNote": "The Kentucky Business One Stop portal (Secretary of State, Cabinet for Economic Development, Finance and Administration Cabinet) has a Licenses & Permits section: https://onestop.ky.gov/",
      "stateTaxRegistration": {
        "agency": "Kentucky Department of Revenue (Business Tax Registration; Sales & Use Tax and Employer Payroll Withholding) and Kentucky Business One Stop; the Department does not administer local occupational taxes",
        "url": "https://revenue.ky.gov/Business/Pages/default.aspx"
      },
      "smallBusinessHelp": {
        "name": "Kentucky Small Business Development Center (no-cost coaching; funded in part by the SBA)",
        "url": "https://kentuckysbdc.com/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "LA",
      "name": "Louisiana",
      "agency": "Louisiana Secretary of State, Commercial Division",
      "agencyUrl": "https://www.sos.la.gov/business-services/file-business-documents",
      "onlineFilingUrl": "https://geauxbiz.sos.la.gov/",
      "llc": {
        "formationDocument": "Articles of Organization (Louisiana Limited Liability Company)",
        "filingFee": 125,
        "expeditedFeeNote": "Walk-in 24-hour expedite $35; while-you-wait priority expedite $60; credit card payments carry an extra $5 statutory convenience fee. New fee schedule took effect 10/1/2026 (Act 921 of 2026).",
        "annualReport": {
          "name": "Annual Report",
          "fee": 35,
          "due": "every year; the exact due date is shown on the entity's record in geauxBIZ and the filing option appears up to 4 weeks before it is due",
          "lateFeeNote": "The state pages give no late-fee dollar amount. After a Notice of Intent to Revoke the report must be filed within 30 days or the charter is revoked; reinstatement fees are described as significantly higher than an annual report."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://static.sos.la.gov/shared/fee_changes_2026.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Louisiana Business Corporation)",
        "filingFee": 95,
        "annualReport": {
          "name": "Annual Report",
          "fee": 35,
          "due": "every year; exact due date shown on the entity's record in geauxBIZ"
        },
        "source": "https://static.sos.la.gov/shared/fee_changes_2026.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (Louisiana Nonprofit Corporation)",
        "filingFee": 95,
        "annualReport": {
          "name": "Annual Report for Nonprofit",
          "fee": 10,
          "due": "every year; exact due date shown on the entity's record in geauxBIZ"
        },
        "source": "https://static.sos.la.gov/shared/fee_changes_2026.pdf",
        "stateTaxExemptionNote": "Louisiana Department of Revenue says federal 501(c)(3) recognition does not automatically exempt a nonprofit from Louisiana sales and use tax; exemptions depend on state law. Qualifying nonprofits can apply each year on Form R-1048 for exemption from collecting sales tax on approved fundraising events (apply at least 30 days before the first event). Form R-20125 explains nonprofit sales tax exemptions.",
        "charitableSolicitationRegistration": {
          "agency": "Louisiana Department of Justice (Attorney General), Consumer Protection Section",
          "url": "https://ag.louisiana.gov/Charities",
          "feeNote": "$25 per year for initial registration or renewal (plus a nonrefundable online payment fee of $1.00 + 2.75%). The AG page says charities that use a professional solicitor must register at least 10 days before soliciting; religious institutions, state-approved educational institutions, and hospitals/voluntary health organizations are exempt. The page does not say whether charities without a professional solicitor must register."
        }
      },
      "registeredAgentNote": "Every Louisiana business registration needs an agent with a physical Louisiana address; the agent must be a legal-age Louisiana resident (it can be an organizer, LLC member, employee, attorney or accountant), and foreign businesses may use a commercial agent service.",
      "businessLicenseNote": "geauxBIZ can generate a list of possible federal, state and local licenses and permits for your business. https://www.sos.la.gov/business-services/start-a-business",
      "stateTaxRegistration": {
        "agency": "Louisiana Department of Revenue (LaTAP) - register sales tax and withholding; register for withholding only when you have employees",
        "url": "https://revenue.louisiana.gov/businesses/general-resources/business-registration/"
      },
      "smallBusinessHelp": {
        "name": "Louisiana Small Business Development Center network (LSBDC), hosted by LSU and funded in part by the U.S. SBA",
        "url": "https://louisianasbdc.org/locations/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "ME",
      "name": "Maine",
      "agency": "Maine Secretary of State, Bureau of Corporations, Elections and Commissions (Division of Corporations)",
      "agencyUrl": "https://www.maine.gov/sos/corporations-commissions/information-about-entities/entity-types/corporations-commissions/business-corporations",
      "onlineFilingUrl": null,
      "llc": {
        "formationDocument": "Certificate of Formation (Form MLLC-6)",
        "filingFee": 175,
        "expeditedFeeNote": "Additional $50 per entity for 24-hour (next business day) expedited filing; additional $100 per entity for immediate (same business day) filing.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 85,
          "due": "every year by June 1",
          "lateFeeNote": "The Secretary of State says a substantial late-filing penalty applies to reports received after June 1 and cannot be waived; the dollar amount is not stated."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/mllc6.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Form MBCA-6, domestic business corporation)",
        "filingFee": 145,
        "annualReport": {
          "name": "Annual Report",
          "fee": 85,
          "due": "every year by June 1"
        },
        "source": "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/mbca6.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (Form MNPCA-6, domestic nonprofit corporation)",
        "filingFee": 40,
        "annualReport": {
          "name": "Annual Report",
          "fee": 35,
          "due": "every year by June 1"
        },
        "source": "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/mnpca6.pdf",
        "stateTaxExemptionNote": "Maine Revenue Services provides a sales and use tax exemption for nonprofits with federal 501(c)(3) status; apply in the Maine Tax Portal (Quick Links > Register and Apply). Other exemption categories have their own APP forms.",
        "charitableSolicitationRegistration": {
          "agency": "Maine Department of Professional and Financial Regulation, Office of Professional and Occupational Regulation (Charitable Solicitations Act)",
          "url": "https://www.maine.gov/pfr/professionallicensing/professions/charitable-solicitations-act/licensing/charitable-organizations",
          "feeNote": "Licensure fee $20.00; annual, expires November 30. Renewal fee $20.00 with a $50.00 late fee for renewals after expiration. Maine does not accept the Unified Registration Statement; its own application is required."
        }
      },
      "registeredAgentNote": "The formation forms require naming a registered agent (commercial or noncommercial) who has consented to serve under 5 MRSA section 105.2.",
      "businessLicenseNote": "Maine Business Answers helps you determine the business licenses and permits you need to start a business and lets you search for a specific license or permit. https://www.maine.gov/businessanswers/",
      "stateTaxRegistration": {
        "agency": "Maine Revenue Services (register a new business for sales tax / withholding)",
        "url": "https://www.maine.gov/revenue/taxes/sales-use-service-provider-tax"
      },
      "smallBusinessHelp": {
        "name": "Maine Small Business Development Centers (Maine SBDC)",
        "url": "https://www.mainesbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MD",
      "name": "Maryland",
      "agency": "Maryland State Department of Assessments and Taxation (SDAT), Charter Division",
      "agencyUrl": "https://dat.maryland.gov/businesses/Pages/default.aspx",
      "onlineFilingUrl": "https://businessexpress.maryland.gov/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 100,
        "expeditedFeeNote": "Per the 05/2026 SDAT form: standard $100 (6 to 8 weeks); expedited $150 total (7 to 14 business days); same-day $425 total online or $525 total for paper drop-box/in-person delivery. Online payments through Maryland Business Express include a 3% convenience fee (per SDAT fee schedule revised May 2024).",
        "annualReport": {
          "name": "Annual Report / Business Personal Property Return (Form 1)",
          "fee": 300,
          "due": "every year by April 15 (a 60-day extension can be requested online)",
          "lateFeeNote": "SDAT's Form 1 says a return postmarked after April 15 receives an initial penalty of 1/10 of 1 percent of the county assessment plus interest of 2 percent of the penalty per 30 days; failure to file can lead to forfeiture of the right to do business in Maryland. The $300 fee is waived for businesses approved by MarylandSaves."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://dat.maryland.gov/Documents/Accessible%20Documents/Charter%20-%20Create%20or%20Start%20a%20Business/Articles%20of%20Organization%20for%20a%20Limited%20Liability%20Company_0526-A.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation for a Stock Corporation",
        "filingFee": 120,
        "filingFeeNote": "$100 filing fee plus a $20 organization and capitalization fee, unless the aggregate par value of stock exceeds $100,000 (or more than 5,000 no-par shares), in which case SDAT must be called for the fee. Expedited review adds $50 (7 to 10 business days); same-day adds $325 online or $425 delivered.",
        "annualReport": {
          "name": "Annual Report / Business Personal Property Return (Form 1)",
          "fee": 300,
          "due": "every year by April 15"
        },
        "source": "https://dat.maryland.gov/Documents/Accessible%20Documents/Charter%20-%20Create%20or%20Start%20a%20Business/Articles%20of%20Incorporation%20for%20Stock%20Corporation_0326-A.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation for a Nonstock Corporation",
        "filingFee": 120,
        "filingFeeNote": "$100 filing fee plus $20 organization and capitalization fee; an additional $50 (total $170) applies if the corporation will seek tax-exempt status under IRC 501(c)(3), (4) or (6) (goes to the Maryland Not-For-Profit Development Center Program Fund). Expedited review adds $50; same-day adds $325 online or $425 delivered.",
        "annualReport": {
          "name": "Annual Report (Form 1)",
          "fee": 0,
          "due": "every year by April 15 (non-stock corporations are still required to file; the $300 fee is listed as $0 for non-stock corporations; a personal property return may also be needed if the organization holds business personal property)"
        },
        "source": "https://dat.maryland.gov/Documents/Accessible%20Documents/Charter%20-%20Create%20or%20Start%20a%20Business/Articles%20of%20Incorporation%20for%20Nonstock%20Corporation_0326-A.pdf",
        "stateTaxExemptionNote": "The Maryland Comptroller issues a Sales and Use Tax Exemption Certificate (SUTEC) to qualifying nonprofits; the application guide says an IRS determination letter must be provided. The page I could read did not describe income-tax treatment.",
        "charitableSolicitationRegistration": {
          "agency": "Maryland Secretary of State, Charities Division",
          "url": "https://sos.maryland.gov/Charity/pages/registering-charity.aspx",
          "feeNote": "Registration is required before soliciting (a certification letter must be received first). Annual fee by contributions received: less than $25,000 = $0 (but $50 if a professional solicitor is used); $25,000 to $50,000 = $50; $50,001 to $75,000 = $75; $75,001 to $100,000 = $100; $100,001 to $500,000 = $200; $500,001 and above = $300."
        }
      },
      "registeredAgentNote": "Every Maryland LLC and corporation must name a resident agent with a Maryland street address (no P.O. boxes); a corporation cannot act as its own resident agent, and the agent must consent in writing.",
      "businessLicenseNote": "Maryland Business Express walks new businesses through registering, applying for tax accounts and insurance, and researching and obtaining licenses and permits. https://businessexpress.maryland.gov/",
      "stateTaxRegistration": {
        "agency": "Comptroller of Maryland - Combined Registration Application (sales and use tax, employer withholding)",
        "url": "https://marylandtaxes.gov/forms/current_forms/CRA.pdf"
      },
      "smallBusinessHelp": {
        "name": "Maryland Small Business Development Center (SBDC) Network, funded in part by the U.S. SBA",
        "url": "https://www.marylandsbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MA",
      "name": "Massachusetts",
      "agency": "Secretary of the Commonwealth of Massachusetts, Corporations Division",
      "agencyUrl": "https://www.sec.state.ma.us/divisions/corporations/corporations-idx.htm",
      "onlineFilingUrl": "https://corp.sec.state.ma.us/corpweb/",
      "llc": {
        "formationDocument": "Certificate of Organization",
        "filingFee": 500,
        "expeditedFeeNote": "Fee is $500 by mail or hand delivery; the fax and electronic columns show $500 plus a $20 expedite fee.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 500,
          "due": "every year on or before the anniversary date of organization (fax/electronic filing adds a $20 expedite fee)",
          "lateFeeNote": "No late-fee amount is listed for LLC annual reports on the schedule; reinstatement after administrative dissolution is $100 and all missed annual reports must be filed first."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sec.state.ma.us/divisions/corporations/download/Fee_Schedule.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Organization (Chapter 156D business corporation)",
        "filingFee": 275,
        "filingFeeNote": "$275 minimum for up to 275,000 authorized shares, plus $100 for each additional 100,000 shares or portion thereof (mail filing).",
        "annualReport": {
          "name": "Annual Report for Domestic and Foreign Corporations",
          "fee": 125,
          "due": "must arrive within two and one half months of the fiscal year end"
        },
        "source": "https://www.sec.state.ma.us/divisions/corporations/download/Fee_Schedule.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Organization (Chapter 180 nonprofit corporation)",
        "filingFee": 35,
        "annualReport": {
          "name": "Annual Report",
          "fee": 15,
          "due": "the 2022 fee schedule shows a note 'Due November 1st' beside the nonprofit rows; certain nonprofits (e.g. schools, hospitals, religious organizations) are not required to file annual reports"
        },
        "source": "https://www.sec.state.ma.us/divisions/corporations/download/Fee_Schedule.pdf",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "Massachusetts Attorney General, Non-Profit Organizations/Public Charities Division (Online Charity Portal)",
          "url": "https://www.mass.gov/info-details/registering-a-public-charity",
          "feeNote": "Not confirmed: the mass.gov pages returned HTTP 403 to my fetch, so the fee amounts are not stated here. Search-result snippets indicated that most charities must register and file Form PC annually through the AG's portal, but this was not verified."
        }
      },
      "registeredAgentNote": null,
      "businessLicenseNote": null,
      "stateTaxRegistration": {
        "agency": "Massachusetts Department of Revenue - MassTaxConnect",
        "url": "https://www.mass.gov/info-details/register-your-business-with-masstaxconnect"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - Massachusetts District Office (lists the Massachusetts SBDC network among partners)",
        "url": "https://www.sba.gov/district/massachusetts"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MI",
      "name": "Michigan",
      "agency": "Michigan Department of Licensing and Regulatory Affairs (LARA), Corporations Division (CSCL Bureau)",
      "agencyUrl": "https://www.michigan.gov/lara/bureau-list/cscl/corps",
      "onlineFilingUrl": "https://mibusinessregistry.lara.state.mi.us/",
      "llc": {
        "formationDocument": "Articles of Organization (Form CSCL/CD-700)",
        "filingFee": 50,
        "expeditedFeeNote": "Expedite for formation documents: 24 hours $50; same day $100; 2-hour same day $500; 1-hour same day $1,000 (existing-entity documents: 24 hours $100, same day $200). Fees are in addition to the $50 filing fee.",
        "annualReport": {
          "name": "Annual Statement",
          "fee": 25,
          "due": "every year by February 15 (an LLC formed after September 30 does not file the following February 15)",
          "lateFeeNote": "The LARA page lists a $50 penalty fee for statements received after the February 15 due date; failing to file for two years leads to dissolution. Professional LLCs pay $75."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.michigan.gov/lara/-/media/Project/Websites/lara/cscl/NonImages_new/Corps/forms/llc/700-0725.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation - For Profit (Form CSCL/CD-500)",
        "filingFee": 60,
        "filingFeeNote": "$50 applies to 1 to 60,000 authorized shares; the fee rises with the number of authorized shares (tiers up to $500, plus more above 10,000,000 shares).",
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "every year by May 15; late penalties of $10 (May 16-31) rising by $10 each month to $50 (September 1 or after)"
        },
        "source": "https://www.michigan.gov/-/media/Project/Websites/lara/cscl/Folder6/Filing_Fees.pdf?rev=c74f2002f79e442a8095eaa6a5d3d5f4",
        "expeditedFeeNote": "That is the minimum ($50 organization fee for up to 60,000 authorized shares plus a $10 nonrefundable fee); more authorized shares cost more."
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation - Non-Profit (Form CSCL/CD-502)",
        "filingFee": 20,
        "filingFeeNote": "$10 filing fee plus $10 franchise fee. Expedite fees are the same as for LLCs.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 20,
          "due": "every year by October 1 (starting the year after incorporation)"
        },
        "source": "https://www.michigan.gov/-/media/Project/Websites/lara/cscl/Folder6/Filing_Fees.pdf?rev=c74f2002f79e442a8095eaa6a5d3d5f4",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "Michigan Department of Attorney General, Charitable Trust Section",
          "url": "https://www.michigan.gov/consumerprotection/charities/charitable-organizations",
          "feeNote": "Registration is required for most 501(c)(3) organizations that solicit or receive more than $25,000 per year, and for any charity that pays someone to raise money, with some exemptions (an exemption request form is available); registration is renewed annually. The page I read states no registration fee amount and says there is no fee for e-filing the Michigan forms."
        }
      },
      "registeredAgentNote": "A Michigan LLC or corporation must have a resident agent whose address is in Michigan; without a Michigan address you may hire a service company or law firm to serve as resident agent.",
      "businessLicenseNote": null,
      "stateTaxRegistration": {
        "agency": "Michigan Department of Treasury - New Business Registration (sales tax and withholding tax)",
        "url": "https://www.michigan.gov/taxes/business-taxes/new-biz"
      },
      "smallBusinessHelp": {
        "name": "Michigan Small Business Development Center (MI SBDC)",
        "url": "https://www.michigansbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MN",
      "name": "Minnesota",
      "agency": "Minnesota Secretary of State, Business & Liens",
      "agencyUrl": "https://www.sos.mn.gov/business-liens/",
      "onlineFilingUrl": "https://mblsportal.sos.mn.gov/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 135,
        "expeditedFeeNote": "Minnesota law sets one $135 fee to form an LLC and does not distinguish online from paper filing. The Secretary of State may add a surcharge of up to $20 per transaction for expedited service; the Secretary of State's own fee page could not be read, so any online-only charge is unconfirmed.",
        "annualReport": {
          "name": "Annual Renewal",
          "fee": 0,
          "due": "every year by December 31, starting in the calendar year after the LLC is formed",
          "lateFeeNote": "An LLC that is administratively terminated for not renewing can reinstate by filing one annual renewal and paying a $25 fee, and the Secretary of State may also charge a late penalty of up to $40."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.revisor.mn.gov/statutes/cite/322C.0201"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 135,
        "annualReport": {
          "name": "Annual Renewal",
          "fee": null,
          "due": "every year by December 31, starting in the calendar year after incorporation"
        },
        "source": "https://www.revisor.mn.gov/statutes/cite/302A.153"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 70,
        "annualReport": {
          "name": "Annual Corporate Renewal",
          "fee": null,
          "due": "every year by December 31, starting in the calendar year after incorporation"
        },
        "source": "https://www.revisor.mn.gov/statutes/cite/317A.151",
        "stateTaxExemptionNote": "Being exempt from federal income tax does not automatically exempt a Minnesota nonprofit from sales and use tax. It must apply to the Minnesota Department of Revenue for Nonprofit Exempt Status using Form ST16, and the Department allows about 60 days to decide.",
        "charitableSolicitationRegistration": {
          "agency": "Minnesota Attorney General's Office, Charities Division",
          "url": "https://www.ag.state.mn.us/Charity/InfoCharitableorgandTrusts.asp",
          "feeNote": "Unless exempt, soliciting charities must register if they receive or plan to receive more than $25,000 in contributions in their accounting year, are not run wholly by volunteers, or use a professional fundraiser. The AG page states a $25 registration fee and requires an annual report; religious and certain educational organizations may be exempt."
        }
      },
      "registeredAgentNote": "Every Minnesota business must keep a registered office in the state that is an actual office, not just a P.O. box, and its registered agent must be a Minnesota resident or an entity authorized in Minnesota with a business office matching the registered office.",
      "businessLicenseNote": "The Minnesota Department of Revenue points new businesses to the Department of Employment and Economic Development guide to licenses and permits at https://mn.gov/deed/business/starting-business/ (that page itself could not be read).",
      "stateTaxRegistration": {
        "agency": "Minnesota Department of Revenue - Register for a Tax ID Number",
        "url": "https://www.mndor.state.mn.us/tp/eservices/_/?link=NewBusinessReg"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - Minnesota District Office",
        "url": "https://www.sba.gov/district/minnesota"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MS",
      "name": "Mississippi",
      "agency": "Mississippi Secretary of State, Business Services",
      "agencyUrl": "https://www.sos.ms.gov/business-services",
      "onlineFilingUrl": "https://corp.sos.ms.gov/corp/portal/c/page/login/portal.aspx",
      "llc": {
        "formationDocument": "Certificate of Formation",
        "filingFee": 50,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "Annual Report",
          "fee": 0,
          "due": "every year, can be filed on or after January 1 and is due by April 15",
          "lateFeeNote": "No monetary late penalty is stated; failure to file may result in administrative dissolution (reinstatement of a Mississippi LLC is $50 on the fee schedule)."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.ms.gov/sites/default/files/fees_and_forms/Services%20%26%20Fees%20Document.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "every year, can be filed on or after January 1 and is due by April 15"
        },
        "source": "https://sos.ms.gov/sites/default/files/fees_and_forms/Services%20%26%20Fees%20Document.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "every year, can be filed on or after January 1 and is due by May 15"
        },
        "source": "https://sos.ms.gov/sites/default/files/fees_and_forms/Services%20%26%20Fees%20Document.pdf",
        "stateTaxExemptionNote": "The Secretary of State's nonprofit page says the corporation must register with the Mississippi State Tax Commission (now the Department of Revenue) and that certain nonprofits may qualify for state tax-exempt status; contact the agency or a tax advisor. The page gives no form name.",
        "charitableSolicitationRegistration": {
          "agency": "Mississippi Secretary of State, Securities and Charities Enforcement Division",
          "url": "https://www.sos.ms.gov/charities/charity-online-registration",
          "feeNote": "Registration of a charitable organization is $50 and renewal is $50 (fee schedule). The nonprofit page says a nonprofit that solicits the public, including online, may need to register before starting (churches do not); unregistered solicitation can draw an administrative penalty of up to $25,000 per violation."
        }
      },
      "registeredAgentNote": "The Secretary of State's registered-agent page says an agent can be any individual, corporation or LLC provided the agent has a physical address in Mississippi.",
      "businessLicenseNote": "The Secretary of State links to 'Y'all Business', its business-startup resource, from the Business Services page. https://yallbusiness.sos.ms.gov/Home",
      "stateTaxRegistration": {
        "agency": "Mississippi Department of Revenue - register for all taxes online in the Taxpayer Access Point (TAP)",
        "url": "https://www.dor.ms.gov/business"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - Mississippi District Office",
        "url": "https://www.sba.gov/district/mississippi"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MO",
      "name": "Missouri",
      "agency": "Missouri Secretary of State, Business Services - Corporations Division",
      "agencyUrl": "https://www.sos.mo.gov/business/corporations/startBusiness",
      "onlineFilingUrl": "https://bsd.sos.mo.gov/",
      "llc": {
        "formationDocument": "Articles of Organization for a Limited Liability Company (LLC 1)",
        "filingFee": 50,
        "expeditedFeeNote": "$50 when filed online; $105 on paper. Active-duty military members, including Missouri National Guard, may create a business without a filing fee (Startup for Soldiers). E-payments carry a small convenience fee not kept by the state. The state offers an optional $55 pre-clearance review.",
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null,
          "lateFeeNote": "The fee schedule and filings page list annual registration reports only for corporations and nonprofit corporations; no LLC annual report is listed, but the pages do not state that LLCs are exempt, so it is left null."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sos.mo.gov/CMSImages/Business/fees.pdf?v=2025"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation of a For Profit Corporation (Corp. 41)",
        "filingFee": 58,
        "filingFeeNote": "Based on authorized capital: $58 for $30,000 or less ($50 plus $3 certificate and $5 technology fund), rising $5 for each additional $10,000.",
        "annualReport": {
          "name": "Annual Registration Report",
          "fee": 45,
          "due": "every year at the end of the month of incorporation or qualification (for corporations incorporated on or after July 1, 2003); $45 on paper, $20 filed online; a biennial option is listed at $90 paper or $40 online; late reports add $15 per 30-day period"
        },
        "source": "https://www.sos.mo.gov/CMSImages/Business/fees.pdf?v=2025"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation of a Nonprofit Corporation (Corp. 52)",
        "filingFee": 25,
        "annualReport": {
          "name": "Annual Registration Report",
          "fee": 15,
          "due": null
        },
        "source": "https://www.sos.mo.gov/CMSImages/Business/fees.pdf?v=2025",
        "stateTaxExemptionNote": "The Secretary of State does not grant tax-exempt status; the nonprofit must apply to the IRS and to the Missouri Department of Revenue. The specific Department of Revenue form was not confirmed.",
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": "Not confirmed: I could not find a Missouri charitable-solicitation registration page on the Attorney General or Secretary of State sites that I could fetch."
        }
      },
      "registeredAgentNote": "All foreign and domestic corporations must maintain a registered agent with a Missouri address; a domestic corporation without a registered agent for 60 days is administratively dissolved.",
      "businessLicenseNote": "The Secretary of State's resource page points to the Missouri Business Portal as a one-stop gateway for researching, registering and maintaining a business in Missouri. https://business.mo.gov",
      "stateTaxRegistration": {
        "agency": "Missouri Department of Revenue - Register Your Business Online (sales/use and withholding); Division of Employment Security handles unemployment tax registration",
        "url": "https://dor.mo.gov/register-business"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - St. Louis District Office (also lists Small Business Development Centers); Secretary of State also lists MO SourceLink",
        "url": "https://www.sba.gov/district/st-louis"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "MT",
      "name": "Montana",
      "agency": "Montana Secretary of State, Business Services",
      "agencyUrl": "https://sosmt.gov/business/",
      "onlineFilingUrl": "https://biz.sosmt.gov/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 35,
        "expeditedFeeNote": "The fee sheet lists $35, plus $50 for each series member in a series LLC, and does not distinguish online from paper filing. Extra processing fees: $20 for 24-hour service or $100 for 1-hour service.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 0,
          "due": "between January 1 and April 15 each year, with the first report due the year after formation",
          "lateFeeNote": "The annual report fee is waived if filed before April 15 and is $35 after April 15; reinstatement costs $35 plus $35 for each year of delinquent annual reports."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sosmt.gov/business/fees/"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation - Profit Corporation",
        "filingFee": 35,
        "annualReport": {
          "name": "Annual Report",
          "fee": 0,
          "due": "between January 1 and April 15 each year, with the first report due the year after incorporation"
        },
        "source": "https://sosmt.gov/business/fees/"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation - Non-profit Corporation",
        "filingFee": 20,
        "annualReport": {
          "name": "Annual Report",
          "fee": 0,
          "due": "between January 1 and April 15 each year, with the first report due the year after incorporation"
        },
        "source": "https://sosmt.gov/business/fees/",
        "stateTaxExemptionNote": "The Montana Department of Revenue says an IRS exemption letter is not enough: an entity must be granted tax-exempt status by the Department using the Tax-Exempt Status Request Form for Income Taxes (Form EXPT), with a copy of the IRS letter attached. Tax-exempt entities should also register with the Department through the TransAction Portal (register as a C-corporation).",
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": "Not confirmed: no official Montana charitable-solicitation registration page or fee was found; the Department of Justice Office of Consumer Protection page on donations to charities only gives donor-safety advice."
        }
      },
      "registeredAgentNote": "A Montana filing must name the entity's commercial registered agent, or if it has none, a noncommercial registered agent with a name and address, and changing the registered office or agent costs no fee.",
      "businessLicenseNote": "Montana's Department of Commerce says local city and county offices handle general business licensing and the state issues professional licenses, with state-issued business licenses available through the Department of Revenue's eStop program at https://commerce.mt.gov/Business/Programs-and-Services/Small-Business-Development-Center/resources/Business-Licensing.",
      "stateTaxRegistration": {
        "agency": "Montana Department of Revenue - TransAction Portal (withholding account and other business tax registration)",
        "url": "https://revenue.mt.gov/taxes/withholding-tax/accounts"
      },
      "smallBusinessHelp": {
        "name": "Montana Department of Commerce - Small Business Development Center",
        "url": "https://sbdc.mt.gov"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NE",
      "name": "Nebraska",
      "agency": "Nebraska Secretary of State (Business Services)",
      "agencyUrl": "https://sos.nebraska.gov/business-services/new-business-information",
      "onlineFilingUrl": "https://www.nebraska.gov/apps-sos-edocs/",
      "llc": {
        "formationDocument": "Certificate of Organization",
        "filingFee": 100,
        "filingFeeNote": "$100 online, $110 paper/in-office (online portal fees extra).",
        "expeditedFeeNote": "That is the online fee; filing in the office costs $110.",
        "annualReport": {
          "name": "Biennial report (electronic fee; paper is $30)",
          "fee": 25,
          "due": "every two years, in odd-numbered years, by April 1 (becomes delinquent June 16)",
          "lateFeeNote": "Failure to file leads to administrative dissolution; reinstatement is a $30 reinstatement fee plus the $30 biennial fee ($60 total) per the SOS reinstatement notice. $30 is the paper fee on the 2025-2026 form."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": "Yes. Under Nebraska law (Neb. Rev. Stat. 21-193) the LLC must publish a notice of organization in a legal newspaper of general circulation near its designated office for three successive weeks, then file proof of publication with the Secretary of State ($25 online, $30 in the office). The newspaper charges its own fee.",
        "source": "https://sos.nebraska.gov/business-services/forms-and-fee-information"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 100,
        "filingFeeNote": "$100 online, $110 paper/in-office.",
        "annualReport": {
          "name": "Biennial report (electronic fee; paper is $30)",
          "fee": 25,
          "due": "every two years, in even-numbered years, by March 1 (delinquent April 15)",
          "lateFeeNote": null
        },
        "source": "https://sos.nebraska.gov/business-services/forms-and-fee-information",
        "expeditedFeeNote": "That is the online fee; filing in the office costs $110."
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 25,
        "filingFeeNote": "$25 online, $30 paper/in-office.",
        "annualReport": {
          "name": "Biennial report (electronic fee; paper is $30)",
          "fee": 25,
          "due": "every two years, in odd-numbered years, by April 1 (delinquent June 16)"
        },
        "source": "https://sos.nebraska.gov/business-services/forms-and-fee-information",
        "stateTaxExemptionNote": "Federal 501(c)(3) status does not automatically exempt a Nebraska nonprofit from state sales tax; only organizations specifically listed in the Department of Revenue sales tax regulations qualify (the Department says very few do). The Department of Revenue guidance points to Regulations 1-012 and 1-090 and the guide 'Nebraska Taxation of Nonprofit Organizations' (7-215).",
        "charitableSolicitationRegistration": {
          "agency": "Nebraska Secretary of State (Licensing)",
          "url": "https://sos.nebraska.gov/licensing/information-charitable-solicitors",
          "feeNote": "Not required: the Secretary of State says charities are no longer required to register with its office; the old charitable solicitor registration requirement was repealed in 1996."
        },
        "expeditedFeeNote": "That is the online fee; filing in the office costs $30."
      },
      "registeredAgentNote": "Corporations and LLCs must name a registered agent (a member, a Nebraska-resident third party, or an authorized corporation) and must maintain the agent and registered office continuously.",
      "businessLicenseNote": "The Secretary of State states there is no general business license in Nebraska; industry-specific licenses come from other agencies (see https://sos.nebraska.gov/business-services/new-business-information).",
      "stateTaxRegistration": {
        "agency": "Nebraska Department of Revenue (business registration, linked from the Secretary of State's new-business page)",
        "url": "http://www.revenue.ne.gov/business/bus_regist.html"
      },
      "smallBusinessHelp": {
        "name": "Nebraska Business Development Center (linked from the Secretary of State's new-business page)",
        "url": "https://www.unomaha.edu/nebraska-business-development-center/index.php"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NV",
      "name": "Nevada",
      "agency": "Nevada Secretary of State",
      "agencyUrl": "https://bizhub.nv.gov",
      "onlineFilingUrl": "https://www.nvsos.gov",
      "llc": {
        "formationDocument": "Articles of Organization (filed with the Initial List of Managers or Members and State Business License application)",
        "filingFee": 75,
        "filingFeeNote": "At formation you also pay the $150 initial list and $200 state business license, so $425 total ($350 of that is the list + license).",
        "expeditedFeeNote": "Optional, in addition to the filing fee: 2-hour $500 per item, 1-hour $1,000 per item (a 24-hour tier also exists at a lower price).",
        "annualReport": {
          "name": "Annual List of Managers or Members, with State Business License renewal",
          "fee": 150,
          "due": "every year by the last day of the anniversary month of formation (may be filed up to 90 days early); the $200 state business license is renewed with it",
          "lateFeeNote": "$75 late fee for the list plus $100 late fee for the business license."
        },
        "otherStateTaxNote": "Nevada charges a $200 state business license fee each year on top of the annual list fee for LLCs.",
        "publicationRequirement": null,
        "source": "https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/LLC_Formation_V4_1_9e5c396592.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (filed with the Initial List of Officers and State Business License application)",
        "filingFee": 75,
        "filingFeeNote": "Formation fee is $75 for authorized stock value up to $75,000 and rises with the value of authorized shares (up to $35,000 maximum).",
        "annualReport": {
          "name": "Annual List of Officers and Directors, with State Business License renewal",
          "fee": 150,
          "due": "every year by the last day of the anniversary month of formation (may be filed up to 90 days early)",
          "lateFeeNote": "$150 is the minimum list fee for authorized stock up to $75,000 (up to $11,125 maximum); plus a $500 state business license fee ($200 for professional corporations). Late: $75 on the list and $100 on the license."
        },
        "source": "https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/Annual_List_and_State_Business_License_Corps_Final_2aebeed395.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation, NRS 82.006)",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual List of Officers and Directors",
          "fee": 50,
          "due": "every year by the last day of the anniversary month of formation (initial list is also $50 and filed with the articles)"
        },
        "source": "https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/Nonprofit_Corp_Arts_V4_21e224f540.pdf",
        "stateTaxExemptionNote": "On the Secretary of State's nonprofit forms, a religious, charitable, fraternal or other organization that qualifies under 26 U.S.C. 501(c) claims exemption from the state business license fee by checking a box and giving its IRS status; others pay the $200 (or $500) business license fee. Late fee on the annual list is $50.",
        "charitableSolicitationRegistration": {
          "agency": "Nevada Secretary of State",
          "url": "https://bizhub.nv.gov/cms-webhook-bff/uploads/bizhub/Nonprofit_Corp_Arts_V4_21e224f540.pdf",
          "feeNote": "Required if the organization plans to ask for charitable or tax-deductible donations: file a Charitable Solicitation Registration Statement with the formation filing, or an Exemption from Charitable Solicitation Registration Statement if it qualifies under NRS 82A.210. The registration fee amount was not confirmed."
        }
      },
      "registeredAgentNote": "Every Nevada entity must have a registered agent (an individual, or a commercial registered agent company authorized to do business in Nevada) who is available during normal business hours to receive legal documents.",
      "businessLicenseNote": "Nevada's state business license is applied for and renewed with the Secretary of State filing, and the Department of Taxation also points to its online business license portal at https://tax.nv.gov/silverflume.",
      "stateTaxRegistration": {
        "agency": "Nevada Department of Taxation (My Nevada Tax / Nevada Tax Center)",
        "url": "https://tax.nv.gov/Registration"
      },
      "smallBusinessHelp": {
        "name": "Nevada Small Business Development Center (University of Nevada, Reno; SBA-funded)",
        "url": "https://www.nevadasbdc.org"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NH",
      "name": "New Hampshire",
      "agency": "New Hampshire Secretary of State, Corporation Division",
      "agencyUrl": "https://www.sos.nh.gov",
      "onlineFilingUrl": "https://quickstart.sos.nh.gov/online/Account/SFALogin",
      "llc": {
        "formationDocument": "Certificate of Formation (Form LLC-1)",
        "filingFee": 100,
        "expeditedFeeNote": "The statute allows expedited service but leaves the amount to the Secretary of State; the amount was not confirmed.",
        "annualReport": {
          "name": "Annual report (RSA 304-C:194)",
          "fee": 100,
          "due": "every year between January 1 and April 1, starting the year after formation",
          "lateFeeNote": "$50 additional late filing fee if not filed (with payment) by April 1; reinstatement $135, or $500 for late reinstatement."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://gc.nh.gov/rsa/html/XXVIII/304-C/304-C-191.htm"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual report",
          "fee": 100,
          "due": "every year between January 1 and April 1, starting the year after incorporation"
        },
        "source": "https://gc.nh.gov/rsa/html/XXVII/293-A/293-A-122.htm"
      },
      "nonprofit": {
        "formationDocument": "Articles of Agreement (voluntary corporation under RSA 292)",
        "filingFee": 25,
        "annualReport": {
          "name": "Renewal return required by RSA 292:25 (statute text)",
          "fee": 25,
          "due": "statute text sets a written return every 5 years on a cycle counted from 1990; current Secretary of State practice and any separate annual filing were not confirmed"
        },
        "source": "https://gc.nh.gov/rsa/html/XXVII/292/292-5.htm",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "New Hampshire Department of Justice, Charitable Trusts Unit",
          "url": "https://www.doj.nh.gov/charitable-trusts",
          "feeNote": "Not confirmed: the page returned 403 to automated fetch, so the requirement and fees were not verified."
        }
      },
      "registeredAgentNote": null,
      "businessLicenseNote": null,
      "stateTaxRegistration": null,
      "smallBusinessHelp": {
        "name": "NH Small Business Development Center (UNH Peter T. Paul College; free confidential advising)",
        "url": "https://www.nhsbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NJ",
      "name": "New Jersey",
      "agency": "New Jersey Department of the Treasury, Division of Revenue and Enterprise Services (DORES)",
      "agencyUrl": "https://business.nj.gov/pages/register-your-business",
      "onlineFilingUrl": "https://www.njportal.com",
      "llc": {
        "formationDocument": "Certificate of Formation",
        "filingFee": 100,
        "expeditedFeeNote": "Over-the-counter only: $25 per filing, $50 same-day (fax filings), $500 for 2-hour, $1,000 for 1-hour service per document.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 75,
          "due": "every year by the last day of the month in which the business completed its formation",
          "lateFeeNote": "No dollar late fee is listed; failure to file can result in revocation of the business. LLC reinstatement of charter is $75."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.nj.gov/treasury/revenue/fees.shtml"
      },
      "corporation": {
        "formationDocument": "Certificate of Incorporation",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual Report",
          "fee": 75,
          "due": "every year by the last day of the month in which the business completed its formation"
        },
        "source": "https://www.nj.gov/treasury/revenue/fees.shtml"
      },
      "nonprofit": {
        "formationDocument": "Certificate of Incorporation (domestic non-profit)",
        "filingFee": 50,
        "annualReport": {
          "name": "Non-profit Annual Report",
          "fee": 30,
          "due": null
        },
        "source": "https://www.nj.gov/treasury/revenue/fees.shtml",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": null
      },
      "registeredAgentNote": "A New Jersey LLC or corporation needs a registered agent, a person or company able to receive legal documents for the business, with a New Jersey address.",
      "businessLicenseNote": "NJ's Business Navigator is a free step-by-step guide that covers permitting and licensing: https://navigator.business.nj.gov",
      "stateTaxRegistration": {
        "agency": "NJ Division of Revenue and Enterprise Services (register for NJ tax and employer purposes)",
        "url": "https://www.njportal.com/DOR/BusinessRegistration"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - New Jersey District Office",
        "url": "https://www.sba.gov/district/new-jersey"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NM",
      "name": "New Mexico",
      "agency": "New Mexico Secretary of State, Business Services Division",
      "agencyUrl": "https://www.sos.nm.gov/business-services/",
      "onlineFilingUrl": "https://enterprise.sos.nm.gov/",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 50,
        "expeditedFeeNote": "The statute sets one $50 fee and does not distinguish online from paper; the Secretary of State says all business filings are now online and a convenience fee applies to card payments. New Mexico law lets the Secretary of State charge extra for expedited service, but no amount was found on an official page.",
        "annualReport": {
          "name": "The Limited Liability Company Act lists no periodic annual report for LLCs",
          "fee": null,
          "due": null,
          "lateFeeNote": null
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://nmonesource.com/nmos/nmsa/en/4400/1/document.do"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 100,
        "filingFeeNote": "The fee is $1 for each 1,000 authorized shares, with a minimum of $100 and a maximum of $1,000.",
        "annualReport": {
          "name": "Corporate Report (filed every two years)",
          "fee": 25,
          "due": "within 30 days after the certificate of incorporation is issued, then every two years by the 15th day of the fourth month after the end of the corporation's taxable year; a late report adds a $200 penalty"
        },
        "source": "https://nmonesource.com/nmos/nmsa/en/4400/1/document.do"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 25,
        "annualReport": {
          "name": "Annual Report for nonprofit corporations",
          "fee": 10,
          "due": "every year by the 15th day of the fifth month after the end of the corporation's taxable year, with the first report due within 30 days after the certificate of incorporation is issued"
        },
        "source": "https://nmonesource.com/nmos/nmsa/en/4400/1/document.do",
        "stateTaxExemptionNote": "The New Mexico Taxation and Revenue Department says the state treats you as tax-exempt only if the IRS first granted 501(c) status, and the gross receipts of a 501(c)(3) or 501(c)(6) organization are generally exempt from gross receipts tax except for unrelated business income. The nonprofit still pays other businesses' passed-on gross receipts tax on purchases unless it delivers a nontaxable transaction certificate.",
        "charitableSolicitationRegistration": {
          "agency": "New Mexico Department of Justice, Charities Unit",
          "url": "https://nmdoj.gov/get-help/charities/",
          "feeNote": "Charities that exist, operate or solicit in New Mexico must register online in NM-COROS within 30 days of formation and before soliciting, and file an annual report within six months after fiscal year end. The page states no registration fee, only a $100 penalty for failing to register or file on time."
        }
      },
      "registeredAgentNote": "An LLC must keep a New Mexico registered office and a registered agent who is either a New Mexico resident individual or an entity with a place of business at the registered office, and the filing includes a signed Registered Agent Statement of Acceptance.",
      "businessLicenseNote": "New Mexico's Business Navigator at https://biz.nm.gov/business-navigator/ helps you register your business structure and review the licenses and permits required by the State of New Mexico.",
      "stateTaxRegistration": {
        "agency": "New Mexico Taxation and Revenue Department - register to receive a Business Tax Identification Number",
        "url": "https://www.tax.newmexico.gov/businesses/who-must-register-a-business/"
      },
      "smallBusinessHelp": {
        "name": "New Mexico Small Business Development Center (statewide network, SBA-funded, no-cost counseling)",
        "url": "https://www.nmsbdc.org"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NY",
      "name": "New York",
      "agency": "New York Department of State, Division of Corporations",
      "agencyUrl": "https://dos.ny.gov/forming-limited-liability-company-new-york",
      "onlineFilingUrl": null,
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 200,
        "expeditedFeeNote": "Per document, in addition to the filing fee: $25 within 24 hours, $75 same day, $150 within 2 hours (schedule marked Rev. 3/16; not available for biennial statements).",
        "annualReport": {
          "name": "Biennial Statement",
          "fee": 9,
          "due": "every two years in the calendar month in which the Articles of Organization were originally filed",
          "lateFeeNote": "No monetary penalty is listed; a non-filer is shown as past due in Department of State records, which may block certain transactions."
        },
        "otherStateTaxNote": "The Department of State FAQ says LLCs owe a state tax based on the number of members but gives no amount; questions go to the NYS Department of Taxation and Finance (518-457-5342).",
        "publicationRequirement": "Yes. Under LLC Law section 206 the LLC must publish a notice once a week for six successive weeks in two newspapers (one daily, one weekly) designated by the county clerk of the county of its office, then file a Certificate of Publication with the Department of State ($50 fee) within 120 days of formation. Newspapers charge their own fee (amount not stated on the page). If not filed within 120 days, the LLC's authority to do business is suspended until it is filed.",
        "source": "https://dos.ny.gov/forming-limited-liability-company-new-york"
      },
      "corporation": {
        "formationDocument": "Certificate of Incorporation",
        "filingFee": 125,
        "annualReport": {
          "name": "Biennial Statement",
          "fee": 9,
          "due": "every two years in the calendar month in which the Certificate of Incorporation was originally filed"
        },
        "source": "https://dos.ny.gov/fee-schedules"
      },
      "nonprofit": {
        "formationDocument": "Certificate of Incorporation (not-for-profit corporation)",
        "filingFee": 75,
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null
        },
        "source": "https://dos.ny.gov/fee-schedules",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "New York Attorney General, Charities Bureau (Registration Section)",
          "url": "https://www.charitiesnys.com/",
          "feeNote": "The Department of State FAQ says charitable not-for-profits may need to register with the Attorney General's Charities Bureau (212-416-8415); registration rules and fees were not confirmed."
        }
      },
      "registeredAgentNote": "A New York LLC must designate the Secretary of State as its agent for service of process and give an address where the Secretary of State mails any process; naming a separate registered agent is optional.",
      "businessLicenseNote": "NY Business Express is the state's one-stop site for licenses, permits and registrations and builds a custom business checklist: https://www.businessexpress.ny.gov",
      "stateTaxRegistration": {
        "agency": "NY Business Express (lists sales tax authorization and unemployment insurance registration forms; the Department of Taxation and Finance administers sales tax)",
        "url": "https://www.businessexpress.ny.gov"
      },
      "smallBusinessHelp": null,
      "checkedOn": "2026-10-10"
    },
    {
      "code": "NC",
      "name": "North Carolina",
      "agency": "North Carolina Secretary of State, Business Registration Division",
      "agencyUrl": "https://www.sosnc.gov/divisions/business_registration",
      "onlineFilingUrl": "https://www.sosnc.gov/online_filing/filing/creation",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 125,
        "expeditedFeeNote": "In addition to the filing fee: $200 for same-business-day filing if received by noon Eastern, $100 for filing within 24 hours of receipt (weekends and holidays excluded).",
        "annualReport": {
          "name": "LLC Annual Report",
          "fee": 200,
          "due": "April 15 of each year after the year of creation",
          "lateFeeNote": "No late fee is stated on the pages fetched; online filing adds a $3.00 card fee (or $2.00 ACH). The office can begin administrative dissolution for non-compliance."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sosnc.gov/fees/by_title/_Business_Registration/"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 125,
        "annualReport": {
          "name": "Business Corporation Annual Report",
          "fee": 25,
          "due": "the 15th day of the fourth month following the end of the corporation's fiscal year"
        },
        "source": "https://sosnc.gov/fees/by_title/_Business_Registration/"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 60,
        "annualReport": {
          "name": "Not required: the Secretary of State's annual report FAQ lists nonprofit corporations among entities that do not file",
          "fee": 0,
          "due": null
        },
        "source": "https://www.sosnc.gov/fees/by_title/_Business_Registration_Nonprofit_Corporations",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "NC Secretary of State, Charitable Solicitation Licensing Section",
          "url": "https://www.sosnc.gov/frequently_asked_questions/by_title/_charities",
          "feeNote": "Most charities that solicit in NC need a license; fee ranges from $50 to $400 by prior-year donations (late renewal $25 per month). Exempt: churches, schools, YMCAs, and charities with under $50,000 a year in contributions that pay no one (13 exemptions in all); exempt groups may register voluntarily for an exemption letter."
        }
      },
      "registeredAgentNote": "North Carolina business entities file a designation of registered office and registered agent with the Secretary of State ($5 for corporations and nonprofits to designate or change; the fee list also shows $5 for an LLC statement of change).",
      "businessLicenseNote": null,
      "stateTaxRegistration": {
        "agency": "North Carolina Department of Revenue (register for withholding and sales and use tax online or by mail)",
        "url": "https://www.ncdor.gov/taxes-forms/register-business"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - North Carolina District Office",
        "url": "https://www.sba.gov/district/north-carolina"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "ND",
      "name": "North Dakota",
      "agency": "North Dakota Secretary of State",
      "agencyUrl": "https://www.sos.nd.gov/business",
      "onlineFilingUrl": "https://firststop.sos.nd.gov",
      "llc": {
        "formationDocument": "Articles of Organization (business LLC)",
        "filingFee": 135,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "LLC Annual Report",
          "fee": 50,
          "due": "every year by November 15 (farming or ranching LLCs and ALF LLCs: April 15)",
          "lateFeeNote": "A late filing fee applies to reports received after the deadline (amount not stated on the page); an LLC that stays delinquent goes to Not Good Standing and can be involuntarily terminated."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sos.nd.gov/business/business-services/business-structures/limited-liability-company-llc"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (general business corporation)",
        "filingFee": 100,
        "annualReport": {
          "name": "Corporation Annual Report",
          "fee": 25,
          "due": "every year by August 1 (domestic corporations)"
        },
        "source": "https://sos.nd.gov/business/business-services/business-structures/corporations/general-business-corporation/general-business-corporation-fees.html"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 40,
        "annualReport": {
          "name": "Nonprofit Annual Report",
          "fee": 10,
          "due": "every year on or before February 1 (first report due the year after the organization began)"
        },
        "source": "https://www.sos.nd.gov/business/nonprofit-services/register-nonprofit/north-dakota-nonprofit",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "North Dakota Secretary of State",
          "url": "https://www.sos.nd.gov/business/nonprofit-services/charitable-organizations",
          "feeNote": "Registration is required before soliciting in ND ($25, filed through the FirstStop Portal after registering as a nonprofit); separate Charitable Organization Annual Report is $10 due September 1; late filers must pay $10 plus $25 to re-register. Exempt: college/university solicitations, unpaid volunteer groups for a government project, schools, solicitations for one named person, certain religious organizations, and political committees."
        }
      },
      "registeredAgentNote": "North Dakota LLCs and corporations must keep a registered agent with a physical North Dakota address who has agreed to serve, and the business cannot act as its own agent.",
      "businessLicenseNote": null,
      "stateTaxRegistration": null,
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - North Dakota District Office",
        "url": "https://www.sba.gov/district/north-dakota"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "OH",
      "name": "Ohio",
      "agency": "Ohio Secretary of State",
      "agencyUrl": "https://www.ohiosos.gov/business/business-filing-forms",
      "onlineFilingUrl": null,
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 99,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null,
          "lateFeeNote": null
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://codes.ohio.gov/ohio-revised-code/section-111.16"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 99,
        "filingFeeNote": "$99 minimum. For corporations with shares the fee scales with the number of authorized shares ($0.10 per share to 1,000, down to $0.0025 per share above 500,000), maximum $100,000.",
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null
        },
        "source": "https://codes.ohio.gov/ohio-revised-code/section-111.16"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation, no shares)",
        "filingFee": 99,
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null
        },
        "source": "https://codes.ohio.gov/ohio-revised-code/section-111.16",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "Ohio Attorney General, Charitable Law Section",
          "url": "https://charitable.ohioago.gov/Charity-Registration/Starting-a-Charity-in-Ohio",
          "feeNote": "Required: charities and organizations soliciting for a charitable purpose in Ohio must register with the Charitable Law Section regardless of IRS tax-exempt status, and file annual reports due when the IRS return is due. The page does not state a registration fee; phone 800-282-0515."
        }
      },
      "registeredAgentNote": "Ohio's fee statute charges $25 to change, resign or update the address of an entity's statutory agent (ORC 111.16(R)(1)).",
      "businessLicenseNote": null,
      "stateTaxRegistration": null,
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - Ohio District Office",
        "url": "https://www.sba.gov/district/ohio"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "OK",
      "name": "Oklahoma",
      "agency": "Oklahoma Secretary of State, Business Filing Department",
      "agencyUrl": "https://www.sos.ok.gov/business/default.aspx",
      "onlineFilingUrl": "https://www.sos.ok.gov/corp/filing.aspx",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 100,
        "expeditedFeeNote": "Same-day filing delivered in person costs an extra $25 per document (SOS procedure sheet, 18 O.S. 1142). Credit-card payments in person or online carry a 4% service charge.",
        "annualReport": {
          "name": "LLC Annual Certificate",
          "fee": 25,
          "due": "every year on the LLC's anniversary (formation) date",
          "lateFeeNote": "No late fee is listed. If it is not filed within 60 days after the due date, the LLC ceases to be in good standing; reinstatement needs the missing annual certificates filed (SOS annual certificate form and FAQ)."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sos.ok.gov/business/fees.aspx"
      },
      "corporation": {
        "formationDocument": "Certificate of Incorporation (Oklahoma for-profit corporation)",
        "filingFee": 50,
        "annualReport": {
          "name": "None required by the Secretary of State for domestic corporations",
          "fee": null,
          "due": null
        },
        "source": "https://www.sos.ok.gov/forms/FM0001.PDF"
      },
      "nonprofit": {
        "formationDocument": "Certificate of Incorporation (Oklahoma not-for-profit corporation)",
        "filingFee": 25,
        "annualReport": {
          "name": "None required by the Secretary of State for domestic not-for-profit corporations",
          "fee": null,
          "due": null
        },
        "source": "https://www.sos.ok.gov/forms/FM0008.PDF",
        "stateTaxExemptionNote": "Sales tax: Oklahoma exemptions are set by statute, so federal 501(c)(3) status alone does not make an organization exempt; it must fit one of the listed categories and apply to the Oklahoma Tax Commission on Form 13-16-A with the required documents (Sales Tax Exemption Packet E, revised August 2026). State income tax exemption could not be confirmed on an official page.",
        "charitableSolicitationRegistration": {
          "agency": "Oklahoma Secretary of State (Solicitation of Charitable Contributions Act, 18 O.S. 552.1 et seq.)",
          "url": "https://www.sos.ok.gov/charity/Default.aspx",
          "feeNote": "Required for charities soliciting in Oklahoma unless exempt (e.g. religious organizations, certain schools and fraternal groups); renew every year. The SOS instruction sheet (Form 101, dated 01/13) says $65 if expected contributions exceed $10,000 or $15 if not, but the SOS online fee schedule lists $15 for both application and renewal, so confirm the amount with the SOS before paying."
        }
      },
      "registeredAgentNote": "Every Oklahoma LLC and corporation must continuously keep a registered agent and a street-address registered office in Oklahoma (no P.O. boxes); the agent may be the entity itself, an Oklahoma-resident individual, or a domestic or qualified foreign business entity.",
      "businessLicenseNote": "The Oklahoma Business Hub's Obtain Licenses & Permits page lets you look up state licence requirements by industry and notes that cities may require their own licences: https://oklahoma.gov/business/launch/obtain-licenses---permits.html",
      "stateTaxRegistration": {
        "agency": "Oklahoma Tax Commission (OkTAP portal; sales or use tax permit)",
        "url": "https://oktap.tax.ok.gov/OkTAP/Web/_/"
      },
      "smallBusinessHelp": {
        "name": "SBA Oklahoma District Office (serves the whole state)",
        "url": "https://legacy.sba.gov/district/oklahoma"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "OR",
      "name": "Oregon",
      "agency": "Oregon Secretary of State, Corporation Division (Business Registry)",
      "agencyUrl": "https://sos.oregon.gov/business",
      "onlineFilingUrl": "https://secure.sos.state.or.us/cbrmanager/index.action",
      "llc": {
        "formationDocument": "Articles of Organization - Limited Liability Company",
        "filingFee": 100,
        "expeditedFeeNote": "No expedited-service fee is listed on the Business Registry Fee Schedule.",
        "annualReport": {
          "name": "Annual Report (renewal)",
          "fee": 100,
          "due": "every year on the anniversary of the original registration date (notice is mailed about 45 days before)",
          "lateFeeNote": "Late-fee amount not found on an official page."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.oregon.gov/business/documents/business-registry-forms/llc-articles.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (domestic business corporation)",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual Report (renewal)",
          "fee": 100,
          "due": "every year on the anniversary of the original registration date"
        },
        "source": "https://sos.oregon.gov/business/Documents/business-registry-forms/br-fee-schedule.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation - Nonprofit",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual Report (renewal)",
          "fee": 50,
          "due": "every year on the anniversary of the original registration date; if not filed within 45 days of the renewal date the nonprofit is administratively dissolved and a reinstatement fee applies"
        },
        "source": "https://sos.oregon.gov/business/documents/business-registry-forms/np-articles.pdf",
        "stateTaxExemptionNote": "Oregon does not have you apply: the Department of Revenue says if the IRS recognises you as exempt you are also exempt from Oregon corporation excise tax; if you file federal Form 990-T for unrelated business income you must file Oregon Form OR-20. Oregon has no sales or use tax, so there is no sales tax exemption, and the Department does not issue exemption certificates. 501(c)(3) corporations may request exemption from TriMet and Lane Transit District payroll taxes by sending the federal determination letter to the Department of Revenue.",
        "charitableSolicitationRegistration": {
          "agency": "Oregon Department of Justice, Charitable Activities Section",
          "url": "https://www.doj.state.or.us/charitable-activities/starting-or-closing-a-charity/registering-a-new-charity/",
          "feeNote": "Required for Oregon public benefit nonprofits and out-of-state charities that solicit or hold assets in Oregon (churches and certain mutual benefit nonprofits and schools are exempt). Annual report is due 4 months and 15 days after fiscal year end with a sliding-scale fee based on assets and revenue; dollar amounts were not on the pages fetched (call 971-673-1880)."
        }
      },
      "registeredAgentNote": "All Oregon business entities must appoint and maintain a registered agent with a physical street address in Oregon, who is either an Oregon-resident individual or a registered business entity authorised in Oregon (a business cannot be its own agent, and a PO box is not allowed).",
      "businessLicenseNote": "The Secretary of State's Oregon Business Xpress License Lookup helps find state, city and county licences, permits and registrations: https://apps.oregon.gov/sos/licensedirectory/",
      "stateTaxRegistration": {
        "agency": "Oregon Department of Revenue (payroll tax Business Identification Number via Revenue Online); unemployment insurance through the Oregon Employment Department",
        "url": "https://www.oregon.gov/dor/programs/businesses/pages/starting-payroll-taxes.aspx"
      },
      "smallBusinessHelp": {
        "name": "SBA Portland District Office (serves 30 Oregon counties)",
        "url": "https://legacy.sba.gov/district/portland"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "PA",
      "name": "Pennsylvania",
      "agency": "Pennsylvania Department of State, Bureau of Corporations and Charitable Organizations",
      "agencyUrl": "https://www.pa.gov/agencies/dos/programs/business",
      "onlineFilingUrl": "https://file.dos.pa.gov",
      "llc": {
        "formationDocument": "Certificate of Organization [DSCB:15-8821] with a Docketing Statement [DSCB:15-134A]",
        "filingFee": 125,
        "expeditedFeeNote": "Expedited fees are added to the filing fee: same-day $100 (filed before 10:00 a.m.), 3-hour $300 (before 2:00 p.m.), 1-hour $1,000 (before 4:00 p.m.). Standard processing: the Department says to allow 15 business days.",
        "annualReport": {
          "name": "Annual Report [DSCB:15-146]",
          "fee": 7,
          "due": "every year between January 1 and September 30 (LLCs); filed online at file.dos.pa.gov",
          "lateFeeNote": "No late fee is listed, but failure to file can lead to administrative dissolution (for reports due in 2027 and later, six months after the due date); reinstatement costs $35 online or $40 on paper plus $15 for each missing report."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": "None for a domestic LLC: 'No advertising is required when forming a domestic limited liability company.'",
        "source": "https://www.pa.gov/agencies/dos/programs/business/fees-and-payments"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation - For Profit [DSCB:15-1306 and related] with a Docketing Statement [DSCB:15-134A]",
        "filingFee": 125,
        "annualReport": {
          "name": "Annual Report [DSCB:15-146]",
          "fee": 7,
          "due": "every year between January 1 and June 30"
        },
        "source": "https://www.pa.gov/agencies/dos/programs/business/fees-and-payments"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation - Nonprofit [DSCB:15-5306/7102] with a Docketing Statement [DSCB:15-134A]",
        "filingFee": 125,
        "annualReport": {
          "name": "Annual Report [DSCB:15-146]",
          "fee": 0,
          "due": "every year between January 1 and June 30"
        },
        "source": "https://www.pa.gov/agencies/dos/programs/business/fees-and-payments",
        "stateTaxExemptionNote": "Sales tax: an 'institution of purely public charity' applies to the Department of Revenue for sales tax exemption, now online through myPATH (replacing the paper REV-72, per an October 2023 Revenue release); state law bars claiming the exemption before the Department approves it. Out-of-state exemption numbers are not recognised. Other state income-tax steps were not confirmed on an official page.",
        "charitableSolicitationRegistration": {
          "agency": "Pennsylvania Department of State, Bureau of Corporations and Charitable Organizations",
          "url": "https://www.pa.gov/services/dos/register-a-charity",
          "feeNote": "Required for organizations soliciting Pennsylvania residents unless excluded or exempt. Per the Bureau's BCO-10 instructions (rev. 1/2024), the annual registration fee is $15 for $25,000 or less in gross contributions, $100 for $25,001 to under $100,000, $150 for $100,000 to under $500,000, and $250 for $500,000 or more (the instruction chart's layout is jumbled, confirm on the current form); renewals are due by the 15th day of the 11th month after fiscal year end; late fee $25 per month. Online filing: https://www.charities.pa.gov/#/page/default"
        }
      },
      "registeredAgentNote": "Pennsylvania does not use registered agents; every entity must have a Pennsylvania registered office address where service of process is delivered (the Department of State FAQ).",
      "businessLicenseNote": "The PA Business One-Stop Shop guides new businesses through registration, taxes and licences, but it does not offer a single licence-lookup tool: https://business.pa.gov/",
      "stateTaxRegistration": {
        "agency": "Pennsylvania Department of Revenue (myPATH Pennsylvania Online Business Tax Registration; covers sales/use, employer withholding, and unemployment compensation with Labor & Industry)",
        "url": "https://www.pa.gov/services/revenue/register-my-business-for-taxes"
      },
      "smallBusinessHelp": {
        "name": "SBA Philadelphia District Office (40 eastern counties; the Pittsburgh District Office serves 27 western counties)",
        "url": "https://legacy.sba.gov/district/philadelphia"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "RI",
      "name": "Rhode Island",
      "agency": "Rhode Island Department of State, Business Services Division",
      "agencyUrl": "https://sos.ri.gov/divisions/business-services",
      "onlineFilingUrl": "https://business.sos.ri.gov/corp/loginsystem/login_form.asp",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 150,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": "LLC Annual Report (Form 632)",
          "fee": 50,
          "due": "Filing period is February 1 to May 1 each year.",
          "lateFeeNote": "$25 late penalty applied June 1; filing online adds a small online fee (the page shows $3.00 in the penalty note and $2.50 in a fee column, so the exact online add-on is unclear)."
        },
        "otherStateTaxNote": "The Secretary of State page says incorporated businesses must pay at least the $400 minimum corporate tax each tax year; whether this applies to a given LLC depends on how it is taxed and was not confirmed on an official page.",
        "publicationRequirement": null,
        "source": "https://sos.ri.gov/divisions/business-services/ri-business/start-your-rhode-island-business"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Business Corporation)",
        "filingFee": 230,
        "annualReport": {
          "name": "Business Corporation Annual Report (Form 630)",
          "fee": 50,
          "due": "Filing period is February 1 to May 1 each year; $25 late penalty applied June 1."
        },
        "source": "https://sos.ri.gov/divisions/business-services/ri-business/start-your-rhode-island-business"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (Non-Profit Corporation)",
        "filingFee": 35,
        "annualReport": {
          "name": "Non-Profit Corporation Annual Report (Form 631)",
          "fee": 20,
          "due": "Filing period is February 1 to May 1 each year; $25 late penalty applied June 1."
        },
        "source": "https://sos.ri.gov/divisions/business-services/non-profit/start-a-non-profit-corporation",
        "stateTaxExemptionNote": "Rhode Island sales tax law (R.I. Gen. Laws 44-18-30(5)) exempts sales to organizations operated exclusively for religious or charitable purposes, and the Division of Taxation sets the exemption certificate form. The specific Division of Taxation application or form for a federally recognised 501(c)(3) could not be confirmed because tax.ri.gov blocked access. The Secretary of State says nonprofits can apply for tax-exempt status with the IRS and/or the state, and that exemption is not automatic.",
        "charitableSolicitationRegistration": {
          "agency": "Rhode Island Department of Business Regulation (per R.I. Gen. Laws chapter 5-53.1)",
          "url": "https://webserver.rilegislature.gov/Statutes/TITLE5/5-53.1/5-53.1-2.htm",
          "feeNote": "Registration is required before soliciting; the statutory fee is $90, approval lasts one year, and renewal is due at least 30 days before expiry. Exempt from registering: charities that do not raise more than $25,000 in a fiscal year (with no professional fundraisers and no benefit to officers), plus churches and religious organizations, accredited educational institutions, hospitals, volunteer fire and rescue associations, and several other listed groups; a charity that passes $25,000 must register within 30 days."
        }
      },
      "registeredAgentNote": "The registered agent must be a Rhode Island resident or an entity qualified to do business in the state, with a Rhode Island street address where they are available during normal business hours; P.O. boxes and virtual business addresses are not allowed.",
      "businessLicenseNote": "The Secretary of State's RI Business Assistant builds a checklist of the licenses and registrations a business or nonprofit needs but does not register the business for you (https://sos.ri.gov/divisions/business-services/business-assistant).",
      "stateTaxRegistration": {
        "agency": "Rhode Island Division of Taxation (Taxpayer Portal)",
        "url": "https://taxportal.ri.gov/"
      },
      "smallBusinessHelp": {
        "name": "U.S. Small Business Administration - Rhode Island District Office",
        "url": "https://legacy.sba.gov/district/rhode-island"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "SC",
      "name": "South Carolina",
      "agency": "South Carolina Secretary of State, Business Filings",
      "agencyUrl": "https://sos.sc.gov/online-filings/business-entities",
      "onlineFilingUrl": "https://businessfilings.sc.gov/businessfiling",
      "llc": {
        "formationDocument": "Articles of Organization (Form F0006)",
        "filingFee": 110,
        "expeditedFeeNote": null,
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null,
          "lateFeeNote": null
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://businessfilings.sc.gov/BusinessFiling/Home/DownloadForms?pdfCategoryId=1&category=Starting+a+Business+in+South+Carolina"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Form F0001)",
        "filingFee": 135,
        "annualReport": {
          "name": "No Secretary of State annual report confirmed; the SC Department of Revenue says the annual corporate income tax return is filed with it (CL-1 is the initial registration form)",
          "fee": null,
          "due": "Corporate income tax return due by the 15th day of the fourth month after the tax year ends (S corporations and tax-exempt organizations are different)"
        },
        "source": "https://businessfilings.sc.gov/BusinessFiling/Entity/DownloadForm?formName=F0001&entityType=1&filingType=Articles+of+Incorporation"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation, nonprofit (Form F0014), with the 501(c)(3) Attachment (Form F0028, no fee)",
        "filingFee": 25,
        "annualReport": {
          "name": null,
          "fee": null,
          "due": null
        },
        "source": "https://businessfilings.sc.gov/BusinessFiling/Home/DownloadForms?pdfCategoryId=1&category=Starting+a+Business+in+South+Carolina",
        "stateTaxExemptionNote": "The SC Department of Revenue page for tax-exempt organizations only says that organizations filing a federal Form 990-T must file the SC990-T annually; it does not describe a separate state income-tax exemption application for a 501(c)(3). For sales tax, DOR says 'Certain nonprofit organizations in South Carolina are exempt from Sales & Use Tax' under Form ST-387 (applied for on MyDORWAY after a Sales & Use Tax account is set up, 45-day review), but that exemption covers only items the organization sells for charitable purposes, not items it buys for its own use. Forms ST-393 (festival concessions) and ST-396 (foodstuffs for certain nonprofits) also exist. Source: https://dor.sc.gov/sales-use-tax-index/sales-tax-exemptions and https://dor.sc.gov/business-income-taxes/tax-exempt-organizations",
        "charitableSolicitationRegistration": {
          "agency": "South Carolina Secretary of State, Public Charities Division",
          "url": "https://sos.sc.gov/online-filings/charities-pfrs-and-raffles/charities",
          "feeNote": "Required before any solicitation and renewed annually unless a statutory exemption applies (S.C. Code 33-56-20 / 33-56-50). The Secretary of State's Registration Statement form (revised December 2016) states a $50.00 filing fee; the web page itself does not state a fee. An annual financial report (SOS form or IRS Form 990/990-EZ/990-PF) is also filed."
        }
      },
      "registeredAgentNote": "The Secretary of State lists a missing registered agent name or South Carolina address as a reason filings are rejected: 'The name and/or address of the registered agent located in South Carolina must be included on the form.'",
      "businessLicenseNote": "South Carolina Business One Stop (SCBOS) is the state's online resource for licenses, permits, registrations and taxes, with a Business Wizard that identifies what a business may need: https://scbos.sc.gov",
      "stateTaxRegistration": {
        "agency": "South Carolina Department of Revenue (MyDORWAY Business Tax Application; retail license, withholding and other tax accounts)",
        "url": "https://dor.sc.gov/businesses/apply-business-tax-account"
      },
      "smallBusinessHelp": {
        "name": "South Carolina Small Business Development Centers (SC SBDC)",
        "url": "https://scsbdc.com"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "SD",
      "name": "South Dakota",
      "agency": "South Dakota Secretary of State, Division of Business Services",
      "agencyUrl": "https://sdsos.gov",
      "onlineFilingUrl": "https://sosenterprise.sd.gov/BusinessServices/Business/RegistrationInstr.aspx",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 150,
        "expeditedFeeNote": "Expedited service is $50 (completion sooner than the normal course of business upon request). Paper filing costs $165 (includes a $15 paper filing fee).",
        "annualReport": {
          "name": "Annual Report",
          "fee": 55,
          "due": "Every year on the 1st day of the anniversary month of the original filing; can be filed starting 2 months before the due date. Paper filing is $70.",
          "lateFeeNote": "Late fee $55 if not filed within 2 months after the due date (late fees begin the 1st of the second month after the due month, per the Secretary of State FAQ)."
        },
        "otherStateTaxNote": "South Dakota Department of Revenue: 'South Dakota does not impose a corporate income tax.' Sales and contractor's excise tax licenses are applied for separately with the Department of Revenue.",
        "publicationRequirement": null,
        "source": "https://sdsos.gov/general-information/filing-fees.aspx"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 150,
        "annualReport": {
          "name": "Annual Report",
          "fee": 55,
          "due": "Every year on the 1st day of the anniversary month of the original filing (paper filing $70; late fee $55)"
        },
        "source": "https://sdsos.gov/general-information/filing-fees.aspx"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (domestic nonprofit corporation)",
        "filingFee": 30,
        "annualReport": {
          "name": "Annual Report (domestic nonprofit)",
          "fee": 10,
          "due": "Every year on the 1st day of the anniversary month of the original filing; nonprofit corporations are exempt from the additional late fee but must still file"
        },
        "source": "https://sdsos.gov/general-information/filing-fees.aspx",
        "stateTaxExemptionNote": "South Dakota has no corporate income tax, so there is no state income-tax exemption to apply for. The Secretary of State states tax-exempt status is not determined by that office. For sales tax, only a 'relief agency' (501(c)(3) nonprofit devoting its resources to relief of the poor, distressed or underprivileged, with a physical location in South Dakota) can be approved by the Department of Revenue, using the online Sales Tax Exempt Status Application with the IRS 501(c)(3) determination letter, bylaws, articles and budget attached; renewal is every five years. Churches and other 501(c)(3)s that do not qualify as relief agencies pay sales tax on purchases. Sources: https://dor.sd.gov/businesses/taxes/sales-use-tax/ and https://dorresources.sd.gov/f/2027",
        "charitableSolicitationRegistration": {
          "agency": "South Dakota Attorney General, Division of Consumer Protection",
          "url": "https://consumer.sd.gov/fastfacts/charity.aspx",
          "feeNote": "Not required: 'South Dakota does not have licensing or registration requirements for non-profit or charitable organizations.' Paid telephone solicitors working for a charity must register and be bonded with the Attorney General's Division of Consumer Protection."
        }
      },
      "registeredAgentNote": "The Secretary of State FAQ says 'A registered agent MUST be a resident of South Dakota, with BOTH a physical and mailing address in South Dakota' (a noncommercial agent or a commercial registered agent; an office holder is not allowed for LLCs).",
      "businessLicenseNote": "South Dakota has no single statewide business license; the Department of Revenue's online Tax License Application covers sales, use, contractor's excise, manufacturer, wholesaler, motor fuel, alcohol and lottery licenses: https://dor.sd.gov/online-services/tax-license-application/",
      "stateTaxRegistration": {
        "agency": "South Dakota Department of Revenue (Tax License Application)",
        "url": "https://dor.sd.gov/online-services/tax-license-application/"
      },
      "smallBusinessHelp": {
        "name": "South Dakota Small Business Development Center (SDSBDC), University of South Dakota",
        "url": "https://www.usd.edu/sbdc"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "TN",
      "name": "Tennessee",
      "agency": "Tennessee Secretary of State, Division of Business and Charitable Organizations",
      "agencyUrl": "https://sos.tn.gov/businesses",
      "onlineFilingUrl": "https://tncab.tnsos.gov/",
      "llc": {
        "formationDocument": "Articles of Organization, Limited Liability Company (Form SS-4270)",
        "filingFee": 300,
        "expeditedFeeNote": "Not confirmed: no expedite fee appears on the official Business Forms & Fees page or the SS-4270 form/instructions.",
        "annualReport": {
          "name": "LLC Annual Report (filed online in TNCaB)",
          "fee": 300,
          "due": "On or before the first day of the fourth month after the close of the LLC's fiscal year (T.C.A. 48-249-1017); if no fiscal year end month is given, December is used, so April 1 for most LLCs",
          "lateFeeNote": "Official FAQ says an entity that fails to file on time may be administratively dissolved; reinstatement application (SS-9410) is $70 and needs tax clearance from the Dept of Revenue. A specific per-day or per-month late fee was not found on an official page. Annual report fee formula: $300 minimum up to a maximum of $3,000; the fee increases by $50 per member for every member over 6. An extra $20 applies if the annual report changes the registered agent or office."
        },
        "otherStateTaxNote": "Tennessee Dept of Revenue: LLCs formed, qualified or registered in Tennessee must register for and pay franchise and excise taxes. Franchise tax is 0.25% of Tennessee net worth (the overview page states a $100 minimum). Excise tax is 6.5% of Tennessee taxable income. Annual return is due the 15th day of the fourth month after the close of the books (April 15 for calendar-year filers); extension is seven months. Quarterly estimates are required if combined liability was $5,000 or more in both the prior and current year.",
        "publicationRequirement": null,
        "source": "https://sos.tn.gov/businesses/services/business-forms-fees"
      },
      "corporation": {
        "formationDocument": "Charter For-Profit Corporation (Form SS-4417)",
        "filingFee": 100,
        "annualReport": {
          "name": "Corporation Annual Report (filed online in TNCaB)",
          "fee": 20,
          "due": "On or before the first day of the fourth month after the close of the corporation's fiscal year (T.C.A. 48-26-203); December is used if no month is given, so April 1 for most"
        },
        "source": "https://sos.tn.gov/businesses/services/business-forms-fees"
      },
      "nonprofit": {
        "formationDocument": "Charter Nonprofit Corporation (Form SS-4418); a Nonprofit LLC (Form SS-4271, same fee formula as an LLC) is also available",
        "filingFee": 100,
        "annualReport": {
          "name": "Nonprofit Corporation Annual Report (filed online in TNCaB)",
          "fee": null,
          "due": "On or before the first day of the fourth month after the close of the corporation's fiscal year (T.C.A. 48-66-203)"
        },
        "source": "https://sos.tn.gov/businesses/services/business-forms-fees",
        "stateTaxExemptionNote": "Sales and use tax: the Tennessee Dept of Revenue says purchases by non-profit organizations are exempt, and applications for nonprofit exemptions can be submitted in TNTAP (Tennessee Taxpayer Access Point) without logging in, under View Exemption Links then Apply for Sales & Use Tax Exemption. Franchise and excise tax: the Dept of Revenue's list of 17 exempt entity types does not name 501(c)(3) nonprofits, so the state grant of franchise/excise exemption to a 501(c)(3) could not be confirmed on an official page; the organization should ask the Dept of Revenue.",
        "charitableSolicitationRegistration": {
          "agency": "Tennessee Secretary of State, Division of Charitable Solicitations and Gaming",
          "url": "https://sos.tn.gov/charities/faqs",
          "feeNote": "Registration is required before soliciting unless exempt by statute (for example religious institutions, educational institutions, hospitals). Initial registration fee is $50; organizations that received less than $50,000 in gross contributions from the public may qualify for a no-fee filing. Renewal is due by the last day of the 6th month after the end of the accounting year; for renewals dated on or after 7/1/2025 the fee is $0 for up to $50,000 gross revenue, $120 for $50,000.01 to $99,999.99, $160 for $100,000 to $249,999.99, $200 for $250,000 to $499,999.99, $240 for $500,000 and over; late fee $25 per month."
        }
      },
      "registeredAgentNote": "Tennessee's Secretary of State says all entities except general partnerships must maintain a registered agent and registered office in Tennessee at all times, and a P.O. box is not acceptable as the registered office address.",
      "businessLicenseNote": "The Secretary of State's Next Steps for a New Business page points new businesses to the Department of Revenue New Business Guide, Labor and Workforce Development, regulatory boards and Tennessee Smart Start; no single statewide general business license was confirmed. https://sos.tn.gov/businesses/guides/next-steps-for-a-new-business",
      "stateTaxRegistration": {
        "agency": "Tennessee Department of Revenue (TNTAP)",
        "url": "https://tntap.tn.gov/eservices/_/"
      },
      "smallBusinessHelp": {
        "name": "Tennessee Economic and Community Development - Business Enterprise Resource Office (BERO)",
        "url": "https://www.tn.gov/ecd/small-business/bero-home.html"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "TX",
      "name": "Texas",
      "agency": "Texas Secretary of State, Business Organizations (Corporations Section)",
      "agencyUrl": "https://www.sos.state.tx.us/corp/index.shtml",
      "onlineFilingUrl": "https://www.sos.state.tx.us/corp/sosda/index.shtml",
      "llc": {
        "formationDocument": "Certificate of Formation, Limited Liability Company (Form 205)",
        "filingFee": 300,
        "expeditedFeeNote": "Per the current Secretary of State fee schedule (Form 806, revised 09/26): Standard Expedite $50, Next Day Expedite $500, Same Day Expedite $750 per document, plus the filing fee. Credit card payments carry a convenience fee (sources conflict on the rate).",
        "annualReport": {
          "name": "Texas Franchise Tax Report with Public Information Report (filed with the Comptroller, not the Secretary of State)",
          "fee": null,
          "due": "May 15 each year (next business day if it falls on a weekend or holiday)",
          "lateFeeNote": "Comptroller FAQ: a $50 penalty is assessed on each required franchise tax report filed after the due date, even when no tax is due, in addition to other penalties; failure to file the Public Information Report can lead to forfeiture of the right to transact business. No filing fee for the PIR itself is stated on the Comptroller pages."
        },
        "otherStateTaxNote": "Texas Comptroller: franchise tax is a privilege tax on each taxable entity formed in Texas. For report years 2026 and 2027 the no tax due threshold is $2,650,000 of annualized total revenue; the rate is 0.375% for retail or wholesale and 0.75% for other entities; the EZ computation (0.331%) is available at $20 million or less of revenue. An entity at or below the threshold owes no tax but must still file a Public Information Report (Form 05-102) or Ownership Information Report (Form 05-167). The PIR is due on the annual franchise tax report due date.",
        "publicationRequirement": null,
        "source": "https://www.sos.state.tx.us/corp/instructions/205.shtml"
      },
      "corporation": {
        "formationDocument": "Certificate of Formation, For-Profit Corporation (Form 201)",
        "filingFee": 300,
        "annualReport": {
          "name": "Texas Franchise Tax Report with Public Information Report (filed with the Comptroller)",
          "fee": null,
          "due": "May 15 each year (next business day if it falls on a weekend or holiday)"
        },
        "source": "https://www.sos.state.tx.us/corp/instructions/201.shtml"
      },
      "nonprofit": {
        "formationDocument": "Certificate of Formation, Nonprofit Corporation (Form 202)",
        "filingFee": 25,
        "annualReport": {
          "name": "Nonprofit corporation periodic report (Form 802, Secretary of State)",
          "fee": 5,
          "due": "Only when the Secretary of State sends a notice, and not more than once every four years; late fee is the greater of $5 or $1 per month unfiled, capped at $25"
        },
        "source": "https://www.sos.state.tx.us/corp/instructions/202.shtml",
        "stateTaxExemptionNote": "Not automatic: the Texas Comptroller says a qualifying 501(c) must apply for state tax exemption, and until franchise tax exemption is granted the entity must file franchise tax reports and pay any tax due. A 501(c)(3) applies on Form AP-204 (Texas Application for Exemption - Federal and All Others) with a copy of its IRS determination letter (a current IRS verification letter if the letter is over four years old; the name must match the legal name), which covers both franchise tax and sales tax exemption. Other forms by category: AP-205 charitable organizations, AP-207 educational, AP-209 religious, AP-206 homeowners associations. No application fee is mentioned on the Comptroller pages. Federal status alone does not exempt from hotel occupancy tax.",
        "charitableSolicitationRegistration": {
          "agency": "Texas Attorney General, Charitable Trusts Section (and Texas Secretary of State for limited categories)",
          "url": "https://www.texasattorneygeneral.gov/divisions/charitable-trusts/registration-and-filings",
          "feeNote": "Not required for most charities: the Attorney General says most charities or nonprofit organizations are not required to register with the State. Registration is required only for certain law-enforcement-related telephone solicitors (LETSA, $50 fee, with the Attorney General), public safety organizations and their solicitors, and veterans organizations and their solicitors (with the Secretary of State)."
        }
      },
      "registeredAgentNote": "Texas Secretary of State: an LLC is required to maintain a registered agent and a registered office street address in Texas, the entity cannot act as its own registered agent, and a mailbox or telephone answering service does not qualify as the registered office.",
      "businessLicenseNote": "Texas does not require a general business license; a certificate of formation from the Secretary of State (or an assumed name certificate from the county clerk) serves that purpose, and the Governor's Business Permit Office and the Texas Business Licenses & Permits Guide cover activity-specific state permits. https://gov.texas.gov/business/page/business-permits-office",
      "stateTaxRegistration": {
        "agency": "Texas Comptroller of Public Accounts (sales tax permit via eSystems)",
        "url": "https://comptroller.texas.gov/taxes/permit/"
      },
      "smallBusinessHelp": {
        "name": "Texas Governor's Small Business Resource Portal",
        "url": "https://gov.texas.gov/business/page/small-business-portal"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "UT",
      "name": "Utah",
      "agency": "Utah Department of Commerce, Division of Corporations and Commercial Code",
      "agencyUrl": "https://commerce.utah.gov/corporations/",
      "onlineFilingUrl": "https://businessregistration.utah.gov/",
      "llc": {
        "formationDocument": "Certificate of Organization",
        "filingFee": 59,
        "expeditedFeeNote": "Expedited processing fee is $75 per filing (FY2026 fee schedule, effective July 1, 2025).",
        "annualReport": {
          "name": "Annual Report / Renewal",
          "fee": 18,
          "due": "Due one year from the date of registration and every year after that (the anniversary date); the online renewal window opens 60 days before the anniversary date.",
          "lateFeeNote": "The fee schedule lists a $10 late renewal fee. Missing the renewal can lead to delinquent and then expired status; reinstating an expired LLC costs $54 plus $18 for each missed year plus a $10 delinquency fee."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://commerce.utah.gov/wp-content/uploads/2023/04/currentfees.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 59,
        "annualReport": {
          "name": "Annual Report / Renewal",
          "fee": 18,
          "due": "Due one year from the date of registration and every year after that (the anniversary date); the online renewal window opens 60 days before the anniversary date."
        },
        "source": "https://commerce.utah.gov/wp-content/uploads/2023/04/currentfees.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 59,
        "annualReport": {
          "name": "Annual Report / Renewal (must include the most recent IRS Form 990, 990-EZ, 990-N or 990-PF)",
          "fee": 18,
          "due": "Due one year from the date of registration and every year after that (the anniversary date); the online renewal window opens 60 days before the anniversary date."
        },
        "source": "https://commerce.utah.gov/wp-content/uploads/2023/04/currentfees.pdf",
        "stateTaxExemptionNote": "Sales tax: a 501(c)(3) organization applies to the Utah State Tax Commission for a sales tax exemption number using Form TC-160 (religious or charitable institutions), online at tap.utah.gov or by mail, attaching its IRS determination letter. The exemption does not cover unrelated trade or business sales. Utah's own state income/franchise tax exemption process for nonprofits could not be confirmed on an official page.",
        "charitableSolicitationRegistration": {
          "agency": "Utah Division of Consumer Protection (charities do not register there); charities file annually with the Division of Corporations and Commercial Code",
          "url": "https://commerce.utah.gov/dcp/for-businesses/fundraisers/frequently-asked-questions/",
          "feeNote": "The Division of Consumer Protection FAQ says charities do not register with it and instead file annually with the Division of Corporations and Commercial Code; since January 1, 2025 nonprofits upload their most recent IRS Form 990-series filing (or an IRS determination letter dated within two years if they have not yet filed a 990) with that Division's renewal. No separate charity filing fee was found; the nonprofit renewal fee is $18. Only professional fundraisers and fundraising consultants register with Consumer Protection."
        }
      },
      "registeredAgentNote": null,
      "businessLicenseNote": "Utah's online Business Registration registers a new business with the State Tax Commission, Department of Commerce and Department of Workforce Services at once, and the owner then gets a business license from the city, town or county where the business operates (see https://businessregistration.utah.gov/ and https://startup.utah.gov/registration/).",
      "stateTaxRegistration": {
        "agency": "Utah State Tax Commission",
        "url": "https://tax.utah.gov/business/create-manage/"
      },
      "smallBusinessHelp": {
        "name": "Utah Governor's Office of Economic Opportunity - Startup State",
        "url": "https://startup.utah.gov/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "VT",
      "name": "Vermont",
      "agency": "Vermont Secretary of State, Business Services Division",
      "agencyUrl": "https://sos.vermont.gov/business-services/",
      "onlineFilingUrl": "https://bizfilings.vermont.gov/homepage",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 155,
        "expeditedFeeNote": "No expedite fee found on the official pages. The SOS says there is no extra fee for online filing.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 45,
          "due": "every year, within three months after the fiscal year end on record",
          "lateFeeNote": "No late fee stated; an LLC that loses good standing pays a $35 reinstatement fee."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.vermont.gov/business-services/fees-statutes"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 155,
        "annualReport": {
          "name": "Annual Report",
          "fee": 60,
          "due": "every year, within two and a half months after the fiscal year end on record"
        },
        "source": "https://sos.vermont.gov/business-services/fees-statutes"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 155,
        "annualReport": {
          "name": "Biennial Report",
          "fee": 35,
          "due": "every two years, between January 1 and April 1, starting the year after initial registration; the fee is $35 if an officer, director or employee was paid in the prior calendar year and $0 if no one was paid"
        },
        "source": "https://sos.vermont.gov/business-services/fees-statutes",
        "stateTaxExemptionNote": "Vermont Department of Taxes says a nonprofit with federal tax-exempt status is exempt from Vermont corporate and business income taxes (tax still due on unrelated business income); no separate income-tax exemption form is listed. Sales and use tax exemption is limited to nonprofits that meet specific Vermont criteria; the nonprofit registers with the Department of Taxes (myVTax, through the Secretary of State portal, or Form BR-400) and sends a copy of its IRS determination letter. The SOS notes that registering as a Vermont nonprofit does not itself confer federal tax-exempt status.",
        "charitableSolicitationRegistration": {
          "agency": "Vermont Attorney General's Office (paid fundraisers); Vermont Secretary of State (out-of-state charities)",
          "url": "https://ago.vermont.gov/attorney-generals-office-divisions-and-unit/charities-and-paid-fundraisers",
          "feeNote": "The official pages found describe registration for paid fundraisers and paid solicitors (annual registration with the Attorney General, notice of solicitation, $20,000 bond) and a Certificate of Authority from the Secretary of State for out-of-state charities. A general registration requirement or fee for an in-state charity raising money itself could not be confirmed; confirm with the Attorney General's Charities unit."
        }
      },
      "registeredAgentNote": "The Secretary of State's registered office and agent page says that if a new registered agent is not appointed in time the business will lose its good standing.",
      "businessLicenseNote": "The Vermont Business Portal is the state's one-stop starting point, with a new-business checklist and access to licenses, permits and tax filing tools: https://business.vermont.gov/",
      "stateTaxRegistration": {
        "agency": "Vermont Department of Taxes (myVTax); the Secretary of State online portal can also register with Taxes and the Department of Labor",
        "url": "https://tax.vermont.gov/business/register"
      },
      "smallBusinessHelp": {
        "name": "Vermont Small Business Development Center (VtSBDC)",
        "url": "https://www.vtsbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "VA",
      "name": "Virginia",
      "agency": "Virginia State Corporation Commission (SCC), Clerk's Office",
      "agencyUrl": "https://www.scc.virginia.gov/businesses/",
      "onlineFilingUrl": "https://cis.scc.virginia.gov/",
      "llc": {
        "formationDocument": "Articles of Organization (Form LLC1011)",
        "filingFee": 100,
        "expeditedFeeNote": "Online filings only (paper cannot be expedited): next business day $50 or $100, same business day $200; expedite fees are nonrefundable.",
        "annualReport": {
          "name": "Annual Registration Fee",
          "fee": 50,
          "due": "every year by the last day of the month the LLC was organized or registered",
          "lateFeeNote": "$25 penalty if paid late."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.scc.virginia.gov/businesses/forms-and-fees/virginia-limited-liability-companies/"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Virginia stock corporation, Form SCC619)",
        "filingFee": 75,
        "annualReport": {
          "name": "Annual Report (no fee) plus Annual Registration Fee based on authorized shares",
          "fee": 100,
          "due": "every year by the last day of the month the corporation was incorporated; annual registration fee runs from $100 (1-5,000 authorized shares) up to $1,700 (over 270,000 shares); late penalty is the greater of 10% of the fee or $10"
        },
        "source": "https://www.scc.virginia.gov/media/sccvirginiagov-home/business-home/start-a-new-business/business-types/cht_fee.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (Virginia nonstock corporation, Form SCC819)",
        "filingFee": 75,
        "annualReport": {
          "name": "Annual Report (no fee) plus Annual Registration Fee",
          "fee": 25,
          "due": "every year by the last day of the month the corporation was incorporated; the late penalty for a nonstock corporation is always $10"
        },
        "source": "https://www.scc.virginia.gov/businesses/forms-and-fees/virginia-nonstock-corporations/",
        "stateTaxExemptionNote": "Virginia Tax grants a retail sales and use tax exemption to nonprofits that are exempt from federal income tax under 501(c)(3), (4) or (19) and meet other requirements (for example administrative costs not over 40% of annual gross revenue). Apply online through Nonprofit Online or with Form NP-1 to the Virginia Department of Taxation, Nonprofit Exemption Unit. The page found does not state an application fee and does not address Virginia income tax.",
        "charitableSolicitationRegistration": {
          "agency": "Virginia Department of Agriculture and Consumer Services (VDACS), Office of Charitable and Regulatory Programs",
          "url": "https://www.vdacs.virginia.gov/food-charitable-solicitation.shtml",
          "feeNote": "Charities that solicit in Virginia must file an initial registration statement before soliciting unless exempt. Form 102 (charitable organization): $100 initial fee plus a variable annual fee based on financial information. Form 100 (exempt charitable/civic organization): $10."
        }
      },
      "registeredAgentNote": "The SCC says every authorized Virginia business must maintain a registered agent.",
      "businessLicenseNote": "Virginia Business One Stop (Department of Small Business and Supplier Diversity) says most small businesses need a combination of licenses and permits from federal and state agencies: https://bos.sbsd.virginia.gov/Home/NewToVirginia",
      "stateTaxRegistration": {
        "agency": "Virginia Department of Taxation (sales tax, employer withholding; Form R-1 by mail)",
        "url": "https://www.tax.virginia.gov/register-business-virginia"
      },
      "smallBusinessHelp": {
        "name": "Virginia Department of Small Business and Supplier Diversity (SBSD); the Virginia SBDC network is at https://www.virginiasbdc.org/",
        "url": "https://sbsd.virginia.gov/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "WA",
      "name": "Washington",
      "agency": "Washington Secretary of State, Corporations & Charities Division",
      "agencyUrl": "https://www.sos.wa.gov/corporations-charities",
      "onlineFilingUrl": "https://www.sos.wa.gov/corporations-charities/business-entities/online-filing-instructions/start-domestic-wa-limited-liability-company-llc-online",
      "llc": {
        "formationDocument": "Certificate of Formation",
        "filingFee": 180,
        "expeditedFeeNote": "Expedited service $100 per entity (generally within three working days); an additional $100 per entity if requested by mail; same-day service $150 per entity.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 70,
          "due": "every year by the last day of the month the LLC was formed (may be filed up to 180 days early)",
          "lateFeeNote": "Annual report with delinquency fee is $95 total; failure to file leads to delinquent status and possible administrative dissolution; reinstatement is $140 plus missed annual report fees."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://www.sos.wa.gov/corporations-charities/frequently-asked-questions-faqs/fee-schedules-priority-services"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 180,
        "annualReport": {
          "name": "Annual Report",
          "fee": 70,
          "due": "every year by the last day of the month the corporation was formed (may be filed up to 180 days early)"
        },
        "source": "https://www.sos.wa.gov/corporations-charities/frequently-asked-questions-faqs/fee-schedules-priority-services"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation, RCW 24.03A)",
        "filingFee": 80,
        "filingFeeReduced": 40,
        "annualReport": {
          "name": "Annual Report",
          "fee": 60,
          "feeReduced": 20,
          "due": "every year by the last day of the month the nonprofit was formed (up to 180 days early); the reduced $20 fee (and the reduced $40 filing fee) applies if the nonprofit certifies gross revenue under $500,000 in its most recent fiscal year"
        },
        "source": "https://www.sos.wa.gov/corporations-charities/business-entities/online-filing-instructions/start-domestic-wa-nonprofit-corporation-online",
        "stateTaxExemptionNote": "Washington Department of Revenue says state law does not give nonprofits a blanket sales or use tax exemption; qualifying nonprofits are exempt from B&O tax and sales tax collection on income from certain fundraising activities, and the page describes a free reseller permit for organizations that only fundraise. No separate state exemption application for 501(c)(3) status was found on the page. Income tax was not addressed on the page.",
        "charitableSolicitationRegistration": {
          "agency": "Washington Secretary of State, Charities Program",
          "url": "https://www.sos.wa.gov/corporations-charities/nonprofits-charities/charities",
          "feeNote": "Most charities that solicit contributions from the public must register annually. Initial registration $60, renewal $40, $50 late fee. Exemptions include groups raising under $50,000 a year from the public if all activity is done by unpaid volunteers, and churches."
        }
      },
      "registeredAgentNote": "The Secretary of State says a registered agent is required by law for both domestic entities and registered foreign entities operating in Washington State.",
      "businessLicenseNote": "Washington State Small Business Guidance (Governor's Office for Regulatory Innovation and Assistance) points to the Regulatory Handbook and a Business License Wizard for local, state and federal licenses and permits: https://www.business.wa.gov/",
      "stateTaxRegistration": {
        "agency": "Washington Department of Revenue, Business Licensing Service (My DOR)",
        "url": "https://dor.wa.gov/open-business/apply-business-license"
      },
      "smallBusinessHelp": {
        "name": "Washington State Small Business Guidance (Office for Regulatory Innovation and Assistance)",
        "url": "https://www.business.wa.gov/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "WV",
      "name": "West Virginia",
      "agency": "West Virginia Secretary of State, Business & Licensing Division",
      "agencyUrl": "https://sos.wv.gov/start-WV-business",
      "onlineFilingUrl": "https://business4.wv.gov/",
      "llc": {
        "formationDocument": "Articles of Organization (Form LLD-1)",
        "filingFee": 100,
        "expeditedFeeNote": "In addition to the filing fee: 24-hour $25, 2-hour $250, 1-hour $500. Online filings carry an extra $1.00 processing fee. The initial SOS registration fee is waived for veteran-owned businesses and for businesses owned by West Virginia-resident young entrepreneurs aged 18 to 29.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "every year between January 1 and June 30",
          "lateFeeNote": "$75 total if received after June 30 (includes a $50 late fee)."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://sos.wv.gov/register-new-wv-business"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (Form CD-1)",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "every year between January 1 and June 30 (the SOS annual report page names one $25 fee for registered organizations)"
        },
        "source": "https://sos.wv.gov/register-new-wv-business"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation, Form CD-1NP)",
        "filingFee": 25,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "every year between January 1 and June 30; the 2019 SOS fee schedule lists a $25 late fee for nonprofit organizations"
        },
        "source": "https://sos.wv.gov/register-new-wv-business",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": "West Virginia Secretary of State, Charitable Organizations Division",
          "url": "https://sos.wv.gov/business/charities/charitable-organizations",
          "feeNote": "The Division registers and regulates charitable organizations (Form CHR-1). Annual registration fee $15 for organizations collecting under $1 million per year and $50 for those collecting over $1 million; a $25 late fee applies for each month a registration or renewal is late. Exemptions exist but the exemptions document was not read."
        }
      },
      "registeredAgentNote": "The SOS annual report form asks for the name and address of the person (agent) to whom notice of legal process may be sent, if any; a statutory registered-agent requirement could not be confirmed on the pages fetched.",
      "businessLicenseNote": "The One Stop Business Portal (run by the Secretary of State) links to the Business Startup Wizard, tax registration and the state's occupational, professional and special licenses and permits: https://business4.wv.gov/",
      "stateTaxRegistration": {
        "agency": "West Virginia State Tax Department (business registration certificate, MyTaxes portal)",
        "url": "https://tax.wv.gov/Business/BusinessRegistration/Pages/BusinessRegistration.aspx"
      },
      "smallBusinessHelp": {
        "name": "West Virginia Small Business Development Center (WV SBDC)",
        "url": "https://wvsbdc.com/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "WI",
      "name": "Wisconsin",
      "agency": "Wisconsin Department of Financial Institutions (DFI), Division of Corporate & Consumer Services",
      "agencyUrl": "https://dfi.wi.gov/Pages/BusinessServices/BusinessEntities/FileOnline.aspx",
      "onlineFilingUrl": "https://apps.dfi.wi.gov/apps/corpformation/directions.aspx?type=12",
      "llc": {
        "formationDocument": "Articles of Organization (Form 502)",
        "filingFee": 130,
        "expeditedFeeNote": "$130 online or $170 on paper. Optional expedited service adds $100 (next business day); in-person within four hours $250, within one hour $500.",
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "once a year, during the calendar quarter in which the anniversary of registration falls (due March 31, June 30, September 30 or December 31); $25 online, $40 on paper (includes a $15 paper surcharge effective March 1, 2024)",
          "lateFeeNote": "No late fee amount stated; a late LLC becomes delinquent and cures it by filing the current report and paying back annual report fees; long delinquency risks administrative dissolution."
        },
        "otherStateTaxNote": null,
        "publicationRequirement": null,
        "source": "https://dfi.wi.gov/Pages/BusinessServices/BusinessEntities/Fees.aspx"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation (business corporation)",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "once a year, during the calendar quarter of the anniversary of incorporation (March 31, June 30, September 30 or December 31); $25 online, $40 on paper per the DFI fee table"
        },
        "source": "https://dfi.wi.gov/Pages/BusinessServices/BusinessEntities/Fees.aspx"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation, Nonstock Corporation (Form 102)",
        "filingFee": 35,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "once a year, during the calendar quarter of the anniversary of incorporation (March 31, June 30, September 30 or December 31); $25 online, $40 on paper"
        },
        "source": "https://dfi.wi.gov/Pages/BusinessServices/BusinessEntities/Fees.aspx",
        "stateTaxExemptionNote": "Wisconsin Department of Revenue: organizations with a 501(c)(3) IRS determination letter may make purchases exempt from sales and use tax. To get a Certificate of Exempt Status (CES) number, submit Form S-103 with a copy of the IRS determination letter. The page did not address Wisconsin income tax.",
        "charitableSolicitationRegistration": {
          "agency": "Wisconsin Department of Financial Institutions, Charitable Organizations",
          "url": "https://dfi.wi.gov/Pages/BusinessServices/CharitableProfessionalOrganizations/GeneralInformation.aspx",
          "feeNote": "A charity generally must register if it solicits contributions in Wisconsin. Fees: $15 new registration, $54 renewal, $25 late fee. An organization may be exempt if it does not raise or receive more than $25,000 in a fiscal year, has no paid employees and all functions are performed by unpaid volunteers; other exemptions exist (for example religious organizations exempt from filing IRS Form 990)."
        }
      },
      "registeredAgentNote": "DFI says each entity must designate a registered agent resident in Wisconsin to receive official communications on its behalf, and must keep the agent and registered office information current.",
      "businessLicenseNote": "The One Stop Business Portal (onestop.wi.gov) registers a new business with DFI, the Department of Revenue and the Department of Workforce Development in one guided process: https://onestop.wi.gov/",
      "stateTaxRegistration": {
        "agency": "Wisconsin Department of Revenue (Business Tax Registration; One Stop Business Registration also registers with Revenue and Workforce Development)",
        "url": "https://www.revenue.wi.gov/Pages/Businesses/New-Business-home.aspx"
      },
      "smallBusinessHelp": {
        "name": "Wisconsin Small Business Development Center Network (Universities of Wisconsin)",
        "url": "https://wisconsinsbdc.org/"
      },
      "checkedOn": "2026-10-10"
    },
    {
      "code": "WY",
      "name": "Wyoming",
      "agency": "Wyoming Secretary of State, Business Division",
      "agencyUrl": "https://sos.wyo.gov/Business/StartABusiness.aspx",
      "onlineFilingUrl": "https://wyobiz.wyo.gov",
      "llc": {
        "formationDocument": "Articles of Organization",
        "filingFee": 100,
        "expeditedFeeNote": "Expedited review is $700 (next business day) or $1,400 (same day) per document, but filings that can be completed online, including initial formations and annual reports, are not eligible; paper filings are processed in order received (2022 LLC instructions said up to 15 business days).",
        "annualReport": {
          "name": "Annual Report with license tax",
          "fee": 60,
          "due": "every year on the first day of the anniversary month of formation (may be filed up to 120 days early)",
          "lateFeeNote": "Delinquent on the second day of the month after the due date; administratively dissolved if not filed within 60 days; reinstatement for tax is $100."
        },
        "otherStateTaxNote": "The annual license tax is $60 or two-tenths of one mill on the dollar ($.0002) of assets located and employed in Wyoming, whichever is greater; entities with $300,000 or less in Wyoming assets pay $60. The $60 shown is the minimum.",
        "publicationRequirement": null,
        "source": "https://sos.wyo.gov/business/docs/businessfees.pdf"
      },
      "corporation": {
        "formationDocument": "Articles of Incorporation",
        "filingFee": 100,
        "annualReport": {
          "name": "Annual Report with license tax",
          "fee": 60,
          "due": "every year on the first day of the anniversary month of formation; license tax is the greater of $60 or $.0002 per dollar of Wyoming assets"
        },
        "source": "https://sos.wyo.gov/business/docs/businessfees.pdf"
      },
      "nonprofit": {
        "formationDocument": "Articles of Incorporation (nonprofit corporation)",
        "filingFee": 50,
        "annualReport": {
          "name": "Annual Report",
          "fee": 25,
          "due": "Not confirmed for nonprofits specifically; the SOS general rule for annual reports is the first day of the anniversary month of formation"
        },
        "source": "https://sos.wyo.gov/business/docs/businessfees.pdf",
        "stateTaxExemptionNote": null,
        "charitableSolicitationRegistration": {
          "agency": null,
          "url": null,
          "feeNote": "Could not confirm on an official Wyoming page whether a state charitable solicitation registration is required; the Secretary of State Start a Business page lists none. Not confirmed."
        }
      },
      "registeredAgentNote": "The Secretary of State says all business entities filed in Wyoming shall have and continuously maintain in the state a registered agent to accept service of process, with a physical Wyoming address (not a PO box), and failure to maintain one results in dissolution or revocation.",
      "businessLicenseNote": "The Wyoming Business Council says the Wyoming SBDC gives one-on-one guidance on licensing and permitting: https://wyomingbusiness.org/business/start/",
      "stateTaxRegistration": {
        "agency": "Wyoming Department of Revenue, Excise Tax Division (sales and use tax); unemployment insurance is with the Department of Workforce Services",
        "url": "https://excise-tax-div.wyo.gov/"
      },
      "smallBusinessHelp": {
        "name": "Wyoming Small Business Development Center Network",
        "url": "https://wyomingsbdc.org/"
      },
      "checkedOn": "2026-10-10"
    }
  ]
});
