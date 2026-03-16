export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-wide">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Full-Stack Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building Products <span className="text-primary-600">People Love</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I'm a full-stack engineer at AWS (formerly Xactly) who is obsessed with creating products that people actually want to use. 
            Great software isn't about impressive metrics—it's about delighting users with beautiful, performant UIs and seamless 
            experiences. I lead with ethics as a foundation, not an afterthought, and I'm driven to find the balance between 
            intuitive design and clear boundaries. With deep expertise in microfrontend architecture, I've rearchitected massive 
            systems (like Bedrock Guardrails) to ship faster and safer, while modernizing legacy products that the industry had 
            given up on. Now I'm focused on exploring how AI can unlock new UI paradigms and make ethical computing accessible to everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#projects" className="btn-primary inline-flex items-center justify-center">
              View My Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
              Get In Touch
            </a>
          </div>

          <div className="flex gap-4 text-sm text-gray-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              GitHub
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/joshua-sheets"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
