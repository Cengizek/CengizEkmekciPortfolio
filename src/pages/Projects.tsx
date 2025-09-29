import { useEffect, useMemo, useState } from "react";
  function Projects() {
  // simple fade/slide classes
  const cardHover = "hover:shadow-2xl hover:-translate-y-1 transition-all duration-300";
  const projects = [
    {
      id: 1,
      title: "CengizEkmekciPortfolio",
      description: "My personal portfolio built with React, TypeScript, Vite and Tailwind CSS. Deployed on Vercel.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Vite", "Tailwind", "Vercel"],
      liveUrl: "https://cengiz-ekmekci-portfolio.vercel.app/",
      githubUrl: "https://github.com/Cengizek/CengizEkmekciPortfolio",
      featured: true,
      period: "2025"
    },
    {
      id: 2,
      title: "HAIRCUTTERMS",
      description: "A comprehensive barber shop website built as a full‑stack React project with a team of four.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "Team Collaboration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "2024"
    },
    {
      id: 3,
      title: "School Management Backend",
      description: "Backend features for a school management system using Java Spring Boot with JPA/Hibernate and Spring Security.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop",
      technologies: ["Java", "Spring Boot", "JPA/Hibernate", "Spring Security"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "2025"
    },
    
  ];

  // ---- Dynamic GitHub repos ----
  type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    topics?: string[];
    homepage?: string | null;
  };

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setLoadingRepos(true);
        const resp = await fetch(
          "https://api.github.com/users/Cengizek/repos?per_page=100&sort=updated",
          {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        if (!resp.ok) throw new Error("Failed to fetch repos");
        const data = (await resp.json()) as Repo[];
        if (isMounted) setRepos(data);
      } catch {
        if (isMounted) setRepos([]);
      } finally {
        if (isMounted) setLoadingRepos(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const dotnetRepos = useMemo(
    () =>
      repos.filter((r) => {
        const text = `${r.name} ${r.description ?? ""}`.toLowerCase();
        const hasTopic = (r.topics || []).some((t) =>
          ["dotnet", "csharp", "blazor"].includes(t.toLowerCase())
        );
        return (
          hasTopic ||
          text.includes(".net") ||
          text.includes("dotnet") ||
          text.includes("blazor") ||
          (r.language || "").toLowerCase() === "c#"
        );
      }),
    [repos]
  );

  const otherRepos = useMemo(
    () =>
      repos
        .filter((r) => !dotnetRepos.some((d) => d.id === r.id))
        .slice(0, 18),
    [repos, dotnetRepos]
  );

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

        {/* Featured Projects (curated) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group ${cardHover}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-indigo-900/40 text-blue-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
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
                      className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* .NET / Blazor from GitHub */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">.NET & Blazor Repositories</h2>
          {loadingRepos ? (
            <p className="text-gray-600">Loading repositories…</p>
          ) : dotnetRepos.length === 0 ? (
            <p className="text-gray-600">No .NET or Blazor repositories found yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dotnetRepos.map((repo) => (
                <div key={repo.id} className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group ${cardHover}`}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{repo.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="flex space-x-3">
                      {repo.homepage ? (
                        <a href={repo.homepage} className="text-blue-600 dark:text-indigo-400 hover:text-blue-800 dark:hover:text-indigo-300 font-medium text-sm">Live Demo</a>
                      ) : null}
                      <a href={repo.html_url} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium text-sm">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Other GitHub repos */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherRepos.map((repo) => (
              <div key={project.id} className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group ${cardHover}`}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{repo.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{repo.description || "No description provided."}</p>
                  <div className="flex space-x-3">
                    {repo.homepage ? (
                      <a href={repo.homepage} className="text-blue-600 dark:text-indigo-400 hover:text-blue-800 dark:hover:text-indigo-300 font-medium text-sm">Live Demo</a>
                    ) : null}
                    <a href={repo.html_url} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium text-sm">GitHub</a>
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