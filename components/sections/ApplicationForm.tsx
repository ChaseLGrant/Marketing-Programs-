"use client";

import { ArrowRight, Check, ChevronLeft, Lock } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { gradYears, sports } from "@/lib/applicationOptions";

declare global {
  interface WindowEventMap {
    "athlete-market:start-application": CustomEvent<{ sport?: string; gradYear?: string }>;
  }
}

const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxKYk4BP33ZmZ5BKhr_6ksyResFZXSgpuZd6WFxckQhdpc4x8LyPWdTvL1_Rs71BqSK-A/exec";
const FORM_NAME = "athlete-market";
const SOURCE = "meta-ad-landing-v3";

const statusOptions = [
  "Just getting started",
  "Contacted some coaches",
  "Received interest",
  "Spoken with coaches",
  "Has offers",
  "Not sure",
] as const;

const challengeOptions = [
  { value: "Coach responses", label: "Getting college coaches to respond" },
  { value: "Which schools", label: "Knowing which schools to target" },
  { value: "Athlete level", label: "Understanding my athlete's level" },
  { value: "Strategy", label: "Creating a recruiting strategy" },
  { value: "Communication", label: "Communicating with coaches" },
  { value: "Camps", label: "Finding the right camps / showcases" },
  { value: "Exposure", label: "Getting more exposure" },
  { value: "Scholarships", label: "Understanding scholarships / financial options" },
  { value: "Where to start", label: "We don't know where to start" },
] as const;

const importanceOptions = [
  "One of their biggest goals",
  "Very important",
  "Still deciding",
  "Exploring",
] as const;

const timelineOptions = [
  "Immediately",
  "Within 30 days",
  "1-3 months",
  "Later this year",
  "Just researching",
] as const;

const budgetOptions = ["Ready to invest", "Want details first", "Payment plan", "Free only"] as const;
const bestTimeOptions = ["Mornings", "Afternoons", "Evenings", "Weekends"] as const;

type ApplicationData = {
  sport: string;
  grad_year: string;
  athlete_first: string;
  athlete_last: string;
  high_school: string;
  city_state: string;
  position: string;
  gpa: string;
  film_url: string;
  status: string;
  challenges: string[];
  importance: string;
  timeline: string;
  budget: string;
  parent_first: string;
  parent_last: string;
  email: string;
  phone: string;
  best_time: string;
  notes: string;
  outcome: string;
  source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  gclid: string;
  landing_url: string;
  referrer: string;
  submitted_at: string;
  seconds_to_complete: string;
  "bot-field": string;
};

const emptyData: ApplicationData = {
  sport: "",
  grad_year: "",
  athlete_first: "",
  athlete_last: "",
  high_school: "",
  city_state: "",
  position: "",
  gpa: "",
  film_url: "",
  status: "",
  challenges: [],
  importance: "",
  timeline: "",
  budget: "",
  parent_first: "",
  parent_last: "",
  email: "",
  phone: "",
  best_time: "",
  notes: "",
  outcome: "",
  source: SOURCE,
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  fbclid: "",
  gclid: "",
  landing_url: "",
  referrer: "",
  submitted_at: "",
  seconds_to_complete: "",
  "bot-field": "",
};

const totalSteps = 9;

function encodePayload(data: Record<string, string | string[]>) {
  return Object.entries(data)
    .map(([key, value]) => {
      const normalized = Array.isArray(value) ? value.join(", ") : value;
      return `${encodeURIComponent(key)}=${encodeURIComponent(normalized ?? "")}`;
    })
    .join("&");
}

function ChoiceCard({
  checked,
  multi,
  label,
  onClick,
}: {
  checked: boolean;
  multi?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
        checked ? "border-[#155DFC] bg-[#EFF6FF]" : "border-[#E5E7EB] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 ${
          multi ? "rounded-md" : "rounded-full"
        } ${checked ? "border-[#155DFC] bg-[#155DFC] text-white" : "border-[#CBD5E1] bg-white text-transparent"}`}
      >
        <Check className="h-4 w-4" />
      </span>
      <span className="text-base font-semibold leading-6 text-[#101828]">{label}</span>
    </button>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-3xl font-extrabold tracking-[-0.04em] text-[#101828]">{title}</h3>
      <p className="mt-2 text-[15px] leading-7 text-[#4A5565]">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function ApplicationForm() {
  const [data, setData] = useState<ApplicationData>(emptyData);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showDone, setShowDone] = useState(false);
  const [showOffRamp, setShowOffRamp] = useState(false);
  const [freeEmail, setFreeEmail] = useState("");
  const [freeState, setFreeState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [freeMessage, setFreeMessage] = useState("One email. Unsubscribe anytime.");
  const formCardRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setData((current) => ({
      ...current,
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
      utm_term: params.get("utm_term") ?? "",
      fbclid: params.get("fbclid") ?? "",
      gclid: params.get("gclid") ?? "",
      landing_url: window.location.href.split("#")[0],
      referrer: document.referrer || "(direct)",
    }));

    const onStart = (event: WindowEventMap["athlete-market:start-application"]) => {
      setData((current) => ({
        ...current,
        sport: event.detail.sport ?? current.sport,
        grad_year: event.detail.gradYear ?? current.grad_year,
      }));
      setStep(event.detail.sport && event.detail.gradYear ? 1 : 0);
      setError("");
      formCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.addEventListener("athlete-market:start-application", onStart);
    return () => window.removeEventListener("athlete-market:start-application", onStart);
  }, []);

  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step]);

  const updateField = <K extends keyof ApplicationData>(field: K, value: ApplicationData[K]) => {
    setError("");
    setSubmitError("");
    setData((current) => ({ ...current, [field]: value }));
  };

  const scrollToCard = () => {
    formCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateStep = (index = step) => {
    switch (index) {
      case 0:
        if (!data.sport || !data.grad_year) {
          setError("Please choose a sport and grad year.");
          return false;
        }
        return true;
      case 1:
        if (!data.athlete_first.trim() || !data.athlete_last.trim()) {
          setError("Please enter your athlete's first and last name.");
          return false;
        }
        return true;
      case 2:
        if (!data.high_school || !data.city_state || !data.position || !data.gpa) {
          setError("Please complete the required athlete details.");
          return false;
        }
        return true;
      case 3:
        if (!data.status) {
          setError("Please choose one option.");
          return false;
        }
        return true;
      case 4:
        if (data.challenges.length === 0) {
          setError("Please choose at least one challenge.");
          return false;
        }
        return true;
      case 5:
        if (!data.importance) {
          setError("Please choose one option.");
          return false;
        }
        return true;
      case 6:
        if (!data.timeline) {
          setError("Please choose one option.");
          return false;
        }
        return true;
      case 7:
        if (!data.budget) {
          setError("Please choose one option.");
          return false;
        }
        return true;
      case 8:
        if (
          !data.parent_first.trim() ||
          !data.parent_last.trim() ||
          !data.email.trim() ||
          !data.phone.trim() ||
          !data.best_time
        ) {
          setError("Please complete the required contact details.");
          return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
          setError("Please enter a valid email address.");
          return false;
        }

        if (data.phone.replace(/\D/g, "").length < 10) {
          setError("Please enter a valid phone number.");
          return false;
        }

        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!validateStep()) {
      scrollToCard();
      return;
    }

    setStep((current) => Math.min(current + 1, totalSteps - 1));
    scrollToCard();
  };

  const previousStep = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
    scrollToCard();
  };

  const buildTrackedPayload = (payload: Partial<ApplicationData>) => {
    const submitted_at = new Date().toISOString();

    return {
      ...data,
      ...payload,
      source: SOURCE,
      submitted_at,
      seconds_to_complete: String(Math.round((Date.now() - startedAt.current) / 1000)),
    };
  };

  const postNetlify = async (payload: Record<string, string | string[]>) => {
    const body = encodePayload({ "form-name": FORM_NAME, ...payload, "bot-field": "" });
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
  };

  const postNetlifyWithRetry = async (payload: Record<string, string | string[]>) => {
    try {
      await postNetlify(payload);
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      await postNetlify(payload);
    }
  };

  const postSheet = async (payload: Record<string, string | string[]>) => {
    try {
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodePayload(payload),
      });
    } catch {
      // Sheet mirroring should never block the lead funnel.
    }
  };

  const deliverLead = async (payload: Record<string, string | string[]>) => {
    void postSheet(payload);
    await postNetlifyWithRetry(payload);
  };

  const handleAutoAdvance = (field: "status" | "importance" | "timeline", value: string) => {
    updateField(field, value);
    window.setTimeout(() => {
      setStep((current) => Math.min(current + 1, totalSteps - 1));
      scrollToCard();
    }, 140);
  };

  const handleBudget = (value: string) => {
    updateField("budget", value);

    if (value === "Free only") {
      const payload = buildTrackedPayload({ budget: value, outcome: "disqualified_free_only" });
      setShowOffRamp(true);
      setError("");
      scrollToCard();
      void postSheet(payload);
      void postNetlifyWithRetry(payload).catch(() => undefined);
      return;
    }

    window.setTimeout(() => {
      setStep(8);
      scrollToCard();
    }, 140);
  };

  const toggleChallenge = (value: string) => {
    const nextValue = data.challenges.includes(value)
      ? data.challenges.filter((item) => item !== value)
      : [...data.challenges, value];

    updateField("challenges", nextValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || !validateStep(8)) {
      scrollToCard();
      return;
    }

    const payload = buildTrackedPayload({ outcome: "qualified_application" });

    setSubmitting(true);
    setSubmitError("");

    try {
      await deliverLead(payload);
      setShowDone(true);
      scrollToCard();
    } catch {
      setSubmitError("Something went wrong sending your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFreeResource = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(freeEmail.trim())) {
      setFreeState("error");
      setFreeMessage("Enter a valid email address.");
      return;
    }

    setFreeState("sending");

    try {
      await deliverLead(
        buildTrackedPayload({
          email: freeEmail.trim(),
          outcome: "free_resource_signup",
        })
      );
      setFreeState("sent");
      setFreeMessage("It's on the way. Good luck this season.");
    } catch {
      setFreeState("error");
      setFreeMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="apply" className="px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">Application</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            Tell us about your athlete.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4A5565]">
            About 60 seconds. We'll review the information and determine whether we believe we can help.
          </p>
        </div>

        <form name={FORM_NAME} data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="sport" />
          <input type="text" name="grad_year" />
          <input type="text" name="athlete_first" />
          <input type="text" name="athlete_last" />
          <input type="text" name="high_school" />
          <input type="text" name="city_state" />
          <input type="text" name="position" />
          <input type="text" name="gpa" />
          <input type="url" name="film_url" />
          <input type="text" name="status" />
          <input type="text" name="challenges" />
          <input type="text" name="importance" />
          <input type="text" name="timeline" />
          <input type="text" name="budget" />
          <input type="text" name="parent_first" />
          <input type="text" name="parent_last" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="best_time" />
          <textarea name="notes" />
          <input type="text" name="outcome" />
          <input type="text" name="source" />
          <input type="text" name="submitted_at" />
          <input type="text" name="seconds_to_complete" />
          <input type="text" name="utm_source" />
          <input type="text" name="utm_medium" />
          <input type="text" name="utm_campaign" />
          <input type="text" name="utm_content" />
          <input type="text" name="utm_term" />
          <input type="text" name="fbclid" />
          <input type="text" name="gclid" />
          <input type="text" name="landing_url" />
          <input type="text" name="referrer" />
          <input type="text" name="bot-field" />
        </form>

        <div
          ref={formCardRef}
          className="mt-10 overflow-hidden rounded-[1.6rem] border border-[#E5E7EB] bg-white shadow-[0_30px_60px_-38px_rgba(16,24,40,0.45)]"
        >
          {!showDone && !showOffRamp ? (
            <>
              <div className="px-6 pt-6 sm:px-8">
                <div className="mb-3 flex items-center justify-between text-sm font-semibold text-[#6A7282]">
                  <span>
                    Question <span className="text-[#155DFC]">{step + 1}</span> of {totalSteps}
                  </span>
                  <span>{progress}% complete</span>
                </div>
                <div className="h-2 rounded-full bg-[#F3F4F6]">
                  <div
                    className="h-2 rounded-full bg-[#155DFC] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8 sm:py-9">
                {step === 0 ? (
                  <StepShell
                    title="What sport and grad year?"
                    subtitle="This determines the recruiting timeline your athlete is on."
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <select
                        value={data.sport}
                        onChange={(event) => updateField("sport", event.target.value)}
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      >
                        <option value="">Select…</option>
                        {sports.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                      <select
                        value={data.grad_year}
                        onChange={(event) => updateField("grad_year", event.target.value)}
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      >
                        <option value="">Select…</option>
                        {gradYears.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </StepShell>
                ) : null}

                {step === 1 ? (
                  <StepShell
                    title="What's your athlete's name?"
                    subtitle={`So we're not saying "your son" or "your daughter" on the call.`}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        value={data.athlete_first}
                        onChange={(event) => updateField("athlete_first", event.target.value)}
                        placeholder="First name"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.athlete_last}
                        onChange={(event) => updateField("athlete_last", event.target.value)}
                        placeholder="Last name"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                    </div>
                  </StepShell>
                ) : null}

                {step === 2 ? (
                  <StepShell
                    title="The details a coach asks for first."
                    subtitle="Film is optional, but it makes the review far more useful."
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        value={data.high_school}
                        onChange={(event) => updateField("high_school", event.target.value)}
                        placeholder="High school"
                        className="sm:col-span-2 h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.city_state}
                        onChange={(event) => updateField("city_state", event.target.value)}
                        placeholder="City / State"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.position}
                        onChange={(event) => updateField("position", event.target.value)}
                        placeholder="Primary position"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.gpa}
                        onChange={(event) => updateField("gpa", event.target.value)}
                        placeholder="Current GPA"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.film_url}
                        onChange={(event) => updateField("film_url", event.target.value)}
                        placeholder="Highlight film (optional)"
                        className="sm:col-span-2 h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                    </div>
                  </StepShell>
                ) : null}

                {step === 3 ? (
                  <StepShell
                    title="Where is your athlete in the recruiting process?"
                    subtitle="Be honest — it changes what we'd recommend."
                  >
                    <div className="space-y-3">
                      {statusOptions.map((option) => (
                        <ChoiceCard
                          key={option}
                          checked={data.status === option}
                          label={
                            option === "Contacted some coaches"
                              ? "Has contacted some college coaches"
                              : option === "Received interest"
                                ? "Has received interest from colleges"
                                : option === "Spoken with coaches"
                                  ? "Has spoken directly with college coaches"
                                  : option === "Has offers"
                                    ? "Has received offers / opportunities"
                                    : option === "Not sure"
                                      ? "Not sure where we stand"
                                      : option
                          }
                          onClick={() => handleAutoAdvance("status", option)}
                        />
                      ))}
                    </div>
                  </StepShell>
                ) : null}

                {step === 4 ? (
                  <StepShell title="What's the biggest challenge right now?" subtitle="Select all that apply.">
                    <div className="space-y-3">
                      {challengeOptions.map((option) => (
                        <ChoiceCard
                          key={option.value}
                          multi
                          checked={data.challenges.includes(option.value)}
                          label={option.label}
                          onClick={() => toggleChallenge(option.value)}
                        />
                      ))}
                    </div>
                  </StepShell>
                ) : null}

                {step === 5 ? (
                  <StepShell
                    title="How important is playing college sports to your athlete?"
                    subtitle="There's no wrong answer."
                  >
                    <div className="space-y-3">
                      {importanceOptions.map((option) => (
                        <ChoiceCard
                          key={option}
                          checked={data.importance === option}
                          label={
                            option === "One of their biggest goals"
                              ? "It's one of their biggest goals"
                              : option === "Still deciding"
                                ? "Interested, but still deciding"
                                : option === "Exploring"
                                  ? "We're mostly exploring options"
                                  : option
                          }
                          onClick={() => handleAutoAdvance("importance", option)}
                        />
                      ))}
                    </div>
                  </StepShell>
                ) : null}

                {step === 6 ? (
                  <StepShell title="When would you want to start?" subtitle="Grad-year timelines move fast, so this matters.">
                    <div className="space-y-3">
                      {timelineOptions.map((option) => (
                        <ChoiceCard
                          key={option}
                          checked={data.timeline === option}
                          label={
                            option === "Within 30 days"
                              ? "Within the next 30 days"
                              : option === "Just researching"
                                ? "Just researching right now"
                                : option
                          }
                          onClick={() => handleAutoAdvance("timeline", option)}
                        />
                      ))}
                    </div>
                  </StepShell>
                ) : null}

                {step === 7 ? (
                  <StepShell
                    title="Is your family prepared to invest in professional recruiting support?"
                    subtitle="Our programs are hands-on services that typically require an investment of several thousand dollars. We'd rather be direct now than waste your time on a call."
                  >
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <ChoiceCard
                          key={option}
                          checked={data.budget === option}
                          label={
                            option === "Ready to invest"
                              ? "Yes — we're ready to invest if it's the right fit"
                              : option === "Want details first"
                                ? "Possibly — I'd like to understand the program first"
                                : option === "Payment plan"
                                  ? "We would need a payment plan"
                                  : "No — we're only looking for free resources right now"
                          }
                          onClick={() => handleBudget(option)}
                        />
                      ))}
                    </div>
                  </StepShell>
                ) : null}

                {step === 8 ? (
                  <StepShell
                    title="Last step — where should we reach you?"
                    subtitle="A member of our team reviews every application personally."
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        value={data.parent_first}
                        onChange={(event) => updateField("parent_first", event.target.value)}
                        placeholder="Parent first name"
                        autoComplete="given-name"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.parent_last}
                        onChange={(event) => updateField("parent_last", event.target.value)}
                        placeholder="Parent last name"
                        autoComplete="family-name"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        placeholder="Email address"
                        autoComplete="email"
                        className="sm:col-span-2 h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <input
                        value={data.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        placeholder="Phone number"
                        autoComplete="tel"
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                      <select
                        value={data.best_time}
                        onChange={(event) => updateField("best_time", event.target.value)}
                        className="h-14 rounded-2xl border-2 border-[#E5E7EB] px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      >
                        <option value="">Best time to reach you</option>
                        {bestTimeOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                      <textarea
                        value={data.notes}
                        onChange={(event) => updateField("notes", event.target.value)}
                        placeholder="Anything else we should know? Recent results, injuries, academic honors, schools already on your list…"
                        className="sm:col-span-2 min-h-28 rounded-2xl border-2 border-[#E5E7EB] px-4 py-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                      />
                    </div>
                  </StepShell>
                ) : null}

                {error ? <p className="mt-5 text-sm font-bold text-[#D0342C]">{error}</p> : null}
                {submitError ? <p className="mt-5 text-sm font-bold text-[#D0342C]">{submitError}</p> : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[#6A7282] transition hover:text-[#101828]"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : null}

                  {step < 8 && step !== 3 && step !== 5 && step !== 6 && step !== 7 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#155DFC] px-6 text-base font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(21,93,252,0.7)] transition hover:bg-[#1447E6]"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : null}

                  {step === 8 ? (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#155DFC] px-6 text-base font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(21,93,252,0.7)] transition hover:bg-[#1447E6] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? "Sending…" : "Submit application"}
                      {!submitting ? <ArrowRight className="h-4 w-4" /> : null}
                    </button>
                  ) : null}
                </div>

                <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#6A7282]">
                  <Lock className="h-4 w-4" />
                  We never sell your information. No spam, no mass emails.
                </p>
              </form>
            </>
          ) : null}

          {showDone ? (
            <div className="px-6 py-10 sm:px-8 sm:py-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#155DFC] text-white">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-[#101828]">Application received.</h3>
              <p className="mt-3 text-lg leading-8 text-[#4A5565]">
                Thank you — we have what we need to take a first look at {" "}
                <span className="font-semibold text-[#101828]">
                  {data.athlete_first ? data.athlete_first : "your athlete"}
                </span>
                .
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "We review the application, any film you shared, and the grad year against current program timelines.",
                  "You'll hear from us within one to two business days — either way.",
                  "If it's a fit, we'll schedule the consultation and walk you through exactly what we'd do and what it costs.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-4 border-b border-[#E5E7EB] pb-4 last:border-b-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-xs font-extrabold text-[#155DFC]">
                      {index + 1}
                    </span>
                    <span className="text-[15px] leading-7 text-[#4A5565]">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[15px] leading-7 text-[#4A5565]">
                In the meantime, pull together recent film and a current transcript. It makes the first conversation far more useful.
              </p>
            </div>
          ) : null}

          {showOffRamp ? (
            <div className="px-6 py-10 sm:px-8 sm:py-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3F4F6] text-[#4A5565]">
                <span className="text-2xl font-bold">!</span>
              </div>
              <h3 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-[#101828]">Thanks for letting us know.</h3>
              <p className="mt-3 text-lg leading-8 text-[#4A5565]">
                Based on your answers, our private recruiting program may not be the best fit right now. That's a completely reasonable place to be, and we'd rather tell you than sell you.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#4A5565]">
                If it helps, we'll send our free recruiting timeline — what needs to happen in each grad year, and the mistakes we see families make most. No calls, no pitch.
              </p>

              <div className="mt-6 flex flex-col gap-3 rounded-[1.25rem] bg-[#F3F4F6] p-4 sm:flex-row">
                <input
                  value={freeEmail}
                  onChange={(event) => {
                    setFreeEmail(event.target.value);
                    setFreeState("idle");
                    setFreeMessage("One email. Unsubscribe anytime.");
                  }}
                  placeholder="Email address"
                  disabled={freeState === "sent"}
                  className={`h-14 flex-1 rounded-2xl border-2 px-4 text-base font-medium text-[#101828] outline-none transition ${
                    freeState === "error"
                      ? "border-[#D0342C]"
                      : "border-[#E5E7EB] focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => void handleFreeResource()}
                  disabled={freeState === "sending" || freeState === "sent"}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#155DFC] px-6 text-base font-extrabold text-white transition hover:bg-[#1447E6] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {freeState === "sending" ? "Sending…" : freeState === "sent" ? "Sent" : "Send it over"}
                </button>
              </div>

              <p className={`mt-4 text-sm font-medium ${freeState === "error" ? "text-[#D0342C]" : "text-[#6A7282]"}`}>
                {freeMessage}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
