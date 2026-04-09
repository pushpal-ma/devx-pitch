import { useState, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";

const C = {
  bg:"#000000", card:"#0a0a0a", card2:"#111111", border:"#1e1e1e", border2:"#2a2a2a",
  text:"#ffffff", muted:"#888888", dim:"#555555", faint:"#161616",
  crimson:"#DC143C", crimsonD:"rgba(220,20,60,0.1)", crimsonB:"rgba(220,20,60,0.3)",
};

const CLIENTS = [
  "Nykaa","WOW Skin Science","Dot & Key","Cetaphil","Foxtale","Sugar",
  "The Whole Truth","Hamleys","Superdry","Hugo Boss","Raymond","Mokobara",
  "The Sleep Company","Innisfree","Avimee Herbal","Kalki Fashion","Moxie",
  "Beardo","Vedic Lab","Knya","Cello","Comet","Secret Alchemist","EUME",
  "Svaraa","Salad Days","Nailinit","Replyall","Frido","À la mode","Aiza",
  "KameroAI","The Indus Valley","Wonderla",
];

const projData = [
  {year:"FY25",  rev:5.61,  clr:"#2a2a2a"},
  {year:"FY26",  rev:16.86, clr:"#555555"},
  {year:"FY27E", rev:63.5,  clr:C.crimson},
  {year:"FY28E", rev:184,   clr:"#aa1030"},
  {year:"FY29E", rev:460,   clr:"#880c28"},
];

const SLIDES = [
  "Cover","Problem","Our Bet","What We Do","Diamond Model",
  "Outcome Manager","North Star","Traction","Financials","Market","Use of Funds","Why Now"
];

const Tag = ({label,color}) => (
  <span style={{fontSize:10,fontWeight:600,padding:"3px 10px",letterSpacing:"0.08em",whiteSpace:"nowrap",
    background:"transparent",color:color||C.muted,border:`1px solid ${color||C.dim}`}}>{label}</span>
);

const Stat = ({label,value,sub,color}) => (
  <div style={{background:C.card,border:`1px solid ${C.border}`,padding:"14px 16px",borderLeft:`3px solid ${C.crimson}`}}>
    <div style={{color:C.muted,fontSize:10,fontWeight:600,letterSpacing:"0.1em",marginBottom:6}}>{label}</div>
    <div style={{fontSize:22,fontWeight:700,color:color||C.text,lineHeight:1}}>{value}</div>
    {sub&&<div style={{color:C.dim,fontSize:11,marginTop:6}}>{sub}</div>}
  </div>
);

const SL = ({text}) => (
  <div style={{marginBottom:14}}>
    <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.15em",color:C.crimson,borderBottom:`1px solid ${C.crimson}`,paddingBottom:2}}>{text}</span>
  </div>
);

const H = ({children}) => <h2 style={{fontSize:28,fontWeight:700,margin:"0 0 10px",lineHeight:1.2,letterSpacing:"-0.02em"}}>{children}</h2>;
const P = ({children}) => <p style={{color:C.muted,fontSize:14,margin:"0 0 24px",lineHeight:1.75,maxWidth:580}}>{children}</p>;
const Chk = ({items,color,icon}) => items.map(t=>(
  <div key={t} style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
    <span style={{color:color||C.crimson,flexShrink:0}}>{icon||"›"}</span>
    <span style={{color:C.muted,fontSize:13,lineHeight:1.5}}>{t}</span>
  </div>
));

// ── Org shape: label + horizontal bar (no overflow issues) ──
function OrgShape({type}) {
  const isD = type==="diamond";
  const treeBars = [
    {l:"C-Suite",          p:10},{l:"VP / Directors",   p:22},
    {l:"Project Managers", p:38},{l:"Tech Leads",       p:58},
    {l:"Mid Engineers",    p:78},{l:"Junior Engineers", p:100},
  ];
  const diamondBars = [
    {l:"Leadership",         p:12, hi:false},
    {l:"Consulting + Sol.",  p:46, hi:false},
    {l:"Outcome Mgrs/CSMs",  p:96, hi:true},
    {l:"Consulting + Sol.",  p:46, hi:false},
    {l:"AI Engineers",       p:18, hi:false},
  ];
  const bars = isD ? diamondBars : treeBars;
  return (
    <div style={{background:C.card,border:`1px solid ${isD?C.crimsonB:C.border}`,padding:20,display:"flex",flexDirection:"column",gap:0}}>
      <div style={{fontWeight:700,fontSize:12,color:isD?C.crimson:C.dim,marginBottom:16,textAlign:"center",letterSpacing:"0.05em"}}>
        {isD?"💎  devx  (Diamond-Shaped)":"🌳  Traditional  (Tree-Shaped)"}
      </div>
      {bars.map((b,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
          <div style={{width:110,textAlign:"right",fontSize:10,color:b.hi?C.crimson:C.muted,fontWeight:b.hi?700:400,flexShrink:0,whiteSpace:"nowrap"}}>{b.l}</div>
          <div style={{flex:1,height:18,background:C.faint,position:"relative"}}>
            <div style={{
              position:"absolute",left:0,top:0,bottom:0,
              width:`${b.p}%`,
              background:isD?(b.hi?C.crimson:"#220a0e"):`rgba(255,255,255,${0.05+i*0.05})`,
              border:b.hi?`1px solid ${C.crimson}`:isD?`1px solid #3a0a10`:"none",
            }}/>
          </div>
          <div style={{width:28,fontSize:10,color:b.hi?C.crimson:C.dim,fontWeight:700,textAlign:"right",flexShrink:0}}>{b.p}%</div>
        </div>
      ))}
      <div style={{marginTop:14,textAlign:"center",fontSize:11,color:C.muted,borderTop:`1px solid ${C.border}`,paddingTop:12}}>
        {isD
          ? <>RPE target <strong style={{color:C.crimson}}>₹42L (FY27)</strong> · Gross margin <strong style={{color:C.crimson}}>52%+</strong></>
          : <>RPE <strong>₹15–22L</strong> · Gross margin <strong>12–20%</strong></>}
      </div>
    </div>
  );
}

const BrandName = ({size}) => (
  <span style={{fontWeight:700,fontSize:size||15,color:C.crimson,letterSpacing:"-0.02em"}}>devx AI labs</span>
);

export default function App() {
  const [s, setS] = useState(0);
  const n = SLIDES.length;
  const go = d => setS(p=>Math.max(0,Math.min(n-1,p+d)));
  const font = "'Space Grotesk',-apple-system,sans-serif";

  useEffect(()=>{
    const l=document.createElement("link");
    l.rel="stylesheet"; l.href=FONT_URL;
    document.head.appendChild(l);
  },[]);

  return (
    <div style={{background:C.bg,minHeight:"100vh",color:C.text,fontFamily:font}}>
      {/* Nav */}
      <div style={{background:C.card,borderBottom:`1px solid ${C.border}`,padding:"10px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <BrandName/>
          <span style={{color:C.dim,fontSize:11,letterSpacing:"0.05em"}}>· INVESTOR DECK · 2026</span>
        </div>
        <div style={{display:"flex",gap:3,flexWrap:"wrap"}}>
          {SLIDES.map((sl,i)=>(
            <button key={sl} onClick={()=>setS(i)} style={{
              padding:"4px 10px",fontSize:10,fontWeight:600,border:"none",cursor:"pointer",borderRadius:2,letterSpacing:"0.05em",fontFamily:font,
              background:s===i?C.crimson:"transparent",color:s===i?"#fff":C.dim}}>
              {sl}
            </button>
          ))}
        </div>
      </div>

      <div style={{flex:1,padding:"40px 48px",maxWidth:940,margin:"0 auto",width:"100%",boxSizing:"border-box"}}>

        {/* COVER */}
        {s===0&&(
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:500}}>
            <div style={{marginBottom:20}}>
              <span style={{fontSize:10,fontWeight:600,letterSpacing:"0.2em",color:C.crimson}}>CONFIDENTIAL · INVESTOR PRESENTATION · 2026</span>
            </div>
            <div style={{fontSize:52,fontWeight:700,lineHeight:1.05,marginBottom:16,letterSpacing:"-0.03em"}}>
              The <span style={{color:C.crimson}}>AI-native</span> services<br/>company built for<br/>the next decade.
            </div>
            <p style={{color:C.muted,fontSize:15,maxWidth:500,lineHeight:1.8,margin:"0 0 32px"}}>
              Rebuilding IT services from first principles — fewer engineers, more orchestrators, AI in every layer. Profitable. 3× YoY.
            </p>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:36}}>
              {["AWS Advanced Consulting Partner","Medusa Partner","Profitable from Day 1"].map(t=>(
                <Tag key={t} label={t} color={C.muted}/>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
              <Stat label="FY25 REVENUE"  value="₹5.61Cr"  sub="Base year actuals" color={C.muted}/>
              <Stat label="FY26 REVENUE"  value="₹16.86Cr" sub="3× YoY growth"/>
              <Stat label="FY26 PBT"      value="₹6.24Cr"  sub="37% net margin" color={C.crimson}/>
              <Stat label="FY27 TARGET"   value="₹63.5Cr"  sub="ARR → ₹110Cr exit" color={C.crimson}/>
            </div>
            <div style={{marginTop:12,color:C.dim,fontSize:10,letterSpacing:"0.05em"}}>* Projections at ₹92/USD spot rate, Apr 2026</div>
          </div>
        )}

        {/* PROBLEM */}
        {s===1&&(
          <div>
            <SL text="THE PROBLEM"/>
            <H>Traditional IT services<br/>haven't been disrupted — yet.</H>
            <P>A $1.4Tn industry still running on staffing ratios from 2005. AI breaks every assumption this model was built on.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
              {[
                {icon:"🌳",title:"Tree-shaped orgs",desc:"Thin leadership, massive junior-engineer base. Revenue per employee: ₹15–22L. Margin compresses as you scale. Attrition kills delivery continuity."},
                {icon:"⏳",title:"Billed by hours, not outcomes",desc:"Clients pay for presence, not results. Change requests are a revenue model. No alignment between what's billed and business metrics."},
                {icon:"🤖",title:"AI is an afterthought",desc:"Incumbents bolt AI on as a separate team. Core delivery is unchanged. Engineers still take 10 days for what AI does in 2."},
                {icon:"📉",title:"Margin compresses at scale",desc:"Adding headcount to grow revenue kills margin. The model rewards volume, not intelligence. Never designed to leverage multipliers."},
              ].map(v=>(
                <div key={v.title} style={{background:C.card,border:`1px solid ${C.border}`,padding:20}}>
                  <div style={{fontSize:22,marginBottom:8}}>{v.icon}</div>
                  <div style={{fontWeight:700,fontSize:14,marginBottom:8}}>{v.title}</div>
                  <p style={{color:C.muted,fontSize:13,margin:0,lineHeight:1.7}}>{v.desc}</p>
                </div>
              ))}
            </div>
            <div style={{background:C.crimsonD,border:`1px solid ${C.crimsonB}`,padding:16}}>
              <p style={{color:"#ff8090",fontSize:13,margin:0,lineHeight:1.7}}>
                <strong>The inflection:</strong> AI coding agents and LLM orchestration mean one great engineer + AI delivers what five average engineers used to. The company that internalises this structurally wins the decade.
              </p>
            </div>
          </div>
        )}

        {/* OUR BET */}
        {s===2&&(
          <div>
            <SL text="OUR BET"/>
            <H>AI collapses the cost of building.<br/><span style={{color:C.crimson}}>We capture the margin.</span></H>
            <P>devx AI labs is built around a single insight: AI amplifies engineering output 3–5×. Fewer builders, more orchestrators, AI as the delivery engine — structurally, not as an add-on.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24}}>
              {[
                {label:"AI MULTIPLIER",      value:"3–5×",  desc:"Output per devx AI labs engineer vs. non-AI team"},
                {label:"FY26 GROSS MARGIN",  value:"52%",   desc:"Structural — held across the full year"},
                {label:"REVENUE GROWTH",     value:"3×",    desc:"₹5.61Cr → ₹16.86Cr, FY25 to FY26"},
              ].map(v=>(
                <div key={v.label} style={{background:C.card,border:`1px solid ${C.crimsonB}`,padding:20,textAlign:"center",borderTop:`3px solid ${C.crimson}`}}>
                  <div style={{color:C.muted,fontSize:10,fontWeight:600,letterSpacing:"0.12em",marginBottom:8}}>{v.label}</div>
                  <div style={{fontSize:36,fontWeight:700,color:C.crimson,marginBottom:8}}>{v.value}</div>
                  <div style={{color:C.muted,fontSize:12}}>{v.desc}</div>
                </div>
              ))}
            </div>
            <div style={{background:C.card,border:`1px solid ${C.border}`,padding:24}}>
              <div style={{fontWeight:700,fontSize:12,marginBottom:16,letterSpacing:"0.05em"}}>OLD MODEL vs. DEVX AI LABS</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                <div>
                  <div style={{color:C.dim,fontSize:11,fontWeight:600,letterSpacing:"0.1em",marginBottom:10}}>TRADITIONAL IT SERVICES</div>
                  <Chk items={["Revenue scales 1:1 with headcount","Margin compresses as you add people","AI is a product feature, not an operating model","Clients pay for hours and presence"]} color={C.dim} icon="✕"/>
                </div>
                <div>
                  <div style={{color:C.crimson,fontSize:11,fontWeight:600,letterSpacing:"0.1em",marginBottom:10}}>DEVX AI LABS</div>
                  <Chk items={["Revenue scales faster than headcount","Margin improves as AI tooling compounds","AI is the delivery engine — non-negotiable","Clients pay for outcomes, milestones, ARR"]} color={C.crimson} icon="✓"/>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WHAT WE DO */}
        {s===3&&(
          <div>
            <SL text="WHAT WE DO"/>
            <H>Enterprise CX transformation<br/><span style={{color:C.crimson}}>across four pillars.</span></H>
            <P>We help mid-to-large enterprises transform customer experiences using AI — focused on retail, e-commerce, and consumer brands globally.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:18}}>
              {[
                {icon:"💬",label:"Customer Interactions",items:["Conversational AI & LLM-powered support","Agent productivity and CS automation tooling","Voice, chat, and post-order experience layers"]},
                {icon:"📣",label:"Marketing Automation",items:["AI-led CRM, loyalty & hyper-personalisation","WebEngage, CleverTap, CDPs — strategy to execution","Audience intelligence & campaign automation"]},
                {icon:"⚙️",label:"AI-Ops",items:["Agentic workflows across operations layers","Returns, OMS, WMS reconciliation & automation","AI-powered monitoring, alerting & resolution"]},
                {icon:"🏗️",label:"Enterprise Architecture",items:["Headless commerce & microservices modernisation","Cloud migrations — AWS-first, lift-and-shift","Deep integrations: SAP, OMS, WMS, ERP"]},
              ].map(p=>(
                <div key={p.label} style={{background:C.card,border:`1px solid ${C.border}`,padding:20,borderLeft:`3px solid ${C.crimson}`}}>
                  <div style={{fontSize:22,marginBottom:8}}>{p.icon}</div>
                  <div style={{fontWeight:700,fontSize:13,color:C.crimson,marginBottom:10,letterSpacing:"0.05em"}}>{p.label}</div>
                  {p.items.map(it=>(
                    <div key={it} style={{display:"flex",gap:8,marginBottom:6}}>
                      <span style={{color:C.crimson,fontSize:11,marginTop:1}}>›</span>
                      <span style={{color:C.muted,fontSize:12,lineHeight:1.5}}>{it}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[
                {label:"AWS Advanced Consulting Partner",icon:"☁️",sub:"Cloud architecture & migrations — primary infrastructure play"},
                {label:"Medusa + Fynd Partners",icon:"🔗",sub:"Headless commerce, OMS & retail stack partnerships"},
              ].map(p=>(
                <div key={p.label} style={{background:C.card2,border:`1px solid ${C.border}`,padding:14,display:"flex",gap:10,alignItems:"center"}}>
                  <span style={{fontSize:20}}>{p.icon}</span>
                  <div>
                    <div style={{fontWeight:700,fontSize:12}}>{p.label}</div>
                    <div style={{color:C.muted,fontSize:11,marginTop:2}}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DIAMOND MODEL */}
        {s===4&&(
          <div>
            <SL text="THE MODEL"/>
            <H>Diamond-shaped.<br/>Not tree-shaped.</H>
            <P>Traditional IT firms stack junior engineers at the base. devx AI labs inverts the ratio — the widest layer is intellectual capital. Engineers are fewer, AI-multiplied, structurally higher-value.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20}}>
              <OrgShape type="tree"/>
              <OrgShape type="diamond"/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
              {[
                {icon:"⚡",title:"Fewer builders",desc:"Each AI-native engineer ships 3–5× the output of a traditional peer."},
                {icon:"🔄",title:"Wider orchestration",desc:"Outcome Managers translate client intent into precise delivery briefs. No lost-in-translation margin loss."},
                {icon:"📈",title:"Margin compounds",desc:"As AI tooling improves, delivery cost drops. Margin expands without adding headcount."},
              ].map(v=>(
                <div key={v.title} style={{background:C.card,border:`1px solid ${C.border}`,padding:18,borderTop:`2px solid ${C.crimson}`}}>
                  <div style={{fontSize:20,marginBottom:8}}>{v.icon}</div>
                  <div style={{fontWeight:700,fontSize:12,color:C.crimson,marginBottom:6,letterSpacing:"0.05em"}}>{v.title}</div>
                  <p style={{color:C.muted,fontSize:12,margin:0,lineHeight:1.6}}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OUTCOME MANAGER */}
        {s===5&&(
          <div>
            <SL text="THE ORCHESTRATION LAYER"/>
            <H>The Outcome Manager:<br/><span style={{color:C.crimson}}>CEO of the engagement.</span></H>
            <P>Not a PM. Not a BA. A consulting-flavored orchestrator between client business intent and engineering delivery — AI handles the admin so they focus on judgment.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              <div style={{background:C.card,border:`1px solid ${C.crimsonB}`,padding:22,borderLeft:`3px solid ${C.crimson}`}}>
                <div style={{fontWeight:700,fontSize:12,color:C.crimson,marginBottom:14,letterSpacing:"0.08em"}}>WHAT THEY DO</div>
                <Chk items={[
                  "Translate client business problems into executable delivery plans",
                  "Write user stories, acceptance criteria, and sprint goals with AI",
                  "Own scope, timeline, quality, and client satisfaction end-to-end",
                  "Coordinate between Customer Success, AI Engineering, and client",
                  "Generate progress decks, risk registers, decision logs via AI",
                  "Act as the CEO of the engagement — not an order-taker",
                ]} color={C.crimson} icon="◆"/>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <div style={{background:C.card2,border:`1px solid ${C.border}`,padding:18}}>
                  <div style={{fontWeight:700,fontSize:13,marginBottom:10}}>Why this role is the moat</div>
                  <p style={{color:C.muted,fontSize:13,margin:0,lineHeight:1.7}}>
                    Most IT services firms lose margin at the handoff between client and delivery. The Outcome Manager eliminates that gap. AI automates their documentation — they spend time on judgment, not admin.
                  </p>
                </div>
                <div style={{background:C.crimsonD,border:`1px solid ${C.crimsonB}`,padding:18}}>
                  <div style={{fontWeight:700,fontSize:12,color:C.crimson,letterSpacing:"0.1em",marginBottom:12}}>THE RATIO THAT MATTERS</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                    {[
                      {label:"Orchestrators per Engineer",value:"1.5:1",sub:"More orchestrators than builders"},
                      {label:"AI-assisted documentation",value:"~80%",sub:"Less admin, more judgment"},
                    ].map(v=>(
                      <div key={v.label} style={{textAlign:"center"}}>
                        <div style={{fontSize:24,fontWeight:700,color:C.crimson}}>{v.value}</div>
                        <div style={{color:C.muted,fontSize:11,marginTop:4}}>{v.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{background:C.card2,border:`1px solid ${C.border}`,padding:18}}>
                  <div style={{fontWeight:700,fontSize:13,marginBottom:10}}>The difference</div>
                  <p style={{color:C.muted,fontSize:13,margin:0,lineHeight:1.7}}>
                    Traditional IT services have PMs who track tickets. devx AI labs Outcome Managers own business outcomes — they know the client's P&L, anticipate scope risks, and shape what engineering builds before a sprint starts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NORTH STAR */}
        {s===6&&(
          <div>
            <SL text="NORTH STAR METRIC"/>
            <H>Revenue per employee.<br/><span style={{color:C.crimson}}>Our only vanity-free metric.</span></H>
            <P>We don't optimise for headcount. RPE is the cleanest signal of AI leverage, delivery quality, and org efficiency — all in one number. 80 avg. employees, ₹16.86Cr FY26 revenue.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20}}>
              <div style={{background:C.card,border:`1px solid ${C.border}`,padding:22}}>
                <div style={{fontWeight:700,fontSize:11,color:C.dim,letterSpacing:"0.1em",marginBottom:16}}>RPE COMPARISON (₹L / EMPLOYEE / YEAR)</div>
                {[
                  {label:"Large Indian IT (TCS, Wipro)",rpe:"₹15L",pct:22,hi:false},
                  {label:"Mid-tier IT services",         rpe:"₹22L",pct:32,hi:false},
                  {label:"devx AI labs FY26 (80 emp.)",  rpe:"₹21.1L",pct:31,hi:true},
                  {label:"devx AI labs FY27 (150 emp.)", rpe:"₹42.3L",pct:62,hi:true},
                  {label:"devx AI labs FY28 target",     rpe:"₹74L+",  pct:100,hi:true},
                ].map((row,i)=>(
                  <div key={i} style={{marginBottom:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                      <span style={{color:row.hi?C.text:C.dim,fontSize:12,fontWeight:row.hi?700:400}}>{row.label}</span>
                      <span style={{color:row.hi?C.crimson:C.dim,fontWeight:700,fontSize:13}}>{row.rpe}</span>
                    </div>
                    <div style={{height:6,background:C.faint}}>
                      <div style={{height:"100%",width:`${row.pct}%`,background:row.hi?C.crimson:C.border}}/>
                    </div>
                  </div>
                ))}
                <div style={{marginTop:10,fontSize:11,color:C.dim}}>FY26 at mid-tier parity today. The gap widens fast as AI leverage compounds.</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <div style={{background:C.card2,border:`1px solid ${C.border}`,padding:18}}>
                  <div style={{fontWeight:700,fontSize:12,color:C.crimson,marginBottom:10,letterSpacing:"0.08em"}}>WHY RPE IS THE RIGHT METRIC</div>
                  <Chk items={[
                    "Captures AI leverage — more adoption = higher RPE",
                    "Exposes org bloat before it hits the P&L",
                    "Aligns incentives: grow revenue, not headcount",
                    "Metric top-quartile consulting firms benchmark against",
                  ]}/>
                </div>
                <div style={{background:C.card2,border:`1px solid ${C.border}`,padding:18}}>
                  <div style={{fontWeight:700,fontSize:13,marginBottom:14}}>RPE TRAJECTORY</div>
                  {[
                    {year:"FY26 actual", rpe:"₹21.1L",note:"80 avg. employees · profitable baseline"},
                    {year:"FY27 target", rpe:"₹42.3L",note:"150 people · GTM + AI tooling"},
                    {year:"FY28 target", rpe:"₹74L+",  note:"AI leverage compounding at scale"},
                  ].map((v,i)=>(
                    <div key={v.year} style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                      marginBottom:10,paddingBottom:10,borderBottom:`1px solid ${C.faint}`}}>
                      <div>
                        <div style={{fontWeight:700,fontSize:13,color:i===0?C.text:C.crimson}}>{v.year}</div>
                        <div style={{color:C.muted,fontSize:11,marginTop:2}}>{v.note}</div>
                      </div>
                      <div style={{fontSize:20,fontWeight:700,color:i===0?C.text:C.crimson}}>{v.rpe}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TRACTION */}
        {s===7&&(
          <div>
            <SL text="TRACTION"/>
            <H>3× revenue growth.<br/><span style={{color:C.crimson}}>Profitable. A strong client portfolio.</span></H>
            <P>Built on strong fundamentals. All revenue is recurring from FY26. Zero client churn. Brands across retail, beauty, fashion, F&B, and consumer goods.</P>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20}}>
              <Stat label="FY26 REVENUE"      value="₹16.86Cr" sub="3× FY25"/>
              <Stat label="FY26 GROSS MARGIN" value="52%"      sub="P&L actual" color={C.crimson}/>
              <Stat label="FY26 PBT"          value="₹6.24Cr" sub="37% net margin" color={C.crimson}/>
            </div>
            <div style={{background:C.card,border:`1px solid ${C.border}`,padding:20,marginBottom:14}}>
              <div style={{fontWeight:700,fontSize:12,letterSpacing:"0.08em",marginBottom:12}}>CLIENT PORTFOLIO</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                {CLIENTS.map(c=>(
                  <span key={c} style={{fontSize:11,padding:"4px 10px",border:`1px solid ${C.border}`,color:C.muted,background:C.card2}}>{c}</span>
                ))}
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[
                {label:"INTERNATIONAL REVENUE",value:"~10–15%",sub:"Growing organically — no dedicated sales hire"},
                {label:"AVG TEAM SIZE",value:"80 employees",sub:"Avg. over last 12 months"},
              ].map(v=>(
                <div key={v.label} style={{background:C.card2,border:`1px solid ${C.border}`,padding:14,borderLeft:`2px solid ${C.crimson}`}}>
                  <div style={{color:C.dim,fontSize:10,fontWeight:600,letterSpacing:"0.1em",marginBottom:6}}>{v.label}</div>
                  <div style={{fontSize:16,fontWeight:700,color:C.crimson,marginBottom:4}}>{v.value}</div>
                  <div style={{color:C.muted,fontSize:11}}>{v.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FINANCIALS */}
        {s===8&&(
          <div>
            <SL text="FINANCIALS"/>
            <H>Path to ₹460Cr.<br/><span style={{color:C.crimson}}>Built on recurring revenue.</span></H>
            <P>FY27 is the inflection year. GTM in Western markets, ₹110Cr ARR by exit rate, ₹23Cr PBT. FY28–29 are the leverage plays. All projections at ₹92/USD.</P>
            <div style={{background:C.card,border:`1px solid ${C.border}`,padding:20,marginBottom:14}}>
              <div style={{fontWeight:700,fontSize:12,letterSpacing:"0.08em",marginBottom:16}}>REVENUE (₹CR) — ACTUALS & PROJECTIONS</div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={projData} margin={{top:0,right:0,left:0,bottom:0}}>
                  <XAxis dataKey="year" tick={{fontSize:11,fill:C.muted,fontFamily:font}} axisLine={false} tickLine={false}/>
                  <YAxis tick={{fontSize:11,fill:C.muted,fontFamily:font}} axisLine={false} tickLine={false} tickFormatter={v=>`₹${v}Cr`}/>
                  <Tooltip contentStyle={{background:C.card2,border:`1px solid ${C.border}`,fontSize:12,fontFamily:font}} formatter={v=>[`₹${v}Cr`,"Revenue"]}/>
                  <Bar dataKey="rev" radius={[3,3,0,0]}>
                    {projData.map((d,i)=><Cell key={i} fill={d.clr}/>)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:14}}>
              {[
                {year:"FY25", rev:"₹5.61Cr",  note:"Actual", gm:"~42%", pbt:"—",       hi:false},
                {year:"FY26", rev:"₹16.86Cr", note:"Actual", gm:"52%",  pbt:"₹6.24Cr", hi:false},
                {year:"FY27E",rev:"₹63.5Cr",  note:"Target", gm:"52%+", pbt:"₹23Cr",   hi:true},
                {year:"FY28E",rev:"₹184Cr",   note:"Target", gm:"55%+", pbt:"—",        hi:true},
                {year:"FY29E",rev:"₹460Cr",   note:"Target", gm:"58%+", pbt:"—",        hi:true},
              ].map(v=>(
                <div key={v.year} style={{background:C.card2,borderTop:`2px solid ${v.hi?C.crimson:C.border}`,border:`1px solid ${C.border}`,padding:"12px 10px",textAlign:"center"}}>
                  <div style={{fontWeight:700,fontSize:11,color:v.hi?C.crimson:C.muted,marginBottom:4,letterSpacing:"0.05em"}}>{v.year}</div>
                  <div style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:4}}>{v.rev}</div>
                  <div style={{fontSize:10,color:C.dim,marginBottom:5}}>{v.note}</div>
                  <div style={{fontSize:10,color:v.hi?C.crimson:C.dim}}>GM: {v.gm}</div>
                  {v.pbt!=="—"&&<div style={{fontSize:10,color:C.crimson,marginTop:2}}>PBT: {v.pbt}</div>}
                </div>
              ))}
            </div>
            <div style={{background:C.crimsonD,border:`1px solid ${C.crimsonB}`,padding:14}}>
              <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
                {[
                  {label:"FY27 ARR EXIT RATE",value:"₹110Cr"},
                  {label:"FY27 PBT TARGET",value:"₹23Cr"},
                  {label:"REVENUE CAGR (FY26→FY29)",value:"~128%"},
                  {label:"GROSS MARGIN TRAJECTORY",value:"52% → 58%+"},
                ].map(v=>(
                  <div key={v.label} style={{flex:1,minWidth:120}}>
                    <div style={{color:C.dim,fontSize:10,fontWeight:600,letterSpacing:"0.1em",marginBottom:4}}>{v.label}</div>
                    <div style={{fontSize:18,fontWeight:700,color:C.crimson}}>{v.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MARKET */}
        {s===9&&(
          <div>
            <SL text="MARKET"/>
            <H>A $1.4Tn market being<br/><span style={{color:C.crimson}}>repriced by AI.</span></H>
            <P>The global IT services market grew for 30 years on one model. AI breaks every assumption. Leaders of the next decade won't be the largest — they'll be the most leveraged.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:20}}>
              {[
                {label:"GLOBAL IT SERVICES",value:"$1.4Tn",sub:"Total addressable, 2025"},
                {label:"AI TRANSFORMATION SERVICES",value:"$230Bn",sub:"Growing at 35% CAGR"},
                {label:"RETAIL & E-COM TECH",value:"$60Bn",sub:"Primary vertical focus"},
              ].map(v=>(
                <div key={v.label} style={{background:C.card,border:`1px solid ${C.border}`,padding:22,textAlign:"center",borderTop:`2px solid ${C.crimson}`}}>
                  <div style={{color:C.dim,fontSize:10,fontWeight:600,letterSpacing:"0.12em",marginBottom:8}}>{v.label}</div>
                  <div style={{fontSize:30,fontWeight:700,color:C.crimson,marginBottom:8}}>{v.value}</div>
                  <div style={{color:C.muted,fontSize:12}}>{v.sub}</div>
                </div>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              <div style={{background:C.card,border:`1px solid ${C.border}`,padding:20}}>
                <div style={{fontWeight:700,fontSize:12,letterSpacing:"0.08em",marginBottom:12}}>WHY WESTERN MARKETS, WHY NOW</div>
                <Chk items={[
                  "Western mid-market underserved — big IT is too slow and expensive",
                  "AI-native services is a new buying category incumbents can't claim",
                  "devx AI labs already has organic international revenue — no sales team",
                  "AWS partnership opens enterprise doors in North America & Europe",
                ]}/>
              </div>
              <div style={{background:C.card,border:`1px solid ${C.border}`,padding:20}}>
                <div style={{fontWeight:700,fontSize:12,letterSpacing:"0.08em",marginBottom:12}}>THE COMPETITIVE WINDOW</div>
                <Chk items={[
                  "Large IT firms (Infosys, Wipro) too slow to restructure delivery",
                  "Pure-play AI agencies lack enterprise delivery depth for big mandates",
                  "Boutique firms lack org infrastructure to scale past ₹85Cr",
                  "devx AI labs is designed for the intersection of all three from day 1",
                ]} color={C.crimson} icon="✓"/>
              </div>
            </div>
          </div>
        )}

        {/* USE OF FUNDS */}
        {s===10&&(
          <div>
            <SL text="USE OF FUNDS"/>
            <H>Two bets.<br/><span style={{color:C.crimson}}>One thesis.</span></H>
            <P>We're raising to take devx AI labs to Western markets with proper GTM infrastructure, and to build the AI research capability that becomes our long-term moat.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20}}>
              {[
                {icon:"🌍",label:"GTM — WESTERN MARKETS",pct:"60%",items:[
                  "Sales and pre-sales hires in US/UK — quota-carrying from day 1",
                  "AWS partner channel development in Western geographies",
                  "Thought leadership and analyst relations (Gartner, Forrester)",
                  "First 3 Western marquee client acquisitions",
                  "Target: ₹25Cr ARR from international clients by end of FY27",
                ]},
                {icon:"🧠",label:"AI RESEARCH — INTERNAL MOAT",pct:"40%",items:[
                  "Proprietary AI evaluation frameworks for delivery quality",
                  "LLM-powered tooling: requirements gen, sprint planning, test automation",
                  "AI IP across verticals — retail, CS, logistics, OMS automation",
                  "Publish research: builds brand, attracts top engineering talent",
                  "Target: 3 production-grade AI products clients pay for",
                ]},
              ].map(v=>(
                <div key={v.label} style={{background:C.card,border:`1px solid ${C.crimsonB}`,padding:24,borderTop:`3px solid ${C.crimson}`}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                    <span style={{fontSize:26}}>{v.icon}</span>
                    <div>
                      <div style={{fontWeight:700,fontSize:13,letterSpacing:"0.05em"}}>{v.label}</div>
                      <div style={{color:C.crimson,fontWeight:700,fontSize:12,marginTop:2}}>{v.pct} of round</div>
                    </div>
                  </div>
                  <Chk items={v.items} color={C.crimson} icon="◆"/>
                </div>
              ))}
            </div>
            <div style={{background:C.crimsonD,border:`1px solid ${C.crimsonB}`,padding:16}}>
              <div style={{fontWeight:700,fontSize:12,color:C.crimson,letterSpacing:"0.08em",marginBottom:8}}>SUCCESS IN 18 MONTHS</div>
              <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                {["International client base established","₹110Cr ARR at exit rate","2–3 proprietary AI products live","devx AI labs as the AI-native IT services category leader"].map(t=>(
                  <div key={t} style={{display:"flex",gap:6,alignItems:"center"}}>
                    <span style={{color:C.crimson}}>›</span>
                    <span style={{color:C.muted,fontSize:13}}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WHY NOW */}
        {s===11&&(
          <div>
            <SL text="WHY NOW"/>
            <H>The AI inflection is real.<br/><span style={{color:C.crimson}}>The window is 18 months.</span></H>
            <P>Three forces are converging. Miss the window and incumbents will bolt AI on convincingly enough. Move now, and the category is ours to define.</P>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:20}}>
              {[
                {icon:"⚡",label:"AI CAPABILITY LEAP",desc:"LLMs, coding agents, and agentic frameworks have crossed enterprise-readiness. What was experimental 18 months ago is production-grade today."},
                {icon:"💸",label:"ENTERPRISE BUYING SHIFT",desc:"CFOs are cutting IT vendor headcount costs and demanding outcome-based pricing. The traditional body-shop model is being actively de-selected."},
                {icon:"🏆",label:"CATEGORY IS STILL OPEN",desc:"No incumbent has credibly repositioned as AI-native in delivery. First-mover in Western markets with proof-of-execution wins the decade."},
              ].map(v=>(
                <div key={v.label} style={{background:C.card,border:`1px solid ${C.border}`,padding:22,borderTop:`2px solid ${C.crimson}`}}>
                  <div style={{fontSize:26,marginBottom:10}}>{v.icon}</div>
                  <div style={{fontWeight:700,fontSize:12,color:C.crimson,marginBottom:10,letterSpacing:"0.08em"}}>{v.label}</div>
                  <p style={{color:C.muted,fontSize:13,margin:0,lineHeight:1.7}}>{v.desc}</p>
                </div>
              ))}
            </div>
            <div style={{background:C.card,border:`1px solid ${C.border}`,padding:22,borderLeft:`3px solid ${C.crimson}`}}>
              <div style={{fontWeight:700,fontSize:12,letterSpacing:"0.08em",marginBottom:14}}>DEVX AI LABS RIGHT NOW</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                {[
                  {label:"PROOF OF MODEL",  value:"✓",        sub:"3× YoY growth, profitable"},
                  {label:"INTL. DEMAND",    value:"Organic",  sub:"International revenue, no dedicated sales hire"},
                  {label:"AI TOOLCHAIN",    value:"Live",     sub:"Running internally on every engagement today"},
                ].map(v=>(
                  <div key={v.label} style={{textAlign:"center",padding:"14px 8px",background:C.card2,border:`1px solid ${C.border}`}}>
                    <div style={{fontSize:18,fontWeight:700,color:C.crimson,marginBottom:4}}>{v.value}</div>
                    <div style={{fontWeight:700,fontSize:11,letterSpacing:"0.05em",marginBottom:4}}>{v.label}</div>
                    <div style={{color:C.muted,fontSize:10}}>{v.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{background:C.card,borderTop:`1px solid ${C.border}`,padding:"12px 48px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <button onClick={()=>go(-1)} disabled={s===0} style={{padding:"8px 20px",fontSize:12,fontWeight:600,letterSpacing:"0.05em",fontFamily:font,
          border:`1px solid ${C.border}`,cursor:s===0?"not-allowed":"pointer",background:"transparent",color:s===0?C.dim:C.text,opacity:s===0?0.4:1}}>← PREV</button>
        <div style={{textAlign:"center"}}>
          <div style={{color:C.dim,fontSize:11,letterSpacing:"0.1em"}}>{s+1} / {n} · <strong style={{color:C.text}}>{SLIDES[s].toUpperCase()}</strong></div>
          <div style={{display:"flex",gap:4,justifyContent:"center",marginTop:6}}>
            {SLIDES.map((_,i)=>(
              <div key={i} onClick={()=>setS(i)} style={{width:i===s?16:4,height:4,background:i===s?C.crimson:C.border,cursor:"pointer",transition:"width 0.2s"}}/>
            ))}
          </div>
        </div>
        <button onClick={()=>go(1)} disabled={s===n-1} style={{padding:"8px 20px",fontSize:12,fontWeight:600,letterSpacing:"0.05em",fontFamily:font,
          border:`1px solid ${s===n-1?C.border:C.crimson}`,cursor:s===n-1?"not-allowed":"pointer",
          background:s===n-1?"transparent":C.crimson,color:s===n-1?C.dim:"#fff",opacity:s===n-1?0.4:1}}>NEXT →</button>
      </div>
    </div>
  );
}