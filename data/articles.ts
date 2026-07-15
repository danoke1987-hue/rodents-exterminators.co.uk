export interface ArticleRecord {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  author: string;
  category: "Rats" | "Mice" | "Proofing" | "Advice";
  status: "published" | "draft" | "archived";
  indexable: boolean;
  reviewed: boolean;
  qualityScore: number;
}

export const articlesData: ArticleRecord[] = [
  {
    slug: "identify-rat-vs-mouse-infestation",
    title: "Identifying the Difference: Is it Rats or Mice in Your Wall?",
    excerpt: "Learn how to spot key biological differences, dropping sizes, and nesting behaviours to identify which rodent is in your London property.",
    content: "Content will be developed to cover signs, droppings, tracks, and entry habits without encouraging unsafe pesticide use.",
    publishedDate: "2026-07-15",
    author: "Rodents Exterminators Editorial Team",
    category: "Advice",
    status: "draft", // Marked draft for now
    indexable: false,
    reviewed: false,
    qualityScore: 80
  }
];

export const getPublishedArticles = (): ArticleRecord[] => {
  return articlesData.filter(a => a.status === "published");
};
