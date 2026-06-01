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
    <section id="faq" className="py-32 px-5 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything a recruit or their family typically wants to know — answered."
        />

        <div className="space-y-8">
          {faqs.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-4">
                <span className="section-eyebrow">{category.category}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="space-y-2">
                {category.questions.map((item, j) => {
                  const key = `${category.category}-${j}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div key={j} className={cn("rounded-2xl border bg-[#141414] overflow-hidden transition-colors", isOpen ? "border-[#C8102E]/20" : "border-white/[0.07]")}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                      >
                        <span className="font-semibold text-white text-sm">{item.q}</span>
                        <span className={cn("text-white/35 flex-shrink-0 transition-transform duration-200 text-xl font-light", isOpen ? "rotate-45" : "")}>+</span>
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

        <div className="mt-12 rounded-2xl border border-white/[0.07] bg-[#141414] p-8 text-center">
          <p className="text-white/45 text-sm mb-4">Still have questions? Reach out directly.</p>
          <a href="#recruit-form" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-bold transition-colors">
            Contact The Coaching Staff →
          </a>
        </div>
      </div>
    </section>
  );
}
