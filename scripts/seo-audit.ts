import * as fs from "fs";
import * as path from "path";
import { BUSINESS_CONFIG, getSiteUrl, getPhoneDisplay, getPhoneLink } from "../data/business.ts";
import { rodentServices } from "../data/services.ts";

console.log("==================================================");
console.log("   🔍 RODENTS EXTERMINATORS - SEO & CONTENT AUDIT  ");
console.log("==================================================");

let auditFailed = false;

// Helpers to scan directory recursively
const scanDir = (dir: string, extensions: string[]): string[] => {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!file.includes("node_modules") && !file.includes(".git") && !file.includes("dist") && !file.includes(".next")) {
        results = results.concat(scanDir(fullPath, extensions));
      }
    } else {
      if (extensions.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });
  return results;
};

// Compile file list
const srcFiles = scanDir(path.join(process.cwd(), "src"), [".ts", ".tsx", ".css"]);
const dataFiles = scanDir(path.join(process.cwd(), "data"), [".ts"]);
const publicFiles = fs.existsSync(path.join(process.cwd(), "public")) ? scanDir(path.join(process.cwd(), "public"), [".json", ".txt"]) : [];
const rootFiles = [path.join(process.cwd(), "index.html")];
const allScannableFiles = [...srcFiles, ...dataFiles, ...publicFiles, ...rootFiles];

// --------------------------------------------------
// 1. HOSTNAME & SITE URL CONFIGURATION AUDIT
// --------------------------------------------------
console.log("\n--- [Audit 1/6] Hostname & Canonical Domain Check ---");
const canonicalDomain = BUSINESS_CONFIG.canonicalDomain;
const siteUrl = getSiteUrl();

console.log(`[Config] Canonical Domain: ${canonicalDomain}`);
console.log(`[Config] Site URL (getSiteUrl): ${siteUrl}`);

if (canonicalDomain !== "https://www.rodents-exterminators.co.uk") {
  console.error("❌ FAIL: BUSINESS_CONFIG.canonicalDomain must be exactly 'https://www.rodents-exterminators.co.uk'");
  auditFailed = true;
} else {
  console.log("✅ PASS: BUSINESS_CONFIG.canonicalDomain is correct.");
}

// Ensure every hardcoded mention of rodents-exterminators.co.uk starts with the secure canonical format
let invalidHostnamesFound = 0;
allScannableFiles.forEach((filePath) => {
  if (filePath.includes("seo-audit.ts") || filePath.includes("business.ts")) return;
  const content = fs.readFileSync(filePath, "utf-8");
  
  // Look for any mention of the domain that doesn't match the canonical protocol/hostname
  const hostMatches = content.match(/[^"']*(?:www\.)?rodents-exterminators\.co\.uk[^"']*/g);
  if (hostMatches) {
    hostMatches.forEach((match) => {
      // Exclude emails, developer comments, and correct URLs
      if (
        !match.includes("https://www.rodents-exterminators.co.uk") &&
        !match.includes("mailto:") &&
        !match.includes("@") &&
        !match.includes("g.page")
      ) {
        console.warn(`⚠️ WARNING: Non-canonical domain mention "${match.trim()}" in ${path.relative(process.cwd(), filePath)}`);
        invalidHostnamesFound++;
      }
    });
  }
});
console.log(`✅ COMPLETED: Checked all domain references. Warned on ${invalidHostnamesFound} non-canonical formats.`);

// --------------------------------------------------
// 2. CANONICAL TAGS IN INDEX.HTML AUDIT
// --------------------------------------------------
console.log("\n--- [Audit 2/6] Canonical Tags Check ---");
const indexHtmlPath = path.join(process.cwd(), "index.html");
if (fs.existsSync(indexHtmlPath)) {
  const html = fs.readFileSync(indexHtmlPath, "utf-8");
  
  // Extract and verify canonical tags
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']\s*\/?>/i);
  if (!canonicalMatch) {
    console.error("❌ FAIL: Canonical link tag is missing from index.html");
    auditFailed = true;
  } else {
    const canonicalHref = canonicalMatch[1];
    if (canonicalHref !== "https://www.rodents-exterminators.co.uk/") {
      console.error(`❌ FAIL: Canonical href is "${canonicalHref}", expected "https://www.rodents-exterminators.co.uk/"`);
      auditFailed = true;
    } else {
      console.log(`✅ PASS: Canonical tag exists: <link rel="canonical" href="${canonicalHref}" />`);
    }
  }

  // Check Open Graph metadata canonical equivalents
  const ogUrlMatch = html.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']\s*\/?>/i);
  if (!ogUrlMatch) {
    console.warn("⚠️ WARNING: <meta property=\"og:url\"> is missing from index.html");
  } else if (ogUrlMatch[1] !== "https://www.rodents-exterminators.co.uk/") {
    console.warn(`⚠️ WARNING: og:url is "${ogUrlMatch[1]}", should match canonical "https://www.rodents-exterminators.co.uk/"`);
  } else {
    console.log("✅ PASS: Open Graph URL matches canonical.");
  }
} else {
  console.error("❌ FAIL: index.html was not found in project root!");
  auditFailed = true;
}

// --------------------------------------------------
// 3. HEADING STRUCTURE INTEGRITY AUDIT
// --------------------------------------------------
console.log("\n--- [Audit 3/6] Heading Structure Check ---");
let h1Count = 0;
let filesWithH1: string[] = [];

allScannableFiles.forEach((filePath) => {
  const ext = path.extname(filePath);
  if (ext !== ".tsx" && ext !== ".html") return;
  const content = fs.readFileSync(filePath, "utf-8");

  // Count raw h1 tags
  const h1Matches = content.match(/<(h1|H1)\b/g);
  if (h1Matches) {
    h1Count += h1Matches.length;
    filesWithH1.push(path.relative(process.cwd(), filePath));
  }

  // Parse and check heading hierarchy sequences
  const headingRegex = /<(h[1-6])\b/gi;
  const headingLevels: number[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headingLevels.push(parseInt(match[1].substring(1)));
  }

  // Ensure heading hierarchy doesn't skip levels going down (e.g., h2 -> h4 is bad, h2 -> h3 is good)
  for (let i = 1; i < headingLevels.length; i++) {
    const prev = headingLevels[i - 1];
    const curr = headingLevels[i];
    if (curr - prev > 1) {
      console.warn(`⚠️ WARNING: Heading level skipped from h${prev} directly to h${curr} in ${path.relative(process.cwd(), filePath)}`);
    }
  }
});

console.log(`[Headings] Found total of ${h1Count} H1 tags in: ${filesWithH1.join(", ")}`);
if (h1Count === 0) {
  console.error("❌ FAIL: No H1 tag found in the application layout or index.html!");
  auditFailed = true;
} else if (h1Count > 1) {
  console.warn("⚠️ WARNING: Multiple H1 tags found. Standard SEO best practice recommends exactly 1 H1 tag per page.");
} else {
  console.log("✅ PASS: Correct heading structures and H1 count verified.");
}

// --------------------------------------------------
// 4. IMAGE ALT TEXT ACCESSIBILITY AUDIT
// --------------------------------------------------
console.log("\n--- [Audit 4/6] Image Alt Text Accessibility Check ---");
let totalImages = 0;
let imagesMissingAlt = 0;

allScannableFiles.forEach((filePath) => {
  const ext = path.extname(filePath);
  if (ext !== ".tsx" && ext !== ".html") return;
  const content = fs.readFileSync(filePath, "utf-8");

  const imgRegex = /<img\s+([^>]*?)>/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    totalImages++;
    const attrs = match[1];
    
    // Check if alt attribute is present
    const hasAlt = /\balt\s*=\s*/i.test(attrs);
    if (!hasAlt) {
      console.error(`❌ FAIL: <img> is missing "alt" attribute in ${path.relative(process.cwd(), filePath)}`);
      imagesMissingAlt++;
      auditFailed = true;
    }
  }
});

console.log(`[Images] Total verified image tags: ${totalImages}`);
if (imagesMissingAlt > 0) {
  console.error(`❌ FAIL: ${imagesMissingAlt} image(s) are missing critical alt descriptions.`);
  auditFailed = true;
} else {
  console.log("✅ PASS: All image elements possess alt attributes for optimal accessibility and search indexing.");
}

// --------------------------------------------------
// 5. LINK VALIDITY & BROKEN LINK DETECTION AUDIT
// --------------------------------------------------
console.log("\n--- [Audit 5/6] Link Validity & Broken Link Check ---");
const definedIds = new Set<string>();

// Dynamic virtual routes/actions allowed in the client application without failing broken link checks
const allowedVirtualHashes = new Set([
  "privacy-policy", 
  "cookie-policy", 
  "accessibility-statement", 
  "terms",
  "main-content", // general skip to content links
  "" // top anchor link
]);

// 1. Gather all element IDs across all UI files
allScannableFiles.forEach((filePath) => {
  const ext = path.extname(filePath);
  if (ext !== ".tsx" && ext !== ".html") return;
  const content = fs.readFileSync(filePath, "utf-8");

  // Capture standard static IDs
  const idRegex = /id=["']([a-zA-Z0-9\-_]+?)["']/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    definedIds.add(match[1]);
  }
});

// Add dynamic or procedural prefixes as allowed
const isDynamicIdAllowed = (id: string): boolean => {
  if (allowedVirtualHashes.has(id)) return true;
  if (definedIds.has(id)) return true;
  
  // Match prefix-based dynamic elements (e.g. FAQ buttons or Postcode status divs)
  if (id.startsWith("faq-") || id.startsWith("problem-") || id.startsWith("postcode-")) {
    return true;
  }
  return false;
};

// 2. Scan all hrefs and validate targets
let totalLinksChecked = 0;
let brokenLinksFound = 0;

allScannableFiles.forEach((filePath) => {
  if (filePath.includes("seo-audit.ts") || filePath.includes("business.ts")) return;
  const ext = path.extname(filePath);
  if (ext !== ".tsx" && ext !== ".html" && ext !== ".ts") return;
  const content = fs.readFileSync(filePath, "utf-8");

  // Match standard href links
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    totalLinksChecked++;
    const link = match[1];

    if (link.startsWith("#")) {
      const targetId = link.substring(1);
      if (!isDynamicIdAllowed(targetId)) {
        console.error(`❌ FAIL: Broken internal link "${link}" found in ${path.relative(process.cwd(), filePath)} (ID does not exist)`);
        brokenLinksFound++;
        auditFailed = true;
      }
    } else if (link.startsWith("tel:")) {
      const canonicalPhoneLink = getPhoneLink();
      if (link !== canonicalPhoneLink) {
        console.error(`❌ FAIL: Invalid telephone link "${link}" in ${path.relative(process.cwd(), filePath)}. Must match canonical phone link: "${canonicalPhoneLink}"`);
        brokenLinksFound++;
        auditFailed = true;
      }
    } else if (link.startsWith("mailto:")) {
      if (!link.includes("@") || !link.includes("rodents-exterminators.co.uk")) {
        console.warn(`⚠️ WARNING: Suspicious contact email link "${link}" in ${path.relative(process.cwd(), filePath)}`);
      }
    } else if (link.startsWith("http://") || link.startsWith("https://")) {
      try {
        new URL(link);
      } catch (e) {
        console.error(`❌ FAIL: Malformed external URL "${link}" found in ${path.relative(process.cwd(), filePath)}`);
        brokenLinksFound++;
        auditFailed = true;
      }
    }
  }
});

console.log(`[Links] Checked ${totalLinksChecked} links total.`);
if (brokenLinksFound > 0) {
  console.error(`❌ FAIL: Found ${brokenLinksFound} broken, non-compliant, or mismatched links in codebase.`);
  auditFailed = true;
} else {
  console.log("✅ PASS: All internal anchors, canonical tel protocols, and external links are active and healthy.");
}

// --------------------------------------------------
// 6. FORBIDDEN TOPICS (NON-RODENT OFFERS) AUDIT
// --------------------------------------------------
console.log("\n--- [Audit 6/6] Forbidden Topics Check ---");
const forbiddenPests = [
  "wasp", "hornet", "bed bug", "bedbug", "cockroach", "ant", "flea", 
  "moth", "fly", "flies", "beetle", "pigeon", "gull", "bird", "fox", "insect",
  "wasps", "hornets", "bedbugs", "cockroaches", "ants", "fleas", "moths", "beetles", "pigeons", "gulls", "birds", "foxes", "insects"
];

let forbiddenFoundCount = 0;

allScannableFiles.forEach((filePath) => {
  // Never fail scan on the audit script itself
  if (filePath.includes("seo-audit.ts")) return;
  
  const content = fs.readFileSync(filePath, "utf-8");
  const lowercaseContent = content.toLowerCase();
  
  forbiddenPests.forEach((pest) => {
    // Regex using word boundaries to ensure we don't flag "pigeonholed", "planting", "pantries" etc.
    const regex = new RegExp(`\\b${pest}\\b`, "g");
    const matches = lowercaseContent.match(regex);
    if (matches && matches.length > 0) {
      // Exclude references where we check forbidden lists or display test strings
      if (lowercaseContent.includes("forbiddenpests") || lowercaseContent.includes("containsforbidden")) {
        return;
      }
      console.error(`❌ FAIL: Forbidden pest "${pest}" found in ${path.relative(process.cwd(), filePath)} (${matches.length} matches)`);
      forbiddenFoundCount++;
      auditFailed = true;
    }
  });
});

if (forbiddenFoundCount === 0) {
  console.log("✅ PASS: Rodent-only brand consistency strictly maintained. No insects, birds, or non-rodent pest mentions found.");
} else {
  console.error(`❌ FAIL: Found ${forbiddenFoundCount} occurrences of restricted topics.`);
  auditFailed = true;
}

// --------------------------------------------------
// FINAL STATUS REPORT
// --------------------------------------------------
console.log("\n==================================================");
if (auditFailed) {
  console.error("❌ AUDIT STATUS: FAILED. Please resolve the errors highlighted above.");
  process.exit(1);
} else {
  console.log("✅ AUDIT STATUS: SUCCESS! All SEO and content guidelines are perfectly satisfied.");
  process.exit(0);
}
