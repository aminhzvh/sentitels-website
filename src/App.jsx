import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  PhoneCall,
  Activity,
  AlertTriangle,
  Users,
  Building2,
  Database,
  ArrowRight,
  CheckCircle2,
  Radio,
  LineChart,
  Smartphone,
  Mail,
  History,
  Settings,
  Menu,
  X,
  Globe,
  Clock,
  PhoneOff,
  XCircle,
  RefreshCw,
  Brain,
  Mic,
  TrendingUp,
  BookOpen,
  BellOff,
} from "lucide-react";

const WEB_APP_LOGIN_URL = "https://app.sentitels.com/login";

const stats = [
  { value: "$39B", label: "Lost To Phone Scams Annually" },
  { value: "68M+", label: "Americans Targeted Every Year" },
  { value: "$1,480", label: "Average Victim Loss" },
  { value: "#1", label: "FTC's Top Fraud Category" },
];

const productSteps = [
  {
    icon: PhoneCall,
    title: "User Places A Call",
    text: "SentiTel starts with user-initiated outbound calls, giving context before the conversation begins.",
  },
  {
    icon: Radio,
    title: "Both Sides Are Captured",
    text: "The system streams both call tracks, separates caller and agent, and generates live transcripts.",
  },
  {
    icon: Activity,
    title: "AI Analyzes Scam Trajectory",
    text: "Fast analysis runs every 30 seconds, with deeper reasoning every 2 minutes for slow-burn scams.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Is Surfaced Before Harm",
    text: "The user sees risk score, scam stage, evidence, and intervention options before money or credentials are lost.",
  },
];

const advantages = [
  "Operates inside the live conversation, not just before the call connects",
  "Detects manipulation, urgency, remote access, OTP abuse, payment push, and isolation tactics",
  "Uses a cumulative trajectory score designed for multi-stage scam flows",
  "Builds a proprietary labeled scam-call dataset from real conversations",
  "Web product is already deployed; native iOS and Android apps are in beta and shared only with a small group of users",
];

const markets = [
  { icon: Users, title: "Consumers & Families", text: "Monthly protection for individuals, seniors, and caregiver-managed households." },
  { icon: Building2, title: "Banks & Credit Unions", text: "Fraud-prevention integration for customers at risk of scam-induced transfers." },
  { icon: Smartphone, title: "Carriers & MVNOs", text: "White-label scam protection bundled into mobile plans." },
  { icon: Database, title: "Dataset Licensing", text: "Long-term licensing of labeled scam-call data and risk intelligence." },
];

const roadmap = [
  { phase: "Now", title: "Working Web Platform", text: "Live VoIP calling, transcription, scam analysis, call history, and admin dashboard." },
  { phase: "Next", title: "Mobile App Beta", text: "iOS and Android apps are being tested with a small group of users while alerts and caregiver controls are refined." },
  { phase: "Then", title: "Enterprise Partnerships", text: "Banks, elder-care organizations, and mobile carriers as distribution channels." },
];

const APP_SCREENSHOT_ROWS = [
  {
    title: "Sample Call 1: IRS Impersonation",
    images: [
      "/app-screenshots/CAll1/IMG_0676.PNG",
      "/app-screenshots/CAll1/IMG_0679.PNG",
      "/app-screenshots/CAll1/IMG_0680.PNG",
      "/app-screenshots/CAll1/IMG_0681.PNG",
      "/app-screenshots/CAll1/IMG_0682.PNG",
      "/app-screenshots/CAll1/IMG_0683.PNG",
    ],
  },
  {
    title: "Sample Call 2: Microsoft Impersonation",
    images: [
      "/app-screenshots/CAll2/IMG_0684.PNG",
      "/app-screenshots/CAll2/IMG_0685.PNG",
      "/app-screenshots/CAll2/IMG_0686.PNG",
      "/app-screenshots/CAll2/IMG_0687.PNG",
      "/app-screenshots/CAll2/IMG_0688.PNG",
      "/app-screenshots/CAll2/IMG_0689.PNG",
      "/app-screenshots/CAll2/IMG_0690.PNG",
      "/app-screenshots/CAll2/IMG_0691.PNG",
    ],
  },
  {
    title: "Sample Call 3: Chase Bank Customer Service",
    images: [
      "/app-screenshots/CAll3/IMG_0692.PNG",
      "/app-screenshots/CAll3/IMG_0693.PNG",
    ],
  },
];

const dialRows = [
  [["1", ""], ["2", "ABC"], ["3", "DEF"]],
  [["4", "GHI"], ["5", "JKL"], ["6", "MNO"]],
  [["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"]],
  [["*", ""], ["0", "+"], ["#", ""]],
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SectionMotion({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

function PhoneShell({ label, children }) {
  return (
    <div className="w-[264px] flex-shrink-0">
      <div className="relative rounded-[46px] bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e] p-[10px] shadow-2xl ring-1 ring-black before:pointer-events-none before:absolute before:inset-0 before:rounded-[46px] before:bg-gradient-to-br before:from-white/10 before:to-transparent">
        <div className="relative flex h-[528px] flex-col overflow-hidden rounded-[38px] bg-[#070b12] text-[#e6edf3]">
          <div className="absolute left-1/2 top-[9px] z-20 h-[26px] w-[86px] -translate-x-1/2 rounded-[14px] bg-black" />
          <div className="flex flex-shrink-0 items-center justify-between px-[22px] pb-1 pt-3 text-[11px] font-semibold text-[#e6edf3]">
            <span className="text-[13px] font-bold">3:15</span>
            <span aria-hidden="true">📶 🔋</span>
          </div>
          {children}
          <div className="absolute bottom-2 left-1/2 h-1 w-[90px] -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="mt-[18px] text-center text-xs font-medium tracking-[0.2px] text-slate-300">{label}</div>
    </div>
  );
}

function TopNav({ title, back = "‹ MainTabs" }) {
  return (
    <div className="flex flex-shrink-0 items-center justify-between border-b border-[#242a33] bg-[#151922] px-4 py-2.5">
      <span className="w-20 truncate text-[13px] text-slate-200">{back}</span>
      <span className="text-[15px] font-bold text-[#e6edf3]">{title}</span>
      <span className="w-20" />
    </div>
  );
}

function TabBar({ active = "Protect" }) {
  const items = [
    { icon: ShieldCheck, label: "Protect" },
    { icon: History, label: "Recent" },
    { icon: Users, label: "Family" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex flex-shrink-0 border-t border-[#30363d] bg-[#151922] pb-[18px] pt-2">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-1">
          <Icon aria-hidden="true" className={`h-4 w-4 ${active === label ? "text-[#238636]" : "text-slate-300"}`} />
          <span className={`text-[11px] tracking-wide ${active === label ? "font-bold text-[#238636]" : "text-slate-300"}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Dialpad() {
  return (
    <div className="flex flex-shrink-0 flex-col gap-3 px-6 pt-1 select-none">
      {dialRows.map((row, idx) => (
        <div key={idx} className="flex justify-between">
          {row.map(([digit, sub]) => (
            <div
              key={`${digit}-${sub}`}
              className="flex h-[58px] w-[58px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#151920] transition-colors hover:bg-[#21262d]"
            >
              <span className="text-[22px] font-light leading-tight text-[#e6edf3]">{digit}</span>
              <span className="text-[8px] font-semibold leading-none tracking-[1.2px] text-slate-400">{sub || " "}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function DialScreen({ identified = false }) {
  return (
    <PhoneShell label={identified ? "Business Identified" : "Dial Screen"}>
      <TopNav title="Dial" />
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex h-[36px] flex-shrink-0 items-center justify-center px-4 pt-2">
          {identified ? (
            <span className="text-[13px] font-bold text-[#e6edf3]">Bank Of America</span>
          ) : (
            <span className="text-[11px] italic text-slate-300">Enter A Number To Dial</span>
          )}
        </div>
        <div className="flex min-h-[58px] flex-shrink-0 items-center justify-center px-4 py-1">
          <span className={`whitespace-nowrap ${identified ? "text-[25px] text-[#e6edf3]" : "text-[28px] text-slate-300"} font-extralight tracking-[0.4px]`}>
            {identified ? "+1 (800) 432-1000" : "+1"}
          </span>
          {identified && <span className="ml-2.5 text-lg text-slate-300">⌫</span>}
        </div>
        <Dialpad />
        <div className="mt-3 flex flex-shrink-0 justify-center pb-2">
          <button
            type="button"
            aria-label={identified ? "Start call" : "Start call unavailable until a number is entered"}
            className={`flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#238636] text-[22px] transition-transform active:scale-95 ${identified ? "cursor-pointer" : "opacity-35 cursor-not-allowed"}`}
            disabled={!identified}
          >
            📞
          </button>
        </div>
      </div>
      <TabBar />
    </PhoneShell>
  );
}

function CallHeader({ company, number, time, badge, badgeType = "green" }) {
  const badgeClass = badgeType === "green"
    ? "border-[#238636]/40 bg-[#238636]/10 text-[#3fb950]"
    : badgeType === "red"
      ? "border-[#f85149]/40 bg-[#f85149]/10 text-[#f85149]"
      : "border-[#d29922]/40 bg-[#d29922]/10 text-[#d29922]";

  return (
    <div className="flex flex-shrink-0 items-start px-3.5 pb-1.5 pt-2.5">
      <span className="w-[26px] text-sm text-slate-300">✕</span>
      <div className="flex flex-1 flex-col items-center">
        <span className="text-base font-bold text-[#e6edf3]">{company}</span>
        {badge && <div className={`mt-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badgeClass}`}>{badge}</div>}
        <span className="mt-0.5 whitespace-nowrap text-xs text-slate-300">{number}</span>
        <span className="mt-0.5 text-[15px] font-light text-[#e6edf3]">{time}</span>
      </div>
      <div className="w-[26px]" />
    </div>
  );
}

function ScoreRing({ score, color = "#238636", stage, label = "Looks Good" }) {
  const offset = 251.2 - (251.2 * score) / 100;
  return (
    <div className="flex flex-shrink-0 justify-center px-0 py-3">
      <div className="relative">
        <svg viewBox="0 0 100 100" width="128" height="128">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#21262d" strokeWidth="8" />
          <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 50 50)" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {!stage && <span className="mb-0.5 text-[11px] text-slate-300">{label}</span>}
          <span className="text-[38px] font-black leading-none" style={{ color }}>{score}</span>
          <span className="mt-1 text-xs text-slate-300">/100</span>
          {stage && <span className="mt-2 rounded-full px-2.5 py-1 text-[10px] font-bold leading-none text-white" style={{ backgroundColor: color }}>{stage}</span>}
        </div>
      </div>
    </div>
  );
}

function MockCard({ title, children }) {
  return (
    <div className="mx-3 mb-2 flex-shrink-0 rounded-[12px] border border-[#30363d] bg-[#151920] px-3 py-2.5">
      {title && <div className="mb-1.5 text-[10px] uppercase tracking-[1.1px] text-slate-400">{title}</div>}
      <div className="text-xs leading-normal text-[#e6edf3] break-words line-clamp-5">{children}</div>
    </div>
  );
}

function Controls() {
  return (
    <div className="flex flex-shrink-0 items-center justify-around border-t border-[#30363d] bg-[#070b12] px-0 pb-3 pt-3 select-none">
      <div className="flex flex-col items-center gap-0.5"><span className="text-xl">🎤</span><span className="text-xs text-slate-300">Mute</span></div>
      <button type="button" aria-label="End call" className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#ef4444] text-[24px] transition-transform active:scale-95">📵</button>
      <div className="flex flex-col items-center gap-0.5"><span className="text-xl">🔊</span><span className="text-xs text-slate-300">Speaker</span></div>
    </div>
  );
}

function MonitoringScreen() {
  return (
    <PhoneShell label="Active Call: Monitoring">
      <div className="flex flex-1 flex-col overflow-hidden">
        <CallHeader company="Bank Of America" number="+18004321000" time="00:48" badge="✓ Greeting Matches" />
        <ScoreRing score={0} color="#238636" stage="Benign" />
        <div className="mx-3 mb-2 rounded-lg border border-[#238636]/35 px-2.5 py-1.5 text-center text-xs font-semibold text-[#3fb950]">→ Stable</div>
        <MockCard>
          The call is user-initiated to a verified Bank Of America number, and the IVR greeting confirms the expected organization.
        </MockCard>
        <MockCard title="Live Transcript">
          <div className="font-mono text-[11px] leading-relaxed text-slate-300 truncate">[00:15] Agent: Welcome to Bank Of America.</div>
          <div className="font-mono text-[11px] leading-relaxed text-slate-300 truncate">[00:18] Agent: This call may be recorded.</div>
        </MockCard>
      </div>
      <Controls />
    </PhoneShell>
  );
}

function ElevatedRiskScreen() {
  return (
    <PhoneShell label="Risk Elevated: Live Signals">
      <div className="flex flex-1 flex-col overflow-hidden">
        <CallHeader company="Unverified Number" number="+1 (800) 772-1213" time="1:47" badge="~ Possible Variation" badgeType="amber" />
        <div className="origin-top scale-[0.92]">
          <ScoreRing score={64} color="#9a6700" stage="Elevated" />
        </div>
        <div className="mx-3 mb-2 rounded-lg border border-[#9a6700]/40 px-2.5 py-1.5 text-center text-xs font-semibold text-[#d29922]">↑ Risk Is Increasing</div>
        <MockCard title="Analysis">Caller is using urgency and identity verification under threat of legal action.</MockCard>
        <MockCard title="Active Risk Signals">
          <div className="flex flex-wrap gap-1">
            {["Urgency", "Identity Verification", "Govt Impersonation"].map((chip) => (
              <span key={chip} className="rounded-full border border-[#9a6700]/50 px-1.5 py-0.5 text-[10px] font-semibold text-[#d29922] whitespace-nowrap">{chip}</span>
            ))}
          </div>
        </MockCard>
      </div>
      <Controls />
    </PhoneShell>
  );
}

function ScamAlertScreen() {
  return (
    <PhoneShell label="🚨 Scam Alert">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div className="opacity-35">
          <CallHeader company="Unverified Caller" number="+1 (628) 555-0147" time="3:21" />
          <ScoreRing score={82} color="#f85149" stage="High Risk" />
        </div>
        <div className="absolute inset-0 z-30 flex items-end rounded-[38px] bg-black/65">
          <div className="w-full rounded-t-[20px] border border-b-0 border-[#f85149]/50 bg-[#161b22] px-[18px] pb-[30px] pt-[18px]">
            <div className="mb-1 text-center text-2xl">🚨</div>
            <div className="mb-1.5 text-center text-[17px] font-extrabold text-[#f85149]">Likely Scam</div>
            <div className="mb-2.5 text-center text-xs leading-normal text-slate-300">Do not send money, share codes, or install anything.</div>
            {["Identity Not Verified", "Threat / Pressure Language", "Unusual Payment Request"].map((risk) => (
              <div key={risk} className="mb-1 flex items-center gap-1.5">
                <span className="text-xs text-[#f85149]">●</span>
                <span className="text-xs text-[#e6edf3] truncate">{risk}</span>
              </div>
            ))}
            <button type="button" aria-label="Hang up now" className="mt-3 w-full rounded-[10px] bg-[#f85149] p-3 text-center text-xs font-bold text-white transition-transform active:scale-95">Hang Up Now</button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}

function GreetingMismatchScreen() {
  return (
    <PhoneShell label="⚠ Greeting Mismatch">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div className="opacity-35">
          <CallHeader company="Unknown Number" number="+1 (800) 432-1000" time="0:58" badge="⚠ Caller Claimed BoA" badgeType="red" />
        </div>
        <div className="absolute inset-0 z-30 flex items-end rounded-[38px] bg-black/65">
          <div className="w-full rounded-t-[20px] border border-b-0 border-[#e3b341]/50 bg-[#161b22] px-[18px] pb-[30px] pt-[18px]">
            <div className="mb-1 text-center text-3xl">⚠️</div>
            <div className="mb-1.5 text-center text-[16px] font-extrabold text-[#e3b341]">Greeting Didn't Match</div>
            <div className="mb-2.5 text-center text-[11px] leading-normal text-slate-300 line-clamp-3">The caller claimed Bank Of America, but the number could not be verified.</div>
            <button type="button" aria-label="Hang up now" className="mt-3 w-full rounded-[10px] bg-[#f85149] p-3 text-center text-xs font-bold text-white transition-transform active:scale-95">Hang Up Now</button>
            <button type="button" className="mt-2 w-full p-1 text-center text-xs font-semibold text-slate-300">I'll Be Careful</button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}

function HistoryScreen() {
  const calls = [
    ["8332695802", "High Risk", "2026/05/20 10:05", 75, "#f85149"],
    ["3852998143", "High Risk", "2026/05/16 13:53", 60, "#f85149"],
    ["+18004321000", "Suspicious", "2026/04/14 24/19", 60, "#9a6700"],
    ["Unknown Number", "Trust Building", "2026/04/13 14/38", 70, "#8b949e"],
  ];

  return (
    <PhoneShell label="Call History">
      <TopNav title="Call History" />
      <div className="flex-1 overflow-hidden px-3 pt-3">
        {calls.map(([num, status, time, score, color]) => (
          <div key={`${num}-${time}`} className="mb-2 flex items-center justify-between rounded-xl border border-[#30363d] bg-[#151920] px-3 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold" style={{ borderColor: color, color }}>{score}</div>
              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-[#e6edf3]">{num}</div>
                <div className="text-[11px] text-slate-400">{time}</div>
                <div className="mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold" style={{ borderColor: color, color }}>{status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TabBar active="Recent" />
    </PhoneShell>
  );
}

function DetailScreen() {
  return (
    <PhoneShell label="Call Detail: Analysis">
      <TopNav title="Call Detail" />
      <div className="flex-shrink-0 border-b border-[#30363d] px-3.5 pb-2 pt-1.5">
        <div className="text-sm font-bold text-[#e6edf3]">8332695802</div>
        <div className="mt-0.5 text-xs text-slate-300">2026-05-20 10-05-15</div>
      </div>
      <div className="flex flex-shrink-0 border-b border-[#30363d] bg-[#161b22]">
        <div className="flex-1 border-b-2 border-[#238636] p-2 text-center text-xs font-semibold text-[#238636]">Analysis</div>
        <div className="flex-1 p-2 text-center text-xs font-semibold text-slate-300">Transcript</div>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="mx-3 my-3 flex flex-col items-center rounded-xl border border-[#f85149] bg-[#161b22] p-4">
          <div className="text-[56px] font-black leading-none text-[#f85149]">75</div>
          <div className="text-xs text-slate-300">/100</div>
          <div className="mt-2 rounded-full bg-[#f85149] px-3 py-1 text-xs font-bold text-white">High Risk</div>
        </div>
        <MockCard title="Identified Business">Medicare and Medicaid support</MockCard>
        <MockCard title="Analysis">The agent repeatedly offers a free medical alert system, which is inconsistent with government operations.</MockCard>
        <MockCard title="Risk Signals Detected">
          <div>● Cannot Verify Identity</div>
          <div>● Contact Info Mismatch</div>
          <div>● Topic Mismatch</div>
        </MockCard>
      </div>
    </PhoneShell>
  );
}

// Active image = 360px wide (10% smaller than 400)
const IMG_W = 360;
const IMG_H = Math.round(IMG_W * (956 / 440)); // ≈ 782

// x positions scaled proportionally
const CAROUSEL_SLOTS = [
  { offset: -2, x: -594, scale: 0.55, opacity: 0.38, blur: 2,   z: 3 },
  { offset: -1, x: -338, scale: 0.76, opacity: 0.70, blur: 0.5, z: 6 },
  { offset:  0, x:    0, scale: 1.00, opacity: 1.00, blur: 0,   z: 10 },
  { offset:  1, x:  338, scale: 0.76, opacity: 0.70, blur: 0.5, z: 6 },
  { offset:  2, x:  594, scale: 0.55, opacity: 0.38, blur: 2,   z: 3 },
];

// Slide variants for the active image swap
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.94 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:  (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.94 }),
};

function ScreenshotCarousel({ images }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const len = images.length;

  const go = (dir) => {
    setDirection(dir);
    setActive((i) => (i + dir + len) % len);
  };

  const jumpTo = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <div className="relative select-none py-4">
      {/* Stage: arrows live here so top-1/2 centers on the images */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: IMG_H + 32 }}
      >
        {/* Arrow buttons: SVG chevrons for pixel-perfect centering */}
        {len > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 hover:bg-white/10 transition-colors"
              style={{ width: 42, height: 42 }}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 3.5L5.5 9L11 14.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 hover:bg-white/10 transition-colors"
              style={{ width: 42, height: 42 }}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 3.5L12.5 9L7 14.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {CAROUSEL_SLOTS.map(({ offset, x, scale, opacity, blur, z }) => {
          const idx = ((active + offset) % len + len) % len;
          const takenByCloser = CAROUSEL_SLOTS
            .filter((s) => Math.abs(s.offset) < Math.abs(offset))
            .some((s) => ((active + s.offset) % len + len) % len === idx);
          if (takenByCloser && offset !== 0) return null;

          const isActive = offset === 0;

          return (
            <motion.div
              key={`slot${offset}`}
              animate={{ x, scale, opacity, filter: `blur(${blur}px)` }}
              transition={{ type: "spring", stiffness: 320, damping: 34, mass: 0.75 }}
              style={{ position: "absolute", zIndex: z, cursor: isActive ? "default" : "pointer" }}
              onClick={() => !isActive && jumpTo(idx)}
            >
              <div
                style={{
                  width: IMG_W,
                  height: IMG_H,
                  borderRadius: 30,
                  overflow: "hidden",
                  border: isActive
                    ? "1.5px solid rgba(255,255,255,0.20)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isActive
                    ? "0 40px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.05)"
                    : undefined,
                }}
              >
                {/* Active image: AnimatePresence gives explicit directional slide */}
                {isActive ? (
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                      key={active}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.28, ease: [0.32, 0, 0.67, 0] }}
                      draggable={false}
                      src={images[active]}
                      alt=""
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover", display: "block",
                        imageRendering: "-webkit-optimize-contrast",
                        willChange: "transform",
                      }}
                    />
                  </AnimatePresence>
                ) : (
                  <img
                    src={images[idx]}
                    alt=""
                    draggable={false}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots + counter */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
        <p className="text-xs text-slate-500">{active + 1} / {len}</p>
      </div>
    </div>
  );
}

function AppScreenshotsSection() {
  return (
    <SectionMotion className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">iOS App</p>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
          See It In Action.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Real screenshots from the iOS beta. Running live on iPhone.
        </p>
      </motion.div>

      <div className="space-y-8">
        {APP_SCREENSHOT_ROWS.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: rowIdx * 0.1, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 pt-6 pb-4"
          >
            <p className="mb-2 text-lg font-semibold text-slate-300">{row.title}</p>
            <ScreenshotCarousel images={row.images} />
          </motion.div>
        ))}
      </div>
    </SectionMotion>
  );
}

function ProductMockupPreview() {
  const groups = [
    {
      title: "Before The Call",
      subtitle: "The user starts with a familiar dial experience, but SentiTel checks what it can before the call begins.",
      phones: [<DialScreen key="dial-empty" />, <DialScreen key="dial-found" identified />],
    },
    {
      title: "During The Call",
      subtitle: "Once connected, the app monitors the conversation for live scam signals without interrupting normal calls.",
      phones: [<MonitoringScreen key="monitor" />, <ElevatedRiskScreen key="risk" />],
    },
    {
      title: "Alerts & Warnings",
      subtitle: "When risk increases, the user gets a clear warning and a simple action before sharing money, codes, or access.",
      phones: [<ScamAlertScreen key="alert" />, <GreetingMismatchScreen key="greeting" />],
    },
    {
      title: "Call History & Analysis",
      subtitle: "After the call, users can review risk score, evidence, transcript context, and prior calls in one place.",
      phones: [<HistoryScreen key="history" />, <DetailScreen key="detail" />],
    },
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#060a10] px-3 py-10 shadow-2xl shadow-black/40 sm:px-4 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#FF8200]">🛡 SentiTel</div>
        <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-[44px]">AI Scam Detection<br /><span className="bg-gradient-to-r from-[#FF8200] to-[#FF8200] bg-clip-text text-transparent">During Every Call</span></h3>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-slate-300">Real-time risk scoring, live transcription, and instant alerts, running silently in the background while you talk.</p>
      </motion.div>

      <div className="mt-14 space-y-10">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 md:p-8"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <motion.div variants={itemVariants} className="lg:pr-4">
                <div className="absolute right-6 top-6 text-6xl font-medium leading-none text-white">{groupIndex + 1}</div>
                <h4 className="text-3xl font-black tracking-tight text-white">{group.title}</h4>
                <p className="mt-4 text-base leading-7 text-slate-300">{group.subtitle}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-7 px-0 pb-2 sm:flex-row sm:flex-wrap sm:px-2">
                {group.phones}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SentiTelStartupWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    ["Product", "product"],
    ["Progress", "traction"],
    ["Market", "market"],
    ["Snapshot", "application"],
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen scroll-smooth bg-[#000516] text-white selection:bg-[#FF8200] selection:text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-[#FF8200]/20 blur-3xl" />
        <div className="absolute top-96 -left-48 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-6 sm:py-6" onKeyDown={(event) => event.key === "Escape" && setMobileMenuOpen(false)}>
        <div className="flex min-w-0 items-center gap-3">
          <img src="/sentitel-icon.png" alt="SentiTel" className="h-[60px] w-[60px] flex-shrink-0 object-contain" />
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight sm:text-lg">Senti<span className="text-[#FF8200]">Tel</span></p>
            <p className="truncate text-[11px] text-slate-300 sm:text-xs">AI Security For Live Phone Calls</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map(([label, href]) => (
            <button key={label} type="button" onClick={() => scrollToSection(href)} className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8200]">
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={WEB_APP_LOGIN_URL} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#FF8200] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#e57400] active:scale-95 md:inline-flex">Web App Login</a>
          <a href="mailto:Amin@Sentitels.com?subject=SentiTel%20Investment%20Inquiry" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#FF8200]/15 active:scale-95 sm:inline-flex">Contact Founder</a>
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation-menu" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} id="mobile-navigation-menu" role="menu" className="absolute left-4 right-4 top-[76px] z-30 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl shadow-black/40 backdrop-blur md:hidden">
            <div className="grid gap-1">
              {navLinks.map(([label, href]) => (
                <button key={label} type="button" onClick={() => scrollToSection(href)} className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10">{label}</button>
              ))}
              <a href={WEB_APP_LOGIN_URL} target="_blank" rel="noreferrer" className="mt-2 rounded-xl bg-[#FF8200] px-4 py-3 text-center text-sm font-bold text-white">Web App Login</a>
              <a href="mailto:Amin@Sentitels.com?subject=SentiTel%20Investment%20Inquiry" className="rounded-xl bg-[#FF8200] px-4 py-3 text-center text-sm font-bold text-white">Contact Founder</a>
            </div>
          </motion.div>
        )}
      </nav>

      <SectionMotion className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[3fr_2fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF8200]/30 bg-[#FF8200]/10 px-4 py-2 text-sm text-[#FF8200]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#FF8200]" />
            Working Web App · iOS App In Testing · Seed Stage · Raleigh, NC
          </div>
          <h1 className="text-left text-[28px] font-black leading-[1.13] tracking-tight text-white sm:text-[36px] md:text-[50px] lg:text-[64px]">
            <span className="block">Real-Time</span>
            <span className="block text-[1.06em] text-[#FF8200]">AI Protection</span>
            <span className="block">Against Phone Scams.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
            SentiTel listens to both sides of a call as it happens. AI analyzes the conversation in real time, detects scam tactics and social engineering, and warns users before money, credentials, or device access are lost.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:Amin@Sentitels.com?subject=SentiTel%20demo%20request" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF8200] px-7 py-4 font-semibold text-white shadow-xl shadow-[#FF8200]/20 transition hover:bg-[#FF8200] active:scale-95">
              Request Investor Access <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <button type="button" onClick={() => scrollToSection("application")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10 active:scale-95">View Startup Snapshot</button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 border-b border-white/10 pb-4">
                <p className="text-sm text-slate-300">Live Call Risk Pipeline</p>
                <p className="whitespace-nowrap text-xl font-bold">Tech Support + Remote Access Scam</p>
                <div className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f85149]/15 px-4 py-2 text-sm font-bold text-[#f85149]">Scam Score: 98</div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-800/80 p-4">
                  <div className="mb-2 text-sm">
                    <span className="font-semibold text-[#f85149]">Scam Stage: Remote Access Push</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-[98%] rounded-full bg-[#f85149]" /></div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[["Remote Access", "AnyDesk directed"], ["Fake Transaction", "Crypto / Bitcoin"], ["Isolation Tactics", "Present"], ["Scripted Behavior", "Present"]].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-slate-300">{label}</p>
                      <p className="mt-1 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-yellow-300"><PhoneOff className="h-4 w-4 flex-shrink-0" />Caller ID Mismatch</p>
                  <p className="mt-[2.5px] text-xs leading-relaxed text-slate-300">Number claiming PayPal affiliation does not match any known PayPal contact number</p>
                </div>
                <div className="rounded-2xl border border-[#f85149]/20 bg-[#f85149]/10 p-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-[#f85149]"><Clock className="h-[18px] w-[18px] flex-shrink-0" />Caught at 2:07</p>
                  <p className="mt-[2.5px] text-xs italic leading-relaxed text-slate-300">"Okay, then open the Google, just double click on, go to anydesk.com."</p>
                </div>
              </div>
          </div>
        </motion.div>
        </div>
      </SectionMotion>

      <SectionMotion id="stats" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 pb-5 pt-5 sm:px-6 sm:pb-7 sm:pt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-[#FF8200]/25 bg-slate-900/70 px-4 py-6 text-center">
              <p className="text-3xl font-black text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 whitespace-nowrap text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionMotion>

      <SectionMotion className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="whitespace-nowrap text-2xl font-bold tracking-tight">The Paradigm Shift In Threat Detection</h2>
            <p className="mt-2 text-base leading-7 text-slate-300">How SentiTel transitions defense directly into the active transaction layer.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of legacy scam filtering capabilities with SentiTel live call protection capabilities.</caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-4 text-base font-bold text-slate-300">Capability</th>
                  <th className="p-4 text-base font-bold text-slate-300">Legacy Databases & Filtering</th>
                  <th className="p-4 text-base font-bold text-[#FF8200]">SentiTel Live Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr><td className="p-4 font-medium text-white">Analysis Framework</td><td className="p-4">Pre-connect reputation checks only. Misses numbers rotated hourly.</td><td className="p-4 font-medium text-[#FF8200]">Continuous live semantic evaluation during conversations.</td></tr>
                <tr><td className="p-4 font-medium text-white">Signal Recognition</td><td className="p-4">Spoofed metadata lookup and known Caller ID blacklists.</td><td className="p-4 font-medium text-[#FF8200]">Social engineering indicators such as pressure tactics and isolation mechanisms.</td></tr>
                <tr><td className="p-4 font-medium text-white">Risk Architecture</td><td className="p-4">Static flagging or generic robocall warning banners.</td><td className="p-4 font-medium text-[#FF8200]">Dynamic 0–100 sequential trajectory scaling models.</td></tr>
                <tr><td className="p-4 font-medium text-white">Scan Cadence</td><td className="p-4">No active monitoring once call connects.</td><td className="p-4 font-medium text-[#FF8200]">Full conversation re-analyzed every 60 seconds, risk score never resets.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionMotion>

      <SectionMotion id="product" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">How It Works</p>
          <h2 className="whitespace-nowrap text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Protection That Starts During The Conversation.</h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">SentiTel works like any calling platform, with an intelligent safety layer built for unknown entities.
            Instead of relying on caller reputation alone, the engine monitors active operational intent in real time.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-[#FF8200]"><Icon aria-hidden="true" className="h-7 w-7" /></div>
                  <p className="text-6xl font-medium leading-none text-white">{index + 1}</p>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </div>
            );
          })}
        </div>
      </SectionMotion>


      <SectionMotion className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Scammers Don't Win With Phone Numbers.<br />They Win With <span className="text-[#FF8200]">Conversations.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 whitespace-nowrap">
            Caller ID apps can flag numbers. SentiTel analyzes the live conversation, where manipulation, urgency, OTP abuse, remote access, and payment pressure actually happen.
          </p>
        </div>

        {/* Three-column comparison */}
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: Current Tools */}
          <div className="rounded-[2rem] border border-white/10 bg-[#000516] p-8">
            <div className="mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-slate-400" />
                <p className="text-3xl font-black text-slate-400">Current Tools</p>
              </div>
            </div>
            <h3 className="mb-7 text-3xl font-black">Stop At Caller ID</h3>
            <div className="space-y-5">
              {[
                [Database,   "Static Databases",                    "Outdated and easily bypassed"],
                [PhoneOff,   "Pre-Call Screening Only",             "No visibility once the call connects"],
                [RefreshCw,  "Miss New Or Rotated Numbers",         "Scammers change numbers daily"],
                [Brain,      "Cannot Understand Live Manipulation", "No insight into what's being said"],
                [BellOff,   "Cannot Intervene In Real Time",       "No warning once manipulation starts"],
              ].map(([Icon, title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-7 w-7 flex-shrink-0 text-slate-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: The Gap */}
          <div className="flex flex-col items-center justify-center gap-3 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF8200]">The Gap</p>
            <AlertTriangle className="h-14 w-14 text-[#FF8200]" />
            <div className="my-1 flex items-center gap-3 text-[#FF8200]">
              <ArrowRight className="h-8 w-8 flex-shrink-0" />
              <p className="text-xl font-black leading-snug text-white">No protection<br />during the<br />conversation.</p>
              <ArrowRight className="h-8 w-8 flex-shrink-0" />
            </div>
            <p className="text-xs leading-relaxed text-slate-400">This is where scams happen<br />and victims lose everything.</p>
          </div>

          {/* Right: SentiTel */}
          <div className="rounded-[2rem] border border-[#FF8200]/40 bg-[#000516] p-8">
            <div className="mb-6 border-b border-[#FF8200]/20 pb-4">
              <div className="flex items-center gap-2">
                <img src="/sentitel-icon.png" className="h-8 w-8 object-contain" alt="" />
                <p className="text-3xl font-black"><span className="text-white">Senti</span><span className="text-[#FF8200]">Tel</span></p>
              </div>
            </div>
            <h3 className="mb-7 text-3xl font-black">Real-Time Protection</h3>
            <div className="space-y-5">
              {[
                [Mic,         "Live Conversation Analysis",    "Understands what is being said, not just the number"],
                [Activity,    "Behavioral Scam Detection",     "Flags manipulation, urgency, OTP abuse, and more"],
                [TrendingUp,  "Cumulative Scam Trajectory",    "Tracks multi-stage scam progression across the call"],
                [BookOpen,    "Proprietary Scam Dataset",      "Learns from real scam-call behavior"],
                [Smartphone,  "Live Today, Mobile Next",       "Web platform is live; native iOS and Android apps are in beta"],
              ].map(([Icon, title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-7 w-7 flex-shrink-0 text-[#FF8200]" />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-[#FF8200]/30 bg-[#FF8200]/10 px-6 py-4">
          <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#FF8200]" />
          <p className="text-sm text-white">SentiTel <span className="font-bold text-[#FF8200]">understands</span> what's being said — <span className="font-bold text-[#FF8200]">before it's too late.</span></p>
        </div>

      </SectionMotion>

      <AppScreenshotsSection />

      <SectionMotion id="traction" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">Progress</p>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">Working System.<br />Real Data.<br />Clear Next Step.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-2">
            {[
              [Globe,      "Live Platform",       "End-to-end web system functional and deployed."],
              [Activity,   "Real-Time Pipeline",  "VoIP execution, dual-track recording processing, and automated threat mapping."],
              [ShieldCheck,"Privacy-First Design", "Designed to minimize sensitive data retention and reduce unnecessary storage exposure."],
              [Smartphone, "Mobile App Beta",     "iOS and Android apps are currently being tested with a small group of users."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <Icon aria-hidden="true" className="mb-5 h-7 w-7 text-[#FF8200]" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionMotion>

      <SectionMotion id="market" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">Market & Business Model</p>
          <h2 className="whitespace-nowrap text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">A Consumer Wedge With Enterprise-Scale Distribution.</h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">SentiTel starts with consumers and caregivers, then expands through banks, elder-care organizations, and mobile carriers.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {markets.map((market) => {
            const Icon = market.icon;
            return (
              <div key={market.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <Icon aria-hidden="true" className="mb-5 h-7 w-7 text-[#FF8200]" />
                <h3 className="text-xl font-bold text-white">{market.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{market.text}</p>
              </div>
            );
          })}
        </div>
      </SectionMotion>

      <SectionMotion id="application" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 items-stretch lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">Startup Snapshot</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Built For Accelerator,<br />Investor, And Partner Review.</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">A focused snapshot of the company, product stage, and distribution path.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[["Company", "SentiTel"], ["Category", "AI Security / Telecom Fraud"], ["Stage", "Seed · Working Product Deployed"], ["Location", "Raleigh, NC"], ["Founders", "Amin Hezaveh · Haniyeh Permeh"], ["Funding Status", "Actively Raising Seed Round"], ["Business Model", "B2C Subscription + B2B Dataset Licensing"], ["Website", "sentitels.com"]].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/5 bg-slate-900/80 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {label === "Website" ? <a href="https://sentitels.com/" target="_blank" rel="noreferrer" className="text-[#FF8200] hover:underline">{value}</a> : value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionMotion>

      <SectionMotion className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {roadmap.map((item) => (
            <div key={item.phase} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="mb-4 text-lg font-semibold text-[#FF8200]">{item.phase}</p>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionMotion>

      <SectionMotion className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-6">
          {/* Amin */}
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">Founder</p>
                <h2 className="text-4xl font-black tracking-tight text-white">Amin Hezaveh</h2>
                <p className="mt-2 text-slate-300">Founder & CEO · Raleigh, NC</p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Amin is an AI Program Manager who builds and ships production AI systems. He designed and engineered the SentiTel platform across VoIP infrastructure, live transcription, trajectory classification, and evidence-based scam detection.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="mailto:Amin@Sentitels.com?subject=SentiTel%20Seed%20Discussion" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF8200] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF8200] active:scale-95"><Mail aria-hidden="true" className="h-4 w-4" /> Open Seed Discussion</a>
                  <a href="https://www.linkedin.com/in/amin-hezaveh" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>

          {/* Haniyeh */}
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8200]">Co-Founder</p>
                <h2 className="text-4xl font-black tracking-tight text-white">Haniyeh Permeh</h2>
                <p className="mt-2 text-slate-300">Co-Founder · Raleigh, NC</p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Haniyeh leads product design at SentiTel, shaping every user-facing interaction from first contact to live call. With an MBA and a background in employee experience at a trading startup, she brings deep empathy and behavioral insight to UX, turning complex threat signals into interfaces people can act on in the moment.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://www.linkedin.com/in/haniyeh-permeh-51770629b/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionMotion>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row md:items-center">
          <p>© 2026 SentiTel. Secure AI-powered calling for unknown and suspicious numbers.</p>
          <div className="flex gap-5">
            <a href="mailto:Amin@Sentitels.com" className="transition-colors hover:text-white">Contact</a>
            <a href="https://sentitels.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">sentitels.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
