
export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  description: string[];
  achievements?: string[];
  location: string;
}

export interface Skill {
  name: string;
  category: 'Operations' | 'Strategy' | 'Procurement' | 'Technical' | 'Soft Skills';
  proficiency: number; // 1-100 for visualization
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  field: string;
  location: string;
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
}
