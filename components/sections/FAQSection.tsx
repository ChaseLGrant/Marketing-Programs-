"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What does it actually cost?",
    answer:
      "Programs are priced by sport, grad year, and level of support, and typically run into several thousand dollars. You get an exact number on the consultation — before you're asked to commit to anything.",
  },
  {
    question: "Do you guarantee a scholarship or a roster spot?",
    answer:
      "No, and be careful with anyone who does. No service controls a coach's decision. What we control is strategy, targeting, evaluation, communication, and access — the parts that determine whether your athlete gets a fair look.",
  },
  {
    question: "How is this different from the free recruiting databases?",
    answer:
      "A database gives you a profile and a login. We give you people. Strategy is built for your athlete specifically, outreach is guided, and there's someone to call when a coach responds — or doesn't.",
  },
  {
    question: "My athlete already has a travel coach. Do we need this?",
    answer:
      "A travel coach develops the player. Recruiting is a separate job with its own timeline, rules, and relationships — and most travel programs aren't staffed to run it for every family on the roster.",
  },
  {
    question: "Is it too late for a junior or senior?",
    answer:
      "Often not — later classes just need a different, more aggressive strategy, including JUCO and transfer pathways. We'll tell you honestly on the call if we think the window has closed.",
  },
  {
    question: "What happens on the consultation?",
    answer:
      "We review the application and any film, talk through where your athlete realistically projects, and lay out what we'd do. If it isn't a fit, we say so, and you leave with a clearer picture either way.",
  },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="bg-[#F3F4F6] px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            Before the call
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            Questions parents ask first.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <div key={faq.question} className="overflow-hidden rounded-[1.4rem] border border-[#E5E7EB] bg-white">
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-extrabold tracking-[-0.02em] text-[#101828]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#155DFC]">{isOpen ? <Minus /> : <Plus />}</span>
                </button>

                {isOpen ? (
                  <div className="px-6 pb-6 text-[15px] leading-7 text-[#4A5565]">{faq.answer}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
