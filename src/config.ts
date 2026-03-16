/**
 * Site Configuration and Constants
 * Update these values to customize your portfolio
 */

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  email: 'your.email@example.com',
}

export const SITE_CONFIG = {
  title: 'Portfolio',
  description: 'Frontend & Full-Stack Engineer',
  author: 'Your Name',
  year: new Date().getFullYear(),
}

export const NAV_LINKS = [
  { label: 'About', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const TECH_STACK = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Redux'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  tools: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vite', 'Webpack'],
  other: ['System Design', 'Testing', 'CI/CD', 'Web Performance', 'Accessibility'],
}
