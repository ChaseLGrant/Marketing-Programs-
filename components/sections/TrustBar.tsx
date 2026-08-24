import { Check } from "lucide-react";

const items = [
  "Founded by a former college recruiting coordinator",
  "An elite team of 100+ college & pro coaches",
  "Every application reviewed personally",
];

export function TrustBar() {
  return (
    <section className="border-y border-[#E5E7EB] bg-[#F3F4F6] px-5 py-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <ul className="grid gap-3 text-sm font-semibold text-[#4A5565] md:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 md:justify-center">
              <Check className="h-4 w-4 text-[#155DFC]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
