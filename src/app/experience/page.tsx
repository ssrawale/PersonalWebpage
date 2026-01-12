interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      title: 'Technical Business Development Intern',
      company: 'SenseICs Corporation',
      location: 'Columbus, OH',
      period: 'August 2021 - December 2025',
      description: [
        '• Conduct semiconductor landscape research and analysis for long-range LiDAR system-on-chip in defense/aerospace sectors to tailor and validate market fit',
        '• Create bridges across teams via effective and targeted communication by partnering with technical and business units to understand system constraints, prioritize features, and maintain technical feasibility',
        '• Leverage knowledge of integrated circuit design to optimize product development workflows and processes'
      ]
    },
    {
      title: 'Technical Program Manager Intern',
      company: 'Microsoft',
      location: 'Redmond, WA',
      period: 'August 2021 - December 2025',
      description: [
        '• Interned on Emerging Security Assurance team within Microsoft Security CISO Organization',
        '• Developed Systems Requirement Document (strategic plan, user stories, requirements, system architecture) for development of AI-powered tool to enhance procurement of solutions for security gaps',
        '• Created standardized scoring rubric for rating security gaps'
      ]
    },
    {
      title: 'Technology Analyst Intern',
      company: 'Nationwide Insurance',
      location: 'Columbus, OH',
      period: 'August 2021 - December 2025',
      description: [
        '• Collaborated with business stakeholders to develop 100+ story cards for development and quality engineering',
        '• Maintained Agile sprints using Jira software and implemented cross-team check-ins resulting in 25% increase in on-time delivery'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Nationwide Insurance',
      location: 'Columbus, OH',
      period: 'August 2021 - December 2025',
      description: [
        '• Refactored Account Register API from Spring to Spring Boot resulting in 35% reduction in build complexity by leveraging Maven, Liquibase, and Docker'
      ]
    },
  ];

  const education: Experience[] = [
    {
      title: 'The Ohio State University',
      company: 'BS Geographic Information Science',
      location: 'Columbus, OH',
      period: 'August 2021 - December 2025',
      description: [
        '• Society of Women Engineers',
        '• Association of Computing Machinery, Women\'s Chapter'
        ]
    },
  ];

  const extracurriculars: Experience[] = [
    {
      title: 'Buckeye AutoDrive',
      company: 'Lead Project Manager',
      location: 'Ohio State University',
      period: 'August 2023 - December 2025',
      description: [
        '• Lead a team of 90+ members in the development of an autonomous vehicle adhering General Motors and SAE Level 4 Automation standards',
        '• Head writing system requirement and validation reports while ensuring alignment across technical pipelines by leveraging domain knowledge of sensors and autonomous technologies'
      ]
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">Education</h1>
        </div>

        {/* Education Section */}
        <div className="space-y-8">
          {education.map((exp, index) => (
            <div
              key={index}
              className="rounded-md bg-zinc-100 p-6 hover:border-accent-blue transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h2 className="text-accent-blue text-2xl font-semibold">{exp.title}</h2>
                  <h3 className="text-lg text-text-secondary italic mt-1">{exp.company}</h3>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <span className="text-sm font-medium block">
                    {exp.period}
                  </span>
                  <span className="text-text-secondary text-sm block mt-1 italic">
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-1 mt-3">
                {exp.description.map((item, idx) => (
                  <p key={idx} className="text-text-secondary leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Experiences</h2>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-md bg-zinc-100 p-6 hover:border-accent-blue transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h2 className="text-accent-blue text-2xl font-semibold">{exp.title}</h2>
                  <h3 className="text-lg text-text-secondary italic mt-1">{exp.company}</h3>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <span className="text-sm font-medium block">
                    {exp.period}
                  </span>
                  <span className="text-text-secondary text-sm block mt-1 italic">
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-1 mt-3">
                {exp.description.map((item, idx) => (
                  <p key={idx} className="text-text-secondary leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Extracurriculars</h2>
        </div>

        {/* Extracurriculars Section */}
        <div className="space-y-8">
          {extracurriculars.map((exp, index) => (
            <div
              key={index}
              className="rounded-md bg-zinc-100 p-6 hover:border-accent-blue transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h2 className="text-accent-blue text-2xl font-semibold">{exp.title}</h2>
                  <h3 className="text-lg text-text-secondary italic mt-1">{exp.company}</h3>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <span className="text-sm font-medium block">
                    {exp.period}
                  </span>
                  <span className="text-text-secondary text-sm block mt-1 italic">
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-1 mt-3">
                {exp.description.map((item, idx) => (
                  <p key={idx} className="text-text-secondary leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}