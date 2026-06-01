"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type FormData = {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hometown: string;
  gradYear: string;
  // Step 2
  gpa: string;
  satAct: string;
  intendedMajor: string;
  currentSchool: string;
  // Step 3
  position: string;
  height: string;
  weight: string;
  bats: string;
  throws: string;
  velocity: string;
  exitVelo: string;
  sixtyTime: string;
  // Step 4
  highlightVideo: string;
  fullGameVideo: string;
  additionalLinks: string;
  // Step 5
  goals: string;
  whyPalomar: string;
  // Step 6
  enrollTerm: string;
  committedElsewhere: string;
  otherSchools: string;
};

const EMPTY_FORM: FormData = {
  firstName: "", lastName: "", email: "", phone: "", hometown: "", gradYear: "",
  gpa: "", satAct: "", intendedMajor: "", currentSchool: "",
  position: "", height: "", weight: "", bats: "", throws: "", velocity: "", exitVelo: "", sixtyTime: "",
  highlightVideo: "", fullGameVideo: "", additionalLinks: "",
  goals: "", whyPalomar: "",
  enrollTerm: "", committedElsewhere: "", otherSchools: "",
};

const steps = [
  { title: "Athlete Info", icon: "👤" },
  { title: "Academic Info", icon: "📚" },
  { title: "Athletic Metrics", icon: "⚾" },
  { title: "Video Links", icon: "🎥" },
  { title: "Your Goals", icon: "🎯" },
  { title: "Timeline", icon: "📅" },
];

export function RecruitFormSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    console.log("🎯 Palomar Baseball Recruit Inquiry:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="recruit-form" className="py-28 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-4xl mx-auto mb-6">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Inquiry Received!</h2>
          <p className="text-white/50 mb-8">
            Thank you for your interest in Palomar Baseball. Our coaching staff will review your information and reach out if there&apos;s potential interest.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); setStep(0); }}
            className="px-6 py-3 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="recruit-form" className="py-28 px-4 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          eyebrow="Recruiting Inquiry"
          title="Start Your Application"
          subtitle="Give us the information we need to evaluate your fit for Palomar Baseball."
        />

        {/* Step indicators */}
        <div className="flex items-center justify-between mb-10 overflow-x-auto gap-1 pb-2">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => i < step && setStep(i)}
              className={cn(
                "flex flex-col items-center gap-1 flex-shrink-0 px-2 transition-colors",
                i === step ? "text-white" : i < step ? "text-blue-400 cursor-pointer" : "text-white/20 cursor-default"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold",
                  i === step
                    ? "bg-[#C8102E] border-[#C8102E]"
                    : i < step
                    ? "bg-blue-500/20 border-blue-500/40"
                    : "bg-white/[0.04] border-white/[0.08]"
                )}
              >
                {i < step ? "✓" : i + 1}
              </div>
              <span className="text-[10px] font-medium hidden sm:block">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/[0.06] rounded-full mb-8">
          <div
            className="h-1 bg-[#C8102E] rounded-full transition-all duration-500"
            style={{ width: `${((step) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{steps[step].icon}</span>
            <h3 className="font-bold text-white text-xl">{steps[step].title}</h3>
          </div>

          {/* Step 0: Athlete Info */}
          {step === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name *" value={form.firstName} onChange={(v) => set("firstName", v)} placeholder="Chase" />
                <Field label="Last Name *" value={form.lastName} onChange={(v) => set("lastName", v)} placeholder="Grant" />
              </div>
              <Field label="Email Address *" type="email" value={form.email} onChange={(v) => set("email", v)} placeholder="you@example.com" />
              <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => set("phone", v)} placeholder="(555) 000-0000" />
              <Field label="Hometown (City, State)" value={form.hometown} onChange={(v) => set("hometown", v)} placeholder="San Diego, CA" />
              <Select label="Graduation Year *" value={form.gradYear} onChange={(v) => set("gradYear", v)}
                options={["2025", "2026", "2027", "2028", "Transfer"]} />
            </div>
          )}

          {/* Step 1: Academic */}
          {step === 1 && (
            <div className="space-y-4">
              <Field label="Current GPA" value={form.gpa} onChange={(v) => set("gpa", v)} placeholder="3.5" />
              <Field label="SAT / ACT Score" value={form.satAct} onChange={(v) => set("satAct", v)} placeholder="1200 / 26" />
              <Field label="Intended Major / Field of Study" value={form.intendedMajor} onChange={(v) => set("intendedMajor", v)} placeholder="Business Administration" />
              <Field label="Current School" value={form.currentSchool} onChange={(v) => set("currentSchool", v)} placeholder="San Marcos High School" />
            </div>
          )}

          {/* Step 2: Athletic Metrics */}
          {step === 2 && (
            <div className="space-y-4">
              <Select label="Primary Position *" value={form.position} onChange={(v) => set("position", v)}
                options={["Pitcher", "Catcher", "First Base", "Second Base", "Shortstop", "Third Base", "Left Field", "Center Field", "Right Field", "DH/Utility"]} />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Height" value={form.height} onChange={(v) => set("height", v)} placeholder="e.g. 6'1&quot;" />
                <Field label="Weight (lbs)" value={form.weight} onChange={(v) => set("weight", v)} placeholder="185" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select label="Bats" value={form.bats} onChange={(v) => set("bats", v)} options={["Right", "Left", "Switch"]} />
                <Select label="Throws" value={form.throws} onChange={(v) => set("throws", v)} options={["Right", "Left"]} />
              </div>
              <Field label="Fastball Velocity (pitchers)" value={form.velocity} onChange={(v) => set("velocity", v)} placeholder="88 mph" />
              <Field label="Exit Velocity" value={form.exitVelo} onChange={(v) => set("exitVelo", v)} placeholder="92 mph" />
              <Field label="60-Yard Dash Time" value={form.sixtyTime} onChange={(v) => set("sixtyTime", v)} placeholder="6.8" />
            </div>
          )}

          {/* Step 3: Video Links */}
          {step === 3 && (
            <div className="space-y-4">
              <Field label="Highlight Video URL" value={form.highlightVideo} onChange={(v) => set("highlightVideo", v)} placeholder="YouTube, Perfect Game, NCSA..." />
              <Field label="Full Game Video URL" value={form.fullGameVideo} onChange={(v) => set("fullGameVideo", v)} placeholder="Optional" />
              <Textarea label="Additional Links or Notes" value={form.additionalLinks} onChange={(v) => set("additionalLinks", v)} placeholder="Any other profiles, stats, or links you'd like us to see" rows={3} />
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div className="space-y-4">
              <Textarea label="What are your goals — athletic and academic? *" value={form.goals} onChange={(v) => set("goals", v)} placeholder="I want to earn a D1 scholarship, major in Business, and eventually..." rows={4} />
              <Textarea label="Why are you interested in Palomar Baseball? *" value={form.whyPalomar} onChange={(v) => set("whyPalomar", v)} placeholder="I've heard great things about your development program and..." rows={4} />
            </div>
          )}

          {/* Step 5: Timeline */}
          {step === 5 && (
            <div className="space-y-4">
              <Select label="When are you looking to enroll? *" value={form.enrollTerm} onChange={(v) => set("enrollTerm", v)}
                options={["Fall 2025", "Spring 2026", "Fall 2026", "Spring 2027", "Fall 2027", "Unsure"]} />
              <Select label="Are you committed elsewhere?" value={form.committedElsewhere} onChange={(v) => set("committedElsewhere", v)}
                options={["No", "Yes — verbal", "Yes — signed", "Exploring options"]} />
              <Textarea label="Other schools you're considering (optional)" value={form.otherSchools} onChange={(v) => set("otherSchools", v)} placeholder="School A, School B..." rows={2} />

              <div className="mt-4 p-4 rounded-xl bg-[#C8102E]/10 border border-[#C8102E]/20">
                <p className="text-xs text-white/50 leading-relaxed">
                  By submitting this form, you consent to being contacted by Palomar College Baseball coaching staff regarding your recruiting interest. Information is stored locally and not shared with third parties.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="px-6 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-semibold transition-colors"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-semibold transition-colors"
              >
                Submit Application ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text"
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 mb-1.5 tracking-wide">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C8102E]/50 focus:bg-white/[0.06] transition-colors"
      />
    </div>
  );
}

function Textarea({
  label, value, onChange, placeholder, rows = 3
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 mb-1.5 tracking-wide">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C8102E]/50 focus:bg-white/[0.06] transition-colors resize-none"
      />
    </div>
  );
}

function Select({
  label, value, onChange, options
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 mb-1.5 tracking-wide">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg bg-[#0d0d0d] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#C8102E]/50 transition-colors"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
