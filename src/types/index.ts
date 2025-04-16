
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  experience: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Executive';
  description: string;
  requirements: string[];
  postedDate: string;
  logo: string;
  featured: boolean;
}

export type JobType = Job['type'];
export type ExperienceLevel = Job['experience'];

export interface SearchFilters {
  query: string;
  location: string;
  jobType: JobType[];
  experienceLevel: ExperienceLevel[];
}