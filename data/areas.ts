export interface AreaRecord {
  slug: string;
  borough: string;
  majorCoveredDistricts: string[];
  status: "draft" | "published" | "archived";
  indexable: boolean;
  reviewed: boolean;
  qualityScore: number;
}

export const londonAreas: AreaRecord[] = [
  {
    slug: "westminster",
    borough: "City of Westminster",
    majorCoveredDistricts: ["Soho", "Mayfair", "Marylebone", "Pimlico", "Belgravia", "Paddington", "St John's Wood"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 94
  },
  {
    slug: "kensington-chelsea",
    borough: "Royal Borough of Kensington and Chelsea",
    majorCoveredDistricts: ["Kensington", "Chelsea", "Notting Hill", "Earl's Court", "South Kensington", "Ladbroke Grove"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 95
  },
  {
    slug: "camden",
    borough: "London Borough of Camden",
    majorCoveredDistricts: ["Hampstead", "Highgate", "Kentish Town", "Camden Town", "Holborn", "Bloomsbury", "Belsize Park"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 93
  },
  {
    slug: "islington",
    borough: "London Borough of Islington",
    majorCoveredDistricts: ["Angel", "Highbury", "Finsbury Park", "Clerkenwell", "Holloway", "Canonbury"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 92
  },
  {
    slug: "richmond-upon-thames",
    borough: "London Borough of Richmond upon Thames",
    majorCoveredDistricts: ["Richmond", "Twickenham", "Teddington", "Barnes", "Kew", "Mortlake"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 91
  },
  {
    slug: "wandsworth",
    borough: "London Borough of Wandsworth",
    majorCoveredDistricts: ["Wandsworth", "Battersea", "Balham", "Tooting", "Putney", "Clapham Junction"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 92
  },
  {
    slug: "southwark",
    borough: "London Borough of Southwark",
    majorCoveredDistricts: ["Bermondsey", "Rotherhithe", "Dulwich", "Peckham", "Camberwell", "London Bridge"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 91
  },
  {
    slug: "tower-hamlets",
    borough: "London Borough of Tower Hamlets",
    majorCoveredDistricts: ["Canary Wharf", "Wapping", "Limehouse", "Mile End", "Whitechapel", "Poplar", "Bow"],
    status: "published",
    indexable: true,
    reviewed: true,
    qualityScore: 93
  },
  // Draft boroughs for future expansion
  {
    slug: "barnet",
    borough: "London Borough of Barnet",
    majorCoveredDistricts: ["Finchley", "Hendon", "Edgware", "Golders Green", "Mill Hill"],
    status: "draft",
    indexable: false,
    reviewed: false,
    qualityScore: 80
  },
  {
    slug: "bromley",
    borough: "London Borough of Bromley",
    majorCoveredDistricts: ["Bromley", "Orpington", "Beckenham", "Chislehurst"],
    status: "draft",
    indexable: false,
    reviewed: false,
    qualityScore: 82
  }
];
export const servedLondonBoroughsCount = 33; // Full Greater London coverage inside M25
export const servedLondonPostcodesCount = 120; // Approximately
