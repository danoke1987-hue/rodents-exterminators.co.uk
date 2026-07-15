export interface FAQRecord {
  id: string;
  question: string;
  answer: string;
  category: "rats" | "mice" | "trapping" | "proofing" | "general";
  status: "published" | "draft";
}

export const faqsData: FAQRecord[] = [
  {
    id: "rats-vs-mice",
    question: "How do I know whether I have rats or mice?",
    answer: "The easiest way to tell them apart is by their droppings, size, and behaviour. Rat droppings are large, cylindrical, and blunt-ended (approx. 10-15mm long), whereas mouse droppings are much smaller, thin, and spindle-shaped with pointed ends (approx. 3-8mm long). Rats are significantly larger and tend to leave grease smudge marks lower down on walls, while mice are smaller, highly curious, and chew through thin paper or cardboard packaging.",
    category: "general",
    status: "published"
  },
  {
    id: "signs-infestation",
    question: "What are the most common signs of a rodent infestation?",
    answer: "Key signs include: (1) Droppings in dark cupboards, under appliances, or in lofts. (2) Gnaw marks on woodwork, cables, or packaging. (3) Unusual noises like scraping or scratching in cavity walls, ceilings, or lofts. (4) Distinct ammonia-like grease smells and urine stains. (5) Physical nests made from shredded insulation, paper, or textiles.",
    category: "general",
    status: "published"
  },
  {
    id: "seeing-one-mouse",
    question: "Does seeing one mouse mean there are more?",
    answer: "Almost always, yes. Mice are social animals that live in family groups with high reproduction rates. By the time a single mouse is visible in open spaces, it usually indicates that their hidden nesting areas are crowded or food is in high demand, pointing to an active, growing infestation.",
    category: "mice",
    status: "published"
  },
  {
    id: "how-rats-enter",
    question: "How do rats enter London properties?",
    answer: "Rats are highly skilled climbers and swimmers. They enter properties primarily through structural defects, including cracked external brickwork, broken air-bricks, gaps in expansion joints, and importantly, through damaged or broken sewer pipework connected to public drainage. They can also squeeze under doors with gaps exceeding 15mm.",
    category: "rats",
    status: "published"
  },
  {
    id: "how-mice-enter",
    question: "How do mice enter homes and commercial buildings?",
    answer: "Mice are extremely flexible and can squeeze through structural gaps as small as 6mm (roughly the width of a standard pencil). Common entry corridors include service pipe penetrations under kitchen sinks and boilers, expansion gaps between extensions and the main house, gaps under external doors, and compromised weep holes in brickwork.",
    category: "mice",
    status: "published"
  },
  {
    id: "do-you-trap",
    question: "Do you provide rodent trapping?",
    answer: "Yes, active trapping is a core part of our rodent-management service. We design customized trapping plans depending on the property type, the severity of the infestation, and safety requirements. Our technicians position traps in high-activity areas away from children and pets, and schedule structured follow-up visits to monitor and remove caught rodents.",
    category: "trapping",
    status: "published"
  },
  {
    id: "do-you-proof",
    question: "Do you provide rodent proofing?",
    answer: "Yes, we provide expert rodent proofing and exclusion work. While treatment removes current rodent activity, proofing is what keeps them out long-term. We use specialized chew-proof materials like heavy-duty steel wire mesh, concrete fillers, and rodent-resistant sealants to physically block off entry holes and pipe sleeves.",
    category: "proofing",
    status: "published"
  },
  {
    id: "proofing-included",
    question: "Is proofing included with treatment?",
    answer: "Our initial treatments focus on active eradication and identifying entry routes. Simple proofing (like sealing minor gaps under cupboards where traps are set) may be included. Comprehensive structural proofing (like air-brick replacement, external brickwork repointing, or complete drain caps) is offered as a separate, bespoke service following our detailed survey, and is highly recommended to secure the building permanently.",
    category: "proofing",
    status: "published"
  },
  {
    id: "how-many-visits",
    question: "How many visits might be required?",
    answer: "A standard, successful rodent control programme typically requires a minimum of 2 to 3 structured visits. The first visit is for the in-depth inspection and setting traps. The second and third visits are for monitoring activity, checking and clearing traps, repositioning units, and performing structural proofing once we are confident active breeding has ceased.",
    category: "general",
    status: "published"
  },
  {
    id: "drain-rat-investigations",
    question: "Can you investigate rats entering through drains?",
    answer: "Absolutely. Drain defects are a major source of rat infestations in London. We carry out dedicated drainage inspections of accessible inspection chambers to check for broken interceptors, collapsed pipes, or unsealed junctions. Once identified, we can coordinate or recommend the installation of professional stainless steel rat blockers (non-return valves) to secure the sewer entry.",
    category: "rats",
    status: "published"
  },
  {
    id: "leave-property",
    question: "Do I need to leave the property during treatment?",
    answer: "Generally, no. Our rodent treatments utilize physical trapping and secure, tamper-proof bait boxes that do not release airborne odours or pose a risk to residents when left undisturbed. You do not need to leave your home or close your office during our visits, though you should keep children and pets away from areas where traps are actively situated.",
    category: "general",
    status: "published"
  },
  {
    id: "commercial-rodent-control",
    question: "Do you provide commercial rodent control?",
    answer: "Yes, we provide highly discreet commercial rodent control services for offices, warehouses, retail shops, hotels, and food businesses like restaurants and cafés. We set up tailored rodent-monitoring contracts with compliance-ready logs to ensure your business remains compliant with local environmental health and food safety standards.",
    category: "general",
    status: "published"
  }
];
