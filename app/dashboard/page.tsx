"use client";
import { useState } from "react";
import { programData } from "@/lib/programData";
import Link from "next/link";

type Section = "overview" | "story" | "coaches" | "facilities" | "uniforms" | "standards" | "roster" | "outcomes" | "updates";

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "🏠" },
  { id: "story", label: "Program Story", icon: "📖" },
  { id: "coaches", label: "Coaching Staff", icon: "👤" },
  { id: "facilities", label: "Facilities", icon: "🏟️" },
  { id: "uniforms", label: "Uniforms & Gear", icon: "👕" },
  { id: "standards", label: "Recruiting Standards", icon: "⚾" },
  { id: "roster", label: "Roster Needs", icon: "📊" },
  { id: "outcomes", label: "Player Outcomes", icon: "🏆" },
  { id: "updates", label: "Program Updates", icon: "📢" },
];

export default function DashboardPage() {
  const [active, setActive] = useState<Section>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Editable states
  const [storyData, setStoryData] = useState({
    mission: programData.story.mission,
    philosophy: programData.story.philosophy,
    history: programData.story.history,
  });

  const [rosterCards, setRosterCards] = useState(
    programData.opportunityIndex.cards.map((c) => ({ ...c }))
  );

  const [outcomes, setOutcomes] = useState(
    programData.outcomes.transferStats.map((s) => ({ ...s }))
  );

  const [updateText, setUpdateText] = useState("");
  const [updates, setUpdates] = useState<string[]>([]);

  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const markSaved = (key: string) => {
    setSaved((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070707] flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#0d0d0d] border-r border-white/[0.06] flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-[#C8102E] flex items-center justify-center text-sm font-bold text-white">
              P
            </div>
            <span className="font-bold text-white text-sm">Palomar Baseball</span>
          </div>
          <p className="text-xs text-white/30 pl-11">Coach Dashboard</p>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                active === item.id
                  ? "bg-[#C8102E]/20 text-white border border-[#C8102E]/30"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors"
          >
            ← View Live Site
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/[0.06] px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg border border-white/20 text-white/60"
          >
            ☰
          </button>
          <div>
            <h1 className="font-bold text-white">
              {navItems.find((n) => n.id === active)?.label}
            </h1>
            <p className="text-xs text-white/30">Palomar Baseball Coach Dashboard</p>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* OVERVIEW */}
          {active === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Roster Spots Open", value: rosterCards.find(c => c.label === "Open Roster Spots")?.value || "—", icon: "👥" },
                  { label: "Recruiting Priority", value: "Pitching", icon: "⚾" },
                  { label: "Program Updates", value: String(updates.length), icon: "📢" },
                  { label: "Last Updated", value: "Today", icon: "🕐" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.06] bg-[#111] p-5">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                <h2 className="font-bold text-white mb-4">Quick Tips</h2>
                <div className="space-y-3">
                  {[
                    "Update Roster Needs each semester to keep recruiting information current.",
                    "Add testimonials under Player Outcomes when athletes transfer successfully.",
                    "Keep Program Updates fresh — recruits notice active programs.",
                    "Update Recruiting Standards each fall with current benchmarks.",
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C8102E]/20 border border-[#C8102E]/30 flex items-center justify-center text-xs text-blue-400 flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm text-white/50">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STORY */}
          {active === "story" && (
            <div className="space-y-6 max-w-3xl">
              {[
                { key: "mission" as const, label: "Program Mission", rows: 4 },
                { key: "philosophy" as const, label: "Program Philosophy", rows: 4 },
                { key: "history" as const, label: "Program History", rows: 6 },
              ].map(({ key, label, rows }) => (
                <div key={key} className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                  <label className="block text-sm font-bold text-white mb-3">{label}</label>
                  <textarea
                    value={storyData[key]}
                    onChange={(e) => setStoryData((prev) => ({ ...prev, [key]: e.target.value }))}
                    rows={rows}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E]/40 resize-none"
                  />
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => markSaved(key)}
                      className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors"
                    >
                      {saved[key] ? "✓ Saved!" : "Save Changes"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* COACHES */}
          {active === "coaches" && (
            <div className="space-y-6 max-w-3xl">
              {programData.coaches.map((coach) => (
                <div key={coach.id} className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#C8102E]/20 flex items-center justify-center text-lg">👤</div>
                    <div>
                      <div className="font-bold text-white">{coach.nameDisplay}</div>
                      <div className="text-xs text-blue-400">{coach.role}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <EditableField label="Display Name" defaultValue={coach.nameDisplay} />
                    <EditableTextarea label="Bio" defaultValue={coach.bio} rows={4} />
                    <EditableTextarea label="Recruiting Philosophy" defaultValue={coach.recruitingPhilosophy} rows={3} />
                    <EditableField label="Intro Video URL (optional)" defaultValue={coach.introVideo || ""} placeholder="https://youtube.com/..." />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => markSaved(`coach-${coach.id}`)}
                      className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors"
                    >
                      {saved[`coach-${coach.id}`] ? "✓ Saved!" : "Save Coach"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FACILITIES */}
          {active === "facilities" && (
            <div className="space-y-4 max-w-3xl">
              {programData.facilities.map((facility) => (
                <div key={facility.id} className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                  <h3 className="font-bold text-white mb-4">{facility.title}</h3>
                  <EditableTextarea label="Description" defaultValue={facility.description} rows={3} />
                  <EditableField label="Photo URL" defaultValue={facility.image || ""} placeholder="https://..." />
                  <EditableField label="Video URL" defaultValue={facility.video || ""} placeholder="https://youtube.com/..." />
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => markSaved(`fac-${facility.id}`)}
                      className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors"
                    >
                      {saved[`fac-${facility.id}`] ? "✓ Saved!" : "Save"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* UNIFORMS */}
          {active === "uniforms" && (
            <div className="space-y-6 max-w-3xl">
              <div className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                <h3 className="font-bold text-white mb-2">Program Intro Text</h3>
                <p className="text-xs text-white/30 mb-4">Shown at the top of the Uniforms & Gear section.</p>
                <EditableTextarea label="" defaultValue={programData.uniforms.intro} rows={3} />
                <div className="mt-4 flex justify-end">
                  <button onClick={() => markSaved("uni-intro")} className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors">
                    {saved["uni-intro"] ? "✓ Saved!" : "Save"}
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                <h3 className="font-bold text-white mb-4">Uniform Photos</h3>
                <p className="text-xs text-white/30 mb-5">Add photo URLs for each uniform. Leave blank to show placeholder.</p>
                <div className="space-y-4">
                  {programData.uniforms.uniformPhotos.map((photo, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">{photo.label}</span>
                      </div>
                      <EditableField label="Photo URL" defaultValue={photo.image || ""} placeholder="https://..." />
                      <EditableField label="Description" defaultValue={photo.description} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button onClick={() => markSaved("uni-photos")} className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors">
                    {saved["uni-photos"] ? "✓ Saved!" : "Save Photos"}
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                <h3 className="font-bold text-white mb-4">Gear Items</h3>
                <div className="space-y-4">
                  {programData.uniforms.gearItems.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-semibold text-white text-sm">{item.name}</span>
                        <span className={`ml-auto text-[0.6rem] font-bold px-2 py-0.5 rounded-md ${item.provided ? "bg-[#C8102E]/15 text-[#C8102E] border border-[#C8102E]/25" : "bg-white/[0.06] text-white/30 border border-white/10"}`}>
                          {item.provided ? "PROVIDED" : "PLAYER SUPPLIED"}
                        </span>
                      </div>
                      <EditableField label="Photo URL" defaultValue={item.image || ""} placeholder="https://..." />
                      <EditableField label="Description" defaultValue={item.description} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button onClick={() => markSaved("uni-gear")} className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors">
                    {saved["uni-gear"] ? "✓ Saved!" : "Save Gear"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STANDARDS */}
          {active === "standards" && (
            <div className="space-y-4 max-w-3xl">
              {programData.recruitingStandards.positions.map((pos, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                  <h3 className="font-bold text-white mb-4">{pos.icon} {pos.position}</h3>
                  <div className="space-y-3">
                    <EditableTextarea label="Athletic Traits" defaultValue={pos.athletic.join("\n")} rows={3} />
                    <EditableTextarea label="Skill Traits" defaultValue={pos.skill.join("\n")} rows={4} />
                    <EditableTextarea label="Character Traits" defaultValue={pos.character.join("\n")} rows={3} />
                    <EditableTextarea label="Academic Expectations" defaultValue={pos.academic.join("\n")} rows={3} />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => markSaved(`std-${i}`)}
                      className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors"
                    >
                      {saved[`std-${i}`] ? "✓ Saved!" : "Save"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ROSTER */}
          {active === "roster" && (
            <div className="space-y-6 max-w-3xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {rosterCards.map((card, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.06] bg-[#111] p-4">
                    <label className="block text-xs text-white/40 mb-1">{card.label}</label>
                    <input
                      type="text"
                      value={card.value}
                      onChange={(e) =>
                        setRosterCards((prev) =>
                          prev.map((c, j) => j === i ? { ...c, value: e.target.value } : c)
                        )
                      }
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-lg font-black text-white focus:outline-none focus:border-[#C8102E]/40"
                    />
                    <p className="text-[10px] text-white/25 mt-1">{card.sublabel}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => markSaved("roster")}
                  className="px-5 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-semibold transition-colors"
                >
                  {saved["roster"] ? "✓ Saved!" : "Save Roster Data"}
                </button>
              </div>
            </div>
          )}

          {/* OUTCOMES */}
          {active === "outcomes" && (
            <div className="space-y-6 max-w-3xl">
              <div className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                <h3 className="font-bold text-white mb-4">Transfer Stats</h3>
                <div className="space-y-3">
                  {outcomes.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm text-white/50 flex-1">{stat.label}</span>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) =>
                          setOutcomes((prev) => prev.map((s, j) => j === i ? { ...s, value: e.target.value } : s))
                        }
                        className="w-36 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-[#C8102E]/40 text-center"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => markSaved("outcomes")}
                    className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors"
                  >
                    {saved["outcomes"] ? "✓ Saved!" : "Save Stats"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* UPDATES */}
          {active === "updates" && (
            <div className="space-y-6 max-w-3xl">
              <div className="rounded-xl border border-white/[0.06] bg-[#111] p-6">
                <h3 className="font-bold text-white mb-4">Post a Program Update</h3>
                <textarea
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                  rows={4}
                  placeholder="Share a program update, announcement, or recruiting news..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E]/40 resize-none"
                />
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => {
                      if (updateText.trim()) {
                        setUpdates((prev) => [updateText, ...prev]);
                        setUpdateText("");
                      }
                    }}
                    className="px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-semibold transition-colors"
                  >
                    Post Update
                  </button>
                </div>
              </div>

              {updates.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white/50">Recent Updates</h4>
                  {updates.map((u, i) => (
                    <div key={i} className="rounded-xl border border-white/[0.06] bg-[#111] p-4">
                      <p className="text-sm text-white/70">{u}</p>
                      <p className="text-xs text-white/25 mt-2">Posted today</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function EditableField({
  label, defaultValue, placeholder
}: {
  label: string; defaultValue: string; placeholder?: string;
}) {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="mb-3">
      <label className="block text-xs text-white/40 mb-1.5">{label}</label>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E]/40"
      />
    </div>
  );
}

function EditableTextarea({
  label, defaultValue, rows = 3
}: {
  label: string; defaultValue: string; rows?: number;
}) {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="mb-3">
      <label className="block text-xs text-white/40 mb-1.5">{label}</label>
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        rows={rows}
        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E]/40 resize-none"
      />
    </div>
  );
}
