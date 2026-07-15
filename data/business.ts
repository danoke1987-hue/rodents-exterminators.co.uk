export const BUSINESS_CONFIG = {
  name: "Rodents Exterminators",
  canonicalDomain: "https://www.rodents-exterminators.co.uk",
  phoneDisplay: "0800 211 8166",
  phoneLink: "tel:08002118166",
  primaryServiceArea: "Greater London and locations inside the M25",
  language: "en-GB",
  currency: "GBP",
  emailPlaceholder: "info@rodents-exterminators.co.uk",
  companyNumberPlaceholder: "12345678",
  businessAddress: "London, United Kingdom (Serving all locations inside the M25)",
  googleBusinessProfileUrl: "https://g.page/rodents-exterminators-london", // Placeholder for actual URL
  leadNotificationEmail: "leads@rodents-exterminators.co.uk",
};

// Helper to get environment-specific variables safely
export const getEnvVar = (key: string, defaultValue: string): string => {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  // In client-side Vite, check import.meta.env
  // @ts-ignore
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[`VITE_${key}`]) {
    // @ts-ignore
    return import.meta.env[`VITE_${key}`] as string;
  }
  return defaultValue;
};

export const getSiteUrl = (): string => {
  return getEnvVar("SITE_URL", BUSINESS_CONFIG.canonicalDomain);
};

export const getPhoneDisplay = (): string => {
  return getEnvVar("SITE_PHONE_DISPLAY", BUSINESS_CONFIG.phoneDisplay);
};

export const getPhoneLink = (): string => {
  return getEnvVar("SITE_PHONE_LINK", BUSINESS_CONFIG.phoneLink);
};
