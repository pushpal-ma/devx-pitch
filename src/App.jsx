<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>devx AI labs — Investor Deck 2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000;color:#fff;font-family:'Space Grotesk',sans-serif;min-height:100vh;display:flex;flex-direction:column}
:root{--cr:#DC143C;--crd:rgba(220,20,60,0.1);--crb:rgba(220,20,60,0.3);--card:#0a0a0a;--card2:#111;--border:#1e1e1e;--muted:#888;--dim:#555;--faint:#161616}
/* Nav */
nav{background:var(--card);border-bottom:1px solid var(--border);padding:10px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;position:sticky;top:0;z-index:100}
.brand{font-weight:700;font-size:15px;color:var(--cr);letter-spacing:-0.02em}
.nav-sub{color:var(--dim);font-size:11px;letter-spacing:0.05em}
.tabs{display:flex;gap:3px;flex-wrap:wrap}
.tab-btn{padding:4px 10px;font-size:10px;font-weight:600;border:none;cursor:pointer;border-radius:2px;letter-spacing:0.05em;font-family:'Space Grotesk',sans-serif;background:transparent;color:var(--dim);transition:all 0.15s}
.tab-btn.active{background:var(--cr);color:#fff}
/* Slides */
.slides{flex:1;padding:40px 48px;max-width:940px;margin:0 auto;width:100%}
.slide{display:none}.slide.active{display:block}
/* Footer */
footer{background:var(--card);border-top:1px solid var(--border);padding:12px 48px;display:flex;align-items:center;justify-content:space-between}
.foot-btn{padding:8px 20px;font-size:12px;font-weight:600;letter-spacing:0.05em;font-family:'Space Grotesk',sans-serif;cursor:pointer;transition:all 0.15s}
.foot-prev{border:1px solid var(--border);background:transparent;color:#fff}
.foot-next{border:1px solid var(--cr);background:var(--cr);color:#fff}
.foot-prev:disabled,.foot-next:disabled{opacity:0.3;cursor:not-allowed}
.foot-info{text-align:center}
.foot-label{color:var(--dim);font-size:11px;letter-spacing:0.1em}
.dots{display:flex;gap:4px;justify-content:center;margin-top:6px}
.dot{height:4px;background:var(--border);cursor:pointer;transition:width 0.2s}
.dot.active{background:var(--cr)}
/* Reusable */
.sl{font-size:10px;font-weight:700;letter-spacing:0.15em;color:var(--cr);border-bottom:1px solid var(--cr);padding-bottom:2px;display:inline-block;margin-bottom:14px}
h2{font-size:28px;font-weight:700;margin-bottom:10px;line-height:1.2;letter-spacing:-0.02em}
.sub{color:var(--muted);font-size:14px;margin-bottom:24px;line-height:1.75;max-width:580px;text-align:left}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.grid5{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.card{background:var(--card);border:1px solid var(--border);padding:20px}
.card-cr{background:var(--card);border:1px solid var(--crb);padding:20px;border-top:3px solid var(--cr)}
.card-l{background:var(--card);border:1px solid var(--border);padding:20px;border-left:3px solid var(--cr)}
.card2{background:var(--card2);border:1px solid var(--border);padding:16px}
.card2-l{background:var(--card2);border:1px solid var(--border);padding:16px;border-left:2px solid var(--cr)}
.stat{background:var(--card);border:1px solid var(--border);padding:14px 16px;border-left:3px solid var(--cr)}
.stat-label{color:var(--muted);font-size:10px;font-weight:600;letter-spacing:0.1em;margin-bottom:6px}
.stat-val{font-size:22px;font-weight:700;line-height:1}
.stat-sub{color:var(--dim);font-size:11px;margin-top:6px}
.tag{font-size:10px;font-weight:600;padding:3px 10px;letter-spacing:0.08em;white-space:nowrap;background:transparent;color:var(--muted);border:1px solid var(--dim);display:inline-block}
.tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px}
.cr{color:var(--cr)}
.mu{color:var(--muted)}
.di{color:var(--dim)}
.chk{display:flex;flex-direction:column;gap:8px}
.chk-item{display:flex;gap:8px;align-items:flex-start}
.chk-icon{color:var(--cr);flex-shrink:0}
.chk-text{color:var(--muted);font-size:13px;line-height:1.5}
.section-title{font-weight:700;font-size:12px;letter-spacing:0.08em;margin-bottom:12px}
.bar-row{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.bar-label{width:130px;text-align:right;font-size:10px;color:var(--muted);flex-shrink:0;white-space:nowrap}
.bar-track{flex:1;height:18px;background:var(--faint);position:relative}
.bar-fill{position:absolute;left:0;top:0;bottom:0}
.bar-pct{width:28px;font-size:10px;color:var(--dim);font-weight:700;text-align:right;flex-shrink:0}
.rpe-row{margin-bottom:12px}
.rpe-header{display:flex;justify-content:space-between;margin-bottom:4px}
.rpe-track{height:6px;background:var(--faint)}
.rpe-fill{height:100%}
.alert{background:var(--crd);border:1px solid var(--crb);padding:16px}
.alert-text{color:#ff8090;font-size:13px;line-height:1.7}
.clients{display:flex;flex-wrap:wrap;gap:6px}
.client-chip{font-size:11px;padding:4px 10px;border:1px solid var(--border);color:var(--muted);background:var(--card2)}
.highlight-box{background:var(--crd);border:1px solid var(--crb);padding:14px;margin-top:14px}
.proj-card{background:var(--card2);border-top:2px solid var(--border);border:1px solid var(--border);padding:12px 10px;text-align:center}
.proj-card.hi{border-top:2px solid var(--cr)}
.proj-year{font-weight:700;font-size:11px;color:var(--muted);margin-bottom:4px;letter-spacing:0.05em}
.proj-card.hi .proj-year{color:var(--cr)}
.proj-rev{font-size:14px;font-weight:700;margin-bottom:4px}
.proj-note{font-size:10px;color:var(--dim);margin-bottom:5px}
.proj-gm{font-size:10px;color:var(--dim)}
.proj-card.hi .proj-gm{color:var(--cr)}
.proj-pbt{font-size:10px;color:var(--cr);margin-top:2px}
.org-container{background:var(--card);padding:20px;display:flex;flex-direction:column}
.org-title{font-weight:700;font-size:12px;margin-bottom:16px;text-align:center;letter-spacing:0.05em}
.metric-box{background:var(--crd);border:1px solid var(--crb);padding:18px}
.mkt-card{background:var(--card);border:1px solid var(--border);padding:22px;text-align:center;border-top:2px solid var(--cr)}
.mkt-label{color:var(--dim);font-size:10px;font-weight:600;letter-spacing:0.12em;margin-bottom:8px}
.mkt-val{font-size:30px;font-weight:700;color:var(--cr);margin-bottom:8px}
.mkt-sub{color:var(--muted);font-size:12px}
.why-card{background:var(--card);border:1px solid var(--border);padding:22px;border-top:2px solid var(--cr)}
.why-icon{font-size:26px;margin-bottom:10px}
.why-label{font-weight:700;font-size:12px;color:var(--cr);margin-bottom:10px;letter-spacing:0.08em}
.why-text{color:var(--muted);font-size:13px;line-height:1.7}
.proof-box{background:var(--card);border:1px solid var(--border);padding:22px;border-left:3px solid var(--cr);margin-top:20px}
.proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}
.proof-item{text-align:center;padding:14px 8px;background:var(--card2);border:1px solid var(--border)}
.proof-val{font-size:18px;font-weight:700;color:var(--cr);margin-bottom:4px}
.proof-label{font-weight:700;font-size:11px;letter-spacing:0.05em;margin-bottom:4px}
.proof-sub{color:var(--muted);font-size:10px}
.outcome-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
canvas{max-height:180px}
</style>
</head>
<body>

<nav>
  <div style="display:flex;align-items:center;gap:10px">
    <span class="brand">devx AI labs</span>
    <span class="nav-sub">· INVESTOR DECK · 2026</span>
  </div>
  <div class="tabs" id="tabs"></div>
</nav>

<div class="slides" id="slides"></div>

<footer>
  <button class="foot-btn foot-prev" id="prevBtn" onclick="go(-1)">← PREV</button>
  <div class="foot-info">
    <div class="foot-label" id="footLabel"></div>
    <div class="dots" id="dots"></div>
  </div>
  <button class="foot-btn foot-next" id="nextBtn" onclick="go(1)">NEXT →</button>
</footer>

<script>
const SLIDES = ["Cover","Problem","Our Bet","What We Do","Diamond Model","Outcome Manager","North Star","Traction","Financials","Market","Use of Funds","Why Now"];
const CLIENTS = ["Nykaa","WOW Skin Science","Dot & Key","Cetaphil","Foxtale","Sugar","The Whole Truth","Hamleys","Superdry","Hugo Boss","Raymond","Mokobara","The Sleep Company","Innisfree","Avimee Herbal","Kalki Fashion","Moxie","Beardo","Vedic Lab","Knya","Cello","Comet","Secret Alchemist","EUME","Svaraa","Salad Days","Nailinit","Replyall","Frido","À la mode","Aiza","KameroAI","The Indus Valley","Wonderla"];

function chk(items, icon="›", color="var(--cr)") {
  return `<div class="chk">${items.map(t=>`<div class="chk-item"><span class="chk-icon" style="color:${color}">${icon}</span><span class="chk-text">${t}</span></div>`).join("")}</div>`;
}

const content = [
// 0 COVER
`<div style="display:flex;flex-direction:column;justify-content:center;min-height:500px">
  <div style="margin-bottom:20px"><span style="font-size:10px;font-weight:600;letter-spacing:0.2em;color:var(--cr)">CONFIDENTIAL · INVESTOR PRESENTATION · 2026</span></div>
  <div style="font-size:52px;font-weight:700;line-height:1.05;margin-bottom:16px;letter-spacing:-0.03em">The <span class="cr">AI-native</span> execution<br>consulting company<br>built for the next decade.</div>
  <p class="sub" style="text-align:center;max-width:560px;margin-left:auto;margin-right:auto">Rebuilding execution consulting from first principles — fewer engineers, more orchestrators, AI in every layer. Profitable. 3× YoY.</p>
  <div class="tags"><span class="tag">AWS Advanced Consulting Partner</span><span class="tag">Medusa Partner</span><span class="tag">Profitable from Day 1</span></div>
  <div class="grid4">
    <div class="stat"><div class="stat-label">FY25 REVENUE</div><div class="stat-val" style="color:var(--muted)">₹5.61Cr</div><div class="stat-sub">Base year actuals</div></div>
    <div class="stat"><div class="stat-label">FY26 REVENUE</div><div class="stat-val">₹16.86Cr</div><div class="stat-sub">3× YoY growth</div></div>
    <div class="stat"><div class="stat-label">FY26 PBT</div><div class="stat-val" style="color:var(--cr)">₹6.24Cr</div><div class="stat-sub">37% net margin</div></div>
    <div class="stat"><div class="stat-label">FY27 TARGET</div><div class="stat-val" style="color:var(--cr)">₹63.5Cr</div><div class="stat-sub">ARR → ₹110Cr exit</div></div>
  </div>
  <div style="margin-top:12px;color:var(--dim);font-size:10px;letter-spacing:0.05em">* Projections at ₹92/USD spot rate, Apr 2026</div>
</div>`,

// 1 PROBLEM
`<span class="sl">THE PROBLEM</span>
<h2>Traditional IT execution<br>hasn't been disrupted — yet.</h2>
<p class="sub">A $1.4Tn industry still running on staffing ratios from 2005. Technology is getting commoditised. AI breaks every assumption this model was built on.</p>
<div class="grid2" style="margin-bottom:20px">
  ${[["🌳","Tree-shaped orgs","Thin leadership, massive junior-engineer base. Revenue per employee: ₹15–22L. Margin compresses as you scale. Attrition kills delivery continuity."],["⏳","Billed by hours, not outcomes","Clients pay for presence, not results. Change requests are a revenue model. No alignment between what's billed and business metrics."],["🤖","AI is an afterthought","Incumbents bolt AI on as a separate team. Core delivery is unchanged. Engineers still take 10 days for what AI does in 2."],["📉","Margin compresses at scale","Adding headcount to grow revenue kills margin. The model rewards volume, not intelligence. Never designed to leverage multipliers."]].map(([i,t,d])=>`<div class="card"><div style="font-size:22px;margin-bottom:8px">${i}</div><div style="font-weight:700;font-size:14px;margin-bottom:8px">${t}</div><p class="mu" style="font-size:13px;line-height:1.7;margin:0">${d}</p></div>`).join("")}
</div>
<div class="alert"><p class="alert-text"><strong>The inflection:</strong> AI coding agents and LLM orchestration mean one great engineer + AI delivers what five average engineers used to. The company that internalises this structurally wins the decade.</p></div>`,

// 2 OUR BET
`<span class="sl">OUR BET</span>
<h2>Outcomes over technology.<br><span class="cr">Technology will be commoditised.</span></h2>
<p class="sub">Technology keeps getting cheaper and more accessible. The moat is never the stack — it's the ability to translate business intent into outcomes at speed. devx AI labs is built around this: an execution consulting company where AI amplifies every layer, from strategy to delivery.</p>
<div class="grid3" style="margin-bottom:24px">
  ${[["AI MULTIPLIER","3–5×","Output per devx AI labs engineer vs. non-AI team"],["FY26 GROSS MARGIN","52%","Structural — held across the full year"],["REVENUE GROWTH","3×","₹5.61Cr → ₹16.86Cr, FY25 to FY26"]].map(([l,v,d])=>`<div class="card-cr" style="text-align:center"><div style="color:var(--muted);font-size:10px;font-weight:600;letter-spacing:0.12em;margin-bottom:8px">${l}</div><div style="font-size:36px;font-weight:700;color:var(--cr);margin-bottom:8px">${v}</div><div style="color:var(--muted);font-size:12px">${d}</div></div>`).join("")}
</div>
<div class="card" style="padding:24px">
  <div class="section-title">OLD MODEL vs. DEVX AI LABS</div>
  <div class="grid2">
    <div><div style="color:var(--dim);font-size:11px;font-weight:600;letter-spacing:0.1em;margin-bottom:10px">TRADITIONAL IT SERVICES</div>${chk(["Revenue scales 1:1 with headcount","Margin compresses as you add people","AI is a product feature, not an operating model","Clients pay for hours and presence"],"✕","var(--dim)")}</div>
    <div><div style="color:var(--cr);font-size:11px;font-weight:600;letter-spacing:0.1em;margin-bottom:10px">DEVX AI LABS</div>${chk(["Revenue scales faster than headcount","Margin improves as AI tooling compounds","AI is the delivery engine — non-negotiable","Clients pay for outcomes, milestones, ARR"],"✓","var(--cr)")}</div>
  </div>
</div>`,

// 3 WHAT WE DO
`<span class="sl">WHAT WE DO</span>
<h2>Enterprise CX transformation<br><span class="cr">across four pillars.</span></h2>
<p class="sub">We help mid-to-large enterprises transform customer experiences using AI — focused on retail, e-commerce, and consumer brands globally.</p>
<div class="grid2" style="margin-bottom:18px">
  ${[["💬","Customer Interactions",["Conversational AI & LLM-powered support","Agent productivity and CS automation tooling","Voice, chat, and post-order experience layers"]],["📣","Marketing Automation",["AI-led CRM, loyalty & hyper-personalisation","WebEngage, CleverTap, CDPs — strategy to execution","Audience intelligence & campaign automation"]],["⚙️","AI-Ops",["Agentic workflows across operations layers","Returns, OMS, WMS reconciliation & automation","AI-powered monitoring, alerting & resolution"]],["🏗️","Enterprise Architecture",["Headless commerce & microservices modernisation","Cloud migrations — AWS-first, lift-and-shift","Deep integrations: SAP, OMS, WMS, ERP"]]].map(([i,l,items])=>`<div class="card-l"><div style="font-size:22px;margin-bottom:8px">${i}</div><div style="font-weight:700;font-size:13px;color:var(--cr);margin-bottom:10px;letter-spacing:0.05em">${l}</div>${items.map(it=>`<div style="display:flex;gap:8px;margin-bottom:6px"><span style="color:var(--cr);font-size:11px;margin-top:1px">›</span><span style="color:var(--muted);font-size:12px;line-height:1.5">${it}</span></div>`).join("")}</div>`).join("")}
</div>
<div class="grid2">
  ${[["☁️","AWS Advanced Consulting Partner","Cloud architecture & migrations — primary infrastructure play"],["🔗","Medusa + Fynd Partners","Headless commerce, OMS & retail stack partnerships"]].map(([i,l,s])=>`<div class="card2" style="display:flex;gap:10px;align-items:center"><span style="font-size:20px">${i}</span><div><div style="font-weight:700;font-size:12px">${l}</div><div style="color:var(--muted);font-size:11px;margin-top:2px">${s}</div></div></div>`).join("")}
</div>`,

// 4 DIAMOND
`<span class="sl">THE MODEL</span>
<h2>Diamond-shaped.<br>Not tree-shaped.</h2>
<p class="sub">Traditional IT firms stack junior engineers at the base. devx AI labs inverts the ratio — the widest layer is intellectual capital. Engineers are fewer, AI-multiplied, structurally higher-value.</p>
<div class="grid2" style="margin-bottom:20px">
  <div class="org-container" style="border:1px solid var(--border)">
    <div class="org-title" style="color:var(--dim)">🌳 Traditional (Tree-Shaped)</div>
    ${[["C-Suite",10],["VP / Directors",22],["Project Managers",38],["Tech Leads",58],["Mid Engineers",78],["Junior Engineers",100]].map(([l,p])=>`<div class="bar-row"><div class="bar-label">${l}</div><div class="bar-track"><div class="bar-fill" style="width:${p}%;background:rgba(255,255,255,${0.05+p*0.003})"></div></div><div class="bar-pct">${p}%</div></div>`).join("")}
    <div style="margin-top:14px;text-align:center;font-size:11px;color:var(--muted);border-top:1px solid var(--border);padding-top:12px">RPE <strong>₹15–22L</strong> · Gross margin <strong>12–20%</strong></div>
  </div>
  <div class="org-container" style="border:1px solid var(--crb)">
    <div class="org-title cr">💎 devx AI labs (Diamond-Shaped)</div>
    ${[["Leadership",12,false],["Consulting + Sol.",46,false],["Outcome Mgrs / CSMs",96,true],["Consulting + Sol.",46,false],["AI Engineers",18,false]].map(([l,p,hi])=>`<div class="bar-row"><div class="bar-label" style="color:${hi?"var(--cr)":"var(--muted)"};font-weight:${hi?700:400}">${l}</div><div class="bar-track"><div class="bar-fill" style="width:${p}%;background:${hi?"var(--cr)":"#220a0e"};border:${hi?"1px solid var(--cr)":"1px solid #3a0a10"}"></div></div><div class="bar-pct" style="color:${hi?"var(--cr)":"var(--dim)"}">${p}%</div></div>`).join("")}
    <div style="margin-top:14px;text-align:center;font-size:11px;color:var(--muted);border-top:1px solid var(--border);padding-top:12px">RPE target <strong style="color:var(--cr)">₹42L (FY27)</strong> · Gross margin <strong style="color:var(--cr)">52%+</strong></div>
  </div>
</div>
<div class="grid3">
  ${[["⚡","Fewer builders","Each AI-native engineer ships 3–5× the output of a traditional peer."],["🔄","Wider orchestration","Outcome Managers translate client intent into precise delivery briefs. No lost-in-translation margin loss."],["📈","Margin compounds","As AI tooling improves, delivery cost drops. Margin expands without adding headcount."]].map(([i,t,d])=>`<div class="card" style="border-top:2px solid var(--cr)"><div style="font-size:20px;margin-bottom:8px">${i}</div><div style="font-weight:700;font-size:12px;color:var(--cr);margin-bottom:6px;letter-spacing:0.05em">${t}</div><p style="color:var(--muted);font-size:12px;margin:0;line-height:1.6">${d}</p></div>`).join("")}
</div>`,

// 5 OUTCOME MANAGER
`<span class="sl">THE ORCHESTRATION LAYER</span>
<h2>The Outcome Manager:<br><span class="cr">CEO of the engagement.</span></h2>
<p class="sub">Not a PM. Not a BA. A consulting-flavored orchestrator between client business intent and engineering delivery — AI handles the admin so they focus on judgment.</p>
<div class="outcome-grid">
  <div class="card-l" style="border:1px solid var(--crb)">
    <div style="font-weight:700;font-size:12px;color:var(--cr);margin-bottom:14px;letter-spacing:0.08em">WHAT THEY DO</div>
    ${chk(["Translate client business problems into executable delivery plans","Write user stories, acceptance criteria, and sprint goals with AI","Own scope, timeline, quality, and client satisfaction end-to-end","Coordinate between Customer Success, AI Engineering, and client","Generate progress decks, risk registers, decision logs via AI","Act as the CEO of the engagement — not an order-taker"],"◆")}
  </div>
  <div style="display:flex;flex-direction:column;gap:12px">
    <div class="card2"><div style="font-weight:700;font-size:13px;margin-bottom:10px">Why this role is the moat</div><p style="color:var(--muted);font-size:13px;margin:0;line-height:1.7">Most IT firms lose margin at the handoff between client and delivery. The Outcome Manager eliminates that gap. AI automates their documentation — they spend time on judgment, not admin.</p></div>
    <div class="metric-box"><div style="font-weight:700;font-size:12px;color:var(--cr);letter-spacing:0.1em;margin-bottom:12px">THE RATIO THAT MATTERS</div><div class="grid2"><div style="text-align:center"><div style="font-size:24px;font-weight:700;color:var(--cr)">1.5:1</div><div style="color:var(--muted);font-size:11px;margin-top:4px">Orchestrators per Engineer</div></div><div style="text-align:center"><div style="font-size:24px;font-weight:700;color:var(--cr)">~80%</div><div style="color:var(--muted);font-size:11px;margin-top:4px">AI-assisted documentation</div></div></div></div>
    <div class="card2"><div style="font-weight:700;font-size:13px;margin-bottom:10px">The difference</div><p style="color:var(--muted);font-size:13px;margin:0;line-height:1.7">Traditional firms have PMs who track tickets. devx AI labs Outcome Managers own business outcomes — they know the client's P&L, anticipate scope risks, and shape what engineering builds before a sprint starts.</p></div>
  </div>
</div>`,

// 6 NORTH STAR
`<span class="sl">NORTH STAR METRIC</span>
<h2>Revenue per employee.<br><span class="cr">Our only vanity-free metric.</span></h2>
<p class="sub">We don't optimise for headcount. RPE is the cleanest signal of AI leverage, delivery quality, and org efficiency — all in one number. 80 avg. employees, ₹16.86Cr FY26 revenue.</p>
<div class="grid2" style="margin-bottom:20px">
  <div class="card" style="padding:22px">
    <div style="font-weight:700;font-size:11px;color:var(--dim);letter-spacing:0.1em;margin-bottom:16px">RPE COMPARISON (₹L / EMPLOYEE / YEAR)</div>
    ${[["Large Indian IT (TCS, Wipro)","₹15L",22,false],["Mid-tier IT services","₹22L",32,false],["devx AI labs FY26 (80 emp.)","₹21.1L",31,true],["devx AI labs FY27 (150 emp.)","₹42.3L",62,true],["devx AI labs FY28 target","₹74L+",100,true]].map(([l,r,p,hi])=>`<div class="rpe-row"><div class="rpe-header"><span style="color:${hi?"#fff":"var(--dim)"};font-size:12px;font-weight:${hi?700:400}">${l}</span><span style="color:${hi?"var(--cr)":"var(--dim)"};font-weight:700;font-size:13px">${r}</span></div><div class="rpe-track"><div class="rpe-fill" style="width:${p}%;background:${hi?"var(--cr)":"var(--border)"}"></div></div></div>`).join("")}
    <div style="margin-top:10px;font-size:11px;color:var(--dim)">FY26 at mid-tier parity today. The gap widens fast as AI leverage compounds.</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:12px">
    <div class="card2"><div style="font-weight:700;font-size:12px;color:var(--cr);margin-bottom:10px;letter-spacing:0.08em">WHY RPE IS THE RIGHT METRIC</div>${chk(["Captures AI leverage — more adoption = higher RPE","Exposes org bloat before it hits the P&L","Aligns incentives: grow revenue, not headcount","Metric top-quartile consulting firms benchmark against"])}</div>
    <div class="card2">
      <div style="font-weight:700;font-size:13px;margin-bottom:14px">RPE TRAJECTORY</div>
      ${[["FY26 actual","₹21.1L","80 avg. employees · profitable baseline",false],["FY27 target","₹42.3L","150 people · GTM + AI tooling",true],["FY28 target","₹74L+","AI leverage compounding at scale",true]].map(([y,r,n,hi])=>`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--faint)"><div><div style="font-weight:700;font-size:13px;color:${hi?"var(--cr)":"#fff"}">${y}</div><div style="color:var(--muted);font-size:11px;margin-top:2px">${n}</div></div><div style="font-size:20px;font-weight:700;color:${hi?"var(--cr)":"#fff"}">${r}</div></div>`).join("")}
    </div>
  </div>
</div>`,

// 7 TRACTION
`<span class="sl">TRACTION</span>
<h2>3× revenue growth.<br><span class="cr">Profitable. A strong client portfolio.</span></h2>
<p class="sub">Built on strong fundamentals. Zero client churn. Brands across retail, beauty, fashion, F&B, and consumer goods.</p>
<div class="grid3" style="margin-bottom:20px">
  <div class="stat"><div class="stat-label">FY26 REVENUE</div><div class="stat-val">₹16.86Cr</div><div class="stat-sub">3× FY25</div></div>
  <div class="stat"><div class="stat-label">FY26 GROSS MARGIN</div><div class="stat-val" style="color:var(--cr)">52%</div><div class="stat-sub">P&L actual</div></div>
  <div class="stat"><div class="stat-label">FY26 PBT</div><div class="stat-val" style="color:var(--cr)">₹6.24Cr</div><div class="stat-sub">37% net margin</div></div>
</div>
<div class="card" style="margin-bottom:14px">
  <div class="section-title">CLIENT PORTFOLIO</div>
  <div class="clients">${CLIENTS.map(c=>`<span class="client-chip">${c}</span>`).join("")}</div>
</div>
<div class="grid2">
  <div class="card2-l"><div style="color:var(--dim);font-size:10px;font-weight:600;letter-spacing:0.1em;margin-bottom:6px">INTERNATIONAL REVENUE</div><div style="font-size:16px;font-weight:700;color:var(--cr);margin-bottom:4px">~10–15%</div><div style="color:var(--muted);font-size:11px">Growing organically — no dedicated sales hire</div></div>
  <div class="card2-l"><div style="color:var(--dim);font-size:10px;font-weight:600;letter-spacing:0.1em;margin-bottom:6px">AVG TEAM SIZE</div><div style="font-size:16px;font-weight:700;color:var(--cr);margin-bottom:4px">80 employees</div><div style="color:var(--muted);font-size:11px">Avg. over last 12 months</div></div>
</div>`,

// 8 FINANCIALS
`<span class="sl">FINANCIALS</span>
<h2>Path to ₹460Cr.<br><span class="cr">Built on recurring revenue.</span></h2>
<p class="sub">FY27 is the inflection year. GTM in Western markets, ₹110Cr ARR by exit rate, ₹23Cr PBT. All projections at ₹92/USD.</p>
<div class="card" style="margin-bottom:14px;padding:20px">
  <div class="section-title">REVENUE (₹CR) — ACTUALS & PROJECTIONS</div>
  <canvas id="revenueChart"></canvas>
</div>
<div class="grid5" style="margin-bottom:14px">
  ${[["FY25","₹5.61Cr","Actual","~42%","—",false],["FY26","₹16.86Cr","Actual","52%","₹6.24Cr",false],["FY27E","₹63.5Cr","Target","52%+","₹23Cr",true],["FY28E","₹184Cr","Target","55%+","—",true],["FY29E","₹460Cr","Target","58%+","—",true]].map(([y,r,n,g,p,hi])=>`<div class="proj-card ${hi?"hi":""}"><div class="proj-year">${y}</div><div class="proj-rev">${r}</div><div class="proj-note">${n}</div><div class="proj-gm">GM: ${g}</div>${p!=="—"?`<div class="proj-pbt">PBT: ${p}</div>`:""}</div>`).join("")}
</div>
<div class="highlight-box">
  <div class="grid4">
    ${[["FY27 ARR EXIT RATE","₹110Cr"],["FY27 PBT TARGET","₹23Cr"],["REVENUE CAGR (FY26→FY29)","~128%"],["GROSS MARGIN TRAJECTORY","52% → 58%+"]].map(([l,v])=>`<div><div style="color:var(--dim);font-size:10px;font-weight:600;letter-spacing:0.1em;margin-bottom:4px">${l}</div><div style="font-size:18px;font-weight:700;color:var(--cr)">${v}</div></div>`).join("")}
  </div>
</div>`,

// 9 MARKET
`<span class="sl">MARKET</span>
<h2>A $1.4Tn market being<br><span class="cr">repriced by AI.</span></h2>
<p class="sub">The global IT services market grew for 30 years on one model. AI breaks every assumption. Leaders of the next decade won't be the largest — they'll be the most leveraged.</p>
<div class="grid3" style="margin-bottom:20px">
  <div class="mkt-card"><div class="mkt-label">GLOBAL IT SERVICES</div><div class="mkt-val">$1.4Tn</div><div class="mkt-sub">Total addressable, 2025</div></div>
  <div class="mkt-card"><div class="mkt-label">AI TRANSFORMATION SERVICES</div><div class="mkt-val">$230Bn</div><div class="mkt-sub">Growing at 35% CAGR</div></div>
  <div class="mkt-card"><div class="mkt-label">RETAIL & E-COM TECH</div><div class="mkt-val">$60Bn</div><div class="mkt-sub">Primary vertical focus</div></div>
</div>
<div class="grid2">
  <div class="card"><div class="section-title">WHY WESTERN MARKETS, WHY NOW</div>${chk(["Western mid-market underserved — big IT is too slow and expensive","AI-native execution consulting is a new buying category incumbents can't claim","devx AI labs already has organic international revenue — no sales team","AWS partnership opens enterprise doors in North America & Europe"])}</div>
  <div class="card"><div class="section-title">THE COMPETITIVE WINDOW</div>${chk(["Large IT firms (Infosys, Wipro) too slow to restructure delivery","Pure-play AI agencies lack enterprise delivery depth for big mandates","Boutique firms lack org infrastructure to scale past ₹85Cr","devx AI labs is designed for the intersection of all three from day 1"],"✓")}</div>
</div>`,

// 10 USE OF FUNDS
`<span class="sl">USE OF FUNDS</span>
<h2>Two bets.<br><span class="cr">One thesis.</span></h2>
<p class="sub">We're raising to take devx AI labs to Western markets with proper GTM infrastructure, and to build the AI research capability that becomes our long-term moat.</p>
<div class="grid2" style="margin-bottom:20px">
  ${[["🌍","GTM — WESTERN MARKETS","60%",["Sales and pre-sales hires in US/UK — quota-carrying from day 1","AWS partner channel development in Western geographies","Thought leadership and analyst relations (Gartner, Forrester)","First 3 Western marquee client acquisitions","Target: ₹25Cr ARR from international clients by end of FY27"]],["🧠","AI RESEARCH — INTERNAL MOAT","40%",["Proprietary AI evaluation frameworks for delivery quality","LLM-powered tooling: requirements gen, sprint planning, test automation","AI IP across verticals — retail, CS, logistics, OMS automation","Publish research: builds brand, attracts top engineering talent","Target: 3 production-grade AI products clients pay for"]]].map(([i,l,p,items])=>`<div class="card-cr"><div style="display:flex;align-items:center;gap:10px;margin-bottom:16px"><span style="font-size:26px">${i}</span><div><div style="font-weight:700;font-size:13px;letter-spacing:0.05em">${l}</div><div style="color:var(--cr);font-weight:700;font-size:12px;margin-top:2px">${p} of round</div></div></div>${chk(items,"◆")}</div>`).join("")}
</div>
<div class="highlight-box">
  <div style="font-weight:700;font-size:12px;color:var(--cr);letter-spacing:0.08em;margin-bottom:8px">SUCCESS IN 18 MONTHS</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap">
    ${["International client base established","₹110Cr ARR at exit rate","2–3 proprietary AI products live","devx AI labs as the category leader"].map(t=>`<div style="display:flex;gap:6px;align-items:center"><span style="color:var(--cr)">›</span><span style="color:var(--muted);font-size:13px">${t}</span></div>`).join("")}
  </div>
</div>`,

// 11 WHY NOW
`<span class="sl">WHY NOW</span>
<h2>The AI inflection is real.<br><span class="cr">The window is 18 months.</span></h2>
<p class="sub">Three forces are converging. Miss the window and incumbents will bolt AI on convincingly enough. Move now, and the category is ours to define.</p>
<div class="grid3" style="margin-bottom:20px">
  <div class="why-card"><div class="why-icon">⚡</div><div class="why-label">AI CAPABILITY LEAP</div><p class="why-text">LLMs, coding agents, and agentic frameworks have crossed enterprise-readiness. What was experimental 18 months ago is production-grade today.</p></div>
  <div class="why-card"><div class="why-icon">💸</div><div class="why-label">ENTERPRISE BUYING SHIFT</div><p class="why-text">CFOs are cutting IT vendor headcount costs and demanding outcome-based pricing. The traditional body-shop model is being actively de-selected.</p></div>
  <div class="why-card"><div class="why-icon">🏆</div><div class="why-label">CATEGORY IS STILL OPEN</div><p class="why-text">No incumbent has credibly repositioned as AI-native in delivery. First-mover in Western markets with proof-of-execution wins the decade.</p></div>
</div>
<div class="proof-box">
  <div style="font-weight:700;font-size:12px;letter-spacing:0.08em">DEVX AI LABS RIGHT NOW</div>
  <div class="proof-grid">
    <div class="proof-item"><div class="proof-val">✓</div><div class="proof-label">PROOF OF MODEL</div><div class="proof-sub">3× YoY growth, profitable</div></div>
    <div class="proof-item"><div class="proof-val">Organic</div><div class="proof-label">INTL. DEMAND</div><div class="proof-sub">International revenue, no dedicated sales hire</div></div>
    <div class="proof-item"><div class="proof-val">Live</div><div class="proof-label">AI TOOLCHAIN</div><div class="proof-sub">Running internally on every engagement today</div></div>
  </div>
</div>`
];

let cur = 0;

function render() {
  // tabs
  const tabs = document.getElementById("tabs");
  tabs.innerHTML = SLIDES.map((s,i)=>`<button class="tab-btn${i===cur?" active":""}" onclick="jump(${i})">${s}</button>`).join("");
  // slides
  const slides = document.getElementById("slides");
  slides.innerHTML = `<div class="slide active">${content[cur]}</div>`;
  // footer
  document.getElementById("footLabel").innerHTML = `${cur+1} / ${SLIDES.length} · <strong>${SLIDES[cur].toUpperCase()}</strong>`;
  const dots = document.getElementById("dots");
  dots.innerHTML = SLIDES.map((_,i)=>`<div class="dot${i===cur?" active":""}" style="width:${i===cur?16:4}px" onclick="jump(${i})"></div>`).join("");
  document.getElementById("prevBtn").disabled = cur===0;
  document.getElementById("nextBtn").disabled = cur===SLIDES.length-1;
  // chart
  if(cur===8) setTimeout(()=>{
    const ctx = document.getElementById("revenueChart");
    if(!ctx) return;
    new Chart(ctx,{type:"bar",data:{labels:["FY25","FY26","FY27E","FY28E","FY29E"],datasets:[{data:[5.61,16.86,63.5,184,460],backgroundColor:["#2a2a2a","#555","#DC143C","#aa1030","#880c28"],borderRadius:3}]},options:{plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`₹${c.raw}Cr`}}},scales:{x:{grid:{display:false},ticks:{color:"#888",font:{family:"Space Grotesk"}}},y:{grid:{color:"#1e1e1e"},ticks:{color:"#888",font:{family:"Space Grotesk"},callback:v=>`₹${v}Cr`}}}}});
  },100);
}

function jump(i){cur=i;render();}
function go(d){cur=Math.max(0,Math.min(SLIDES.length-1,cur+d));render();}
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1);});
render();
</script>
</body>
</html>
