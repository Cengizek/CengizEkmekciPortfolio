  function Projects() {
  const projects = [
    {
      id: 1,
      title: "MANGO - Food Ordering Platform",
      description: "A full-stack web application that allows users to place food orders. Developed using .NET Web API with Visual Studio 2022 as the primary development environment, and SQL Server Management Studio for robust database management.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      technologies: [".NET Web API", "Visual Studio 2022", "SQL Server", "Database Management"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "April 2025 - June 2025"
    },
    {
      id: 2,
      title: "YUMMY - E-commerce Platform",
      description: "A comprehensive full-stack e-commerce application developed using .NET Blazor with Visual Studio 2022. Features integrated payment gateway via Stripe platform and SQL Server Management Studio for database management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: [".NET Blazor", "Visual Studio 2022", "SQL Server", "Stripe", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "March 2025 - May 2025"
    },
    {
      id: 3,
      title: "HAIRCUTTERMS - Barber Shop Website",
      description: "A full-stack React project developed collaboratively with three teammates for a Software Engineering course. The comprehensive barber shop website was completed over approximately 100-120 days, featuring various functionalities.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "Team Collaboration", "Full-Stack Development"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "April 2024 - June 2024"
    },
    {
      id: 4,
      title: "School Management System",
      description: "Backend functionalities for a school management site developed during internship at SMARTERA. Implemented using Java Spring Boot with core features like user authentication, CRUD operations, and secure data handling.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop",
      technologies: ["Java", "Spring Boot", "JPA/Hibernate", "Spring Security", "Database Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "July 2025 - August 2025"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            meaningful digital experiences
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 hover:text-gray-800 font-medium text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;