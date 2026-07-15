import { useState, FormEvent } from "react";
import { isPostcodeServed } from "@/data/postcodes.ts";
import { Search, CheckCircle, AlertCircle, MapPin } from "lucide-react";

export default function PostcodeChecker() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<{ served: boolean; area?: string; error?: string } | null>(null);

  const handleCheck = (e: FormEvent) => {
    e.preventDefault();
    const checkResult = isPostcodeServed(postcode);
    setResult(checkResult);

    // Track check event (consent aware)
    if (typeof window !== "undefined") {
      console.log(`[Tracking] Postcode checked: ${postcode} - Served: ${checkResult.served}`);
    }
  };

  return (
    <div id="postcode-checker-container" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-rose-500" />
        <h3 className="text-display font-bold text-white text-lg">
          Check Service Coverage
        </h3>
      </div>
      
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        Verify if our specialist rodent trapping and proofing teams are currently active in your London postcode sector.
      </p>

      <form onSubmit={handleCheck} className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              id="postcode-check-input"
              type="text"
              value={postcode}
              onChange={(e) => {
                setPostcode(e.target.value);
                setResult(null); // Clear previous result on type
              }}
              placeholder="e.g. SW11 4AL"
              maxLength={10}
              className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm font-semibold uppercase focus:outline-none focus:border-rose-500 transition-colors"
              aria-label="Enter London Postcode"
            />
          </div>
          <button
            id="postcode-check-submit"
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-sm shadow-md"
          >
            <Search className="w-4 h-4" />
            <span>Check</span>
          </button>
        </div>

        {/* Results Feedback Area */}
        {result && (
          <div 
            id="postcode-checker-result"
            className={`p-4 rounded-xl text-sm leading-relaxed flex gap-3 transition-opacity duration-300 ${
              result.served 
                ? "bg-emerald-950/40 border border-emerald-900 text-emerald-300" 
                : "bg-rose-950/30 border border-rose-900 text-rose-300"
            }`}
          >
            {result.served ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">We Cover Your Area!</p>
                  <p className="text-emerald-400 mt-0.5">
                    Excellent news, we genuinely serve <strong className="text-white">{result.area}</strong> with rapid-response rodent inspections and proofing.
                  </p>
                </div>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">Service Notice</p>
                  <p className="text-rose-400 mt-0.5">{result.error}</p>
                </div>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
