export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  image: string;
  readTime: number;
  tags: string[];
}