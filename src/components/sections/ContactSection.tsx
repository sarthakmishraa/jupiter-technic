import { useState, type FC, type FormEvent } from "react";
import { useFadeIn } from "../../hooks";
import { COMPANY } from "../../constants";
import { MapPin, Mail, Phone, CheckCircle, ArrowRight } from "../../icons";
import { SectionHeading, DiagonalPattern } from "../ui";

interface ContactForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const INITIAL_FORM: ContactForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

export const ContactSection: FC = () => {
  const [ref, visible] = useFadeIn();
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors";

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.05)_0%,_transparent_60%)]" />
      <DiagonalPattern className="text-slate-500" />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          tag="Contact"
          title="Get in Touch for Bulk Orders"
          subtitle="Whether you need a specific component or a bulk supply arrangement, our team is ready to help. Reach out and we'll respond within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h3
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Business Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      Location
                    </div>
                    <div className="text-slate-400 text-sm">
                      {COMPANY.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      Email
                    </div>
                    <div className="text-slate-400 text-sm">
                      {COMPANY.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      Phone
                    </div>
                    <div className="text-slate-400 text-sm">
                      {COMPANY.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <h4
                className="text-amber-300 font-bold text-sm mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>{COMPANY.hours.weekdays.days}</span>
                  <span className="font-medium text-white">
                    {COMPANY.hours.weekdays.time}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>{COMPANY.hours.weekend.days}</span>
                  <span>{COMPANY.hours.weekend.time}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h4
                className="text-white font-bold text-sm mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Bulk Order Enquiries
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                For large-volume procurement or ongoing supply contracts, please
                use the form or contact us directly. We offer competitive bulk
                pricing and flexible delivery schedules.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle />
                  </div>
                  <h3
                    className="text-white text-xl font-bold mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Message Sent
                  </h3>
                  <p className="text-slate-400">
                    Thank you for reaching out. Our team will respond within 24
                    hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-white font-bold text-lg mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Send Us a Message
                  </h3>
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className={inputClass}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          className={inputClass}
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className={inputClass}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={inputClass}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold tracking-wide uppercase mb-2">
                        Message *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`${inputClass} resize-none`}
                        rows={5}
                        placeholder="Tell us about your requirements, quantities, and any specifications..."
                        required
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base rounded-xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Enquiry <ArrowRight />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
