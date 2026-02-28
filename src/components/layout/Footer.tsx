import type { FC } from "react";
import { COMPANY, NAV_ITEMS } from "../../constants";
import { MapPin, Mail, Phone } from "../../icons";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: FC<FooterProps> = ({ onNavigate }) => (
  <footer className="relative bg-slate-950 border-t border-slate-800/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <span
                className="text-white font-black text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {COMPANY.shortName}
              </span>
            </div>
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {COMPANY.name}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            {COMPANY.businessType} of sheet metal components, industrial tools,
            and mechanical spares. Serving India's manufacturing sector since{" "}
            {COMPANY.established}.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-white font-bold text-sm mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Quick Links
          </h4>
          <div className="space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="block text-slate-400 text-sm hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4
            className="text-white font-bold text-sm mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Products
          </h4>
          <div className="space-y-2.5 text-slate-400 text-sm">
            <div>Sheet Metal Components</div>
            <div>Industrial Tools</div>
            <div>Mechanical Spares</div>
            <div>Custom Fabrication</div>
            <div>Bulk Supply</div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white font-bold text-sm mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact
          </h4>
          <div className="space-y-3 text-slate-400 text-sm">
            <div className="flex items-start gap-2">
              <MapPin />
              <span>{COMPANY.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              <span>{COMPANY.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              <span>{COMPANY.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
        <div className="text-slate-600 text-xs">
          Precision Engineering · Reliable Supply · Trusted Since{" "}
          {COMPANY.established}
        </div>
      </div>
    </div>
  </footer>
);
