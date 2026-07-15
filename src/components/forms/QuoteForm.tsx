import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { BUSINESS_CONFIG } from "@/data/business.ts";
import { Send, CheckCircle, AlertCircle, Upload, ShieldCheck, RefreshCw } from "lucide-react";

export default function QuoteForm() {
  // Form values state
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [rodentProblem, setRodentProblem] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isCommercial, setIsCommercial] = useState(false);
  const [urgency, setUrgency] = useState("Routine");
  const [description, setDescription] = useState("");
  const [preferredContactTime, setPreferredContactTime] = useState("Morning");
  const [consent, setConsent] = useState(false);
  
  // Activity location checkboxes
  const [activityLocations, setActivityLocations] = useState<string[]>([]);
  // Signs observed checkboxes
  const [signsObserved, setSignsObserved] = useState<string[]>([]);

  // File upload state
  const [fileData, setFileData] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [fileError, setFileError] = useState<string>("");
  
  // Honeypot field (to trap automated spam bots)
  const [honeypot, setHoneypot] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);
  const [serverErrors, setServerErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const availableLocations = ["Kitchen", "Loft/Attic", "Wall Cavities", "Floorboards", "Garden/External", "Cellar/Basement", "Other"];
  const availableSigns = ["Live Sighting", "Droppings", "Gnaw Marks", "Scratching Sounds", "Smell/Odour", "Voids/Burrows", "Other"];

  const handleLocationChange = (loc: string) => {
    setActivityLocations(prev =>
      prev.includes(loc) ? prev.filter(item => item !== loc) : [...prev, loc]
    );
  };

  const handleSignChange = (sign: string) => {
    setSignsObserved(prev =>
      prev.includes(sign) ? prev.filter(item => item !== sign) : [...prev, sign]
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File is too large. Maximum size is 5MB.");
        return;
      }
      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Only JPG, PNG and WEBP images are supported.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFileData(reader.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setServerErrors({});
    setGeneralError(null);
    setServerSuccess(null);

    // Initial client validation
    const localErrors: { [key: string]: string } = {};
    if (!name.trim()) localErrors.name = "Name is required.";
    if (!telephone.trim()) localErrors.telephone = "Telephone number is required.";
    if (!email.trim()) localErrors.email = "Email address is required.";
    if (!postcode.trim()) localErrors.postcode = "Postcode is required.";
    if (!rodentProblem) localErrors.rodentProblem = "Please select a rodent category.";
    if (!propertyType) localErrors.propertyType = "Property type is required.";
    if (!consent) localErrors.consent = "Consent to contact is required.";

    if (Object.keys(localErrors).length > 0) {
      setServerErrors(localErrors);
      setLoading(false);
      // Focus error summary for screen readers
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 100);
      return;
    }

    try {
      const payload = {
        name,
        telephone,
        email,
        postcode,
        rodentProblem,
        propertyType,
        isCommercial,
        activityLocations,
        signsObserved,
        urgency,
        description,
        preferredContactTime,
        consent,
        fileData,
        fileName,
        honeypot
      };

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerSuccess(data.message);
        // Clear form
        setName("");
        setTelephone("");
        setEmail("");
        setPostcode("");
        setRodentProblem("");
        setPropertyType("");
        setIsCommercial(false);
        setUrgency("Routine");
        setDescription("");
        setPreferredContactTime("Morning");
        setConsent(false);
        setActivityLocations([]);
        setSignsObserved([]);
        setFileData("");
        setFileName("");
      } else {
        if (data.errors) {
          setServerErrors(data.errors);
        }
        setGeneralError(data.message || "Failed to submit quote inquiry. Please try again.");
        setTimeout(() => {
          errorSummaryRef.current?.focus();
        }, 100);
      }
    } catch (err) {
      setGeneralError("A network error occurred. Please call 0800 211 8166 directly for emergency dispatch.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="quote-form-panel" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-8">
        <div className="bg-rose-50 text-rose-600 p-3 rounded-2xl">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-display font-extrabold text-slate-950 text-2xl">
            Request an Expert Quote
          </h3>
          <p className="text-slate-500 text-sm mt-0.5">
            Strictly confidential, no-obligation rodent solutions across London.
          </p>
        </div>
      </div>

      {/* Accessible WCAG Error Summary */}
      {Object.keys(serverErrors).length > 0 && (
        <div 
          ref={errorSummaryRef}
          tabIndex={-1}
          className="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r-xl mb-6 focus:outline-none"
          role="alert"
          aria-labelledby="error-summary-heading"
        >
          <h4 id="error-summary-heading" className="text-rose-900 font-bold text-sm flex items-center gap-1.5">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>Please correct the {Object.keys(serverErrors).length} errors listed below:</span>
          </h4>
          <ul className="mt-2 space-y-1 text-xs text-rose-700 font-medium list-disc pl-5">
            {Object.entries(serverErrors).map(([key, value]) => (
              <li key={key}>
                <a href={`#field-${key}`} className="hover:underline">{value}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Success Notification */}
      {serverSuccess ? (
        <div id="form-success-banner" className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-2xl text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
          <h4 className="text-emerald-950 font-extrabold text-xl">Inquiry Received Successfully</h4>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            {serverSuccess}
          </p>
          <p className="text-slate-500 text-xs font-mono">
            Dispatched via London Rodent Response Team (Secure Token Registered)
          </p>
          <button
            onClick={() => setServerSuccess(null)}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-rose-600 hover:text-rose-700 hover:underline"
          >
            <span>Submit another request</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot Spam Bot Field (Invisible to human users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="field-honeypot">Leave this field blank</label>
            <input
              id="field-honeypot"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="field-name" className="block text-sm font-bold text-slate-800 mb-1.5">
                Contact Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="field-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors ${
                  serverErrors.name ? "border-rose-500 bg-rose-50/25" : "border-slate-200"
                }`}
                aria-invalid={!!serverErrors.name}
                aria-describedby={serverErrors.name ? "error-name" : undefined}
              />
              {serverErrors.name && (
                <p id="error-name" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {serverErrors.name}
                </p>
              )}
            </div>

            {/* Telephone */}
            <div>
              <label htmlFor="field-telephone" className="block text-sm font-bold text-slate-800 mb-1.5">
                Telephone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="field-telephone"
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="e.g. 07123 456789"
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors ${
                  serverErrors.telephone ? "border-rose-500 bg-rose-50/25" : "border-slate-200"
                }`}
                aria-invalid={!!serverErrors.telephone}
                aria-describedby={serverErrors.telephone ? "error-telephone" : undefined}
              />
              {serverErrors.telephone && (
                <p id="error-telephone" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {serverErrors.telephone}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="field-email" className="block text-sm font-bold text-slate-800 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="field-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors ${
                  serverErrors.email ? "border-rose-500 bg-rose-50/25" : "border-slate-200"
                }`}
                aria-invalid={!!serverErrors.email}
                aria-describedby={serverErrors.email ? "error-email" : undefined}
              />
              {serverErrors.email && (
                <p id="error-email" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {serverErrors.email}
                </p>
              )}
            </div>

            {/* Postcode */}
            <div>
              <label htmlFor="field-postcode" className="block text-sm font-bold text-slate-800 mb-1.5">
                London Postcode <span className="text-rose-500">*</span>
              </label>
              <input
                id="field-postcode"
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. SW11 4AL"
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors uppercase ${
                  serverErrors.postcode ? "border-rose-500 bg-rose-50/25" : "border-slate-200"
                }`}
                aria-invalid={!!serverErrors.postcode}
                aria-describedby={serverErrors.postcode ? "error-postcode" : undefined}
              />
              {serverErrors.postcode && (
                <p id="error-postcode" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {serverErrors.postcode}
                </p>
              )}
            </div>

            {/* Rodent Problem Category */}
            <div>
              <label htmlFor="field-rodentProblem" className="block text-sm font-bold text-slate-800 mb-1.5">
                Service Required <span className="text-rose-500">*</span>
              </label>
              <select
                id="field-rodentProblem"
                value={rodentProblem}
                onChange={(e) => setRodentProblem(e.target.value)}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors ${
                  serverErrors.rodentProblem ? "border-rose-500 bg-rose-50/25" : "border-slate-200"
                }`}
                aria-invalid={!!serverErrors.rodentProblem}
                aria-describedby={serverErrors.rodentProblem ? "error-rodentProblem" : undefined}
              >
                <option value="">-- Select Option --</option>
                <option value="Rats">Rats Treatment & Control</option>
                <option value="Mice">Mice Treatment & Control</option>
                <option value="Unsure">Rodent Issue (Unsure If Rats or Mice)</option>
                <option value="Rodent Proofing">Rodent Proofing & Cavity Sealing</option>
                <option value="Rodent Trapping">Specialist Active Trapping</option>
                <option value="Drain-related rat concern">Drain-Related Rat Investigation</option>
                <option value="Commercial monitoring">Commercial Preventive Monitoring</option>
                <option value="Other rodent concern">Other Rodent Investigation</option>
              </select>
              {serverErrors.rodentProblem && (
                <p id="error-rodentProblem" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {serverErrors.rodentProblem}
                </p>
              )}
            </div>

            {/* Property Type */}
            <div>
              <label htmlFor="field-propertyType" className="block text-sm font-bold text-slate-800 mb-1.5">
                Property Structure <span className="text-rose-500">*</span>
              </label>
              <select
                id="field-propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors ${
                  serverErrors.propertyType ? "border-rose-500 bg-rose-50/25" : "border-slate-200"
                }`}
                aria-invalid={!!serverErrors.propertyType}
                aria-describedby={serverErrors.propertyType ? "error-propertyType" : undefined}
              >
                <option value="">-- Select Option --</option>
                <option value="Terraced House">Terraced House</option>
                <option value="Semi-Detached House">Semi-Detached House</option>
                <option value="Detached House">Detached House</option>
                <option value="Flat / Apartment">Flat or Apartment</option>
                <option value="Commercial Restaurant / Café">Commercial Restaurant or Food Business</option>
                <option value="Commercial Office / Retail">Commercial Office or Retail Site</option>
                <option value="Property Management Portfolio">HMO or Block Management</option>
                <option value="Other">Other Structure</option>
              </select>
              {serverErrors.propertyType && (
                <p id="error-propertyType" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {serverErrors.propertyType}
                </p>
              )}
            </div>
          </div>

          {/* Sector selection - Residential vs Commercial */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <span className="block text-sm font-bold text-slate-800">Is this a commercial inquiry?</span>
              <span className="text-xs text-slate-500">For restaurants, offices, retail spaces, warehouses, or landlords.</span>
            </div>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sector"
                  checked={!isCommercial}
                  onChange={() => setIsCommercial(false)}
                  className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                />
                <span className="text-sm font-semibold text-slate-700">Residential</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sector"
                  checked={isCommercial}
                  onChange={() => setIsCommercial(true)}
                  className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                />
                <span className="text-sm font-semibold text-slate-700">Commercial</span>
              </label>
            </div>
          </div>

          {/* Activity Locations check grid */}
          <div>
            <span className="block text-sm font-bold text-slate-800 mb-2">
              Where have you noticed rodent activity? (Select all that apply)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableLocations.map((loc) => (
                <label key={loc} className="inline-flex items-center gap-2 text-sm bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-3 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={activityLocations.includes(loc)}
                    onChange={() => handleLocationChange(loc)}
                    className="w-4 h-4 text-rose-600 border-slate-300 rounded focus:ring-rose-500"
                  />
                  <span className="font-semibold text-slate-700">{loc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Signs observed grid */}
          <div>
            <span className="block text-sm font-bold text-slate-800 mb-2">
              Which signs have you observed? (Select all that apply)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableSigns.map((sign) => (
                <label key={sign} className="inline-flex items-center gap-2 text-sm bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg p-3 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={signsObserved.includes(sign)}
                    onChange={() => handleSignChange(sign)}
                    className="w-4 h-4 text-rose-600 border-slate-300 rounded focus:ring-rose-500"
                  />
                  <span className="font-semibold text-slate-700">{sign}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Urgency & Preferred Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="field-urgency" className="block text-sm font-bold text-slate-800 mb-1.5">
                Response Urgency
              </label>
              <select
                id="field-urgency"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500"
              >
                <option value="Routine">Routine Inspection & Survey</option>
                <option value="Urgent">Urgent Treatment (Sighted Rodents)</option>
                <option value="Emergency">Emergency Call-Out (Severe Disruption)</option>
              </select>
            </div>

            <div>
              <label htmlFor="field-contact-time" className="block text-sm font-bold text-slate-800 mb-1.5">
                Preferred Callback Time
              </label>
              <select
                id="field-contact-time"
                value={preferredContactTime}
                onChange={(e) => setPreferredContactTime(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500"
              >
                <option value="Morning">Morning (08:00 - 12:00)</option>
                <option value="Afternoon">Afternoon (12:00 - 17:00)</option>
                <option value="Evening">Evening (17:00 - 20:00)</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="field-description" className="block text-sm font-bold text-slate-800 mb-1.5">
              Additional Details
            </label>
            <textarea
              id="field-description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please describe what you are seeing or hearing. For example: Scratching sounds in loft above master bedroom at night, or chew marks seen in the pantry cupboard."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-rose-500 transition-colors"
            ></textarea>
          </div>

          {/* Optional Image Upload */}
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5">
              Attach Activity Photograph <span className="text-slate-500 font-normal text-xs">(Optional, max 5MB)</span>
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 transition-colors font-semibold text-sm">
                <Upload className="w-4 h-4 text-slate-500" />
                <span>Choose Image</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  className="hidden"
                />
              </label>
              <span className="text-xs font-semibold text-slate-500 truncate max-w-[200px]">
                {fileName || "No photo attached"}
              </span>
            </div>
            {fileError && (
              <p className="text-rose-600 text-xs mt-1.5 font-semibold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {fileError}
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="inline-flex items-start gap-2.5 cursor-pointer">
              <input
                id="field-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className={`w-5 h-5 text-rose-600 border-slate-300 rounded mt-0.5 focus:ring-rose-500 ${
                  serverErrors.consent ? "border-rose-500" : ""
                }`}
                aria-invalid={!!serverErrors.consent}
                aria-describedby={serverErrors.consent ? "error-consent" : undefined}
              />
              <span className="text-xs text-slate-600 leading-relaxed font-medium">
                I hereby consent to being contacted by Rodents Exterminators via telephone or email regarding my rodent concern. I agree that my details are processed securely in accordance with the <a href="#privacy-policy" className="text-rose-600 hover:underline">Privacy Policy</a>. <span className="text-rose-500">*</span>
              </span>
            </label>
            {serverErrors.consent && (
              <p id="error-consent" className="text-rose-600 text-xs mt-1 font-semibold flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {serverErrors.consent}
              </p>
            )}
          </div>

          {/* General/Server Response Error */}
          {generalError && (
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl text-sm text-rose-800 font-semibold flex gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>{generalError}</span>
            </div>
          )}

          {/* Submit button */}
          <button
            id="quote-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full bg-rose-600 hover:bg-rose-700 active:scale-95 disabled:opacity-50 text-white py-4 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Processing secure dispatch...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Secure Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
