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
    <section id="faq" className="py-32 px-5 sm:px-8 section-alt">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything a recruit or their family typically wants to know — answered."
        />

        <div className="space-y-10">
          {faqs.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-5">
                <span className="section-eyebrow">{category.category}</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div>
                {category.questions.map((item, j) => {
                  const key = `${category.category}-${j}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div key={j} className="border-b border-white/[0.06]">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      >
                        <span className="font-semibold text-white text-sm leading-snug">{item.q}</span>
                        <span className={cn("text-white/35 flex-shrink-0 transition-transform duration-200 text-xl font-light", isOpen ? "rotate-45" : "")}>+</span>
                      </button>
                      {isOpen && (
                        <div className="pb-5 border-l-2 border-[#C8102E] pl-4 ml-0 mb-2">
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

        <div className="mt-14 text-center">
          <p className="text-white/35 text-sm mb-5">Still have questions? Reach out directly.</p>
          <a href="#recruit-form" className="btn-primary px-8 py-4">
            Contact The Coaching Staff
          </a>
        </div>
      </div>
    </section>
  );
}
