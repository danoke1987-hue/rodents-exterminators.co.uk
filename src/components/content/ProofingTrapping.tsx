import { BUSINESS_CONFIG } from "@/data/business.ts";
import { ShieldCheck, Crosshair, HelpCircle, HardHat, Info, Phone, Mail } from "lucide-react";

export default function ProofingTrapping() {
  return (
    <section id="trapping-proofing-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION A: RODENT TRAPPING */}
        <div id="trapping" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold font-mono uppercase tracking-wider">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Targeted Mechanical Eradication</span>
            </div>
            
            <h3 className="text-display font-extrabold text-3xl text-slate-950 tracking-tight leading-none">
              Specialist Rodent Trapping Programmes
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Active trapping is highly technical and depends entirely on the layout of your building, active pathways, and food attractants. We do not apply a single rigid trapping method. Instead, our technicians calibrate trap types, triggers, and positioning based strictly on what we find during our initial diagnostic survey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Custom Tool Selection</h4>
                <p className="text-slate-600 leading-relaxed">
                  We deploy various traps, including professional high-impact snap-traps and multi-catch mechanical units, based on target rodent size, location, and severity.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Strategic Spatial Placement</h4>
                <p className="text-slate-600 leading-relaxed">
                  Traps are placed directly along active grease runs, nesting thresholds, and ceiling tracks, safely contained inside tamper-proof boxes to protect non-target animals.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Systemic Rodent Management</h4>
                <p className="text-slate-600 leading-relaxed">
                  Trapping is never a standalone solution. It is carefully integrated with hygiene modifications, food supply isolation, and permanent structural sealing.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-1.5">
                <h4 className="font-extrabold text-slate-900">Structured Clearing Schedule</h4>
                <p className="text-slate-600 leading-relaxed">
                  We conduct timed follow-up visits to inspect traps, retrieve captures, sanitise the surrounding area, and reset triggers to ensure absolute clearance.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <h4 className="text-display font-bold text-lg text-rose-500">
              Trapping Safety & Compliance Notice
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              To safeguard children, pets, and native wildlife, we do not publish detailed trap-placement guides or instructions. Improperly positioned traps can cause severe injury or fail to achieve humane eradication. 
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our specialists are fully trained in BPCA standards to handle high-risk zones (such as active food preparation areas, lofts, or nurseries) safely and discreetly.
            </p>
            <div className="border-t border-slate-800 pt-6">
              <a 
                id="trapping-cta-btn"
                href={BUSINESS_CONFIG.phoneLink} 
                className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Specialist Dispatch: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION B: RODENT PROOFING */}
        <div id="proofing" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-20">
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6 order-2 lg:order-1">
            <div className="flex gap-2.5">
              <Info className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Treatment vs Proofing</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  It is vital to distinguish between treatment and proofing. <strong>Treatment</strong> targets and removes the current active rodent population nesting in your building. <strong>Proofing</strong> seals physical structural holes to reduce the risk of a new colony entering.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              *Note: While our proofing uses the highest-grade anti-gnaw metal components, no building can be made permanently and unconditionally rodent-proof if future structural settling occurs, or if external doors and garage panels are left open.
            </p>

            <div className="border-t border-slate-200 pt-6">
              <a
                id="proofing-cta-btn"
                href="#contact"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Request a Proofing Quote</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Permanent Structural Exclusion</span>
            </div>
            
            <h3 className="text-display font-extrabold text-3xl text-slate-950 tracking-tight leading-none">
              High-Grade Rodent Proofing & Exclusion
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Rodent proofing is the absolute gold standard for permanent rodent exclusion. Our technicians conduct thorough physical searches of your perimeter walls, cavity gaps, and kitchen voids to locate and seal off ingress routes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Entry-Point Identification
                </h5>
                <p className="text-slate-600 pl-3 leading-relaxed">
                  Pinpointing concealed entry crevices, crawl space breaches, and structural subsidence lines.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Heavy-Duty Sealing
                </h5>
                <p className="text-slate-600 pl-3 leading-relaxed">
                  Filling voids with professional high-density steel mesh, copper wool, and concrete-bonded rodenticides.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Air-Brick Protection
                </h5>
                <p className="text-slate-600 pl-3 leading-relaxed">
                  Replacing broken clay air-bricks with bespoke, fine-mesh metal vent guards that preserve airflow but block mice.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Door-Gap Correction
                </h5>
                <p className="text-slate-600 pl-3 leading-relaxed">
                  Fitting garage doors and heavy service entrances with robust brush strips and steel plate astragals.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Service Penetrations
                </h5>
                <p className="text-slate-600 pl-3 leading-relaxed">
                  Sleeving gas, water, and electrical conduits under kitchen cabinets with stainless steel wrap collars.
                </p>
              </div>

              <div className="space-y-1">
                <h5 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Drainage Risks
                </h5>
                <p className="text-slate-600 pl-3 leading-relaxed">
                  Securing active sewer runs with heavy duty double-flap interceptors and rat drainage blockers.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
