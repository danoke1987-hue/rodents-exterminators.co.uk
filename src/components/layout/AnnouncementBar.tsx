import { BUSINESS_CONFIG } from "@/data/business.ts";
import { Phone, AlertCircle } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div 
      id="announcement-bar" 
      className="bg-slate-950 text-slate-100 border-b border-slate-800 text-xs py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 font-medium tracking-wide"
    >
      <div className="flex items-center gap-1.5 text-slate-300">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Specialist London Rodent Response Team — Serving inside the M25</span>
      </div>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <div className="flex items-center gap-1 text-rose-400">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Strictly Rodent-Only Eradication & Proofing</span>
        </div>
        <a 
          id="announcement-phone-link"
          href="tel:08002118166" 
          className="flex items-center gap-1 text-white hover:text-rose-400 transition-colors font-semibold"
        >
          <Phone className="w-3 h-3 text-rose-500" />
          <span>Call Free: {BUSINESS_CONFIG.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
