import { useState } from "react";
import { BUSINESS_CONFIG } from "@/data/business.ts";
import { Menu, X, Phone, FileText, ShieldAlert } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Rat Control", href: "#rat-control" },
    { name: "Mouse Control", href: "#mouse-control" },
    { name: "Trapping", href: "#trapping" },
    { name: "Proofing", href: "#proofing" },
    { name: "Commercial", href: "#commercial" },
    { name: "Service Areas", href: "#areas" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      id="main-header" 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <a 
            id="logo-link"
            href="#" 
            className="flex items-center gap-2.5 text-slate-950 focus-visible:outline-rose-500"
          >
            <div className="bg-rose-600 text-white p-2 rounded-lg flex items-center justify-center shadow-md">
              <ShieldAlert className="w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight leading-none text-slate-950 text-display">
                RODENTS
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-none mt-0.5">
                Exterminators
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`nav-link-${item.href.replace('#', '')}`}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-rose-600 rounded-md transition-colors focus-visible:outline-rose-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-phone-cta"
              href={BUSINESS_CONFIG.phoneLink}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 hover:text-rose-600 border border-slate-300 hover:border-rose-300 rounded-lg transition-all focus-visible:outline-rose-500"
            >
              <Phone className="w-4 h-4 text-rose-500" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <a
              id="header-quote-cta"
              href="#contact"
              className="glow-btn bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 text-sm font-bold rounded-lg flex items-center gap-1.5 transition-colors shadow-sm focus-visible:outline-rose-500"
            >
              <FileText className="w-4 h-4" />
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Mobile Menu button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              id="mobile-header-phone"
              href={BUSINESS_CONFIG.phoneLink}
              className="p-2.5 text-slate-700 hover:text-rose-600 border border-slate-200 rounded-lg sm:hidden focus-visible:outline-rose-500"
              aria-label="Call Rodents Exterminators"
            >
              <Phone className="w-5 h-5 text-rose-600" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-slate-100 focus:outline-none focus-visible:outline-rose-500"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-slate-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`mobile-nav-link-${item.href.replace('#', '')}`}
                href={item.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 flex flex-col gap-3 px-4">
              <a
                id="mobile-nav-phone-cta"
                href={BUSINESS_CONFIG.phoneLink}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-center font-bold text-slate-800 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5 text-rose-500" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                id="mobile-nav-quote-cta"
                href="#contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-center font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors shadow-sm"
              >
                <FileText className="w-5 h-5" />
                <span>Request a Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
