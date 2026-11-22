"use strict";

// Every Koach Learn course to write, from the owner's list "Courses that I would like per category" (27 October 2026), cleaned up: names tidied, repeats merged, and a course the list gives to several categories
// written ONCE (in shared/) and added to each of those categories. Category names are the ones on the Koach Learn dashboard; "Agriculture (Africa)" is new and has to be added there first.
// bonus: listed under "Optional Bonus Modules / Advanced Topics".     A course file is scripts/koachlearn-courses/<folder>/<id>.js (shape: README.md).

const SHARED = {
  "intro-to-ai": { name: "Introduction to Artificial Intelligence", note: "the list's AI basics, AI fundamentals, Intro to AI, What is AI" },
  "microsoft-365-google-docs": { name: "Microsoft 365 and Google Docs Basics" },
  "crypto-and-blockchain": { name: "Understanding Cryptocurrency and Blockchain", note: "also the list's Blockchain Basics" },
  "intro-cybersecurity": { name: "Introduction to Cybersecurity", note: "also Cybersecurity Fundamentals" },
  "digital-literacy-basics": { name: "Digital Literacy Basics" },
  "internet-basics": { name: "Internet Basics" },
  "basic-computer-skills": { name: "Basic Computer Skills" },
  "email-online-communication": { name: "Email and Online Communication", note: "also Online communication tools" },
  "smartphone-tablet": { name: "Using a Smartphone and Tablet" },
  "social-media-apps": { name: "Social Media Apps and How to Use Them" },
  "online-shopping-banking": { name: "Online Shopping and Banking Safely" },
  "ride-and-food-apps": { name: "Ordering a Ride or Food with Apps (Uber, Lyft, DoorDash)" },
  "telemedicine-portal": { name: "Using a Telemedicine and Patient Portal" },
  "python-basics": { name: "Introduction to Programming with Python" },
  "ai-programming-python": { name: "AI Programming with Python for Beginners" },
  "intro-machine-learning": { name: "Introduction to Machine Learning" },
  "deep-learning-intro": { name: "Introduction to Deep Learning and Neural Networks" },
  "data-science-beginners": { name: "Introduction to Data Science and Data Analysis" },
  "cloud-computing-basics": { name: "Cloud Computing Basics" },
  "azure-fundamentals": { name: "Microsoft Azure Fundamentals" },
  "intro-iot": { name: "Introduction to the Internet of Things (IoT)" },
  "agile-project-management": { name: "Agile Project Management" },
  "robotics-and-automation": { name: "Introduction to Robotics, AI and Automation" },
  "ai-chatbots-no-code": { name: "Building AI-Powered Chatbots (No Programming Needed)" },
  "ai-digital-marketing": { name: "AI Digital Marketing" },
  "ai-in-business": { name: "AI in Business: Strategies and Applications", note: "also AI Foundations for Business, AI for Business Leaders" },
  "ai-integration-strategy": { name: "Strategies for Integrating AI into Your Organization", note: "also Digital Transformation with AI" },
  "ai-in-finance": { name: "AI in Finance" },
  "ai-customer-experience": { name: "AI for Customer Experience" },
  "ai-automation-workflows": { name: "AI Automation and Smart Workflows" },
  "ai-productivity-operations": { name: "AI for Productivity and Operations" },
  "online-safety-responsible-ai": { name: "Online Safety and Responsible AI Use", note: "also Digital Safety, Ethics and Responsible AI; AI and Ethics" },
  "ai-job-readiness": { name: "AI for Job Readiness and Career Development" },
  "ai-entrepreneurship-side-hustles": { name: "Entrepreneurship and Side Hustles with AI" },
  "ai-certifications": { name: "AI Certifications: Which to Get and How to Prepare", bonus: true },
  "ai-remote-work": { name: "Remote Work Skills with AI", bonus: true },
  "ai-customer-service-careers": { name: "AI for Customer Service Careers", bonus: true },
  "ai-skilled-trades-logistics": { name: "AI for Skilled Trades and Logistics", bonus: true },
  "ai-project-management": { name: "AI Project Management", bonus: true },
  "agentic-ai-automation": { name: "Agentic AI and Workflow Automation", bonus: true },
  "ai-entrepreneurship-pathways": { name: "AI Entrepreneurship Pathways", bonus: true },
  "ai-community-advocacy": { name: "AI for Community Advocacy", bonus: true },
  // added 28 Oct 2026 at the owner's request ("based the constant need to keep up with the world is there any courses that should add?"): life, people and career skills beyond AI
  "mental-health-stress": { name: "Mental Health and Stress Management" },
  "personal-finance-basics": { name: "Personal Finance Basics: Budgeting, Credit and Saving" },
  "communication-conflict": { name: "Communication and Conflict Resolution" },
  "emotional-intelligence": { name: "Emotional Intelligence" },
  "time-management-goals": { name: "Time Management and Goal Setting" },
  "critical-thinking-misinformation": { name: "Critical Thinking and Spotting Misinformation" },
  "resume-linkedin-interviews": { name: "Resumes, LinkedIn and Job Interviews" },
  "customer-service-excellence": { name: "Customer Service Excellence" },
  "public-speaking": { name: "Public Speaking and Presenting" },
  "workplace-rights-professionalism": { name: "Workplace Rights and Professionalism" },
  "health-literacy": { name: "Health Literacy: Understanding Your Health Care" },
  "skilled-trades-careers": { name: "Starting a Career in the Skilled Trades" },
  "bookkeeping-basics": { name: "Bookkeeping Basics" },
  "negotiation-skills": { name: "Negotiation Skills" },
  "excel-spreadsheets": { name: "Excel and Spreadsheets for Work" },
  // wave 1 (30 October 2026): job certifications that lead to work, and adult basic education (WAVE1-COURSES-BRIEF.md)
  "it-support-fundamentals": { name: "IT Support Fundamentals (CompTIA A+ Preparation)" },
  "cybersecurity-analyst-entry": { name: "Entry-Level Cybersecurity (CompTIA Security+ Preparation)" },
  "data-analytics-excel-sql": { name: "Data Analytics with Spreadsheets and SQL" },
  "data-dashboards": { name: "Building Data Dashboards (Power BI and Data Studio)" },
  "medical-billing-coding": { name: "Medical Billing and Coding Basics" },
  "pharmacy-technician-prep": { name: "Pharmacy Technician Preparation" },
  "nursing-assistant-cna-prep": { name: "Certified Nursing Assistant (CNA) Preparation" },
  "home-health-aide": { name: "Home Health Aide Skills" },
  "community-health-worker": { name: "Community Health Worker Foundations" },
  "phlebotomy-prep": { name: "Phlebotomy Technician Preparation" },
  "cdl-prep": { name: "Commercial Driver's License (CDL) Preparation" },
  "forklift-operator": { name: "Forklift Operator Basics" },
  "hvac-basics": { name: "HVAC Technician Basics" },
  "electrical-basics": { name: "Electrical Trade Basics" },
  "solar-installer-basics": { name: "Solar Panel Installer Basics" },
  "ev-technician-basics": { name: "Electric Vehicle (EV) Technician Basics" },
  "welding-basics": { name: "Welding Basics" },
  "warehouse-logistics": { name: "Warehouse and Logistics Careers" },
  "ged-math": { name: "GED Test Preparation: Math" },
  "ged-reasoning-language-arts": { name: "GED Test Preparation: Reasoning Through Language Arts" },
  "ged-science": { name: "GED Test Preparation: Science" },
  "ged-social-studies": { name: "GED Test Preparation: Social Studies" },
  "everyday-math": { name: "Everyday Math for Work and Life" },
  "esl-everyday-english": { name: "English for Everyday Life (ESL)" },
  "esl-workplace-english": { name: "English for the Workplace (ESL)" }
};

// wave 3 (30 October 2026): the rest of workforce development for youth and adults, in the US and abroad (WAVE3-COURSES-BRIEF.md)
Object.assign(SHARED, {
  "early-childhood-cda-prep": { name: "Early Childhood Education and CDA Credential Preparation" },
  "teacher-aide-paraprofessional": { name: "Teacher's Aide and Paraprofessional Preparation" },
  "carpentry-basics": { name: "Carpentry Basics" },
  "plumbing-basics": { name: "Plumbing Basics" },
  "construction-core-nccer": { name: "Construction Core Skills (NCCER Core Preparation)" },
  "manufacturing-technician": { name: "Manufacturing Technician Basics" },
  "cnc-machining-basics": { name: "CNC Machining Basics" },
  "quality-six-sigma-yellow-belt": { name: "Quality Basics (Six Sigma Yellow Belt Preparation)" },
  "hospitality-front-desk": { name: "Hotel and Hospitality Careers: Front Desk and Guest Service" },
  "retail-sales-cashier": { name: "Retail Sales and Cashier Skills" },
  "restaurant-careers": { name: "Restaurant Careers: Server, Cook and Kitchen Basics" },
  "security-officer-prep": { name: "Security Officer (Guard Card) Preparation" },
  "first-aid-cpr-awareness": { name: "First Aid and CPR Awareness" },
  "youth-first-job": { name: "Your First Job: Work Permits, Paychecks and What Bosses Expect" },
  "apprenticeships-job-programs": { name: "Finding Apprenticeships and Job Training Programs" },
  "usajobs-government-jobs": { name: "Applying for Government Jobs (USAJOBS)" },
  "typing-keyboarding": { name: "Typing and Keyboarding Skills" },
  "capm-project-management": { name: "Project Management Basics (CAPM Preparation)" },
  "real-estate-license-prep": { name: "Real Estate License Exam Preparation" },
  "insurance-license-prep": { name: "Insurance Agent License Exam Preparation" },
  "quickbooks-bookkeeping": { name: "QuickBooks Bookkeeping" },
  "canva-graphic-design": { name: "Graphic Design with Canva" },
  "video-editing-basics": { name: "Video Editing Basics" },
  "international-cv-writing": { name: "Writing a CV for Jobs Around the World" },
  "call-center-bpo-careers": { name: "Call Center and Outsourcing (BPO) Careers" },
  "data-annotation-online-work": { name: "AI Data Annotation and Online Micro-Jobs" },
  "tvet-choosing-a-program": { name: "Choosing a Vocational Training (TVET) Program" },
  "safe-labor-migration": { name: "Migrating for Work Safely" }
});
const WAVE3 = {
  "early-childhood-cda-prep": ["Workforce Development", "Youth", "Undeserved Community", "Re-Entry"],
  "teacher-aide-paraprofessional": ["Workforce Development", "Undeserved Community", "Leadership Development"],
  "carpentry-basics": ["Workforce Development", "Re-Entry", "Youth", "Veterans (military)"],
  "plumbing-basics": ["Workforce Development", "Re-Entry", "Youth", "Veterans (military)"],
  "construction-core-nccer": ["Workforce Development", "Re-Entry", "Youth", "Veterans (military)"],
  "manufacturing-technician": ["Workforce Development", "Re-Entry", "Veterans (military)", "Youth"],
  "cnc-machining-basics": ["Workforce Development", "Veterans (military)", "Youth"],
  "quality-six-sigma-yellow-belt": ["Workforce Development", "Small Business", "Veterans (military)"],
  "hospitality-front-desk": ["Workforce Development", "Re-Entry", "Youth", "Undeserved Community"],
  "retail-sales-cashier": ["Workforce Development", "Youth", "Re-Entry"],
  "restaurant-careers": ["Workforce Development", "Youth", "Re-Entry"],
  "security-officer-prep": ["Workforce Development", "Re-Entry", "Veterans (military)"],
  "first-aid-cpr-awareness": ["Workforce Development", "Youth", "Seniors and Technology", "Undeserved Community", "Non Profits"],
  "youth-first-job": ["Youth", "Workforce Development"],
  "apprenticeships-job-programs": ["Workforce Development", "Youth", "Re-Entry", "Veterans (military)", "Undeserved Community"],
  "usajobs-government-jobs": ["Workforce Development", "Veterans (military)", "Re-Entry"],
  "typing-keyboarding": ["Workforce Development", "Youth", "Seniors and Technology", "Undeserved Community"],
  "capm-project-management": ["Workforce Development", "Veterans (military)", "Leadership Development", "Small Business"],
  "real-estate-license-prep": ["Workforce Development", "Small Business", "Entrepreneurs"],
  "insurance-license-prep": ["Workforce Development", "Entrepreneurs"],
  "quickbooks-bookkeeping": ["Workforce Development", "Small Business", "Entrepreneurs", "Non Profits"],
  "canva-graphic-design": ["Workforce Development", "Youth", "Small Business", "Non Profits", "Entrepreneurs"],
  "video-editing-basics": ["Workforce Development", "Youth", "Athletes", "Entrepreneurs"],
  "international-cv-writing": ["Workforce Development", "Africa: Life and Work", "Undeserved Community"],
  "call-center-bpo-careers": ["Workforce Development", "Africa: Life and Work", "Undeserved Community"],
  "data-annotation-online-work": ["Workforce Development", "Africa: Life and Work", "Youth", "Undeserved Community"],
  "tvet-choosing-a-program": ["Africa: Life and Work", "Workforce Development", "Youth"],
  "safe-labor-migration": ["Africa: Life and Work", "Workforce Development", "Undeserved Community"]
};

// wave 1 placements: which categories each wave 1 course also goes in (added to each category's shared list below)
const WAVE1 = {
  "it-support-fundamentals": ["Workforce Development", "Youth", "Veterans (military)", "Undeserved Community", "Re-Entry"],
  "cybersecurity-analyst-entry": ["Workforce Development", "Youth", "Veterans (military)", "Undeserved Community"],
  "data-analytics-excel-sql": ["Workforce Development", "Youth", "Veterans (military)", "Undeserved Community"],
  "data-dashboards": ["Workforce Development", "Small Business", "Veterans (military)"],
  "medical-billing-coding": ["Workforce Development", "Re-Entry", "Undeserved Community", "Veterans (military)"],
  "pharmacy-technician-prep": ["Workforce Development", "Undeserved Community"],
  "nursing-assistant-cna-prep": ["Workforce Development", "Undeserved Community", "Youth"],
  "home-health-aide": ["Workforce Development", "Undeserved Community", "Re-Entry"],
  "community-health-worker": ["Workforce Development", "Undeserved Community", "Non Profits"],
  "phlebotomy-prep": ["Workforce Development", "Undeserved Community"],
  "cdl-prep": ["Workforce Development", "Re-Entry", "Veterans (military)"],
  "forklift-operator": ["Workforce Development", "Re-Entry"],
  "hvac-basics": ["Workforce Development", "Re-Entry", "Veterans (military)", "Youth"],
  "electrical-basics": ["Workforce Development", "Re-Entry", "Veterans (military)", "Youth"],
  "solar-installer-basics": ["Workforce Development", "Re-Entry", "Veterans (military)", "Youth"],
  "ev-technician-basics": ["Workforce Development", "Veterans (military)", "Youth"],
  "welding-basics": ["Workforce Development", "Re-Entry", "Youth"],
  "warehouse-logistics": ["Workforce Development", "Re-Entry", "Veterans (military)"],
  "ged-math": ["Workforce Development", "Re-Entry", "Undeserved Community", "Youth"],
  "ged-reasoning-language-arts": ["Workforce Development", "Re-Entry", "Undeserved Community", "Youth"],
  "ged-science": ["Workforce Development", "Re-Entry", "Undeserved Community", "Youth"],
  "ged-social-studies": ["Workforce Development", "Re-Entry", "Undeserved Community", "Youth"],
  "everyday-math": ["Workforce Development", "Re-Entry", "Undeserved Community"],
  "esl-everyday-english": ["Workforce Development", "Re-Entry", "Undeserved Community", "Seniors and Technology"],
  "esl-workplace-english": ["Workforce Development", "Re-Entry", "Undeserved Community"]
};

// per category: its own courses (written in that category's folder) and the shared ones it also gets
const CATEGORIES = {
  "Seniors and Technology": {
    folder: "seniors",
    own: {
      "seniors-ai-for-seniors": "AI for Seniors: Using AI Assistants",
      "seniors-ai-family-connection": "AI for Communication and Family Connection",
      "seniors-ai-daily-life": "AI for Daily Life",
      "seniors-ai-scam-awareness": "AI Safety and Scam Awareness for Seniors",
      "seniors-ai-learning-hobbies": "AI for Learning and Hobbies",
      "seniors-health-wellness-accessibility": "Health, Wellness and Accessibility with Technology",
      "seniors-ai-smart-homes": { name: "AI and Smart Homes", bonus: true },
      "seniors-ai-photography": { name: "AI for Photography", bonus: true },
      "seniors-ai-travel": { name: "AI Travel Companions", bonus: true },
      "seniors-ai-memory-support": { name: "AI for Memory Support", bonus: true },
      "seniors-ai-banking-safety": { name: "AI and Online Banking Safety", bonus: true },
      "seniors-medicare-basics": "Medicare Basics",
      "seniors-estate-planning-wills": "Estate Planning and Wills",
      "seniors-caregiving": "Caregiving: Caring for a Loved One"
    },
    shared: ["intro-to-ai", "basic-computer-skills", "microsoft-365-google-docs", "internet-basics", "email-online-communication", "social-media-apps", "smartphone-tablet", "online-shopping-banking", "ride-and-food-apps", "telemedicine-portal", "crypto-and-blockchain", "mental-health-stress", "personal-finance-basics", "critical-thinking-misinformation", "health-literacy"]
  },
  "Athletes": {
    folder: "athletes",
    own: {
      "athletes-intro-ai-sports": "Introduction to AI in Sports",
      "athletes-ai-tools": "AI Tools for Athletes",
      "athletes-ai-training-performance": "AI for Training and Performance",
      "athletes-nutrition-recovery-ai": "Nutrition and Recovery with AI",
      "athletes-mental-performance": "Mental Performance and Focus",
      "athletes-video-analysis": "Video Analysis and Game Intelligence",
      "athletes-ai-digital-marketing": "AI Digital Marketing Strategies for Athletes",
      "athletes-sports-management-marketing": "Sports Management Marketing",
      "athletes-social-media-branding": "Social Media Branding for Athletes",
      "athletes-seo-website-ai": "SEO and Building Your Website with AI",
      "athletes-content-creation": "Content Creation for Athletes",
      "athletes-influencer-marketing": "Influencer Marketing for Athletes",
      "athletes-ai-ecommerce": "AI E-commerce Platforms for Athletes",
      "athletes-brand-campaigns": "Educational Campaigns by Brands",
      "athletes-personal-branding-career": "Personal Branding and Athlete Career Development",
      "athletes-ai-entrepreneurship": "AI Entrepreneurship for Athletes",
      "athletes-ai-marketing-toolkit": "AI Toolkit for Marketing and Branding",
      "athletes-ai-team-sports": { name: "AI for Team Sports", bonus: true },
      "athletes-ai-scouting-recruiting": { name: "AI Scouting and Recruiting", bonus: true },
      "athletes-ai-biomechanics": { name: "AI Biomechanics", bonus: true },
      "athletes-sports-analytics": { name: "Sports Analytics Fundamentals", bonus: true },
      "athletes-ai-coaching-assistants": { name: "AI Coaching Assistants", bonus: true },
      "athletes-agentic-ai-performance": { name: "Agentic AI in Sports Performance", bonus: true }
    },
    shared: ["crypto-and-blockchain", "ai-integration-strategy", "mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "resume-linkedin-interviews", "public-speaking", "negotiation-skills"]
  },
  "Entrepreneurs": {
    folder: "entrepreneurs",
    own: {
      "entrepreneurs-intro-ai": "Introduction to AI for Entrepreneurs",
      "entrepreneurs-ai-tools": "AI Tools Every Entrepreneur Should Know",
      "entrepreneurs-ai-productivity": "AI for Business Productivity",
      "entrepreneurs-ai-marketing-content": "AI Marketing and Content Creation",
      "entrepreneurs-ai-products-services": "Building AI-Powered Products and Services",
      "entrepreneurs-ai-automation-agentic": "AI Automation and Agentic Workflows",
      "entrepreneurs-ai-sales-cx": "AI for Sales and Customer Experience",
      "entrepreneurs-ai-ethics-legal": "AI Ethics, Risks and Legal Considerations",
      "entrepreneurs-scaling-ai-business": "Scaling an AI-Powered Business",
      "entrepreneurs-capstone": "Capstone Project: Build Your AI Business Plan, Service, Automation, Marketing Strategy or Productivity System",
      "entrepreneurs-ai-saas": { name: "Building AI SaaS Products", bonus: true },
      "entrepreneurs-ai-consulting": { name: "Starting an AI Consulting Business", bonus: true },
      "entrepreneurs-agentic-ai-startups": { name: "Agentic AI for Startups", bonus: true },
      "entrepreneurs-ai-monetization": { name: "AI Monetization Strategies", bonus: true },
      "entrepreneurs-ai-ecommerce": { name: "AI-Powered eCommerce", bonus: true },
      "entrepreneurs-ai-creators": { name: "AI for Creators and Influencers", bonus: true }
    },
    shared: ["mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "public-speaking", "bookkeeping-basics", "negotiation-skills"]
  },
  "Re-Entry": {
    folder: "re-entry",
    own: {
      "reentry-ai-digital-confidence": "Introduction to AI and Digital Confidence",
      "reentry-everyday-ai-tools": "Everyday AI Tools",
      "reentry-workplace-skills": "Workplace Skills and Productivity",
      "reentry-financial-life-management": "Financial and Life Management with AI",
      "reentry-start-small-business": "How to Set Up and Start a Small Business",
      "reentry-clearing-record": "Clearing Your Record: Expungement and Record Relief",
      "reentry-housing-jobs": "Finding Housing and Second-Chance Jobs",
      "reentry-family-ties": "Rebuilding Family and Community Ties"
    },
    shared: ["ai-job-readiness", "online-safety-responsible-ai", "ai-entrepreneurship-side-hustles", "digital-literacy-basics", "internet-basics", "microsoft-365-google-docs", "email-online-communication", "social-media-apps", "smartphone-tablet", "online-shopping-banking", "ride-and-food-apps", "telemedicine-portal", "intro-to-ai", "crypto-and-blockchain", "ai-certifications", "ai-remote-work", "ai-customer-service-careers", "ai-skilled-trades-logistics", "ai-entrepreneurship-pathways", "mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "critical-thinking-misinformation", "resume-linkedin-interviews", "customer-service-excellence", "workplace-rights-professionalism", "health-literacy", "skilled-trades-careers"],
    extraOwn: { "reentry-ai-continuing-education": { name: "AI and Continuing Education", bonus: true } }
  },
  "Small Business": {
    folder: "small-business",
    own: {
      "smallbiz-intro-ai": "Introduction to AI for Small Business",
      "smallbiz-essential-ai-tools": "Essential AI Tools for Small Businesses",
      "smallbiz-ai-customer-service": "AI for Customer Service and Communication",
      "smallbiz-ai-sales-growth": "AI for Sales and Business Growth",
      "smallbiz-ai-business-strategy": "Building an AI Business Strategy and Integrations",
      "smallbiz-california-setup": "Setting Up a Small Business in California, Including Costs",
      "smallbiz-ai-marketing": "AI in Marketing for Small Business",
      "smallbiz-ai-retail": { name: "AI for Retail Businesses", bonus: true },
      "smallbiz-ai-restaurants": { name: "AI for Restaurants", bonus: true },
      "smallbiz-ai-service-business": { name: "AI for Service Businesses", bonus: true },
      "smallbiz-ai-real-estate": { name: "AI for Real Estate Agents", bonus: true },
      "smallbiz-ai-healthcare-practices": { name: "AI for Healthcare Practices", bonus: true },
      "smallbiz-ai-agents-automation": { name: "AI Agents for Business Automation", bonus: true },
      "smallbiz-government-contracts": "Winning Government Contracts",
      "smallbiz-supply-chain": "Supply Chain and Inventory Basics"
    },
    shared: ["ai-productivity-operations", "ai-automation-workflows", "microsoft-365-google-docs", "ai-in-business", "ai-in-finance", "ai-customer-experience", "ai-chatbots-no-code", "ai-integration-strategy", "crypto-and-blockchain", "mental-health-stress", "communication-conflict", "time-management-goals", "customer-service-excellence", "bookkeeping-basics", "negotiation-skills", "excel-spreadsheets"]
  },
  "Non Profits": {
    folder: "non-profits",
    own: {
      "nonprofit-intro-ai": "Introduction to AI for Nonprofits",
      "nonprofit-ai-strategy": "Building an AI Strategy for Your Nonprofit",
      "nonprofit-essential-ai-tools": "Essential AI Tools for Nonprofits and How to Use Them",
      "nonprofit-ai-fundraising-grants": "AI for Fundraising and Grant Writing",
      "nonprofit-california-setup": "Setting Up a Nonprofit in California, Including Costs",
      "nonprofit-ai-marketing-outreach": "AI for Marketing and Community Outreach",
      "nonprofit-ai-program-impact": "AI for Program Delivery and Impact",
      "nonprofit-ai-faith-based": { name: "AI for Faith-Based Organizations", bonus: true },
      "nonprofit-ai-donor-analytics": { name: "AI Donor Analytics", bonus: true },
      "nonprofit-ai-volunteer-recruitment": { name: "AI Volunteer Recruitment", bonus: true },
      "nonprofit-ai-impact-storytelling": { name: "AI for Social Impact Storytelling", bonus: true },
      "nonprofit-agentic-ai-operations": { name: "Agentic AI for Nonprofit Operations", bonus: true },
      "nonprofit-board-governance": "Nonprofit Board Governance",
      "nonprofit-volunteer-management": "Volunteer Management"
    },
    shared: ["microsoft-365-google-docs", "intro-to-ai", "ai-productivity-operations", "ai-automation-workflows", "ai-in-business", "ai-in-finance", "ai-customer-experience", "ai-chatbots-no-code", "ai-integration-strategy", "crypto-and-blockchain", "ai-community-advocacy", "mental-health-stress", "communication-conflict", "emotional-intelligence", "critical-thinking-misinformation", "public-speaking", "bookkeeping-basics", "excel-spreadsheets"]
  },
  "Youth": {
    folder: "youth",
    own: {
      "youth-what-is-ai": "What Is AI? (for Young People)",
      "youth-ai-creativity-learning": "AI Tools for Creativity and Learning",
      "youth-ai-school-success": "AI for School Success",
      "youth-ai-career-exploration": "AI and Career Exploration",
      "youth-leadership-confidence": "Leadership, Confidence and Problem Solving",
      "youth-ai-side-hustles": "AI for Entrepreneurship and Side Hustles (Youth)",
      "youth-coding-with-ai": { name: "Intro to Coding with AI", bonus: true },
      "youth-ai-gaming-esports": { name: "AI for Gaming and Esports", bonus: true },
      "youth-ai-music": { name: "AI Music Production", bonus: true },
      "youth-ai-video": { name: "AI Video Creation", bonus: true },
      "youth-ai-activism": { name: "AI for Activism and Social Impact", bonus: true },
      "youth-simple-chatbots": { name: "Building Simple AI Chatbots", bonus: true },
      "youth-digital-wellbeing": "Digital Wellbeing and Healthy Screen Time",
      "youth-cyberbullying-safety": "Staying Safe from Cyberbullying",
      "youth-college-or-trade": "Choosing College, a Trade or Work After School"
    },
    shared: ["intro-to-ai", "microsoft-365-google-docs", "ai-programming-python", "online-safety-responsible-ai", "intro-machine-learning", "ai-in-business", "data-science-beginners", "intro-cybersecurity", "crypto-and-blockchain", "ai-chatbots-no-code", "robotics-and-automation", "cloud-computing-basics", "python-basics", "mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "critical-thinking-misinformation", "resume-linkedin-interviews", "customer-service-excellence", "public-speaking", "workplace-rights-professionalism", "health-literacy", "skilled-trades-careers"]
  },
  "Veterans (military)": {
    folder: "veterans",
    own: {
      "veterans-ai-future-workforce": "Introduction to AI and the Future Workforce",
      "veterans-ai-careers-opportunities": "Future Careers and AI Opportunities",
      "veterans-ai-financial-personal": "AI for Financial and Personal Success",
      "veterans-ai-productivity-leadership": "AI for Productivity and Leadership",
      "veterans-ai-career-transition": "AI for Career Transition and Employment",
      "veterans-emerging-economies": "Entrepreneurship in Emerging Economies",
      "veterans-ai-fintech": "AI Financial Technology",
      "veterans-ai-certifications": { name: "AI Certifications for Veterans", bonus: true },
      "veterans-ai-cybersecurity-careers": { name: "AI and Cybersecurity Careers", bonus: true },
      "veterans-ai-logistics": { name: "AI for Logistics and Operations", bonus: true },
      "veterans-ai-consulting": { name: "AI Consulting Opportunities", bonus: true },
      "veterans-va-benefits-gi-bill": "VA Benefits and the GI Bill",
      "veterans-military-to-civilian": "From Military to Civilian Life"
    },
    shared: ["intro-cybersecurity", "online-safety-responsible-ai", "microsoft-365-google-docs", "intro-machine-learning", "deep-learning-intro", "crypto-and-blockchain", "ai-digital-marketing", "ai-in-business", "robotics-and-automation", "cloud-computing-basics", "intro-iot", "agile-project-management", "python-basics", "ai-programming-python", "ai-project-management", "agentic-ai-automation", "mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "resume-linkedin-interviews", "public-speaking", "workplace-rights-professionalism", "health-literacy", "skilled-trades-careers", "excel-spreadsheets"]
  },
  "Workforce Development": {
    folder: "workforce",
    own: {
      "workforce-ai-new-workforce": "AI in the New Workforce",
      "workforce-essential-ai-tools": "Essential AI Tools for the Workplace",
      "workforce-communication-productivity": "Workplace Communication and Productivity",
      "workforce-ai-problem-solving": "AI for Problem Solving and Decision Making",
      "workforce-data-science-certificate": "Data Science Professional Certificate Preparation",
      "workforce-osha-safety": "Workplace Safety Basics (OSHA)",
      "workforce-food-handler": "Food Handler and ServSafe Exam Preparation"
    },
    shared: ["online-safety-responsible-ai", "ai-job-readiness", "email-online-communication", "microsoft-365-google-docs", "intro-to-ai", "intro-machine-learning", "ai-automation-workflows", "ai-programming-python", "data-science-beginners", "python-basics", "cloud-computing-basics", "intro-cybersecurity", "ai-digital-marketing", "crypto-and-blockchain", "intro-iot", "ai-in-business", "agile-project-management", "ai-certifications", "ai-remote-work", "ai-project-management", "ai-customer-service-careers", "agentic-ai-automation", "ai-skilled-trades-logistics", "mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "critical-thinking-misinformation", "resume-linkedin-interviews", "customer-service-excellence", "public-speaking", "workplace-rights-professionalism", "health-literacy", "skilled-trades-careers", "negotiation-skills", "excel-spreadsheets"]
  },
  "Undeserved Community": {
    folder: "underserved",
    own: {
      "underserved-ai-digital-empowerment": "Introduction to AI and Digital Empowerment",
      "underserved-beginner-ai-tools": "Beginner-Friendly AI Tools",
      "underserved-ai-education": "AI for Education and Learning",
      "underserved-ai-community-daily-life": "AI for Community and Daily Life",
      "underserved-ai-employment": "AI for Employment and Workforce Readiness",
      "underserved-ai-small-business": "AI for Entrepreneurship and Small Business",
      "underserved-leadership-future-skills": "Leadership, Confidence and Future Skills",
      "underserved-ai-future-opportunities": "AI and Future Opportunities",
      "underserved-data-analytics-tools": "Introduction to Data Analytics Tools and Techniques",
      "underserved-ai-web-development": "AI Web Development",
      "underserved-tech-skills-beginners": "Technology Skills for Beginners",
      "underserved-ai-financial-literacy": { name: "AI for Financial Literacy", bonus: true },
      "underserved-ai-nonprofit-leadership": { name: "AI for Nonprofit Leadership", bonus: true },
      "underserved-ai-youth-mentoring": { name: "AI for Youth Mentoring", bonus: true }
    },
    shared: ["online-safety-responsible-ai", "email-online-communication", "digital-literacy-basics", "microsoft-365-google-docs", "cloud-computing-basics", "data-science-beginners", "azure-fundamentals", "intro-to-ai", "intro-machine-learning", "ai-digital-marketing", "crypto-and-blockchain", "ai-remote-work", "ai-community-advocacy", "ai-entrepreneurship-pathways", "mental-health-stress", "personal-finance-basics", "communication-conflict", "emotional-intelligence", "time-management-goals", "critical-thinking-misinformation", "resume-linkedin-interviews", "customer-service-excellence", "public-speaking", "workplace-rights-professionalism", "health-literacy", "skilled-trades-careers", "excel-spreadsheets"]
  },
  "Agriculture (Africa)": {
    folder: "agriculture-africa",
    newCategory: true,
    own: {
      "agri-climate-smart": "Climate-Smart Agriculture",
      "agri-agribusiness-farm-management": "Agribusiness and Farm Management",
      "agri-crop-horticulture": "Sustainable Crop and Horticultural Production",
      "agri-data-technology": "Agricultural Data and Technology",
      "agri-drones-regulations": "Agricultural Drones in Africa: Aviation Regulations and Licensing",
      "agri-drones-uas-technology": "Agricultural Drones: UAS Technology and Maintenance",
      "agri-drones-mission-planning": "Agricultural Drones: Mission Planning and Flight Operations",
      "agri-drones-data-precision": "Agricultural Drones: Data Analytics and Precision Agriculture",
      "agri-drones-intro": "Drones for Agricultural Monitoring 1: Introduction, Regulations and Safety",
      "agri-drones-flight-imaging": "Drones for Agricultural Monitoring 2: Flight Operations, Imaging and Sensors",
      "agri-drones-crop-health": "Drones for Agricultural Monitoring 3: Crop Health, Pests and Data Processing",
      "agri-drones-precision-climate": "Drones for Agricultural Monitoring 4: Precision, Climate and Livestock Monitoring",
      "agri-drones-programs": "Drones for Agricultural Monitoring 5: Data Integration, GIS and Designing Programs",
      "agri-drones-piloting": "Drones for Agricultural Monitoring 6: Online Drone Piloting Course",
      "agri-soil-health": "Soil Health and Fertility",
      "agri-irrigation-water": "Irrigation and Water Management",
      "agri-post-harvest": "Post-Harvest Handling and Storage",
      "agri-cooperatives-markets": "Farmer Cooperatives and Getting to Market",
      "agri-livestock-health": "Livestock Health and Management",
      // added 29 Oct 2026 at the owner's request ("can you add learning for farmers in africa that include these classes and beyond"); written in the ADDIE format
      "agri-farm-accounting-investment": "Farm Accounting and Investment Management",
      "agri-risk-management": "Agricultural Risk Management: Prices, Weather and Insurance",
      "agri-value-addition-marketing": "Value Addition, Packaging and Agri-Marketing",
      "agri-export-gap-certification": "Selling to Supermarkets, Processors and Export Buyers: Standards and Certification",
      "agri-farm-finance": "Financing Your Farm: Loans, Grants and Investors",
      "agri-climate-resilient-agribusiness": "Climate-Resilient Agribusiness",
      "agri-agroecology-regeneration": "Agroecology and Soil Regeneration",
      "agri-ipm-pest-control": "Integrated Pest Management and Organic Pest Control",
      "agri-conservation-agriculture": "Conservation Agriculture for Dry Seasons",
      "agri-staple-crop-husbandry": "Modern Crop Husbandry: Maize, Rice, Cassava and Legumes",
      "agri-protected-farming": "Greenhouse and Protected Farming for High-Value Crops",
      "agri-animal-breeding-biosecurity": "Animal Husbandry, Breeding and Farm Biosecurity",
      "agri-livestock-nutrition": "Livestock Nutrition and Feed Formulation with Local Ingredients",
      "agri-poultry-production": "Commercial Poultry Production",
      "agri-dairy-farming": "Dairy Farming: Milk Production and Hygiene",
      "agri-fish-farming": "Fish Farming (Aquaculture) Basics",
      "agri-digital-farm-management": "Data-Driven Farm Management with Mobile Apps",
      "agri-precision-agriculture": "Precision Agriculture: Satellite Monitoring and Soil Sensors",
      "agri-mechanization": "Farm Machinery and Mechanization Services",
      "agri-community-mobilization": "Community Mobilization: Pooling Machinery and Bargaining for Inputs",
      "agri-extension-farmer-trainer": "Becoming a Farmer Trainer: Agricultural Extension and Farmer Business Advisors"
    },
    shared: ["mental-health-stress", "personal-finance-basics", "bookkeeping-basics"]
  },
  "Artificial Intelligence": {
    folder: "artificial-intelligence",
    own: {
      "agentic-intro": "Introduction to Agentic AI: Building Autonomous AI Systems",
      "agentic-llms-prompting": "Understanding LLMs and Prompt Engineering",
      "agentic-building-agents": "Building AI Agents",
      "agentic-tools-automation": "AI Agent Tool Use and Automation",
      "agentic-multi-agent": "Multi-Agent Systems",
      "agentic-deploy-capstone": "Deploying AI Agents: Final Project and Capstone"
    },
    shared: ["intro-to-ai", "critical-thinking-misinformation"]
  },
  "Leadership Development": {
    folder: "leadership",
    own: {
      "lead-agentic-understanding-ai": "Leadership in the Age of Agentic AI 1: Understanding AI",
      "lead-agentic-modern-leaders": "Leadership in the Age of Agentic AI 2: AI for Modern Leaders and AI Tools for Leaders",
      "lead-agentic-transformation": "Leadership in the Age of Agentic AI 3: Agentic AI, Automation and Leading Transformation",
      "edu-intro-ai-education": "AI for School and Educational Leaders 1: Introduction to AI in Education",
      "edu-ai-tools-educators": "AI for School and Educational Leaders 2: AI Tools for Educators",
      "edu-ai-lesson-planning": "AI for School and Educational Leaders 3: AI for Lesson Planning",
      "edu-ai-assessment-feedback": "AI for School and Educational Leaders 4: AI for Assessment and Feedback",
      "edu-student-ai-literacy": "AI for School and Educational Leaders 5: Student Learning and AI Literacy",
      "edu-productivity-automation": "AI for School and Educational Leaders 6: Productivity and Workflow Automation",
      "edu-ethics-safety": "AI for School and Educational Leaders 7: Ethics, Safety and Responsible AI",
      "edu-capstone": "AI for School and Educational Leaders 8: Final Project and Capstone",
      "edu-ai-special-education": { name: "AI for Special Education", bonus: true },
      "edu-ai-multilingual": { name: "AI for Multilingual Learners", bonus: true },
      "edu-ai-differentiation": { name: "AI-Powered Differentiation", bonus: true },
      "edu-ai-stem": { name: "AI in STEM Education", bonus: true },
      "edu-ai-pbl": { name: "AI and Project-Based Learning", bonus: true },
      "edu-ai-classroom-assistants": { name: "Building AI Classroom Assistants", bonus: true },
      "lead-managing-teams": "Managing Teams",
      "lead-change-management": "Leading Change",
      "lead-inclusive-teams": "Leading Inclusive Teams",
      "lead-coaching-mentoring": "Coaching and Mentoring"
    },
    shared: ["mental-health-stress", "communication-conflict", "emotional-intelligence", "time-management-goals", "critical-thinking-misinformation", "public-speaking", "negotiation-skills"]
  }
};

for (const [id, cats] of Object.entries(WAVE1)) for (const cat of cats) {
  if (!CATEGORIES[cat]) throw new Error(`catalog: wave 1 course ${id} names unknown category ${cat}`);
  CATEGORIES[cat].shared.push(id);
}

// wave 2 (30 October 2026): everyday life and income across Africa, beyond farming (AFRICA-LIFE-BRIEF.md). A new dashboard category.
CATEGORIES["Africa: Life and Work"] = {
  folder: "africa-life",
  own: {
    "afr-mobile-money-safety": "Using Mobile Money Safely (M-Pesa, MTN MoMo, Orange Money, Wave)",
    "afr-savings-groups-microfinance": "Savings Groups and Microfinance (Chamas, VSLAs, Tontines, Esusu)",
    "afr-online-freelancing": "Online Freelancing and Remote Work from Africa",
    "afr-selling-online": "Selling Online in Africa (WhatsApp Business, Marketplaces and Social Media)",
    "afr-register-small-business": "Registering and Running a Small Business in Africa",
    "afr-women-entrepreneurs": "Women Entrepreneurs: Starting and Growing a Business",
    "afr-afcfta-cross-border-trade": "Selling Across Borders: Small Traders and the AfCFTA",
    "afr-phone-repair-business": "Starting a Phone Repair Business",
    "afr-solar-home-systems": "Solar Home Systems: Installing, Selling and Off-Grid Energy Businesses",
    "afr-tailoring-fashion-business": "Running a Tailoring and Fashion Business",
    "afr-clean-water-hygiene": "Clean Water, Sanitation and Hygiene at Home",
    "afr-malaria-prevention": "Preventing Malaria in Your Family",
    "afr-mother-child-health": "Mother and Child Health: Pregnancy, Birth and the First Years",
    "afr-nutrition-local-foods": "Good Nutrition on a Budget with Local Foods",
    "afr-clean-cooking": "Clean Cooking: Safer Stoves and Smoke-Free Kitchens"
  },
  shared: []
};

for (const [id, cats] of Object.entries(WAVE3)) for (const cat of cats) {
  if (!CATEGORIES[cat]) throw new Error(`catalog: wave 3 course ${id} names unknown category ${cat}`);
  CATEGORIES[cat].shared.push(id);
}

// every course to write, once: { id, name, folder, bonus, categories: [names it goes in] }
function allCourses() {
  const out = new Map();
  for (const [id, s] of Object.entries(SHARED)) out.set(id, { id, name: s.name, folder: "shared", bonus: !!s.bonus, note: s.note || null, categories: [] });
  for (const [cat, c] of Object.entries(CATEGORIES)) {
    for (const [id, v] of Object.entries({ ...c.own, ...(c.extraOwn || {}) })) {
      const name = typeof v === "string" ? v : v.name;
      out.set(id, { id, name, folder: c.folder, bonus: typeof v === "object" && !!v.bonus, note: null, categories: [cat] });
    }
    for (const id of c.shared) {
      if (!out.has(id)) throw new Error(`catalog: ${cat} lists unknown shared course ${id}`);
      out.get(id).categories.push(cat);
    }
  }
  return [...out.values()];
}

module.exports = { SHARED, CATEGORIES, allCourses };

if (require.main === module) {
  const all = allCourses();
  const fs = require("fs"), path = require("path");
  const done = c => fs.existsSync(path.join(__dirname, c.folder, `${c.id}.js`));
  for (const c of all) console.log(`${done(c) ? "x" : " "} ${c.folder.padEnd(24)} ${c.id.padEnd(40)} ${c.bonus ? "(bonus) " : ""}${c.name}  [${c.categories.join(", ")}]`);
  console.log(`${all.filter(done).length} of ${all.length} written; ${all.filter(c => c.bonus).length} are bonus; ${all.filter(c => !c.categories.length).length} in no category`);
}
