export interface ServiceRecord {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  status: "draft" | "published" | "archived";
  indexable: boolean;
  reviewed: boolean;
  qualityScore: number;
  iconName: string;
}

export interface RodentRecord {
  slug: string;
  name: string;
  scientificName: string;
  signsOfActivity: string[];
  entryPoints: string[];
  treatmentApproach: string[];
  status: "published" | "draft" | "archived";
  indexable: boolean;
  reviewed: boolean;
  qualityScore: number;
}

export interface AreaRecord {
  slug: string;
  borough: string;
  majorCoveredDistricts: string[];
  status: "draft" | "published" | "archived";
  indexable: boolean;
  reviewed: boolean;
  qualityScore: number;
}

export interface FAQRecord {
  id: string;
  question: string;
  answer: string;
  category: "rats" | "mice" | "trapping" | "proofing" | "general";
  status: "published" | "draft";
}

export interface ReviewRecord {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  reviewDate: string;
  text: string;
  serviceType: string;
  status: "published" | "draft";
}

export interface QuoteFormInput {
  name: string;
  telephone: string;
  email: string;
  postcode: string;
  rodentProblem: string;
  propertyType: string;
  isCommercial: boolean;
  activityLocations: string[];
  signsObserved: string[];
  urgency: string;
  description: string;
  preferredContactTime: string;
  consent: boolean;
  fileData?: string; // Base64 representation
  fileName?: string;
  honeypot?: string;
}
