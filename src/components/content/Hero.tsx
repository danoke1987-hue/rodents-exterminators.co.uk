import { BUSINESS_CONFIG } from "@/data/business.ts";
import PostcodeChecker from "../forms/PostcodeChecker.tsx";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero-section" className="relative py-12 md:py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.8),rgba(2,6,23,0.95))] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(225,29,72,0.08),transparent_50%)] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/40 border border-rose-900 text-rose-400 rounded-full text-xs font-bold font-mono tracking-wide">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Fully BPCA Qualified & Insured Specialist</span>
          </div>

          <h1 className="text-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Rodent Control, Trapping and Proofing in London
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Professional rat and mouse inspections, targeted eradication programmes, and complete mechanical building exclusion for homes and commercial businesses. Genuinely serving Greater London and all locations inside the M25 with discreet, expert local response.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              id="hero-call-cta"
              href="tel:08002118166"
              className="glow-btn bg-rose-600 hover:bg-rose-700 active:scale-98 text-white px-8 py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 text-base transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Free: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <a
              id="hero-quote-cta"
              href="#contact"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-750 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-1.5 text-sm transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-slate-900 pt-6 max-w-md">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Discreet Same-Day Survey</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Rodent-Only Focus</span>
            </div>
          </div>
        </div>

        {/* Hero Right Content: Postcode Checker Form card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <PostcodeChecker />
        </div>

      </div>
    </section>
  );
}
