import type { FC } from "react";
import { useFadeIn } from "../../hooks";
import { COMPANY } from "../../constants";
import { ArrowRight, ChevronDown } from "../../icons";
import { DiagonalPattern } from "../ui";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onNavigate }) => {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <DiagonalPattern className="text-slate-400" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating geometric accents */}
      <div
        className="absolute top-20 right-10 w-72 h-72 border border-amber-500/10 rounded-full animate-spin"
        style={{ animationDuration: "40s" }}
      />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-blue-500/10 rotate-45" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-500/30 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
              Established {COMPANY.established} · {COMPANY.location}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Precision Engineering.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">
              Reliable Supply.
            </span>
            <br />
            <span className="text-slate-400">
              Trusted Since {COMPANY.established}.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {COMPANY.name} is a leading supplier and trader of sheet metal
            components, industrial tools, and mechanical spares — serving
            manufacturing companies across India with quality-assured products
            and dependable bulk supply.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base rounded-xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request a Quote
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight />
              </span>
            </button>
            <button
              onClick={() => onNavigate("products")}
              className="px-8 py-4 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 font-semibold text-base rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              Explore Products
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY.stats.map((s, i) => (
              <div key={i} className="group">
                <div
                  className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown />
      </div>
    </section>
  );
};
