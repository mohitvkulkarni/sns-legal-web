export interface PracticeArea {
  id: string;
  category: string;
  title: string;
  content: string;
}

export interface TeamMember {
  name: string;
  qualifications?: string;
  title: string;
  imageUrl: string;
  bio: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  quote: string;
  content: React.ReactNode;
}
