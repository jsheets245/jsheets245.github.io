interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'CSS-in-JS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Ruby on Rails', 'REST APIs', 'System Architecture'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'CI/CD', 'Deployment', 'Infrastructure', 'Security'],
  },
  {
    title: 'Architecture',
    skills: ['Microfrontends', 'Scalable Systems', 'Performance Optimization', 'Design Patterns'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-wide">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and practices I work with daily</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
