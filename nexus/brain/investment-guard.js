"use strict";

// Kyro explains how money, saving, investing and digital currency work, and what the risks are. It does not give investment advice: it never says what to buy, sell, hold or trade, which coin, share or
// fund will go up, which exchange, broker or app to use, or what a price will do, and it never promises a return. Many of the people it serves (young people, seniors, people rebuilding after hard
// times, farmers and small traders) are the ones scammers and bad advice reach first, and most people who trade lose money. These are the plain requests; the AI prompts carry the same rule
// (nexus/brain/crisis-rule.js) for everything else. The wording must be reviewed by a licensed financial educator and a lawyer in each country before it is relied on.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim().toLowerCase();

// Things people trade or invest in, said plainly. Farm produce, animals, tools and everyday goods are NOT here: "should I sell my maize now" is a farm question and is answered as one.
const ASSET = /\b(?:bitcoin|btc|ethereum|ether|eth|crypto(?:currency|currencies|s)?|altcoins?|coins?|tokens?|dogecoin|doge|shiba|solana|xrp|usdt|tether|usdc|stablecoins?|nfts?|binance|coinbase|bybit|kucoin|luno|yellow card|forex|fx|currency pairs?|stocks|stock market|stock exchange|shares|share price|equit(?:y|ies)|etfs?|mutual funds?|unit trusts?|money market funds?|bonds?|t-?bills?|treasury (?:bills?|bonds?)|commodit(?:y|ies) trading|futures|options trading|cfds?|day ?trading|swing ?trading|trading)\b/;
// A SACCO or chama share is a share of a group the person belongs to; the plain "should I buy more" question about it is still advice, but "share the harvest" is not an asset at all.
const NOT_AN_ASSET_USE = /\b(?:share (?:the|my|our|your) (?:harvest|food|crops?|land|work|news|link|photo|location|house|room)|shares? (?:the|a) (?:harvest|meal|room)|options? (?:for|to)|trade (?:union|school|fair|show)|trades? ?(?:man|men|person|people)|skilled trades?|trade (?:my|the|our) (?:goat|cow|maize|beans|crop|produce|animal))\b/;

// "Should I buy / sell / invest in ...", "what should I buy", "which coin should I invest in", "tell me what to buy".
const WHAT_TO_DO = /\b(?:(?:should|shall|can|must|do) (?:i|we) (?:buy|sell|invest|put (?:my |our )?(?:money|savings|salary) (?:in|into)|trade|hold|short|stake|swap|convert|cash out|move (?:my |our )?(?:money|savings))|(?:what|which)\b[^.!?]{0,40}\b(?:should|shall|to|do you (?:think|recommend|suggest|advise))\b[^.!?]{0,20}\b(?:buy|sell|invest|trade|hold|put my money)|(?:tell|show|give|advise|help) me\b[^.!?]{0,30}\b(?:what|which|where)\b[^.!?]{0,20}\b(?:to )?(?:buy|sell|invest|trade)|(?:recommend|suggest|advise|pick|tip) (?:me )?(?:a |an |some |the |one |any )?(?:good |best |safe |safest |top )?(?:coins?|cryptos?|stocks?|shares|funds?|investments?|trades?|tokens?|forex|assets?))\b/;
// "best coin to buy", "top stocks right now", "safest investment", "good crypto to invest in".
const BEST_PICK = /\b(?:best|top|good|safest|hottest|next big|profitable|winning|right)\b[^.!?]{0,25}\b(?:coins?|cryptos?|crypto ?currenc(?:y|ies)|altcoins?|tokens?|stocks?|shares|forex pairs?|investments?|funds?|trades?|trading (?:app|apps|platform|platforms|site|sites|bot|bots|strateg(?:y|ies))|exchanges?|brokers?|crypto (?:app|apps|wallet|wallets|platform|platforms))\b/;
// "which exchange / broker / app should I use", "is binance safe to put money in", "recommend a trading platform".
const WHICH_PLATFORM = /\b(?:(?:which|what|best|good|safest|safe|trusted|legit(?:imate)?|recommend|suggest)\b[^.!?]{0,40}\b(?:(?:crypto|forex|trading|currency|digital)\s+exchanges?|brokers?|trading (?:app|apps|platform|platforms|site|sites)|crypto (?:app|apps|wallet|wallets|platform|platforms)|forex (?:broker|brokers|platform|app))|(?:which|best|good|safest|safe|trusted|recommended)\s+exchanges?|(?:which|what|best|good)\s+(?:exchange|broker)\s+(?:should|to|do)\b)\b/;
// "is binance safe to put my money in", "is it wise to invest my savings in crypto": safety of putting money in is advice, not an explanation.
const SAFE_TO_PUT = /\b(?:safe|good|wise|worth it|smart|ok(?:ay)?)\b[^.!?]{0,20}\b(?:to (?:put|invest|deposit|keep|trade|park)|for (?:my |our )?(?:money|savings))\b/;
// Price calls: "will bitcoin go up", "do you think dogecoin will double", "where will bitcoin be next year". The coin, share or currency is named in the sentence itself, so farm produce prices are never caught.
const PRICE_ASSET = "bitcoin|btc|ethereum|ether|eth|crypto|cryptocurrency|coins?|dogecoin|doge|shiba|solana|xrp|usdt|tether|usdc|stablecoins?|nfts?|stocks|shares|forex|the shilling|the dollar|the naira|the cedi|the rand|the euro|shilling|dollar";
const PRICE_VERB = "go up|going up|rise|rising|drop|fall|falling|crash|moon|pump|double|increase|go down|recover|rebound|hit \\$?\\d|reach \\$?\\d|be worth";
const PRICE_CALL = new RegExp(`\\b(?:will|would|is|are|going to|gonna|do you think|predict|prediction|forecast|expect)\\b[^.!?]{0,50}\\b(?:${PRICE_ASSET})\\b[^.!?]{0,40}\\b(?:${PRICE_VERB})\\b|\\bwhere will (?:bitcoin|btc|ethereum|eth|crypto|forex)\\b`);
// "bitcoin price prediction": a price forecast is advice only when it is for something traded.
const PRICE_FORECAST = /\bprice (?:prediction|forecast|target)\b/;
// "what should I invest in", "where do I invest my money": open investing advice with no farm or business object named.
const INVEST_OPEN = /\b(?:what|where|which)\b[^.!?]{0,30}\binvest(?:ing)?\b(?!\s+in\s+(?:a|an|my|our|the)\s+(?:water|tank|farm|goat|cow|shop|business|school|house|land|tractor|pump|irrigation|greenhouse|chicken|hens?|seeds?|fertili|machine|equipment|stock of))/;
// A plan to get rich, or to make a fixed income, from trading or crypto.
const GET_RICH = /\b(?:get rich|become (?:a )?(?:millionaire|rich)|make (?:me )?(?:a )?millionaire|make (?:fast|quick|easy) money|passive income|financial freedom|retire early|quit my job)\b[^.!?]{0,60}\b(?:crypto|bitcoin|trading|forex|stocks?|investing|investment|nft|exchange)\b|\b(?:crypto|bitcoin|trading|forex|stocks?|investing|nft)\b[^.!?]{0,60}\b(?:get rich|become (?:a )?(?:millionaire|rich)|make (?:fast|quick|easy) money|passive income|financial freedom)\b|\b(?:make|earn|get)\s+(?:ksh\.?\s*|kes\s*|\$\s*)?\d[\d,]*\s*(?:k|000)?\s*(?:a |per |every |each )?(?:day|daily|week|weekly|month|monthly)\b[^.!?]{0,40}\b(?:trading|crypto|bitcoin|forex|stocks?|investing)\b/;
// Signals, bots, copy trading, leverage: tools that push people into trades.
const TRADING_TOOLS = /\b(?:(?:trading|forex|crypto|binary) signals?|signals? (?:group|channel|for (?:trading|forex|crypto))|trading bots?|crypto bots?|copy[- ]?trad(?:e|ing|er)|pump (?:and|&) dump|margin trading|leverag(?:e|ed) (?:trading|trade|position)|futures trading|binary options?)\b/;
// Borrowing, or selling land or animals, in order to invest or trade.
const BORROW_TO_INVEST = /\b(?:borrow(?:ing)?|loan|take (?:out )?a loan|mortgage|sell (?:my |our |the )?(?:land|shamba|plot|cow|cows|cattle|goats?|house|car|motorbike|bike|tractor))\b[^.!?]{0,40}\b(?:to|so (?:i|we) can|and)\b[^.!?]{0,20}\b(?:invest|trade|buy (?:crypto|bitcoin|coins?|stocks?|shares|forex)|start trading|put it (?:in|into))\b/;
// A return that is promised: nobody can promise one.
const RETURN_PROMISE = /\b(?:guaranteed|guarantee|assured|sure|risk[- ]?free|no[- ]?risk|zero risk)\s+(?:returns?|profits?|income|interest|gains?|investment|money|payouts?)\b|\b\d{1,3}\s?%\s*(?:per|a|every|each|daily|weekly|monthly)\s*(?:day|week|month|daily|weekly|monthly)\b[^.!?]{0,40}\b(?:return|profit|interest|invest|deposit|roi)\b|\b(?:return|profit|interest|roi)\b[^.!?]{0,40}\b\d{1,3}\s?%\s*(?:per|a|every|each|daily|weekly|monthly)\s*(?:day|week|month)?\b/;

const REPLIES = Object.freeze({
  investment: "I can't tell you what to buy, sell or trade, which coin, share or fund will go up, or which exchange or app to use, and nobody can honestly promise a result: prices go up and down, and many people lose money, especially in crypto and trading. I'm not a licensed financial adviser. What I can do is explain how these things work and what the risks are, help you check whether a firm is licensed in your country, or help you set a savings goal and a budget. If you are thinking of investing, only use money you can afford to lose, never borrowed money, and talk to a licensed adviser first.",
  getRich: "There is no plan that guarantees getting rich, and anyone who promises one is usually selling something. Most people who try to make quick money from trading or crypto lose money. I can help you set a savings goal and a budget that fits your life, or explain how investing and digital money work and what the risks are.",
  borrowToInvest: "Please don't borrow money, take a loan, or sell land or animals to invest or trade. Prices can fall, and you could lose it all and still owe the debt. I'm not a licensed financial adviser, but I can explain the risks, help you work out what a loan really costs, or help you plan savings instead. If you are thinking about this, talk to a licensed adviser and someone you trust first.",
  returnPromise: "Be careful: nobody can guarantee a return, and an offer of guaranteed or very high returns, like a percentage every day, week or month, is almost always a scam, and the money you pay in is usually not returned. Never send money to get money, and never share your PIN, password or keys. I can't check whether an offer is real. Ask whether the firm is licensed in your country, and tell someone you trust before you do anything."
});

// -> { kind, reply } or null. Questions that only explain ("what is bitcoin", "how does forex work", "is crypto legal in Kenya", "how do I spot a fake exchange") are NOT caught.
function investmentGuardReply(text) {
  const t = clean(text);
  if (!t || t.length > 400) return null;
  if (RETURN_PROMISE.test(t)) return { kind: "return-promise", reply: REPLIES.returnPromise };
  const assetTalk = ASSET.test(t) && !NOT_AN_ASSET_USE.test(t);
  if (BORROW_TO_INVEST.test(t) && assetTalk) return { kind: "borrow-to-invest", reply: REPLIES.borrowToInvest };
  if (GET_RICH.test(t)) return { kind: "get-rich", reply: REPLIES.getRich };
  if (TRADING_TOOLS.test(t)) return { kind: "investment-advice", reply: REPLIES.investment };
  if (WHICH_PLATFORM.test(t) || BEST_PICK.test(t) || PRICE_CALL.test(t) || INVEST_OPEN.test(t)) return { kind: "investment-advice", reply: REPLIES.investment };
  if (assetTalk && (WHAT_TO_DO.test(t) || SAFE_TO_PUT.test(t) || PRICE_FORECAST.test(t))) return { kind: "investment-advice", reply: REPLIES.investment };
  return null;
}

module.exports = Object.freeze({ investmentGuardReply, REPLIES });
