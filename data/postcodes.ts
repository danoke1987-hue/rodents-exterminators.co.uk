// London & M25 Postcode prefixes served by Rodents Exterminators
export interface PostcodeRecord {
  prefix: string;
  areaName: string;
  status: "published" | "draft";
}

export const servedPostcodes: PostcodeRecord[] = [
  // Central, East, North, North West, South East, South West, West, West Central
  { prefix: "EC", areaName: "East Central London", status: "published" },
  { prefix: "WC", areaName: "West Central London", status: "published" },
  { prefix: "E", areaName: "East London", status: "published" },
  { prefix: "N", areaName: "North London", status: "published" },
  { prefix: "NW", areaName: "North West London", status: "published" },
  { prefix: "SE", areaName: "South East London", status: "published" },
  { prefix: "SW", areaName: "South West London", status: "published" },
  { prefix: "W", areaName: "West London", status: "published" },
  
  // Outer London / M25 border areas
  { prefix: "BR", areaName: "Bromley & South East Border", status: "published" },
  { prefix: "CR", areaName: "Croydon & Surrey Border", status: "published" },
  { prefix: "DA", areaName: "Dartford & Kent Border", status: "published" },
  { prefix: "EN", areaName: "Enfield & Hertfordshire Border", status: "published" },
  { prefix: "HA", areaName: "Harrow & North West Border", status: "published" },
  { prefix: "IG", areaName: "Ilford & Essex Border", status: "published" },
  { prefix: "KT", areaName: "Kingston & South West Border", status: "published" },
  { prefix: "RM", areaName: "Romford & East Border", status: "published" },
  { prefix: "SM", areaName: "Sutton & South London Border", status: "published" },
  { prefix: "TW", areaName: "Twickenham & West Border", status: "published" },
  { prefix: "UB", areaName: "Uxbridge & West Border", status: "published" },
  { prefix: "WD", areaName: "Watford & Hertfordshire Border", status: "published" }
];

export const isPostcodeServed = (postcode: string): { served: boolean; area?: string; error?: string } => {
  const cleanPostcode = postcode.trim().toUpperCase().replace(/\s+/g, "");
  
  if (!cleanPostcode) {
    return { served: false, error: "Please enter a postcode." };
  }
  
  // UK postcode regex check
  const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/;
  // Match prefix only (first part of the postcode, e.g. SW11, N1, E17, CR0, DA1, EC4Y, etc.)
  // We can extract the letters at the start, or use regex to match prefix
  const prefixMatch = cleanPostcode.match(/^([A-Z]{1,2})[0-9]/);
  
  if (!prefixMatch) {
    return { served: false, error: "Please enter a valid UK postcode format (e.g. SW11 4AL, EC1A 1BB)." };
  }
  
  const alphaPrefix = prefixMatch[1]; // e.g. SW, EC, E, CR
  
  // Find matching served prefix
  const match = servedPostcodes.find(item => item.prefix === alphaPrefix && item.status === "published");
  
  if (match) {
    return { served: true, area: match.areaName };
  }
  
  return { 
    served: false, 
    error: "Sorry, this area is currently outside our service coverage. We serve Greater London and areas inside the M25." 
  };
};
