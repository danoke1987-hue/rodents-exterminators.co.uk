import { BUSINESS_CONFIG } from "@/data/business.ts";
import { Info, Sparkles, HelpCircle, HardHat, Phone, ArrowRight } from "lucide-react";

export default function MouseControl() {
  const signs = [
    { title: "Spindle-Shaped Droppings", desc: "Very small, dark droppings, only 3-8mm long with pointed ends, scattered along cupboard rims or boiler bases." },
    { title: "Gnawed Packaging", desc: "Tiny teeth nibble holes on cereal boxes, flour sacks, pet food bags, and insulation plastics." },
    { title: "Nesting Materials", desc: "Shredded paper, cardboard, fabrics, or loft insulation gathered in warm corners, especially behind refrigerators." },
    { title: "Squeaking & Wall Noises", desc: "Light scratching or pitter-patter scampering sounds in wall cavities, under kitchen units, and within suspended ceilings." },
    { title: "Distinct Smell/Odour", desc: "A strong, stale, ammonia-like odour that persists in enclosed cupboard areas or under sink partitions." },
    { title: "Urine Pillars", desc: "In severe or prolonged infestations, small mounds of dirt, grease, and urine form along regular travel paths." }
  ];

  return (
    <section id="mouse-control" className="py-20 bg-slate-50 border-y border-slate-200/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:ml-auto lg:text-right">
          <div className="inline-flex lg:flex-row-reverse items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Precision Cavity Inspections</span>
          </div>
          <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
            Professional Mouse Treatment & Control
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Mice behave differently than rats: they are highly inquisitive, breed at an extraordinary rate, and can squeeze through structural gaps as small as 6mm. Our mouse treatments focus on room-by-room kitchen diagnostic grids and fine mesh exclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: CTA & Info Panel */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl space-y-6 order-2 lg:order-1">
            <h3 className="text-display font-extrabold text-xl text-slate-900 flex items-center gap-2">
              <HardHat className="w-5 h-5 text-rose-500" />
              <span>Targeted Kitchen & Cavity Grid</span>
            </h3>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              Mice typically establish nesting sites close to food sources, commonly inside kickboards, behind dishwashers, boiler cupboards, and wall plaster cavities.
            </p>

            <ul className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                <span><strong>Micro-Trapping Enclosures:</strong> We deploy sensitive precision-sprung mechanical traps in lockable bait boxes, specifically set up to handle the lightweight body mass of house mice.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                <span><strong>No Broad Toxic Broadcasts:</strong> All control measures are contained inside protective enclosures. We ensure children and pets are completely safe.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                <span><strong>Detailed Void Sealing:</strong> We physically block off internal pipe collars and service penetrations under sinks and boilers, which are the main mouse superhighways.</span>
              </li>
            </ul>

            <div className="border-t border-slate-150 pt-6 space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Found mouse droppings behind your kitchen kickboards? Contact our responsive, discreet London team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  id="mouse-section-phone-cta"
                  href={BUSINESS_CONFIG.phoneLink}
                  className="flex-1 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  id="mouse-section-quote-cta"
                  href="#contact"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-colors"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Signs of Activity */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-display font-extrabold text-xl text-slate-950 mb-6 flex items-center gap-2 lg:justify-end">
                <span className="w-1.5 h-6 bg-rose-600 rounded-full lg:order-2"></span>
                <span className="lg:order-1">Signs of Mouse Infestation</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {signs.map((sign, i) => (
                  <div key={i} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <h4 className="font-extrabold text-slate-900 text-sm">{sign.title}</h4>
                    <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">{sign.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 bg-slate-100/50 p-6 rounded-2xl border border-dashed">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Follow-Up and Santiation Guidance</h4>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed">
                    Unlike rats, which require abundant water, mice survive entirely on moisture from food, making strict food sanitation critical. We clear captures over a structured 2-visit monitor program and provide practical, house-specific hygiene advice to aid your permanent exclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
