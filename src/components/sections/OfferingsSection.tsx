import type { FC } from "react";
import { useFadeIn } from "../../hooks";
import { OFFERINGS } from "../../constants";
import { ArrowRight } from "../../icons";
import { SectionHeading, DiagonalPattern } from "../ui";

interface OfferingsSectionProps {
  onNavigate: (id: string) => void;
}

export const OfferingsSection: FC<OfferingsSectionProps> = ({ onNavigate }) => {
  const [ref, visible] = useFadeIn();

  return (
    <section className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.04)_0%,_transparent_70%)]" />
      <DiagonalPattern className="text-slate-500" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          tag="Our Core Offerings"
          title="What We Supply"
          subtitle="Three product verticals, one commitment to quality — serving India's manufacturing sector with dependable industrial products."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {OFFERINGS.map((o, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-slate-600/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${o.colorGradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg ${o.shadowColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {o.icon}
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {o.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {o.description}
              </p>
              <button
                onClick={() => onNavigate("products")}
                className="mt-6 text-amber-400 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
