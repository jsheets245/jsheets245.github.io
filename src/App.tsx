import "./App.css";

const metrics = [
  {
    value: "7+",
    label:
      "years building frontend products, platform experiences, and customer workflows",
  },
  {
    value: "10+",
    label:
      "engineers supported through product-focused frontend guidance and stronger execution standards",
  },
  {
    value: "3",
    label:
      "core product domains across AI platform, design systems, and customer workflows",
  },
];

const strengths = [
  {
    title: "Product-minded frontend leadership",
    description:
      "I translate product goals into frontend strategy, bringing clarity to roadmap decisions and keeping execution focused on customer value.",
  },
  {
    title: "Design systems and scalability",
    description:
      "I build component systems that reduce drift, improve consistency, and scale with product and team growth.",
  },
  {
    title: "Frontend architecture",
    description:
      "I design interfaces that hold up under real product pressure: security, permissions, performance, accessibility, and platform constraints.",
  },
  {
    title: "Team leadership",
    description:
      "I help teams move with confidence through technical direction, design feedback, and stronger execution standards that keep product work focused and high quality.",
  },
];

const stack = [
  "React",
  "TypeScript",
  "Vite",
  "Node.js",
  "Rails",
  "Stimulus",
  "SCSS",
  "Postgres",
  "MySQL",
  "GitHub Actions",
];

const caseStudies = [
  {
    title: "Model evaluation in AWS Bedrock",
    role: "Lead frontend engineer",
    problem:
      "The team needed a launch-critical evaluation workflow for a new AI product experience, but the work spanned product strategy, backend dependencies, permissions design, and an accelerated release window.",
    approach:
      "I aligned stakeholders across product, design, backend, and frontend, created a clear delivery plan, and led implementation of a polished evaluation flow that balanced speed with enterprise-grade trust and usability.",
    outcome:
      "The experience shipped successfully for re:Invent and held up well in public preview, giving customers a clear path to evaluate and trust the product while keeping the team focused on launch quality.",
    stack: ["React", "TypeScript", "Java", "AWS Bedrock", "Permissions"],
  },
  {
    title: "Beta migration and design system architecture",
    role: "Frontend platform leadership",
    problem:
      "The application had grown through a legacy admin experience with repeated styling drift and inconsistent patterns across multiple product surfaces, creating friction for both users and engineers.",
    approach:
      "I drove the migration toward a modern beta namespace and separated the design system from the app layer so patterns could be standardized, extended, and maintained without breaking product velocity.",
    outcome:
      "The platform became more consistent, scalable, and easier to evolve. We reduced visual drift, gave teams a clearer UI foundation, and created a healthier long-term path for product iteration.",
    stack: ["React", "Rails", "Stimulus", "SCSS", "Design Systems", "Lookbook"],
  },
];

const projects = [
  {
    title: "Model Evaluation in AWS Bedrock",
    category: "AWS / AI Product",
    role: "Lead frontend engineer",
    challenge:
      "Led a five-person frontend team to ship a launch-critical evaluation workflow in a compressed timeline, coordinating product, design, backend, and frontend stakeholders across a complex AI product.",
    outcome:
      "Delivered a successful re:Invent debut and strong public preview adoption by shipping a polished, customer-ready experience that balanced product ambition with launch quality.",
    stack: ["React", "TypeScript", "Java", "AWS Bedrock", "Permissions"],
  },
  {
    title: "Model Evaluation in SageMaker Studio",
    category: "ML Platform",
    role: "Lead frontend engineer",
    challenge:
      "Built feature parity for a brand-new platform, including permissions boundaries, platform security, responsiveness, accessibility, and integration with other studio features.",
    outcome:
      "Created a frontend architecture that fit the new platform model while preserving a smooth, trustworthy user experience for enterprise customers.",
    stack: ["React", "TypeScript", "Architecture", "SageMaker", "Security"],
  },
  {
    title: "Bedrock Guardrails",
    category: "Security / AI Guardrails",
    role: "Frontend engineer",
    challenge:
      "Implemented new guardrail features and the microservice/CI-CD refactor for a security-sensitive product while improving delivery speed and operational trust.",
    outcome:
      "Helped the team become the first Bedrock team with full CI/CD, reducing release time from days to a couple of hours while improving confidence in production changes.",
    stack: ["React", "TypeScript", "Security", "Guardrails", "CI/CD"],
  },
  {
    title: "Beta design system and migration",
    category: "Frontend Platform",
    role: "Platform leadership / design system architecture",
    challenge:
      "Drove a large-scale migration to a modern beta namespace while keeping the design system isolated from the application layer to maintain consistency, usability, and long-term maintainability.",
    outcome:
      "Created a more scalable and consistent UI foundation, reducing drift and enabling the product to evolve without ad hoc styling or fragmented patterns.",
    stack: ["React", "Rails", "Stimulus", "SCSS", "Design Systems", "Lookbook"],
  },
  {
    title: "Customer workflow automation and sales enablement",
    category: "Workflow Automation",
    role: "Frontend engineer",
    challenge:
      "Automated a manual scheduling process and improved the operational flow from customer sale through implementation for a data-heavy workflow.",
    outcome:
      "Reduced turnaround from days to one day and removed significant manual overhead, helping the business move faster while improving the customer experience.",
    stack: ["React", "JavaScript", "Automation", "CloudTrail", "EventBridge"],
  },
  {
    title: "Frontend leadership and delivery quality",
    category: "Leadership / Team growth",
    role: "Frontend lead and technical owner",
    challenge:
      "Helped scale frontend capability across a growing team by setting a stronger bar for product-quality, maintainable code, and execution discipline.",
    outcome:
      "Improved delivery quality across the organization by raising standards, clarifying technical direction, and creating a better path for consistent product execution.",
    stack: [
      "Frontend leadership",
      "Engineering standards",
      "Collaboration",
      "Delivery quality",
    ],
  },
];

const experience = [
  {
    title: "App modernization and beta migration",
    company: "Frontend platform",
    summary:
      "Led a large migration from legacy admin screens into a new beta namespace, standardizing a shared design system and tightening product consistency across multiple brands.",
  },
  {
    title: "Product-facing analytics and reporting",
    company: "Customer experience",
    summary:
      "Built a data-heavy energy analysis workflow that parsed uploads, surfaced charts and tables, and supported export flows without compromising usability.",
  },
  {
    title: "Design quality and dark mode refinement",
    company: "Product design systems",
    summary:
      "Improved component polish, visual accessibility, and color system maturity while removing ad hoc styling and aligning to consistent tokens.",
  },
];

const impact = [
  "Simplified complex workflows and turned risky operational processes into clearer, faster, more trustworthy customer experiences.",
  "Built platform-level UI patterns that reduced drift, improved consistency, and made product work easier to maintain and extend.",
  "Worked cross-functionally to turn ambiguity into clear decisions, balancing product needs, technical constraints, and user experience.",
];

const principles = [
  "Start with the customer problem and design around real user needs, business constraints, and clarity of experience.",
  "Treat developer experience as part of product quality: clear patterns, thoughtful tooling, and maintainable systems help teams move faster with less friction.",
  "Communicate clearly, evaluate tradeoffs critically, and make decisions transparent enough for the whole team to act on with confidence.",
];

const proofPoints = [
  {
    value: "Days → 1 day",
    title: "Workflow automation",
    description:
      "Eliminated a manually intensive scheduling flow and reduced turnaround from days to one day for a customer-facing process.",
  },
  {
    value: "Days → 2 hours",
    title: "Release velocity",
    description:
      "Helped the team become the first Bedrock team with full CI/CD, reducing release time from days to a couple of hours.",
  },
  {
    value: "2 platform shifts",
    title: "Modernization impact",
    description:
      "Led large-scale modernization work across legacy admin surfaces and beta platform migration, replacing inconsistency with a more scalable and maintainable frontend foundation.",
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Josh Sheets</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#principles">Principles</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Senior frontend product engineer</p>
            <h1>
              Designing product experiences that feel clear, fast, and built to
              last.
            </h1>
            <p className="lede">
              I lead frontend execution from product strategy to polished
              delivery — building thoughtful systems, aligning teams around
              clear product decisions, and creating experiences that are both
              technically strong and genuinely easy to use.
            </p>
            <div className="cta-row">
              <a className="primary-button" href="#work">
                Selected work
              </a>
              <a className="secondary-button" href="#contact">
                Contact me
              </a>
            </div>
            <ul className="mini-list" aria-label="Core strengths">
              <li>React</li>
              <li>TypeScript</li>
              <li>Design systems</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div className="hero-panel" aria-label="Engineer profile summary">
            <div className="panel-card glow">
              <span className="panel-label">Current focus</span>
              <strong>Frontend platform and product UX</strong>
              <p>
                Designing reusable UI systems, improving quality at scale, and
                shipping polished experiences for business-critical workflows.
              </p>
            </div>
            <div className="panel-card">
              <span className="panel-label">Stack</span>
              <div className="stack-tags">
                {stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Key metrics">
          {metrics.map(metric => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-section">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h2>Senior frontend product engineer with a systems mindset.</h2>
          </div>
          <div className="two-column">
            <p>
              I&apos;m Josh Sheets, a frontend product engineer based in
              Pennsylvania, with a BS in Computer Science from Regis University.
              I bring a product-focused, design-aware approach to frontend
              engineering, with experience leading teams, shaping platform
              architecture, and shipping customer-facing experiences that
              balance usability, performance, and reliability.
            </p>
            <p>
              Before software, I served in the United States Army for four
              years. That experience taught me to lead under pressure, work
              across functions, and keep quality high in fast-moving
              environments. I&apos;m married with a four-year-old daughter, and
              outside of work I enjoy watching movies, playing table tennis, and
              card games with friends and family.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <p className="eyebrow">Core strengths</p>
            <h2>
              Product sense, frontend leadership, and execution discipline.
            </h2>
          </div>
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <article key={strength.title} className="strength-card">
                <div className="strength-index">0{index + 1}</div>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <p className="eyebrow">Case studies</p>
            <h2>
              Longer-form examples of product leadership and frontend execution.
            </h2>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map(caseStudy => (
              <article key={caseStudy.title} className="case-study-card">
                <div className="project-role">{caseStudy.role}</div>
                <h3>{caseStudy.title}</h3>
                <div className="case-study-block">
                  <span>Problem</span>
                  <p>{caseStudy.problem}</p>
                </div>
                <div className="case-study-block">
                  <span>Approach</span>
                  <p>{caseStudy.approach}</p>
                </div>
                <div className="case-study-block">
                  <span>Outcome</span>
                  <p>{caseStudy.outcome}</p>
                </div>
                <div className="project-tags">
                  {caseStudy.stack.map(tag => (
                    <span key={`${caseStudy.title}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="content-section">
          <div className="section-header">
            <p className="eyebrow">Selected work</p>
            <h2>Recent product and platform work.</h2>
            <p className="section-note">
              Selected private enterprise work summarized without screenshots to
              protect customer and product confidentiality while highlighting
              the product problem, the design decisions, and the impact
              delivered. Additional proof and context are available in the
              resume linked below.
            </p>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article key={project.title} className="project-card">
                <div className="project-meta">{project.category}</div>
                <h3>{project.title}</h3>
                <div className="project-role">{project.role}</div>
                <p className="project-summary">{project.challenge}</p>
                <div className="project-impact">
                  <span>Outcome</span>
                  <p>{project.outcome}</p>
                </div>
                <div className="project-tags">
                  {project.stack.map(tag => (
                    <span key={`${project.title}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <p className="eyebrow">Proof</p>
            <h2>Concrete outcomes that show product judgment in motion.</h2>
          </div>

          <div className="proof-grid">
            {proofPoints.map(point => (
              <article key={point.title} className="proof-card">
                <span className="proof-value">{point.value}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-header">
            <p className="eyebrow">Recent product work</p>
            <h2>
              Frontend systems thinking applied to real customer problems.
            </h2>
          </div>

          <div className="experience-list">
            {experience.map(item => (
              <article key={item.title} className="experience-item">
                <div className="experience-body">
                  <h3>{item.title}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-header">
            <p className="eyebrow">Impact</p>
            <h2>Focused on durable UX and maintainable product delivery.</h2>
          </div>
          <div className="impact-grid">
            {impact.map(point => (
              <div key={point} className="impact-item">
                <span className="impact-mark">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="principles" className="content-section">
          <div className="section-header">
            <p className="eyebrow">Principles</p>
            <h2>How I approach product work.</h2>
          </div>
          <div className="principles-grid">
            {principles.map(principle => (
              <div key={principle} className="principle-card">
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-panel section-card">
          <div>
            <p className="eyebrow">Open to opportunities</p>
            <h2>
              Frontend product roles with thoughtful, high-ownership teams.
            </h2>
          </div>
          <div className="cta-actions">
            <a
              className="primary-button"
              href="https://www.linkedin.com/in/joshua-sheets"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="secondary-button" href="mailto:jsheets245@gmail.com">
              jsheets245@gmail.com
            </a>
            <a className="secondary-button" href="tel:5128200584">
              (512) 820-0584
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
