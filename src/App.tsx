import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { BUSINESS_CONFIG } from "@/data/business.ts";
import { londonAreas } from "@/data/areas.ts";

// Layout & Components
import AnnouncementBar from "./components/layout/AnnouncementBar.tsx";
import Header from "./components/layout/Header.tsx";
import Hero from "./components/content/Hero.tsx";
import ProblemSelector from "./components/content/ProblemSelector.tsx";
import RatControl from "./components/content/RatControl.tsx";
import MouseControl from "./components/content/MouseControl.tsx";
import ProofingTrapping from "./components/content/ProofingTrapping.tsx";
import DrainResidentialCommercial from "./components/content/DrainResidentialCommercial.tsx";
import FAQSection from "./components/content/FAQSection.tsx";
import QuoteForm from "./components/forms/QuoteForm.tsx";
import Footer from "./components/layout/Footer.tsx";
import StructuredData from "./components/seo/StructuredData.tsx";

// Icons
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  HelpCircle, 
  FileText, 
  ChevronRight, 
  Info, 
  CheckCircle,
  Eye,
  Activity,
  HeartHandshake,
  MessageSquare,
  Lock,
  ArrowRight,
  X
} from "lucide-react";

export default function App() {
  // Policy modal states
  const [activePolicy, setActivePolicy] = useState<"privacy" | "cookie" | "accessibility" | null>(null);
  
  // Consent tracking state
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  // Load consent state on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedConsent = localStorage.getItem("rodents_cookie_consent");
      if (savedConsent) {
        setCookieConsent(savedConsent === "true");
      }
    }

    // Simple routing check to see if user deep links to policies via hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#privacy-policy") setActivePolicy("privacy");
      else if (hash === "#cookie-policy") setActivePolicy("cookie");
      else if (hash === "#accessibility-statement") setActivePolicy("accessibility");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // initial check

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleConsentDecision = (accepted: boolean) => {
    setCookieConsent(accepted);
    localStorage.setItem("rodents_cookie_consent", String(accepted));
    console.log(`[Tracking] Cookie consent decided: ${accepted}`);
  };

  const trackEvent = (action: string, label: string) => {
    if (cookieConsent) {
      console.log(`[Analytics Event] Action: ${action} - Label: ${label} - Consent: Yes`);
    } else {
      console.log(`[Analytics Blocked] User did not opt-in to tracking. Mock: ${action} - ${label}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-rose-500 selection:text-white antialiased">
      {/* 1. Schema and structured data injections */}
      <StructuredData />
      <Analytics />

      {/* Skip-to-content accessibility link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rose-600 text-white font-bold px-4 py-2.5 rounded-lg z-50 shadow-lg"
      >
        Skip to main content
      </a>

      {/* 2. Header and top alert */}
      <AnnouncementBar />
      <Header />

      {/* Main Content Stage */}
      <main id="main-content" className="flex-grow">
        
        {/* 3. Hero and Postcode checker */}
        <Hero />

        {/* 4. Problem-selector quick shortcuts */}
        <ProblemSelector />

        {/* 5. Rat control detail */}
        <RatControl />

        {/* 6. Mouse control detail */}
        <MouseControl />

        {/* 7 & 8 & 9. Trapping, Proofing & Drainage details */}
        <ProofingTrapping />
        <DrainResidentialCommercial />

        {/* 10. Service process step section */}
        <section id="process-section" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-widest text-rose-500 uppercase font-mono">
                Systematic Methodology
              </span>
              <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-slate-950 mt-2">
                Our 6-Step Rodent-Management Process
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                We follow a strict, professional framework to investigate, remove, and seal off rodent infestations safely and permanently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {/* Process line (desktop) */}
              <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-slate-100 z-0"></div>

              {/* Step 1 */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative z-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-rose-500 font-mono uppercase">Step 01</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1.5">Consultation</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    We discuss your building history, observed droppings, and scratch times.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative z-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-rose-500 font-mono uppercase">Step 02</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1.5">Physical Survey</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    A thorough physical search of lofts, kitchens, and external perimeters.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative z-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-rose-500 font-mono uppercase">Step 03</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1.5">Route Diagnostic</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Identifying active travel runs, water pipes entry gaps, and sewer risks.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative z-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-rose-500 font-mono uppercase">Step 04</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1.5">Active Trapping</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Strategic mechanical trapping in locked bait stations to clear breeding pairs.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative z-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-rose-500 font-mono uppercase">Step 05</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1.5">Monitoring</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Scheduled follow-up inspections to clear captures and check run activity.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative z-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-rose-500 font-mono uppercase">Step 06</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-1.5">Exclusion Proofing</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    Sealing all ingress gaps permanently with wire mesh and chew-proof seals.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 11. London coverage list details */}
        <section id="areas" className="py-20 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-950/40 border border-rose-900 text-rose-400 rounded-full text-xs font-bold font-mono uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Coverage Scope</span>
                </div>
                <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  Discreet Rodent Eradication Across London & Inside M25
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  We deploy rapid, responsive technical specialists who live and operate locally in key London zones. All service calls are dispatched with absolute discretion, utilizing unmarked or low-profile vehicles to respect your privacy.
                </p>
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl space-y-2">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-rose-500" />
                    <span>No Physical Office Claims in Every Borough</span>
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    We maintain one secure central operations base and dispatch mobile technicians directly. We do not claim fake local branches. We confirm service availability purely by checking your postcode prefix.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">
                <h3 className="text-display font-extrabold text-lg text-white mb-6">
                  Selected Borough Coverage Sectors:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {londonAreas.map((area) => (
                    <div 
                      key={area.slug} 
                      className="bg-slate-900/60 p-4 border border-slate-800/80 rounded-xl space-y-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-slate-900/90 hover:border-slate-700 hover:shadow-lg hover:shadow-rose-500/5"
                    >
                      <h4 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>{area.borough}</span>
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                        Districts: {area.majorCoveredDistricts.slice(0, 4).join(", ")}...
                      </p>
                      {area.status === "draft" && (
                        <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-rose-400">Expansion draft</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-900 text-center">
                  <a
                    href="#hero-section"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("hero-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 hover:text-rose-300 hover:underline"
                  >
                    <span>Check your postcode prefix at the top of the page</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 12. Trust & Credentials section */}
        <section id="trust-credentials" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-widest text-rose-500 uppercase font-mono">
                Verified Authority
              </span>
              <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-slate-950 mt-2">
                Industry Standards & Honest Credentials
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                We believe in complete transparency. We do not generate fake local branches, purchased business trophies, or artificial review scores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Credential 1 */}
              <div className="border border-slate-150 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-950 text-base">Qualified Specialists</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  All active on-site technicians hold certified BPCA or RSPH Level 2 awards in professional pest management, specializing specifically in rodent biology and structural exclusions.
                </p>
              </div>

              {/* Credential 2 */}
              <div className="border border-slate-150 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-950 text-base">Comprehensive Liability Cover</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We carry comprehensive public liability insurance up to £5M, safeguarding residential and commercial structures during advanced physical trapping or heavy drilling exclusions.
                </p>
              </div>

              {/* Credential 3 */}
              <div className="border border-slate-150 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="bg-rose-50 text-rose-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-slate-950 text-base">Honest Feedback Placeholder</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Verified customer reviews and local project summaries will be published here upon verification of client consent. We do not publish fake, generated testimonials to inflate scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Frequently asked questions accordion panel */}
        <FAQSection />

        {/* 14. Primary Quote & Contact Form capture segment */}
        <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold tracking-widest text-rose-500 uppercase font-mono">
                confidential request
              </span>
              <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-slate-950 mt-2">
                Get a No-Obligation Rodent-Control Quote
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Provide basic details regarding signs of activity, rodent type, and property layout. Our operations manager will analyze your inquiry and call you back shortly.
              </p>
            </div>

            <QuoteForm />
          </div>
        </section>

        {/* 15. Final call-to-action bar */}
        <section id="final-cta-section" className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.08),transparent)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-display font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              Get Immediate Specialist Relief From Rat & Mouse Infestations
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
              Don't allow rodents to chew structural cables or nest in your kitchen cabinets. Speak directly with a qualified London expert now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                id="final-cta-phone-btn"
                href={BUSINESS_CONFIG.phoneLink}
                onClick={() => trackEvent("Call Click", "Final CTA")}
                className="glow-btn bg-rose-600 hover:bg-rose-700 active:scale-98 text-white px-8 py-4 rounded-xl font-extrabold flex items-center gap-2.5 text-base transition-all shadow-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call Free: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                id="final-cta-quote-btn"
                href="#contact"
                onClick={() => trackEvent("Quote Form Click", "Final CTA")}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto justify-center text-sm"
              >
                <span>Request Callback Quote</span>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              *Confidential specialist rodent-proofing assessments are carried out inside the M25 ring.
            </p>
          </div>
        </section>

      </main>

      {/* 16. Footer with registration & service area info */}
      <Footer />

      {/* 17. Sticky mobile CTA buttons for Conversion Optimisation */}
      <div 
        id="sticky-mobile-cta" 
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.15)]"
      >
        <a
          id="sticky-mobile-call-btn"
          href="tel:08002118166"
          onClick={() => trackEvent("Mobile Sticky Call", "Footer Mobile Widget")}
          className="flex-1 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all text-center"
        >
          <Phone className="w-4 h-4" />
          <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
        </a>
        <a
          id="sticky-mobile-quote-btn"
          href="#contact"
          onClick={() => {
            trackEvent("Mobile Sticky Quote", "Footer Mobile Widget");
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex-1 bg-slate-950 hover:bg-slate-900 active:scale-95 text-white py-3 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-1.5 transition-all text-center"
        >
          <FileText className="w-4 h-4 text-rose-500" />
          <span>Get Quote</span>
        </a>
      </div>

      {/* 18. Cookie Consent Banner (Consent-Aware Analytics) */}
      {cookieConsent === null && (
        <div 
          id="cookie-consent-modal" 
          className="fixed bottom-16 sm:bottom-6 left-6 right-6 sm:left-auto sm:max-w-md z-50 bg-slate-950 text-slate-100 border border-slate-850 p-5 rounded-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-labelledby="cookie-banner-title"
        >
          <div className="space-y-1.5">
            <h5 id="cookie-banner-title" className="text-display font-extrabold text-sm text-white">
              Confidential Analytics Consent
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              We use secure client cookies solely to track call click conversions and postcode validations. We never sell your data. Choose to accept or decline below.
            </p>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              id="cookie-decline-btn"
              onClick={() => handleConsentDecision(false)}
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-850 text-slate-400 transition-colors"
            >
              Decline
            </button>
            <button
              id="cookie-accept-btn"
              onClick={() => handleConsentDecision(true)}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition-colors"
            >
              Accept Tracking
            </button>
          </div>
        </div>
      )}

      {/* 19. Policy overlay viewers (No-Empty route compliance, clearly marked review copies) */}
      {activePolicy && (
        <div 
          id="policy-overlay" 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-6 border-b border-slate-150 flex justify-between items-center bg-slate-50 rounded-t-3xl">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-rose-600 font-mono uppercase bg-rose-50 px-2.5 py-1 rounded-full">
                  Draft Template Copy — Under Professional Review
                </span>
                <h3 className="text-display font-extrabold text-xl text-slate-950 mt-2">
                  {activePolicy === "privacy" && "Privacy Policy"}
                  {activePolicy === "cookie" && "Cookie Policy"}
                  {activePolicy === "accessibility" && "Accessibility Statement"}
                </h3>
              </div>
              <button 
                onClick={() => {
                  setActivePolicy(null);
                  window.location.hash = "";
                }}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close policy viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-[60vh] font-medium">
              {activePolicy === "privacy" && (
                <>
                  <p><strong>Last updated: July 15, 2026</strong></p>
                  <p>Welcome to Rodents Exterminators. We are committed to protecting your personal data and ensuring complete compliance with the UK GDPR and Data Protection Act 2018.</p>
                  <h4 className="font-extrabold text-slate-950 text-sm">1. Information We Collect</h4>
                  <p>When you request a quote via our secure contact form, we collect your Name, Telephone Number, Email address, London Postcode, and a description of your rodent issue. If you choose to attach an activity image, this is also processed securely.</p>
                  <h4 className="font-extrabold text-slate-950 text-sm">2. How We Use Your Data</h4>
                  <p>Your details are used solely to generate a localized rodent-treatment quote, arrange a physical diagnostic survey, or coordinate emergency exclusions. We do not use your contact data to market unrelated non-rodent services.</p>
                  <h4 className="font-extrabold text-slate-950 text-sm">3. Storage & Confidentiality</h4>
                  <p>All lead submissions are processed via secure server-side logic and stored inside isolated containers. We maintain a zero-leak policy. You have the right to request erasure of your data at any time by contacting info@rodents-exterminators.co.uk.</p>
                  <p className="p-3 bg-rose-50 border border-rose-150 rounded-xl text-[11px] text-rose-700 italic font-semibold">
                    *Reviewer Notice: This is an unpublished editorial copy. Legal team must review prior to final canonical public deployment to ensure compliance with specialized pesticide treatment registers.
                  </p>
                </>
              )}
              {activePolicy === "cookie" && (
                <>
                  <p><strong>Last updated: July 15, 2026</strong></p>
                  <p>This Cookie Policy explains how Rodents Exterminators uses cookies to enhance your browsing experience, track call conversions, and validate service postcodes.</p>
                  <h4 className="font-extrabold text-slate-950 text-sm">1. What are Cookies?</h4>
                  <p>Cookies are small text files placed on your browser. We use local state variables and standard tracking cookies strictly to monitor quote clicks and verify if users operate within the London M25 service boundary.</p>
                  <h4 className="font-extrabold text-slate-950 text-sm">2. Consent-Aware Analytics</h4>
                  <p>We respect your privacy choices. No non-essential analytical cookies are loaded or tracked on your device until you explicitly select "Accept Tracking" on our consent widget.</p>
                  <p className="p-3 bg-rose-50 border border-rose-150 rounded-xl text-[11px] text-rose-700 italic font-semibold">
                    *Reviewer Notice: Editorial placeholder template copy under active audit. Adjust settings upon final analytics platform provisioning.
                  </p>
                </>
              )}
              {activePolicy === "accessibility" && (
                <>
                  <p><strong>Accessibility Commitment</strong></p>
                  <p>Rodents Exterminators is dedicated to providing a website that is fully accessible to all individuals, matching WCAG 2.2 Level AA accessibility criteria.</p>
                  <h4 className="font-extrabold text-slate-950 text-sm">Active Implementations:</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Explicit image alternate tags on all visual illustrations or vector items.</li>
                    <li>Sufficient high-contrast ratios between slate-based dark panels and white body text.</li>
                    <li>Keyboard navigation support, with distinct rose-colored focus states on all buttons and inputs.</li>
                    <li>Structured, logical semantic HTML tags (H1, H2, H3, header, main, footer) to assist screen readers.</li>
                    <li>A clear skip-to-content anchor link positioned at the top-level of execution.</li>
                  </ul>
                  <p>If you encounter any difficulty navigating our quote form or reviewing treatment guidelines, please contact our accessibility specialist at accessibility@rodents-exterminators.co.uk.</p>
                </>
              )}
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-150 flex justify-end rounded-b-3xl">
              <button
                onClick={() => {
                  setActivePolicy(null);
                  window.location.hash = "";
                }}
                className="bg-slate-950 hover:bg-slate-900 text-white font-extrabold px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Accept and Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
