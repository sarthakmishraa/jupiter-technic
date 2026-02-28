import type { FC } from "react";
import { useFadeIn } from "../../hooks";
import { PRODUCTS } from "../../constants";
import { CheckCircle, ArrowRight } from "../../icons";
import { SectionHeading, DiagonalPattern } from "../ui";

interface ProductsSectionProps {
  onNavigate: (id: string) => void;
}

export const ProductsSection: FC<ProductsSectionProps> = ({ onNavigate }) => {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id="products"
      className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.05)_0%,_transparent_60%)]" />
      <DiagonalPattern className="text-slate-500" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          tag="Products"
          title="Our Product Range"
          subtitle="Comprehensive industrial products sourced from trusted manufacturers — each item quality-checked and available for bulk procurement."
        />

        <div className="space-y-8">
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className={`group relative bg-slate-800/40 border ${p.borderColor} rounded-2xl overflow-hidden hover:bg-slate-800/60 transition-all duration-500`}
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.colorGradient} flex items-center justify-center text-white text-xl shadow-lg`}
                      >
                        {p.icon}
                      </div>
                      <h3
                        className="text-2xl font-bold text-white"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {p.description}
                    </p>
                    {p.bulkAvailable && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                        <CheckCircle /> Bulk Orders Available
                      </div>
                    )}
                  </div>

                  {/* Right: Applications & Industries */}
                  <div className="lg:w-80 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">
                        Applications
                      </h4>
                      <div className="space-y-2">
                        {p.applications.map((a, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 text-slate-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                            {a}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">
                        Industries Served
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {p.industries.map((ind, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 rounded-md bg-slate-700/50 text-slate-300 text-xs font-medium border border-slate-600/30"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("contact")}
            className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base rounded-xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Bulk Pricing <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
