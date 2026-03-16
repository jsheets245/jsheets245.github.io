interface ProjectCard {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: ProjectCard[] = [
  {
    title: 'Model Evaluation Console',
    description:
      'Frontend tech lead for GenAI model comparison tool launched during AWS re:Invent. Coordinated all frontend work and served as primary collaborator between frontend, backend, product, and design teams, providing key insights and influence on product decisions.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['TypeScript', 'React', 'AWS Bedrock'],
    link: 'https://console.aws.amazon.com/bedrock',
  },
  {
    title: 'SageMaker Model Evaluation',
    description:
      'Built model evaluation features for the brand new SageMaker Unified Studio platform. Architected extensible systems to handle varying model formats despite platform constraints, solving complex technical challenges.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['TypeScript', 'React', 'AWS SageMaker'],
  },
  {
    title: 'Responsible AI Product',
    description:
      'Designed and built new Responsible AI product for SageMaker focused on ethical AI use and regulatory compliance. Introduced innovative UI/UX paradigms to improve customer experience with complex regulatory standards.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['TypeScript', 'React', 'AWS SageMaker'],
  },
  {
    title: 'Bedrock Guardrails Microfrontend',
    description:
      'Refactored monolithic Bedrock Guardrails architecture into microfrontend with zero downtime, regressions, or bugs. Built infrastructure from scratch, eliminated inter-team dependencies, improved deployment speed and security.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['TypeScript', 'React', 'Microfrontend', 'AWS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-wide">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've worked on that showcase my expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex-1 px-4 py-2 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      View
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 text-center rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
