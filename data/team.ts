export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  experience: string;
  imageUrl?: string;
  status: "published" | "draft";
}

// Strictly no fake profiles. These act as structure models for the business's real technicians.
export const teamData: TeamMember[] = [
  {
    id: "tech-1",
    name: "Senior Technician",
    role: "Lead Rodent Control Specialist",
    qualifications: ["BPCA/RSPH Level 2 Award in Pest Management", "Confined Spaces Trained", "Sewer Safety Certified"],
    experience: "12 Years active experience in London rodent exclusions",
    imageUrl: "/images/team/placeholder-tech.jpg",
    status: "draft" // Unpublished placeholder
  }
];

export const getPublishedTeam = (): TeamMember[] => {
  return teamData.filter(t => t.status === "published");
};
