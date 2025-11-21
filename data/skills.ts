export interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 95 },
  { name: 'JavaScript', category: 'Frontend', proficiency: 95 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 90 },
  { name: 'Next.js', category: 'Frontend', proficiency: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90 },
  { name: 'HTML/CSS', category: 'Frontend', proficiency: 95 },
  { name: 'Figma', category: 'Frontend', proficiency: 85 },
  
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 90 },
  { name: 'Python', category: 'Backend', proficiency: 85 },
  { name: 'PHP', category: 'Backend', proficiency: 80 },
  { name: 'REST APIs', category: 'Backend', proficiency: 90 },
  { name: 'GraphQL', category: 'Backend', proficiency: 75 },
  
  // Databases
  { name: 'MySQL', category: 'Database', proficiency: 90 },
  { name: 'MongoDB', category: 'Database', proficiency: 85 },
  { name: 'PostgreSQL', category: 'Database', proficiency: 85 },
  { name: 'Firebase', category: 'Database', proficiency: 90 },
  
  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud', proficiency: 85 },
  { name: 'Google Cloud', category: 'Cloud', proficiency: 80 },
  { name: 'Docker', category: 'DevOps', proficiency: 85 },
  { name: 'CI/CD', category: 'DevOps', proficiency: 85 },
  { name: 'Jenkins', category: 'DevOps', proficiency: 80 },
  { name: 'Git', category: 'DevOps', proficiency: 95 },
  
  // Tools & Others
  { name: 'VS Code', category: 'Tools', proficiency: 95 },
  { name: 'IntelliJ', category: 'Tools', proficiency: 85 },
  { name: 'Salesforce', category: 'Tools', proficiency: 75 },
];

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Cloud',
  'DevOps',
  'Tools',
];







