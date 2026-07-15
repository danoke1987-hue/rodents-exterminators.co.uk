export interface CaseStudyRecord {
  slug: string;
  title: string;
  clientType: "Residential" | "Commercial" | "Landlord";
  location: string;
  problem: string;
  investigationFindings: string;
  actionTaken: string[];
  outcome: string;
  status: "published" | "draft" | "archived";
  indexable: boolean;
  reviewed: boolean;
  qualityScore: number;
}

export const caseStudiesData: CaseStudyRecord[] = [
  {
    slug: "loft-rats-exclusion-barnet",
    title: "Terraced House Loft Rat Exclusion",
    clientType: "Residential",
    location: "Barnet, London",
    problem: "Scrampering noises in the loft, chew damage to loft insulation, and visual sighting of large droppings.",
    investigationFindings: "Technician discovered rats entering via a shared cavity wall connected to the neighbour's defective kitchen drain branch.",
    actionTaken: [
      "Positioned targeted trapping array in loft and under kitchen sink cavities",
      "Excavated and sealed the defective brick pipe entry with stainless steel plates",
      "Installed a 110mm non-return stainless steel rat blocker in the external inspection chamber"
    ],
    outcome: "Infestation fully resolved within 10 days; loft cleaned and sanitised with preventative proofing active.",
    status: "draft", // Kept as draft until validated with real client details
    indexable: false,
    reviewed: false,
    qualityScore: 78
  }
];

export const getPublishedCaseStudies = (): CaseStudyRecord[] => {
  return caseStudiesData.filter(cs => cs.status === "published");
};
