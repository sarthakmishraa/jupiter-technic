import type { FC } from "react";
import { useFadeIn } from "../../hooks";
import { COMPANY } from "../../constants";
import { Target, Shield, CheckCircle } from "../../icons";
import { StatCounter } from "../ui";

export const AboutSection: FC = () => {
  const [ref, visible] = useFadeIn();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.04)_0%,_transparent_60%)]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Built on Engineering
              <br />
              <span className="text-slate-400">Expertise & Trust</span>
            </h2>
            <div className="mt-8 space-y-5 text-slate-400 leading-relaxed">
              <p>
                Founded in {COMPANY.established} and headquartered in{" "}
                {COMPANY.location}, {COMPANY.name} has established itself as a
                dependable supplier and trader in the mechanical engineering
                space. We serve manufacturing companies, industrial buyers, and
                B2B clients with a focused product range that includes sheet
                metal components, industrial tools, and mechanical spares.
              </p>
              <p>
                Our strength lies in understanding the technical requirements of
                our clients. With a background rooted in engineering and
                practical industry experience, we bridge the gap between
                manufacturers and the components they need — on time and within
                specification.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-3">
                  <Target />
                  <h4
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Our Mission
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {COMPANY.mission}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-3">
                  <Shield />
                  <h4
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Our Vision
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {COMPANY.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden p-8 sm:p-10">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-amber-500/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-blue-500/10 rounded-full" />

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <StatCounter
                    end={8}
                    label="Years in Business"
                    color="text-amber-400"
                  />
                  <StatCounter
                    end={200}
                    label="Clients Served"
                    color="text-blue-400"
                  />
                </div>

                <div className="space-y-4">
                  {COMPANY.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 text-emerald-400 flex-shrink-0">
                        <CheckCircle />
                      </div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                  <p className="text-amber-300/90 text-sm leading-relaxed italic">
                    "Our clients count on us not just for products, but for the
                    engineering understanding that ensures every component meets
                    the demands of their application."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
