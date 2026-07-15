import { BUSINESS_CONFIG } from "@/data/business.ts";
import { AlertTriangle, Search, Activity, Lock, Phone, ArrowRight } from "lucide-react";

export default function RatControl() {
  const signs = [
    { title: "Large Droppings", desc: "Cylindrical, blunt-ended droppings, approximately 10-15mm long, found in clusters." },
    { title: "Structural Gnawing", desc: "Deep teeth grooves on wooden joists, wall cavities, PVC sewer pipes, and electrical cables." },
    { title: "Scratching Noises", desc: "Heavy scratching or scampering sounds emanating from lofts, cavity walls, or floorboard cavities." },
    { title: "Grease Smear Marks", desc: "Dark smudges along skirtings, walls, and active conduits caused by dirty fur rubbing on surfaces." },
    { title: "Garden Burrows", desc: "Excavated entry holes (70-100mm diameter) under sheds, decking, or near external drain runs." },
    { title: "Food Damage", desc: "Chewed bags, food packages, or stored goods indicating direct foraging activity." }
  ];

  return (
    <section id="rat-control" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold font-mono uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>High-Impact Specialist Eradication</span>
          </div>
          <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Professional Rat Treatment & Control
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Rats are highly destructive pests capable of structural damage, gnawing live wires, and transmitting serious pathogens. Our certified London technicians combine mechanical trapping, detailed entry-point investigations, and prevention to secure your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Signs of Activity */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-display font-extrabold text-xl text-slate-950 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-rose-600 rounded-full"></span>
                Common Signs of Rat Activity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {signs.map((sign, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                    <h4 className="font-extrabold text-slate-900 text-sm">{sign.title}</h4>
                    <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">{sign.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-display font-extrabold text-xl text-slate-950 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-rose-600 rounded-full"></span>
                Our Specialized Treatment Approach
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-100 text-rose-600 p-2.5 rounded-xl shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">1. Meticulous Diagnostic Inspection</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      We trace run patterns, analyze structural voids, loft insulation tracks, and locate sewer ingress lines where rats enter from public mains.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-slate-100 text-rose-600 p-2.5 rounded-xl shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">2. Professional Trapping & Monitoring</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Strategic deployment of high-impact mechanical traps enclosed in lockable, child-and-pet-safe tamper-resistant boxes to quickly clear the active breeding population.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-slate-100 text-rose-600 p-2.5 rounded-xl shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">3. Proofing & Long-Term Prevention</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Once activity ceases, we seal cavities, repoint brickwork defects, protect air-bricks, and implement custom steel exclusions to stop re-entry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA & Info Panel */}
          <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-display font-extrabold text-xl text-white">
              What to Expect During Your Treatment
            </h3>
            
            <ul className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>No Unsafe Pesticide Exposure:</strong> We prioritize safe, targeted structural trapping. We do not encourage amateur rodenticide use, which poses severe toxicity risks to domestic pets and non-target garden wildlife.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Structured Follow-Ups:</strong> Effective rat control requires a minimum of 2-3 visits to inspect trap rates, safely clear captures, and finalize exclusion work.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>Aesthetic Integrity:</strong> All internal bait and trapping stations are discreetly tucked away behind furniture and cupboards, completely out of sight.</span>
              </li>
            </ul>

            <div className="border-t border-slate-800 pt-6 space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                Suspect rats are already nesting inside your walls or floorboards? Speak directly to our specialist London response dispatcher.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  id="rat-section-phone-cta"
                  href="tel:08002118166"
                  className="flex-1 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  id="rat-section-quote-cta"
                  href="#contact"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-750 text-white font-bold py-3.5 px-4 rounded-xl text-sm border border-slate-750 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
