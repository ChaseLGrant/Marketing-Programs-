"use client";
import { useState } from "react";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const { faqs } = programData;
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section
      id="faq"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #070910 0%, #0a0a0a 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything a recruit or their family typically wants to know — answered."
        />

        <div className="space-y-6">
          {faqs.map((category) => (
            <div key={category.category}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400">
                  {category.category}
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="space-y-2">
                {category.questions.map((item, j) => {
                  const key = `${category.category}-${j}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div
                      key={j}
                      className={cn(
                        "rounded-xl border bg-[#0d0d0d] overflow-hidden transition-colors",
                        isOpen ? "border-white/[0.12]" : "border-white/[0.06]"
                      )}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                      >
                        <span className="font-medium text-white text-sm">{item.q}</span>
                        <span
                          className={cn(
                            "text-white/40 flex-shrink-0 transition-transform duration-200 text-lg",
                            isOpen ? "rotate-45" : ""
                          )}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <div className="h-px bg-white/[0.06] mb-4" />
                          <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-8 text-center">
          <p className="text-white/60 text-sm mb-4">Still have questions? Reach out directly.</p>
          <a
            href="#recruit-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003087] hover:bg-[#004bb5] text-white text-sm font-semibold transition-colors"
          >
            Contact The Coaching Staff →
          </a>
        </div>
      </div>
    </section>
  );
}
