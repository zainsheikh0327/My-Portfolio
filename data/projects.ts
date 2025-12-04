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
  year: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'PhatBlack E-Commerce Experience',
    description: 'Brand-driven storefront with product catalog + media showcase.',
    longDescription:
      'Created a high-impact e-commerce website emphasizing visuals, brand story, and product presentation. Built product grids, collection pages, contact funnels, and a media/press section. The architecture is Stripe-ready and structured for scale, allowing future CMS integration for client-managed catalog updates and automated order handling.',
    technologies: ['Next.js', 'React', 'Tailwind', 'Stripe', 'Node.js', 'Firebase'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1074&auto=format',
    year: 2024,
    liveUrl: 'https://phat-black.web.app/',
  },
  {
    id: '2',
    title: 'Task Manager',
    description: 'Electron-based productivity tool for tasks, reminders, and scheduling.',
    longDescription:
      'Built a local-first productivity application that organizes tasks using a calendar-first workflow. Users can add tasks with priorities, reminders, notes, deadlines and break large goals into actionable items. Designed with dark mode, keyboard quick-add, and a flexible data schema so future cloud sync + mobile companion apps can be integrated without restructuring.',
    technologies: ['Electron', 'React', 'TypeScript', 'Vite', 'Node.js'],
    category: 'Web Apps',
    imageUrl: 'https://images.unsplash.com/photo-1523597020744-b68b1edd3e1c?q=80&w=1074&auto=format',
    year: 2023,
    liveUrl: 'https://tedtalksbits.github.io/cleartasks/#/cleartasks/',
  },
  {
    id: '3',
    title: 'Taxzilla – Freelancer Tax & Work Platform',
    description: 'Marketplace + income tracking + automated yearly tax summaries.',
    longDescription:
      'Developed a dual-dashboard system for freelancers and employers. Freelancers can track income, expenses, receipts, deductible categories, reimbursement requests, and export tax-ready summary PDF reports. Employers post jobs, assign payments, verify work, and manage payout records. Includes authentication, analytics, integrated chatbot support, notifications, and database-backed financial history tracking.',
    technologies: ['React', 'Vercel', 'TypeScript', 'Material UI', 'Chart.js', 'jsPDF'],
    category: 'Web Apps',
    imageUrl: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?q=80&w=1315&auto=format',
    year: 2024,
    liveUrl: 'https://taxzilla.vercel.app/',
  },
  {
    id: '4',
    title: 'MNC Development – Real Estate Agency Site',
    description: 'Marketing site showcasing services, branding, and portfolio.',
    longDescription:
      'Designed and developed the agency website for MNC Development, including services showcase, portfolio section, testimonials, and lead-generation forms. Integrated with a headless CMS for content management and future scaling of blog/case studies. Built with SEO-focused structure and optimized performance for fast load times and client conversion.',
    technologies: ['Next.js', 'React', 'Tailwind', 'Node.js', 'Stripe', 'Firebase'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=1974&auto=format',
    year: 2024,
    liveUrl: 'https://mnc-development.web.app/',
  },
  {
    id: '5',
    title: 'Qdrant Voice + Chat AI System',
    description: 'Conversational AI with speech recognition, embeddings & vector search.',
    longDescription:
      'Built an AI assistant with real-time voice capabilities, semantic memory, and Qdrant-powered retrieval. Implemented streaming speech-to-text, natural conversation flow, contextual history, and vector-based semantic search for accurate long-form responses. Supports multimodal input and live TTS response output, enabling a human-like conversational interface.',
    technologies: ['Python', 'Qdrant', 'React', 'FastAPI', 'WebSocket', 'OpenAI'],
    category: 'Web Apps',
    imageUrl: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=1974&auto=format',
    year: 2025,
    liveUrl: 'https://aiva.aiintegrations.tech/full/zain-sheikh',
  },
  {
    id: '6',
    title: 'AI Integrations Control Dashboard',
    description: 'Unified dashboard for monitoring builds, vector memory, usage & cost analytics.',
    longDescription:
      'Developed a management dashboard used to monitor built AI assistants. Tracks build history, scraping jobs, deployment logs, token usage, cost trends, memory vector storage growth, and assistant performance metrics. Includes admin authentication, versioning management, and one-click rebuild/refresh execution. Designed to function as the command center for all AI deployment and maintenance operations.',
    technologies: ['Next.js', 'TypeScript', 'AWS', 'MongoDB', 'CloudWatch'],
    category: 'Web Apps',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1074&auto=format',
    year: 2025,
    liveUrl: 'https://dashboard.aiintegrations.tech/',
  },
  {
    id: '7',
    title: 'AutoBuild AI Assistant Platform',
    description: 'End-to-end system for building, updating, and deploying AI assistants automatically.',
    longDescription:
      'Designed and developed a production-ready AI Assistant lifecycle system that automates scraping, data ingestion, prompt generation, and deployment. Includes admin dashboard controls, scheduled/instant refresh workflows, and secure backend routing to update assistants without exposing credentials. Optimized for scale across multiple assistants, enabling teams to maintain up-to-date knowledge bases with minimal manual overhead.',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1074&auto=format',
    year: 2025,
  },
];

export const projectCategories = ['All', 'Full Stack', 'Web Apps', 'Cloud', 'Creative'];