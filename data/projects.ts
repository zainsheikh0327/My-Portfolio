export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AutoBuild Platform',
    description: 'Automated build planning and project management system',
    longDescription: 'Developed a comprehensive automated build planning platform that streamlines project management, resource allocation, and timeline optimization. Features intelligent scheduling algorithms, real-time collaboration, and integration with modern development workflows.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Firebase', 'AWS'],
    category: 'Full Stack',
    imageUrl: '/projects/autobuild.jpg',
    featured: true,
    year: 2024,
  },
  {
    id: '2',
    title: 'Qdrant Voice & Chat Assistant',
    description: 'AI-powered voice and chat assistants with vector database integration',
    longDescription: 'Built intelligent voice and chat assistant systems using Qdrant vector database for semantic search and context management. Implemented natural language processing, real-time voice recognition, and advanced conversational AI capabilities for enhanced user interactions.',
    technologies: ['Python', 'Qdrant', 'React', 'WebSocket', 'FastAPI', 'OpenAI'],
    category: 'Web Apps',
    imageUrl: '/projects/qdrant-assistant.jpg',
    featured: true,
    year: 2024,
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    longDescription: 'Built a scalable e-commerce platform handling 10K+ daily users with real-time inventory tracking, payment processing via Stripe, and advanced search functionality. Implemented microservices architecture for improved performance and maintainability.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker'],
    category: 'Full Stack',
    imageUrl: '/projects/ecommerce.jpg',
    featured: true,
    year: 2024,
  },
  {
    id: '4',
    title: 'Cloud Infrastructure Dashboard',
    description: 'Real-time monitoring and management dashboard for AWS resources',
    longDescription: 'Developed a comprehensive cloud infrastructure dashboard providing real-time insights into AWS resources, cost optimization recommendations, and automated scaling policies. Reduced cloud costs by 30% through intelligent resource management.',
    technologies: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'CloudWatch'],
    category: 'Cloud',
    imageUrl: '/projects/cloud-dashboard.jpg',
    featured: true,
    year: 2024,
  },
  {
    id: '5',
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI-driven prioritization',
    longDescription: 'Created an intelligent task management application using machine learning to automatically prioritize tasks based on deadlines, complexity, and user behavior patterns. Integrated natural language processing for voice commands and smart scheduling.',
    technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'FastAPI'],
    category: 'Web Apps',
    imageUrl: '/projects/task-manager.jpg',
    featured: false,
    year: 2023,
  },
  {
    id: '6',
    title: 'DevOps CI/CD Pipeline',
    description: 'Automated deployment pipeline with zero-downtime releases',
    longDescription: 'Architected and implemented a comprehensive CI/CD pipeline reducing deployment time from hours to minutes. Features include automated testing, blue-green deployments, rollback capabilities, and integration with Slack for notifications.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    category: 'Cloud',
    imageUrl: '/projects/cicd-pipeline.jpg',
    featured: false,
    year: 2023,
  },
  {
    id: '7',
    title: 'Interactive Portfolio Website',
    description: 'Cinematic portfolio with 3D animations and WebGL effects',
    longDescription: 'Designed and developed an award-worthy portfolio website featuring Three.js powered 3D animations, smooth parallax scrolling, and interactive WebGL shaders. Optimized for 60fps performance across all devices.',
    technologies: ['Next.js', 'Three.js', 'Framer Motion', 'GSAP', 'WebGL'],
    category: 'Creative',
    imageUrl: '/projects/portfolio.jpg',
    featured: false,
    year: 2024,
  },
  {
    id: '8',
    title: 'Real-Time Collaboration Tool',
    description: 'WebSocket-based collaborative workspace for remote teams',
    longDescription: 'Built a real-time collaboration platform enabling teams to work together seamlessly with live cursors, shared documents, video conferencing, and instant messaging. Supports 100+ concurrent users per room.',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'WebRTC'],
    category: 'Web Apps',
    imageUrl: '/projects/collab-tool.jpg',
    featured: false,
    year: 2023,
  },
];

export const projectCategories = [
  'All',
  'Full Stack',
  'Web Apps',
  'Cloud',
  'Creative',
];











