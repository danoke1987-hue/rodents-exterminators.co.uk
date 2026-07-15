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

export const rodentServices: ServiceRecord[] = [
  {
    slug: "rat-control",
    title: "Rat Treatment & Control",
    shortDescription: "Professional rat eradication, monitoring and control using custom trapping and baiting programmes.",
    longDescription: "Our professional rat treatment programmes target nesting sites, travel pathways, and food sources. We use specialized, industrial-strength traps and humane control methods, ensuring rats are thoroughly cleared from residential and commercial properties in London. Each visit is carried out with discretion by qualified professionals.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 95,
    iconName: "ShieldAlert"
  },
  {
    slug: "mouse-control",
    title: "Mouse Treatment & Control",
    shortDescription: "Rapid, targeted mouse control tailored for London properties. Clean, effective mouse baiting and trapping.",
    longDescription: "Mice can exploit tiny gaps to enter homes and commercial buildings. Our mouse control services combine precision trapping with environmental sanitisation guidance. We locate and neutralise nests within walls, lofts, and under floorboards, providing comprehensive monitoring to ensure they do not return.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 94,
    iconName: "Home"
  },
  {
    slug: "rodent-proofing",
    title: "Rodent Proofing & Exclusion",
    shortDescription: "Defensive physical sealing of entry points, air vents, door gaps, and pipe openings using rodent-proof materials.",
    longDescription: "Proofing is the most crucial part of long-term rodent management. We identify and seal external and internal entry points including gap cavities, service penetrations, air vents, and structural defects. By using high-grade materials like wire mesh, steel sheets, and rodent-proof sealants, we block future re-entry.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 98,
    iconName: "ShieldCheck"
  },
  {
    slug: "rodent-trapping",
    title: "Rodent Trapping Programmes",
    shortDescription: "Discreet and active trapping programmes using modern mechanisms tailored to the level of infestation.",
    longDescription: "Where standard treatments are unsuitable or fast elimination is needed, we design custom trapping plans. Utilizing mechanical snap-traps or multi-catch units in tamper-resistant boxes, we strategically position and monitor trapping equipment to clear rodents safely and effectively.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 92,
    iconName: "Binary"
  },
  {
    slug: "drain-rat-investigations",
    title: "Drain-Related Rat Investigations",
    shortDescription: "Specialist investigation of defect drains, broken sewer lines, and inspection chambers to block rat ingress routes.",
    longDescription: "Up to 80% of urban rat infestations originate from damaged drainage. We carry out dedicated surveys of accessible inspection chambers, examining sewer interceptors, structural fractures, and redundant pipework where rats exit the public sewage network into your cavity walls.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 96,
    iconName: "Eye"
  },
  {
    slug: "rodent-inspections",
    title: "Comprehensive Rodent Inspections",
    shortDescription: "In-depth property surveys of lofts, kitchens, floorboards, and perimeters to find active nesting and entry ways.",
    longDescription: "A successful treatment starts with a meticulous survey. Our certified technicians inspect every corner of your property including lofts, crawlspaces, kitchens, and external brickwork to identify active runs, nesting locations, entry voids, and available food attractants.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 93,
    iconName: "Search"
  },
  {
    slug: "commercial-rodent-control",
    title: "Commercial Rodent Management",
    shortDescription: "Ongoing rodent monitoring and preventative control for restaurants, retail, warehouses, and offices.",
    longDescription: "Protect your business's reputation and ensure health-and-safety compliance with our commercial rodent contracts. We provide regular inspections, preventative baiting, secure monitoring stations, and prompt emergency response times with full, audit-ready documentation.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 97,
    iconName: "Briefcase"
  },
  {
    slug: "residential-rodent-control",
    title: "Residential Rodent Control",
    shortDescription: "Safe, rapid-response rat and mouse treatments for flats, houses, lofts, kitchens, and gardens.",
    longDescription: "We provide homeowners with reliable, professional relief from rodent infestations. Our residential services are carefully calibrated to be safe around families and domestic pets, focusing on immediate removal and solid advice to keep your home permanently rodent-free.",
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 95,
    iconName: "Home"
  },
  // Future pages/expansion routes - drafted but NOT published yet
  {
    slug: "landlord-rodent-control",
    title: "Landlord & Letting Agent Rodent Control",
    shortDescription: "Rapid response treatments and proofing to keep tenanted properties safe and compliant.",
    longDescription: "Professional pest solutions for HMOs, rental properties, and residential blocks to protect tenants and maintain landlord compliance.",
    status: "draft",
    indexable: false,
    reviewed: false,
    qualityScore: 80,
    iconName: "Users"
  },
  {
    slug: "restaurant-rodent-control",
    title: "Restaurant Rodent Prevention",
    shortDescription: "Zero-tolerance monitoring, baiting, and proofing for food preparation areas and commercial kitchens.",
    longDescription: "High-discretion commercial rodent treatment and prevention tailored specifically to the strict sanitisation standards of commercial kitchens and restaurants.",
    status: "draft",
    indexable: false,
    reviewed: false,
    qualityScore: 82,
    iconName: "Utensils"
  }
];
