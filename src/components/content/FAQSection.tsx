import { useState } from "react";
import { faqsData } from "@/data/faqs.ts";
import { HelpCircle, ChevronDown, ChevronUp, Search } from "lucide-react";

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("rats-vs-mice"); // Default open first FAQ

  const categories = [
    { value: "all", label: "All Questions" },
    { value: "general", label: "General" },
    { value: "rats", label: "Rats" },
    { value: "mice", label: "Mice" },
    { value: "trapping", label: "Trapping" },
    { value: "proofing", label: "Proofing" },
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory && faq.status === "published";
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white scroll-mt-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support Desk</span>
          </div>
          <h2 className="text-display font-extrabold text-3xl text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            Practical answers regarding mouse runs, rat behaviors, traps, and physical building exclusion.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              id="faq-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search rodent questions (e.g. 'drain', 'proof', 'nest')..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
              aria-label="Search FAQs"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`faq-cat-btn-${cat.value}`}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setOpenId(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.value
                    ? "bg-rose-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="divide-y divide-slate-150 border-t border-b border-slate-150">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center text-left py-2 font-extrabold text-slate-900 text-sm sm:text-base hover:text-rose-600 focus:outline-none focus:text-rose-600 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-rose-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div
                      id={`faq-panel-${faq.id}`}
                      className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-1"
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-150">
            <p className="text-slate-500 text-sm font-semibold">No questions match your filter or search term.</p>
            <p className="text-slate-400 text-xs mt-1">Try searching for simple words like "proofing", "rats", or "visit".</p>
          </div>
        )}

      </div>
    </section>
  );
}
