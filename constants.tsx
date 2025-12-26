
import { Project, SkillCategory, ExperienceItem } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'TypeScript', icon: 'Code2' },
      { name: 'HTML5/CSS3', icon: 'Layout' },
      { name: 'React', icon: 'Globe' },
      { name: 'WordPress', icon: 'Layout' },
    ],
  },
  {
    name: 'Backend & DB',
    skills: [
      { name: 'Node.js/NestJS', icon: 'Server' },
      { name: 'PHP/JSP', icon: 'Terminal' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MySQL', icon: 'Database' },
    ],
  },
  {
    name: 'Cloud & Specialties',
    skills: [
      { name: 'AWS (S3/RDS)', icon: 'Cloud' },
      { name: 'Blockchain', icon: 'Cpu' },
      { name: 'Python (ML)', icon: 'Terminal' },
      { name: 'Docker', icon: 'Cloud' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoLedger - Blockchain & Cloud',
    description: 'Decentralized platform for trading environmental credits using Ethereum smart contracts (ERC-1155) integrated with AWS RDS and S3.',
    techStack: ['Node.js', 'Blockchain', 'AWS S3', 'Javascript'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '2',
    title: 'BuddyPDF - WordPress Plugin',
    description: 'Custom WordPress plugin for BuddyBoss providing specialized theater mode with zoom and multi-PDF support in activity streams.',
    techStack: ['PHP', 'WordPress', 'JScript', 'CSS'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '3',
    title: 'Stock Market Sentiment AI',
    description: 'AI-powered system using LSTM and GRU models to forecast stock prices using OHLCV data and financial news sentiment analysis.',
    techStack: ['Python', 'Machine Learning', 'Streamlit', 'APIs'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-48df9fd1d431?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    id: '4',
    title: 'HappyDeals E-Commerce',
    description: 'Full-stack e-commerce platform featuring product catalog management, shopping cart, and secure checkout processing.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JQuery'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600&h=400',
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Software Engineer Intern',
    company: 'Laugh Logic Labs',
    period: 'May 2025 - Present',
    description: 'Developing REST APIs using NestJS and PostgreSQL. Designing optimized database schemas and working with Docker for environment management.',
  },
  {
    id: 'exp2',
    role: 'Freelance Web Developer',
    company: 'BuddyLMS',
    period: 'Jan 2025 - Apr 2025',
    description: 'Built a specialized theater mode with zoom and navigation for PDF handling in BuddyBoss community environments.',
  },
  {
    id: 'edu1',
    role: 'Master of Computer Applications (M.C.A)',
    company: 'Nirma University',
    period: '2024 - 2026',
    description: 'Current CGPA: 7.33 / 10. Focused on advanced computer applications and software engineering.',
  },
  {
    id: 'edu2',
    role: 'Bachelor of Computer Applications (B.C.A)',
    company: 'Vivekanand College',
    period: '2021 - 2024',
    description: 'CGPA: 7.51 / 10. Foundation in computer science and application development.',
  },
];
