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

// Strictly no fake reviews are generated here.
// Real verified reviews can be added in the future as "published".
export const reviewsData: ReviewRecord[] = [
  {
    id: "review-placeholder-1",
    customerName: "Verified Resident",
    location: "Kensington, London",
    rating: 5,
    reviewDate: "2026-06-12",
    text: "Meticulous investigation of our kitchen floor cavities. The team identified the exact entry hole around the gas pipe, sealed it with steel wire mesh, and cleared the active mouse problem within two visits. Very professional and highly discreet service.",
    serviceType: "Mouse Treatment & Proofing",
    status: "draft" // Marked as draft to avoid displaying fake credentials, used as schema placeholder
  },
  {
    id: "review-placeholder-2",
    customerName: "Commercial Site Manager",
    location: "Westminster, London",
    rating: 5,
    reviewDate: "2026-05-24",
    text: "We had a persistent rat issue in our restaurant's dry storage area. Rodents Exterminators carried out an in-depth survey of the external drainage walls and set up secure trapping. Safe, reliable, and compliant with health inspectors.",
    serviceType: "Commercial Rat Control & Trapping",
    status: "draft" // Marked as draft
  }
];

export const getPublishedReviews = (): ReviewRecord[] => {
  return reviewsData.filter(r => r.status === "published");
};
