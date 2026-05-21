import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const Icon = ({ symbol, className = "", size = 20 }) => (
  <span className={`inline-flex items-center justify-center ${className}`} style={{ fontSize: `${size}px`, lineHeight: 1 }} aria-hidden="true">
    {symbol}
  </span>
);

const BarChart3 = (props) => <Icon symbol="📊" {...props} />;
const BriefcaseBusiness = (props) => <Icon symbol="💼" {...props} />;
const CalendarDays = (props) => <Icon symbol="📅" {...props} />;
const CheckCircle2 = (props) => <Icon symbol="✅" {...props} />;
const ClipboardCheck = (props) => <Icon symbol="📋" {...props} />;
const Cloud = (props) => <Icon symbol="☁️" {...props} />;
const Database = (props) => <Icon symbol="🗄️" {...props} />;
const Eye = (props) => <Icon symbol="👁️" {...props} />;
const EyeOff = (props) => <Icon symbol="🙈" {...props} />;
const Home = (props) => <Icon symbol="🏠" {...props} />;
const Leaf = (props) => <Icon symbol="🌿" {...props} />;
const Package = (props) => <Icon symbol="📦" {...props} />;
const PlugZap = (props) => <Icon symbol="🔌" {...props} />;
const Search = (props) => <Icon symbol="🔎" {...props} />;
const ShieldCheck = (props) => <Icon symbol="🛡️" {...props} />;
const Smartphone = (props) => <Icon symbol="📱" {...props} />;
const Users = (props) => <Icon symbol="👥" {...props} />;
const Wrench = (props) => <Icon symbol="🔧" {...props} />;

const USERS = [
  { id: "all", label: "All Users", icon: Users, colour: "bg-[#3E2368]" },
  { id: "operative", label: "Operatives", icon: Wrench, colour: "bg-[#009FE3]" },
  { id: "surveyor", label: "Surveyors", icon: ClipboardCheck, colour: "bg-[#95C11F]" },
  { id: "planner", label: "Planners / Schedulers", icon: CalendarDays, colour: "bg-[#F9B233]" },
  { id: "asset", label: "Home Investment", icon: Home, colour: "bg-[#3E2368]" },
  { id: "compliance", label: "Compliance", icon: ShieldCheck, colour: "bg-[#009FE3]" },
  { id: "commercial", label: "Commercial", icon: Package, colour: "bg-[#F9B233]" },
  { id: "sustainability", label: "Energy / Sustainability", icon: Leaf, colour: "bg-[#95C11F]" },
];

const MODULES = [
  {
    id: "fieldfirst",
    title: "Field First Platform",
    subtitle: "Core platform and cloud back office interface",
    replaces: ["OpenHousing process restrictions", "Fragmented access management"],
    icon: Cloud,
    colour: "bg-[#3E2368]",
    users: ["all"],
    bullets: [
      { text: "User, role and access management", users: ["all"] },
      { text: "Security, permissions and platform governance", users: ["all"] },
      { text: "Environment management for test, training and production", users: ["all"] },
      { text: "Common foundation that supports Connect, Mobilise, ALM and FSI", users: ["all"] },
      { text: "Integration layer enabling information to move across the solution", users: ["all"] },
    ],
  },
  {
    id: "connect",
    title: "Connect",
    subtitle: "Job management, scheduling, contracts and commercial control",
    replaces: ["OpenHousing", "DRS", "Excel spreadsheets", "Manual scheduling handoffs", "Standalone contractor trackers"],
    icon: BriefcaseBusiness,
    colour: "bg-[#009FE3]",
    users: ["surveyor", "planner", "commercial", "compliance", "asset"],
    bullets: [
      { text: "Create and manage work orders, repairs, void jobs, compliance activities and investment works", users: ["surveyor", "planner", "compliance", "asset"] },
      { text: "Schedule, dispatch and allocate work to operatives or contractors", users: ["surveyor", "planner", "asset"] },
      { text: "Manage contracts, suppliers, subcontractors, materials and stock", users: ["surveyor", "commercial", "planner", "asset"] },
      { text: "Apply workflow rules, priorities, SLAs, diagnostic rules and approvals", users: ["surveyor", "planner", "compliance", "asset"] },
      { text: "Receive job updates from Mobilise and feed performance information into reporting", users: ["surveyor", "planner", "asset"] },
      { text: "Support purchase order, supplier and subcontractor processing", users: ["surveyor", "commercial", "asset"] },
    ],
  },
  {
    id: "mobilise",
    title: "Mobilise",
    subtitle: "Mobile working app for operatives, surveyors and inspectors",
    replaces: ["Current field Totalmobile solution", "Paper forms", "Excel spreadsheets", "Manual photo/evidence handling"],
    icon: Smartphone,
    colour: "bg-[#E6007E]",
    users: ["operative", "surveyor", "compliance", "asset"],
    bullets: [
      { text: "Receive jobs, visits, tasks, instructions and property context on mobile devices", users: ["operative", "surveyor", "compliance"] },
      { text: "Complete forms for FRA, Gas, EICR, HHSRS, Awaab’s Law, voids, surveys and inspections", users: ["surveyor", "compliance", "operative"] },
      { text: "Capture photos, documents, signatures, notes and evidence once at source", users: ["operative", "surveyor", "compliance", "asset"] },
      { text: "Work online and offline, then sync updates back into Connect", users: ["operative", "surveyor"] },
      { text: "Capture shift, visit outcome and productivity data for performance insight", users: ["operative"] },
      { text: "Capture property, survey and inspection information on site", users: ["surveyor", "asset"] },
    ],
  },
  {
    id: "alm",
    title: "ALM",
    subtitle: "Asset lifecycle management and single source of truth for homes",
    replaces: ["OpenHousing asset records", "Excel asset lists", "Disconnected component records", "Manual programme planning", "Standalone investment tracking sheets"],
    icon: Database,
    colour: "bg-[#95C11F]",
    users: ["asset", "surveyor", "compliance", "sustainability", "commercial"],
    bullets: [
      { text: "Store property, component, condition, compliance, hierarchy and lifecycle data", users: ["asset", "compliance", "commercial"] },
      { text: "Maintain asset hierarchies such as property, block, communal area and component relationships", users: ["asset"] },
      { text: "Support stock condition data, decent homes, component replacement and long-term investment planning", users: ["asset", "surveyor", "sustainability", "commercial"] },
      { text: "Support programme grouping, batch issuing and contractor delivery planning", users: ["asset", "commercial"] },
      { text: "Enable lifecycle forecasting, feasibility analysis and midlife scope adjustments", users: ["asset", "commercial"] },
      { text: "Store compliance, risk and certification information against the property record", users: ["compliance", "asset"] },
      { text: "Manage EPC, SAP, RdSAP, energy data and SAVA integration for sustainability planning", users: ["sustainability", "asset"] },
    ],
  },
  {
    id: "fsi",
    title: "FSI",
    subtitle: "Field Service Intelligence, dashboards and performance insight",
    replaces: ["Long Power BI dashboard lead times", "Manual KPI collation", "Spreadsheet reporting"],
    icon: BarChart3,
    colour: "bg-[#F9B233]",
    users: ["compliance", "commercial", "asset", "sustainability"],
    bullets: [
      { text: "Compliance KPIs, overdue actions, audit readiness and risk visibility", users: ["compliance"] },
      { text: "Cost, usage, materials and supplier analytics", users: ["commercial"] },
      { text: "Investment planning, lifecycle, programme performance and cost-versus-plan reporting", users: ["asset", "commercial"] },
      { text: "Track contractor KPIs, delivery performance and programme milestones", users: ["asset", "commercial"] },
      { text: "Sustainability reporting such as SHDF, carbon metrics and energy efficiency progress", users: ["sustainability"] },
    ],
  },
  {
    id: "integration",
    title: "Integrations & APIs",
    subtitle: "Middleware, data exchange and external systems",
    replaces: ["Manual data transfers", "Disconnected system updates", "Duplicate data entry", "Unstructured supplier data exchange"],
    icon: PlugZap,
    colour: "bg-slate-500",
    users: ["commercial", "sustainability", "planner", "asset", "compliance"],
    bullets: [
      { text: "Exchange work order, customer, property, appointment, asset and compliance data", users: ["planner", "asset", "compliance"] },
      { text: "Supplier integrations with CEF, Rexel and Travis Perkins for purchase orders, stock and invoices", users: ["commercial"] },
      { text: "SAVA integration for RdSAP submissions and EPC certificate returns", users: ["sustainability", "asset"] },
      { text: "Secure API access, validation rules and controlled data exchange", users: ["all"] },
    ],
  },
];

const PROCESSES = [
  { title: "Responsive Repairs", users: ["operative", "planner", "commercial"], steps: ["Raise repair", "Schedule & dispatch", "Complete visit", "Capture evidence", "Close & report"], modules: "Connect → Mobilise → ALM → FSI → Integration" },
  { title: "Voids", users: ["surveyor", "operative", "planner", "asset"], steps: ["Survey void", "Plan works", "Complete repairs", "Inspect & sign off", "Handover"], modules: "Connect → Mobilise → ALM → FSI → Integration" },
  { title: "Compliance", users: ["compliance", "surveyor", "operative", "planner"], steps: ["Plan programme", "Inspect", "Store certificate", "Track overdue", "Audit/report"], modules: "Connect → Mobilise → ALM → FSI → Integration" },
  { title: "Investment / Capital Works", users: ["asset", "surveyor", "planner", "commercial", "sustainability"], steps: ["Plan programme", "Group & issue projects", "Survey", "Deliver works", "QA checks", "Track spend & KPIs"], modules: "ALM → Connect → Mobilise → FSI → Integration" },
  { title: "Commercial / Materials", users: ["commercial", "operative", "planner", "asset"], steps: ["Create PO", "Validate operative", "Confirm order", "GRN / invoice", "Analyse usage"], modules: "Connect → Suppliers → Integration → FSI" },
  { title: "Energy / Sustainability", users: ["sustainability", "surveyor", "asset"], steps: ["Capture EPC/SAP data", "Submit to SAVA", "Receive EPC", "Plan retrofit", "Track carbon"], modules: "ALM → SAVA → FSI → Connect" },
];

const BENEFITS = [
  { text: "One version of the truth", users: ["all", "asset", "compliance"] },
  { text: "Less duplicated entry and chasing updates", users: ["operative", "planner", "commercial"] },
  { text: "Better evidence, audit trail and compliance confidence", users: ["compliance", "surveyor"] },
  { text: "Mobile-first working and real-time job updates", users: ["operative", "surveyor"] },
  { text: "Smarter home investment planning, lifecycle forecasting and programme prioritisation", users: ["asset", "sustainability", "commercial"] },
  { text: "Better contractor performance visibility and SLA management", users: ["asset", "commercial"] },
  { text: "Improved cost visibility and supplier control", users: ["commercial", "asset"] },
  { text: "Stronger reporting without spreadsheet collation", users: ["planner", "compliance", "asset"] },
];

function isRelevant(itemUsers, selected) {
  return selected === "all" || itemUsers.includes("all") || itemUsers.includes(selected);
}

function filterModules(query) {
  const searchTerm = String(query || "").trim().toLowerCase();
  if (!searchTerm) {
    return MODULES;
  }

  return MODULES.filter((module) => {
    const text = [module.title, module.subtitle, ...module.replaces, ...module.bullets.map((bullet) => bullet.text)].join(" ").toLowerCase();
    return text.includes(searchTerm);
  });
}

function HighlightWrapper({ users, selected, dim, children }) {
  const active = !dim || isRelevant(users, selected);
  return (
    <motion.div animate={{ opacity: active ? 1 : 0.18, scale: dim && selected !== "all" && active ? 1.006 : 1 }} transition={{ duration: 0.2 }} className={active ? "" : "grayscale"}>
      {children}
    </motion.div>
  );
}

export default function App() {
  const [selected, setSelected] = useState("all");
  const [query, setQuery] = useState("");
  const [dimIrrelevant, setDimIrrelevant] = useState(true);

  const selectedUser = USERS.find((user) => user.id === selected) || USERS[0];
  const ActiveIcon = selectedUser.icon;
  const filteredModules = useMemo(() => filterModules(query), [query]);

  return (
    <div className="min-h-screen bg-[#F6F4FA] text-[#202124]">
      <header className="sticky top-0 z-30 border-b border-[#DED8EA] bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full bg-[#3E2368]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#3E2368]">Platform Housing Group</div>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#3E2368] lg:text-3xl">Property Connect Role-Based View</h1>
              <p className="mt-1 max-w-3xl text-sm text-[#4D4658]">A Platform-aligned view of how Property Connect supports colleagues, modules, processes and future ways of working.</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#DED8EA] bg-[#F6F4FA] p-3 shadow-sm">
              <div className={`rounded-xl p-3 text-white ${selectedUser.colour}`}>
                <ActiveIcon size={24} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-[#6B6475]">Current view</div>
                <div className="font-bold text-[#3E2368]">{selectedUser.label}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1800px] px-4 py-4 lg:px-6">
        <section className="mb-4 grid gap-4 xl:grid-cols-[240px_1fr]">
          <aside className="sticky top-24 h-fit rounded-3xl border border-[#DED8EA] bg-white p-3 shadow-sm">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#6B6475]">Select user</h2>
            <div className="grid max-h-[70vh] gap-2 overflow-y-auto pr-1">
              {USERS.map((user) => {
                const UserIcon = user.icon;
                const isActive = selected === user.id;
                return (
                  <button key={user.id} type="button" onClick={() => setSelected(user.id)} className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-2 text-left transition ${isActive ? "border-[#3E2368] bg-[#3E2368] text-white shadow-md" : "border-[#DED8EA] bg-white hover:border-[#95C11F] hover:bg-[#F6F4FA]"}`}>
                    <span className={`rounded-xl p-2 text-white ${isActive ? "bg-white/20" : user.colour}`}>
                      <UserIcon size={18} />
                    </span>
                    <span className="text-sm font-semibold">{user.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="rounded-3xl border border-[#DED8EA] bg-white p-4 shadow-sm">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#3E2368] xl:text-xl">Role-specific platform view</h2>
                <p className="text-sm text-[#4D4658]">Relevant modules are highlighted; other modules are greyed out for context.</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-[#6B6475]" size={18} />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search modules..." className="w-full rounded-2xl border border-[#DED8EA] py-2 pl-10 pr-3 text-sm outline-none focus:border-[#3E2368] sm:w-80" />
                </div>
                <button type="button" onClick={() => setQuery("")} className="inline-flex items-center justify-center rounded-2xl border border-[#DED8EA] px-3 py-2 text-sm font-semibold text-[#3E2368] hover:bg-[#F6F4FA]">Clear</button>
                <button type="button" onClick={() => setDimIrrelevant((current) => !current)} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#DED8EA] px-3 py-2 text-sm font-semibold text-[#3E2368] hover:bg-[#F6F4FA]">
                  {dimIrrelevant ? <Eye size={16} /> : <EyeOff size={16} />}
                  {dimIrrelevant ? "Highlight mode" : "Plain mode"}
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#DED8EA] bg-gradient-to-br from-white to-[#F6F4FA] p-4">
              <div className="grid gap-3 2xl:grid-cols-3 xl:grid-cols-2">
                {filteredModules.map((module) => (
                  <ModuleCard key={module.id} module={module} selected={selected} dim={dimIrrelevant} />
                ))}
              </div>
              {filteredModules.length === 0 && <div className="rounded-3xl border border-dashed border-[#DED8EA] bg-white p-8 text-center text-sm font-semibold text-[#6B6475]">No modules match your search.</div>}
            </div>
          </section>
        </section>

        <section className="mb-4 rounded-3xl border border-[#DED8EA] bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-[#3E2368]">End-to-end business processes</h2>
          <div className="grid gap-3 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2">
            {PROCESSES.map((process) => {
              const processRelevant = !dimIrrelevant || isRelevant(process.users, selected);
              return (
                <HighlightWrapper key={process.title} selected={selected} users={process.users} dim={dimIrrelevant}>
                  <div className={`h-full rounded-3xl border p-4 ${processRelevant ? "border-[#95C11F]/40 bg-[#95C11F]/10 shadow-sm" : "border-[#DED8EA] bg-[#F6F4FA]"}`}>
                    <h3 className="font-bold text-[#3E2368]">{process.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#6B6475]">{process.modules}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {process.steps.map((step, index) => <span key={step} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#3E2368] ring-1 ring-[#DED8EA]">{index + 1}. {step}</span>)}
                    </div>
                  </div>
                </HighlightWrapper>
              );
            })}
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-[#DED8EA] bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-[#3E2368]">Key benefits by user group</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {BENEFITS.map((benefit) => {
                const benefitRelevant = !dimIrrelevant || isRelevant(benefit.users, selected);
                return (
                  <HighlightWrapper key={benefit.text} selected={selected} users={benefit.users} dim={dimIrrelevant}>
                    <div className={`flex items-start gap-3 rounded-2xl border p-3 ${benefitRelevant ? "border-[#95C11F]/40 bg-[#95C11F]/10" : "border-[#DED8EA] bg-[#F6F4FA]"}`}>
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#95C11F]" size={18} />
                      <span className="text-sm font-semibold text-[#202124]">{benefit.text}</span>
                    </div>
                  </HighlightWrapper>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-[#DED8EA] bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-[#3E2368]">How to use this view</h2>
            <div className="space-y-3 text-sm text-[#4D4658]">
              <p><strong>1.</strong> Select a user group from the left-hand panel.</p>
              <p><strong>2.</strong> Relevant modules stay prominent; less relevant modules grey out.</p>
              <p><strong>3.</strong> Use this in workshops to explain “what changes for me?” while keeping the wider platform visible.</p>
              <p><strong>4.</strong> Switch back to <strong>All Users</strong> for the full platform overview.</p>
            </div>
            <div className="mt-5 rounded-2xl bg-[#3E2368] p-4 text-white">
              <div className="text-sm font-bold">Suggested workshop prompt</div>
              <p className="mt-2 text-sm text-white/80">“Click your role. Does this represent the work you do, the data you need, and the decisions you need to make?”</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ModuleCard({ module, selected, dim }) {
  const ModuleIcon = module.icon;
  const moduleRelevant = !dim || isRelevant(module.users, selected);
  const visibleBullets = module.bullets;

  return (
    <HighlightWrapper selected={selected} users={module.users} dim={dim}>
      <div className={`rounded-2xl border p-3 transition ${moduleRelevant ? "border-[#95C11F]/40 bg-white shadow-md" : "border-[#DED8EA] bg-white"}`}>
        <div className="flex items-start gap-3">
          <div className={`rounded-2xl p-3 text-white ${module.colour}`}>
            <ModuleIcon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-extrabold leading-tight text-[#3E2368]">{module.title}</h3>
            <p className="text-xs font-semibold text-[#6B6475]">{module.subtitle}</p>
          </div>
        </div>
        <div className="mt-3 rounded-2xl border border-[#3E2368]/10 bg-[#3E2368]/5 p-3">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-[#3E2368]">Replaces / reduces reliance on</div>
          <div className="flex flex-wrap gap-1.5">
            {module.replaces.map((item) => <span key={item} className="rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-[#3E2368] ring-1 ring-[#3E2368]/10">{item}</span>)}
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {visibleBullets.map((bullet) => {
            const bulletRelevant = !dim || isRelevant(bullet.users, selected);
            return (
              <motion.div key={bullet.text} animate={{ opacity: selected === "all" || bulletRelevant ? 1 : 0.22 }} transition={{ duration: 0.2 }} className={`flex gap-2 rounded-xl px-2 py-1 text-[13px] leading-snug ${bulletRelevant && selected !== "all" && dim ? "bg-[#95C11F]/15 ring-1 ring-[#95C11F]/25" : ""}`}>
                <CheckCircle2 size={16} className={bulletRelevant ? "mt-0.5 shrink-0 text-[#95C11F]" : "mt-0.5 shrink-0 text-[#DED8EA]"} />
                <span className={bulletRelevant ? "font-medium text-[#202124]" : "text-[#6B6475]"}>{bullet.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </HighlightWrapper>
  );
}
