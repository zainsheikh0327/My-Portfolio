export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
  relevant_courses?: string[];
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University',
    location: 'United States',
    graduationDate: '2024',
    gpa: '3.7',
    honors: ['Cum Laude', "Dean's List"],
    relevant_courses: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Web Development',
      'Cloud Computing',
      'Software Engineering',
      'Machine Learning',
    ],
  },
];

export const certifications = [
  {
    id: '1',
    name: 'CompTIA+',
    issuer: 'CompTIA',
    date: '2024',
    credentialUrl: '#',
  },
  {
    id: '2',
    name: 'React',
    issuer: 'LinkedIn Learning',
    date: '2024',
    credentialUrl: '#',
  },
  {
    id: '3',
    name: 'JavaScript',
    issuer: 'LinkedIn Learning',
    date: '2024',
    credentialUrl: '#',
  },
  {
    id: '4',
    name: 'Firebase',
    issuer: 'LinkedIn Learning',
    date: '2024',
    credentialUrl: '#',
  },
];







