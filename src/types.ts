export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  completionDate: string;
  link?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  link: string;
}