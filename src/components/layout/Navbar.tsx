import { useState, useEffect, type FC } from "react";
import { NAV_ITEMS, COMPANY } from "../../constants";
import { MenuIcon, XIcon } from "../../icons";

interface NavbarProps {
  active: string;
  onNavigate: (id: string) => void;
}

export const Navbar: FC<NavbarProps> = ({ active, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/97 shadow-2xl shadow-slate-950/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <span
                className="text-white font-black text-sm sm:text-base tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {COMPANY.shortName}
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-white font-bold text-base sm:text-lg tracking-tight leading-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {COMPANY.name}
              </span>
              <span className="text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium">
                {COMPANY.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === item.id
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate("contact")}
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-700/50 animate-fadeIn">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate("contact");
                setMobileOpen(false);
              }}
              className="w-full mt-3 px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold rounded-lg"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
