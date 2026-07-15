import { BUSINESS_CONFIG } from "@/data/business.ts";
import { ShieldAlert, FileText, Globe, CheckCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <div className="bg-rose-600 text-white p-1.5 rounded-lg">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white uppercase text-display">
                {BUSINESS_CONFIG.name}
              </span>
            </a>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Rodents Exterminators is a highly specialized, local rodent-exclusion brand serving residential houses, flats, commercial hospitality facilities, and property portfolios across London.
            </p>

            <div className="text-[11px] font-semibold text-slate-500 space-y-1">
              <p>Company Registration Number: {BUSINESS_CONFIG.companyNumberPlaceholder} (Pending Verification)</p>
              <p>Email: {BUSINESS_CONFIG.emailPlaceholder}</p>
              <p>Headquarters: {BUSINESS_CONFIG.businessAddress}</p>
            </div>
          </div>

          {/* Column 2: Service statement */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider text-display">
              Primary Service Area
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our rapid response teams genuinely cover all boroughs inside the M25 ring including Westminster, Camden, Islington, Kensington & Chelsea, Wandsworth, and Richmond. Availability is confirmed immediately by postcode sector check.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Greater London Local Coverage Active</span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider text-display">
              Legal & Utilities
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#privacy-policy" className="hover:text-rose-400 transition-colors">
                  Privacy Policy (Review Copy)
                </a>
              </li>
              <li>
                <a href="#cookie-policy" className="hover:text-rose-400 transition-colors">
                  Cookie Policy (Review Copy)
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-rose-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-rose-400 transition-colors inline-flex items-center gap-1">
                  <span>XML Sitemap</span>
                  <Globe className="w-3.5 h-3.5 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="#accessibility-statement" className="hover:text-rose-400 transition-colors">
                  Accessibility Link
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-600">
            <span>Specialist UK Rodent-Control Content Standard</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
