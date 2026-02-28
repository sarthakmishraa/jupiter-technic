import type { FC } from "react";
import { useFadeIn } from "../../hooks";
import { ADVANTAGES } from "../../constants";
import { ICON_MAP } from "../../icons";
import { SectionHeading } from "../ui";

export const WhyUsSection: FC = () => {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          tag="Why Choose Us"
          title="The Jupiter Technic Advantage"
          subtitle="What sets us apart is not just what we supply, but how we approach every business relationship — with technical understanding, reliability, and a genuine commitment to your success."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((r, i) => {
            const Icon = ICON_MAP[r.iconName];
            return (
              <div
                key={i}
                className={`group p-7 rounded-2xl bg-slate-800/30 border ${r.border} hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-1`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${r.bg} ${r.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {Icon && <Icon />}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {r.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
