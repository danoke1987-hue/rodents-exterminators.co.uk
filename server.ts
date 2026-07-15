import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { getSiteUrl, BUSINESS_CONFIG, getPhoneDisplay, getPhoneLink } from "./data/business.ts";

// Simple in-memory rate limiter to protect our quote form
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimits = new Map<string, RateLimitRecord>();

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip || req.headers["x-forwarded-for"] as string || "unknown";
  const now = Date.now();
  const limitWindow = 60 * 1000; // 1 minute window
  const maxRequests = 3; // Max 3 quote attempts per minute per IP

  const record = rateLimits.get(ip);
  if (!record) {
    rateLimits.set(ip, { count: 1, resetTime: now + limitWindow });
    return next();
  }

  if (now > record.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + limitWindow });
    return next();
  }

  if (record.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: "Too many quote requests. Please wait a minute before trying again."
    });
  }

  record.count += 1;
  next();
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing with size limit for base64 file uploads
  app.use(express.json({ limit: "6mb" }));
  app.use(express.urlencoded({ extended: true, limit: "6mb" }));

  // SITE_URL validation at startup
  const siteUrl = getSiteUrl();
  console.log(`[SEO Server] SITE_URL set to: ${siteUrl}`);
  
  if (!siteUrl || !siteUrl.startsWith("http")) {
    console.error("[CRITICAL] SITE_URL environment variable is missing or invalid!");
    process.exit(1);
  }

  // Define API and SEO routes first before Vite middleware

  // 1. Robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /

Sitemap: ${siteUrl.replace(/\/$/, "")}/sitemap.xml`);
  });

  // 2. Sitemap.xml (Only contains indexable, reviewed, published pages - currently only the homepage "/")
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    const today = new Date().toISOString().split("T")[0];
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl.replace(/\/$/, "")}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
  });

  // 3. Lead submission quote endpoint with spam protection, sanitization, rate-limiting, and validation
  app.post("/api/quote", rateLimiter, (req: Request, res: Response) => {
    const {
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
      fileData, // optional base64 image data
      fileName, // optional base64 filename
      honeypot // spam prevention field (should be empty)
    } = req.body;

    // A. Spam Honeypot Protection
    if (honeypot) {
      console.warn("[Spam Triggered] Honeypot field filled in!");
      return res.status(400).json({ success: false, message: "Spam submission detected." });
    }

    // B. Input Sanitisation & Trim
    const sName = String(name || "").trim();
    const sTelephone = String(telephone || "").trim();
    const sEmail = String(email || "").trim();
    const sPostcode = String(postcode || "").trim().toUpperCase();
    const sDescription = String(description || "").trim();

    // C. Validation of required fields
    const errors: { [key: string]: string } = {};

    if (!sName) errors.name = "Name is required.";
    if (!sTelephone) errors.telephone = "Telephone number is required.";
    if (!sEmail) errors.email = "Email address is required.";
    if (!sPostcode) errors.postcode = "Postcode is required.";
    if (!rodentProblem) errors.rodentProblem = "Please select a rodent category.";
    if (!propertyType) errors.propertyType = "Property type is required.";
    if (!consent) errors.consent = "You must consent to being contacted to receive a quote.";

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (sEmail && !emailRegex.test(sEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    // Check for forbidden topics in description (to block spam or irrelevant requests)
    const forbiddenPests = [
      "wasp", "hornet", "bed bug", "bedbug", "cockroach", "ant", "flea", 
      "moth", "fly", "flies", "beetle", "pigeon", "gull", "bird", "fox", "insect"
    ];
    const containsForbidden = forbiddenPests.some(pest => 
      sDescription.toLowerCase().includes(pest) || 
      String(rodentProblem).toLowerCase().includes(pest)
    );

    if (containsForbidden) {
      return res.status(400).json({
        success: false,
        message: "We are specialist rodent exterminators. We only provide services for rats, mice, and rodent proofing. We do not treat insects, bugs, foxes, or birds."
      });
    }

    // D. File-type & File-size Validation (Base64 file upload check)
    if (fileData) {
      // Expecting format: "data:image/jpeg;base64,..."
      const match = fileData.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);
      if (!match) {
        errors.file = "Invalid file format. Upload must be a valid image.";
      } else {
        const mimeType = match[1];
        const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (!allowedTypes.includes(mimeType)) {
          errors.file = "Only JPG, PNG and WEBP image uploads are allowed.";
        }

        // Calculate approximate size of base64 string: string length * 0.75
        const approxSizeBytes = fileData.length * 0.75;
        const maxSizeBytes = 5 * 1024 * 1024; // 5MB
        if (approxSizeBytes > maxSizeBytes) {
          errors.file = "Image file is too large. Maximum size is 5MB.";
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors, message: "Please resolve the errors in the form." });
    }

    // E. Log/Store Lead (Simulated secure database storage or email dispatch)
    console.log(`[Lead Captured] Successful lead from ${sName} (${sPostcode})`);
    console.log({
      name: sName,
      telephone: sTelephone,
      email: sEmail,
      postcode: sPostcode,
      rodentProblem,
      propertyType,
      isCommercial,
      activityLocations,
      signsObserved,
      urgency,
      description: sDescription,
      preferredContactTime,
      hasAttachment: !!fileData,
      consentRecorded: true,
      timestamp: new Date().toISOString()
    });

    // F. Send success response
    return res.status(200).json({
      success: true,
      message: "Thank you! Your rodent control inquiry has been securely received. Our specialist London team will contact you shortly."
    });
  });

  // Vite middleware integration for development / Static file hosting for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SEO Server] Server running on http://0.0.0.0:${PORT} under NODE_ENV=${process.env.NODE_ENV || "development"}`);
  });
}

startServer().catch((err) => {
  console.error("[CRITICAL] Failed to start full-stack server:", err);
});
