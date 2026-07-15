import { Eye, HelpCircle, Shield, Briefcase, Search, Activity, CornerDownRight } from "lucide-react";

interface ProblemOption {
  id: string;
  label: string;
  description: string;
  targetId: string;
  icon: any;
}

export default function ProblemSelector() {
  const options: ProblemOption[] = [
    {
      id: "seen-rat",
      label: "I have seen a rat",
      description: "Immediate rat control, trapping, and drain inspection solutions.",
      targetId: "rat-control",
      icon: Eye
    },
    {
      id: "seen-mouse",
      label: "I have seen a mouse",
      description: "Fast-response house/field mouse treatment and cavity checks.",
      targetId: "mouse-control",
      icon: Eye
    },
    {
      id: "hear-scratching",
      label: "I hear scratching",
      description: "Loft space, wall cavity, and ceiling sound investigation.",
      targetId: "proofing",
      icon: Activity
    },
    {
      id: "found-droppings",
      label: "I found droppings",
      description: "Rodent identification and thorough sanitary surveys.",
      targetId: "rat-control",
      icon: Search
    },
    {
      id: "need-proofing",
      label: "I need rodent proofing",
      description: "Defensive gaps sealing using wire mesh and chew-proof seals.",
      targetId: "proofing",
      icon: Shield
    },
    {
      id: "manage-commercial",
      label: "I manage commercial property",
      description: "Compliance contracts, monitoring, and discreet treatments.",
      targetId: "commercial",
      icon: Briefcase
    },
    {
      id: "need-inspection",
      label: "I need an inspection",
      description: "Comprehensive property entry surveys by qualified staff.",
      targetId: "contact",
      icon: Search
    },
    {
      id: "unsure-rodent",
      label: "I am unsure which rodent is present",
      description: "Guidance to identify signs, droppings, or activity habits.",
      targetId: "faqs",
      icon: HelpCircle
    }
  ];

  const handleSelect = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="problem-selector-section" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.05),transparent)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-rose-500 uppercase font-mono">
            Direct Action Centre
          </span>
          <h2 className="text-display font-extrabold text-3xl sm:text-4xl text-white mt-2 leading-tight">
            How can we secure your property today?
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            Select the situation that best matches your concern to jump directly to specialist advice or request a prioritized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt) => {
            const IconComponent = opt.icon;
            return (
              <button
                key={opt.id}
                id={`problem-btn-${opt.id}`}
                onClick={() => handleSelect(opt.targetId)}
                className="group text-left bg-slate-950 hover:bg-slate-950/80 border border-slate-800 hover:border-rose-500 rounded-2xl p-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 flex flex-col justify-between h-52 shadow-md hover:shadow-rose-950/20"
              >
                <div>
                  <div className="bg-slate-900 group-hover:bg-rose-950/40 text-slate-400 group-hover:text-rose-400 w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-display font-extrabold text-white text-base group-hover:text-rose-400 transition-colors">
                    {opt.label}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-extrabold text-rose-500 mt-4 uppercase tracking-wider font-mono opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Explore Route</span>
                  <CornerDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
