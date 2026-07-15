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

export const rodentsData: RodentRecord[] = [
  {
    slug: "rats",
    name: "Rats (Brown Rat & Black Rat)",
    scientificName: "Rattus norvegicus & Rattus rattus",
    signsOfActivity: [
      "Large cylindrical droppings (approx. 10-15mm long, blunt-ended)",
      "Gnaw marks on wooden joists, plastics, pipes, and electrical cables",
      "Scratching or scampering sounds in lofts, wall cavities, and floorboards",
      "Smear marks (dark grease stains left by dirty fur against walls or skirting boards)",
      "Active burrows in garden soil, under sheds, or near drainage manholes",
      "Food packaging damaged with large chewing holes"
    ],
    entryPoints: [
      "Defective sewer lines and broken drain joints",
      "Uncapped redundant pipes or disconnected water drains",
      "Gaps in external brickwork, air vents, or weep holes",
      "Broken air-bricks or missing cellar vents",
      "Gaps around waste pipes, service lines, or cable entry holes"
    ],
    treatmentApproach: [
      "Comprehensive site inspection to find nesting areas and entry corridors",
      "Placement of secure, tamper-resistant monitoring and trapping units",
      "Discreet trapping schedules tailored to the active population",
      "Drainage investigations and sewer-access prevention if suspect",
      "Post-treatment rodent proofing and advice on structural exclusion"
    ],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 96
  },
  {
    slug: "mice",
    name: "Mice (House Mouse & Field Mouse)",
    scientificName: "Mus musculus & Apodemus sylvaticus",
    signsOfActivity: [
      "Small spindle-shaped droppings (approx. 3-8mm long, pointed-ended)",
      "Gnawed packaging, food bags, and structural materials",
      "Ammonia-like odour or urine pillars in hidden corners",
      "Shredded paper, cardboard, or insulation used for nesting material",
      "Scattering or light scratching noises in walls, ceilings, and kitchen counters",
      "Grease smears on pipes, pipes conduits, or cupboard shelves"
    ],
    entryPoints: [
      "Extremely tiny structural gaps (mice can squeeze through a 6mm opening)",
      "Gaps underneath external doors, especially garage doors",
      "Unsealed service pipes in kitchen cupboards and boiler rooms",
      "Expansion joints and gaps in cladding",
      "Cavities where extensions join the main building structure"
    ],
    treatmentApproach: [
      "Meticulous room-by-room inspection of active spaces",
      "Deployment of high-precision micro-traps in secure box enclosures",
      "Environmental control suggestions to eliminate available food scraps",
      "Proofing of all accessible expansion gaps, pipe conduits, and door bases",
      "Ongoing checkups and final sweep to ensure eradication is complete"
    ],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 95
  }
];
