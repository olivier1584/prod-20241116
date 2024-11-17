export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export type BlogCategory = 'Dématérialisation' | 'Excel' | 'IA';