import { BUSINESS_CONFIG } from "@/data/business.ts";
import { Eye, Home, Briefcase, Phone, Mail, AlertCircle } from "lucide-react";

export default function DrainResidentialCommercial() {
  return (
    <section id="sectors-drainage-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION A: DRAIN RAT INVESTIGATIONS */}
        <div id="drainage-investigations" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-3xl shadow-md space-y-5">
            <div className="flex gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-950 text-sm">Understanding Sewer Ingress</h4>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  While damaged pipework or open junctions are a major vector for rat entry in urban areas, we do not claim that every rat problem originates from drains. Infestations can also stem from ground level gaps or overhanging roof cavities.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              If an underground breach is confirmed, physical drain-proofing must take place <strong>only</strong> after the precise exit point is identified, preventing rats from becoming permanently trapped in wall cavities.
            </p>
            <div className="border-t border-slate-150 pt-5">
              <a 
                id="drain-cta-btn"
                href={BUSINESS_CONFIG.phoneLink} 
                className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Drain Desk: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold font-mono uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5" />
              <span>Sewer Ingress Assessment</span>
            </div>
            <h3 className="text-display font-extrabold text-3xl text-slate-950 tracking-tight leading-none">
              Drain-Related Rat Investigations
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Subterranean rats are superb swimmers and can exploit even minor cracks in clay pipes to burrow into surrounding soil and climb cavity walls. If we suspect sewer activity, our investigation encompasses:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 pl-2">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Complete Property Cavity Inspection</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Exit Route & Burrow Assessment</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Inspection Chamber Condition Checks</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Coordination with Drainage Surveyors</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Stainless Steel Rat Blocker Fits</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                <span>Cavity-Back Fill & Proofing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION B: RESIDENTIAL & COMMERCIAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          
          {/* RESIDENTIAL */}
          <div id="residential" className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-md space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
              <div className="bg-rose-50 text-rose-600 p-3 rounded-2xl">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-display font-extrabold text-slate-950 text-xl leading-none">
                  Residential Rodent Control
                </h4>
                <p className="text-slate-500 text-xs mt-1">Protecting families and private dwellings.</p>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We provide rapid-response, safe rodent control treatments for homeowners and private tenants across London. We understand how distressing it is to discover rodents in your home, which is why we prioritise prompt and discreet dispatch.
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <span className="block text-xs font-bold text-slate-800 mb-2">Areas of the Home We Secure:</span>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-600">
                <span>• Loft & Attic Spaces</span>
                <span>• Kitchen Cupboards</span>
                <span>• Suspended Ceilings</span>
                <span>• Extensions & Cavities</span>
                <span>• Garages & Basements</span>
                <span>• Gardens & Sheds</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                id="residential-cta"
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-xl text-xs transition-colors"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                <span>Book Domestic Inspection</span>
              </a>
            </div>
          </div>

          {/* COMMERCIAL */}
          <div id="commercial" className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-md space-y-6 scroll-mt-20">
            <div className="flex items-center gap-3">
              <div className="bg-rose-50 text-rose-600 p-3 rounded-2xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-display font-extrabold text-slate-950 text-xl leading-none">
                  Commercial Rodent Control
                </h4>
                <p className="text-slate-500 text-xs mt-1">Discreet business compliance and monitoring.</p>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Maintain regulatory standards and guard your commercial reputation with our bespoke rodent monitoring and exclusion contracts. We provide fully documented safety logs to satisfy local environmental health and food safety audits.
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <span className="block text-xs font-bold text-slate-800 mb-2">Commercial Verticals We Serve:</span>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-600">
                <span>• Restaurants & Cafés</span>
                <span>• Hotels & Hospitality</span>
                <span>• Warehouses & Logistics</span>
                <span>• Offices & Retail Units</span>
                <span>• Letting Agents & Landlords</span>
                <span>• Block Management</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 italic">
              *While we provide full BPCA-compliant logs, we do not make unsupported or absolute compliance guarantees, as site hygiene levels must be maintained by the premises operator.
            </p>

            <div className="pt-2">
              <a 
                id="commercial-cta"
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-5 rounded-xl text-xs transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Request Commercial Consultation</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
